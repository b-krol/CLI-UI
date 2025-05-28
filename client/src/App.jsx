import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchUsers } from './services/api'
import './App.css'
import Layout from './layout'

//temporary
import ContentExample from './components/ContentExample'
import ContentExample2 from './components/ContentExample2'
import ConfigurationCreationForm from './components/ConfigurationCreationForm'
import ConfigurationsTable from './components/ConfigurationsTable'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContentExample />} />
          <Route path="/ContentExample2" element={<ContentExample2 />} />
          <Route path="/NewConfiguration" element={<ConfigurationCreationForm/>} />
          <Route path="/ManageConfigurations" element={<ConfigurationsTable/>} />
          <Route path="/Chat" element={<ConfigurationCreationForm/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}