import React from 'react';
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div className='d-flex align-items-center' style={{height: '400px'}}>
            <Spinner animation="border" variant="light" />
        </div>
    );
};

export default Loader;