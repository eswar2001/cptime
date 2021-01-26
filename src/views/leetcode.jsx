import { oleetcode, uleetcode } from "../server/server";
import React from 'react';
import Card from "../components/card";

import { Redirect } from 'react-router';

function Leetcode() {

    if (oleetcode.length !== 0 && uleetcode.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>It's a website where people–mostly software engineers–practice their coding skills. There are 800+ questions (and growing), each with multiple solutions. Questions are ranked by level of difficulty: easy, medium, and hard.</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {oleetcode.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>upcoming Contests</h3>
                <div className="card-group">{uleetcode.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (oleetcode.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>It's a website where people–mostly software engineers–practice their coding skills. There are 800+ questions (and growing), each with multiple solutions. Questions are ranked by level of difficulty: easy, medium, and hard.</p>

                <h3>Ongoing Contests</h3>
                <div className="card-group"> {oleetcode.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (uleetcode.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About</h3>
                <p>It's a website where people–mostly software engineers–practice their coding skills. There are 800+ questions (and growing), each with multiple solutions. Questions are ranked by level of difficulty: easy, medium, and hard.</p>

                <h3>upcoming Contests</h3>
                <div className="card-group">{uleetcode.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<Redirect to='/' />)
    }
}

export default Leetcode