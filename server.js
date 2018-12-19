var express = require('express');

//initialization:
var app = express();

app.set("view engine","ejs");


//Routes:
app.get("/",function(req,res){
  res.render("index");
});

app.get("/generate",function(req,res){


  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","z","w","y","th","ph","sh"];
  var vowels = ["a","e","i","o","u"];
  var fillers =["n","m","th","s"];

  function enrich(){

    if(random_number(1,11) === 7 ){
      return fillers[random_number(0,4)];
    }

    return "";

  };

  //This function generates a random interger
  function random_number(min,max){
    //min is inclusive
    //max is exclusive

    var num = Math.floor(Math.random()* (max - min) + min);

    return num;

  };

  //number of syllable
  //at the moment, this is set to 2 to 5 syllables because it seems reasonable.
  var number_of_syllables = random_number(2,6);

  function generate_name(num){

    var name = "";

    for(i = 0; i < num; i ++){
      name = name + consonants[random_number(0,21)] + vowels[random_number(0,5)] + enrich();
    }

    return name;

  };






  var output = generate_name(number_of_syllables);

  console.log(number_of_syllables);
  console.log(output);



  res.render("index", {name:output});
});



//Route listener
app.listen(4000,function(){
  console.log("The server is running.");
});
