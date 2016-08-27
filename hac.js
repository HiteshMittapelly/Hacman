var a, b, ab, cd, ggg, hhh,k, l, m, n, o, p;
var g = [];
var ch = [];
document.onkeydown = checkKey;

for (var z = 0; z <= 650; z = z + 25) {
    g[z] = [];
    ch[z] = [];
}

for (e = 0; e <= 650; e = e + 25) {
    for (f = 0; f <= 825; f = f + 25) {
        g[e][f] = 1;
        ch[e][f] = 1;
    }
}

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        if (checkleft(a, b)) {
            drawPlayer(a - 25, b, 0);
        }
    } else if (e.keyCode == '39') {
        if (checkright(a, b))
            drawPlayer(a + 25, b, 1);
    } else if (e.keyCode == '40') {
        if (checkdown(a, b))
            drawPlayer(a, b + 25, 2);
    } else if (e.keyCode == '38') {
        if (checkup(a, b))
            drawPlayer(a, b - 25, 3);
    }
}

window.onload = function() {
    var i = 0;
    canvas = document.getElementById('HaCmaN');
    canvasContext = canvas.getContext('2d');
    cx = canvasContext;

    k = 150;
    l = 250;
    m = 525;
    n = 250;
    o = 350;
    p = 650;

    drawCanvas();
    drawSystem();
    drawFood();
    showChecker();
    drawPlayer(300, 475, 0);
    cx.beginPath();
    cx.fillStyle = 'red';
    cx.arc(k, l, 12, 0, (Math.PI) * 2);
    cx.fill();
    cx.beginPath();
    cx.fillStyle = 'red';
    cx.arc(m, n, 12, 0, (Math.PI) * 2);
    cx.fill();
    cx.beginPath();
    cx.fillStyle = 'red';
    cx.arc(o, p, 12, 0, (Math.PI) * 2);
    cx.fill();
    ggg = setInterval(drawGoons, 170);
    hhh = setInterval(drawPlayer(a, b, 0), 170);
}

function checkleft(lco, rco) {
    checkflag = 0;
    if (lco <= 25) {} else if ((lco == 75) && (rco >= 675 && rco <= 700)) {} else if ((lco == 150) && ((rco >= 100 && rco <= 150) || (rco >= 200 && rco <= 225) || (rco >= 275 && rco <= 375) || (rco >= 425 && rco <= 525) || (rco >= 575 && rco <= 700))) {} else if ((lco == 225) && ((rco >= 200 && rco <= 375) || (rco >= 425 && rco <= 525) || (rco >= 675 && rco <= 775))) {} else if ((lco == 300) && ((rco >= 275 && rco <= 300) || (rco == 350) || (rco >= 575 && rco <= 625) || (rco >= 750 && rco <= 775))) {} else if ((lco == 375) && ((rco >= 200 && rco <= 300) || (rco >= 500 && rco <= 625) || (rco >= 675 && rco <= 775))) {} else if ((lco == 450) && ((rco >= 200 && rco <= 225) || (rco >= 350 && rco <= 450) || (rco >= 500 && rco <= 525) || (rco >= 675 && rco <= 700))) {} else if ((lco == 525) && ((rco >= 100 && rco <= 150) || (rco >= 200 && rco <= 375) || (rco >= 425 && rco <= 525) || (rco >= 575 && rco <= 625) || (rco >= 675 && rco <= 775))) {} else if ((lco == 650) && ((rco >= 100 && rco <= 150) || (rco >= 200 && rco <= 225) || (rco >= 275 && rco <= 300) || (rco >= 575 && rco <= 625) || (rco >= 750 && rco <= 775))) {} else if ((lco == 600) && ((rco >= 625 && rco <= 700))) {} else if ((lco == 275) && (rco == 400)) {} else {
        checkflag = 1;
    }
    if (checkflag)
        return true;
    else
        return false;
}

