import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import styles from "./cv_form.module.css";
import EducationInfo from "./education_info";
import ExperienceInfo from "./experience_info";
import PersonalInfo from "./personal_info";
import SkillsAndInterests from "./skills_interests_languages";

export enum LanguageLevels {
  beginner = "Beginner",
  intermediate = "Intermediate",
  proficient = "Proficient",
  native = "Native",
}

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

interface LanguageInfo {
  language: string;
  level: LanguageLevels;
}

export interface CVInformation {
  personalInformation: PersonalInformation;
  experienceList: ExperienceInformation[];
  educationList: EducationInformation[];
  skills: string[];
  interests: string[];
  languages: LanguageInfo[];
}

export default function CVForm(props: any) {
  const { goNext, goBack } = props;

  return (
    <section className={styles.formContainer}>
      <span className={styles.title}>Create CV</span>

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
    </section>
  );
}
