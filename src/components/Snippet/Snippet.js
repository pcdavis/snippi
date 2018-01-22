import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Snippet extends Component {
    render(){
       return (
            <div>



<Card>
  
    <CardTitle title={this.props.snippetObj.title} subtitle={this.props.snippetObj.subtitle} />
    <CardText>
    By: {this.props.snippetObj.name}
    </CardText>
    <CardText>
    {this.props.snippetObj.snippetText}
    </CardText>
    <div>
        <p> </p>
        </div>
    
</Card>

            </div>
        );
    }
}


export default Snippet;

