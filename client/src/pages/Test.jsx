import './test.scss';

export default function Test() {


    return(
        <div className='test'>


            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a>
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
    )
}