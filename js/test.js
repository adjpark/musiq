/*Test*/    
$(document).ready(function() {
var questionz = {
    que1:"",
    que2:"",
    que3:[],
    que4:"",
    que5:"",
    que6:""
}

       
    var songArray = {
        vocalYes:{
            song5: ["Jo Cohen & Sex Whales - We Are [NCS Release]", "https://www.youtube.com/watch?v=C6IaUMAg3Dc", "https://www.youtube.com/embed/C6IaUMAg3Dc"],   
            song6: ["K-391 - Earth [NCS Release]", "https://www.youtube.com/watch?v=dOo2jWb73JY", "https://www.youtube.com/embed/dOo2jWb73JY"],
            song8: ["Syn Cole - Feel Good [NCS Release]",  "https://www.youtube.com/watch?v=q1ULJ92aldE", "https://www.youtube.com/embed/q1ULJ92aldE"],    
            song10: [ "Cartoon - Immortality (feat. Kristel Aaslaid) [Futuristik Remix] | NCS Release",  "https://www.youtube.com/watch?v=UFEi2FOMXVs", "https://www.youtube.com/embed/UFEi2FOMXVs"],  
            song11: ["Killercats - What I Said (feat. Alex Skrindo) [NCS Release]", "https://www.youtube.com/watch?v=Z0yCMiYmL7w", "https://www.youtube.com/embed/Z0yCMiYmL7w"],
            song15: [  "Spektrem - Shine [NCS Release]", "https://www.youtube.com/watch?v=n4tK7LYFxI0", "https://www.youtube.com/embed/n4tK7LYFxI0"],
            song18: [  "Cartoon - On & On (feat. Daniel Levi) [NCS Release]","https://www.youtube.com/watch?v=K4DyBUG242c" , "https://www.youtube.com/embed/K4DyBUG242c"]
        },

        vocalNo:{
            song2: ["Itro & Kontinuum - Alive [NCS Release]", "https://www.youtube.com/watch?v=-xKKo7t72Tg", "https://www.youtube.com/embed/-xKKo7t72Tg"],    
            song3: ["Tobu - Sound of Goodbye [NCS Release]", "https://www.youtube.com/watch?v=Q5GgD_HvJMs", "https://www.youtube.com/embed/Q5GgD_HvJMs"],  
            song4: ["Main Reaktor - Awakening [NCS Release]", "https://www.youtube.com/watch?v=bKG2RFUmATs", "https://www.youtube.com/embed/bKG2RFUmATs"],
            song7: ["Foria - Break Away [NCS Release]", "https://www.youtube.com/watch?v=UkUweq5FAcE", "https://www.youtube.com/embed/UkUweq5FAcE"],
            song9: ["Brig - Spoil [NCS Release]", "https://www.youtube.com/watch?v=RfoA1aAiQAE", "https://www.youtube.com/embed/RfoA1aAiQAE"], 
            song12: ["Alan Walker - Fade [NCS Release]", "https://www.youtube.com/watch?v=bM7SZ5SBzyY", "https://www.youtube.com/embed/bM7SZ5SBzyY"],  
            song13: [ "Ahrix - Nova [NCS Release]", "https://www.youtube.com/watch?v=FjNdYp2gXRY", "https://www.youtube.com/embed/FjNdYp2gXRY"],  
            song14: [ "Different Heaven & EH!DE - My Heart [NCS Release]", "https://www.youtube.com/watch?v=jK2aIUmmdP4", "https://www.youtube.com/embed/jK2aIUmmdP4"],
            song16: [  "Different Heaven - Nekozilla [NCS Release]", "https://www.youtube.com/watch?v=6FNHe3kf8_s", "https://www.youtube.com/embed/6FNHe3kf8_s"],
            song1: ["Different Heaven - OMG [NCS Release]", "https://www.youtube.com/watch?v=tua4SVV-GSE", "https://www.youtube.com/embed/tua4SVV-GSE"],  
            song17: [  "Electro-Light - Symbolism [NCS Release]","https://www.youtube.com/watch?v=__CRWE-L45k" , "https://www.youtube.com/embed/__CRWE-L45k"]
        },

        vocalSome:{
            song5: ["Jo Cohen & Sex Whales - We Are [NCS Release]", "https://www.youtube.com/watch?v=C6IaUMAg3Dc", "https://www.youtube.com/embed/C6IaUMAg3Dc"],   
            song6: ["K-391 - Earth [NCS Release]", "https://www.youtube.com/watch?v=dOo2jWb73JY", "https://www.youtube.com/embed/dOo2jWb73JY"],
            song8: ["Syn Cole - Feel Good [NCS Release]",  "https://www.youtube.com/watch?v=q1ULJ92aldE", "https://www.youtube.com/embed/q1ULJ92aldE"],    
            song10: [ "Cartoon - Immortality (feat. Kristel Aaslaid) [Futuristik Remix] | NCS Release",  "https://www.youtube.com/watch?v=UFEi2FOMXVs", "https://www.youtube.com/embed/UFEi2FOMXVs"],  
            song11: ["Killercats - What I Said (feat. Alex Skrindo) [NCS Release]", "https://www.youtube.com/watch?v=Z0yCMiYmL7w", "https://www.youtube.com/embed/Z0yCMiYmL7w"],
            song15: [  "Spektrem - Shine [NCS Release]", "https://www.youtube.com/watch?v=n4tK7LYFxI0", "https://www.youtube.com/embed/n4tK7LYFxI0"],
            song18: [  "Cartoon - On & On (feat. Daniel Levi) [NCS Release]","https://www.youtube.com/watch?v=K4DyBUG242c" , "https://www.youtube.com/embed/K4DyBUG242c"],
            song2: ["Itro & Kontinuum - Alive [NCS Release]", "https://www.youtube.com/watch?v=-xKKo7t72Tg", "https://www.youtube.com/embed/-xKKo7t72Tg"],    
            song3: ["Tobu - Sound of Goodbye [NCS Release]", "https://www.youtube.com/watch?v=Q5GgD_HvJMs", "https://www.youtube.com/embed/Q5GgD_HvJMs"],  
            song4: ["Main Reaktor - Awakening [NCS Release]", "https://www.youtube.com/watch?v=bKG2RFUmATs", "https://www.youtube.com/embed/bKG2RFUmATs"],
            song7: ["Foria - Break Away [NCS Release]", "https://www.youtube.com/watch?v=UkUweq5FAcE", "https://www.youtube.com/embed/UkUweq5FAcE"],
            song9: ["Brig - Spoil [NCS Release]", "https://www.youtube.com/watch?v=RfoA1aAiQAE", "https://www.youtube.com/embed/RfoA1aAiQAE"], 
            song12: ["Alan Walker - Fade [NCS Release]", "https://www.youtube.com/watch?v=bM7SZ5SBzyY", "https://www.youtube.com/embed/bM7SZ5SBzyY"],  
            song13: [ "Ahrix - Nova [NCS Release]", "https://www.youtube.com/watch?v=FjNdYp2gXRY", "https://www.youtube.com/embed/FjNdYp2gXRY"],  
            song14: [ "Different Heaven & EH!DE - My Heart [NCS Release]", "https://www.youtube.com/watch?v=jK2aIUmmdP4", "https://www.youtube.com/embed/jK2aIUmmdP4"],
            song16: [  "Different Heaven - Nekozilla [NCS Release]", "https://www.youtube.com/watch?v=6FNHe3kf8_s", "https://www.youtube.com/embed/6FNHe3kf8_s"],
            song1: ["Different Heaven - OMG [NCS Release]", "https://www.youtube.com/watch?v=tua4SVV-GSE", "https://www.youtube.com/embed/tua4SVV-GSE"],  
            song17: [  "Electro-Light - Symbolism [NCS Release]","https://www.youtube.com/watch?v=__CRWE-L45k" , "https://www.youtube.com/embed/__CRWE-L45k"] 
        },
        username:{}
    }
    
    console.log(songArray.vocalYes.song5[0])
    
    
    
    
    
    

var resultScore = 0;


//question 1 
var question1b1 = document.getElementById("questionBut1")
var question1b2 = document.getElementById("questionBut2")
var question1b3 = document.getElementById("questionBut3")
var question1b4 = document.getElementById("questionBut4")
var question1b5 = document.getElementById("questionBut5")
var question1b6 = document.getElementById("questionBut6")

//question 2 
var question2b1 = document.getElementById("questionBut7")
var question2b2 = document.getElementById("questionBut8")
var question2b3 = document.getElementById("questionBut9")

//question 3 
var question3b1 = document.getElementById("box-1")
var question3b2 = document.getElementById("box-2")
var question3b3 = document.getElementById("box-3")
var question3b4 = document.getElementById("box-4")
var question3b5 = document.getElementById("box-5") 

//question 4 
var question4b1 = document.getElementById("cbox1")
var question4b2 = document.getElementById("cbox2")
var question4b3 = document.getElementById("cbox3")
var question4b4 = document.getElementById("cbox4")
var question4b5 = document.getElementById("cbox5")
var question4b6 = document.getElementById("cbox6")

//question 5
var question5b1 = document.getElementById("questionBut10")
var question5b2 = document.getElementById("questionBut11")

//question 6
var question6input = document.getElementById("questionInput") 

var displayNONE = document.getElementById("displayNONE")
var loadingText = document.getElementById("loadingText")
var loading = document.getElementById("loading")



question1b1.onclick = function(){
        questionz.que1 = "";
        questionz.que1 = "happy";
        console.log(questionz)
        question1b1.style.backgroundColor = "#0cabef"
        question1b2.style.backgroundColor = "#3B3B3B"
        question1b3.style.backgroundColor = "#3B3B3B"
        question1b4.style.backgroundColor = "#3B3B3B"
        question1b5.style.backgroundColor = "#3B3B3B"
        question1b6.style.backgroundColor = "#3B3B3B"
    }
question1b2.onclick = function(){
        questionz.que1 = "";
        questionz.que1 = "calm";
        console.log(questionz)
        question1b1.style.backgroundColor = "#3B3B3B"
        question1b2.style.backgroundColor = "#0cabef"
        question1b3.style.backgroundColor = "#3B3B3B"
        question1b4.style.backgroundColor = "#3B3B3B"
        question1b5.style.backgroundColor = "#3B3B3B"
        question1b6.style.backgroundColor = "#3B3B3B"
    }
question1b3.onclick = function(){
        questionz.que1 = "";
        questionz.que1 = "hyper";
        console.log(questionz)
        question1b1.style.backgroundColor = "#3B3B3B"
        question1b2.style.backgroundColor = "#3B3B3B"
        question1b3.style.backgroundColor = "#0cabef"
        question1b4.style.backgroundColor = "#3B3B3B"
        question1b5.style.backgroundColor = "#3B3B3B"
        question1b6.style.backgroundColor = "#3B3B3B"
    }
question1b4.onclick = function(){
        questionz.que1 = "";
        questionz.que1 = "lost";
        console.log(questionz)
        question1b1.style.backgroundColor = "#3B3B3B"
        question1b2.style.backgroundColor = "#3B3B3B"
        question1b3.style.backgroundColor = "#3B3B3B"
        question1b4.style.backgroundColor = "#0cabef"
        question1b5.style.backgroundColor = "#3B3B3B"
        question1b6.style.backgroundColor = "#3B3B3B"
    }
question1b5.onclick = function(){
        questionz.que1 = "";
        questionz.que1 = "crazy";
        console.log(questionz)
        question1b1.style.backgroundColor = "#3B3B3B"
        question1b2.style.backgroundColor = "#3B3B3B"
        question1b3.style.backgroundColor = "#3B3B3B"
        question1b4.style.backgroundColor = "#3B3B3B"
        question1b5.style.backgroundColor = "#0cabef"
        question1b6.style.backgroundColor = "#3B3B3B"
    }
question1b6.onclick = function(){
        questionz.que1 = "";
        questionz.que1 = "trippy";
        console.log(questionz)
        question1b1.style.backgroundColor = "#3B3B3B"
        question1b2.style.backgroundColor = "#3B3B3B"
        question1b3.style.backgroundColor = "#3B3B3B"
        question1b4.style.backgroundColor = "#3B3B3B"
        question1b5.style.backgroundColor = "#3B3B3B"
        question1b6.style.backgroundColor = "#0cabef"
    }




question2b1.onclick = function(){
        questionz.que2 = "";
        questionz.que2 = "yes";
        console.log(questionz)
        question2b1.style.backgroundColor = "#0cabef"
        question2b2.style.backgroundColor = "#3B3B3B"
        question2b3.style.backgroundColor = "#3B3B3B"
    }
question2b2.onclick = function(){
        questionz.que2 = "";
        questionz.que2 = "no";
        console.log(questionz)
        question2b1.style.backgroundColor = "#3B3B3B"
        question2b2.style.backgroundColor = "#0cabef"
        question2b3.style.backgroundColor = "#3B3B3B"
    }
question2b3.onclick = function(){
        questionz.que2 = "";
        questionz.que2 = "sometimes";
        console.log(questionz)
        question2b1.style.backgroundColor = "#3B3B3B"
        question2b2.style.backgroundColor = "#3B3B3B"
        question2b3.style.backgroundColor = "#0cabef"
    }


question4b1.onclick = function(){
        questionz.que4 = "";
        questionz.que4 = "red";
        console.log(questionz)
        question4b1.style.border = "solid #0cabef"
        question4b2.style.border = "none"
        question4b3.style.border = "none"
        question4b4.style.border = "none"
        question4b5.style.border = "none"
        question4b6.style.border = "none"
    }
question4b2.onclick = function(){
        questionz.que4 = "";
        questionz.que4 = "orange";
        console.log(questionz)
        question4b1.style.border = "none"
        question4b2.style.border = "solid #0cabef"
        question4b3.style.border = "none"
        question4b4.style.border = "none"
        question4b5.style.border = "none"
        question4b6.style.border = "none"
    }
question4b3.onclick = function(){
        questionz.que4 = "";
        questionz.que4 = "yellow";
        console.log(questionz)
        question4b1.style.border = "none"
        question4b2.style.border = "none"
        question4b3.style.border = "solid #0cabef"
        question4b4.style.border = "none"
        question4b5.style.border = "none"
        question4b6.style.border = "none"
    }
question4b4.onclick = function(){
        questionz.que4 = "";
        questionz.que4 = "green";
        console.log(questionz)
        question4b1.style.border = "none"
        question4b2.style.border = "none"
        question4b3.style.border = "none"
        question4b4.style.border = "solid #0cabef"
        question4b5.style.border = "none"
        question4b6.style.border = "none"
    }
question4b5.onclick = function(){
        questionz.que4 = "";
        questionz.que4 = "blue";
        console.log(questionz)
        question4b1.style.border = "none"
        question4b2.style.border = "none"
        question4b3.style.border = "none"
        question4b4.style.border = "none"
        question4b5.style.border = "solid #0cabef"
        question4b6.style.border = "none"
    }
question4b6.onclick = function(){
        questionz.que4 = "";
        questionz.que4 = "purple";
        console.log(questionz)
        question4b1.style.border = "none"
        question4b2.style.border = "none"
        question4b3.style.border = "none"
        question4b4.style.border = "none"
        question4b5.style.border = "none"
        question4b6.style.border = "solid #0cabef"
    }



question5b1.onclick = function(){
        questionz.que5 = "";
        questionz.que5 = "clubs";
        console.log(questionz)
        question5b1.style.backgroundColor = "#0cabef"
        question5b2.style.backgroundColor = "#3B3B3B"
    }
question5b2.onclick = function(){
        questionz.que5 = "";
        questionz.que5 = "festivals";
        console.log(questionz)
        question5b1.style.backgroundColor = "#3B3B3B"
        question5b2.style.backgroundColor = "#0cabef"
    }



$("#infoSubmit").click(function(){
    if(question3b1.checked == true){
        questionz.que3[0] = question3b1.value
    } else {
        questionz.que3[0] = " "
    }

    if(question3b2.checked == true){
        questionz.que3[1] = question3b2.value
    } else {
        questionz.que3[1] = " "
    }

    if(question3b3.checked == true){
        questionz.que3[2] = question3b3.value
    } else {
        questionz.que3[2] = " "
    }

    if(question3b4.checked == true){
        questionz.que3[3] = question3b4.value
    } else {
        questionz.que3[3] = " "
    }

    if(question3b5.checked == true){
        questionz.que3[4] = question3b5.value
    } else {
        questionz.que3[4] = " "
    }

   questionz.que6 = question6input.value;
    
    
    //question 1 : highest you can get is 30, loweest you can get is 5
    if(questionz.que1 == "happy"){
        resultScore = resultScore + 5;
    }
    else if(questionz.que1 == "calm"){
        resultScore = resultScore + 10;
    }
    else if(questionz.que1 == "hyper"){
        resultScore = resultScore + 15;
    }
    else if(questionz.que1 == "lost"){
        resultScore = resultScore + 20;
    }
    else if(questionz.que1 == "crazy"){
        resultScore = resultScore + 25;
    }
    else if(questionz.que1 == "trippy"){
        resultScore = resultScore + 30; 
    }
    
    
    
    //question 3 : highest you can get is 25, loweest you can get is 1
    if(questionz.que3[0] == "pop"){
        resultScore = resultScore + 1;
    }
    
    if(questionz.que3[1] == "hiphop"){
        resultScore = resultScore + 3;
    }
    
    if(questionz.que3[2] == "ambient"){
        resultScore = resultScore + 5;
    }
    
    if(questionz.que3[3] == "rock"){
        resultScore = resultScore + 7;
    }
    
    if(questionz.que3[4] == "jazz"){
        resultScore = resultScore + 9;
    }
    
    //question 4 : highest you can get is 30, loweest you can get is 5
    if(questionz.que4 == "red"){
        resultScore = resultScore + 5;
    }
    else if(questionz.que4 == "orange"){
        resultScore = resultScore + 10;
    }
    else if(questionz.que4 == "yellow"){
        resultScore = resultScore + 15;
    }
    else if(questionz.que4 == "green"){
        resultScore = resultScore + 20;
    }
    else if(questionz.que4 == "blue"){
        resultScore = resultScore + 25;
    }
    else if(questionz.que4 == "purple"){
        resultScore = resultScore + 30; 
    }
    //question 5 : highest you can get is 40, loweest you can get is 20
    if(questionz.que5 == "clubs"){
        resultScore = resultScore + 100;
    }
    else if(questionz.que5 == "festivals"){
        resultScore = resultScore + 500;
    }
    
    //question 6
    songArray.username = questionz.que6;
    
    displayNONE.style.display = "none";
    $("#testSubmitFooter").addClass("specialFooter")
   
    $(loading).show(0).delay(1500).fadeOut("slow").hide(0);
    $(loadingText).show(0).delay(1500).fadeOut("slow").hide(0);
    
    if(questionz.que1 == ""){
        resultScore = 0;
    }
    if(questionz.que2 == ""){
        resultScore = 0;
    }
    if(questionz.que3[0] == "" && questionz.que3[1] == "" && questionz.que3[2] == "" && questionz.que3[3] == "" && questionz.que3[4] == ""){
        resultScore = 0;
    }
    if(questionz.que4 == ""){
        resultScore = 0;
    }
    if(questionz.que5 == ""){
        resultScore = 0;
    }
    if(questionz.que6 == ""){
        resultScore = 0;
    }
    
    console.log(resultScore);
    console.log(songArray);
    console.log(questionz);
    
    $("#customUser").prepend(songArray.username + " this is your MUSIQ!");
    if(resultScore == 0){
        $("#customUser").html("Please fill out all the inputs please.");
        $("#customUser").append("<a href='Test.html'><button id='returnButton'>Return</button></a>")
        $("#youtubeLink").append(" N/A")
    }
    
    else if(questionz.que2 == "yes"){
        if(resultScore >= 500){
            if(resultScore >= 511 && resultScore < 534){
                $("#videoFrame").attr("src",songArray.vocalYes.song18[2])
                $("#songTitle").append(songArray.vocalYes.song18[0])
                $("#youtubeLink").append(songArray.vocalYes.song18[1])
            }
            else if(resultScore  >= 534  && resultScore < 557){
                $("#videoFrame").attr("src",songArray.vocalYes.song15[2])
                $("#songTitle").append(songArray.vocalYes.song15[0])
                $("#youtubeLink").append(songArray.vocalYes.song15[1])
            }
            else if(resultScore  >= 557  && resultScore <= 585){
                $("#videoFrame").attr("src",songArray.vocalYes.song5[2])
                $("#songTitle").append(songArray.vocalYes.song5[0])
                $("#youtubeLink").append(songArray.vocalYes.song5[1])
            }
        }
        else if(resultScore < 500){
            if(resultScore >= 111 && resultScore < 134){
                $("#videoFrame").attr("src",songArray.vocalYes.song6[2])
                $("#songTitle").append(songArray.vocalYes.song6[0])
                $("#youtubeLink").append(songArray.vocalYes.song6[1])
            }
            else if(resultScore  >= 134  && resultScore < 157){
                $("#videoFrame").attr("src",songArray.vocalYes.song8[2])
                $("#songTitle").append(songArray.vocalYes.song8[0])
                $("#youtubeLink").append(songArray.vocalYes.song8[1])
            }
            else if(resultScore  >= 157  && resultScore <= 185){
                $("#videoFrame").attr("src",songArray.vocalYes.song10[2])
                $("#songTitle").append(songArray.vocalYes.song10[0])
                $("#youtubeLink").append(songArray.vocalYes.song10[1])
            }
        }
    }

    else if(questionz.que2 == "no"){
        if(resultScore >= 500){
            if(resultScore >= 511 && resultScore < 526){
                $("#videoFrame").attr("src",songArray.vocalNo.song16[2])
                $("#songTitle").append(songArray.vocalNo.song16[0])
                $("#youtubeLink").append(songArray.vocalNo.song16[1])
            }
            else if(resultScore >= 526  && resultScore <541){
                $("#videoFrame").attr("src",songArray.vocalNo.song4[2])
                $("#songTitle").append(songArray.vocalNo.song4[0])
                $("#youtubeLink").append(songArray.vocalNo.song4[1])
            }
            else if(resultScore >= 541  && resultScore < 556){
                $("#videoFrame").attr("src",songArray.vocalNo.song13[2])
                $("#songTitle").append(songArray.vocalNo.song13[0])
                $("#youtubeLink").append(songArray.vocalNo.song13[1])
            }
            else if(resultScore >= 556  && resultScore < 571){
                $("#videoFrame").attr("src",songArray.vocalNo.song12[2])
                $("#songTitle").append(songArray.vocalNo.song12[0])
                $("#youtubeLink").append(songArray.vocalNo.song12[1])
            }
            else if(resultScore >= 571  && resultScore <= 585){
                $("#videoFrame").attr("src",songArray.vocalNo.song14[2])
                $("#songTitle").append(songArray.vocalNo.song14[0])
                $("#youtubeLink").append(songArray.vocalNo.song14[1])
            }   
        }
        else if(resultScore < 500){
            if(resultScore >= 111 && resultScore <123){
                $("#videoFrame").attr("src",songArray.vocalNo.song3[2])
                $("#songTitle").append(songArray.vocalNo.song3[0])
                $("#youtubeLink").append(songArray.vocalNo.song3[1])
            }
            else if(resultScore >= 123 && resultScore <135){
                $("#videoFrame").attr("src",songArray.vocalNo.song2[2])
                $("#songTitle").append(songArray.vocalNo.song2[0])
                $("#youtubeLink").append(songArray.vocalNo.song2[1])
            }
            else if(resultScore >= 135 && resultScore < 147){
                $("#videoFrame").attr("src",songArray.vocalNo.song7[2])
                $("#songTitle").append(songArray.vocalNo.song7[0])
                $("#youtubeLink").append(songArray.vocalNo.song7[1])
            }
            else if(resultScore >= 147 && resultScore <159){
                $("#videoFrame").attr("src",songArray.vocalNo.song17[2])
                $("#songTitle").append(songArray.vocalNo.song17[0])
                $("#youtubeLink").append(songArray.vocalNo.song17[1])
            }
            else if(resultScore >= 159 && resultScore < 171){
                $("#videoFrame").attr("src",songArray.vocalNo.song9[2])
                $("#songTitle").append(songArray.vocalNo.song9[0])
                $("#youtubeLink").append(songArray.vocalNo.song9[1])
            }
            else if(resultScore >= 171 && resultScore <=185){
                $("#videoFrame").attr("src",songArray.vocalNo.song1[2])
                $("#songTitle").append(songArray.vocalNo.song1[0])
                $("#youtubeLink").append(songArray.vocalNo.song1[1])
            }
        }
    }

    else if(questionz.que2 == "sometimes"){
        if(resultScore >= 500){
            if(resultScore >= 511 && resultScore < 520){
                $("#videoFrame").attr("src",songArray.vocalSome.song18[2])
                $("#songTitle").append(songArray.vocalSome.song18[0])
                $("#youtubeLink").append(songArray.vocalSome.song18[1])
            }
            else if(resultScore >= 520 && resultScore < 529){
                $("#videoFrame").attr("src",songArray.vocalSome.song16[2])
                $("#songTitle").append(songArray.vocalSome.song16[0])
                $("#youtubeLink").append(songArray.vocalSome.song16[1])
            }
            else if(resultScore >= 529  && resultScore < 538){
                $("#videoFrame").attr("src",songArray.vocalSome.song4[2])
                $("#songTitle").append(songArray.vocalSome.song4[0])
                $("#youtubeLink").append(songArray.vocalSome.song4[1])
            }
            else if(resultScore  >= 538 && resultScore < 547){
                $("#videoFrame").attr("src",songArray.vocalSome.song15[2])
                $("#songTitle").append(songArray.vocalSome.song15[0])
                $("#youtubeLink").append(songArray.vocalSome.song15[1])
            }
            else if(resultScore >= 547 && resultScore < 556){
                $("#videoFrame").attr("src",songArray.vocalSome.song13[2])
                $("#songTitle").append(songArray.vocalSome.song13[0])
                $("#youtubeLink").append(songArray.vocalSome.song13[1])
            }
            else if(resultScore >= 556 && resultScore < 565){
                $("#videoFrame").attr("src",songArray.vocalSome.song12[2])
                $("#songTitle").append(songArray.vocalSome.song12[0])
                $("#youtubeLink").append(songArray.vocalSome.song12[1])
            }
            else if(resultScore  >= 565 && resultScore < 574){
                $("#videoFrame").attr("src",songArray.vocalSome.song5[2])
                $("#songTitle").append(songArray.vocalSome.song5[0])
                $("#youtubeLink").append(songArray.vocalSome.song5[1])
            }
            else if(resultScore >= 574 && resultScore <= 585){
                $("#videoFrame").attr("src",songArray.vocalSome.song14[2])
                $("#songTitle").append(songArray.vocalSome.song14[0])
                $("#youtubeLink").append(songArray.vocalSome.song14[1])
            }   
        }
        else if(resultScore < 500){
            if(resultScore >= 111 && resultScore < 119){
                $("#videoFrame").attr("src",songArray.vocalSome.song3[2])
                $("#songTitle").append(songArray.vocalSome.song3[0])
                $("#youtubeLink").append(songArray.vocalSome.song3[1])
            }
            else if(resultScore >= 119 && resultScore < 127){
                $("#videoFrame").attr("src",songArray.vocalSome.song6[2])
                $("#songTitle").append(songArray.vocalSome.song6[0])
                $("#youtubeLink").append(songArray.vocalSome.song6[1])
            }
            else if(resultScore >= 127 && resultScore < 135){
                $("#videoFrame").attr("src",songArray.vocalSome.song2[2])
                $("#songTitle").append(songArray.vocalSome.song2[0])
                $("#youtubeLink").append(songArray.vocalSome.song2[1])
            }
            else if(resultScore >= 135 && resultScore < 143){
                $("#videoFrame").attr("src",songArray.vocalSome.song7[2])
                $("#songTitle").append(songArray.vocalSome.song7[0])
                $("#youtubeLink").append(songArray.vocalSome.song7[1])
            }
            else if(resultScore  >= 143 && resultScore < 151){
                $("#videoFrame").attr("src",songArray.vocalSome.song8[2])
                $("#songTitle").append(songArray.vocalSome.song8[0])
                $("#youtubeLink").append(songArray.vocalSome.song8[1])
            }
            else if(resultScore >= 151 && resultScore < 159){
                $("#videoFrame").attr("src",songArray.vocalSome.song17[2])
                $("#songTitle").append(songArray.vocalSome.song17[0])
                $("#youtubeLink").append(songArray.vocalSome.song17[1])
            }
            else if(resultScore >= 159 && resultScore < 167){
                $("#videoFrame").attr("src",songArray.vocalSome.song9[2])
                $("#songTitle").append(songArray.vocalSome.song9[0])
                $("#youtubeLink").append(songArray.vocalSome.song9[1])
            }
            else if(resultScore >= 167 && resultScore < 175){
                $("#videoFrame").attr("src",songArray.vocalSome.song1[2])
                $("#songTitle").append(songArray.vocalSome.song1[0])
                $("#youtubeLink").append(songArray.vocalSome.song1[1])
            }
            else if(resultScore  >= 175  && resultScore <= 185){
                $("#videoFrame").attr("src",songArray.vocalSome.song10[2])
                $("#songTitle").append(songArray.vocalSome.song10[0])
                $("#youtubeLink").append(songArray.vocalSome.song10[1])
            } 
        }
    }
    
    $("#afterSubmit").delay(2700).show(0);
});
});