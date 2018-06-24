// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor (x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        
        // make the enemies move
        this.x += dt * this.speed;

        // make enemies apear at random speed 
        if (this.x >= 505) {
            this.x = 0;
            this.speed = Math.ceil(Math.random() * 200)+100;
        } 
        // collision checking
        if ((this.x + 80 > player.x && this.x < player.x + 80) && (this.y + 60 > player.y && this.y < player.y + 60)) {
            player.x = 200;
            player.y = 404;
        }

    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor (x, y) {
        this.sprite = 'images/char-horn-girl.png';
        this.x = x;
        this.y = y;
    }

    update() {}

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
// handleInput should receive user input, allowedKeys (the key which was pressed)
// and move the player according to that input. In particular:
    handleInput(keyDirection) {
        switch(keyDirection) {
            case 'left':
                (this.x <= 0) ? this.x += 400 : this.x -= 100; // the player reappears on the opposite site of the game board
                // (this.x > 0) ? this.x -= 100 : this.x; // player cannot leave the game board
                break;
            case 'up':
            // water begins at player.y = 72, which is the area, where the player won the game
                (this.y >= -10) ? this.y -= 83 : this.reset();
                break;
            case 'right':
                (this.x >= 400) ? this.x -= 400 : this.x += 100;
                break;
            case 'down':
                (this.y >= 404) ? this.y = 404 : this.y += 83;
            default:
                //code block
        }

        // (keyDirection === 'up' && this.y < 0) ? this.reset() : this.y -= 83;
    }

    reset() {
        setTimeout(() => {
            alert('You did it! Wanna play again?');
            this.x = 200;
            this.y = 404;
        }, 500);
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];

// const enemy0 = new Enemy(0, 72, 150);
// allEnemies.push(enemy0);
const enemy1 = new Enemy(53, 72, 50);
allEnemies.push(enemy1);
// const enemy2 = new Enemy(147, 155, 100);
// allEnemies.push(enemy2);
const enemy3 = new Enemy(85, 155, 80);
allEnemies.push(enemy3);
// const enemy4 = new Enemy(238, 238, 180);
// allEnemies.push(enemy4);
const enemy5 = new Enemy(8, 238, 120);
allEnemies.push(enemy5);


// Place the player object in a variable called player
const player = new Player(200, 404);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
