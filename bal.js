img=""
objects=[]
status1=""

function preload(){
    img=loadImage("balcony_img.jpg")
    
}
    

function setup(){
Canvas=createCanvas(640,420)
Canvas.position(460,240)

obj_detector= ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML=" Status: Detecting Objects"
document.getElementById("noo").innerHTML="Number of objects detected are : "

}

function modelLoaded(){
console.log("model loaded")
status1=true
obj_detector.detect(img, gotResult)
}

function gotResult(error,results){
    if(error){
console.log(error)

    }
     console.log(results)
    objects=results

}

function draw(){
 image(img,0,0,640,420)
 if(status1 != "" ){
    for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="Status : Object Detected"
document.getElementById("noo").innerHTML="Number of object detected is : 1"

fill("black")
percent=floor(objects[i].confidence*100)
text(objects[i].label + " " + percent + " % " , objects[i].x + 50, objects[i].y -50)
noFill("")
stroke("black")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
text.weight("bold")
    }

 }

}

function back(){

        window.location.href = 'index.html';
    
}













