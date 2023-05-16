window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

    let mouseX;
    let mouseY;

    let lbutton;

    let LD = false;
    let LL = false;
    let RD = false;
    let RL = false;


    let LDButtonPosX = 150;
    let LDButtonPosY = 150;
    let LDButtonW = 200;
    let LDButtonH = 200;

    let LLButtonPosX = 150;
    let LLButtonPosY = 500;
    let LLButtonW = 200;
    let LLButtonH = 200;

    let RDButtonPosX = 1600;
    let RDButtonPosY = 150;
    let RDButtonW = 200;
    let RDButtonH = 200;

    let RLButtonPosX = 1600;
    let RLButtonPosY = 500;
    let RLButtonW = 200;
    let RLButtonH = 200;

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(LDButtonPosX, LDButtonPosY, LDButtonW, LDButtonH);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.rect(LLButtonPosX, LLButtonPosY, LLButtonW, LLButtonH);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(RDButtonPosX, RDButtonPosY, RDButtonW, RDButtonH);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.rect(RLButtonPosX, RLButtonPosY, RLButtonW, RLButtonH);
    ctx.fill();



    function clearScreen(){
        
    }

    class InputHandler{

    }
    
    class Player{
        constructor(game){
            this.game = game;
        }
        update(){

        }
    }
    
    class Camera{

    }

    class Foxy{

    }
    
    class Freddy{

    }
    
    class Bonnie{

    }
    
    class Chica{

    }
    
    class UI{

    }
    
    class Game{

    }

    function updateLD(){
        LD = !LD;
        if (LD == true){
            ctx.fillStyle = "green";
            ctx.beginPath();
            ctx.rect(LDButtonPosX, LDButtonPosY, LDButtonW, LDButtonH);
            ctx.fill();
        }
        else{
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.rect(LDButtonPosX, LDButtonPosY, LDButtonW, LDButtonH);
            ctx.fill();
        }
    }

    function updateLL(){
        LL = !LL;
    }

    function updateRD(){
        RD = !RD;
        if (RD == true){
            ctx.fillStyle = "green";
            ctx.beginPath();
            ctx.rect(RDButtonPosX, RDButtonPosY, RDButtonW, RDButtonH);
            ctx.fill();
        }
        else{
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.rect(RDButtonPosX, RDButtonPosY, RDButtonW, RDButtonH);
            ctx.fill();
        }
    }

    function updateRL(){
        RL = !RL;

    }
    
    function between(x, y){
        return ((mouseX >= x && mouseX <= (x + 200)) && (mouseY >= y && mouseY <= (y+200)));
    }
    
    function splashScreen(){
        background(0,0,0);
        fill(255,0,0);
    }
    
    window.addEventListener('mousemove',(e)=>{
        mouseX = e.pageX;
        mouseY = e.pageY;
        //ctx.fillStyle = "green";
        //ctx.beginPath();
        //ctx.rect(e.pageX, e.pageY, 20, 20);
        //ctx.fill();
    });

    this.window.addEventListener('click',()=>{
        if (between(LDButtonPosX, LDButtonPosY)){
            updateLD();
        }
        else if (between(LLButtonPosX, LLButtonPosY)){
            updateLL();
        }
        else if (between(RDButtonPosX, RDButtonPosY)){
            updateRD();
        }
        else if (between(RLButtonPosX,RLButtonPosY)){
            updateRL();
        }
    });

    
});






