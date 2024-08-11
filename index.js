//CLOCK
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


//Stopwatch
const display = document.getElementById('stopwatch-watch');
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
        display.textContent = "00:00:00:00";
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


//Timer
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const mulai = document.getElementById("tombol1");
const berhenti = document.getElementById("tombol2");
const clear = document.getElementById("tombol3");

if(hour && minute && second){
    var interval = null;
    var total = 0;
    var isRunning = false;

    totalValue = ()=>{
        total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
    }

    Timer = ()=>{
        totalValue();
        total --;

        if (total >= 0){
            var hr = Math.floor(total / 3600);
            var mnt = Math.floor(total / 60 % 60);
            var sec = Math.floor(total % 60);

            hr = (hr < 10) ? "0" + hr : hr;
            mnt = (mnt < 10) ? "0" + mnt : mnt;
            sec = (sec < 10) ? "0" + sec : sec;

            hour.value = hr;
            minute.value = mnt;
            second.value = sec;
            
        }
        else{
            alert("Time Over!!!");
            clearInterval(interval);
            hour.value = "";
            minute.value = "";
            second.value = "";
            isRunning = false;
        }
    }

    mulai.addEventListener('click', ()=>{
        totalValue();
        if (!(hour.value || minute.value || second.value)){
            alert("Please fill the time");
        }else if(total <= -1){
            alert("Invalid Time")
            clearInterval(interval);
            hour.value = "";
            minute.value = "";
            second.value = "";
            return;
        }else{
            
            if(!isRunning){
                clearInterval(interval);
                interval = setInterval(Timer, 1000);
            }
            isRunning = true;
        }
    });

    berhenti.addEventListener('click', ()=>{
        
        if(isRunning){
            clearInterval(interval);
            isRunning = false;
        }
    });

    clear.addEventListener('click', ()=>{
        clearInterval(interval);
        isRunning = false;
        hour.value = "";
        minute.value = "";
        second.value = "";
    });
}