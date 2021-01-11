

//start
Webcam.set({
    height : 300,
    width : 350,
    image_format : 'png',
    image_quality : 90,
});

constraints: {
    facingMode: "enviorment";
    
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>'
    });
}



var camera = document.getElementById("camera");

Webcam.attach( '#camera' );

console.log('ml5 version' , ml5.version );

var classifier = ml5.imageClassifier('MobileNet' , ModelLoaded)

function ModelLoaded(){
    console.log("Model_Loaded");
}

function check(){
var img = document.getElementById("captured_img");
classifier.classify( img , GotResult)    
}

function GotResult(error , results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label
}
}