"use client"

import "leaflet/dist/leaflet.css"
import { useEffect, useRef, useState } from "react"
import { Location } from "@/types"
import { locations, REGION_COLORS } from "@/data/locations"
import LocationPanel from "./LocationPanel"
import RegionFilter from "./RegionFilter"

export default function Map() {
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [selected, setSelected] = useState<Location | null>(null)
  const [activeRegion, setActiveRegion] = useState("all")

  useEffect(() => {
    if (mapRef.current) return

    const initMap = async () => {
      const L = (await import("leaflet")).default

      const map = L.map("map", {
        center: [20, 80],
        zoom: 3,
        zoomControl: false,
        attributionControl: false,
      })

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        { subdomains: "abcd", maxZoom: 19 }
      ).addTo(map)

      L.control.zoom({ position: "bottomright" }).addTo(map)

      mapRef.current = map
      renderMarkers(L, map, "all")
    }

    initMap()
  }, [])

  const renderMarkers = (L: any, map: any, region: string) => {
    markersRef.current.forEach(m => m.remove())
    markersRef.current = []

    const filtered = region === "all"
      ? locations
      : locations.filter(l => l.region === region)

    filtered.forEach(loc => {
      const color = REGION_COLORS[loc.region]

      const icon = L.divIcon({
        className: "",
        html: `
          <div style="
            width:14px; height:14px; border-radius:50%;
            background:${color};
            border: 2px solid ${color}88;
            box-shadow: 0 0 0 4px ${color}22;
            cursor:pointer;
            transition: transform 0.15s;
          "></div>
        `,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      const marker = L.marker(loc.coordinates, { icon })
        .addTo(map)
        .bindTooltip(loc.name, {
          permanent: false,
          direction: "top",
          offset: [0, -10],
          className: "history-tooltip",
        })
        .on("click", () => setSelected(loc))

      markersRef.current.push(marker)
    })
  }

  const handleRegionChange = async (region: string) => {
    setActiveRegion(region)
    setSelected(null)
    if (!mapRef.current) return
    const L = (await import("leaflet")).default
    renderMarkers(L, mapRef.current, region)
  }

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
        .leaflet-control-zoom a:hover {
          background: #374151 !important;
          color: white !important;
        }
      `}</style>

      <div id="map" style={{ width: "100%", height: "100%" }} />

      <RegionFilter active={activeRegion} onChange={handleRegionChange} />

      {/* Title */}
      <div style={{
        position: "absolute", bottom: 24, left: 16, zIndex: 1000,
      }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.5px" }}>
          WORLD HISTORY MAP · PROTOTYPE
        </p>
      </div>

      <LocationPanel location={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
