function count(){
    var start = document.getElementById("starttxt")
    var end = document.getElementById("endtxt")
    var step = document.getElementById("steptxt")
    var res = document.querySelector("div#res")

    res.innerHTML = "Counting: "
   
//Variables loop
    var s = Number(start.value)
    //start
    var e = Number(end.value)
    //end
    var st = Number(step.value)
    //step

    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert("[ERROR] Check your values again!")
    } else if(st <= 0){
        window.alert("[ERROR] Step cannot be less than or equal to 0")
    } else if(s < e){
       for(var c = s; c <= e; c += st){
            res.innerHTML += `${c} \u{1F449} `
        }
        //count up
    } else{
        for(var c = s; c >= e; c -= st){
            res.innerHTML += `${c} \u{1F449} `
        }
        //count down
    }
    res.innerHTML += "\u{1F3C1}"
}