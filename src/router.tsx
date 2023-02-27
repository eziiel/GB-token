import React from 'react'
import { Access } from './pages/access'

import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { Client } from './pages/client'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element ={<Access />} />
      <Route path='/client' element={<Client /> } />
    </Routes>
  )
}
