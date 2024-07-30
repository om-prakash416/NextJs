"use client"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"
import Styles from '@/app/ui/navbar/navbar.module.css'
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <div className={Styles.container}>
          <div className={Styles.title}>{pathname.split("/").pop()}</div> 
          <div className={Styles.menu}>
              <div className={Styles.search}>
                  <MdSearch />
                  <input type="text" placeholder="Search..." className={Styles.input}/>
              </div>
              <div className={Styles.icon}>
                  <MdOutlineChat size={20} />
                  <MdNotifications  size={20} />
                  <MdPublic size={20}/>
              </div>
          </div>
    </div>
  )
}

export default Navbar
