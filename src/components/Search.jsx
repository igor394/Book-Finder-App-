import React, {useCallback, useState} from 'react';
import {Button, Form} from "react-bootstrap";

const Search = ({searchParams}) => {
    const [state, setState] = useState('');
    const handlerTarget = useCallback( (e)=>{
        setState(e.target.value);
    },[])

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
                               onChange={handlerTarget} value={state}/>
                    </div>
                    <div className='btn-search'><Button type='submit' variant="outline-secondary">Search</Button></div>
                </div>
            </Form>
        </div>
    );
};

export default Search;