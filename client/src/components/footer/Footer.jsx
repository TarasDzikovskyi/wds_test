import './footer.scss';


export default function Footer() {


    return (
        <div className='footer'>

            <div className="wrapper">


                <div className="menu-wrapper">

                    {/*<div className="wrap">*/}
                        <div className="menu-box">
                            <p className='title'>Departments</p>

                            <p className='item'>Medical</p>
                            <p className='item'>Pharmaceuticals</p>
                            <p className='item'>Medical Equipment</p>
                        </div>

                        <div className="menu-box">
                            <p className='title'>Quick Links</p>

                            <p className='item'>What do we do?</p>
                            <p className='item'>Our expertise</p>
                            <p className='item'>Request an Appointment</p>
                            <p className='item'>Book with a Specialist</p>
                        </div>
                    {/*</div>*/}


                    {/*<div className="wrap">*/}


                        <div className="menu-box">
                            <p className='title'>Head Office</p>

                            <p className='item'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            <p className='item'>darrell@mail.com</p>
                            <p className='item'>(671) 555-0110</p>
                        </div>

                        <div className="logo-box">
                            <div className="logo">
                                <div className="big_item"></div>
                                <div className="logo-wrap">
                                    <div className="small_item"></div>
                                    <div className="medium_item"></div>
                                </div>
                                <div className="wrap_text">
                                    <h4>KHAN</h4>
                                    <p>TECH</p>
                                </div>
                            </div>

                            <div className="logo-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit
                                tincidunt ut sed. Velit euismod integer convallis ornare eu.
                            </div>
                        </div>
                    {/*</div>*/}


                </div>




                <div className="last-text">
                    ©2021 All Rights Reserved
                </div>

            </div>


        </div>
    )
}