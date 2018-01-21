import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Snippet extends Component {
    render(){
       return (
            <div>



            <Card>
  
    <CardTitle title={this.props.snippetObj.title} subtitle={this.props.snippetObj.subtitle} />
    <CardText>
    {this.props.snippetObj.snippetText}
    </CardText>
    
  </Card>

            </div>
        );
    }
}


export default Snippet;

