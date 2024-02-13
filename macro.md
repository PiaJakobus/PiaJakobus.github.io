<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/birds"><big>1.Birds of Australia</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/wildlife"><big>2.Australia's Wildlife</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="#myHeader"><big>3.Insects</big></a>
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/wildlife"><big>4.Ocean</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/blackwhite"><big>5.Monochrome</big></a> 

<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
background-color: #484545;
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
  <h1>Backyard bugs</h1>
  <p>Click on the buttons to change the grid view.</p>
  <button class="btn" onclick="one()">1</button>
  <button class="btn active" onclick="two()">2</button>
  <button class="btn" onclick="four()">4</button>
</div>


<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/pictures/insects/fliege.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Photo is taken contre-jour, note the textured shadow of the fly. </figcaption>
    <img src="/pictures/insects/beutel.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Carrying a green ''sachet'' on its side, maybe a pollen. </figcaption>
    <img src="/pictures/insects/standrews_spider.JPG" style="width:100%;border:0.3pc solid white">
   <figcaption> St. Andrews cross-spider </figcaption>
    <img src="/pictures/insects/fliege2.JPG" style="width:100%;border:0.3pc solid white">
  </div>
  <div class="column">
    <img src="/pictures/insects/nectar.JPG" style="width:100%;border:0.3pc solid white">
   <figcaption> Anther with pollen (5x magnification).</figcaption>
    <img src="/pictures/insects/grasshopper.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Grasshopper with interesting patterns </figcaption> 
    <img src="/pictures/insects/horse.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Small grasshopper with interesting back ''plumage''. </figcaption>
    <img src="/pictures/insects/white_milbe.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> I am not sure why this insect is "dissolving" at its back".</figcaption>
    <img src="/pictures/insects/bug.JPG" style="width:100%;border:0.3pc solid white">
  </div>  
  <div class="column">
    <img src="/pictures/insects/spider_rose.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Spider in a rose. </figcaption>
    <img src="/pictures/insects/bug2.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Curious beetle with some pollen on its mouth. </figcaption>
    <img src="/pictures/insects/spider_closeup.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Jumping spider </figcaption> 
    <img src="/pictures/insects/fliege3.JPG" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/insects/grille.JPG" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/insects/waterdrop.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Transmission of light through morning dew.</figcaption>
  </div>
  <div class="column">
    <img src="/pictures/insects/grashopper.JPG" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/insects/spider_sky.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Small spider. </figcaption>
    <img src="/pictures/insects/zombie_fly.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Rugged fly with dust on its eyes.</figcaption>
    <img src="/pictures/insects/waterdrop_fly.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> This fly is enjoying a droplet of water </figcaption>
    <img src="/pictures/insects/spider_green.JPG" style="width:100%;border:0.3pc solid white">
   <figcaption> Extremly narrow depth of field with fixed aperature of 2.4 and no focus stacking... 
    <img src="/pictures/insects/closeup_fliege.JPG" style="width:100%;border:0.3pc solid white">

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


