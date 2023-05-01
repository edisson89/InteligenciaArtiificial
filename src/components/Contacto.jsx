import React from 'react'
import { NavLink } from 'react-router-dom'

const Contacto = () => {
  return (
    <div>
    <h1>Acerca de Nosotros</h1>
    <p>
    Somos una empresa de tecnología que se especializamos en desarrollar aplicaciones móviles innovadoras para mejorar la vida de las personas.

Nuestra organización sin fines de lucro se dedica a promover la educación en comunidades marginadas y proporcionar recursos para ayudar a los jóvenes a alcanzar su máximo potencial.

En nuestra tienda en línea, nos apasiona ofrecer productos ecológicos y sostenibles para ayudar a reducir el impacto ambiental.

Somos un equipo de expertos en marketing digital que trabaja para ayudar a las empresas a mejorar su presencia en línea y aumentar sus ingresos.

En nuestro estudio de diseño, nos esforzamos por crear soluciones visuales atractivas y funcionales que satisfagan las necesidades y deseos de nuestros clientes.
    </p>
    <NavLink to='/home'>
      <button>Regresar</button>
    </NavLink>
    </div>
  )
}

export default Contacto