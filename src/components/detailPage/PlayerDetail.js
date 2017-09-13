import React, { Component } from 'react';
import { Row, Col, Image, Form, FormGroup, Tabs, Tab, ButtonToolbar, Button, Modal, OverlayTrigger } from "react-bootstrap";
import FinesTable from "./FinesTable.js";
import FinesModal from "./Modal.js";

const findPlayer = (players, id) => {
    var player = players.filter(player => {
        if(player.id == id) {
            return player;
        }
    });

    if (player.length > 1) {
        throw Error("Duplicate ID");
    } else if (player.length === 0) {
        throw Error("ID doesn't exist");
    } else {
        return player[0]
    }
};

const renderTable = fines => {
    if (fines && fines.length > 0) {
            return  (<div>
                        <FinesTable fines={fines}/>
                        <ButtonToolbar>
                        </ButtonToolbar>
            </div>);
    } else {
        return  <h3>No fines to display</h3>;
    }
};

class PlayerDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            player: findPlayer(props.route.data, props.params.id),
            showModal: false
        };
    }
    
    render() {
        const {player} = this.state;

        return (
        <div className="playerDetail">
        <Row className="show-grid">
            <Col xs={4} md={2}> <Image src={".." + player.src} thumbnail /></Col>
            <Col xs={8} md={10}>
                <FormGroup>
                    <Form horizontal>
                        <Col sm={10} className="detailInfoLabel">
                            <h2>{"# " + player.number}</h2> 
                        </Col>
                    </Form>
                    <Form horizontal>
                        <Col sm={4} className="detailInfoLabel">
                            <h4>First name: </h4> 
                        </Col>
                        <Col sm={6}>
                            <h4>{player.firstName}</h4>
                        </Col>
                    </Form>
                    <Form horizontal>
                        <Col sm={4} className="detailInfoLabel">
                            <h4>Lastname: </h4> 
                        </Col>
                        <Col sm={6}>
                            <h4>{player.lastname}</h4>
                        </Col>
                    </Form>
                </FormGroup>
            </Col>
        </Row>

        <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
            <Tab eventKey={1} title="Unpaid">
                {renderTable(player.fines.unpaid)}
            </Tab>
            <Tab eventKey={2} title="Paid">
                {renderTable(player.fines.paid)}
            </Tab>
        </Tabs>
        <FinesModal/>
    </div>
        )
    }
}

export default PlayerDetail