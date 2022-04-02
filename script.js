// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [2, 5, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistake = 0;
var sec = 60;
var interval;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  mistake = 0;
  sec = 60;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // generate random pattern
  generatePattern();
  
  // play clue
  playClueSequence();
  interval = setInterval(countTime, 1000);
}

function stopGame(){
  gamePlaying = false;
  clearInterval(interval);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 372,
  4: 466,
  5: 520
}
function playTone(btn,len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime -= 80;
  console.log("speed: " + clueHoldTime);
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats, you won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if (btn != pattern[guessCounter]) {
    mistake++;
  }
  if (mistake == 3) {
    loseGame();
  }
  if (guessCounter != progress) {
    guessCounter++;
  } else {
    if (progress != pattern.length - 1) {
      progress++;
      playClueSequence();
    } else {
      winGame();
    }
  }
  console.log("mistakes: " + mistake);
  
  // basic version
  // if (btn != pattern[guessCounter]) {
  //   loseGame();
  // } else {
  //   if (guessCounter != progress) {
  //     guessCounter++;
  //   } else {
  //     if (guessCounter != pattern.length - 1) {
  //       progress++;
  //       playClueSequence();
  //     } else {
  //       winGame();
  //     }
  //   }
  // }
}

function generatePattern() {
  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.floor(Math.random() * 5 + 1);
  }
  console.log("new pattern: " + pattern);
}

function countTime() {
  document.getElementById("time").innerHTML = "Time left: " + sec + "s";
  if (sec < 0) {
    loseGame();
    clearInterval(interval);
    document.getElementById("time").innerHTML = "Waiting for start";
  }
  sec -= 1;
}
