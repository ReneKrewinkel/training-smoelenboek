import { useState, useEffect } from 'react'

import { fetchData } from './lib'
import { DataContext } from './context'

import Overview from './components/pages/Overview'

const App = () => {
  const [data, setData] = useState([])
  const [full, setFull] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  const resetFilter = () => {
    setData(full)
  }
  const filterPerson = (search) => {
    const result = data.filter(
      (item) =>
        item.firstname.toUpperCase().includes(search.toUpperCase()) ||
        item.lastname.toUpperCase().includes(search.toUpperCase())
    )
    setData(result)
  }

  useEffect(() => {
    fetchData().then((result) => {
      setFull(result.data)
      setData(result.data)
      setLoaded(true)
    })
  }, [])

  return (
    <DataContext.Provider value={{ data, filterPerson, resetFilter }}>
      {!isLoaded ? <h1>Spinner</h1> : <Overview />}
    </DataContext.Provider>
  )
}

export default App
