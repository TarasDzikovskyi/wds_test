import './navbar.scss';
import {Link} from "react-router-dom";

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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Services <span className='up_icon'></span></Link>
                            <ul className="dropdown h195">
                                <li><Link to="#">Sub-Menu 1</Link></li>
                                <li><Link to="#">Sub-Menu 2</Link>
                                    <ul className="dropdown h146">
                                        <li><Link to="#">Some-Info 1</Link></li>
                                        <li><Link to="#">Some-Info 2</Link></li>
                                        <li><Link to="#">Some-Info 3</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#">Sub-Menu 3</Link></li>
                                <li><Link to="#">Sub-Menu 4</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Book now</Link></li>
                        <li><Link to="#">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


