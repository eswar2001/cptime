import { oatcoder, uatcoder } from "../index";
import React from 'react';
import Card from "../card";

const Atcoder = () => {

    if (oatcoder.length !== 0 && uatcoder.length !== 0) {
        return (<>
            <div className="container" >
                <h1>Ongoing Contests</h1>
                <div className="card-group"> {oatcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" >
                <h1>upcoming Contests</h1>
                <div className="card-group">{uatcoder.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (oatcoder.length !== 0) {
        return (<>
            <div className="container" >
                <h1>Ongoing Contests</h1>
                <div className="card-group"> {oatcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (uatcoder.length !== 0) {
        return (<>
            <div className="container" >
                <h1>upcoming Contests</h1>
                <div className="card-group">{uatcoder.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<p>No contests at the instant</p>)
    }
}
export default Atcoder;
