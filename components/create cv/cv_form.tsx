import { Button } from "@mui/material";
import styles from "./cv_form.module.css";
import EducationInfo from "./education_info";
import ExperienceInfo from "./experience_info";
import PersonalInfo from "./personal_info";

export default function CVForm() {
  return (
    <section className={styles.formContainer}>
      <span className={styles.title}>Create CV</span>
      <PersonalInfo />
      <EducationInfo />
      <ExperienceInfo />
      <div className={styles.actionButtons}>
        <Button variant="contained" size="large">
          Generate
        </Button>
      </div>
    </section>
  );
}
