import React from 'react'
import Sidebar from "../ui/sidebar/sidebar"
import styles from '@/app/ui/dashboard/dashboard.module.css'
import Navbar from '../ui/navbar/navbar'

const layout= ({children})=> {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
      </div>
    </div>
  );
}

export default layout
