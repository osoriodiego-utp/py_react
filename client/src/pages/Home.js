import React, { useState } from 'react'

import Header from '../components/Header'

const Home = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    nit: '',
    phone: ''
  })

  function handleInputChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log('FOMR: ', form)

    const data = JSON.stringify(form)
    // const data = form

    fetch(`http://localhost:8000/company/`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.text()
        }
      })
      .then(responseText => {
        console.log(responseText)
      })
      .catch(error => console.log(error))
  }
  return (
    <>
      <Header
        title={'Inicio'}
        subtitle={'Formulario de creación de una empresa.'}
      />
      <div className='container'>
        <div className='columns is-mobile'>
          <div className='column is-three-fifths is-offset-one-fifth'>
            <div className='box'>
              <form onSubmit={handleSubmit}>
                <div className='field'>
                  <label>Nombre: </label>
                  <p className='control'>
                    <input
                      name='name'
                      type='text'
                      className='input'
                      placeholder='Nombre de la empresa'
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
                <div className='field'>
                  <label>Dirección: </label>
                  <p className='control'>
                    <input
                      name='address'
                      type='text'
                      className='input'
                      placeholder='Dirección'
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
                <div className='field'>
                  <label>Nit: </label>
                  <p className='control'>
                    <input
                      name='nit'
                      type='text'
                      className='input'
                      placeholder='Nit'
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
                <div className='field'>
                  <label>Teléfono: </label>
                  <p className='control'>
                    <input
                      name='phone'
                      type='string'
                      className='input'
                      placeholder='Teléfono'
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
                <div className='level'>
                  <div className='level-item level-right'>
                    <button className='button is-dark'>Guardar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
