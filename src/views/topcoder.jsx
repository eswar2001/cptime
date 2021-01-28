import { otopcoder, utopcoder } from "../server/server";
import { Redirect } from 'react-router';
import React from 'react';
import Card from "../components/card";

const Topcoder = () => {
    if (otopcoder.length !== 0 && utopcoder.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Topcoder (formerly TopCoder) is a crowdsourcing company with an open global community of designers, developers, data scientists, and competitive programmers. Topcoder pays community members for their work on the projects and sells community services to corporate, mid-size, and small-business clients.</p>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {otopcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
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
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Topcoder (formerly TopCoder) is a crowdsourcing company with an open global community of designers, developers, data scientists, and competitive programmers. Topcoder pays community members for their work on the projects and sells community services to corporate, mid-size, and small-business clients.</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {otopcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (utopcoder.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Topcoder (formerly TopCoder) is a crowdsourcing company with an open global community of designers, developers, data scientists, and competitive programmers. Topcoder pays community members for their work on the projects and sells community services to corporate, mid-size, and small-business clients.</p><div className="card-group">{utopcoder.map((uData) => {
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