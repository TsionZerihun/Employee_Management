import Nav from "./Nav"
import { useState } from "react"
import styles from "./Bar.module.css"

const Bar = () => {

    const [icon, setIcon] = useState("/img/icon-hamburger.svg");

    function handleClick(e) {
        e.target.getAttribute("src").includes("hamburger") ? 
        setIcon("/img/icon-close.svg") : 
        setIcon("/img/icon-hamburger.svg");
        document.querySelector("nav").classList.toggle(styles.open);
        document.body.classList.toggle("lockScroll");
    }

    return (
        <div py- className={styles.top_bar}>
            <img 
            src="/img/logo.jpg/" 
            alt="insure logo"
            width="52"
            height="52"
            className="w-8"
            />
            <button className={styles.menu_btn} onClick={(e) => {handleClick(e)}}>
            <img 
                src={icon}
                alt="hamburger icon"
            />
            </button>
            <Nav />
        </div>
    )
}

export default Bar