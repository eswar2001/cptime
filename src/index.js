import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';
import fetch from 'node-fetch';
var data;
async function getData() {
  const url = 'https://cplistapi.herokuapp.com/';
  const response = await fetch(url);
  data = await response.json();
}
getData().then(() => {
  const upcoming = data.results.upcoming;
  const ongoing = data.results.ongoing;
  ReactDOM.render(
    <>
      <div className="container">
        <div className="row">
          {upcoming.map((uData) => {
            return (<Card status={0} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
              endTime={uData.endTime} url={uData.url} />)
          })}
          {ongoing.map((uData) => {
            return (<Card status={1} key={uData.name} name={uData.name} platform={uData.platform} startTime={uData.startTime}
              endTime={uData.endTime} url={uData.url} />)
          })}
        </div>
      </div>
    </>,
    document.getElementById('root')
  );
});