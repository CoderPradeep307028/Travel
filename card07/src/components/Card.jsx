import { useState } from "react";

function Card({ id, image, name, info, price , removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description =readmore ? info : `${info.substring(0, 200)}...`;

    function readmorehendler() {
        setReadmore(!readmore);
    }

    return (
        <div className="Card">
            <img src={image} alt="" className="image" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">  ₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description"> 
                    {description}
                    <span className="read-more" onClick={readmorehendler}>
                        {readmore ? `.....Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className="ban-read" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;
