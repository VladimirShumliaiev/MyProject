import React from 'react';
import {useSelector} from "react-redux";
import AboutUsItem from "./AboutUsItem";

const AboutUsList = () => {
    const aboutList = useSelector(state => state.aboutAs.aboutUsTodo)
    return (
        <div>
            {
                aboutList.map(e => <AboutUsItem key={e.id}{...e}/>)
            }
        </div>
    );
};

export default AboutUsList;