import React from 'react';
import logo from './resources/images/logo.svg';
import './resources/styles/App.css';
import InputField from './components/inputs/InputField';
import Events from './components/inputs/Events';
import categories from './mock/categories.json';

function App() {
  return (
    <div className="App">
      <InputField placeholder="Busque por item ou loja"/>  
      <InputField placeholder="Bucar por categoria"/>
      <Events loading={false} categories={categories}/>
    </div>
  );
}

export default App;
