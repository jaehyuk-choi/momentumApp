const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const secs = String(date.getSeconds()).padStart(2, "0");
    
    // if (0 <= secs && secs <= 9){
    //     secs = '0'+secs;
    // }
    // else if (0 <= mins && mins<= 9){
    //     mins = '0'+mins
    // }

    clock.innerText = `${hours}:${mins}:${secs}`;
}

getClock();
setInterval(getClock, 1000);
