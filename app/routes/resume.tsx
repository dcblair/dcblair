import { Suspense, useRef, useState } from 'react';
import { useResizeObserver } from '~/hooks/useResizeObserver';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Card, Link } from '~/components';
// enables link annotations
import 'react-pdf/dist/Page/AnnotationLayer.css';
// enables text layer for accessibility, selection, search
import 'react-pdf/dist/Page/TextLayer.css';

// need this for react-pdf to work
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const divRef = useRef<HTMLDivElement | null>(null);
  const { width } = useResizeObserver({ ref: divRef });

  // todo: add scroll prevention

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
    <div className="grow-1 flex size-full flex-col items-center p-2 md:space-y-12 md:px-10 md:py-6">
      <Suspense fallback={null}>
        <div className="flex size-full flex-col items-center space-y-4 md:space-y-6">
          <div className="flex w-full items-center justify-center space-x-4 px-4">
            <Button
              aria-label="page back"
              className="hidden md:flex"
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
            <div className="w-full md:w-7/12" ref={divRef}>
              <Document file="/assets/files/devin_blair_resume_fr.pdf">
                <div className="hidden md:flex">
                  <Page pageNumber={pageNumber} width={width} />
                </div>
                <div className="block space-y-2 md:hidden">
                  <Page pageNumber={1} width={width} />
                  <Page pageNumber={2} width={width} />
                </div>
              </Document>
            </div>
            <Button
              aria-label="navigate forward"
              className="hidden md:flex"
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
          <Link
            className="w-full md:size-fit"
            rel="noreferrer"
            download
            to="/assets/files/devin_blair_resume_fr.pdf"
            variant="icon"
          >
            <Card
              className="flex h-24 w-full items-center justify-center space-x-4 duration-2000 hover:bg-slate-300/20 hover:shadow-2xl hover:transition-all md:w-72"
              variant="tertiary"
            >
              <h2 className="font-nunito text-xl font-bold tracking-wider">
                Download PDF
              </h2>
            </Card>
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default Resume;
