import CVPreview from "../components/create cv/cv_preview";
import styles from "../components/create cv/create_cv.module.css";
import CVForm, {
  CVInformation,
  LanguageLevels,
} from "../components/create cv/cv_form";
import Head from "next/head";
import { useState } from "react";
import ChooseTemplate from "../components/create cv/choose_template";
import FinalCV from "../components/create cv/final_cv";
import { Formik } from "formik";

const initialValues: CVInformation = {
  personalInformation: {
    firstName: "Mohammed",
    lastName: "Abu-Arida",
    email: "m.k.abuarida@gmail.com",
    location: "",
    job: "",
  },
  experienceList: [
    {
      jobTitle: "",
      company: "",
      isCurrent: false,
      from: "",
      to: "",
      points: [""],
    },
  ],
  educationList: [
    {
      major: "",
      university: "",
      from: "",
      to: "",
      gpa: "",
    },
  ],
  skills: [""],
  interests: [""],
  languages: [{ language: "", level: LanguageLevels.beginner }],
};

const CreateCVPage = () => {
  const [index, setIndex] = useState<number>(0);

  const goBack = () => {
    setIndex((index) => index - 1);
  };

  const goNext = () => {
    setIndex((index) => index + 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(JSON.stringify(values, null, 2));
        goNext();
      }}
    >
      <main className={styles.main}>
        <Head>
          <title>Create your CV</title>
        </Head>

        {index === 0 ? <ChooseTemplate goNext={goNext} /> : null}
        {index === 1 ? <CVForm goNext={goNext} goBack={goBack} /> : null}
        {index === 1 ? <CVPreview /> : null}
        {index === 2 ? <FinalCV goBack={goBack} /> : null}
      </main>
    </Formik>
  );
};

export default CreateCVPage;
