import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import MenuItem from 'material-ui/MenuItem';

//extra code that might be used later:
/* <SelectField
    floatingLabelText="What code language?"
    value={this.state.language}
    onChange={this.handleChange}
    >
    <MenuItem value={"javascript"} primaryText="JavaScript" />
    <MenuItem value={"html"} primaryText="HTML" />
    <MenuItem value={"css"} primaryText="CSS" />
    <MenuItem value={"react"} primaryText="React" />
    <MenuItem value={"material-ui"} primaryText="material-ui" />
    </SelectField>
    <br />
    
     <h1>This.state.name</h1>
            <h2>{this.state.name}</h2>
            <h1>This.state.title</h1>
            <h2>{this.state.title}</h2>
            <h1>This.state.subtitle</h1>
            <h2>{this.state.subtitle}</h2>
            <h1>This.state.snippetText</h1>
            <h2>{this.state.snippetText}</h2>
            <h1>This.state.url</h1>
            <h2>{this.state.url}</h2>*/

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
                name: '',
                title: '',
                subtitle: '',
                snippetText: '',
               
                    };//End of state   
                    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }//End of constructor


    handleChange = (event) => {        
        this.setState({ [event.target.name]: event.target.value });
        }

    handleSubmit = (event) => {
        let newSnippet = {
            name:this.state.name,
            title:this.state.title,
            subtitle:this.state.subtitle,
            snippetText:this.state.snippetText,
        }
    //console.log('sumbit just sent a new snippet: ' + newSnippet)
    event.preventDefault();
    //console.log(newSnippet);
    this.props.receiveSnippet(newSnippet);
    this.setState({
                name: '',
                title: '',
                subtitle: '',
                snippetText: '',
    })

    }



    render(){


    return (
        <div>
            <form>
            
                

                <TextField
                    hintText="Snippet author"
                    name = "name" 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleChange} />
                    <br/>
                              
                <TextField
                    hintText="Snippet title"
                    name = "title" 
                    type="text" 
                    value={this.state.title} 
                    onChange={this.handleChange} />
                    <br/>
                             
                <TextField
                    hintText="A short subitle"
                    name = "subtitle" 
                    type="text" 
                    value={this.state.subtitle} 
                    onChange={this.handleChange} />
                    <br/>
                
                <TextField
                    hintText="Place your snippet here"
                    name = "snippetText" 
                    type="text" 
                    value={this.state.snippetText} 
                    onChange={this.handleChange} />
                    <br/>
                                   
                            
                <RaisedButton label="Submit" primary type = "submit" value= "Submit" onClick = {this.handleSubmit} />
            

        </form>

           
            
        

        </div>
    );
}
}


export default Form;