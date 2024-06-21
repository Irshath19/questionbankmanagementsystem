import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PdfList from './Years/Agriyear1';
function Pdfviewer() {
  const [numPages, setNumPages] = useState();
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={PdfList} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Pdfviewer;