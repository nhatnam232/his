export const REGION_COLORS: Record<string, string> = {
  "southeast-asia": "#1d9e75",
  "europe": "#d85a30",
  "east-asia": "#ba7517",
  "middle-east": "#7f77dd",
  "africa": "#d4a853",
  "americas": "#ba7517",
  "oceania": "#378add",
}

export const REGION_LABELS: Record<string, string> = {
  "southeast-asia": "Đông Nam Á",
  "europe": "Châu Âu",
  "east-asia": "Châu Á",
  "middle-east": "Trung Đông",
  "africa": "Châu Phi",
  "americas": "Châu Mỹ",
  "oceania": "Đại Dương Châu",
}

export const TYPE_LABELS: Record<string, string> = {
  empire: "Đế chế",
  kingdom: "Vương quốc",
  civilization: "Văn minh",
  battle: "Trận đánh",
  monument: "Di tích",
}

export const TILE_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
export const TILE_FALLBACK = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

export const MAP_DEFAULT_CENTER: [number, number] = [20, 80]
export const MAP_DEFAULT_ZOOM = 3
