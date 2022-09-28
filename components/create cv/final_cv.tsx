import { PDFViewer, Page, Document } from "@react-pdf/renderer";

export default function FinalCV(props: any) {
  const { goBack } = props;
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        <Page></Page>
      </Document>
    </PDFViewer>
  );
}
