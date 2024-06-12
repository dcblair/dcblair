import { Link, Card } from '~/components';
import { IconComcastBusiness } from '~/components/Icons';

const Experience = () => {
  return (
    <div className="grow-1 flex h-full w-full flex-col items-center md:space-y-12">
      <div className="w-1/2">
        <Card
          bgObject="right"
          header={
            <h2 className="font-nunito text-2.5xl font-bold text-slate-900">
              Experience
            </h2>
          }
        >
          {' '}
        </Card>
      </div>

      <div className="flex h-full w-full flex-col p-8 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-3 md:gap-16 md:space-y-8">
        <div className="flex items-center">
          {/* Comcast */}
          <Card className="shadow-xl">
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
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <Card variant="tertiary">
              {/* Improve accessibility */}
              <Link
                className="flex items-center justify-center"
                target="_blank"
                rel="noreferrer"
                to="https://business.comcast.com/"
                variant="icon"
              >
                <IconComcastBusiness />
              </Link>
            </Card>
          </div>
        </div>

        {/* Canopy */}
        <div className="flex items-center">
          <Card>
            <h3 className="text-xl font-semibold">
              Canopy Servicing - Software Engineer
            </h3>
            <h4 className="text-lg font-medium">July 2021 - July 2022</h4>
          </Card>
        </div>

        {/* Canopy photo */}
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <Card variant="tertiary">
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://www.canopyservicing.com/canopyos"
              >
                <img src="assets/canopy_logo.png" alt="canopy servicing logo" />
              </Link>
            </Card>
          </div>
          <div className="absolute -z-10 h-8 w-8 -rotate-12 transform rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed md:left-72 md:h-full md:w-2" />
        </div>

        {/* Zeal */}
        <div className="relative flex items-center">
          <Card>
            <h3 className="text-xl font-semibold">
              Zeal Enterprises - Lead Frontend Engineer
            </h3>
            <h4 className="text-lg font-medium">January 2021 - July 2021</h4>
          </Card>
          <div className="absolute -z-10 h-8 w-8 animate-floatSlow rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed motion-reduce:animate-none md:-left-20 md:top-8 md:h-28 md:w-28" />
        </div>

        {/* Zeal photo */}
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <Card
              className="flex items-center justify-center"
              variant="tertiary"
            >
              <img
                className="h-32 w-32"
                src="assets/zeal_logo.jpg"
                alt="zeal website logo"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
