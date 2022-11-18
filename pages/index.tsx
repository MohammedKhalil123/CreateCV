import { Button } from "@mui/material";
import Head from "next/head";
import styles from "../components/home/home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <div className={styles.firstSectionLeft}>
          <span>
            The perfect website for you to start your career and get your dream
            job!
          </span>
          <Link href="/create-cv">
            <Button variant="contained" className={styles.createYourCVButton}>
              Create your CV
            </Button>
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src="/home.svg"
            height={600}
            width={700}
            alt="Job Offer Image"
          />
        </div>
      </section>
      <section>First</section>
      <section>First</section>
      <section>First</section>
    </div>
  );
}
