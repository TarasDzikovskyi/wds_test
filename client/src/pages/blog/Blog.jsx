import mainImage from '../../images/beautiful-girl-is-engaged-yoga-studio (1).jpg';
import './blog.scss';
import news1 from '../../images/anti-cellulite-massage-luxury-spa.jpg'
import news2 from '../../images/close-up-man-writing-code-laptop.jpg'
import news3 from '../../images/side-view-cropped-unrecognizable-business-people-working-common-desk.jpg'
import Footer from "../../components/footer/Footer";

export default function Blog() {


    return (
        <>
            <div className='blog'>
                <div className="wrapper">

                    <div className="main-box">

                        <div className="img-box">
                            <img src={mainImage} alt="box-image" className='main-image'/>
                        </div>

                        <div className="info-box">
                            <h5 className='name-info'>Pharmaceuticals</h5>

                            <h3 className='title'>A Sure Way To Get Rid Of Your Back Ache Problem</h3>

                            <p className='desc'>
                                If you have tried everything, but still seem to suffer from snoring,
                                don’t give up. Before turning to surgery, consider shopping for
                                anti-snore devices. These products do not typically require a
                                prescription, are economically priced and may just be the answer
                                that you are looking for. However, as is the case when shopping
                                for anything, there are a lot of anti-snore devices out there and…
                            </p>

                            <div className="datetime">
                                <span className='date'>28 Feb 2021</span>
                                <span className='date name'>Jim Sullivan</span>
                                <span className='date'>6 min read</span>
                            </div>

                        </div>

                        <div className="news-box">
                            <h2 className='title-news'>Our Latest News</h2>


                            <div className="cover">
                                <div className='news'>
                                    <h4 className='new-title'>Basic Swedish Back Massage Techniques</h4>
                                    <p className='date'>28 Feb 2021</p>
                                </div>
                                <img src={news1} alt="news-image" className='news-image'/>
                            </div>

                            <div className="cover">
                                <div className='news'>
                                    <h4 className='new-title'>How to Learn Coding for Beginners</h4>
                                    <p className='date'>28 Feb 2021</p>
                                </div>
                                <img src={news2} alt="news-image" className='news-image'/>
                            </div>

                            <div className="cover">
                                <div className='news'>
                                    <h4 className='new-title'>Google’s Influence Over Think Tanks</h4>
                                    <p className='date'>28 Feb 2021</p>
                                </div>
                                <img src={news3} alt="news-image" className='news-image'/>
                            </div>


                        </div>

                    </div>

                    <div className="testimonials-box">


                    </div>


                </div>


            </div>

            <Footer/>


        </>

    )

}