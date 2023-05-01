import React from 'react'
import imageMain from '../assets/sublogosinteligencia.png'
import styles from '../styles/home.module.css'

const Home = () => {
    
  return  (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Todo sobre la Inteligencia Artificial</h1>
   <h2>Como usar la inteligencia Artificial</h2>
 
   <img src={imageMain} className={styles.image} alt='imagen tierra' />
   
   <h2>Que tipos de inteligencia puedo usar</h2>
   <h2>Puedo generar dinero con la inteligencia...</h2>
    <p>
    En la actualidad existen diversas inteligencias artificiales que se utilizan para una amplia variedad de aplicaciones. Algunas de las inteligencias artificiales más populares y utilizadas en la actualidad incluyen:

Aprendizaje profundo (Deep Learning): es una rama del aprendizaje automático que utiliza redes neuronales artificiales para procesar grandes cantidades de datos y encontrar patrones en ellos. Esta técnica se utiliza en aplicaciones como reconocimiento de voz y de imagen, procesamiento de lenguaje natural y vehículos autónomos.

Aprendizaje automático (Machine Learning): es una técnica en la que se utiliza software para aprender a través de la experiencia. Esta técnica se utiliza en aplicaciones como análisis de datos, predicción de comportamientos y reconocimiento de patrones.

Robótica inteligente: se trata de robots que utilizan sistemas de percepción, control y toma de decisiones para interactuar con su entorno y realizar tareas específicas.

Asistentes virtuales: son programas que utilizan procesamiento de lenguaje natural para comunicarse con los usuarios y realizar tareas específicas, como reservar un vuelo o hacer una búsqueda en Internet.

Sistemas de recomendación: son sistemas que utilizan algoritmos para analizar los datos y recomendar productos o servicios específicos a los usuarios.

Estas son solo algunas de las muchas inteligencias artificiales que existen en la actualidad. Cada una tiene sus propias aplicaciones y beneficios, y se espera que la inteligencia artificial siga evolucionando y mejorando en el futuro.(Tomado de href 'https://chat.openai.com/chat')
    </p>
    
    </div>
  )
}

export default Home