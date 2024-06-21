import {
  Card,
  Link,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components';

const Contact = () => {
  return (
    <div className="flex w-full flex-col items-center p-2 text-lg md:p-6">
      <div className="relative mb-8 flex w-full justify-center">
        <Card
          className="w-full md:w-1/3 md:rounded-md"
          header={
            <h2 className="font-nunito text-2xl font-bold text-slate-900">
              Contact
            </h2>
          }
        />

        {/* Floating globe */}
        <div className="absolute right-72 top-2 -z-10 size-32 rotate-1 transform animate-floatSlow rounded-full bg-gradient-to-br from-slate-300 to-slate-900 md:size-64" />
      </div>

      <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-2 md:space-y-0">
        {/* LinkedIn icon */}
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://www.linkedin.com/in/devin-blair/"
          variant="icon"
        >
          <Card
            className="flex w-64 items-center justify-center space-x-4 md:w-72"
            variant="tertiary"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <svg className="h-8 md:w-8" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </TooltipTrigger>

              <TooltipContent>
                <span>LinkedIn</span>
              </TooltipContent>
            </Tooltip>
            <div className="size-2 rounded-full bg-slate-700" />

            <h2 className="font-nunito text-xl font-bold tracking-wider">
              LinkedIn
            </h2>
          </Card>
        </Link>

        {/* Github */}
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://github.com/dcblair"
          variant="icon"
        >
          <Card
            className="flex w-64 items-center justify-center space-x-4"
            variant="tertiary"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </TooltipTrigger>

              <TooltipContent>
                <span>GitHub</span>
              </TooltipContent>
            </Tooltip>
            <div className="size-2 rounded-full bg-slate-700" />

            <h2 className="font-nunito text-xl font-bold tracking-wider">
              GitHub
            </h2>
          </Card>
        </Link>

        {/* Email */}
        <Link
          rel="noreferrer"
          target="_blank"
          to="mailto:devin.c.blair@gmail.com"
          variant="icon"
        >
          <Card
            className="flex w-64 items-center justify-center space-x-4"
            variant="tertiary"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <svg
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </TooltipTrigger>

              <TooltipContent>
                <span>Email</span>
              </TooltipContent>
            </Tooltip>
            <div className="size-2 rounded-full bg-slate-700" />

            <h2 className="font-nunito text-xl font-bold tracking-wider">
              Email
            </h2>
          </Card>
        </Link>

        {/* Ligher floating globe */}
        <div className="invisible absolute bottom-48 left-80 -z-10 size-32 animate-floatSlow rounded-full bg-gradient-to-b from-slate-200 to-slate-600 shadow-md md:visible" />
      </div>
    </div>
  );
};

export default Contact;
