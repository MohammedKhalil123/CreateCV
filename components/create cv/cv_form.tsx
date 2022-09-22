import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useState } from "react";
import styles from "./cv_form.module.css";
import EducationInfo from "./education_info";
import ExperienceInfo from "./experience_info";
import PersonalInfo from "./personal_info";

interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  job: string;
}

interface ExperienceInformation {
  jobTitle: string;
  company: string;
  isCurrent: boolean;
  from: string;
  to: string;
  points: Array<string>;
}

interface EducationInformation {
  major: string;
  university: string;
  from: string;
  to: string;
  gpa: string;
}

export interface CVInformation {
  personalInformation: PersonalInformation;
  experienceList: ExperienceInformation[];
  educationList: EducationInformation[];
}

const initialValues: CVInformation = {
  personalInformation: {
    firstName: "",
    lastName: "",
    email: "",
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
      points: [],
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
};

export default function CVForm() {
  const [pageIndex, setPageIndex] = useState<number>(0);

  return (
    <section className={styles.formContainer}>
      <span className={styles.title}>Create CV</span>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={styles.form}>
          <PersonalInfo />
          <EducationInfo />
          <ExperienceInfo />
          <div className={styles.actionButtons}>
            <Button variant="contained" type="submit" size="large">
              Generate
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
