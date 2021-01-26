import { oatcoder, uatcoder } from "../server/server";
import { Redirect } from 'react-router';
import React from 'react';
import Card from "../components/card";
const Atcoder = () => {
   
    if (oatcoder.length !== 0 && uatcoder.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About:</h3>
                <p>AtCoder is a programming contest website based in Japan. ... This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational.There are three types of official contests in AtCoder:</p>
                <ul>
                        <li> AtCoder Grand Contest (AGC). This is our best contest. The problems will have high originality and require interesting observations.</li>
                        <li>      AtCoder Regular Contest (ARC). The problems may be a bit typical compared to AGC problems, but still we think most of you can enjoy them and they are good for practice.</li>
                        <li>    AtCoder Beginner Contest (ABC). This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational.</li>
                    </ul>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {oatcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>upcoming Contests</h3>
                <div className="card-group">{uatcoder.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    }
    else if (oatcoder.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About:</h3>
                <p>AtCoder is a programming contest website based in Japan. ... This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational.There are three types of official contests in AtCoder:
                </p>
                <ul>
                    <li> AtCoder Grand Contest (AGC). This is our best contest. The problems will have high originality and require interesting observations.</li>
                    <li>      AtCoder Regular Contest (ARC). The problems may be a bit typical compared to AGC problems, but still we think most of you can enjoy them and they are good for practice.</li>
                    <li>    AtCoder Beginner Contest (ABC). This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational.</li>
                </ul>
                <h3>Ongoing Contests</h3>
                <div className="card-group"> {oatcoder.map((uData) => {
                    return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else if (uatcoder.length !== 0) {
        return (<>
            <div className="container" data-aos-duration="4000" data-aos-offset="10" data-aos="fade-right" >
                <h3>About:</h3>
                <p>AtCoder is a programming contest website based in Japan. ... This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational.There are three types of official contests in AtCoder:
                   
                </p> <ul>
                        <li> AtCoder Grand Contest (AGC). This is our best contest. The problems will have high originality and require interesting observations.</li>
                        <li>      AtCoder Regular Contest (ARC). The problems may be a bit typical compared to AGC problems, but still we think most of you can enjoy them and they are good for practice.</li>
                        <li>    AtCoder Beginner Contest (ABC). This is mainly targeted for those who are new to competitive programming. The problems will be easy and educational.</li>
                    </ul><h3>upcoming Contests</h3>
                <div className="card-group">{uatcoder.map((uData) => {
                    return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
                        endTime={uData.endTime} url={uData.url} />)
                })}</div>
            </div>
        </>);
    } else {
        return (<Redirect to='/' />)
    }
}
export default Atcoder;
