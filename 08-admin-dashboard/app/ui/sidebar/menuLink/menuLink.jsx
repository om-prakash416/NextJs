import Link from "next/link"
import styles from '@/app/ui/sidebar/menuLink/menuLink.module.css'
const MenuLink = ({item}) => {
    console.log(items)
  return (
    <div>
      <Link href={item.path} className={styles.container}>
        {item.icon}
        {i.title}
      </Link>
    </div>
  )
}

export default MenuLink
