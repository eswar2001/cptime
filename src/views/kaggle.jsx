import { okaggle, ukaggle } from "../server/server";
import React from 'react';
import Card from "../components/card";

import { Redirect } from 'react-router';

function Kaggle(params) {

    if (okaggle.length !== 0 && ukaggle.length !== 0) {
        return (<>
            <div className="container" >
                <h1>Ongoing Contests</h1>
                <div className="card-group"> {okaggle.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" >
                <h1>upcoming Contests</h1>
                <div className="card-group">{ukaggle.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (okaggle.length !== 0) {
        return (<>
            <div className="container" >
                <h1>Ongoing Contests</h1>
                <div className="card-group"> {okaggle.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (ukaggle.length !== 0) {
        return (<>
            <div className="container" >
                <h1>upcoming Contests</h1>
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