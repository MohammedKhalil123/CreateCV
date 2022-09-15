import type { NextPage } from "next";

import styles from "../components/home/home.module.css";
import View from "../components/home/pdf page/pdf_view";

const Home: NextPage = () => {
  return (
    <main id="main" className={styles.main}>
      <div style={{ width: "55%" }}>ds</div>
      <View />
    </main>
  );
};

export default Home;
