canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car_width=100;
car_height=95;
car_x=10;
car_y=10;
car_image="maxresdefault-removebg-preview.png";
function add(){

 car_imgtag=new Image();
 car_imgtag.onload=uploadcar;
 car_imgtag.src=car_image;
}

function uploadcar(){
    ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown",kky);

function kky(e){
    keyPressed=e.keyCode;
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
}

function up(){
    if(car_y>=0){
        car_y=car_y-10;
        canvas.remove(player_object);
        player_update();
             
    }
}
function down(){
    if(car_y<=500){
        car_y=car_y+10;
        uploadcar();  
        canvas.remove(player_object);
        player_update();     
    }
}
function left(){
    if(car_x>=0){
        car_x=car_x-10;
        uploadcar(); 
        canvas.remove(player_object);
        player_update();      
    }
}

function right(){
    if(car_x<=700){
        car_x=car_x+10;
        uploadcar();    
        canvas.remove(player_object);
        player_update();   
    }
}