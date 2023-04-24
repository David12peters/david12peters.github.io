const header = document.getElementById("header")
let count = 1;

let b = 1;

function prev(){
 image.innerHTML = `<img src="questions/${imgcont[b]}" />
 <p><img src="question_text/${textcont[b]}" /></p>`;
    count--; 
    b = count
    scoreDecrement();
    elem = 'img' + b
    if (b < 1){
image.innerHTML = `<img src="questions/${imgcont[1]}" />
 <p><img src="question_text/${textcont[1]}" /></p>`;
document.getElementById("page").textContent = 1
count = 1
    }
    if (b > totalPage){
image.innerHTML = `<img src="questions/${imgcont[totalPage]}" />
 <p><img src="question_text/${textcont[totalPage]}" /></p>`;
document.getElementById("page").textContent = totalPage
count = totalPage
    }
 }

function next(){
     b = count + 1;
 image.innerHTML = `<img src="questions/${imgcont[b]}" />
 <p><img src="question_text/${textcont[b]}"</p>`;
   count++;
   scoreIncrement();
   elem = 'img' + b
   
   if (b < 1){
image.innerHTML = `<img src="questions/${imgcont[1]}" />
 <p><img src="question_text/${textcont[1]}" /></p>`;
document.getElementById("page").textContent = 1
count = 1
    }
    if (b > totalPage){
image.innerHTML = `<img src="questions/${imgcont[totalPage]}" />
 <p><img src="question_text/${textcont[totalPage]}" /></p>`;
document.getElementById("page").textContent = totalPage
count = totalPage
    }
}

const stopTime = document.getElementById("stoptime");

const imgcont = ["", "question1.JPG", "question2.JPG", "question3.JPG", "question4.JPG", "question5.JPG", "question6.JPG", "question7.JPG", "question8.JPG", "question9.JPG", "question10.JPG", "question11.JPG", "question12.JPG", "question13.JPG", "question14.JPG", "question15.JPG", "question16.JPG", "question17.JPG", "question18.JPG", "question19.JPG", "question20.JPG", "question21.JPG", "question22.JPG", "question23.JPG", "question24.JPG", "question25.JPG", "question26.JPG", "question27.JPG", "question28.JPG", "question29.JPG", "question30.JPG", "question31.JPG", "question32.JPG", "question33.JPG", "question34.JPG", "question35.JPG", "question36.JPG", "question37.JPG", "question38.JPG", "question39.JPG", "question40.JPG", "question41.JPG", "question42.JPG", "question43.JPG", "question44.JPG", "question45.JPG", "question46.JPG", "question47.JPG", "question48.JPG", "question49.JPG", "question50.JPG", "question51.JPG", "question52.JPG", "question53.JPG", "question54.JPG", "question55.JPG", "question56.JPG", "question57.JPG", "question58.JPG", "question59.JPG", "question60.JPG", "question61.JPG", "question62.JPG", "question63.JPG", "question64.JPG", "question65.JPG", "question66.JPG", "question67.JPG", "question68.JPG", "question69.JPG", "question70.JPG", "question71.JPG", "question72.JPG", "question73.JPG", "question74.JPG", "question75.JPG", "question76.JPG", "question77.JPG", "question78.JPG", "question79.JPG", "question80.JPG", "question81.JPG", "question82.JPG", "question83.JPG", "question84.JPG", "question85.JPG", "question86.JPG", "question87.JPG", "question88.JPG", "question89.JPG", "question90.JPG", "question91.JPG", "question92.JPG", "question93.JPG", "question94.JPG", "question95.JPG", "question96.JPG", "question97.JPG", "question98.JPG", "question99.JPG", "question100.JPG", "question101.JPG", "question102.JPG", "question103.JPG", "question104.JPG", "question105.JPG", "question106.JPG", "question107.JPG", "question108.JPG", "question109.JPG", "question110.JPG", "question111.JPG", "question112.JPG", "question113.JPG", "question114.JPG", "question115.JPG"/*, "question116.JPG", "question117.JPG", "question118.JPG", "question119.JPG", "question120.JPG", "question121.JPG", "question122.JPG", "question123.JPG", "question124.JPG", "question125.JPG", "question126.JPG", "question127.JPG", "question128.JPG", "question129.JPG", "question130.JPG",*/]



