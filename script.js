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
function displayRandomImages() 
{
   //array of images with image location, height, and width
   var imageArray = [
{ 
     src: "/pictures/cats/DSC_0139.JPEG",
   },
{
   src:"/pictures/cats/b5ba0e6c-66cd-4113-9287-35efa60bc084.JPG"
   },
{
   src:"/pictures/cats/D5D7CE1A-2D7B-4BE2-A6A5-7C3C6F64380B.JPG"
   },
{
   src:"/pictures/cats/DSC_0108_2.JPEG"
   },
{
   src:"/pictures/cats/DSC_0117_1.JPEG"
   },
{
   src:"/pictures/cats/DSC_0153_1.JPEG"
   },
{
   src:"/pictures/cats/D5D7CE1A-2D7B-4BE2-A6A5-7C3C6F64380B.JPG"
   },
{
   src:"/pictures/cats/DSC_0155.JPEG"
   },
{
   src:"/pictures/cats/DSC_0188_1.JPEG"
   },
{
   src:"/pictures/cats/DSC_2886.JPG"
   },
{
   src:"/pictures/cats/DSC_2958.JPG"
   },
{
   src:"/pictures/cats/e79dc917-c593-41b5-9d23-f282096553e4.JPG"
   },
{
   src:"/pictures/cats/IMG_20200801_000026_Original.jpg"
   },
{
   src:"/pictures/cats/IMG_20210714_222925_Original.jpg"
   },
{
   src:"/pictures/cats/IMG_0693.JPG"
   },
{
   src:"/pictures/cats/IMG_8090.png"
   },
{
   src:"/pictures/cats/IMG_8143.png"
   },
{
   src:"/pictures/cats/IMG_8192.png"
   },
{
   src:"/pictures/cats/IMG_8347.png"
   },
{
   src:"/pictures/cats/IMG_8348.png"
   },
{
   src:"/pictures/cats/IMG_8406.png"
   },
{
   src:"/pictures/cats/IMG_8446.png"
   },
{
   src:"/pictures/cats/IMG_8740.png"
   },
{
   src:"/pictures/cats/P1010059.JPEG"
   },
{
   src:"/pictures/cats/P1010096.JPEG"
   },




{
   src:"/pictures/cats/IMG_0658.png"
   },
{
   src:"/pictures/cats/IMG_0667.png"
   },
{
   src:"/pictures/cats/IMG_0773.png"
   },
{
   src:"/pictures/cats/IMG_0827.png"
   },
{
   src:"/pictures/cats/IMG_1259.png"
   },
{
   src:"/pictures/cats/IMG_1759.png"
   },
{
   src:"/pictures/cats/IMG_1924.png"
   },
{
   src:"/pictures/cats/IMG_1759.png"
   },
{
   src:"/pictures/cats/IMG_1924.png"
   },
{
   src:"/pictures/cats/IMG_2127.png"
   },
{
   src:"/pictures/cats/IMG_2130.png"
   },
{
   src:"/pictures/cats/IMG_2189.png"
   },
{
   src:"/pictures/cats/IMG_2966.png"
   },
{
   src:"/pictures/cats/IMG_3200.png"
   },
{
   src:"/pictures/cats/IMG_5506.png"
   },
{
   src:"/pictures/cats/IMG_6533.png"
   },
{
   src:"/pictures/cats/IMG_6805.png"
   },
{
   src:"/pictures/cats/IMG_6881.png"
   },

   ];
    
    //find the length of the array of images
    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new Image();
        newArray[i].src = imageArray[i].src;
    }
   
  // create random image number
  function getRandomNum(max) 
  {
      // generate and return a random number for the image to be displayed 
      imgNo = Math.floor(Math.random() * max);
      return newArray[imgNo];
  }  

  // 0 is first image and (preBuffer.length - 1) is last image of the array
  var newImage = getRandomNum(newArray.length - 1);
 
  // remove the previous images
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
     images[0].parentNode.removeChild(images[0]);
  }
  // display the new random image  
  document.body.appendChild(newImage);
}


