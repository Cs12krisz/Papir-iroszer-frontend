import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import schoolLogo from './assets/kando.jpg'
import { Route, Routes } from 'react-router-dom'
import { Items } from './Items'
import './App.css'

const Index = () => (
  <>
  <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.kkszki.hu" target="_blank"><img src={schoolLogo} alt="Iskola logó" width="200" /></a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <p>
          Módosítsd az <code>src/App.jsx</code>-t és mentsd le, hogy tesztelhesd a HMR-t!
        </p>
      </div>
      <p className="read-the-docs">
         Kattints a React, a Kandó, vagy a Vite logókra, további információkért!
      </p>
  </>
);


export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/items' element={<Items/>}></Route>
        <Route path='/' element={<Index/>}></Route>
      </Routes>
    </>
  )
}

export default App
