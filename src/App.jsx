import './App.css'
import { lazy, Suspense } from 'react'

function App() {
  const ComponenteCarga = lazy(()=>import('./components/MyComponent'))
  return (
    <>
      <h1>My app</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <ComponenteCarga />
      </Suspense>
    </>
  )
}

export default App
