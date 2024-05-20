<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<style>
body {
  background-image: url('pictures/nightsky.jpg');
  font-family: Arial, Helvetica, sans-serif;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: cover;

}

img {
    transition:transform 0.25s ease;
 border: 5px solid white;
width:20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:175px ;
}

img:hover {
    -webkit-transform:scale(3); /* or some other value */
    transform:scale(3);
}
.button_blink {
        background-color: #1c87c9;
        -webkit-border-radius: 60px;
        border-radius: 60px;
        border: yellow;
        color: #eeeeee;
        cursor: pointer;
        display: inline-block;
        font-family: sans-serif;
        font-size: 20px;
        padding: 5px 15px;
        text-align: center;
        text-decoration: none;
      }
      @keyframes glowing {
        0% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
        50% {
          background-color: #49e819;
          box-shadow: 0 0 20px #49e819;
        }
        100% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
      }
      .button_blink {
        animation: glowing 1300ms infinite;
      }
</style>
<title>Display cat</title>
</head>


<body>
<div class="header" id="myHeader">
<h4> Press the button to display a random picture of Snowball or Sundae! </h4>
<button type="submit" class="button_blink" onclick="displayRandomImages();">Load cat!!</button>
</div>
<script src="script.js"></script>
</body>

 