function checkright(lco, rco) {
    checkrflag = 0;
    if (lco >= 650) {} else if ((lco == 25) && ((rco >= 100 && rco <= 150) || (rco >= 200 && rco <= 225) || (rco >= 275 && rco <= 300) || (rco >= 575 && rco <= 625) || (rco >= 750 && rco <= 775))) {} else if ((lco == 75) && ((rco >= 625 && rco <= 700))) {} else if ((lco == 150) && ((rco >= 100 && rco <= 150) || (rco >= 200 && rco <= 375) || (rco >= 425 && rco <= 525) || (rco >= 575 && rco <= 625) || (rco >= 675 && rco <= 775))) {} else if ((lco == 225) && ((rco >= 200 && rco <= 225) || (rco >= 350 && rco <= 450) || (rco >= 500 && rco <= 525) || (rco >= 675 && rco <= 700))) {} else if ((lco == 300) && ((rco >= 200 && rco <= 300) || (rco >= 500 && rco <= 625) || (rco >= 675 && rco <= 775))) {} else if ((lco == 375) && ((rco >= 275 && rco <= 300) || (rco == 350) || (rco >= 575 && rco <= 625) || (rco >= 750 && rco <= 775))) {} else if ((lco == 450) && ((rco >= 200 && rco <= 375) || (rco >= 425 && rco <= 525) || (rco >= 675 && rco <= 775))) {} else if ((lco == 600) && (rco >= 675 && rco <= 700)) {} else if ((lco == 525) && ((rco >= 100 && rco <= 150) || (rco >= 200 && rco <= 225) || (rco >= 275 && rco <= 375) || (rco >= 425 && rco <= 525) || (rco >= 575 && rco <= 700))) {} else if ((lco == 400) && (rco == 400)) {} else {
        checkrflag = 1;
    }
    if (checkrflag)
        return true;
    else
        return false;
}

function checkdown(lco, rco) {
    checkdflag = 0;
    if (rco >= 800) {} else if ((rco == 75) && ((lco >= 50 && lco <= 125) || (lco >= 175 && lco <= 500) || (lco >= 550 && lco <= 625))) {} else if ((rco == 175) && ((lco >= 50 && lco <= 125) || (lco >= 250 && lco <= 425) || (lco >= 175 && lco <= 200) || (lco >= 475 && lco <= 500) || (lco >= 550 && lco <= 625))) {} else if ((rco == 250) && ((lco >= 25 && lco <= 125) || (lco >= 175 && lco <= 275) || (lco >= 400 && lco <= 500) || (lco >= 550 && lco <= 650))) {} else if ((rco == 325) && ((lco >= 250 && lco <= 425))) {} else if ((rco == 400) && ((lco >= 25 && lco <= 125) || (lco >= 175 && lco <= 200) || (lco >= 250 && lco <= 425) || (lco >= 475 && lco <= 500) || (lco >= 550 && lco <= 650))) {} else if ((rco == 475) && ((lco >= 250 && lco <= 425))) {} else if ((rco == 550) && ((lco >= 50 && lco <= 125) || (lco >= 175 && lco <= 275) || (lco >= 400 && lco <= 500) || (lco >= 550 && lco <= 625))) {} else if ((rco == 650) && ((lco >= 25 && lco <= 50) || (lco >= 250 && lco <= 425) || (lco >= 175 && lco <= 200) || (lco >= 475 && lco <= 500) || (lco >= 625 && lco <= 650))) {} else if ((rco == 725) && ((lco >= 50 && lco <= 275) || (lco >= 400 && lco <= 625))) {} else {
        checkdflag = 1;
    }
    if (checkdflag)
        return true;
    else
        return false;
}

function checkup(lco, rco) {
    checkuflag = 0;
    if (rco <= 75) {} else if ((rco == 175) && ((lco >= 50 && lco <= 125) || (lco >= 175 && lco <= 500) || (lco >= 550 && lco <= 625))) {} else if ((rco == 250) && ((lco >= 50 && lco <= 125) || (lco >= 250 && lco <= 425) || (lco >= 550 && lco <= 625))) {} else if ((rco == 325) && ((lco >= 25 && lco <= 125) || (lco >= 175 && lco <= 275) || (lco >= 325 && lco <= 350) || (lco >= 400 && lco <= 500) || (lco >= 550 && lco <= 650))) {} else if ((rco == 400) && ((lco >= 25 && lco <= 125) || (lco >= 175 && lco <= 200) || (lco >= 325 && lco <= 350) || (lco >= 475 && lco <= 500) || (lco >= 550 && lco <= 650))) {} else if ((rco == 475) && ((lco >= 250 && lco <= 425))) {} else if ((rco == 550) && ((lco >= 0 && lco <= 125) || (lco >= 250 && lco <= 425) || (lco >= 175 && lco <= 200) || (lco >= 475 && lco <= 500) || (lco >= 550 && lco <= 650))) {} else if ((rco == 650) && ((lco >= 50 && lco <= 125) || (lco >= 175 && lco <= 275) || (lco >= 325 && lco <= 350) || (lco >= 400 && lco <= 500) || (lco >= 550 && lco <= 625))) {} else if ((rco == 725) && ((lco >= 25 && lco <= 50) || (lco >= 100 && lco <= 125) || (lco >= 250 && lco <= 425) || (lco >= 550 && lco <= 575) || (lco >= 625 && lco <= 650))) {} else if ((rco == 800) && ((lco >= 50 && lco <= 275) || (lco >= 325 && lco <= 350) || (lco >= 400 && lco <= 625))) {} else if ((rco == 375) && ((lco >= 250 && lco <= 275) || (lco >= 400 && lco <= 425))) {} else {
        checkuflag = 1;
    }
    if (checkuflag)
        return true;
    else
        return false;
}

