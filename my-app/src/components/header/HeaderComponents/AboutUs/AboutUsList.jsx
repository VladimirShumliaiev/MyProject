import React from 'react';
import {useSelector} from "react-redux";
import AboutUsItem from "./AboutUsItem";

const AboutUsList = () => {
    const todoList = useSelector(state => state.aboutUs.aboutTodo)
    return (
        <div>
            {
                todoList.map(e => <AboutUsItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default AboutUsList;