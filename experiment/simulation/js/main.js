//Your JavaScript goes in here
var enablebtn = document.getElementById("enable");
var purzeButton = document.getElementById("purze");
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg = document.getElementById("Layer_1");

var waterTankFront = document.getElementById("Tank_Water_Front")
var waterTankBase = document.getElementById("Water_Tank_Base")
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");
var ml = document.getElementById("Mercury_Left")
var timerSec = document.getElementById("timer-sec")
var timerMS = document.getElementById("timer-ms")

var arrowRect = document.getElementById("arrow-rect")
var arrowPol = document.getElementById("arrow-pol")

function power(){
    if(count==0){
        enablebtn.style.backgroundColor = "#4cae4c"
        document.getElementById("steps").innerHTML = "Please wait until the water reaches the Flow Rate Valve."
        enablebtn.textContent = "POWER OFF"
        count=1

        // audio.play()
        stopWaterFlow2=false
        stopWaterFlow3=false
        stopWaterFlow4=false
        stopWaterFlow5=false
        stopValvePositioning = false
        stopWaterFlow7=false
        stopWaterFlow7_6=false
        stopWaterFlow10 = false
        stopWaterFlow9 = false
        stopWaterFlow12 = false
        stopWaterFlow13 = false

        waterFlow1()

    }else{
        enablebtn.style.backgroundColor = "#ca2222"
        document.getElementById("steps").innerHTML = "Turn Power On"
        enablebtn.textContent = "POWER ON"
        count = 0
        audio.pause()
        audio.currentTime = 0;

        valvePositioning.disabled=true
        purzeButton.disabled=true
        stopWaterFlow2=true
        stopWaterFlow3=true
        stopWaterFlow4=true
        stopWaterFlow5=true
        stopWaterFlow7=true
        stopValvePositioning = true
        stopWaterFlow7_6 = true
        stopWaterFlow10 = true
        stopWaterFlow9 = true
        stopWaterFlow12 = true
        stopWaterFlow13 = true



        resetAll()
        
    }
}