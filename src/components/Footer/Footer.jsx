import React from 'react'
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline"

import css from './Footer.module.css'


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>KayVee</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact US</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111B XOM CHIEU, P16, Q4, TP.HCM</span>
                    </span>

                    <span className={css.pngLine}>
                        {" "}
                        <PhoneIcon className={css.icon} />
                        <a href="SĐT: 0901-295-334">0901-295-334</a>
                    </span>

                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <a href="mailto:khoana219@uef.edu.vn ">khoana219@uef.edu.vn</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        SignIn
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon} />
                        <a href="/about">
                            <p>About us</p>
                        </a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>

        <div className={css.copyRight}>
            <span>Copyright @2023 by KayVee, AnhKhoa.</span>
            <span>All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer