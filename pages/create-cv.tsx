import CVPreview from "../components/create cv/cv_preview";
import styles from "../components/create cv/create_cv.module.css";
import CVForm from "../components/create cv/cv_form";
import Head from "next/head";

const CreateCVPage = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Create your CV</title>
      </Head>
      <CVForm />
      <CVPreview />
    </main>
  );
};

export default CreateCVPage;
