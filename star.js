
window.onload = function() {

canvas = document.getElementById('bbcCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext('2d');
bbcInit();
bbcUpdate();

}

function bbcInit() {
start = Date.now();
updateTime = 1000 * 50;

bbcShape1 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:0.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape2 = {
    point:{
    x:500.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape3 = {
    point:{
    x:500.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape4 = {
    point:{
    x:580.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape5 = {
    point:{
    x:580.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape6 = {
    point:{
    x:660.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape7 = {
    point:{
    x:660.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape8 = {
    point:{
    x:740.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape9 = {
    point:{
    x:740.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape10 = {
    point:{
    x:820.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape11 = {
    point:{
    x:820.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape12 = {
    point:{
    x:900.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape13 = {
    point:{
    x:900.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape14 = {
    point:{
    x:980.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape15 = {
    point:{
    x:980.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape16 = {
    point:{
    x:1060.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape17 = {
    point:{
    x:1060.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape18 = {
    point:{
    x:1140.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape19 = {
    point:{
    x:1140.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape20 = {
    point:{
    x:1220.0,
    y:150.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape21 = {
    point:{
    x:1220.0,
    y:230.0
},
    size:{
    width:50.0,
    height:50.0
},
    color:{
    r:255.0,
    g:0.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape22 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:25.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape23 = {
    point:{
    x:501.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape24 = {
    point:{
    x:501.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape25 = {
    point:{
    x:581.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape26 = {
    point:{
    x:581.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape27 = {
    point:{
    x:661.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape28 = {
    point:{
    x:661.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape29 = {
    point:{
    x:741.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape30 = {
    point:{
    x:741.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape31 = {
    point:{
    x:821.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape32 = {
    point:{
    x:821.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape33 = {
    point:{
    x:901.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape34 = {
    point:{
    x:901.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape35 = {
    point:{
    x:981.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape36 = {
    point:{
    x:981.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape37 = {
    point:{
    x:1061.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape38 = {
    point:{
    x:1061.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape39 = {
    point:{
    x:1141.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape40 = {
    point:{
    x:1141.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape41 = {
    point:{
    x:1221.0,
    y:151.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape42 = {
    point:{
    x:1221.0,
    y:231.0
},
    size:{
    width:48.0,
    height:48.0
},
    color:{
    r:255.0,
    g:25.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape43 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:50.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape44 = {
    point:{
    x:502.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape45 = {
    point:{
    x:502.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape46 = {
    point:{
    x:582.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape47 = {
    point:{
    x:582.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape48 = {
    point:{
    x:662.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape49 = {
    point:{
    x:662.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape50 = {
    point:{
    x:742.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape51 = {
    point:{
    x:742.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape52 = {
    point:{
    x:822.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape53 = {
    point:{
    x:822.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape54 = {
    point:{
    x:902.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape55 = {
    point:{
    x:902.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape56 = {
    point:{
    x:982.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape57 = {
    point:{
    x:982.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape58 = {
    point:{
    x:1062.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape59 = {
    point:{
    x:1062.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape60 = {
    point:{
    x:1142.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape61 = {
    point:{
    x:1142.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape62 = {
    point:{
    x:1222.0,
    y:152.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape63 = {
    point:{
    x:1222.0,
    y:232.0
},
    size:{
    width:46.0,
    height:46.0
},
    color:{
    r:255.0,
    g:50.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape64 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:75.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape65 = {
    point:{
    x:503.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape66 = {
    point:{
    x:503.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape67 = {
    point:{
    x:583.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape68 = {
    point:{
    x:583.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape69 = {
    point:{
    x:663.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape70 = {
    point:{
    x:663.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape71 = {
    point:{
    x:743.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape72 = {
    point:{
    x:743.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape73 = {
    point:{
    x:823.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape74 = {
    point:{
    x:823.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape75 = {
    point:{
    x:903.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape76 = {
    point:{
    x:903.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape77 = {
    point:{
    x:983.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape78 = {
    point:{
    x:983.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape79 = {
    point:{
    x:1063.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape80 = {
    point:{
    x:1063.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape81 = {
    point:{
    x:1143.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape82 = {
    point:{
    x:1143.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape83 = {
    point:{
    x:1223.0,
    y:153.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape84 = {
    point:{
    x:1223.0,
    y:233.0
},
    size:{
    width:44.0,
    height:44.0
},
    color:{
    r:255.0,
    g:75.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape85 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:100.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape86 = {
    point:{
    x:504.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape87 = {
    point:{
    x:504.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape88 = {
    point:{
    x:584.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape89 = {
    point:{
    x:584.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape90 = {
    point:{
    x:664.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape91 = {
    point:{
    x:664.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape92 = {
    point:{
    x:744.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape93 = {
    point:{
    x:744.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape94 = {
    point:{
    x:824.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape95 = {
    point:{
    x:824.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape96 = {
    point:{
    x:904.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape97 = {
    point:{
    x:904.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape98 = {
    point:{
    x:984.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape99 = {
    point:{
    x:984.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape100 = {
    point:{
    x:1064.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape101 = {
    point:{
    x:1064.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape102 = {
    point:{
    x:1144.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape103 = {
    point:{
    x:1144.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape104 = {
    point:{
    x:1224.0,
    y:154.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape105 = {
    point:{
    x:1224.0,
    y:234.0
},
    size:{
    width:42.0,
    height:42.0
},
    color:{
    r:255.0,
    g:100.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape106 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:125.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape107 = {
    point:{
    x:505.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape108 = {
    point:{
    x:505.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape109 = {
    point:{
    x:585.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape110 = {
    point:{
    x:585.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape111 = {
    point:{
    x:665.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape112 = {
    point:{
    x:665.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape113 = {
    point:{
    x:745.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape114 = {
    point:{
    x:745.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape115 = {
    point:{
    x:825.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape116 = {
    point:{
    x:825.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape117 = {
    point:{
    x:905.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape118 = {
    point:{
    x:905.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape119 = {
    point:{
    x:985.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape120 = {
    point:{
    x:985.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape121 = {
    point:{
    x:1065.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape122 = {
    point:{
    x:1065.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape123 = {
    point:{
    x:1145.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape124 = {
    point:{
    x:1145.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape125 = {
    point:{
    x:1225.0,
    y:155.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape126 = {
    point:{
    x:1225.0,
    y:235.0
},
    size:{
    width:40.0,
    height:40.0
},
    color:{
    r:255.0,
    g:125.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape127 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:150.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape128 = {
    point:{
    x:506.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape129 = {
    point:{
    x:506.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape130 = {
    point:{
    x:586.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape131 = {
    point:{
    x:586.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape132 = {
    point:{
    x:666.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape133 = {
    point:{
    x:666.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape134 = {
    point:{
    x:746.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape135 = {
    point:{
    x:746.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape136 = {
    point:{
    x:826.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape137 = {
    point:{
    x:826.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape138 = {
    point:{
    x:906.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape139 = {
    point:{
    x:906.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape140 = {
    point:{
    x:986.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape141 = {
    point:{
    x:986.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape142 = {
    point:{
    x:1066.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape143 = {
    point:{
    x:1066.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape144 = {
    point:{
    x:1146.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape145 = {
    point:{
    x:1146.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape146 = {
    point:{
    x:1226.0,
    y:156.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape147 = {
    point:{
    x:1226.0,
    y:236.0
},
    size:{
    width:38.0,
    height:38.0
},
    color:{
    r:255.0,
    g:150.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape148 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:175.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape149 = {
    point:{
    x:507.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape150 = {
    point:{
    x:507.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape151 = {
    point:{
    x:587.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape152 = {
    point:{
    x:587.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape153 = {
    point:{
    x:667.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape154 = {
    point:{
    x:667.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape155 = {
    point:{
    x:747.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape156 = {
    point:{
    x:747.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape157 = {
    point:{
    x:827.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape158 = {
    point:{
    x:827.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape159 = {
    point:{
    x:907.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape160 = {
    point:{
    x:907.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape161 = {
    point:{
    x:987.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape162 = {
    point:{
    x:987.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape163 = {
    point:{
    x:1067.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape164 = {
    point:{
    x:1067.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape165 = {
    point:{
    x:1147.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape166 = {
    point:{
    x:1147.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape167 = {
    point:{
    x:1227.0,
    y:157.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape168 = {
    point:{
    x:1227.0,
    y:237.0
},
    size:{
    width:36.0,
    height:36.0
},
    color:{
    r:255.0,
    g:175.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape169 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:200.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape170 = {
    point:{
    x:508.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape171 = {
    point:{
    x:508.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape172 = {
    point:{
    x:588.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape173 = {
    point:{
    x:588.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape174 = {
    point:{
    x:668.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape175 = {
    point:{
    x:668.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape176 = {
    point:{
    x:748.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape177 = {
    point:{
    x:748.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape178 = {
    point:{
    x:828.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape179 = {
    point:{
    x:828.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape180 = {
    point:{
    x:908.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape181 = {
    point:{
    x:908.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape182 = {
    point:{
    x:988.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape183 = {
    point:{
    x:988.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape184 = {
    point:{
    x:1068.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape185 = {
    point:{
    x:1068.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape186 = {
    point:{
    x:1148.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape187 = {
    point:{
    x:1148.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape188 = {
    point:{
    x:1228.0,
    y:158.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape189 = {
    point:{
    x:1228.0,
    y:238.0
},
    size:{
    width:34.0,
    height:34.0
},
    color:{
    r:255.0,
    g:200.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape190 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:225.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape191 = {
    point:{
    x:509.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape192 = {
    point:{
    x:509.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape193 = {
    point:{
    x:589.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape194 = {
    point:{
    x:589.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape195 = {
    point:{
    x:669.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape196 = {
    point:{
    x:669.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape197 = {
    point:{
    x:749.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape198 = {
    point:{
    x:749.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape199 = {
    point:{
    x:829.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape200 = {
    point:{
    x:829.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape201 = {
    point:{
    x:909.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape202 = {
    point:{
    x:909.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape203 = {
    point:{
    x:989.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape204 = {
    point:{
    x:989.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape205 = {
    point:{
    x:1069.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape206 = {
    point:{
    x:1069.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape207 = {
    point:{
    x:1149.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape208 = {
    point:{
    x:1149.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape209 = {
    point:{
    x:1229.0,
    y:159.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape210 = {
    point:{
    x:1229.0,
    y:239.0
},
    size:{
    width:32.0,
    height:32.0
},
    color:{
    r:255.0,
    g:225.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape211 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:250.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape212 = {
    point:{
    x:510.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape213 = {
    point:{
    x:510.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape214 = {
    point:{
    x:590.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape215 = {
    point:{
    x:590.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape216 = {
    point:{
    x:670.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape217 = {
    point:{
    x:670.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape218 = {
    point:{
    x:750.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape219 = {
    point:{
    x:750.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape220 = {
    point:{
    x:830.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape221 = {
    point:{
    x:830.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape222 = {
    point:{
    x:910.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape223 = {
    point:{
    x:910.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape224 = {
    point:{
    x:990.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape225 = {
    point:{
    x:990.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape226 = {
    point:{
    x:1070.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape227 = {
    point:{
    x:1070.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape228 = {
    point:{
    x:1150.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape229 = {
    point:{
    x:1150.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape230 = {
    point:{
    x:1230.0,
    y:160.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape231 = {
    point:{
    x:1230.0,
    y:240.0
},
    size:{
    width:30.0,
    height:30.0
},
    color:{
    r:255.0,
    g:250.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape232 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:275.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape233 = {
    point:{
    x:511.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape234 = {
    point:{
    x:511.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape235 = {
    point:{
    x:591.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape236 = {
    point:{
    x:591.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape237 = {
    point:{
    x:671.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape238 = {
    point:{
    x:671.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape239 = {
    point:{
    x:751.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape240 = {
    point:{
    x:751.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape241 = {
    point:{
    x:831.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape242 = {
    point:{
    x:831.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape243 = {
    point:{
    x:911.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape244 = {
    point:{
    x:911.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape245 = {
    point:{
    x:991.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape246 = {
    point:{
    x:991.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape247 = {
    point:{
    x:1071.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape248 = {
    point:{
    x:1071.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape249 = {
    point:{
    x:1151.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape250 = {
    point:{
    x:1151.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape251 = {
    point:{
    x:1231.0,
    y:161.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape252 = {
    point:{
    x:1231.0,
    y:241.0
},
    size:{
    width:28.0,
    height:28.0
},
    color:{
    r:255.0,
    g:275.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape253 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:300.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape254 = {
    point:{
    x:512.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape255 = {
    point:{
    x:512.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape256 = {
    point:{
    x:592.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape257 = {
    point:{
    x:592.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape258 = {
    point:{
    x:672.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape259 = {
    point:{
    x:672.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape260 = {
    point:{
    x:752.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape261 = {
    point:{
    x:752.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape262 = {
    point:{
    x:832.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape263 = {
    point:{
    x:832.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape264 = {
    point:{
    x:912.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape265 = {
    point:{
    x:912.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape266 = {
    point:{
    x:992.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape267 = {
    point:{
    x:992.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape268 = {
    point:{
    x:1072.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape269 = {
    point:{
    x:1072.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape270 = {
    point:{
    x:1152.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape271 = {
    point:{
    x:1152.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape272 = {
    point:{
    x:1232.0,
    y:162.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape273 = {
    point:{
    x:1232.0,
    y:242.0
},
    size:{
    width:26.0,
    height:26.0
},
    color:{
    r:255.0,
    g:300.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape274 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:325.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape275 = {
    point:{
    x:513.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape276 = {
    point:{
    x:513.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape277 = {
    point:{
    x:593.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape278 = {
    point:{
    x:593.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape279 = {
    point:{
    x:673.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape280 = {
    point:{
    x:673.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape281 = {
    point:{
    x:753.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape282 = {
    point:{
    x:753.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape283 = {
    point:{
    x:833.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape284 = {
    point:{
    x:833.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape285 = {
    point:{
    x:913.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape286 = {
    point:{
    x:913.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape287 = {
    point:{
    x:993.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape288 = {
    point:{
    x:993.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape289 = {
    point:{
    x:1073.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape290 = {
    point:{
    x:1073.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape291 = {
    point:{
    x:1153.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape292 = {
    point:{
    x:1153.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape293 = {
    point:{
    x:1233.0,
    y:163.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape294 = {
    point:{
    x:1233.0,
    y:243.0
},
    size:{
    width:24.0,
    height:24.0
},
    color:{
    r:255.0,
    g:325.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape295 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:350.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape296 = {
    point:{
    x:514.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape297 = {
    point:{
    x:514.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape298 = {
    point:{
    x:594.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape299 = {
    point:{
    x:594.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape300 = {
    point:{
    x:674.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape301 = {
    point:{
    x:674.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape302 = {
    point:{
    x:754.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape303 = {
    point:{
    x:754.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape304 = {
    point:{
    x:834.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape305 = {
    point:{
    x:834.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape306 = {
    point:{
    x:914.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape307 = {
    point:{
    x:914.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape308 = {
    point:{
    x:994.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape309 = {
    point:{
    x:994.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape310 = {
    point:{
    x:1074.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape311 = {
    point:{
    x:1074.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape312 = {
    point:{
    x:1154.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape313 = {
    point:{
    x:1154.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape314 = {
    point:{
    x:1234.0,
    y:164.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape315 = {
    point:{
    x:1234.0,
    y:244.0
},
    size:{
    width:22.0,
    height:22.0
},
    color:{
    r:255.0,
    g:350.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape316 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:375.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape317 = {
    point:{
    x:515.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape318 = {
    point:{
    x:515.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape319 = {
    point:{
    x:595.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape320 = {
    point:{
    x:595.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape321 = {
    point:{
    x:675.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape322 = {
    point:{
    x:675.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape323 = {
    point:{
    x:755.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape324 = {
    point:{
    x:755.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape325 = {
    point:{
    x:835.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape326 = {
    point:{
    x:835.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape327 = {
    point:{
    x:915.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape328 = {
    point:{
    x:915.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape329 = {
    point:{
    x:995.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape330 = {
    point:{
    x:995.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape331 = {
    point:{
    x:1075.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape332 = {
    point:{
    x:1075.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape333 = {
    point:{
    x:1155.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape334 = {
    point:{
    x:1155.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape335 = {
    point:{
    x:1235.0,
    y:165.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape336 = {
    point:{
    x:1235.0,
    y:245.0
},
    size:{
    width:20.0,
    height:20.0
},
    color:{
    r:255.0,
    g:375.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape337 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:400.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape338 = {
    point:{
    x:516.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape339 = {
    point:{
    x:516.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape340 = {
    point:{
    x:596.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape341 = {
    point:{
    x:596.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape342 = {
    point:{
    x:676.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape343 = {
    point:{
    x:676.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape344 = {
    point:{
    x:756.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape345 = {
    point:{
    x:756.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape346 = {
    point:{
    x:836.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape347 = {
    point:{
    x:836.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape348 = {
    point:{
    x:916.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape349 = {
    point:{
    x:916.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape350 = {
    point:{
    x:996.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape351 = {
    point:{
    x:996.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape352 = {
    point:{
    x:1076.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape353 = {
    point:{
    x:1076.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape354 = {
    point:{
    x:1156.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape355 = {
    point:{
    x:1156.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape356 = {
    point:{
    x:1236.0,
    y:166.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape357 = {
    point:{
    x:1236.0,
    y:246.0
},
    size:{
    width:18.0,
    height:18.0
},
    color:{
    r:255.0,
    g:400.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape358 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:425.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape359 = {
    point:{
    x:517.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape360 = {
    point:{
    x:517.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape361 = {
    point:{
    x:597.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape362 = {
    point:{
    x:597.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape363 = {
    point:{
    x:677.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape364 = {
    point:{
    x:677.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape365 = {
    point:{
    x:757.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape366 = {
    point:{
    x:757.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape367 = {
    point:{
    x:837.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape368 = {
    point:{
    x:837.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape369 = {
    point:{
    x:917.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape370 = {
    point:{
    x:917.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape371 = {
    point:{
    x:997.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape372 = {
    point:{
    x:997.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape373 = {
    point:{
    x:1077.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape374 = {
    point:{
    x:1077.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape375 = {
    point:{
    x:1157.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape376 = {
    point:{
    x:1157.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape377 = {
    point:{
    x:1237.0,
    y:167.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape378 = {
    point:{
    x:1237.0,
    y:247.0
},
    size:{
    width:16.0,
    height:16.0
},
    color:{
    r:255.0,
    g:425.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape379 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:450.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape380 = {
    point:{
    x:518.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape381 = {
    point:{
    x:518.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape382 = {
    point:{
    x:598.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape383 = {
    point:{
    x:598.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape384 = {
    point:{
    x:678.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape385 = {
    point:{
    x:678.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape386 = {
    point:{
    x:758.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape387 = {
    point:{
    x:758.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape388 = {
    point:{
    x:838.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape389 = {
    point:{
    x:838.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape390 = {
    point:{
    x:918.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape391 = {
    point:{
    x:918.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape392 = {
    point:{
    x:998.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape393 = {
    point:{
    x:998.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape394 = {
    point:{
    x:1078.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape395 = {
    point:{
    x:1078.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape396 = {
    point:{
    x:1158.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape397 = {
    point:{
    x:1158.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape398 = {
    point:{
    x:1238.0,
    y:168.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape399 = {
    point:{
    x:1238.0,
    y:248.0
},
    size:{
    width:14.0,
    height:14.0
},
    color:{
    r:255.0,
    g:450.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape400 = {
    points:[[300.0, 100.0], [320.0, 165.36], [386.6, 150.0], [340.0, 200.0], [386.6, 250.0], [320.0, 234.64], [300.0, 300.0], [280.0, 234.64], [213.4, 250.0], [260.0, 200.0], [213.4, 150.0], [280.0, 165.36]],
    color:{
    r:475.0,
    g:255.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape401 = {
    point:{
    x:519.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape402 = {
    point:{
    x:519.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape403 = {
    point:{
    x:599.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape404 = {
    point:{
    x:599.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape405 = {
    point:{
    x:679.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape406 = {
    point:{
    x:679.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape407 = {
    point:{
    x:759.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape408 = {
    point:{
    x:759.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape409 = {
    point:{
    x:839.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape410 = {
    point:{
    x:839.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape411 = {
    point:{
    x:919.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape412 = {
    point:{
    x:919.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape413 = {
    point:{
    x:999.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape414 = {
    point:{
    x:999.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape415 = {
    point:{
    x:1079.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape416 = {
    point:{
    x:1079.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape417 = {
    point:{
    x:1159.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape418 = {
    point:{
    x:1159.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape419 = {
    point:{
    x:1239.0,
    y:169.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape420 = {
    point:{
    x:1239.0,
    y:249.0
},
    size:{
    width:12.0,
    height:12.0
},
    color:{
    r:255.0,
    g:475.0,
    b:0.0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

}

function bbcUpdate() {
if(Date.now() > start + updateTime)
{
    bbcInit();
}

bbcShape1.rotation += 0.0;
bbcShape1.around.x = 300.0;
bbcShape1.around.y = 200.0;

bbcShape2.rotation += 0.0;
bbcShape2.around.x = 300.0;
bbcShape2.around.y = 200.0;

bbcShape3.rotation += 0.0;
bbcShape3.around.x = 300.0;
bbcShape3.around.y = 200.0;

bbcShape4.rotation += 0.0;
bbcShape4.around.x = 300.0;
bbcShape4.around.y = 200.0;

bbcShape5.rotation += 0.0;
bbcShape5.around.x = 300.0;
bbcShape5.around.y = 200.0;

bbcShape6.rotation += 0.0;
bbcShape6.around.x = 300.0;
bbcShape6.around.y = 200.0;

bbcShape7.rotation += 0.0;
bbcShape7.around.x = 300.0;
bbcShape7.around.y = 200.0;

bbcShape8.rotation += 0.0;
bbcShape8.around.x = 300.0;
bbcShape8.around.y = 200.0;

bbcShape9.rotation += 0.0;
bbcShape9.around.x = 300.0;
bbcShape9.around.y = 200.0;

bbcShape10.rotation += 0.0;
bbcShape10.around.x = 300.0;
bbcShape10.around.y = 200.0;

bbcShape11.rotation += 0.0;
bbcShape11.around.x = 300.0;
bbcShape11.around.y = 200.0;

bbcShape12.rotation += 0.0;
bbcShape12.around.x = 300.0;
bbcShape12.around.y = 200.0;

bbcShape13.rotation += 0.0;
bbcShape13.around.x = 300.0;
bbcShape13.around.y = 200.0;

bbcShape14.rotation += 0.0;
bbcShape14.around.x = 300.0;
bbcShape14.around.y = 200.0;

bbcShape15.rotation += 0.0;
bbcShape15.around.x = 300.0;
bbcShape15.around.y = 200.0;

bbcShape16.rotation += 0.0;
bbcShape16.around.x = 300.0;
bbcShape16.around.y = 200.0;

bbcShape17.rotation += 0.0;
bbcShape17.around.x = 300.0;
bbcShape17.around.y = 200.0;

bbcShape18.rotation += 0.0;
bbcShape18.around.x = 300.0;
bbcShape18.around.y = 200.0;

bbcShape19.rotation += 0.0;
bbcShape19.around.x = 300.0;
bbcShape19.around.y = 200.0;

bbcShape20.rotation += 0.0;
bbcShape20.around.x = 300.0;
bbcShape20.around.y = 200.0;

bbcShape21.rotation += 0.0;
bbcShape21.around.x = 300.0;
bbcShape21.around.y = 200.0;

bbcShape22.rotation += 0.05;
bbcShape22.around.x = 300.0;
bbcShape22.around.y = 200.0;

bbcShape23.rotation += 0.1;
bbcShape23.around.x = 300.0;
bbcShape23.around.y = 200.0;

bbcShape24.rotation += 0.1;
bbcShape24.around.x = 300.0;
bbcShape24.around.y = 200.0;

bbcShape25.rotation += 0.1;
bbcShape25.around.x = 300.0;
bbcShape25.around.y = 200.0;

bbcShape26.rotation += 0.1;
bbcShape26.around.x = 300.0;
bbcShape26.around.y = 200.0;

bbcShape27.rotation += 0.1;
bbcShape27.around.x = 300.0;
bbcShape27.around.y = 200.0;

bbcShape28.rotation += 0.1;
bbcShape28.around.x = 300.0;
bbcShape28.around.y = 200.0;

bbcShape29.rotation += 0.1;
bbcShape29.around.x = 300.0;
bbcShape29.around.y = 200.0;

bbcShape30.rotation += 0.1;
bbcShape30.around.x = 300.0;
bbcShape30.around.y = 200.0;

bbcShape31.rotation += 0.1;
bbcShape31.around.x = 300.0;
bbcShape31.around.y = 200.0;

bbcShape32.rotation += 0.1;
bbcShape32.around.x = 300.0;
bbcShape32.around.y = 200.0;

bbcShape33.rotation += 0.1;
bbcShape33.around.x = 300.0;
bbcShape33.around.y = 200.0;

bbcShape34.rotation += 0.1;
bbcShape34.around.x = 300.0;
bbcShape34.around.y = 200.0;

bbcShape35.rotation += 0.1;
bbcShape35.around.x = 300.0;
bbcShape35.around.y = 200.0;

bbcShape36.rotation += 0.1;
bbcShape36.around.x = 300.0;
bbcShape36.around.y = 200.0;

bbcShape37.rotation += 0.1;
bbcShape37.around.x = 300.0;
bbcShape37.around.y = 200.0;

bbcShape38.rotation += 0.1;
bbcShape38.around.x = 300.0;
bbcShape38.around.y = 200.0;

bbcShape39.rotation += 0.1;
bbcShape39.around.x = 300.0;
bbcShape39.around.y = 200.0;

bbcShape40.rotation += 0.1;
bbcShape40.around.x = 300.0;
bbcShape40.around.y = 200.0;

bbcShape41.rotation += 0.1;
bbcShape41.around.x = 300.0;
bbcShape41.around.y = 200.0;

bbcShape42.rotation += 0.1;
bbcShape42.around.x = 300.0;
bbcShape42.around.y = 200.0;

bbcShape43.rotation += 0.1;
bbcShape43.around.x = 300.0;
bbcShape43.around.y = 200.0;

bbcShape44.rotation += 0.2;
bbcShape44.around.x = 300.0;
bbcShape44.around.y = 200.0;

bbcShape45.rotation += 0.2;
bbcShape45.around.x = 300.0;
bbcShape45.around.y = 200.0;

bbcShape46.rotation += 0.2;
bbcShape46.around.x = 300.0;
bbcShape46.around.y = 200.0;

bbcShape47.rotation += 0.2;
bbcShape47.around.x = 300.0;
bbcShape47.around.y = 200.0;

bbcShape48.rotation += 0.2;
bbcShape48.around.x = 300.0;
bbcShape48.around.y = 200.0;

bbcShape49.rotation += 0.2;
bbcShape49.around.x = 300.0;
bbcShape49.around.y = 200.0;

bbcShape50.rotation += 0.2;
bbcShape50.around.x = 300.0;
bbcShape50.around.y = 200.0;

bbcShape51.rotation += 0.2;
bbcShape51.around.x = 300.0;
bbcShape51.around.y = 200.0;

bbcShape52.rotation += 0.2;
bbcShape52.around.x = 300.0;
bbcShape52.around.y = 200.0;

bbcShape53.rotation += 0.2;
bbcShape53.around.x = 300.0;
bbcShape53.around.y = 200.0;

bbcShape54.rotation += 0.2;
bbcShape54.around.x = 300.0;
bbcShape54.around.y = 200.0;

bbcShape55.rotation += 0.2;
bbcShape55.around.x = 300.0;
bbcShape55.around.y = 200.0;

bbcShape56.rotation += 0.2;
bbcShape56.around.x = 300.0;
bbcShape56.around.y = 200.0;

bbcShape57.rotation += 0.2;
bbcShape57.around.x = 300.0;
bbcShape57.around.y = 200.0;

bbcShape58.rotation += 0.2;
bbcShape58.around.x = 300.0;
bbcShape58.around.y = 200.0;

bbcShape59.rotation += 0.2;
bbcShape59.around.x = 300.0;
bbcShape59.around.y = 200.0;

bbcShape60.rotation += 0.2;
bbcShape60.around.x = 300.0;
bbcShape60.around.y = 200.0;

bbcShape61.rotation += 0.2;
bbcShape61.around.x = 300.0;
bbcShape61.around.y = 200.0;

bbcShape62.rotation += 0.2;
bbcShape62.around.x = 300.0;
bbcShape62.around.y = 200.0;

bbcShape63.rotation += 0.2;
bbcShape63.around.x = 300.0;
bbcShape63.around.y = 200.0;

bbcShape64.rotation += 0.15;
bbcShape64.around.x = 300.0;
bbcShape64.around.y = 200.0;

bbcShape65.rotation += 0.3;
bbcShape65.around.x = 300.0;
bbcShape65.around.y = 200.0;

bbcShape66.rotation += 0.3;
bbcShape66.around.x = 300.0;
bbcShape66.around.y = 200.0;

bbcShape67.rotation += 0.3;
bbcShape67.around.x = 300.0;
bbcShape67.around.y = 200.0;

bbcShape68.rotation += 0.3;
bbcShape68.around.x = 300.0;
bbcShape68.around.y = 200.0;

bbcShape69.rotation += 0.3;
bbcShape69.around.x = 300.0;
bbcShape69.around.y = 200.0;

bbcShape70.rotation += 0.3;
bbcShape70.around.x = 300.0;
bbcShape70.around.y = 200.0;

bbcShape71.rotation += 0.3;
bbcShape71.around.x = 300.0;
bbcShape71.around.y = 200.0;

bbcShape72.rotation += 0.3;
bbcShape72.around.x = 300.0;
bbcShape72.around.y = 200.0;

bbcShape73.rotation += 0.3;
bbcShape73.around.x = 300.0;
bbcShape73.around.y = 200.0;

bbcShape74.rotation += 0.3;
bbcShape74.around.x = 300.0;
bbcShape74.around.y = 200.0;

bbcShape75.rotation += 0.3;
bbcShape75.around.x = 300.0;
bbcShape75.around.y = 200.0;

bbcShape76.rotation += 0.3;
bbcShape76.around.x = 300.0;
bbcShape76.around.y = 200.0;

bbcShape77.rotation += 0.3;
bbcShape77.around.x = 300.0;
bbcShape77.around.y = 200.0;

bbcShape78.rotation += 0.3;
bbcShape78.around.x = 300.0;
bbcShape78.around.y = 200.0;

bbcShape79.rotation += 0.3;
bbcShape79.around.x = 300.0;
bbcShape79.around.y = 200.0;

bbcShape80.rotation += 0.3;
bbcShape80.around.x = 300.0;
bbcShape80.around.y = 200.0;

bbcShape81.rotation += 0.3;
bbcShape81.around.x = 300.0;
bbcShape81.around.y = 200.0;

bbcShape82.rotation += 0.3;
bbcShape82.around.x = 300.0;
bbcShape82.around.y = 200.0;

bbcShape83.rotation += 0.3;
bbcShape83.around.x = 300.0;
bbcShape83.around.y = 200.0;

bbcShape84.rotation += 0.3;
bbcShape84.around.x = 300.0;
bbcShape84.around.y = 200.0;

bbcShape85.rotation += 0.2;
bbcShape85.around.x = 300.0;
bbcShape85.around.y = 200.0;

bbcShape86.rotation += 0.4;
bbcShape86.around.x = 300.0;
bbcShape86.around.y = 200.0;

bbcShape87.rotation += 0.4;
bbcShape87.around.x = 300.0;
bbcShape87.around.y = 200.0;

bbcShape88.rotation += 0.4;
bbcShape88.around.x = 300.0;
bbcShape88.around.y = 200.0;

bbcShape89.rotation += 0.4;
bbcShape89.around.x = 300.0;
bbcShape89.around.y = 200.0;

bbcShape90.rotation += 0.4;
bbcShape90.around.x = 300.0;
bbcShape90.around.y = 200.0;

bbcShape91.rotation += 0.4;
bbcShape91.around.x = 300.0;
bbcShape91.around.y = 200.0;

bbcShape92.rotation += 0.4;
bbcShape92.around.x = 300.0;
bbcShape92.around.y = 200.0;

bbcShape93.rotation += 0.4;
bbcShape93.around.x = 300.0;
bbcShape93.around.y = 200.0;

bbcShape94.rotation += 0.4;
bbcShape94.around.x = 300.0;
bbcShape94.around.y = 200.0;

bbcShape95.rotation += 0.4;
bbcShape95.around.x = 300.0;
bbcShape95.around.y = 200.0;

bbcShape96.rotation += 0.4;
bbcShape96.around.x = 300.0;
bbcShape96.around.y = 200.0;

bbcShape97.rotation += 0.4;
bbcShape97.around.x = 300.0;
bbcShape97.around.y = 200.0;

bbcShape98.rotation += 0.4;
bbcShape98.around.x = 300.0;
bbcShape98.around.y = 200.0;

bbcShape99.rotation += 0.4;
bbcShape99.around.x = 300.0;
bbcShape99.around.y = 200.0;

bbcShape100.rotation += 0.4;
bbcShape100.around.x = 300.0;
bbcShape100.around.y = 200.0;

bbcShape101.rotation += 0.4;
bbcShape101.around.x = 300.0;
bbcShape101.around.y = 200.0;

bbcShape102.rotation += 0.4;
bbcShape102.around.x = 300.0;
bbcShape102.around.y = 200.0;

bbcShape103.rotation += 0.4;
bbcShape103.around.x = 300.0;
bbcShape103.around.y = 200.0;

bbcShape104.rotation += 0.4;
bbcShape104.around.x = 300.0;
bbcShape104.around.y = 200.0;

bbcShape105.rotation += 0.4;
bbcShape105.around.x = 300.0;
bbcShape105.around.y = 200.0;

bbcShape106.rotation += 0.25;
bbcShape106.around.x = 300.0;
bbcShape106.around.y = 200.0;

bbcShape107.rotation += 0.5;
bbcShape107.around.x = 300.0;
bbcShape107.around.y = 200.0;

bbcShape108.rotation += 0.5;
bbcShape108.around.x = 300.0;
bbcShape108.around.y = 200.0;

bbcShape109.rotation += 0.5;
bbcShape109.around.x = 300.0;
bbcShape109.around.y = 200.0;

bbcShape110.rotation += 0.5;
bbcShape110.around.x = 300.0;
bbcShape110.around.y = 200.0;

bbcShape111.rotation += 0.5;
bbcShape111.around.x = 300.0;
bbcShape111.around.y = 200.0;

bbcShape112.rotation += 0.5;
bbcShape112.around.x = 300.0;
bbcShape112.around.y = 200.0;

bbcShape113.rotation += 0.5;
bbcShape113.around.x = 300.0;
bbcShape113.around.y = 200.0;

bbcShape114.rotation += 0.5;
bbcShape114.around.x = 300.0;
bbcShape114.around.y = 200.0;

bbcShape115.rotation += 0.5;
bbcShape115.around.x = 300.0;
bbcShape115.around.y = 200.0;

bbcShape116.rotation += 0.5;
bbcShape116.around.x = 300.0;
bbcShape116.around.y = 200.0;

bbcShape117.rotation += 0.5;
bbcShape117.around.x = 300.0;
bbcShape117.around.y = 200.0;

bbcShape118.rotation += 0.5;
bbcShape118.around.x = 300.0;
bbcShape118.around.y = 200.0;

bbcShape119.rotation += 0.5;
bbcShape119.around.x = 300.0;
bbcShape119.around.y = 200.0;

bbcShape120.rotation += 0.5;
bbcShape120.around.x = 300.0;
bbcShape120.around.y = 200.0;

bbcShape121.rotation += 0.5;
bbcShape121.around.x = 300.0;
bbcShape121.around.y = 200.0;

bbcShape122.rotation += 0.5;
bbcShape122.around.x = 300.0;
bbcShape122.around.y = 200.0;

bbcShape123.rotation += 0.5;
bbcShape123.around.x = 300.0;
bbcShape123.around.y = 200.0;

bbcShape124.rotation += 0.5;
bbcShape124.around.x = 300.0;
bbcShape124.around.y = 200.0;

bbcShape125.rotation += 0.5;
bbcShape125.around.x = 300.0;
bbcShape125.around.y = 200.0;

bbcShape126.rotation += 0.5;
bbcShape126.around.x = 300.0;
bbcShape126.around.y = 200.0;

bbcShape127.rotation += 0.3;
bbcShape127.around.x = 300.0;
bbcShape127.around.y = 200.0;

bbcShape128.rotation += 0.6;
bbcShape128.around.x = 300.0;
bbcShape128.around.y = 200.0;

bbcShape129.rotation += 0.6;
bbcShape129.around.x = 300.0;
bbcShape129.around.y = 200.0;

bbcShape130.rotation += 0.6;
bbcShape130.around.x = 300.0;
bbcShape130.around.y = 200.0;

bbcShape131.rotation += 0.6;
bbcShape131.around.x = 300.0;
bbcShape131.around.y = 200.0;

bbcShape132.rotation += 0.6;
bbcShape132.around.x = 300.0;
bbcShape132.around.y = 200.0;

bbcShape133.rotation += 0.6;
bbcShape133.around.x = 300.0;
bbcShape133.around.y = 200.0;

bbcShape134.rotation += 0.6;
bbcShape134.around.x = 300.0;
bbcShape134.around.y = 200.0;

bbcShape135.rotation += 0.6;
bbcShape135.around.x = 300.0;
bbcShape135.around.y = 200.0;

bbcShape136.rotation += 0.6;
bbcShape136.around.x = 300.0;
bbcShape136.around.y = 200.0;

bbcShape137.rotation += 0.6;
bbcShape137.around.x = 300.0;
bbcShape137.around.y = 200.0;

bbcShape138.rotation += 0.6;
bbcShape138.around.x = 300.0;
bbcShape138.around.y = 200.0;

bbcShape139.rotation += 0.6;
bbcShape139.around.x = 300.0;
bbcShape139.around.y = 200.0;

bbcShape140.rotation += 0.6;
bbcShape140.around.x = 300.0;
bbcShape140.around.y = 200.0;

bbcShape141.rotation += 0.6;
bbcShape141.around.x = 300.0;
bbcShape141.around.y = 200.0;

bbcShape142.rotation += 0.6;
bbcShape142.around.x = 300.0;
bbcShape142.around.y = 200.0;

bbcShape143.rotation += 0.6;
bbcShape143.around.x = 300.0;
bbcShape143.around.y = 200.0;

bbcShape144.rotation += 0.6;
bbcShape144.around.x = 300.0;
bbcShape144.around.y = 200.0;

bbcShape145.rotation += 0.6;
bbcShape145.around.x = 300.0;
bbcShape145.around.y = 200.0;

bbcShape146.rotation += 0.6;
bbcShape146.around.x = 300.0;
bbcShape146.around.y = 200.0;

bbcShape147.rotation += 0.6;
bbcShape147.around.x = 300.0;
bbcShape147.around.y = 200.0;

bbcShape148.rotation += 0.35;
bbcShape148.around.x = 300.0;
bbcShape148.around.y = 200.0;

bbcShape149.rotation += 0.7;
bbcShape149.around.x = 300.0;
bbcShape149.around.y = 200.0;

bbcShape150.rotation += 0.7;
bbcShape150.around.x = 300.0;
bbcShape150.around.y = 200.0;

bbcShape151.rotation += 0.7;
bbcShape151.around.x = 300.0;
bbcShape151.around.y = 200.0;

bbcShape152.rotation += 0.7;
bbcShape152.around.x = 300.0;
bbcShape152.around.y = 200.0;

bbcShape153.rotation += 0.7;
bbcShape153.around.x = 300.0;
bbcShape153.around.y = 200.0;

bbcShape154.rotation += 0.7;
bbcShape154.around.x = 300.0;
bbcShape154.around.y = 200.0;

bbcShape155.rotation += 0.7;
bbcShape155.around.x = 300.0;
bbcShape155.around.y = 200.0;

bbcShape156.rotation += 0.7;
bbcShape156.around.x = 300.0;
bbcShape156.around.y = 200.0;

bbcShape157.rotation += 0.7;
bbcShape157.around.x = 300.0;
bbcShape157.around.y = 200.0;

bbcShape158.rotation += 0.7;
bbcShape158.around.x = 300.0;
bbcShape158.around.y = 200.0;

bbcShape159.rotation += 0.7;
bbcShape159.around.x = 300.0;
bbcShape159.around.y = 200.0;

bbcShape160.rotation += 0.7;
bbcShape160.around.x = 300.0;
bbcShape160.around.y = 200.0;

bbcShape161.rotation += 0.7;
bbcShape161.around.x = 300.0;
bbcShape161.around.y = 200.0;

bbcShape162.rotation += 0.7;
bbcShape162.around.x = 300.0;
bbcShape162.around.y = 200.0;

bbcShape163.rotation += 0.7;
bbcShape163.around.x = 300.0;
bbcShape163.around.y = 200.0;

bbcShape164.rotation += 0.7;
bbcShape164.around.x = 300.0;
bbcShape164.around.y = 200.0;

bbcShape165.rotation += 0.7;
bbcShape165.around.x = 300.0;
bbcShape165.around.y = 200.0;

bbcShape166.rotation += 0.7;
bbcShape166.around.x = 300.0;
bbcShape166.around.y = 200.0;

bbcShape167.rotation += 0.7;
bbcShape167.around.x = 300.0;
bbcShape167.around.y = 200.0;

bbcShape168.rotation += 0.7;
bbcShape168.around.x = 300.0;
bbcShape168.around.y = 200.0;

bbcShape169.rotation += 0.4;
bbcShape169.around.x = 300.0;
bbcShape169.around.y = 200.0;

bbcShape170.rotation += 0.8;
bbcShape170.around.x = 300.0;
bbcShape170.around.y = 200.0;

bbcShape171.rotation += 0.8;
bbcShape171.around.x = 300.0;
bbcShape171.around.y = 200.0;

bbcShape172.rotation += 0.8;
bbcShape172.around.x = 300.0;
bbcShape172.around.y = 200.0;

bbcShape173.rotation += 0.8;
bbcShape173.around.x = 300.0;
bbcShape173.around.y = 200.0;

bbcShape174.rotation += 0.8;
bbcShape174.around.x = 300.0;
bbcShape174.around.y = 200.0;

bbcShape175.rotation += 0.8;
bbcShape175.around.x = 300.0;
bbcShape175.around.y = 200.0;

bbcShape176.rotation += 0.8;
bbcShape176.around.x = 300.0;
bbcShape176.around.y = 200.0;

bbcShape177.rotation += 0.8;
bbcShape177.around.x = 300.0;
bbcShape177.around.y = 200.0;

bbcShape178.rotation += 0.8;
bbcShape178.around.x = 300.0;
bbcShape178.around.y = 200.0;

bbcShape179.rotation += 0.8;
bbcShape179.around.x = 300.0;
bbcShape179.around.y = 200.0;

bbcShape180.rotation += 0.8;
bbcShape180.around.x = 300.0;
bbcShape180.around.y = 200.0;

bbcShape181.rotation += 0.8;
bbcShape181.around.x = 300.0;
bbcShape181.around.y = 200.0;

bbcShape182.rotation += 0.8;
bbcShape182.around.x = 300.0;
bbcShape182.around.y = 200.0;

bbcShape183.rotation += 0.8;
bbcShape183.around.x = 300.0;
bbcShape183.around.y = 200.0;

bbcShape184.rotation += 0.8;
bbcShape184.around.x = 300.0;
bbcShape184.around.y = 200.0;

bbcShape185.rotation += 0.8;
bbcShape185.around.x = 300.0;
bbcShape185.around.y = 200.0;

bbcShape186.rotation += 0.8;
bbcShape186.around.x = 300.0;
bbcShape186.around.y = 200.0;

bbcShape187.rotation += 0.8;
bbcShape187.around.x = 300.0;
bbcShape187.around.y = 200.0;

bbcShape188.rotation += 0.8;
bbcShape188.around.x = 300.0;
bbcShape188.around.y = 200.0;

bbcShape189.rotation += 0.8;
bbcShape189.around.x = 300.0;
bbcShape189.around.y = 200.0;

bbcShape190.rotation += 0.45;
bbcShape190.around.x = 300.0;
bbcShape190.around.y = 200.0;

bbcShape191.rotation += 0.9;
bbcShape191.around.x = 300.0;
bbcShape191.around.y = 200.0;

bbcShape192.rotation += 0.9;
bbcShape192.around.x = 300.0;
bbcShape192.around.y = 200.0;

bbcShape193.rotation += 0.9;
bbcShape193.around.x = 300.0;
bbcShape193.around.y = 200.0;

bbcShape194.rotation += 0.9;
bbcShape194.around.x = 300.0;
bbcShape194.around.y = 200.0;

bbcShape195.rotation += 0.9;
bbcShape195.around.x = 300.0;
bbcShape195.around.y = 200.0;

bbcShape196.rotation += 0.9;
bbcShape196.around.x = 300.0;
bbcShape196.around.y = 200.0;

bbcShape197.rotation += 0.9;
bbcShape197.around.x = 300.0;
bbcShape197.around.y = 200.0;

bbcShape198.rotation += 0.9;
bbcShape198.around.x = 300.0;
bbcShape198.around.y = 200.0;

bbcShape199.rotation += 0.9;
bbcShape199.around.x = 300.0;
bbcShape199.around.y = 200.0;

bbcShape200.rotation += 0.9;
bbcShape200.around.x = 300.0;
bbcShape200.around.y = 200.0;

bbcShape201.rotation += 0.9;
bbcShape201.around.x = 300.0;
bbcShape201.around.y = 200.0;

bbcShape202.rotation += 0.9;
bbcShape202.around.x = 300.0;
bbcShape202.around.y = 200.0;

bbcShape203.rotation += 0.9;
bbcShape203.around.x = 300.0;
bbcShape203.around.y = 200.0;

bbcShape204.rotation += 0.9;
bbcShape204.around.x = 300.0;
bbcShape204.around.y = 200.0;

bbcShape205.rotation += 0.9;
bbcShape205.around.x = 300.0;
bbcShape205.around.y = 200.0;

bbcShape206.rotation += 0.9;
bbcShape206.around.x = 300.0;
bbcShape206.around.y = 200.0;

bbcShape207.rotation += 0.9;
bbcShape207.around.x = 300.0;
bbcShape207.around.y = 200.0;

bbcShape208.rotation += 0.9;
bbcShape208.around.x = 300.0;
bbcShape208.around.y = 200.0;

bbcShape209.rotation += 0.9;
bbcShape209.around.x = 300.0;
bbcShape209.around.y = 200.0;

bbcShape210.rotation += 0.9;
bbcShape210.around.x = 300.0;
bbcShape210.around.y = 200.0;

bbcShape211.rotation += 0.5;
bbcShape211.around.x = 300.0;
bbcShape211.around.y = 200.0;

bbcShape212.rotation += 1.0;
bbcShape212.around.x = 300.0;
bbcShape212.around.y = 200.0;

bbcShape213.rotation += 1.0;
bbcShape213.around.x = 300.0;
bbcShape213.around.y = 200.0;

bbcShape214.rotation += 1.0;
bbcShape214.around.x = 300.0;
bbcShape214.around.y = 200.0;

bbcShape215.rotation += 1.0;
bbcShape215.around.x = 300.0;
bbcShape215.around.y = 200.0;

bbcShape216.rotation += 1.0;
bbcShape216.around.x = 300.0;
bbcShape216.around.y = 200.0;

bbcShape217.rotation += 1.0;
bbcShape217.around.x = 300.0;
bbcShape217.around.y = 200.0;

bbcShape218.rotation += 1.0;
bbcShape218.around.x = 300.0;
bbcShape218.around.y = 200.0;

bbcShape219.rotation += 1.0;
bbcShape219.around.x = 300.0;
bbcShape219.around.y = 200.0;

bbcShape220.rotation += 1.0;
bbcShape220.around.x = 300.0;
bbcShape220.around.y = 200.0;

bbcShape221.rotation += 1.0;
bbcShape221.around.x = 300.0;
bbcShape221.around.y = 200.0;

bbcShape222.rotation += 1.0;
bbcShape222.around.x = 300.0;
bbcShape222.around.y = 200.0;

bbcShape223.rotation += 1.0;
bbcShape223.around.x = 300.0;
bbcShape223.around.y = 200.0;

bbcShape224.rotation += 1.0;
bbcShape224.around.x = 300.0;
bbcShape224.around.y = 200.0;

bbcShape225.rotation += 1.0;
bbcShape225.around.x = 300.0;
bbcShape225.around.y = 200.0;

bbcShape226.rotation += 1.0;
bbcShape226.around.x = 300.0;
bbcShape226.around.y = 200.0;

bbcShape227.rotation += 1.0;
bbcShape227.around.x = 300.0;
bbcShape227.around.y = 200.0;

bbcShape228.rotation += 1.0;
bbcShape228.around.x = 300.0;
bbcShape228.around.y = 200.0;

bbcShape229.rotation += 1.0;
bbcShape229.around.x = 300.0;
bbcShape229.around.y = 200.0;

bbcShape230.rotation += 1.0;
bbcShape230.around.x = 300.0;
bbcShape230.around.y = 200.0;

bbcShape231.rotation += 1.0;
bbcShape231.around.x = 300.0;
bbcShape231.around.y = 200.0;

bbcShape232.rotation += 0.55;
bbcShape232.around.x = 300.0;
bbcShape232.around.y = 200.0;

bbcShape233.rotation += 1.1;
bbcShape233.around.x = 300.0;
bbcShape233.around.y = 200.0;

bbcShape234.rotation += 1.1;
bbcShape234.around.x = 300.0;
bbcShape234.around.y = 200.0;

bbcShape235.rotation += 1.1;
bbcShape235.around.x = 300.0;
bbcShape235.around.y = 200.0;

bbcShape236.rotation += 1.1;
bbcShape236.around.x = 300.0;
bbcShape236.around.y = 200.0;

bbcShape237.rotation += 1.1;
bbcShape237.around.x = 300.0;
bbcShape237.around.y = 200.0;

bbcShape238.rotation += 1.1;
bbcShape238.around.x = 300.0;
bbcShape238.around.y = 200.0;

bbcShape239.rotation += 1.1;
bbcShape239.around.x = 300.0;
bbcShape239.around.y = 200.0;

bbcShape240.rotation += 1.1;
bbcShape240.around.x = 300.0;
bbcShape240.around.y = 200.0;

bbcShape241.rotation += 1.1;
bbcShape241.around.x = 300.0;
bbcShape241.around.y = 200.0;

bbcShape242.rotation += 1.1;
bbcShape242.around.x = 300.0;
bbcShape242.around.y = 200.0;

bbcShape243.rotation += 1.1;
bbcShape243.around.x = 300.0;
bbcShape243.around.y = 200.0;

bbcShape244.rotation += 1.1;
bbcShape244.around.x = 300.0;
bbcShape244.around.y = 200.0;

bbcShape245.rotation += 1.1;
bbcShape245.around.x = 300.0;
bbcShape245.around.y = 200.0;

bbcShape246.rotation += 1.1;
bbcShape246.around.x = 300.0;
bbcShape246.around.y = 200.0;

bbcShape247.rotation += 1.1;
bbcShape247.around.x = 300.0;
bbcShape247.around.y = 200.0;

bbcShape248.rotation += 1.1;
bbcShape248.around.x = 300.0;
bbcShape248.around.y = 200.0;

bbcShape249.rotation += 1.1;
bbcShape249.around.x = 300.0;
bbcShape249.around.y = 200.0;

bbcShape250.rotation += 1.1;
bbcShape250.around.x = 300.0;
bbcShape250.around.y = 200.0;

bbcShape251.rotation += 1.1;
bbcShape251.around.x = 300.0;
bbcShape251.around.y = 200.0;

bbcShape252.rotation += 1.1;
bbcShape252.around.x = 300.0;
bbcShape252.around.y = 200.0;

bbcShape253.rotation += 0.6;
bbcShape253.around.x = 300.0;
bbcShape253.around.y = 200.0;

bbcShape254.rotation += 1.2;
bbcShape254.around.x = 300.0;
bbcShape254.around.y = 200.0;

bbcShape255.rotation += 1.2;
bbcShape255.around.x = 300.0;
bbcShape255.around.y = 200.0;

bbcShape256.rotation += 1.2;
bbcShape256.around.x = 300.0;
bbcShape256.around.y = 200.0;

bbcShape257.rotation += 1.2;
bbcShape257.around.x = 300.0;
bbcShape257.around.y = 200.0;

bbcShape258.rotation += 1.2;
bbcShape258.around.x = 300.0;
bbcShape258.around.y = 200.0;

bbcShape259.rotation += 1.2;
bbcShape259.around.x = 300.0;
bbcShape259.around.y = 200.0;

bbcShape260.rotation += 1.2;
bbcShape260.around.x = 300.0;
bbcShape260.around.y = 200.0;

bbcShape261.rotation += 1.2;
bbcShape261.around.x = 300.0;
bbcShape261.around.y = 200.0;

bbcShape262.rotation += 1.2;
bbcShape262.around.x = 300.0;
bbcShape262.around.y = 200.0;

bbcShape263.rotation += 1.2;
bbcShape263.around.x = 300.0;
bbcShape263.around.y = 200.0;

bbcShape264.rotation += 1.2;
bbcShape264.around.x = 300.0;
bbcShape264.around.y = 200.0;

bbcShape265.rotation += 1.2;
bbcShape265.around.x = 300.0;
bbcShape265.around.y = 200.0;

bbcShape266.rotation += 1.2;
bbcShape266.around.x = 300.0;
bbcShape266.around.y = 200.0;

bbcShape267.rotation += 1.2;
bbcShape267.around.x = 300.0;
bbcShape267.around.y = 200.0;

bbcShape268.rotation += 1.2;
bbcShape268.around.x = 300.0;
bbcShape268.around.y = 200.0;

bbcShape269.rotation += 1.2;
bbcShape269.around.x = 300.0;
bbcShape269.around.y = 200.0;

bbcShape270.rotation += 1.2;
bbcShape270.around.x = 300.0;
bbcShape270.around.y = 200.0;

bbcShape271.rotation += 1.2;
bbcShape271.around.x = 300.0;
bbcShape271.around.y = 200.0;

bbcShape272.rotation += 1.2;
bbcShape272.around.x = 300.0;
bbcShape272.around.y = 200.0;

bbcShape273.rotation += 1.2;
bbcShape273.around.x = 300.0;
bbcShape273.around.y = 200.0;

bbcShape274.rotation += 0.65;
bbcShape274.around.x = 300.0;
bbcShape274.around.y = 200.0;

bbcShape275.rotation += 1.3;
bbcShape275.around.x = 300.0;
bbcShape275.around.y = 200.0;

bbcShape276.rotation += 1.3;
bbcShape276.around.x = 300.0;
bbcShape276.around.y = 200.0;

bbcShape277.rotation += 1.3;
bbcShape277.around.x = 300.0;
bbcShape277.around.y = 200.0;

bbcShape278.rotation += 1.3;
bbcShape278.around.x = 300.0;
bbcShape278.around.y = 200.0;

bbcShape279.rotation += 1.3;
bbcShape279.around.x = 300.0;
bbcShape279.around.y = 200.0;

bbcShape280.rotation += 1.3;
bbcShape280.around.x = 300.0;
bbcShape280.around.y = 200.0;

bbcShape281.rotation += 1.3;
bbcShape281.around.x = 300.0;
bbcShape281.around.y = 200.0;

bbcShape282.rotation += 1.3;
bbcShape282.around.x = 300.0;
bbcShape282.around.y = 200.0;

bbcShape283.rotation += 1.3;
bbcShape283.around.x = 300.0;
bbcShape283.around.y = 200.0;

bbcShape284.rotation += 1.3;
bbcShape284.around.x = 300.0;
bbcShape284.around.y = 200.0;

bbcShape285.rotation += 1.3;
bbcShape285.around.x = 300.0;
bbcShape285.around.y = 200.0;

bbcShape286.rotation += 1.3;
bbcShape286.around.x = 300.0;
bbcShape286.around.y = 200.0;

bbcShape287.rotation += 1.3;
bbcShape287.around.x = 300.0;
bbcShape287.around.y = 200.0;

bbcShape288.rotation += 1.3;
bbcShape288.around.x = 300.0;
bbcShape288.around.y = 200.0;

bbcShape289.rotation += 1.3;
bbcShape289.around.x = 300.0;
bbcShape289.around.y = 200.0;

bbcShape290.rotation += 1.3;
bbcShape290.around.x = 300.0;
bbcShape290.around.y = 200.0;

bbcShape291.rotation += 1.3;
bbcShape291.around.x = 300.0;
bbcShape291.around.y = 200.0;

bbcShape292.rotation += 1.3;
bbcShape292.around.x = 300.0;
bbcShape292.around.y = 200.0;

bbcShape293.rotation += 1.3;
bbcShape293.around.x = 300.0;
bbcShape293.around.y = 200.0;

bbcShape294.rotation += 1.3;
bbcShape294.around.x = 300.0;
bbcShape294.around.y = 200.0;

bbcShape295.rotation += 0.7;
bbcShape295.around.x = 300.0;
bbcShape295.around.y = 200.0;

bbcShape296.rotation += 1.4;
bbcShape296.around.x = 300.0;
bbcShape296.around.y = 200.0;

bbcShape297.rotation += 1.4;
bbcShape297.around.x = 300.0;
bbcShape297.around.y = 200.0;

bbcShape298.rotation += 1.4;
bbcShape298.around.x = 300.0;
bbcShape298.around.y = 200.0;

bbcShape299.rotation += 1.4;
bbcShape299.around.x = 300.0;
bbcShape299.around.y = 200.0;

bbcShape300.rotation += 1.4;
bbcShape300.around.x = 300.0;
bbcShape300.around.y = 200.0;

bbcShape301.rotation += 1.4;
bbcShape301.around.x = 300.0;
bbcShape301.around.y = 200.0;

bbcShape302.rotation += 1.4;
bbcShape302.around.x = 300.0;
bbcShape302.around.y = 200.0;

bbcShape303.rotation += 1.4;
bbcShape303.around.x = 300.0;
bbcShape303.around.y = 200.0;

bbcShape304.rotation += 1.4;
bbcShape304.around.x = 300.0;
bbcShape304.around.y = 200.0;

bbcShape305.rotation += 1.4;
bbcShape305.around.x = 300.0;
bbcShape305.around.y = 200.0;

bbcShape306.rotation += 1.4;
bbcShape306.around.x = 300.0;
bbcShape306.around.y = 200.0;

bbcShape307.rotation += 1.4;
bbcShape307.around.x = 300.0;
bbcShape307.around.y = 200.0;

bbcShape308.rotation += 1.4;
bbcShape308.around.x = 300.0;
bbcShape308.around.y = 200.0;

bbcShape309.rotation += 1.4;
bbcShape309.around.x = 300.0;
bbcShape309.around.y = 200.0;

bbcShape310.rotation += 1.4;
bbcShape310.around.x = 300.0;
bbcShape310.around.y = 200.0;

bbcShape311.rotation += 1.4;
bbcShape311.around.x = 300.0;
bbcShape311.around.y = 200.0;

bbcShape312.rotation += 1.4;
bbcShape312.around.x = 300.0;
bbcShape312.around.y = 200.0;

bbcShape313.rotation += 1.4;
bbcShape313.around.x = 300.0;
bbcShape313.around.y = 200.0;

bbcShape314.rotation += 1.4;
bbcShape314.around.x = 300.0;
bbcShape314.around.y = 200.0;

bbcShape315.rotation += 1.4;
bbcShape315.around.x = 300.0;
bbcShape315.around.y = 200.0;

bbcShape316.rotation += 0.75;
bbcShape316.around.x = 300.0;
bbcShape316.around.y = 200.0;

bbcShape317.rotation += 1.5;
bbcShape317.around.x = 300.0;
bbcShape317.around.y = 200.0;

bbcShape318.rotation += 1.5;
bbcShape318.around.x = 300.0;
bbcShape318.around.y = 200.0;

bbcShape319.rotation += 1.5;
bbcShape319.around.x = 300.0;
bbcShape319.around.y = 200.0;

bbcShape320.rotation += 1.5;
bbcShape320.around.x = 300.0;
bbcShape320.around.y = 200.0;

bbcShape321.rotation += 1.5;
bbcShape321.around.x = 300.0;
bbcShape321.around.y = 200.0;

bbcShape322.rotation += 1.5;
bbcShape322.around.x = 300.0;
bbcShape322.around.y = 200.0;

bbcShape323.rotation += 1.5;
bbcShape323.around.x = 300.0;
bbcShape323.around.y = 200.0;

bbcShape324.rotation += 1.5;
bbcShape324.around.x = 300.0;
bbcShape324.around.y = 200.0;

bbcShape325.rotation += 1.5;
bbcShape325.around.x = 300.0;
bbcShape325.around.y = 200.0;

bbcShape326.rotation += 1.5;
bbcShape326.around.x = 300.0;
bbcShape326.around.y = 200.0;

bbcShape327.rotation += 1.5;
bbcShape327.around.x = 300.0;
bbcShape327.around.y = 200.0;

bbcShape328.rotation += 1.5;
bbcShape328.around.x = 300.0;
bbcShape328.around.y = 200.0;

bbcShape329.rotation += 1.5;
bbcShape329.around.x = 300.0;
bbcShape329.around.y = 200.0;

bbcShape330.rotation += 1.5;
bbcShape330.around.x = 300.0;
bbcShape330.around.y = 200.0;

bbcShape331.rotation += 1.5;
bbcShape331.around.x = 300.0;
bbcShape331.around.y = 200.0;

bbcShape332.rotation += 1.5;
bbcShape332.around.x = 300.0;
bbcShape332.around.y = 200.0;

bbcShape333.rotation += 1.5;
bbcShape333.around.x = 300.0;
bbcShape333.around.y = 200.0;

bbcShape334.rotation += 1.5;
bbcShape334.around.x = 300.0;
bbcShape334.around.y = 200.0;

bbcShape335.rotation += 1.5;
bbcShape335.around.x = 300.0;
bbcShape335.around.y = 200.0;

bbcShape336.rotation += 1.5;
bbcShape336.around.x = 300.0;
bbcShape336.around.y = 200.0;

bbcShape337.rotation += 0.8;
bbcShape337.around.x = 300.0;
bbcShape337.around.y = 200.0;

bbcShape338.rotation += 1.6;
bbcShape338.around.x = 300.0;
bbcShape338.around.y = 200.0;

bbcShape339.rotation += 1.6;
bbcShape339.around.x = 300.0;
bbcShape339.around.y = 200.0;

bbcShape340.rotation += 1.6;
bbcShape340.around.x = 300.0;
bbcShape340.around.y = 200.0;

bbcShape341.rotation += 1.6;
bbcShape341.around.x = 300.0;
bbcShape341.around.y = 200.0;

bbcShape342.rotation += 1.6;
bbcShape342.around.x = 300.0;
bbcShape342.around.y = 200.0;

bbcShape343.rotation += 1.6;
bbcShape343.around.x = 300.0;
bbcShape343.around.y = 200.0;

bbcShape344.rotation += 1.6;
bbcShape344.around.x = 300.0;
bbcShape344.around.y = 200.0;

bbcShape345.rotation += 1.6;
bbcShape345.around.x = 300.0;
bbcShape345.around.y = 200.0;

bbcShape346.rotation += 1.6;
bbcShape346.around.x = 300.0;
bbcShape346.around.y = 200.0;

bbcShape347.rotation += 1.6;
bbcShape347.around.x = 300.0;
bbcShape347.around.y = 200.0;

bbcShape348.rotation += 1.6;
bbcShape348.around.x = 300.0;
bbcShape348.around.y = 200.0;

bbcShape349.rotation += 1.6;
bbcShape349.around.x = 300.0;
bbcShape349.around.y = 200.0;

bbcShape350.rotation += 1.6;
bbcShape350.around.x = 300.0;
bbcShape350.around.y = 200.0;

bbcShape351.rotation += 1.6;
bbcShape351.around.x = 300.0;
bbcShape351.around.y = 200.0;

bbcShape352.rotation += 1.6;
bbcShape352.around.x = 300.0;
bbcShape352.around.y = 200.0;

bbcShape353.rotation += 1.6;
bbcShape353.around.x = 300.0;
bbcShape353.around.y = 200.0;

bbcShape354.rotation += 1.6;
bbcShape354.around.x = 300.0;
bbcShape354.around.y = 200.0;

bbcShape355.rotation += 1.6;
bbcShape355.around.x = 300.0;
bbcShape355.around.y = 200.0;

bbcShape356.rotation += 1.6;
bbcShape356.around.x = 300.0;
bbcShape356.around.y = 200.0;

bbcShape357.rotation += 1.6;
bbcShape357.around.x = 300.0;
bbcShape357.around.y = 200.0;

bbcShape358.rotation += 0.85;
bbcShape358.around.x = 300.0;
bbcShape358.around.y = 200.0;

bbcShape359.rotation += 1.7;
bbcShape359.around.x = 300.0;
bbcShape359.around.y = 200.0;

bbcShape360.rotation += 1.7;
bbcShape360.around.x = 300.0;
bbcShape360.around.y = 200.0;

bbcShape361.rotation += 1.7;
bbcShape361.around.x = 300.0;
bbcShape361.around.y = 200.0;

bbcShape362.rotation += 1.7;
bbcShape362.around.x = 300.0;
bbcShape362.around.y = 200.0;

bbcShape363.rotation += 1.7;
bbcShape363.around.x = 300.0;
bbcShape363.around.y = 200.0;

bbcShape364.rotation += 1.7;
bbcShape364.around.x = 300.0;
bbcShape364.around.y = 200.0;

bbcShape365.rotation += 1.7;
bbcShape365.around.x = 300.0;
bbcShape365.around.y = 200.0;

bbcShape366.rotation += 1.7;
bbcShape366.around.x = 300.0;
bbcShape366.around.y = 200.0;

bbcShape367.rotation += 1.7;
bbcShape367.around.x = 300.0;
bbcShape367.around.y = 200.0;

bbcShape368.rotation += 1.7;
bbcShape368.around.x = 300.0;
bbcShape368.around.y = 200.0;

bbcShape369.rotation += 1.7;
bbcShape369.around.x = 300.0;
bbcShape369.around.y = 200.0;

bbcShape370.rotation += 1.7;
bbcShape370.around.x = 300.0;
bbcShape370.around.y = 200.0;

bbcShape371.rotation += 1.7;
bbcShape371.around.x = 300.0;
bbcShape371.around.y = 200.0;

bbcShape372.rotation += 1.7;
bbcShape372.around.x = 300.0;
bbcShape372.around.y = 200.0;

bbcShape373.rotation += 1.7;
bbcShape373.around.x = 300.0;
bbcShape373.around.y = 200.0;

bbcShape374.rotation += 1.7;
bbcShape374.around.x = 300.0;
bbcShape374.around.y = 200.0;

bbcShape375.rotation += 1.7;
bbcShape375.around.x = 300.0;
bbcShape375.around.y = 200.0;

bbcShape376.rotation += 1.7;
bbcShape376.around.x = 300.0;
bbcShape376.around.y = 200.0;

bbcShape377.rotation += 1.7;
bbcShape377.around.x = 300.0;
bbcShape377.around.y = 200.0;

bbcShape378.rotation += 1.7;
bbcShape378.around.x = 300.0;
bbcShape378.around.y = 200.0;

bbcShape379.rotation += 0.9;
bbcShape379.around.x = 300.0;
bbcShape379.around.y = 200.0;

bbcShape380.rotation += 1.8;
bbcShape380.around.x = 300.0;
bbcShape380.around.y = 200.0;

bbcShape381.rotation += 1.8;
bbcShape381.around.x = 300.0;
bbcShape381.around.y = 200.0;

bbcShape382.rotation += 1.8;
bbcShape382.around.x = 300.0;
bbcShape382.around.y = 200.0;

bbcShape383.rotation += 1.8;
bbcShape383.around.x = 300.0;
bbcShape383.around.y = 200.0;

bbcShape384.rotation += 1.8;
bbcShape384.around.x = 300.0;
bbcShape384.around.y = 200.0;

bbcShape385.rotation += 1.8;
bbcShape385.around.x = 300.0;
bbcShape385.around.y = 200.0;

bbcShape386.rotation += 1.8;
bbcShape386.around.x = 300.0;
bbcShape386.around.y = 200.0;

bbcShape387.rotation += 1.8;
bbcShape387.around.x = 300.0;
bbcShape387.around.y = 200.0;

bbcShape388.rotation += 1.8;
bbcShape388.around.x = 300.0;
bbcShape388.around.y = 200.0;

bbcShape389.rotation += 1.8;
bbcShape389.around.x = 300.0;
bbcShape389.around.y = 200.0;

bbcShape390.rotation += 1.8;
bbcShape390.around.x = 300.0;
bbcShape390.around.y = 200.0;

bbcShape391.rotation += 1.8;
bbcShape391.around.x = 300.0;
bbcShape391.around.y = 200.0;

bbcShape392.rotation += 1.8;
bbcShape392.around.x = 300.0;
bbcShape392.around.y = 200.0;

bbcShape393.rotation += 1.8;
bbcShape393.around.x = 300.0;
bbcShape393.around.y = 200.0;

bbcShape394.rotation += 1.8;
bbcShape394.around.x = 300.0;
bbcShape394.around.y = 200.0;

bbcShape395.rotation += 1.8;
bbcShape395.around.x = 300.0;
bbcShape395.around.y = 200.0;

bbcShape396.rotation += 1.8;
bbcShape396.around.x = 300.0;
bbcShape396.around.y = 200.0;

bbcShape397.rotation += 1.8;
bbcShape397.around.x = 300.0;
bbcShape397.around.y = 200.0;

bbcShape398.rotation += 1.8;
bbcShape398.around.x = 300.0;
bbcShape398.around.y = 200.0;

bbcShape399.rotation += 1.8;
bbcShape399.around.x = 300.0;
bbcShape399.around.y = 200.0;

bbcShape400.rotation += 0.95;
bbcShape400.around.x = 300.0;
bbcShape400.around.y = 200.0;

bbcShape401.rotation += 1.9;
bbcShape401.around.x = 300.0;
bbcShape401.around.y = 200.0;

bbcShape402.rotation += 1.9;
bbcShape402.around.x = 300.0;
bbcShape402.around.y = 200.0;

bbcShape403.rotation += 1.9;
bbcShape403.around.x = 300.0;
bbcShape403.around.y = 200.0;

bbcShape404.rotation += 1.9;
bbcShape404.around.x = 300.0;
bbcShape404.around.y = 200.0;

bbcShape405.rotation += 1.9;
bbcShape405.around.x = 300.0;
bbcShape405.around.y = 200.0;

bbcShape406.rotation += 1.9;
bbcShape406.around.x = 300.0;
bbcShape406.around.y = 200.0;

bbcShape407.rotation += 1.9;
bbcShape407.around.x = 300.0;
bbcShape407.around.y = 200.0;

bbcShape408.rotation += 1.9;
bbcShape408.around.x = 300.0;
bbcShape408.around.y = 200.0;

bbcShape409.rotation += 1.9;
bbcShape409.around.x = 300.0;
bbcShape409.around.y = 200.0;

bbcShape410.rotation += 1.9;
bbcShape410.around.x = 300.0;
bbcShape410.around.y = 200.0;

bbcShape411.rotation += 1.9;
bbcShape411.around.x = 300.0;
bbcShape411.around.y = 200.0;

bbcShape412.rotation += 1.9;
bbcShape412.around.x = 300.0;
bbcShape412.around.y = 200.0;

bbcShape413.rotation += 1.9;
bbcShape413.around.x = 300.0;
bbcShape413.around.y = 200.0;

bbcShape414.rotation += 1.9;
bbcShape414.around.x = 300.0;
bbcShape414.around.y = 200.0;

bbcShape415.rotation += 1.9;
bbcShape415.around.x = 300.0;
bbcShape415.around.y = 200.0;

bbcShape416.rotation += 1.9;
bbcShape416.around.x = 300.0;
bbcShape416.around.y = 200.0;

bbcShape417.rotation += 1.9;
bbcShape417.around.x = 300.0;
bbcShape417.around.y = 200.0;

bbcShape418.rotation += 1.9;
bbcShape418.around.x = 300.0;
bbcShape418.around.y = 200.0;

bbcShape419.rotation += 1.9;
bbcShape419.around.x = 300.0;
bbcShape419.around.y = 200.0;

bbcShape420.rotation += 1.9;
bbcShape420.around.x = 300.0;
bbcShape420.around.y = 200.0;

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1.around.x, bbcShape1.around.y);
ctx.rotate(bbcShape1.rotation * Math.PI / 180);
ctx.translate(-bbcShape1.around.x, -bbcShape1.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1.points[0][0], bbcShape1.points[0][1]);
ctx.lineTo(bbcShape1.points[1][0], bbcShape1.points[1][1]);
ctx.lineTo(bbcShape1.points[2][0], bbcShape1.points[2][1]);
ctx.lineTo(bbcShape1.points[3][0], bbcShape1.points[3][1]);
ctx.lineTo(bbcShape1.points[4][0], bbcShape1.points[4][1]);
ctx.lineTo(bbcShape1.points[5][0], bbcShape1.points[5][1]);
ctx.lineTo(bbcShape1.points[6][0], bbcShape1.points[6][1]);
ctx.lineTo(bbcShape1.points[7][0], bbcShape1.points[7][1]);
ctx.lineTo(bbcShape1.points[8][0], bbcShape1.points[8][1]);
ctx.lineTo(bbcShape1.points[9][0], bbcShape1.points[9][1]);
ctx.lineTo(bbcShape1.points[10][0], bbcShape1.points[10][1]);
ctx.lineTo(bbcShape1.points[11][0], bbcShape1.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape2.around.x, bbcShape2.around.y);
ctx.rotate(bbcShape2.rotation * Math.PI / 180);
ctx.translate(-bbcShape2.around.x, -bbcShape2.around.y);
ctx.beginPath();
ctx.rect(bbcShape2.point.x, bbcShape2.point.y, bbcShape2.size.width, bbcShape2.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape3.around.x, bbcShape3.around.y);
ctx.rotate(bbcShape3.rotation * Math.PI / 180);
ctx.translate(-bbcShape3.around.x, -bbcShape3.around.y);
ctx.beginPath();
ctx.rect(bbcShape3.point.x, bbcShape3.point.y, bbcShape3.size.width, bbcShape3.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape4.around.x, bbcShape4.around.y);
ctx.rotate(bbcShape4.rotation * Math.PI / 180);
ctx.translate(-bbcShape4.around.x, -bbcShape4.around.y);
ctx.beginPath();
ctx.rect(bbcShape4.point.x, bbcShape4.point.y, bbcShape4.size.width, bbcShape4.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape5.around.x, bbcShape5.around.y);
ctx.rotate(bbcShape5.rotation * Math.PI / 180);
ctx.translate(-bbcShape5.around.x, -bbcShape5.around.y);
ctx.beginPath();
ctx.rect(bbcShape5.point.x, bbcShape5.point.y, bbcShape5.size.width, bbcShape5.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape6.around.x, bbcShape6.around.y);
ctx.rotate(bbcShape6.rotation * Math.PI / 180);
ctx.translate(-bbcShape6.around.x, -bbcShape6.around.y);
ctx.beginPath();
ctx.rect(bbcShape6.point.x, bbcShape6.point.y, bbcShape6.size.width, bbcShape6.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape7.around.x, bbcShape7.around.y);
ctx.rotate(bbcShape7.rotation * Math.PI / 180);
ctx.translate(-bbcShape7.around.x, -bbcShape7.around.y);
ctx.beginPath();
ctx.rect(bbcShape7.point.x, bbcShape7.point.y, bbcShape7.size.width, bbcShape7.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape8.around.x, bbcShape8.around.y);
ctx.rotate(bbcShape8.rotation * Math.PI / 180);
ctx.translate(-bbcShape8.around.x, -bbcShape8.around.y);
ctx.beginPath();
ctx.rect(bbcShape8.point.x, bbcShape8.point.y, bbcShape8.size.width, bbcShape8.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape9.around.x, bbcShape9.around.y);
ctx.rotate(bbcShape9.rotation * Math.PI / 180);
ctx.translate(-bbcShape9.around.x, -bbcShape9.around.y);
ctx.beginPath();
ctx.rect(bbcShape9.point.x, bbcShape9.point.y, bbcShape9.size.width, bbcShape9.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape10.around.x, bbcShape10.around.y);
ctx.rotate(bbcShape10.rotation * Math.PI / 180);
ctx.translate(-bbcShape10.around.x, -bbcShape10.around.y);
ctx.beginPath();
ctx.rect(bbcShape10.point.x, bbcShape10.point.y, bbcShape10.size.width, bbcShape10.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape11.around.x, bbcShape11.around.y);
ctx.rotate(bbcShape11.rotation * Math.PI / 180);
ctx.translate(-bbcShape11.around.x, -bbcShape11.around.y);
ctx.beginPath();
ctx.rect(bbcShape11.point.x, bbcShape11.point.y, bbcShape11.size.width, bbcShape11.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape12.around.x, bbcShape12.around.y);
ctx.rotate(bbcShape12.rotation * Math.PI / 180);
ctx.translate(-bbcShape12.around.x, -bbcShape12.around.y);
ctx.beginPath();
ctx.rect(bbcShape12.point.x, bbcShape12.point.y, bbcShape12.size.width, bbcShape12.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape13.around.x, bbcShape13.around.y);
ctx.rotate(bbcShape13.rotation * Math.PI / 180);
ctx.translate(-bbcShape13.around.x, -bbcShape13.around.y);
ctx.beginPath();
ctx.rect(bbcShape13.point.x, bbcShape13.point.y, bbcShape13.size.width, bbcShape13.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape14.around.x, bbcShape14.around.y);
ctx.rotate(bbcShape14.rotation * Math.PI / 180);
ctx.translate(-bbcShape14.around.x, -bbcShape14.around.y);
ctx.beginPath();
ctx.rect(bbcShape14.point.x, bbcShape14.point.y, bbcShape14.size.width, bbcShape14.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape15.around.x, bbcShape15.around.y);
ctx.rotate(bbcShape15.rotation * Math.PI / 180);
ctx.translate(-bbcShape15.around.x, -bbcShape15.around.y);
ctx.beginPath();
ctx.rect(bbcShape15.point.x, bbcShape15.point.y, bbcShape15.size.width, bbcShape15.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape16.around.x, bbcShape16.around.y);
ctx.rotate(bbcShape16.rotation * Math.PI / 180);
ctx.translate(-bbcShape16.around.x, -bbcShape16.around.y);
ctx.beginPath();
ctx.rect(bbcShape16.point.x, bbcShape16.point.y, bbcShape16.size.width, bbcShape16.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape17.around.x, bbcShape17.around.y);
ctx.rotate(bbcShape17.rotation * Math.PI / 180);
ctx.translate(-bbcShape17.around.x, -bbcShape17.around.y);
ctx.beginPath();
ctx.rect(bbcShape17.point.x, bbcShape17.point.y, bbcShape17.size.width, bbcShape17.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape18.around.x, bbcShape18.around.y);
ctx.rotate(bbcShape18.rotation * Math.PI / 180);
ctx.translate(-bbcShape18.around.x, -bbcShape18.around.y);
ctx.beginPath();
ctx.rect(bbcShape18.point.x, bbcShape18.point.y, bbcShape18.size.width, bbcShape18.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape19.around.x, bbcShape19.around.y);
ctx.rotate(bbcShape19.rotation * Math.PI / 180);
ctx.translate(-bbcShape19.around.x, -bbcShape19.around.y);
ctx.beginPath();
ctx.rect(bbcShape19.point.x, bbcShape19.point.y, bbcShape19.size.width, bbcShape19.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape20.around.x, bbcShape20.around.y);
ctx.rotate(bbcShape20.rotation * Math.PI / 180);
ctx.translate(-bbcShape20.around.x, -bbcShape20.around.y);
ctx.beginPath();
ctx.rect(bbcShape20.point.x, bbcShape20.point.y, bbcShape20.size.width, bbcShape20.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape21.around.x, bbcShape21.around.y);
ctx.rotate(bbcShape21.rotation * Math.PI / 180);
ctx.translate(-bbcShape21.around.x, -bbcShape21.around.y);
ctx.beginPath();
ctx.rect(bbcShape21.point.x, bbcShape21.point.y, bbcShape21.size.width, bbcShape21.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape22.around.x, bbcShape22.around.y);
ctx.rotate(bbcShape22.rotation * Math.PI / 180);
ctx.translate(-bbcShape22.around.x, -bbcShape22.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape22.points[0][0], bbcShape22.points[0][1]);
ctx.lineTo(bbcShape22.points[1][0], bbcShape22.points[1][1]);
ctx.lineTo(bbcShape22.points[2][0], bbcShape22.points[2][1]);
ctx.lineTo(bbcShape22.points[3][0], bbcShape22.points[3][1]);
ctx.lineTo(bbcShape22.points[4][0], bbcShape22.points[4][1]);
ctx.lineTo(bbcShape22.points[5][0], bbcShape22.points[5][1]);
ctx.lineTo(bbcShape22.points[6][0], bbcShape22.points[6][1]);
ctx.lineTo(bbcShape22.points[7][0], bbcShape22.points[7][1]);
ctx.lineTo(bbcShape22.points[8][0], bbcShape22.points[8][1]);
ctx.lineTo(bbcShape22.points[9][0], bbcShape22.points[9][1]);
ctx.lineTo(bbcShape22.points[10][0], bbcShape22.points[10][1]);
ctx.lineTo(bbcShape22.points[11][0], bbcShape22.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape23.around.x, bbcShape23.around.y);
ctx.rotate(bbcShape23.rotation * Math.PI / 180);
ctx.translate(-bbcShape23.around.x, -bbcShape23.around.y);
ctx.beginPath();
ctx.rect(bbcShape23.point.x, bbcShape23.point.y, bbcShape23.size.width, bbcShape23.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape24.around.x, bbcShape24.around.y);
ctx.rotate(bbcShape24.rotation * Math.PI / 180);
ctx.translate(-bbcShape24.around.x, -bbcShape24.around.y);
ctx.beginPath();
ctx.rect(bbcShape24.point.x, bbcShape24.point.y, bbcShape24.size.width, bbcShape24.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape25.around.x, bbcShape25.around.y);
ctx.rotate(bbcShape25.rotation * Math.PI / 180);
ctx.translate(-bbcShape25.around.x, -bbcShape25.around.y);
ctx.beginPath();
ctx.rect(bbcShape25.point.x, bbcShape25.point.y, bbcShape25.size.width, bbcShape25.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape26.around.x, bbcShape26.around.y);
ctx.rotate(bbcShape26.rotation * Math.PI / 180);
ctx.translate(-bbcShape26.around.x, -bbcShape26.around.y);
ctx.beginPath();
ctx.rect(bbcShape26.point.x, bbcShape26.point.y, bbcShape26.size.width, bbcShape26.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape27.around.x, bbcShape27.around.y);
ctx.rotate(bbcShape27.rotation * Math.PI / 180);
ctx.translate(-bbcShape27.around.x, -bbcShape27.around.y);
ctx.beginPath();
ctx.rect(bbcShape27.point.x, bbcShape27.point.y, bbcShape27.size.width, bbcShape27.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape28.around.x, bbcShape28.around.y);
ctx.rotate(bbcShape28.rotation * Math.PI / 180);
ctx.translate(-bbcShape28.around.x, -bbcShape28.around.y);
ctx.beginPath();
ctx.rect(bbcShape28.point.x, bbcShape28.point.y, bbcShape28.size.width, bbcShape28.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape29.around.x, bbcShape29.around.y);
ctx.rotate(bbcShape29.rotation * Math.PI / 180);
ctx.translate(-bbcShape29.around.x, -bbcShape29.around.y);
ctx.beginPath();
ctx.rect(bbcShape29.point.x, bbcShape29.point.y, bbcShape29.size.width, bbcShape29.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape30.around.x, bbcShape30.around.y);
ctx.rotate(bbcShape30.rotation * Math.PI / 180);
ctx.translate(-bbcShape30.around.x, -bbcShape30.around.y);
ctx.beginPath();
ctx.rect(bbcShape30.point.x, bbcShape30.point.y, bbcShape30.size.width, bbcShape30.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape31.around.x, bbcShape31.around.y);
ctx.rotate(bbcShape31.rotation * Math.PI / 180);
ctx.translate(-bbcShape31.around.x, -bbcShape31.around.y);
ctx.beginPath();
ctx.rect(bbcShape31.point.x, bbcShape31.point.y, bbcShape31.size.width, bbcShape31.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape32.around.x, bbcShape32.around.y);
ctx.rotate(bbcShape32.rotation * Math.PI / 180);
ctx.translate(-bbcShape32.around.x, -bbcShape32.around.y);
ctx.beginPath();
ctx.rect(bbcShape32.point.x, bbcShape32.point.y, bbcShape32.size.width, bbcShape32.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape33.around.x, bbcShape33.around.y);
ctx.rotate(bbcShape33.rotation * Math.PI / 180);
ctx.translate(-bbcShape33.around.x, -bbcShape33.around.y);
ctx.beginPath();
ctx.rect(bbcShape33.point.x, bbcShape33.point.y, bbcShape33.size.width, bbcShape33.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape34.around.x, bbcShape34.around.y);
ctx.rotate(bbcShape34.rotation * Math.PI / 180);
ctx.translate(-bbcShape34.around.x, -bbcShape34.around.y);
ctx.beginPath();
ctx.rect(bbcShape34.point.x, bbcShape34.point.y, bbcShape34.size.width, bbcShape34.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape35.around.x, bbcShape35.around.y);
ctx.rotate(bbcShape35.rotation * Math.PI / 180);
ctx.translate(-bbcShape35.around.x, -bbcShape35.around.y);
ctx.beginPath();
ctx.rect(bbcShape35.point.x, bbcShape35.point.y, bbcShape35.size.width, bbcShape35.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape36.around.x, bbcShape36.around.y);
ctx.rotate(bbcShape36.rotation * Math.PI / 180);
ctx.translate(-bbcShape36.around.x, -bbcShape36.around.y);
ctx.beginPath();
ctx.rect(bbcShape36.point.x, bbcShape36.point.y, bbcShape36.size.width, bbcShape36.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape37.around.x, bbcShape37.around.y);
ctx.rotate(bbcShape37.rotation * Math.PI / 180);
ctx.translate(-bbcShape37.around.x, -bbcShape37.around.y);
ctx.beginPath();
ctx.rect(bbcShape37.point.x, bbcShape37.point.y, bbcShape37.size.width, bbcShape37.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape38.around.x, bbcShape38.around.y);
ctx.rotate(bbcShape38.rotation * Math.PI / 180);
ctx.translate(-bbcShape38.around.x, -bbcShape38.around.y);
ctx.beginPath();
ctx.rect(bbcShape38.point.x, bbcShape38.point.y, bbcShape38.size.width, bbcShape38.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape39.around.x, bbcShape39.around.y);
ctx.rotate(bbcShape39.rotation * Math.PI / 180);
ctx.translate(-bbcShape39.around.x, -bbcShape39.around.y);
ctx.beginPath();
ctx.rect(bbcShape39.point.x, bbcShape39.point.y, bbcShape39.size.width, bbcShape39.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape40.around.x, bbcShape40.around.y);
ctx.rotate(bbcShape40.rotation * Math.PI / 180);
ctx.translate(-bbcShape40.around.x, -bbcShape40.around.y);
ctx.beginPath();
ctx.rect(bbcShape40.point.x, bbcShape40.point.y, bbcShape40.size.width, bbcShape40.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape41.around.x, bbcShape41.around.y);
ctx.rotate(bbcShape41.rotation * Math.PI / 180);
ctx.translate(-bbcShape41.around.x, -bbcShape41.around.y);
ctx.beginPath();
ctx.rect(bbcShape41.point.x, bbcShape41.point.y, bbcShape41.size.width, bbcShape41.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape42.around.x, bbcShape42.around.y);
ctx.rotate(bbcShape42.rotation * Math.PI / 180);
ctx.translate(-bbcShape42.around.x, -bbcShape42.around.y);
ctx.beginPath();
ctx.rect(bbcShape42.point.x, bbcShape42.point.y, bbcShape42.size.width, bbcShape42.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape43.around.x, bbcShape43.around.y);
ctx.rotate(bbcShape43.rotation * Math.PI / 180);
ctx.translate(-bbcShape43.around.x, -bbcShape43.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape43.points[0][0], bbcShape43.points[0][1]);
ctx.lineTo(bbcShape43.points[1][0], bbcShape43.points[1][1]);
ctx.lineTo(bbcShape43.points[2][0], bbcShape43.points[2][1]);
ctx.lineTo(bbcShape43.points[3][0], bbcShape43.points[3][1]);
ctx.lineTo(bbcShape43.points[4][0], bbcShape43.points[4][1]);
ctx.lineTo(bbcShape43.points[5][0], bbcShape43.points[5][1]);
ctx.lineTo(bbcShape43.points[6][0], bbcShape43.points[6][1]);
ctx.lineTo(bbcShape43.points[7][0], bbcShape43.points[7][1]);
ctx.lineTo(bbcShape43.points[8][0], bbcShape43.points[8][1]);
ctx.lineTo(bbcShape43.points[9][0], bbcShape43.points[9][1]);
ctx.lineTo(bbcShape43.points[10][0], bbcShape43.points[10][1]);
ctx.lineTo(bbcShape43.points[11][0], bbcShape43.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape44.around.x, bbcShape44.around.y);
ctx.rotate(bbcShape44.rotation * Math.PI / 180);
ctx.translate(-bbcShape44.around.x, -bbcShape44.around.y);
ctx.beginPath();
ctx.rect(bbcShape44.point.x, bbcShape44.point.y, bbcShape44.size.width, bbcShape44.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape45.around.x, bbcShape45.around.y);
ctx.rotate(bbcShape45.rotation * Math.PI / 180);
ctx.translate(-bbcShape45.around.x, -bbcShape45.around.y);
ctx.beginPath();
ctx.rect(bbcShape45.point.x, bbcShape45.point.y, bbcShape45.size.width, bbcShape45.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape46.around.x, bbcShape46.around.y);
ctx.rotate(bbcShape46.rotation * Math.PI / 180);
ctx.translate(-bbcShape46.around.x, -bbcShape46.around.y);
ctx.beginPath();
ctx.rect(bbcShape46.point.x, bbcShape46.point.y, bbcShape46.size.width, bbcShape46.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape47.around.x, bbcShape47.around.y);
ctx.rotate(bbcShape47.rotation * Math.PI / 180);
ctx.translate(-bbcShape47.around.x, -bbcShape47.around.y);
ctx.beginPath();
ctx.rect(bbcShape47.point.x, bbcShape47.point.y, bbcShape47.size.width, bbcShape47.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape48.around.x, bbcShape48.around.y);
ctx.rotate(bbcShape48.rotation * Math.PI / 180);
ctx.translate(-bbcShape48.around.x, -bbcShape48.around.y);
ctx.beginPath();
ctx.rect(bbcShape48.point.x, bbcShape48.point.y, bbcShape48.size.width, bbcShape48.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape49.around.x, bbcShape49.around.y);
ctx.rotate(bbcShape49.rotation * Math.PI / 180);
ctx.translate(-bbcShape49.around.x, -bbcShape49.around.y);
ctx.beginPath();
ctx.rect(bbcShape49.point.x, bbcShape49.point.y, bbcShape49.size.width, bbcShape49.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape50.around.x, bbcShape50.around.y);
ctx.rotate(bbcShape50.rotation * Math.PI / 180);
ctx.translate(-bbcShape50.around.x, -bbcShape50.around.y);
ctx.beginPath();
ctx.rect(bbcShape50.point.x, bbcShape50.point.y, bbcShape50.size.width, bbcShape50.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape51.around.x, bbcShape51.around.y);
ctx.rotate(bbcShape51.rotation * Math.PI / 180);
ctx.translate(-bbcShape51.around.x, -bbcShape51.around.y);
ctx.beginPath();
ctx.rect(bbcShape51.point.x, bbcShape51.point.y, bbcShape51.size.width, bbcShape51.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape52.around.x, bbcShape52.around.y);
ctx.rotate(bbcShape52.rotation * Math.PI / 180);
ctx.translate(-bbcShape52.around.x, -bbcShape52.around.y);
ctx.beginPath();
ctx.rect(bbcShape52.point.x, bbcShape52.point.y, bbcShape52.size.width, bbcShape52.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape53.around.x, bbcShape53.around.y);
ctx.rotate(bbcShape53.rotation * Math.PI / 180);
ctx.translate(-bbcShape53.around.x, -bbcShape53.around.y);
ctx.beginPath();
ctx.rect(bbcShape53.point.x, bbcShape53.point.y, bbcShape53.size.width, bbcShape53.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape54.around.x, bbcShape54.around.y);
ctx.rotate(bbcShape54.rotation * Math.PI / 180);
ctx.translate(-bbcShape54.around.x, -bbcShape54.around.y);
ctx.beginPath();
ctx.rect(bbcShape54.point.x, bbcShape54.point.y, bbcShape54.size.width, bbcShape54.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape55.around.x, bbcShape55.around.y);
ctx.rotate(bbcShape55.rotation * Math.PI / 180);
ctx.translate(-bbcShape55.around.x, -bbcShape55.around.y);
ctx.beginPath();
ctx.rect(bbcShape55.point.x, bbcShape55.point.y, bbcShape55.size.width, bbcShape55.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape56.around.x, bbcShape56.around.y);
ctx.rotate(bbcShape56.rotation * Math.PI / 180);
ctx.translate(-bbcShape56.around.x, -bbcShape56.around.y);
ctx.beginPath();
ctx.rect(bbcShape56.point.x, bbcShape56.point.y, bbcShape56.size.width, bbcShape56.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape57.around.x, bbcShape57.around.y);
ctx.rotate(bbcShape57.rotation * Math.PI / 180);
ctx.translate(-bbcShape57.around.x, -bbcShape57.around.y);
ctx.beginPath();
ctx.rect(bbcShape57.point.x, bbcShape57.point.y, bbcShape57.size.width, bbcShape57.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape58.around.x, bbcShape58.around.y);
ctx.rotate(bbcShape58.rotation * Math.PI / 180);
ctx.translate(-bbcShape58.around.x, -bbcShape58.around.y);
ctx.beginPath();
ctx.rect(bbcShape58.point.x, bbcShape58.point.y, bbcShape58.size.width, bbcShape58.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape59.around.x, bbcShape59.around.y);
ctx.rotate(bbcShape59.rotation * Math.PI / 180);
ctx.translate(-bbcShape59.around.x, -bbcShape59.around.y);
ctx.beginPath();
ctx.rect(bbcShape59.point.x, bbcShape59.point.y, bbcShape59.size.width, bbcShape59.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape60.around.x, bbcShape60.around.y);
ctx.rotate(bbcShape60.rotation * Math.PI / 180);
ctx.translate(-bbcShape60.around.x, -bbcShape60.around.y);
ctx.beginPath();
ctx.rect(bbcShape60.point.x, bbcShape60.point.y, bbcShape60.size.width, bbcShape60.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape61.around.x, bbcShape61.around.y);
ctx.rotate(bbcShape61.rotation * Math.PI / 180);
ctx.translate(-bbcShape61.around.x, -bbcShape61.around.y);
ctx.beginPath();
ctx.rect(bbcShape61.point.x, bbcShape61.point.y, bbcShape61.size.width, bbcShape61.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape62.around.x, bbcShape62.around.y);
ctx.rotate(bbcShape62.rotation * Math.PI / 180);
ctx.translate(-bbcShape62.around.x, -bbcShape62.around.y);
ctx.beginPath();
ctx.rect(bbcShape62.point.x, bbcShape62.point.y, bbcShape62.size.width, bbcShape62.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape63.around.x, bbcShape63.around.y);
ctx.rotate(bbcShape63.rotation * Math.PI / 180);
ctx.translate(-bbcShape63.around.x, -bbcShape63.around.y);
ctx.beginPath();
ctx.rect(bbcShape63.point.x, bbcShape63.point.y, bbcShape63.size.width, bbcShape63.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape64.around.x, bbcShape64.around.y);
ctx.rotate(bbcShape64.rotation * Math.PI / 180);
ctx.translate(-bbcShape64.around.x, -bbcShape64.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape64.points[0][0], bbcShape64.points[0][1]);
ctx.lineTo(bbcShape64.points[1][0], bbcShape64.points[1][1]);
ctx.lineTo(bbcShape64.points[2][0], bbcShape64.points[2][1]);
ctx.lineTo(bbcShape64.points[3][0], bbcShape64.points[3][1]);
ctx.lineTo(bbcShape64.points[4][0], bbcShape64.points[4][1]);
ctx.lineTo(bbcShape64.points[5][0], bbcShape64.points[5][1]);
ctx.lineTo(bbcShape64.points[6][0], bbcShape64.points[6][1]);
ctx.lineTo(bbcShape64.points[7][0], bbcShape64.points[7][1]);
ctx.lineTo(bbcShape64.points[8][0], bbcShape64.points[8][1]);
ctx.lineTo(bbcShape64.points[9][0], bbcShape64.points[9][1]);
ctx.lineTo(bbcShape64.points[10][0], bbcShape64.points[10][1]);
ctx.lineTo(bbcShape64.points[11][0], bbcShape64.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape65.around.x, bbcShape65.around.y);
ctx.rotate(bbcShape65.rotation * Math.PI / 180);
ctx.translate(-bbcShape65.around.x, -bbcShape65.around.y);
ctx.beginPath();
ctx.rect(bbcShape65.point.x, bbcShape65.point.y, bbcShape65.size.width, bbcShape65.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape66.around.x, bbcShape66.around.y);
ctx.rotate(bbcShape66.rotation * Math.PI / 180);
ctx.translate(-bbcShape66.around.x, -bbcShape66.around.y);
ctx.beginPath();
ctx.rect(bbcShape66.point.x, bbcShape66.point.y, bbcShape66.size.width, bbcShape66.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape67.around.x, bbcShape67.around.y);
ctx.rotate(bbcShape67.rotation * Math.PI / 180);
ctx.translate(-bbcShape67.around.x, -bbcShape67.around.y);
ctx.beginPath();
ctx.rect(bbcShape67.point.x, bbcShape67.point.y, bbcShape67.size.width, bbcShape67.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape68.around.x, bbcShape68.around.y);
ctx.rotate(bbcShape68.rotation * Math.PI / 180);
ctx.translate(-bbcShape68.around.x, -bbcShape68.around.y);
ctx.beginPath();
ctx.rect(bbcShape68.point.x, bbcShape68.point.y, bbcShape68.size.width, bbcShape68.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape69.around.x, bbcShape69.around.y);
ctx.rotate(bbcShape69.rotation * Math.PI / 180);
ctx.translate(-bbcShape69.around.x, -bbcShape69.around.y);
ctx.beginPath();
ctx.rect(bbcShape69.point.x, bbcShape69.point.y, bbcShape69.size.width, bbcShape69.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape70.around.x, bbcShape70.around.y);
ctx.rotate(bbcShape70.rotation * Math.PI / 180);
ctx.translate(-bbcShape70.around.x, -bbcShape70.around.y);
ctx.beginPath();
ctx.rect(bbcShape70.point.x, bbcShape70.point.y, bbcShape70.size.width, bbcShape70.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape71.around.x, bbcShape71.around.y);
ctx.rotate(bbcShape71.rotation * Math.PI / 180);
ctx.translate(-bbcShape71.around.x, -bbcShape71.around.y);
ctx.beginPath();
ctx.rect(bbcShape71.point.x, bbcShape71.point.y, bbcShape71.size.width, bbcShape71.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape72.around.x, bbcShape72.around.y);
ctx.rotate(bbcShape72.rotation * Math.PI / 180);
ctx.translate(-bbcShape72.around.x, -bbcShape72.around.y);
ctx.beginPath();
ctx.rect(bbcShape72.point.x, bbcShape72.point.y, bbcShape72.size.width, bbcShape72.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape73.around.x, bbcShape73.around.y);
ctx.rotate(bbcShape73.rotation * Math.PI / 180);
ctx.translate(-bbcShape73.around.x, -bbcShape73.around.y);
ctx.beginPath();
ctx.rect(bbcShape73.point.x, bbcShape73.point.y, bbcShape73.size.width, bbcShape73.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape74.around.x, bbcShape74.around.y);
ctx.rotate(bbcShape74.rotation * Math.PI / 180);
ctx.translate(-bbcShape74.around.x, -bbcShape74.around.y);
ctx.beginPath();
ctx.rect(bbcShape74.point.x, bbcShape74.point.y, bbcShape74.size.width, bbcShape74.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape75.around.x, bbcShape75.around.y);
ctx.rotate(bbcShape75.rotation * Math.PI / 180);
ctx.translate(-bbcShape75.around.x, -bbcShape75.around.y);
ctx.beginPath();
ctx.rect(bbcShape75.point.x, bbcShape75.point.y, bbcShape75.size.width, bbcShape75.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape76.around.x, bbcShape76.around.y);
ctx.rotate(bbcShape76.rotation * Math.PI / 180);
ctx.translate(-bbcShape76.around.x, -bbcShape76.around.y);
ctx.beginPath();
ctx.rect(bbcShape76.point.x, bbcShape76.point.y, bbcShape76.size.width, bbcShape76.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape77.around.x, bbcShape77.around.y);
ctx.rotate(bbcShape77.rotation * Math.PI / 180);
ctx.translate(-bbcShape77.around.x, -bbcShape77.around.y);
ctx.beginPath();
ctx.rect(bbcShape77.point.x, bbcShape77.point.y, bbcShape77.size.width, bbcShape77.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape78.around.x, bbcShape78.around.y);
ctx.rotate(bbcShape78.rotation * Math.PI / 180);
ctx.translate(-bbcShape78.around.x, -bbcShape78.around.y);
ctx.beginPath();
ctx.rect(bbcShape78.point.x, bbcShape78.point.y, bbcShape78.size.width, bbcShape78.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape79.around.x, bbcShape79.around.y);
ctx.rotate(bbcShape79.rotation * Math.PI / 180);
ctx.translate(-bbcShape79.around.x, -bbcShape79.around.y);
ctx.beginPath();
ctx.rect(bbcShape79.point.x, bbcShape79.point.y, bbcShape79.size.width, bbcShape79.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape80.around.x, bbcShape80.around.y);
ctx.rotate(bbcShape80.rotation * Math.PI / 180);
ctx.translate(-bbcShape80.around.x, -bbcShape80.around.y);
ctx.beginPath();
ctx.rect(bbcShape80.point.x, bbcShape80.point.y, bbcShape80.size.width, bbcShape80.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape81.around.x, bbcShape81.around.y);
ctx.rotate(bbcShape81.rotation * Math.PI / 180);
ctx.translate(-bbcShape81.around.x, -bbcShape81.around.y);
ctx.beginPath();
ctx.rect(bbcShape81.point.x, bbcShape81.point.y, bbcShape81.size.width, bbcShape81.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape82.around.x, bbcShape82.around.y);
ctx.rotate(bbcShape82.rotation * Math.PI / 180);
ctx.translate(-bbcShape82.around.x, -bbcShape82.around.y);
ctx.beginPath();
ctx.rect(bbcShape82.point.x, bbcShape82.point.y, bbcShape82.size.width, bbcShape82.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape83.around.x, bbcShape83.around.y);
ctx.rotate(bbcShape83.rotation * Math.PI / 180);
ctx.translate(-bbcShape83.around.x, -bbcShape83.around.y);
ctx.beginPath();
ctx.rect(bbcShape83.point.x, bbcShape83.point.y, bbcShape83.size.width, bbcShape83.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape84.around.x, bbcShape84.around.y);
ctx.rotate(bbcShape84.rotation * Math.PI / 180);
ctx.translate(-bbcShape84.around.x, -bbcShape84.around.y);
ctx.beginPath();
ctx.rect(bbcShape84.point.x, bbcShape84.point.y, bbcShape84.size.width, bbcShape84.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(100.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape85.around.x, bbcShape85.around.y);
ctx.rotate(bbcShape85.rotation * Math.PI / 180);
ctx.translate(-bbcShape85.around.x, -bbcShape85.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape85.points[0][0], bbcShape85.points[0][1]);
ctx.lineTo(bbcShape85.points[1][0], bbcShape85.points[1][1]);
ctx.lineTo(bbcShape85.points[2][0], bbcShape85.points[2][1]);
ctx.lineTo(bbcShape85.points[3][0], bbcShape85.points[3][1]);
ctx.lineTo(bbcShape85.points[4][0], bbcShape85.points[4][1]);
ctx.lineTo(bbcShape85.points[5][0], bbcShape85.points[5][1]);
ctx.lineTo(bbcShape85.points[6][0], bbcShape85.points[6][1]);
ctx.lineTo(bbcShape85.points[7][0], bbcShape85.points[7][1]);
ctx.lineTo(bbcShape85.points[8][0], bbcShape85.points[8][1]);
ctx.lineTo(bbcShape85.points[9][0], bbcShape85.points[9][1]);
ctx.lineTo(bbcShape85.points[10][0], bbcShape85.points[10][1]);
ctx.lineTo(bbcShape85.points[11][0], bbcShape85.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape86.around.x, bbcShape86.around.y);
ctx.rotate(bbcShape86.rotation * Math.PI / 180);
ctx.translate(-bbcShape86.around.x, -bbcShape86.around.y);
ctx.beginPath();
ctx.rect(bbcShape86.point.x, bbcShape86.point.y, bbcShape86.size.width, bbcShape86.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape87.around.x, bbcShape87.around.y);
ctx.rotate(bbcShape87.rotation * Math.PI / 180);
ctx.translate(-bbcShape87.around.x, -bbcShape87.around.y);
ctx.beginPath();
ctx.rect(bbcShape87.point.x, bbcShape87.point.y, bbcShape87.size.width, bbcShape87.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape88.around.x, bbcShape88.around.y);
ctx.rotate(bbcShape88.rotation * Math.PI / 180);
ctx.translate(-bbcShape88.around.x, -bbcShape88.around.y);
ctx.beginPath();
ctx.rect(bbcShape88.point.x, bbcShape88.point.y, bbcShape88.size.width, bbcShape88.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape89.around.x, bbcShape89.around.y);
ctx.rotate(bbcShape89.rotation * Math.PI / 180);
ctx.translate(-bbcShape89.around.x, -bbcShape89.around.y);
ctx.beginPath();
ctx.rect(bbcShape89.point.x, bbcShape89.point.y, bbcShape89.size.width, bbcShape89.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape90.around.x, bbcShape90.around.y);
ctx.rotate(bbcShape90.rotation * Math.PI / 180);
ctx.translate(-bbcShape90.around.x, -bbcShape90.around.y);
ctx.beginPath();
ctx.rect(bbcShape90.point.x, bbcShape90.point.y, bbcShape90.size.width, bbcShape90.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape91.around.x, bbcShape91.around.y);
ctx.rotate(bbcShape91.rotation * Math.PI / 180);
ctx.translate(-bbcShape91.around.x, -bbcShape91.around.y);
ctx.beginPath();
ctx.rect(bbcShape91.point.x, bbcShape91.point.y, bbcShape91.size.width, bbcShape91.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape92.around.x, bbcShape92.around.y);
ctx.rotate(bbcShape92.rotation * Math.PI / 180);
ctx.translate(-bbcShape92.around.x, -bbcShape92.around.y);
ctx.beginPath();
ctx.rect(bbcShape92.point.x, bbcShape92.point.y, bbcShape92.size.width, bbcShape92.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape93.around.x, bbcShape93.around.y);
ctx.rotate(bbcShape93.rotation * Math.PI / 180);
ctx.translate(-bbcShape93.around.x, -bbcShape93.around.y);
ctx.beginPath();
ctx.rect(bbcShape93.point.x, bbcShape93.point.y, bbcShape93.size.width, bbcShape93.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape94.around.x, bbcShape94.around.y);
ctx.rotate(bbcShape94.rotation * Math.PI / 180);
ctx.translate(-bbcShape94.around.x, -bbcShape94.around.y);
ctx.beginPath();
ctx.rect(bbcShape94.point.x, bbcShape94.point.y, bbcShape94.size.width, bbcShape94.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape95.around.x, bbcShape95.around.y);
ctx.rotate(bbcShape95.rotation * Math.PI / 180);
ctx.translate(-bbcShape95.around.x, -bbcShape95.around.y);
ctx.beginPath();
ctx.rect(bbcShape95.point.x, bbcShape95.point.y, bbcShape95.size.width, bbcShape95.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape96.around.x, bbcShape96.around.y);
ctx.rotate(bbcShape96.rotation * Math.PI / 180);
ctx.translate(-bbcShape96.around.x, -bbcShape96.around.y);
ctx.beginPath();
ctx.rect(bbcShape96.point.x, bbcShape96.point.y, bbcShape96.size.width, bbcShape96.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape97.around.x, bbcShape97.around.y);
ctx.rotate(bbcShape97.rotation * Math.PI / 180);
ctx.translate(-bbcShape97.around.x, -bbcShape97.around.y);
ctx.beginPath();
ctx.rect(bbcShape97.point.x, bbcShape97.point.y, bbcShape97.size.width, bbcShape97.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape98.around.x, bbcShape98.around.y);
ctx.rotate(bbcShape98.rotation * Math.PI / 180);
ctx.translate(-bbcShape98.around.x, -bbcShape98.around.y);
ctx.beginPath();
ctx.rect(bbcShape98.point.x, bbcShape98.point.y, bbcShape98.size.width, bbcShape98.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape99.around.x, bbcShape99.around.y);
ctx.rotate(bbcShape99.rotation * Math.PI / 180);
ctx.translate(-bbcShape99.around.x, -bbcShape99.around.y);
ctx.beginPath();
ctx.rect(bbcShape99.point.x, bbcShape99.point.y, bbcShape99.size.width, bbcShape99.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape100.around.x, bbcShape100.around.y);
ctx.rotate(bbcShape100.rotation * Math.PI / 180);
ctx.translate(-bbcShape100.around.x, -bbcShape100.around.y);
ctx.beginPath();
ctx.rect(bbcShape100.point.x, bbcShape100.point.y, bbcShape100.size.width, bbcShape100.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape101.around.x, bbcShape101.around.y);
ctx.rotate(bbcShape101.rotation * Math.PI / 180);
ctx.translate(-bbcShape101.around.x, -bbcShape101.around.y);
ctx.beginPath();
ctx.rect(bbcShape101.point.x, bbcShape101.point.y, bbcShape101.size.width, bbcShape101.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape102.around.x, bbcShape102.around.y);
ctx.rotate(bbcShape102.rotation * Math.PI / 180);
ctx.translate(-bbcShape102.around.x, -bbcShape102.around.y);
ctx.beginPath();
ctx.rect(bbcShape102.point.x, bbcShape102.point.y, bbcShape102.size.width, bbcShape102.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape103.around.x, bbcShape103.around.y);
ctx.rotate(bbcShape103.rotation * Math.PI / 180);
ctx.translate(-bbcShape103.around.x, -bbcShape103.around.y);
ctx.beginPath();
ctx.rect(bbcShape103.point.x, bbcShape103.point.y, bbcShape103.size.width, bbcShape103.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape104.around.x, bbcShape104.around.y);
ctx.rotate(bbcShape104.rotation * Math.PI / 180);
ctx.translate(-bbcShape104.around.x, -bbcShape104.around.y);
ctx.beginPath();
ctx.rect(bbcShape104.point.x, bbcShape104.point.y, bbcShape104.size.width, bbcShape104.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape105.around.x, bbcShape105.around.y);
ctx.rotate(bbcShape105.rotation * Math.PI / 180);
ctx.translate(-bbcShape105.around.x, -bbcShape105.around.y);
ctx.beginPath();
ctx.rect(bbcShape105.point.x, bbcShape105.point.y, bbcShape105.size.width, bbcShape105.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape106.around.x, bbcShape106.around.y);
ctx.rotate(bbcShape106.rotation * Math.PI / 180);
ctx.translate(-bbcShape106.around.x, -bbcShape106.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape106.points[0][0], bbcShape106.points[0][1]);
ctx.lineTo(bbcShape106.points[1][0], bbcShape106.points[1][1]);
ctx.lineTo(bbcShape106.points[2][0], bbcShape106.points[2][1]);
ctx.lineTo(bbcShape106.points[3][0], bbcShape106.points[3][1]);
ctx.lineTo(bbcShape106.points[4][0], bbcShape106.points[4][1]);
ctx.lineTo(bbcShape106.points[5][0], bbcShape106.points[5][1]);
ctx.lineTo(bbcShape106.points[6][0], bbcShape106.points[6][1]);
ctx.lineTo(bbcShape106.points[7][0], bbcShape106.points[7][1]);
ctx.lineTo(bbcShape106.points[8][0], bbcShape106.points[8][1]);
ctx.lineTo(bbcShape106.points[9][0], bbcShape106.points[9][1]);
ctx.lineTo(bbcShape106.points[10][0], bbcShape106.points[10][1]);
ctx.lineTo(bbcShape106.points[11][0], bbcShape106.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape107.around.x, bbcShape107.around.y);
ctx.rotate(bbcShape107.rotation * Math.PI / 180);
ctx.translate(-bbcShape107.around.x, -bbcShape107.around.y);
ctx.beginPath();
ctx.rect(bbcShape107.point.x, bbcShape107.point.y, bbcShape107.size.width, bbcShape107.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape108.around.x, bbcShape108.around.y);
ctx.rotate(bbcShape108.rotation * Math.PI / 180);
ctx.translate(-bbcShape108.around.x, -bbcShape108.around.y);
ctx.beginPath();
ctx.rect(bbcShape108.point.x, bbcShape108.point.y, bbcShape108.size.width, bbcShape108.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape109.around.x, bbcShape109.around.y);
ctx.rotate(bbcShape109.rotation * Math.PI / 180);
ctx.translate(-bbcShape109.around.x, -bbcShape109.around.y);
ctx.beginPath();
ctx.rect(bbcShape109.point.x, bbcShape109.point.y, bbcShape109.size.width, bbcShape109.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape110.around.x, bbcShape110.around.y);
ctx.rotate(bbcShape110.rotation * Math.PI / 180);
ctx.translate(-bbcShape110.around.x, -bbcShape110.around.y);
ctx.beginPath();
ctx.rect(bbcShape110.point.x, bbcShape110.point.y, bbcShape110.size.width, bbcShape110.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape111.around.x, bbcShape111.around.y);
ctx.rotate(bbcShape111.rotation * Math.PI / 180);
ctx.translate(-bbcShape111.around.x, -bbcShape111.around.y);
ctx.beginPath();
ctx.rect(bbcShape111.point.x, bbcShape111.point.y, bbcShape111.size.width, bbcShape111.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape112.around.x, bbcShape112.around.y);
ctx.rotate(bbcShape112.rotation * Math.PI / 180);
ctx.translate(-bbcShape112.around.x, -bbcShape112.around.y);
ctx.beginPath();
ctx.rect(bbcShape112.point.x, bbcShape112.point.y, bbcShape112.size.width, bbcShape112.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape113.around.x, bbcShape113.around.y);
ctx.rotate(bbcShape113.rotation * Math.PI / 180);
ctx.translate(-bbcShape113.around.x, -bbcShape113.around.y);
ctx.beginPath();
ctx.rect(bbcShape113.point.x, bbcShape113.point.y, bbcShape113.size.width, bbcShape113.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape114.around.x, bbcShape114.around.y);
ctx.rotate(bbcShape114.rotation * Math.PI / 180);
ctx.translate(-bbcShape114.around.x, -bbcShape114.around.y);
ctx.beginPath();
ctx.rect(bbcShape114.point.x, bbcShape114.point.y, bbcShape114.size.width, bbcShape114.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape115.around.x, bbcShape115.around.y);
ctx.rotate(bbcShape115.rotation * Math.PI / 180);
ctx.translate(-bbcShape115.around.x, -bbcShape115.around.y);
ctx.beginPath();
ctx.rect(bbcShape115.point.x, bbcShape115.point.y, bbcShape115.size.width, bbcShape115.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape116.around.x, bbcShape116.around.y);
ctx.rotate(bbcShape116.rotation * Math.PI / 180);
ctx.translate(-bbcShape116.around.x, -bbcShape116.around.y);
ctx.beginPath();
ctx.rect(bbcShape116.point.x, bbcShape116.point.y, bbcShape116.size.width, bbcShape116.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape117.around.x, bbcShape117.around.y);
ctx.rotate(bbcShape117.rotation * Math.PI / 180);
ctx.translate(-bbcShape117.around.x, -bbcShape117.around.y);
ctx.beginPath();
ctx.rect(bbcShape117.point.x, bbcShape117.point.y, bbcShape117.size.width, bbcShape117.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape118.around.x, bbcShape118.around.y);
ctx.rotate(bbcShape118.rotation * Math.PI / 180);
ctx.translate(-bbcShape118.around.x, -bbcShape118.around.y);
ctx.beginPath();
ctx.rect(bbcShape118.point.x, bbcShape118.point.y, bbcShape118.size.width, bbcShape118.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape119.around.x, bbcShape119.around.y);
ctx.rotate(bbcShape119.rotation * Math.PI / 180);
ctx.translate(-bbcShape119.around.x, -bbcShape119.around.y);
ctx.beginPath();
ctx.rect(bbcShape119.point.x, bbcShape119.point.y, bbcShape119.size.width, bbcShape119.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape120.around.x, bbcShape120.around.y);
ctx.rotate(bbcShape120.rotation * Math.PI / 180);
ctx.translate(-bbcShape120.around.x, -bbcShape120.around.y);
ctx.beginPath();
ctx.rect(bbcShape120.point.x, bbcShape120.point.y, bbcShape120.size.width, bbcShape120.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape121.around.x, bbcShape121.around.y);
ctx.rotate(bbcShape121.rotation * Math.PI / 180);
ctx.translate(-bbcShape121.around.x, -bbcShape121.around.y);
ctx.beginPath();
ctx.rect(bbcShape121.point.x, bbcShape121.point.y, bbcShape121.size.width, bbcShape121.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape122.around.x, bbcShape122.around.y);
ctx.rotate(bbcShape122.rotation * Math.PI / 180);
ctx.translate(-bbcShape122.around.x, -bbcShape122.around.y);
ctx.beginPath();
ctx.rect(bbcShape122.point.x, bbcShape122.point.y, bbcShape122.size.width, bbcShape122.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape123.around.x, bbcShape123.around.y);
ctx.rotate(bbcShape123.rotation * Math.PI / 180);
ctx.translate(-bbcShape123.around.x, -bbcShape123.around.y);
ctx.beginPath();
ctx.rect(bbcShape123.point.x, bbcShape123.point.y, bbcShape123.size.width, bbcShape123.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape124.around.x, bbcShape124.around.y);
ctx.rotate(bbcShape124.rotation * Math.PI / 180);
ctx.translate(-bbcShape124.around.x, -bbcShape124.around.y);
ctx.beginPath();
ctx.rect(bbcShape124.point.x, bbcShape124.point.y, bbcShape124.size.width, bbcShape124.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape125.around.x, bbcShape125.around.y);
ctx.rotate(bbcShape125.rotation * Math.PI / 180);
ctx.translate(-bbcShape125.around.x, -bbcShape125.around.y);
ctx.beginPath();
ctx.rect(bbcShape125.point.x, bbcShape125.point.y, bbcShape125.size.width, bbcShape125.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape126.around.x, bbcShape126.around.y);
ctx.rotate(bbcShape126.rotation * Math.PI / 180);
ctx.translate(-bbcShape126.around.x, -bbcShape126.around.y);
ctx.beginPath();
ctx.rect(bbcShape126.point.x, bbcShape126.point.y, bbcShape126.size.width, bbcShape126.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(150.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape127.around.x, bbcShape127.around.y);
ctx.rotate(bbcShape127.rotation * Math.PI / 180);
ctx.translate(-bbcShape127.around.x, -bbcShape127.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape127.points[0][0], bbcShape127.points[0][1]);
ctx.lineTo(bbcShape127.points[1][0], bbcShape127.points[1][1]);
ctx.lineTo(bbcShape127.points[2][0], bbcShape127.points[2][1]);
ctx.lineTo(bbcShape127.points[3][0], bbcShape127.points[3][1]);
ctx.lineTo(bbcShape127.points[4][0], bbcShape127.points[4][1]);
ctx.lineTo(bbcShape127.points[5][0], bbcShape127.points[5][1]);
ctx.lineTo(bbcShape127.points[6][0], bbcShape127.points[6][1]);
ctx.lineTo(bbcShape127.points[7][0], bbcShape127.points[7][1]);
ctx.lineTo(bbcShape127.points[8][0], bbcShape127.points[8][1]);
ctx.lineTo(bbcShape127.points[9][0], bbcShape127.points[9][1]);
ctx.lineTo(bbcShape127.points[10][0], bbcShape127.points[10][1]);
ctx.lineTo(bbcShape127.points[11][0], bbcShape127.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape128.around.x, bbcShape128.around.y);
ctx.rotate(bbcShape128.rotation * Math.PI / 180);
ctx.translate(-bbcShape128.around.x, -bbcShape128.around.y);
ctx.beginPath();
ctx.rect(bbcShape128.point.x, bbcShape128.point.y, bbcShape128.size.width, bbcShape128.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape129.around.x, bbcShape129.around.y);
ctx.rotate(bbcShape129.rotation * Math.PI / 180);
ctx.translate(-bbcShape129.around.x, -bbcShape129.around.y);
ctx.beginPath();
ctx.rect(bbcShape129.point.x, bbcShape129.point.y, bbcShape129.size.width, bbcShape129.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape130.around.x, bbcShape130.around.y);
ctx.rotate(bbcShape130.rotation * Math.PI / 180);
ctx.translate(-bbcShape130.around.x, -bbcShape130.around.y);
ctx.beginPath();
ctx.rect(bbcShape130.point.x, bbcShape130.point.y, bbcShape130.size.width, bbcShape130.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape131.around.x, bbcShape131.around.y);
ctx.rotate(bbcShape131.rotation * Math.PI / 180);
ctx.translate(-bbcShape131.around.x, -bbcShape131.around.y);
ctx.beginPath();
ctx.rect(bbcShape131.point.x, bbcShape131.point.y, bbcShape131.size.width, bbcShape131.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape132.around.x, bbcShape132.around.y);
ctx.rotate(bbcShape132.rotation * Math.PI / 180);
ctx.translate(-bbcShape132.around.x, -bbcShape132.around.y);
ctx.beginPath();
ctx.rect(bbcShape132.point.x, bbcShape132.point.y, bbcShape132.size.width, bbcShape132.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape133.around.x, bbcShape133.around.y);
ctx.rotate(bbcShape133.rotation * Math.PI / 180);
ctx.translate(-bbcShape133.around.x, -bbcShape133.around.y);
ctx.beginPath();
ctx.rect(bbcShape133.point.x, bbcShape133.point.y, bbcShape133.size.width, bbcShape133.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape134.around.x, bbcShape134.around.y);
ctx.rotate(bbcShape134.rotation * Math.PI / 180);
ctx.translate(-bbcShape134.around.x, -bbcShape134.around.y);
ctx.beginPath();
ctx.rect(bbcShape134.point.x, bbcShape134.point.y, bbcShape134.size.width, bbcShape134.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape135.around.x, bbcShape135.around.y);
ctx.rotate(bbcShape135.rotation * Math.PI / 180);
ctx.translate(-bbcShape135.around.x, -bbcShape135.around.y);
ctx.beginPath();
ctx.rect(bbcShape135.point.x, bbcShape135.point.y, bbcShape135.size.width, bbcShape135.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape136.around.x, bbcShape136.around.y);
ctx.rotate(bbcShape136.rotation * Math.PI / 180);
ctx.translate(-bbcShape136.around.x, -bbcShape136.around.y);
ctx.beginPath();
ctx.rect(bbcShape136.point.x, bbcShape136.point.y, bbcShape136.size.width, bbcShape136.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape137.around.x, bbcShape137.around.y);
ctx.rotate(bbcShape137.rotation * Math.PI / 180);
ctx.translate(-bbcShape137.around.x, -bbcShape137.around.y);
ctx.beginPath();
ctx.rect(bbcShape137.point.x, bbcShape137.point.y, bbcShape137.size.width, bbcShape137.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape138.around.x, bbcShape138.around.y);
ctx.rotate(bbcShape138.rotation * Math.PI / 180);
ctx.translate(-bbcShape138.around.x, -bbcShape138.around.y);
ctx.beginPath();
ctx.rect(bbcShape138.point.x, bbcShape138.point.y, bbcShape138.size.width, bbcShape138.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape139.around.x, bbcShape139.around.y);
ctx.rotate(bbcShape139.rotation * Math.PI / 180);
ctx.translate(-bbcShape139.around.x, -bbcShape139.around.y);
ctx.beginPath();
ctx.rect(bbcShape139.point.x, bbcShape139.point.y, bbcShape139.size.width, bbcShape139.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape140.around.x, bbcShape140.around.y);
ctx.rotate(bbcShape140.rotation * Math.PI / 180);
ctx.translate(-bbcShape140.around.x, -bbcShape140.around.y);
ctx.beginPath();
ctx.rect(bbcShape140.point.x, bbcShape140.point.y, bbcShape140.size.width, bbcShape140.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape141.around.x, bbcShape141.around.y);
ctx.rotate(bbcShape141.rotation * Math.PI / 180);
ctx.translate(-bbcShape141.around.x, -bbcShape141.around.y);
ctx.beginPath();
ctx.rect(bbcShape141.point.x, bbcShape141.point.y, bbcShape141.size.width, bbcShape141.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape142.around.x, bbcShape142.around.y);
ctx.rotate(bbcShape142.rotation * Math.PI / 180);
ctx.translate(-bbcShape142.around.x, -bbcShape142.around.y);
ctx.beginPath();
ctx.rect(bbcShape142.point.x, bbcShape142.point.y, bbcShape142.size.width, bbcShape142.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape143.around.x, bbcShape143.around.y);
ctx.rotate(bbcShape143.rotation * Math.PI / 180);
ctx.translate(-bbcShape143.around.x, -bbcShape143.around.y);
ctx.beginPath();
ctx.rect(bbcShape143.point.x, bbcShape143.point.y, bbcShape143.size.width, bbcShape143.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape144.around.x, bbcShape144.around.y);
ctx.rotate(bbcShape144.rotation * Math.PI / 180);
ctx.translate(-bbcShape144.around.x, -bbcShape144.around.y);
ctx.beginPath();
ctx.rect(bbcShape144.point.x, bbcShape144.point.y, bbcShape144.size.width, bbcShape144.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape145.around.x, bbcShape145.around.y);
ctx.rotate(bbcShape145.rotation * Math.PI / 180);
ctx.translate(-bbcShape145.around.x, -bbcShape145.around.y);
ctx.beginPath();
ctx.rect(bbcShape145.point.x, bbcShape145.point.y, bbcShape145.size.width, bbcShape145.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape146.around.x, bbcShape146.around.y);
ctx.rotate(bbcShape146.rotation * Math.PI / 180);
ctx.translate(-bbcShape146.around.x, -bbcShape146.around.y);
ctx.beginPath();
ctx.rect(bbcShape146.point.x, bbcShape146.point.y, bbcShape146.size.width, bbcShape146.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape147.around.x, bbcShape147.around.y);
ctx.rotate(bbcShape147.rotation * Math.PI / 180);
ctx.translate(-bbcShape147.around.x, -bbcShape147.around.y);
ctx.beginPath();
ctx.rect(bbcShape147.point.x, bbcShape147.point.y, bbcShape147.size.width, bbcShape147.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(175.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape148.around.x, bbcShape148.around.y);
ctx.rotate(bbcShape148.rotation * Math.PI / 180);
ctx.translate(-bbcShape148.around.x, -bbcShape148.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape148.points[0][0], bbcShape148.points[0][1]);
ctx.lineTo(bbcShape148.points[1][0], bbcShape148.points[1][1]);
ctx.lineTo(bbcShape148.points[2][0], bbcShape148.points[2][1]);
ctx.lineTo(bbcShape148.points[3][0], bbcShape148.points[3][1]);
ctx.lineTo(bbcShape148.points[4][0], bbcShape148.points[4][1]);
ctx.lineTo(bbcShape148.points[5][0], bbcShape148.points[5][1]);
ctx.lineTo(bbcShape148.points[6][0], bbcShape148.points[6][1]);
ctx.lineTo(bbcShape148.points[7][0], bbcShape148.points[7][1]);
ctx.lineTo(bbcShape148.points[8][0], bbcShape148.points[8][1]);
ctx.lineTo(bbcShape148.points[9][0], bbcShape148.points[9][1]);
ctx.lineTo(bbcShape148.points[10][0], bbcShape148.points[10][1]);
ctx.lineTo(bbcShape148.points[11][0], bbcShape148.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape149.around.x, bbcShape149.around.y);
ctx.rotate(bbcShape149.rotation * Math.PI / 180);
ctx.translate(-bbcShape149.around.x, -bbcShape149.around.y);
ctx.beginPath();
ctx.rect(bbcShape149.point.x, bbcShape149.point.y, bbcShape149.size.width, bbcShape149.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape150.around.x, bbcShape150.around.y);
ctx.rotate(bbcShape150.rotation * Math.PI / 180);
ctx.translate(-bbcShape150.around.x, -bbcShape150.around.y);
ctx.beginPath();
ctx.rect(bbcShape150.point.x, bbcShape150.point.y, bbcShape150.size.width, bbcShape150.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape151.around.x, bbcShape151.around.y);
ctx.rotate(bbcShape151.rotation * Math.PI / 180);
ctx.translate(-bbcShape151.around.x, -bbcShape151.around.y);
ctx.beginPath();
ctx.rect(bbcShape151.point.x, bbcShape151.point.y, bbcShape151.size.width, bbcShape151.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape152.around.x, bbcShape152.around.y);
ctx.rotate(bbcShape152.rotation * Math.PI / 180);
ctx.translate(-bbcShape152.around.x, -bbcShape152.around.y);
ctx.beginPath();
ctx.rect(bbcShape152.point.x, bbcShape152.point.y, bbcShape152.size.width, bbcShape152.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape153.around.x, bbcShape153.around.y);
ctx.rotate(bbcShape153.rotation * Math.PI / 180);
ctx.translate(-bbcShape153.around.x, -bbcShape153.around.y);
ctx.beginPath();
ctx.rect(bbcShape153.point.x, bbcShape153.point.y, bbcShape153.size.width, bbcShape153.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape154.around.x, bbcShape154.around.y);
ctx.rotate(bbcShape154.rotation * Math.PI / 180);
ctx.translate(-bbcShape154.around.x, -bbcShape154.around.y);
ctx.beginPath();
ctx.rect(bbcShape154.point.x, bbcShape154.point.y, bbcShape154.size.width, bbcShape154.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape155.around.x, bbcShape155.around.y);
ctx.rotate(bbcShape155.rotation * Math.PI / 180);
ctx.translate(-bbcShape155.around.x, -bbcShape155.around.y);
ctx.beginPath();
ctx.rect(bbcShape155.point.x, bbcShape155.point.y, bbcShape155.size.width, bbcShape155.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape156.around.x, bbcShape156.around.y);
ctx.rotate(bbcShape156.rotation * Math.PI / 180);
ctx.translate(-bbcShape156.around.x, -bbcShape156.around.y);
ctx.beginPath();
ctx.rect(bbcShape156.point.x, bbcShape156.point.y, bbcShape156.size.width, bbcShape156.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape157.around.x, bbcShape157.around.y);
ctx.rotate(bbcShape157.rotation * Math.PI / 180);
ctx.translate(-bbcShape157.around.x, -bbcShape157.around.y);
ctx.beginPath();
ctx.rect(bbcShape157.point.x, bbcShape157.point.y, bbcShape157.size.width, bbcShape157.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape158.around.x, bbcShape158.around.y);
ctx.rotate(bbcShape158.rotation * Math.PI / 180);
ctx.translate(-bbcShape158.around.x, -bbcShape158.around.y);
ctx.beginPath();
ctx.rect(bbcShape158.point.x, bbcShape158.point.y, bbcShape158.size.width, bbcShape158.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape159.around.x, bbcShape159.around.y);
ctx.rotate(bbcShape159.rotation * Math.PI / 180);
ctx.translate(-bbcShape159.around.x, -bbcShape159.around.y);
ctx.beginPath();
ctx.rect(bbcShape159.point.x, bbcShape159.point.y, bbcShape159.size.width, bbcShape159.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape160.around.x, bbcShape160.around.y);
ctx.rotate(bbcShape160.rotation * Math.PI / 180);
ctx.translate(-bbcShape160.around.x, -bbcShape160.around.y);
ctx.beginPath();
ctx.rect(bbcShape160.point.x, bbcShape160.point.y, bbcShape160.size.width, bbcShape160.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape161.around.x, bbcShape161.around.y);
ctx.rotate(bbcShape161.rotation * Math.PI / 180);
ctx.translate(-bbcShape161.around.x, -bbcShape161.around.y);
ctx.beginPath();
ctx.rect(bbcShape161.point.x, bbcShape161.point.y, bbcShape161.size.width, bbcShape161.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape162.around.x, bbcShape162.around.y);
ctx.rotate(bbcShape162.rotation * Math.PI / 180);
ctx.translate(-bbcShape162.around.x, -bbcShape162.around.y);
ctx.beginPath();
ctx.rect(bbcShape162.point.x, bbcShape162.point.y, bbcShape162.size.width, bbcShape162.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape163.around.x, bbcShape163.around.y);
ctx.rotate(bbcShape163.rotation * Math.PI / 180);
ctx.translate(-bbcShape163.around.x, -bbcShape163.around.y);
ctx.beginPath();
ctx.rect(bbcShape163.point.x, bbcShape163.point.y, bbcShape163.size.width, bbcShape163.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape164.around.x, bbcShape164.around.y);
ctx.rotate(bbcShape164.rotation * Math.PI / 180);
ctx.translate(-bbcShape164.around.x, -bbcShape164.around.y);
ctx.beginPath();
ctx.rect(bbcShape164.point.x, bbcShape164.point.y, bbcShape164.size.width, bbcShape164.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape165.around.x, bbcShape165.around.y);
ctx.rotate(bbcShape165.rotation * Math.PI / 180);
ctx.translate(-bbcShape165.around.x, -bbcShape165.around.y);
ctx.beginPath();
ctx.rect(bbcShape165.point.x, bbcShape165.point.y, bbcShape165.size.width, bbcShape165.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape166.around.x, bbcShape166.around.y);
ctx.rotate(bbcShape166.rotation * Math.PI / 180);
ctx.translate(-bbcShape166.around.x, -bbcShape166.around.y);
ctx.beginPath();
ctx.rect(bbcShape166.point.x, bbcShape166.point.y, bbcShape166.size.width, bbcShape166.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape167.around.x, bbcShape167.around.y);
ctx.rotate(bbcShape167.rotation * Math.PI / 180);
ctx.translate(-bbcShape167.around.x, -bbcShape167.around.y);
ctx.beginPath();
ctx.rect(bbcShape167.point.x, bbcShape167.point.y, bbcShape167.size.width, bbcShape167.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape168.around.x, bbcShape168.around.y);
ctx.rotate(bbcShape168.rotation * Math.PI / 180);
ctx.translate(-bbcShape168.around.x, -bbcShape168.around.y);
ctx.beginPath();
ctx.rect(bbcShape168.point.x, bbcShape168.point.y, bbcShape168.size.width, bbcShape168.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(200.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape169.around.x, bbcShape169.around.y);
ctx.rotate(bbcShape169.rotation * Math.PI / 180);
ctx.translate(-bbcShape169.around.x, -bbcShape169.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape169.points[0][0], bbcShape169.points[0][1]);
ctx.lineTo(bbcShape169.points[1][0], bbcShape169.points[1][1]);
ctx.lineTo(bbcShape169.points[2][0], bbcShape169.points[2][1]);
ctx.lineTo(bbcShape169.points[3][0], bbcShape169.points[3][1]);
ctx.lineTo(bbcShape169.points[4][0], bbcShape169.points[4][1]);
ctx.lineTo(bbcShape169.points[5][0], bbcShape169.points[5][1]);
ctx.lineTo(bbcShape169.points[6][0], bbcShape169.points[6][1]);
ctx.lineTo(bbcShape169.points[7][0], bbcShape169.points[7][1]);
ctx.lineTo(bbcShape169.points[8][0], bbcShape169.points[8][1]);
ctx.lineTo(bbcShape169.points[9][0], bbcShape169.points[9][1]);
ctx.lineTo(bbcShape169.points[10][0], bbcShape169.points[10][1]);
ctx.lineTo(bbcShape169.points[11][0], bbcShape169.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape170.around.x, bbcShape170.around.y);
ctx.rotate(bbcShape170.rotation * Math.PI / 180);
ctx.translate(-bbcShape170.around.x, -bbcShape170.around.y);
ctx.beginPath();
ctx.rect(bbcShape170.point.x, bbcShape170.point.y, bbcShape170.size.width, bbcShape170.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape171.around.x, bbcShape171.around.y);
ctx.rotate(bbcShape171.rotation * Math.PI / 180);
ctx.translate(-bbcShape171.around.x, -bbcShape171.around.y);
ctx.beginPath();
ctx.rect(bbcShape171.point.x, bbcShape171.point.y, bbcShape171.size.width, bbcShape171.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape172.around.x, bbcShape172.around.y);
ctx.rotate(bbcShape172.rotation * Math.PI / 180);
ctx.translate(-bbcShape172.around.x, -bbcShape172.around.y);
ctx.beginPath();
ctx.rect(bbcShape172.point.x, bbcShape172.point.y, bbcShape172.size.width, bbcShape172.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape173.around.x, bbcShape173.around.y);
ctx.rotate(bbcShape173.rotation * Math.PI / 180);
ctx.translate(-bbcShape173.around.x, -bbcShape173.around.y);
ctx.beginPath();
ctx.rect(bbcShape173.point.x, bbcShape173.point.y, bbcShape173.size.width, bbcShape173.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape174.around.x, bbcShape174.around.y);
ctx.rotate(bbcShape174.rotation * Math.PI / 180);
ctx.translate(-bbcShape174.around.x, -bbcShape174.around.y);
ctx.beginPath();
ctx.rect(bbcShape174.point.x, bbcShape174.point.y, bbcShape174.size.width, bbcShape174.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape175.around.x, bbcShape175.around.y);
ctx.rotate(bbcShape175.rotation * Math.PI / 180);
ctx.translate(-bbcShape175.around.x, -bbcShape175.around.y);
ctx.beginPath();
ctx.rect(bbcShape175.point.x, bbcShape175.point.y, bbcShape175.size.width, bbcShape175.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape176.around.x, bbcShape176.around.y);
ctx.rotate(bbcShape176.rotation * Math.PI / 180);
ctx.translate(-bbcShape176.around.x, -bbcShape176.around.y);
ctx.beginPath();
ctx.rect(bbcShape176.point.x, bbcShape176.point.y, bbcShape176.size.width, bbcShape176.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape177.around.x, bbcShape177.around.y);
ctx.rotate(bbcShape177.rotation * Math.PI / 180);
ctx.translate(-bbcShape177.around.x, -bbcShape177.around.y);
ctx.beginPath();
ctx.rect(bbcShape177.point.x, bbcShape177.point.y, bbcShape177.size.width, bbcShape177.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape178.around.x, bbcShape178.around.y);
ctx.rotate(bbcShape178.rotation * Math.PI / 180);
ctx.translate(-bbcShape178.around.x, -bbcShape178.around.y);
ctx.beginPath();
ctx.rect(bbcShape178.point.x, bbcShape178.point.y, bbcShape178.size.width, bbcShape178.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape179.around.x, bbcShape179.around.y);
ctx.rotate(bbcShape179.rotation * Math.PI / 180);
ctx.translate(-bbcShape179.around.x, -bbcShape179.around.y);
ctx.beginPath();
ctx.rect(bbcShape179.point.x, bbcShape179.point.y, bbcShape179.size.width, bbcShape179.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape180.around.x, bbcShape180.around.y);
ctx.rotate(bbcShape180.rotation * Math.PI / 180);
ctx.translate(-bbcShape180.around.x, -bbcShape180.around.y);
ctx.beginPath();
ctx.rect(bbcShape180.point.x, bbcShape180.point.y, bbcShape180.size.width, bbcShape180.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape181.around.x, bbcShape181.around.y);
ctx.rotate(bbcShape181.rotation * Math.PI / 180);
ctx.translate(-bbcShape181.around.x, -bbcShape181.around.y);
ctx.beginPath();
ctx.rect(bbcShape181.point.x, bbcShape181.point.y, bbcShape181.size.width, bbcShape181.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape182.around.x, bbcShape182.around.y);
ctx.rotate(bbcShape182.rotation * Math.PI / 180);
ctx.translate(-bbcShape182.around.x, -bbcShape182.around.y);
ctx.beginPath();
ctx.rect(bbcShape182.point.x, bbcShape182.point.y, bbcShape182.size.width, bbcShape182.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape183.around.x, bbcShape183.around.y);
ctx.rotate(bbcShape183.rotation * Math.PI / 180);
ctx.translate(-bbcShape183.around.x, -bbcShape183.around.y);
ctx.beginPath();
ctx.rect(bbcShape183.point.x, bbcShape183.point.y, bbcShape183.size.width, bbcShape183.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape184.around.x, bbcShape184.around.y);
ctx.rotate(bbcShape184.rotation * Math.PI / 180);
ctx.translate(-bbcShape184.around.x, -bbcShape184.around.y);
ctx.beginPath();
ctx.rect(bbcShape184.point.x, bbcShape184.point.y, bbcShape184.size.width, bbcShape184.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape185.around.x, bbcShape185.around.y);
ctx.rotate(bbcShape185.rotation * Math.PI / 180);
ctx.translate(-bbcShape185.around.x, -bbcShape185.around.y);
ctx.beginPath();
ctx.rect(bbcShape185.point.x, bbcShape185.point.y, bbcShape185.size.width, bbcShape185.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape186.around.x, bbcShape186.around.y);
ctx.rotate(bbcShape186.rotation * Math.PI / 180);
ctx.translate(-bbcShape186.around.x, -bbcShape186.around.y);
ctx.beginPath();
ctx.rect(bbcShape186.point.x, bbcShape186.point.y, bbcShape186.size.width, bbcShape186.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape187.around.x, bbcShape187.around.y);
ctx.rotate(bbcShape187.rotation * Math.PI / 180);
ctx.translate(-bbcShape187.around.x, -bbcShape187.around.y);
ctx.beginPath();
ctx.rect(bbcShape187.point.x, bbcShape187.point.y, bbcShape187.size.width, bbcShape187.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape188.around.x, bbcShape188.around.y);
ctx.rotate(bbcShape188.rotation * Math.PI / 180);
ctx.translate(-bbcShape188.around.x, -bbcShape188.around.y);
ctx.beginPath();
ctx.rect(bbcShape188.point.x, bbcShape188.point.y, bbcShape188.size.width, bbcShape188.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape189.around.x, bbcShape189.around.y);
ctx.rotate(bbcShape189.rotation * Math.PI / 180);
ctx.translate(-bbcShape189.around.x, -bbcShape189.around.y);
ctx.beginPath();
ctx.rect(bbcShape189.point.x, bbcShape189.point.y, bbcShape189.size.width, bbcShape189.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape190.around.x, bbcShape190.around.y);
ctx.rotate(bbcShape190.rotation * Math.PI / 180);
ctx.translate(-bbcShape190.around.x, -bbcShape190.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape190.points[0][0], bbcShape190.points[0][1]);
ctx.lineTo(bbcShape190.points[1][0], bbcShape190.points[1][1]);
ctx.lineTo(bbcShape190.points[2][0], bbcShape190.points[2][1]);
ctx.lineTo(bbcShape190.points[3][0], bbcShape190.points[3][1]);
ctx.lineTo(bbcShape190.points[4][0], bbcShape190.points[4][1]);
ctx.lineTo(bbcShape190.points[5][0], bbcShape190.points[5][1]);
ctx.lineTo(bbcShape190.points[6][0], bbcShape190.points[6][1]);
ctx.lineTo(bbcShape190.points[7][0], bbcShape190.points[7][1]);
ctx.lineTo(bbcShape190.points[8][0], bbcShape190.points[8][1]);
ctx.lineTo(bbcShape190.points[9][0], bbcShape190.points[9][1]);
ctx.lineTo(bbcShape190.points[10][0], bbcShape190.points[10][1]);
ctx.lineTo(bbcShape190.points[11][0], bbcShape190.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape191.around.x, bbcShape191.around.y);
ctx.rotate(bbcShape191.rotation * Math.PI / 180);
ctx.translate(-bbcShape191.around.x, -bbcShape191.around.y);
ctx.beginPath();
ctx.rect(bbcShape191.point.x, bbcShape191.point.y, bbcShape191.size.width, bbcShape191.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape192.around.x, bbcShape192.around.y);
ctx.rotate(bbcShape192.rotation * Math.PI / 180);
ctx.translate(-bbcShape192.around.x, -bbcShape192.around.y);
ctx.beginPath();
ctx.rect(bbcShape192.point.x, bbcShape192.point.y, bbcShape192.size.width, bbcShape192.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape193.around.x, bbcShape193.around.y);
ctx.rotate(bbcShape193.rotation * Math.PI / 180);
ctx.translate(-bbcShape193.around.x, -bbcShape193.around.y);
ctx.beginPath();
ctx.rect(bbcShape193.point.x, bbcShape193.point.y, bbcShape193.size.width, bbcShape193.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape194.around.x, bbcShape194.around.y);
ctx.rotate(bbcShape194.rotation * Math.PI / 180);
ctx.translate(-bbcShape194.around.x, -bbcShape194.around.y);
ctx.beginPath();
ctx.rect(bbcShape194.point.x, bbcShape194.point.y, bbcShape194.size.width, bbcShape194.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape195.around.x, bbcShape195.around.y);
ctx.rotate(bbcShape195.rotation * Math.PI / 180);
ctx.translate(-bbcShape195.around.x, -bbcShape195.around.y);
ctx.beginPath();
ctx.rect(bbcShape195.point.x, bbcShape195.point.y, bbcShape195.size.width, bbcShape195.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape196.around.x, bbcShape196.around.y);
ctx.rotate(bbcShape196.rotation * Math.PI / 180);
ctx.translate(-bbcShape196.around.x, -bbcShape196.around.y);
ctx.beginPath();
ctx.rect(bbcShape196.point.x, bbcShape196.point.y, bbcShape196.size.width, bbcShape196.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape197.around.x, bbcShape197.around.y);
ctx.rotate(bbcShape197.rotation * Math.PI / 180);
ctx.translate(-bbcShape197.around.x, -bbcShape197.around.y);
ctx.beginPath();
ctx.rect(bbcShape197.point.x, bbcShape197.point.y, bbcShape197.size.width, bbcShape197.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape198.around.x, bbcShape198.around.y);
ctx.rotate(bbcShape198.rotation * Math.PI / 180);
ctx.translate(-bbcShape198.around.x, -bbcShape198.around.y);
ctx.beginPath();
ctx.rect(bbcShape198.point.x, bbcShape198.point.y, bbcShape198.size.width, bbcShape198.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape199.around.x, bbcShape199.around.y);
ctx.rotate(bbcShape199.rotation * Math.PI / 180);
ctx.translate(-bbcShape199.around.x, -bbcShape199.around.y);
ctx.beginPath();
ctx.rect(bbcShape199.point.x, bbcShape199.point.y, bbcShape199.size.width, bbcShape199.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape200.around.x, bbcShape200.around.y);
ctx.rotate(bbcShape200.rotation * Math.PI / 180);
ctx.translate(-bbcShape200.around.x, -bbcShape200.around.y);
ctx.beginPath();
ctx.rect(bbcShape200.point.x, bbcShape200.point.y, bbcShape200.size.width, bbcShape200.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape201.around.x, bbcShape201.around.y);
ctx.rotate(bbcShape201.rotation * Math.PI / 180);
ctx.translate(-bbcShape201.around.x, -bbcShape201.around.y);
ctx.beginPath();
ctx.rect(bbcShape201.point.x, bbcShape201.point.y, bbcShape201.size.width, bbcShape201.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape202.around.x, bbcShape202.around.y);
ctx.rotate(bbcShape202.rotation * Math.PI / 180);
ctx.translate(-bbcShape202.around.x, -bbcShape202.around.y);
ctx.beginPath();
ctx.rect(bbcShape202.point.x, bbcShape202.point.y, bbcShape202.size.width, bbcShape202.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape203.around.x, bbcShape203.around.y);
ctx.rotate(bbcShape203.rotation * Math.PI / 180);
ctx.translate(-bbcShape203.around.x, -bbcShape203.around.y);
ctx.beginPath();
ctx.rect(bbcShape203.point.x, bbcShape203.point.y, bbcShape203.size.width, bbcShape203.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape204.around.x, bbcShape204.around.y);
ctx.rotate(bbcShape204.rotation * Math.PI / 180);
ctx.translate(-bbcShape204.around.x, -bbcShape204.around.y);
ctx.beginPath();
ctx.rect(bbcShape204.point.x, bbcShape204.point.y, bbcShape204.size.width, bbcShape204.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape205.around.x, bbcShape205.around.y);
ctx.rotate(bbcShape205.rotation * Math.PI / 180);
ctx.translate(-bbcShape205.around.x, -bbcShape205.around.y);
ctx.beginPath();
ctx.rect(bbcShape205.point.x, bbcShape205.point.y, bbcShape205.size.width, bbcShape205.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape206.around.x, bbcShape206.around.y);
ctx.rotate(bbcShape206.rotation * Math.PI / 180);
ctx.translate(-bbcShape206.around.x, -bbcShape206.around.y);
ctx.beginPath();
ctx.rect(bbcShape206.point.x, bbcShape206.point.y, bbcShape206.size.width, bbcShape206.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape207.around.x, bbcShape207.around.y);
ctx.rotate(bbcShape207.rotation * Math.PI / 180);
ctx.translate(-bbcShape207.around.x, -bbcShape207.around.y);
ctx.beginPath();
ctx.rect(bbcShape207.point.x, bbcShape207.point.y, bbcShape207.size.width, bbcShape207.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape208.around.x, bbcShape208.around.y);
ctx.rotate(bbcShape208.rotation * Math.PI / 180);
ctx.translate(-bbcShape208.around.x, -bbcShape208.around.y);
ctx.beginPath();
ctx.rect(bbcShape208.point.x, bbcShape208.point.y, bbcShape208.size.width, bbcShape208.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape209.around.x, bbcShape209.around.y);
ctx.rotate(bbcShape209.rotation * Math.PI / 180);
ctx.translate(-bbcShape209.around.x, -bbcShape209.around.y);
ctx.beginPath();
ctx.rect(bbcShape209.point.x, bbcShape209.point.y, bbcShape209.size.width, bbcShape209.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape210.around.x, bbcShape210.around.y);
ctx.rotate(bbcShape210.rotation * Math.PI / 180);
ctx.translate(-bbcShape210.around.x, -bbcShape210.around.y);
ctx.beginPath();
ctx.rect(bbcShape210.point.x, bbcShape210.point.y, bbcShape210.size.width, bbcShape210.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape211.around.x, bbcShape211.around.y);
ctx.rotate(bbcShape211.rotation * Math.PI / 180);
ctx.translate(-bbcShape211.around.x, -bbcShape211.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape211.points[0][0], bbcShape211.points[0][1]);
ctx.lineTo(bbcShape211.points[1][0], bbcShape211.points[1][1]);
ctx.lineTo(bbcShape211.points[2][0], bbcShape211.points[2][1]);
ctx.lineTo(bbcShape211.points[3][0], bbcShape211.points[3][1]);
ctx.lineTo(bbcShape211.points[4][0], bbcShape211.points[4][1]);
ctx.lineTo(bbcShape211.points[5][0], bbcShape211.points[5][1]);
ctx.lineTo(bbcShape211.points[6][0], bbcShape211.points[6][1]);
ctx.lineTo(bbcShape211.points[7][0], bbcShape211.points[7][1]);
ctx.lineTo(bbcShape211.points[8][0], bbcShape211.points[8][1]);
ctx.lineTo(bbcShape211.points[9][0], bbcShape211.points[9][1]);
ctx.lineTo(bbcShape211.points[10][0], bbcShape211.points[10][1]);
ctx.lineTo(bbcShape211.points[11][0], bbcShape211.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape212.around.x, bbcShape212.around.y);
ctx.rotate(bbcShape212.rotation * Math.PI / 180);
ctx.translate(-bbcShape212.around.x, -bbcShape212.around.y);
ctx.beginPath();
ctx.rect(bbcShape212.point.x, bbcShape212.point.y, bbcShape212.size.width, bbcShape212.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape213.around.x, bbcShape213.around.y);
ctx.rotate(bbcShape213.rotation * Math.PI / 180);
ctx.translate(-bbcShape213.around.x, -bbcShape213.around.y);
ctx.beginPath();
ctx.rect(bbcShape213.point.x, bbcShape213.point.y, bbcShape213.size.width, bbcShape213.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape214.around.x, bbcShape214.around.y);
ctx.rotate(bbcShape214.rotation * Math.PI / 180);
ctx.translate(-bbcShape214.around.x, -bbcShape214.around.y);
ctx.beginPath();
ctx.rect(bbcShape214.point.x, bbcShape214.point.y, bbcShape214.size.width, bbcShape214.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape215.around.x, bbcShape215.around.y);
ctx.rotate(bbcShape215.rotation * Math.PI / 180);
ctx.translate(-bbcShape215.around.x, -bbcShape215.around.y);
ctx.beginPath();
ctx.rect(bbcShape215.point.x, bbcShape215.point.y, bbcShape215.size.width, bbcShape215.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape216.around.x, bbcShape216.around.y);
ctx.rotate(bbcShape216.rotation * Math.PI / 180);
ctx.translate(-bbcShape216.around.x, -bbcShape216.around.y);
ctx.beginPath();
ctx.rect(bbcShape216.point.x, bbcShape216.point.y, bbcShape216.size.width, bbcShape216.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape217.around.x, bbcShape217.around.y);
ctx.rotate(bbcShape217.rotation * Math.PI / 180);
ctx.translate(-bbcShape217.around.x, -bbcShape217.around.y);
ctx.beginPath();
ctx.rect(bbcShape217.point.x, bbcShape217.point.y, bbcShape217.size.width, bbcShape217.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape218.around.x, bbcShape218.around.y);
ctx.rotate(bbcShape218.rotation * Math.PI / 180);
ctx.translate(-bbcShape218.around.x, -bbcShape218.around.y);
ctx.beginPath();
ctx.rect(bbcShape218.point.x, bbcShape218.point.y, bbcShape218.size.width, bbcShape218.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape219.around.x, bbcShape219.around.y);
ctx.rotate(bbcShape219.rotation * Math.PI / 180);
ctx.translate(-bbcShape219.around.x, -bbcShape219.around.y);
ctx.beginPath();
ctx.rect(bbcShape219.point.x, bbcShape219.point.y, bbcShape219.size.width, bbcShape219.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape220.around.x, bbcShape220.around.y);
ctx.rotate(bbcShape220.rotation * Math.PI / 180);
ctx.translate(-bbcShape220.around.x, -bbcShape220.around.y);
ctx.beginPath();
ctx.rect(bbcShape220.point.x, bbcShape220.point.y, bbcShape220.size.width, bbcShape220.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape221.around.x, bbcShape221.around.y);
ctx.rotate(bbcShape221.rotation * Math.PI / 180);
ctx.translate(-bbcShape221.around.x, -bbcShape221.around.y);
ctx.beginPath();
ctx.rect(bbcShape221.point.x, bbcShape221.point.y, bbcShape221.size.width, bbcShape221.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape222.around.x, bbcShape222.around.y);
ctx.rotate(bbcShape222.rotation * Math.PI / 180);
ctx.translate(-bbcShape222.around.x, -bbcShape222.around.y);
ctx.beginPath();
ctx.rect(bbcShape222.point.x, bbcShape222.point.y, bbcShape222.size.width, bbcShape222.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape223.around.x, bbcShape223.around.y);
ctx.rotate(bbcShape223.rotation * Math.PI / 180);
ctx.translate(-bbcShape223.around.x, -bbcShape223.around.y);
ctx.beginPath();
ctx.rect(bbcShape223.point.x, bbcShape223.point.y, bbcShape223.size.width, bbcShape223.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape224.around.x, bbcShape224.around.y);
ctx.rotate(bbcShape224.rotation * Math.PI / 180);
ctx.translate(-bbcShape224.around.x, -bbcShape224.around.y);
ctx.beginPath();
ctx.rect(bbcShape224.point.x, bbcShape224.point.y, bbcShape224.size.width, bbcShape224.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape225.around.x, bbcShape225.around.y);
ctx.rotate(bbcShape225.rotation * Math.PI / 180);
ctx.translate(-bbcShape225.around.x, -bbcShape225.around.y);
ctx.beginPath();
ctx.rect(bbcShape225.point.x, bbcShape225.point.y, bbcShape225.size.width, bbcShape225.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape226.around.x, bbcShape226.around.y);
ctx.rotate(bbcShape226.rotation * Math.PI / 180);
ctx.translate(-bbcShape226.around.x, -bbcShape226.around.y);
ctx.beginPath();
ctx.rect(bbcShape226.point.x, bbcShape226.point.y, bbcShape226.size.width, bbcShape226.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape227.around.x, bbcShape227.around.y);
ctx.rotate(bbcShape227.rotation * Math.PI / 180);
ctx.translate(-bbcShape227.around.x, -bbcShape227.around.y);
ctx.beginPath();
ctx.rect(bbcShape227.point.x, bbcShape227.point.y, bbcShape227.size.width, bbcShape227.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape228.around.x, bbcShape228.around.y);
ctx.rotate(bbcShape228.rotation * Math.PI / 180);
ctx.translate(-bbcShape228.around.x, -bbcShape228.around.y);
ctx.beginPath();
ctx.rect(bbcShape228.point.x, bbcShape228.point.y, bbcShape228.size.width, bbcShape228.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape229.around.x, bbcShape229.around.y);
ctx.rotate(bbcShape229.rotation * Math.PI / 180);
ctx.translate(-bbcShape229.around.x, -bbcShape229.around.y);
ctx.beginPath();
ctx.rect(bbcShape229.point.x, bbcShape229.point.y, bbcShape229.size.width, bbcShape229.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape230.around.x, bbcShape230.around.y);
ctx.rotate(bbcShape230.rotation * Math.PI / 180);
ctx.translate(-bbcShape230.around.x, -bbcShape230.around.y);
ctx.beginPath();
ctx.rect(bbcShape230.point.x, bbcShape230.point.y, bbcShape230.size.width, bbcShape230.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape231.around.x, bbcShape231.around.y);
ctx.rotate(bbcShape231.rotation * Math.PI / 180);
ctx.translate(-bbcShape231.around.x, -bbcShape231.around.y);
ctx.beginPath();
ctx.rect(bbcShape231.point.x, bbcShape231.point.y, bbcShape231.size.width, bbcShape231.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(275.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape232.around.x, bbcShape232.around.y);
ctx.rotate(bbcShape232.rotation * Math.PI / 180);
ctx.translate(-bbcShape232.around.x, -bbcShape232.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape232.points[0][0], bbcShape232.points[0][1]);
ctx.lineTo(bbcShape232.points[1][0], bbcShape232.points[1][1]);
ctx.lineTo(bbcShape232.points[2][0], bbcShape232.points[2][1]);
ctx.lineTo(bbcShape232.points[3][0], bbcShape232.points[3][1]);
ctx.lineTo(bbcShape232.points[4][0], bbcShape232.points[4][1]);
ctx.lineTo(bbcShape232.points[5][0], bbcShape232.points[5][1]);
ctx.lineTo(bbcShape232.points[6][0], bbcShape232.points[6][1]);
ctx.lineTo(bbcShape232.points[7][0], bbcShape232.points[7][1]);
ctx.lineTo(bbcShape232.points[8][0], bbcShape232.points[8][1]);
ctx.lineTo(bbcShape232.points[9][0], bbcShape232.points[9][1]);
ctx.lineTo(bbcShape232.points[10][0], bbcShape232.points[10][1]);
ctx.lineTo(bbcShape232.points[11][0], bbcShape232.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape233.around.x, bbcShape233.around.y);
ctx.rotate(bbcShape233.rotation * Math.PI / 180);
ctx.translate(-bbcShape233.around.x, -bbcShape233.around.y);
ctx.beginPath();
ctx.rect(bbcShape233.point.x, bbcShape233.point.y, bbcShape233.size.width, bbcShape233.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape234.around.x, bbcShape234.around.y);
ctx.rotate(bbcShape234.rotation * Math.PI / 180);
ctx.translate(-bbcShape234.around.x, -bbcShape234.around.y);
ctx.beginPath();
ctx.rect(bbcShape234.point.x, bbcShape234.point.y, bbcShape234.size.width, bbcShape234.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape235.around.x, bbcShape235.around.y);
ctx.rotate(bbcShape235.rotation * Math.PI / 180);
ctx.translate(-bbcShape235.around.x, -bbcShape235.around.y);
ctx.beginPath();
ctx.rect(bbcShape235.point.x, bbcShape235.point.y, bbcShape235.size.width, bbcShape235.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape236.around.x, bbcShape236.around.y);
ctx.rotate(bbcShape236.rotation * Math.PI / 180);
ctx.translate(-bbcShape236.around.x, -bbcShape236.around.y);
ctx.beginPath();
ctx.rect(bbcShape236.point.x, bbcShape236.point.y, bbcShape236.size.width, bbcShape236.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape237.around.x, bbcShape237.around.y);
ctx.rotate(bbcShape237.rotation * Math.PI / 180);
ctx.translate(-bbcShape237.around.x, -bbcShape237.around.y);
ctx.beginPath();
ctx.rect(bbcShape237.point.x, bbcShape237.point.y, bbcShape237.size.width, bbcShape237.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape238.around.x, bbcShape238.around.y);
ctx.rotate(bbcShape238.rotation * Math.PI / 180);
ctx.translate(-bbcShape238.around.x, -bbcShape238.around.y);
ctx.beginPath();
ctx.rect(bbcShape238.point.x, bbcShape238.point.y, bbcShape238.size.width, bbcShape238.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape239.around.x, bbcShape239.around.y);
ctx.rotate(bbcShape239.rotation * Math.PI / 180);
ctx.translate(-bbcShape239.around.x, -bbcShape239.around.y);
ctx.beginPath();
ctx.rect(bbcShape239.point.x, bbcShape239.point.y, bbcShape239.size.width, bbcShape239.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape240.around.x, bbcShape240.around.y);
ctx.rotate(bbcShape240.rotation * Math.PI / 180);
ctx.translate(-bbcShape240.around.x, -bbcShape240.around.y);
ctx.beginPath();
ctx.rect(bbcShape240.point.x, bbcShape240.point.y, bbcShape240.size.width, bbcShape240.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape241.around.x, bbcShape241.around.y);
ctx.rotate(bbcShape241.rotation * Math.PI / 180);
ctx.translate(-bbcShape241.around.x, -bbcShape241.around.y);
ctx.beginPath();
ctx.rect(bbcShape241.point.x, bbcShape241.point.y, bbcShape241.size.width, bbcShape241.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape242.around.x, bbcShape242.around.y);
ctx.rotate(bbcShape242.rotation * Math.PI / 180);
ctx.translate(-bbcShape242.around.x, -bbcShape242.around.y);
ctx.beginPath();
ctx.rect(bbcShape242.point.x, bbcShape242.point.y, bbcShape242.size.width, bbcShape242.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape243.around.x, bbcShape243.around.y);
ctx.rotate(bbcShape243.rotation * Math.PI / 180);
ctx.translate(-bbcShape243.around.x, -bbcShape243.around.y);
ctx.beginPath();
ctx.rect(bbcShape243.point.x, bbcShape243.point.y, bbcShape243.size.width, bbcShape243.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape244.around.x, bbcShape244.around.y);
ctx.rotate(bbcShape244.rotation * Math.PI / 180);
ctx.translate(-bbcShape244.around.x, -bbcShape244.around.y);
ctx.beginPath();
ctx.rect(bbcShape244.point.x, bbcShape244.point.y, bbcShape244.size.width, bbcShape244.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape245.around.x, bbcShape245.around.y);
ctx.rotate(bbcShape245.rotation * Math.PI / 180);
ctx.translate(-bbcShape245.around.x, -bbcShape245.around.y);
ctx.beginPath();
ctx.rect(bbcShape245.point.x, bbcShape245.point.y, bbcShape245.size.width, bbcShape245.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape246.around.x, bbcShape246.around.y);
ctx.rotate(bbcShape246.rotation * Math.PI / 180);
ctx.translate(-bbcShape246.around.x, -bbcShape246.around.y);
ctx.beginPath();
ctx.rect(bbcShape246.point.x, bbcShape246.point.y, bbcShape246.size.width, bbcShape246.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape247.around.x, bbcShape247.around.y);
ctx.rotate(bbcShape247.rotation * Math.PI / 180);
ctx.translate(-bbcShape247.around.x, -bbcShape247.around.y);
ctx.beginPath();
ctx.rect(bbcShape247.point.x, bbcShape247.point.y, bbcShape247.size.width, bbcShape247.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape248.around.x, bbcShape248.around.y);
ctx.rotate(bbcShape248.rotation * Math.PI / 180);
ctx.translate(-bbcShape248.around.x, -bbcShape248.around.y);
ctx.beginPath();
ctx.rect(bbcShape248.point.x, bbcShape248.point.y, bbcShape248.size.width, bbcShape248.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape249.around.x, bbcShape249.around.y);
ctx.rotate(bbcShape249.rotation * Math.PI / 180);
ctx.translate(-bbcShape249.around.x, -bbcShape249.around.y);
ctx.beginPath();
ctx.rect(bbcShape249.point.x, bbcShape249.point.y, bbcShape249.size.width, bbcShape249.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape250.around.x, bbcShape250.around.y);
ctx.rotate(bbcShape250.rotation * Math.PI / 180);
ctx.translate(-bbcShape250.around.x, -bbcShape250.around.y);
ctx.beginPath();
ctx.rect(bbcShape250.point.x, bbcShape250.point.y, bbcShape250.size.width, bbcShape250.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape251.around.x, bbcShape251.around.y);
ctx.rotate(bbcShape251.rotation * Math.PI / 180);
ctx.translate(-bbcShape251.around.x, -bbcShape251.around.y);
ctx.beginPath();
ctx.rect(bbcShape251.point.x, bbcShape251.point.y, bbcShape251.size.width, bbcShape251.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape252.around.x, bbcShape252.around.y);
ctx.rotate(bbcShape252.rotation * Math.PI / 180);
ctx.translate(-bbcShape252.around.x, -bbcShape252.around.y);
ctx.beginPath();
ctx.rect(bbcShape252.point.x, bbcShape252.point.y, bbcShape252.size.width, bbcShape252.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(300.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape253.around.x, bbcShape253.around.y);
ctx.rotate(bbcShape253.rotation * Math.PI / 180);
ctx.translate(-bbcShape253.around.x, -bbcShape253.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape253.points[0][0], bbcShape253.points[0][1]);
ctx.lineTo(bbcShape253.points[1][0], bbcShape253.points[1][1]);
ctx.lineTo(bbcShape253.points[2][0], bbcShape253.points[2][1]);
ctx.lineTo(bbcShape253.points[3][0], bbcShape253.points[3][1]);
ctx.lineTo(bbcShape253.points[4][0], bbcShape253.points[4][1]);
ctx.lineTo(bbcShape253.points[5][0], bbcShape253.points[5][1]);
ctx.lineTo(bbcShape253.points[6][0], bbcShape253.points[6][1]);
ctx.lineTo(bbcShape253.points[7][0], bbcShape253.points[7][1]);
ctx.lineTo(bbcShape253.points[8][0], bbcShape253.points[8][1]);
ctx.lineTo(bbcShape253.points[9][0], bbcShape253.points[9][1]);
ctx.lineTo(bbcShape253.points[10][0], bbcShape253.points[10][1]);
ctx.lineTo(bbcShape253.points[11][0], bbcShape253.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape254.around.x, bbcShape254.around.y);
ctx.rotate(bbcShape254.rotation * Math.PI / 180);
ctx.translate(-bbcShape254.around.x, -bbcShape254.around.y);
ctx.beginPath();
ctx.rect(bbcShape254.point.x, bbcShape254.point.y, bbcShape254.size.width, bbcShape254.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape255.around.x, bbcShape255.around.y);
ctx.rotate(bbcShape255.rotation * Math.PI / 180);
ctx.translate(-bbcShape255.around.x, -bbcShape255.around.y);
ctx.beginPath();
ctx.rect(bbcShape255.point.x, bbcShape255.point.y, bbcShape255.size.width, bbcShape255.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape256.around.x, bbcShape256.around.y);
ctx.rotate(bbcShape256.rotation * Math.PI / 180);
ctx.translate(-bbcShape256.around.x, -bbcShape256.around.y);
ctx.beginPath();
ctx.rect(bbcShape256.point.x, bbcShape256.point.y, bbcShape256.size.width, bbcShape256.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape257.around.x, bbcShape257.around.y);
ctx.rotate(bbcShape257.rotation * Math.PI / 180);
ctx.translate(-bbcShape257.around.x, -bbcShape257.around.y);
ctx.beginPath();
ctx.rect(bbcShape257.point.x, bbcShape257.point.y, bbcShape257.size.width, bbcShape257.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape258.around.x, bbcShape258.around.y);
ctx.rotate(bbcShape258.rotation * Math.PI / 180);
ctx.translate(-bbcShape258.around.x, -bbcShape258.around.y);
ctx.beginPath();
ctx.rect(bbcShape258.point.x, bbcShape258.point.y, bbcShape258.size.width, bbcShape258.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape259.around.x, bbcShape259.around.y);
ctx.rotate(bbcShape259.rotation * Math.PI / 180);
ctx.translate(-bbcShape259.around.x, -bbcShape259.around.y);
ctx.beginPath();
ctx.rect(bbcShape259.point.x, bbcShape259.point.y, bbcShape259.size.width, bbcShape259.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape260.around.x, bbcShape260.around.y);
ctx.rotate(bbcShape260.rotation * Math.PI / 180);
ctx.translate(-bbcShape260.around.x, -bbcShape260.around.y);
ctx.beginPath();
ctx.rect(bbcShape260.point.x, bbcShape260.point.y, bbcShape260.size.width, bbcShape260.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape261.around.x, bbcShape261.around.y);
ctx.rotate(bbcShape261.rotation * Math.PI / 180);
ctx.translate(-bbcShape261.around.x, -bbcShape261.around.y);
ctx.beginPath();
ctx.rect(bbcShape261.point.x, bbcShape261.point.y, bbcShape261.size.width, bbcShape261.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape262.around.x, bbcShape262.around.y);
ctx.rotate(bbcShape262.rotation * Math.PI / 180);
ctx.translate(-bbcShape262.around.x, -bbcShape262.around.y);
ctx.beginPath();
ctx.rect(bbcShape262.point.x, bbcShape262.point.y, bbcShape262.size.width, bbcShape262.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape263.around.x, bbcShape263.around.y);
ctx.rotate(bbcShape263.rotation * Math.PI / 180);
ctx.translate(-bbcShape263.around.x, -bbcShape263.around.y);
ctx.beginPath();
ctx.rect(bbcShape263.point.x, bbcShape263.point.y, bbcShape263.size.width, bbcShape263.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape264.around.x, bbcShape264.around.y);
ctx.rotate(bbcShape264.rotation * Math.PI / 180);
ctx.translate(-bbcShape264.around.x, -bbcShape264.around.y);
ctx.beginPath();
ctx.rect(bbcShape264.point.x, bbcShape264.point.y, bbcShape264.size.width, bbcShape264.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape265.around.x, bbcShape265.around.y);
ctx.rotate(bbcShape265.rotation * Math.PI / 180);
ctx.translate(-bbcShape265.around.x, -bbcShape265.around.y);
ctx.beginPath();
ctx.rect(bbcShape265.point.x, bbcShape265.point.y, bbcShape265.size.width, bbcShape265.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape266.around.x, bbcShape266.around.y);
ctx.rotate(bbcShape266.rotation * Math.PI / 180);
ctx.translate(-bbcShape266.around.x, -bbcShape266.around.y);
ctx.beginPath();
ctx.rect(bbcShape266.point.x, bbcShape266.point.y, bbcShape266.size.width, bbcShape266.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape267.around.x, bbcShape267.around.y);
ctx.rotate(bbcShape267.rotation * Math.PI / 180);
ctx.translate(-bbcShape267.around.x, -bbcShape267.around.y);
ctx.beginPath();
ctx.rect(bbcShape267.point.x, bbcShape267.point.y, bbcShape267.size.width, bbcShape267.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape268.around.x, bbcShape268.around.y);
ctx.rotate(bbcShape268.rotation * Math.PI / 180);
ctx.translate(-bbcShape268.around.x, -bbcShape268.around.y);
ctx.beginPath();
ctx.rect(bbcShape268.point.x, bbcShape268.point.y, bbcShape268.size.width, bbcShape268.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape269.around.x, bbcShape269.around.y);
ctx.rotate(bbcShape269.rotation * Math.PI / 180);
ctx.translate(-bbcShape269.around.x, -bbcShape269.around.y);
ctx.beginPath();
ctx.rect(bbcShape269.point.x, bbcShape269.point.y, bbcShape269.size.width, bbcShape269.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape270.around.x, bbcShape270.around.y);
ctx.rotate(bbcShape270.rotation * Math.PI / 180);
ctx.translate(-bbcShape270.around.x, -bbcShape270.around.y);
ctx.beginPath();
ctx.rect(bbcShape270.point.x, bbcShape270.point.y, bbcShape270.size.width, bbcShape270.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape271.around.x, bbcShape271.around.y);
ctx.rotate(bbcShape271.rotation * Math.PI / 180);
ctx.translate(-bbcShape271.around.x, -bbcShape271.around.y);
ctx.beginPath();
ctx.rect(bbcShape271.point.x, bbcShape271.point.y, bbcShape271.size.width, bbcShape271.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape272.around.x, bbcShape272.around.y);
ctx.rotate(bbcShape272.rotation * Math.PI / 180);
ctx.translate(-bbcShape272.around.x, -bbcShape272.around.y);
ctx.beginPath();
ctx.rect(bbcShape272.point.x, bbcShape272.point.y, bbcShape272.size.width, bbcShape272.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape273.around.x, bbcShape273.around.y);
ctx.rotate(bbcShape273.rotation * Math.PI / 180);
ctx.translate(-bbcShape273.around.x, -bbcShape273.around.y);
ctx.beginPath();
ctx.rect(bbcShape273.point.x, bbcShape273.point.y, bbcShape273.size.width, bbcShape273.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(325.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape274.around.x, bbcShape274.around.y);
ctx.rotate(bbcShape274.rotation * Math.PI / 180);
ctx.translate(-bbcShape274.around.x, -bbcShape274.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape274.points[0][0], bbcShape274.points[0][1]);
ctx.lineTo(bbcShape274.points[1][0], bbcShape274.points[1][1]);
ctx.lineTo(bbcShape274.points[2][0], bbcShape274.points[2][1]);
ctx.lineTo(bbcShape274.points[3][0], bbcShape274.points[3][1]);
ctx.lineTo(bbcShape274.points[4][0], bbcShape274.points[4][1]);
ctx.lineTo(bbcShape274.points[5][0], bbcShape274.points[5][1]);
ctx.lineTo(bbcShape274.points[6][0], bbcShape274.points[6][1]);
ctx.lineTo(bbcShape274.points[7][0], bbcShape274.points[7][1]);
ctx.lineTo(bbcShape274.points[8][0], bbcShape274.points[8][1]);
ctx.lineTo(bbcShape274.points[9][0], bbcShape274.points[9][1]);
ctx.lineTo(bbcShape274.points[10][0], bbcShape274.points[10][1]);
ctx.lineTo(bbcShape274.points[11][0], bbcShape274.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape275.around.x, bbcShape275.around.y);
ctx.rotate(bbcShape275.rotation * Math.PI / 180);
ctx.translate(-bbcShape275.around.x, -bbcShape275.around.y);
ctx.beginPath();
ctx.rect(bbcShape275.point.x, bbcShape275.point.y, bbcShape275.size.width, bbcShape275.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape276.around.x, bbcShape276.around.y);
ctx.rotate(bbcShape276.rotation * Math.PI / 180);
ctx.translate(-bbcShape276.around.x, -bbcShape276.around.y);
ctx.beginPath();
ctx.rect(bbcShape276.point.x, bbcShape276.point.y, bbcShape276.size.width, bbcShape276.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape277.around.x, bbcShape277.around.y);
ctx.rotate(bbcShape277.rotation * Math.PI / 180);
ctx.translate(-bbcShape277.around.x, -bbcShape277.around.y);
ctx.beginPath();
ctx.rect(bbcShape277.point.x, bbcShape277.point.y, bbcShape277.size.width, bbcShape277.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape278.around.x, bbcShape278.around.y);
ctx.rotate(bbcShape278.rotation * Math.PI / 180);
ctx.translate(-bbcShape278.around.x, -bbcShape278.around.y);
ctx.beginPath();
ctx.rect(bbcShape278.point.x, bbcShape278.point.y, bbcShape278.size.width, bbcShape278.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape279.around.x, bbcShape279.around.y);
ctx.rotate(bbcShape279.rotation * Math.PI / 180);
ctx.translate(-bbcShape279.around.x, -bbcShape279.around.y);
ctx.beginPath();
ctx.rect(bbcShape279.point.x, bbcShape279.point.y, bbcShape279.size.width, bbcShape279.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape280.around.x, bbcShape280.around.y);
ctx.rotate(bbcShape280.rotation * Math.PI / 180);
ctx.translate(-bbcShape280.around.x, -bbcShape280.around.y);
ctx.beginPath();
ctx.rect(bbcShape280.point.x, bbcShape280.point.y, bbcShape280.size.width, bbcShape280.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape281.around.x, bbcShape281.around.y);
ctx.rotate(bbcShape281.rotation * Math.PI / 180);
ctx.translate(-bbcShape281.around.x, -bbcShape281.around.y);
ctx.beginPath();
ctx.rect(bbcShape281.point.x, bbcShape281.point.y, bbcShape281.size.width, bbcShape281.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape282.around.x, bbcShape282.around.y);
ctx.rotate(bbcShape282.rotation * Math.PI / 180);
ctx.translate(-bbcShape282.around.x, -bbcShape282.around.y);
ctx.beginPath();
ctx.rect(bbcShape282.point.x, bbcShape282.point.y, bbcShape282.size.width, bbcShape282.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape283.around.x, bbcShape283.around.y);
ctx.rotate(bbcShape283.rotation * Math.PI / 180);
ctx.translate(-bbcShape283.around.x, -bbcShape283.around.y);
ctx.beginPath();
ctx.rect(bbcShape283.point.x, bbcShape283.point.y, bbcShape283.size.width, bbcShape283.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape284.around.x, bbcShape284.around.y);
ctx.rotate(bbcShape284.rotation * Math.PI / 180);
ctx.translate(-bbcShape284.around.x, -bbcShape284.around.y);
ctx.beginPath();
ctx.rect(bbcShape284.point.x, bbcShape284.point.y, bbcShape284.size.width, bbcShape284.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape285.around.x, bbcShape285.around.y);
ctx.rotate(bbcShape285.rotation * Math.PI / 180);
ctx.translate(-bbcShape285.around.x, -bbcShape285.around.y);
ctx.beginPath();
ctx.rect(bbcShape285.point.x, bbcShape285.point.y, bbcShape285.size.width, bbcShape285.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape286.around.x, bbcShape286.around.y);
ctx.rotate(bbcShape286.rotation * Math.PI / 180);
ctx.translate(-bbcShape286.around.x, -bbcShape286.around.y);
ctx.beginPath();
ctx.rect(bbcShape286.point.x, bbcShape286.point.y, bbcShape286.size.width, bbcShape286.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape287.around.x, bbcShape287.around.y);
ctx.rotate(bbcShape287.rotation * Math.PI / 180);
ctx.translate(-bbcShape287.around.x, -bbcShape287.around.y);
ctx.beginPath();
ctx.rect(bbcShape287.point.x, bbcShape287.point.y, bbcShape287.size.width, bbcShape287.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape288.around.x, bbcShape288.around.y);
ctx.rotate(bbcShape288.rotation * Math.PI / 180);
ctx.translate(-bbcShape288.around.x, -bbcShape288.around.y);
ctx.beginPath();
ctx.rect(bbcShape288.point.x, bbcShape288.point.y, bbcShape288.size.width, bbcShape288.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape289.around.x, bbcShape289.around.y);
ctx.rotate(bbcShape289.rotation * Math.PI / 180);
ctx.translate(-bbcShape289.around.x, -bbcShape289.around.y);
ctx.beginPath();
ctx.rect(bbcShape289.point.x, bbcShape289.point.y, bbcShape289.size.width, bbcShape289.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape290.around.x, bbcShape290.around.y);
ctx.rotate(bbcShape290.rotation * Math.PI / 180);
ctx.translate(-bbcShape290.around.x, -bbcShape290.around.y);
ctx.beginPath();
ctx.rect(bbcShape290.point.x, bbcShape290.point.y, bbcShape290.size.width, bbcShape290.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape291.around.x, bbcShape291.around.y);
ctx.rotate(bbcShape291.rotation * Math.PI / 180);
ctx.translate(-bbcShape291.around.x, -bbcShape291.around.y);
ctx.beginPath();
ctx.rect(bbcShape291.point.x, bbcShape291.point.y, bbcShape291.size.width, bbcShape291.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape292.around.x, bbcShape292.around.y);
ctx.rotate(bbcShape292.rotation * Math.PI / 180);
ctx.translate(-bbcShape292.around.x, -bbcShape292.around.y);
ctx.beginPath();
ctx.rect(bbcShape292.point.x, bbcShape292.point.y, bbcShape292.size.width, bbcShape292.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape293.around.x, bbcShape293.around.y);
ctx.rotate(bbcShape293.rotation * Math.PI / 180);
ctx.translate(-bbcShape293.around.x, -bbcShape293.around.y);
ctx.beginPath();
ctx.rect(bbcShape293.point.x, bbcShape293.point.y, bbcShape293.size.width, bbcShape293.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape294.around.x, bbcShape294.around.y);
ctx.rotate(bbcShape294.rotation * Math.PI / 180);
ctx.translate(-bbcShape294.around.x, -bbcShape294.around.y);
ctx.beginPath();
ctx.rect(bbcShape294.point.x, bbcShape294.point.y, bbcShape294.size.width, bbcShape294.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(350.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape295.around.x, bbcShape295.around.y);
ctx.rotate(bbcShape295.rotation * Math.PI / 180);
ctx.translate(-bbcShape295.around.x, -bbcShape295.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape295.points[0][0], bbcShape295.points[0][1]);
ctx.lineTo(bbcShape295.points[1][0], bbcShape295.points[1][1]);
ctx.lineTo(bbcShape295.points[2][0], bbcShape295.points[2][1]);
ctx.lineTo(bbcShape295.points[3][0], bbcShape295.points[3][1]);
ctx.lineTo(bbcShape295.points[4][0], bbcShape295.points[4][1]);
ctx.lineTo(bbcShape295.points[5][0], bbcShape295.points[5][1]);
ctx.lineTo(bbcShape295.points[6][0], bbcShape295.points[6][1]);
ctx.lineTo(bbcShape295.points[7][0], bbcShape295.points[7][1]);
ctx.lineTo(bbcShape295.points[8][0], bbcShape295.points[8][1]);
ctx.lineTo(bbcShape295.points[9][0], bbcShape295.points[9][1]);
ctx.lineTo(bbcShape295.points[10][0], bbcShape295.points[10][1]);
ctx.lineTo(bbcShape295.points[11][0], bbcShape295.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape296.around.x, bbcShape296.around.y);
ctx.rotate(bbcShape296.rotation * Math.PI / 180);
ctx.translate(-bbcShape296.around.x, -bbcShape296.around.y);
ctx.beginPath();
ctx.rect(bbcShape296.point.x, bbcShape296.point.y, bbcShape296.size.width, bbcShape296.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape297.around.x, bbcShape297.around.y);
ctx.rotate(bbcShape297.rotation * Math.PI / 180);
ctx.translate(-bbcShape297.around.x, -bbcShape297.around.y);
ctx.beginPath();
ctx.rect(bbcShape297.point.x, bbcShape297.point.y, bbcShape297.size.width, bbcShape297.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape298.around.x, bbcShape298.around.y);
ctx.rotate(bbcShape298.rotation * Math.PI / 180);
ctx.translate(-bbcShape298.around.x, -bbcShape298.around.y);
ctx.beginPath();
ctx.rect(bbcShape298.point.x, bbcShape298.point.y, bbcShape298.size.width, bbcShape298.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape299.around.x, bbcShape299.around.y);
ctx.rotate(bbcShape299.rotation * Math.PI / 180);
ctx.translate(-bbcShape299.around.x, -bbcShape299.around.y);
ctx.beginPath();
ctx.rect(bbcShape299.point.x, bbcShape299.point.y, bbcShape299.size.width, bbcShape299.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape300.around.x, bbcShape300.around.y);
ctx.rotate(bbcShape300.rotation * Math.PI / 180);
ctx.translate(-bbcShape300.around.x, -bbcShape300.around.y);
ctx.beginPath();
ctx.rect(bbcShape300.point.x, bbcShape300.point.y, bbcShape300.size.width, bbcShape300.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape301.around.x, bbcShape301.around.y);
ctx.rotate(bbcShape301.rotation * Math.PI / 180);
ctx.translate(-bbcShape301.around.x, -bbcShape301.around.y);
ctx.beginPath();
ctx.rect(bbcShape301.point.x, bbcShape301.point.y, bbcShape301.size.width, bbcShape301.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape302.around.x, bbcShape302.around.y);
ctx.rotate(bbcShape302.rotation * Math.PI / 180);
ctx.translate(-bbcShape302.around.x, -bbcShape302.around.y);
ctx.beginPath();
ctx.rect(bbcShape302.point.x, bbcShape302.point.y, bbcShape302.size.width, bbcShape302.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape303.around.x, bbcShape303.around.y);
ctx.rotate(bbcShape303.rotation * Math.PI / 180);
ctx.translate(-bbcShape303.around.x, -bbcShape303.around.y);
ctx.beginPath();
ctx.rect(bbcShape303.point.x, bbcShape303.point.y, bbcShape303.size.width, bbcShape303.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape304.around.x, bbcShape304.around.y);
ctx.rotate(bbcShape304.rotation * Math.PI / 180);
ctx.translate(-bbcShape304.around.x, -bbcShape304.around.y);
ctx.beginPath();
ctx.rect(bbcShape304.point.x, bbcShape304.point.y, bbcShape304.size.width, bbcShape304.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape305.around.x, bbcShape305.around.y);
ctx.rotate(bbcShape305.rotation * Math.PI / 180);
ctx.translate(-bbcShape305.around.x, -bbcShape305.around.y);
ctx.beginPath();
ctx.rect(bbcShape305.point.x, bbcShape305.point.y, bbcShape305.size.width, bbcShape305.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape306.around.x, bbcShape306.around.y);
ctx.rotate(bbcShape306.rotation * Math.PI / 180);
ctx.translate(-bbcShape306.around.x, -bbcShape306.around.y);
ctx.beginPath();
ctx.rect(bbcShape306.point.x, bbcShape306.point.y, bbcShape306.size.width, bbcShape306.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape307.around.x, bbcShape307.around.y);
ctx.rotate(bbcShape307.rotation * Math.PI / 180);
ctx.translate(-bbcShape307.around.x, -bbcShape307.around.y);
ctx.beginPath();
ctx.rect(bbcShape307.point.x, bbcShape307.point.y, bbcShape307.size.width, bbcShape307.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape308.around.x, bbcShape308.around.y);
ctx.rotate(bbcShape308.rotation * Math.PI / 180);
ctx.translate(-bbcShape308.around.x, -bbcShape308.around.y);
ctx.beginPath();
ctx.rect(bbcShape308.point.x, bbcShape308.point.y, bbcShape308.size.width, bbcShape308.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape309.around.x, bbcShape309.around.y);
ctx.rotate(bbcShape309.rotation * Math.PI / 180);
ctx.translate(-bbcShape309.around.x, -bbcShape309.around.y);
ctx.beginPath();
ctx.rect(bbcShape309.point.x, bbcShape309.point.y, bbcShape309.size.width, bbcShape309.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape310.around.x, bbcShape310.around.y);
ctx.rotate(bbcShape310.rotation * Math.PI / 180);
ctx.translate(-bbcShape310.around.x, -bbcShape310.around.y);
ctx.beginPath();
ctx.rect(bbcShape310.point.x, bbcShape310.point.y, bbcShape310.size.width, bbcShape310.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape311.around.x, bbcShape311.around.y);
ctx.rotate(bbcShape311.rotation * Math.PI / 180);
ctx.translate(-bbcShape311.around.x, -bbcShape311.around.y);
ctx.beginPath();
ctx.rect(bbcShape311.point.x, bbcShape311.point.y, bbcShape311.size.width, bbcShape311.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape312.around.x, bbcShape312.around.y);
ctx.rotate(bbcShape312.rotation * Math.PI / 180);
ctx.translate(-bbcShape312.around.x, -bbcShape312.around.y);
ctx.beginPath();
ctx.rect(bbcShape312.point.x, bbcShape312.point.y, bbcShape312.size.width, bbcShape312.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape313.around.x, bbcShape313.around.y);
ctx.rotate(bbcShape313.rotation * Math.PI / 180);
ctx.translate(-bbcShape313.around.x, -bbcShape313.around.y);
ctx.beginPath();
ctx.rect(bbcShape313.point.x, bbcShape313.point.y, bbcShape313.size.width, bbcShape313.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape314.around.x, bbcShape314.around.y);
ctx.rotate(bbcShape314.rotation * Math.PI / 180);
ctx.translate(-bbcShape314.around.x, -bbcShape314.around.y);
ctx.beginPath();
ctx.rect(bbcShape314.point.x, bbcShape314.point.y, bbcShape314.size.width, bbcShape314.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape315.around.x, bbcShape315.around.y);
ctx.rotate(bbcShape315.rotation * Math.PI / 180);
ctx.translate(-bbcShape315.around.x, -bbcShape315.around.y);
ctx.beginPath();
ctx.rect(bbcShape315.point.x, bbcShape315.point.y, bbcShape315.size.width, bbcShape315.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(375.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape316.around.x, bbcShape316.around.y);
ctx.rotate(bbcShape316.rotation * Math.PI / 180);
ctx.translate(-bbcShape316.around.x, -bbcShape316.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape316.points[0][0], bbcShape316.points[0][1]);
ctx.lineTo(bbcShape316.points[1][0], bbcShape316.points[1][1]);
ctx.lineTo(bbcShape316.points[2][0], bbcShape316.points[2][1]);
ctx.lineTo(bbcShape316.points[3][0], bbcShape316.points[3][1]);
ctx.lineTo(bbcShape316.points[4][0], bbcShape316.points[4][1]);
ctx.lineTo(bbcShape316.points[5][0], bbcShape316.points[5][1]);
ctx.lineTo(bbcShape316.points[6][0], bbcShape316.points[6][1]);
ctx.lineTo(bbcShape316.points[7][0], bbcShape316.points[7][1]);
ctx.lineTo(bbcShape316.points[8][0], bbcShape316.points[8][1]);
ctx.lineTo(bbcShape316.points[9][0], bbcShape316.points[9][1]);
ctx.lineTo(bbcShape316.points[10][0], bbcShape316.points[10][1]);
ctx.lineTo(bbcShape316.points[11][0], bbcShape316.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape317.around.x, bbcShape317.around.y);
ctx.rotate(bbcShape317.rotation * Math.PI / 180);
ctx.translate(-bbcShape317.around.x, -bbcShape317.around.y);
ctx.beginPath();
ctx.rect(bbcShape317.point.x, bbcShape317.point.y, bbcShape317.size.width, bbcShape317.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape318.around.x, bbcShape318.around.y);
ctx.rotate(bbcShape318.rotation * Math.PI / 180);
ctx.translate(-bbcShape318.around.x, -bbcShape318.around.y);
ctx.beginPath();
ctx.rect(bbcShape318.point.x, bbcShape318.point.y, bbcShape318.size.width, bbcShape318.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape319.around.x, bbcShape319.around.y);
ctx.rotate(bbcShape319.rotation * Math.PI / 180);
ctx.translate(-bbcShape319.around.x, -bbcShape319.around.y);
ctx.beginPath();
ctx.rect(bbcShape319.point.x, bbcShape319.point.y, bbcShape319.size.width, bbcShape319.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape320.around.x, bbcShape320.around.y);
ctx.rotate(bbcShape320.rotation * Math.PI / 180);
ctx.translate(-bbcShape320.around.x, -bbcShape320.around.y);
ctx.beginPath();
ctx.rect(bbcShape320.point.x, bbcShape320.point.y, bbcShape320.size.width, bbcShape320.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape321.around.x, bbcShape321.around.y);
ctx.rotate(bbcShape321.rotation * Math.PI / 180);
ctx.translate(-bbcShape321.around.x, -bbcShape321.around.y);
ctx.beginPath();
ctx.rect(bbcShape321.point.x, bbcShape321.point.y, bbcShape321.size.width, bbcShape321.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape322.around.x, bbcShape322.around.y);
ctx.rotate(bbcShape322.rotation * Math.PI / 180);
ctx.translate(-bbcShape322.around.x, -bbcShape322.around.y);
ctx.beginPath();
ctx.rect(bbcShape322.point.x, bbcShape322.point.y, bbcShape322.size.width, bbcShape322.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape323.around.x, bbcShape323.around.y);
ctx.rotate(bbcShape323.rotation * Math.PI / 180);
ctx.translate(-bbcShape323.around.x, -bbcShape323.around.y);
ctx.beginPath();
ctx.rect(bbcShape323.point.x, bbcShape323.point.y, bbcShape323.size.width, bbcShape323.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape324.around.x, bbcShape324.around.y);
ctx.rotate(bbcShape324.rotation * Math.PI / 180);
ctx.translate(-bbcShape324.around.x, -bbcShape324.around.y);
ctx.beginPath();
ctx.rect(bbcShape324.point.x, bbcShape324.point.y, bbcShape324.size.width, bbcShape324.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape325.around.x, bbcShape325.around.y);
ctx.rotate(bbcShape325.rotation * Math.PI / 180);
ctx.translate(-bbcShape325.around.x, -bbcShape325.around.y);
ctx.beginPath();
ctx.rect(bbcShape325.point.x, bbcShape325.point.y, bbcShape325.size.width, bbcShape325.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape326.around.x, bbcShape326.around.y);
ctx.rotate(bbcShape326.rotation * Math.PI / 180);
ctx.translate(-bbcShape326.around.x, -bbcShape326.around.y);
ctx.beginPath();
ctx.rect(bbcShape326.point.x, bbcShape326.point.y, bbcShape326.size.width, bbcShape326.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape327.around.x, bbcShape327.around.y);
ctx.rotate(bbcShape327.rotation * Math.PI / 180);
ctx.translate(-bbcShape327.around.x, -bbcShape327.around.y);
ctx.beginPath();
ctx.rect(bbcShape327.point.x, bbcShape327.point.y, bbcShape327.size.width, bbcShape327.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape328.around.x, bbcShape328.around.y);
ctx.rotate(bbcShape328.rotation * Math.PI / 180);
ctx.translate(-bbcShape328.around.x, -bbcShape328.around.y);
ctx.beginPath();
ctx.rect(bbcShape328.point.x, bbcShape328.point.y, bbcShape328.size.width, bbcShape328.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape329.around.x, bbcShape329.around.y);
ctx.rotate(bbcShape329.rotation * Math.PI / 180);
ctx.translate(-bbcShape329.around.x, -bbcShape329.around.y);
ctx.beginPath();
ctx.rect(bbcShape329.point.x, bbcShape329.point.y, bbcShape329.size.width, bbcShape329.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape330.around.x, bbcShape330.around.y);
ctx.rotate(bbcShape330.rotation * Math.PI / 180);
ctx.translate(-bbcShape330.around.x, -bbcShape330.around.y);
ctx.beginPath();
ctx.rect(bbcShape330.point.x, bbcShape330.point.y, bbcShape330.size.width, bbcShape330.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape331.around.x, bbcShape331.around.y);
ctx.rotate(bbcShape331.rotation * Math.PI / 180);
ctx.translate(-bbcShape331.around.x, -bbcShape331.around.y);
ctx.beginPath();
ctx.rect(bbcShape331.point.x, bbcShape331.point.y, bbcShape331.size.width, bbcShape331.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape332.around.x, bbcShape332.around.y);
ctx.rotate(bbcShape332.rotation * Math.PI / 180);
ctx.translate(-bbcShape332.around.x, -bbcShape332.around.y);
ctx.beginPath();
ctx.rect(bbcShape332.point.x, bbcShape332.point.y, bbcShape332.size.width, bbcShape332.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape333.around.x, bbcShape333.around.y);
ctx.rotate(bbcShape333.rotation * Math.PI / 180);
ctx.translate(-bbcShape333.around.x, -bbcShape333.around.y);
ctx.beginPath();
ctx.rect(bbcShape333.point.x, bbcShape333.point.y, bbcShape333.size.width, bbcShape333.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape334.around.x, bbcShape334.around.y);
ctx.rotate(bbcShape334.rotation * Math.PI / 180);
ctx.translate(-bbcShape334.around.x, -bbcShape334.around.y);
ctx.beginPath();
ctx.rect(bbcShape334.point.x, bbcShape334.point.y, bbcShape334.size.width, bbcShape334.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape335.around.x, bbcShape335.around.y);
ctx.rotate(bbcShape335.rotation * Math.PI / 180);
ctx.translate(-bbcShape335.around.x, -bbcShape335.around.y);
ctx.beginPath();
ctx.rect(bbcShape335.point.x, bbcShape335.point.y, bbcShape335.size.width, bbcShape335.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape336.around.x, bbcShape336.around.y);
ctx.rotate(bbcShape336.rotation * Math.PI / 180);
ctx.translate(-bbcShape336.around.x, -bbcShape336.around.y);
ctx.beginPath();
ctx.rect(bbcShape336.point.x, bbcShape336.point.y, bbcShape336.size.width, bbcShape336.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(400.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape337.around.x, bbcShape337.around.y);
ctx.rotate(bbcShape337.rotation * Math.PI / 180);
ctx.translate(-bbcShape337.around.x, -bbcShape337.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape337.points[0][0], bbcShape337.points[0][1]);
ctx.lineTo(bbcShape337.points[1][0], bbcShape337.points[1][1]);
ctx.lineTo(bbcShape337.points[2][0], bbcShape337.points[2][1]);
ctx.lineTo(bbcShape337.points[3][0], bbcShape337.points[3][1]);
ctx.lineTo(bbcShape337.points[4][0], bbcShape337.points[4][1]);
ctx.lineTo(bbcShape337.points[5][0], bbcShape337.points[5][1]);
ctx.lineTo(bbcShape337.points[6][0], bbcShape337.points[6][1]);
ctx.lineTo(bbcShape337.points[7][0], bbcShape337.points[7][1]);
ctx.lineTo(bbcShape337.points[8][0], bbcShape337.points[8][1]);
ctx.lineTo(bbcShape337.points[9][0], bbcShape337.points[9][1]);
ctx.lineTo(bbcShape337.points[10][0], bbcShape337.points[10][1]);
ctx.lineTo(bbcShape337.points[11][0], bbcShape337.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape338.around.x, bbcShape338.around.y);
ctx.rotate(bbcShape338.rotation * Math.PI / 180);
ctx.translate(-bbcShape338.around.x, -bbcShape338.around.y);
ctx.beginPath();
ctx.rect(bbcShape338.point.x, bbcShape338.point.y, bbcShape338.size.width, bbcShape338.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape339.around.x, bbcShape339.around.y);
ctx.rotate(bbcShape339.rotation * Math.PI / 180);
ctx.translate(-bbcShape339.around.x, -bbcShape339.around.y);
ctx.beginPath();
ctx.rect(bbcShape339.point.x, bbcShape339.point.y, bbcShape339.size.width, bbcShape339.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape340.around.x, bbcShape340.around.y);
ctx.rotate(bbcShape340.rotation * Math.PI / 180);
ctx.translate(-bbcShape340.around.x, -bbcShape340.around.y);
ctx.beginPath();
ctx.rect(bbcShape340.point.x, bbcShape340.point.y, bbcShape340.size.width, bbcShape340.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape341.around.x, bbcShape341.around.y);
ctx.rotate(bbcShape341.rotation * Math.PI / 180);
ctx.translate(-bbcShape341.around.x, -bbcShape341.around.y);
ctx.beginPath();
ctx.rect(bbcShape341.point.x, bbcShape341.point.y, bbcShape341.size.width, bbcShape341.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape342.around.x, bbcShape342.around.y);
ctx.rotate(bbcShape342.rotation * Math.PI / 180);
ctx.translate(-bbcShape342.around.x, -bbcShape342.around.y);
ctx.beginPath();
ctx.rect(bbcShape342.point.x, bbcShape342.point.y, bbcShape342.size.width, bbcShape342.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape343.around.x, bbcShape343.around.y);
ctx.rotate(bbcShape343.rotation * Math.PI / 180);
ctx.translate(-bbcShape343.around.x, -bbcShape343.around.y);
ctx.beginPath();
ctx.rect(bbcShape343.point.x, bbcShape343.point.y, bbcShape343.size.width, bbcShape343.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape344.around.x, bbcShape344.around.y);
ctx.rotate(bbcShape344.rotation * Math.PI / 180);
ctx.translate(-bbcShape344.around.x, -bbcShape344.around.y);
ctx.beginPath();
ctx.rect(bbcShape344.point.x, bbcShape344.point.y, bbcShape344.size.width, bbcShape344.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape345.around.x, bbcShape345.around.y);
ctx.rotate(bbcShape345.rotation * Math.PI / 180);
ctx.translate(-bbcShape345.around.x, -bbcShape345.around.y);
ctx.beginPath();
ctx.rect(bbcShape345.point.x, bbcShape345.point.y, bbcShape345.size.width, bbcShape345.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape346.around.x, bbcShape346.around.y);
ctx.rotate(bbcShape346.rotation * Math.PI / 180);
ctx.translate(-bbcShape346.around.x, -bbcShape346.around.y);
ctx.beginPath();
ctx.rect(bbcShape346.point.x, bbcShape346.point.y, bbcShape346.size.width, bbcShape346.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape347.around.x, bbcShape347.around.y);
ctx.rotate(bbcShape347.rotation * Math.PI / 180);
ctx.translate(-bbcShape347.around.x, -bbcShape347.around.y);
ctx.beginPath();
ctx.rect(bbcShape347.point.x, bbcShape347.point.y, bbcShape347.size.width, bbcShape347.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape348.around.x, bbcShape348.around.y);
ctx.rotate(bbcShape348.rotation * Math.PI / 180);
ctx.translate(-bbcShape348.around.x, -bbcShape348.around.y);
ctx.beginPath();
ctx.rect(bbcShape348.point.x, bbcShape348.point.y, bbcShape348.size.width, bbcShape348.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape349.around.x, bbcShape349.around.y);
ctx.rotate(bbcShape349.rotation * Math.PI / 180);
ctx.translate(-bbcShape349.around.x, -bbcShape349.around.y);
ctx.beginPath();
ctx.rect(bbcShape349.point.x, bbcShape349.point.y, bbcShape349.size.width, bbcShape349.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape350.around.x, bbcShape350.around.y);
ctx.rotate(bbcShape350.rotation * Math.PI / 180);
ctx.translate(-bbcShape350.around.x, -bbcShape350.around.y);
ctx.beginPath();
ctx.rect(bbcShape350.point.x, bbcShape350.point.y, bbcShape350.size.width, bbcShape350.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape351.around.x, bbcShape351.around.y);
ctx.rotate(bbcShape351.rotation * Math.PI / 180);
ctx.translate(-bbcShape351.around.x, -bbcShape351.around.y);
ctx.beginPath();
ctx.rect(bbcShape351.point.x, bbcShape351.point.y, bbcShape351.size.width, bbcShape351.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape352.around.x, bbcShape352.around.y);
ctx.rotate(bbcShape352.rotation * Math.PI / 180);
ctx.translate(-bbcShape352.around.x, -bbcShape352.around.y);
ctx.beginPath();
ctx.rect(bbcShape352.point.x, bbcShape352.point.y, bbcShape352.size.width, bbcShape352.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape353.around.x, bbcShape353.around.y);
ctx.rotate(bbcShape353.rotation * Math.PI / 180);
ctx.translate(-bbcShape353.around.x, -bbcShape353.around.y);
ctx.beginPath();
ctx.rect(bbcShape353.point.x, bbcShape353.point.y, bbcShape353.size.width, bbcShape353.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape354.around.x, bbcShape354.around.y);
ctx.rotate(bbcShape354.rotation * Math.PI / 180);
ctx.translate(-bbcShape354.around.x, -bbcShape354.around.y);
ctx.beginPath();
ctx.rect(bbcShape354.point.x, bbcShape354.point.y, bbcShape354.size.width, bbcShape354.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape355.around.x, bbcShape355.around.y);
ctx.rotate(bbcShape355.rotation * Math.PI / 180);
ctx.translate(-bbcShape355.around.x, -bbcShape355.around.y);
ctx.beginPath();
ctx.rect(bbcShape355.point.x, bbcShape355.point.y, bbcShape355.size.width, bbcShape355.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape356.around.x, bbcShape356.around.y);
ctx.rotate(bbcShape356.rotation * Math.PI / 180);
ctx.translate(-bbcShape356.around.x, -bbcShape356.around.y);
ctx.beginPath();
ctx.rect(bbcShape356.point.x, bbcShape356.point.y, bbcShape356.size.width, bbcShape356.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape357.around.x, bbcShape357.around.y);
ctx.rotate(bbcShape357.rotation * Math.PI / 180);
ctx.translate(-bbcShape357.around.x, -bbcShape357.around.y);
ctx.beginPath();
ctx.rect(bbcShape357.point.x, bbcShape357.point.y, bbcShape357.size.width, bbcShape357.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(425.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape358.around.x, bbcShape358.around.y);
ctx.rotate(bbcShape358.rotation * Math.PI / 180);
ctx.translate(-bbcShape358.around.x, -bbcShape358.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape358.points[0][0], bbcShape358.points[0][1]);
ctx.lineTo(bbcShape358.points[1][0], bbcShape358.points[1][1]);
ctx.lineTo(bbcShape358.points[2][0], bbcShape358.points[2][1]);
ctx.lineTo(bbcShape358.points[3][0], bbcShape358.points[3][1]);
ctx.lineTo(bbcShape358.points[4][0], bbcShape358.points[4][1]);
ctx.lineTo(bbcShape358.points[5][0], bbcShape358.points[5][1]);
ctx.lineTo(bbcShape358.points[6][0], bbcShape358.points[6][1]);
ctx.lineTo(bbcShape358.points[7][0], bbcShape358.points[7][1]);
ctx.lineTo(bbcShape358.points[8][0], bbcShape358.points[8][1]);
ctx.lineTo(bbcShape358.points[9][0], bbcShape358.points[9][1]);
ctx.lineTo(bbcShape358.points[10][0], bbcShape358.points[10][1]);
ctx.lineTo(bbcShape358.points[11][0], bbcShape358.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape359.around.x, bbcShape359.around.y);
ctx.rotate(bbcShape359.rotation * Math.PI / 180);
ctx.translate(-bbcShape359.around.x, -bbcShape359.around.y);
ctx.beginPath();
ctx.rect(bbcShape359.point.x, bbcShape359.point.y, bbcShape359.size.width, bbcShape359.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape360.around.x, bbcShape360.around.y);
ctx.rotate(bbcShape360.rotation * Math.PI / 180);
ctx.translate(-bbcShape360.around.x, -bbcShape360.around.y);
ctx.beginPath();
ctx.rect(bbcShape360.point.x, bbcShape360.point.y, bbcShape360.size.width, bbcShape360.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape361.around.x, bbcShape361.around.y);
ctx.rotate(bbcShape361.rotation * Math.PI / 180);
ctx.translate(-bbcShape361.around.x, -bbcShape361.around.y);
ctx.beginPath();
ctx.rect(bbcShape361.point.x, bbcShape361.point.y, bbcShape361.size.width, bbcShape361.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape362.around.x, bbcShape362.around.y);
ctx.rotate(bbcShape362.rotation * Math.PI / 180);
ctx.translate(-bbcShape362.around.x, -bbcShape362.around.y);
ctx.beginPath();
ctx.rect(bbcShape362.point.x, bbcShape362.point.y, bbcShape362.size.width, bbcShape362.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape363.around.x, bbcShape363.around.y);
ctx.rotate(bbcShape363.rotation * Math.PI / 180);
ctx.translate(-bbcShape363.around.x, -bbcShape363.around.y);
ctx.beginPath();
ctx.rect(bbcShape363.point.x, bbcShape363.point.y, bbcShape363.size.width, bbcShape363.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape364.around.x, bbcShape364.around.y);
ctx.rotate(bbcShape364.rotation * Math.PI / 180);
ctx.translate(-bbcShape364.around.x, -bbcShape364.around.y);
ctx.beginPath();
ctx.rect(bbcShape364.point.x, bbcShape364.point.y, bbcShape364.size.width, bbcShape364.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape365.around.x, bbcShape365.around.y);
ctx.rotate(bbcShape365.rotation * Math.PI / 180);
ctx.translate(-bbcShape365.around.x, -bbcShape365.around.y);
ctx.beginPath();
ctx.rect(bbcShape365.point.x, bbcShape365.point.y, bbcShape365.size.width, bbcShape365.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape366.around.x, bbcShape366.around.y);
ctx.rotate(bbcShape366.rotation * Math.PI / 180);
ctx.translate(-bbcShape366.around.x, -bbcShape366.around.y);
ctx.beginPath();
ctx.rect(bbcShape366.point.x, bbcShape366.point.y, bbcShape366.size.width, bbcShape366.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape367.around.x, bbcShape367.around.y);
ctx.rotate(bbcShape367.rotation * Math.PI / 180);
ctx.translate(-bbcShape367.around.x, -bbcShape367.around.y);
ctx.beginPath();
ctx.rect(bbcShape367.point.x, bbcShape367.point.y, bbcShape367.size.width, bbcShape367.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape368.around.x, bbcShape368.around.y);
ctx.rotate(bbcShape368.rotation * Math.PI / 180);
ctx.translate(-bbcShape368.around.x, -bbcShape368.around.y);
ctx.beginPath();
ctx.rect(bbcShape368.point.x, bbcShape368.point.y, bbcShape368.size.width, bbcShape368.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape369.around.x, bbcShape369.around.y);
ctx.rotate(bbcShape369.rotation * Math.PI / 180);
ctx.translate(-bbcShape369.around.x, -bbcShape369.around.y);
ctx.beginPath();
ctx.rect(bbcShape369.point.x, bbcShape369.point.y, bbcShape369.size.width, bbcShape369.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape370.around.x, bbcShape370.around.y);
ctx.rotate(bbcShape370.rotation * Math.PI / 180);
ctx.translate(-bbcShape370.around.x, -bbcShape370.around.y);
ctx.beginPath();
ctx.rect(bbcShape370.point.x, bbcShape370.point.y, bbcShape370.size.width, bbcShape370.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape371.around.x, bbcShape371.around.y);
ctx.rotate(bbcShape371.rotation * Math.PI / 180);
ctx.translate(-bbcShape371.around.x, -bbcShape371.around.y);
ctx.beginPath();
ctx.rect(bbcShape371.point.x, bbcShape371.point.y, bbcShape371.size.width, bbcShape371.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape372.around.x, bbcShape372.around.y);
ctx.rotate(bbcShape372.rotation * Math.PI / 180);
ctx.translate(-bbcShape372.around.x, -bbcShape372.around.y);
ctx.beginPath();
ctx.rect(bbcShape372.point.x, bbcShape372.point.y, bbcShape372.size.width, bbcShape372.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape373.around.x, bbcShape373.around.y);
ctx.rotate(bbcShape373.rotation * Math.PI / 180);
ctx.translate(-bbcShape373.around.x, -bbcShape373.around.y);
ctx.beginPath();
ctx.rect(bbcShape373.point.x, bbcShape373.point.y, bbcShape373.size.width, bbcShape373.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape374.around.x, bbcShape374.around.y);
ctx.rotate(bbcShape374.rotation * Math.PI / 180);
ctx.translate(-bbcShape374.around.x, -bbcShape374.around.y);
ctx.beginPath();
ctx.rect(bbcShape374.point.x, bbcShape374.point.y, bbcShape374.size.width, bbcShape374.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape375.around.x, bbcShape375.around.y);
ctx.rotate(bbcShape375.rotation * Math.PI / 180);
ctx.translate(-bbcShape375.around.x, -bbcShape375.around.y);
ctx.beginPath();
ctx.rect(bbcShape375.point.x, bbcShape375.point.y, bbcShape375.size.width, bbcShape375.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape376.around.x, bbcShape376.around.y);
ctx.rotate(bbcShape376.rotation * Math.PI / 180);
ctx.translate(-bbcShape376.around.x, -bbcShape376.around.y);
ctx.beginPath();
ctx.rect(bbcShape376.point.x, bbcShape376.point.y, bbcShape376.size.width, bbcShape376.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape377.around.x, bbcShape377.around.y);
ctx.rotate(bbcShape377.rotation * Math.PI / 180);
ctx.translate(-bbcShape377.around.x, -bbcShape377.around.y);
ctx.beginPath();
ctx.rect(bbcShape377.point.x, bbcShape377.point.y, bbcShape377.size.width, bbcShape377.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape378.around.x, bbcShape378.around.y);
ctx.rotate(bbcShape378.rotation * Math.PI / 180);
ctx.translate(-bbcShape378.around.x, -bbcShape378.around.y);
ctx.beginPath();
ctx.rect(bbcShape378.point.x, bbcShape378.point.y, bbcShape378.size.width, bbcShape378.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(450.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape379.around.x, bbcShape379.around.y);
ctx.rotate(bbcShape379.rotation * Math.PI / 180);
ctx.translate(-bbcShape379.around.x, -bbcShape379.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape379.points[0][0], bbcShape379.points[0][1]);
ctx.lineTo(bbcShape379.points[1][0], bbcShape379.points[1][1]);
ctx.lineTo(bbcShape379.points[2][0], bbcShape379.points[2][1]);
ctx.lineTo(bbcShape379.points[3][0], bbcShape379.points[3][1]);
ctx.lineTo(bbcShape379.points[4][0], bbcShape379.points[4][1]);
ctx.lineTo(bbcShape379.points[5][0], bbcShape379.points[5][1]);
ctx.lineTo(bbcShape379.points[6][0], bbcShape379.points[6][1]);
ctx.lineTo(bbcShape379.points[7][0], bbcShape379.points[7][1]);
ctx.lineTo(bbcShape379.points[8][0], bbcShape379.points[8][1]);
ctx.lineTo(bbcShape379.points[9][0], bbcShape379.points[9][1]);
ctx.lineTo(bbcShape379.points[10][0], bbcShape379.points[10][1]);
ctx.lineTo(bbcShape379.points[11][0], bbcShape379.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape380.around.x, bbcShape380.around.y);
ctx.rotate(bbcShape380.rotation * Math.PI / 180);
ctx.translate(-bbcShape380.around.x, -bbcShape380.around.y);
ctx.beginPath();
ctx.rect(bbcShape380.point.x, bbcShape380.point.y, bbcShape380.size.width, bbcShape380.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape381.around.x, bbcShape381.around.y);
ctx.rotate(bbcShape381.rotation * Math.PI / 180);
ctx.translate(-bbcShape381.around.x, -bbcShape381.around.y);
ctx.beginPath();
ctx.rect(bbcShape381.point.x, bbcShape381.point.y, bbcShape381.size.width, bbcShape381.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape382.around.x, bbcShape382.around.y);
ctx.rotate(bbcShape382.rotation * Math.PI / 180);
ctx.translate(-bbcShape382.around.x, -bbcShape382.around.y);
ctx.beginPath();
ctx.rect(bbcShape382.point.x, bbcShape382.point.y, bbcShape382.size.width, bbcShape382.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape383.around.x, bbcShape383.around.y);
ctx.rotate(bbcShape383.rotation * Math.PI / 180);
ctx.translate(-bbcShape383.around.x, -bbcShape383.around.y);
ctx.beginPath();
ctx.rect(bbcShape383.point.x, bbcShape383.point.y, bbcShape383.size.width, bbcShape383.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape384.around.x, bbcShape384.around.y);
ctx.rotate(bbcShape384.rotation * Math.PI / 180);
ctx.translate(-bbcShape384.around.x, -bbcShape384.around.y);
ctx.beginPath();
ctx.rect(bbcShape384.point.x, bbcShape384.point.y, bbcShape384.size.width, bbcShape384.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape385.around.x, bbcShape385.around.y);
ctx.rotate(bbcShape385.rotation * Math.PI / 180);
ctx.translate(-bbcShape385.around.x, -bbcShape385.around.y);
ctx.beginPath();
ctx.rect(bbcShape385.point.x, bbcShape385.point.y, bbcShape385.size.width, bbcShape385.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape386.around.x, bbcShape386.around.y);
ctx.rotate(bbcShape386.rotation * Math.PI / 180);
ctx.translate(-bbcShape386.around.x, -bbcShape386.around.y);
ctx.beginPath();
ctx.rect(bbcShape386.point.x, bbcShape386.point.y, bbcShape386.size.width, bbcShape386.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape387.around.x, bbcShape387.around.y);
ctx.rotate(bbcShape387.rotation * Math.PI / 180);
ctx.translate(-bbcShape387.around.x, -bbcShape387.around.y);
ctx.beginPath();
ctx.rect(bbcShape387.point.x, bbcShape387.point.y, bbcShape387.size.width, bbcShape387.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape388.around.x, bbcShape388.around.y);
ctx.rotate(bbcShape388.rotation * Math.PI / 180);
ctx.translate(-bbcShape388.around.x, -bbcShape388.around.y);
ctx.beginPath();
ctx.rect(bbcShape388.point.x, bbcShape388.point.y, bbcShape388.size.width, bbcShape388.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape389.around.x, bbcShape389.around.y);
ctx.rotate(bbcShape389.rotation * Math.PI / 180);
ctx.translate(-bbcShape389.around.x, -bbcShape389.around.y);
ctx.beginPath();
ctx.rect(bbcShape389.point.x, bbcShape389.point.y, bbcShape389.size.width, bbcShape389.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape390.around.x, bbcShape390.around.y);
ctx.rotate(bbcShape390.rotation * Math.PI / 180);
ctx.translate(-bbcShape390.around.x, -bbcShape390.around.y);
ctx.beginPath();
ctx.rect(bbcShape390.point.x, bbcShape390.point.y, bbcShape390.size.width, bbcShape390.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape391.around.x, bbcShape391.around.y);
ctx.rotate(bbcShape391.rotation * Math.PI / 180);
ctx.translate(-bbcShape391.around.x, -bbcShape391.around.y);
ctx.beginPath();
ctx.rect(bbcShape391.point.x, bbcShape391.point.y, bbcShape391.size.width, bbcShape391.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape392.around.x, bbcShape392.around.y);
ctx.rotate(bbcShape392.rotation * Math.PI / 180);
ctx.translate(-bbcShape392.around.x, -bbcShape392.around.y);
ctx.beginPath();
ctx.rect(bbcShape392.point.x, bbcShape392.point.y, bbcShape392.size.width, bbcShape392.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape393.around.x, bbcShape393.around.y);
ctx.rotate(bbcShape393.rotation * Math.PI / 180);
ctx.translate(-bbcShape393.around.x, -bbcShape393.around.y);
ctx.beginPath();
ctx.rect(bbcShape393.point.x, bbcShape393.point.y, bbcShape393.size.width, bbcShape393.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape394.around.x, bbcShape394.around.y);
ctx.rotate(bbcShape394.rotation * Math.PI / 180);
ctx.translate(-bbcShape394.around.x, -bbcShape394.around.y);
ctx.beginPath();
ctx.rect(bbcShape394.point.x, bbcShape394.point.y, bbcShape394.size.width, bbcShape394.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape395.around.x, bbcShape395.around.y);
ctx.rotate(bbcShape395.rotation * Math.PI / 180);
ctx.translate(-bbcShape395.around.x, -bbcShape395.around.y);
ctx.beginPath();
ctx.rect(bbcShape395.point.x, bbcShape395.point.y, bbcShape395.size.width, bbcShape395.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape396.around.x, bbcShape396.around.y);
ctx.rotate(bbcShape396.rotation * Math.PI / 180);
ctx.translate(-bbcShape396.around.x, -bbcShape396.around.y);
ctx.beginPath();
ctx.rect(bbcShape396.point.x, bbcShape396.point.y, bbcShape396.size.width, bbcShape396.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape397.around.x, bbcShape397.around.y);
ctx.rotate(bbcShape397.rotation * Math.PI / 180);
ctx.translate(-bbcShape397.around.x, -bbcShape397.around.y);
ctx.beginPath();
ctx.rect(bbcShape397.point.x, bbcShape397.point.y, bbcShape397.size.width, bbcShape397.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape398.around.x, bbcShape398.around.y);
ctx.rotate(bbcShape398.rotation * Math.PI / 180);
ctx.translate(-bbcShape398.around.x, -bbcShape398.around.y);
ctx.beginPath();
ctx.rect(bbcShape398.point.x, bbcShape398.point.y, bbcShape398.size.width, bbcShape398.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape399.around.x, bbcShape399.around.y);
ctx.rotate(bbcShape399.rotation * Math.PI / 180);
ctx.translate(-bbcShape399.around.x, -bbcShape399.around.y);
ctx.beginPath();
ctx.rect(bbcShape399.point.x, bbcShape399.point.y, bbcShape399.size.width, bbcShape399.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(475.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape400.around.x, bbcShape400.around.y);
ctx.rotate(bbcShape400.rotation * Math.PI / 180);
ctx.translate(-bbcShape400.around.x, -bbcShape400.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape400.points[0][0], bbcShape400.points[0][1]);
ctx.lineTo(bbcShape400.points[1][0], bbcShape400.points[1][1]);
ctx.lineTo(bbcShape400.points[2][0], bbcShape400.points[2][1]);
ctx.lineTo(bbcShape400.points[3][0], bbcShape400.points[3][1]);
ctx.lineTo(bbcShape400.points[4][0], bbcShape400.points[4][1]);
ctx.lineTo(bbcShape400.points[5][0], bbcShape400.points[5][1]);
ctx.lineTo(bbcShape400.points[6][0], bbcShape400.points[6][1]);
ctx.lineTo(bbcShape400.points[7][0], bbcShape400.points[7][1]);
ctx.lineTo(bbcShape400.points[8][0], bbcShape400.points[8][1]);
ctx.lineTo(bbcShape400.points[9][0], bbcShape400.points[9][1]);
ctx.lineTo(bbcShape400.points[10][0], bbcShape400.points[10][1]);
ctx.lineTo(bbcShape400.points[11][0], bbcShape400.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape401.around.x, bbcShape401.around.y);
ctx.rotate(bbcShape401.rotation * Math.PI / 180);
ctx.translate(-bbcShape401.around.x, -bbcShape401.around.y);
ctx.beginPath();
ctx.rect(bbcShape401.point.x, bbcShape401.point.y, bbcShape401.size.width, bbcShape401.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape402.around.x, bbcShape402.around.y);
ctx.rotate(bbcShape402.rotation * Math.PI / 180);
ctx.translate(-bbcShape402.around.x, -bbcShape402.around.y);
ctx.beginPath();
ctx.rect(bbcShape402.point.x, bbcShape402.point.y, bbcShape402.size.width, bbcShape402.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape403.around.x, bbcShape403.around.y);
ctx.rotate(bbcShape403.rotation * Math.PI / 180);
ctx.translate(-bbcShape403.around.x, -bbcShape403.around.y);
ctx.beginPath();
ctx.rect(bbcShape403.point.x, bbcShape403.point.y, bbcShape403.size.width, bbcShape403.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape404.around.x, bbcShape404.around.y);
ctx.rotate(bbcShape404.rotation * Math.PI / 180);
ctx.translate(-bbcShape404.around.x, -bbcShape404.around.y);
ctx.beginPath();
ctx.rect(bbcShape404.point.x, bbcShape404.point.y, bbcShape404.size.width, bbcShape404.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape405.around.x, bbcShape405.around.y);
ctx.rotate(bbcShape405.rotation * Math.PI / 180);
ctx.translate(-bbcShape405.around.x, -bbcShape405.around.y);
ctx.beginPath();
ctx.rect(bbcShape405.point.x, bbcShape405.point.y, bbcShape405.size.width, bbcShape405.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape406.around.x, bbcShape406.around.y);
ctx.rotate(bbcShape406.rotation * Math.PI / 180);
ctx.translate(-bbcShape406.around.x, -bbcShape406.around.y);
ctx.beginPath();
ctx.rect(bbcShape406.point.x, bbcShape406.point.y, bbcShape406.size.width, bbcShape406.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape407.around.x, bbcShape407.around.y);
ctx.rotate(bbcShape407.rotation * Math.PI / 180);
ctx.translate(-bbcShape407.around.x, -bbcShape407.around.y);
ctx.beginPath();
ctx.rect(bbcShape407.point.x, bbcShape407.point.y, bbcShape407.size.width, bbcShape407.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape408.around.x, bbcShape408.around.y);
ctx.rotate(bbcShape408.rotation * Math.PI / 180);
ctx.translate(-bbcShape408.around.x, -bbcShape408.around.y);
ctx.beginPath();
ctx.rect(bbcShape408.point.x, bbcShape408.point.y, bbcShape408.size.width, bbcShape408.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape409.around.x, bbcShape409.around.y);
ctx.rotate(bbcShape409.rotation * Math.PI / 180);
ctx.translate(-bbcShape409.around.x, -bbcShape409.around.y);
ctx.beginPath();
ctx.rect(bbcShape409.point.x, bbcShape409.point.y, bbcShape409.size.width, bbcShape409.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape410.around.x, bbcShape410.around.y);
ctx.rotate(bbcShape410.rotation * Math.PI / 180);
ctx.translate(-bbcShape410.around.x, -bbcShape410.around.y);
ctx.beginPath();
ctx.rect(bbcShape410.point.x, bbcShape410.point.y, bbcShape410.size.width, bbcShape410.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape411.around.x, bbcShape411.around.y);
ctx.rotate(bbcShape411.rotation * Math.PI / 180);
ctx.translate(-bbcShape411.around.x, -bbcShape411.around.y);
ctx.beginPath();
ctx.rect(bbcShape411.point.x, bbcShape411.point.y, bbcShape411.size.width, bbcShape411.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape412.around.x, bbcShape412.around.y);
ctx.rotate(bbcShape412.rotation * Math.PI / 180);
ctx.translate(-bbcShape412.around.x, -bbcShape412.around.y);
ctx.beginPath();
ctx.rect(bbcShape412.point.x, bbcShape412.point.y, bbcShape412.size.width, bbcShape412.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape413.around.x, bbcShape413.around.y);
ctx.rotate(bbcShape413.rotation * Math.PI / 180);
ctx.translate(-bbcShape413.around.x, -bbcShape413.around.y);
ctx.beginPath();
ctx.rect(bbcShape413.point.x, bbcShape413.point.y, bbcShape413.size.width, bbcShape413.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape414.around.x, bbcShape414.around.y);
ctx.rotate(bbcShape414.rotation * Math.PI / 180);
ctx.translate(-bbcShape414.around.x, -bbcShape414.around.y);
ctx.beginPath();
ctx.rect(bbcShape414.point.x, bbcShape414.point.y, bbcShape414.size.width, bbcShape414.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape415.around.x, bbcShape415.around.y);
ctx.rotate(bbcShape415.rotation * Math.PI / 180);
ctx.translate(-bbcShape415.around.x, -bbcShape415.around.y);
ctx.beginPath();
ctx.rect(bbcShape415.point.x, bbcShape415.point.y, bbcShape415.size.width, bbcShape415.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape416.around.x, bbcShape416.around.y);
ctx.rotate(bbcShape416.rotation * Math.PI / 180);
ctx.translate(-bbcShape416.around.x, -bbcShape416.around.y);
ctx.beginPath();
ctx.rect(bbcShape416.point.x, bbcShape416.point.y, bbcShape416.size.width, bbcShape416.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape417.around.x, bbcShape417.around.y);
ctx.rotate(bbcShape417.rotation * Math.PI / 180);
ctx.translate(-bbcShape417.around.x, -bbcShape417.around.y);
ctx.beginPath();
ctx.rect(bbcShape417.point.x, bbcShape417.point.y, bbcShape417.size.width, bbcShape417.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape418.around.x, bbcShape418.around.y);
ctx.rotate(bbcShape418.rotation * Math.PI / 180);
ctx.translate(-bbcShape418.around.x, -bbcShape418.around.y);
ctx.beginPath();
ctx.rect(bbcShape418.point.x, bbcShape418.point.y, bbcShape418.size.width, bbcShape418.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape419.around.x, bbcShape419.around.y);
ctx.rotate(bbcShape419.rotation * Math.PI / 180);
ctx.translate(-bbcShape419.around.x, -bbcShape419.around.y);
ctx.beginPath();
ctx.rect(bbcShape419.point.x, bbcShape419.point.y, bbcShape419.size.width, bbcShape419.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape420.around.x, bbcShape420.around.y);
ctx.rotate(bbcShape420.rotation * Math.PI / 180);
ctx.translate(-bbcShape420.around.x, -bbcShape420.around.y);
ctx.beginPath();
ctx.rect(bbcShape420.point.x, bbcShape420.point.y, bbcShape420.size.width, bbcShape420.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}
