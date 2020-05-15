import React, {Component} from 'react';
import './App.css'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      joke: ''
    }
  }

  componentDidMount(){
    this.handleClick()
  }
    
  handleClick = () => {
      fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "5f52f5f4e2msh63751c7be2936f2p16247djsnd8f63484945f",
		"accept": "application/json"
	}
  })
  .then(response =>  response.json() )
  .then(result => {
    console.log(result.value)
    this.setState({
      joke: result.value
    })
  })
  .catch(err => {
	  console.log(err);
  });
}
    
  
  render(){
    return (
      <div className="App">
      <h1>Chuck Norris joke generator</h1>
      <div className='buttoncontainer'><button className='button' onClick={this.handleClick}>NEW JOKE</button></div>

        <div className='card'>
        {this.state.joke}
        
        
        </div>
      </div>
    );
  }
  
}

export default App;
