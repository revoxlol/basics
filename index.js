function checkTime(i) {
    if (Number(i) < 10)  i = "0" + i;
    return i;
}
   
function startTime() {
    let currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    document.getElementById("time").innerText = checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s);
   }
   
   setInterval(() => {
       startTime();
   }, 1000);