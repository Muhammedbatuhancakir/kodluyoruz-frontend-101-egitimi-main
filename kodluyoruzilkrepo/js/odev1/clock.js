let myName = prompt("İsminizi giriniz: ")
let inName = document.querySelector("#myName")
inName.innerHTML = `${myName.charAt(0).toUpperCase()+myName.slice(1)}`

function showTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds();
    
    if (h<10) {
        h = "0"+ h
    }    
    if (m<10){
        m = "0" + m
    }
    if (s<10) {
        s = "0" + s
    }


    let time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerText = time;//time en başa alınca saati göstermiyor.Neden??
    
    setTimeout(showTime, 1000);
    
}

showTime();