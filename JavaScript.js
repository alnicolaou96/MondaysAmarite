var day;
var monday = false;

//time api
fetch("https://world-time2.p.rapidapi.com/ip", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "world-time2.p.rapidapi.com",
        "x-rapidapi-key": "22f633b01amsh6be91bad6480fe2p14d4bdjsn2dd25817685a"
    }
})
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        day = data.day_of_week;
    })
    .catch(err => {
        console.log(err);
    });


//allows 900 milliseconds to pass to run code to give the api time to fetch the time
window.setTimeout(function () {
    console.log(day);
    if (day === 1) {//checks if it is monday
        document.getElementById("monday").innerHTML = "ugh another monday";
    }
}, 900);
