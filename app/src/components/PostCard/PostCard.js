import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './PostCard.css';

class PostCard extends Component{
    render(){
        return (
            <Card className="PostCard-Card PostCard-Card_space-top-bottom container">
                <CardBody className="PostCard-CardBody row col-12">
                    <div className="PostCard-ImageBlock col-4">
                        <CardImg classname="PostCard-CardImg" top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image"/> 
                    </div>
                    <div className="PostCard-InfoBlock PostCard-InfoBlock_position col-8">
                        <CardTitle className="PostCard-CardTitle"> 
                            Raksta nosaukums
                        </CardTitle>
                        <CardText className="PostCard-CardText">
                            Raksta īss apraksts.
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