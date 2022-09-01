import React from 'react';
import style from './Home.module.css'
import HeaderItem from "./HomeComponents/HomeItem";


function Home() {
    return (
        <div className={style.item}>
            <div className={style.item}>
                <img src="https://miro.medium.com/0*T_pixc48DX2PIKh5.png" alt=""/>
                <div className={style.item2}>
                    <img src="https://thypix.com/wp-content/uploads/2021/05/baby-yoda-74-408x239.jpg" alt=""/>
                    <span> hi </span>
                </div>
                <HeaderItem/>
            </div>
        </div>
    );
}

export default Home;