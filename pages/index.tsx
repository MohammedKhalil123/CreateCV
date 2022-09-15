import { Button } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

import styles from "../components/home/home.module.css";

const Home: NextPage = () => {
  return (
    <main id="main" className={styles.main}>
      <Link href="/create-cv">
        <Button variant="contained">Create your CV</Button>
      </Link>
    </main>
  );
};

export default Home;
