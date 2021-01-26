import { ocodeforces, ucodeforces } from "../server/server";
import React from 'react';

import { Redirect } from 'react-router';
import Card from "../components/card";

function Codeforces(params) {

    if (ocodeforces.length !== 0 && ucodeforces.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov. Since 2013, Codeforces claims to surpass Topcoder in terms of active contestants. As of 2018, it has over 600,000 registered users.
                <br /> <strong>Owner:</strong> Mike Mirzayanov
                <br /> <strong>Users:</strong> 600,000</p>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {ocodeforces.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>upcoming Contests</h3>
                <div className="card-group">{ucodeforces.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (ocodeforces.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov. Since 2013, Codeforces claims to surpass Topcoder in terms of active contestants. As of 2018, it has over 600,000 registered users.
                <br /> <strong>Owner:</strong> Mike Mirzayanov
                <br /> <strong>Users:</strong> 600,000</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {ocodeforces.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (ucodeforces.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov. Since 2013, Codeforces claims to surpass Topcoder in terms of active contestants. As of 2018, it has over 600,000 registered users.
                <br /> <strong>Owner:</strong> Mike Mirzayanov
                <br /> <strong>Users:</strong> 600,000</p>

                <h3>upcoming Contests</h3>
                <div className="card-group">{ucodeforces.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<Redirect to='/' />)
    }
}

export default Codeforces