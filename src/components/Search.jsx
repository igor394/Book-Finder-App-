import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const Search = ({searchParams}) => {
    const [state, setState] = useState('');

    return (
        <div style={{paddingTop: '40px'}}>
            <Form onSubmit={(e) => {
                e.preventDefault();
                searchParams(state);
                setState('')
            }}>
                <div className='d-inline-flex flex-wrap justify-content-center'>
                    <div>
                        <input placeholder='Enter part of the book title' className='input-search' type="text"
                               onChange={(e => setState(e.target.value))} value={state}/>
                    </div>
                    <div className='btn-search'><Button type='submit' variant="outline-secondary">Search</Button></div>
                </div>
            </Form>
        </div>
    );
};

export default Search;