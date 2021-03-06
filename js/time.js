const timeElement = document.getElementById('time');
const greetingElement = document.getElementById('greeting');
const countdownElement = document.getElementById('countdown');

function getTime() {
    const diffDays = (d) => {
        let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        let secondDate = new Date(d.getFullYear(),4,5);
        let firstDate = d;
        return Math.trunc(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    }

    const today = new Date();
    const hours = today.getHours();
    const minutes = checkTime(today.getMinutes());
    let meridiem;
    let greeting;


    let daysLeft = diffDays(today);

    // Example
    

    if (hours < 12) {
        meridiem = 'AM';
    } else {
        meridiem = 'PM';
    }

    if(hours > 3 && hours < 12) {
        greeting = "Morning";
    } else if(hours >= 12 && hours < 18) {
        greeting = "Afternoon";
    } else if(hours >= 18 && hours < 20) {
        greeting = "Evening";
    } else {
        greeting = "Night";
    }

    

    timeElement.innerHTML = ((hours - 12 > 0) ? hours - 12 : (hours == 0) ? 12 : hours) + ":" + minutes + '&nbsp;' + meridiem;
    greetingElement.innerHTML = "Good " + greeting + ",<br>Vincent";
    //countdownElement.innerHTML = (daysLeft == 1) ? "Tomorrow..." : (daysLeft < 1) ? "Good Luck." : daysLeft + " Days Left";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

getTime();

setInterval(getTime, 500);