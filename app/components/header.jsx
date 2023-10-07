import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'


function header() {



    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to='/' >
                    <img className="logo" src={logo} alt="Imagen logo" />
                </Link>

                <Navegacion />

            </div>
        </header>
    )
}

export default header