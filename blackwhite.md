<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/birds"><big>1.Birds of Australia</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/wildlife"><big>2.Australia's Wildlife</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/macro"><big>3.Insects</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/ocean"><big>4.Ocean</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="#myHeader"><big>5.Monochrome</big></a>

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
  <h1>black-and-white</h1>
  <p>Click on the buttons to change the grid view.</p>
  <button class="btn" onclick="one()">1</button>
  <button class="btn active" onclick="two()">2</button>
  <button class="btn" onclick="four()">4</button>
</div>


<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/pictures/bw/DSC_2283.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Sea gull over shoreline.</figcaption> 
  </div>
 <div class="column">
    <img src="/pictures/bw/rays.jpg" style="width:100%;border:0.3pc solid white">
  </div>
  <div class="column">
    <img src="/pictures/bw/P1010210.jpg" style="width:100%;border:0.3pc solid white">
    <figcaption> Flow transmitter.</figcaption> 
  </div>
 
   <div class="column">
    <img src="/pictures/bw/DSC_6966.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Three quarks for Muster Mark! </figcaption>
  </div>
  <div class="column">
    <img src="/pictures/bw/IMG_0990.JPG" style="width:100%;border:0.3pc solid white">
   <figcaption>  </figcaption>
  </div> 
  <div class="column">
    <img src="/pictures/bw/IMG_3300.jpg" style="width:100%;border:0.3pc solid white">
 </div> 
  <div class="column">
    <img src="/pictures/bw/IMG_2218.jpg" style="width:100%;border:0.3pc solid white">
  </div> 
 <div class="column">
    <img src="/pictures/bw/DSC_3473.JPG" style="width:100%;border:0.3pc solid white">
    <figcaption> Overexposure</figcaption>
 </div>
  <div class="column">
    <img src="/pictures/bw/IMG_0526.jpg" style="width:100%;border:0.3pc solid white">
    <figcaption> Flinder street station in Melbourne at night. Shot with iphone 13 which does a really nice job here. However the leaves are very smeared out from the noise filter (I wish they made those manual). The settings are ISO 400, 1/33s and f1.5.</figcaption> 
  </div>

 <div class="column">
    <img src="/pictures/bw/stairs.jpg" style="width:100%;border:0.3pc solid white">
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
     img = document.getElementById("img1");
        // Function to set image dimensions
        function enlargeImg() {
            img.style.width = "60%";
            img.style.height = "auto";
            img.style.transition = "width 0.5s ease";
        }
        // Function to reset image dimensions
        function resetImg() {
            img.style.width = "40%";
            img.style.height = "auto";
            img.style.transition = "width 0.5s ease";
        }
</script>


