import type { MetaFunction } from '@remix-run/node';
import { Card } from '~/components';
import LazyLoad from 'react-lazyload';

export const meta: MetaFunction = () => {
  return [
    { title: 'Devin C Blair' },
    { name: 'description', content: 'Devin C Blair - Frontend Engineer' },
  ];
};

interface LazyImage {
  alt: string;
  className: string;
  src: string;
}

const LazyImage = ({ alt, className, src }: LazyImage) => {
  return (
    <LazyLoad offset={100} once>
      <img alt={alt} className={className} src={src} />
    </LazyLoad>
  );
};

const Index = () => {
  return (
    <div className="grow-1 flex w-full flex-col items-center px-2 pb-2">
      <div className="flex h-full w-full flex-col items-center md:mb-32 md:mt-12 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-1 md:gap-x-12 3xl:gap-x-48 4xl:w-3/5">
        <div className="relative mb-8 mt-2 flex w-full flex-col items-center md:row-span-1">
          {/* Profile photo */}
          <LazyImage
            alt="devin c blair wearing glasses and a jacket"
            className="relative size-44 rounded-full shadow-2xl md:size-60"
            src="assets/images/profile_500.png"
          />

          {/* Big globe */}
          <div
            aria-label="large, floating circle"
            className="absolute right-10 top-10 -z-10 size-40 rotate-1 transform animate-floatSlow rounded-full bg-gradient-to-br from-slate-100 to-black bg-fixed motion-reduce:animate-none md:right-28 md:top-12 md:size-72 4xl:right-40"
            role="img"
          />
        </div>

        {/* Intro statement */}
        <div className="relative flex flex-col items-center md:row-span-1">
          <div className="relative space-y-2 text-lg">
            <Card
              header={
                <h2 className="font-nunito text-2.5xl font-bold text-slate-900">
                  About
                </h2>
              }
            >
              <div className="space-y-2 text-base font-normal md:ml-4 md:text-lg">
                <p>I&apos;m a Los Angeles-based Frontend Engineer.</p>
                <p>
                  Over the course of my career, I&apos;ve strived to create
                  eye-catching UIs powered by clean, legible code.
                </p>
              </div>
            </Card>

            {/* Floating bar */}
            <div
              aria-label="floating rounded rectangle"
              className="invisible absolute -bottom-10 -left-3 -z-10 h-72 w-12 animate-floatSlow rounded-md bg-gradient-to-b from-slate-200 to-slate-500 bg-fixed shadow-md motion-reduce:animate-none md:visible"
              role="img"
            />

            {/* Small, dark floating globe */}
            <div
              aria-label="small, floating circle"
              className="absolute -bottom-20 -left-4 -z-10 size-40 animate-floatSlow rounded-full bg-gradient-to-br from-gray-500 to-slate-50 bg-fixed motion-reduce:animate-none md:bottom-96 md:left-[180px] md:size-20 md:to-black"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
