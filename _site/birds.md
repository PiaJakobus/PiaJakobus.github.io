<a STYLE="margin: 30px 20px 10px 20px" href="#myHeader"><big>1.Birds of Australia</big></a>
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/wildlife"><big>2.Australia's Wildlife</big></a> 

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  text-align: center;
  padding: 32px;
}

.row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>
</head>
<body>

<!-- Header -->
<div class="header" id="myHeader">
  <h1>Birds of Australia</h1>
  <p>Click on the buttons to change the grid view.</p>
  <button class="btn" onclick="one()">1</button>
  <button class="btn active" onclick="two()">2</button>
  <button class="btn" onclick="four()">4</button>
</div>

<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/pictures/birds/noisy_miner.jpg" style="width:100%">
    <figcaption>Noisy Miner (Manorina melanocephala). Bird of the honeyeater family. Endemic to 				east and southeast Australia.</figcaption>
    <img src="/pictures/birds/noisy_miner2.jpg" style="width:100%">
    <figcaption>Curious noisy Miner in a tree.</figcaption>
    <img src="/pictures/birds/noisy_miner3.jpg" style="width:100%">
    <figcaption>Urban noisy Miner.</figcaption>
    <img src="/pictures/birds/honeyeater.jpg" style="width:100%">
    <figcaption>Native new Holland honeyeater (Phylidonyris novaehollandiae).</figcaption>
    <img src="/pictures/birds/lorikeet1.jpg" style="width:100%">
    <figcaption>Rainbow Lorikeet (Trichoglossus moluccanus) is part of the parrot family, mostly found in eastern Australia.</figcaption>
  </div>
  <div class="column">
     <img src="/pictures/birds/lorikeet2.jpg" style="width:100%">
     <figcaption>Another inquisitive rainbow Lorikeet</figcaption>
     <img src="/pictures/birds/gull1.jpg" style="width:100%">
     <figcaption>Silver gull (Chroicocephalus novaehollandiae) (can drink both freshwater and saltwater and is among the most intelligent birds). Rumour has it that Seagulls were used by the British in WW I to detect German submarines. </figcaption>
    <img src="/pictures/birds/gull2.jpg" style="width:100%">
    <img src="/pictures/birds/gull3.jpg" style="width:100%">
    <img src="/pictures/birds/gull4.jpg" style="width:100%">
    <img src="/pictures/birds/gull5.jpg" style="width:100%">
    <figcaption>Silver gull engaging in courtship behaviour.</figcaption>
    <img src="/pictures/birds/pelikan1.jpg" style="width:100%">
    <figcaption>Australian pelican (Pelecanus conspicillatus) aka the Riverman found around Australia. It hast the largest beak among all birds.</figcaption>
    <img src="/pictures/birds/pelikan2.jpg" style="width:100%">
  </div>  
  <div class="column">
     <img src="/pictures/birds/pelikan3.jpg" style="width:100%">
    <img src="/pictures/birds/eagle1.jpg" style="width:100%">
    <figcaption>Powerful owl (Ninox strenua). Likes to hunt small mammals. Endemic to eastern and south-eastern Australia</figcaption>
    <img src="/pictures/birds/eagle2.jpg" style="width:100%">
    <figcaption>Eastern osprey. Has fish on its menu.</figcaption>
    <img src="/pictures/birds/gallah.jpg" style="width:100%">
    <figcaption> Galah (Eolophus roseicapilla) part of the Cockatoos family found throughout Australia. Galahs like to travel in flocks and have life-long bonds with their partners. Can reach up > 70 years!</figcaption>
    <img src="/pictures/birds/frogmouth1.jpg" style="width:100%">
    <figcaption> Tawny Frogmouth (Podargus strigoides). Not part of the owl family. Nocturnal bird with amazing camouflage. </figcaption>
    <img src="/pictures/birds/frogmouth2.JPG" style="width:100%">
    <img src="/pictures/birds/frogmouth3.JPG" style="width:100%">
    <img src="/pictures/birds/not_known.jpg" style="width:100%">
    <figcaption> Not sure which species this is! </figcaption>   
  </div>
  <div class="column">
    <img src="/pictures/birds/pigeon1.jpg" style="width:100%">
    <figcaption>White-headed Pigeon</figcaption>
    <img src="/pictures/birds/kookaburra1.jpg" style="width:100%">
    <figcaption>Iconic Australian Kookaburra. Its ''cliche jungle sound'' was used in Hollywood movies! </figcaption>
    <img src="/pictures/birds/kookaburra.jpg" style="width:100%">
    <img src="/pictures/birds/fantail.JPG" style="width:100%">
    <figcaption> Of the fantail family (genus Rhipidura), with the Australian bird called ``willie wagtail''. Fantails are native to Australasia, Southeast Asia and the Indian subcontinent. In Māori mythology, the fantail brought death, and is also called the Devil bird. Maybe because of its angry looking ''eyebrows''. </figcaption> 
    <img src="/pictures/birds/fantail2.JPG" style="width:100%">
    <figcaption> Another curous fantail </figcaption>
    <img src="/pictures/birds/brown_thornbill.JPG" style="width:100%">
    <figcaption> Brown Thornbill (Acanthiza pusilla) found in eastern and south-eastern Australia. Often caught by cats. </figcaption>
    <img src="/pictures/birds/wattlebird.JPG" style="width:100%">
    <figcaption> Some kind of Wattlebird, not sure which one! </figcaption>
   <img src="/pictures/birds/Dusky_moorhen.jpg" style="width:100%">
   <figcaption> Dusky moorhen (Gallinula tenebrosa) inspecting its reflection. </figcaption> 
  </div>
</div>

<script>
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>

</body>
</html>

