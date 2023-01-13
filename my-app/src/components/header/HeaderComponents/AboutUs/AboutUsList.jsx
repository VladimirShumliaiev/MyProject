import React from 'react';
import {useSelector} from "react-redux";
import AboutUsItem from "./AboutUsItem";

const AboutUsList = () => {
    const todoList = useSelector(state => state. aboutUs. aboutTodo)
    return (
        <ol>
            {
                todoList.map(e => <AboutUsItem key={e.id} {...e}/>)
            }
        </ol>
    );
};

export default AboutUsList;