import Link from "next/link";
import Image from "next/image";

import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="pokeball"
        />
        </Link>
        <Link href='/' className={styles.linkh1}><h1 >PokeNext</h1></Link>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
