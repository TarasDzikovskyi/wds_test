import './navbar.scss';

export default function Navbar() {


    return(
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

                <div className="right_side">

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services <span className='up_icon'></span></a>
                            <ul className="dropdown">
                                <li><a href="#">Sub-Menu 1</a></li>
                                <li><a href="#">Sub-Menu 2</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Some-Info 1</a></li>
                                        <li><a href="#">Some-Info 2</a></li>
                                        <li><a href="#">Some-Info 3</a></li>
                                    </ul>

                                </li>
                                <li><a href="#">Sub-Menu 3</a></li>
                                <li><a href="#">Sub-Menu 4</a></li>
                            </ul>
                        </li>

                        <li><a href="#">About</a></li>
                        <li><a href="#">Book now</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>


                </div>
            </div>

        </div>
    )
}


