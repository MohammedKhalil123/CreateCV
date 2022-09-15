import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PdfRealView = dynamic(() => import("./pdf_page"), {
  ssr: false,
});

const View = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return <PdfRealView></PdfRealView>;
};

export default View;
