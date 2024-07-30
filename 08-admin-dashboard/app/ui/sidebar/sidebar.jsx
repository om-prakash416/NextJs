import Image from "next/image";
import styles from "@/app/ui/sidebar/sidebar.module.css";
import {
  MdShoppingCart,
  RiMoneyRupeeCircleFill,
  MdDashboard,
  FaUserShield,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
const menuItem = [
  {
    title: "Users",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "User",
        path: "/dashboard/users",
        icon: <FaUserShield />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingCart />,
      },
      {
        title: "Transaction",
        path: "/dashboard/transaction",
        icon: <RiMoneyRupeeCircleFill />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/nextjs-cover.jpg"
          alt="userimage"
          width="50"
          height="50"
        />
        <div className={styles.useDetail}>
          <span className={styles.username}>Hello</span>
          <span className={styles.userTitle}>World</span>
        </div>
      </div>
      <ul className={styles.list}> 
        {menuItem.map((item) => {
          <li key={item.title}>
            <span className={styles.item}>{item.title}</span>
            {item.list.map((i) => (
              <li>
                <MenuLink item={1} key={i.tit} />
              </li>
            ))}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
