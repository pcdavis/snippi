import React, { Component } from 'react';
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Form from './components/Form/Form';
import SnippetList from './components/SnippetList/SnippetList'
import './App.css';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
                  searchTerm: '',
                  sortByTerm: '',
                  snippetsToDisplay: [ ]
                }
    
   this.handleGet = this.handleGet.bind(this);
   this.handleNewSnippet = this.handleNewSnippet.bind(this);
   this.handleSearch = this.handleSearch.bind(this);
   this.handleSearch = this.handleSearch.bind(this);
  }//end constructor

  componentWillMount(){
    axios.get('/api/snippets').then( (response) => {
      this.setState({ snippetsToDisplay: response.data})
    })
    .catch( (error) => { console.log("handleGet received an error")})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSearch = () => {
    console.log('handleSEarch fired')
    let searchParam = this.state.searchTerm;
    console.log(searchParam)
      axios.get(`/api/snippets/${searchParam}`).then( (response) => {
      this.setState({ snippetsToDisplay: response.data})
    })
      // this.setState({snippetsToDisplay: response.data});
      //console.log(this.state.snippetsToDisplay)})
    .catch( (error) => { console.log("handleGet received an error")})

  }
  

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
        // only use this line if you want to immediately update the list .then( (response) => { this.setState({snippetsToDisplay: response.data})})
        };
  


  render(){


    return (
    <MuiThemeProvider>

       <div className= "appBar">
          <AppBar
            title="SNIPPi"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <div className= "searchField" />
            <FloatingActionButton mini={true} secondary={true} >
            <ContentAdd />
            </FloatingActionButton>
       </div>

    <div className="hero-wrapper">
        <div className="hero">
            <h1>Making code easier|faster to write | , one snippet at a time.</h1>
            <TextField
                    hintText="Search by keyword"
                    name = "searchTerm" 
                    type="text" 
                    value={this.state.searchTerm} 
                    onChange={this.handleChange} />
            <RaisedButton label="Submit" primary type = "submit" value= "Submit" onClick = {this.handleSearch} />
            <div>{this.state.searchTerm}</div>
        </div>
        
    <div className="form-wrapper">
        <div><Form receiveSnippet = {this.handleNewSnippet} /></div>
    </div>
              <button 
                      onClick={ this.handleGet }>
                Axios.Get Test
              </button>
      <div className= "snippetList">
              <SnippetList sortByTerm = {this.state.sortByTerm} snippetArray = {this.state.snippetsToDisplay} />
      </div>
          
      
    </div> 
          
          
      
    </MuiThemeProvider>
    );
  }
}

export default App;
