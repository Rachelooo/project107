function startclassification(){
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mmAwKkrsY/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomr=Math.floor(Math.random()*255)+1;
        randomg=Math.floor(Math.random()*255)+1;
        randomb=Math.floor(Math.random()*255)+1;

        document.getElementById("resultlabel").innerHTML='I can hear - '+results[0].label;
        document.getElementById("accuracylabel").innerHTML='Accuracy: '+(results[0].confidence*100).toFixed(0)+'%';

        document.getElementById("resultlabel").style.color="rgb("+randomr+","+randomg+","+randomb+")";
        document.getElementById("accuracylabel").style.color="rgb("+randomr+","+randomg+","+randomb+")";

        animal_img=document.getElementById("animal_imgs");

        if(results[0].label=='cat'){
            animal_img.src="th.jpeg";
        }
        else if(results[0].label=='dog'){
            animal_img.src="dogimg.jpeg";
        }
        else if(results[0].label=='lion'){
            animal_img.src="lionimg.jpeg";
        }
        else{
            animal_img.src="background_noise.png";
        }
        }
    }