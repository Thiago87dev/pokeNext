import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pokeapi_footer}>
        <Link target="_blank" href="https://pokeapi.co/">
          <Image
            src="/images/poke.png"
            width={120}
            height={120}
            alt="pokeapi"
          />
        </Link>
      </div>
      <div>
        <p>
          <span>PokeNext</span> &copy; 2023
        </p>
      </div>
      <div>
        <p className={styles.thiago}>
          criado por <span>Thiago Alves</span>
        </p>
        <ul className={styles.social_list}>
          <li>
            <Link href="https://github.com/Thiago87dev" target="_blank"><FaGithub/></Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/thiago-alves-010915274/" target="_blank"><FaLinkedin/></Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/thiagopaulista87/" target="_blank"><FaInstagram/></Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
