import React, { Component } from 'react';
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Form from './components/Form/Form';
import SnippetList from './components/SnippetList/SnippetList'
import './App.css';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
                  snippetsToDisplay: [
                    {
                      language: 'java',
                      name: 'PETER',
                      title: 'This is my snippet title ',
                      subtitle: 'easy snippet for a quick form',
                      snippetText: 'Hello World ',
                      url: 'www.google.com',
                      tags: 'js'      
                    },
                    {
                      language: 'java',
                      name: 'paul',
                      title: 'react forms ',
                      subtitle: 'easy snippet for a quick form',
                      snippetText: 'lskdjf fsldkjs dfjdksfj dslkdjsdjf sdljf sldkfj ',
                      url: 'www.google.com',
                      tags: 'js'      
                    },
                    {
                      language: 'java',
                      name: 'paul',
                      title: 'react forms ',
                      subtitle: 'easy snippet for a quick form',
                      snippetText: 'lskdjf fsldkjs dfjdksfj dslkdjsdjf sdljf sldkfj ',
                      url: 'www.google.com',
                      tags: 'js'      
                    }
                  ]
                }
    
   this.handleGet = this.handleGet.bind(this);
   this.handleNewSnippet = this.handleNewSnippet.bind(this);
  }//end constructor

  

    handleGet = () => {
      axios.get('/api/snippets').then( (response) => {
        this.setState({ snippetsToDisplay: response.data})
      })
        // this.setState({snippetsToDisplay: response.data});
        //console.log(this.state.snippetsToDisplay)})
      .catch( (error) => { console.log("handleGet received an error")})
      };


    handleNewSnippet = (snippet) => {
      // console.log("handleNewSnippet fired and received this: ")
      // console.log(snippet)
        axios.post('/api/snippets/new',snippet)
        .then( (response) => { this.setState({snippetsToDisplay: response.data})})
        };
  


  render(){


    return (
    <MuiThemeProvider>

        <AppBar
          title="SNIPPi"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

    <div className="wrapper">
        <div className="hero">
            <h1>Making code easier|more fun to write | , one snippet at a time.</h1>
        </div>
        
    <div className="form-wrapper">
        <div><Form receiveSnippet = {this.handleNewSnippet} /></div>
    </div>
              <button 
                      onClick={ this.handleGet }>
                Axios.Get Test
              </button>
      <div className= "snippetList">
              <SnippetList snippetArray = {this.state.snippetsToDisplay} />
      </div>
          
      
    </div> 
          
          
      
    </MuiThemeProvider>
    );
  }
}

export default App;
