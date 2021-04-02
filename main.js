var canvas = new fabric.Canvas('myCanvas')
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_objects = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_objects = Img;

        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_objects);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftkey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '71') {
        new_image('ironman_face.png');
        console.log("g");
    }
    if (keyPressed == '76') {
        new_image('player.png');
        console.log("l");
    }
    if (keyPressed == '84') {
        new_image('thor_right_hand.png');
        console.log("t");
    }
    if (keyPressed == '82') {
        new_image('thor_face.png');
        console.log("r");
    }
    if (keyPressed == '68') {
        new_image('hulk_legs.png');
        console.log("d");
    }
    if (keyPressed == '67') {
        new_image('hulk_left_hand.png');
        console.log("c");
    }
    if (keyPressed == '65') {
        new_image('captain_america_left.png');
        console.log("a");
    }
    if (keyPressed == '66') {
        new_image('hulk_face.png');
        console.log("b");
    }
    if (keyPressed == '70') {
        new_image('hulk_body.png');
        console.log("f");
    }
    if (keyPressed == '72') {
        new_image('ironman_left_hand.png');
        console.log("h");
    }
    if (keyPressed == '73') {
        new_image('ironman_body.png');
        console.log("i");
    }
    if (keyPressed == '74') {
        new_image('ironman_legs.png');
        console.log("j");
    }
    if (keyPressed == '75') {
        new_image('ironman_right_hand.png');
        console.log("k");
    }
    if (keyPressed == '77') {
        new_image('spiderman_body.png');
        console.log("m");
    }
    if (keyPressed == '69') {
        new_image('hulk_right_hand.png');
        console.log("e");
    }
    if (keyPressed == '78') {
        new_image('spiderman_face.png');
        console.log("n");
    }
    if (keyPressed == '79') {
        new_image('spiderman_left_hand.png');
        console.log("o");
    }
    if (keyPressed == '80') {
        new_image('spiderman_legs.png');
        console.log("p");
    }
    if (keyPressed == '81') {
        new_image('spiderman_right_hand.png');
        console.log("q");
    }
    if (keyPressed == '83') {
        new_image('thor_left_hand.png');
        console.log("s");
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_objects);
        player_update();
    }

}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_objects);
        player_update();
    }

}