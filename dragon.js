// document.onkeydown= function(e){
//     console.log("key is pressed: " , e.keycode)
//   if(e.keycode== 39){
//  dino= document.querySelector(".dino");
//  dino.classList.add("animatedino");
//    setTimeout(() => { 
//     console.log("yes");
//  dino.classlist.remove("animatedino")
//    }, 700);

//    } 

score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play() 
}, 100);         
// }, 1000); 
document.onkeydown = function (e) {
    // console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = (dinox - 110) + "px";
    }

}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 100 && offsetY < 10) {
        // gameover.style.visibility= "visible"; 
        obstacle.classList.remove("obstacleani");
   audiogo.play();
   setTimeout(() => {
    audiogo.pause();
    audio.pause();
   }, 3000);
    }
    else if (offsetX < 45 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 5 ;
            obstacle.style.animationduration = newdur + "s"; 
console.log("your animation duration is:",  newdur);
        }, 500);

    }


}, 100);

function updatescore(score) {
    scorecont.innerHTML = "your score: " + score;
}