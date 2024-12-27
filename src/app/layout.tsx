'use client'
import EmailJSProvider from '../components/EmailJSProvider';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <EmailJSProvider>
          {children}
        </EmailJSProvider>
      </body>
    </html>
  )
} 