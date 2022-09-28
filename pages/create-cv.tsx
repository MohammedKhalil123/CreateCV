import CVPreview from "../components/create cv/cv_preview";
import styles from "../components/create cv/create_cv.module.css";
import CVForm from "../components/create cv/cv_form";
import Head from "next/head";
import { useState } from "react";
import ChooseTemplate from "../components/create cv/choose_template";
import FinalCV from "../components/create cv/final_cv";

const CreateCVPage = () => {
  const [index, setIndex] = useState<number>(0);

  const goBack = () => {
    setIndex((index) => index - 1);
  };

  const goNext = () => {
    setIndex((index) => index + 1);
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Create your CV</title>
      </Head>
      {index === 0 ? <ChooseTemplate goNext={goNext} /> : null}
      {index === 1 ? <CVForm goNext={goNext} goBack={goBack} /> : null}
      {index === 1 ? <CVPreview /> : null}
      {index === 2 ? <FinalCV goBack={goBack} /> : null}
    </main>
  );
};

export default CreateCVPage;
