import React from 'react'
const bebidas =[
  {
    nombre:"Incognito",
    descripcion:"¿Podría ser buena idea probar esta bebida apocalíptica?"
  },
  {
    nombre:"Incognito",
    descripcion:"Tal vez sea solo jugo de cereza",
  },
  {
    nombre:"Incognito",
    descripcion:"Esta es verdaderamente misteriosa, dale una oportunidad"
  },
 
]

const Antefoot = () => {
  return (
    <div>
        <h1 className='huno'> Complementa tu pizza</h1>

       <ul className='tarjeta_soda' >
        {
          bebidas.map((item)=> {
            return(
              <li >
                <div >

                  <h2 className='name_soda'>
                    {item.nombre}
                  </h2>
                  <img className='img_soda' src="https://s3.envato.com/files/081c2caa-c752-4956-8498-aa197a9eca2c/inline_image_preview.jpg" alt="latanegra" />
                  <p className='text_soda'> {item.descripcion} </p>

                  <input className='btn_soda' type="button" value="Añadir a mi orden" />

                </div>
              </li>
            )
          })
        }

       </ul>

       <div>

       <input className='text_coment' type="text" name="" id="" />
       
       <p className='text_sug' > Quejas, Sugerencias o dejanos un lindo comentario</p>

       <input className='btn_coment' type="button" value="Enviar comentario" />
      
       </div>

       
        
          
    </div>
  )
}

export default Antefoot