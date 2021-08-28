import React from 'react'

import 'bulma/css/bulma.min.css'

const Header = ({ title, subtitle }) => {
  return (
    <section className='hero'>
      <div className='hero-body'>
        <p className='title'>{title}</p>
        <p className='subtitle'>{subtitle}</p>
      </div>
    </section>
  )
}

export default Header
