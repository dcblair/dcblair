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
    <div className="grow-1 flex h-full w-full flex-col items-center md:space-y-52">
      <div className="flex h-full w-full flex-col items-center md:grid md:w-1/3 md:grid-flow-col md:grid-rows-2 md:gap-x-56 md:space-y-8">
        {/* Profile Photo */}
        <div className="relative mb-8 mt-2 flex w-full flex-col items-center md:row-span-4">
          <img
            className="relative w-44 rounded-full shadow-2xl md:w-80"
            src="/assets/profile_500.png"
            alt="devin blair wearing glasses and a jacket"
          />
          <div className="animate-float absolute right-12 top-12 -z-10 h-40 w-40 rotate-1 transform rounded-full bg-gradient-to-br from-slate-100 to-black bg-fixed md:top-28 md:h-96 md:w-96" />
        </div>

        {/* Intro statement */}
        <div className="flex flex-col items-center md:row-span-4 md:row-start-1 md:row-end-2">
          <div className="space-y-2 text-lg">
            <Card
              bgObject="left"
              header={
                <h2 className="text-2.5xl font-nunito font-bold text-slate-900">
                  About
                </h2>
              }
            >
              <div className="space-y-2 text-xl font-normal md:ml-4">
                <p>I&apos;m a Los Angeles-based Frontend Engineer.</p>
                <p>
                  Over the course of my career, I&apos;ve strived to create
                  eye-catching UIs powered by clean, legible code.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
