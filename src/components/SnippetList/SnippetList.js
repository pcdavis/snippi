import React from 'react';
import Snippet from '../Snippet/Snippet'

class SnippetList extends React.Component {
  render(){
      console.log("hello from snippet list. below is a c-log of props.snippetArray")
      console.log(this.props.snippetArray)
    return(
      <div className="SnippetList">
        {this.props.snippetArray.map( snippet =>{
        return <Snippet key={snippet.id} snippetObj = {snippet} />
        })}
      </div>
    )
  }
};

export default SnippetList;
