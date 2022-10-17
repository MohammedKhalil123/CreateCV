import { Button } from "@mui/material";
import { PDFViewer, Page, Document, Text } from "@react-pdf/renderer";
import { useFormikContext } from "formik";
import { CVInformation } from "./cv_form";
import styles from "./final_cv.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DownloadIcon from "@mui/icons-material/Download";

export default function FinalCV(props: any) {
  const { values, submitForm } = useFormikContext<CVInformation>();

  const { goBack } = props;
  return (
    <div className={styles.mainPage}>
      <div className={styles.info}>
        <span className={styles.title}>
          {values.personalInformation.firstName}'s CV
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
            <Text>{values.personalInformation.firstName}</Text>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
