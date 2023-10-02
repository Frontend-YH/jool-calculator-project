import React, { Component } from 'react';
import VATCalculatorLang from './VATCalculatorLang';
import './VATCalculator.css';

// props: 

// lang: swedish || english
// default lang: swedish
// see VATCalculatorLang.js

// gui: 0 or 1
// default: 1
// gui: 0 requires that totalPrice is sent as a prop. percVAT can also be sent as a prop with gui: 0.
// Example: <VATCalculator gui="0" totalPrice={1000} percVAT={1.12}/>
// Skipping percVAT and it will default to 1.25 (25%)

class VATCalculator extends Component {
    constructor(props) {
        super(props);
        let initialState;

        if (props.gui === "0") {
            initialState = {
                lang: props.lang || "swedish",
                gui: "0", 
                totalPrice: props.totalPrice || "prop totalPrice not sent",
                percVAT: props.percVAT || 1.25,
                result: 0,
                result1: (props.totalPrice/(props.percVAT || 1.25)) || 0,
                result2: (props.totalPrice - (props.totalPrice/(props.percVAT || 1.25))) || 0,
                result3: props.totalPrice
              };            

        } else {
            initialState = {
                lang: props.lang || "swedish",
                gui: "1",
                totalPrice: 0,
                percVAT: 1.25,
                result: 0,
                result1: 0,
                result2: 0
              };
        }
    
        this.state = initialState;
      }

  handleTotalPriceChange = (event) => {
    this.setState({ 
        totalPrice: parseFloat(event.target.value)
    });
  }

  handlePercVATChange = (event) => {
    this.setState({ 
        percVAT: parseFloat(event.target.value) 
    });
  }

  calcVAT = () => {
    const { totalPrice, percVAT } = this.state;
    this.setState({ 
        result: totalPrice - (totalPrice / percVAT) 
    });
  }

  calcPrice = () => {
    const { totalPrice, percVAT } = this.state;
    this.setState({ 
        result: (totalPrice / percVAT)
    });
  }

  calcAll = () => {
    const { totalPrice, percVAT } = this.state;
    this.setState({ 
        result1: totalPrice - (totalPrice / percVAT), 
        result2: (totalPrice / percVAT),
        result3: totalPrice
    });
  }
 

  render() {
    const { result, result1, result2, result3, lang, gui } = this.state;

    if(gui===0) { this.calcAll(); }

    return (
        <div>

        {gui === "1" ? (

            <div className="calculator">
            <h2>{VATCalculatorLang[lang].VATCalculator}</h2>
            <label htmlFor="totalPrice">{VATCalculatorLang[lang].totalPrice}</label><input type="number" id="totalPrice" onChange={this.handleTotalPriceChange}/>
            <label htmlFor="percVAT">{VATCalculatorLang[lang].percVAT}</label><select id="percVAT" onChange={this.handlePercVATChange}>
              <option value={1.25}>25%</option>
              <option value={1.12}>12%</option>
              <option value={1.06}>6%</option>
            </select>
            <button onClick={this.calcVAT}>{VATCalculatorLang[lang].calcVAT}</button>
            <button onClick={this.calcPrice}>{VATCalculatorLang[lang].calcPriceEVAT}</button>
            <div>
              <p>{VATCalculatorLang[lang].result}: {result.toFixed(2)}</p>
            </div>
          </div>

        ) : (
        
        <div>
            <p>{VATCalculatorLang[lang].result1}: {result1.toFixed(2)}</p>
            <p>{VATCalculatorLang[lang].result2}:  {result2.toFixed(2)}</p>
            <p>{VATCalculatorLang[lang].result3}:  {result3.toFixed(2)}</p>
         </div>

        )} 

        </div>

    );
  }
}

export default VATCalculator;