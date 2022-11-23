import React, {Component} from "react"
import styled from 'styled-components';

const Title = styled.h1`
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
`

export default class Header extends Component{
    render(){
        return(
            <div>
                <Title>Calculadora</Title>
            </div>
        )
    }
}