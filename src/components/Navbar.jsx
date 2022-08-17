import React from 'react'

const Navbar = () => {
  return (
    <div>
       <header className='header_head'>

          <nav  className='header_nav'>
          <h1>Pizza <span className='strong'>Zombie</span> </h1>

          <a className='nav_a' href="/">Conocenos</a>
          <a className='nav_a' href="/">Ordena</a>
          <a className='nav_a' href="/">Especialidades</a>
          <a className='nav_a' href="/">Home</a>
          </nav>
             
       </header>


    </div>
  )
}

export default Navbar



