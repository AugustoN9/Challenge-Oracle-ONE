window.onload = function(){

    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");    
    var pikachu = new Sprite();
    var spriteSheet = new Image();
    spriteSheet.src = "../image/spritesheet-pikachu-jogoveio.png";
    var pikachu = new Sprite(spriteSheet);

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyuphandler, false);

    function keydownhandler(e){
        switch(e.keyCode){
            case RIGHT:
                pikachu.mvRight = true;
                pikachu.mvLeft = false;
                pikachu.mvUp = false;
                pikachu.mvDown = false;
                break;
            case LEFT:
                pikachu.mvRight = false;
                pikachu.mvLeft = true;
                pikachu.mvUp = false;
                pikachu.mvDown = false;
                break;
            case UP:
                pikachu.mvRight = false;
                pikachu.mvLeft = false;
                pikachu.mvUp = true;
                pikachu.mvDown = false;
                break;
            case DOWN:
                pikachu.mvRight = false;
                pikachu.mvLeft = false;
                pikachu.mvUp = false;
                pikachu.mvDown = true;
                break;
    }

    function keyuphandler(e){
        switch(e.keyCode){
            case RIGHT:
                pikachu.mvRight = false;
                break;
            case LEFT:
                pikachu.mvLeft = false;
                break;
            case UP:
                pikachu.mvUp = false;
                break;
            case DOWN:
                pikachu.mvDown = false;
                break;
        }
    }

    spriteSheet.onload = function(){
        init(); 
    }

    function init(){
        loop();
    }
    
    function update(){

    }

    function draw(){
        pikachu.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        draw();
    }

    spriteSheet.onload = function(){
		init();
		zezim.posX = zezim.posY = 150;
	}

	function init(){
		loop();
	}

	function update(){
		zezim.move();
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		zezim.draw(ctx);
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}

}