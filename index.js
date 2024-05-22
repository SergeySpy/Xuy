import React from 'react'
import * as ReactDOMClient from 'react-dom/client';

const Xuy = "Хуй!"
const Pussy = "Puss!"


class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

   //Pussy = Pussy.bind(this)
   this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  
//<button onclick={console.log(Pussy)}>TEST MZFK</button>
  render(){
    return(
      <div>
        <form>
          <input id="pTitle" type="text" placeholder='Show Пизда!' value="test" />
        </form>

        <button value={console.log(SomeText)}>Press Xuy!</button>
        
        <p>{Pussy}</p>
      </div>
    );
  }
}
var SomeText = document.getElementById("pTitle").value()

class Main extends React.Component {
  render() {
    return(
      <React.StrictMode>
      <MyForm />
        
        <input type="text" placeholder='Show Джигурда!' ></input>
        <h1>{Xuy}</h1>
        <h2>Пизда!</h2>
        <h3>Джигурда!</h3>
      </React.StrictMode>
    )
  }
}

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <Main />
);
