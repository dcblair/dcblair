import { memo } from 'react';
import { Card } from '../Card/Card';
import { Link } from '../Link/Link';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip';

const BaseFooter = () => {
  return (
    <div className="mt-4 flex w-full grow-0 flex-col items-center text-lg md:mt-12">
      <Card
        className="w-full md:w-1/3"
        header={
          <h2 className="font-nunito text-2xl font-bold text-slate-900">
            Contact
          </h2>
        }
      >
        <div className="flex items-center justify-center space-x-3 md:space-x-6">
          {/* LinkedIn icon */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://www.linkedin.com/in/devin-blair/"
                variant="icon"
              >
                <svg className="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <span>LinkedIn</span>
            </TooltipContent>
          </Tooltip>

          {/* Github icon */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://github.com/dcblair"
                variant="icon"
              >
                <svg className="h-6 w-6 md:h-8 md:w-8" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <span>GitHub</span>
            </TooltipContent>
          </Tooltip>

          {/* Email icon */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                rel="noreferrer"
                target="_blank"
                to="mailto:devin.c.blair@gmail.com"
                variant="icon"
              >
                <svg
                  className="h-7 w-7 md:h-9 md:w-9"
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
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <span>Email</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export const Footer = memo(BaseFooter);
