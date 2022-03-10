import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ConnexionForm from './Components/ConnexionForm';
import InscriptionForm from './Components/InscriptionForm';
import Home from './Components/Home';




ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/connexion' element={<ConnexionForm />}/>
        <Route path='/inscription' element={<InscriptionForm />}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