showChecker = function() {
    var aa, bb, ll = 0;
    for (aa = 0; aa <= 650; aa = aa + 25) {
        for (bb = 0; bb <= 825; bb = bb + 25) {
            if (ch[aa][bb] == 2) {
                console.log(aa + "-" + bb);
                ll++;

            }
        }
    }
}

drawCanvas = function() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 50, 700, 825);
}

drawSystem = function() {
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(50, 100, 75, 50);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(175, 100, 325, 50);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(550, 100, 75, 50);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(50, 200, 75, 25);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(250, 200, 175, 25);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(550, 200, 75, 25);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(50, 100, 75, 50);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(175, 200, 25, 175);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(475, 200, 25, 175);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(325, 225, 25, 75);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(200, 275, 75, 25);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(400, 275, 75, 25);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(250, 350, 175, 100);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(175, 425, 25, 100);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(475, 425, 25, 100);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(175, 575, 100, 50);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(400, 575, 100, 50);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(250, 500, 175, 25);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(325, 525, 25, 100);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(250, 675, 175, 25);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(325, 700, 25, 75);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(50, 750, 225, 25);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(400, 750, 225, 25);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(175, 675, 25, 75);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(475, 675, 25, 75);

    cx.moveTo(0, 675);
    cx.lineTo(50, 675);
    cx.stroke();
    cx.moveTo(50, 675);
    cx.lineTo(50, 700);
    cx.stroke();
    cx.moveTo(50, 700);
    cx.lineTo(0, 700);
    cx.stroke();
    cx.moveTo(675, 675);
    cx.lineTo(625, 675);
    cx.stroke();
    cx.moveTo(625, 675);
    cx.lineTo(625, 700);
    cx.stroke();
    cx.moveTo(625, 700);
    cx.lineTo(675, 700);
    cx.stroke();

    cx.moveTo(0, 425);
    cx.lineTo(125, 425);
    cx.stroke();
    cx.moveTo(125, 425);
    cx.lineTo(125, 525);
    cx.stroke();
    cx.moveTo(125, 525);
    cx.lineTo(0, 525);
    cx.stroke();

    cx.moveTo(675, 425);
    cx.lineTo(550, 425);
    cx.stroke();
    cx.moveTo(550, 425);
    cx.lineTo(550, 525);
    cx.stroke();
    cx.moveTo(550, 525);
    cx.lineTo(675, 525);
    cx.stroke();

    cx.moveTo(0, 275);
    cx.lineTo(125, 275);
    cx.stroke();
    cx.moveTo(125, 275);
    cx.lineTo(125, 375);
    cx.stroke();
    cx.moveTo(125, 375);
    cx.lineTo(0, 375);
    cx.stroke();

    cx.moveTo(675, 275);
    cx.lineTo(550, 275);
    cx.stroke();
    cx.moveTo(550, 275);
    cx.lineTo(550, 375);
    cx.stroke();
    cx.moveTo(550, 375);
    cx.lineTo(675, 375);
    cx.stroke();

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(50, 575, 75, 50);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(550, 575, 75, 50);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(100, 625, 25, 75);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
    canvasContext.strokeRect(550, 625, 25, 75);

    cx.fillStyle = 'black';
    cx.fillRect(326, 224, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(190, 276, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(470, 276, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(326, 524, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(326, 724, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(176, 749, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(476, 749, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(101, 624, 23, 23);

    cx.fillStyle = 'black';
    cx.fillRect(551, 624, 23, 23);
}

drawFood = function() {
    loopFor(23, 73, 650);
    loopFor(23, 173, 650);
    loopFor(23, 798, 650);
    loopFor(23, 248, 150);
    loopFor(223, 248, 300);
    loopFor(373, 248, 450);
    loopFor(548, 248, 650);
    loopFor(223, 323, 350);
    loopFor(373, 323, 450);
    loopFor(23, 398, 225);
    loopFor(448, 398, 650);
    loopFor(223, 473, 450);
    loopFor(23, 548, 300);
    loopFor(373, 548, 650);
    loopFor(23, 648, 75);
    loopFor(148, 648, 525);
    loopFor(598, 648, 650);
    loopFor(23, 723, 150);
    loopFor(223, 723, 300);
    loopFor(373, 723, 450);
    loopFor(523, 723, 650);
    loopForY(23, 73, 250);
    loopForY(23, 548, 650);
    loopForY(23, 723, 775);
    loopForY(73, 648, 725);
    loopForY(223, 648, 725);
    loopForY(448, 648, 725);
    loopForY(598, 648, 725);
    loopForY(148, 73, 725);
    loopForY(523, 73, 725);
    loopForY(648, 73, 250);
    loopForY(648, 548, 650);
    loopForY(648, 723, 775);
    loopForY(223, 323, 550);
    loopForY(448, 323, 550);
    loopForY(298, 248, 325);
    loopForY(298, 548, 650);
    loopForY(298, 723, 800);
    loopForY(373, 248, 325);
    loopForY(373, 548, 650);
    loopForY(373, 723, 800);
    loopForY(223, 173, 250);
    loopForY(448, 173, 250);
    console.log("did it food?");
}

var loopFor = function(w, x, y) {
    for (i = w; i <= y; i += 25) {
        z = i + 2;
        ab = x + 2;
        cx.fillStyle = 'yellow';
        cx.fillRect(i, x, 4, 4);
        g[z][ab] = 2;
        ch[z][ab] = 2;
    }
}

var loopForY = function(w, x, y) {
    for (i = x; i <= y; i += 25) {
        z = i + 2;
        cd = w + 2;
        cx.fillStyle = 'yellow';
        cx.fillRect(w, i, 4, 4);
        g[cd][z] = 2;
        ch[cd][z] = 2;
    }
}

function face(h, j, lro, rro) {
    cx.beginPath();
    cx.arc(h, j, 12, lro, rro);
    cx.lineTo(h, j);
    cx.fillStyle = 'black';
    cx.fill();
}

drawPlayer = function(h, j, c) {
    check();
    i++;
    a1 = -(Math.PI) / 6;
    b1 = (Math.PI) / 6;
    a0 = (Math.PI) * 5 / 6;
    b0 = -(Math.PI) * 5 / 6;
    a2 = (Math.PI) * 2 / 6;
    b2 = (Math.PI) * 4 / 6;
    c1 = -(Math.PI) / 12;
    d1 = (Math.PI) / 12;
    c0 = (Math.PI) * 11 / 12;
    d0 = -(Math.PI) * 11 / 12;
    c2 = (Math.PI) * 5 / 12;
    d2 = (Math.PI) * 7 / 12;

    if (i % 2 == 1) {
        cx.beginPath();
        cx.fillStyle = 'yellow';
        cx.arc(h, j, 12, 0, (Math.PI) * 2);
        cx.fill();
        if (c == 1) {
            face(h, j, a1, b1);
        }
        if (c == 0) {
            face(h, j, a0, b0);
        }
        if (c == 2) {
            face(h, j, a2, b2);
        }
        if (c == 3) {
            face(h, j, -b2, -a2);
        }
    } else {
        cx.beginPath();
        cx.fillStyle = 'yellow';
        cx.arc(h, j, 12, 0, (Math.PI) * 2);
        cx.fill();
        if (c == 1) {
            face(h, j, c1, d1);
        }
        if (c == 0) {
            face(h, j, c0, d0);
        }
        if (c == 2) {
            face(h, j, c2, d2);
        }
        if (c == 3) {
            face(h, j, -d2, -c2);
        }
    }
    g[h][j] = 0;
    cx.fillStyle = 'black';
    cx.fillRect(a - 12, b - 12, 24, 24);
    a = h;
    b = j;
}

drawGoons = function() {
    for (r = 0; r <= 675; r = r + 25) {
        cx.fillStyle = 'black';
        cx.fillRect(r + 2, 50, 21, 800);
    }
    for (s = 50; s <= 825; s = s + 25) {
        cx.fillStyle = 'black';
        cx.fillRect(0, s + 2, 675, 21);
    }
    var e, f;
    drawSystem();
    for (e = 0; e <= 650; e = e + 25) {
        for (f = 0; f <= 825; f = f + 25) {
            if (g[e][f] == 1) {} else if (g[e][f] == 2) {
                cx.fillStyle = 'yellow';
                cx.fillRect(e - 2, f - 2, 4, 4);
            } else if (g[e][f] == 0) {
                cx.fillStyle = 'black';
                cx.fillRect(e - 2, f - 2, 4, 4);
            }
        }
    }
    goon1();
    goon2();
    goon3();
    drawAgain();
    check();
}
goon1 = function() {
    var x, y;
    x = k - a;
    y = l - b;
    if (x > 0 && y > 0) {
        if (x < y) {
            if (checkleft(k, l))
                k = k - 25;
			else if (checkup(k, l))
                l = l - 25;
			else if (checkright(k, l))
                k = k + 25;
        } else {
            if (checkup(k, l))
                l = l - 25;
			else  if (checkleft(k, l))
                k = k - 25;
			else if (checkdown(k, l))
                l = l + 25;	
        }
    } else if (x < 0 && y > 0) {
        if ((-x) < y) {
            if (checkright(k, l))
                k = k + 25;
			else if (checkup(k, l))
                l = l - 25;
        } else {
            if (checkup(k, l))
                l = l - 25;
			else if (checkright(k, l))
                k = k + 25;
			else if (checkdown(k, l))
                l = l + 25;	
        }
    } else if (x < 0 && y < 0) {
        if ((-x) < (-y)) {
            if (checkright(k, l))
                k = k + 25;
			else if (checkdown(k, l))
                l = l + 25;	
        } else {
            if (checkdown(k, l))
                l = l + 25;
			else if (checkright(k, l))
                k = k + 25;
        }
    } else if (x > 0 && y < 0) {
        if (x < (-y)) {
            if (checkleft(k, l))
                k = k - 25;
			else if (checkdown(k, l))
                l = l + 25;	
			else if (checkright(k, l))
                k = k + 25;
        } else {
            if (checkdown(k, l))
                l = l + 25;
			else if (checkleft(k, l))
                k = k - 25;
        }
    } else if (x == 0) {
        if (y > 0) {
            if (checkup(k, l))
                l = l - 25;

        } else if (y < 0) {
            if (checkdown(k, l))
                l = l + 25;
        }
    } else if (y == 0) {
        if (x > 0) {
            if (checkleft(k, l))
                k = k - 25;
        } else if (x < 0) {
            if (checkright(k, l))
                k = k + 25;
        }
    }
    cx.beginPath();
    cx.fillStyle = 'red';
    cx.arc(k, l, 12, 0, (Math.PI) * 2);
    cx.fill();
}

goon2 = function() {
    var x, y;
    x = m - a;
    y = n - b;
    if (x > 0 && y > 0) {
        if (x < y) {
            if (checkleft(m, n))
                m = m - 25;
			else if (checkup(m, n))
                n = n - 25;
			else if (checkright(m, n))
                m = m + 25;
        } else {
            if (checkup(m, n))
                n = n - 25;
			else if (checkleft(m, n))
                m = m - 25;
			else if (checkdown(m, n))
                n = n + 25;	
        }

    } else if (x < 0 && y > 0) {
        if ((-x) < y) {
            if (checkright(m, n))
                m = m + 25;
			 else if (checkup(m, n))
                n = n - 25;
			else if (checkdown(m, n))
                n = n + 25;	
        } else {
            if (checkup(m, n))
                n = n - 25;
			else if (checkright(m, n))
                m = m + 25;
        }
    } else if (x < 0 && y < 0) {
        if ((-x) < (-y)) {
            if (checkright(m, n))
                m = m + 25;
			else if (checkdown(m, n))
                n = n + 25;	
        } else {
            if (checkdown(m, n))
                n = n + 25;
			else if (checkright(m, n))
                m = m + 25;
        }
    } else if (x > 0 && y < 0) {
        if (x < (-y)) {
            if (checkleft(m, n))
                m = m - 25;
			else if (checkdown(m, n))
                n = n + 25;	
        } else {
            if (checkdown(m, n))
                n = n + 25;
			else if (checkleft(m, n))
                m = m - 25;
			else if (checkright(m, n))
                m = m + 25;
        }
    } else if (x == 0) {
        if (y > 0) {
            if (checkup(m, n))
                n = n - 25;
        } else if (y < 0) {
            if (checkdown(m, n))
                n = n + 25;
        }
    } else if (y == 0) {
        if (x > 0) {
            if (checkleft(m, n))
                m = m - 25;
        } else if (x < 0) {
            if (checkright(m, n))
                m = m + 25;
        }
    }
    cx.beginPath();
    cx.fillStyle = 'red';
    cx.arc(m, n, 12, 0, (Math.PI) * 2);
    cx.fill();
}

goon3 = function() {
    var x, y;
    x = o - a;
    y = p - b;
    if (x > 0 && y > 0) {
        if (x < y) {
            if (checkleft(o, p))
                o = o - 25;
			else if (checkup(m, n))
                n = n - 25;
        } else {
            if (checkup(o, p))
                p = p - 25;
			else if (checkleft(m, n))
                m = m - 25;
        }
    } else if (x < 0 && y > 0) {
        if ((-x) < y) {
            if (checkright(o, p))
                o = o + 25;
			else if (checkup(m, n))
                n = n - 25;
        } else {
            if (checkup(o, p))
                p = p - 25;
        }
    } else if (x < 0 && y < 0) {
        if ((-x) < (-y)) {
            if (checkright(o, p))
                o = o + 25;
        } else {
            if (checkdown(o, p))
                p = p + 25;
        }
    } else if (x > 0 && y < 0) {
        if (x < (-y)) {
            if (checkleft(o, p))
                o = o - 25;
        } else {
            if (checkdown(o, p))
                p = p + 25;
			else if (checkleft(m, n))
                m = m - 25;
        }
    } else if (x == 0) {
        if (y > 0) {
            if (checkup(o, p))
                p = p - 25;
        } else if (y < 0) {
            if (checkdown(o, p))
                p = p + 25;
        }
    } else if (y == 0) {
        if (x > 0) {
            if (checkleft(o, p))
                o = o - 25;
        } else if (x < 0) {
            if (checkright(o, p))
                o = o + 25;
        }
    }
    cx.beginPath();
    cx.fillStyle = 'red';
    cx.arc(o, p, 12, 0, (Math.PI) * 2);
    cx.fill();
}

drawAgain = function() {
    cx.beginPath();
    cx.fillStyle = 'yellow';
    cx.arc(a, b, 12, 0, (Math.PI) * 2);
    cx.fill();
}

check = function() {
    console.log(k + "" + l + "" + m + "" + n + "" + o + "" + p);
    if ((a == k && b == l) || (a == m && b == n) || (a == o && b == p)) {
        cx.beginPath();
        cx.fillStyle = 'red';
        cx.arc(a, b, 12, 0, (Math.PI) * 2);
        alert("taats enouga refresa to restart");
        init();
    }
    var xy = 1;
    var yz = true;

    for (dd = 50; dd <= 825; dd = dd + 25) {
        for (cc = 0; cc <= 650; cc = cc + 25) {
            if (ch[cc][dd] == 2) {
                if (g[cc][dd] == 0) {
                    xy = 1;
                } else {
                    xy = 0;
                    yz = false;
                    break;
                }
            }
        }
        if (yz == false)
            break;
    }
    if (xy == 1) {
        var aa, bb, ll = 0;
        for (aa = 0; aa <= 650; aa = aa + 25) {
            for (bb = 0; bb <= 825; bb = bb + 25) {
                if (g[aa][bb] == 0) {
                    console.log(aa + "-" + bb);
                    ll++;

                }
            }
        }
        alert("you won!!!!!!!!!");
        init();
    }
}

init = function() {
    clearInterval(ggg);
    clearInterval(hhh);
}