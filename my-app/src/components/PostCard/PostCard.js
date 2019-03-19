import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './PostCard.css';

class PostCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {image,title,description} = this.props;
        return (
            <Card className="PostCard-Card PostCard-Card_space-top-bottom container">
                <CardBody className="PostCard-CardBody row col-12">
                    <div className="PostCard-ImageBlock col-4">
                        <CardImg classname="PostCard-CardImg" src={image} alt="Card image"/> 
                    </div>
                    <div className="PostCard-InfoBlock PostCard-InfoBlock_position col-8">
                        <CardTitle className="PostCard-CardTitle"> 
                            {title}
                        </CardTitle>
                        <CardText className="PostCard-CardText">
                            {description}
                        </CardText>
                        <Button className="PostCard-Button PostCard-Button_position-right">
                                Uzzināt vairāk
                        </Button>
                    </div>
                </CardBody>
            </Card>
        )
    }
}
export default PostCard;