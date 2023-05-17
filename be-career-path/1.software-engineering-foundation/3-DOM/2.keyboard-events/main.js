let ball = document.getElementById('float-circle');

// Write your code below
function up(e) {
    console.log('ball goes up');
    ball.style.bottom = '250px';
}

function down(e) {
    console.log('ball goes down');
    ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);
// document.onkeydown = up;
// document.onkeyup = down;