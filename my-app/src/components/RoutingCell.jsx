import React from 'react';
import RoutingMain from "./Main/Routing Main/RoutingMain";
import RoutingHeader from "./header/HeaderComponents/RoutingHeader/RoutingHeader";
import RouterReactLessons from "./Main/React Lessons/React Lessons Components/Routings React Lessons/RouterReactLessons";
import OneTestRouting from "./Main/React Tests/Tests Componnets/oneTest/OneTestRouting";

const RoutingCell = () => {
    return (
        <>
            <RoutingHeader/>
            <RoutingMain/>
            <RouterReactLessons/>
            <OneTestRouting/>
        </>
    );
};

export default RoutingCell;