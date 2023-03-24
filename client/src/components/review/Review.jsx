import './review.scss';
import avatar from '../../images/avatar.png';


function StarRating({ max, current }) {
    const getRating = () => {
        return (current / max) * 100;
    };

    return (
        <div className="star-rating">
            {[...Array(max)].map((_, i) => (
                <span key={i}>&#9734;</span>
            ))}
            <div className="star-rating__current" style={{ width: getRating() + '%' }}>
                {[...Array(max)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                ))}
            </div>
        </div>
    );
}


export default function Review() {


    return (
        <div className='review'>
            <div className='box sb'>

                <p className='reviewer'>Jane Cooper</p>
                <small className='position'>CTO - Dovas Inc.</small>
                <p className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, nec, egestas neque ipsum duis
                    habitasse enim. Id ullamcorper at posuere mauris adipiscing aliquet risus. Malesuada amet.
                </p>


            </div>

            <div className="profile">
                    <img src={avatar} alt="profilePic" height={50} width={50} className="avatar"/>


                <div className="stars">
                    <p className='star-name'>Dianne Russell</p>

                    <StarRating max={5} current={3.4} />
                </div>

            </div>
        </div>

    )
}