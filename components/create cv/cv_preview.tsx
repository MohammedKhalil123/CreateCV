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
          <span className={styles.leftColumnHeaders}>Languages</span>

          {values.languages.map((languageElement, index) => (
            <li key={index} className={styles.languageElement}>
              {languageElement.language} : {languageElement.level}
            </li>
          ))}

          <span className={styles.leftColumnHeaders}>Skills</span>

          {values.skills.map((skill, index) => (
            <li key={index} className={styles.skillElement}>
              {skill}
            </li>
          ))}
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
          <span className={styles.email}>
            {values.personalInformation.email}
          </span>
          <hr style={{ width: "100%", margin: "0px" }}></hr>
          <span className={styles.rightColumnHeaders}>Education</span>
          <div className={styles.educationContainer}>
            {values.educationList.map((education, index) => {
              return (
                <div key={index} className={styles.singleEducation}>
                  <span className={styles.majorAndUniversity}>
                    {education.major} - {education.university}
                  </span>
                  <span className={styles.dates}>
                    {education.from}- {education.to}
                  </span>
                  <span className={styles.gpa}>GPA: {education.gpa}</span>
                </div>
              );
            })}
          </div>

          <span className={styles.rightColumnHeaders}>Experience</span>
          <div className={styles.experienceContainer}>
            {values.experienceList.map((experience, index) => {
              return (
                <div key={index} className={styles.singleEducation}>
                  <span className={styles.majorAndUniversity}>
                    {experience.jobTitle} - {experience.company}
                  </span>
                  <span className={styles.dates}>
                    {experience.from}-{" "}
                    {experience.isCurrent ? "Current" : experience.to}
                  </span>
                  <div className={styles.experiencePoints}>
                    {experience.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <span className={styles.rightColumnHeaders}>Interests</span>
          {values.interests.map((interest, index) => (
            <li key={index} className={styles.interestElement}>
              {interest}
            </li>
          ))}
        </div>
      </section>
    </div>
  );
}
