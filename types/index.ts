export interface TimelineEvent {
  year: string
  event: string
}

export interface Location {
  id: string
  name: string
  type: "empire" | "kingdom" | "civilization" | "battle" | "monument"
  region: "southeast-asia" | "east-asia" | "europe" | "middle-east" | "africa" | "americas" | "oceania"
  coordinates: [number, number]
  era: string
  description: string
  timeline: TimelineEvent[]
  tags?: string[]
}
