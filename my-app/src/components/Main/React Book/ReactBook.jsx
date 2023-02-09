import React from 'react';
import './ReactBook.css'
import ReactBookNavLink from "./ReactBookNavLink/ReactBookNavLink";
import ReactBooksRouting from "./ReactBookRouting/ReactBooksRouting";

const ReactBook = () => {
    return (
        <div className={'item'}>
            <ReactBookNavLink/>
                <hr/>
            <ReactBooksRouting/>
        </div>
    );
};

export default ReactBook;