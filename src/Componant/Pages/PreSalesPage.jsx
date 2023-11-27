import React from 'react'
import logo from '../Accets/Img/Dailyfud-removebg-preview 1.png'
import { Button, Container, Row } from 'react-bootstrap'
import SalesTimer from '../SalesTimer'
import Footer from '../Footer'
import playStoreImg from '../Accets/Img/Link → google.png.png'
import applestoreImg from '../Accets/Img/Link → apple.png.png'
import blackReverseImg from '../Accets/Img/iPhone 15 Pro Black Titanium Mockup Portrait 2.png'
import blackIphoneImg from '../Accets/Img/iPhone 15 Pro Black Titanium Mockup Portrait 1.png'
import cutImg3 from '../Accets/Img/pexels-thomas-nahar-6363501 3.png'
import trackingImg from '../Accets/Img/parcel-tracking-icon-logo-illustration-track-order-symbol-template-for-graphic-and-web-design-collection-free-vector-removebg-preview 1.png';
import map from '../Accets/Img/1000_F_324964632_yJN0v3c6Qke6301NWzCjYBc45gOkVrmK-removebg-preview 1.png'
import addon from '../Accets/Img/2146933 1.png'
import testMeal from '../Accets/Img/div.osahan-category-item (4).png'
import oneTime from '../Accets/Img/div.osahan-category-item (3).png'
import routing from '../Accets/Img/div.osahan-category-item (2).png'
import subscription from '../Accets/Img/div.osahan-category-item.png'
import delevery from '../Accets/Img/div.osahan-category-item (1).png'
const PreSalesPage = () => {
    return (
        <div>
            <div className='header' >
                <div className='headerNavBar'>
                    <div>
                        <img className='logo-img' src={logo} alt="" />
                    </div>
                    <div className='navbar-right-btn'>
                        <div className='loginBtnMainDiv'>
                            <div className='loginBtn'>Login</div>
                            <div className='CreateAccBtn'>Craete Account</div>
                        </div>
                        <div>
                            <Button variant='dark'>Cook With us</Button>
                        </div>
                    </div>
                </div>
                <div className='row container-fluid bannerMainDiv'>
                    <div className='col-6  '>
                        <div className='bannerLeftColMainDiv'>
                            <div className='bannerHeading'>
                                Ready for tasty surprises every day?
                            </div>
                            <div className='dailyfud-heading'>Try Dailyfud for hassle-free meals!</div>
                            <div className='deleveryLocationMainDiv '>
                                <input className='deleveryLocationInput' type="text" />
                                <Button className='searchBtn' variant='dark'>Search</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='bannerRightColMainDiv'>
                            <div className='bannerRightColHeaing'>Pre sales are live Now
                            </div>
                            <div className='timerMainDiv py-3'>
                                <SalesTimer />
                            </div>
                            <div className='notifyMeDiv'>
                                <Button variant='dark'>Notify me</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whaySdUOrderSection'>
                <div className='whaySdUOrderSectionHeadingDiv'>
                    <p className='whaySdUOrderSectionPara'>Why should you order with DailyFud?</p>
                </div>
                <div className='row g-0'>
                    <div className='col-3'>

                    </div>
                    <div className='col-2'>
                        <div className='trackingMainDiv'>
                            <div className='trackingImgDiv'>
                                <img src={trackingImg} alt="" />
                            </div>
                            <div className='orderTrackingDiv'>
                                <div className='orderTrackingDivHeading'>Live Order Tracking</div>

                                <div className='orderTrackingDivPara'>
                                    Live location tracking of your order, from restaurant to your doorstep
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='trackingMainDiv '>
                            <div className='trackingImgDiv'>
                                <img src={map} alt="" />
                            </div>
                            <div className='orderTrackingDiv'>
                                <div className='orderTrackingDivHeading'>Multiple Location</div>

                                <div className='orderTrackingDivPara'>
                                    Get food  in any address  in just one subscription
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='trackingMainDiv'>
                            <div className='trackingImgDiv'>
                                <img src={addon} alt="" />
                            </div>
                            <div className='orderTrackingDiv'>
                                <div className='orderTrackingDivHeading'>Add Ons</div>

                                <div className='orderTrackingDivPara'>
                                    add extra or something more with your meal
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>

                    </div>
                </div>
            </div>
            <div className='serviceSuitMainDiv '>
                <div className='serviceSuitHeadingMainDiv '>
                    <div>
                        <div className='serviceSuitHeading pb-4'>Service Suite</div>
                        <div className='serviceSuitPara'>It's time to savor every moment without the stress of meal preparation</div>
                    </div>
                </div>
                <div className="row g-0 pt-5">
                    <div className="col-1">

                    </div>
                    <div className="col-2">
                        <div>
                            <img src={testMeal} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <img src={oneTime} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <img src={routing} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <img src={subscription} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <img src={delevery} alt="" />
                        </div>
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
            <div className='DontHustleFoodSection'>
                <div className='row g-0'>
                    <div className='col-1'>

                    </div>
                    <div className='col-4'>
                        <div className='DontHustleFoodSectionMainDiv'>
                            <div className='DontHustleFoodSectionHeading'>Don't hustle for food anymore</div>
                            <div className='DontHustleFoodSectionPara py-3'>now carry Dailyfud in your pocket</div>
                            <div className='downloadAppPara py-3'>DOWNLOAD APP</div>
                            <div className='playStoreImgDiv'>
                                <img src={playStoreImg} alt="" />
                                <img src={applestoreImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>

                        <div>
                            <img className='blackIphoneImg' src={blackReverseImg} alt="" />
                        </div>

                    </div>
                    <div className='col-3'>
                        <div>
                            <img className='reverseImg' src={blackReverseImg} alt="" />
                        </div>
                    </div>
                    {/* <div className='col-3'>
                        <div>
                            <img src={cutImg3} alt="" />
                        </div>
                    </div> */}
                </div>
            </div>

            <div className='footer pt-5'>
                <Footer />
            </div>
        </div>
    )
}

export default PreSalesPage