import React, {Component} from 'react';
import Foguete from './img/foguete.png';
import styled from 'styled-components';
import Header from './Header';

export const Calculadora = styled.div`
  background: lightgray;
  width: 25rem;
  height: 35rem;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 10px 10px 20px black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
  background: lightblue;
  box-shadow: 5px 5px 15px black;
  width: 5rem;
  height: 3rem;
  text-align: center;
  padding: 5px;
  font-size: 2rem;
  border-radius: 5px;
}
`
export const CaixaTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  padding: 10px;

  h1{
    font-family: 'Mochiy Pop One', sans-serif;
    color: darkblue;
    text-shadow: 8px 8px 10px black;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  img{
    width: 3rem;
    object-fit: contain;
  }
`
export const CaixaValores = styled.div`
  box-shadow: 8px 8px 20px black;
  border-radius: 10px;
  margin-top: 1rem;
  width: 15rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  input{
    width: 13rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 5px;
    border: none;
  }
`
export const CaixaBtn = styled.div`
  box-shadow: 8px 8px 20px black;
  border-radius: 10px;
  width: 15rem;
  height: 10rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
  button{
    width: 6rem;
    height: 30px;
    font-size: 1.3rem;
    margin-top: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }

  button:last-child{
      background-color: red;
      border: none;
      color: white;
    }
`
export default class App extends Component{
  state = {
    n1: "" ,
    n2: "",
    resultado:"?"
  }

  //primeiroInput:
  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    })
  }

  //segundoInput:
  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    })
  }

  //Funções dos botões:
  somar = () => {
    this.setState(
      {
      resultado: this.state.n1 + this.state.n2
      }
    )
  }

  subtrair = () => {
    this.setState(
      {
        resultado: this.state.n1 - this.state.n2
      }
    )
  }

  dividir = () => {
    this.setState(
      {
      resultado: this.state.n1 / this.state.n2
      }
    )
  }

  multiplicar = () => {
    this.setState(
      {
        resultado: this.state.n1 * this.state.n2
      }
    )
  }

  limpar = () => {
    this.setState(
      {
        n1: "" ,
        n2: "",
        resultado:""
      }
    )
  }

  render(){
    return(
      <Calculadora>
        <Header/>

        <CaixaTitulo>
                <h1>Calculadora</h1>
                <img src={Foguete} alt= "Foguete Vai Na Web"/>
        </CaixaTitulo>
        
        <CaixaValores>
          <input onChange={this.handleChange1} value={this.state.n1}/>
          <input onChange={this.handleChange2} value={this.state.n2}/>
        </CaixaValores>
        
        <CaixaBtn>
          <button onClick={this.somar}>+</button>
          <button onClick={this.subtrair}>-</button>
          <button onClick={this.dividir}>/</button>
          <button onClick={this.multiplicar}>*</button>
          <button onClick={this.limpar}>Limpar</button>
        </CaixaBtn>

        <h2>{this.state.resultado}</h2>

      </Calculadora>
    )
  }
}