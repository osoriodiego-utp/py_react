import React, { useState, useEffect } from 'react'

import Header from '../components/Header'

const CompanyList = () => {
  const [companies, setCompanies] = useState([])
  const [editing, setEditing] = useState(0)

  function handleInputChange(event) {
    setCompanies(prev => {
      const company = prev.find(x => x.id === editing)
      company[event.target.name] = event.target.value
      return [...prev]
    })
  }

  useEffect(() => {
    loadCompanies()
  }, [])

  function update() {
    const company = companies.find(x => x.id === editing)
    const data = JSON.stringify(company)

    fetch(`http://localhost:8000/company`, {
      method: 'PUT',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.text()
        }
      })
      .catch(error => console.log(error))
      .finally(setEditing(0))

  }

  function onDelete(id) {
    fetch(`http://localhost:8000/company/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          loadCompanies()
          return response.text()
        }
      })
      .catch(error => console.log(error))
  }

  function loadCompanies() {
    fetch(`http://localhost:8000/companies`)
      .then(response => {
        if (response.status === 200) {
          return response.text()
        }
      })
      .then(responseText => {
        let data = JSON.parse(responseText)
        setCompanies(...[data])
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <Header title={'Empresas'} subtitle={'Listado de empresas guardadas.'} />
      <div className='container'>
        <table className={'table'}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Nit</th>
              <th>Telefono</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {companies && companies.map((company, i) => (
              <tr key={i}>
                <td>{company.id}</td>
                <td>
                  {editing === company.id
                    ? <input className='input' value={company.name || ""} name='name' onChange={handleInputChange} />
                    : company.name}
                </td>
                <td>
                  {editing === company.id
                    ? <input className='input' value={company.address || ""} name='address' onChange={handleInputChange} />
                    : company.address}
                </td>
                <td>
                  {editing === company.id
                    ? <input className='input' value={company.nit || ""} name='nit' onChange={handleInputChange} />
                    : company.nit}
                </td>
                <td>
                  {editing === company.id
                    ? <input className='input' value={company.phone || ""} name='phone' onChange={handleInputChange} />
                    : company.phone}
                </td>
                <td>
                  {editing === company.id
                    ? <button className={'button is-small'} onClick={update}>
                      guardar
                    </button>
                    : <button
                      className={'button is-small'}
                      onClick={() => setEditing(company.id)}
                    >
                      editar
                    </button>}
                  <button className={'button is-small'}
                    onClick={() => onDelete(company.id)}>
                    eliminar
                  </button>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CompanyList
