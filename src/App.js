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
import AppBar2 from './components/AppBar/AppBar2'
import './App.css';


/*
Here are the things related to Extras.textRotate. It fails to compile. I think because it needs jquery. ask instructors.
import Extras from './assets/Extras.js';
here's the call to the function: textRotate(".rotate",1,"ease",5000,"#F30A49"
<div className ="rotate">
<div class="sentence">
  <p>Making code  </p>
  <span> 
    <div class="rotate">
    <p><span>easier</span></p>
    <p><span>faster</span></p>

    </div>
  </span>
  <p> to write...</p>
  <br />
  <p> one snippet at a time.</p>
</div> 
</div> 
////////////////////////end of text rotate */


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
                  showForm: 'false',
                  searchTerm: '',
                  sortByTerm: '',
                  snippetsToDisplay: [ ]
                }
    
   this.handleGet = this.handleGet.bind(this);
   this.handleNewSnippet = this.handleNewSnippet.bind(this);
   this.handleSearch = this.handleSearch.bind(this);
   this.handleSearch = this.handleSearch.bind(this);
   this.handleClick = this.handleClick.bind(this);
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
    this.setState({searchTerm: ''})

  }

  handleClick = (e) =>{
    if(this.state.showForm){
      this.setState({showForm: false})
    } else {
      this.setState({showForm: true})
    }
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
const my_mui_styles = {
  inputColor: {
    color: "white"
  }
}

    return (
    <MuiThemeProvider>

      

      <div className= "appBar">

        <div className="header-bar">
          <h3 className="logo">Snippeti</h3>
          <div onClick ={this.handleClick} className="newSnippit"><a> + Snippet </a></div>
          </div>

      
       </div>

<div className="hero-wrapper">

    <div className="hero">
        <div className="hero-text">
          <h1>Making code easier to write... </h1>
          <h1 className="h1-indent">one snippet at a time. </h1>
        </div>

        <div className="search-field">
              <div className="input-field">
                <TextField
                        style= {{background: "white"}}
                        hintText="Search by keyword"
                        name = "searchTerm" 
                        type="text" 
                        value={this.state.searchTerm} 
                        onChange={this.handleChange} />
              </div>

             <RaisedButton label="Submit" primary type = "submit" value= "Submit" onClick = {this.handleSearch} />
        </div>
        
    </div>
        
    <div className="form-wrapper">
        <div> { this.state.showForm && <Form receiveSnippet = {this.handleNewSnippet} />} </div>
    </div>

</div> 
              
     <div className="mainContent">
        <div className= "snippetList">
                <SnippetList sortByTerm = {this.state.sortByTerm} snippetArray = {this.state.snippetsToDisplay} />
        </div>
     </div>


      
    </MuiThemeProvider>
    );
  }
}

export default App;
