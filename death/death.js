// Your birth date
const birthDate = new Date('2008-08-21T05:00:00'); // Change this to your actual birth date

function updateAgeClock() {
    const now = new Date();
    
    // Calculate the total time difference in milliseconds
    let timeDifference = now - birthDate;

    // Calculate leap days
    let leapDays = 0;
    for (let year = birthDate.getFullYear(); year <= now.getFullYear(); year++) {
        if (isLeapYear(year)) {
            // Add a day if it's a leap year and we've passed February 29th of that year
            if (year < now.getFullYear() || (year === now.getFullYear() && now.getMonth() > 1) || 
               (year === now.getFullYear() && now.getMonth() === 1 && now.getDate() > 29)) {
                leapDays++;
            }
        }
    }

    // Add leap days to the time difference
    timeDifference += leapDays * 86400000; // 86400000 milliseconds in a day

    // Calculate the difference in years, months, days, hours, minutes, and seconds
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    // Adjust for negative values
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const previousMonth = (now.getMonth() - 1 + 12) % 12;
        const daysInPreviousMonth = new Date(now.getFullYear(), previousMonth + 1, 0).getDate();
        days += daysInPreviousMonth;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Display the result in the HTML
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Call the function every second to continuously update the age clock
setInterval(updateAgeClock, 1000);
updateAgeClock(); // Initial call to set the time immediately
















