import React, { useState } from 'react'
import Menu from '../../componentes/Menu'

export default function ListOfertas() {

    const initOferta = [
        {
            id: 1,
            Monto: 120312,
            Fecha: "2022-04-23",
        },
        {
            id: 2,
            Monto: 323232,
            Fecha: "2023-11-02",
        },
        {
            id: 3,
            Monto: 565612,
            Fecha: "2025-12-31",
        },
    ];

    const [db, setDb] = useState(initOferta);
    
  return (
    <>
    <div><Menu/></div>
    <div>
       <table>
           <thead>
               <tr>
                  <td>id</td>
                  <td>Monto</td>
                  <td>Fecha</td>
               </tr>
           </thead>
           <tbody>
            {db.length>0?(
                db.map((el) => (
                    <>
                    <tr>
                    <td>{el.id}</td>
                    <td>{el.Monto}</td>
                    <td>{el.Fecha}</td>   
                    </tr>
                    </>
                ))
             ):(
                <tr>
                    <td>No hay datos</td>
                </tr>
             )}
           </tbody>
       </table>
    </div>
    </>
  )
}
