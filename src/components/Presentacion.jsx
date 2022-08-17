import React from 'react'

const pizzas = [
  {
    nombre: "Pizza especial de Cesos ",
    descripcion: "Una pizza digna de un zombie",
    ingredientes:"Chorizo, Jamón ibérico , cecina, fiambre, queso"
  },
  {
    nombre: "Pizza Canibal",
    descripcion: "Con toda la carne fresca de un humano vivo",
    ingredientes:"Lomo, jamón, chorizo, tocino, sangre (salsa de tomate), queso "
  },
  {
    nombre:"Pizza de Intestinos" ,
    descripcion: "Es ligera solo para zombies que les gusta lo tranqui",
    ingredientes:"Peperonies, vísceras, longaniza, salchicha,queso "
  },
  {
    nombre:"Pizza de Cabeza" ,
    descripcion: "¡Hay un poco ojos en mi pizza! ",
    ingredientes:" Salami, fiambre, mortadela, queso ",
  },
  {
    nombre:"Pizza  para Zombies veganos (?)" ,
    descripcion: "Raro pero cierto, estos zombies cambiaran el mundo",
    ingredientes:"Pimientos, Champiñones,Tomates cherry, Aguacate "
  },
  {
    nombre:"Pizza para Zombies tiernos" ,
    descripcion: "Sí, hay mas que pizza con piña",
    ingredientes:" Queso, Fresas, Duraznos, Piña, Moras",
  },
]

const Presentacion = ({pizzamenu}) => {
  return (
    <div>
      <h2 className='menu-title'>{pizzamenu}</h2>
      
      <ul className='tarjetas-menu'>
        {
          pizzas.map((item) => {
            return(
              <li className='conjunto'>
                <div >

                  <h1 className='title_descrip'>{item.nombre}</h1>

                  <h3 className='descrip_font'>{item.descripcion}</h3>

                  <img className='img_ref' src="https://sunoticiero.com/wp-content/uploads/2021/11/istockphoto-938742222-612x612-1.jpg" alt="" />

                  <p className='text_ing'>{item.ingredientes}</p>

                  <input className='boton_order' type="button" value="Ordenar" />

                </div>
              </li>
            )
          })
        }
      </ul>
        
    </div>
  )
}



export default Presentacion