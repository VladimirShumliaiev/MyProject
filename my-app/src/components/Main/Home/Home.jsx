import React from 'react';
import style from './Home.module.css'
import TextereaMain from "../TextereaMine/TextereaMain";
import ButtonMain from "../ButtonMain/ButtonMain";

function Home() {
    return (
        <div className={style.item}>
            <div className={style.item}>
                <img src="https://miro.medium.com/0*T_pixc48DX2PIKh5.png" alt=""/>
                <div className={style.item2}>
                    hi
                </div>
                <TextereaMain />
                <ButtonMain />

            </div>
        </div>
    );
}

export default Home;