<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<style>
img {
    transition:transform 0.25s ease;
 border: 5px solid white;
width:20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-button: auto;
}

img:hover {
    -webkit-transform:scale(3); /* or some other value */
    transform:scale(3);
}
</style>
<title>Display cat</title>
</head>


<body>
<div class="header" id="myHeader">
<h2 style="color:green"> Random Cat Generator </h2>
<h4> Press the button to display a random picture of Snowball or Sundae! </h4>
<button onclick="displayRandomImages();"> Display Images </button>
</div>
<script src="script.js"></script>
</body>

 

