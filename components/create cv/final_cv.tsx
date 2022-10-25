import { Button } from "@mui/material";
import {
  PDFViewer,
  Page,
  Document,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { useFormikContext } from "formik";
import { CVInformation } from "./cv_form";
import styles from "./final_cv.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DownloadIcon from "@mui/icons-material/Download";

const pdfStyles = StyleSheet.create({
  page: { backgroundColor: "tomato" },
  section: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Helvetica",
    height: "100%",
    gap: "24px",
  },
  leftColumn: {
    width: "35%",
    color: "white",
    padding: "16px 8px",
    backgroundColor: "#dc143c",
    display: "flex",
    flexDirection: "column",
    marginRight: "24px",
  },
  leftAndRightColumnHeaders: {
    fontSize: "19px",
    margin: "8px 0px",
  },
  languageAndSkillAndInterest: {
    fontSize: "12px",
    textTransform: "capitalize",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "16px",
    paddingRight: "16px",
    textAlign: "center",
  },
  name: {
    fontSize: "25px",
    fontFamily: "Helvetica-Bold",
  },
  job: {
    fontSize: "20px",
    textTransform: "capitalize",
    margin: "6px 0px",
  },
  location: {
    fontSize: "14px",
    margin: "4px 0px",
  },
  email: {
    fontSize: "12px",
    textTransform: "lowercase",
    margin: "4px 0px",
  },
  singleEducation: {
    display: "flex",
    flexDirection: "column",
  },
  majorAndUniversity: {
    fontSize: "15px",
    textTransform: "capitalize",
  },
  dates: {
    fontSize: "10px",
    color: "grey",
  },
  gpa: {
    fontSize: "12px",
    fontWeight: "bold",
  },
});

export default function FinalCV(props: any) {
  const { values, submitForm } = useFormikContext<CVInformation>();

  const { goBack } = props;
  return (
    <div className={styles.mainPage}>
      <div className={styles.info}>
        <span className={styles.title}>
          {values.personalInformation.firstName}&apos;s CV
        </span>
        <div className={styles.actionButtons}>
          <Button
            variant="outlined"
            startIcon={<KeyboardBackspaceIcon />}
            onClick={goBack}
          >
            Edit CV
          </Button>
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Download
          </Button>
        </div>
      </div>
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page>
            <View style={pdfStyles.section}>
              <View style={pdfStyles.leftColumn}>
                <Text style={pdfStyles.leftAndRightColumnHeaders}>
                  Languages
                </Text>
                {values.languages.map((languageElement, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      marginBottom: 4,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ marginHorizontal: 8 }}>•</Text>
                    <Text style={pdfStyles.languageAndSkillAndInterest}>
                      {languageElement.language} : {languageElement.level}
                    </Text>
                  </View>
                ))}

                <Text style={pdfStyles.leftAndRightColumnHeaders}>Skills</Text>
                {values.skills.map((skill, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      marginBottom: 4,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ marginHorizontal: 8 }}>•</Text>
                    <Text style={pdfStyles.languageAndSkillAndInterest}>
                      {skill}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={pdfStyles.rightColumn}>
                <Text style={pdfStyles.name}>
                  {values.personalInformation.firstName}{" "}
                  {values.personalInformation.lastName}
                </Text>
                <Text style={pdfStyles.job}>
                  {values.personalInformation.job}
                </Text>
                <Text style={pdfStyles.location}>
                  {values.personalInformation.location}
                </Text>
                <Text style={pdfStyles.email}>
                  {values.personalInformation.email}
                </Text>
                <Text style={pdfStyles.leftAndRightColumnHeaders}>
                  Education
                </Text>
                {values.educationList.map((education, index) => {
                  return (
                    <View key={index} style={pdfStyles.singleEducation}>
                      <Text style={pdfStyles.majorAndUniversity}>
                        {education.major} - {education.university}
                      </Text>
                      <Text style={pdfStyles.dates}>
                        {education.from}- {education.to}
                      </Text>
                      <Text style={pdfStyles.gpa}>GPA: {education.gpa}</Text>
                    </View>
                  );
                })}
                <Text style={pdfStyles.leftAndRightColumnHeaders}>
                  Experience
                </Text>
                {values.experienceList.map((experience, index) => {
                  return (
                    <View key={index} style={pdfStyles.singleEducation}>
                      <Text style={pdfStyles.majorAndUniversity}>
                        {experience.jobTitle} - {experience.company}
                      </Text>
                      <Text style={pdfStyles.dates}>
                        {experience.from}-{" "}
                        {experience.isCurrent ? "Current" : experience.to}
                      </Text>
                      {experience.points.map((point, index) => (
                        <View
                          key={index}
                          style={{
                            flexDirection: "row",
                            marginBottom: 4,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ marginHorizontal: 8 }}>•</Text>
                          <Text style={pdfStyles.languageAndSkillAndInterest}>
                            {point}
                          </Text>
                        </View>
                      ))}
                    </View>
                  );
                })}
                <Text style={pdfStyles.leftAndRightColumnHeaders}>
                  Interests
                </Text>
                {values.interests.map((interest, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      marginBottom: 4,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ marginHorizontal: 8 }}>•</Text>
                    <Text style={pdfStyles.languageAndSkillAndInterest}>
                      {interest}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
