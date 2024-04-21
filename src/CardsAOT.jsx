
export const CardsAOT = ( {nombre, alias,  imagen} ) => {

  return (
    <>
        <div className="contenedor__card">
            <h2> {nombre}</h2>
            <h4> {alias}</h4>
            <img src={imagen} alt="" />
            
        </div>
    </>
  )
}
