import Image from 'next/image'
import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Charm LaDonna" 
            width={0}
            height={0}
            sizes="40vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <div className={styles.titles}>
          <span className={styles.title}>Artist.</span>
          <span className={styles.title}>Choreographer.</span>
          <span className={styles.title}>Director.</span>
        </div>
      </div>
    </header>
  )
} 