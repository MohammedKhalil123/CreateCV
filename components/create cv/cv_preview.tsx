import { Page, PDFViewer, Document } from "@react-pdf/renderer";
import { useFormikContext } from "formik";
import { CVInformation } from "./cv_form";
import styles from "./cv_preview.module.css";

export default function CVPreview() {
  const { values, submitForm } = useFormikContext<CVInformation>();

  return (
    <div className={styles.pageContainer}>
      <section className={styles.page}>
        <div className={styles.leftColumn}>
          <h3 className={styles.leftColumnTitle}>Languages</h3>

          <li>{values.languages[0].language}</li>

          <h3 className={styles.leftColumnTitle}>Interests</h3>
          <h3 className={styles.leftColumnTitle}>Skills</h3>
        </div>
        <div className={styles.secondColumn}>
          <span className={styles.name}>
            {values.personalInformation.firstName}{" "}
            {values.personalInformation.lastName}
          </span>
          <span className={styles.job}>{values.personalInformation.job}</span>
          <span className={styles.location}>
            {values.personalInformation.location}
          </span>
          <hr style={{ width: "100%" }}></hr>
          <h1>Education</h1>
          <h1>Experience</h1>
        </div>
      </section>
    </div>
  );
}
