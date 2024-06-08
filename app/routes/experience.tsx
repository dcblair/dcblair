import { AppLink, Card } from '~/components';
import { IconComcastBusiness } from '~/components/Icons';

const Experience = () => {
  return (
    <div className="grow-1 flex h-full w-full flex-col items-center space-y-12">
      <div>
        <Card
          header={
            <h2 className="font-nunito text-2.5xl font-bold text-slate-900">
              Experience
            </h2>
          }
        >
          {' '}
        </Card>
      </div>
      <div className="flex h-full w-full flex-col md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-4 md:gap-16 md:space-y-8">
        <div className="flex flex-col items-center md:row-span-1">
          {/* Comcast */}
          <Card>
            <div>
              <h3 className="text-xl font-semibold">
                Comcast Business - Frontend Engineer IV
              </h3>
              <h4 className="text-lg font-medium">August 2022 - April 2024</h4>
            </div>
            <p></p>
          </Card>
          <div className="absolute -z-10 h-64 w-64 rotate-1 transform rounded-full bg-gradient-to-br from-slate-400 to-black bg-fixed md:h-24 md:w-24" />
        </div>

        {/* Comcast photo */}
        <div className="flex h-full w-full items-center justify-center md:col-span-1 md:row-span-1">
          <Card>
            {/* Improve accessibility */}
            <AppLink to="https://business.comcast.com/" variant="icon">
              <IconComcastBusiness />
            </AppLink>
          </Card>
        </div>

        {/* Canopy */}
        <div className="flex flex-col items-center md:col-span-1 md:row-span-1">
          <Card>
            <h3 className="text-xl font-semibold">
              Canopy Servicing - Software Engineer
            </h3>
            <h4 className="text-lg font-medium">July 2021 - July 2022</h4>
          </Card>
        </div>

        {/* Canopy photo */}
        <div className="flex-end relative flex w-full items-center md:col-span-1 md:row-span-1">
          <img
            className="relative w-64 rounded-full shadow-2xl md:w-80"
            src="/"
            alt="canopy website screenshot"
          />
          <div className="absolute -z-10 h-8 w-8 -rotate-12 transform rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed md:left-72 md:h-full md:w-2" />
        </div>

        {/* Zeal */}
        <div className="flex flex-col items-center md:row-span-1">
          <Card>
            <h3 className="text-xl font-semibold">
              Zeal Enterprises - Lead Frontend Engineer
            </h3>
            <h4 className="text-lg font-medium">January 2021 - July 2021</h4>
          </Card>
        </div>

        {/* Zeal photo */}
        <div className="flex-end relative flex w-full items-center md:row-span-1">
          <img
            className="relative w-64 rounded-full shadow-2xl md:w-80"
            src="/"
            alt="zeal website icon"
          />
          <div className="absolute -z-10 h-8 w-8 -rotate-12 transform rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed md:left-72 md:h-full md:w-2" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
