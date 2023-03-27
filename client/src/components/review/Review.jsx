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

export default function Review({item}) {

    return (
        <div className='review'>
            <div className='box sb'>
                <p className='employee'>{item.Employee}</p>
                <small className='position'>{item.Company}</small>
                <p className='text'>{item.Review}</p>
            </div>

            <div className="profile">
                    <img src={avatar} alt="profilePic" height={50} width={50} className="avatar"/>


                <div className="stars">
                    <p className='reviewer'>{item.Reviewer}</p>

                    <StarRating max={5} current={item.Rating} />
                </div>

            </div>
        </div>

    )
}