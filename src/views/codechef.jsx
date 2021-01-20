import { ocodechef, ucodechef } from "../server/server";
import React from 'react';

import { Redirect } from 'react-router';
import Card from "../components/card";

function Codechef(params) {
    if (ocodechef.length !== 0 && ucodechef.length !== 0) {
        return (<>
            <div className="container" >
                <h3>About</h3>
                <p>CodeChef was created as a platform to help programmers make it big in the world of algorithms, computer programming, and programming contests. It hosts three featured contests every month (Long Challenge, CookOff & LunchTime), and gives away prizes and goodies to the winners as encouragement.</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {ocodechef.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" >
                <h3>upcoming Contests</h3>
                <div className="card-group">{ucodechef.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (ocodechef.length !== 0) {
        return (<>
            <div className="container" >
                <h3>About</h3>
                <p>CodeChef was created as a platform to help programmers make it big in the world of algorithms, computer programming, and programming contests. It hosts three featured contests every month (Long Challenge, CookOff & LunchTime), and gives away prizes and goodies to the winners as encouragement.</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {ocodechef.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (ucodechef.length !== 0) {
        return (<>
            <div className="container" >
                <h3>About</h3>
                <p>CodeChef was created as a platform to help programmers make it big in the world of algorithms, computer programming, and programming contests. It hosts three featured contests every month (Long Challenge, CookOff & LunchTime), and gives away prizes and goodies to the winners as encouragement.</p>

                <h3>upcoming Contests</h3>
                <div className="card-group">{ucodechef.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<Redirect to='/' />)
    }
}

export default Codechef