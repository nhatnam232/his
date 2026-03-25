import { Location } from "@/types"

export const REGION_COLORS: Record<string, string> = {
  "southeast-asia": "#1d9e75",
  "europe": "#d85a30",
  "east-asia": "#ba7517",
  "middle-east": "#7f77dd",
  "africa": "#d85a30",
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

export const locations: Location[] = [
  {
    id: "daiviet",
    name: "Đại Việt",
    type: "kingdom",
    region: "southeast-asia",
    coordinates: [21.028, 105.854],
    era: "938 – 1804 SCN",
    description: "Nhà nước phong kiến tồn tại hơn 800 năm, trải qua các triều đại Ngô, Đinh, Lý, Trần, Hậu Lê. Trung tâm quyền lực tại Thăng Long — Hà Nội ngày nay.",
    timeline: [
      { year: "938", event: "Ngô Quyền thắng trận Bạch Đằng, kết thúc 1000 năm Bắc thuộc" },
      { year: "1010", event: "Lý Thái Tổ dời đô về Thăng Long" },
      { year: "1288", event: "Trần Hưng Đạo đánh bại Nguyên Mông lần 3 tại Bạch Đằng" },
      { year: "1427", event: "Lê Lợi đánh đuổi nhà Minh, lập triều Hậu Lê" },
      { year: "1789", event: "Quang Trung đại phá quân Thanh tại Đống Đa" },
    ],
    tags: ["phong kiến", "kháng chiến", "Thăng Long"]
  },
  {
    id: "khmer",
    name: "Đế chế Khmer",
    type: "empire",
    region: "southeast-asia",
    coordinates: [13.412, 103.867],
    era: "802 – 1431 SCN",
    description: "Một trong những đế chế hùng mạnh nhất Đông Nam Á thời trung cổ. Kinh đô Angkor là trung tâm văn minh Hindu-Phật giáo với quần thể đền đài vĩ đại nhất thế giới.",
    timeline: [
      { year: "802", event: "Jayavarman II thống nhất vùng đất, lập đế chế" },
      { year: "1113", event: "Suryavarman II khởi công xây Angkor Wat" },
      { year: "1181", event: "Jayavarman VII mở rộng đế chế đến đỉnh cực thịnh" },
      { year: "1431", event: "Quân Thái Lan chiếm Angkor, đế chế sụp đổ" },
    ],
    tags: ["Angkor Wat", "Hindu", "Phật giáo"]
  },
  {
    id: "rome",
    name: "Đế chế La Mã",
    type: "empire",
    region: "europe",
    coordinates: [41.902, 12.496],
    era: "27 TCN – 476 SCN",
    description: "Đế chế kiểm soát toàn bộ Địa Trung Hải, từ Anh Quốc đến Mesopotamia. Nền tảng của văn minh phương Tây — luật pháp, ngôn ngữ, kiến trúc.",
    timeline: [
      { year: "509 TCN", event: "Cộng hòa La Mã thành lập" },
      { year: "44 TCN", event: "Julius Caesar bị ám sát tại Thượng viện" },
      { year: "27 TCN", event: "Augustus trở thành Hoàng đế đầu tiên" },
      { year: "313", event: "Sắc lệnh Milan — Kitô giáo được công nhận chính thức" },
      { year: "476", event: "Đế chế Tây La Mã sụp đổ, kết thúc thời Cổ đại" },
    ],
    tags: ["La Mã", "Địa Trung Hải", "Cộng hòa"]
  },
  {
    id: "mongol",
    name: "Đế chế Mông Cổ",
    type: "empire",
    region: "east-asia",
    coordinates: [47.886, 106.905],
    era: "1206 – 1368 SCN",
    description: "Đế chế đất liền lớn nhất lịch sử nhân loại. Thành Cát Tư Hãn thống nhất các bộ lạc du mục và chinh phục từ Thái Bình Dương đến Đông Âu.",
    timeline: [
      { year: "1206", event: "Thành Cát Tư Hãn thống nhất các bộ tộc Mông Cổ" },
      { year: "1215", event: "Chiếm Trung Đô (Bắc Kinh), tiêu diệt nhà Kim" },
      { year: "1258", event: "Phá hủy Baghdad, chấm dứt Đế chế Hồi giáo Abbasid" },
      { year: "1274", event: "Tấn công Nhật Bản — bị bão Kamikaze đánh tan" },
      { year: "1368", event: "Nhà Minh nổi dậy, Mông Cổ rút khỏi Trung Quốc" },
    ],
    tags: ["du mục", "chinh phục", "Silk Road"]
  },
  {
    id: "egypt",
    name: "Ai Cập Cổ Đại",
    type: "civilization",
    region: "africa",
    coordinates: [29.979, 31.134],
    era: "3100 – 30 TCN",
    description: "Một trong bốn nền văn minh đầu tiên của nhân loại. Bên bờ sông Nile, người Ai Cập xây kim tự tháp, phát triển chữ hieroglyph và hệ thống tưới tiêu phức tạp.",
    timeline: [
      { year: "3100 TCN", event: "Vua Narmer thống nhất Thượng và Hạ Ai Cập" },
      { year: "2560 TCN", event: "Kim tự tháp Giza hoàn thành — kỳ quan thế giới cổ đại" },
      { year: "1279 TCN", event: "Ramesses II trị vì — pharaoh vĩ đại nhất trong 66 năm" },
      { year: "332 TCN", event: "Alexander Đại đế chinh phục, thành lập Alexandria" },
      { year: "30 TCN", event: "Cleopatra VII qua đời — Ai Cập thành tỉnh của La Mã" },
    ],
    tags: ["pharaoh", "kim tự tháp", "sông Nile"]
  }
]
