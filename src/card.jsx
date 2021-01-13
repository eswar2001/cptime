import React from 'react';


function Card(props) {
    var startDate = new Date(props.startTime * 1000);
    var startdateString = startDate.toLocaleString();
    var endDate = new Date(props.endTime * 1000);
    var enddateString = endDate.toLocaleString();
    var filter;
    var diff;
    if (props.status) {
        filter = `ongoing col-12 col-sm-8 col-md-6 col-lg-4`;
        diff = "card mb-3 border-danger"
    } else {
        filter = `upcoming col-12 col-sm-8 col-md-6 col-lg-4`;
        diff = "card mb-3 border-primary"
    }
    var cardStyle = {
        minWidth: "20rem",
        minHeight: "20rem"
    };
    var cardHeaderStyle = {

    };
    return (
        <div className={filter}>
            <div className={diff} style={cardStyle}>
                <span className="card-header" style={cardHeaderStyle}> {props.platform} </span>
                <div className="card-body">
                    <h3 className="card-title"> {props.name} </h3>
                    <p className="card-text">Start Time:{startdateString}</p>
                    <p className="card-text">End Time:{enddateString}</p>
                    <a href={props.url} className="card-link " target="_blank" rel="noreferrer">
                        <button className="btn btn-primary">Register Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card