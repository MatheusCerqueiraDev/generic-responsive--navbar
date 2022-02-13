import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import styles from "./style.module.scss";

interface SidebarProps {
  closeSidebar: () => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar, toggleSidebar }: SidebarProps) => {
  return (
    <aside className={isOpen ? styles.SidebarContainer : styles.SidebarHidden}>
      <span onClick={closeSidebar} className={styles.mobileIcon}>
        <MdOutlineClose />
      </span>
      <div className={styles.SidebarWrapper}>
        <ul className={styles.SiderbarMenu}>
          <li className={styles.SidebarItem}>
            <Link href="/">
              <a onClick={closeSidebar} className={styles.SidebarLink}>
                aaaa
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
