import React from 'react';
import {Button} from "react-bootstrap";

const BooksList = ({arr}) => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {arr.map(item=>
                <div key={item.id} className='item-book'>
                    <div className='d-flex justify-content-center'><img className='item-img' src={item.volumeInfo.imageLinks.thumbnail} alt="ava"/></div>
                    <div style={{padding: '20px'}} className='d-flex justify-content-center'><span>"{
                        item.volumeInfo.title.length < 45 ? item.volumeInfo.title : item.volumeInfo.title.slice(0, 55) + '...'
                    }"</span></div>
                    <div className='d-flex justify-content-center'>{item.volumeInfo.publishedDate}</div>
                    <div className='d-flex justify-content-center'><Button target="_blank" style={{bottom:'0 auto'}} href={item.volumeInfo.previewLink} variant="secondary">Read the book</Button>   </div>
            </div>)}
            
        </div>
    );
};

export default BooksList;