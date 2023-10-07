
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css' 

export function meta() {
  return [
    { title: "GuitarLA - Nosotros" },
    { name: "description", content: "Ventas de guitarras, blog de música" },  
  ];
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}


function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className='contenido'>
        <img src={imagen} alt='imagen sobre nosotros' />

        <div>
          <p>Donec ut tincidunt ligula. Phasellus est lacus, volutpat quis accumsan non, ornare sit amet leo. 
            Sed sit amet dapibus erat. Pellentesque vitae vehicula ligula. 
            Cras ligula risus, laoreet luctus enim at, fringilla eleifend elit. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Duis dapibus tincidunt congue. Proin et quam a arcu dignissim elementum et vel mauris. 
            Aliquam in lorem sit amet nisi porta bibendum.</p>
            
          <p>Donec ut tincidunt ligula. Phasellus est lacus, volutpat quis accumsan non, ornare sit amet leo. 
            Sed sit amet dapibus erat. Pellentesque vitae vehicula ligula. 
            Cras ligula risus, laoreet luctus enim at, fringilla eleifend elit. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Duis dapibus tincidunt congue. Proin et quam a arcu dignissim elementum et vel mauris. 
            Aliquam in lorem sit amet nisi porta bibendum.</p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros