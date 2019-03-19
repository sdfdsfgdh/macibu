import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './usercard.css';

class UserCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {image,name} = this.props;
        return (
            <Card className="UserCard-Card UserCard-Card_space-top-bottom container-fluid">
                <CardBody className="UserCard-CardBody row col-12">
                    <div className="UserCard-ImageBlock col-3">
                        <CardImg className="UserCard-Image" src={image} alt="User image"/>
                    </div>
                    <div className="UserCard-InfoBlock UserCard-InfoBlock_position col-9">
                        <CardText className="UserCard-CardText">
                            {name}
                        </CardText>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default UserCard;