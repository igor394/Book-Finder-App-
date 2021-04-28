import React, {useCallback, useState} from 'react';
import Search from "./Search";
import BooksList from "./BooksList";
import Loader from "./Loader";
import ModalNotSearch from "./ModalNotSearch";
import {searchBooks} from "../utils/request";

const Main = () => {
    const [state, setState] = useState([])
    const [loader, setLoader] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const hendlerModal= useCallback(()=>{
        setModalShow(false);
    },[])

    const searchParams = async (params) => {
        if(!params){
            alert('enter params');
            return false;
        }
        setLoader(true)
        try{
            let result = await searchBooks(params);
            if (!result.data.items) {
                setModalShow(true);
            } else if (result.data.items) {
                setState(result.data.items)
            }
            setLoader(false)
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="container d-flex align-items-center flex-column">
            <Search searchParams={searchParams}/>
            {!loader ? <BooksList arr={state}/> : <Loader/>}
            <ModalNotSearch animation={false}  show={modalShow} onHide={hendlerModal}/>
        </div>
    );
};

export default Main;