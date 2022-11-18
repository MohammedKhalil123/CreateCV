import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.headerStyle}>
      <div className={styles.logo}>logo</div>
      <div className={styles.linksRow}>
        <Link href="/">home</Link>
        <Link href="/#Home">pricing</Link>
        <Link href="/create-cv">about</Link>
        <Link href="/create-cv">faq</Link>
      </div>
    </header>
  );
}
