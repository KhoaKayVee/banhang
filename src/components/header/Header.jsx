import React, { useState } from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {

    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = () => {
        setShowMenu((showMenu)=>!showMenu)
    }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="" />
            <span>KayVee</span>
        </div>



        <div className={css.right}>

            <div className={css.bars} onClick={toggleMenu}>
                <VscThreeBars/>
            </div>

            <div className={css.menu} >
                <ul className={css.menu} style={{display: showMenu? 'inherit' : 'none'}}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            <input type="text" className={css.search} placeholder='Search'/>

            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header