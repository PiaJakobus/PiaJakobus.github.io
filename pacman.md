<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pac-Man</title>
    <style>
      #gameCanvas {
        box-shadow: 10px 10px 20px white;
      }
      h1 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color: lightgrey;
      }
      body {
        display: flex;
        background-image: url('pictures/nightsky.jpg');
        justify-content: center;
        overflow: hidden;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Pac-Man</h1>
      <canvas id="gameCanvas"></canvas>
    </div>
    <script src="game/src/Game.js" type="module"></script>
  </body>
</html>
