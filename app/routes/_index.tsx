import type { MetaFunction } from '@remix-run/node';
import AppLink from '~/components/AppLink';

export const meta: MetaFunction = () => {
  return [
    { title: 'DCBlair' },
    { name: 'description', content: 'Devin Blair - Frontend Engineer' },
  ];
};

const Index = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center p-8 md:px-44 md:py-24">
      <div className="mb-8 md:mb-48">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-nunito text-4xl font-black tracking-wider text-slate-900">
            Devin Blair
          </h1>
        </div>

        {/* Navbar */}
        <nav className="flex items-center space-x-4 p-2 text-lg leading-6 tracking-widest">
          <AppLink to="#about">About</AppLink>
          <div className="h-8 w-0.5 rounded-sm bg-black" />
          <AppLink to="#experience">Experience</AppLink>
          <div className="h-8 w-0.5 rounded-sm bg-black" />
          <AppLink to="#contact">Contact</AppLink>
        </nav>
      </div>

      <div className="flex w-full flex-col items-center md:space-y-52">
        {/* About */}
        <div className="flex h-full w-full flex-col md:grid md:w-1/3 md:grid-flow-col md:grid-rows-2 md:gap-16 md:space-y-8">
          {/* Profile Photo */}
          <div className="flex-end relative flex w-full items-center md:row-span-4">
            <img
              className="relative w-64 rounded-full shadow-2xl md:w-80"
              src="/assets/profile_500.png"
              alt="devin blair wearing glasses and a jacket"
            />
            <div className="absolute top-28 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-slate-200 to-black md:h-96 md:w-96" />
          </div>

          {/* Intro statement */}
          <div className="flex flex-col items-center md:row-span-4 md:row-start-1 md:row-end-2">
            <div className="space-y-2 text-lg">
              <h2 className="font-nunito text-2xl font-bold text-slate-900">
                About
              </h2>
              <p>Thanks for visiting.</p>
              <div className="md:ml-4">
                <p>I&apos;m a Los Angeles-based Frontend Engineer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="flex h-full w-full flex-col md:grid md:w-1/3 md:grid-flow-col md:grid-rows-2 md:gap-16 md:space-y-8">
          <div className="col-span-4 mb-8">
            <h2 className="font-nunito text-2xl font-bold text-slate-900">
              Experience
            </h2>
          </div>
          <div className="flex flex-col items-center md:row-span-4 md:row-start-1 md:row-end-2">
            {/* Comcast */}
            <div className="text-lg">
              <h3>Comcast Business - Frontend Engineer IV</h3>
            </div>
          </div>

          {/* Comcast Photo */}
          <div className="flex-end relative flex w-full items-center md:row-span-4">
            <img
              className="relative w-64 rounded-full shadow-2xl md:w-80"
              src="/"
              alt="comcast logo"
            />
          </div>

          {/* Canopy */}
          <div className="text-lg">
            <h3>Canopy Servicing - Software Engineer</h3>
          </div>

          {/* Canopy Photo */}
          <div className="flex-end relative flex w-full items-center md:row-span-4">
            <img
              className="relative w-64 rounded-full shadow-2xl md:w-80"
              src="/"
              alt="canopy website screenshot"
            />
            <div className="absolute -z-10 h-8 w-8 -rotate-12 transform rounded-full bg-gradient-to-br from-slate-200 to-black md:left-72 md:h-full md:w-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
