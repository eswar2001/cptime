import { ocodechef, ucodechef } from "../index";
import React from 'react';
import Card from "../card";

function Codechef(params) {
    return (<>
        <p>{params.about}</p>
        <div className="container">
            <h1>Ongoing Contests</h1>
            <div className="row"> {ocodechef.map((uData) => {
                return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                    endTime={uData.endTime} url={uData.url} />)
            })}</div>
            <h1>upcoming Contests</h1>
            <div className="row">{ucodechef.map((uData) => {
                return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                    endTime={uData.endTime} url={uData.url} />)
            })}</div>
        </div>
    </>);
}

export default Codechef