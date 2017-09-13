import React, { Component } from 'react';
import {Button, Modal} from "react-bootstrap";

class FinesModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({
            showModal: true
        });
    }

    handleCloseModal() {
        this.setState({
            showModal: false
        });
    }
    
    render() {
        return (
            <div>
        <Button 
            bsStyle="primary"
            onClick={this.handleOpenModal}>
            Pay
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
        )
    }
}

export default FinesModal