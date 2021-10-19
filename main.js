function preload() {
    img = loadImage('https://images.pexels.com/photos/2619377/pexels-photo-2619377.jpeg?cs=srgb&dl=pexels-mododeolhar-2619377.jpg&fm=jpg');
    }
    
    function setup() {
    createCanvas(600 , 400);
    video = createCapture(VIDEO);
video.size(300,300); 
video.hide(); 


    }
    
    function draw() {
      fill(
        250, 250, 250
        )
      rect(20, 20, 460, 303);
      fill(171, 29, 62)
      ellipse(80, 80 , 70)
      fill(0,128,0)
      rect(80, 59 , 350 , 40)
      fill(171, 29, 62)
      ellipse(430, 80 , 70)
      fill(0,128,0)
      rect(410, 59 , 40 , 200)
      fill(171, 29, 62)
      ellipse(430, 260 , 70)
      fill(0,128,0)
      rect(80, 240 , 350 , 40)
      fill(171, 29, 62)
      ellipse(80, 260 , 70)
      fill(0,128,0)
      rect(57, 59 , 40 , 223)
      fill(171, 29, 62)
      image(video, 134,110,230,120);
   
   
     
   
    }


