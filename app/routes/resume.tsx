import { Suspense, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// required for link annotations
import 'react-pdf/dist/Page/AnnotationLayer.css';
// required for text layer
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '~/components';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePageChange = (direction: 'back' | 'forward') => {
    setPageNumber((prevPageNumber) => {
      if (direction === 'forward' && prevPageNumber < 2) {
        return prevPageNumber + 1;
      } else if (direction === 'back' && prevPageNumber > 1) {
        return prevPageNumber - 1;
      } else if (direction === 'back' && prevPageNumber < 2) {
        return 2;
      }
      return prevPageNumber - 1;
    });
  };
  return (
    <div className="grow-1 flex size-full flex-col items-center p-2 md:space-y-12 md:p-6">
      <Suspense fallback={null}>
        <div className="flex">
          <Button onClick={() => handlePageChange('back')}>Back</Button>
          <Document file="assets/files/devin_blair_resume_fr.pdf">
            <Page pageNumber={pageNumber} />
          </Document>
          <Button onClick={() => handlePageChange('forward')}>Forward</Button>
        </div>
      </Suspense>
    </div>
  );
};

export default Resume;
