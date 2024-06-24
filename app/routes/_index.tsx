import type { MetaFunction } from '@remix-run/node';
import { Card } from '~/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'DCBlair' },
    { name: 'description', content: 'Devin Blair - Frontend Engineer' },
  ];
};

const Index = () => {
  return (
    <div className="grow-1 flex h-full w-full flex-col items-center px-2 pb-2 md:space-y-52">
      <div className="flex h-full w-full flex-col items-center md:grid md:grid-flow-col md:grid-rows-2 md:gap-x-36 md:space-y-8">
        <div className="relative mb-8 mt-2 flex w-full flex-col items-center md:row-span-4">
          {/* Profile photo */}
          <div className="w-44 md:w-60">
            <img
              className="relative rounded-full shadow-2xl"
              src="assets/profile_500.png"
              alt="devin blair wearing glasses and a jacket"
            />
          </div>

          {/* Big globe */}
          <div className="absolute right-10 top-10 -z-10 h-40 w-40 rotate-1 transform animate-floatSlow rounded-full bg-gradient-to-br from-slate-100 to-black bg-fixed md:top-28 md:h-72 md:w-72" />
        </div>

        {/* Intro statement */}
        <div className="relative flex flex-col items-center md:row-span-4 md:row-start-1 md:row-end-2">
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
            <div className="invisible absolute -bottom-16 -left-3 -z-10 h-72 w-12 animate-floatSlow rounded-md bg-gradient-to-b from-slate-200 to-slate-500 shadow-md md:visible" />
          </div>

          {/* Small, dark floating globe */}
          <div className="absolute -bottom-20 -left-4 -z-10 h-40 w-40 animate-floatSlow rounded-full bg-gradient-to-br from-gray-500 to-slate-50 bg-fixed motion-reduce:animate-none md:-top-52 md:h-20 md:w-20 md:to-black" />
        </div>
      </div>
    </div>
  );
};

export default Index;
