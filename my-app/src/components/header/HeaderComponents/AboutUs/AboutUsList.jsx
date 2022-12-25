import React from 'react';
import {useSelector} from "react-redux";
import AboutUsItem from "./AboutUsItem";

const AboutUsList = () => {
    const list = useSelector(state => state.aboutUs.todo)
    return (
        <div>
            {
                list.map(e => <AboutUsItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default AboutUsList;