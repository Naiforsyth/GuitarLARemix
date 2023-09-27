import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from '~/styles/index.css'
import Header from "~/components/header";

export function meta() {
  return [
    { title: "GuitarLA -Remix" }      
  ];
}

export const links = () => {
  return [

    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },    
    {
      rel: 'preconnect',
      href: "https://fonts.googleapis.com"
    },
    {
      rel: 'preconnect',
      href: "https://fonts.gstatic.com",
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"

    },
    {
      rel: 'stylesheet',
      href: styles
    },
  ]
};



export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />        
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
