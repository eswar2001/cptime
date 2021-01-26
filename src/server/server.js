
import fetch from "node-fetch";
import AOS from "aos";
var uatcoder = [],
    ucodechef = [],
    ucodeforces = [],
    uhackerearth = [],
    ukaggle = [],
    uleetcode = [],
    utopcoder = [];
var oatcoder = [],
    ocodechef = [],
    ocodeforces = [],
    ohackerearth = [],
    okaggle = [],
    oleetcode = [],
    otopcoder = [];
let upcoming;
let ongoing;
AOS.init({ easing: 'ease-in' })
export const getData = () => {
    const url = process.env.React_App_RESTAPI_URL;
    fetch(url, {
        method: "get"
    }).then(res => res.json())
        .then((response) => {
            upcoming = response.results.upcoming;
            ongoing = response.results.ongoing;
            localStorage.setItem('upcoming', JSON.stringify(upcoming))
            localStorage.setItem('ongoing', JSON.stringify(ongoing))
            for (let i in upcoming) {
                if (upcoming[i].platform === "codeforces") {
                    ucodeforces.push(upcoming[i]);
                } else if (upcoming[i].platform === "hackerearth") {
                    uhackerearth.push(upcoming[i]);
                } else if (upcoming[i].platform === "atcoder") {
                    uatcoder.push(upcoming[i]);
                } else if (upcoming[i].platform === "leetcode") {
                    uleetcode.push(upcoming[i]);
                } else if (upcoming[i].platform === "kaggle") {
                    ukaggle.push(upcoming[i]);
                } else if (upcoming[i].platform === "codechef") {
                    ucodechef.push(upcoming[i]);
                }
                else if (upcoming[i].platform === "topcoder") {
                    utopcoder.push(upcoming[i]);
                }
            }
            for (let i in ongoing) {
                if (ongoing[i].platform === "codeforces") {
                    ocodeforces.push(ongoing[i]);
                } else if (ongoing[i].platform === "hackerearth") {
                    ohackerearth.push(ongoing[i]);
                } else if (ongoing[i].platform === "atcoder") {
                    oatcoder.push(ongoing[i]);
                } else if (ongoing[i].platform === "leetcode") {
                    oleetcode.push(ongoing[i]);
                } else if (ongoing[i].platform === "kaggle") {
                    okaggle.push(ongoing[i]);
                } else if (ongoing[i].platform === "codechef") {
                    ocodechef.push(ongoing[i]);
                } else if (ongoing[i].platform === "topcoder") {
                    otopcoder.push(ongoing[i]);
                }
            }
        })
        .catch(() => {
            upcoming = JSON.parse(localStorage.getItem('upcoming'))
            ongoing = JSON.parse(localStorage.getItem('ongoing'))
            console.log('fetched from cache')
            for (let i in upcoming) {
                if (upcoming[i].platform === "codeforces") {
                    ucodeforces.push(upcoming[i]);
                } else if (upcoming[i].platform === "hackerearth") {
                    uhackerearth.push(upcoming[i]);
                } else if (upcoming[i].platform === "atcoder") {
                    uatcoder.push(upcoming[i]);
                } else if (upcoming[i].platform === "leetcode") {
                    uleetcode.push(upcoming[i]);
                } else if (upcoming[i].platform === "kaggle") {
                    ukaggle.push(upcoming[i]);
                } else if (upcoming[i].platform === "codechef") {
                    ucodechef.push(upcoming[i]);
                } else if (upcoming[i].platform === "topcoder") {
                    utopcoder.push(upcoming[i]);
                }
            }
            for (let i in ongoing) {
                if (ongoing[i].platform === "codeforces") {
                    ocodeforces.push(ongoing[i]);
                } else if (ongoing[i].platform === "hackerearth") {
                    ohackerearth.push(ongoing[i]);
                } else if (ongoing[i].platform === "atcoder") {
                    oatcoder.push(ongoing[i]);
                } else if (ongoing[i].platform === "leetcode") {
                    oleetcode.push(ongoing[i]);
                } else if (ongoing[i].platform === "kaggle") {
                    okaggle.push(ongoing[i]);
                } else if (ongoing[i].platform === "codechef") {
                    ocodechef.push(ongoing[i]);
                } else if (ongoing[i].platform === "topcoder") {
                    otopcoder.push(ongoing[i]);
                }
            }
        })

}
export {
    uatcoder,
    ucodechef,
    ucodeforces,
    uhackerearth,
    ukaggle,
    uleetcode,
    oatcoder,
    ocodechef,
    ocodeforces,
    ohackerearth,
    okaggle,
    oleetcode,
    otopcoder,
    utopcoder
};