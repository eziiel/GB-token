import React from 'react'
import { Access } from './pages/access'

import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { Client } from './pages/client'
import { ExtratoFinanceiro } from './pages/client/components/extratoFinanceiro'
import { Boletos } from './pages/client/components/boletos'
import { NotasFiscais } from './pages/client/components/notasFiscais'
import { Atendimentos } from './pages/client/components/atendimentos'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element ={<Access />} />
      <Route path='/client' element={<Client /> }> 
        <Route path='/client/extratosfinanceiros' element={<ExtratoFinanceiro />} />
        <Route path='/client/boletos' element={<Boletos  />} />
        <Route path='/client/notasfiscais' element={<NotasFiscais  />} />
        <Route path='/client/atendimentos' element={<Atendimentos  />} />
      </Route>
    </Routes>
  )
}
