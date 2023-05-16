window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

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

    window.addEventListener('mousemove',(e)=>{
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.rect(e.pageX, e.pageY, 10, 10);
        ctx.fill();
    })
});

function splashScreen(){
    background(0,0,0);
    fill(255,0,0);
}




