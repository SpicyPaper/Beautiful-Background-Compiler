
window.onload = function() {

canvas = document.getElementById('bbcCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');
bbcInit();
bbcUpdate();

}

function bbcInit() {

bbcShape1 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape2 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape3 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape4 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape5 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape6 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape7 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape8 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape9 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape10 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape11 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape12 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape13 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape14 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape15 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape16 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape17 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape18 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape19 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape20 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape21 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape22 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape23 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape24 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape25 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape26 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape27 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape28 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape29 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape30 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape31 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape32 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape33 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape34 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape35 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape36 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape37 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape38 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape39 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape40 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape41 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape42 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape43 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape44 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape45 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape46 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape47 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape48 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape49 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape50 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape51 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape52 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape53 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape54 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape55 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape56 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape57 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape58 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape59 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape60 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape61 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape62 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape63 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape64 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape65 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape66 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape67 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape68 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape69 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape70 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape71 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape72 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape73 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape74 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape75 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape76 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape77 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape78 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape79 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape80 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape81 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape82 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape83 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape84 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape85 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape86 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape87 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape88 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape89 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape90 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape91 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape92 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape93 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape94 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape95 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape96 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape97 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape98 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape99 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape100 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape101 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape102 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape103 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape104 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape105 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape106 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape107 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape108 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape109 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape110 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape111 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape112 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape113 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape114 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape115 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape116 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape117 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape118 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape119 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape120 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape121 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape122 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape123 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape124 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape125 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape126 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape127 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape128 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape129 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape130 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape131 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape132 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape133 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape134 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape135 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape136 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape137 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape138 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape139 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape140 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape141 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape142 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape143 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape144 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape145 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape146 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape147 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape148 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape149 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape150 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape151 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape152 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape153 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape154 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape155 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape156 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape157 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape158 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape159 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape160 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape161 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape162 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape163 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape164 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape165 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape166 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape167 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape168 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape169 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape170 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape171 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape172 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape173 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape174 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape175 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape176 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape177 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape178 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape179 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape180 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape181 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape182 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape183 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape184 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape185 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape186 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape187 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape188 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape189 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape190 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape191 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape192 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape193 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape194 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape195 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape196 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape197 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape198 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape199 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape200 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape201 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape202 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape203 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape204 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape205 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape206 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape207 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape208 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape209 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape210 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape211 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape212 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape213 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape214 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape215 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape216 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape217 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape218 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape219 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape220 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape221 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape222 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape223 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape224 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape225 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape226 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape227 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape228 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape229 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape230 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape231 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape232 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape233 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape234 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape235 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape236 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape237 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape238 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape239 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape240 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape241 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape242 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape243 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape244 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape245 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape246 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape247 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape248 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape249 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape250 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape251 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape252 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape253 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape254 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape255 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape256 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape257 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape258 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape259 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape260 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape261 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape262 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape263 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape264 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape265 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape266 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape267 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape268 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape269 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape270 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape271 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape272 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape273 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape274 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape275 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape276 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape277 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape278 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape279 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape280 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape281 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape282 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape283 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape284 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape285 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape286 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape287 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape288 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape289 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape290 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape291 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape292 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape293 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape294 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape295 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape296 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape297 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape298 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape299 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape300 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape301 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape302 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape303 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape304 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape305 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape306 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape307 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape308 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape309 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape310 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape311 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape312 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape313 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape314 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape315 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape316 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape317 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape318 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape319 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape320 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape321 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape322 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape323 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape324 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape325 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape326 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape327 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape328 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape329 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape330 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape331 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape332 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape333 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape334 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape335 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape336 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape337 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape338 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape339 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape340 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape341 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape342 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape343 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape344 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape345 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape346 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape347 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape348 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape349 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape350 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape351 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape352 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape353 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape354 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape355 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape356 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape357 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape358 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape359 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape360 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape361 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape362 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape363 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape364 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape365 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape366 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape367 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape368 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape369 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape370 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape371 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape372 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape373 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape374 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape375 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape376 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape377 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape378 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape379 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape380 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape381 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape382 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape383 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape384 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape385 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape386 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape387 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape388 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape389 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape390 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape391 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape392 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape393 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape394 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape395 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape396 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape397 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape398 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape399 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape400 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape401 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape402 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape403 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape404 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape405 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape406 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape407 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape408 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape409 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape410 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape411 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape412 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape413 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape414 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape415 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape416 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape417 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape418 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape419 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape420 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape421 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape422 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape423 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape424 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape425 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape426 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape427 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape428 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape429 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape430 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape431 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape432 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape433 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape434 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape435 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape436 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape437 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape438 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape439 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape440 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape441 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape442 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape443 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape444 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape445 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape446 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape447 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape448 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape449 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape450 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape451 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape452 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape453 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape454 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape455 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape456 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape457 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape458 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape459 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape460 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape461 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape462 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape463 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape464 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape465 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape466 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape467 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape468 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape469 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape470 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape471 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape472 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape473 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape474 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape475 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape476 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape477 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape478 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape479 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape480 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape481 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape482 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape483 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape484 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape485 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape486 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape487 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape488 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape489 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape490 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape491 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape492 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape493 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape494 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape495 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape496 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape497 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape498 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape499 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape500 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape501 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape502 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape503 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape504 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape505 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape506 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape507 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape508 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape509 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape510 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape511 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape512 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape513 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape514 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape515 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape516 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape517 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape518 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape519 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape520 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape521 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape522 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape523 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape524 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape525 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape526 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape527 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape528 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape529 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape530 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape531 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape532 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape533 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape534 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape535 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape536 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape537 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape538 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape539 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape540 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape541 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape542 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape543 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape544 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape545 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape546 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape547 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape548 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape549 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape550 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape551 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape552 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape553 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape554 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape555 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape556 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape557 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape558 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape559 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape560 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape561 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape562 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape563 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape564 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape565 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape566 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape567 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape568 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape569 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape570 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape571 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape572 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape573 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape574 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape575 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape576 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape577 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape578 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape579 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape580 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape581 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape582 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape583 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape584 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape585 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape586 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape587 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape588 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape589 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape590 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape591 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape592 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape593 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape594 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape595 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape596 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape597 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape598 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape599 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape600 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape601 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape602 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape603 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape604 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape605 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape606 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape607 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape608 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape609 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape610 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape611 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape612 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape613 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape614 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape615 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape616 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape617 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape618 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape619 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape620 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape621 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape622 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape623 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape624 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape625 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape626 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape627 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape628 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape629 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape630 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape631 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape632 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape633 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape634 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape635 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape636 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape637 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape638 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape639 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape640 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape641 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape642 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape643 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape644 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape645 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape646 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape647 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape648 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape649 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape650 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape651 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape652 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape653 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape654 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape655 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape656 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape657 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape658 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape659 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape660 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape661 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape662 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape663 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape664 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape665 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape666 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape667 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape668 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape669 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape670 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape671 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape672 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape673 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape674 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape675 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape676 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape677 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape678 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape679 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape680 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape681 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape682 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape683 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape684 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape685 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape686 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape687 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape688 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape689 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape690 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape691 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape692 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape693 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape694 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape695 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape696 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape697 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape698 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape699 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape700 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape701 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape702 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape703 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape704 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape705 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape706 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape707 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape708 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape709 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape710 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape711 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape712 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape713 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape714 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape715 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape716 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape717 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape718 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape719 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape720 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape721 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape722 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape723 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape724 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape725 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape726 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape727 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape728 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape729 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape730 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape731 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape732 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape733 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape734 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape735 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape736 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape737 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape738 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape739 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape740 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape741 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape742 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape743 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape744 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape745 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape746 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape747 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape748 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape749 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape750 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape751 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape752 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape753 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape754 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape755 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape756 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape757 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape758 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape759 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape760 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape761 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape762 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape763 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape764 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape765 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape766 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape767 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape768 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape769 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape770 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape771 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape772 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape773 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape774 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape775 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape776 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape777 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape778 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape779 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape780 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape781 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape782 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape783 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape784 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape785 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape786 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape787 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape788 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape789 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape790 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape791 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape792 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape793 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape794 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape795 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape796 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape797 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape798 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape799 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape800 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape801 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape802 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape803 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape804 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape805 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape806 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape807 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape808 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape809 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape810 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape811 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape812 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape813 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape814 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape815 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape816 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape817 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape818 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape819 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape820 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape821 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape822 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape823 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape824 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape825 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape826 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape827 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape828 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape829 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape830 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape831 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape832 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape833 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape834 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape835 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape836 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape837 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape838 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape839 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape840 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape841 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape842 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape843 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape844 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape845 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape846 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape847 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape848 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape849 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape850 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape851 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape852 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape853 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape854 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape855 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape856 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape857 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape858 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape859 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape860 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape861 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape862 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape863 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape864 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape865 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape866 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape867 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape868 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape869 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape870 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape871 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape872 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape873 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape874 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape875 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape876 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape877 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape878 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape879 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape880 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape881 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape882 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape883 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape884 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape885 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape886 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape887 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape888 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape889 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape890 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape891 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape892 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape893 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape894 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape895 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape896 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape897 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape898 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape899 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape900 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape901 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape902 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape903 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape904 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape905 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape906 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape907 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape908 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape909 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape910 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape911 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape912 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape913 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape914 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape915 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape916 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape917 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape918 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape919 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape920 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape921 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape922 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape923 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape924 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape925 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape926 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape927 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape928 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape929 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape930 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape931 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape932 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape933 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape934 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape935 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape936 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape937 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape938 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape939 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape940 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape941 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape942 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape943 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape944 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape945 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape946 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape947 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape948 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape949 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape950 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape951 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape952 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape953 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape954 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape955 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape956 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape957 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape958 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape959 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape960 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape961 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape962 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape963 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape964 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape965 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape966 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape967 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape968 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape969 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape970 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape971 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape972 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape973 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape974 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape975 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape976 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape977 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape978 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape979 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape980 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape981 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape982 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape983 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape984 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape985 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape986 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape987 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape988 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape989 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape990 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape991 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape992 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape993 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape994 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape995 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape996 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape997 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape998 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape999 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1000 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1001 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1002 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1003 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1004 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1005 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1006 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1007 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1008 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1009 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1010 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1011 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1012 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1013 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1014 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1015 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1016 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1017 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1018 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1019 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1020 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1021 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1022 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1023 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1024 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1025 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1026 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1027 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1028 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1029 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1030 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1031 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1032 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1033 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1034 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1035 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1036 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1037 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1038 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1039 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1040 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1041 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1042 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1043 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1044 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1045 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1046 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1047 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1048 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1049 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1050 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1051 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1052 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1053 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1054 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1055 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1056 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1057 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1058 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1059 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1060 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1061 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1062 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1063 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1064 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1065 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1066 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1067 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1068 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1069 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1070 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1071 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1072 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1073 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1074 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1075 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1076 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1077 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1078 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1079 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1080 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1081 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1082 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1083 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1084 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1085 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1086 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1087 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1088 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1089 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1090 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1091 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1092 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1093 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1094 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1095 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1096 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1097 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1098 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1099 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1100 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1101 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1102 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1103 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1104 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1105 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1106 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1107 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1108 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1109 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1110 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1111 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1112 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1113 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1114 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1115 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1116 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1117 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1118 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1119 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1120 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1121 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1122 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1123 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1124 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1125 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1126 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1127 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1128 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1129 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1130 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1131 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1132 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1133 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1134 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1135 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1136 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1137 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1138 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1139 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1140 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1141 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1142 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1143 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1144 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1145 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1146 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1147 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1148 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1149 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1150 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1151 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1152 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1153 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1154 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1155 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1156 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1157 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1158 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1159 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1160 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1161 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1162 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1163 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1164 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1165 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1166 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1167 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1168 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1169 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1170 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1171 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1172 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1173 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1174 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1175 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1176 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1177 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1178 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1179 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1180 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1181 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1182 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1183 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1184 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1185 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1186 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1187 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1188 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1189 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1190 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1191 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1192 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1193 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1194 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1195 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1196 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1197 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1198 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1199 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1200 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1201 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1202 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1203 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1204 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1205 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1206 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1207 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1208 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1209 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1210 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1211 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1212 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1213 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1214 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1215 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1216 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1217 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1218 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1219 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1220 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1221 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1222 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1223 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1224 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1225 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1226 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1227 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1228 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1229 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1230 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1231 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1232 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1233 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1234 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1235 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1236 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1237 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1238 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1239 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1240 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1241 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1242 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1243 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1244 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1245 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1246 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1247 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1248 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1249 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1250 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1251 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1252 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1253 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1254 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1255 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1256 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1257 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1258 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1259 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1260 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1261 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1262 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1263 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1264 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1265 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1266 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1267 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1268 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1269 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1270 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1271 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1272 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1273 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1274 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1275 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1276 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1277 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1278 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1279 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1280 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1281 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1282 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1283 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1284 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1285 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1286 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1287 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1288 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1289 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1290 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1291 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1292 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1293 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1294 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1295 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1296 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1297 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1298 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1299 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1300 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1301 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1302 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1303 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1304 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1305 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1306 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1307 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1308 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1309 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1310 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1311 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1312 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1313 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1314 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1315 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1316 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1317 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1318 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1319 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1320 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1321 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1322 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1323 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1324 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1325 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1326 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1327 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1328 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1329 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1330 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1331 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1332 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1333 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1334 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1335 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1336 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1337 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1338 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1339 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1340 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1341 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1342 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1343 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1344 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1345 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1346 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1347 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1348 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1349 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1350 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1351 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1352 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1353 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1354 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1355 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1356 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1357 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1358 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1359 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1360 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1361 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1362 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1363 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1364 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1365 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1366 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1367 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1368 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1369 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1370 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1371 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1372 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1373 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1374 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1375 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1376 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1377 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1378 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1379 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1380 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1381 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1382 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1383 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1384 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1385 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1386 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1387 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1388 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1389 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1390 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1391 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1392 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1393 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1394 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1395 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1396 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1397 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1398 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1399 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1400 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1401 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1402 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1403 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1404 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1405 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1406 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1407 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1408 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1409 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1410 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1411 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1412 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1413 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1414 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1415 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1416 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1417 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1418 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1419 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1420 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1421 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1422 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1423 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1424 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1425 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1426 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1427 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1428 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1429 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1430 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1431 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1432 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1433 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1434 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1435 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1436 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1437 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1438 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1439 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1440 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1441 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1442 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1443 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1444 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1445 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1446 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1447 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1448 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1449 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1450 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1451 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1452 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1453 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1454 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1455 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1456 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1457 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1458 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1459 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1460 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1461 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1462 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1463 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1464 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1465 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1466 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1467 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1468 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1469 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1470 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1471 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1472 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1473 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1474 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1475 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1476 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1477 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1478 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1479 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1480 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1481 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1482 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1483 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1484 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1485 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1486 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1487 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1488 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1489 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1490 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1491 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1492 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1493 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1494 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1495 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1496 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1497 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1498 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1499 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1500 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1501 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1502 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1503 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1504 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1505 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1506 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1507 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1508 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1509 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1510 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1511 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1512 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1513 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1514 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1515 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1516 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1517 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1518 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1519 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1520 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1521 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1522 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1523 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1524 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1525 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1526 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1527 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1528 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1529 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1530 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1531 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1532 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1533 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1534 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1535 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1536 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1537 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1538 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1539 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1540 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1541 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1542 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1543 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1544 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1545 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1546 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1547 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1548 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1549 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1550 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1551 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1552 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1553 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1554 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1555 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1556 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1557 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1558 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1559 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1560 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1561 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1562 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1563 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1564 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1565 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1566 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1567 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1568 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1569 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1570 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1571 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1572 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1573 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1574 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1575 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1576 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1577 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1578 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1579 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1580 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1581 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1582 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1583 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1584 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1585 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1586 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1587 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1588 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1589 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1590 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1591 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1592 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1593 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1594 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1595 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1596 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1597 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1598 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1599 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

bbcShape1600 = {
    point:{
    x:300.0,
    y:100.0
},
    radius:20.0,
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0
};

}

