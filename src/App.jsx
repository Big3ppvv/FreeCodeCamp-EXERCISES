import Users from "./Components/Users"

function App() {
  const userInformation = [{
    name: ' Shawn Wang en Singapur',
    ocupation: 'Ingeniero de Software en Amazon',
    biography : '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."',
    imgURL: '/public/img/freeCodeCampImage.png',
    id: 'dbdeeefc59'
  }, 
  {
    name: '  Sarah Chima en Nigeria',
    ocupation: 'Ingeniera de Software en ChatDesk',
    biography : '"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."',
    imgURL: '/public/img/freeCodeCampImage2.png',
    id: 'cd5cc0b59a'
  }, 
  {
    name: 'Emma Bostian en Suecia',
    ocupation: 'Ingeniera de Software en Spotify',
    biography : '"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."',
    imgURL: '/public/img/freeCodeCampImage3.png',
    id: '015f509e5d'
  }]

  return(
    <div>
      <h1 className="text-center text-white text-4xl mt-16"><strong>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</strong></h1>
      <Users freeCodeCampUser={userInformation}/>
    </div>
  )
  
}

export default App
