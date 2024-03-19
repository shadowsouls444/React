import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
        <div>Menu
            <Link to = "/">ListOferta</Link>
            <Link to = "Ofertas">FormOferta</Link>
        </div>
    </>

  )
}