function bbcUpdate() {

bbcShape1.point.x += -20.0;
bbcShape1.point.y += 20.0;

bbcShape2.point.x += -20.0;
bbcShape2.point.y += 19.0;

bbcShape3.point.x += -20.0;
bbcShape3.point.y += 18.0;

bbcShape4.point.x += -20.0;
bbcShape4.point.y += 17.0;

bbcShape5.point.x += -20.0;
bbcShape5.point.y += 16.0;

bbcShape6.point.x += -20.0;
bbcShape6.point.y += 15.0;

bbcShape7.point.x += -20.0;
bbcShape7.point.y += 14.0;

bbcShape8.point.x += -20.0;
bbcShape8.point.y += 13.0;

bbcShape9.point.x += -20.0;
bbcShape9.point.y += 12.0;

bbcShape10.point.x += -20.0;
bbcShape10.point.y += 11.0;

bbcShape11.point.x += -20.0;
bbcShape11.point.y += 10.0;

bbcShape12.point.x += -20.0;
bbcShape12.point.y += 9.0;

bbcShape13.point.x += -20.0;
bbcShape13.point.y += 8.0;

bbcShape14.point.x += -20.0;
bbcShape14.point.y += 7.0;

bbcShape15.point.x += -20.0;
bbcShape15.point.y += 6.0;

bbcShape16.point.x += -20.0;
bbcShape16.point.y += 5.0;

bbcShape17.point.x += -20.0;
bbcShape17.point.y += 4.0;

bbcShape18.point.x += -20.0;
bbcShape18.point.y += 3.0;

bbcShape19.point.x += -20.0;
bbcShape19.point.y += 2.0;

bbcShape20.point.x += -20.0;
bbcShape20.point.y += 1.0;

bbcShape21.point.x += -20.0;
bbcShape21.point.y += 0.0;

bbcShape22.point.x += -20.0;
bbcShape22.point.y += -1.0;

bbcShape23.point.x += -20.0;
bbcShape23.point.y += -2.0;

bbcShape24.point.x += -20.0;
bbcShape24.point.y += -3.0;

bbcShape25.point.x += -20.0;
bbcShape25.point.y += -4.0;

bbcShape26.point.x += -20.0;
bbcShape26.point.y += -5.0;

bbcShape27.point.x += -20.0;
bbcShape27.point.y += -6.0;

bbcShape28.point.x += -20.0;
bbcShape28.point.y += -7.0;

bbcShape29.point.x += -20.0;
bbcShape29.point.y += -8.0;

bbcShape30.point.x += -20.0;
bbcShape30.point.y += -9.0;

bbcShape31.point.x += -20.0;
bbcShape31.point.y += -10.0;

bbcShape32.point.x += -20.0;
bbcShape32.point.y += -11.0;

bbcShape33.point.x += -20.0;
bbcShape33.point.y += -12.0;

bbcShape34.point.x += -20.0;
bbcShape34.point.y += -13.0;

bbcShape35.point.x += -20.0;
bbcShape35.point.y += -14.0;

bbcShape36.point.x += -20.0;
bbcShape36.point.y += -15.0;

bbcShape37.point.x += -20.0;
bbcShape37.point.y += -16.0;

bbcShape38.point.x += -20.0;
bbcShape38.point.y += -17.0;

bbcShape39.point.x += -20.0;
bbcShape39.point.y += -18.0;

bbcShape40.point.x += -20.0;
bbcShape40.point.y += -19.0;

bbcShape41.point.x += -19.0;
bbcShape41.point.y += 20.0;

bbcShape42.point.x += -19.0;
bbcShape42.point.y += 19.0;

bbcShape43.point.x += -19.0;
bbcShape43.point.y += 18.0;

bbcShape44.point.x += -19.0;
bbcShape44.point.y += 17.0;

bbcShape45.point.x += -19.0;
bbcShape45.point.y += 16.0;

bbcShape46.point.x += -19.0;
bbcShape46.point.y += 15.0;

bbcShape47.point.x += -19.0;
bbcShape47.point.y += 14.0;

bbcShape48.point.x += -19.0;
bbcShape48.point.y += 13.0;

bbcShape49.point.x += -19.0;
bbcShape49.point.y += 12.0;

bbcShape50.point.x += -19.0;
bbcShape50.point.y += 11.0;

bbcShape51.point.x += -19.0;
bbcShape51.point.y += 10.0;

bbcShape52.point.x += -19.0;
bbcShape52.point.y += 9.0;

bbcShape53.point.x += -19.0;
bbcShape53.point.y += 8.0;

bbcShape54.point.x += -19.0;
bbcShape54.point.y += 7.0;

bbcShape55.point.x += -19.0;
bbcShape55.point.y += 6.0;

bbcShape56.point.x += -19.0;
bbcShape56.point.y += 5.0;

bbcShape57.point.x += -19.0;
bbcShape57.point.y += 4.0;

bbcShape58.point.x += -19.0;
bbcShape58.point.y += 3.0;

bbcShape59.point.x += -19.0;
bbcShape59.point.y += 2.0;

bbcShape60.point.x += -19.0;
bbcShape60.point.y += 1.0;

bbcShape61.point.x += -19.0;
bbcShape61.point.y += 0.0;

bbcShape62.point.x += -19.0;
bbcShape62.point.y += -1.0;

bbcShape63.point.x += -19.0;
bbcShape63.point.y += -2.0;

bbcShape64.point.x += -19.0;
bbcShape64.point.y += -3.0;

bbcShape65.point.x += -19.0;
bbcShape65.point.y += -4.0;

bbcShape66.point.x += -19.0;
bbcShape66.point.y += -5.0;

bbcShape67.point.x += -19.0;
bbcShape67.point.y += -6.0;

bbcShape68.point.x += -19.0;
bbcShape68.point.y += -7.0;

bbcShape69.point.x += -19.0;
bbcShape69.point.y += -8.0;

bbcShape70.point.x += -19.0;
bbcShape70.point.y += -9.0;

bbcShape71.point.x += -19.0;
bbcShape71.point.y += -10.0;

bbcShape72.point.x += -19.0;
bbcShape72.point.y += -11.0;

bbcShape73.point.x += -19.0;
bbcShape73.point.y += -12.0;

bbcShape74.point.x += -19.0;
bbcShape74.point.y += -13.0;

bbcShape75.point.x += -19.0;
bbcShape75.point.y += -14.0;

bbcShape76.point.x += -19.0;
bbcShape76.point.y += -15.0;

bbcShape77.point.x += -19.0;
bbcShape77.point.y += -16.0;

bbcShape78.point.x += -19.0;
bbcShape78.point.y += -17.0;

bbcShape79.point.x += -19.0;
bbcShape79.point.y += -18.0;

bbcShape80.point.x += -19.0;
bbcShape80.point.y += -19.0;

bbcShape81.point.x += -18.0;
bbcShape81.point.y += 20.0;

bbcShape82.point.x += -18.0;
bbcShape82.point.y += 19.0;

bbcShape83.point.x += -18.0;
bbcShape83.point.y += 18.0;

bbcShape84.point.x += -18.0;
bbcShape84.point.y += 17.0;

bbcShape85.point.x += -18.0;
bbcShape85.point.y += 16.0;

bbcShape86.point.x += -18.0;
bbcShape86.point.y += 15.0;

bbcShape87.point.x += -18.0;
bbcShape87.point.y += 14.0;

bbcShape88.point.x += -18.0;
bbcShape88.point.y += 13.0;

bbcShape89.point.x += -18.0;
bbcShape89.point.y += 12.0;

bbcShape90.point.x += -18.0;
bbcShape90.point.y += 11.0;

bbcShape91.point.x += -18.0;
bbcShape91.point.y += 10.0;

bbcShape92.point.x += -18.0;
bbcShape92.point.y += 9.0;

bbcShape93.point.x += -18.0;
bbcShape93.point.y += 8.0;

bbcShape94.point.x += -18.0;
bbcShape94.point.y += 7.0;

bbcShape95.point.x += -18.0;
bbcShape95.point.y += 6.0;

bbcShape96.point.x += -18.0;
bbcShape96.point.y += 5.0;

bbcShape97.point.x += -18.0;
bbcShape97.point.y += 4.0;

bbcShape98.point.x += -18.0;
bbcShape98.point.y += 3.0;

bbcShape99.point.x += -18.0;
bbcShape99.point.y += 2.0;

bbcShape100.point.x += -18.0;
bbcShape100.point.y += 1.0;

bbcShape101.point.x += -18.0;
bbcShape101.point.y += 0.0;

bbcShape102.point.x += -18.0;
bbcShape102.point.y += -1.0;

bbcShape103.point.x += -18.0;
bbcShape103.point.y += -2.0;

bbcShape104.point.x += -18.0;
bbcShape104.point.y += -3.0;

bbcShape105.point.x += -18.0;
bbcShape105.point.y += -4.0;

bbcShape106.point.x += -18.0;
bbcShape106.point.y += -5.0;

bbcShape107.point.x += -18.0;
bbcShape107.point.y += -6.0;

bbcShape108.point.x += -18.0;
bbcShape108.point.y += -7.0;

bbcShape109.point.x += -18.0;
bbcShape109.point.y += -8.0;

bbcShape110.point.x += -18.0;
bbcShape110.point.y += -9.0;

bbcShape111.point.x += -18.0;
bbcShape111.point.y += -10.0;

bbcShape112.point.x += -18.0;
bbcShape112.point.y += -11.0;

bbcShape113.point.x += -18.0;
bbcShape113.point.y += -12.0;

bbcShape114.point.x += -18.0;
bbcShape114.point.y += -13.0;

bbcShape115.point.x += -18.0;
bbcShape115.point.y += -14.0;

bbcShape116.point.x += -18.0;
bbcShape116.point.y += -15.0;

bbcShape117.point.x += -18.0;
bbcShape117.point.y += -16.0;

bbcShape118.point.x += -18.0;
bbcShape118.point.y += -17.0;

bbcShape119.point.x += -18.0;
bbcShape119.point.y += -18.0;

bbcShape120.point.x += -18.0;
bbcShape120.point.y += -19.0;

bbcShape121.point.x += -17.0;
bbcShape121.point.y += 20.0;

bbcShape122.point.x += -17.0;
bbcShape122.point.y += 19.0;

bbcShape123.point.x += -17.0;
bbcShape123.point.y += 18.0;

bbcShape124.point.x += -17.0;
bbcShape124.point.y += 17.0;

bbcShape125.point.x += -17.0;
bbcShape125.point.y += 16.0;

bbcShape126.point.x += -17.0;
bbcShape126.point.y += 15.0;

bbcShape127.point.x += -17.0;
bbcShape127.point.y += 14.0;

bbcShape128.point.x += -17.0;
bbcShape128.point.y += 13.0;

bbcShape129.point.x += -17.0;
bbcShape129.point.y += 12.0;

bbcShape130.point.x += -17.0;
bbcShape130.point.y += 11.0;

bbcShape131.point.x += -17.0;
bbcShape131.point.y += 10.0;

bbcShape132.point.x += -17.0;
bbcShape132.point.y += 9.0;

bbcShape133.point.x += -17.0;
bbcShape133.point.y += 8.0;

bbcShape134.point.x += -17.0;
bbcShape134.point.y += 7.0;

bbcShape135.point.x += -17.0;
bbcShape135.point.y += 6.0;

bbcShape136.point.x += -17.0;
bbcShape136.point.y += 5.0;

bbcShape137.point.x += -17.0;
bbcShape137.point.y += 4.0;

bbcShape138.point.x += -17.0;
bbcShape138.point.y += 3.0;

bbcShape139.point.x += -17.0;
bbcShape139.point.y += 2.0;

bbcShape140.point.x += -17.0;
bbcShape140.point.y += 1.0;

bbcShape141.point.x += -17.0;
bbcShape141.point.y += 0.0;

bbcShape142.point.x += -17.0;
bbcShape142.point.y += -1.0;

bbcShape143.point.x += -17.0;
bbcShape143.point.y += -2.0;

bbcShape144.point.x += -17.0;
bbcShape144.point.y += -3.0;

bbcShape145.point.x += -17.0;
bbcShape145.point.y += -4.0;

bbcShape146.point.x += -17.0;
bbcShape146.point.y += -5.0;

bbcShape147.point.x += -17.0;
bbcShape147.point.y += -6.0;

bbcShape148.point.x += -17.0;
bbcShape148.point.y += -7.0;

bbcShape149.point.x += -17.0;
bbcShape149.point.y += -8.0;

bbcShape150.point.x += -17.0;
bbcShape150.point.y += -9.0;

bbcShape151.point.x += -17.0;
bbcShape151.point.y += -10.0;

bbcShape152.point.x += -17.0;
bbcShape152.point.y += -11.0;

bbcShape153.point.x += -17.0;
bbcShape153.point.y += -12.0;

bbcShape154.point.x += -17.0;
bbcShape154.point.y += -13.0;

bbcShape155.point.x += -17.0;
bbcShape155.point.y += -14.0;

bbcShape156.point.x += -17.0;
bbcShape156.point.y += -15.0;

bbcShape157.point.x += -17.0;
bbcShape157.point.y += -16.0;

bbcShape158.point.x += -17.0;
bbcShape158.point.y += -17.0;

bbcShape159.point.x += -17.0;
bbcShape159.point.y += -18.0;

bbcShape160.point.x += -17.0;
bbcShape160.point.y += -19.0;

bbcShape161.point.x += -16.0;
bbcShape161.point.y += 20.0;

bbcShape162.point.x += -16.0;
bbcShape162.point.y += 19.0;

bbcShape163.point.x += -16.0;
bbcShape163.point.y += 18.0;

bbcShape164.point.x += -16.0;
bbcShape164.point.y += 17.0;

bbcShape165.point.x += -16.0;
bbcShape165.point.y += 16.0;

bbcShape166.point.x += -16.0;
bbcShape166.point.y += 15.0;

bbcShape167.point.x += -16.0;
bbcShape167.point.y += 14.0;

bbcShape168.point.x += -16.0;
bbcShape168.point.y += 13.0;

bbcShape169.point.x += -16.0;
bbcShape169.point.y += 12.0;

bbcShape170.point.x += -16.0;
bbcShape170.point.y += 11.0;

bbcShape171.point.x += -16.0;
bbcShape171.point.y += 10.0;

bbcShape172.point.x += -16.0;
bbcShape172.point.y += 9.0;

bbcShape173.point.x += -16.0;
bbcShape173.point.y += 8.0;

bbcShape174.point.x += -16.0;
bbcShape174.point.y += 7.0;

bbcShape175.point.x += -16.0;
bbcShape175.point.y += 6.0;

bbcShape176.point.x += -16.0;
bbcShape176.point.y += 5.0;

bbcShape177.point.x += -16.0;
bbcShape177.point.y += 4.0;

bbcShape178.point.x += -16.0;
bbcShape178.point.y += 3.0;

bbcShape179.point.x += -16.0;
bbcShape179.point.y += 2.0;

bbcShape180.point.x += -16.0;
bbcShape180.point.y += 1.0;

bbcShape181.point.x += -16.0;
bbcShape181.point.y += 0.0;

bbcShape182.point.x += -16.0;
bbcShape182.point.y += -1.0;

bbcShape183.point.x += -16.0;
bbcShape183.point.y += -2.0;

bbcShape184.point.x += -16.0;
bbcShape184.point.y += -3.0;

bbcShape185.point.x += -16.0;
bbcShape185.point.y += -4.0;

bbcShape186.point.x += -16.0;
bbcShape186.point.y += -5.0;

bbcShape187.point.x += -16.0;
bbcShape187.point.y += -6.0;

bbcShape188.point.x += -16.0;
bbcShape188.point.y += -7.0;

bbcShape189.point.x += -16.0;
bbcShape189.point.y += -8.0;

bbcShape190.point.x += -16.0;
bbcShape190.point.y += -9.0;

bbcShape191.point.x += -16.0;
bbcShape191.point.y += -10.0;

bbcShape192.point.x += -16.0;
bbcShape192.point.y += -11.0;

bbcShape193.point.x += -16.0;
bbcShape193.point.y += -12.0;

bbcShape194.point.x += -16.0;
bbcShape194.point.y += -13.0;

bbcShape195.point.x += -16.0;
bbcShape195.point.y += -14.0;

bbcShape196.point.x += -16.0;
bbcShape196.point.y += -15.0;

bbcShape197.point.x += -16.0;
bbcShape197.point.y += -16.0;

bbcShape198.point.x += -16.0;
bbcShape198.point.y += -17.0;

bbcShape199.point.x += -16.0;
bbcShape199.point.y += -18.0;

bbcShape200.point.x += -16.0;
bbcShape200.point.y += -19.0;

bbcShape201.point.x += -15.0;
bbcShape201.point.y += 20.0;

bbcShape202.point.x += -15.0;
bbcShape202.point.y += 19.0;

bbcShape203.point.x += -15.0;
bbcShape203.point.y += 18.0;

bbcShape204.point.x += -15.0;
bbcShape204.point.y += 17.0;

bbcShape205.point.x += -15.0;
bbcShape205.point.y += 16.0;

bbcShape206.point.x += -15.0;
bbcShape206.point.y += 15.0;

bbcShape207.point.x += -15.0;
bbcShape207.point.y += 14.0;

bbcShape208.point.x += -15.0;
bbcShape208.point.y += 13.0;

bbcShape209.point.x += -15.0;
bbcShape209.point.y += 12.0;

bbcShape210.point.x += -15.0;
bbcShape210.point.y += 11.0;

bbcShape211.point.x += -15.0;
bbcShape211.point.y += 10.0;

bbcShape212.point.x += -15.0;
bbcShape212.point.y += 9.0;

bbcShape213.point.x += -15.0;
bbcShape213.point.y += 8.0;

bbcShape214.point.x += -15.0;
bbcShape214.point.y += 7.0;

bbcShape215.point.x += -15.0;
bbcShape215.point.y += 6.0;

bbcShape216.point.x += -15.0;
bbcShape216.point.y += 5.0;

bbcShape217.point.x += -15.0;
bbcShape217.point.y += 4.0;

bbcShape218.point.x += -15.0;
bbcShape218.point.y += 3.0;

bbcShape219.point.x += -15.0;
bbcShape219.point.y += 2.0;

bbcShape220.point.x += -15.0;
bbcShape220.point.y += 1.0;

bbcShape221.point.x += -15.0;
bbcShape221.point.y += 0.0;

bbcShape222.point.x += -15.0;
bbcShape222.point.y += -1.0;

bbcShape223.point.x += -15.0;
bbcShape223.point.y += -2.0;

bbcShape224.point.x += -15.0;
bbcShape224.point.y += -3.0;

bbcShape225.point.x += -15.0;
bbcShape225.point.y += -4.0;

bbcShape226.point.x += -15.0;
bbcShape226.point.y += -5.0;

bbcShape227.point.x += -15.0;
bbcShape227.point.y += -6.0;

bbcShape228.point.x += -15.0;
bbcShape228.point.y += -7.0;

bbcShape229.point.x += -15.0;
bbcShape229.point.y += -8.0;

bbcShape230.point.x += -15.0;
bbcShape230.point.y += -9.0;

bbcShape231.point.x += -15.0;
bbcShape231.point.y += -10.0;

bbcShape232.point.x += -15.0;
bbcShape232.point.y += -11.0;

bbcShape233.point.x += -15.0;
bbcShape233.point.y += -12.0;

bbcShape234.point.x += -15.0;
bbcShape234.point.y += -13.0;

bbcShape235.point.x += -15.0;
bbcShape235.point.y += -14.0;

bbcShape236.point.x += -15.0;
bbcShape236.point.y += -15.0;

bbcShape237.point.x += -15.0;
bbcShape237.point.y += -16.0;

bbcShape238.point.x += -15.0;
bbcShape238.point.y += -17.0;

bbcShape239.point.x += -15.0;
bbcShape239.point.y += -18.0;

bbcShape240.point.x += -15.0;
bbcShape240.point.y += -19.0;

bbcShape241.point.x += -14.0;
bbcShape241.point.y += 20.0;

bbcShape242.point.x += -14.0;
bbcShape242.point.y += 19.0;

bbcShape243.point.x += -14.0;
bbcShape243.point.y += 18.0;

bbcShape244.point.x += -14.0;
bbcShape244.point.y += 17.0;

bbcShape245.point.x += -14.0;
bbcShape245.point.y += 16.0;

bbcShape246.point.x += -14.0;
bbcShape246.point.y += 15.0;

bbcShape247.point.x += -14.0;
bbcShape247.point.y += 14.0;

bbcShape248.point.x += -14.0;
bbcShape248.point.y += 13.0;

bbcShape249.point.x += -14.0;
bbcShape249.point.y += 12.0;

bbcShape250.point.x += -14.0;
bbcShape250.point.y += 11.0;

bbcShape251.point.x += -14.0;
bbcShape251.point.y += 10.0;

bbcShape252.point.x += -14.0;
bbcShape252.point.y += 9.0;

bbcShape253.point.x += -14.0;
bbcShape253.point.y += 8.0;

bbcShape254.point.x += -14.0;
bbcShape254.point.y += 7.0;

bbcShape255.point.x += -14.0;
bbcShape255.point.y += 6.0;

bbcShape256.point.x += -14.0;
bbcShape256.point.y += 5.0;

bbcShape257.point.x += -14.0;
bbcShape257.point.y += 4.0;

bbcShape258.point.x += -14.0;
bbcShape258.point.y += 3.0;

bbcShape259.point.x += -14.0;
bbcShape259.point.y += 2.0;

bbcShape260.point.x += -14.0;
bbcShape260.point.y += 1.0;

bbcShape261.point.x += -14.0;
bbcShape261.point.y += 0.0;

bbcShape262.point.x += -14.0;
bbcShape262.point.y += -1.0;

bbcShape263.point.x += -14.0;
bbcShape263.point.y += -2.0;

bbcShape264.point.x += -14.0;
bbcShape264.point.y += -3.0;

bbcShape265.point.x += -14.0;
bbcShape265.point.y += -4.0;

bbcShape266.point.x += -14.0;
bbcShape266.point.y += -5.0;

bbcShape267.point.x += -14.0;
bbcShape267.point.y += -6.0;

bbcShape268.point.x += -14.0;
bbcShape268.point.y += -7.0;

bbcShape269.point.x += -14.0;
bbcShape269.point.y += -8.0;

bbcShape270.point.x += -14.0;
bbcShape270.point.y += -9.0;

bbcShape271.point.x += -14.0;
bbcShape271.point.y += -10.0;

bbcShape272.point.x += -14.0;
bbcShape272.point.y += -11.0;

bbcShape273.point.x += -14.0;
bbcShape273.point.y += -12.0;

bbcShape274.point.x += -14.0;
bbcShape274.point.y += -13.0;

bbcShape275.point.x += -14.0;
bbcShape275.point.y += -14.0;

bbcShape276.point.x += -14.0;
bbcShape276.point.y += -15.0;

bbcShape277.point.x += -14.0;
bbcShape277.point.y += -16.0;

bbcShape278.point.x += -14.0;
bbcShape278.point.y += -17.0;

bbcShape279.point.x += -14.0;
bbcShape279.point.y += -18.0;

bbcShape280.point.x += -14.0;
bbcShape280.point.y += -19.0;

bbcShape281.point.x += -13.0;
bbcShape281.point.y += 20.0;

bbcShape282.point.x += -13.0;
bbcShape282.point.y += 19.0;

bbcShape283.point.x += -13.0;
bbcShape283.point.y += 18.0;

bbcShape284.point.x += -13.0;
bbcShape284.point.y += 17.0;

bbcShape285.point.x += -13.0;
bbcShape285.point.y += 16.0;

bbcShape286.point.x += -13.0;
bbcShape286.point.y += 15.0;

bbcShape287.point.x += -13.0;
bbcShape287.point.y += 14.0;

bbcShape288.point.x += -13.0;
bbcShape288.point.y += 13.0;

bbcShape289.point.x += -13.0;
bbcShape289.point.y += 12.0;

bbcShape290.point.x += -13.0;
bbcShape290.point.y += 11.0;

bbcShape291.point.x += -13.0;
bbcShape291.point.y += 10.0;

bbcShape292.point.x += -13.0;
bbcShape292.point.y += 9.0;

bbcShape293.point.x += -13.0;
bbcShape293.point.y += 8.0;

bbcShape294.point.x += -13.0;
bbcShape294.point.y += 7.0;

bbcShape295.point.x += -13.0;
bbcShape295.point.y += 6.0;

bbcShape296.point.x += -13.0;
bbcShape296.point.y += 5.0;

bbcShape297.point.x += -13.0;
bbcShape297.point.y += 4.0;

bbcShape298.point.x += -13.0;
bbcShape298.point.y += 3.0;

bbcShape299.point.x += -13.0;
bbcShape299.point.y += 2.0;

bbcShape300.point.x += -13.0;
bbcShape300.point.y += 1.0;

bbcShape301.point.x += -13.0;
bbcShape301.point.y += 0.0;

bbcShape302.point.x += -13.0;
bbcShape302.point.y += -1.0;

bbcShape303.point.x += -13.0;
bbcShape303.point.y += -2.0;

bbcShape304.point.x += -13.0;
bbcShape304.point.y += -3.0;

bbcShape305.point.x += -13.0;
bbcShape305.point.y += -4.0;

bbcShape306.point.x += -13.0;
bbcShape306.point.y += -5.0;

bbcShape307.point.x += -13.0;
bbcShape307.point.y += -6.0;

bbcShape308.point.x += -13.0;
bbcShape308.point.y += -7.0;

bbcShape309.point.x += -13.0;
bbcShape309.point.y += -8.0;

bbcShape310.point.x += -13.0;
bbcShape310.point.y += -9.0;

bbcShape311.point.x += -13.0;
bbcShape311.point.y += -10.0;

bbcShape312.point.x += -13.0;
bbcShape312.point.y += -11.0;

bbcShape313.point.x += -13.0;
bbcShape313.point.y += -12.0;

bbcShape314.point.x += -13.0;
bbcShape314.point.y += -13.0;

bbcShape315.point.x += -13.0;
bbcShape315.point.y += -14.0;

bbcShape316.point.x += -13.0;
bbcShape316.point.y += -15.0;

bbcShape317.point.x += -13.0;
bbcShape317.point.y += -16.0;

bbcShape318.point.x += -13.0;
bbcShape318.point.y += -17.0;

bbcShape319.point.x += -13.0;
bbcShape319.point.y += -18.0;

bbcShape320.point.x += -13.0;
bbcShape320.point.y += -19.0;

bbcShape321.point.x += -12.0;
bbcShape321.point.y += 20.0;

bbcShape322.point.x += -12.0;
bbcShape322.point.y += 19.0;

bbcShape323.point.x += -12.0;
bbcShape323.point.y += 18.0;

bbcShape324.point.x += -12.0;
bbcShape324.point.y += 17.0;

bbcShape325.point.x += -12.0;
bbcShape325.point.y += 16.0;

bbcShape326.point.x += -12.0;
bbcShape326.point.y += 15.0;

bbcShape327.point.x += -12.0;
bbcShape327.point.y += 14.0;

bbcShape328.point.x += -12.0;
bbcShape328.point.y += 13.0;

bbcShape329.point.x += -12.0;
bbcShape329.point.y += 12.0;

bbcShape330.point.x += -12.0;
bbcShape330.point.y += 11.0;

bbcShape331.point.x += -12.0;
bbcShape331.point.y += 10.0;

bbcShape332.point.x += -12.0;
bbcShape332.point.y += 9.0;

bbcShape333.point.x += -12.0;
bbcShape333.point.y += 8.0;

bbcShape334.point.x += -12.0;
bbcShape334.point.y += 7.0;

bbcShape335.point.x += -12.0;
bbcShape335.point.y += 6.0;

bbcShape336.point.x += -12.0;
bbcShape336.point.y += 5.0;

bbcShape337.point.x += -12.0;
bbcShape337.point.y += 4.0;

bbcShape338.point.x += -12.0;
bbcShape338.point.y += 3.0;

bbcShape339.point.x += -12.0;
bbcShape339.point.y += 2.0;

bbcShape340.point.x += -12.0;
bbcShape340.point.y += 1.0;

bbcShape341.point.x += -12.0;
bbcShape341.point.y += 0.0;

bbcShape342.point.x += -12.0;
bbcShape342.point.y += -1.0;

bbcShape343.point.x += -12.0;
bbcShape343.point.y += -2.0;

bbcShape344.point.x += -12.0;
bbcShape344.point.y += -3.0;

bbcShape345.point.x += -12.0;
bbcShape345.point.y += -4.0;

bbcShape346.point.x += -12.0;
bbcShape346.point.y += -5.0;

bbcShape347.point.x += -12.0;
bbcShape347.point.y += -6.0;

bbcShape348.point.x += -12.0;
bbcShape348.point.y += -7.0;

bbcShape349.point.x += -12.0;
bbcShape349.point.y += -8.0;

bbcShape350.point.x += -12.0;
bbcShape350.point.y += -9.0;

bbcShape351.point.x += -12.0;
bbcShape351.point.y += -10.0;

bbcShape352.point.x += -12.0;
bbcShape352.point.y += -11.0;

bbcShape353.point.x += -12.0;
bbcShape353.point.y += -12.0;

bbcShape354.point.x += -12.0;
bbcShape354.point.y += -13.0;

bbcShape355.point.x += -12.0;
bbcShape355.point.y += -14.0;

bbcShape356.point.x += -12.0;
bbcShape356.point.y += -15.0;

bbcShape357.point.x += -12.0;
bbcShape357.point.y += -16.0;

bbcShape358.point.x += -12.0;
bbcShape358.point.y += -17.0;

bbcShape359.point.x += -12.0;
bbcShape359.point.y += -18.0;

bbcShape360.point.x += -12.0;
bbcShape360.point.y += -19.0;

bbcShape361.point.x += -11.0;
bbcShape361.point.y += 20.0;

bbcShape362.point.x += -11.0;
bbcShape362.point.y += 19.0;

bbcShape363.point.x += -11.0;
bbcShape363.point.y += 18.0;

bbcShape364.point.x += -11.0;
bbcShape364.point.y += 17.0;

bbcShape365.point.x += -11.0;
bbcShape365.point.y += 16.0;

bbcShape366.point.x += -11.0;
bbcShape366.point.y += 15.0;

bbcShape367.point.x += -11.0;
bbcShape367.point.y += 14.0;

bbcShape368.point.x += -11.0;
bbcShape368.point.y += 13.0;

bbcShape369.point.x += -11.0;
bbcShape369.point.y += 12.0;

bbcShape370.point.x += -11.0;
bbcShape370.point.y += 11.0;

bbcShape371.point.x += -11.0;
bbcShape371.point.y += 10.0;

bbcShape372.point.x += -11.0;
bbcShape372.point.y += 9.0;

bbcShape373.point.x += -11.0;
bbcShape373.point.y += 8.0;

bbcShape374.point.x += -11.0;
bbcShape374.point.y += 7.0;

bbcShape375.point.x += -11.0;
bbcShape375.point.y += 6.0;

bbcShape376.point.x += -11.0;
bbcShape376.point.y += 5.0;

bbcShape377.point.x += -11.0;
bbcShape377.point.y += 4.0;

bbcShape378.point.x += -11.0;
bbcShape378.point.y += 3.0;

bbcShape379.point.x += -11.0;
bbcShape379.point.y += 2.0;

bbcShape380.point.x += -11.0;
bbcShape380.point.y += 1.0;

bbcShape381.point.x += -11.0;
bbcShape381.point.y += 0.0;

bbcShape382.point.x += -11.0;
bbcShape382.point.y += -1.0;

bbcShape383.point.x += -11.0;
bbcShape383.point.y += -2.0;

bbcShape384.point.x += -11.0;
bbcShape384.point.y += -3.0;

bbcShape385.point.x += -11.0;
bbcShape385.point.y += -4.0;

bbcShape386.point.x += -11.0;
bbcShape386.point.y += -5.0;

bbcShape387.point.x += -11.0;
bbcShape387.point.y += -6.0;

bbcShape388.point.x += -11.0;
bbcShape388.point.y += -7.0;

bbcShape389.point.x += -11.0;
bbcShape389.point.y += -8.0;

bbcShape390.point.x += -11.0;
bbcShape390.point.y += -9.0;

bbcShape391.point.x += -11.0;
bbcShape391.point.y += -10.0;

bbcShape392.point.x += -11.0;
bbcShape392.point.y += -11.0;

bbcShape393.point.x += -11.0;
bbcShape393.point.y += -12.0;

bbcShape394.point.x += -11.0;
bbcShape394.point.y += -13.0;

bbcShape395.point.x += -11.0;
bbcShape395.point.y += -14.0;

bbcShape396.point.x += -11.0;
bbcShape396.point.y += -15.0;

bbcShape397.point.x += -11.0;
bbcShape397.point.y += -16.0;

bbcShape398.point.x += -11.0;
bbcShape398.point.y += -17.0;

bbcShape399.point.x += -11.0;
bbcShape399.point.y += -18.0;

bbcShape400.point.x += -11.0;
bbcShape400.point.y += -19.0;

bbcShape401.point.x += -10.0;
bbcShape401.point.y += 20.0;

bbcShape402.point.x += -10.0;
bbcShape402.point.y += 19.0;

bbcShape403.point.x += -10.0;
bbcShape403.point.y += 18.0;

bbcShape404.point.x += -10.0;
bbcShape404.point.y += 17.0;

bbcShape405.point.x += -10.0;
bbcShape405.point.y += 16.0;

bbcShape406.point.x += -10.0;
bbcShape406.point.y += 15.0;

bbcShape407.point.x += -10.0;
bbcShape407.point.y += 14.0;

bbcShape408.point.x += -10.0;
bbcShape408.point.y += 13.0;

bbcShape409.point.x += -10.0;
bbcShape409.point.y += 12.0;

bbcShape410.point.x += -10.0;
bbcShape410.point.y += 11.0;

bbcShape411.point.x += -10.0;
bbcShape411.point.y += 10.0;

bbcShape412.point.x += -10.0;
bbcShape412.point.y += 9.0;

bbcShape413.point.x += -10.0;
bbcShape413.point.y += 8.0;

bbcShape414.point.x += -10.0;
bbcShape414.point.y += 7.0;

bbcShape415.point.x += -10.0;
bbcShape415.point.y += 6.0;

bbcShape416.point.x += -10.0;
bbcShape416.point.y += 5.0;

bbcShape417.point.x += -10.0;
bbcShape417.point.y += 4.0;

bbcShape418.point.x += -10.0;
bbcShape418.point.y += 3.0;

bbcShape419.point.x += -10.0;
bbcShape419.point.y += 2.0;

bbcShape420.point.x += -10.0;
bbcShape420.point.y += 1.0;

bbcShape421.point.x += -10.0;
bbcShape421.point.y += 0.0;

bbcShape422.point.x += -10.0;
bbcShape422.point.y += -1.0;

bbcShape423.point.x += -10.0;
bbcShape423.point.y += -2.0;

bbcShape424.point.x += -10.0;
bbcShape424.point.y += -3.0;

bbcShape425.point.x += -10.0;
bbcShape425.point.y += -4.0;

bbcShape426.point.x += -10.0;
bbcShape426.point.y += -5.0;

bbcShape427.point.x += -10.0;
bbcShape427.point.y += -6.0;

bbcShape428.point.x += -10.0;
bbcShape428.point.y += -7.0;

bbcShape429.point.x += -10.0;
bbcShape429.point.y += -8.0;

bbcShape430.point.x += -10.0;
bbcShape430.point.y += -9.0;

bbcShape431.point.x += -10.0;
bbcShape431.point.y += -10.0;

bbcShape432.point.x += -10.0;
bbcShape432.point.y += -11.0;

bbcShape433.point.x += -10.0;
bbcShape433.point.y += -12.0;

bbcShape434.point.x += -10.0;
bbcShape434.point.y += -13.0;

bbcShape435.point.x += -10.0;
bbcShape435.point.y += -14.0;

bbcShape436.point.x += -10.0;
bbcShape436.point.y += -15.0;

bbcShape437.point.x += -10.0;
bbcShape437.point.y += -16.0;

bbcShape438.point.x += -10.0;
bbcShape438.point.y += -17.0;

bbcShape439.point.x += -10.0;
bbcShape439.point.y += -18.0;

bbcShape440.point.x += -10.0;
bbcShape440.point.y += -19.0;

bbcShape441.point.x += -9.0;
bbcShape441.point.y += 20.0;

bbcShape442.point.x += -9.0;
bbcShape442.point.y += 19.0;

bbcShape443.point.x += -9.0;
bbcShape443.point.y += 18.0;

bbcShape444.point.x += -9.0;
bbcShape444.point.y += 17.0;

bbcShape445.point.x += -9.0;
bbcShape445.point.y += 16.0;

bbcShape446.point.x += -9.0;
bbcShape446.point.y += 15.0;

bbcShape447.point.x += -9.0;
bbcShape447.point.y += 14.0;

bbcShape448.point.x += -9.0;
bbcShape448.point.y += 13.0;

bbcShape449.point.x += -9.0;
bbcShape449.point.y += 12.0;

bbcShape450.point.x += -9.0;
bbcShape450.point.y += 11.0;

bbcShape451.point.x += -9.0;
bbcShape451.point.y += 10.0;

bbcShape452.point.x += -9.0;
bbcShape452.point.y += 9.0;

bbcShape453.point.x += -9.0;
bbcShape453.point.y += 8.0;

bbcShape454.point.x += -9.0;
bbcShape454.point.y += 7.0;

bbcShape455.point.x += -9.0;
bbcShape455.point.y += 6.0;

bbcShape456.point.x += -9.0;
bbcShape456.point.y += 5.0;

bbcShape457.point.x += -9.0;
bbcShape457.point.y += 4.0;

bbcShape458.point.x += -9.0;
bbcShape458.point.y += 3.0;

bbcShape459.point.x += -9.0;
bbcShape459.point.y += 2.0;

bbcShape460.point.x += -9.0;
bbcShape460.point.y += 1.0;

bbcShape461.point.x += -9.0;
bbcShape461.point.y += 0.0;

bbcShape462.point.x += -9.0;
bbcShape462.point.y += -1.0;

bbcShape463.point.x += -9.0;
bbcShape463.point.y += -2.0;

bbcShape464.point.x += -9.0;
bbcShape464.point.y += -3.0;

bbcShape465.point.x += -9.0;
bbcShape465.point.y += -4.0;

bbcShape466.point.x += -9.0;
bbcShape466.point.y += -5.0;

bbcShape467.point.x += -9.0;
bbcShape467.point.y += -6.0;

bbcShape468.point.x += -9.0;
bbcShape468.point.y += -7.0;

bbcShape469.point.x += -9.0;
bbcShape469.point.y += -8.0;

bbcShape470.point.x += -9.0;
bbcShape470.point.y += -9.0;

bbcShape471.point.x += -9.0;
bbcShape471.point.y += -10.0;

bbcShape472.point.x += -9.0;
bbcShape472.point.y += -11.0;

bbcShape473.point.x += -9.0;
bbcShape473.point.y += -12.0;

bbcShape474.point.x += -9.0;
bbcShape474.point.y += -13.0;

bbcShape475.point.x += -9.0;
bbcShape475.point.y += -14.0;

bbcShape476.point.x += -9.0;
bbcShape476.point.y += -15.0;

bbcShape477.point.x += -9.0;
bbcShape477.point.y += -16.0;

bbcShape478.point.x += -9.0;
bbcShape478.point.y += -17.0;

bbcShape479.point.x += -9.0;
bbcShape479.point.y += -18.0;

bbcShape480.point.x += -9.0;
bbcShape480.point.y += -19.0;

bbcShape481.point.x += -8.0;
bbcShape481.point.y += 20.0;

bbcShape482.point.x += -8.0;
bbcShape482.point.y += 19.0;

bbcShape483.point.x += -8.0;
bbcShape483.point.y += 18.0;

bbcShape484.point.x += -8.0;
bbcShape484.point.y += 17.0;

bbcShape485.point.x += -8.0;
bbcShape485.point.y += 16.0;

bbcShape486.point.x += -8.0;
bbcShape486.point.y += 15.0;

bbcShape487.point.x += -8.0;
bbcShape487.point.y += 14.0;

bbcShape488.point.x += -8.0;
bbcShape488.point.y += 13.0;

bbcShape489.point.x += -8.0;
bbcShape489.point.y += 12.0;

bbcShape490.point.x += -8.0;
bbcShape490.point.y += 11.0;

bbcShape491.point.x += -8.0;
bbcShape491.point.y += 10.0;

bbcShape492.point.x += -8.0;
bbcShape492.point.y += 9.0;

bbcShape493.point.x += -8.0;
bbcShape493.point.y += 8.0;

bbcShape494.point.x += -8.0;
bbcShape494.point.y += 7.0;

bbcShape495.point.x += -8.0;
bbcShape495.point.y += 6.0;

bbcShape496.point.x += -8.0;
bbcShape496.point.y += 5.0;

bbcShape497.point.x += -8.0;
bbcShape497.point.y += 4.0;

bbcShape498.point.x += -8.0;
bbcShape498.point.y += 3.0;

bbcShape499.point.x += -8.0;
bbcShape499.point.y += 2.0;

bbcShape500.point.x += -8.0;
bbcShape500.point.y += 1.0;

bbcShape501.point.x += -8.0;
bbcShape501.point.y += 0.0;

bbcShape502.point.x += -8.0;
bbcShape502.point.y += -1.0;

bbcShape503.point.x += -8.0;
bbcShape503.point.y += -2.0;

bbcShape504.point.x += -8.0;
bbcShape504.point.y += -3.0;

bbcShape505.point.x += -8.0;
bbcShape505.point.y += -4.0;

bbcShape506.point.x += -8.0;
bbcShape506.point.y += -5.0;

bbcShape507.point.x += -8.0;
bbcShape507.point.y += -6.0;

bbcShape508.point.x += -8.0;
bbcShape508.point.y += -7.0;

bbcShape509.point.x += -8.0;
bbcShape509.point.y += -8.0;

bbcShape510.point.x += -8.0;
bbcShape510.point.y += -9.0;

bbcShape511.point.x += -8.0;
bbcShape511.point.y += -10.0;

bbcShape512.point.x += -8.0;
bbcShape512.point.y += -11.0;

bbcShape513.point.x += -8.0;
bbcShape513.point.y += -12.0;

bbcShape514.point.x += -8.0;
bbcShape514.point.y += -13.0;

bbcShape515.point.x += -8.0;
bbcShape515.point.y += -14.0;

bbcShape516.point.x += -8.0;
bbcShape516.point.y += -15.0;

bbcShape517.point.x += -8.0;
bbcShape517.point.y += -16.0;

bbcShape518.point.x += -8.0;
bbcShape518.point.y += -17.0;

bbcShape519.point.x += -8.0;
bbcShape519.point.y += -18.0;

bbcShape520.point.x += -8.0;
bbcShape520.point.y += -19.0;

bbcShape521.point.x += -7.0;
bbcShape521.point.y += 20.0;

bbcShape522.point.x += -7.0;
bbcShape522.point.y += 19.0;

bbcShape523.point.x += -7.0;
bbcShape523.point.y += 18.0;

bbcShape524.point.x += -7.0;
bbcShape524.point.y += 17.0;

bbcShape525.point.x += -7.0;
bbcShape525.point.y += 16.0;

bbcShape526.point.x += -7.0;
bbcShape526.point.y += 15.0;

bbcShape527.point.x += -7.0;
bbcShape527.point.y += 14.0;

bbcShape528.point.x += -7.0;
bbcShape528.point.y += 13.0;

bbcShape529.point.x += -7.0;
bbcShape529.point.y += 12.0;

bbcShape530.point.x += -7.0;
bbcShape530.point.y += 11.0;

bbcShape531.point.x += -7.0;
bbcShape531.point.y += 10.0;

bbcShape532.point.x += -7.0;
bbcShape532.point.y += 9.0;

bbcShape533.point.x += -7.0;
bbcShape533.point.y += 8.0;

bbcShape534.point.x += -7.0;
bbcShape534.point.y += 7.0;

bbcShape535.point.x += -7.0;
bbcShape535.point.y += 6.0;

bbcShape536.point.x += -7.0;
bbcShape536.point.y += 5.0;

bbcShape537.point.x += -7.0;
bbcShape537.point.y += 4.0;

bbcShape538.point.x += -7.0;
bbcShape538.point.y += 3.0;

bbcShape539.point.x += -7.0;
bbcShape539.point.y += 2.0;

bbcShape540.point.x += -7.0;
bbcShape540.point.y += 1.0;

bbcShape541.point.x += -7.0;
bbcShape541.point.y += 0.0;

bbcShape542.point.x += -7.0;
bbcShape542.point.y += -1.0;

bbcShape543.point.x += -7.0;
bbcShape543.point.y += -2.0;

bbcShape544.point.x += -7.0;
bbcShape544.point.y += -3.0;

bbcShape545.point.x += -7.0;
bbcShape545.point.y += -4.0;

bbcShape546.point.x += -7.0;
bbcShape546.point.y += -5.0;

bbcShape547.point.x += -7.0;
bbcShape547.point.y += -6.0;

bbcShape548.point.x += -7.0;
bbcShape548.point.y += -7.0;

bbcShape549.point.x += -7.0;
bbcShape549.point.y += -8.0;

bbcShape550.point.x += -7.0;
bbcShape550.point.y += -9.0;

bbcShape551.point.x += -7.0;
bbcShape551.point.y += -10.0;

bbcShape552.point.x += -7.0;
bbcShape552.point.y += -11.0;

bbcShape553.point.x += -7.0;
bbcShape553.point.y += -12.0;

bbcShape554.point.x += -7.0;
bbcShape554.point.y += -13.0;

bbcShape555.point.x += -7.0;
bbcShape555.point.y += -14.0;

bbcShape556.point.x += -7.0;
bbcShape556.point.y += -15.0;

bbcShape557.point.x += -7.0;
bbcShape557.point.y += -16.0;

bbcShape558.point.x += -7.0;
bbcShape558.point.y += -17.0;

bbcShape559.point.x += -7.0;
bbcShape559.point.y += -18.0;

bbcShape560.point.x += -7.0;
bbcShape560.point.y += -19.0;

bbcShape561.point.x += -6.0;
bbcShape561.point.y += 20.0;

bbcShape562.point.x += -6.0;
bbcShape562.point.y += 19.0;

bbcShape563.point.x += -6.0;
bbcShape563.point.y += 18.0;

bbcShape564.point.x += -6.0;
bbcShape564.point.y += 17.0;

bbcShape565.point.x += -6.0;
bbcShape565.point.y += 16.0;

bbcShape566.point.x += -6.0;
bbcShape566.point.y += 15.0;

bbcShape567.point.x += -6.0;
bbcShape567.point.y += 14.0;

bbcShape568.point.x += -6.0;
bbcShape568.point.y += 13.0;

bbcShape569.point.x += -6.0;
bbcShape569.point.y += 12.0;

bbcShape570.point.x += -6.0;
bbcShape570.point.y += 11.0;

bbcShape571.point.x += -6.0;
bbcShape571.point.y += 10.0;

bbcShape572.point.x += -6.0;
bbcShape572.point.y += 9.0;

bbcShape573.point.x += -6.0;
bbcShape573.point.y += 8.0;

bbcShape574.point.x += -6.0;
bbcShape574.point.y += 7.0;

bbcShape575.point.x += -6.0;
bbcShape575.point.y += 6.0;

bbcShape576.point.x += -6.0;
bbcShape576.point.y += 5.0;

bbcShape577.point.x += -6.0;
bbcShape577.point.y += 4.0;

bbcShape578.point.x += -6.0;
bbcShape578.point.y += 3.0;

bbcShape579.point.x += -6.0;
bbcShape579.point.y += 2.0;

bbcShape580.point.x += -6.0;
bbcShape580.point.y += 1.0;

bbcShape581.point.x += -6.0;
bbcShape581.point.y += 0.0;

bbcShape582.point.x += -6.0;
bbcShape582.point.y += -1.0;

bbcShape583.point.x += -6.0;
bbcShape583.point.y += -2.0;

bbcShape584.point.x += -6.0;
bbcShape584.point.y += -3.0;

bbcShape585.point.x += -6.0;
bbcShape585.point.y += -4.0;

bbcShape586.point.x += -6.0;
bbcShape586.point.y += -5.0;

bbcShape587.point.x += -6.0;
bbcShape587.point.y += -6.0;

bbcShape588.point.x += -6.0;
bbcShape588.point.y += -7.0;

bbcShape589.point.x += -6.0;
bbcShape589.point.y += -8.0;

bbcShape590.point.x += -6.0;
bbcShape590.point.y += -9.0;

bbcShape591.point.x += -6.0;
bbcShape591.point.y += -10.0;

bbcShape592.point.x += -6.0;
bbcShape592.point.y += -11.0;

bbcShape593.point.x += -6.0;
bbcShape593.point.y += -12.0;

bbcShape594.point.x += -6.0;
bbcShape594.point.y += -13.0;

bbcShape595.point.x += -6.0;
bbcShape595.point.y += -14.0;

bbcShape596.point.x += -6.0;
bbcShape596.point.y += -15.0;

bbcShape597.point.x += -6.0;
bbcShape597.point.y += -16.0;

bbcShape598.point.x += -6.0;
bbcShape598.point.y += -17.0;

bbcShape599.point.x += -6.0;
bbcShape599.point.y += -18.0;

bbcShape600.point.x += -6.0;
bbcShape600.point.y += -19.0;

bbcShape601.point.x += -5.0;
bbcShape601.point.y += 20.0;

bbcShape602.point.x += -5.0;
bbcShape602.point.y += 19.0;

bbcShape603.point.x += -5.0;
bbcShape603.point.y += 18.0;

bbcShape604.point.x += -5.0;
bbcShape604.point.y += 17.0;

bbcShape605.point.x += -5.0;
bbcShape605.point.y += 16.0;

bbcShape606.point.x += -5.0;
bbcShape606.point.y += 15.0;

bbcShape607.point.x += -5.0;
bbcShape607.point.y += 14.0;

bbcShape608.point.x += -5.0;
bbcShape608.point.y += 13.0;

bbcShape609.point.x += -5.0;
bbcShape609.point.y += 12.0;

bbcShape610.point.x += -5.0;
bbcShape610.point.y += 11.0;

bbcShape611.point.x += -5.0;
bbcShape611.point.y += 10.0;

bbcShape612.point.x += -5.0;
bbcShape612.point.y += 9.0;

bbcShape613.point.x += -5.0;
bbcShape613.point.y += 8.0;

bbcShape614.point.x += -5.0;
bbcShape614.point.y += 7.0;

bbcShape615.point.x += -5.0;
bbcShape615.point.y += 6.0;

bbcShape616.point.x += -5.0;
bbcShape616.point.y += 5.0;

bbcShape617.point.x += -5.0;
bbcShape617.point.y += 4.0;

bbcShape618.point.x += -5.0;
bbcShape618.point.y += 3.0;

bbcShape619.point.x += -5.0;
bbcShape619.point.y += 2.0;

bbcShape620.point.x += -5.0;
bbcShape620.point.y += 1.0;

bbcShape621.point.x += -5.0;
bbcShape621.point.y += 0.0;

bbcShape622.point.x += -5.0;
bbcShape622.point.y += -1.0;

bbcShape623.point.x += -5.0;
bbcShape623.point.y += -2.0;

bbcShape624.point.x += -5.0;
bbcShape624.point.y += -3.0;

bbcShape625.point.x += -5.0;
bbcShape625.point.y += -4.0;

bbcShape626.point.x += -5.0;
bbcShape626.point.y += -5.0;

bbcShape627.point.x += -5.0;
bbcShape627.point.y += -6.0;

bbcShape628.point.x += -5.0;
bbcShape628.point.y += -7.0;

bbcShape629.point.x += -5.0;
bbcShape629.point.y += -8.0;

bbcShape630.point.x += -5.0;
bbcShape630.point.y += -9.0;

bbcShape631.point.x += -5.0;
bbcShape631.point.y += -10.0;

bbcShape632.point.x += -5.0;
bbcShape632.point.y += -11.0;

bbcShape633.point.x += -5.0;
bbcShape633.point.y += -12.0;

bbcShape634.point.x += -5.0;
bbcShape634.point.y += -13.0;

bbcShape635.point.x += -5.0;
bbcShape635.point.y += -14.0;

bbcShape636.point.x += -5.0;
bbcShape636.point.y += -15.0;

bbcShape637.point.x += -5.0;
bbcShape637.point.y += -16.0;

bbcShape638.point.x += -5.0;
bbcShape638.point.y += -17.0;

bbcShape639.point.x += -5.0;
bbcShape639.point.y += -18.0;

bbcShape640.point.x += -5.0;
bbcShape640.point.y += -19.0;

bbcShape641.point.x += -4.0;
bbcShape641.point.y += 20.0;

bbcShape642.point.x += -4.0;
bbcShape642.point.y += 19.0;

bbcShape643.point.x += -4.0;
bbcShape643.point.y += 18.0;

bbcShape644.point.x += -4.0;
bbcShape644.point.y += 17.0;

bbcShape645.point.x += -4.0;
bbcShape645.point.y += 16.0;

bbcShape646.point.x += -4.0;
bbcShape646.point.y += 15.0;

bbcShape647.point.x += -4.0;
bbcShape647.point.y += 14.0;

bbcShape648.point.x += -4.0;
bbcShape648.point.y += 13.0;

bbcShape649.point.x += -4.0;
bbcShape649.point.y += 12.0;

bbcShape650.point.x += -4.0;
bbcShape650.point.y += 11.0;

bbcShape651.point.x += -4.0;
bbcShape651.point.y += 10.0;

bbcShape652.point.x += -4.0;
bbcShape652.point.y += 9.0;

bbcShape653.point.x += -4.0;
bbcShape653.point.y += 8.0;

bbcShape654.point.x += -4.0;
bbcShape654.point.y += 7.0;

bbcShape655.point.x += -4.0;
bbcShape655.point.y += 6.0;

bbcShape656.point.x += -4.0;
bbcShape656.point.y += 5.0;

bbcShape657.point.x += -4.0;
bbcShape657.point.y += 4.0;

bbcShape658.point.x += -4.0;
bbcShape658.point.y += 3.0;

bbcShape659.point.x += -4.0;
bbcShape659.point.y += 2.0;

bbcShape660.point.x += -4.0;
bbcShape660.point.y += 1.0;

bbcShape661.point.x += -4.0;
bbcShape661.point.y += 0.0;

bbcShape662.point.x += -4.0;
bbcShape662.point.y += -1.0;

bbcShape663.point.x += -4.0;
bbcShape663.point.y += -2.0;

bbcShape664.point.x += -4.0;
bbcShape664.point.y += -3.0;

bbcShape665.point.x += -4.0;
bbcShape665.point.y += -4.0;

bbcShape666.point.x += -4.0;
bbcShape666.point.y += -5.0;

bbcShape667.point.x += -4.0;
bbcShape667.point.y += -6.0;

bbcShape668.point.x += -4.0;
bbcShape668.point.y += -7.0;

bbcShape669.point.x += -4.0;
bbcShape669.point.y += -8.0;

bbcShape670.point.x += -4.0;
bbcShape670.point.y += -9.0;

bbcShape671.point.x += -4.0;
bbcShape671.point.y += -10.0;

bbcShape672.point.x += -4.0;
bbcShape672.point.y += -11.0;

bbcShape673.point.x += -4.0;
bbcShape673.point.y += -12.0;

bbcShape674.point.x += -4.0;
bbcShape674.point.y += -13.0;

bbcShape675.point.x += -4.0;
bbcShape675.point.y += -14.0;

bbcShape676.point.x += -4.0;
bbcShape676.point.y += -15.0;

bbcShape677.point.x += -4.0;
bbcShape677.point.y += -16.0;

bbcShape678.point.x += -4.0;
bbcShape678.point.y += -17.0;

bbcShape679.point.x += -4.0;
bbcShape679.point.y += -18.0;

bbcShape680.point.x += -4.0;
bbcShape680.point.y += -19.0;

bbcShape681.point.x += -3.0;
bbcShape681.point.y += 20.0;

bbcShape682.point.x += -3.0;
bbcShape682.point.y += 19.0;

bbcShape683.point.x += -3.0;
bbcShape683.point.y += 18.0;

bbcShape684.point.x += -3.0;
bbcShape684.point.y += 17.0;

bbcShape685.point.x += -3.0;
bbcShape685.point.y += 16.0;

bbcShape686.point.x += -3.0;
bbcShape686.point.y += 15.0;

bbcShape687.point.x += -3.0;
bbcShape687.point.y += 14.0;

bbcShape688.point.x += -3.0;
bbcShape688.point.y += 13.0;

bbcShape689.point.x += -3.0;
bbcShape689.point.y += 12.0;

bbcShape690.point.x += -3.0;
bbcShape690.point.y += 11.0;

bbcShape691.point.x += -3.0;
bbcShape691.point.y += 10.0;

bbcShape692.point.x += -3.0;
bbcShape692.point.y += 9.0;

bbcShape693.point.x += -3.0;
bbcShape693.point.y += 8.0;

bbcShape694.point.x += -3.0;
bbcShape694.point.y += 7.0;

bbcShape695.point.x += -3.0;
bbcShape695.point.y += 6.0;

bbcShape696.point.x += -3.0;
bbcShape696.point.y += 5.0;

bbcShape697.point.x += -3.0;
bbcShape697.point.y += 4.0;

bbcShape698.point.x += -3.0;
bbcShape698.point.y += 3.0;

bbcShape699.point.x += -3.0;
bbcShape699.point.y += 2.0;

bbcShape700.point.x += -3.0;
bbcShape700.point.y += 1.0;

bbcShape701.point.x += -3.0;
bbcShape701.point.y += 0.0;

bbcShape702.point.x += -3.0;
bbcShape702.point.y += -1.0;

bbcShape703.point.x += -3.0;
bbcShape703.point.y += -2.0;

bbcShape704.point.x += -3.0;
bbcShape704.point.y += -3.0;

bbcShape705.point.x += -3.0;
bbcShape705.point.y += -4.0;

bbcShape706.point.x += -3.0;
bbcShape706.point.y += -5.0;

bbcShape707.point.x += -3.0;
bbcShape707.point.y += -6.0;

bbcShape708.point.x += -3.0;
bbcShape708.point.y += -7.0;

bbcShape709.point.x += -3.0;
bbcShape709.point.y += -8.0;

bbcShape710.point.x += -3.0;
bbcShape710.point.y += -9.0;

bbcShape711.point.x += -3.0;
bbcShape711.point.y += -10.0;

bbcShape712.point.x += -3.0;
bbcShape712.point.y += -11.0;

bbcShape713.point.x += -3.0;
bbcShape713.point.y += -12.0;

bbcShape714.point.x += -3.0;
bbcShape714.point.y += -13.0;

bbcShape715.point.x += -3.0;
bbcShape715.point.y += -14.0;

bbcShape716.point.x += -3.0;
bbcShape716.point.y += -15.0;

bbcShape717.point.x += -3.0;
bbcShape717.point.y += -16.0;

bbcShape718.point.x += -3.0;
bbcShape718.point.y += -17.0;

bbcShape719.point.x += -3.0;
bbcShape719.point.y += -18.0;

bbcShape720.point.x += -3.0;
bbcShape720.point.y += -19.0;

bbcShape721.point.x += -2.0;
bbcShape721.point.y += 20.0;

bbcShape722.point.x += -2.0;
bbcShape722.point.y += 19.0;

bbcShape723.point.x += -2.0;
bbcShape723.point.y += 18.0;

bbcShape724.point.x += -2.0;
bbcShape724.point.y += 17.0;

bbcShape725.point.x += -2.0;
bbcShape725.point.y += 16.0;

bbcShape726.point.x += -2.0;
bbcShape726.point.y += 15.0;

bbcShape727.point.x += -2.0;
bbcShape727.point.y += 14.0;

bbcShape728.point.x += -2.0;
bbcShape728.point.y += 13.0;

bbcShape729.point.x += -2.0;
bbcShape729.point.y += 12.0;

bbcShape730.point.x += -2.0;
bbcShape730.point.y += 11.0;

bbcShape731.point.x += -2.0;
bbcShape731.point.y += 10.0;

bbcShape732.point.x += -2.0;
bbcShape732.point.y += 9.0;

bbcShape733.point.x += -2.0;
bbcShape733.point.y += 8.0;

bbcShape734.point.x += -2.0;
bbcShape734.point.y += 7.0;

bbcShape735.point.x += -2.0;
bbcShape735.point.y += 6.0;

bbcShape736.point.x += -2.0;
bbcShape736.point.y += 5.0;

bbcShape737.point.x += -2.0;
bbcShape737.point.y += 4.0;

bbcShape738.point.x += -2.0;
bbcShape738.point.y += 3.0;

bbcShape739.point.x += -2.0;
bbcShape739.point.y += 2.0;

bbcShape740.point.x += -2.0;
bbcShape740.point.y += 1.0;

bbcShape741.point.x += -2.0;
bbcShape741.point.y += 0.0;

bbcShape742.point.x += -2.0;
bbcShape742.point.y += -1.0;

bbcShape743.point.x += -2.0;
bbcShape743.point.y += -2.0;

bbcShape744.point.x += -2.0;
bbcShape744.point.y += -3.0;

bbcShape745.point.x += -2.0;
bbcShape745.point.y += -4.0;

bbcShape746.point.x += -2.0;
bbcShape746.point.y += -5.0;

bbcShape747.point.x += -2.0;
bbcShape747.point.y += -6.0;

bbcShape748.point.x += -2.0;
bbcShape748.point.y += -7.0;

bbcShape749.point.x += -2.0;
bbcShape749.point.y += -8.0;

bbcShape750.point.x += -2.0;
bbcShape750.point.y += -9.0;

bbcShape751.point.x += -2.0;
bbcShape751.point.y += -10.0;

bbcShape752.point.x += -2.0;
bbcShape752.point.y += -11.0;

bbcShape753.point.x += -2.0;
bbcShape753.point.y += -12.0;

bbcShape754.point.x += -2.0;
bbcShape754.point.y += -13.0;

bbcShape755.point.x += -2.0;
bbcShape755.point.y += -14.0;

bbcShape756.point.x += -2.0;
bbcShape756.point.y += -15.0;

bbcShape757.point.x += -2.0;
bbcShape757.point.y += -16.0;

bbcShape758.point.x += -2.0;
bbcShape758.point.y += -17.0;

bbcShape759.point.x += -2.0;
bbcShape759.point.y += -18.0;

bbcShape760.point.x += -2.0;
bbcShape760.point.y += -19.0;

bbcShape761.point.x += -1.0;
bbcShape761.point.y += 20.0;

bbcShape762.point.x += -1.0;
bbcShape762.point.y += 19.0;

bbcShape763.point.x += -1.0;
bbcShape763.point.y += 18.0;

bbcShape764.point.x += -1.0;
bbcShape764.point.y += 17.0;

bbcShape765.point.x += -1.0;
bbcShape765.point.y += 16.0;

bbcShape766.point.x += -1.0;
bbcShape766.point.y += 15.0;

bbcShape767.point.x += -1.0;
bbcShape767.point.y += 14.0;

bbcShape768.point.x += -1.0;
bbcShape768.point.y += 13.0;

bbcShape769.point.x += -1.0;
bbcShape769.point.y += 12.0;

bbcShape770.point.x += -1.0;
bbcShape770.point.y += 11.0;

bbcShape771.point.x += -1.0;
bbcShape771.point.y += 10.0;

bbcShape772.point.x += -1.0;
bbcShape772.point.y += 9.0;

bbcShape773.point.x += -1.0;
bbcShape773.point.y += 8.0;

bbcShape774.point.x += -1.0;
bbcShape774.point.y += 7.0;

bbcShape775.point.x += -1.0;
bbcShape775.point.y += 6.0;

bbcShape776.point.x += -1.0;
bbcShape776.point.y += 5.0;

bbcShape777.point.x += -1.0;
bbcShape777.point.y += 4.0;

bbcShape778.point.x += -1.0;
bbcShape778.point.y += 3.0;

bbcShape779.point.x += -1.0;
bbcShape779.point.y += 2.0;

bbcShape780.point.x += -1.0;
bbcShape780.point.y += 1.0;

bbcShape781.point.x += -1.0;
bbcShape781.point.y += 0.0;

bbcShape782.point.x += -1.0;
bbcShape782.point.y += -1.0;

bbcShape783.point.x += -1.0;
bbcShape783.point.y += -2.0;

bbcShape784.point.x += -1.0;
bbcShape784.point.y += -3.0;

bbcShape785.point.x += -1.0;
bbcShape785.point.y += -4.0;

bbcShape786.point.x += -1.0;
bbcShape786.point.y += -5.0;

bbcShape787.point.x += -1.0;
bbcShape787.point.y += -6.0;

bbcShape788.point.x += -1.0;
bbcShape788.point.y += -7.0;

bbcShape789.point.x += -1.0;
bbcShape789.point.y += -8.0;

bbcShape790.point.x += -1.0;
bbcShape790.point.y += -9.0;

bbcShape791.point.x += -1.0;
bbcShape791.point.y += -10.0;

bbcShape792.point.x += -1.0;
bbcShape792.point.y += -11.0;

bbcShape793.point.x += -1.0;
bbcShape793.point.y += -12.0;

bbcShape794.point.x += -1.0;
bbcShape794.point.y += -13.0;

bbcShape795.point.x += -1.0;
bbcShape795.point.y += -14.0;

bbcShape796.point.x += -1.0;
bbcShape796.point.y += -15.0;

bbcShape797.point.x += -1.0;
bbcShape797.point.y += -16.0;

bbcShape798.point.x += -1.0;
bbcShape798.point.y += -17.0;

bbcShape799.point.x += -1.0;
bbcShape799.point.y += -18.0;

bbcShape800.point.x += -1.0;
bbcShape800.point.y += -19.0;

bbcShape801.point.x += 0.0;
bbcShape801.point.y += 20.0;

bbcShape802.point.x += 0.0;
bbcShape802.point.y += 19.0;

bbcShape803.point.x += 0.0;
bbcShape803.point.y += 18.0;

bbcShape804.point.x += 0.0;
bbcShape804.point.y += 17.0;

bbcShape805.point.x += 0.0;
bbcShape805.point.y += 16.0;

bbcShape806.point.x += 0.0;
bbcShape806.point.y += 15.0;

bbcShape807.point.x += 0.0;
bbcShape807.point.y += 14.0;

bbcShape808.point.x += 0.0;
bbcShape808.point.y += 13.0;

bbcShape809.point.x += 0.0;
bbcShape809.point.y += 12.0;

bbcShape810.point.x += 0.0;
bbcShape810.point.y += 11.0;

bbcShape811.point.x += 0.0;
bbcShape811.point.y += 10.0;

bbcShape812.point.x += 0.0;
bbcShape812.point.y += 9.0;

bbcShape813.point.x += 0.0;
bbcShape813.point.y += 8.0;

bbcShape814.point.x += 0.0;
bbcShape814.point.y += 7.0;

bbcShape815.point.x += 0.0;
bbcShape815.point.y += 6.0;

bbcShape816.point.x += 0.0;
bbcShape816.point.y += 5.0;

bbcShape817.point.x += 0.0;
bbcShape817.point.y += 4.0;

bbcShape818.point.x += 0.0;
bbcShape818.point.y += 3.0;

bbcShape819.point.x += 0.0;
bbcShape819.point.y += 2.0;

bbcShape820.point.x += 0.0;
bbcShape820.point.y += 1.0;

bbcShape821.point.x += 0.0;
bbcShape821.point.y += 0.0;

bbcShape822.point.x += 0.0;
bbcShape822.point.y += -1.0;

bbcShape823.point.x += 0.0;
bbcShape823.point.y += -2.0;

bbcShape824.point.x += 0.0;
bbcShape824.point.y += -3.0;

bbcShape825.point.x += 0.0;
bbcShape825.point.y += -4.0;

bbcShape826.point.x += 0.0;
bbcShape826.point.y += -5.0;

bbcShape827.point.x += 0.0;
bbcShape827.point.y += -6.0;

bbcShape828.point.x += 0.0;
bbcShape828.point.y += -7.0;

bbcShape829.point.x += 0.0;
bbcShape829.point.y += -8.0;

bbcShape830.point.x += 0.0;
bbcShape830.point.y += -9.0;

bbcShape831.point.x += 0.0;
bbcShape831.point.y += -10.0;

bbcShape832.point.x += 0.0;
bbcShape832.point.y += -11.0;

bbcShape833.point.x += 0.0;
bbcShape833.point.y += -12.0;

bbcShape834.point.x += 0.0;
bbcShape834.point.y += -13.0;

bbcShape835.point.x += 0.0;
bbcShape835.point.y += -14.0;

bbcShape836.point.x += 0.0;
bbcShape836.point.y += -15.0;

bbcShape837.point.x += 0.0;
bbcShape837.point.y += -16.0;

bbcShape838.point.x += 0.0;
bbcShape838.point.y += -17.0;

bbcShape839.point.x += 0.0;
bbcShape839.point.y += -18.0;

bbcShape840.point.x += 0.0;
bbcShape840.point.y += -19.0;

bbcShape841.point.x += 1.0;
bbcShape841.point.y += 20.0;

bbcShape842.point.x += 1.0;
bbcShape842.point.y += 19.0;

bbcShape843.point.x += 1.0;
bbcShape843.point.y += 18.0;

bbcShape844.point.x += 1.0;
bbcShape844.point.y += 17.0;

bbcShape845.point.x += 1.0;
bbcShape845.point.y += 16.0;

bbcShape846.point.x += 1.0;
bbcShape846.point.y += 15.0;

bbcShape847.point.x += 1.0;
bbcShape847.point.y += 14.0;

bbcShape848.point.x += 1.0;
bbcShape848.point.y += 13.0;

bbcShape849.point.x += 1.0;
bbcShape849.point.y += 12.0;

bbcShape850.point.x += 1.0;
bbcShape850.point.y += 11.0;

bbcShape851.point.x += 1.0;
bbcShape851.point.y += 10.0;

bbcShape852.point.x += 1.0;
bbcShape852.point.y += 9.0;

bbcShape853.point.x += 1.0;
bbcShape853.point.y += 8.0;

bbcShape854.point.x += 1.0;
bbcShape854.point.y += 7.0;

bbcShape855.point.x += 1.0;
bbcShape855.point.y += 6.0;

bbcShape856.point.x += 1.0;
bbcShape856.point.y += 5.0;

bbcShape857.point.x += 1.0;
bbcShape857.point.y += 4.0;

bbcShape858.point.x += 1.0;
bbcShape858.point.y += 3.0;

bbcShape859.point.x += 1.0;
bbcShape859.point.y += 2.0;

bbcShape860.point.x += 1.0;
bbcShape860.point.y += 1.0;

bbcShape861.point.x += 1.0;
bbcShape861.point.y += 0.0;

bbcShape862.point.x += 1.0;
bbcShape862.point.y += -1.0;

bbcShape863.point.x += 1.0;
bbcShape863.point.y += -2.0;

bbcShape864.point.x += 1.0;
bbcShape864.point.y += -3.0;

bbcShape865.point.x += 1.0;
bbcShape865.point.y += -4.0;

bbcShape866.point.x += 1.0;
bbcShape866.point.y += -5.0;

bbcShape867.point.x += 1.0;
bbcShape867.point.y += -6.0;

bbcShape868.point.x += 1.0;
bbcShape868.point.y += -7.0;

bbcShape869.point.x += 1.0;
bbcShape869.point.y += -8.0;

bbcShape870.point.x += 1.0;
bbcShape870.point.y += -9.0;

bbcShape871.point.x += 1.0;
bbcShape871.point.y += -10.0;

bbcShape872.point.x += 1.0;
bbcShape872.point.y += -11.0;

bbcShape873.point.x += 1.0;
bbcShape873.point.y += -12.0;

bbcShape874.point.x += 1.0;
bbcShape874.point.y += -13.0;

bbcShape875.point.x += 1.0;
bbcShape875.point.y += -14.0;

bbcShape876.point.x += 1.0;
bbcShape876.point.y += -15.0;

bbcShape877.point.x += 1.0;
bbcShape877.point.y += -16.0;

bbcShape878.point.x += 1.0;
bbcShape878.point.y += -17.0;

bbcShape879.point.x += 1.0;
bbcShape879.point.y += -18.0;

bbcShape880.point.x += 1.0;
bbcShape880.point.y += -19.0;

bbcShape881.point.x += 2.0;
bbcShape881.point.y += 20.0;

bbcShape882.point.x += 2.0;
bbcShape882.point.y += 19.0;

bbcShape883.point.x += 2.0;
bbcShape883.point.y += 18.0;

bbcShape884.point.x += 2.0;
bbcShape884.point.y += 17.0;

bbcShape885.point.x += 2.0;
bbcShape885.point.y += 16.0;

bbcShape886.point.x += 2.0;
bbcShape886.point.y += 15.0;

bbcShape887.point.x += 2.0;
bbcShape887.point.y += 14.0;

bbcShape888.point.x += 2.0;
bbcShape888.point.y += 13.0;

bbcShape889.point.x += 2.0;
bbcShape889.point.y += 12.0;

bbcShape890.point.x += 2.0;
bbcShape890.point.y += 11.0;

bbcShape891.point.x += 2.0;
bbcShape891.point.y += 10.0;

bbcShape892.point.x += 2.0;
bbcShape892.point.y += 9.0;

bbcShape893.point.x += 2.0;
bbcShape893.point.y += 8.0;

bbcShape894.point.x += 2.0;
bbcShape894.point.y += 7.0;

bbcShape895.point.x += 2.0;
bbcShape895.point.y += 6.0;

bbcShape896.point.x += 2.0;
bbcShape896.point.y += 5.0;

bbcShape897.point.x += 2.0;
bbcShape897.point.y += 4.0;

bbcShape898.point.x += 2.0;
bbcShape898.point.y += 3.0;

bbcShape899.point.x += 2.0;
bbcShape899.point.y += 2.0;

bbcShape900.point.x += 2.0;
bbcShape900.point.y += 1.0;

bbcShape901.point.x += 2.0;
bbcShape901.point.y += 0.0;

bbcShape902.point.x += 2.0;
bbcShape902.point.y += -1.0;

bbcShape903.point.x += 2.0;
bbcShape903.point.y += -2.0;

bbcShape904.point.x += 2.0;
bbcShape904.point.y += -3.0;

bbcShape905.point.x += 2.0;
bbcShape905.point.y += -4.0;

bbcShape906.point.x += 2.0;
bbcShape906.point.y += -5.0;

bbcShape907.point.x += 2.0;
bbcShape907.point.y += -6.0;

bbcShape908.point.x += 2.0;
bbcShape908.point.y += -7.0;

bbcShape909.point.x += 2.0;
bbcShape909.point.y += -8.0;

bbcShape910.point.x += 2.0;
bbcShape910.point.y += -9.0;

bbcShape911.point.x += 2.0;
bbcShape911.point.y += -10.0;

bbcShape912.point.x += 2.0;
bbcShape912.point.y += -11.0;

bbcShape913.point.x += 2.0;
bbcShape913.point.y += -12.0;

bbcShape914.point.x += 2.0;
bbcShape914.point.y += -13.0;

bbcShape915.point.x += 2.0;
bbcShape915.point.y += -14.0;

bbcShape916.point.x += 2.0;
bbcShape916.point.y += -15.0;

bbcShape917.point.x += 2.0;
bbcShape917.point.y += -16.0;

bbcShape918.point.x += 2.0;
bbcShape918.point.y += -17.0;

bbcShape919.point.x += 2.0;
bbcShape919.point.y += -18.0;

bbcShape920.point.x += 2.0;
bbcShape920.point.y += -19.0;

bbcShape921.point.x += 3.0;
bbcShape921.point.y += 20.0;

bbcShape922.point.x += 3.0;
bbcShape922.point.y += 19.0;

bbcShape923.point.x += 3.0;
bbcShape923.point.y += 18.0;

bbcShape924.point.x += 3.0;
bbcShape924.point.y += 17.0;

bbcShape925.point.x += 3.0;
bbcShape925.point.y += 16.0;

bbcShape926.point.x += 3.0;
bbcShape926.point.y += 15.0;

bbcShape927.point.x += 3.0;
bbcShape927.point.y += 14.0;

bbcShape928.point.x += 3.0;
bbcShape928.point.y += 13.0;

bbcShape929.point.x += 3.0;
bbcShape929.point.y += 12.0;

bbcShape930.point.x += 3.0;
bbcShape930.point.y += 11.0;

bbcShape931.point.x += 3.0;
bbcShape931.point.y += 10.0;

bbcShape932.point.x += 3.0;
bbcShape932.point.y += 9.0;

bbcShape933.point.x += 3.0;
bbcShape933.point.y += 8.0;

bbcShape934.point.x += 3.0;
bbcShape934.point.y += 7.0;

bbcShape935.point.x += 3.0;
bbcShape935.point.y += 6.0;

bbcShape936.point.x += 3.0;
bbcShape936.point.y += 5.0;

bbcShape937.point.x += 3.0;
bbcShape937.point.y += 4.0;

bbcShape938.point.x += 3.0;
bbcShape938.point.y += 3.0;

bbcShape939.point.x += 3.0;
bbcShape939.point.y += 2.0;

bbcShape940.point.x += 3.0;
bbcShape940.point.y += 1.0;

bbcShape941.point.x += 3.0;
bbcShape941.point.y += 0.0;

bbcShape942.point.x += 3.0;
bbcShape942.point.y += -1.0;

bbcShape943.point.x += 3.0;
bbcShape943.point.y += -2.0;

bbcShape944.point.x += 3.0;
bbcShape944.point.y += -3.0;

bbcShape945.point.x += 3.0;
bbcShape945.point.y += -4.0;

bbcShape946.point.x += 3.0;
bbcShape946.point.y += -5.0;

bbcShape947.point.x += 3.0;
bbcShape947.point.y += -6.0;

bbcShape948.point.x += 3.0;
bbcShape948.point.y += -7.0;

bbcShape949.point.x += 3.0;
bbcShape949.point.y += -8.0;

bbcShape950.point.x += 3.0;
bbcShape950.point.y += -9.0;

bbcShape951.point.x += 3.0;
bbcShape951.point.y += -10.0;

bbcShape952.point.x += 3.0;
bbcShape952.point.y += -11.0;

bbcShape953.point.x += 3.0;
bbcShape953.point.y += -12.0;

bbcShape954.point.x += 3.0;
bbcShape954.point.y += -13.0;

bbcShape955.point.x += 3.0;
bbcShape955.point.y += -14.0;

bbcShape956.point.x += 3.0;
bbcShape956.point.y += -15.0;

bbcShape957.point.x += 3.0;
bbcShape957.point.y += -16.0;

bbcShape958.point.x += 3.0;
bbcShape958.point.y += -17.0;

bbcShape959.point.x += 3.0;
bbcShape959.point.y += -18.0;

bbcShape960.point.x += 3.0;
bbcShape960.point.y += -19.0;

bbcShape961.point.x += 4.0;
bbcShape961.point.y += 20.0;

bbcShape962.point.x += 4.0;
bbcShape962.point.y += 19.0;

bbcShape963.point.x += 4.0;
bbcShape963.point.y += 18.0;

bbcShape964.point.x += 4.0;
bbcShape964.point.y += 17.0;

bbcShape965.point.x += 4.0;
bbcShape965.point.y += 16.0;

bbcShape966.point.x += 4.0;
bbcShape966.point.y += 15.0;

bbcShape967.point.x += 4.0;
bbcShape967.point.y += 14.0;

bbcShape968.point.x += 4.0;
bbcShape968.point.y += 13.0;

bbcShape969.point.x += 4.0;
bbcShape969.point.y += 12.0;

bbcShape970.point.x += 4.0;
bbcShape970.point.y += 11.0;

bbcShape971.point.x += 4.0;
bbcShape971.point.y += 10.0;

bbcShape972.point.x += 4.0;
bbcShape972.point.y += 9.0;

bbcShape973.point.x += 4.0;
bbcShape973.point.y += 8.0;

bbcShape974.point.x += 4.0;
bbcShape974.point.y += 7.0;

bbcShape975.point.x += 4.0;
bbcShape975.point.y += 6.0;

bbcShape976.point.x += 4.0;
bbcShape976.point.y += 5.0;

bbcShape977.point.x += 4.0;
bbcShape977.point.y += 4.0;

bbcShape978.point.x += 4.0;
bbcShape978.point.y += 3.0;

bbcShape979.point.x += 4.0;
bbcShape979.point.y += 2.0;

bbcShape980.point.x += 4.0;
bbcShape980.point.y += 1.0;

bbcShape981.point.x += 4.0;
bbcShape981.point.y += 0.0;

bbcShape982.point.x += 4.0;
bbcShape982.point.y += -1.0;

bbcShape983.point.x += 4.0;
bbcShape983.point.y += -2.0;

bbcShape984.point.x += 4.0;
bbcShape984.point.y += -3.0;

bbcShape985.point.x += 4.0;
bbcShape985.point.y += -4.0;

bbcShape986.point.x += 4.0;
bbcShape986.point.y += -5.0;

bbcShape987.point.x += 4.0;
bbcShape987.point.y += -6.0;

bbcShape988.point.x += 4.0;
bbcShape988.point.y += -7.0;

bbcShape989.point.x += 4.0;
bbcShape989.point.y += -8.0;

bbcShape990.point.x += 4.0;
bbcShape990.point.y += -9.0;

bbcShape991.point.x += 4.0;
bbcShape991.point.y += -10.0;

bbcShape992.point.x += 4.0;
bbcShape992.point.y += -11.0;

bbcShape993.point.x += 4.0;
bbcShape993.point.y += -12.0;

bbcShape994.point.x += 4.0;
bbcShape994.point.y += -13.0;

bbcShape995.point.x += 4.0;
bbcShape995.point.y += -14.0;

bbcShape996.point.x += 4.0;
bbcShape996.point.y += -15.0;

bbcShape997.point.x += 4.0;
bbcShape997.point.y += -16.0;

bbcShape998.point.x += 4.0;
bbcShape998.point.y += -17.0;

bbcShape999.point.x += 4.0;
bbcShape999.point.y += -18.0;

bbcShape1000.point.x += 4.0;
bbcShape1000.point.y += -19.0;

bbcShape1001.point.x += 5.0;
bbcShape1001.point.y += 20.0;

bbcShape1002.point.x += 5.0;
bbcShape1002.point.y += 19.0;

bbcShape1003.point.x += 5.0;
bbcShape1003.point.y += 18.0;

bbcShape1004.point.x += 5.0;
bbcShape1004.point.y += 17.0;

bbcShape1005.point.x += 5.0;
bbcShape1005.point.y += 16.0;

bbcShape1006.point.x += 5.0;
bbcShape1006.point.y += 15.0;

bbcShape1007.point.x += 5.0;
bbcShape1007.point.y += 14.0;

bbcShape1008.point.x += 5.0;
bbcShape1008.point.y += 13.0;

bbcShape1009.point.x += 5.0;
bbcShape1009.point.y += 12.0;

bbcShape1010.point.x += 5.0;
bbcShape1010.point.y += 11.0;

bbcShape1011.point.x += 5.0;
bbcShape1011.point.y += 10.0;

bbcShape1012.point.x += 5.0;
bbcShape1012.point.y += 9.0;

bbcShape1013.point.x += 5.0;
bbcShape1013.point.y += 8.0;

bbcShape1014.point.x += 5.0;
bbcShape1014.point.y += 7.0;

bbcShape1015.point.x += 5.0;
bbcShape1015.point.y += 6.0;

bbcShape1016.point.x += 5.0;
bbcShape1016.point.y += 5.0;

bbcShape1017.point.x += 5.0;
bbcShape1017.point.y += 4.0;

bbcShape1018.point.x += 5.0;
bbcShape1018.point.y += 3.0;

bbcShape1019.point.x += 5.0;
bbcShape1019.point.y += 2.0;

bbcShape1020.point.x += 5.0;
bbcShape1020.point.y += 1.0;

bbcShape1021.point.x += 5.0;
bbcShape1021.point.y += 0.0;

bbcShape1022.point.x += 5.0;
bbcShape1022.point.y += -1.0;

bbcShape1023.point.x += 5.0;
bbcShape1023.point.y += -2.0;

bbcShape1024.point.x += 5.0;
bbcShape1024.point.y += -3.0;

bbcShape1025.point.x += 5.0;
bbcShape1025.point.y += -4.0;

bbcShape1026.point.x += 5.0;
bbcShape1026.point.y += -5.0;

bbcShape1027.point.x += 5.0;
bbcShape1027.point.y += -6.0;

bbcShape1028.point.x += 5.0;
bbcShape1028.point.y += -7.0;

bbcShape1029.point.x += 5.0;
bbcShape1029.point.y += -8.0;

bbcShape1030.point.x += 5.0;
bbcShape1030.point.y += -9.0;

bbcShape1031.point.x += 5.0;
bbcShape1031.point.y += -10.0;

bbcShape1032.point.x += 5.0;
bbcShape1032.point.y += -11.0;

bbcShape1033.point.x += 5.0;
bbcShape1033.point.y += -12.0;

bbcShape1034.point.x += 5.0;
bbcShape1034.point.y += -13.0;

bbcShape1035.point.x += 5.0;
bbcShape1035.point.y += -14.0;

bbcShape1036.point.x += 5.0;
bbcShape1036.point.y += -15.0;

bbcShape1037.point.x += 5.0;
bbcShape1037.point.y += -16.0;

bbcShape1038.point.x += 5.0;
bbcShape1038.point.y += -17.0;

bbcShape1039.point.x += 5.0;
bbcShape1039.point.y += -18.0;

bbcShape1040.point.x += 5.0;
bbcShape1040.point.y += -19.0;

bbcShape1041.point.x += 6.0;
bbcShape1041.point.y += 20.0;

bbcShape1042.point.x += 6.0;
bbcShape1042.point.y += 19.0;

bbcShape1043.point.x += 6.0;
bbcShape1043.point.y += 18.0;

bbcShape1044.point.x += 6.0;
bbcShape1044.point.y += 17.0;

bbcShape1045.point.x += 6.0;
bbcShape1045.point.y += 16.0;

bbcShape1046.point.x += 6.0;
bbcShape1046.point.y += 15.0;

bbcShape1047.point.x += 6.0;
bbcShape1047.point.y += 14.0;

bbcShape1048.point.x += 6.0;
bbcShape1048.point.y += 13.0;

bbcShape1049.point.x += 6.0;
bbcShape1049.point.y += 12.0;

bbcShape1050.point.x += 6.0;
bbcShape1050.point.y += 11.0;

bbcShape1051.point.x += 6.0;
bbcShape1051.point.y += 10.0;

bbcShape1052.point.x += 6.0;
bbcShape1052.point.y += 9.0;

bbcShape1053.point.x += 6.0;
bbcShape1053.point.y += 8.0;

bbcShape1054.point.x += 6.0;
bbcShape1054.point.y += 7.0;

bbcShape1055.point.x += 6.0;
bbcShape1055.point.y += 6.0;

bbcShape1056.point.x += 6.0;
bbcShape1056.point.y += 5.0;

bbcShape1057.point.x += 6.0;
bbcShape1057.point.y += 4.0;

bbcShape1058.point.x += 6.0;
bbcShape1058.point.y += 3.0;

bbcShape1059.point.x += 6.0;
bbcShape1059.point.y += 2.0;

bbcShape1060.point.x += 6.0;
bbcShape1060.point.y += 1.0;

bbcShape1061.point.x += 6.0;
bbcShape1061.point.y += 0.0;

bbcShape1062.point.x += 6.0;
bbcShape1062.point.y += -1.0;

bbcShape1063.point.x += 6.0;
bbcShape1063.point.y += -2.0;

bbcShape1064.point.x += 6.0;
bbcShape1064.point.y += -3.0;

bbcShape1065.point.x += 6.0;
bbcShape1065.point.y += -4.0;

bbcShape1066.point.x += 6.0;
bbcShape1066.point.y += -5.0;

bbcShape1067.point.x += 6.0;
bbcShape1067.point.y += -6.0;

bbcShape1068.point.x += 6.0;
bbcShape1068.point.y += -7.0;

bbcShape1069.point.x += 6.0;
bbcShape1069.point.y += -8.0;

bbcShape1070.point.x += 6.0;
bbcShape1070.point.y += -9.0;

bbcShape1071.point.x += 6.0;
bbcShape1071.point.y += -10.0;

bbcShape1072.point.x += 6.0;
bbcShape1072.point.y += -11.0;

bbcShape1073.point.x += 6.0;
bbcShape1073.point.y += -12.0;

bbcShape1074.point.x += 6.0;
bbcShape1074.point.y += -13.0;

bbcShape1075.point.x += 6.0;
bbcShape1075.point.y += -14.0;

bbcShape1076.point.x += 6.0;
bbcShape1076.point.y += -15.0;

bbcShape1077.point.x += 6.0;
bbcShape1077.point.y += -16.0;

bbcShape1078.point.x += 6.0;
bbcShape1078.point.y += -17.0;

bbcShape1079.point.x += 6.0;
bbcShape1079.point.y += -18.0;

bbcShape1080.point.x += 6.0;
bbcShape1080.point.y += -19.0;

bbcShape1081.point.x += 7.0;
bbcShape1081.point.y += 20.0;

bbcShape1082.point.x += 7.0;
bbcShape1082.point.y += 19.0;

bbcShape1083.point.x += 7.0;
bbcShape1083.point.y += 18.0;

bbcShape1084.point.x += 7.0;
bbcShape1084.point.y += 17.0;

bbcShape1085.point.x += 7.0;
bbcShape1085.point.y += 16.0;

bbcShape1086.point.x += 7.0;
bbcShape1086.point.y += 15.0;

bbcShape1087.point.x += 7.0;
bbcShape1087.point.y += 14.0;

bbcShape1088.point.x += 7.0;
bbcShape1088.point.y += 13.0;

bbcShape1089.point.x += 7.0;
bbcShape1089.point.y += 12.0;

bbcShape1090.point.x += 7.0;
bbcShape1090.point.y += 11.0;

bbcShape1091.point.x += 7.0;
bbcShape1091.point.y += 10.0;

bbcShape1092.point.x += 7.0;
bbcShape1092.point.y += 9.0;

bbcShape1093.point.x += 7.0;
bbcShape1093.point.y += 8.0;

bbcShape1094.point.x += 7.0;
bbcShape1094.point.y += 7.0;

bbcShape1095.point.x += 7.0;
bbcShape1095.point.y += 6.0;

bbcShape1096.point.x += 7.0;
bbcShape1096.point.y += 5.0;

bbcShape1097.point.x += 7.0;
bbcShape1097.point.y += 4.0;

bbcShape1098.point.x += 7.0;
bbcShape1098.point.y += 3.0;

bbcShape1099.point.x += 7.0;
bbcShape1099.point.y += 2.0;

bbcShape1100.point.x += 7.0;
bbcShape1100.point.y += 1.0;

bbcShape1101.point.x += 7.0;
bbcShape1101.point.y += 0.0;

bbcShape1102.point.x += 7.0;
bbcShape1102.point.y += -1.0;

bbcShape1103.point.x += 7.0;
bbcShape1103.point.y += -2.0;

bbcShape1104.point.x += 7.0;
bbcShape1104.point.y += -3.0;

bbcShape1105.point.x += 7.0;
bbcShape1105.point.y += -4.0;

bbcShape1106.point.x += 7.0;
bbcShape1106.point.y += -5.0;

bbcShape1107.point.x += 7.0;
bbcShape1107.point.y += -6.0;

bbcShape1108.point.x += 7.0;
bbcShape1108.point.y += -7.0;

bbcShape1109.point.x += 7.0;
bbcShape1109.point.y += -8.0;

bbcShape1110.point.x += 7.0;
bbcShape1110.point.y += -9.0;

bbcShape1111.point.x += 7.0;
bbcShape1111.point.y += -10.0;

bbcShape1112.point.x += 7.0;
bbcShape1112.point.y += -11.0;

bbcShape1113.point.x += 7.0;
bbcShape1113.point.y += -12.0;

bbcShape1114.point.x += 7.0;
bbcShape1114.point.y += -13.0;

bbcShape1115.point.x += 7.0;
bbcShape1115.point.y += -14.0;

bbcShape1116.point.x += 7.0;
bbcShape1116.point.y += -15.0;

bbcShape1117.point.x += 7.0;
bbcShape1117.point.y += -16.0;

bbcShape1118.point.x += 7.0;
bbcShape1118.point.y += -17.0;

bbcShape1119.point.x += 7.0;
bbcShape1119.point.y += -18.0;

bbcShape1120.point.x += 7.0;
bbcShape1120.point.y += -19.0;

bbcShape1121.point.x += 8.0;
bbcShape1121.point.y += 20.0;

bbcShape1122.point.x += 8.0;
bbcShape1122.point.y += 19.0;

bbcShape1123.point.x += 8.0;
bbcShape1123.point.y += 18.0;

bbcShape1124.point.x += 8.0;
bbcShape1124.point.y += 17.0;

bbcShape1125.point.x += 8.0;
bbcShape1125.point.y += 16.0;

bbcShape1126.point.x += 8.0;
bbcShape1126.point.y += 15.0;

bbcShape1127.point.x += 8.0;
bbcShape1127.point.y += 14.0;

bbcShape1128.point.x += 8.0;
bbcShape1128.point.y += 13.0;

bbcShape1129.point.x += 8.0;
bbcShape1129.point.y += 12.0;

bbcShape1130.point.x += 8.0;
bbcShape1130.point.y += 11.0;

bbcShape1131.point.x += 8.0;
bbcShape1131.point.y += 10.0;

bbcShape1132.point.x += 8.0;
bbcShape1132.point.y += 9.0;

bbcShape1133.point.x += 8.0;
bbcShape1133.point.y += 8.0;

bbcShape1134.point.x += 8.0;
bbcShape1134.point.y += 7.0;

bbcShape1135.point.x += 8.0;
bbcShape1135.point.y += 6.0;

bbcShape1136.point.x += 8.0;
bbcShape1136.point.y += 5.0;

bbcShape1137.point.x += 8.0;
bbcShape1137.point.y += 4.0;

bbcShape1138.point.x += 8.0;
bbcShape1138.point.y += 3.0;

bbcShape1139.point.x += 8.0;
bbcShape1139.point.y += 2.0;

bbcShape1140.point.x += 8.0;
bbcShape1140.point.y += 1.0;

bbcShape1141.point.x += 8.0;
bbcShape1141.point.y += 0.0;

bbcShape1142.point.x += 8.0;
bbcShape1142.point.y += -1.0;

bbcShape1143.point.x += 8.0;
bbcShape1143.point.y += -2.0;

bbcShape1144.point.x += 8.0;
bbcShape1144.point.y += -3.0;

bbcShape1145.point.x += 8.0;
bbcShape1145.point.y += -4.0;

bbcShape1146.point.x += 8.0;
bbcShape1146.point.y += -5.0;

bbcShape1147.point.x += 8.0;
bbcShape1147.point.y += -6.0;

bbcShape1148.point.x += 8.0;
bbcShape1148.point.y += -7.0;

bbcShape1149.point.x += 8.0;
bbcShape1149.point.y += -8.0;

bbcShape1150.point.x += 8.0;
bbcShape1150.point.y += -9.0;

bbcShape1151.point.x += 8.0;
bbcShape1151.point.y += -10.0;

bbcShape1152.point.x += 8.0;
bbcShape1152.point.y += -11.0;

bbcShape1153.point.x += 8.0;
bbcShape1153.point.y += -12.0;

bbcShape1154.point.x += 8.0;
bbcShape1154.point.y += -13.0;

bbcShape1155.point.x += 8.0;
bbcShape1155.point.y += -14.0;

bbcShape1156.point.x += 8.0;
bbcShape1156.point.y += -15.0;

bbcShape1157.point.x += 8.0;
bbcShape1157.point.y += -16.0;

bbcShape1158.point.x += 8.0;
bbcShape1158.point.y += -17.0;

bbcShape1159.point.x += 8.0;
bbcShape1159.point.y += -18.0;

bbcShape1160.point.x += 8.0;
bbcShape1160.point.y += -19.0;

bbcShape1161.point.x += 9.0;
bbcShape1161.point.y += 20.0;

bbcShape1162.point.x += 9.0;
bbcShape1162.point.y += 19.0;

bbcShape1163.point.x += 9.0;
bbcShape1163.point.y += 18.0;

bbcShape1164.point.x += 9.0;
bbcShape1164.point.y += 17.0;

bbcShape1165.point.x += 9.0;
bbcShape1165.point.y += 16.0;

bbcShape1166.point.x += 9.0;
bbcShape1166.point.y += 15.0;

bbcShape1167.point.x += 9.0;
bbcShape1167.point.y += 14.0;

bbcShape1168.point.x += 9.0;
bbcShape1168.point.y += 13.0;

bbcShape1169.point.x += 9.0;
bbcShape1169.point.y += 12.0;

bbcShape1170.point.x += 9.0;
bbcShape1170.point.y += 11.0;

bbcShape1171.point.x += 9.0;
bbcShape1171.point.y += 10.0;

bbcShape1172.point.x += 9.0;
bbcShape1172.point.y += 9.0;

bbcShape1173.point.x += 9.0;
bbcShape1173.point.y += 8.0;

bbcShape1174.point.x += 9.0;
bbcShape1174.point.y += 7.0;

bbcShape1175.point.x += 9.0;
bbcShape1175.point.y += 6.0;

bbcShape1176.point.x += 9.0;
bbcShape1176.point.y += 5.0;

bbcShape1177.point.x += 9.0;
bbcShape1177.point.y += 4.0;

bbcShape1178.point.x += 9.0;
bbcShape1178.point.y += 3.0;

bbcShape1179.point.x += 9.0;
bbcShape1179.point.y += 2.0;

bbcShape1180.point.x += 9.0;
bbcShape1180.point.y += 1.0;

bbcShape1181.point.x += 9.0;
bbcShape1181.point.y += 0.0;

bbcShape1182.point.x += 9.0;
bbcShape1182.point.y += -1.0;

bbcShape1183.point.x += 9.0;
bbcShape1183.point.y += -2.0;

bbcShape1184.point.x += 9.0;
bbcShape1184.point.y += -3.0;

bbcShape1185.point.x += 9.0;
bbcShape1185.point.y += -4.0;

bbcShape1186.point.x += 9.0;
bbcShape1186.point.y += -5.0;

bbcShape1187.point.x += 9.0;
bbcShape1187.point.y += -6.0;

bbcShape1188.point.x += 9.0;
bbcShape1188.point.y += -7.0;

bbcShape1189.point.x += 9.0;
bbcShape1189.point.y += -8.0;

bbcShape1190.point.x += 9.0;
bbcShape1190.point.y += -9.0;

bbcShape1191.point.x += 9.0;
bbcShape1191.point.y += -10.0;

bbcShape1192.point.x += 9.0;
bbcShape1192.point.y += -11.0;

bbcShape1193.point.x += 9.0;
bbcShape1193.point.y += -12.0;

bbcShape1194.point.x += 9.0;
bbcShape1194.point.y += -13.0;

bbcShape1195.point.x += 9.0;
bbcShape1195.point.y += -14.0;

bbcShape1196.point.x += 9.0;
bbcShape1196.point.y += -15.0;

bbcShape1197.point.x += 9.0;
bbcShape1197.point.y += -16.0;

bbcShape1198.point.x += 9.0;
bbcShape1198.point.y += -17.0;

bbcShape1199.point.x += 9.0;
bbcShape1199.point.y += -18.0;

bbcShape1200.point.x += 9.0;
bbcShape1200.point.y += -19.0;

bbcShape1201.point.x += 10.0;
bbcShape1201.point.y += 20.0;

bbcShape1202.point.x += 10.0;
bbcShape1202.point.y += 19.0;

bbcShape1203.point.x += 10.0;
bbcShape1203.point.y += 18.0;

bbcShape1204.point.x += 10.0;
bbcShape1204.point.y += 17.0;

bbcShape1205.point.x += 10.0;
bbcShape1205.point.y += 16.0;

bbcShape1206.point.x += 10.0;
bbcShape1206.point.y += 15.0;

bbcShape1207.point.x += 10.0;
bbcShape1207.point.y += 14.0;

bbcShape1208.point.x += 10.0;
bbcShape1208.point.y += 13.0;

bbcShape1209.point.x += 10.0;
bbcShape1209.point.y += 12.0;

bbcShape1210.point.x += 10.0;
bbcShape1210.point.y += 11.0;

bbcShape1211.point.x += 10.0;
bbcShape1211.point.y += 10.0;

bbcShape1212.point.x += 10.0;
bbcShape1212.point.y += 9.0;

bbcShape1213.point.x += 10.0;
bbcShape1213.point.y += 8.0;

bbcShape1214.point.x += 10.0;
bbcShape1214.point.y += 7.0;

bbcShape1215.point.x += 10.0;
bbcShape1215.point.y += 6.0;

bbcShape1216.point.x += 10.0;
bbcShape1216.point.y += 5.0;

bbcShape1217.point.x += 10.0;
bbcShape1217.point.y += 4.0;

bbcShape1218.point.x += 10.0;
bbcShape1218.point.y += 3.0;

bbcShape1219.point.x += 10.0;
bbcShape1219.point.y += 2.0;

bbcShape1220.point.x += 10.0;
bbcShape1220.point.y += 1.0;

bbcShape1221.point.x += 10.0;
bbcShape1221.point.y += 0.0;

bbcShape1222.point.x += 10.0;
bbcShape1222.point.y += -1.0;

bbcShape1223.point.x += 10.0;
bbcShape1223.point.y += -2.0;

bbcShape1224.point.x += 10.0;
bbcShape1224.point.y += -3.0;

bbcShape1225.point.x += 10.0;
bbcShape1225.point.y += -4.0;

bbcShape1226.point.x += 10.0;
bbcShape1226.point.y += -5.0;

bbcShape1227.point.x += 10.0;
bbcShape1227.point.y += -6.0;

bbcShape1228.point.x += 10.0;
bbcShape1228.point.y += -7.0;

bbcShape1229.point.x += 10.0;
bbcShape1229.point.y += -8.0;

bbcShape1230.point.x += 10.0;
bbcShape1230.point.y += -9.0;

bbcShape1231.point.x += 10.0;
bbcShape1231.point.y += -10.0;

bbcShape1232.point.x += 10.0;
bbcShape1232.point.y += -11.0;

bbcShape1233.point.x += 10.0;
bbcShape1233.point.y += -12.0;

bbcShape1234.point.x += 10.0;
bbcShape1234.point.y += -13.0;

bbcShape1235.point.x += 10.0;
bbcShape1235.point.y += -14.0;

bbcShape1236.point.x += 10.0;
bbcShape1236.point.y += -15.0;

bbcShape1237.point.x += 10.0;
bbcShape1237.point.y += -16.0;

bbcShape1238.point.x += 10.0;
bbcShape1238.point.y += -17.0;

bbcShape1239.point.x += 10.0;
bbcShape1239.point.y += -18.0;

bbcShape1240.point.x += 10.0;
bbcShape1240.point.y += -19.0;

bbcShape1241.point.x += 11.0;
bbcShape1241.point.y += 20.0;

bbcShape1242.point.x += 11.0;
bbcShape1242.point.y += 19.0;

bbcShape1243.point.x += 11.0;
bbcShape1243.point.y += 18.0;

bbcShape1244.point.x += 11.0;
bbcShape1244.point.y += 17.0;

bbcShape1245.point.x += 11.0;
bbcShape1245.point.y += 16.0;

bbcShape1246.point.x += 11.0;
bbcShape1246.point.y += 15.0;

bbcShape1247.point.x += 11.0;
bbcShape1247.point.y += 14.0;

bbcShape1248.point.x += 11.0;
bbcShape1248.point.y += 13.0;

bbcShape1249.point.x += 11.0;
bbcShape1249.point.y += 12.0;

bbcShape1250.point.x += 11.0;
bbcShape1250.point.y += 11.0;

bbcShape1251.point.x += 11.0;
bbcShape1251.point.y += 10.0;

bbcShape1252.point.x += 11.0;
bbcShape1252.point.y += 9.0;

bbcShape1253.point.x += 11.0;
bbcShape1253.point.y += 8.0;

bbcShape1254.point.x += 11.0;
bbcShape1254.point.y += 7.0;

bbcShape1255.point.x += 11.0;
bbcShape1255.point.y += 6.0;

bbcShape1256.point.x += 11.0;
bbcShape1256.point.y += 5.0;

bbcShape1257.point.x += 11.0;
bbcShape1257.point.y += 4.0;

bbcShape1258.point.x += 11.0;
bbcShape1258.point.y += 3.0;

bbcShape1259.point.x += 11.0;
bbcShape1259.point.y += 2.0;

bbcShape1260.point.x += 11.0;
bbcShape1260.point.y += 1.0;

bbcShape1261.point.x += 11.0;
bbcShape1261.point.y += 0.0;

bbcShape1262.point.x += 11.0;
bbcShape1262.point.y += -1.0;

bbcShape1263.point.x += 11.0;
bbcShape1263.point.y += -2.0;

bbcShape1264.point.x += 11.0;
bbcShape1264.point.y += -3.0;

bbcShape1265.point.x += 11.0;
bbcShape1265.point.y += -4.0;

bbcShape1266.point.x += 11.0;
bbcShape1266.point.y += -5.0;

bbcShape1267.point.x += 11.0;
bbcShape1267.point.y += -6.0;

bbcShape1268.point.x += 11.0;
bbcShape1268.point.y += -7.0;

bbcShape1269.point.x += 11.0;
bbcShape1269.point.y += -8.0;

bbcShape1270.point.x += 11.0;
bbcShape1270.point.y += -9.0;

bbcShape1271.point.x += 11.0;
bbcShape1271.point.y += -10.0;

bbcShape1272.point.x += 11.0;
bbcShape1272.point.y += -11.0;

bbcShape1273.point.x += 11.0;
bbcShape1273.point.y += -12.0;

bbcShape1274.point.x += 11.0;
bbcShape1274.point.y += -13.0;

bbcShape1275.point.x += 11.0;
bbcShape1275.point.y += -14.0;

bbcShape1276.point.x += 11.0;
bbcShape1276.point.y += -15.0;

bbcShape1277.point.x += 11.0;
bbcShape1277.point.y += -16.0;

bbcShape1278.point.x += 11.0;
bbcShape1278.point.y += -17.0;

bbcShape1279.point.x += 11.0;
bbcShape1279.point.y += -18.0;

bbcShape1280.point.x += 11.0;
bbcShape1280.point.y += -19.0;

bbcShape1281.point.x += 12.0;
bbcShape1281.point.y += 20.0;

bbcShape1282.point.x += 12.0;
bbcShape1282.point.y += 19.0;

bbcShape1283.point.x += 12.0;
bbcShape1283.point.y += 18.0;

bbcShape1284.point.x += 12.0;
bbcShape1284.point.y += 17.0;

bbcShape1285.point.x += 12.0;
bbcShape1285.point.y += 16.0;

bbcShape1286.point.x += 12.0;
bbcShape1286.point.y += 15.0;

bbcShape1287.point.x += 12.0;
bbcShape1287.point.y += 14.0;

bbcShape1288.point.x += 12.0;
bbcShape1288.point.y += 13.0;

bbcShape1289.point.x += 12.0;
bbcShape1289.point.y += 12.0;

bbcShape1290.point.x += 12.0;
bbcShape1290.point.y += 11.0;

bbcShape1291.point.x += 12.0;
bbcShape1291.point.y += 10.0;

bbcShape1292.point.x += 12.0;
bbcShape1292.point.y += 9.0;

bbcShape1293.point.x += 12.0;
bbcShape1293.point.y += 8.0;

bbcShape1294.point.x += 12.0;
bbcShape1294.point.y += 7.0;

bbcShape1295.point.x += 12.0;
bbcShape1295.point.y += 6.0;

bbcShape1296.point.x += 12.0;
bbcShape1296.point.y += 5.0;

bbcShape1297.point.x += 12.0;
bbcShape1297.point.y += 4.0;

bbcShape1298.point.x += 12.0;
bbcShape1298.point.y += 3.0;

bbcShape1299.point.x += 12.0;
bbcShape1299.point.y += 2.0;

bbcShape1300.point.x += 12.0;
bbcShape1300.point.y += 1.0;

bbcShape1301.point.x += 12.0;
bbcShape1301.point.y += 0.0;

bbcShape1302.point.x += 12.0;
bbcShape1302.point.y += -1.0;

bbcShape1303.point.x += 12.0;
bbcShape1303.point.y += -2.0;

bbcShape1304.point.x += 12.0;
bbcShape1304.point.y += -3.0;

bbcShape1305.point.x += 12.0;
bbcShape1305.point.y += -4.0;

bbcShape1306.point.x += 12.0;
bbcShape1306.point.y += -5.0;

bbcShape1307.point.x += 12.0;
bbcShape1307.point.y += -6.0;

bbcShape1308.point.x += 12.0;
bbcShape1308.point.y += -7.0;

bbcShape1309.point.x += 12.0;
bbcShape1309.point.y += -8.0;

bbcShape1310.point.x += 12.0;
bbcShape1310.point.y += -9.0;

bbcShape1311.point.x += 12.0;
bbcShape1311.point.y += -10.0;

bbcShape1312.point.x += 12.0;
bbcShape1312.point.y += -11.0;

bbcShape1313.point.x += 12.0;
bbcShape1313.point.y += -12.0;

bbcShape1314.point.x += 12.0;
bbcShape1314.point.y += -13.0;

bbcShape1315.point.x += 12.0;
bbcShape1315.point.y += -14.0;

bbcShape1316.point.x += 12.0;
bbcShape1316.point.y += -15.0;

bbcShape1317.point.x += 12.0;
bbcShape1317.point.y += -16.0;

bbcShape1318.point.x += 12.0;
bbcShape1318.point.y += -17.0;

bbcShape1319.point.x += 12.0;
bbcShape1319.point.y += -18.0;

bbcShape1320.point.x += 12.0;
bbcShape1320.point.y += -19.0;

bbcShape1321.point.x += 13.0;
bbcShape1321.point.y += 20.0;

bbcShape1322.point.x += 13.0;
bbcShape1322.point.y += 19.0;

bbcShape1323.point.x += 13.0;
bbcShape1323.point.y += 18.0;

bbcShape1324.point.x += 13.0;
bbcShape1324.point.y += 17.0;

bbcShape1325.point.x += 13.0;
bbcShape1325.point.y += 16.0;

bbcShape1326.point.x += 13.0;
bbcShape1326.point.y += 15.0;

bbcShape1327.point.x += 13.0;
bbcShape1327.point.y += 14.0;

bbcShape1328.point.x += 13.0;
bbcShape1328.point.y += 13.0;

bbcShape1329.point.x += 13.0;
bbcShape1329.point.y += 12.0;

bbcShape1330.point.x += 13.0;
bbcShape1330.point.y += 11.0;

bbcShape1331.point.x += 13.0;
bbcShape1331.point.y += 10.0;

bbcShape1332.point.x += 13.0;
bbcShape1332.point.y += 9.0;

bbcShape1333.point.x += 13.0;
bbcShape1333.point.y += 8.0;

bbcShape1334.point.x += 13.0;
bbcShape1334.point.y += 7.0;

bbcShape1335.point.x += 13.0;
bbcShape1335.point.y += 6.0;

bbcShape1336.point.x += 13.0;
bbcShape1336.point.y += 5.0;

bbcShape1337.point.x += 13.0;
bbcShape1337.point.y += 4.0;

bbcShape1338.point.x += 13.0;
bbcShape1338.point.y += 3.0;

bbcShape1339.point.x += 13.0;
bbcShape1339.point.y += 2.0;

bbcShape1340.point.x += 13.0;
bbcShape1340.point.y += 1.0;

bbcShape1341.point.x += 13.0;
bbcShape1341.point.y += 0.0;

bbcShape1342.point.x += 13.0;
bbcShape1342.point.y += -1.0;

bbcShape1343.point.x += 13.0;
bbcShape1343.point.y += -2.0;

bbcShape1344.point.x += 13.0;
bbcShape1344.point.y += -3.0;

bbcShape1345.point.x += 13.0;
bbcShape1345.point.y += -4.0;

bbcShape1346.point.x += 13.0;
bbcShape1346.point.y += -5.0;

bbcShape1347.point.x += 13.0;
bbcShape1347.point.y += -6.0;

bbcShape1348.point.x += 13.0;
bbcShape1348.point.y += -7.0;

bbcShape1349.point.x += 13.0;
bbcShape1349.point.y += -8.0;

bbcShape1350.point.x += 13.0;
bbcShape1350.point.y += -9.0;

bbcShape1351.point.x += 13.0;
bbcShape1351.point.y += -10.0;

bbcShape1352.point.x += 13.0;
bbcShape1352.point.y += -11.0;

bbcShape1353.point.x += 13.0;
bbcShape1353.point.y += -12.0;

bbcShape1354.point.x += 13.0;
bbcShape1354.point.y += -13.0;

bbcShape1355.point.x += 13.0;
bbcShape1355.point.y += -14.0;

bbcShape1356.point.x += 13.0;
bbcShape1356.point.y += -15.0;

bbcShape1357.point.x += 13.0;
bbcShape1357.point.y += -16.0;

bbcShape1358.point.x += 13.0;
bbcShape1358.point.y += -17.0;

bbcShape1359.point.x += 13.0;
bbcShape1359.point.y += -18.0;

bbcShape1360.point.x += 13.0;
bbcShape1360.point.y += -19.0;

bbcShape1361.point.x += 14.0;
bbcShape1361.point.y += 20.0;

bbcShape1362.point.x += 14.0;
bbcShape1362.point.y += 19.0;

bbcShape1363.point.x += 14.0;
bbcShape1363.point.y += 18.0;

bbcShape1364.point.x += 14.0;
bbcShape1364.point.y += 17.0;

bbcShape1365.point.x += 14.0;
bbcShape1365.point.y += 16.0;

bbcShape1366.point.x += 14.0;
bbcShape1366.point.y += 15.0;

bbcShape1367.point.x += 14.0;
bbcShape1367.point.y += 14.0;

bbcShape1368.point.x += 14.0;
bbcShape1368.point.y += 13.0;

bbcShape1369.point.x += 14.0;
bbcShape1369.point.y += 12.0;

bbcShape1370.point.x += 14.0;
bbcShape1370.point.y += 11.0;

bbcShape1371.point.x += 14.0;
bbcShape1371.point.y += 10.0;

bbcShape1372.point.x += 14.0;
bbcShape1372.point.y += 9.0;

bbcShape1373.point.x += 14.0;
bbcShape1373.point.y += 8.0;

bbcShape1374.point.x += 14.0;
bbcShape1374.point.y += 7.0;

bbcShape1375.point.x += 14.0;
bbcShape1375.point.y += 6.0;

bbcShape1376.point.x += 14.0;
bbcShape1376.point.y += 5.0;

bbcShape1377.point.x += 14.0;
bbcShape1377.point.y += 4.0;

bbcShape1378.point.x += 14.0;
bbcShape1378.point.y += 3.0;

bbcShape1379.point.x += 14.0;
bbcShape1379.point.y += 2.0;

bbcShape1380.point.x += 14.0;
bbcShape1380.point.y += 1.0;

bbcShape1381.point.x += 14.0;
bbcShape1381.point.y += 0.0;

bbcShape1382.point.x += 14.0;
bbcShape1382.point.y += -1.0;

bbcShape1383.point.x += 14.0;
bbcShape1383.point.y += -2.0;

bbcShape1384.point.x += 14.0;
bbcShape1384.point.y += -3.0;

bbcShape1385.point.x += 14.0;
bbcShape1385.point.y += -4.0;

bbcShape1386.point.x += 14.0;
bbcShape1386.point.y += -5.0;

bbcShape1387.point.x += 14.0;
bbcShape1387.point.y += -6.0;

bbcShape1388.point.x += 14.0;
bbcShape1388.point.y += -7.0;

bbcShape1389.point.x += 14.0;
bbcShape1389.point.y += -8.0;

bbcShape1390.point.x += 14.0;
bbcShape1390.point.y += -9.0;

bbcShape1391.point.x += 14.0;
bbcShape1391.point.y += -10.0;

bbcShape1392.point.x += 14.0;
bbcShape1392.point.y += -11.0;

bbcShape1393.point.x += 14.0;
bbcShape1393.point.y += -12.0;

bbcShape1394.point.x += 14.0;
bbcShape1394.point.y += -13.0;

bbcShape1395.point.x += 14.0;
bbcShape1395.point.y += -14.0;

bbcShape1396.point.x += 14.0;
bbcShape1396.point.y += -15.0;

bbcShape1397.point.x += 14.0;
bbcShape1397.point.y += -16.0;

bbcShape1398.point.x += 14.0;
bbcShape1398.point.y += -17.0;

bbcShape1399.point.x += 14.0;
bbcShape1399.point.y += -18.0;

bbcShape1400.point.x += 14.0;
bbcShape1400.point.y += -19.0;

bbcShape1401.point.x += 15.0;
bbcShape1401.point.y += 20.0;

bbcShape1402.point.x += 15.0;
bbcShape1402.point.y += 19.0;

bbcShape1403.point.x += 15.0;
bbcShape1403.point.y += 18.0;

bbcShape1404.point.x += 15.0;
bbcShape1404.point.y += 17.0;

bbcShape1405.point.x += 15.0;
bbcShape1405.point.y += 16.0;

bbcShape1406.point.x += 15.0;
bbcShape1406.point.y += 15.0;

bbcShape1407.point.x += 15.0;
bbcShape1407.point.y += 14.0;

bbcShape1408.point.x += 15.0;
bbcShape1408.point.y += 13.0;

bbcShape1409.point.x += 15.0;
bbcShape1409.point.y += 12.0;

bbcShape1410.point.x += 15.0;
bbcShape1410.point.y += 11.0;

bbcShape1411.point.x += 15.0;
bbcShape1411.point.y += 10.0;

bbcShape1412.point.x += 15.0;
bbcShape1412.point.y += 9.0;

bbcShape1413.point.x += 15.0;
bbcShape1413.point.y += 8.0;

bbcShape1414.point.x += 15.0;
bbcShape1414.point.y += 7.0;

bbcShape1415.point.x += 15.0;
bbcShape1415.point.y += 6.0;

bbcShape1416.point.x += 15.0;
bbcShape1416.point.y += 5.0;

bbcShape1417.point.x += 15.0;
bbcShape1417.point.y += 4.0;

bbcShape1418.point.x += 15.0;
bbcShape1418.point.y += 3.0;

bbcShape1419.point.x += 15.0;
bbcShape1419.point.y += 2.0;

bbcShape1420.point.x += 15.0;
bbcShape1420.point.y += 1.0;

bbcShape1421.point.x += 15.0;
bbcShape1421.point.y += 0.0;

bbcShape1422.point.x += 15.0;
bbcShape1422.point.y += -1.0;

bbcShape1423.point.x += 15.0;
bbcShape1423.point.y += -2.0;

bbcShape1424.point.x += 15.0;
bbcShape1424.point.y += -3.0;

bbcShape1425.point.x += 15.0;
bbcShape1425.point.y += -4.0;

bbcShape1426.point.x += 15.0;
bbcShape1426.point.y += -5.0;

bbcShape1427.point.x += 15.0;
bbcShape1427.point.y += -6.0;

bbcShape1428.point.x += 15.0;
bbcShape1428.point.y += -7.0;

bbcShape1429.point.x += 15.0;
bbcShape1429.point.y += -8.0;

bbcShape1430.point.x += 15.0;
bbcShape1430.point.y += -9.0;

bbcShape1431.point.x += 15.0;
bbcShape1431.point.y += -10.0;

bbcShape1432.point.x += 15.0;
bbcShape1432.point.y += -11.0;

bbcShape1433.point.x += 15.0;
bbcShape1433.point.y += -12.0;

bbcShape1434.point.x += 15.0;
bbcShape1434.point.y += -13.0;

bbcShape1435.point.x += 15.0;
bbcShape1435.point.y += -14.0;

bbcShape1436.point.x += 15.0;
bbcShape1436.point.y += -15.0;

bbcShape1437.point.x += 15.0;
bbcShape1437.point.y += -16.0;

bbcShape1438.point.x += 15.0;
bbcShape1438.point.y += -17.0;

bbcShape1439.point.x += 15.0;
bbcShape1439.point.y += -18.0;

bbcShape1440.point.x += 15.0;
bbcShape1440.point.y += -19.0;

bbcShape1441.point.x += 16.0;
bbcShape1441.point.y += 20.0;

bbcShape1442.point.x += 16.0;
bbcShape1442.point.y += 19.0;

bbcShape1443.point.x += 16.0;
bbcShape1443.point.y += 18.0;

bbcShape1444.point.x += 16.0;
bbcShape1444.point.y += 17.0;

bbcShape1445.point.x += 16.0;
bbcShape1445.point.y += 16.0;

bbcShape1446.point.x += 16.0;
bbcShape1446.point.y += 15.0;

bbcShape1447.point.x += 16.0;
bbcShape1447.point.y += 14.0;

bbcShape1448.point.x += 16.0;
bbcShape1448.point.y += 13.0;

bbcShape1449.point.x += 16.0;
bbcShape1449.point.y += 12.0;

bbcShape1450.point.x += 16.0;
bbcShape1450.point.y += 11.0;

bbcShape1451.point.x += 16.0;
bbcShape1451.point.y += 10.0;

bbcShape1452.point.x += 16.0;
bbcShape1452.point.y += 9.0;

bbcShape1453.point.x += 16.0;
bbcShape1453.point.y += 8.0;

bbcShape1454.point.x += 16.0;
bbcShape1454.point.y += 7.0;

bbcShape1455.point.x += 16.0;
bbcShape1455.point.y += 6.0;

bbcShape1456.point.x += 16.0;
bbcShape1456.point.y += 5.0;

bbcShape1457.point.x += 16.0;
bbcShape1457.point.y += 4.0;

bbcShape1458.point.x += 16.0;
bbcShape1458.point.y += 3.0;

bbcShape1459.point.x += 16.0;
bbcShape1459.point.y += 2.0;

bbcShape1460.point.x += 16.0;
bbcShape1460.point.y += 1.0;

bbcShape1461.point.x += 16.0;
bbcShape1461.point.y += 0.0;

bbcShape1462.point.x += 16.0;
bbcShape1462.point.y += -1.0;

bbcShape1463.point.x += 16.0;
bbcShape1463.point.y += -2.0;

bbcShape1464.point.x += 16.0;
bbcShape1464.point.y += -3.0;

bbcShape1465.point.x += 16.0;
bbcShape1465.point.y += -4.0;

bbcShape1466.point.x += 16.0;
bbcShape1466.point.y += -5.0;

bbcShape1467.point.x += 16.0;
bbcShape1467.point.y += -6.0;

bbcShape1468.point.x += 16.0;
bbcShape1468.point.y += -7.0;

bbcShape1469.point.x += 16.0;
bbcShape1469.point.y += -8.0;

bbcShape1470.point.x += 16.0;
bbcShape1470.point.y += -9.0;

bbcShape1471.point.x += 16.0;
bbcShape1471.point.y += -10.0;

bbcShape1472.point.x += 16.0;
bbcShape1472.point.y += -11.0;

bbcShape1473.point.x += 16.0;
bbcShape1473.point.y += -12.0;

bbcShape1474.point.x += 16.0;
bbcShape1474.point.y += -13.0;

bbcShape1475.point.x += 16.0;
bbcShape1475.point.y += -14.0;

bbcShape1476.point.x += 16.0;
bbcShape1476.point.y += -15.0;

bbcShape1477.point.x += 16.0;
bbcShape1477.point.y += -16.0;

bbcShape1478.point.x += 16.0;
bbcShape1478.point.y += -17.0;

bbcShape1479.point.x += 16.0;
bbcShape1479.point.y += -18.0;

bbcShape1480.point.x += 16.0;
bbcShape1480.point.y += -19.0;

bbcShape1481.point.x += 17.0;
bbcShape1481.point.y += 20.0;

bbcShape1482.point.x += 17.0;
bbcShape1482.point.y += 19.0;

bbcShape1483.point.x += 17.0;
bbcShape1483.point.y += 18.0;

bbcShape1484.point.x += 17.0;
bbcShape1484.point.y += 17.0;

bbcShape1485.point.x += 17.0;
bbcShape1485.point.y += 16.0;

bbcShape1486.point.x += 17.0;
bbcShape1486.point.y += 15.0;

bbcShape1487.point.x += 17.0;
bbcShape1487.point.y += 14.0;

bbcShape1488.point.x += 17.0;
bbcShape1488.point.y += 13.0;

bbcShape1489.point.x += 17.0;
bbcShape1489.point.y += 12.0;

bbcShape1490.point.x += 17.0;
bbcShape1490.point.y += 11.0;

bbcShape1491.point.x += 17.0;
bbcShape1491.point.y += 10.0;

bbcShape1492.point.x += 17.0;
bbcShape1492.point.y += 9.0;

bbcShape1493.point.x += 17.0;
bbcShape1493.point.y += 8.0;

bbcShape1494.point.x += 17.0;
bbcShape1494.point.y += 7.0;

bbcShape1495.point.x += 17.0;
bbcShape1495.point.y += 6.0;

bbcShape1496.point.x += 17.0;
bbcShape1496.point.y += 5.0;

bbcShape1497.point.x += 17.0;
bbcShape1497.point.y += 4.0;

bbcShape1498.point.x += 17.0;
bbcShape1498.point.y += 3.0;

bbcShape1499.point.x += 17.0;
bbcShape1499.point.y += 2.0;

bbcShape1500.point.x += 17.0;
bbcShape1500.point.y += 1.0;

bbcShape1501.point.x += 17.0;
bbcShape1501.point.y += 0.0;

bbcShape1502.point.x += 17.0;
bbcShape1502.point.y += -1.0;

bbcShape1503.point.x += 17.0;
bbcShape1503.point.y += -2.0;

bbcShape1504.point.x += 17.0;
bbcShape1504.point.y += -3.0;

bbcShape1505.point.x += 17.0;
bbcShape1505.point.y += -4.0;

bbcShape1506.point.x += 17.0;
bbcShape1506.point.y += -5.0;

bbcShape1507.point.x += 17.0;
bbcShape1507.point.y += -6.0;

bbcShape1508.point.x += 17.0;
bbcShape1508.point.y += -7.0;

bbcShape1509.point.x += 17.0;
bbcShape1509.point.y += -8.0;

bbcShape1510.point.x += 17.0;
bbcShape1510.point.y += -9.0;

bbcShape1511.point.x += 17.0;
bbcShape1511.point.y += -10.0;

bbcShape1512.point.x += 17.0;
bbcShape1512.point.y += -11.0;

bbcShape1513.point.x += 17.0;
bbcShape1513.point.y += -12.0;

bbcShape1514.point.x += 17.0;
bbcShape1514.point.y += -13.0;

bbcShape1515.point.x += 17.0;
bbcShape1515.point.y += -14.0;

bbcShape1516.point.x += 17.0;
bbcShape1516.point.y += -15.0;

bbcShape1517.point.x += 17.0;
bbcShape1517.point.y += -16.0;

bbcShape1518.point.x += 17.0;
bbcShape1518.point.y += -17.0;

bbcShape1519.point.x += 17.0;
bbcShape1519.point.y += -18.0;

bbcShape1520.point.x += 17.0;
bbcShape1520.point.y += -19.0;

bbcShape1521.point.x += 18.0;
bbcShape1521.point.y += 20.0;

bbcShape1522.point.x += 18.0;
bbcShape1522.point.y += 19.0;

bbcShape1523.point.x += 18.0;
bbcShape1523.point.y += 18.0;

bbcShape1524.point.x += 18.0;
bbcShape1524.point.y += 17.0;

bbcShape1525.point.x += 18.0;
bbcShape1525.point.y += 16.0;

bbcShape1526.point.x += 18.0;
bbcShape1526.point.y += 15.0;

bbcShape1527.point.x += 18.0;
bbcShape1527.point.y += 14.0;

bbcShape1528.point.x += 18.0;
bbcShape1528.point.y += 13.0;

bbcShape1529.point.x += 18.0;
bbcShape1529.point.y += 12.0;

bbcShape1530.point.x += 18.0;
bbcShape1530.point.y += 11.0;

bbcShape1531.point.x += 18.0;
bbcShape1531.point.y += 10.0;

bbcShape1532.point.x += 18.0;
bbcShape1532.point.y += 9.0;

bbcShape1533.point.x += 18.0;
bbcShape1533.point.y += 8.0;

bbcShape1534.point.x += 18.0;
bbcShape1534.point.y += 7.0;

bbcShape1535.point.x += 18.0;
bbcShape1535.point.y += 6.0;

bbcShape1536.point.x += 18.0;
bbcShape1536.point.y += 5.0;

bbcShape1537.point.x += 18.0;
bbcShape1537.point.y += 4.0;

bbcShape1538.point.x += 18.0;
bbcShape1538.point.y += 3.0;

bbcShape1539.point.x += 18.0;
bbcShape1539.point.y += 2.0;

bbcShape1540.point.x += 18.0;
bbcShape1540.point.y += 1.0;

bbcShape1541.point.x += 18.0;
bbcShape1541.point.y += 0.0;

bbcShape1542.point.x += 18.0;
bbcShape1542.point.y += -1.0;

bbcShape1543.point.x += 18.0;
bbcShape1543.point.y += -2.0;

bbcShape1544.point.x += 18.0;
bbcShape1544.point.y += -3.0;

bbcShape1545.point.x += 18.0;
bbcShape1545.point.y += -4.0;

bbcShape1546.point.x += 18.0;
bbcShape1546.point.y += -5.0;

bbcShape1547.point.x += 18.0;
bbcShape1547.point.y += -6.0;

bbcShape1548.point.x += 18.0;
bbcShape1548.point.y += -7.0;

bbcShape1549.point.x += 18.0;
bbcShape1549.point.y += -8.0;

bbcShape1550.point.x += 18.0;
bbcShape1550.point.y += -9.0;

bbcShape1551.point.x += 18.0;
bbcShape1551.point.y += -10.0;

bbcShape1552.point.x += 18.0;
bbcShape1552.point.y += -11.0;

bbcShape1553.point.x += 18.0;
bbcShape1553.point.y += -12.0;

bbcShape1554.point.x += 18.0;
bbcShape1554.point.y += -13.0;

bbcShape1555.point.x += 18.0;
bbcShape1555.point.y += -14.0;

bbcShape1556.point.x += 18.0;
bbcShape1556.point.y += -15.0;

bbcShape1557.point.x += 18.0;
bbcShape1557.point.y += -16.0;

bbcShape1558.point.x += 18.0;
bbcShape1558.point.y += -17.0;

bbcShape1559.point.x += 18.0;
bbcShape1559.point.y += -18.0;

bbcShape1560.point.x += 18.0;
bbcShape1560.point.y += -19.0;

bbcShape1561.point.x += 19.0;
bbcShape1561.point.y += 20.0;

bbcShape1562.point.x += 19.0;
bbcShape1562.point.y += 19.0;

bbcShape1563.point.x += 19.0;
bbcShape1563.point.y += 18.0;

bbcShape1564.point.x += 19.0;
bbcShape1564.point.y += 17.0;

bbcShape1565.point.x += 19.0;
bbcShape1565.point.y += 16.0;

bbcShape1566.point.x += 19.0;
bbcShape1566.point.y += 15.0;

bbcShape1567.point.x += 19.0;
bbcShape1567.point.y += 14.0;

bbcShape1568.point.x += 19.0;
bbcShape1568.point.y += 13.0;

bbcShape1569.point.x += 19.0;
bbcShape1569.point.y += 12.0;

bbcShape1570.point.x += 19.0;
bbcShape1570.point.y += 11.0;

bbcShape1571.point.x += 19.0;
bbcShape1571.point.y += 10.0;

bbcShape1572.point.x += 19.0;
bbcShape1572.point.y += 9.0;

bbcShape1573.point.x += 19.0;
bbcShape1573.point.y += 8.0;

bbcShape1574.point.x += 19.0;
bbcShape1574.point.y += 7.0;

bbcShape1575.point.x += 19.0;
bbcShape1575.point.y += 6.0;

bbcShape1576.point.x += 19.0;
bbcShape1576.point.y += 5.0;

bbcShape1577.point.x += 19.0;
bbcShape1577.point.y += 4.0;

bbcShape1578.point.x += 19.0;
bbcShape1578.point.y += 3.0;

bbcShape1579.point.x += 19.0;
bbcShape1579.point.y += 2.0;

bbcShape1580.point.x += 19.0;
bbcShape1580.point.y += 1.0;

bbcShape1581.point.x += 19.0;
bbcShape1581.point.y += 0.0;

bbcShape1582.point.x += 19.0;
bbcShape1582.point.y += -1.0;

bbcShape1583.point.x += 19.0;
bbcShape1583.point.y += -2.0;

bbcShape1584.point.x += 19.0;
bbcShape1584.point.y += -3.0;

bbcShape1585.point.x += 19.0;
bbcShape1585.point.y += -4.0;

bbcShape1586.point.x += 19.0;
bbcShape1586.point.y += -5.0;

bbcShape1587.point.x += 19.0;
bbcShape1587.point.y += -6.0;

bbcShape1588.point.x += 19.0;
bbcShape1588.point.y += -7.0;

bbcShape1589.point.x += 19.0;
bbcShape1589.point.y += -8.0;

bbcShape1590.point.x += 19.0;
bbcShape1590.point.y += -9.0;

bbcShape1591.point.x += 19.0;
bbcShape1591.point.y += -10.0;

bbcShape1592.point.x += 19.0;
bbcShape1592.point.y += -11.0;

bbcShape1593.point.x += 19.0;
bbcShape1593.point.y += -12.0;

bbcShape1594.point.x += 19.0;
bbcShape1594.point.y += -13.0;

bbcShape1595.point.x += 19.0;
bbcShape1595.point.y += -14.0;

bbcShape1596.point.x += 19.0;
bbcShape1596.point.y += -15.0;

bbcShape1597.point.x += 19.0;
bbcShape1597.point.y += -16.0;

bbcShape1598.point.x += 19.0;
bbcShape1598.point.y += -17.0;

bbcShape1599.point.x += 19.0;
bbcShape1599.point.y += -18.0;

bbcShape1600.point.x += 19.0;
bbcShape1600.point.y += -19.0;

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1.point.x, bbcShape1.point.y, bbcShape1.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape2.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape2.point.x, bbcShape2.point.y, bbcShape2.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape3.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape3.point.x, bbcShape3.point.y, bbcShape3.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape4.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape4.point.x, bbcShape4.point.y, bbcShape4.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape5.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape5.point.x, bbcShape5.point.y, bbcShape5.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape6.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape6.point.x, bbcShape6.point.y, bbcShape6.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape7.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape7.point.x, bbcShape7.point.y, bbcShape7.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape8.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape8.point.x, bbcShape8.point.y, bbcShape8.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape9.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape9.point.x, bbcShape9.point.y, bbcShape9.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape10.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape10.point.x, bbcShape10.point.y, bbcShape10.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape11.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape11.point.x, bbcShape11.point.y, bbcShape11.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape12.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape12.point.x, bbcShape12.point.y, bbcShape12.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape13.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape13.point.x, bbcShape13.point.y, bbcShape13.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape14.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape14.point.x, bbcShape14.point.y, bbcShape14.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape15.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape15.point.x, bbcShape15.point.y, bbcShape15.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape16.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape16.point.x, bbcShape16.point.y, bbcShape16.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape17.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape17.point.x, bbcShape17.point.y, bbcShape17.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape18.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape18.point.x, bbcShape18.point.y, bbcShape18.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape19.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape19.point.x, bbcShape19.point.y, bbcShape19.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape20.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape20.point.x, bbcShape20.point.y, bbcShape20.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape21.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape21.point.x, bbcShape21.point.y, bbcShape21.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape22.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape22.point.x, bbcShape22.point.y, bbcShape22.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape23.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape23.point.x, bbcShape23.point.y, bbcShape23.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape24.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape24.point.x, bbcShape24.point.y, bbcShape24.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape25.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape25.point.x, bbcShape25.point.y, bbcShape25.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape26.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape26.point.x, bbcShape26.point.y, bbcShape26.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape27.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape27.point.x, bbcShape27.point.y, bbcShape27.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape28.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape28.point.x, bbcShape28.point.y, bbcShape28.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape29.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape29.point.x, bbcShape29.point.y, bbcShape29.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape30.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape30.point.x, bbcShape30.point.y, bbcShape30.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape31.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape31.point.x, bbcShape31.point.y, bbcShape31.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape32.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape32.point.x, bbcShape32.point.y, bbcShape32.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape33.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape33.point.x, bbcShape33.point.y, bbcShape33.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape34.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape34.point.x, bbcShape34.point.y, bbcShape34.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape35.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape35.point.x, bbcShape35.point.y, bbcShape35.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape36.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape36.point.x, bbcShape36.point.y, bbcShape36.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape37.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape37.point.x, bbcShape37.point.y, bbcShape37.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape38.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape38.point.x, bbcShape38.point.y, bbcShape38.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape39.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape39.point.x, bbcShape39.point.y, bbcShape39.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape40.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape40.point.x, bbcShape40.point.y, bbcShape40.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape41.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape41.point.x, bbcShape41.point.y, bbcShape41.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape42.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape42.point.x, bbcShape42.point.y, bbcShape42.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape43.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape43.point.x, bbcShape43.point.y, bbcShape43.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape44.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape44.point.x, bbcShape44.point.y, bbcShape44.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape45.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape45.point.x, bbcShape45.point.y, bbcShape45.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape46.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape46.point.x, bbcShape46.point.y, bbcShape46.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape47.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape47.point.x, bbcShape47.point.y, bbcShape47.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape48.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape48.point.x, bbcShape48.point.y, bbcShape48.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape49.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape49.point.x, bbcShape49.point.y, bbcShape49.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape50.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape50.point.x, bbcShape50.point.y, bbcShape50.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape51.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape51.point.x, bbcShape51.point.y, bbcShape51.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape52.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape52.point.x, bbcShape52.point.y, bbcShape52.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape53.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape53.point.x, bbcShape53.point.y, bbcShape53.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape54.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape54.point.x, bbcShape54.point.y, bbcShape54.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape55.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape55.point.x, bbcShape55.point.y, bbcShape55.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape56.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape56.point.x, bbcShape56.point.y, bbcShape56.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape57.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape57.point.x, bbcShape57.point.y, bbcShape57.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape58.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape58.point.x, bbcShape58.point.y, bbcShape58.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape59.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape59.point.x, bbcShape59.point.y, bbcShape59.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape60.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape60.point.x, bbcShape60.point.y, bbcShape60.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape61.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape61.point.x, bbcShape61.point.y, bbcShape61.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape62.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape62.point.x, bbcShape62.point.y, bbcShape62.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape63.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape63.point.x, bbcShape63.point.y, bbcShape63.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape64.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape64.point.x, bbcShape64.point.y, bbcShape64.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape65.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape65.point.x, bbcShape65.point.y, bbcShape65.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape66.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape66.point.x, bbcShape66.point.y, bbcShape66.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape67.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape67.point.x, bbcShape67.point.y, bbcShape67.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape68.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape68.point.x, bbcShape68.point.y, bbcShape68.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape69.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape69.point.x, bbcShape69.point.y, bbcShape69.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape70.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape70.point.x, bbcShape70.point.y, bbcShape70.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape71.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape71.point.x, bbcShape71.point.y, bbcShape71.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape72.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape72.point.x, bbcShape72.point.y, bbcShape72.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape73.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape73.point.x, bbcShape73.point.y, bbcShape73.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape74.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape74.point.x, bbcShape74.point.y, bbcShape74.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape75.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape75.point.x, bbcShape75.point.y, bbcShape75.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape76.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape76.point.x, bbcShape76.point.y, bbcShape76.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape77.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape77.point.x, bbcShape77.point.y, bbcShape77.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape78.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape78.point.x, bbcShape78.point.y, bbcShape78.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape79.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape79.point.x, bbcShape79.point.y, bbcShape79.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape80.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape80.point.x, bbcShape80.point.y, bbcShape80.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape81.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape81.point.x, bbcShape81.point.y, bbcShape81.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape82.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape82.point.x, bbcShape82.point.y, bbcShape82.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape83.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape83.point.x, bbcShape83.point.y, bbcShape83.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape84.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape84.point.x, bbcShape84.point.y, bbcShape84.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape85.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape85.point.x, bbcShape85.point.y, bbcShape85.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape86.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape86.point.x, bbcShape86.point.y, bbcShape86.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape87.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape87.point.x, bbcShape87.point.y, bbcShape87.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape88.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape88.point.x, bbcShape88.point.y, bbcShape88.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape89.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape89.point.x, bbcShape89.point.y, bbcShape89.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape90.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape90.point.x, bbcShape90.point.y, bbcShape90.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape91.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape91.point.x, bbcShape91.point.y, bbcShape91.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape92.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape92.point.x, bbcShape92.point.y, bbcShape92.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape93.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape93.point.x, bbcShape93.point.y, bbcShape93.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape94.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape94.point.x, bbcShape94.point.y, bbcShape94.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape95.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape95.point.x, bbcShape95.point.y, bbcShape95.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape96.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape96.point.x, bbcShape96.point.y, bbcShape96.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape97.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape97.point.x, bbcShape97.point.y, bbcShape97.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape98.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape98.point.x, bbcShape98.point.y, bbcShape98.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape99.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape99.point.x, bbcShape99.point.y, bbcShape99.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape100.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape100.point.x, bbcShape100.point.y, bbcShape100.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape101.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape101.point.x, bbcShape101.point.y, bbcShape101.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape102.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape102.point.x, bbcShape102.point.y, bbcShape102.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape103.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape103.point.x, bbcShape103.point.y, bbcShape103.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape104.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape104.point.x, bbcShape104.point.y, bbcShape104.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape105.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape105.point.x, bbcShape105.point.y, bbcShape105.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape106.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape106.point.x, bbcShape106.point.y, bbcShape106.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape107.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape107.point.x, bbcShape107.point.y, bbcShape107.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape108.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape108.point.x, bbcShape108.point.y, bbcShape108.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape109.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape109.point.x, bbcShape109.point.y, bbcShape109.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape110.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape110.point.x, bbcShape110.point.y, bbcShape110.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape111.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape111.point.x, bbcShape111.point.y, bbcShape111.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape112.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape112.point.x, bbcShape112.point.y, bbcShape112.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape113.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape113.point.x, bbcShape113.point.y, bbcShape113.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape114.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape114.point.x, bbcShape114.point.y, bbcShape114.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape115.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape115.point.x, bbcShape115.point.y, bbcShape115.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape116.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape116.point.x, bbcShape116.point.y, bbcShape116.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape117.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape117.point.x, bbcShape117.point.y, bbcShape117.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape118.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape118.point.x, bbcShape118.point.y, bbcShape118.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape119.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape119.point.x, bbcShape119.point.y, bbcShape119.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape120.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape120.point.x, bbcShape120.point.y, bbcShape120.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape121.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape121.point.x, bbcShape121.point.y, bbcShape121.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape122.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape122.point.x, bbcShape122.point.y, bbcShape122.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape123.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape123.point.x, bbcShape123.point.y, bbcShape123.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape124.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape124.point.x, bbcShape124.point.y, bbcShape124.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape125.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape125.point.x, bbcShape125.point.y, bbcShape125.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape126.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape126.point.x, bbcShape126.point.y, bbcShape126.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape127.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape127.point.x, bbcShape127.point.y, bbcShape127.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape128.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape128.point.x, bbcShape128.point.y, bbcShape128.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape129.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape129.point.x, bbcShape129.point.y, bbcShape129.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape130.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape130.point.x, bbcShape130.point.y, bbcShape130.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape131.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape131.point.x, bbcShape131.point.y, bbcShape131.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape132.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape132.point.x, bbcShape132.point.y, bbcShape132.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape133.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape133.point.x, bbcShape133.point.y, bbcShape133.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape134.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape134.point.x, bbcShape134.point.y, bbcShape134.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape135.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape135.point.x, bbcShape135.point.y, bbcShape135.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape136.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape136.point.x, bbcShape136.point.y, bbcShape136.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape137.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape137.point.x, bbcShape137.point.y, bbcShape137.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape138.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape138.point.x, bbcShape138.point.y, bbcShape138.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape139.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape139.point.x, bbcShape139.point.y, bbcShape139.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape140.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape140.point.x, bbcShape140.point.y, bbcShape140.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape141.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape141.point.x, bbcShape141.point.y, bbcShape141.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape142.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape142.point.x, bbcShape142.point.y, bbcShape142.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape143.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape143.point.x, bbcShape143.point.y, bbcShape143.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape144.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape144.point.x, bbcShape144.point.y, bbcShape144.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape145.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape145.point.x, bbcShape145.point.y, bbcShape145.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape146.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape146.point.x, bbcShape146.point.y, bbcShape146.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape147.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape147.point.x, bbcShape147.point.y, bbcShape147.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape148.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape148.point.x, bbcShape148.point.y, bbcShape148.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape149.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape149.point.x, bbcShape149.point.y, bbcShape149.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape150.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape150.point.x, bbcShape150.point.y, bbcShape150.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape151.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape151.point.x, bbcShape151.point.y, bbcShape151.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape152.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape152.point.x, bbcShape152.point.y, bbcShape152.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape153.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape153.point.x, bbcShape153.point.y, bbcShape153.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape154.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape154.point.x, bbcShape154.point.y, bbcShape154.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape155.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape155.point.x, bbcShape155.point.y, bbcShape155.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape156.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape156.point.x, bbcShape156.point.y, bbcShape156.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape157.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape157.point.x, bbcShape157.point.y, bbcShape157.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape158.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape158.point.x, bbcShape158.point.y, bbcShape158.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape159.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape159.point.x, bbcShape159.point.y, bbcShape159.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape160.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape160.point.x, bbcShape160.point.y, bbcShape160.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape161.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape161.point.x, bbcShape161.point.y, bbcShape161.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape162.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape162.point.x, bbcShape162.point.y, bbcShape162.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape163.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape163.point.x, bbcShape163.point.y, bbcShape163.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape164.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape164.point.x, bbcShape164.point.y, bbcShape164.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape165.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape165.point.x, bbcShape165.point.y, bbcShape165.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape166.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape166.point.x, bbcShape166.point.y, bbcShape166.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape167.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape167.point.x, bbcShape167.point.y, bbcShape167.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape168.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape168.point.x, bbcShape168.point.y, bbcShape168.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape169.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape169.point.x, bbcShape169.point.y, bbcShape169.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape170.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape170.point.x, bbcShape170.point.y, bbcShape170.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape171.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape171.point.x, bbcShape171.point.y, bbcShape171.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape172.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape172.point.x, bbcShape172.point.y, bbcShape172.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape173.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape173.point.x, bbcShape173.point.y, bbcShape173.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape174.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape174.point.x, bbcShape174.point.y, bbcShape174.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape175.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape175.point.x, bbcShape175.point.y, bbcShape175.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape176.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape176.point.x, bbcShape176.point.y, bbcShape176.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape177.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape177.point.x, bbcShape177.point.y, bbcShape177.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape178.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape178.point.x, bbcShape178.point.y, bbcShape178.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape179.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape179.point.x, bbcShape179.point.y, bbcShape179.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape180.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape180.point.x, bbcShape180.point.y, bbcShape180.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape181.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape181.point.x, bbcShape181.point.y, bbcShape181.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape182.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape182.point.x, bbcShape182.point.y, bbcShape182.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape183.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape183.point.x, bbcShape183.point.y, bbcShape183.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape184.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape184.point.x, bbcShape184.point.y, bbcShape184.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape185.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape185.point.x, bbcShape185.point.y, bbcShape185.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape186.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape186.point.x, bbcShape186.point.y, bbcShape186.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape187.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape187.point.x, bbcShape187.point.y, bbcShape187.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape188.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape188.point.x, bbcShape188.point.y, bbcShape188.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape189.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape189.point.x, bbcShape189.point.y, bbcShape189.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape190.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape190.point.x, bbcShape190.point.y, bbcShape190.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape191.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape191.point.x, bbcShape191.point.y, bbcShape191.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape192.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape192.point.x, bbcShape192.point.y, bbcShape192.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape193.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape193.point.x, bbcShape193.point.y, bbcShape193.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape194.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape194.point.x, bbcShape194.point.y, bbcShape194.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape195.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape195.point.x, bbcShape195.point.y, bbcShape195.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape196.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape196.point.x, bbcShape196.point.y, bbcShape196.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape197.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape197.point.x, bbcShape197.point.y, bbcShape197.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape198.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape198.point.x, bbcShape198.point.y, bbcShape198.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape199.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape199.point.x, bbcShape199.point.y, bbcShape199.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape200.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape200.point.x, bbcShape200.point.y, bbcShape200.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape201.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape201.point.x, bbcShape201.point.y, bbcShape201.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape202.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape202.point.x, bbcShape202.point.y, bbcShape202.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape203.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape203.point.x, bbcShape203.point.y, bbcShape203.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape204.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape204.point.x, bbcShape204.point.y, bbcShape204.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape205.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape205.point.x, bbcShape205.point.y, bbcShape205.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape206.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape206.point.x, bbcShape206.point.y, bbcShape206.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape207.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape207.point.x, bbcShape207.point.y, bbcShape207.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape208.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape208.point.x, bbcShape208.point.y, bbcShape208.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape209.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape209.point.x, bbcShape209.point.y, bbcShape209.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape210.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape210.point.x, bbcShape210.point.y, bbcShape210.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape211.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape211.point.x, bbcShape211.point.y, bbcShape211.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape212.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape212.point.x, bbcShape212.point.y, bbcShape212.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape213.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape213.point.x, bbcShape213.point.y, bbcShape213.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape214.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape214.point.x, bbcShape214.point.y, bbcShape214.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape215.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape215.point.x, bbcShape215.point.y, bbcShape215.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape216.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape216.point.x, bbcShape216.point.y, bbcShape216.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape217.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape217.point.x, bbcShape217.point.y, bbcShape217.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape218.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape218.point.x, bbcShape218.point.y, bbcShape218.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape219.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape219.point.x, bbcShape219.point.y, bbcShape219.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape220.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape220.point.x, bbcShape220.point.y, bbcShape220.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape221.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape221.point.x, bbcShape221.point.y, bbcShape221.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape222.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape222.point.x, bbcShape222.point.y, bbcShape222.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape223.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape223.point.x, bbcShape223.point.y, bbcShape223.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape224.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape224.point.x, bbcShape224.point.y, bbcShape224.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape225.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape225.point.x, bbcShape225.point.y, bbcShape225.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape226.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape226.point.x, bbcShape226.point.y, bbcShape226.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape227.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape227.point.x, bbcShape227.point.y, bbcShape227.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape228.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape228.point.x, bbcShape228.point.y, bbcShape228.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape229.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape229.point.x, bbcShape229.point.y, bbcShape229.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape230.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape230.point.x, bbcShape230.point.y, bbcShape230.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape231.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape231.point.x, bbcShape231.point.y, bbcShape231.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape232.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape232.point.x, bbcShape232.point.y, bbcShape232.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape233.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape233.point.x, bbcShape233.point.y, bbcShape233.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape234.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape234.point.x, bbcShape234.point.y, bbcShape234.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape235.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape235.point.x, bbcShape235.point.y, bbcShape235.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape236.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape236.point.x, bbcShape236.point.y, bbcShape236.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape237.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape237.point.x, bbcShape237.point.y, bbcShape237.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape238.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape238.point.x, bbcShape238.point.y, bbcShape238.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape239.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape239.point.x, bbcShape239.point.y, bbcShape239.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape240.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape240.point.x, bbcShape240.point.y, bbcShape240.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape241.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape241.point.x, bbcShape241.point.y, bbcShape241.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape242.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape242.point.x, bbcShape242.point.y, bbcShape242.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape243.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape243.point.x, bbcShape243.point.y, bbcShape243.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape244.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape244.point.x, bbcShape244.point.y, bbcShape244.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape245.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape245.point.x, bbcShape245.point.y, bbcShape245.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape246.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape246.point.x, bbcShape246.point.y, bbcShape246.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape247.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape247.point.x, bbcShape247.point.y, bbcShape247.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape248.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape248.point.x, bbcShape248.point.y, bbcShape248.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape249.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape249.point.x, bbcShape249.point.y, bbcShape249.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape250.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape250.point.x, bbcShape250.point.y, bbcShape250.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape251.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape251.point.x, bbcShape251.point.y, bbcShape251.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape252.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape252.point.x, bbcShape252.point.y, bbcShape252.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape253.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape253.point.x, bbcShape253.point.y, bbcShape253.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape254.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape254.point.x, bbcShape254.point.y, bbcShape254.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape255.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape255.point.x, bbcShape255.point.y, bbcShape255.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape256.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape256.point.x, bbcShape256.point.y, bbcShape256.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape257.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape257.point.x, bbcShape257.point.y, bbcShape257.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape258.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape258.point.x, bbcShape258.point.y, bbcShape258.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape259.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape259.point.x, bbcShape259.point.y, bbcShape259.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape260.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape260.point.x, bbcShape260.point.y, bbcShape260.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape261.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape261.point.x, bbcShape261.point.y, bbcShape261.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape262.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape262.point.x, bbcShape262.point.y, bbcShape262.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape263.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape263.point.x, bbcShape263.point.y, bbcShape263.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape264.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape264.point.x, bbcShape264.point.y, bbcShape264.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape265.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape265.point.x, bbcShape265.point.y, bbcShape265.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape266.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape266.point.x, bbcShape266.point.y, bbcShape266.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape267.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape267.point.x, bbcShape267.point.y, bbcShape267.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape268.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape268.point.x, bbcShape268.point.y, bbcShape268.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape269.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape269.point.x, bbcShape269.point.y, bbcShape269.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape270.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape270.point.x, bbcShape270.point.y, bbcShape270.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape271.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape271.point.x, bbcShape271.point.y, bbcShape271.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape272.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape272.point.x, bbcShape272.point.y, bbcShape272.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape273.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape273.point.x, bbcShape273.point.y, bbcShape273.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape274.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape274.point.x, bbcShape274.point.y, bbcShape274.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape275.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape275.point.x, bbcShape275.point.y, bbcShape275.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape276.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape276.point.x, bbcShape276.point.y, bbcShape276.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape277.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape277.point.x, bbcShape277.point.y, bbcShape277.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape278.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape278.point.x, bbcShape278.point.y, bbcShape278.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape279.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape279.point.x, bbcShape279.point.y, bbcShape279.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape280.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape280.point.x, bbcShape280.point.y, bbcShape280.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape281.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape281.point.x, bbcShape281.point.y, bbcShape281.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape282.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape282.point.x, bbcShape282.point.y, bbcShape282.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape283.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape283.point.x, bbcShape283.point.y, bbcShape283.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape284.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape284.point.x, bbcShape284.point.y, bbcShape284.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape285.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape285.point.x, bbcShape285.point.y, bbcShape285.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape286.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape286.point.x, bbcShape286.point.y, bbcShape286.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape287.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape287.point.x, bbcShape287.point.y, bbcShape287.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape288.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape288.point.x, bbcShape288.point.y, bbcShape288.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape289.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape289.point.x, bbcShape289.point.y, bbcShape289.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape290.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape290.point.x, bbcShape290.point.y, bbcShape290.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape291.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape291.point.x, bbcShape291.point.y, bbcShape291.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape292.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape292.point.x, bbcShape292.point.y, bbcShape292.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape293.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape293.point.x, bbcShape293.point.y, bbcShape293.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape294.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape294.point.x, bbcShape294.point.y, bbcShape294.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape295.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape295.point.x, bbcShape295.point.y, bbcShape295.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape296.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape296.point.x, bbcShape296.point.y, bbcShape296.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape297.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape297.point.x, bbcShape297.point.y, bbcShape297.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape298.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape298.point.x, bbcShape298.point.y, bbcShape298.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape299.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape299.point.x, bbcShape299.point.y, bbcShape299.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape300.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape300.point.x, bbcShape300.point.y, bbcShape300.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape301.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape301.point.x, bbcShape301.point.y, bbcShape301.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape302.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape302.point.x, bbcShape302.point.y, bbcShape302.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape303.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape303.point.x, bbcShape303.point.y, bbcShape303.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape304.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape304.point.x, bbcShape304.point.y, bbcShape304.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape305.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape305.point.x, bbcShape305.point.y, bbcShape305.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape306.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape306.point.x, bbcShape306.point.y, bbcShape306.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape307.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape307.point.x, bbcShape307.point.y, bbcShape307.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape308.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape308.point.x, bbcShape308.point.y, bbcShape308.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape309.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape309.point.x, bbcShape309.point.y, bbcShape309.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape310.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape310.point.x, bbcShape310.point.y, bbcShape310.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape311.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape311.point.x, bbcShape311.point.y, bbcShape311.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape312.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape312.point.x, bbcShape312.point.y, bbcShape312.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape313.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape313.point.x, bbcShape313.point.y, bbcShape313.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape314.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape314.point.x, bbcShape314.point.y, bbcShape314.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape315.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape315.point.x, bbcShape315.point.y, bbcShape315.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape316.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape316.point.x, bbcShape316.point.y, bbcShape316.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape317.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape317.point.x, bbcShape317.point.y, bbcShape317.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape318.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape318.point.x, bbcShape318.point.y, bbcShape318.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape319.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape319.point.x, bbcShape319.point.y, bbcShape319.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape320.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape320.point.x, bbcShape320.point.y, bbcShape320.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape321.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape321.point.x, bbcShape321.point.y, bbcShape321.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape322.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape322.point.x, bbcShape322.point.y, bbcShape322.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape323.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape323.point.x, bbcShape323.point.y, bbcShape323.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape324.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape324.point.x, bbcShape324.point.y, bbcShape324.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape325.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape325.point.x, bbcShape325.point.y, bbcShape325.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape326.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape326.point.x, bbcShape326.point.y, bbcShape326.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape327.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape327.point.x, bbcShape327.point.y, bbcShape327.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape328.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape328.point.x, bbcShape328.point.y, bbcShape328.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape329.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape329.point.x, bbcShape329.point.y, bbcShape329.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape330.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape330.point.x, bbcShape330.point.y, bbcShape330.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape331.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape331.point.x, bbcShape331.point.y, bbcShape331.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape332.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape332.point.x, bbcShape332.point.y, bbcShape332.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape333.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape333.point.x, bbcShape333.point.y, bbcShape333.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape334.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape334.point.x, bbcShape334.point.y, bbcShape334.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape335.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape335.point.x, bbcShape335.point.y, bbcShape335.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape336.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape336.point.x, bbcShape336.point.y, bbcShape336.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape337.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape337.point.x, bbcShape337.point.y, bbcShape337.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape338.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape338.point.x, bbcShape338.point.y, bbcShape338.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape339.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape339.point.x, bbcShape339.point.y, bbcShape339.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape340.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape340.point.x, bbcShape340.point.y, bbcShape340.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape341.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape341.point.x, bbcShape341.point.y, bbcShape341.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape342.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape342.point.x, bbcShape342.point.y, bbcShape342.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape343.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape343.point.x, bbcShape343.point.y, bbcShape343.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape344.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape344.point.x, bbcShape344.point.y, bbcShape344.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape345.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape345.point.x, bbcShape345.point.y, bbcShape345.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape346.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape346.point.x, bbcShape346.point.y, bbcShape346.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape347.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape347.point.x, bbcShape347.point.y, bbcShape347.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape348.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape348.point.x, bbcShape348.point.y, bbcShape348.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape349.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape349.point.x, bbcShape349.point.y, bbcShape349.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape350.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape350.point.x, bbcShape350.point.y, bbcShape350.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape351.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape351.point.x, bbcShape351.point.y, bbcShape351.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape352.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape352.point.x, bbcShape352.point.y, bbcShape352.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape353.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape353.point.x, bbcShape353.point.y, bbcShape353.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape354.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape354.point.x, bbcShape354.point.y, bbcShape354.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape355.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape355.point.x, bbcShape355.point.y, bbcShape355.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape356.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape356.point.x, bbcShape356.point.y, bbcShape356.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape357.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape357.point.x, bbcShape357.point.y, bbcShape357.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape358.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape358.point.x, bbcShape358.point.y, bbcShape358.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape359.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape359.point.x, bbcShape359.point.y, bbcShape359.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape360.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape360.point.x, bbcShape360.point.y, bbcShape360.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape361.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape361.point.x, bbcShape361.point.y, bbcShape361.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape362.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape362.point.x, bbcShape362.point.y, bbcShape362.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape363.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape363.point.x, bbcShape363.point.y, bbcShape363.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape364.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape364.point.x, bbcShape364.point.y, bbcShape364.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape365.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape365.point.x, bbcShape365.point.y, bbcShape365.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape366.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape366.point.x, bbcShape366.point.y, bbcShape366.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape367.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape367.point.x, bbcShape367.point.y, bbcShape367.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape368.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape368.point.x, bbcShape368.point.y, bbcShape368.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape369.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape369.point.x, bbcShape369.point.y, bbcShape369.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape370.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape370.point.x, bbcShape370.point.y, bbcShape370.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape371.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape371.point.x, bbcShape371.point.y, bbcShape371.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape372.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape372.point.x, bbcShape372.point.y, bbcShape372.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape373.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape373.point.x, bbcShape373.point.y, bbcShape373.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape374.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape374.point.x, bbcShape374.point.y, bbcShape374.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape375.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape375.point.x, bbcShape375.point.y, bbcShape375.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape376.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape376.point.x, bbcShape376.point.y, bbcShape376.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape377.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape377.point.x, bbcShape377.point.y, bbcShape377.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape378.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape378.point.x, bbcShape378.point.y, bbcShape378.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape379.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape379.point.x, bbcShape379.point.y, bbcShape379.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape380.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape380.point.x, bbcShape380.point.y, bbcShape380.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape381.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape381.point.x, bbcShape381.point.y, bbcShape381.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape382.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape382.point.x, bbcShape382.point.y, bbcShape382.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape383.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape383.point.x, bbcShape383.point.y, bbcShape383.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape384.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape384.point.x, bbcShape384.point.y, bbcShape384.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape385.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape385.point.x, bbcShape385.point.y, bbcShape385.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape386.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape386.point.x, bbcShape386.point.y, bbcShape386.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape387.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape387.point.x, bbcShape387.point.y, bbcShape387.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape388.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape388.point.x, bbcShape388.point.y, bbcShape388.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape389.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape389.point.x, bbcShape389.point.y, bbcShape389.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape390.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape390.point.x, bbcShape390.point.y, bbcShape390.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape391.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape391.point.x, bbcShape391.point.y, bbcShape391.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape392.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape392.point.x, bbcShape392.point.y, bbcShape392.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape393.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape393.point.x, bbcShape393.point.y, bbcShape393.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape394.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape394.point.x, bbcShape394.point.y, bbcShape394.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape395.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape395.point.x, bbcShape395.point.y, bbcShape395.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape396.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape396.point.x, bbcShape396.point.y, bbcShape396.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape397.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape397.point.x, bbcShape397.point.y, bbcShape397.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape398.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape398.point.x, bbcShape398.point.y, bbcShape398.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape399.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape399.point.x, bbcShape399.point.y, bbcShape399.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape400.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape400.point.x, bbcShape400.point.y, bbcShape400.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape401.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape401.point.x, bbcShape401.point.y, bbcShape401.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape402.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape402.point.x, bbcShape402.point.y, bbcShape402.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape403.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape403.point.x, bbcShape403.point.y, bbcShape403.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape404.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape404.point.x, bbcShape404.point.y, bbcShape404.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape405.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape405.point.x, bbcShape405.point.y, bbcShape405.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape406.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape406.point.x, bbcShape406.point.y, bbcShape406.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape407.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape407.point.x, bbcShape407.point.y, bbcShape407.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape408.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape408.point.x, bbcShape408.point.y, bbcShape408.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape409.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape409.point.x, bbcShape409.point.y, bbcShape409.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape410.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape410.point.x, bbcShape410.point.y, bbcShape410.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape411.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape411.point.x, bbcShape411.point.y, bbcShape411.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape412.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape412.point.x, bbcShape412.point.y, bbcShape412.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape413.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape413.point.x, bbcShape413.point.y, bbcShape413.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape414.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape414.point.x, bbcShape414.point.y, bbcShape414.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape415.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape415.point.x, bbcShape415.point.y, bbcShape415.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape416.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape416.point.x, bbcShape416.point.y, bbcShape416.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape417.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape417.point.x, bbcShape417.point.y, bbcShape417.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape418.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape418.point.x, bbcShape418.point.y, bbcShape418.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape419.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape419.point.x, bbcShape419.point.y, bbcShape419.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape420.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape420.point.x, bbcShape420.point.y, bbcShape420.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape421.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape421.point.x, bbcShape421.point.y, bbcShape421.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape422.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape422.point.x, bbcShape422.point.y, bbcShape422.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape423.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape423.point.x, bbcShape423.point.y, bbcShape423.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape424.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape424.point.x, bbcShape424.point.y, bbcShape424.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape425.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape425.point.x, bbcShape425.point.y, bbcShape425.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape426.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape426.point.x, bbcShape426.point.y, bbcShape426.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape427.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape427.point.x, bbcShape427.point.y, bbcShape427.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape428.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape428.point.x, bbcShape428.point.y, bbcShape428.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape429.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape429.point.x, bbcShape429.point.y, bbcShape429.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape430.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape430.point.x, bbcShape430.point.y, bbcShape430.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape431.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape431.point.x, bbcShape431.point.y, bbcShape431.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape432.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape432.point.x, bbcShape432.point.y, bbcShape432.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape433.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape433.point.x, bbcShape433.point.y, bbcShape433.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape434.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape434.point.x, bbcShape434.point.y, bbcShape434.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape435.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape435.point.x, bbcShape435.point.y, bbcShape435.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape436.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape436.point.x, bbcShape436.point.y, bbcShape436.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape437.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape437.point.x, bbcShape437.point.y, bbcShape437.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape438.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape438.point.x, bbcShape438.point.y, bbcShape438.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape439.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape439.point.x, bbcShape439.point.y, bbcShape439.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape440.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape440.point.x, bbcShape440.point.y, bbcShape440.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape441.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape441.point.x, bbcShape441.point.y, bbcShape441.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape442.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape442.point.x, bbcShape442.point.y, bbcShape442.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape443.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape443.point.x, bbcShape443.point.y, bbcShape443.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape444.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape444.point.x, bbcShape444.point.y, bbcShape444.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape445.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape445.point.x, bbcShape445.point.y, bbcShape445.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape446.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape446.point.x, bbcShape446.point.y, bbcShape446.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape447.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape447.point.x, bbcShape447.point.y, bbcShape447.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape448.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape448.point.x, bbcShape448.point.y, bbcShape448.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape449.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape449.point.x, bbcShape449.point.y, bbcShape449.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape450.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape450.point.x, bbcShape450.point.y, bbcShape450.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape451.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape451.point.x, bbcShape451.point.y, bbcShape451.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape452.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape452.point.x, bbcShape452.point.y, bbcShape452.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape453.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape453.point.x, bbcShape453.point.y, bbcShape453.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape454.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape454.point.x, bbcShape454.point.y, bbcShape454.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape455.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape455.point.x, bbcShape455.point.y, bbcShape455.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape456.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape456.point.x, bbcShape456.point.y, bbcShape456.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape457.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape457.point.x, bbcShape457.point.y, bbcShape457.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape458.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape458.point.x, bbcShape458.point.y, bbcShape458.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape459.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape459.point.x, bbcShape459.point.y, bbcShape459.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape460.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape460.point.x, bbcShape460.point.y, bbcShape460.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape461.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape461.point.x, bbcShape461.point.y, bbcShape461.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape462.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape462.point.x, bbcShape462.point.y, bbcShape462.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape463.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape463.point.x, bbcShape463.point.y, bbcShape463.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape464.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape464.point.x, bbcShape464.point.y, bbcShape464.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape465.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape465.point.x, bbcShape465.point.y, bbcShape465.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape466.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape466.point.x, bbcShape466.point.y, bbcShape466.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape467.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape467.point.x, bbcShape467.point.y, bbcShape467.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape468.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape468.point.x, bbcShape468.point.y, bbcShape468.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape469.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape469.point.x, bbcShape469.point.y, bbcShape469.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape470.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape470.point.x, bbcShape470.point.y, bbcShape470.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape471.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape471.point.x, bbcShape471.point.y, bbcShape471.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape472.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape472.point.x, bbcShape472.point.y, bbcShape472.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape473.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape473.point.x, bbcShape473.point.y, bbcShape473.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape474.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape474.point.x, bbcShape474.point.y, bbcShape474.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape475.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape475.point.x, bbcShape475.point.y, bbcShape475.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape476.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape476.point.x, bbcShape476.point.y, bbcShape476.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape477.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape477.point.x, bbcShape477.point.y, bbcShape477.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape478.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape478.point.x, bbcShape478.point.y, bbcShape478.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape479.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape479.point.x, bbcShape479.point.y, bbcShape479.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape480.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape480.point.x, bbcShape480.point.y, bbcShape480.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape481.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape481.point.x, bbcShape481.point.y, bbcShape481.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape482.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape482.point.x, bbcShape482.point.y, bbcShape482.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape483.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape483.point.x, bbcShape483.point.y, bbcShape483.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape484.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape484.point.x, bbcShape484.point.y, bbcShape484.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape485.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape485.point.x, bbcShape485.point.y, bbcShape485.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape486.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape486.point.x, bbcShape486.point.y, bbcShape486.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape487.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape487.point.x, bbcShape487.point.y, bbcShape487.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape488.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape488.point.x, bbcShape488.point.y, bbcShape488.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape489.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape489.point.x, bbcShape489.point.y, bbcShape489.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape490.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape490.point.x, bbcShape490.point.y, bbcShape490.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape491.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape491.point.x, bbcShape491.point.y, bbcShape491.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape492.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape492.point.x, bbcShape492.point.y, bbcShape492.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape493.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape493.point.x, bbcShape493.point.y, bbcShape493.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape494.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape494.point.x, bbcShape494.point.y, bbcShape494.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape495.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape495.point.x, bbcShape495.point.y, bbcShape495.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape496.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape496.point.x, bbcShape496.point.y, bbcShape496.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape497.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape497.point.x, bbcShape497.point.y, bbcShape497.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape498.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape498.point.x, bbcShape498.point.y, bbcShape498.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape499.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape499.point.x, bbcShape499.point.y, bbcShape499.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape500.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape500.point.x, bbcShape500.point.y, bbcShape500.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape501.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape501.point.x, bbcShape501.point.y, bbcShape501.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape502.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape502.point.x, bbcShape502.point.y, bbcShape502.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape503.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape503.point.x, bbcShape503.point.y, bbcShape503.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape504.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape504.point.x, bbcShape504.point.y, bbcShape504.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape505.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape505.point.x, bbcShape505.point.y, bbcShape505.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape506.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape506.point.x, bbcShape506.point.y, bbcShape506.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape507.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape507.point.x, bbcShape507.point.y, bbcShape507.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape508.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape508.point.x, bbcShape508.point.y, bbcShape508.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape509.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape509.point.x, bbcShape509.point.y, bbcShape509.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape510.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape510.point.x, bbcShape510.point.y, bbcShape510.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape511.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape511.point.x, bbcShape511.point.y, bbcShape511.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape512.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape512.point.x, bbcShape512.point.y, bbcShape512.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape513.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape513.point.x, bbcShape513.point.y, bbcShape513.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape514.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape514.point.x, bbcShape514.point.y, bbcShape514.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape515.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape515.point.x, bbcShape515.point.y, bbcShape515.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape516.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape516.point.x, bbcShape516.point.y, bbcShape516.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape517.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape517.point.x, bbcShape517.point.y, bbcShape517.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape518.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape518.point.x, bbcShape518.point.y, bbcShape518.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape519.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape519.point.x, bbcShape519.point.y, bbcShape519.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape520.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape520.point.x, bbcShape520.point.y, bbcShape520.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape521.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape521.point.x, bbcShape521.point.y, bbcShape521.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape522.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape522.point.x, bbcShape522.point.y, bbcShape522.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape523.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape523.point.x, bbcShape523.point.y, bbcShape523.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape524.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape524.point.x, bbcShape524.point.y, bbcShape524.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape525.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape525.point.x, bbcShape525.point.y, bbcShape525.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape526.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape526.point.x, bbcShape526.point.y, bbcShape526.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape527.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape527.point.x, bbcShape527.point.y, bbcShape527.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape528.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape528.point.x, bbcShape528.point.y, bbcShape528.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape529.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape529.point.x, bbcShape529.point.y, bbcShape529.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape530.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape530.point.x, bbcShape530.point.y, bbcShape530.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape531.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape531.point.x, bbcShape531.point.y, bbcShape531.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape532.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape532.point.x, bbcShape532.point.y, bbcShape532.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape533.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape533.point.x, bbcShape533.point.y, bbcShape533.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape534.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape534.point.x, bbcShape534.point.y, bbcShape534.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape535.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape535.point.x, bbcShape535.point.y, bbcShape535.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape536.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape536.point.x, bbcShape536.point.y, bbcShape536.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape537.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape537.point.x, bbcShape537.point.y, bbcShape537.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape538.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape538.point.x, bbcShape538.point.y, bbcShape538.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape539.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape539.point.x, bbcShape539.point.y, bbcShape539.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape540.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape540.point.x, bbcShape540.point.y, bbcShape540.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape541.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape541.point.x, bbcShape541.point.y, bbcShape541.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape542.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape542.point.x, bbcShape542.point.y, bbcShape542.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape543.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape543.point.x, bbcShape543.point.y, bbcShape543.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape544.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape544.point.x, bbcShape544.point.y, bbcShape544.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape545.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape545.point.x, bbcShape545.point.y, bbcShape545.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape546.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape546.point.x, bbcShape546.point.y, bbcShape546.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape547.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape547.point.x, bbcShape547.point.y, bbcShape547.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape548.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape548.point.x, bbcShape548.point.y, bbcShape548.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape549.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape549.point.x, bbcShape549.point.y, bbcShape549.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape550.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape550.point.x, bbcShape550.point.y, bbcShape550.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape551.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape551.point.x, bbcShape551.point.y, bbcShape551.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape552.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape552.point.x, bbcShape552.point.y, bbcShape552.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape553.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape553.point.x, bbcShape553.point.y, bbcShape553.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape554.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape554.point.x, bbcShape554.point.y, bbcShape554.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape555.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape555.point.x, bbcShape555.point.y, bbcShape555.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape556.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape556.point.x, bbcShape556.point.y, bbcShape556.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape557.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape557.point.x, bbcShape557.point.y, bbcShape557.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape558.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape558.point.x, bbcShape558.point.y, bbcShape558.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape559.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape559.point.x, bbcShape559.point.y, bbcShape559.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape560.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape560.point.x, bbcShape560.point.y, bbcShape560.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape561.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape561.point.x, bbcShape561.point.y, bbcShape561.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape562.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape562.point.x, bbcShape562.point.y, bbcShape562.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape563.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape563.point.x, bbcShape563.point.y, bbcShape563.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape564.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape564.point.x, bbcShape564.point.y, bbcShape564.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape565.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape565.point.x, bbcShape565.point.y, bbcShape565.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape566.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape566.point.x, bbcShape566.point.y, bbcShape566.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape567.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape567.point.x, bbcShape567.point.y, bbcShape567.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape568.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape568.point.x, bbcShape568.point.y, bbcShape568.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape569.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape569.point.x, bbcShape569.point.y, bbcShape569.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape570.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape570.point.x, bbcShape570.point.y, bbcShape570.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape571.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape571.point.x, bbcShape571.point.y, bbcShape571.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape572.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape572.point.x, bbcShape572.point.y, bbcShape572.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape573.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape573.point.x, bbcShape573.point.y, bbcShape573.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape574.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape574.point.x, bbcShape574.point.y, bbcShape574.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape575.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape575.point.x, bbcShape575.point.y, bbcShape575.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape576.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape576.point.x, bbcShape576.point.y, bbcShape576.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape577.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape577.point.x, bbcShape577.point.y, bbcShape577.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape578.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape578.point.x, bbcShape578.point.y, bbcShape578.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape579.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape579.point.x, bbcShape579.point.y, bbcShape579.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape580.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape580.point.x, bbcShape580.point.y, bbcShape580.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape581.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape581.point.x, bbcShape581.point.y, bbcShape581.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape582.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape582.point.x, bbcShape582.point.y, bbcShape582.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape583.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape583.point.x, bbcShape583.point.y, bbcShape583.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape584.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape584.point.x, bbcShape584.point.y, bbcShape584.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape585.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape585.point.x, bbcShape585.point.y, bbcShape585.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape586.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape586.point.x, bbcShape586.point.y, bbcShape586.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape587.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape587.point.x, bbcShape587.point.y, bbcShape587.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape588.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape588.point.x, bbcShape588.point.y, bbcShape588.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape589.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape589.point.x, bbcShape589.point.y, bbcShape589.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape590.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape590.point.x, bbcShape590.point.y, bbcShape590.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape591.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape591.point.x, bbcShape591.point.y, bbcShape591.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape592.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape592.point.x, bbcShape592.point.y, bbcShape592.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape593.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape593.point.x, bbcShape593.point.y, bbcShape593.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape594.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape594.point.x, bbcShape594.point.y, bbcShape594.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape595.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape595.point.x, bbcShape595.point.y, bbcShape595.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape596.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape596.point.x, bbcShape596.point.y, bbcShape596.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape597.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape597.point.x, bbcShape597.point.y, bbcShape597.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape598.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape598.point.x, bbcShape598.point.y, bbcShape598.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape599.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape599.point.x, bbcShape599.point.y, bbcShape599.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape600.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape600.point.x, bbcShape600.point.y, bbcShape600.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape601.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape601.point.x, bbcShape601.point.y, bbcShape601.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape602.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape602.point.x, bbcShape602.point.y, bbcShape602.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape603.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape603.point.x, bbcShape603.point.y, bbcShape603.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape604.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape604.point.x, bbcShape604.point.y, bbcShape604.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape605.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape605.point.x, bbcShape605.point.y, bbcShape605.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape606.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape606.point.x, bbcShape606.point.y, bbcShape606.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape607.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape607.point.x, bbcShape607.point.y, bbcShape607.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape608.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape608.point.x, bbcShape608.point.y, bbcShape608.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape609.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape609.point.x, bbcShape609.point.y, bbcShape609.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape610.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape610.point.x, bbcShape610.point.y, bbcShape610.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape611.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape611.point.x, bbcShape611.point.y, bbcShape611.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape612.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape612.point.x, bbcShape612.point.y, bbcShape612.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape613.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape613.point.x, bbcShape613.point.y, bbcShape613.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape614.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape614.point.x, bbcShape614.point.y, bbcShape614.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape615.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape615.point.x, bbcShape615.point.y, bbcShape615.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape616.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape616.point.x, bbcShape616.point.y, bbcShape616.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape617.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape617.point.x, bbcShape617.point.y, bbcShape617.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape618.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape618.point.x, bbcShape618.point.y, bbcShape618.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape619.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape619.point.x, bbcShape619.point.y, bbcShape619.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape620.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape620.point.x, bbcShape620.point.y, bbcShape620.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape621.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape621.point.x, bbcShape621.point.y, bbcShape621.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape622.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape622.point.x, bbcShape622.point.y, bbcShape622.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape623.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape623.point.x, bbcShape623.point.y, bbcShape623.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape624.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape624.point.x, bbcShape624.point.y, bbcShape624.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape625.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape625.point.x, bbcShape625.point.y, bbcShape625.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape626.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape626.point.x, bbcShape626.point.y, bbcShape626.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape627.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape627.point.x, bbcShape627.point.y, bbcShape627.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape628.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape628.point.x, bbcShape628.point.y, bbcShape628.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape629.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape629.point.x, bbcShape629.point.y, bbcShape629.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape630.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape630.point.x, bbcShape630.point.y, bbcShape630.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape631.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape631.point.x, bbcShape631.point.y, bbcShape631.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape632.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape632.point.x, bbcShape632.point.y, bbcShape632.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape633.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape633.point.x, bbcShape633.point.y, bbcShape633.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape634.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape634.point.x, bbcShape634.point.y, bbcShape634.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape635.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape635.point.x, bbcShape635.point.y, bbcShape635.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape636.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape636.point.x, bbcShape636.point.y, bbcShape636.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape637.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape637.point.x, bbcShape637.point.y, bbcShape637.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape638.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape638.point.x, bbcShape638.point.y, bbcShape638.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape639.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape639.point.x, bbcShape639.point.y, bbcShape639.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape640.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape640.point.x, bbcShape640.point.y, bbcShape640.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape641.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape641.point.x, bbcShape641.point.y, bbcShape641.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape642.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape642.point.x, bbcShape642.point.y, bbcShape642.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape643.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape643.point.x, bbcShape643.point.y, bbcShape643.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape644.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape644.point.x, bbcShape644.point.y, bbcShape644.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape645.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape645.point.x, bbcShape645.point.y, bbcShape645.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape646.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape646.point.x, bbcShape646.point.y, bbcShape646.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape647.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape647.point.x, bbcShape647.point.y, bbcShape647.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape648.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape648.point.x, bbcShape648.point.y, bbcShape648.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape649.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape649.point.x, bbcShape649.point.y, bbcShape649.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape650.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape650.point.x, bbcShape650.point.y, bbcShape650.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape651.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape651.point.x, bbcShape651.point.y, bbcShape651.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape652.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape652.point.x, bbcShape652.point.y, bbcShape652.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape653.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape653.point.x, bbcShape653.point.y, bbcShape653.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape654.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape654.point.x, bbcShape654.point.y, bbcShape654.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape655.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape655.point.x, bbcShape655.point.y, bbcShape655.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape656.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape656.point.x, bbcShape656.point.y, bbcShape656.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape657.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape657.point.x, bbcShape657.point.y, bbcShape657.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape658.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape658.point.x, bbcShape658.point.y, bbcShape658.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape659.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape659.point.x, bbcShape659.point.y, bbcShape659.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape660.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape660.point.x, bbcShape660.point.y, bbcShape660.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape661.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape661.point.x, bbcShape661.point.y, bbcShape661.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape662.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape662.point.x, bbcShape662.point.y, bbcShape662.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape663.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape663.point.x, bbcShape663.point.y, bbcShape663.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape664.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape664.point.x, bbcShape664.point.y, bbcShape664.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape665.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape665.point.x, bbcShape665.point.y, bbcShape665.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape666.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape666.point.x, bbcShape666.point.y, bbcShape666.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape667.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape667.point.x, bbcShape667.point.y, bbcShape667.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape668.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape668.point.x, bbcShape668.point.y, bbcShape668.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape669.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape669.point.x, bbcShape669.point.y, bbcShape669.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape670.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape670.point.x, bbcShape670.point.y, bbcShape670.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape671.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape671.point.x, bbcShape671.point.y, bbcShape671.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape672.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape672.point.x, bbcShape672.point.y, bbcShape672.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape673.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape673.point.x, bbcShape673.point.y, bbcShape673.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape674.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape674.point.x, bbcShape674.point.y, bbcShape674.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape675.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape675.point.x, bbcShape675.point.y, bbcShape675.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape676.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape676.point.x, bbcShape676.point.y, bbcShape676.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape677.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape677.point.x, bbcShape677.point.y, bbcShape677.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape678.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape678.point.x, bbcShape678.point.y, bbcShape678.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape679.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape679.point.x, bbcShape679.point.y, bbcShape679.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape680.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape680.point.x, bbcShape680.point.y, bbcShape680.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape681.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape681.point.x, bbcShape681.point.y, bbcShape681.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape682.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape682.point.x, bbcShape682.point.y, bbcShape682.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape683.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape683.point.x, bbcShape683.point.y, bbcShape683.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape684.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape684.point.x, bbcShape684.point.y, bbcShape684.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape685.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape685.point.x, bbcShape685.point.y, bbcShape685.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape686.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape686.point.x, bbcShape686.point.y, bbcShape686.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape687.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape687.point.x, bbcShape687.point.y, bbcShape687.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape688.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape688.point.x, bbcShape688.point.y, bbcShape688.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape689.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape689.point.x, bbcShape689.point.y, bbcShape689.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape690.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape690.point.x, bbcShape690.point.y, bbcShape690.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape691.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape691.point.x, bbcShape691.point.y, bbcShape691.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape692.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape692.point.x, bbcShape692.point.y, bbcShape692.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape693.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape693.point.x, bbcShape693.point.y, bbcShape693.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape694.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape694.point.x, bbcShape694.point.y, bbcShape694.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape695.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape695.point.x, bbcShape695.point.y, bbcShape695.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape696.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape696.point.x, bbcShape696.point.y, bbcShape696.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape697.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape697.point.x, bbcShape697.point.y, bbcShape697.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape698.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape698.point.x, bbcShape698.point.y, bbcShape698.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape699.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape699.point.x, bbcShape699.point.y, bbcShape699.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape700.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape700.point.x, bbcShape700.point.y, bbcShape700.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape701.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape701.point.x, bbcShape701.point.y, bbcShape701.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape702.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape702.point.x, bbcShape702.point.y, bbcShape702.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape703.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape703.point.x, bbcShape703.point.y, bbcShape703.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape704.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape704.point.x, bbcShape704.point.y, bbcShape704.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape705.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape705.point.x, bbcShape705.point.y, bbcShape705.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape706.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape706.point.x, bbcShape706.point.y, bbcShape706.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape707.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape707.point.x, bbcShape707.point.y, bbcShape707.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape708.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape708.point.x, bbcShape708.point.y, bbcShape708.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape709.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape709.point.x, bbcShape709.point.y, bbcShape709.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape710.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape710.point.x, bbcShape710.point.y, bbcShape710.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape711.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape711.point.x, bbcShape711.point.y, bbcShape711.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape712.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape712.point.x, bbcShape712.point.y, bbcShape712.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape713.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape713.point.x, bbcShape713.point.y, bbcShape713.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape714.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape714.point.x, bbcShape714.point.y, bbcShape714.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape715.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape715.point.x, bbcShape715.point.y, bbcShape715.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape716.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape716.point.x, bbcShape716.point.y, bbcShape716.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape717.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape717.point.x, bbcShape717.point.y, bbcShape717.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape718.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape718.point.x, bbcShape718.point.y, bbcShape718.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape719.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape719.point.x, bbcShape719.point.y, bbcShape719.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape720.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape720.point.x, bbcShape720.point.y, bbcShape720.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape721.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape721.point.x, bbcShape721.point.y, bbcShape721.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape722.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape722.point.x, bbcShape722.point.y, bbcShape722.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape723.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape723.point.x, bbcShape723.point.y, bbcShape723.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape724.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape724.point.x, bbcShape724.point.y, bbcShape724.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape725.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape725.point.x, bbcShape725.point.y, bbcShape725.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape726.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape726.point.x, bbcShape726.point.y, bbcShape726.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape727.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape727.point.x, bbcShape727.point.y, bbcShape727.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape728.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape728.point.x, bbcShape728.point.y, bbcShape728.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape729.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape729.point.x, bbcShape729.point.y, bbcShape729.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape730.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape730.point.x, bbcShape730.point.y, bbcShape730.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape731.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape731.point.x, bbcShape731.point.y, bbcShape731.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape732.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape732.point.x, bbcShape732.point.y, bbcShape732.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape733.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape733.point.x, bbcShape733.point.y, bbcShape733.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape734.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape734.point.x, bbcShape734.point.y, bbcShape734.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape735.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape735.point.x, bbcShape735.point.y, bbcShape735.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape736.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape736.point.x, bbcShape736.point.y, bbcShape736.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape737.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape737.point.x, bbcShape737.point.y, bbcShape737.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape738.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape738.point.x, bbcShape738.point.y, bbcShape738.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape739.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape739.point.x, bbcShape739.point.y, bbcShape739.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape740.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape740.point.x, bbcShape740.point.y, bbcShape740.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape741.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape741.point.x, bbcShape741.point.y, bbcShape741.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape742.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape742.point.x, bbcShape742.point.y, bbcShape742.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape743.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape743.point.x, bbcShape743.point.y, bbcShape743.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape744.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape744.point.x, bbcShape744.point.y, bbcShape744.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape745.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape745.point.x, bbcShape745.point.y, bbcShape745.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape746.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape746.point.x, bbcShape746.point.y, bbcShape746.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape747.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape747.point.x, bbcShape747.point.y, bbcShape747.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape748.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape748.point.x, bbcShape748.point.y, bbcShape748.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape749.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape749.point.x, bbcShape749.point.y, bbcShape749.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape750.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape750.point.x, bbcShape750.point.y, bbcShape750.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape751.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape751.point.x, bbcShape751.point.y, bbcShape751.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape752.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape752.point.x, bbcShape752.point.y, bbcShape752.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape753.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape753.point.x, bbcShape753.point.y, bbcShape753.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape754.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape754.point.x, bbcShape754.point.y, bbcShape754.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape755.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape755.point.x, bbcShape755.point.y, bbcShape755.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape756.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape756.point.x, bbcShape756.point.y, bbcShape756.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape757.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape757.point.x, bbcShape757.point.y, bbcShape757.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape758.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape758.point.x, bbcShape758.point.y, bbcShape758.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape759.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape759.point.x, bbcShape759.point.y, bbcShape759.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape760.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape760.point.x, bbcShape760.point.y, bbcShape760.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape761.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape761.point.x, bbcShape761.point.y, bbcShape761.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape762.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape762.point.x, bbcShape762.point.y, bbcShape762.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape763.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape763.point.x, bbcShape763.point.y, bbcShape763.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape764.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape764.point.x, bbcShape764.point.y, bbcShape764.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape765.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape765.point.x, bbcShape765.point.y, bbcShape765.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape766.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape766.point.x, bbcShape766.point.y, bbcShape766.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape767.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape767.point.x, bbcShape767.point.y, bbcShape767.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape768.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape768.point.x, bbcShape768.point.y, bbcShape768.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape769.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape769.point.x, bbcShape769.point.y, bbcShape769.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape770.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape770.point.x, bbcShape770.point.y, bbcShape770.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape771.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape771.point.x, bbcShape771.point.y, bbcShape771.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape772.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape772.point.x, bbcShape772.point.y, bbcShape772.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape773.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape773.point.x, bbcShape773.point.y, bbcShape773.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape774.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape774.point.x, bbcShape774.point.y, bbcShape774.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape775.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape775.point.x, bbcShape775.point.y, bbcShape775.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape776.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape776.point.x, bbcShape776.point.y, bbcShape776.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape777.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape777.point.x, bbcShape777.point.y, bbcShape777.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape778.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape778.point.x, bbcShape778.point.y, bbcShape778.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape779.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape779.point.x, bbcShape779.point.y, bbcShape779.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape780.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape780.point.x, bbcShape780.point.y, bbcShape780.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape781.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape781.point.x, bbcShape781.point.y, bbcShape781.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape782.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape782.point.x, bbcShape782.point.y, bbcShape782.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape783.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape783.point.x, bbcShape783.point.y, bbcShape783.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape784.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape784.point.x, bbcShape784.point.y, bbcShape784.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape785.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape785.point.x, bbcShape785.point.y, bbcShape785.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape786.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape786.point.x, bbcShape786.point.y, bbcShape786.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape787.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape787.point.x, bbcShape787.point.y, bbcShape787.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape788.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape788.point.x, bbcShape788.point.y, bbcShape788.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape789.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape789.point.x, bbcShape789.point.y, bbcShape789.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape790.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape790.point.x, bbcShape790.point.y, bbcShape790.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape791.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape791.point.x, bbcShape791.point.y, bbcShape791.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape792.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape792.point.x, bbcShape792.point.y, bbcShape792.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape793.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape793.point.x, bbcShape793.point.y, bbcShape793.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape794.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape794.point.x, bbcShape794.point.y, bbcShape794.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape795.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape795.point.x, bbcShape795.point.y, bbcShape795.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape796.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape796.point.x, bbcShape796.point.y, bbcShape796.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape797.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape797.point.x, bbcShape797.point.y, bbcShape797.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape798.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape798.point.x, bbcShape798.point.y, bbcShape798.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape799.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape799.point.x, bbcShape799.point.y, bbcShape799.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape800.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape800.point.x, bbcShape800.point.y, bbcShape800.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape801.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape801.point.x, bbcShape801.point.y, bbcShape801.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape802.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape802.point.x, bbcShape802.point.y, bbcShape802.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape803.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape803.point.x, bbcShape803.point.y, bbcShape803.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape804.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape804.point.x, bbcShape804.point.y, bbcShape804.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape805.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape805.point.x, bbcShape805.point.y, bbcShape805.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape806.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape806.point.x, bbcShape806.point.y, bbcShape806.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape807.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape807.point.x, bbcShape807.point.y, bbcShape807.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape808.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape808.point.x, bbcShape808.point.y, bbcShape808.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape809.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape809.point.x, bbcShape809.point.y, bbcShape809.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape810.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape810.point.x, bbcShape810.point.y, bbcShape810.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape811.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape811.point.x, bbcShape811.point.y, bbcShape811.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape812.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape812.point.x, bbcShape812.point.y, bbcShape812.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape813.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape813.point.x, bbcShape813.point.y, bbcShape813.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape814.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape814.point.x, bbcShape814.point.y, bbcShape814.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape815.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape815.point.x, bbcShape815.point.y, bbcShape815.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape816.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape816.point.x, bbcShape816.point.y, bbcShape816.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape817.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape817.point.x, bbcShape817.point.y, bbcShape817.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape818.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape818.point.x, bbcShape818.point.y, bbcShape818.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape819.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape819.point.x, bbcShape819.point.y, bbcShape819.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape820.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape820.point.x, bbcShape820.point.y, bbcShape820.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape821.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape821.point.x, bbcShape821.point.y, bbcShape821.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape822.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape822.point.x, bbcShape822.point.y, bbcShape822.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape823.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape823.point.x, bbcShape823.point.y, bbcShape823.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape824.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape824.point.x, bbcShape824.point.y, bbcShape824.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape825.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape825.point.x, bbcShape825.point.y, bbcShape825.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape826.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape826.point.x, bbcShape826.point.y, bbcShape826.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape827.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape827.point.x, bbcShape827.point.y, bbcShape827.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape828.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape828.point.x, bbcShape828.point.y, bbcShape828.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape829.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape829.point.x, bbcShape829.point.y, bbcShape829.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape830.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape830.point.x, bbcShape830.point.y, bbcShape830.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape831.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape831.point.x, bbcShape831.point.y, bbcShape831.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape832.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape832.point.x, bbcShape832.point.y, bbcShape832.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape833.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape833.point.x, bbcShape833.point.y, bbcShape833.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape834.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape834.point.x, bbcShape834.point.y, bbcShape834.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape835.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape835.point.x, bbcShape835.point.y, bbcShape835.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape836.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape836.point.x, bbcShape836.point.y, bbcShape836.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape837.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape837.point.x, bbcShape837.point.y, bbcShape837.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape838.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape838.point.x, bbcShape838.point.y, bbcShape838.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape839.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape839.point.x, bbcShape839.point.y, bbcShape839.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape840.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape840.point.x, bbcShape840.point.y, bbcShape840.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape841.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape841.point.x, bbcShape841.point.y, bbcShape841.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape842.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape842.point.x, bbcShape842.point.y, bbcShape842.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape843.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape843.point.x, bbcShape843.point.y, bbcShape843.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape844.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape844.point.x, bbcShape844.point.y, bbcShape844.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape845.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape845.point.x, bbcShape845.point.y, bbcShape845.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape846.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape846.point.x, bbcShape846.point.y, bbcShape846.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape847.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape847.point.x, bbcShape847.point.y, bbcShape847.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape848.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape848.point.x, bbcShape848.point.y, bbcShape848.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape849.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape849.point.x, bbcShape849.point.y, bbcShape849.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape850.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape850.point.x, bbcShape850.point.y, bbcShape850.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape851.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape851.point.x, bbcShape851.point.y, bbcShape851.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape852.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape852.point.x, bbcShape852.point.y, bbcShape852.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape853.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape853.point.x, bbcShape853.point.y, bbcShape853.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape854.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape854.point.x, bbcShape854.point.y, bbcShape854.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape855.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape855.point.x, bbcShape855.point.y, bbcShape855.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape856.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape856.point.x, bbcShape856.point.y, bbcShape856.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape857.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape857.point.x, bbcShape857.point.y, bbcShape857.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape858.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape858.point.x, bbcShape858.point.y, bbcShape858.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape859.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape859.point.x, bbcShape859.point.y, bbcShape859.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape860.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape860.point.x, bbcShape860.point.y, bbcShape860.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape861.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape861.point.x, bbcShape861.point.y, bbcShape861.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape862.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape862.point.x, bbcShape862.point.y, bbcShape862.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape863.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape863.point.x, bbcShape863.point.y, bbcShape863.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape864.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape864.point.x, bbcShape864.point.y, bbcShape864.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape865.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape865.point.x, bbcShape865.point.y, bbcShape865.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape866.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape866.point.x, bbcShape866.point.y, bbcShape866.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape867.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape867.point.x, bbcShape867.point.y, bbcShape867.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape868.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape868.point.x, bbcShape868.point.y, bbcShape868.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape869.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape869.point.x, bbcShape869.point.y, bbcShape869.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape870.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape870.point.x, bbcShape870.point.y, bbcShape870.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape871.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape871.point.x, bbcShape871.point.y, bbcShape871.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape872.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape872.point.x, bbcShape872.point.y, bbcShape872.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape873.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape873.point.x, bbcShape873.point.y, bbcShape873.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape874.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape874.point.x, bbcShape874.point.y, bbcShape874.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape875.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape875.point.x, bbcShape875.point.y, bbcShape875.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape876.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape876.point.x, bbcShape876.point.y, bbcShape876.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape877.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape877.point.x, bbcShape877.point.y, bbcShape877.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape878.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape878.point.x, bbcShape878.point.y, bbcShape878.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape879.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape879.point.x, bbcShape879.point.y, bbcShape879.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape880.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape880.point.x, bbcShape880.point.y, bbcShape880.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape881.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape881.point.x, bbcShape881.point.y, bbcShape881.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape882.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape882.point.x, bbcShape882.point.y, bbcShape882.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape883.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape883.point.x, bbcShape883.point.y, bbcShape883.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape884.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape884.point.x, bbcShape884.point.y, bbcShape884.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape885.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape885.point.x, bbcShape885.point.y, bbcShape885.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape886.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape886.point.x, bbcShape886.point.y, bbcShape886.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape887.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape887.point.x, bbcShape887.point.y, bbcShape887.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape888.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape888.point.x, bbcShape888.point.y, bbcShape888.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape889.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape889.point.x, bbcShape889.point.y, bbcShape889.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape890.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape890.point.x, bbcShape890.point.y, bbcShape890.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape891.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape891.point.x, bbcShape891.point.y, bbcShape891.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape892.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape892.point.x, bbcShape892.point.y, bbcShape892.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape893.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape893.point.x, bbcShape893.point.y, bbcShape893.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape894.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape894.point.x, bbcShape894.point.y, bbcShape894.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape895.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape895.point.x, bbcShape895.point.y, bbcShape895.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape896.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape896.point.x, bbcShape896.point.y, bbcShape896.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape897.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape897.point.x, bbcShape897.point.y, bbcShape897.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape898.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape898.point.x, bbcShape898.point.y, bbcShape898.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape899.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape899.point.x, bbcShape899.point.y, bbcShape899.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape900.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape900.point.x, bbcShape900.point.y, bbcShape900.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape901.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape901.point.x, bbcShape901.point.y, bbcShape901.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape902.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape902.point.x, bbcShape902.point.y, bbcShape902.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape903.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape903.point.x, bbcShape903.point.y, bbcShape903.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape904.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape904.point.x, bbcShape904.point.y, bbcShape904.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape905.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape905.point.x, bbcShape905.point.y, bbcShape905.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape906.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape906.point.x, bbcShape906.point.y, bbcShape906.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape907.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape907.point.x, bbcShape907.point.y, bbcShape907.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape908.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape908.point.x, bbcShape908.point.y, bbcShape908.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape909.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape909.point.x, bbcShape909.point.y, bbcShape909.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape910.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape910.point.x, bbcShape910.point.y, bbcShape910.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape911.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape911.point.x, bbcShape911.point.y, bbcShape911.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape912.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape912.point.x, bbcShape912.point.y, bbcShape912.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape913.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape913.point.x, bbcShape913.point.y, bbcShape913.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape914.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape914.point.x, bbcShape914.point.y, bbcShape914.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape915.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape915.point.x, bbcShape915.point.y, bbcShape915.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape916.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape916.point.x, bbcShape916.point.y, bbcShape916.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape917.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape917.point.x, bbcShape917.point.y, bbcShape917.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape918.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape918.point.x, bbcShape918.point.y, bbcShape918.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape919.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape919.point.x, bbcShape919.point.y, bbcShape919.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape920.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape920.point.x, bbcShape920.point.y, bbcShape920.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape921.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape921.point.x, bbcShape921.point.y, bbcShape921.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape922.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape922.point.x, bbcShape922.point.y, bbcShape922.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape923.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape923.point.x, bbcShape923.point.y, bbcShape923.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape924.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape924.point.x, bbcShape924.point.y, bbcShape924.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape925.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape925.point.x, bbcShape925.point.y, bbcShape925.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape926.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape926.point.x, bbcShape926.point.y, bbcShape926.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape927.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape927.point.x, bbcShape927.point.y, bbcShape927.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape928.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape928.point.x, bbcShape928.point.y, bbcShape928.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape929.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape929.point.x, bbcShape929.point.y, bbcShape929.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape930.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape930.point.x, bbcShape930.point.y, bbcShape930.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape931.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape931.point.x, bbcShape931.point.y, bbcShape931.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape932.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape932.point.x, bbcShape932.point.y, bbcShape932.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape933.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape933.point.x, bbcShape933.point.y, bbcShape933.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape934.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape934.point.x, bbcShape934.point.y, bbcShape934.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape935.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape935.point.x, bbcShape935.point.y, bbcShape935.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape936.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape936.point.x, bbcShape936.point.y, bbcShape936.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape937.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape937.point.x, bbcShape937.point.y, bbcShape937.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape938.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape938.point.x, bbcShape938.point.y, bbcShape938.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape939.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape939.point.x, bbcShape939.point.y, bbcShape939.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape940.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape940.point.x, bbcShape940.point.y, bbcShape940.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape941.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape941.point.x, bbcShape941.point.y, bbcShape941.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape942.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape942.point.x, bbcShape942.point.y, bbcShape942.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape943.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape943.point.x, bbcShape943.point.y, bbcShape943.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape944.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape944.point.x, bbcShape944.point.y, bbcShape944.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape945.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape945.point.x, bbcShape945.point.y, bbcShape945.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape946.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape946.point.x, bbcShape946.point.y, bbcShape946.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape947.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape947.point.x, bbcShape947.point.y, bbcShape947.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape948.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape948.point.x, bbcShape948.point.y, bbcShape948.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape949.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape949.point.x, bbcShape949.point.y, bbcShape949.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape950.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape950.point.x, bbcShape950.point.y, bbcShape950.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape951.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape951.point.x, bbcShape951.point.y, bbcShape951.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape952.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape952.point.x, bbcShape952.point.y, bbcShape952.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape953.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape953.point.x, bbcShape953.point.y, bbcShape953.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape954.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape954.point.x, bbcShape954.point.y, bbcShape954.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape955.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape955.point.x, bbcShape955.point.y, bbcShape955.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape956.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape956.point.x, bbcShape956.point.y, bbcShape956.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape957.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape957.point.x, bbcShape957.point.y, bbcShape957.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape958.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape958.point.x, bbcShape958.point.y, bbcShape958.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape959.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape959.point.x, bbcShape959.point.y, bbcShape959.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape960.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape960.point.x, bbcShape960.point.y, bbcShape960.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape961.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape961.point.x, bbcShape961.point.y, bbcShape961.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape962.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape962.point.x, bbcShape962.point.y, bbcShape962.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape963.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape963.point.x, bbcShape963.point.y, bbcShape963.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape964.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape964.point.x, bbcShape964.point.y, bbcShape964.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape965.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape965.point.x, bbcShape965.point.y, bbcShape965.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape966.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape966.point.x, bbcShape966.point.y, bbcShape966.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape967.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape967.point.x, bbcShape967.point.y, bbcShape967.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape968.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape968.point.x, bbcShape968.point.y, bbcShape968.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape969.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape969.point.x, bbcShape969.point.y, bbcShape969.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape970.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape970.point.x, bbcShape970.point.y, bbcShape970.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape971.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape971.point.x, bbcShape971.point.y, bbcShape971.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape972.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape972.point.x, bbcShape972.point.y, bbcShape972.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape973.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape973.point.x, bbcShape973.point.y, bbcShape973.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape974.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape974.point.x, bbcShape974.point.y, bbcShape974.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape975.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape975.point.x, bbcShape975.point.y, bbcShape975.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape976.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape976.point.x, bbcShape976.point.y, bbcShape976.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape977.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape977.point.x, bbcShape977.point.y, bbcShape977.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape978.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape978.point.x, bbcShape978.point.y, bbcShape978.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape979.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape979.point.x, bbcShape979.point.y, bbcShape979.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape980.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape980.point.x, bbcShape980.point.y, bbcShape980.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape981.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape981.point.x, bbcShape981.point.y, bbcShape981.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape982.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape982.point.x, bbcShape982.point.y, bbcShape982.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape983.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape983.point.x, bbcShape983.point.y, bbcShape983.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape984.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape984.point.x, bbcShape984.point.y, bbcShape984.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape985.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape985.point.x, bbcShape985.point.y, bbcShape985.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape986.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape986.point.x, bbcShape986.point.y, bbcShape986.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape987.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape987.point.x, bbcShape987.point.y, bbcShape987.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape988.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape988.point.x, bbcShape988.point.y, bbcShape988.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape989.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape989.point.x, bbcShape989.point.y, bbcShape989.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape990.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape990.point.x, bbcShape990.point.y, bbcShape990.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape991.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape991.point.x, bbcShape991.point.y, bbcShape991.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape992.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape992.point.x, bbcShape992.point.y, bbcShape992.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape993.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape993.point.x, bbcShape993.point.y, bbcShape993.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape994.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape994.point.x, bbcShape994.point.y, bbcShape994.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape995.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape995.point.x, bbcShape995.point.y, bbcShape995.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape996.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape996.point.x, bbcShape996.point.y, bbcShape996.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape997.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape997.point.x, bbcShape997.point.y, bbcShape997.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape998.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape998.point.x, bbcShape998.point.y, bbcShape998.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape999.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape999.point.x, bbcShape999.point.y, bbcShape999.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1000.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1000.point.x, bbcShape1000.point.y, bbcShape1000.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1001.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1001.point.x, bbcShape1001.point.y, bbcShape1001.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1002.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1002.point.x, bbcShape1002.point.y, bbcShape1002.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1003.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1003.point.x, bbcShape1003.point.y, bbcShape1003.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1004.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1004.point.x, bbcShape1004.point.y, bbcShape1004.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1005.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1005.point.x, bbcShape1005.point.y, bbcShape1005.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1006.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1006.point.x, bbcShape1006.point.y, bbcShape1006.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1007.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1007.point.x, bbcShape1007.point.y, bbcShape1007.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1008.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1008.point.x, bbcShape1008.point.y, bbcShape1008.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1009.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1009.point.x, bbcShape1009.point.y, bbcShape1009.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1010.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1010.point.x, bbcShape1010.point.y, bbcShape1010.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1011.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1011.point.x, bbcShape1011.point.y, bbcShape1011.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1012.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1012.point.x, bbcShape1012.point.y, bbcShape1012.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1013.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1013.point.x, bbcShape1013.point.y, bbcShape1013.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1014.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1014.point.x, bbcShape1014.point.y, bbcShape1014.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1015.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1015.point.x, bbcShape1015.point.y, bbcShape1015.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1016.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1016.point.x, bbcShape1016.point.y, bbcShape1016.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1017.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1017.point.x, bbcShape1017.point.y, bbcShape1017.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1018.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1018.point.x, bbcShape1018.point.y, bbcShape1018.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1019.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1019.point.x, bbcShape1019.point.y, bbcShape1019.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1020.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1020.point.x, bbcShape1020.point.y, bbcShape1020.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1021.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1021.point.x, bbcShape1021.point.y, bbcShape1021.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1022.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1022.point.x, bbcShape1022.point.y, bbcShape1022.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1023.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1023.point.x, bbcShape1023.point.y, bbcShape1023.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1024.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1024.point.x, bbcShape1024.point.y, bbcShape1024.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1025.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1025.point.x, bbcShape1025.point.y, bbcShape1025.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1026.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1026.point.x, bbcShape1026.point.y, bbcShape1026.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1027.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1027.point.x, bbcShape1027.point.y, bbcShape1027.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1028.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1028.point.x, bbcShape1028.point.y, bbcShape1028.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1029.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1029.point.x, bbcShape1029.point.y, bbcShape1029.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1030.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1030.point.x, bbcShape1030.point.y, bbcShape1030.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1031.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1031.point.x, bbcShape1031.point.y, bbcShape1031.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1032.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1032.point.x, bbcShape1032.point.y, bbcShape1032.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1033.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1033.point.x, bbcShape1033.point.y, bbcShape1033.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1034.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1034.point.x, bbcShape1034.point.y, bbcShape1034.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1035.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1035.point.x, bbcShape1035.point.y, bbcShape1035.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1036.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1036.point.x, bbcShape1036.point.y, bbcShape1036.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1037.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1037.point.x, bbcShape1037.point.y, bbcShape1037.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1038.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1038.point.x, bbcShape1038.point.y, bbcShape1038.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1039.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1039.point.x, bbcShape1039.point.y, bbcShape1039.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1040.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1040.point.x, bbcShape1040.point.y, bbcShape1040.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1041.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1041.point.x, bbcShape1041.point.y, bbcShape1041.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1042.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1042.point.x, bbcShape1042.point.y, bbcShape1042.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1043.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1043.point.x, bbcShape1043.point.y, bbcShape1043.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1044.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1044.point.x, bbcShape1044.point.y, bbcShape1044.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1045.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1045.point.x, bbcShape1045.point.y, bbcShape1045.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1046.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1046.point.x, bbcShape1046.point.y, bbcShape1046.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1047.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1047.point.x, bbcShape1047.point.y, bbcShape1047.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1048.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1048.point.x, bbcShape1048.point.y, bbcShape1048.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1049.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1049.point.x, bbcShape1049.point.y, bbcShape1049.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1050.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1050.point.x, bbcShape1050.point.y, bbcShape1050.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1051.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1051.point.x, bbcShape1051.point.y, bbcShape1051.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1052.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1052.point.x, bbcShape1052.point.y, bbcShape1052.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1053.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1053.point.x, bbcShape1053.point.y, bbcShape1053.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1054.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1054.point.x, bbcShape1054.point.y, bbcShape1054.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1055.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1055.point.x, bbcShape1055.point.y, bbcShape1055.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1056.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1056.point.x, bbcShape1056.point.y, bbcShape1056.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1057.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1057.point.x, bbcShape1057.point.y, bbcShape1057.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1058.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1058.point.x, bbcShape1058.point.y, bbcShape1058.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1059.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1059.point.x, bbcShape1059.point.y, bbcShape1059.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1060.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1060.point.x, bbcShape1060.point.y, bbcShape1060.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1061.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1061.point.x, bbcShape1061.point.y, bbcShape1061.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1062.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1062.point.x, bbcShape1062.point.y, bbcShape1062.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1063.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1063.point.x, bbcShape1063.point.y, bbcShape1063.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1064.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1064.point.x, bbcShape1064.point.y, bbcShape1064.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1065.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1065.point.x, bbcShape1065.point.y, bbcShape1065.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1066.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1066.point.x, bbcShape1066.point.y, bbcShape1066.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1067.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1067.point.x, bbcShape1067.point.y, bbcShape1067.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1068.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1068.point.x, bbcShape1068.point.y, bbcShape1068.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1069.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1069.point.x, bbcShape1069.point.y, bbcShape1069.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1070.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1070.point.x, bbcShape1070.point.y, bbcShape1070.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1071.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1071.point.x, bbcShape1071.point.y, bbcShape1071.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1072.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1072.point.x, bbcShape1072.point.y, bbcShape1072.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1073.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1073.point.x, bbcShape1073.point.y, bbcShape1073.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1074.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1074.point.x, bbcShape1074.point.y, bbcShape1074.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1075.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1075.point.x, bbcShape1075.point.y, bbcShape1075.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1076.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1076.point.x, bbcShape1076.point.y, bbcShape1076.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1077.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1077.point.x, bbcShape1077.point.y, bbcShape1077.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1078.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1078.point.x, bbcShape1078.point.y, bbcShape1078.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1079.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1079.point.x, bbcShape1079.point.y, bbcShape1079.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1080.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1080.point.x, bbcShape1080.point.y, bbcShape1080.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1081.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1081.point.x, bbcShape1081.point.y, bbcShape1081.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1082.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1082.point.x, bbcShape1082.point.y, bbcShape1082.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1083.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1083.point.x, bbcShape1083.point.y, bbcShape1083.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1084.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1084.point.x, bbcShape1084.point.y, bbcShape1084.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1085.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1085.point.x, bbcShape1085.point.y, bbcShape1085.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1086.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1086.point.x, bbcShape1086.point.y, bbcShape1086.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1087.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1087.point.x, bbcShape1087.point.y, bbcShape1087.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1088.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1088.point.x, bbcShape1088.point.y, bbcShape1088.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1089.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1089.point.x, bbcShape1089.point.y, bbcShape1089.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1090.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1090.point.x, bbcShape1090.point.y, bbcShape1090.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1091.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1091.point.x, bbcShape1091.point.y, bbcShape1091.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1092.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1092.point.x, bbcShape1092.point.y, bbcShape1092.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1093.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1093.point.x, bbcShape1093.point.y, bbcShape1093.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1094.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1094.point.x, bbcShape1094.point.y, bbcShape1094.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1095.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1095.point.x, bbcShape1095.point.y, bbcShape1095.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1096.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1096.point.x, bbcShape1096.point.y, bbcShape1096.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1097.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1097.point.x, bbcShape1097.point.y, bbcShape1097.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1098.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1098.point.x, bbcShape1098.point.y, bbcShape1098.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1099.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1099.point.x, bbcShape1099.point.y, bbcShape1099.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1100.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1100.point.x, bbcShape1100.point.y, bbcShape1100.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1101.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1101.point.x, bbcShape1101.point.y, bbcShape1101.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1102.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1102.point.x, bbcShape1102.point.y, bbcShape1102.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1103.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1103.point.x, bbcShape1103.point.y, bbcShape1103.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1104.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1104.point.x, bbcShape1104.point.y, bbcShape1104.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1105.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1105.point.x, bbcShape1105.point.y, bbcShape1105.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1106.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1106.point.x, bbcShape1106.point.y, bbcShape1106.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1107.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1107.point.x, bbcShape1107.point.y, bbcShape1107.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1108.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1108.point.x, bbcShape1108.point.y, bbcShape1108.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1109.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1109.point.x, bbcShape1109.point.y, bbcShape1109.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1110.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1110.point.x, bbcShape1110.point.y, bbcShape1110.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1111.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1111.point.x, bbcShape1111.point.y, bbcShape1111.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1112.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1112.point.x, bbcShape1112.point.y, bbcShape1112.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1113.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1113.point.x, bbcShape1113.point.y, bbcShape1113.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1114.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1114.point.x, bbcShape1114.point.y, bbcShape1114.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1115.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1115.point.x, bbcShape1115.point.y, bbcShape1115.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1116.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1116.point.x, bbcShape1116.point.y, bbcShape1116.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1117.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1117.point.x, bbcShape1117.point.y, bbcShape1117.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1118.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1118.point.x, bbcShape1118.point.y, bbcShape1118.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1119.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1119.point.x, bbcShape1119.point.y, bbcShape1119.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1120.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1120.point.x, bbcShape1120.point.y, bbcShape1120.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1121.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1121.point.x, bbcShape1121.point.y, bbcShape1121.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1122.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1122.point.x, bbcShape1122.point.y, bbcShape1122.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1123.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1123.point.x, bbcShape1123.point.y, bbcShape1123.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1124.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1124.point.x, bbcShape1124.point.y, bbcShape1124.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1125.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1125.point.x, bbcShape1125.point.y, bbcShape1125.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1126.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1126.point.x, bbcShape1126.point.y, bbcShape1126.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1127.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1127.point.x, bbcShape1127.point.y, bbcShape1127.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1128.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1128.point.x, bbcShape1128.point.y, bbcShape1128.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1129.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1129.point.x, bbcShape1129.point.y, bbcShape1129.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1130.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1130.point.x, bbcShape1130.point.y, bbcShape1130.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1131.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1131.point.x, bbcShape1131.point.y, bbcShape1131.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1132.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1132.point.x, bbcShape1132.point.y, bbcShape1132.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1133.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1133.point.x, bbcShape1133.point.y, bbcShape1133.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1134.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1134.point.x, bbcShape1134.point.y, bbcShape1134.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1135.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1135.point.x, bbcShape1135.point.y, bbcShape1135.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1136.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1136.point.x, bbcShape1136.point.y, bbcShape1136.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1137.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1137.point.x, bbcShape1137.point.y, bbcShape1137.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1138.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1138.point.x, bbcShape1138.point.y, bbcShape1138.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1139.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1139.point.x, bbcShape1139.point.y, bbcShape1139.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1140.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1140.point.x, bbcShape1140.point.y, bbcShape1140.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1141.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1141.point.x, bbcShape1141.point.y, bbcShape1141.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1142.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1142.point.x, bbcShape1142.point.y, bbcShape1142.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1143.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1143.point.x, bbcShape1143.point.y, bbcShape1143.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1144.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1144.point.x, bbcShape1144.point.y, bbcShape1144.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1145.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1145.point.x, bbcShape1145.point.y, bbcShape1145.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1146.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1146.point.x, bbcShape1146.point.y, bbcShape1146.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1147.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1147.point.x, bbcShape1147.point.y, bbcShape1147.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1148.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1148.point.x, bbcShape1148.point.y, bbcShape1148.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1149.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1149.point.x, bbcShape1149.point.y, bbcShape1149.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1150.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1150.point.x, bbcShape1150.point.y, bbcShape1150.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1151.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1151.point.x, bbcShape1151.point.y, bbcShape1151.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1152.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1152.point.x, bbcShape1152.point.y, bbcShape1152.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1153.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1153.point.x, bbcShape1153.point.y, bbcShape1153.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1154.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1154.point.x, bbcShape1154.point.y, bbcShape1154.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1155.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1155.point.x, bbcShape1155.point.y, bbcShape1155.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1156.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1156.point.x, bbcShape1156.point.y, bbcShape1156.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1157.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1157.point.x, bbcShape1157.point.y, bbcShape1157.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1158.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1158.point.x, bbcShape1158.point.y, bbcShape1158.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1159.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1159.point.x, bbcShape1159.point.y, bbcShape1159.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1160.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1160.point.x, bbcShape1160.point.y, bbcShape1160.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1161.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1161.point.x, bbcShape1161.point.y, bbcShape1161.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1162.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1162.point.x, bbcShape1162.point.y, bbcShape1162.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1163.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1163.point.x, bbcShape1163.point.y, bbcShape1163.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1164.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1164.point.x, bbcShape1164.point.y, bbcShape1164.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1165.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1165.point.x, bbcShape1165.point.y, bbcShape1165.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1166.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1166.point.x, bbcShape1166.point.y, bbcShape1166.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1167.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1167.point.x, bbcShape1167.point.y, bbcShape1167.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1168.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1168.point.x, bbcShape1168.point.y, bbcShape1168.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1169.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1169.point.x, bbcShape1169.point.y, bbcShape1169.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1170.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1170.point.x, bbcShape1170.point.y, bbcShape1170.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1171.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1171.point.x, bbcShape1171.point.y, bbcShape1171.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1172.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1172.point.x, bbcShape1172.point.y, bbcShape1172.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1173.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1173.point.x, bbcShape1173.point.y, bbcShape1173.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1174.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1174.point.x, bbcShape1174.point.y, bbcShape1174.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1175.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1175.point.x, bbcShape1175.point.y, bbcShape1175.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1176.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1176.point.x, bbcShape1176.point.y, bbcShape1176.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1177.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1177.point.x, bbcShape1177.point.y, bbcShape1177.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1178.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1178.point.x, bbcShape1178.point.y, bbcShape1178.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1179.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1179.point.x, bbcShape1179.point.y, bbcShape1179.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1180.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1180.point.x, bbcShape1180.point.y, bbcShape1180.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1181.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1181.point.x, bbcShape1181.point.y, bbcShape1181.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1182.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1182.point.x, bbcShape1182.point.y, bbcShape1182.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1183.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1183.point.x, bbcShape1183.point.y, bbcShape1183.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1184.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1184.point.x, bbcShape1184.point.y, bbcShape1184.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1185.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1185.point.x, bbcShape1185.point.y, bbcShape1185.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1186.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1186.point.x, bbcShape1186.point.y, bbcShape1186.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1187.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1187.point.x, bbcShape1187.point.y, bbcShape1187.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1188.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1188.point.x, bbcShape1188.point.y, bbcShape1188.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1189.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1189.point.x, bbcShape1189.point.y, bbcShape1189.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1190.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1190.point.x, bbcShape1190.point.y, bbcShape1190.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1191.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1191.point.x, bbcShape1191.point.y, bbcShape1191.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1192.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1192.point.x, bbcShape1192.point.y, bbcShape1192.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1193.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1193.point.x, bbcShape1193.point.y, bbcShape1193.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1194.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1194.point.x, bbcShape1194.point.y, bbcShape1194.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1195.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1195.point.x, bbcShape1195.point.y, bbcShape1195.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1196.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1196.point.x, bbcShape1196.point.y, bbcShape1196.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1197.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1197.point.x, bbcShape1197.point.y, bbcShape1197.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1198.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1198.point.x, bbcShape1198.point.y, bbcShape1198.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1199.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1199.point.x, bbcShape1199.point.y, bbcShape1199.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1200.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1200.point.x, bbcShape1200.point.y, bbcShape1200.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1201.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1201.point.x, bbcShape1201.point.y, bbcShape1201.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1202.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1202.point.x, bbcShape1202.point.y, bbcShape1202.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1203.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1203.point.x, bbcShape1203.point.y, bbcShape1203.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1204.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1204.point.x, bbcShape1204.point.y, bbcShape1204.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1205.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1205.point.x, bbcShape1205.point.y, bbcShape1205.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1206.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1206.point.x, bbcShape1206.point.y, bbcShape1206.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1207.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1207.point.x, bbcShape1207.point.y, bbcShape1207.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1208.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1208.point.x, bbcShape1208.point.y, bbcShape1208.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1209.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1209.point.x, bbcShape1209.point.y, bbcShape1209.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1210.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1210.point.x, bbcShape1210.point.y, bbcShape1210.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1211.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1211.point.x, bbcShape1211.point.y, bbcShape1211.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1212.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1212.point.x, bbcShape1212.point.y, bbcShape1212.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1213.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1213.point.x, bbcShape1213.point.y, bbcShape1213.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1214.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1214.point.x, bbcShape1214.point.y, bbcShape1214.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1215.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1215.point.x, bbcShape1215.point.y, bbcShape1215.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1216.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1216.point.x, bbcShape1216.point.y, bbcShape1216.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1217.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1217.point.x, bbcShape1217.point.y, bbcShape1217.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1218.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1218.point.x, bbcShape1218.point.y, bbcShape1218.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1219.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1219.point.x, bbcShape1219.point.y, bbcShape1219.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1220.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1220.point.x, bbcShape1220.point.y, bbcShape1220.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1221.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1221.point.x, bbcShape1221.point.y, bbcShape1221.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1222.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1222.point.x, bbcShape1222.point.y, bbcShape1222.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1223.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1223.point.x, bbcShape1223.point.y, bbcShape1223.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1224.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1224.point.x, bbcShape1224.point.y, bbcShape1224.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1225.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1225.point.x, bbcShape1225.point.y, bbcShape1225.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1226.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1226.point.x, bbcShape1226.point.y, bbcShape1226.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1227.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1227.point.x, bbcShape1227.point.y, bbcShape1227.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1228.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1228.point.x, bbcShape1228.point.y, bbcShape1228.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1229.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1229.point.x, bbcShape1229.point.y, bbcShape1229.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1230.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1230.point.x, bbcShape1230.point.y, bbcShape1230.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1231.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1231.point.x, bbcShape1231.point.y, bbcShape1231.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1232.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1232.point.x, bbcShape1232.point.y, bbcShape1232.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1233.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1233.point.x, bbcShape1233.point.y, bbcShape1233.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1234.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1234.point.x, bbcShape1234.point.y, bbcShape1234.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1235.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1235.point.x, bbcShape1235.point.y, bbcShape1235.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1236.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1236.point.x, bbcShape1236.point.y, bbcShape1236.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1237.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1237.point.x, bbcShape1237.point.y, bbcShape1237.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1238.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1238.point.x, bbcShape1238.point.y, bbcShape1238.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1239.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1239.point.x, bbcShape1239.point.y, bbcShape1239.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1240.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1240.point.x, bbcShape1240.point.y, bbcShape1240.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1241.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1241.point.x, bbcShape1241.point.y, bbcShape1241.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1242.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1242.point.x, bbcShape1242.point.y, bbcShape1242.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1243.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1243.point.x, bbcShape1243.point.y, bbcShape1243.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1244.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1244.point.x, bbcShape1244.point.y, bbcShape1244.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1245.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1245.point.x, bbcShape1245.point.y, bbcShape1245.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1246.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1246.point.x, bbcShape1246.point.y, bbcShape1246.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1247.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1247.point.x, bbcShape1247.point.y, bbcShape1247.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1248.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1248.point.x, bbcShape1248.point.y, bbcShape1248.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1249.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1249.point.x, bbcShape1249.point.y, bbcShape1249.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1250.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1250.point.x, bbcShape1250.point.y, bbcShape1250.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1251.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1251.point.x, bbcShape1251.point.y, bbcShape1251.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1252.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1252.point.x, bbcShape1252.point.y, bbcShape1252.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1253.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1253.point.x, bbcShape1253.point.y, bbcShape1253.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1254.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1254.point.x, bbcShape1254.point.y, bbcShape1254.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1255.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1255.point.x, bbcShape1255.point.y, bbcShape1255.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1256.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1256.point.x, bbcShape1256.point.y, bbcShape1256.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1257.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1257.point.x, bbcShape1257.point.y, bbcShape1257.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1258.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1258.point.x, bbcShape1258.point.y, bbcShape1258.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1259.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1259.point.x, bbcShape1259.point.y, bbcShape1259.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1260.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1260.point.x, bbcShape1260.point.y, bbcShape1260.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1261.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1261.point.x, bbcShape1261.point.y, bbcShape1261.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1262.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1262.point.x, bbcShape1262.point.y, bbcShape1262.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1263.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1263.point.x, bbcShape1263.point.y, bbcShape1263.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1264.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1264.point.x, bbcShape1264.point.y, bbcShape1264.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1265.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1265.point.x, bbcShape1265.point.y, bbcShape1265.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1266.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1266.point.x, bbcShape1266.point.y, bbcShape1266.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1267.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1267.point.x, bbcShape1267.point.y, bbcShape1267.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1268.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1268.point.x, bbcShape1268.point.y, bbcShape1268.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1269.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1269.point.x, bbcShape1269.point.y, bbcShape1269.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1270.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1270.point.x, bbcShape1270.point.y, bbcShape1270.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1271.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1271.point.x, bbcShape1271.point.y, bbcShape1271.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1272.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1272.point.x, bbcShape1272.point.y, bbcShape1272.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1273.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1273.point.x, bbcShape1273.point.y, bbcShape1273.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1274.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1274.point.x, bbcShape1274.point.y, bbcShape1274.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1275.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1275.point.x, bbcShape1275.point.y, bbcShape1275.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1276.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1276.point.x, bbcShape1276.point.y, bbcShape1276.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1277.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1277.point.x, bbcShape1277.point.y, bbcShape1277.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1278.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1278.point.x, bbcShape1278.point.y, bbcShape1278.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1279.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1279.point.x, bbcShape1279.point.y, bbcShape1279.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1280.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1280.point.x, bbcShape1280.point.y, bbcShape1280.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1281.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1281.point.x, bbcShape1281.point.y, bbcShape1281.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1282.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1282.point.x, bbcShape1282.point.y, bbcShape1282.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1283.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1283.point.x, bbcShape1283.point.y, bbcShape1283.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1284.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1284.point.x, bbcShape1284.point.y, bbcShape1284.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1285.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1285.point.x, bbcShape1285.point.y, bbcShape1285.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1286.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1286.point.x, bbcShape1286.point.y, bbcShape1286.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1287.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1287.point.x, bbcShape1287.point.y, bbcShape1287.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1288.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1288.point.x, bbcShape1288.point.y, bbcShape1288.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1289.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1289.point.x, bbcShape1289.point.y, bbcShape1289.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1290.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1290.point.x, bbcShape1290.point.y, bbcShape1290.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1291.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1291.point.x, bbcShape1291.point.y, bbcShape1291.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1292.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1292.point.x, bbcShape1292.point.y, bbcShape1292.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1293.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1293.point.x, bbcShape1293.point.y, bbcShape1293.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1294.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1294.point.x, bbcShape1294.point.y, bbcShape1294.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1295.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1295.point.x, bbcShape1295.point.y, bbcShape1295.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1296.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1296.point.x, bbcShape1296.point.y, bbcShape1296.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1297.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1297.point.x, bbcShape1297.point.y, bbcShape1297.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1298.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1298.point.x, bbcShape1298.point.y, bbcShape1298.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1299.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1299.point.x, bbcShape1299.point.y, bbcShape1299.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1300.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1300.point.x, bbcShape1300.point.y, bbcShape1300.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1301.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1301.point.x, bbcShape1301.point.y, bbcShape1301.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1302.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1302.point.x, bbcShape1302.point.y, bbcShape1302.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1303.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1303.point.x, bbcShape1303.point.y, bbcShape1303.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1304.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1304.point.x, bbcShape1304.point.y, bbcShape1304.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1305.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1305.point.x, bbcShape1305.point.y, bbcShape1305.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1306.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1306.point.x, bbcShape1306.point.y, bbcShape1306.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1307.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1307.point.x, bbcShape1307.point.y, bbcShape1307.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1308.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1308.point.x, bbcShape1308.point.y, bbcShape1308.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1309.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1309.point.x, bbcShape1309.point.y, bbcShape1309.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1310.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1310.point.x, bbcShape1310.point.y, bbcShape1310.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1311.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1311.point.x, bbcShape1311.point.y, bbcShape1311.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1312.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1312.point.x, bbcShape1312.point.y, bbcShape1312.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1313.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1313.point.x, bbcShape1313.point.y, bbcShape1313.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1314.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1314.point.x, bbcShape1314.point.y, bbcShape1314.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1315.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1315.point.x, bbcShape1315.point.y, bbcShape1315.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1316.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1316.point.x, bbcShape1316.point.y, bbcShape1316.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1317.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1317.point.x, bbcShape1317.point.y, bbcShape1317.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1318.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1318.point.x, bbcShape1318.point.y, bbcShape1318.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1319.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1319.point.x, bbcShape1319.point.y, bbcShape1319.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1320.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1320.point.x, bbcShape1320.point.y, bbcShape1320.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1321.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1321.point.x, bbcShape1321.point.y, bbcShape1321.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1322.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1322.point.x, bbcShape1322.point.y, bbcShape1322.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1323.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1323.point.x, bbcShape1323.point.y, bbcShape1323.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1324.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1324.point.x, bbcShape1324.point.y, bbcShape1324.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1325.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1325.point.x, bbcShape1325.point.y, bbcShape1325.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1326.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1326.point.x, bbcShape1326.point.y, bbcShape1326.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1327.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1327.point.x, bbcShape1327.point.y, bbcShape1327.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1328.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1328.point.x, bbcShape1328.point.y, bbcShape1328.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1329.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1329.point.x, bbcShape1329.point.y, bbcShape1329.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1330.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1330.point.x, bbcShape1330.point.y, bbcShape1330.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1331.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1331.point.x, bbcShape1331.point.y, bbcShape1331.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1332.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1332.point.x, bbcShape1332.point.y, bbcShape1332.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1333.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1333.point.x, bbcShape1333.point.y, bbcShape1333.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1334.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1334.point.x, bbcShape1334.point.y, bbcShape1334.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1335.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1335.point.x, bbcShape1335.point.y, bbcShape1335.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1336.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1336.point.x, bbcShape1336.point.y, bbcShape1336.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1337.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1337.point.x, bbcShape1337.point.y, bbcShape1337.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1338.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1338.point.x, bbcShape1338.point.y, bbcShape1338.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1339.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1339.point.x, bbcShape1339.point.y, bbcShape1339.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1340.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1340.point.x, bbcShape1340.point.y, bbcShape1340.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1341.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1341.point.x, bbcShape1341.point.y, bbcShape1341.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1342.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1342.point.x, bbcShape1342.point.y, bbcShape1342.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1343.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1343.point.x, bbcShape1343.point.y, bbcShape1343.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1344.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1344.point.x, bbcShape1344.point.y, bbcShape1344.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1345.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1345.point.x, bbcShape1345.point.y, bbcShape1345.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1346.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1346.point.x, bbcShape1346.point.y, bbcShape1346.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1347.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1347.point.x, bbcShape1347.point.y, bbcShape1347.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1348.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1348.point.x, bbcShape1348.point.y, bbcShape1348.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1349.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1349.point.x, bbcShape1349.point.y, bbcShape1349.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1350.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1350.point.x, bbcShape1350.point.y, bbcShape1350.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1351.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1351.point.x, bbcShape1351.point.y, bbcShape1351.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1352.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1352.point.x, bbcShape1352.point.y, bbcShape1352.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1353.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1353.point.x, bbcShape1353.point.y, bbcShape1353.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1354.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1354.point.x, bbcShape1354.point.y, bbcShape1354.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1355.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1355.point.x, bbcShape1355.point.y, bbcShape1355.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1356.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1356.point.x, bbcShape1356.point.y, bbcShape1356.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1357.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1357.point.x, bbcShape1357.point.y, bbcShape1357.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1358.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1358.point.x, bbcShape1358.point.y, bbcShape1358.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1359.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1359.point.x, bbcShape1359.point.y, bbcShape1359.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1360.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1360.point.x, bbcShape1360.point.y, bbcShape1360.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1361.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1361.point.x, bbcShape1361.point.y, bbcShape1361.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1362.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1362.point.x, bbcShape1362.point.y, bbcShape1362.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1363.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1363.point.x, bbcShape1363.point.y, bbcShape1363.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1364.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1364.point.x, bbcShape1364.point.y, bbcShape1364.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1365.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1365.point.x, bbcShape1365.point.y, bbcShape1365.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1366.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1366.point.x, bbcShape1366.point.y, bbcShape1366.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1367.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1367.point.x, bbcShape1367.point.y, bbcShape1367.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1368.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1368.point.x, bbcShape1368.point.y, bbcShape1368.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1369.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1369.point.x, bbcShape1369.point.y, bbcShape1369.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1370.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1370.point.x, bbcShape1370.point.y, bbcShape1370.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1371.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1371.point.x, bbcShape1371.point.y, bbcShape1371.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1372.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1372.point.x, bbcShape1372.point.y, bbcShape1372.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1373.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1373.point.x, bbcShape1373.point.y, bbcShape1373.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1374.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1374.point.x, bbcShape1374.point.y, bbcShape1374.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1375.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1375.point.x, bbcShape1375.point.y, bbcShape1375.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1376.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1376.point.x, bbcShape1376.point.y, bbcShape1376.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1377.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1377.point.x, bbcShape1377.point.y, bbcShape1377.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1378.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1378.point.x, bbcShape1378.point.y, bbcShape1378.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1379.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1379.point.x, bbcShape1379.point.y, bbcShape1379.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1380.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1380.point.x, bbcShape1380.point.y, bbcShape1380.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1381.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1381.point.x, bbcShape1381.point.y, bbcShape1381.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1382.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1382.point.x, bbcShape1382.point.y, bbcShape1382.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1383.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1383.point.x, bbcShape1383.point.y, bbcShape1383.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1384.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1384.point.x, bbcShape1384.point.y, bbcShape1384.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1385.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1385.point.x, bbcShape1385.point.y, bbcShape1385.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1386.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1386.point.x, bbcShape1386.point.y, bbcShape1386.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1387.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1387.point.x, bbcShape1387.point.y, bbcShape1387.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1388.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1388.point.x, bbcShape1388.point.y, bbcShape1388.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1389.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1389.point.x, bbcShape1389.point.y, bbcShape1389.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1390.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1390.point.x, bbcShape1390.point.y, bbcShape1390.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1391.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1391.point.x, bbcShape1391.point.y, bbcShape1391.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1392.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1392.point.x, bbcShape1392.point.y, bbcShape1392.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1393.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1393.point.x, bbcShape1393.point.y, bbcShape1393.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1394.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1394.point.x, bbcShape1394.point.y, bbcShape1394.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1395.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1395.point.x, bbcShape1395.point.y, bbcShape1395.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1396.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1396.point.x, bbcShape1396.point.y, bbcShape1396.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1397.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1397.point.x, bbcShape1397.point.y, bbcShape1397.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1398.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1398.point.x, bbcShape1398.point.y, bbcShape1398.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1399.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1399.point.x, bbcShape1399.point.y, bbcShape1399.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1400.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1400.point.x, bbcShape1400.point.y, bbcShape1400.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1401.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1401.point.x, bbcShape1401.point.y, bbcShape1401.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1402.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1402.point.x, bbcShape1402.point.y, bbcShape1402.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1403.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1403.point.x, bbcShape1403.point.y, bbcShape1403.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1404.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1404.point.x, bbcShape1404.point.y, bbcShape1404.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1405.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1405.point.x, bbcShape1405.point.y, bbcShape1405.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1406.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1406.point.x, bbcShape1406.point.y, bbcShape1406.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1407.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1407.point.x, bbcShape1407.point.y, bbcShape1407.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1408.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1408.point.x, bbcShape1408.point.y, bbcShape1408.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1409.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1409.point.x, bbcShape1409.point.y, bbcShape1409.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1410.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1410.point.x, bbcShape1410.point.y, bbcShape1410.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1411.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1411.point.x, bbcShape1411.point.y, bbcShape1411.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1412.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1412.point.x, bbcShape1412.point.y, bbcShape1412.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1413.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1413.point.x, bbcShape1413.point.y, bbcShape1413.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1414.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1414.point.x, bbcShape1414.point.y, bbcShape1414.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1415.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1415.point.x, bbcShape1415.point.y, bbcShape1415.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1416.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1416.point.x, bbcShape1416.point.y, bbcShape1416.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1417.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1417.point.x, bbcShape1417.point.y, bbcShape1417.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1418.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1418.point.x, bbcShape1418.point.y, bbcShape1418.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1419.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1419.point.x, bbcShape1419.point.y, bbcShape1419.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1420.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1420.point.x, bbcShape1420.point.y, bbcShape1420.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1421.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1421.point.x, bbcShape1421.point.y, bbcShape1421.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1422.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1422.point.x, bbcShape1422.point.y, bbcShape1422.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1423.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1423.point.x, bbcShape1423.point.y, bbcShape1423.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1424.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1424.point.x, bbcShape1424.point.y, bbcShape1424.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1425.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1425.point.x, bbcShape1425.point.y, bbcShape1425.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1426.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1426.point.x, bbcShape1426.point.y, bbcShape1426.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1427.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1427.point.x, bbcShape1427.point.y, bbcShape1427.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1428.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1428.point.x, bbcShape1428.point.y, bbcShape1428.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1429.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1429.point.x, bbcShape1429.point.y, bbcShape1429.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1430.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1430.point.x, bbcShape1430.point.y, bbcShape1430.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1431.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1431.point.x, bbcShape1431.point.y, bbcShape1431.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1432.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1432.point.x, bbcShape1432.point.y, bbcShape1432.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1433.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1433.point.x, bbcShape1433.point.y, bbcShape1433.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1434.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1434.point.x, bbcShape1434.point.y, bbcShape1434.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1435.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1435.point.x, bbcShape1435.point.y, bbcShape1435.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1436.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1436.point.x, bbcShape1436.point.y, bbcShape1436.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1437.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1437.point.x, bbcShape1437.point.y, bbcShape1437.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1438.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1438.point.x, bbcShape1438.point.y, bbcShape1438.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1439.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1439.point.x, bbcShape1439.point.y, bbcShape1439.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1440.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1440.point.x, bbcShape1440.point.y, bbcShape1440.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1441.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1441.point.x, bbcShape1441.point.y, bbcShape1441.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1442.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1442.point.x, bbcShape1442.point.y, bbcShape1442.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1443.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1443.point.x, bbcShape1443.point.y, bbcShape1443.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1444.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1444.point.x, bbcShape1444.point.y, bbcShape1444.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1445.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1445.point.x, bbcShape1445.point.y, bbcShape1445.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1446.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1446.point.x, bbcShape1446.point.y, bbcShape1446.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1447.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1447.point.x, bbcShape1447.point.y, bbcShape1447.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1448.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1448.point.x, bbcShape1448.point.y, bbcShape1448.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1449.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1449.point.x, bbcShape1449.point.y, bbcShape1449.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1450.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1450.point.x, bbcShape1450.point.y, bbcShape1450.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1451.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1451.point.x, bbcShape1451.point.y, bbcShape1451.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1452.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1452.point.x, bbcShape1452.point.y, bbcShape1452.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1453.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1453.point.x, bbcShape1453.point.y, bbcShape1453.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1454.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1454.point.x, bbcShape1454.point.y, bbcShape1454.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1455.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1455.point.x, bbcShape1455.point.y, bbcShape1455.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1456.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1456.point.x, bbcShape1456.point.y, bbcShape1456.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1457.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1457.point.x, bbcShape1457.point.y, bbcShape1457.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1458.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1458.point.x, bbcShape1458.point.y, bbcShape1458.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1459.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1459.point.x, bbcShape1459.point.y, bbcShape1459.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1460.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1460.point.x, bbcShape1460.point.y, bbcShape1460.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1461.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1461.point.x, bbcShape1461.point.y, bbcShape1461.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1462.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1462.point.x, bbcShape1462.point.y, bbcShape1462.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1463.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1463.point.x, bbcShape1463.point.y, bbcShape1463.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1464.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1464.point.x, bbcShape1464.point.y, bbcShape1464.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1465.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1465.point.x, bbcShape1465.point.y, bbcShape1465.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1466.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1466.point.x, bbcShape1466.point.y, bbcShape1466.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1467.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1467.point.x, bbcShape1467.point.y, bbcShape1467.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1468.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1468.point.x, bbcShape1468.point.y, bbcShape1468.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1469.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1469.point.x, bbcShape1469.point.y, bbcShape1469.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1470.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1470.point.x, bbcShape1470.point.y, bbcShape1470.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1471.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1471.point.x, bbcShape1471.point.y, bbcShape1471.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1472.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1472.point.x, bbcShape1472.point.y, bbcShape1472.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1473.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1473.point.x, bbcShape1473.point.y, bbcShape1473.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1474.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1474.point.x, bbcShape1474.point.y, bbcShape1474.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1475.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1475.point.x, bbcShape1475.point.y, bbcShape1475.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1476.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1476.point.x, bbcShape1476.point.y, bbcShape1476.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1477.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1477.point.x, bbcShape1477.point.y, bbcShape1477.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1478.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1478.point.x, bbcShape1478.point.y, bbcShape1478.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1479.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1479.point.x, bbcShape1479.point.y, bbcShape1479.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1480.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1480.point.x, bbcShape1480.point.y, bbcShape1480.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1481.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1481.point.x, bbcShape1481.point.y, bbcShape1481.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1482.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1482.point.x, bbcShape1482.point.y, bbcShape1482.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1483.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1483.point.x, bbcShape1483.point.y, bbcShape1483.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1484.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1484.point.x, bbcShape1484.point.y, bbcShape1484.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1485.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1485.point.x, bbcShape1485.point.y, bbcShape1485.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1486.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1486.point.x, bbcShape1486.point.y, bbcShape1486.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1487.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1487.point.x, bbcShape1487.point.y, bbcShape1487.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1488.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1488.point.x, bbcShape1488.point.y, bbcShape1488.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1489.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1489.point.x, bbcShape1489.point.y, bbcShape1489.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1490.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1490.point.x, bbcShape1490.point.y, bbcShape1490.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1491.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1491.point.x, bbcShape1491.point.y, bbcShape1491.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1492.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1492.point.x, bbcShape1492.point.y, bbcShape1492.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1493.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1493.point.x, bbcShape1493.point.y, bbcShape1493.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1494.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1494.point.x, bbcShape1494.point.y, bbcShape1494.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1495.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1495.point.x, bbcShape1495.point.y, bbcShape1495.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1496.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1496.point.x, bbcShape1496.point.y, bbcShape1496.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1497.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1497.point.x, bbcShape1497.point.y, bbcShape1497.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1498.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1498.point.x, bbcShape1498.point.y, bbcShape1498.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1499.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1499.point.x, bbcShape1499.point.y, bbcShape1499.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1500.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1500.point.x, bbcShape1500.point.y, bbcShape1500.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1501.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1501.point.x, bbcShape1501.point.y, bbcShape1501.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1502.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1502.point.x, bbcShape1502.point.y, bbcShape1502.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1503.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1503.point.x, bbcShape1503.point.y, bbcShape1503.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1504.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1504.point.x, bbcShape1504.point.y, bbcShape1504.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1505.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1505.point.x, bbcShape1505.point.y, bbcShape1505.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1506.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1506.point.x, bbcShape1506.point.y, bbcShape1506.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1507.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1507.point.x, bbcShape1507.point.y, bbcShape1507.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1508.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1508.point.x, bbcShape1508.point.y, bbcShape1508.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1509.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1509.point.x, bbcShape1509.point.y, bbcShape1509.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1510.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1510.point.x, bbcShape1510.point.y, bbcShape1510.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1511.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1511.point.x, bbcShape1511.point.y, bbcShape1511.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1512.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1512.point.x, bbcShape1512.point.y, bbcShape1512.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1513.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1513.point.x, bbcShape1513.point.y, bbcShape1513.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1514.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1514.point.x, bbcShape1514.point.y, bbcShape1514.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1515.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1515.point.x, bbcShape1515.point.y, bbcShape1515.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1516.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1516.point.x, bbcShape1516.point.y, bbcShape1516.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1517.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1517.point.x, bbcShape1517.point.y, bbcShape1517.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1518.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1518.point.x, bbcShape1518.point.y, bbcShape1518.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1519.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1519.point.x, bbcShape1519.point.y, bbcShape1519.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1520.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1520.point.x, bbcShape1520.point.y, bbcShape1520.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1521.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1521.point.x, bbcShape1521.point.y, bbcShape1521.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1522.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1522.point.x, bbcShape1522.point.y, bbcShape1522.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1523.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1523.point.x, bbcShape1523.point.y, bbcShape1523.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1524.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1524.point.x, bbcShape1524.point.y, bbcShape1524.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1525.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1525.point.x, bbcShape1525.point.y, bbcShape1525.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1526.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1526.point.x, bbcShape1526.point.y, bbcShape1526.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1527.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1527.point.x, bbcShape1527.point.y, bbcShape1527.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1528.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1528.point.x, bbcShape1528.point.y, bbcShape1528.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1529.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1529.point.x, bbcShape1529.point.y, bbcShape1529.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1530.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1530.point.x, bbcShape1530.point.y, bbcShape1530.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1531.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1531.point.x, bbcShape1531.point.y, bbcShape1531.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1532.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1532.point.x, bbcShape1532.point.y, bbcShape1532.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1533.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1533.point.x, bbcShape1533.point.y, bbcShape1533.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1534.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1534.point.x, bbcShape1534.point.y, bbcShape1534.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1535.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1535.point.x, bbcShape1535.point.y, bbcShape1535.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1536.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1536.point.x, bbcShape1536.point.y, bbcShape1536.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1537.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1537.point.x, bbcShape1537.point.y, bbcShape1537.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1538.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1538.point.x, bbcShape1538.point.y, bbcShape1538.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1539.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1539.point.x, bbcShape1539.point.y, bbcShape1539.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1540.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1540.point.x, bbcShape1540.point.y, bbcShape1540.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1541.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1541.point.x, bbcShape1541.point.y, bbcShape1541.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1542.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1542.point.x, bbcShape1542.point.y, bbcShape1542.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1543.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1543.point.x, bbcShape1543.point.y, bbcShape1543.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1544.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1544.point.x, bbcShape1544.point.y, bbcShape1544.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1545.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1545.point.x, bbcShape1545.point.y, bbcShape1545.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1546.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1546.point.x, bbcShape1546.point.y, bbcShape1546.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1547.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1547.point.x, bbcShape1547.point.y, bbcShape1547.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1548.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1548.point.x, bbcShape1548.point.y, bbcShape1548.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1549.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1549.point.x, bbcShape1549.point.y, bbcShape1549.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1550.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1550.point.x, bbcShape1550.point.y, bbcShape1550.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1551.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1551.point.x, bbcShape1551.point.y, bbcShape1551.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1552.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1552.point.x, bbcShape1552.point.y, bbcShape1552.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1553.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1553.point.x, bbcShape1553.point.y, bbcShape1553.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1554.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1554.point.x, bbcShape1554.point.y, bbcShape1554.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1555.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1555.point.x, bbcShape1555.point.y, bbcShape1555.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1556.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1556.point.x, bbcShape1556.point.y, bbcShape1556.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1557.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1557.point.x, bbcShape1557.point.y, bbcShape1557.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1558.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1558.point.x, bbcShape1558.point.y, bbcShape1558.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1559.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1559.point.x, bbcShape1559.point.y, bbcShape1559.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1560.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1560.point.x, bbcShape1560.point.y, bbcShape1560.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1561.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1561.point.x, bbcShape1561.point.y, bbcShape1561.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1562.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1562.point.x, bbcShape1562.point.y, bbcShape1562.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1563.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1563.point.x, bbcShape1563.point.y, bbcShape1563.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1564.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1564.point.x, bbcShape1564.point.y, bbcShape1564.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1565.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1565.point.x, bbcShape1565.point.y, bbcShape1565.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1566.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1566.point.x, bbcShape1566.point.y, bbcShape1566.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1567.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1567.point.x, bbcShape1567.point.y, bbcShape1567.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1568.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1568.point.x, bbcShape1568.point.y, bbcShape1568.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1569.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1569.point.x, bbcShape1569.point.y, bbcShape1569.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1570.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1570.point.x, bbcShape1570.point.y, bbcShape1570.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1571.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1571.point.x, bbcShape1571.point.y, bbcShape1571.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1572.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1572.point.x, bbcShape1572.point.y, bbcShape1572.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1573.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1573.point.x, bbcShape1573.point.y, bbcShape1573.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1574.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1574.point.x, bbcShape1574.point.y, bbcShape1574.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1575.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1575.point.x, bbcShape1575.point.y, bbcShape1575.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1576.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1576.point.x, bbcShape1576.point.y, bbcShape1576.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1577.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1577.point.x, bbcShape1577.point.y, bbcShape1577.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1578.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1578.point.x, bbcShape1578.point.y, bbcShape1578.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1579.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1579.point.x, bbcShape1579.point.y, bbcShape1579.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1580.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1580.point.x, bbcShape1580.point.y, bbcShape1580.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1581.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1581.point.x, bbcShape1581.point.y, bbcShape1581.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1582.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1582.point.x, bbcShape1582.point.y, bbcShape1582.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1583.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1583.point.x, bbcShape1583.point.y, bbcShape1583.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1584.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1584.point.x, bbcShape1584.point.y, bbcShape1584.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1585.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1585.point.x, bbcShape1585.point.y, bbcShape1585.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1586.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1586.point.x, bbcShape1586.point.y, bbcShape1586.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1587.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1587.point.x, bbcShape1587.point.y, bbcShape1587.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1588.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1588.point.x, bbcShape1588.point.y, bbcShape1588.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1589.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1589.point.x, bbcShape1589.point.y, bbcShape1589.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1590.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1590.point.x, bbcShape1590.point.y, bbcShape1590.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1591.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1591.point.x, bbcShape1591.point.y, bbcShape1591.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1592.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1592.point.x, bbcShape1592.point.y, bbcShape1592.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1593.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1593.point.x, bbcShape1593.point.y, bbcShape1593.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1594.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1594.point.x, bbcShape1594.point.y, bbcShape1594.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1595.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1595.point.x, bbcShape1595.point.y, bbcShape1595.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1596.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1596.point.x, bbcShape1596.point.y, bbcShape1596.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1597.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1597.point.x, bbcShape1597.point.y, bbcShape1597.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1598.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1598.point.x, bbcShape1598.point.y, bbcShape1598.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1599.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1599.point.x, bbcShape1599.point.y, bbcShape1599.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.rotate(bbcShape1600.rotation * Math.PI / 180);
ctx.beginPath();
ctx.arc(bbcShape1600.point.x, bbcShape1600.point.y, bbcShape1600.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}
