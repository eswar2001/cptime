import { otopcoder, utopcoder } from "../server/server";
import { Redirect } from 'react-router';
import React from 'react';
import Card from "../components/card";

const Topcoder = () => {
    console.log(utopcoder)
    if (otopcoder.length !== 0 && utopcoder.length !== 0) {
        return (<>
            <div className="container" >
                <h3>About:</h3>
                <p>Topcoder</p>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {otopcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" >
                <h3>upcoming Contests</h3>
                <div className="card-group">{utopcoder.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (otopcoder.length !== 0) {
        return (<>
            <div className="container" >
                <h3>About:</h3>
                <p>Topcoder is a programming contest website based in Japan. ... This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {otopcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (utopcoder.length !== 0) {
        return (<>
            <div className="container" >
                <h3>About:</h3>
                <p>Topcoder is a programming contest website based in Japan. ... This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational</p>
                <h3>upcoming Contests</h3>
                <div className="card-group">{utopcoder.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<Redirect to='/' />)
    }
}
export default Topcoder;
