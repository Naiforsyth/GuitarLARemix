import { useState, useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  Link
} from "@remix-run/react";
import styles from '~/styles/index.css'
import Header from "~/components/header";
import Footer from "~/components/footer";

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
  
  const [carrito, setCarrito] = useState([])

  useEffect(() =>{
    console.log('desde useEffect')
  }, [])

  const agregarCarrito = guitarra => {
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      //Iterar sobre el arreglo e identificar el elemento duplicado
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          //Reescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      //Añadir al carrito
      setCarrito(carritoActualizado)

    } else {
      //Registro nuevo, agregar al carrito
      setCarrito([...carrito, guitarra])
    }

  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
  }

  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
    setCarrito(carritoActualizado)
  }

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
        <Outlet
          context={{
            agregarCarrito,
            carrito,
            actualizarCantidad,
            eliminarGuitarra
          }}
        />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


// Manejo de errores

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
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
          <div>
            <h1 className="error">
              {error.status} {error.statusText}
            </h1>
            <div>
              <Link className="error-enlace">Volver al home</Link>
            </div>
          </div>
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
}