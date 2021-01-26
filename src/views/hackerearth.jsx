import { ohackerearth, uhackerearth } from "../server/server";
import React from 'react';

import { Redirect } from 'react-router';
import Card from "../components/card";

function Hackerearth(params) {

    if (ohackerearth.length !== 0 && uhackerearth.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>HackerEarth provides enterprise software that helps organisations with their technical hiring needs. HackerEarth is used by organizations for technical skill assessment and remote video interviewing. In addition to that HackerEarth also has a community and since inception built a base of 4M+ developers.</p>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {ohackerearth.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>upcoming Contests</h3>
                <div className="card-group">{uhackerearth.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (ohackerearth.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>HackerEarth provides enterprise software that helps organisations with their technical hiring needs. HackerEarth is used by organizations for technical skill assessment and remote video interviewing. In addition to that HackerEarth also has a community and since inception built a base of 4M+ developers.</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {ohackerearth.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (uhackerearth.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>HackerEarth provides enterprise software that helps organisations with their technical hiring needs. HackerEarth is used by organizations for technical skill assessment and remote video interviewing. In addition to that HackerEarth also has a community and since inception built a base of 4M+ developers.</p>

                <h3>upcoming Contests</h3>
                <div className="card-group">{uhackerearth.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<Redirect to='/' />)
    }
}

export default Hackerearth