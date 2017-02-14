function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220, 200, 180);
    smooth();

    // behind the tree, lower right
    noStroke();
    fill(34, 30, 22); // dark gray
    quad(139, 0, 140, 99, 176, 100, 181, 0);
    beginShape();
    vertex(441, 207);
    vertex(450, 378);
    vertex(446, 600);
    vertex(600, 600);
    vertex(600, 200);
    vertex(600, 84);
    vertex(420, 88);
    endShape(CLOSE);
    //upper dark areas
    quad(295, 0, 297, 99, 351, 90, 352, 0);
    quad(0, 93, 45, 88, 45, 9, 0, 9);
    beginShape();
    vertex(180, 0);
    vertex(171, 207);
    vertex(225, 198);
    vertex(234, 198);
    vertex(245, 0);
    endShape();
    beginShape();
    vertex(0, 375);
    vertex(54, 369);
    vertex(117, 351);
    vertex(162, 351);
    vertex(180, 306);
    vertex(180, 252);
    vertex(153, 207);
    vertex(72, 207);
    vertex(0, 217.6);
    endShape(CLOSE);
    rect(84, 8, 42, 79);
    quad(71, 208, 72, 86, 128, 84, 127, 208);

    // the tree
    fill(80, 95, 60, 200); // dark green
    beginShape();
    vertex(445, 522);
    vertex(600, 518);
    vertex(600, 253);
    vertex(576, 270);
    vertex(558, 243);
    vertex(513, 288);
    vertex(495, 252);
    vertex(450, 324);
    endShape();
    beginShape();
    vertex(444, 600);
    vertex(446, 559);
    vertex(503, 533);
    vertex(512, 542);
    vertex(543, 542);
    vertex(550, 560);
    vertex(600, 533);
    vertex(600, 600);
    endShape(CLOSE);
    fill(140, 170, 160, 200); // grey-green
    beginShape();
    vertex(470, 350);
    vertex(600, 350);
    vertex(600, 260);
    vertex(570, 300);
    vertex(563, 250);
    vertex(518, 303);
    vertex(499, 260);
    vertex(475, 306);
    endShape();

    fill(100, 170, 150); // light green
    beginShape();
    vertex(504, 513);
    vertex(468, 495);
    vertex(447, 468);
    vertex(447, 330);
    vertex(472, 288);
    vertex(477, 315);
    vertex(504, 270);
    vertex(526, 326);
    vertex(562, 253);
    vertex(578, 340);
    vertex(600, 290);
    vertex(600, 487);
    vertex(565, 504);
    vertex(549, 549);
    vertex(504, 550);
    endShape(CLOSE);
    fill(100, 170, 150, 200); // light green
    triangle(468, 600, 531, 513, 582, 600);

    fill(140, 170, 160, 200); // grey-green
    beginShape();
    vertex(477, 313);
    vertex(463, 353);
    vertex(460, 391);
    vertex(463, 434);
    vertex(475, 497);
    vertex(490, 437);
    vertex(490, 390);
    vertex(485, 350);
    endShape(CLOSE);
    fill(240, 220, 200, 150); //very light brown
    beginShape();
    vertex(575, 312);
    vertex(549, 353);
    vertex(545, 391);
    vertex(550, 434);
    vertex(565, 500);
    vertex(580, 437);
    vertex(583, 390);
    vertex(580, 360);
    endShape(CLOSE);
    beginShape();
    vertex(506, 312);
    vertex(489, 353);
    vertex(485, 391);
    vertex(490, 434);
    vertex(505, 514);
    vertex(520, 437);
    vertex(521, 390);
    vertex(516, 360);
    endShape(CLOSE);
    fill(240, 220, 200); //very light brown
    beginShape();
    vertex(536, 302);
    vertex(519, 353);
    vertex(515, 391);
    vertex(520, 434);
    vertex(535, 497);
    vertex(550, 437);
    vertex(551, 390);
    vertex(546, 350);
    endShape(CLOSE);

    // range behind house and silo
    fill(100, 170, 150, 100); // light green
    quad(93, 96, 174, 100, 171, 196, 88, 204);
    fill(240, 220, 200); //light brown
    beginShape();
    vertex(0, 156);
    vertex(72, 153);
    vertex(72, 207);
    vertex(0, 218);
    vertex(0, 153);
    endShape(CLOSE);
    fill(240, 220, 200, 200); //light brown
    arc(160, 207, 140, 100, PI, TWO_PI);
    fill(240, 220, 200, 100); //light brown
    quad(178, 0, 172, 210, 197, 210, 211, 0);

    fill(100, 170, 150); // light green
    rect(45, 8, 27, 81);
    fill(100, 170, 150, 180); // light green
    quad(387, 89, 317, 95, 318, 2, 386, 1);
    rect(72, 8, 75, 90);
    rect(71, 153, 19, 53);
    fill(100, 170, 150, 200); // light green
    beginShape();
    vertex(205, 395);
    vertex(207, 296);
    vertex(198, 257);
    vertex(180, 257);
    vertex(171, 314);
    vertex(171, 410);
    endShape(CLOSE);
    rect(0, 382, 18, 32);
    quad(72, 360, 90, 355, 90, 490, 60, 495);
    fill(100, 170, 150, 150); // light green
    triangle(18, 375, 63, 324, 117, 351);
    triangle(36, 373, 76, 324, 117, 351);
    triangle(54, 370, 90, 324, 117, 351);
    quad(18, 89, 12, 155, 71, 153, 72, 89);
    quad(0, 316, 62, 312, 72, 205, 0, 215);
    quad(146, 352, 126, 352, 140, 205, 153, 205);
    fill(104, 130, 114, 210); // mid-green
    quad(0, 215, 72, 205, 67, 250, 0, 250);
    rect(0, 300, 62, 17);
    rect(90, 350, 18, 135);
    quad(167, 352, 183, 253, 152, 205, 146, 352);
    quad(126, 352, 108, 352, 127, 205, 140, 205);
    beginShape();
    vertex(144, 432);
    vertex(171, 414);
    vertex(171, 324);
    vertex(144, 351);
    endShape(CLOSE);
    fill(80, 95, 60, 150); // dark green
    rect(0, 250, 67, 25);
    quad(108, 352, 90, 335, 108, 205, 126, 205);
    fill(80, 95, 60, 50); // dark green
    quad(108, 352, 74, 335, 92, 205, 126, 205);
    fill(240, 220, 200); //very light brown
    rect(108, 350, 18, 99);
    fill(80, 95, 60, 200); // dark green
    rect(145, 63, 33, 36);
    fill(240, 220, 200, 150); //very light brown
    quad(176, 82, 108, 85, 108, 207, 171, 207);
    fill(34, 30, 22, 150); // dark gray
    beginShape();
    vertex(152, 205);
    vertex(180, 257);
    vertex(194, 259);
    vertex(236, 199);
    vertex(169, 208);
    endShape(CLOSE);
