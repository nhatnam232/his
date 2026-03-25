"use client"

import { REGION_COLORS, REGION_LABELS } from "@/lib/constants"

const ALL_REGIONS = ["all", ...Object.keys(REGION_LABELS)]

interface Props {
  active: string
  onChange: (region: string) => void
}

export default function RegionFilter({ active, onChange }: Props) {
  return (
    <div style={{
      position: "absolute", top: 16, left: 16, zIndex: 1000,
      display: "flex", gap: 6, flexWrap: "wrap", maxWidth: "calc(100vw - 32px)",
    }}>
      {ALL_REGIONS.map(region => {
        const isActive = active === region
        const color = region === "all" ? "#6b7280" : REGION_COLORS[region]
        const label = region === "all" ? "Tất cả" : REGION_LABELS[region]
        return (
          <button
            key={region}
            onClick={() => onChange(region)}
            aria-label={`Lọc theo ${label}`}
            aria-pressed={isActive}
            style={{
              fontSize: 12, padding: "4px 12px", borderRadius: 20, cursor: "pointer",
              border: `0.5px solid ${isActive ? color : "rgba(255,255,255,0.15)"}`,
              background: isActive ? `${color}22` : "rgba(13,27,42,0.8)",
              color: isActive ? color : "rgba(255,255,255,0.45)",
              fontWeight: isActive ? 500 : 400,
              transition: "all 0.15s",
              backdropFilter: "blur(8px)",
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
