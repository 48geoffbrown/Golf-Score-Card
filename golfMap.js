/**
 * Created by geoffbrown1 on 10/12/15.
 */

function startGame(){
    document.getElementById("promptMessage1").innerHTML = "";
    document.getElementById("wantedName").style.display = "none";
    document.getElementById("promptButton").style.display = "none";
    document.getElementById("promptMessage2").innerHTML = "Click Hole 1 to start!";
    document.getElementById("promptButton2").style.display = "none";
    if(document.getElementById("cell66").innerHTML === "Player 2") {
        document.getElementById("player2").style.display = "none";
    }
    if(document.getElementById("cell110").innerHTML === "Player 3") {
        document.getElementById("player3").style.display = "none";
    }
    if(document.getElementById("cell132").innerHTML === "Player 4") {
        document.getElementById("player4").style.display = "none";
    }
}

function nameEntry(){
    if(document.getElementById("cell44").innerHTML === "Player 1") {
        document.getElementById("cell44").innerHTML = document.getElementById("wantedName").value.toUpperCase();
        document.getElementById("wantedName").value = "";
        document.getElementById("promptMessage1").innerHTML = "Please enter a name for Player 2";
        document.getElementById("promptButton2").style.display = "";
    }
    else if(document.getElementById("cell66").innerHTML === "Player 2") {
        document.getElementById("cell66").innerHTML = document.getElementById("wantedName").value.toUpperCase();
        document.getElementById("wantedName").value = "";
        document.getElementById("promptMessage1").innerHTML = "Please enter a name for Player 3";
    }
    else if(document.getElementById("cell110").innerHTML === "Player 3") {
        document.getElementById("cell110").innerHTML = document.getElementById("wantedName").value.toUpperCase();
        document.getElementById("wantedName").value = "";
        document.getElementById("promptMessage1").innerHTML = "Please enter a name for Player 4";
    }
    else if(document.getElementById("cell132").innerHTML === "Player 4") {
        document.getElementById("cell132").innerHTML = document.getElementById("wantedName").value.toUpperCase();
        document.getElementById("promptMessage1").innerHTML = "";
        document.getElementById("wantedName").style.display = "none";
        document.getElementById("promptButton").style.display = "none";
        document.getElementById("promptMessage2").innerHTML = "Click Hole 1 to start!";
        document.getElementById("promptButton2").style.display = "none";
    }
}

function holeLabel(){
    var holeArray = document.getElementsByTagName("button");
    for(var i = 2; i < holeArray.length; i++) {
        holeArray[i].setAttribute("id", ("hole" + i));
        document.getElementById("hole" + i).innerHTML = i - 1;

    }
}

holeLabel();

function inputLabel(){
    var holeArray = document.getElementsByTagName("input");
    for(var i = 1; i < holeArray.length; i++) {
        holeArray[i].setAttribute("id", ("input" + i));
    }
}

inputLabel();

function tdName(){
    var tdArray = document.getElementsByTagName("td");
    for(var i = 0; i < tdArray.length; i++){
        tdArray[i].setAttribute("id", ("cell" + i));
    }
}

tdName();

function player1Total(cell){
    var scoreOutArray1 = document.getElementsByName("scoreOut1");
    var scoreOutTot1 = 0;
    for(var i = 0; i < scoreOutArray1.length; i++){
        if(parseInt(scoreOutArray1[i].value))
            scoreOutTot1 += parseInt(scoreOutArray1[i].value);
    }
        document.getElementById("cell54").innerHTML = scoreOutTot1;

    var scoreInArray1 = document.getElementsByName("scoreIn1");
    var scoreInTot1 = 0;
    for(var i = 0; i < scoreInArray1.length; i++){
        if(parseInt(scoreInArray1[i].value))
            scoreInTot1 += parseInt(scoreInArray1[i].value);
    }
    document.getElementById("cell64").innerHTML = scoreInTot1;
    document.getElementById("cell65").innerHTML = scoreOutTot1 + scoreInTot1;
}