const textcont = ["", "question1.JPG", "question2.JPG", "question3.JPG", "question4.JPG", "question5.JPG", "question6.JPG", "question7.JPG", "question8.JPG", "question9.JPG", "question10.JPG", "question11.JPG", "question12.JPG", "question13.JPG", "question14.JPG", "question15.JPG", "question16.JPG", "question17.JPG", "question18.JPG", "question19.JPG", "question20.JPG", "question21.JPG", "question22.JPG", "question23.JPG", "question24.JPG", "question25.JPG", "question26.JPG", "question27.JPG", "question28.JPG", "question29.JPG", "question30.JPG", "question31.JPG", "question32.JPG", "question33.JPG", "question34.JPG", "question35.JPG", "question36.JPG", "question37.JPG", "question38.JPG", "question39.JPG", "question40.JPG", "question41.JPG", "question42.JPG", "question43.JPG", "question44.JPG", "question45.JPG", "question46.JPG", "question47.JPG", "question48.JPG", "question49.JPG", "question50.JPG", "question51.JPG", "question52.JPG", "question53.JPG", "question54.JPG", "question55.JPG", "question56.JPG", "question57.JPG", "question58.JPG", "question59.JPG", "question60.JPG", "question61.JPG", "question62.JPG", "question63.JPG", "question64.JPG", "question65.JPG", "question66.JPG", "question67.JPG", "question68.JPG", "question69.JPG", "question70.JPG", "question71.JPG", "question72.JPG", "question73.JPG", "question74.JPG", "question75.JPG", "question76.JPG", "question77.JPG", "question78.JPG", "question79.JPG", "question80.JPG", "question81.JPG", "question82.JPG", "question83.JPG", "question84.JPG", "question85.JPG", "question86.JPG", "question87.JPG", "question88.JPG", "question89.JPG", "question90.JPG", "question91.JPG", "question92.JPG", "question93.JPG", "question94.JPG", "question95.JPG", "question96.JPG", "question97.JPG", "question98.JPG", "question99.JPG", "question100.JPG", "question101.JPG", "question102.JPG", "question103.JPG", "question104.JPG", "question105.JPG", "question106.JPG", "question107.JPG", "question108.JPG", "question109.JPG", "question110.JPG", "question111.JPG", "question112.JPG", "question113.JPG", "question114.JPG", "question115.JPG"/*, "question116.JPG", "question117.JPG", "question118.JPG", "question119.JPG", "question120.JPG", "question121.JPG", "question122.JPG", "question123.JPG", "question124.JPG", "question125.JPG", "question126.JPG", "question127.JPG", "question128.JPG", "question129.JPG", "question130.JPG",*/]

let addoption = 0
 let body = document.getElementById("body")
 let totalPage = imgcont.length - 1

function scoreIncrement() {
   optionstag.innerHTML = optionEl;
 document.getElementById("page").textContent = b;
correctAb = false
correctBb = false
correctCb = false
correctDb = false
correctEb = false
correctFb = false
}
function scoreDecrement() {
document.getElementById("page").textContent = b;
correctAb = false
correctBb = false
correctCb = false
correctDb = false
correctEb = false
correctFb = false
}




let head = `<button id="prev" onclick="prev()"> < </button>
<button><spam id="page">1</spam>/${totalPage} </button>
    <button id="next" onclick="next()"> > </button>
    <h2><p id="timer"></p></h2>`

