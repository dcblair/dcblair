import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';

import { ThemeContext } from './context/ThemeContext';
import { Footer, LoadingSpinner, Header } from '~/components';
import { useState } from 'react';

import './tailwind.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-200 via-sky-100 to-slate-100">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [theme] = useState('light');
  const location = useLocation();

  return (
    <ThemeContext.Provider value={theme}>
      <div className="flex min-h-screen w-full flex-col pt-8 md:px-44 md:pb-8 md:pt-24">
        <Header />
        <Outlet />
        <>{location?.pathname !== '/contact' && <Footer />}</>
      </div>
    </ThemeContext.Provider>
  );
}

export function HydrateFallback() {
  return (
    <div className="flex size-full flex-col items-center justify-center pt-24 md:pt-48">
      <LoadingSpinner />
      <div className="mt-8">
        <p className="tracking-widest">just a moment. . .</p>
      </div>
    </div>
  );
}
