import { Page, PDFViewer, Document } from "@react-pdf/renderer";
import { CVInformation } from "./cv_form";
import styles from "./cv_preview.module.css";

export default function CVPreview(cvInfo: CVInformation) {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.page}>
        <div>{cvInfo.personalInformation.firstName}</div>
      </section>
    </div>
  );
}
