import CVPreview from "../components/create cv/cv_preview";
import styles from "../components/create cv/create_cv.module.css";
import CVForm from "../components/create cv/cv_form";
import Head from "next/head";
import { useState } from "react";

const CreateCVPage = () => {
  const [index, setIndex] = useState<number>(0);

  const goBack = () => {
    setIndex(0);
  };

  const goNext = () => {
    setIndex(1);
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Create your CV</title>
      </Head>

      {index === 0 ? <CVForm goNext={goNext} /> : null}

      {index === 0 ? <CVPreview /> : null}
    </main>
  );
};

export default CreateCVPage;
