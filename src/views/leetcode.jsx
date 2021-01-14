import { oleetcode, uleetcode } from "../index";
import React from 'react';
import Card from "../card";

function Leetcode() {

    if (oleetcode.length !== 0 && uleetcode.length !== 0) {
        return (<>
            <div className="container" >
                <h1>Ongoing Contests</h1>
                <div className="card-group"> {oleetcode.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" >
                <h1>upcoming Contests</h1>
                <div className="card-group">{uleetcode.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (oleetcode.length !== 0) {
        return (<>
            <div className="container" >
                <h1>Ongoing Contests</h1>
                <div className="card-group"> {oleetcode.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if(uleetcode.length!==0) {
        return (<>
            <div className="container" >
                <h1>upcoming Contests</h1>
                <div className="card-group">{uleetcode.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<p>No contests at the instant</p>)
    }
}

export default Leetcode