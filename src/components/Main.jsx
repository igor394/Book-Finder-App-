import React, {useState} from 'react';
import Search from "./Search";
import BooksList from "./BooksList";
import Loader from "./Loader";
import ModalNotSearch from "./ModalNotSearch";
import {searchBooks} from "../utils/request";

const Main = () => {
    const [state, setState] = useState([])
    const [loader, setLoader] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);

    const searchParams = async (params) => {
        setLoader(true)
        let result = await searchBooks(params);
        if (!result) {
            setModalShow(true);
        } else if (result) {
            setState(result)
        }
        setLoader(false)
    }

    return (
        <div className="container d-flex align-items-center flex-column">
            <Search searchParams={searchParams}/>
            {!loader ? <BooksList arr={state}/> : <Loader/>}
            <ModalNotSearch show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
};

export default Main;