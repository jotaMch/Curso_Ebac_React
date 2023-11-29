import React from 'react';
import { Route, Routes, BrowserRouter as Router, Form } from 'react-router-dom';
import Header from './components/header/Header';
import FormToList from './components/form/Form';
import ListOfForm from './components/list/content/List';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/form" element={<FormToList />} />
              <Route path="/list" element={<ListOfForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


