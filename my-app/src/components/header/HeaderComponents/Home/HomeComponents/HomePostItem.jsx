import React from 'react';

const HomePostItem = (props) => {
    return (
        <div key={props.id}>
            <img src="https://img.tsn.ua/cached/728/tsn-84ee4f9844c21d3af2b3cfbad2c9c711/thumbs/428x268/11/75/47324e04a2485d5bf16d6a549de57511.jpeg" alt=""/>
            <span> {props.text}</span>
        </div>
    );
};

export default HomePostItem;