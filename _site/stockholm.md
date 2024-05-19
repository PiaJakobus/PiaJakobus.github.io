<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<style>
* {
  box-sizing: border-box;
}

body {
background-color: #484545;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

</style>

</head>


<html>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/birds"><big>1.Birds of Australia</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/wildlife"><big>2.Australia's Wildlife</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/macro"><big>3.Insects</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/ocean"><big>4.Ocean</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/ocean"><big>5.Monochrome</big></a> 
<br>
<a STYLE="margin: 30px 20px 10px 20px" href="{{site.baseurl}}/city"><big>6.Cities</big></a>



<body>

<a class="button" style="text-decoration:none;position:absolute;left:320px" href="{{site.baseurl}}/melbourne"><big>Melbourne</big></a> 
<a class="button" style="text-decoration:none;position:absolute;left:520px" href="{{site.baseurl}}/hamburg"><big>Hamburg</big></a> 
<a class="button1" style="text-decoration:none;position:absolute;left:720px" href="{{site.baseurl}}/stockholm"><big>Stockholm</big></a> 

<!-- Header -->
<div class="header" id="myHeader">

  <p>Click on the buttons to change the grid view.</p>
  <button class="btn" onclick="one()">1</button>
  <button class="btn active" onclick="two()">2</button>
  <button class="btn" onclick="four()">4</button>
</div>

<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/pictures/stockholm/IMG_8866.JPG" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_8893.png" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_8849.png" style="width:100%;border:0.3pc solid white">
</div>
  <div class="column">
    <img src="/pictures/stockholm/IMG_8966.JPG" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_8981.png" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_9011.png" style="width:100%;border:0.3pc solid white">
  </div>
  <div class="column">
    <img src="/pictures/stockholm/IMG_8971.JPG" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_8979.png" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_8842.png" style="width:100%;border:0.3pc solid white">
  </div>
 <div class="column">
    <img src="/pictures/stockholm/IMG_8951.JPG" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_8999.png" style="width:100%;border:0.3pc solid white">
    <img src="/pictures/stockholm/IMG_9008.png" style="width:100%;border:0.3pc solid white">
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
