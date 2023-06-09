import './navbar.scss';
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left_side">
                    <div className="logo">
                        <div className="big_item"></div>
                        <div className="wrap">
                            <div className="small_item"></div>
                            <div className="medium_item"></div>
                        </div>
                        <div className="wrap_text">
                            <h4>KHAN</h4>
                            <p>TECH</p>
                        </div>
                    </div>

                    <div className="info">
                        <p className='help_text'>Need Help?</p>
                        <p className='number_text'>(514) 543-9936</p>
                    </div>

                </div>

                <div className={`${isActive ? 'active' : ''}`}>
                    <div className="btn_mob" onClick={handleClick}>
                        <span></span>
                    </div>

                    <div className='right_side'>
                        <ul>
                            <li><Link to="/" onClick={() => setIsActive(false)}>Home</Link></li>
                            <li><Link to="#">Services
                                <span className='up_icon'>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28262 1.15124L8.84963
                                    0.71811C8.69959 0.575728 8.52434 0.504517 8.3243 0.504517C8.12013 0.504517
                                    7.94696 0.575728 7.80452 0.71811L4.99818 3.52453L2.19186 0.718191C2.04944 0.575809
                                    1.87623 0.504598 1.67214 0.504598C1.472 0.504598 1.29679 0.575809 1.14673
                                    0.718191L0.719418 1.15132C0.573112 1.29753 0.5 1.47273 0.5 1.67678C0.5 1.88463
                                    0.573193 2.05786 0.719398 2.19642L4.47845 5.95548C4.61709 6.10171 4.79023 6.17488
                                    4.99816 6.17488C5.20219 6.17488 5.37737 6.10173 5.52354 5.95548L9.2826
                                    2.19642C9.42505 2.05395 9.49632 1.88075 9.49632 1.67678C9.49634 1.47654 9.42507
                                    1.30143 9.28262 1.15124Z" fill="#252525"/>
                                </svg>
                            </span>
                                <span className='down_icon'>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28262 5.84876L8.84963 6.28189C8.69959
                                6.42427 8.52434 6.49548 8.3243 6.49548C8.12013 6.49548 7.94696 6.42427 7.80452
                                6.28189L4.99818 3.47547L2.19186 6.28181C2.04944 6.42419 1.87623 6.4954 1.67214
                                6.4954C1.472 6.4954 1.29679 6.42419 1.14673 6.28181L0.719418 5.84868C0.573112 5.70247
                                0.5 5.52727 0.5 5.32322C0.5 5.11537 0.573193 4.94214 0.719398 4.80358L4.47845
                                1.04452C4.61709 0.898293 4.79023 0.82512 4.99816 0.82512C5.20219 0.82512 5.37737
                                 0.898273 5.52354 1.04452L9.2826 4.80358C9.42505 4.94605 9.49632 5.11925 9.49632
                                 5.32322C9.49634 5.52346 9.42507 5.69857 9.28262 5.84876Z" fill="#0880AE"/>
                            </svg>
                            </span>

                            </Link>
                                <ul>
                                    <li><Link to="#" onClick={() => setIsActive(false)}>Sub-Menu 1</Link></li>
                                    <li><Link to="#">Sub-Menu 2
                                        <span className='right_icon'>
                                        <svg width="6" height="9" viewBox="0 0 12 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.30261 0.434752L0.436342 1.30073C0.151578 1.60083 0.00915527 1.95132
                                            0.00915527 2.35141C0.00915527 2.75974 0.151578 3.10607 0.436342 3.39096L6.04919
                                            9.00364L0.436504 14.6163C0.15174 14.9011 0.00931707 15.2475 0.00931707
                                            15.6557C0.00931707 16.056 0.15174 16.4064 0.436504 16.7065L1.30277
                                            17.5612C1.59518 17.8538 1.94559 18 2.35369 18C2.76938 18 3.11583 17.8536
                                            3.39295 17.5612L10.9111 10.0431C11.2035 9.76583 11.3499 9.41954 11.3499
                                            9.00368C11.3499 8.59563 11.2036 8.24525 10.9111 7.95293L3.39295 0.434792C3.10803
                                            0.149906 2.76162 0.00736237 2.35369 0.00736237C1.9532 0.00732231 1.60298
                                            0.149866 1.30261 0.434752Z" fill="#252525"/>
                                        </svg>
                                    </span>

                                    </Link>
                                        <ul>
                                            <li><Link to="#" onClick={() => setIsActive(false)}>Some-Info 1</Link></li>
                                            <li><Link to="#" onClick={() => setIsActive(false)}>Senectus cursus pretium malesuada.</Link></li>
                                            <li><Link to="#" onClick={() => setIsActive(false)}>Some-Info 3</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" onClick={() => setIsActive(false)}>Sub-Menu 3</Link></li>
                                    <li><Link to="#" onClick={() => setIsActive(false)}>Sub-Menu 4</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#" onClick={() => setIsActive(false)}>About
                                <span className='up_icon'>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28262 1.15124L8.84963
                                    0.71811C8.69959 0.575728 8.52434 0.504517 8.3243 0.504517C8.12013 0.504517
                                    7.94696 0.575728 7.80452 0.71811L4.99818 3.52453L2.19186 0.718191C2.04944 0.575809
                                    1.87623 0.504598 1.67214 0.504598C1.472 0.504598 1.29679 0.575809 1.14673
                                    0.718191L0.719418 1.15132C0.573112 1.29753 0.5 1.47273 0.5 1.67678C0.5 1.88463
                                    0.573193 2.05786 0.719398 2.19642L4.47845 5.95548C4.61709 6.10171 4.79023 6.17488
                                    4.99816 6.17488C5.20219 6.17488 5.37737 6.10173 5.52354 5.95548L9.2826
                                    2.19642C9.42505 2.05395 9.49632 1.88075 9.49632 1.67678C9.49634 1.47654 9.42507
                                    1.30143 9.28262 1.15124Z" fill="#252525"/>
                                </svg>
                            </span>
                                <span className='down_icon'>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28262 5.84876L8.84963 6.28189C8.69959
                                6.42427 8.52434 6.49548 8.3243 6.49548C8.12013 6.49548 7.94696 6.42427 7.80452
                                6.28189L4.99818 3.47547L2.19186 6.28181C2.04944 6.42419 1.87623 6.4954 1.67214
                                6.4954C1.472 6.4954 1.29679 6.42419 1.14673 6.28181L0.719418 5.84868C0.573112 5.70247
                                0.5 5.52727 0.5 5.32322C0.5 5.11537 0.573193 4.94214 0.719398 4.80358L4.47845
                                1.04452C4.61709 0.898293 4.79023 0.82512 4.99816 0.82512C5.20219 0.82512 5.37737
                                 0.898273 5.52354 1.04452L9.2826 4.80358C9.42505 4.94605 9.49632 5.11925 9.49632
                                 5.32322C9.49634 5.52346 9.42507 5.69857 9.28262 5.84876Z" fill="#0880AE"/>
                            </svg>
                            </span>
                            </Link></li>
                            <li><Link to="#" onClick={() => setIsActive(false)}>Book now</Link></li>
                            <li><Link to="#" onClick={() => setIsActive(false)}>Shop
                                <span className='up_icon'>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28262 1.15124L8.84963
                                    0.71811C8.69959 0.575728 8.52434 0.504517 8.3243 0.504517C8.12013 0.504517
                                    7.94696 0.575728 7.80452 0.71811L4.99818 3.52453L2.19186 0.718191C2.04944 0.575809
                                    1.87623 0.504598 1.67214 0.504598C1.472 0.504598 1.29679 0.575809 1.14673
                                    0.718191L0.719418 1.15132C0.573112 1.29753 0.5 1.47273 0.5 1.67678C0.5 1.88463
                                    0.573193 2.05786 0.719398 2.19642L4.47845 5.95548C4.61709 6.10171 4.79023 6.17488
                                    4.99816 6.17488C5.20219 6.17488 5.37737 6.10173 5.52354 5.95548L9.2826
                                    2.19642C9.42505 2.05395 9.49632 1.88075 9.49632 1.67678C9.49634 1.47654 9.42507
                                    1.30143 9.28262 1.15124Z" fill="#252525"/>
                                </svg>
                            </span>
                                <span className='down_icon'>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28262 5.84876L8.84963 6.28189C8.69959
                                6.42427 8.52434 6.49548 8.3243 6.49548C8.12013 6.49548 7.94696 6.42427 7.80452
                                6.28189L4.99818 3.47547L2.19186 6.28181C2.04944 6.42419 1.87623 6.4954 1.67214
                                6.4954C1.472 6.4954 1.29679 6.42419 1.14673 6.28181L0.719418 5.84868C0.573112 5.70247
                                0.5 5.52727 0.5 5.32322C0.5 5.11537 0.573193 4.94214 0.719398 4.80358L4.47845
                                1.04452C4.61709 0.898293 4.79023 0.82512 4.99816 0.82512C5.20219 0.82512 5.37737
                                 0.898273 5.52354 1.04452L9.2826 4.80358C9.42505 4.94605 9.49632 5.11925 9.49632
                                 5.32322C9.49634 5.52346 9.42507 5.69857 9.28262 5.84876Z" fill="#0880AE"/>
                            </svg>
                            </span>
                            </Link></li>
                            <li><Link to="/blog" onClick={() => setIsActive(false)}>Blog</Link></li>
                            <li><Link to="#" onClick={() => setIsActive(false)}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