function player2Total(){
    var scoreOutArray2 = document.getElementsByName("scoreOut2");
    var scoreOutTot2 = 0;
    for(var i = 0; i < scoreOutArray2.length; i++){
        if(parseInt(scoreOutArray2[i].value))
            scoreOutTot2 += parseInt(scoreOutArray2[i].value);
    }
    document.getElementById("cell76").innerHTML = scoreOutTot2;

    var scoreInArray2 = document.getElementsByName("scoreIn2");
    var scoreInTot2 = 0;
    for(var i = 0; i < scoreInArray2.length; i++){
        if(parseInt(scoreInArray2[i].value))
            scoreInTot2 += parseInt(scoreInArray2[i].value);
    }
    document.getElementById("cell86").innerHTML = scoreInTot2;
    document.getElementById("cell87").innerHTML = scoreOutTot2 + scoreInTot2;
}

function player3Total(){
    var scoreOutArray3 = document.getElementsByName("scoreOut3");
    var scoreOutTot3 = 0;
    for(var i = 0; i < scoreOutArray3.length; i++){
        if(parseInt(scoreOutArray3[i].value))
            scoreOutTot3 += parseInt(scoreOutArray3[i].value);
    }
    document.getElementById("cell120").innerHTML = scoreOutTot3;

    var scoreInArray3 = document.getElementsByName("scoreIn3");
    var scoreInTot3 = 0;
    for(var i = 0; i < scoreInArray3.length; i++){
        if(parseInt(scoreInArray3[i].value))
            scoreInTot3 += parseInt(scoreInArray3[i].value);
    }
    document.getElementById("cell130").innerHTML = scoreInTot3;
    document.getElementById("cell131").innerHTML = scoreOutTot3 + scoreInTot3;
}

function player4Total(){
    var scoreOutArray4 = document.getElementsByName("scoreOut4");
    var scoreOutTot4 = 0;
    for(var i = 0; i < scoreOutArray4.length; i++){
        if(parseInt(scoreOutArray4[i].value))
            scoreOutTot4 += parseInt(scoreOutArray4[i].value);
    }
    document.getElementById("cell142").innerHTML = scoreOutTot4;

    var scoreInArray4 = document.getElementsByName("scoreIn4");
    var scoreInTot4 = 0;
    for(var i = 0; i < scoreInArray4.length; i++){
        if(parseInt(scoreInArray4[i].value))
            scoreInTot4 += parseInt(scoreInArray4[i].value);
    }
    document.getElementById("cell152").innerHTML = scoreInTot4;
    document.getElementById("cell153").innerHTML = scoreOutTot4 + scoreInTot4;
}

function initMap(location) {
    var myLatLng = location;

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        scrollwheel: false,
        disableDefaultUI: true
    });

}


function map(){
    this.showlocation();
}

var accessToken, model;


function onload() {
    accessToken = getUrlVars().access_token;
    var clientID = "3dfac563-f3df-4306-b945-56e56e228305";
    var redirectURI = document.URL;
    var swingBySwing = "https://api.swingbyswing.com/v2/oauth/authorize?scope=read&redirect_uri=" + redirectURI + "&response_type=token&client_id=" + clientID;
    if(accessToken == null){
        location.replace(swingBySwing);
    }
    else{
        accessToken = accessToken.replace("\#", "");
        //model = getCourse(12644);
        loadDoc();
    }
    document.getElementById("promptButton2").style.display = "none";
}

