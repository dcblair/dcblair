import type { MetaFunction } from '@remix-run/node';
import { AppLink, Card } from '~/components';
import { IconComcastBusiness } from '~/components/Icons';

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
                <p>Thanks for visiting.</p>
                <div className="md:ml-4">
                  <p>I&apos;m a Los Angeles-based Frontend Engineer.</p>
                </div>
              </Card>
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
            <Card>
              <div className="text-lg">
                <h3>Comcast Business - Frontend Engineer IV</h3>
              </div>
            </Card>
            <div className="absolute -z-10 h-64 w-64 rotate-1 transform rounded-full bg-gradient-to-br from-slate-400 to-black bg-fixed md:h-24 md:w-24" />
          </div>

          {/* Comcast Photo */}
          <div className="flex-end relative flex w-full items-center md:row-span-4">
            <Card>
              {/* Improve accessibility */}
              <AppLink to="https://business.comcast.com/" variant="icon">
                <IconComcastBusiness />
              </AppLink>
            </Card>
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
            <div className="absolute -z-10 h-8 w-8 -rotate-12 transform rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed md:left-72 md:h-full md:w-2" />
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center space-y-8 text-lg">
          <Card
            header={
              <h2 className="font-nunito text-2xl font-bold text-slate-900">
                Contact
              </h2>
            }
          >
            <div className="flex space-x-3">
              {/* LinkedIn icon */}
              <AppLink
                to="https://www.linkedin.com/in/devin-blair/"
                variant="icon"
              >
                <svg className="h-10 w-10" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </AppLink>

              {/* Github icon */}
              <AppLink to="https://github.com/dcblair" variant="icon">
                <svg className="h-10 w-10" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </AppLink>

              {/* Email icon */}
              <AppLink to="mailto:devin.c.blair@gmail.com" variant="icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-11 w-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </AppLink>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
