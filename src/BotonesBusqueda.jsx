import { useState } from "react"

export const BotonesBusqueda = ( { onManejarCambios }) => {

  const busqueda = (e) => {

    onManejarCambios(e.target.value)
  }

  return (
    <>
      <div className="contenedor__botones">

        <button
          value={"characters"}
          onClick={busqueda}>
          CHARACTERS
        </button>

        <button
          value={"episodes"}
          onClick={busqueda}>
          EPISODES
        </button>

        <button
          value={"titans"}
          onClick={busqueda}>
          TITANS
        </button>

        <button
          value={"organizations"}
          onClick={busqueda}>
          ORGANIZATIONS
        </button>

      </div>
    </>
  )
}
