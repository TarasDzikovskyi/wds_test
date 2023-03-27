import mainImage from '../../images/beautiful-girl-is-engaged-yoga-studio (1).jpg';
import './blog.scss';
import news1 from '../../images/anti-cellulite-massage-luxury-spa.jpg'
import news2 from '../../images/close-up-man-writing-code-laptop.jpg'
import news3 from '../../images/side-view-cropped-unrecognizable-business-people-working-common-desk.jpg'
import Footer from "../../components/footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import usePagination from '../../components/pagination/usePagination'
import Review from "../../components/review/Review";

export default function Blog() {
    const [posts, setPosts] = useState([])

    let [page, setPage] = useState(1);
    const PER_PAGE = 15;

    const count = Math.ceil(posts.length / PER_PAGE);
    const _DATA = usePagination(posts, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('/posts')
            setPosts(res.data)
        }
        getPosts()
    }, [])


    return (
        <>
            <div className='blog'>
                <div className="blog-wrapper">
                    <div className="main-box">
                        <div className="wrapper">
                            <div className="img-box">
                                <img src={mainImage} alt="box-image" className='main-image'/>
                            </div>

                            <div className="info-box">
                                <div className="info-wrapper">
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
                            </div>

                            <div className="news-box">
                                <div className="news-wrapper">
                                    <h2 className='title-news'>Our Latest News</h2>
                                    <div className="cover-wrapper">
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
                            </div>
                        </div>
                    </div>

                    <div className="testimonials-box">
                        <div className="wrapper-review">
                            <div className="title">
                                <h1>Testimonials</h1>
                            </div>

                            <div className="reviews-box">
                                {_DATA && _DATA.currentData().map((item) => (
                                    <div>
                                        <Review item={item}/>
                                    </div>
                                ))}

                            </div>

                            <div className="pagination">
                                <Pagination
                                    count={count}
                                    page={page}
                                    color="primary"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}