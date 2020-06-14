import css from './Preloader.module.css';
import React from "react";
import preloaderSvg from '../../../assets/images/2.svg';


let Preloader = () => {
    return <div className={css.preloaderSvg}>
        <img src={preloaderSvg} alt={"preloader"}/>
    </div>
}
export default Preloader;