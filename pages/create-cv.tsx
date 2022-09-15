import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PdfRealView = dynamic(
  () => import("../components/home/pdf page/pdf_view"),
  {
    ssr: false,
  }
);

const CreateCVPage = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <PdfRealView></PdfRealView>
    </div>
  );
};

export default CreateCVPage;
