"use client"

import "leaflet/dist/leaflet.css"
import { useEffect, useRef, useState, useCallback } from "react"
import type { Map as LeafletMap, Marker, LayerGroup } from "leaflet"
import type { Location } from "@/types"
import { locations, REGION_COLORS } from "@/data/locations"
import { TILE_URL, TILE_FALLBACK, MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM } from "@/lib/constants"
import LocationPanel from "./LocationPanel"
import RegionFilter from "./RegionFilter"

export default function Map() {
  const mapRef = useRef<LeafletMap | null>(null)
  const layerGroupRef = useRef<LayerGroup | null>(null)
  const leafletRef = useRef<any>(null)
  const [selected, setSelected] = useState<Location | null>(null)
  const [activeRegion, setActiveRegion] = useState("all")
  const [loading, setLoading] = useState(true)

  const renderMarkers = useCallback((region: string) => {
    const L = leafletRef.current
    const map = mapRef.current
    const layerGroup = layerGroupRef.current
    if (!L || !map || !layerGroup) return

    layerGroup.clearLayers()

    const iconCache: Record<string, any> = {}
    const filtered = region === "all" ? locations : locations.filter(l => l.region === region)

    filtered.forEach(loc => {
      const color = REGION_COLORS[loc.region]
      if (!iconCache[color]) {
        iconCache[color] = L.divIcon({
          className: "",
          html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid ${color}88;box-shadow:0 0 0 4px ${color}22;cursor:pointer;transition:transform 0.15s;"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        })
      }

      L.marker(loc.coordinates, { icon: iconCache[color] })
        .bindTooltip(loc.name, { permanent: false, direction: "top", offset: [0, -10], className: "history-tooltip" })
        .on("click", () => setSelected(loc))
        .addTo(layerGroup)
    })
  }, [])

  useEffect(() => {
    if (mapRef.current) return

    const initMap = async () => {
      try {
        const L = (await import("leaflet")).default
        leafletRef.current = L

        const map = L.map("map", {
          center: MAP_DEFAULT_CENTER,
          zoom: MAP_DEFAULT_ZOOM,
          zoomControl: false,
          attributionControl: false,
        })

        const primaryTile = L.tileLayer(TILE_URL, { subdomains: "abcd", maxZoom: 19 })
        primaryTile.on("tileerror", () => {
          L.tileLayer(TILE_FALLBACK, { maxZoom: 19 }).addTo(map)
        })
        primaryTile.addTo(map)

        L.control.zoom({ position: "bottomright" }).addTo(map)

        // Close panel on map click
        map.on("click", () => setSelected(null))

        const layerGroup = L.layerGroup().addTo(map)
        mapRef.current = map
        layerGroupRef.current = layerGroup

        renderMarkers("all")
        setLoading(false)
      } catch (err) {
        console.error("Failed to load map:", err)
        setLoading(false)
      }
    }

    initMap()
  }, [renderMarkers])

  // ESC to close panel
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  const handleRegionChange = useCallback((region: string) => {
    setActiveRegion(region)
    setSelected(null)
    renderMarkers(region)
  }, [renderMarkers])

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "#0d1b2a" }}>
      <style>{`
        .history-tooltip {
          background: #1f2937 !important;
          border: 0.5px solid rgba(255,255,255,0.1) !important;
          color: rgba(255,255,255,0.8) !important;
          font-size: 12px !important;
          padding: 4px 10px !important;
          border-radius: 6px !important;
          box-shadow: none !important;
        }
        .history-tooltip::before { display: none !important; }
        .leaflet-control-zoom a {
          background: #1f2937 !important;
          color: rgba(255,255,255,0.6) !important;
          border-color: rgba(255,255,255,0.1) !important;
        }
        .leaflet-control-zoom a:hover { background: #374151 !important; color: white !important; }
      `}</style>

      <div id="map" style={{ width: "100%", height: "100%" }} />

      {loading && (
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center",
          background: "#0d1b2a", zIndex: 2000,
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 32, height: 32, border: "2px solid rgba(255,255,255,0.1)",
              borderTop: "2px solid #1d9e75", borderRadius: "50%",
              animation: "spin 0.8s linear infinite", margin: "0 auto 12px",
            }} />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Đang tải bản đồ...</p>
          </div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      <RegionFilter active={activeRegion} onChange={handleRegionChange} />

      <div style={{ position: "absolute", bottom: 24, left: 16, zIndex: 1000 }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.5px" }}>
          WORLD HISTORY MAP · PROTOTYPE
        </p>
      </div>

      <LocationPanel location={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
