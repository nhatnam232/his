import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "World History Map",
  description: "Khám phá lịch sử thế giới qua bản đồ tương tác",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }}>
        {children}
      </body>
    </html>
  )
}
