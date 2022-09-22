import { Button } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import styles from "../components/home/home.module.css";

const Home: NextPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <main id="main" className={styles.main}>
      <h1 className={styles.title}>please select your preferred template</h1>
      <section className={styles.templateSelectionGrid}>
        {Array(10)
          .fill(0)
          .map((key, index) => {
            return (
              <div
                className={`${styles.templateElement} ${
                  selectedTemplate == index ? styles.selected : ""
                }`}
                key={key}
                onClick={() => {
                  if (selectedTemplate !== index) {
                    setSelectedTemplate(index);
                  }
                }}
              ></div>
            );
          })}
      </section>
      {selectedTemplate && (
        <Link href="/create-cv">
          <Button variant="contained" sx={{ fontSize: "25px" }}>
            Create your CV
          </Button>
        </Link>
      )}
    </main>
  );
};

export default Home;
