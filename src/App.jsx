import { useEffect, useState } from 'react'
import { BotonesBusqueda } from './BotonesBusqueda.jsx'
import { CardsAOT } from './CardsAOT.jsx'
import fetchApp from './Fetch.js'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [buttonData, setButtonData] = useState("characters")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchApp(buttonData)
        setData(result.results)
        console.log("DATA: ", data)
      }
      catch (error) {
        console.error('Algo SAlio mal: ', error)
      }
    }
    fetchData()
  }, [buttonData])
  //-----------------------------------------------------------------------

  const manejarCambios = (dato) =>{
    setButtonData(dato)
    console.log("buttonData: ", dato)
  }

  return (
    <>
      <h2>Hola mundo</h2>
      <BotonesBusqueda onManejarCambios={manejarCambios}>  </BotonesBusqueda>
      {
        //nombre, alias,  imagen, texto
        data.map( element => (
          <CardsAOT 
           nombre={element.name}
           alias={element.alias}
           imagen={element.img}
           key={element.id} > 
           </CardsAOT>
         ) 
        )
      }
    </>
  )
}

export default App
