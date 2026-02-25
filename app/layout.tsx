// layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/Navigation'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HealthHub - Online Healthcare Services',
  description: 'Complete online healthcare services platform with doctors, appointments, medical records, pharmacy, and telemedicine consultation',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Lấy giá trị từ biến môi trường để vượt qua vòng quét của GitGuardian
  const katalonCode = process.env.NEXT_PUBLIC_KATALON_CODE;

  return (
    <html lang="en">
      <head>
        {/* Chỉ render script nếu biến môi trường tồn tại để tránh lỗi undefined */}
        {katalonCode && (
          <script
            defer
            async
            client-code={katalonCode}
            src="https://static.katalon.com/libs/traffic-agent/v1/traffic-agent.min.js"
          />
        )}
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}