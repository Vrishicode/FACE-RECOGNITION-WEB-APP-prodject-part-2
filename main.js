var camera="";
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capture" src="  '+data_uri+'    "> '
    });
}
console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CtY6UO5GL/model.json",modelloaded);

function modelloaded(){
    console.log("model loaded successflly");
}

function check(){
    img=document.getElementById("capture");
    classifier.classify(img,gotResult);
    }

    function gotResult(error,result){
        if (error){
            console.error(error);
        }
        else {
            console.log(result);
            document.getElementById("object_name").innerHTML="object is "+result[0].label;
        document.getElementById("accuracy").innerHTML="accuracy is "+result[0].confidence;
        }
    }


    
    