const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,img,rubber,background;
var score = 0;


function preload(){
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    hexsa = new Heptagon(20,0);

    rubber = new Rubber (hexsa.body,{x:125,y:250}); 



    //base rect

    fill(134,205,233);
    box1 = new Box(355,250,25,40);
    box2 = new Box(385,250,25,40);
    box3 = new Box(415,250,25,40);
    box4 = new Box(445,250,25,40);
    box5 = new Box(475,250,25,40);
    box6 = new Box(505,250,25,40);
    box7 = new Box(535,250,25,40);


    // second layer of rect

    box8 = new Box(385,200,25,40);
    box9 = new Box(415,200,25,40);
    box10 = new Box(445,200,25,40);
    box11 = new Box(475,200,25,40);
    box12 = new Box(505,200,25,40);

    //third layer of rect

    box13 = new Box(415,150,25,40);
    box14 = new Box(445,150,25,40);
    box15 = new Box(475,150,25,40);

    //top layer of rect
    box16 = new Box(445,100,25,40);

    //second bolg set

        // first layer of rect

        box17 = new Box(835,100,25,40);
        box18 = new Box(865,100,25,40);
        box19 = new Box(895,100,25,40);
        box20 = new Box(925,100,25,40);
        box21 = new Box(955,100,25,40);
    
        //second layer of rect
    
        box22 = new Box(865,80,25,40);
        box23 = new Box(895,80,25,40);
        box24 = new Box(925,80,25,40);
    
        //top layer of rect
        box25 = new Box(895,20,25,40);

    //ground
    ground = new Ground(600,height,1200,20);

    //stand for rect
    wall_glass1 = new Ground(450,300,250,20);
    wall_glass2 = new Ground(900,200,200,20);

}

function draw(){


    background(100);
    Engine.update(engine);

    hexsa.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();  
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    rubber.display();

    wall_glass1.display();
    wall_glass2.display();

    ground.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();  
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    
    noStroke();
    textSize(35)
    fill(0)
    text("Score: " + score, width-300, 50)
}


function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(hexsa.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rubber.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(hexsa.body, {x: 180 , y: 50});
        //hexsa.trajectory = []
       rubber.attach(hexsa.body);
    }
}

