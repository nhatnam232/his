# Cách thêm địa điểm lịch sử mới

Mở file `locations.ts` và thêm object theo format sau vào mảng `locations`:

```typescript
{
  id: "unique-id",           // ID duy nhất, không dấu, dùng gạch ngang
  name: "Tên địa điểm",
  type: "empire",            // empire | kingdom | civilization | battle | monument
  region: "southeast-asia",  // southeast-asia | east-asia | europe | middle-east | africa | americas | oceania
  coordinates: [lat, lng],   // tọa độ GPS — tìm trên Google Maps
  era: "938 – 1804 SCN",     // khoảng thời gian
  description: "Mô tả 2-3 câu ngắn gọn.",
  timeline: [
    { year: "938", event: "Sự kiện xảy ra năm đó" },
    // thêm 3-7 cột mốc
  ],
  tags: ["tag1", "tag2"]     // từ khóa liên quan
}
```
