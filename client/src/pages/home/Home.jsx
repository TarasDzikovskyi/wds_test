import React from 'react';
import img from '../../images/meditation-experiences.jpeg';
import img1 from '../../images/side-view-cropped-unrecognizable-business-people-working-common-desk.jpg';
import img2 from '../../images/close-up-man-writing-code-laptop.jpg';
import img3 from '../../images/anti-cellulite-massage-luxury-spa.jpg';
import avatar from '../../images/avatar.png';
import Footer from "../../components/footer/Footer";
import './home.scss';
import {Link} from "react-router-dom";

export default function Home() {

    return (
        <>
            <div className='home'>
                <div className="wrapper">

                    <div className="block_header">
                        <div className="blue_box"></div>
                        <img src={img} alt='big title' height='100%' width='100%'/>
                        <div className="info_box">
                            <h1>KHAN TECH</h1>
                            <p>Sample text. Click to select the text box. Click again or double click to
                                start editing the text. Condim entum mattis pellentesque id nibh tortor id aliquet.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>

                    <h2>Our Blog</h2>

                    <div className="block_news">
                        <div className="box_news">
                            <img src={img1} alt="news" height={180} width={350}/>

                            <h3>Pharmaceuticals</h3>
                            <small>25.01.2021 · Alisa Happy</small>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus cursus, lacus at fringilla lacinia. </p>

                            <i>Read more</i>
                        </div>

                        <div className="box_news">
                            <img src={img2} alt="news" height={180} width={350}/>

                            <h3>Pharmaceuticals</h3>
                            <small>25.01.2021 · Alisa Happy</small>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus cursus, lacus at fringilla lacinia. </p>

                            <i>Read more</i>
                        </div>

                        <div className="box_news">
                            <img src={img3} alt="news" height={180} width={350}/>

                            <h3>Pharmaceuticals</h3>
                            <small>25.01.2021 · Alisa Happy</small>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus cursus, lacus at fringilla lacinia. </p>

                            <i>Read more</i>
                        </div>
                    </div>

                    <div className="layouts">
                        <div className="bg_layout"></div>

                        <div className="layout_wrapper">
                            <div className="empty"></div>
                            <div className="layout">
                                <img src={avatar} alt="avatar" height={100} width={100}/>
                                <h3>PROGRAMS</h3>

                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur</p>

                                    <Link to='#'>MORE</Link>
                            </div>
                        </div>

                        <div className="layout_wrapper">
                            <div className="enable">
                                <div className="empty"></div>
                            </div>

                            <div className="layout">
                                <img src={avatar} alt="avatar" height={100} width={100}/>
                                <h3>PROGRAMS</h3>

                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur</p>

                                <Link to='#'>MORE</Link>
                            </div>
                        </div>

                        <div className="layout_wrapper">
                            <div className="empty"></div>
                            <div className="layout">
                                <img src={avatar} alt="avatar" height={100} width={100}/>
                                <h3>PROGRAMS</h3>

                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur</p>

                                <Link to='#'>MORE</Link>
                            </div>
                        </div>

                        <div className="layout_wrapper">
                            <div className="enable">
                                <div className="empty"></div>
                            </div>

                            <div className="layout">
                                <img src={avatar} alt="avatar" height={100} width={100}/>
                                <h3>PROGRAMS</h3>

                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur</p>

                                <Link to='#'>MORE</Link>
                            </div>
                        </div>
                    </div>

                    <div className="about">
                        <h2>Lorem Ipsum</h2>
                        <p>If you have tried everything, but still seem to suffer from snoring,
                            don’t give up. Before turning to surgery, consider shopping for anti-snore
                            devices. These products do not typically require a prescription, are
                            economically priced and may just be the answer that you are looking for.
                            However, as is the case when shopping for anything, there are a lot of
                            anti-snore devices out there.</p>
                    </div>
                </div>
            </div>

            <Footer/>
        </>

    )
}