import React from 'react'
import logo from './Accets/Img/Dailyfud-removebg-preview 1.png'
import linkedIn from '../Componant/Accets/Img/Img.png'
import insta from '../Componant/Accets/Img/Img (1).png'
import twiter from '../Componant/Accets/Img/Img (2).png'
import youtub from '../Componant/Accets/Img/Img (3).png'
import facebook from '../Componant/Accets/Img/Link_margin.png'
const Footer = () => {
    return (
        <div className='footerMainDiv'>
            <div className='footerLogosMainDiv'>
                <div className='row container footerContainerLogoRow'>
                    <div className='col-6'>
                        <div>
                            {/* <img src={logo} alt="" /> */}
                        </div>
                    </div>
                    <div className='col-6'>

                    </div>
                </div>
            </div>
            <div className='row container-fluid g-0'>
                <div className='col-1'></div>
                <div className='col-2'>
                    <ul>
                        <li className='footerHeading'>
                            About DAILYFUD
                        </li>
                        <li className='footerContent'>
                            Who We Are
                        </li>
                        <li className='footerContent'>Blog</li>
                        <li className='footerContent'>Work With Us</li>
                        <li className='footerContent'>Report Fraud</li>
                        <li className='footerContent'>Press Kit</li>
                        <li className='footerContent'>Contact Us</li>
                    </ul>
                </div>
                <div className='col-2'>
                    <ul>
                        <li className='footerHeading'>
                            DAILYFUD ARENA
                        </li>
                        <li className='footerHeading'>
                            DAILYFUD
                        </li>
                        <li className='footerContent'>Blinkit</li>
                        <li className='footerContent'>Feeding India</li>
                        <li className='footerContent'>Hyperpure</li>
                        <li className='footerContent'>Zomaland</li>

                    </ul>
                </div>
                <div className='col-2'>
                    <ul>
                        <li className='footerHeading'>
                            For Enterprises
                        </li>
                        <li className='footerContent'>
                            DailyFud For Enterprise
                        </li>

                    </ul>
                </div>
                <div className='col-2'>
                    <ul>
                        <li className='footerHeading'>
                            Learn More
                        </li>
                        <li className='footerContent'>
                            Privacy
                        </li>
                        <li className='footerContent'>Security</li>
                        <li className='footerContent'>Terms</li>
                        <li className='footerContent'>Sitemap</li>

                    </ul>
                </div>
                <div className='col-2'>
                    <ul>
                        <li className='footerHeading'>
                            Social links
                        </li>
                        <li className='footerContent'>
                            <img src={linkedIn} alt="" />
                            <img className='mx-1' src={insta} alt="" />
                            <img src={twiter} alt="" />
                            <img className='mx-1' src={youtub} alt="" />
                            <img src={facebook} alt="" />
                        </li>
                        {/* <li className='footerContent'>Blog</li>
                        <li className='footerContent'>Work With Us</li>
                        <li className='footerContent'>Report Fraud</li>
                        <li className='footerContent'>Press Kit</li>
                        <li className='footerContent'>Contact Us</li> */}
                    </ul>
                </div>
                <div className='col-1'></div>

            </div>
            <div className='row container-fluid pt-4  pb-4'>
                <div className='col-1'></div>
                <div className='col-10 copWritePara'> By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008- 2023 © DailyFud™ Ltd. All rights reserved.</div>
            </div>
            <div className='col-1'></div>

        </div>
    )
}

export default Footer