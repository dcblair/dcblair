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
    <div className="grow-1 relative flex size-full flex-col items-center p-2 md:space-y-12 md:px-10 md:py-6">
      {/* Ligher floating globe */}
      <div
        aria-label="floating circle"
        className="absolute -left-12 -top-4 -z-10 size-40 animate-floatSlow rounded-full bg-gradient-to-b from-slate-100 to-slate-500 bg-fixed shadow-md motion-reduce:animate-none md:-top-10 md:left-40 md:size-64"
        role="img"
      />

      {/* Darker floating globe */}
      <div
        aria-label="second floating circle"
        className="absolute -right-12 bottom-[450px] -z-10 size-40 animate-floatSlow rounded-full bg-gradient-to-b from-slate-200 to-slate-700 bg-fixed shadow-md motion-reduce:animate-none md:bottom-96 md:right-40 md:size-28"
        role="img"
      />

      <Suspense fallback={null}>
        <div className="flex size-full flex-col items-center space-y-2 md:space-y-6">
          <div className="flex w-full items-center justify-center space-x-4 px-4">
            {/* Back button */}
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

            {/* Resume */}
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

            {/* Forward button */}
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

          {/* Download link */}
          <div className="relative w-[calc(100%-16px)] md:size-fit">
            <Link
              rel="noreferrer"
              download
              to="/assets/files/devin_blair_resume_fr.pdf"
              variant="icon"
            >
              <Card
                className="flex h-24 w-full items-center justify-center space-x-4 duration-2000 hover:bg-slate-300/20 hover:shadow-2xl hover:transition-all md:w-56"
                variant="tertiary"
              >
                <h2 className="font-nunito text-xl font-bold tracking-wider">
                  Download PDF
                </h2>
              </Card>
            </Link>

            {/* Lowest floating globe */}
            <div
              aria-label="floating globe"
              className="absolute -left-32 top-12 -z-10 size-44 animate-floatSlow rounded-full bg-gradient-to-b from-slate-400 to-slate-900 bg-fixed shadow-md motion-reduce:animate-none"
              role="img"
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Resume;
