import React from "react";

export default class Main extends Component{
    state={
        n1: "",
        n2: "",
        result: ""
    }

    //primeiroInput: e/event vai abrir
    handleChange1 = (event) => {
    // this.setState({n1:event.target.value})
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

    render(){
        return(
            <div>
                <input/>
                <input/>
                <button>*</button>
                <h2>resultado</h2>
            </div>
        )
    }
}