import { okaggle, ukaggle } from "../server/server";
import React from 'react';
import Card from "../components/card";

import { Redirect } from 'react-router';

function Kaggle(params) {

    if (okaggle.length !== 0 && ukaggle.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.</p>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {okaggle.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>upcoming Contests</h3>
                <div className="card-group">{ukaggle.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (okaggle.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.</p>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {okaggle.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (ukaggle.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Kaggle is the world's largest data science community with powerful tools and resources to help you achieve your data science goals.</p>
                <h3>upcoming Contests</h3>
                <div className="card-group">{ukaggle.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<Redirect to='/' />)
    }
}

export default Kaggle