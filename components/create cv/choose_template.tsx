import { Button } from "@mui/material";
import { useState } from "react";

import styles from "./choose_template.module.css";

export default function ChooseTemplate(props: any) {
  const { goNext } = props;
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

      <Button
        variant="contained"
        sx={{ fontSize: "25px" }}
        onClick={goNext}
        disabled={!selectedTemplate}
      >
        Choose Template
      </Button>
    </main>
  );
}
