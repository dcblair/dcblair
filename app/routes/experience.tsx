import { AppLink, Card } from '~/components';
import { IconComcastBusiness } from '~/components/Icons';

const Experience = () => {
  return (
    <>
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
    </>
  );
};

export default Experience;
