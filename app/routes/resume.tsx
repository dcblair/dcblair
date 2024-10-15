import { Suspense } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// required for link annotations
import 'react-pdf/dist/Page/AnnotationLayer.css';
// required for text layer
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <div className="grow-1 flex size-full flex-col items-center p-2 md:space-y-12 md:p-6">
      <Suspense fallback={null}>
        <Document file="assets/files/devin_blair_resume_fr.pdf">
          <Page pageNumber={1} />
          <Page pageNumber={2} />
        </Document>
      </Suspense>
    </div>
  );
};

export default Resume;
