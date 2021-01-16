import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
var sec = 0;
var min = 1;
var zeromin = '0';
var zerosec = '0';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  id: any
  oclock: any
  timeExpend = null;
  startChrono: boolean = false
  timeCountDown = null
  startCounter = false

  constructor() { }

  ngOnInit(): void {
    this.oclock = setInterval(this.reloj, 500);

  }

  startReloj() {
    this.ngOnInit()
  }
  
  reloj() {

    let today = new Date();
    let hour: any = today.getHours();
    let hr: any
    let minutes: any = today.getMinutes();
    let min: any
    let second: any = today.getSeconds();
    let sec: any
    $("#showChrono").prop('hidden', true);
    $("#reloj").prop('hidden', true);
    this.timeCountDown = null;
    this.timeExpend = null;
    clearInterval(this.timeCountDown)
    clearInterval(this.timeExpend)

    if (hour < 10) {
      hr = "0" + hour
    }
    else {
      hr = hour
    }

    if (minutes < 10) {
      min = "0" + minutes
    }
    else {
      min = minutes
    }
    
    if (second < 10) {
      sec = "0" + second
    }
    else {
      sec = second
    }
    
    document.getElementById('displayReloj').innerHTML = hr + ":" + min + ":" + sec;

  }
  
 
  countDown() {
    clearInterval(this.oclock);
    $("#reloj").prop('hidden', true);
    
    if (min < 10) {
      zeromin = '0';
    }
    else {
      zeromin = '';
    }

    if (sec < 10) {
      zerosec = '0';
    }
    else {
      zerosec = '';
    }

    sec = sec % 60;

    document.getElementById("displayReloj").innerHTML = zeromin + min + ':' + zerosec + sec;
       
    if (min === 0 && sec === 0) {
      this.stopCountDown()
    }
    
    if (sec == 0) {
      min--;
      sec += 60;
    }
    
    sec--;
    
    this.timeCountDown = setInterval(this.countDown, 1000);
  }
  
  showChronometer() {
    this.closeTimer()
    this.closeChronometer()
    this.closeTimer()
    $("#showChrono").prop('hidden', false);
    $("#reloj").prop('hidden', true);  
    $("#displayReloj").prop('hidden', true);  
  }
  
  closeTimer() {
    clearInterval(this.oclock);
  }

  stopCountDown() {
    clearInterval(this.timeCountDown);
    this.startCounter = false
    this.timeCountDown = null
  }

  closeChronometer() {
    clearInterval(this.timeExpend);
  }

  startChonometer() {
    this.startChrono = true
    this.timeExpend = null;
    this.chronometer()
  }

  stopChonometer() {
    this.startChrono = false
    this.chronometer()
  }

  chronometer() {
    let timeChrono = {
        h: 0,
        m: 0,
        s: 0
    };
    
    if (this.startChrono) {
      this.timeExpend = setInterval(function() {
            timeChrono.s++;
        if (timeChrono.s >= 60) {
            timeChrono.s = 0;
            timeChrono.m++;
        }

        if (timeChrono.m >= 60) {
            timeChrono.m = 0;
            timeChrono.h++;
        }

        $("#hour").text(timeChrono.h < 10 ? '0' + timeChrono.h : timeChrono.h);
        $("#minute").text(timeChrono.m < 10 ? '0' + timeChrono.m : timeChrono.m);
        $("#second").text(timeChrono.s < 10 ? '0' + timeChrono.s : timeChrono.s);
    }, 15);
      } 
      else {
        clearInterval(this.timeExpend);
      }
    
  }



}