const answers = {
  img1: "d",
  img2: "a", 
  img3: "a",
  img4: "a",
  img5: "b",
  img6: "d",
  img7: "d",
  img8: "c",
  img9: "c",
  img10: "a",
  img11: "c",
  img12: "d",
  img13: "d",
  img14: "d",
  img15: "b",
  img16: "a",
  img17: "c",
  img18: "e",
  img19: "a",
  img20: "c",
  img21: "d",
  img22: "d",
  img23: "e",
  img24: "c",
  img25: "b",
  img26: "a",
  img27: "a",
  img28: "d",
  img29: "c",
  img30: "d",
  img31: "c",
  img32: "a",
  img33: "c",
  img34: "c",
  img35: "c",
  img36: "a",
  img37: "e",
  img38: "a",
  img39: "d",
  img40: "d",
  img41: "c",
  img42: "e",
  img43: "a", 
  img44: "e",
  img45: "a",
  img46: "a",
  img47: "c",
  img48: "b",
  img49: "c",
  img50: "d",
  img51: "b",
  img52: "c",
  img53: "b",
  img54: "b",
  img55: "b",
  img56: "b",
  img57: "b",
  img58: "c",
  img59: "b",
  img60: "b",
  img61: "b",
  img62: "e",
  img63: "d",
  img64: "a",
  img65: "e",
  img66: "a",
  img67: "a",
  img68: "c",
  img69: "a",
  img70: "a",
  img71: "c",
  img72: "a",
  img73: "d",
  img74: "e",
  img75: "c",
  img76: "d",
  img77: "c",
  img78: "a",
  img79: "d",
  img80: "a",
  img81: "f",
  img82: "a",
  img83: "b",
  img84: "a",
  img85: "d",
  img86: "d",
  img87: "a",
  img88: "d",
  img89: "d",
  img90: "b",
  img91: "b",
  img92: "c",
  img93: "c",
  img94: "d",
  img95: "a",
  img96: "b",
  img97: "c",
  img98: "d",
  img99: "b",
  img100: "d",
  img101: "b",
  img102: "a",
  img103: "d",
  img104: "a",
  img105: "b",
  img106: "a",
  img107: "b",
  img108: "b",
  img109: "c",
  img110: "a",
  img111: "b",
  img112: "c",
  img113: "a",
  img114: "c",
  img115: "b",/*
  img116: "e",
  img117: "e",
  img118: "e",
  img119: "e",
  img120: "e",
  img121: "e",
  img122: "e",
  img123: "e",
  img124: "e",
  img125: "e",
  img126: "e",
  img127: "e",
  img128: "e",
  img129: "e",*/
};
   
   const image = document.getElementById("image")
   const optionstag = document.getElementById("optionstag")

   const demoimg = `<img src="questions/${imgcont[1]}" />
   <p><img src="question_text/${textcont[1]}" /></p>`
   const optionEl = `<ol id="options" ><li><label><input id="optionA" onclick="optionA()" type="radio" name="indoor-outdoor" value="indoor" >A</label></li>
            <li><label><input id="optionB" onclick="optionB()" type="radio" name="indoor-outdoor" value="outdoor">B</label></li>
            <li><label><input id="optionC" onclick="optionC()" type="radio" name="indoor-outdoor" value="indoor" >C</label></li>
            <li><label><input id="optionD" onclick="optionD()" type="radio" name="indoor-outdoor" value="outdoor">D</label></li>
            <spam id="optionsbtn"><button onclick="otherOptions()" id="optionsbtn">Other-options</button></spam>
            <spam id="otheroptions">
            </spam>
            </ol><br /><br /><br /><br />
               <input id="submit" type="submit" onclick="submit()" />
`
   ;
   

function start(){
    header.innerHTML = head;
    image.innerHTML = demoimg;
    countdownTimeStart();
    optionstag.innerHTML = optionEl;
    document.getElementById("footer").innerHTML = ""
    document.getElementById("inputlabel").innerHTML = ""
}



let correctAb = false
let correctBb = false
let correctCb = false
let correctDb = false
let correctEb = false
let correctFb = false



  let elem = 'img' + b



function optionA() {
  if (answers[elem] == "a"){
    if (correctAb === false ){
         addoption++;
         correctAb = true;
        }
      }
}
function optionB() {
  if (answers[elem] == "b"){
     if (correctBb === false){
        addoption++;
        correctBb = true;
        }
}
}

function optionC() {
    if (answers[elem] == "c"){
     if (correctCb === false){
        addoption++;
        correctCb = true;
        }
}
}

function optionD() {
    if (answers[elem] == "d"){
     if (correctDb === false){
         addoption++;
         correctDb = true;
        }
}
}

function optionE() {
    if (answers[elem] == "e"){
     if (correctEb === false){
         addoption++;
         correctEb = true;
        }
}
}

function optionF() {
    if (answers[elem] == "f"){
     if (correctFb === false){
         addoption++;
         correctFb = true;
        }
}
}



function submit(){
let percent = addoption / totalPage * 100;
let result = Math.floor(percent) + "%"
let text = `
    <article class="second-page"><h2>Test is over</h2><br />
    <h1>RESULT<h1><br />
    <h3>Score: ${addoption}/${totalPage}</h3><br />
    <h3>Percentage: ${result}</h3></article>`
    body.innerHTML = text;
}

function otherOptions(){
    document.getElementById("otheroptions").innerHTML = 
    `
 <li><label><input id="optionE" onclick="optionE()" type="radio" name="indoor-outdoor" value="outdoor">E</label></li>
 <li><label><input id="optionF" onclick="optionF()" type="radio" name="indoor-outdoor" value="outdoor">F</label></li>
    `;
    document.getElementById("optionsbtn").innerHTML = "";
}



// Set the date we're counting down to
function countdownTimeStart(){
var countDownDate = new Date(`Jan 27, 2025 ${stopTime.value}`).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 1){
         clearInterval(x); 
         submit();
          document.getElementById("timer").innerHTML = "TIME UP";  
  }
}, 1000);
}
