//CLOCK
// document.addEventListener('DOMContentLoaded', () => {
var waktu = document.getElementById("current-time")

if (waktu) {
    
    function jamSekarang(){
        var waktuSekarang = new Date()
    var jam = waktuSekarang.getHours();
    var menit = waktuSekarang.getMinutes();
    var detik = waktuSekarang.getSeconds();
    var formatWaktu ="AM";
    
    formatWaktu = (jam>=12)? "PM" : "AM";
    
    if(jam == 0){
        jam = 12;
    }else if(jam > 12){
        jam -= 12;
    }
    
    jam = (jam < 10) ? "0" + jam : jam;
    menit= (menit < 10) ? "0" + menit : menit;
    detik = (detik < 10) ? "0" + detik : detik;
    
    waktu.innerHTML = `${jam}:${menit}:${detik} ${formatWaktu}`;
    
};
setInterval(jamSekarang, 1000);
jamSekarang();
}
// });



//TIMER
const display = document.getElementById('time-watch');
if(display){
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    
    function start(){
        if(!isRunning){
            startTime = Date.now() - elapsedTime;
            timer = setInterval(update, 10)
            isRunning = true;
        }
    }
    
    function stop(){
        if(isRunning){
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
    }
    
    function reset(){
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning = false;
        display.textContent = "00:00:00.00";
    }
    
    function update(){
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60 );
        let milliseconds = Math.floor(elapsedTime % 1000 / 10 );
        
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        
        display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    
}

//stopwatch
