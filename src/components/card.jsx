import React from 'react';


function Card(props) {
    var startDate = new Date(props.startTime * 1000);
    var startdateString = startDate.toLocaleString();
    var endDate = new Date(props.endTime * 1000);
    var enddateString = endDate.toLocaleString();
    var filter;
    var diff;
    var google_calendar = "";
    if (props.status) {
        filter = `ongoing  col-sm-auto col-md-6 col-lg-4`;
        diff = "card mb-3 border-danger"
        google_calendar = 'https://calendar.google.com/event?action=TEMPLATE&dates=' + props.startTime * 1000 + '/' + props.endTime * 1000 + '&text=' + encodeURI(props.name) + '&location=' + props.url;
    } else {
        filter = `upcoming  col-sm-auto col-md-6 col-lg-4`;
        diff = "card mb-3 border-primary";
    }
    var cardStyle = {
        minWidth: "20rem",
        minHeight: "18rem"
    };
    var cardHeaderStyle = {

    };
    if (props.status) {
        return (
            <div className={filter}>
                <div className={diff} style={cardStyle}>
                    <span className="card-header" style={cardHeaderStyle}> {props.platform} </span>
                    <div className="card-body">
                        <h3 className="card-title"> {props.name} </h3>
                        <p className="card-text">Start Time: {startdateString}</p>
                        <p className="card-text">End Time: {enddateString}</p>
                        <a href={props.url} className="card-link " target="_blank" rel="noreferrer">
                            <button className="btn">Register Now</button>
                        </a>
                        <a href={google_calendar} className="card-link " target="_blank" rel="noreferrer"><button className="btn">Calendar</button></a>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={filter}>
                <div className={diff} style={cardStyle}>
                    <span className="card-header" style={cardHeaderStyle}> {props.platform} </span>
                    <div className="card-body">
                        <h3 className="card-title"> {props.name} </h3>
                        <p className="card-text">Start Time: {startdateString}</p>
                        <p className="card-text">End Time: {enddateString}</p>
                        <a href={props.url} className="card-link " target="_blank" rel="noreferrer">
                            <button className="btn">Register Now</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card