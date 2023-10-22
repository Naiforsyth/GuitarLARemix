import { useLoaderData } from 'react-router'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import styles from '~/styles/guitarras.css'
import { useOutletContext } from '@remix-run/react'


export function meta() {
  return [
    { title: "GuitarLA - Tienda de Guitarras" },
    { name: "description", content: "GuitarLA - Nuestra colección de guitarras" },  
  ];
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

  const data = useOutletContext()
  console.log(data)

  const guitarras = useLoaderData()


  return (
    <main className='contenedor'>
     <ListadoGuitarras 
      guitarras = {guitarras}
      context ={data}
     />

    </main>
  )
}

export default Tienda