onload();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m,key,value) {
            vars[key] = value;
        });
    return vars;
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            model = JSON.parse(xhttp.responseText);
            initMap(model.course.location);
            populateOut(model.course.tee_types[0].front_nine_yards, model.course.tee_types[1].front_nine_yards, model.course.tee_types[2].front_nine_yards, model.course.tee_types[3].front_nine_yards, model.course.tee_types[0].front_nine_par);
            populateIn(model.course.tee_types[0].back_nine_yards, model.course.tee_types[1].back_nine_yards, model.course.tee_types[2].back_nine_yards, model.course.tee_types[3].back_nine_yards, model.course.tee_types[0].back_nine_par);
            populateTotal(model.course.tee_types[0].yards, model.course.tee_types[1].yards, model.course.tee_types[2].yards, model.course.tee_types[3].yards, model.course.tee_types[0].par);
        }
    };
    xhttp.open("GET", "https://api.swingbyswing.com/v2/courses/12644?includes=practice_area,nearby_courses,recent_media,recent_comments,recent_rounds,best_rounds,current_rounds,course_stats_month,course_stats_year&access_token=" + accessToken, true);
    xhttp.send();
}

function populateOut(blue, white, red, black, par){
    document.getElementById("cell" + 32).innerHTML = blue;
    document.getElementById("cell" + 186).innerHTML = white;
    document.getElementById("cell" + 164).innerHTML = red;
    document.getElementById("cell" + 10).innerHTML = black;
    document.getElementById("cell" + 98).innerHTML = par;
}

populateOut();

function populateIn(blue, white, red, black, par){
    document.getElementById("cell" + 42).innerHTML = blue;
    document.getElementById("cell" + 196).innerHTML = white;
    document.getElementById("cell" + 174).innerHTML = red;
    document.getElementById("cell" + 20).innerHTML = black;
    document.getElementById("cell" + 108).innerHTML = par;
}

populateIn();

function populateTotal(blue, white, red, black, par){
    document.getElementById("cell" + 43).innerHTML = blue;
    document.getElementById("cell" + 197).innerHTML = white;
    document.getElementById("cell" + 175).innerHTML = red;
    document.getElementById("cell" + 21).innerHTML = black;
    document.getElementById("cell" + 109).innerHTML = par;
}

populateTotal();

function holeOut(holeClick) {
    document.getElementById("promptMessage2").style.display = "none";
    document.getElementById("input" + (holeClick + 1)).style.display = "inline-block";
    document.getElementById("input" + (holeClick + 19)).style.display = "inline-block";
    document.getElementById("input" + (holeClick + 37)).style.display = "inline-block";
    document.getElementById("input" + (holeClick + 55)).style.display = "inline-block";
    document.getElementById("cell" + (holeClick + 1)).innerHTML = model.course.holes[holeClick].tee_boxes[0].yards;
    document.getElementById("cell" + (holeClick + 23)).innerHTML = model.course.holes[holeClick].tee_boxes[1].yards;
    document.getElementById("cell" + (holeClick + 89)).innerHTML = model.course.holes[holeClick].tee_boxes[0].par;
    document.getElementById("cell" + (holeClick + 155)).innerHTML = model.course.holes[holeClick].tee_boxes[2].yards;
    document.getElementById("cell" + (holeClick + 177)).innerHTML = model.course.holes[holeClick].tee_boxes[3].yards;
    var latCenter = (((model.course.holes[holeClick].tee_boxes[0].location.lat)+(model.course.holes[holeClick].green_location.lat))/2);
    var lngCenter = (((model.course.holes[holeClick].tee_boxes[0].location.lng)+(model.course.holes[holeClick].green_location.lng))/2);
    var centerObj = {"lat": latCenter, "lng": lngCenter};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: centerObj,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        scrollwheel: false,
        disableDefaultUI: true
    });
    var marker1 = new google.maps.Marker({
        position: model.course.holes[holeClick].tee_boxes[0].location,
        map: map,
        icon: 'pin.png'
    });
    var marker2 = new google.maps.Marker({
        position: model.course.holes[holeClick].green_location,
        map: map,
        icon: 'flag.png'
    });
}

