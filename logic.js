  
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  list=["h","h-b","h-b-h","full body"]
  let temp=1,play=1;   
  let win=0;
  let p11=0,p12=0,p13=0,p14=0,p15=0,p21=0,p22=0,p23=0,p24=0,p25=0;
  

  function pp(play){
      if(play==1){ 
           let x = Math.floor((Math.random() * 5) + 1);
          player(1,x);
          play=2;
         
      }
      else if(play==2){
          let y = Math.floor((Math.random() * 5) + 1);
          player(2,y);
          play=1;
          
      }
  }
       function player(player,random) {

          if (player==1) {
              
              if (random==1) {
                  p11= p11+1;
                  bodyImage(1,p11,random);
              }
              else if (random==2) {
              p12=p12+1;
              bodyImage(1,p12,random);
          }
          
          else if (random==3) {
              p13=p13+1;
              bodyImage(1,p13,random);
          }
          
          else if (random==4) {
              p14=p14+1;
              bodyImage(1,p14,random);
          }
          else if (random==5) {
              p15=p15+1;
              bodyImage(1,p15,random);
          }
      }
     else {
      if (random==1) {
                  p21=p21+1;
                  bodyImage(2,p21,random);
              }
              else if (random==2) {
              p22=p22+1;
              bodyImage(2,p22,random);
          }
          
          else if (random==3) {
              p23=p23+1;
              bodyImage(2,p23,random);
          }
          
          else if (random==4) {
              p24=p24+1;
              bodyImage(2,p24,random);
          }
          else if (random==5) {
              p25=p25+1;
              bodyImage(2,p25,random);
          }
     }     
          
      }
    
      function bodyImage(player,n,random) {
          if (player==1) {
              
                   if (n==1) {

                  if(random==1){
                      document.getElementById("p11").innerHTML = list[0];
                      
                  }
                  else if(random==2){
                      document.getElementById("p21").innerHTML = list[0];
                  }
                  else if(random==3){
                      document.getElementById("p31").innerHTML = list[0];
                  }
                  else if(random==4){
                      document.getElementById("p41").innerHTML = list[0];
                  }
                  
                  else if(random==5){
                      document.getElementById("p51").innerHTML = list[0];
                  }

              }
              else if (n==2) {
                  if(random==1){
                      document.getElementById("p11").innerHTML = list[1];
                  }
                  else if(random==2){
                      document.getElementById("p21").innerHTML = list[1];
                  }
                  else if(random==3){
                      document.getElementById("p31").innerHTML = list[1];
                  }
                  else if(random==4){
                      document.getElementById("p41").innerHTML = list[1];
                  }
                 
                  else if(random==5){
                       document.getElementById("p51").innerHTML = list[1];
                  }
          
          }
          
          else if (n==3) {
                  if(random==1){
                      document.getElementById("p11").innerHTML = list[2];
                  }
                  else if(random==2){
                      document.getElementById("p21").innerHTML = list[2];
                  }
                  else if(random==3){
                      document.getElementById("p31").innerHTML = list[2];
                  }
                  else if(random==4){
                      document.getElementById("p41").innerHTML = list[2];
                  }
                 
                  else if(random==5){
                      document.getElementById("p51").innerHTML = list[2];
                  }
              
          }
          
          else if (n==4) {
                   if(random==1){
                      document.getElementById("p11").innerHTML = list[3];
                      temp=0
                  }
                  else if(random==2){
                      document.getElementById("p21").innerHTML = list[3];
                      temp=0;
                  }
                  else if(random==3){
                      document.getElementById("p31").innerHTML = list[3];
                      temp=0;
                  }
                 
                  else if(random==4){
                      document.getElementById("p41").innerHTML = list[3];
                      temp=0;
                  }
                  else if(random==5){
                      document.getElementById("p51").innerHTML = list[3];
                      temp=0;
                  }

                  win=1;
                  if(win==1){
                      document.getElementById("winner").innerHTML="Player 1";

                  }
                
          }
      }
     else {
      if (n==1) {
                  if(random==1){
                      document.getElementById("p12").innerHTML = list[0];
                  }
                  else if(random==2){
                      document.getElementById("p22").innerHTML = list[0];
                  }
                  else if(random==3){
                      document.getElementById("p32").innerHTML = list[0];
                  }
                  else if(random==4){
                      document.getElementById("p42").innerHTML = list[0];
                  }
                  else if(random==5){
                      document.getElementById("p52").innerHTML = list[0];
                  }
                 
              }
              else if (n==2) {
                  if(random==1){
                      document.getElementById("p12").innerHTML = list[1];
                  }
                  else if(random==2){
                      document.getElementById("p22").innerHTML = list[1];
                  }
                  else if(random==3){
                      document.getElementById("p32").innerHTML = list[1];
                  }
                  else if(random==4){
                      document.getElementById("p42").innerHTML = list[1];
                  }
                  else if(random==5){
                      document.getElementById("p52").innerHTML = list[1];
                  }
              
          }
          
          else if (n==3) {
              if(random==1){
                      document.getElementById("dem21").innerHTML = list[2];
                  }
                  else if(random==2){
                      document.getElementById("p22").innerHTML = list[2];
                  }
                  else if(random==3){
                      document.getElementById("p32").innerHTML = list[2];
                  }
                  else if(random==4){
                      document.getElementById("p42").innerHTML = list[2];
                  }
                  else if(random==5){
                      document.getElementById("p52").innerHTML = list[2];
          }
      }
          else if (n==4) {
                  if(random==1){
                      document.getElementById("p12").innerHTML = list[3];
                      temp=0;
                  }
                  else if(random==2){
                      document.getElementById("p22").innerHTML = list[3];
                      temp=0;
                      
                  }
                  else if(random==3){
                      document.getElementById("p32").innerHTML = list[3];
                      temp=0;
                  }
                  else if(random==4){
                      document.getElementById("p42").innerHTML = list[3];
                      temp=0;
                  }
                  else if(random==5){
                      document.getElementById("p52").innerHTML = list[3];
                      temp=0;

                  }

                  win=2;
                  if(win==2){
                      document.getElementById("winner").innerHTML="Player 2";
  }
          
     }     
  }
  }
