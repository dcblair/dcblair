import { Suspense } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// @ts-expect-error This does not exist outside of polyfill which this is doing
if (typeof Promise.withResolvers === 'undefined') {
  if (window)
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    window.Promise.withResolvers = function () {
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
  return (
    <div className="grow-1 flex size-full flex-col items-center p-2 md:space-y-12 md:p-6">
      <Suspense fallback={null}>
        <Document file="assets/files/devin_blair_resume_fr.pdf">
          <Page pageNumber={1} />
        </Document>
      </Suspense>
    </div>
  );
};

export default Resume;
