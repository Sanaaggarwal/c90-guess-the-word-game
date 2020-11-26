var player_1name=localStorage.getItem("player_1name_key");
var player_2name=localStorage.getItem("player_2name_key");
var player_1score=0;
var player_2score=0;
document.getElementById("player_1name").innerHTML=player_1name+":";
document.getElementById("player_2name").innerHTML=player_2name+":";
document.getElementById("player_1score").innerHTML=player_1score;
document.getElementById("player_2score").innerHTML=player_2score;
document.getElementById("player_question").innerHTML="Question turn: "+player_1name;
document.getElementById("player_answer").innerHTML="Answer turn: "+player_2name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    character1=word.charAt(1);
    console.log(character1);
    position2=Math.floor(word.length/2);
    character2=word.charAt(position2);
    console.log(character2);
    character3=word.charAt(word.length-1);
    console.log(character3);
    underline1=word.replace(character1,"_");
    underline2=underline1.replace(character2,"_");
    underline3=underline2.replace(character3,"_");
    console.log(underline3);

    questionword="<h4 id='word_display'> q. "+underline3+"</h4>";
    inputbox="<br> Answer:<input type='text' id='input_check_box'>";
    checkbutton="<br> <br> <button class='btn btn-success' onclick='check()'>Check</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("Answer is "+answer);
  if(answer==word){
      if(answer_turn=="player1"){
      player_1score=player_1score+1;
      document.getElementById("player_1score").innerHTML=player_1score;
      }
      else{
          player_2score=player_2score+1;
          document.getElementById("player_2score").innerHTML=player_2score;
      }
  }
 if(question_turn=="player1"){
     question_turn="player2";
     document.getElementById("player_question").innerHTML="Question turn : "+player_2name;
 }
 else{
     question_turn="player1";
     document.getElementById("player_question").innerHTML="Question turn : "+player_1name;
 }
 if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer turn : "+player_2name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn : "+player_1name;
}
document.getElementById("output").innerHTML="";
}