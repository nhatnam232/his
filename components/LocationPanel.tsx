"use client"
import { Location } from "@/types"
import { REGION_COLORS, REGION_LABELS } from "@/data/locations"

const TYPE_LABELS: Record<string, string> = {
  empire: "Đế chế",
  kingdom: "Vương quốc",
  civilization: "Văn minh",
  battle: "Trận đánh",
  monument: "Di tích",
}

interface Props {
  location: Location | null
  onClose: () => void
}

export default function LocationPanel({ location, onClose }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: "320px",
        background: "#111827",
        borderLeft: "0.5px solid rgba(255,255,255,0.08)",
        transform: location ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {location && (
        <>
          {/* Header */}
          <div style={{ padding: "20px 20px 0", position: "relative" }}>
            <button
              onClick={onClose}
              style={{
                position: "absolute", top: 16, right: 16,
                width: 28, height: 28, borderRadius: "50%",
                border: "0.5px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer", fontSize: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >✕</button>

            {/* Type badge */}
            <span style={{
              display: "inline-block",
              fontSize: 11, padding: "3px 10px",
              borderRadius: 20, marginBottom: 8,
              background: `${REGION_COLORS[location.region]}22`,
              color: REGION_COLORS[location.region],
              fontWeight: 500,
            }}>
              {TYPE_LABELS[location.type]}
            </span>

            <h2 style={{ fontSize: 20, fontWeight: 500, color: "#f9fafb", marginBottom: 4 }}>
              {location.name}
            </h2>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>
              {location.era} · {REGION_LABELS[location.region]}
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20 }}>
              {location.description}
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "0 20px" }} />

          {/* Timeline */}
          <div style={{ padding: "16px 20px" }}>
            <p style={{
              fontSize: 11, fontWeight: 500,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}>
              Cột mốc lịch sử
            </p>

            {location.timeline.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 12,
                padding: "10px 0",
                borderBottom: i < location.timeline.length - 1
                  ? "0.5px solid rgba(255,255,255,0.06)"
                  : "none",
              }}>
                <span style={{
                  fontSize: 12, fontWeight: 500,
                  color: REGION_COLORS[location.region],
                  minWidth: 52, paddingTop: 1,
                  flexShrink: 0,
                }}>
                  {item.year}
                </span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>

          {/* Tags */}
          {location.tags && (
            <div style={{ padding: "0 20px 20px", display: "flex", gap: 6, flexWrap: "wrap" }}>
              {location.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: 11, padding: "3px 8px",
                  borderRadius: 20,
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.35)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
