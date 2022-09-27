import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import styles from "./cv_form.module.css";
import EducationInfo from "./education_info";
import ExperienceInfo from "./experience_info";
import PersonalInfo from "./personal_info";
import SkillsAndInterests from "./skills_interests";

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

export default function CVForm(props: any) {
  const { goNext, goBack } = props;

  return (
    <section className={styles.formContainer}>
      <span className={styles.title}>Create CV</span>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values, null, 2));
          goNext();
        }}
      >
        <Form className={styles.form}>
          <PersonalInfo />
          <EducationInfo />
          <ExperienceInfo />
          <SkillsAndInterests />
          <div className={styles.actionButtons}>
            <Button
              variant="outlined"
              onClick={goBack}
              color="primary"
              size="large"
            >
              Back
            </Button>
            <Button variant="contained" type="submit" size="large">
              Generate
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
