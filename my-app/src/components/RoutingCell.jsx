import React from 'react';
import RoutingMain from "./Main/Routing Main/RoutingMain";
import RoutingHeader from "./header/HeaderComponents/RoutingHeader/RoutingHeader";
import RouterReactLessons
    from "./Main/React Lessons/React Lessons Components/Routings React Lessons/RouterReactLessons";

const RoutingCell = () => {
    return (
        <>
            <RoutingHeader/>
            <RoutingMain/>
            <RouterReactLessons/>
        </>
    );
};

export default RoutingCell;