function holeIn(holeClick) {
    document.getElementById("input" + (holeClick + 1)).style.display = "inline-block";
    document.getElementById("input" + (holeClick + 19)).style.display = "inline-block";
    document.getElementById("input" + (holeClick + 37)).style.display = "inline-block";
    document.getElementById("input" + (holeClick + 55)).style.display = "inline-block";
    document.getElementById("cell" + (holeClick + 2)).innerHTML = model.course.holes[holeClick].tee_boxes[0].yards;
    document.getElementById("cell" + (holeClick + 24)).innerHTML = model.course.holes[holeClick].tee_boxes[1].yards;
    document.getElementById("cell" + (holeClick + 90)).innerHTML = model.course.holes[holeClick].tee_boxes[0].par;
    document.getElementById("cell" + (holeClick + 156)).innerHTML = model.course.holes[holeClick].tee_boxes[2].yards;
    document.getElementById("cell" + (holeClick + 178)).innerHTML = model.course.holes[holeClick].tee_boxes[3].yards;
    var latCenter = (((model.course.holes[holeClick].tee_boxes[0].location.lat)+(model.course.holes[holeClick].green_location.lat))/2);
    var lngCenter = (((model.course.holes[holeClick].tee_boxes[0].location.lng)+(model.course.holes[holeClick].green_location.lng))/2);
    var centerObj = {"lat": latCenter, "lng": lngCenter};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: centerObj,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        scrollwheel: false,
        disableDefaultUI: true
    });
    var marker1 = new google.maps.Marker({
        position: model.course.holes[holeClick].tee_boxes[0].location,
        map: map,
        icon: 'pin.png',
        title: 'Tee Box'
    });
    var marker2 = new google.maps.Marker({
        position: model.course.holes[holeClick].green_location,
        map: map,
        icon: 'flag.png',
        title: 'Flag'
    });
}

function playerEndGame(playerNumber) {
    alert(document.getElementById("cell" + playerNumber).innerHTML + "'s final score is " + (document.getElementById("cell" + (playerNumber + 21)).innerHTML - document.getElementById("cell109").innerHTML) + " from par.");
}

function endOfGame() {
    var a = document.getElementById("cell65").innerHTML;
    var b = document.getElementById("cell87").innerHTML;
    var c = document.getElementById("cell131").innerHTML;
    var d = document.getElementById("cell153").innerHTML;
    var aPlay = document.getElementById("cell44").innerHTML;
    var bPlay = document.getElementById("cell44").innerHTML;
    var cPlay = document.getElementById("cell44").innerHTML;
    var dPlay = document.getElementById("cell44").innerHTML;
    if(a<b&&a<c&&a<d){
        alert(aPlay + " Wins!");
    }
    else if(b<a&&b<c&&b<d){
        alert(bPlay + " Wins!");
    }
    else if(c<a&&c<b&&c<d){
        alert(cPlay + " Wins!");
    }
    else if(d<a&&d<b&&d<c){
        alert(dPlay + " Win!");
    }
    else if(a===b&&a<c&&a<d){
        alert(aPlay + " and " + bPlay + " Win!");
    }
    else if(a===c&&c<b&&c<d){
        alert(aPlay + " and " + cPlay + " Win!");
    }
    else if(a===d&&d<b&&d<c){
        alert(aPlay + " and " + dPlay + " Win!");
    }
    else if(b<a&&b===c&&b<d){
        alert(bPlay + " and " + cPlay + " Win!");
    }
    else if(b<a&&b<c&&b===d){
        alert(bPlay + " and " + dPlay + " Win!");
    }
    else if(c<a&&c<b&&c===d){
        alert(cPlay + " and " + dPlay + " Win!");
    }
    else if(a===b&&a===c&&a<d){
        alert(aPlay + " and " + bPlay + " and " + cPlay + " Win!");
    }
    else if(a===b&&a===d&&a<c){
        alert(aPlay + " and " + bPlay + " and " + dPlay + " Win!");
    }
    else if(a===c&&a===d&&a<b){
        alert(aPlay + " and " + cPlay + " and " + dPlay + " Win!");
    }
    else if(b===c&&b===d&&b<a){
        alert(bPlay + " and " + cPlay + " and " + dPlay + " Win!");
    }
    else if(a===b&&b===c&&c===d){
        alert("Everybody Wins!");
    }
}




























