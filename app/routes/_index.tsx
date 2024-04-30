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
              <AppLink
                to="https://www.linkedin.com/in/devin-blair/"
                variant="icon"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </AppLink>
              <AppLink to="https://github.com/dcblair" variant="icon">
                <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="#24292f"
                  />
                </svg>
              </AppLink>
              <AppLink to="mailto:devin.c.blair@gmail.com" variant="icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
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