fill(100, 170, 150, 170); // light green
    beginShape();
    vertex(243, 0);
    vertex(236, 199);
    vertex(222, 202);
    vertex(222, 129);
    vertex(235, 0);
    endShape(CLOSE);
    beginShape();
    vertex(243, 0);
    vertex(268, 67);
    vertex(280, 67);
    vertex(298, 96);
    vertex(300, 0);
    endShape(CLOSE);
    fill(100, 170, 150); // light green
    triangle(72, 360, 99, 333, 117, 351);

    //1st "mountain range"
    fill(80, 95, 60); // dark green
    triangle(387, 90, 459, -45, 513, 90);
    fill(120, 160, 140, 200);
    triangle(414, 90, 495, -45, 558, 90);
    fill(100, 170, 150, 220); // light green
    triangle(468, 81, 531, -54, 600, 84);
    fill(200, 190, 150, 200); //brown
    triangle(504, 81, 585, -36, 630, 81);
    fill(120, 110, 100, 200);
    fill(213, 144, 113, 150); // reddish-brown
    triangle(555, 0, 600, 90, 600, 0);

    //2nd "mountain range"
    fill(100, 170, 150, 200); // light green
    beginShape();
    vertex(414, 225);
    vertex(459, 135);
    vertex(486, 162);
    vertex(513, 81);
    vertex(531, 126);
    vertex(558, 90);
    vertex(576, 135);
    vertex(600, 90);
    vertex(630, 234);
    endShape(CLOSE);
    fill(100, 170, 150); // light green
    triangle(423, 234, 468, 144, 522, 234);
    fill(104, 130, 114, 210); // mid-green
    triangle(468, 234, 513, 117, 576, 234);
    fill(100, 170, 150, 220); // light green
    triangle(504, 234, 558, 99, 600, 234);
    fill(200, 190, 150, 150); //brown
    triangle(540, 234, 585, 135, 630, 234);
    fill(240, 220, 200, 150); //very light brown
    triangle(567, 231, 600, 157, 600, 237);

    // "apartment building"
    fill(200, 190, 150, 150); //brown
    beginShape();
    vertex(198, 261);
    vertex(207, 297);
    vertex(198, 513);
    vertex(198, 603);
    vertex(264, 600);
    vertex(234, 198);
    endShape(CLOSE);
    fill(100, 170, 150); // light green
    beginShape();
    vertex(324, 148);
    vertex(351, 207);
    vertex(414, 90);
    vertex(387, 81);
    vertex(369, 117);
    endShape();
    fill(200, 200, 190, 200);
    beginShape();
    vertex(264, 600);
    vertex(234, 198);
    vertex(297, 198);
    vertex(378, 207);
    vertex(441, 207);
    vertex(450, 378);
    vertex(446, 600);
    endShape(CLOSE);
    //roof
    fill(100, 170, 150); // light green
    quad(351, 207, 414, 90, 432, 90, 441, 207);
    fill(200, 190, 150, 190);
    quad(351, 207, 414, 90, 432, 90, 441, 207);
    fill(104, 130, 114, 200); // mid-green
    quad(234, 198, 243, -27, 351, 207, 297, 198);
    fill(120, 180, 160); // light green
    beginShape();
    vertex(340, 173);
    vertex(351, 207);
    vertex(414, 90);
    vertex(400, 85);
    vertex(380, 117);
    endShape();
    fill(120, 180, 160, 200); // light green
    quad(234, 243, 441, 234, 441, 216, 234, 212);
    quad(440, 207, 233, 198, 234, 224, 440, 215);
    beginShape();
    vertex(288, 99);
    vertex(240, 99);
    vertex(242, 67);
    vertex(279, 67);
    vertex(297, 99);
    endShape(CLOSE);
    fill(200, 190, 150, 200); //brown
    quad(414, 90, 411, 0, 385, 0, 387, 81);
    rect(360, 27, 9, 45);
    fill(240, 220, 200);
    fill(200, 190, 150, 200); //brown
    beginShape();
    vertex(240, 99);
    vertex(297, 99);
    vertex(355, 204);
    vertex(297, 204);
    vertex(233, 198);
    endShape(CLOSE);
    fill(34, 30, 22, 100); //dark gray
    quad(325, 149, 296, 97, 387, 89, 367, 123);
    //"chimneys"
    fill(240, 220, 200); //very light brown
    quad(434, 88, 411, 88, 411, 1, 435, 1);
    //windows & door
    fill(240, 220, 200, 200); //very light brown
    quad(280, 282, 280, 312, 303, 315, 305, 280);
    quad(339, 282, 341, 317, 356, 316, 359, 280);
    quad(394, 283, 395, 313, 404, 313, 410, 284);
    quad(280, 364, 281, 398, 303, 399, 305, 362);
    quad(342, 358, 346, 401, 359, 402, 360, 357);
    quad(396, 359, 396, 404, 407, 404, 411, 359);
    quad(282, 442, 282, 467, 300, 466, 303, 443);
    quad(343, 438, 344, 464, 359, 466, 358, 438);
    quad(394, 434, 398, 466, 408, 466, 409, 433);
    quad(282, 495, 282, 511, 301, 510, 301, 495);
    quad(345, 494, 344, 508, 355, 508, 357, 492);
    quad(398, 494, 398, 511, 409, 510, 410, 492);
    fill(120, 180, 160, 220);
    triangle(270, 486, 297, 468, 315, 495);
    triangle(333, 486, 360, 468, 378, 495);
    triangle(387, 486, 405, 459, 423, 486);
    triangle(279, 441, 306, 405, 324, 441);
    triangle(333, 432, 351, 405, 378, 432);
    triangle(387, 432, 396, 405, 423, 432);
    triangle(270, 360, 288, 324, 333, 360);
    triangle(333, 351, 360, 324, 378, 351);
    triangle(387, 351, 396, 324, 432, 351);
    triangle(315, 279, 270, 279, 288, 252);
    triangle(333, 279, 342, 243, 369, 279);
    triangle(387, 279, 396, 252, 423, 279);
    quad(312, 540, 375, 536, 372, 600, 310, 600);
    quad(270, 503, 306, 539, 261, 549, 255, 503);
    quad(387, 513, 388, 587, 446, 585, 448, 513);

    // corner house and "chimney"
    fill(240, 220, 200); //very light brown
    quad(63, 504, 198, 504, 198, 600, 63, 603);
    fill(200, 190, 150); // brown
    triangle(126, 450, 54, 502, 198, 504);
    fill(104, 130, 114, 210); // mid-green
    beginShape();
    vertex(126, 450);
    vertex(189, 504);
    vertex(198, 513);
    vertex(252, 441);
    vertex(198, 387);
    endShape(CLOSE);
    fill(100, 170, 150); // light green
    rect(0, 590, 200, 10);
    triangle(125, 450, 198, 387, 189, 450);
    triangle(198, 513, 189, 450, 252, 441);
    //silo
    fill(100, 170, 150); // light green
    quad(63, 450, 66, 600, 0, 603, 0, 448);
    fill(200, 190, 150); // brown
    triangle(0, 448, 36, 423, 72, 450);
    quad(95, 536, 93, 586, 131, 588, 133, 538);
    fill(240, 220, 200, 200); //very light brown
    quad(64, 585, 65, 600, 162, 600, 162, 589);
    quad(0, 181, 45, 183, 43, 212, 0, 215);
    arc(32, 461, 70, 80, PI, TWO_PI);
    beginShape();
    vertex(27, 447);
    vertex(31, 582);
    vertex(67, 584);
    vertex(62, 500);
    vertex(69, 447);
    endShape(CLOSE);
    fill(100, 170, 150, 150); // light green
    quad(0, 447, 69, 447, 65, 480, 0, 480);
    fill(34, 30, 22, 100); //dark gray
    quad(27, 447, 31, 582, 0, 582, 0, 447);
    quad(95, 536, 93, 586, 161, 588, 163, 538);
    fill(213, 144, 113, 180); // reddish-brown
    quad(65, 535, 95, 536, 92, 500, 62, 500);

    fill(255, 0, 0);

  }
