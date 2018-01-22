import React from 'react';
import Snippet from '../Snippet/Snippet';
import muiThemeable from 'material-ui/styles/muiThemeable';

const SnippetList = (props) => (
<div>

  <div className="SnippetList">
        {this.props.snippetArray.map( (snippet) =>{
        return <Snippet key={snippet.id} snippetObj = {snippet} />
        })}
  </div>

</div>
);
      

export default muiThemeable()(SnippetList);




