import React from 'react';
import RoutingsHeader from "./header/HeaderComponents/RoutingsHeader/RoutingsHeader";
import RoutingsMain from "./Main/Routings Main/RoutingsMain";
import RouterReactLessons
    from "./Main/React Lessons/React Lessons Components/Routings React Lessons/RouterReactLessons";

const RoutingsCell = () => {
    return (
        <>
            <RoutingsHeader/>
            <RoutingsMain/>
            <RouterReactLessons/>

        </>
    );
};

export default RoutingsCell;