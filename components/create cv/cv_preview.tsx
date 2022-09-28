import { Page, PDFViewer, Document } from "@react-pdf/renderer";
import styles from "./cv_preview.module.css";

export default function CVPreview() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.page}></section>
    </div>
  );
}
