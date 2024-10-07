import PropTypes from "prop-types";
import "./estyle.css";

const Count = (props) => {
    return (
        <>
            <div className="card">

                <button onClick={props.incrementCount}>
                    count is {props.Count}
                </button>
            </div>
        </>
    )
}

Count.prototype = {
    count: PropTypes.number.isRequired,
}