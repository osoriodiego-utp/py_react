import React, { useState, useEffect } from 'react'

import Header from '../components/Header'

const CompanyList = () => {
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    loadCompanies()
  }, [])

  function loadCompanies () {
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
        {companies.map((company, i) => {
          return <li key={i}>{company[1]}</li>
        })}
      </div>
    </>
  )
}

export default CompanyList
