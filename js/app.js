const countdown = document.querySelector('.countdown');
let launchDate = new Date(1604613600*1000);
const interval = setInterval(()=>{
    updateTimer();
},1000);
updateTimer();
function updateTimer() {
    let currentDate = new Date();
    if(currentDate > launchDate) {
        launchDate.setFullYear(currentDate.getFullYear());
        if(currentDate > launchDate) {
            launchDate.setFullYear(currentDate.getFullYear()+1);
        }
    }
    let diffSeconds = Math.floor((launchDate.getTime() - currentDate.getTime()) / 1000);
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    days = Math.floor(diffSeconds / (3600 * 24));
    diffSeconds -= days * 3600 * 24;
    hours = Math.floor(diffSeconds / 3600);
    diffSeconds -= hours * 3600;
    minutes = Math.floor(diffSeconds / 60);
    diffSeconds -= minutes * 60;
    seconds = diffSeconds;
    let days_text = days > 1 || days == 0 ? `${days} Days` : `${days} Day`;;
    let hours_text = hours > 1 || hours == 0 ? `${hours} Hours` : `${hours} Hour`;
    let minutes_text = minutes > 1 || minutes == 0 ? `${minutes} Minutes` : `${minutes} Minute`;
    let seconds_text = seconds > 1 || seconds == 0 ? `${seconds} Seconds` : `${seconds} Second`;
    
    countdown.innerHTML = `
        <div class="days">${days_text}</div>
        <div class="hours">${hours_text}</div>
        <div class="minutes">${minutes_text}</div>
        <div class="seconds">${seconds_text}</div>
    `;
}