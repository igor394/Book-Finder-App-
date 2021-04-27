import React from 'react';
import {Modal, Button} from "react-bootstrap";

const ModalNotSearch = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    The search has not given any results!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Please enter other text, or delete some characters!!!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalNotSearch;