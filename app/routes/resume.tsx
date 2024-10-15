import { Suspense, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '~/components';
// enables link annotations
import 'react-pdf/dist/Page/AnnotationLayer.css';
// enables text layer for accessibility, selection, search
import 'react-pdf/dist/Page/TextLayer.css';

// @ts-expect-error This does not exist outside of polyfill which this is doing
if (typeof Promise.withResolvers === 'undefined') {
  if (window)
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    Promise.withResolvers = function () {
      let resolve, reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
}

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
      } else if (direction === 'back') {
        return prevPageNumber > 1 ? prevPageNumber - 1 : 2;
      }
      return prevPageNumber - 1;
    });
  };
  return (
    <div className="grow-1 flex size-full flex-col items-center p-2 md:space-y-12 md:p-6">
      <Suspense fallback={null}>
        <div className="flex items-center space-x-4">
          <Button
            aria-label="page back"
            iconOnly
            onClick={() => handlePageChange('back')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="size-6 md:size-12"
              viewBox="0 0 24 24"
            >
              <path d="M14.657 18.657a1 1 0 0 1-.707-.293l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-.707 1.707z" />
            </svg>
          </Button>
          <Document file="assets/files/devin_blair_resume_fr.pdf">
            <Page pageNumber={pageNumber} />
          </Document>
          <Button
            aria-label="navigate forward"
            iconOnly
            onClick={() => handlePageChange('forward')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              className="size-6 md:size-12"
              viewBox="0 0 24 24"
            >
              <path d="M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z" />
            </svg>
          </Button>
        </div>
      </Suspense>
    </div>
  );
};

export default Resume;
