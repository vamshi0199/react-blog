import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';


const MobileView = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    let menu;

    if (showMenu) {
        menu = <div className={styles.main_Mobile_Bottom}>
            <div>
                <NavLink to='/home' className={styles.main_Header_Items} >Home</NavLink>
            </div>
            <div>
                <NavLink to='/Category/Bollywood' className={styles.main_Header_Items}>Bollywood</NavLink>
            </div>
            <div>
                <NavLink to='/Category/Technology' className={styles.main_Header_Items} >Technology</NavLink>
            </div>
            <div>
                <NavLink to='/Category/Hollywood' className={styles.main_Header_Items} >Hollywood</NavLink>
            </div>
            <div>
                <NavLink to='/Category/Fitness' className={styles.main_Header_Items} >Fitness</NavLink>
            </div>
            <div>
                <NavLink to='/Category/Food' className={styles.main_Header_Items} >Food</NavLink>
            </div>
        </div>
    }


    return (
        <nav className={styles.mobile_Menu}>
            <i className="fas fa-bars fa-2x" onClick={handleClick}></i>
            <div>
                {menu}
            </div>
        </nav>
    )
}

export default MobileView;