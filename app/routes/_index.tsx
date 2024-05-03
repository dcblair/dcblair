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
    <div className="flex w-full flex-col items-center md:space-y-52">
      <div className="flex h-full w-full flex-col md:grid md:w-1/3 md:grid-flow-col md:grid-rows-2 md:gap-16 md:space-y-8">
        {/* Profile Photo */}
        <div className="flex-end relative flex w-full items-center md:row-span-4">
          <img
            className="relative w-64 rounded-full shadow-2xl md:w-80"
            src="/assets/profile_500.png"
            alt="devin blair wearing glasses and a jacket"
          />
          <div className="absolute top-28 -z-10 h-64 w-64 rotate-1 transform rounded-full bg-gradient-to-br from-slate-100 to-black bg-fixed md:h-96 md:w-96" />
        </div>

        {/* Intro statement */}
        <div className="flex flex-col items-center md:row-span-4 md:row-start-1 md:row-end-2">
          <div className="space-y-2 text-lg">
            <Card
              bgObject="left"
              header={
                <h2 className="font-nunito text-2xl font-bold text-slate-900">
                  About
                </h2>
              }
            >
              <div className="space-y-2 text-xl font-medium md:ml-4">
                <p>I&apos;m a Los Angeles-based Frontend Engineer.</p>
                <p>
                  Over the course of my career, I&apos;ve strived to create
                  eye-catching UIs powered by clean, legible code.
                </p>
                <p>Thank you for taking the time to check out my site.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
