import { Card, Link } from '~/components';
import { IconCanopyServicing, IconComcastBusiness } from '~/components/Icons';

const Experience = () => {
  return (
    <div className="grow-1 flex size-full flex-col items-center p-2 md:space-y-12 md:p-6">
      <div className="relative mb-1 w-full md:w-fit">
        {/* Experience heading */}
        <Card
          className="w-full md:w-[25rem]"
          header={
            <h2 className="font-nunito text-2.5xl font-bold text-slate-900">
              Experience
            </h2>
          }
          variant="secondary"
        />

        {/* Ligher floating globe */}
        <div
          aria-label="floating circle"
          className="absolute -bottom-2 -right-20 -z-10 size-40 animate-floatSlow rounded-full bg-gradient-to-b from-slate-200 to-slate-600 bg-fixed shadow-md motion-reduce:animate-none"
          role="img"
        />
      </div>

      <div className="flex h-full w-full flex-col space-y-1 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-3 md:gap-8">
        <div className="relative flex items-center">
          {/* Comcast */}
          <Card>
            <div className="mb-4 space-y-1">
              <h3 className="text-lg font-semibold md:text-xl">
                Comcast Business - Frontend Engineer IV
              </h3>
              <h4 className="text-base font-medium md:text-lg">
                August 2022 - April 2024
              </h4>
            </div>

            <ul className="space-y-1 rounded-md bg-gradient-to-b from-white/90 to-slate-100/90 p-6 text-sm tracking-wider shadow-lg">
              <li>
                • Implemented a working solution for MUI accessibility bug—
                improving accessibility by 7%, triaged and created subsequent QA
                and engineering tickets with clear and concise descriptions and
                acceptance criteria
              </li>
              <li>
                • Configured and maintained 4 React and Remix applications
                across 2 Frontend teams, leading to a significant increase in
                application stability and decrease in ramp up time for new devs
              </li>
              <li>
                • Developed a reusable d3.js chart component to visualize
                bandwidth data for customers, enhancing data accessibility and
                user engagement
              </li>
            </ul>
          </Card>

          {/* Floating globe */}
          <div
            aria-label="second floating circle"
            className="absolute -bottom-16 -left-8 -z-10 size-64 rotate-1 transform animate-floatSlow rounded-full bg-gradient-to-br from-slate-400 to-black bg-fixed motion-reduce:animate-none md:size-24"
            role="img"
          />
        </div>

        {/* Comcast photo */}
        <div className="flex items-center justify-center">
          <Link
            aria-label="Comcast Business"
            target="_blank"
            rel="noreferrer"
            to="https://business.comcast.com/"
            variant="icon"
          >
            <Card
              className="h-32 w-[calc(100vw-16px)] duration-2000 hover:bg-slate-600/20 hover:shadow-2xl hover:transition-all md:h-60 md:w-96"
              variant="tertiary"
            >
              <IconComcastBusiness />
            </Card>
          </Link>
        </div>

        {/* Canopy */}
        <div className="flex items-center">
          <Card>
            <div className="mb-4 space-y-1">
              <h3 className="text-xl font-semibold">
                Canopy Servicing - Software Engineer
              </h3>
              <h4 className="text-lg font-medium">July 2021 - July 2022</h4>
            </div>

            <ul className="space-y-1 rounded-md bg-gradient-to-t from-white/90 to-slate-50/90 p-6 text-sm tracking-wider shadow-lg">
              <li>
                • Led a project to migrate authentication from Auth0 to Cognito,
                reducing expenditure by over $50,000
              </li>
              <li>
                • Developed a component library using Typescript, native HTML,
                Tailwind, and Headless UI, enabling granular component
                customization and enhancing application performance by reducing
                package bloat
              </li>
              <li>
                • Created robust Backend endpoints using Node.js and seamlessly
                connected them to the Frontend in Next.js, enabling efficient
                data retrieval and interaction
              </li>
              <li>
                • Mentored intern, junior, and mid-level engineers through
                pairing sessions, one-on-one career and personal development
                counseling, and knowledge transfer meetings, resulting in an
                increase in team productivity and skill advancement
              </li>
            </ul>
          </Card>
        </div>

        {/* Canopy photo */}
        <div className="flex items-center justify-center">
          <Link
            aria-label="Canopy Servicing"
            rel="noreferrer"
            target="_blank"
            to="https://www.canopyservicing.com/canopyos"
          >
            <Card
              className="h-32 w-[calc(100vw-16px)] duration-2000 hover:bg-slate-600/20 hover:shadow-2xl hover:transition-all md:h-60 md:w-96"
              variant="tertiary"
            >
              <IconCanopyServicing />
            </Card>
          </Link>
        </div>

        {/* Zeal */}
        <div className="relative flex items-center">
          <Card>
            <div className="mb-4 space-y-1">
              <h3 className="text-xl font-semibold">
                Zeal Enterprises - Lead Frontend Engineer
              </h3>
              <h4 className="text-lg font-medium">January 2021 - July 2021</h4>
            </div>

            <ul className="space-y-1 rounded-md bg-gradient-to-b from-white/90 to-slate-100/85 p-6 text-sm tracking-wider shadow-lg">
              <li>
                • Built out frontend architecture, learning and implementing new
                technologies in fast-paced sprints
              </li>
              <li>
                • Researched and designed a migration plan to Typescript,
                resulting in refactoring of the codebase to adopt type-safe,
                better-documented code
              </li>
              <li>
                • Worked with the engineering team and UX design team in agile,
                sprint-based development, engaging in mentorship and pair
                programming to strengthen team synergy and growth
              </li>
              <li>
                • Proposed and implemented code splitting to improve loading
                latency by 10%
              </li>
              <li>• Configured Webpack for optimized bundling</li>
            </ul>
          </Card>

          {/* Another floating globe */}
          <div
            aria-label="third floating globe"
            className="absolute -right-8 -top-20 -z-10 size-28 animate-floatSlow rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed motion-reduce:animate-none md:-right-20 md:top-2"
            role="img"
          />
        </div>

        {/* Zeal photo */}
        <div className="flex items-center justify-center">
          <Card
            className="h-32 w-[calc(100vw-16px)] duration-2000 hover:shadow-2xl hover:transition-all md:h-60 md:w-96"
            variant="tertiary"
          >
            <img
              className="size-24"
              src="assets/images/zeal_logo.jpg"
              alt="Zeal official logo"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
