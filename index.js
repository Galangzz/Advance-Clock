// document.addEventListener('DOMContentLoaded', () => {
//     // Current Time
//     function updateTime() {
//         const now = new Date();
//         const timeString = now.toLocaleTimeString();
//         document.getElementById('current-time').textContent = timeString;
//     }
//     setInterval(updateTime, 1000);
//     updateTime();


//     // function formatTime(seconds) {
//     //     const hrs = Math.floor(seconds / 3600);
//     //     const mins = Math.floor((seconds % 3600) / 60);
//     //     const secs = seconds % 60;
//     //     // if(hrs < 10){
//     //     //     hrs = "0" + Math.floor(seconds / 3600);
//     //     // }
//     //     return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
//     // }
// })


//CLOCK
var waktu = document.getElementById("current-time")

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

    waktu.innerHTML = jam + ":" + menit + ":" + detik + " " + formatWaktu;
};

setInterval(jamSekarang, 1000);
jamSekarang();