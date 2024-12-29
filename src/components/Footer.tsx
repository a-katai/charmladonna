import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className="flex flex-col py-8 px-8">
      <div className="flex flex-col items-start">
        <div className="text-sm text-gray-500">© 2025 Charm LaDonna. All rights reserved.</div>
        <a href="https://www.katai.io" target="_blank" rel="noopener noreferrer" className={styles.siteCredit}>
          Site by Katai
        </a>
      </div>
    </footer>
  )
} 