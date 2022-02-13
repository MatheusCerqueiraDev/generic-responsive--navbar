import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "../Sidebar";
import styles from "./style.module.scss";

interface NavbarProps {
  closeSidebar: () => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar = ({ closeSidebar, isOpen, toggleSidebar }: NavbarProps) => {
  return (
    <header className={styles.header}>
      {isOpen ? (
        <Sidebar
          isOpen={isOpen}
          closeSidebar={closeSidebar}
          toggleSidebar={toggleSidebar}
        />
      ) : (
        ""
      )}

      <nav className={styles.navContainer}>
        <h1>
          <Link href="/">
            <a>whaaasssssup</a>
          </Link>
        </h1>
        <span onClick={toggleSidebar} className={styles.mobileIcon}>
          {isOpen ? <MdOutlineClose size={25} /> : <FaBars size={25} />}
        </span>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>whaaasssssup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
