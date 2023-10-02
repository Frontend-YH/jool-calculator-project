import { useState } from 'react';
import './App.css'
import VATCalculatorPage from './pages/VATCalculatorPage'
import NextCalculatorPage from './pages/NextCalculatorPage';

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"

}

function App() {

  const [activeComponent, setActiveComponent] = useState(); 

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  let component;

  switch (activeComponent) {
    case 'VATCalculator':
      component = <VATCalculatorPage />;
      break;
    case 'NextCalculator':
      component = <NextCalculatorPage />;
      break;
    default:
      component = null; 
      break;
  }

  return (
    <>
      <div style={container}>       
      <button onClick={() => handleComponentChange('VATCalculator')}>Show VAT Calculator</button>
      <button onClick={() => handleComponentChange('NextCalculator')}>Show Next Calculator</button>

      {component}
        </div>
    </>
  )
}

export default App
