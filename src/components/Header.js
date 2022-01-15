import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';
import MobileView from "./MobileView";

const Header = () => {
    return(
        <div>
                <div className={styles.main_Header}>
                    <div className={styles.main_Header_Top}>
                        <div>
        <NavLink to='/home' className={styles.main_Header_Logo}>
         <div className={styles.main_Header_Logo_Top}>The</div>
         <div className={styles.main_Header_Logo_Bottom}>Siren</div>
         </NavLink>
         
             </div>
                        <div>
                            <MobileView/>
                        </div>
             </div>
         <div className={styles.main_Header_Bottom}>
        
            <div>
         <NavLink to='/home' className={styles.main_Header_Items} >Home</NavLink>
              </div>
             <div>
              <NavLink to='/Category/Bollywood' className={styles.main_Header_Items}>Bollywood</NavLink>
             </div>
            <div>
          <NavLink to='/Category/Hollywood' className={styles.main_Header_Items}>Hollywood</NavLink>
             </div>
             <div>
          <NavLink to='/Category/Technology' className={styles.main_Header_Items}>Technology</NavLink>
             </div>
         <div>
         <NavLink to='/Category/Fitness' className={styles.main_Header_Items}>Fitness</NavLink>
          </div>
             <div>
         <NavLink to='/Category/Food' className={styles.main_Header_Items}>Food</NavLink>
             </div>
             
          </div>
          </div>
          <div className={styles.main_hr_tag}>
         < hr/>
     </div>
        </div>
        
    )
}

export default Header;