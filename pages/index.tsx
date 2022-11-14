import Head from "next/head";
import styles from "../components/home/home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Home</title>
      </Head>
      <section>First</section>
      <section>First</section>
      <section>First</section>
      <section>First</section>
      <section>First</section>
    </div>
  );
}
