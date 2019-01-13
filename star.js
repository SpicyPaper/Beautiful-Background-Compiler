
window.onload = function() {

canvas = document.getElementById('bbcCanvas');

BACKGROUND_SIZE = {
    width:window.innerWidth,
    height:window.innerHeight
}


ctx = canvas.getContext('2d');
BACKGROUND_COLOR = 'rgb(255, 255, 255)';

bbcInit();
bbcUpdate();

canvas.width = BACKGROUND_SIZE.width;
canvas.height = BACKGROUND_SIZE.height;

}

function bbcInit() {
start = Date.now();
updateTime = 1000 * 50;

BACKGROUND_COLOR = 
ctx.fillStyle = 'rgb(0.0, 0.0, 0.0)';
;

bbcShape1 = {
    points:[[0.0, 0.0], [800.0, 0.0], [600.0, 300.0], [800.0, 500.0], [600.0, 700.0], [0.0, 700.0]],
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

bbcShape2 = {
    points:[[800.0, 0.0], [600.0, 300.0], [800.0, 500.0], [600.0, 700.0], [650.0, 700.0], [850.0, 500.0], [650.0, 300.0], [850.0, 0.0]],
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

bbcShape3 = {
    point:{
    x:1480,
    y:205
},
    radius:5.0,
    color:{
    r:115,
    g:33,
    b:204
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape4 = {
    point:{
    x:718,
    y:51
},
    radius:5.0,
    color:{
    r:58,
    g:25,
    b:131
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape5 = {
    point:{
    x:906,
    y:622
},
    radius:5.0,
    color:{
    r:236,
    g:247,
    b:131
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape6 = {
    point:{
    x:1680,
    y:168
},
    radius:5.0,
    color:{
    r:204,
    g:86,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape7 = {
    point:{
    x:1240,
    y:1070
},
    radius:5.0,
    color:{
    r:192,
    g:25,
    b:91
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape8 = {
    point:{
    x:1736,
    y:987
},
    radius:5.0,
    color:{
    r:109,
    g:145,
    b:97
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape9 = {
    point:{
    x:276,
    y:101
},
    radius:5.0,
    color:{
    r:105,
    g:254,
    b:142
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape10 = {
    point:{
    x:1853,
    y:96
},
    radius:5.0,
    color:{
    r:73,
    g:223,
    b:171
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape11 = {
    point:{
    x:552,
    y:902
},
    radius:5.0,
    color:{
    r:11,
    g:147,
    b:161
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape12 = {
    point:{
    x:847,
    y:973
},
    radius:5.0,
    color:{
    r:98,
    g:222,
    b:114
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape13 = {
    point:{
    x:835,
    y:629
},
    radius:5.0,
    color:{
    r:209,
    g:222,
    b:40
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape14 = {
    point:{
    x:663,
    y:811
},
    radius:5.0,
    color:{
    r:156,
    g:32,
    b:145
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape15 = {
    point:{
    x:1091,
    y:511
},
    radius:5.0,
    color:{
    r:115,
    g:138,
    b:62
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape16 = {
    point:{
    x:244,
    y:188
},
    radius:5.0,
    color:{
    r:255,
    g:209,
    b:1
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape17 = {
    point:{
    x:522,
    y:565
},
    radius:5.0,
    color:{
    r:99,
    g:103,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape18 = {
    point:{
    x:404,
    y:279
},
    radius:5.0,
    color:{
    r:202,
    g:167,
    b:134
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape19 = {
    point:{
    x:658,
    y:658
},
    radius:5.0,
    color:{
    r:131,
    g:98,
    b:104
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape20 = {
    point:{
    x:1125,
    y:297
},
    radius:5.0,
    color:{
    r:205,
    g:32,
    b:37
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape21 = {
    point:{
    x:1645,
    y:313
},
    radius:5.0,
    color:{
    r:118,
    g:254,
    b:248
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape22 = {
    point:{
    x:696,
    y:741
},
    radius:5.0,
    color:{
    r:118,
    g:175,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape23 = {
    point:{
    x:738,
    y:555
},
    radius:5.0,
    color:{
    r:242,
    g:16,
    b:161
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape24 = {
    point:{
    x:600,
    y:373
},
    radius:5.0,
    color:{
    r:83,
    g:72,
    b:252
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape25 = {
    point:{
    x:725,
    y:212
},
    radius:5.0,
    color:{
    r:14,
    g:37,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape26 = {
    point:{
    x:1641,
    y:24
},
    radius:5.0,
    color:{
    r:151,
    g:212,
    b:117
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape27 = {
    point:{
    x:1491,
    y:1008
},
    radius:5.0,
    color:{
    r:218,
    g:124,
    b:75
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape28 = {
    point:{
    x:724,
    y:626
},
    radius:5.0,
    color:{
    r:214,
    g:116,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape29 = {
    point:{
    x:1261,
    y:904
},
    radius:5.0,
    color:{
    r:16,
    g:111,
    b:88
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape30 = {
    point:{
    x:225,
    y:73
},
    radius:5.0,
    color:{
    r:156,
    g:145,
    b:102
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape31 = {
    point:{
    x:404,
    y:667
},
    radius:5.0,
    color:{
    r:208,
    g:196,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape32 = {
    point:{
    x:229,
    y:670
},
    radius:5.0,
    color:{
    r:250,
    g:34,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape33 = {
    point:{
    x:568,
    y:850
},
    radius:5.0,
    color:{
    r:214,
    g:28,
    b:66
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape34 = {
    point:{
    x:1135,
    y:423
},
    radius:5.0,
    color:{
    r:241,
    g:237,
    b:30
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape35 = {
    point:{
    x:539,
    y:574
},
    radius:5.0,
    color:{
    r:119,
    g:104,
    b:208
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape36 = {
    point:{
    x:208,
    y:925
},
    radius:5.0,
    color:{
    r:51,
    g:64,
    b:191
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape37 = {
    point:{
    x:129,
    y:774
},
    radius:5.0,
    color:{
    r:217,
    g:224,
    b:226
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape38 = {
    point:{
    x:835,
    y:989
},
    radius:5.0,
    color:{
    r:225,
    g:200,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape39 = {
    point:{
    x:737,
    y:649
},
    radius:5.0,
    color:{
    r:118,
    g:8,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape40 = {
    point:{
    x:1053,
    y:103
},
    radius:5.0,
    color:{
    r:60,
    g:31,
    b:2
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape41 = {
    point:{
    x:1539,
    y:365
},
    radius:5.0,
    color:{
    r:179,
    g:175,
    b:23
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape42 = {
    point:{
    x:1679,
    y:671
},
    radius:5.0,
    color:{
    r:1,
    g:9,
    b:34
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape43 = {
    point:{
    x:1261,
    y:607
},
    radius:5.0,
    color:{
    r:9,
    g:221,
    b:230
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape44 = {
    point:{
    x:767,
    y:75
},
    radius:5.0,
    color:{
    r:134,
    g:198,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape45 = {
    point:{
    x:1001,
    y:1071
},
    radius:5.0,
    color:{
    r:165,
    g:120,
    b:47
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape46 = {
    point:{
    x:549,
    y:1073
},
    radius:5.0,
    color:{
    r:155,
    g:19,
    b:141
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape47 = {
    point:{
    x:370,
    y:963
},
    radius:5.0,
    color:{
    r:125,
    g:102,
    b:111
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape48 = {
    point:{
    x:222,
    y:36
},
    radius:5.0,
    color:{
    r:95,
    g:177,
    b:39
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape49 = {
    point:{
    x:812,
    y:218
},
    radius:5.0,
    color:{
    r:166,
    g:151,
    b:21
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape50 = {
    point:{
    x:744,
    y:580
},
    radius:5.0,
    color:{
    r:173,
    g:164,
    b:253
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape51 = {
    point:{
    x:800,
    y:69
},
    radius:5.0,
    color:{
    r:11,
    g:189,
    b:78
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape52 = {
    point:{
    x:763,
    y:73
},
    radius:5.0,
    color:{
    r:140,
    g:24,
    b:90
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape53 = {
    point:{
    x:1064,
    y:496
},
    radius:5.0,
    color:{
    r:76,
    g:103,
    b:92
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape54 = {
    point:{
    x:496,
    y:632
},
    radius:5.0,
    color:{
    r:38,
    g:135,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape55 = {
    point:{
    x:140,
    y:1028
},
    radius:5.0,
    color:{
    r:101,
    g:199,
    b:21
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape56 = {
    point:{
    x:1685,
    y:181
},
    radius:5.0,
    color:{
    r:200,
    g:97,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape57 = {
    point:{
    x:1523,
    y:1042
},
    radius:5.0,
    color:{
    r:87,
    g:204,
    b:82
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape58 = {
    point:{
    x:1395,
    y:907
},
    radius:5.0,
    color:{
    r:188,
    g:174,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape59 = {
    point:{
    x:1590,
    y:918
},
    radius:5.0,
    color:{
    r:77,
    g:18,
    b:72
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape60 = {
    point:{
    x:526,
    y:782
},
    radius:5.0,
    color:{
    r:99,
    g:86,
    b:193
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape61 = {
    point:{
    x:1806,
    y:922
},
    radius:5.0,
    color:{
    r:215,
    g:222,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape62 = {
    point:{
    x:322,
    y:448
},
    radius:5.0,
    color:{
    r:194,
    g:31,
    b:29
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape63 = {
    point:{
    x:1040,
    y:1059
},
    radius:5.0,
    color:{
    r:219,
    g:75,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape64 = {
    point:{
    x:622,
    y:392
},
    radius:5.0,
    color:{
    r:224,
    g:82,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape65 = {
    point:{
    x:79,
    y:475
},
    radius:5.0,
    color:{
    r:33,
    g:87,
    b:225
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape66 = {
    point:{
    x:512,
    y:227
},
    radius:5.0,
    color:{
    r:22,
    g:77,
    b:190
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape67 = {
    point:{
    x:355,
    y:542
},
    radius:5.0,
    color:{
    r:216,
    g:239,
    b:95
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape68 = {
    point:{
    x:208,
    y:950
},
    radius:5.0,
    color:{
    r:96,
    g:14,
    b:235
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape69 = {
    point:{
    x:1830,
    y:1074
},
    radius:5.0,
    color:{
    r:72,
    g:163,
    b:6
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape70 = {
    point:{
    x:26,
    y:598
},
    radius:5.0,
    color:{
    r:88,
    g:10,
    b:185
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape71 = {
    point:{
    x:727,
    y:833
},
    radius:5.0,
    color:{
    r:231,
    g:245,
    b:128
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape72 = {
    point:{
    x:859,
    y:498
},
    radius:5.0,
    color:{
    r:154,
    g:141,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape73 = {
    point:{
    x:1293,
    y:578
},
    radius:5.0,
    color:{
    r:190,
    g:191,
    b:215
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape74 = {
    point:{
    x:1712,
    y:279
},
    radius:5.0,
    color:{
    r:142,
    g:198,
    b:118
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape75 = {
    point:{
    x:1414,
    y:628
},
    radius:5.0,
    color:{
    r:255,
    g:162,
    b:128
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape76 = {
    point:{
    x:115,
    y:491
},
    radius:5.0,
    color:{
    r:27,
    g:58,
    b:30
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape77 = {
    point:{
    x:1,
    y:1068
},
    radius:5.0,
    color:{
    r:51,
    g:48,
    b:35
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape78 = {
    point:{
    x:494,
    y:655
},
    radius:5.0,
    color:{
    r:217,
    g:3,
    b:158
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape79 = {
    point:{
    x:1265,
    y:827
},
    radius:5.0,
    color:{
    r:115,
    g:207,
    b:240
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape80 = {
    point:{
    x:1364,
    y:456
},
    radius:5.0,
    color:{
    r:73,
    g:108,
    b:95
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape81 = {
    point:{
    x:1904,
    y:622
},
    radius:5.0,
    color:{
    r:164,
    g:159,
    b:228
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape82 = {
    point:{
    x:585,
    y:1031
},
    radius:5.0,
    color:{
    r:3,
    g:233,
    b:241
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape83 = {
    point:{
    x:57,
    y:875
},
    radius:5.0,
    color:{
    r:143,
    g:128,
    b:65
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape84 = {
    point:{
    x:1682,
    y:388
},
    radius:5.0,
    color:{
    r:72,
    g:254,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape85 = {
    point:{
    x:1329,
    y:866
},
    radius:5.0,
    color:{
    r:21,
    g:228,
    b:79
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape86 = {
    point:{
    x:797,
    y:855
},
    radius:5.0,
    color:{
    r:200,
    g:35,
    b:209
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape87 = {
    point:{
    x:1668,
    y:687
},
    radius:5.0,
    color:{
    r:147,
    g:237,
    b:241
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape88 = {
    point:{
    x:563,
    y:763
},
    radius:5.0,
    color:{
    r:95,
    g:25,
    b:231
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape89 = {
    point:{
    x:1538,
    y:367
},
    radius:5.0,
    color:{
    r:184,
    g:125,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape90 = {
    point:{
    x:495,
    y:192
},
    radius:5.0,
    color:{
    r:158,
    g:23,
    b:224
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape91 = {
    point:{
    x:786,
    y:285
},
    radius:5.0,
    color:{
    r:160,
    g:4,
    b:218
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape92 = {
    point:{
    x:385,
    y:895
},
    radius:5.0,
    color:{
    r:250,
    g:45,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape93 = {
    point:{
    x:758,
    y:573
},
    radius:5.0,
    color:{
    r:103,
    g:134,
    b:77
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape94 = {
    point:{
    x:848,
    y:74
},
    radius:5.0,
    color:{
    r:20,
    g:120,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape95 = {
    point:{
    x:1395,
    y:985
},
    radius:5.0,
    color:{
    r:101,
    g:203,
    b:56
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape96 = {
    point:{
    x:1210,
    y:872
},
    radius:5.0,
    color:{
    r:127,
    g:159,
    b:126
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape97 = {
    point:{
    x:1086,
    y:289
},
    radius:5.0,
    color:{
    r:41,
    g:229,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape98 = {
    point:{
    x:512,
    y:902
},
    radius:5.0,
    color:{
    r:170,
    g:249,
    b:58
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape99 = {
    point:{
    x:120,
    y:502
},
    radius:5.0,
    color:{
    r:208,
    g:129,
    b:64
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape100 = {
    point:{
    x:85,
    y:843
},
    radius:5.0,
    color:{
    r:120,
    g:79,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape101 = {
    point:{
    x:388,
    y:980
},
    radius:5.0,
    color:{
    r:14,
    g:253,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape102 = {
    point:{
    x:319,
    y:381
},
    radius:5.0,
    color:{
    r:20,
    g:190,
    b:97
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape103 = {
    point:{
    x:1133,
    y:479
},
    radius:5.0,
    color:{
    r:230,
    g:15,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape104 = {
    point:{
    x:727,
    y:687
},
    radius:5.0,
    color:{
    r:173,
    g:74,
    b:15
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape105 = {
    point:{
    x:1675,
    y:107
},
    radius:5.0,
    color:{
    r:130,
    g:168,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape106 = {
    point:{
    x:411,
    y:502
},
    radius:5.0,
    color:{
    r:198,
    g:215,
    b:86
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape107 = {
    point:{
    x:490,
    y:878
},
    radius:5.0,
    color:{
    r:2,
    g:225,
    b:91
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape108 = {
    point:{
    x:1076,
    y:610
},
    radius:5.0,
    color:{
    r:129,
    g:132,
    b:92
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape109 = {
    point:{
    x:1298,
    y:136
},
    radius:5.0,
    color:{
    r:124,
    g:62,
    b:187
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape110 = {
    point:{
    x:30,
    y:558
},
    radius:5.0,
    color:{
    r:158,
    g:242,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape111 = {
    point:{
    x:1695,
    y:116
},
    radius:5.0,
    color:{
    r:198,
    g:177,
    b:212
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape112 = {
    point:{
    x:697,
    y:3
},
    radius:5.0,
    color:{
    r:121,
    g:191,
    b:212
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape113 = {
    point:{
    x:530,
    y:397
},
    radius:5.0,
    color:{
    r:158,
    g:177,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape114 = {
    point:{
    x:820,
    y:31
},
    radius:5.0,
    color:{
    r:89,
    g:245,
    b:22
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape115 = {
    point:{
    x:1854,
    y:632
},
    radius:5.0,
    color:{
    r:112,
    g:83,
    b:166
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape116 = {
    point:{
    x:589,
    y:264
},
    radius:5.0,
    color:{
    r:17,
    g:119,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape117 = {
    point:{
    x:496,
    y:1049
},
    radius:5.0,
    color:{
    r:164,
    g:48,
    b:157
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape118 = {
    point:{
    x:557,
    y:548
},
    radius:5.0,
    color:{
    r:131,
    g:173,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape119 = {
    point:{
    x:519,
    y:871
},
    radius:5.0,
    color:{
    r:153,
    g:26,
    b:89
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape120 = {
    point:{
    x:248,
    y:1010
},
    radius:5.0,
    color:{
    r:124,
    g:53,
    b:11
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape121 = {
    point:{
    x:1761,
    y:671
},
    radius:5.0,
    color:{
    r:66,
    g:165,
    b:165
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape122 = {
    point:{
    x:1550,
    y:53
},
    radius:5.0,
    color:{
    r:95,
    g:12,
    b:187
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape123 = {
    point:{
    x:1282,
    y:673
},
    radius:5.0,
    color:{
    r:20,
    g:165,
    b:99
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape124 = {
    point:{
    x:1549,
    y:249
},
    radius:5.0,
    color:{
    r:58,
    g:27,
    b:30
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape125 = {
    point:{
    x:1871,
    y:575
},
    radius:5.0,
    color:{
    r:19,
    g:197,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape126 = {
    point:{
    x:216,
    y:1044
},
    radius:5.0,
    color:{
    r:114,
    g:21,
    b:253
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape127 = {
    point:{
    x:800,
    y:488
},
    radius:5.0,
    color:{
    r:212,
    g:222,
    b:99
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape128 = {
    point:{
    x:504,
    y:779
},
    radius:5.0,
    color:{
    r:189,
    g:68,
    b:216
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape129 = {
    point:{
    x:1050,
    y:367
},
    radius:5.0,
    color:{
    r:19,
    g:150,
    b:221
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape130 = {
    point:{
    x:1825,
    y:1022
},
    radius:5.0,
    color:{
    r:116,
    g:132,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape131 = {
    point:{
    x:203,
    y:426
},
    radius:5.0,
    color:{
    r:107,
    g:213,
    b:57
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape132 = {
    point:{
    x:743,
    y:783
},
    radius:5.0,
    color:{
    r:93,
    g:143,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape133 = {
    point:{
    x:256,
    y:154
},
    radius:5.0,
    color:{
    r:201,
    g:50,
    b:167
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape134 = {
    point:{
    x:607,
    y:256
},
    radius:5.0,
    color:{
    r:73,
    g:111,
    b:30
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape135 = {
    point:{
    x:1513,
    y:969
},
    radius:5.0,
    color:{
    r:116,
    g:39,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape136 = {
    point:{
    x:141,
    y:1002
},
    radius:5.0,
    color:{
    r:23,
    g:165,
    b:102
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape137 = {
    point:{
    x:1170,
    y:960
},
    radius:5.0,
    color:{
    r:109,
    g:76,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape138 = {
    point:{
    x:1335,
    y:820
},
    radius:5.0,
    color:{
    r:89,
    g:44,
    b:253
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape139 = {
    point:{
    x:1903,
    y:1068
},
    radius:5.0,
    color:{
    r:16,
    g:13,
    b:15
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape140 = {
    point:{
    x:1618,
    y:1061
},
    radius:5.0,
    color:{
    r:24,
    g:123,
    b:208
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape141 = {
    point:{
    x:1188,
    y:1012
},
    radius:5.0,
    color:{
    r:214,
    g:100,
    b:42
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape142 = {
    point:{
    x:803,
    y:938
},
    radius:5.0,
    color:{
    r:47,
    g:52,
    b:86
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape143 = {
    point:{
    x:1257,
    y:935
},
    radius:5.0,
    color:{
    r:135,
    g:220,
    b:9
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape144 = {
    point:{
    x:1672,
    y:580
},
    radius:5.0,
    color:{
    r:42,
    g:197,
    b:111
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape145 = {
    point:{
    x:346,
    y:637
},
    radius:5.0,
    color:{
    r:92,
    g:52,
    b:132
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape146 = {
    point:{
    x:1818,
    y:613
},
    radius:5.0,
    color:{
    r:17,
    g:77,
    b:157
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape147 = {
    point:{
    x:840,
    y:882
},
    radius:5.0,
    color:{
    r:30,
    g:110,
    b:212
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape148 = {
    point:{
    x:1200,
    y:904
},
    radius:5.0,
    color:{
    r:51,
    g:184,
    b:14
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape149 = {
    point:{
    x:883,
    y:876
},
    radius:5.0,
    color:{
    r:88,
    g:159,
    b:173
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape150 = {
    point:{
    x:1151,
    y:460
},
    radius:5.0,
    color:{
    r:143,
    g:122,
    b:229
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape151 = {
    point:{
    x:507,
    y:694
},
    radius:5.0,
    color:{
    r:93,
    g:118,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape152 = {
    point:{
    x:1384,
    y:183
},
    radius:5.0,
    color:{
    r:63,
    g:69,
    b:31
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape153 = {
    point:{
    x:419,
    y:1039
},
    radius:5.0,
    color:{
    r:125,
    g:73,
    b:196
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape154 = {
    point:{
    x:1750,
    y:433
},
    radius:5.0,
    color:{
    r:28,
    g:126,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape155 = {
    point:{
    x:590,
    y:386
},
    radius:5.0,
    color:{
    r:41,
    g:227,
    b:104
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape156 = {
    point:{
    x:1739,
    y:806
},
    radius:5.0,
    color:{
    r:64,
    g:253,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape157 = {
    point:{
    x:548,
    y:778
},
    radius:5.0,
    color:{
    r:97,
    g:66,
    b:172
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape158 = {
    point:{
    x:366,
    y:996
},
    radius:5.0,
    color:{
    r:85,
    g:39,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape159 = {
    point:{
    x:270,
    y:141
},
    radius:5.0,
    color:{
    r:249,
    g:32,
    b:170
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape160 = {
    point:{
    x:1677,
    y:562
},
    radius:5.0,
    color:{
    r:51,
    g:252,
    b:56
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape161 = {
    point:{
    x:1418,
    y:978
},
    radius:5.0,
    color:{
    r:142,
    g:23,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape162 = {
    point:{
    x:1247,
    y:782
},
    radius:5.0,
    color:{
    r:179,
    g:108,
    b:27
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape163 = {
    point:{
    x:1751,
    y:952
},
    radius:5.0,
    color:{
    r:221,
    g:183,
    b:46
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape164 = {
    point:{
    x:309,
    y:22
},
    radius:5.0,
    color:{
    r:200,
    g:13,
    b:58
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape165 = {
    point:{
    x:84,
    y:661
},
    radius:5.0,
    color:{
    r:196,
    g:133,
    b:38
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape166 = {
    point:{
    x:285,
    y:947
},
    radius:5.0,
    color:{
    r:35,
    g:141,
    b:107
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape167 = {
    point:{
    x:19,
    y:869
},
    radius:5.0,
    color:{
    r:162,
    g:104,
    b:239
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape168 = {
    point:{
    x:1261,
    y:542
},
    radius:5.0,
    color:{
    r:242,
    g:102,
    b:242
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape169 = {
    point:{
    x:15,
    y:863
},
    radius:5.0,
    color:{
    r:125,
    g:90,
    b:154
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape170 = {
    point:{
    x:1851,
    y:29
},
    radius:5.0,
    color:{
    r:124,
    g:192,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape171 = {
    point:{
    x:15,
    y:788
},
    radius:5.0,
    color:{
    r:9,
    g:105,
    b:195
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape172 = {
    point:{
    x:635,
    y:159
},
    radius:5.0,
    color:{
    r:205,
    g:55,
    b:243
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape173 = {
    point:{
    x:1034,
    y:717
},
    radius:5.0,
    color:{
    r:246,
    g:117,
    b:59
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape174 = {
    point:{
    x:426,
    y:561
},
    radius:5.0,
    color:{
    r:218,
    g:61,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape175 = {
    point:{
    x:443,
    y:429
},
    radius:5.0,
    color:{
    r:32,
    g:111,
    b:185
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape176 = {
    point:{
    x:1498,
    y:436
},
    radius:5.0,
    color:{
    r:185,
    g:201,
    b:99
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape177 = {
    point:{
    x:1832,
    y:435
},
    radius:5.0,
    color:{
    r:129,
    g:67,
    b:124
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape178 = {
    point:{
    x:675,
    y:861
},
    radius:5.0,
    color:{
    r:31,
    g:192,
    b:248
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape179 = {
    point:{
    x:105,
    y:899
},
    radius:5.0,
    color:{
    r:107,
    g:102,
    b:197
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape180 = {
    point:{
    x:1792,
    y:868
},
    radius:5.0,
    color:{
    r:40,
    g:11,
    b:123
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape181 = {
    point:{
    x:944,
    y:380
},
    radius:5.0,
    color:{
    r:166,
    g:195,
    b:16
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape182 = {
    point:{
    x:639,
    y:1045
},
    radius:5.0,
    color:{
    r:223,
    g:243,
    b:97
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape183 = {
    point:{
    x:904,
    y:34
},
    radius:5.0,
    color:{
    r:108,
    g:15,
    b:44
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape184 = {
    point:{
    x:715,
    y:130
},
    radius:5.0,
    color:{
    r:35,
    g:128,
    b:235
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape185 = {
    point:{
    x:805,
    y:809
},
    radius:5.0,
    color:{
    r:49,
    g:240,
    b:44
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape186 = {
    point:{
    x:108,
    y:544
},
    radius:5.0,
    color:{
    r:118,
    g:168,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape187 = {
    point:{
    x:1894,
    y:715
},
    radius:5.0,
    color:{
    r:108,
    g:122,
    b:111
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape188 = {
    point:{
    x:1574,
    y:772
},
    radius:5.0,
    color:{
    r:31,
    g:148,
    b:117
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape189 = {
    point:{
    x:825,
    y:639
},
    radius:5.0,
    color:{
    r:224,
    g:31,
    b:63
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape190 = {
    point:{
    x:512,
    y:1078
},
    radius:5.0,
    color:{
    r:142,
    g:77,
    b:235
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape191 = {
    point:{
    x:1189,
    y:631
},
    radius:5.0,
    color:{
    r:206,
    g:34,
    b:209
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape192 = {
    point:{
    x:891,
    y:895
},
    radius:5.0,
    color:{
    r:170,
    g:171,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape193 = {
    point:{
    x:783,
    y:909
},
    radius:5.0,
    color:{
    r:124,
    g:180,
    b:88
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape194 = {
    point:{
    x:1609,
    y:127
},
    radius:5.0,
    color:{
    r:91,
    g:35,
    b:64
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape195 = {
    point:{
    x:42,
    y:389
},
    radius:5.0,
    color:{
    r:35,
    g:117,
    b:36
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape196 = {
    point:{
    x:1311,
    y:1046
},
    radius:5.0,
    color:{
    r:25,
    g:57,
    b:19
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape197 = {
    point:{
    x:1643,
    y:728
},
    radius:5.0,
    color:{
    r:91,
    g:32,
    b:77
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape198 = {
    point:{
    x:1526,
    y:666
},
    radius:5.0,
    color:{
    r:70,
    g:153,
    b:1
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape199 = {
    point:{
    x:524,
    y:1026
},
    radius:5.0,
    color:{
    r:160,
    g:169,
    b:182
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape200 = {
    point:{
    x:820,
    y:777
},
    radius:5.0,
    color:{
    r:12,
    g:50,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape201 = {
    point:{
    x:1706,
    y:811
},
    radius:5.0,
    color:{
    r:241,
    g:233,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape202 = {
    point:{
    x:1524,
    y:63
},
    radius:5.0,
    color:{
    r:84,
    g:198,
    b:192
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape203 = {
    point:{
    x:682,
    y:181
},
    radius:5.0,
    color:{
    r:139,
    g:158,
    b:177
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape204 = {
    point:{
    x:259,
    y:828
},
    radius:5.0,
    color:{
    r:195,
    g:225,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape205 = {
    point:{
    x:1286,
    y:548
},
    radius:5.0,
    color:{
    r:73,
    g:170,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape206 = {
    point:{
    x:334,
    y:714
},
    radius:5.0,
    color:{
    r:37,
    g:167,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape207 = {
    point:{
    x:1470,
    y:927
},
    radius:5.0,
    color:{
    r:216,
    g:6,
    b:134
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape208 = {
    point:{
    x:1625,
    y:400
},
    radius:5.0,
    color:{
    r:55,
    g:21,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape209 = {
    point:{
    x:752,
    y:493
},
    radius:5.0,
    color:{
    r:44,
    g:150,
    b:19
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape210 = {
    point:{
    x:559,
    y:719
},
    radius:5.0,
    color:{
    r:106,
    g:86,
    b:44
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape211 = {
    point:{
    x:596,
    y:705
},
    radius:5.0,
    color:{
    r:29,
    g:204,
    b:178
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape212 = {
    point:{
    x:974,
    y:1056
},
    radius:5.0,
    color:{
    r:72,
    g:190,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape213 = {
    point:{
    x:1583,
    y:238
},
    radius:5.0,
    color:{
    r:167,
    g:246,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape214 = {
    point:{
    x:1001,
    y:301
},
    radius:5.0,
    color:{
    r:220,
    g:0,
    b:51
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape215 = {
    point:{
    x:934,
    y:428
},
    radius:5.0,
    color:{
    r:45,
    g:247,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape216 = {
    point:{
    x:1199,
    y:383
},
    radius:5.0,
    color:{
    r:193,
    g:22,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape217 = {
    point:{
    x:502,
    y:833
},
    radius:5.0,
    color:{
    r:252,
    g:61,
    b:243
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape218 = {
    point:{
    x:1883,
    y:645
},
    radius:5.0,
    color:{
    r:46,
    g:225,
    b:198
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape219 = {
    point:{
    x:647,
    y:875
},
    radius:5.0,
    color:{
    r:103,
    g:82,
    b:7
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape220 = {
    point:{
    x:1343,
    y:919
},
    radius:5.0,
    color:{
    r:171,
    g:90,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape221 = {
    point:{
    x:1256,
    y:484
},
    radius:5.0,
    color:{
    r:197,
    g:25,
    b:47
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape222 = {
    point:{
    x:1720,
    y:685
},
    radius:5.0,
    color:{
    r:251,
    g:117,
    b:134
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape223 = {
    point:{
    x:939,
    y:688
},
    radius:5.0,
    color:{
    r:241,
    g:106,
    b:99
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape224 = {
    point:{
    x:1780,
    y:538
},
    radius:5.0,
    color:{
    r:179,
    g:188,
    b:92
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape225 = {
    point:{
    x:1645,
    y:641
},
    radius:5.0,
    color:{
    r:18,
    g:201,
    b:135
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape226 = {
    point:{
    x:1423,
    y:757
},
    radius:5.0,
    color:{
    r:99,
    g:9,
    b:157
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape227 = {
    point:{
    x:417,
    y:482
},
    radius:5.0,
    color:{
    r:13,
    g:149,
    b:182
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape228 = {
    point:{
    x:1565,
    y:483
},
    radius:5.0,
    color:{
    r:115,
    g:46,
    b:152
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape229 = {
    point:{
    x:35,
    y:365
},
    radius:5.0,
    color:{
    r:91,
    g:212,
    b:156
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape230 = {
    point:{
    x:1485,
    y:711
},
    radius:5.0,
    color:{
    r:219,
    g:235,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape231 = {
    point:{
    x:220,
    y:813
},
    radius:5.0,
    color:{
    r:121,
    g:194,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape232 = {
    point:{
    x:326,
    y:828
},
    radius:5.0,
    color:{
    r:154,
    g:47,
    b:105
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape233 = {
    point:{
    x:1220,
    y:49
},
    radius:5.0,
    color:{
    r:85,
    g:17,
    b:207
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape234 = {
    point:{
    x:530,
    y:804
},
    radius:5.0,
    color:{
    r:89,
    g:177,
    b:137
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape235 = {
    point:{
    x:1278,
    y:238
},
    radius:5.0,
    color:{
    r:166,
    g:184,
    b:78
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape236 = {
    point:{
    x:776,
    y:262
},
    radius:5.0,
    color:{
    r:186,
    g:247,
    b:190
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape237 = {
    point:{
    x:159,
    y:828
},
    radius:5.0,
    color:{
    r:79,
    g:17,
    b:158
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape238 = {
    point:{
    x:282,
    y:771
},
    radius:5.0,
    color:{
    r:131,
    g:9,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape239 = {
    point:{
    x:1326,
    y:52
},
    radius:5.0,
    color:{
    r:3,
    g:232,
    b:5
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape240 = {
    point:{
    x:1561,
    y:216
},
    radius:5.0,
    color:{
    r:113,
    g:105,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape241 = {
    point:{
    x:900,
    y:773
},
    radius:5.0,
    color:{
    r:65,
    g:182,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape242 = {
    point:{
    x:106,
    y:637
},
    radius:5.0,
    color:{
    r:243,
    g:5,
    b:96
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape243 = {
    point:{
    x:1920,
    y:734
},
    radius:5.0,
    color:{
    r:105,
    g:101,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape244 = {
    point:{
    x:471,
    y:403
},
    radius:5.0,
    color:{
    r:121,
    g:181,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape245 = {
    point:{
    x:1217,
    y:254
},
    radius:5.0,
    color:{
    r:45,
    g:11,
    b:233
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape246 = {
    point:{
    x:440,
    y:881
},
    radius:5.0,
    color:{
    r:178,
    g:223,
    b:42
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape247 = {
    point:{
    x:654,
    y:257
},
    radius:5.0,
    color:{
    r:15,
    g:195,
    b:171
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape248 = {
    point:{
    x:89,
    y:693
},
    radius:5.0,
    color:{
    r:210,
    g:67,
    b:36
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape249 = {
    point:{
    x:1861,
    y:160
},
    radius:5.0,
    color:{
    r:70,
    g:18,
    b:248
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape250 = {
    point:{
    x:373,
    y:894
},
    radius:5.0,
    color:{
    r:43,
    g:188,
    b:65
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape251 = {
    point:{
    x:857,
    y:315
},
    radius:5.0,
    color:{
    r:61,
    g:169,
    b:58
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape252 = {
    point:{
    x:380,
    y:294
},
    radius:5.0,
    color:{
    r:10,
    g:148,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape253 = {
    point:{
    x:214,
    y:92
},
    radius:5.0,
    color:{
    r:159,
    g:241,
    b:84
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape254 = {
    point:{
    x:342,
    y:1006
},
    radius:5.0,
    color:{
    r:56,
    g:66,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape255 = {
    point:{
    x:1137,
    y:740
},
    radius:5.0,
    color:{
    r:75,
    g:125,
    b:162
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape256 = {
    point:{
    x:58,
    y:920
},
    radius:5.0,
    color:{
    r:206,
    g:179,
    b:208
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape257 = {
    point:{
    x:1334,
    y:975
},
    radius:5.0,
    color:{
    r:245,
    g:53,
    b:44
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape258 = {
    point:{
    x:1409,
    y:921
},
    radius:5.0,
    color:{
    r:214,
    g:214,
    b:75
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape259 = {
    point:{
    x:337,
    y:584
},
    radius:5.0,
    color:{
    r:122,
    g:150,
    b:91
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape260 = {
    point:{
    x:172,
    y:769
},
    radius:5.0,
    color:{
    r:101,
    g:249,
    b:195
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape261 = {
    point:{
    x:1810,
    y:728
},
    radius:5.0,
    color:{
    r:74,
    g:94,
    b:216
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape262 = {
    point:{
    x:1341,
    y:228
},
    radius:5.0,
    color:{
    r:110,
    g:157,
    b:116
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape263 = {
    point:{
    x:1158,
    y:821
},
    radius:5.0,
    color:{
    r:136,
    g:147,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape264 = {
    point:{
    x:1459,
    y:986
},
    radius:5.0,
    color:{
    r:153,
    g:128,
    b:209
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape265 = {
    point:{
    x:1799,
    y:660
},
    radius:5.0,
    color:{
    r:0,
    g:246,
    b:172
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape266 = {
    point:{
    x:379,
    y:889
},
    radius:5.0,
    color:{
    r:62,
    g:120,
    b:205
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape267 = {
    point:{
    x:885,
    y:890
},
    radius:5.0,
    color:{
    r:161,
    g:25,
    b:35
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape268 = {
    point:{
    x:1468,
    y:662
},
    radius:5.0,
    color:{
    r:218,
    g:70,
    b:202
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape269 = {
    point:{
    x:1278,
    y:165
},
    radius:5.0,
    color:{
    r:55,
    g:63,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape270 = {
    point:{
    x:934,
    y:777
},
    radius:5.0,
    color:{
    r:158,
    g:172,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape271 = {
    point:{
    x:1196,
    y:179
},
    radius:5.0,
    color:{
    r:68,
    g:205,
    b:166
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape272 = {
    point:{
    x:325,
    y:259
},
    radius:5.0,
    color:{
    r:14,
    g:163,
    b:138
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape273 = {
    point:{
    x:1414,
    y:135
},
    radius:5.0,
    color:{
    r:173,
    g:61,
    b:187
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape274 = {
    point:{
    x:786,
    y:1018
},
    radius:5.0,
    color:{
    r:162,
    g:216,
    b:172
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape275 = {
    point:{
    x:1914,
    y:530
},
    radius:5.0,
    color:{
    r:132,
    g:220,
    b:151
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape276 = {
    point:{
    x:1331,
    y:607
},
    radius:5.0,
    color:{
    r:178,
    g:88,
    b:199
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape277 = {
    point:{
    x:1220,
    y:859
},
    radius:5.0,
    color:{
    r:48,
    g:83,
    b:105
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape278 = {
    point:{
    x:959,
    y:944
},
    radius:5.0,
    color:{
    r:31,
    g:171,
    b:214
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape279 = {
    point:{
    x:1734,
    y:818
},
    radius:5.0,
    color:{
    r:110,
    g:245,
    b:42
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape280 = {
    point:{
    x:270,
    y:343
},
    radius:5.0,
    color:{
    r:185,
    g:254,
    b:28
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape281 = {
    point:{
    x:1754,
    y:58
},
    radius:5.0,
    color:{
    r:220,
    g:132,
    b:96
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape282 = {
    point:{
    x:1182,
    y:1027
},
    radius:5.0,
    color:{
    r:34,
    g:180,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape283 = {
    point:{
    x:1813,
    y:822
},
    radius:5.0,
    color:{
    r:113,
    g:185,
    b:137
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape284 = {
    point:{
    x:1734,
    y:455
},
    radius:5.0,
    color:{
    r:80,
    g:192,
    b:96
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape285 = {
    point:{
    x:642,
    y:789
},
    radius:5.0,
    color:{
    r:48,
    g:227,
    b:68
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape286 = {
    point:{
    x:1914,
    y:171
},
    radius:5.0,
    color:{
    r:97,
    g:229,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape287 = {
    point:{
    x:1699,
    y:279
},
    radius:5.0,
    color:{
    r:54,
    g:253,
    b:11
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape288 = {
    point:{
    x:1615,
    y:657
},
    radius:5.0,
    color:{
    r:102,
    g:80,
    b:183
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape289 = {
    point:{
    x:1002,
    y:552
},
    radius:5.0,
    color:{
    r:69,
    g:190,
    b:242
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape290 = {
    point:{
    x:830,
    y:858
},
    radius:5.0,
    color:{
    r:91,
    g:248,
    b:180
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape291 = {
    point:{
    x:1512,
    y:379
},
    radius:5.0,
    color:{
    r:88,
    g:91,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape292 = {
    point:{
    x:762,
    y:344
},
    radius:5.0,
    color:{
    r:191,
    g:208,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape293 = {
    point:{
    x:1420,
    y:933
},
    radius:5.0,
    color:{
    r:230,
    g:184,
    b:221
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape294 = {
    point:{
    x:631,
    y:1066
},
    radius:5.0,
    color:{
    r:129,
    g:3,
    b:238
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape295 = {
    point:{
    x:422,
    y:321
},
    radius:5.0,
    color:{
    r:33,
    g:38,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape296 = {
    point:{
    x:774,
    y:877
},
    radius:5.0,
    color:{
    r:204,
    g:121,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape297 = {
    point:{
    x:1910,
    y:95
},
    radius:5.0,
    color:{
    r:88,
    g:3,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape298 = {
    point:{
    x:686,
    y:233
},
    radius:5.0,
    color:{
    r:180,
    g:25,
    b:93
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape299 = {
    point:{
    x:723,
    y:822
},
    radius:5.0,
    color:{
    r:231,
    g:44,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape300 = {
    point:{
    x:1565,
    y:848
},
    radius:5.0,
    color:{
    r:204,
    g:186,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape301 = {
    point:{
    x:1474,
    y:789
},
    radius:5.0,
    color:{
    r:159,
    g:73,
    b:39
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape302 = {
    point:{
    x:956,
    y:375
},
    radius:5.0,
    color:{
    r:193,
    g:43,
    b:61
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape303 = {
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

bbcShape304 = {
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

bbcShape305 = {
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

bbcShape306 = {
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

bbcShape307 = {
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

bbcShape308 = {
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

bbcShape309 = {
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

bbcShape310 = {
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

bbcShape311 = {
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

bbcShape312 = {
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

bbcShape313 = {
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

bbcShape314 = {
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

bbcShape315 = {
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

bbcShape316 = {
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

bbcShape317 = {
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

bbcShape318 = {
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

bbcShape319 = {
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

bbcShape320 = {
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

bbcShape321 = {
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

bbcShape322 = {
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

bbcShape323 = {
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

bbcShape324 = {
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

bbcShape325 = {
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

bbcShape326 = {
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

bbcShape327 = {
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

bbcShape328 = {
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

bbcShape329 = {
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

bbcShape330 = {
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

bbcShape331 = {
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

bbcShape332 = {
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

bbcShape333 = {
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

bbcShape334 = {
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

bbcShape335 = {
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

bbcShape336 = {
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

bbcShape337 = {
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

bbcShape338 = {
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

bbcShape339 = {
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

bbcShape340 = {
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

bbcShape341 = {
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

bbcShape342 = {
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

bbcShape343 = {
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

bbcShape344 = {
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

bbcShape345 = {
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

bbcShape346 = {
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

bbcShape347 = {
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

bbcShape348 = {
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

bbcShape349 = {
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

bbcShape350 = {
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

bbcShape351 = {
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

bbcShape352 = {
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

bbcShape353 = {
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

bbcShape354 = {
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

bbcShape355 = {
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

bbcShape356 = {
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

bbcShape357 = {
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

bbcShape358 = {
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

bbcShape359 = {
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

bbcShape360 = {
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

bbcShape361 = {
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

bbcShape362 = {
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

bbcShape363 = {
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

bbcShape364 = {
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

bbcShape365 = {
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

bbcShape366 = {
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

bbcShape367 = {
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

bbcShape368 = {
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

bbcShape369 = {
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

bbcShape370 = {
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

bbcShape371 = {
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

bbcShape372 = {
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

bbcShape373 = {
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

bbcShape374 = {
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

bbcShape375 = {
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

bbcShape376 = {
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

bbcShape377 = {
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

bbcShape378 = {
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

bbcShape379 = {
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

bbcShape380 = {
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

bbcShape381 = {
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

bbcShape382 = {
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

bbcShape383 = {
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

bbcShape384 = {
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

bbcShape385 = {
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

bbcShape386 = {
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

bbcShape387 = {
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

bbcShape388 = {
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

bbcShape389 = {
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

bbcShape390 = {
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

bbcShape391 = {
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

bbcShape392 = {
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

bbcShape393 = {
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

bbcShape394 = {
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

bbcShape395 = {
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

bbcShape396 = {
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

bbcShape397 = {
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

bbcShape398 = {
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

bbcShape399 = {
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

bbcShape400 = {
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

bbcShape401 = {
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

bbcShape402 = {
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

bbcShape403 = {
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

bbcShape404 = {
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

bbcShape405 = {
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

bbcShape406 = {
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

bbcShape407 = {
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

bbcShape408 = {
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

bbcShape409 = {
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

bbcShape410 = {
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

bbcShape411 = {
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

bbcShape412 = {
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

bbcShape413 = {
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

bbcShape414 = {
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

bbcShape415 = {
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

bbcShape416 = {
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

bbcShape417 = {
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

bbcShape418 = {
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

bbcShape419 = {
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

bbcShape420 = {
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

bbcShape421 = {
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

bbcShape422 = {
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

bbcShape423 = {
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

bbcShape424 = {
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

bbcShape425 = {
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

bbcShape426 = {
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

bbcShape427 = {
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

bbcShape428 = {
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

bbcShape429 = {
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

bbcShape430 = {
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

bbcShape431 = {
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

bbcShape432 = {
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

bbcShape433 = {
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

bbcShape434 = {
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

bbcShape435 = {
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

bbcShape436 = {
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

bbcShape437 = {
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

bbcShape438 = {
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

bbcShape439 = {
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

bbcShape440 = {
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

bbcShape441 = {
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

bbcShape442 = {
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

bbcShape443 = {
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

bbcShape444 = {
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

bbcShape445 = {
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

bbcShape446 = {
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

bbcShape447 = {
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

bbcShape448 = {
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

bbcShape449 = {
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

bbcShape450 = {
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

bbcShape451 = {
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

bbcShape452 = {
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

bbcShape453 = {
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

bbcShape454 = {
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

bbcShape455 = {
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

bbcShape456 = {
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

bbcShape457 = {
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

bbcShape458 = {
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

bbcShape459 = {
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

bbcShape460 = {
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

bbcShape461 = {
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

bbcShape462 = {
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

bbcShape463 = {
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

bbcShape464 = {
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

bbcShape465 = {
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

bbcShape466 = {
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

bbcShape467 = {
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

bbcShape468 = {
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

bbcShape469 = {
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

bbcShape470 = {
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

bbcShape471 = {
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

bbcShape472 = {
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

bbcShape473 = {
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

bbcShape474 = {
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

bbcShape475 = {
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

bbcShape476 = {
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

bbcShape477 = {
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

bbcShape478 = {
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

bbcShape479 = {
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

bbcShape480 = {
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

bbcShape481 = {
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

bbcShape482 = {
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

bbcShape483 = {
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

bbcShape484 = {
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

bbcShape485 = {
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

bbcShape486 = {
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

bbcShape487 = {
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

bbcShape488 = {
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

bbcShape489 = {
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

bbcShape490 = {
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

bbcShape491 = {
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

bbcShape492 = {
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

bbcShape493 = {
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

bbcShape494 = {
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

bbcShape495 = {
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

bbcShape496 = {
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

bbcShape497 = {
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

bbcShape498 = {
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

bbcShape499 = {
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

bbcShape500 = {
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

bbcShape501 = {
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

bbcShape502 = {
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

bbcShape503 = {
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

bbcShape504 = {
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

bbcShape505 = {
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

bbcShape506 = {
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

bbcShape507 = {
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

bbcShape508 = {
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

bbcShape509 = {
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

bbcShape510 = {
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

bbcShape511 = {
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

bbcShape512 = {
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

bbcShape513 = {
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

bbcShape514 = {
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

bbcShape515 = {
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

bbcShape516 = {
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

bbcShape517 = {
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

bbcShape518 = {
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

bbcShape519 = {
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

bbcShape520 = {
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

bbcShape521 = {
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

bbcShape522 = {
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

bbcShape523 = {
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

bbcShape524 = {
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

bbcShape525 = {
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

bbcShape526 = {
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

bbcShape527 = {
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

bbcShape528 = {
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

bbcShape529 = {
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

bbcShape530 = {
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

bbcShape531 = {
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

bbcShape532 = {
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

bbcShape533 = {
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

bbcShape534 = {
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

bbcShape535 = {
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

bbcShape536 = {
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

bbcShape537 = {
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

bbcShape538 = {
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

bbcShape539 = {
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

bbcShape540 = {
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

bbcShape541 = {
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

bbcShape542 = {
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

bbcShape543 = {
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

bbcShape544 = {
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

bbcShape545 = {
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

bbcShape546 = {
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

bbcShape547 = {
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

bbcShape548 = {
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

bbcShape549 = {
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

bbcShape550 = {
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

bbcShape551 = {
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

bbcShape552 = {
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

bbcShape553 = {
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

bbcShape554 = {
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

bbcShape555 = {
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

bbcShape556 = {
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

bbcShape557 = {
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

bbcShape558 = {
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

bbcShape559 = {
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

bbcShape560 = {
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

bbcShape561 = {
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

bbcShape562 = {
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

bbcShape563 = {
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

bbcShape564 = {
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

bbcShape565 = {
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

bbcShape566 = {
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

bbcShape567 = {
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

bbcShape568 = {
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

bbcShape569 = {
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

bbcShape570 = {
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

bbcShape571 = {
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

bbcShape572 = {
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

bbcShape573 = {
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

bbcShape574 = {
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

bbcShape575 = {
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

bbcShape576 = {
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

bbcShape577 = {
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

bbcShape578 = {
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

bbcShape579 = {
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

bbcShape580 = {
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

bbcShape581 = {
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

bbcShape582 = {
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

bbcShape583 = {
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

bbcShape584 = {
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

bbcShape585 = {
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

bbcShape586 = {
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

bbcShape587 = {
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

bbcShape588 = {
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

bbcShape589 = {
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

bbcShape590 = {
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

bbcShape591 = {
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

bbcShape592 = {
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

bbcShape593 = {
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

bbcShape594 = {
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

bbcShape595 = {
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

bbcShape596 = {
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

bbcShape597 = {
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

bbcShape598 = {
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

bbcShape599 = {
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

bbcShape600 = {
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

bbcShape601 = {
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

bbcShape602 = {
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

bbcShape603 = {
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

bbcShape604 = {
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

bbcShape605 = {
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

bbcShape606 = {
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

bbcShape607 = {
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

bbcShape608 = {
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

bbcShape609 = {
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

bbcShape610 = {
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

bbcShape611 = {
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

bbcShape612 = {
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

bbcShape613 = {
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

bbcShape614 = {
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

bbcShape615 = {
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

bbcShape616 = {
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

bbcShape617 = {
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

bbcShape618 = {
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

bbcShape619 = {
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

bbcShape620 = {
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

bbcShape621 = {
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

bbcShape622 = {
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

bbcShape623 = {
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

bbcShape624 = {
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

bbcShape625 = {
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

bbcShape626 = {
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

bbcShape627 = {
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

bbcShape628 = {
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

bbcShape629 = {
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

bbcShape630 = {
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

bbcShape631 = {
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

bbcShape632 = {
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

bbcShape633 = {
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

bbcShape634 = {
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

bbcShape635 = {
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

bbcShape636 = {
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

bbcShape637 = {
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

bbcShape638 = {
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

bbcShape639 = {
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

bbcShape640 = {
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

bbcShape641 = {
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

bbcShape642 = {
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

bbcShape643 = {
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

bbcShape644 = {
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

bbcShape645 = {
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

bbcShape646 = {
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

bbcShape647 = {
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

bbcShape648 = {
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

bbcShape649 = {
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

bbcShape650 = {
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

bbcShape651 = {
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

bbcShape652 = {
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

bbcShape653 = {
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

bbcShape654 = {
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

bbcShape655 = {
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

bbcShape656 = {
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

bbcShape657 = {
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

bbcShape658 = {
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

bbcShape659 = {
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

bbcShape660 = {
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

bbcShape661 = {
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

bbcShape662 = {
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

bbcShape663 = {
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

bbcShape664 = {
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

bbcShape665 = {
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

bbcShape666 = {
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

bbcShape667 = {
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

bbcShape668 = {
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

bbcShape669 = {
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

bbcShape670 = {
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

bbcShape671 = {
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

bbcShape672 = {
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

bbcShape673 = {
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

bbcShape674 = {
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

bbcShape675 = {
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

bbcShape676 = {
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

bbcShape677 = {
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

bbcShape678 = {
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

bbcShape679 = {
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

bbcShape680 = {
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

bbcShape681 = {
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

bbcShape682 = {
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

bbcShape683 = {
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

bbcShape684 = {
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

bbcShape685 = {
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

bbcShape686 = {
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

bbcShape687 = {
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

bbcShape688 = {
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

bbcShape689 = {
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

bbcShape690 = {
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

bbcShape691 = {
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

bbcShape692 = {
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

bbcShape693 = {
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

bbcShape694 = {
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

bbcShape695 = {
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

bbcShape696 = {
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

bbcShape697 = {
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

bbcShape698 = {
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

bbcShape699 = {
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

bbcShape700 = {
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

bbcShape701 = {
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

bbcShape702 = {
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

bbcShape703 = {
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

bbcShape704 = {
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

bbcShape705 = {
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

bbcShape706 = {
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

bbcShape707 = {
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

bbcShape708 = {
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

bbcShape709 = {
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

bbcShape710 = {
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

bbcShape711 = {
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

bbcShape712 = {
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

bbcShape713 = {
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

bbcShape714 = {
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

bbcShape715 = {
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

bbcShape716 = {
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

bbcShape717 = {
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

bbcShape718 = {
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

bbcShape719 = {
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

bbcShape720 = {
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

bbcShape721 = {
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

bbcShape722 = {
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
if(Date.now() > start + updateTime) {
    bbcInit();
}

bbcShape3.point.x += -5;
bbcShape3.point.y += 0;

bbcShape4.point.x += 0;
bbcShape4.point.y += 6;

bbcShape5.point.x += 8;
bbcShape5.point.y += -4;

bbcShape6.point.x += -4;
bbcShape6.point.y += 9;

bbcShape7.point.x += 4;
bbcShape7.point.y += -3;

bbcShape8.point.x += -9;
bbcShape8.point.y += -1;

bbcShape9.point.x += -4;
bbcShape9.point.y += -9;

bbcShape10.point.x += 4;
bbcShape10.point.y += 1;

bbcShape11.point.x += -4;
bbcShape11.point.y += -1;

bbcShape12.point.x += 10;
bbcShape12.point.y += -9;

bbcShape13.point.x += -2;
bbcShape13.point.y += 4;

bbcShape14.point.x += -9;
bbcShape14.point.y += 5;

bbcShape15.point.x += -10;
bbcShape15.point.y += 6;

bbcShape16.point.x += 2;
bbcShape16.point.y += 2;

bbcShape17.point.x += -2;
bbcShape17.point.y += 2;

bbcShape18.point.x += 1;
bbcShape18.point.y += -8;

bbcShape19.point.x += -10;
bbcShape19.point.y += 6;

bbcShape20.point.x += 7;
bbcShape20.point.y += -8;

bbcShape21.point.x += -7;
bbcShape21.point.y += -8;

bbcShape22.point.x += 4;
bbcShape22.point.y += -8;

bbcShape23.point.x += 0;
bbcShape23.point.y += -8;

bbcShape24.point.x += -5;
bbcShape24.point.y += 2;

bbcShape25.point.x += -1;
bbcShape25.point.y += 5;

bbcShape26.point.x += 3;
bbcShape26.point.y += -1;

bbcShape27.point.x += -4;
bbcShape27.point.y += -10;

bbcShape28.point.x += -4;
bbcShape28.point.y += 6;

bbcShape29.point.x += 8;
bbcShape29.point.y += 10;

bbcShape30.point.x += -2;
bbcShape30.point.y += 0;

bbcShape31.point.x += -6;
bbcShape31.point.y += -8;

bbcShape32.point.x += 6;
bbcShape32.point.y += -4;

bbcShape33.point.x += -8;
bbcShape33.point.y += -3;

bbcShape34.point.x += 9;
bbcShape34.point.y += -9;

bbcShape35.point.x += 2;
bbcShape35.point.y += 2;

bbcShape36.point.x += -8;
bbcShape36.point.y += 6;

bbcShape37.point.x += -9;
bbcShape37.point.y += 6;

bbcShape38.point.x += 6;
bbcShape38.point.y += 4;

bbcShape39.point.x += -4;
bbcShape39.point.y += -6;

bbcShape40.point.x += -6;
bbcShape40.point.y += 10;

bbcShape41.point.x += 8;
bbcShape41.point.y += -4;

bbcShape42.point.x += -5;
bbcShape42.point.y += 1;

bbcShape43.point.x += 9;
bbcShape43.point.y += -6;

bbcShape44.point.x += -10;
bbcShape44.point.y += 2;

bbcShape45.point.x += 0;
bbcShape45.point.y += 9;

bbcShape46.point.x += 0;
bbcShape46.point.y += 1;

bbcShape47.point.x += 3;
bbcShape47.point.y += -9;

bbcShape48.point.x += -6;
bbcShape48.point.y += 4;

bbcShape49.point.x += -9;
bbcShape49.point.y += 2;

bbcShape50.point.x += -6;
bbcShape50.point.y += -5;

bbcShape51.point.x += -3;
bbcShape51.point.y += -3;

bbcShape52.point.x += -3;
bbcShape52.point.y += -2;

bbcShape53.point.x += -3;
bbcShape53.point.y += 5;

bbcShape54.point.x += 4;
bbcShape54.point.y += -2;

bbcShape55.point.x += 9;
bbcShape55.point.y += 1;

bbcShape56.point.x += 4;
bbcShape56.point.y += 9;

bbcShape57.point.x += 2;
bbcShape57.point.y += 2;

bbcShape58.point.x += 6;
bbcShape58.point.y += -3;

bbcShape59.point.x += -7;
bbcShape59.point.y += -3;

bbcShape60.point.x += 6;
bbcShape60.point.y += 8;

bbcShape61.point.x += -10;
bbcShape61.point.y += -2;

bbcShape62.point.x += -7;
bbcShape62.point.y += -1;

bbcShape63.point.x += 0;
bbcShape63.point.y += 5;

bbcShape64.point.x += 1;
bbcShape64.point.y += 8;

bbcShape65.point.x += -1;
bbcShape65.point.y += -6;

bbcShape66.point.x += 4;
bbcShape66.point.y += -3;

bbcShape67.point.x += -9;
bbcShape67.point.y += -7;

bbcShape68.point.x += 1;
bbcShape68.point.y += 3;

bbcShape69.point.x += 7;
bbcShape69.point.y += 2;

bbcShape70.point.x += -5;
bbcShape70.point.y += 2;

bbcShape71.point.x += 1;
bbcShape71.point.y += 7;

bbcShape72.point.x += 7;
bbcShape72.point.y += 7;

bbcShape73.point.x += 0;
bbcShape73.point.y += 8;

bbcShape74.point.x += -2;
bbcShape74.point.y += -1;

bbcShape75.point.x += 6;
bbcShape75.point.y += 0;

bbcShape76.point.x += -1;
bbcShape76.point.y += -1;

bbcShape77.point.x += 7;
bbcShape77.point.y += -8;

bbcShape78.point.x += 1;
bbcShape78.point.y += 3;

bbcShape79.point.x += -4;
bbcShape79.point.y += -8;

bbcShape80.point.x += -10;
bbcShape80.point.y += -6;

bbcShape81.point.x += 1;
bbcShape81.point.y += 10;

bbcShape82.point.x += 6;
bbcShape82.point.y += 1;

bbcShape83.point.x += 7;
bbcShape83.point.y += -6;

bbcShape84.point.x += 1;
bbcShape84.point.y += -2;

bbcShape85.point.x += 6;
bbcShape85.point.y += 4;

bbcShape86.point.x += -1;
bbcShape86.point.y += -6;

bbcShape87.point.x += -2;
bbcShape87.point.y += -10;

bbcShape88.point.x += -2;
bbcShape88.point.y += -4;

bbcShape89.point.x += -10;
bbcShape89.point.y += 3;

bbcShape90.point.x += -5;
bbcShape90.point.y += 4;

bbcShape91.point.x += 8;
bbcShape91.point.y += -3;

bbcShape92.point.x += 8;
bbcShape92.point.y += -4;

bbcShape93.point.x += 3;
bbcShape93.point.y += 2;

bbcShape94.point.x += -6;
bbcShape94.point.y += 0;

bbcShape95.point.x += 5;
bbcShape95.point.y += -1;

bbcShape96.point.x += -7;
bbcShape96.point.y += -6;

bbcShape97.point.x += -8;
bbcShape97.point.y += -4;

bbcShape98.point.x += 6;
bbcShape98.point.y += -7;

bbcShape99.point.x += 2;
bbcShape99.point.y += -10;

bbcShape100.point.x += -2;
bbcShape100.point.y += 10;

bbcShape101.point.x += 4;
bbcShape101.point.y += 10;

bbcShape102.point.x += 1;
bbcShape102.point.y += 6;

bbcShape103.point.x += 3;
bbcShape103.point.y += 10;

bbcShape104.point.x += 8;
bbcShape104.point.y += -2;

bbcShape105.point.x += 10;
bbcShape105.point.y += -2;

bbcShape106.point.x += -1;
bbcShape106.point.y += 3;

bbcShape107.point.x += 6;
bbcShape107.point.y += -1;

bbcShape108.point.x += -7;
bbcShape108.point.y += 10;

bbcShape109.point.x += -1;
bbcShape109.point.y += -1;

bbcShape110.point.x += 0;
bbcShape110.point.y += 3;

bbcShape111.point.x += 2;
bbcShape111.point.y += -6;

bbcShape112.point.x += 8;
bbcShape112.point.y += 9;

bbcShape113.point.x += 1;
bbcShape113.point.y += -6;

bbcShape114.point.x += 6;
bbcShape114.point.y += 0;

bbcShape115.point.x += -1;
bbcShape115.point.y += -1;

bbcShape116.point.x += -9;
bbcShape116.point.y += 10;

bbcShape117.point.x += 5;
bbcShape117.point.y += 1;

bbcShape118.point.x += 7;
bbcShape118.point.y += 4;

bbcShape119.point.x += 3;
bbcShape119.point.y += -1;

bbcShape120.point.x += 4;
bbcShape120.point.y += -6;

bbcShape121.point.x += 2;
bbcShape121.point.y += 10;

bbcShape122.point.x += 2;
bbcShape122.point.y += 5;

bbcShape123.point.x += -3;
bbcShape123.point.y += 4;

bbcShape124.point.x += -9;
bbcShape124.point.y += -8;

bbcShape125.point.x += 1;
bbcShape125.point.y += 10;

bbcShape126.point.x += 0;
bbcShape126.point.y += -4;

bbcShape127.point.x += 8;
bbcShape127.point.y += -10;

bbcShape128.point.x += 9;
bbcShape128.point.y += 3;

bbcShape129.point.x += 4;
bbcShape129.point.y += 5;

bbcShape130.point.x += 7;
bbcShape130.point.y += -3;

bbcShape131.point.x += 1;
bbcShape131.point.y += -7;

bbcShape132.point.x += 0;
bbcShape132.point.y += 9;

bbcShape133.point.x += 8;
bbcShape133.point.y += 4;

bbcShape134.point.x += -7;
bbcShape134.point.y += -3;

bbcShape135.point.x += 9;
bbcShape135.point.y += 4;

bbcShape136.point.x += -10;
bbcShape136.point.y += 10;

bbcShape137.point.x += 9;
bbcShape137.point.y += 10;

bbcShape138.point.x += 4;
bbcShape138.point.y += -7;

bbcShape139.point.x += 10;
bbcShape139.point.y += -5;

bbcShape140.point.x += 5;
bbcShape140.point.y += -9;

bbcShape141.point.x += 4;
bbcShape141.point.y += -7;

bbcShape142.point.x += 0;
bbcShape142.point.y += -5;

bbcShape143.point.x += -9;
bbcShape143.point.y += -1;

bbcShape144.point.x += -10;
bbcShape144.point.y += 5;

bbcShape145.point.x += 3;
bbcShape145.point.y += 4;

bbcShape146.point.x += -1;
bbcShape146.point.y += -7;

bbcShape147.point.x += 0;
bbcShape147.point.y += -5;

bbcShape148.point.x += 10;
bbcShape148.point.y += 9;

bbcShape149.point.x += -2;
bbcShape149.point.y += -10;

bbcShape150.point.x += 7;
bbcShape150.point.y += 1;

bbcShape151.point.x += -9;
bbcShape151.point.y += 2;

bbcShape152.point.x += -10;
bbcShape152.point.y += 3;

bbcShape153.point.x += 4;
bbcShape153.point.y += -1;

bbcShape154.point.x += -7;
bbcShape154.point.y += -1;

bbcShape155.point.x += 4;
bbcShape155.point.y += -10;

bbcShape156.point.x += -5;
bbcShape156.point.y += 4;

bbcShape157.point.x += -3;
bbcShape157.point.y += -9;

bbcShape158.point.x += 10;
bbcShape158.point.y += 10;

bbcShape159.point.x += 3;
bbcShape159.point.y += 10;

bbcShape160.point.x += 4;
bbcShape160.point.y += 10;

bbcShape161.point.x += -3;
bbcShape161.point.y += -6;

bbcShape162.point.x += -6;
bbcShape162.point.y += 3;

bbcShape163.point.x += -3;
bbcShape163.point.y += 9;

bbcShape164.point.x += -3;
bbcShape164.point.y += 2;

bbcShape165.point.x += -9;
bbcShape165.point.y += 6;

bbcShape166.point.x += 6;
bbcShape166.point.y += -6;

bbcShape167.point.x += 5;
bbcShape167.point.y += 9;

bbcShape168.point.x += 0;
bbcShape168.point.y += 8;

bbcShape169.point.x += -1;
bbcShape169.point.y += -10;

bbcShape170.point.x += -2;
bbcShape170.point.y += 5;

bbcShape171.point.x += 10;
bbcShape171.point.y += -10;

bbcShape172.point.x += -7;
bbcShape172.point.y += -6;

bbcShape173.point.x += -1;
bbcShape173.point.y += 3;

bbcShape174.point.x += 7;
bbcShape174.point.y += -4;

bbcShape175.point.x += -3;
bbcShape175.point.y += 3;

bbcShape176.point.x += 3;
bbcShape176.point.y += 2;

bbcShape177.point.x += -5;
bbcShape177.point.y += -10;

bbcShape178.point.x += -2;
bbcShape178.point.y += 1;

bbcShape179.point.x += 8;
bbcShape179.point.y += 0;

bbcShape180.point.x += -6;
bbcShape180.point.y += 0;

bbcShape181.point.x += 9;
bbcShape181.point.y += -8;

bbcShape182.point.x += 3;
bbcShape182.point.y += -3;

bbcShape183.point.x += -5;
bbcShape183.point.y += -10;

bbcShape184.point.x += 7;
bbcShape184.point.y += -5;

bbcShape185.point.x += 3;
bbcShape185.point.y += 9;

bbcShape186.point.x += 6;
bbcShape186.point.y += 6;

bbcShape187.point.x += 10;
bbcShape187.point.y += 9;

bbcShape188.point.x += -8;
bbcShape188.point.y += -1;

bbcShape189.point.x += -6;
bbcShape189.point.y += 9;

bbcShape190.point.x += 4;
bbcShape190.point.y += -9;

bbcShape191.point.x += 9;
bbcShape191.point.y += -8;

bbcShape192.point.x += 5;
bbcShape192.point.y += -10;

bbcShape193.point.x += 1;
bbcShape193.point.y += -2;

bbcShape194.point.x += 10;
bbcShape194.point.y += 10;

bbcShape195.point.x += -9;
bbcShape195.point.y += 1;

bbcShape196.point.x += -6;
bbcShape196.point.y += 1;

bbcShape197.point.x += 0;
bbcShape197.point.y += 1;

bbcShape198.point.x += 1;
bbcShape198.point.y += 4;

bbcShape199.point.x += 3;
bbcShape199.point.y += -7;

bbcShape200.point.x += -9;
bbcShape200.point.y += -7;

bbcShape201.point.x += -3;
bbcShape201.point.y += 5;

bbcShape202.point.x += -9;
bbcShape202.point.y += 5;

bbcShape203.point.x += 0;
bbcShape203.point.y += 2;

bbcShape204.point.x += -2;
bbcShape204.point.y += 7;

bbcShape205.point.x += -2;
bbcShape205.point.y += 7;

bbcShape206.point.x += 2;
bbcShape206.point.y += -1;

bbcShape207.point.x += -6;
bbcShape207.point.y += -4;

bbcShape208.point.x += 2;
bbcShape208.point.y += 5;

bbcShape209.point.x += -5;
bbcShape209.point.y += 9;

bbcShape210.point.x += 7;
bbcShape210.point.y += 1;

bbcShape211.point.x += 0;
bbcShape211.point.y += -10;

bbcShape212.point.x += -10;
bbcShape212.point.y += 3;

bbcShape213.point.x += -4;
bbcShape213.point.y += 6;

bbcShape214.point.x += -8;
bbcShape214.point.y += 3;

bbcShape215.point.x += 0;
bbcShape215.point.y += -3;

bbcShape216.point.x += -2;
bbcShape216.point.y += -9;

bbcShape217.point.x += -6;
bbcShape217.point.y += 6;

bbcShape218.point.x += -10;
bbcShape218.point.y += 5;

bbcShape219.point.x += 10;
bbcShape219.point.y += -3;

bbcShape220.point.x += -5;
bbcShape220.point.y += -10;

bbcShape221.point.x += 3;
bbcShape221.point.y += -5;

bbcShape222.point.x += 4;
bbcShape222.point.y += -3;

bbcShape223.point.x += -4;
bbcShape223.point.y += -4;

bbcShape224.point.x += -10;
bbcShape224.point.y += 1;

bbcShape225.point.x += -9;
bbcShape225.point.y += -4;

bbcShape226.point.x += 1;
bbcShape226.point.y += 1;

bbcShape227.point.x += -3;
bbcShape227.point.y += 9;

bbcShape228.point.x += 3;
bbcShape228.point.y += -2;

bbcShape229.point.x += 1;
bbcShape229.point.y += 5;

bbcShape230.point.x += -8;
bbcShape230.point.y += -3;

bbcShape231.point.x += -3;
bbcShape231.point.y += -5;

bbcShape232.point.x += 6;
bbcShape232.point.y += -9;

bbcShape233.point.x += -7;
bbcShape233.point.y += -7;

bbcShape234.point.x += -2;
bbcShape234.point.y += -10;

bbcShape235.point.x += -6;
bbcShape235.point.y += -3;

bbcShape236.point.x += 2;
bbcShape236.point.y += 9;

bbcShape237.point.x += -7;
bbcShape237.point.y += -2;

bbcShape238.point.x += 0;
bbcShape238.point.y += 5;

bbcShape239.point.x += 3;
bbcShape239.point.y += 3;

bbcShape240.point.x += -1;
bbcShape240.point.y += 8;

bbcShape241.point.x += 6;
bbcShape241.point.y += -5;

bbcShape242.point.x += 4;
bbcShape242.point.y += 1;

bbcShape243.point.x += 3;
bbcShape243.point.y += -2;

bbcShape244.point.x += 2;
bbcShape244.point.y += 0;

bbcShape245.point.x += -5;
bbcShape245.point.y += -10;

bbcShape246.point.x += -4;
bbcShape246.point.y += -4;

bbcShape247.point.x += 1;
bbcShape247.point.y += -6;

bbcShape248.point.x += 10;
bbcShape248.point.y += -3;

bbcShape249.point.x += 0;
bbcShape249.point.y += 3;

bbcShape250.point.x += -6;
bbcShape250.point.y += -10;

bbcShape251.point.x += 4;
bbcShape251.point.y += -8;

bbcShape252.point.x += 4;
bbcShape252.point.y += 10;

bbcShape253.point.x += -7;
bbcShape253.point.y += 3;

bbcShape254.point.x += 4;
bbcShape254.point.y += 7;

bbcShape255.point.x += -1;
bbcShape255.point.y += 0;

bbcShape256.point.x += -3;
bbcShape256.point.y += 4;

bbcShape257.point.x += -1;
bbcShape257.point.y += 5;

bbcShape258.point.x += 0;
bbcShape258.point.y += 10;

bbcShape259.point.x += -3;
bbcShape259.point.y += 8;

bbcShape260.point.x += -8;
bbcShape260.point.y += 7;

bbcShape261.point.x += -7;
bbcShape261.point.y += -2;

bbcShape262.point.x += 5;
bbcShape262.point.y += 0;

bbcShape263.point.x += -8;
bbcShape263.point.y += -7;

bbcShape264.point.x += -7;
bbcShape264.point.y += 8;

bbcShape265.point.x += 0;
bbcShape265.point.y += -2;

bbcShape266.point.x += 3;
bbcShape266.point.y += -8;

bbcShape267.point.x += 10;
bbcShape267.point.y += -2;

bbcShape268.point.x += 1;
bbcShape268.point.y += 6;

bbcShape269.point.x += 4;
bbcShape269.point.y += 4;

bbcShape270.point.x += -5;
bbcShape270.point.y += -10;

bbcShape271.point.x += -3;
bbcShape271.point.y += -6;

bbcShape272.point.x += 3;
bbcShape272.point.y += -6;

bbcShape273.point.x += 9;
bbcShape273.point.y += -5;

bbcShape274.point.x += -7;
bbcShape274.point.y += 1;

bbcShape275.point.x += 3;
bbcShape275.point.y += 7;

bbcShape276.point.x += -10;
bbcShape276.point.y += -6;

bbcShape277.point.x += -8;
bbcShape277.point.y += 5;

bbcShape278.point.x += 9;
bbcShape278.point.y += 6;

bbcShape279.point.x += -9;
bbcShape279.point.y += 5;

bbcShape280.point.x += -7;
bbcShape280.point.y += 10;

bbcShape281.point.x += 3;
bbcShape281.point.y += 10;

bbcShape282.point.x += -5;
bbcShape282.point.y += -4;

bbcShape283.point.x += 0;
bbcShape283.point.y += -8;

bbcShape284.point.x += -7;
bbcShape284.point.y += -4;

bbcShape285.point.x += -7;
bbcShape285.point.y += -2;

bbcShape286.point.x += 1;
bbcShape286.point.y += -5;

bbcShape287.point.x += 8;
bbcShape287.point.y += 5;

bbcShape288.point.x += 8;
bbcShape288.point.y += 1;

bbcShape289.point.x += -4;
bbcShape289.point.y += 4;

bbcShape290.point.x += 1;
bbcShape290.point.y += -10;

bbcShape291.point.x += 6;
bbcShape291.point.y += 7;

bbcShape292.point.x += 2;
bbcShape292.point.y += -9;

bbcShape293.point.x += 7;
bbcShape293.point.y += 3;

bbcShape294.point.x += -6;
bbcShape294.point.y += -4;

bbcShape295.point.x += -6;
bbcShape295.point.y += 10;

bbcShape296.point.x += 8;
bbcShape296.point.y += 10;

bbcShape297.point.x += -2;
bbcShape297.point.y += -4;

bbcShape298.point.x += -3;
bbcShape298.point.y += -4;

bbcShape299.point.x += -7;
bbcShape299.point.y += 3;

bbcShape300.point.x += -10;
bbcShape300.point.y += -3;

bbcShape301.point.x += -9;
bbcShape301.point.y += -2;

bbcShape302.point.x += -5;
bbcShape302.point.y += 7;

bbcShape303.rotation += 0.0;
bbcShape303.around.x = 300.0;
bbcShape303.around.y = 200.0;

bbcShape304.rotation += 0.0;
bbcShape304.around.x = 300.0;
bbcShape304.around.y = 200.0;

bbcShape305.rotation += 0.0;
bbcShape305.around.x = 300.0;
bbcShape305.around.y = 200.0;

bbcShape306.rotation += 0.0;
bbcShape306.around.x = 300.0;
bbcShape306.around.y = 200.0;

bbcShape307.rotation += 0.0;
bbcShape307.around.x = 300.0;
bbcShape307.around.y = 200.0;

bbcShape308.rotation += 0.0;
bbcShape308.around.x = 300.0;
bbcShape308.around.y = 200.0;

bbcShape309.rotation += 0.0;
bbcShape309.around.x = 300.0;
bbcShape309.around.y = 200.0;

bbcShape310.rotation += 0.0;
bbcShape310.around.x = 300.0;
bbcShape310.around.y = 200.0;

bbcShape311.rotation += 0.0;
bbcShape311.around.x = 300.0;
bbcShape311.around.y = 200.0;

bbcShape312.rotation += 0.0;
bbcShape312.around.x = 300.0;
bbcShape312.around.y = 200.0;

bbcShape313.rotation += 0.0;
bbcShape313.around.x = 300.0;
bbcShape313.around.y = 200.0;

bbcShape314.rotation += 0.0;
bbcShape314.around.x = 300.0;
bbcShape314.around.y = 200.0;

bbcShape315.rotation += 0.0;
bbcShape315.around.x = 300.0;
bbcShape315.around.y = 200.0;

bbcShape316.rotation += 0.0;
bbcShape316.around.x = 300.0;
bbcShape316.around.y = 200.0;

bbcShape317.rotation += 0.0;
bbcShape317.around.x = 300.0;
bbcShape317.around.y = 200.0;

bbcShape318.rotation += 0.0;
bbcShape318.around.x = 300.0;
bbcShape318.around.y = 200.0;

bbcShape319.rotation += 0.0;
bbcShape319.around.x = 300.0;
bbcShape319.around.y = 200.0;

bbcShape320.rotation += 0.0;
bbcShape320.around.x = 300.0;
bbcShape320.around.y = 200.0;

bbcShape321.rotation += 0.0;
bbcShape321.around.x = 300.0;
bbcShape321.around.y = 200.0;

bbcShape322.rotation += 0.0;
bbcShape322.around.x = 300.0;
bbcShape322.around.y = 200.0;

bbcShape323.rotation += 0.0;
bbcShape323.around.x = 300.0;
bbcShape323.around.y = 200.0;

bbcShape324.rotation += 0.05;
bbcShape324.around.x = 300.0;
bbcShape324.around.y = 200.0;

bbcShape325.rotation += 0.1;
bbcShape325.around.x = 300.0;
bbcShape325.around.y = 200.0;

bbcShape326.rotation += 0.1;
bbcShape326.around.x = 300.0;
bbcShape326.around.y = 200.0;

bbcShape327.rotation += 0.1;
bbcShape327.around.x = 300.0;
bbcShape327.around.y = 200.0;

bbcShape328.rotation += 0.1;
bbcShape328.around.x = 300.0;
bbcShape328.around.y = 200.0;

bbcShape329.rotation += 0.1;
bbcShape329.around.x = 300.0;
bbcShape329.around.y = 200.0;

bbcShape330.rotation += 0.1;
bbcShape330.around.x = 300.0;
bbcShape330.around.y = 200.0;

bbcShape331.rotation += 0.1;
bbcShape331.around.x = 300.0;
bbcShape331.around.y = 200.0;

bbcShape332.rotation += 0.1;
bbcShape332.around.x = 300.0;
bbcShape332.around.y = 200.0;

bbcShape333.rotation += 0.1;
bbcShape333.around.x = 300.0;
bbcShape333.around.y = 200.0;

bbcShape334.rotation += 0.1;
bbcShape334.around.x = 300.0;
bbcShape334.around.y = 200.0;

bbcShape335.rotation += 0.1;
bbcShape335.around.x = 300.0;
bbcShape335.around.y = 200.0;

bbcShape336.rotation += 0.1;
bbcShape336.around.x = 300.0;
bbcShape336.around.y = 200.0;

bbcShape337.rotation += 0.1;
bbcShape337.around.x = 300.0;
bbcShape337.around.y = 200.0;

bbcShape338.rotation += 0.1;
bbcShape338.around.x = 300.0;
bbcShape338.around.y = 200.0;

bbcShape339.rotation += 0.1;
bbcShape339.around.x = 300.0;
bbcShape339.around.y = 200.0;

bbcShape340.rotation += 0.1;
bbcShape340.around.x = 300.0;
bbcShape340.around.y = 200.0;

bbcShape341.rotation += 0.1;
bbcShape341.around.x = 300.0;
bbcShape341.around.y = 200.0;

bbcShape342.rotation += 0.1;
bbcShape342.around.x = 300.0;
bbcShape342.around.y = 200.0;

bbcShape343.rotation += 0.1;
bbcShape343.around.x = 300.0;
bbcShape343.around.y = 200.0;

bbcShape344.rotation += 0.1;
bbcShape344.around.x = 300.0;
bbcShape344.around.y = 200.0;

bbcShape345.rotation += 0.1;
bbcShape345.around.x = 300.0;
bbcShape345.around.y = 200.0;

bbcShape346.rotation += 0.2;
bbcShape346.around.x = 300.0;
bbcShape346.around.y = 200.0;

bbcShape347.rotation += 0.2;
bbcShape347.around.x = 300.0;
bbcShape347.around.y = 200.0;

bbcShape348.rotation += 0.2;
bbcShape348.around.x = 300.0;
bbcShape348.around.y = 200.0;

bbcShape349.rotation += 0.2;
bbcShape349.around.x = 300.0;
bbcShape349.around.y = 200.0;

bbcShape350.rotation += 0.2;
bbcShape350.around.x = 300.0;
bbcShape350.around.y = 200.0;

bbcShape351.rotation += 0.2;
bbcShape351.around.x = 300.0;
bbcShape351.around.y = 200.0;

bbcShape352.rotation += 0.2;
bbcShape352.around.x = 300.0;
bbcShape352.around.y = 200.0;

bbcShape353.rotation += 0.2;
bbcShape353.around.x = 300.0;
bbcShape353.around.y = 200.0;

bbcShape354.rotation += 0.2;
bbcShape354.around.x = 300.0;
bbcShape354.around.y = 200.0;

bbcShape355.rotation += 0.2;
bbcShape355.around.x = 300.0;
bbcShape355.around.y = 200.0;

bbcShape356.rotation += 0.2;
bbcShape356.around.x = 300.0;
bbcShape356.around.y = 200.0;

bbcShape357.rotation += 0.2;
bbcShape357.around.x = 300.0;
bbcShape357.around.y = 200.0;

bbcShape358.rotation += 0.2;
bbcShape358.around.x = 300.0;
bbcShape358.around.y = 200.0;

bbcShape359.rotation += 0.2;
bbcShape359.around.x = 300.0;
bbcShape359.around.y = 200.0;

bbcShape360.rotation += 0.2;
bbcShape360.around.x = 300.0;
bbcShape360.around.y = 200.0;

bbcShape361.rotation += 0.2;
bbcShape361.around.x = 300.0;
bbcShape361.around.y = 200.0;

bbcShape362.rotation += 0.2;
bbcShape362.around.x = 300.0;
bbcShape362.around.y = 200.0;

bbcShape363.rotation += 0.2;
bbcShape363.around.x = 300.0;
bbcShape363.around.y = 200.0;

bbcShape364.rotation += 0.2;
bbcShape364.around.x = 300.0;
bbcShape364.around.y = 200.0;

bbcShape365.rotation += 0.2;
bbcShape365.around.x = 300.0;
bbcShape365.around.y = 200.0;

bbcShape366.rotation += 0.15;
bbcShape366.around.x = 300.0;
bbcShape366.around.y = 200.0;

bbcShape367.rotation += 0.3;
bbcShape367.around.x = 300.0;
bbcShape367.around.y = 200.0;

bbcShape368.rotation += 0.3;
bbcShape368.around.x = 300.0;
bbcShape368.around.y = 200.0;

bbcShape369.rotation += 0.3;
bbcShape369.around.x = 300.0;
bbcShape369.around.y = 200.0;

bbcShape370.rotation += 0.3;
bbcShape370.around.x = 300.0;
bbcShape370.around.y = 200.0;

bbcShape371.rotation += 0.3;
bbcShape371.around.x = 300.0;
bbcShape371.around.y = 200.0;

bbcShape372.rotation += 0.3;
bbcShape372.around.x = 300.0;
bbcShape372.around.y = 200.0;

bbcShape373.rotation += 0.3;
bbcShape373.around.x = 300.0;
bbcShape373.around.y = 200.0;

bbcShape374.rotation += 0.3;
bbcShape374.around.x = 300.0;
bbcShape374.around.y = 200.0;

bbcShape375.rotation += 0.3;
bbcShape375.around.x = 300.0;
bbcShape375.around.y = 200.0;

bbcShape376.rotation += 0.3;
bbcShape376.around.x = 300.0;
bbcShape376.around.y = 200.0;

bbcShape377.rotation += 0.3;
bbcShape377.around.x = 300.0;
bbcShape377.around.y = 200.0;

bbcShape378.rotation += 0.3;
bbcShape378.around.x = 300.0;
bbcShape378.around.y = 200.0;

bbcShape379.rotation += 0.3;
bbcShape379.around.x = 300.0;
bbcShape379.around.y = 200.0;

bbcShape380.rotation += 0.3;
bbcShape380.around.x = 300.0;
bbcShape380.around.y = 200.0;

bbcShape381.rotation += 0.3;
bbcShape381.around.x = 300.0;
bbcShape381.around.y = 200.0;

bbcShape382.rotation += 0.3;
bbcShape382.around.x = 300.0;
bbcShape382.around.y = 200.0;

bbcShape383.rotation += 0.3;
bbcShape383.around.x = 300.0;
bbcShape383.around.y = 200.0;

bbcShape384.rotation += 0.3;
bbcShape384.around.x = 300.0;
bbcShape384.around.y = 200.0;

bbcShape385.rotation += 0.3;
bbcShape385.around.x = 300.0;
bbcShape385.around.y = 200.0;

bbcShape386.rotation += 0.3;
bbcShape386.around.x = 300.0;
bbcShape386.around.y = 200.0;

bbcShape387.rotation += 0.2;
bbcShape387.around.x = 300.0;
bbcShape387.around.y = 200.0;

bbcShape388.rotation += 0.4;
bbcShape388.around.x = 300.0;
bbcShape388.around.y = 200.0;

bbcShape389.rotation += 0.4;
bbcShape389.around.x = 300.0;
bbcShape389.around.y = 200.0;

bbcShape390.rotation += 0.4;
bbcShape390.around.x = 300.0;
bbcShape390.around.y = 200.0;

bbcShape391.rotation += 0.4;
bbcShape391.around.x = 300.0;
bbcShape391.around.y = 200.0;

bbcShape392.rotation += 0.4;
bbcShape392.around.x = 300.0;
bbcShape392.around.y = 200.0;

bbcShape393.rotation += 0.4;
bbcShape393.around.x = 300.0;
bbcShape393.around.y = 200.0;

bbcShape394.rotation += 0.4;
bbcShape394.around.x = 300.0;
bbcShape394.around.y = 200.0;

bbcShape395.rotation += 0.4;
bbcShape395.around.x = 300.0;
bbcShape395.around.y = 200.0;

bbcShape396.rotation += 0.4;
bbcShape396.around.x = 300.0;
bbcShape396.around.y = 200.0;

bbcShape397.rotation += 0.4;
bbcShape397.around.x = 300.0;
bbcShape397.around.y = 200.0;

bbcShape398.rotation += 0.4;
bbcShape398.around.x = 300.0;
bbcShape398.around.y = 200.0;

bbcShape399.rotation += 0.4;
bbcShape399.around.x = 300.0;
bbcShape399.around.y = 200.0;

bbcShape400.rotation += 0.4;
bbcShape400.around.x = 300.0;
bbcShape400.around.y = 200.0;

bbcShape401.rotation += 0.4;
bbcShape401.around.x = 300.0;
bbcShape401.around.y = 200.0;

bbcShape402.rotation += 0.4;
bbcShape402.around.x = 300.0;
bbcShape402.around.y = 200.0;

bbcShape403.rotation += 0.4;
bbcShape403.around.x = 300.0;
bbcShape403.around.y = 200.0;

bbcShape404.rotation += 0.4;
bbcShape404.around.x = 300.0;
bbcShape404.around.y = 200.0;

bbcShape405.rotation += 0.4;
bbcShape405.around.x = 300.0;
bbcShape405.around.y = 200.0;

bbcShape406.rotation += 0.4;
bbcShape406.around.x = 300.0;
bbcShape406.around.y = 200.0;

bbcShape407.rotation += 0.4;
bbcShape407.around.x = 300.0;
bbcShape407.around.y = 200.0;

bbcShape408.rotation += 0.25;
bbcShape408.around.x = 300.0;
bbcShape408.around.y = 200.0;

bbcShape409.rotation += 0.5;
bbcShape409.around.x = 300.0;
bbcShape409.around.y = 200.0;

bbcShape410.rotation += 0.5;
bbcShape410.around.x = 300.0;
bbcShape410.around.y = 200.0;

bbcShape411.rotation += 0.5;
bbcShape411.around.x = 300.0;
bbcShape411.around.y = 200.0;

bbcShape412.rotation += 0.5;
bbcShape412.around.x = 300.0;
bbcShape412.around.y = 200.0;

bbcShape413.rotation += 0.5;
bbcShape413.around.x = 300.0;
bbcShape413.around.y = 200.0;

bbcShape414.rotation += 0.5;
bbcShape414.around.x = 300.0;
bbcShape414.around.y = 200.0;

bbcShape415.rotation += 0.5;
bbcShape415.around.x = 300.0;
bbcShape415.around.y = 200.0;

bbcShape416.rotation += 0.5;
bbcShape416.around.x = 300.0;
bbcShape416.around.y = 200.0;

bbcShape417.rotation += 0.5;
bbcShape417.around.x = 300.0;
bbcShape417.around.y = 200.0;

bbcShape418.rotation += 0.5;
bbcShape418.around.x = 300.0;
bbcShape418.around.y = 200.0;

bbcShape419.rotation += 0.5;
bbcShape419.around.x = 300.0;
bbcShape419.around.y = 200.0;

bbcShape420.rotation += 0.5;
bbcShape420.around.x = 300.0;
bbcShape420.around.y = 200.0;

bbcShape421.rotation += 0.5;
bbcShape421.around.x = 300.0;
bbcShape421.around.y = 200.0;

bbcShape422.rotation += 0.5;
bbcShape422.around.x = 300.0;
bbcShape422.around.y = 200.0;

bbcShape423.rotation += 0.5;
bbcShape423.around.x = 300.0;
bbcShape423.around.y = 200.0;

bbcShape424.rotation += 0.5;
bbcShape424.around.x = 300.0;
bbcShape424.around.y = 200.0;

bbcShape425.rotation += 0.5;
bbcShape425.around.x = 300.0;
bbcShape425.around.y = 200.0;

bbcShape426.rotation += 0.5;
bbcShape426.around.x = 300.0;
bbcShape426.around.y = 200.0;

bbcShape427.rotation += 0.5;
bbcShape427.around.x = 300.0;
bbcShape427.around.y = 200.0;

bbcShape428.rotation += 0.5;
bbcShape428.around.x = 300.0;
bbcShape428.around.y = 200.0;

bbcShape429.rotation += 0.3;
bbcShape429.around.x = 300.0;
bbcShape429.around.y = 200.0;

bbcShape430.rotation += 0.6;
bbcShape430.around.x = 300.0;
bbcShape430.around.y = 200.0;

bbcShape431.rotation += 0.6;
bbcShape431.around.x = 300.0;
bbcShape431.around.y = 200.0;

bbcShape432.rotation += 0.6;
bbcShape432.around.x = 300.0;
bbcShape432.around.y = 200.0;

bbcShape433.rotation += 0.6;
bbcShape433.around.x = 300.0;
bbcShape433.around.y = 200.0;

bbcShape434.rotation += 0.6;
bbcShape434.around.x = 300.0;
bbcShape434.around.y = 200.0;

bbcShape435.rotation += 0.6;
bbcShape435.around.x = 300.0;
bbcShape435.around.y = 200.0;

bbcShape436.rotation += 0.6;
bbcShape436.around.x = 300.0;
bbcShape436.around.y = 200.0;

bbcShape437.rotation += 0.6;
bbcShape437.around.x = 300.0;
bbcShape437.around.y = 200.0;

bbcShape438.rotation += 0.6;
bbcShape438.around.x = 300.0;
bbcShape438.around.y = 200.0;

bbcShape439.rotation += 0.6;
bbcShape439.around.x = 300.0;
bbcShape439.around.y = 200.0;

bbcShape440.rotation += 0.6;
bbcShape440.around.x = 300.0;
bbcShape440.around.y = 200.0;

bbcShape441.rotation += 0.6;
bbcShape441.around.x = 300.0;
bbcShape441.around.y = 200.0;

bbcShape442.rotation += 0.6;
bbcShape442.around.x = 300.0;
bbcShape442.around.y = 200.0;

bbcShape443.rotation += 0.6;
bbcShape443.around.x = 300.0;
bbcShape443.around.y = 200.0;

bbcShape444.rotation += 0.6;
bbcShape444.around.x = 300.0;
bbcShape444.around.y = 200.0;

bbcShape445.rotation += 0.6;
bbcShape445.around.x = 300.0;
bbcShape445.around.y = 200.0;

bbcShape446.rotation += 0.6;
bbcShape446.around.x = 300.0;
bbcShape446.around.y = 200.0;

bbcShape447.rotation += 0.6;
bbcShape447.around.x = 300.0;
bbcShape447.around.y = 200.0;

bbcShape448.rotation += 0.6;
bbcShape448.around.x = 300.0;
bbcShape448.around.y = 200.0;

bbcShape449.rotation += 0.6;
bbcShape449.around.x = 300.0;
bbcShape449.around.y = 200.0;

bbcShape450.rotation += 0.35;
bbcShape450.around.x = 300.0;
bbcShape450.around.y = 200.0;

bbcShape451.rotation += 0.7;
bbcShape451.around.x = 300.0;
bbcShape451.around.y = 200.0;

bbcShape452.rotation += 0.7;
bbcShape452.around.x = 300.0;
bbcShape452.around.y = 200.0;

bbcShape453.rotation += 0.7;
bbcShape453.around.x = 300.0;
bbcShape453.around.y = 200.0;

bbcShape454.rotation += 0.7;
bbcShape454.around.x = 300.0;
bbcShape454.around.y = 200.0;

bbcShape455.rotation += 0.7;
bbcShape455.around.x = 300.0;
bbcShape455.around.y = 200.0;

bbcShape456.rotation += 0.7;
bbcShape456.around.x = 300.0;
bbcShape456.around.y = 200.0;

bbcShape457.rotation += 0.7;
bbcShape457.around.x = 300.0;
bbcShape457.around.y = 200.0;

bbcShape458.rotation += 0.7;
bbcShape458.around.x = 300.0;
bbcShape458.around.y = 200.0;

bbcShape459.rotation += 0.7;
bbcShape459.around.x = 300.0;
bbcShape459.around.y = 200.0;

bbcShape460.rotation += 0.7;
bbcShape460.around.x = 300.0;
bbcShape460.around.y = 200.0;

bbcShape461.rotation += 0.7;
bbcShape461.around.x = 300.0;
bbcShape461.around.y = 200.0;

bbcShape462.rotation += 0.7;
bbcShape462.around.x = 300.0;
bbcShape462.around.y = 200.0;

bbcShape463.rotation += 0.7;
bbcShape463.around.x = 300.0;
bbcShape463.around.y = 200.0;

bbcShape464.rotation += 0.7;
bbcShape464.around.x = 300.0;
bbcShape464.around.y = 200.0;

bbcShape465.rotation += 0.7;
bbcShape465.around.x = 300.0;
bbcShape465.around.y = 200.0;

bbcShape466.rotation += 0.7;
bbcShape466.around.x = 300.0;
bbcShape466.around.y = 200.0;

bbcShape467.rotation += 0.7;
bbcShape467.around.x = 300.0;
bbcShape467.around.y = 200.0;

bbcShape468.rotation += 0.7;
bbcShape468.around.x = 300.0;
bbcShape468.around.y = 200.0;

bbcShape469.rotation += 0.7;
bbcShape469.around.x = 300.0;
bbcShape469.around.y = 200.0;

bbcShape470.rotation += 0.7;
bbcShape470.around.x = 300.0;
bbcShape470.around.y = 200.0;

bbcShape471.rotation += 0.4;
bbcShape471.around.x = 300.0;
bbcShape471.around.y = 200.0;

bbcShape472.rotation += 0.8;
bbcShape472.around.x = 300.0;
bbcShape472.around.y = 200.0;

bbcShape473.rotation += 0.8;
bbcShape473.around.x = 300.0;
bbcShape473.around.y = 200.0;

bbcShape474.rotation += 0.8;
bbcShape474.around.x = 300.0;
bbcShape474.around.y = 200.0;

bbcShape475.rotation += 0.8;
bbcShape475.around.x = 300.0;
bbcShape475.around.y = 200.0;

bbcShape476.rotation += 0.8;
bbcShape476.around.x = 300.0;
bbcShape476.around.y = 200.0;

bbcShape477.rotation += 0.8;
bbcShape477.around.x = 300.0;
bbcShape477.around.y = 200.0;

bbcShape478.rotation += 0.8;
bbcShape478.around.x = 300.0;
bbcShape478.around.y = 200.0;

bbcShape479.rotation += 0.8;
bbcShape479.around.x = 300.0;
bbcShape479.around.y = 200.0;

bbcShape480.rotation += 0.8;
bbcShape480.around.x = 300.0;
bbcShape480.around.y = 200.0;

bbcShape481.rotation += 0.8;
bbcShape481.around.x = 300.0;
bbcShape481.around.y = 200.0;

bbcShape482.rotation += 0.8;
bbcShape482.around.x = 300.0;
bbcShape482.around.y = 200.0;

bbcShape483.rotation += 0.8;
bbcShape483.around.x = 300.0;
bbcShape483.around.y = 200.0;

bbcShape484.rotation += 0.8;
bbcShape484.around.x = 300.0;
bbcShape484.around.y = 200.0;

bbcShape485.rotation += 0.8;
bbcShape485.around.x = 300.0;
bbcShape485.around.y = 200.0;

bbcShape486.rotation += 0.8;
bbcShape486.around.x = 300.0;
bbcShape486.around.y = 200.0;

bbcShape487.rotation += 0.8;
bbcShape487.around.x = 300.0;
bbcShape487.around.y = 200.0;

bbcShape488.rotation += 0.8;
bbcShape488.around.x = 300.0;
bbcShape488.around.y = 200.0;

bbcShape489.rotation += 0.8;
bbcShape489.around.x = 300.0;
bbcShape489.around.y = 200.0;

bbcShape490.rotation += 0.8;
bbcShape490.around.x = 300.0;
bbcShape490.around.y = 200.0;

bbcShape491.rotation += 0.8;
bbcShape491.around.x = 300.0;
bbcShape491.around.y = 200.0;

bbcShape492.rotation += 0.45;
bbcShape492.around.x = 300.0;
bbcShape492.around.y = 200.0;

bbcShape493.rotation += 0.9;
bbcShape493.around.x = 300.0;
bbcShape493.around.y = 200.0;

bbcShape494.rotation += 0.9;
bbcShape494.around.x = 300.0;
bbcShape494.around.y = 200.0;

bbcShape495.rotation += 0.9;
bbcShape495.around.x = 300.0;
bbcShape495.around.y = 200.0;

bbcShape496.rotation += 0.9;
bbcShape496.around.x = 300.0;
bbcShape496.around.y = 200.0;

bbcShape497.rotation += 0.9;
bbcShape497.around.x = 300.0;
bbcShape497.around.y = 200.0;

bbcShape498.rotation += 0.9;
bbcShape498.around.x = 300.0;
bbcShape498.around.y = 200.0;

bbcShape499.rotation += 0.9;
bbcShape499.around.x = 300.0;
bbcShape499.around.y = 200.0;

bbcShape500.rotation += 0.9;
bbcShape500.around.x = 300.0;
bbcShape500.around.y = 200.0;

bbcShape501.rotation += 0.9;
bbcShape501.around.x = 300.0;
bbcShape501.around.y = 200.0;

bbcShape502.rotation += 0.9;
bbcShape502.around.x = 300.0;
bbcShape502.around.y = 200.0;

bbcShape503.rotation += 0.9;
bbcShape503.around.x = 300.0;
bbcShape503.around.y = 200.0;

bbcShape504.rotation += 0.9;
bbcShape504.around.x = 300.0;
bbcShape504.around.y = 200.0;

bbcShape505.rotation += 0.9;
bbcShape505.around.x = 300.0;
bbcShape505.around.y = 200.0;

bbcShape506.rotation += 0.9;
bbcShape506.around.x = 300.0;
bbcShape506.around.y = 200.0;

bbcShape507.rotation += 0.9;
bbcShape507.around.x = 300.0;
bbcShape507.around.y = 200.0;

bbcShape508.rotation += 0.9;
bbcShape508.around.x = 300.0;
bbcShape508.around.y = 200.0;

bbcShape509.rotation += 0.9;
bbcShape509.around.x = 300.0;
bbcShape509.around.y = 200.0;

bbcShape510.rotation += 0.9;
bbcShape510.around.x = 300.0;
bbcShape510.around.y = 200.0;

bbcShape511.rotation += 0.9;
bbcShape511.around.x = 300.0;
bbcShape511.around.y = 200.0;

bbcShape512.rotation += 0.9;
bbcShape512.around.x = 300.0;
bbcShape512.around.y = 200.0;

bbcShape513.rotation += 0.5;
bbcShape513.around.x = 300.0;
bbcShape513.around.y = 200.0;

bbcShape514.rotation += 1.0;
bbcShape514.around.x = 300.0;
bbcShape514.around.y = 200.0;

bbcShape515.rotation += 1.0;
bbcShape515.around.x = 300.0;
bbcShape515.around.y = 200.0;

bbcShape516.rotation += 1.0;
bbcShape516.around.x = 300.0;
bbcShape516.around.y = 200.0;

bbcShape517.rotation += 1.0;
bbcShape517.around.x = 300.0;
bbcShape517.around.y = 200.0;

bbcShape518.rotation += 1.0;
bbcShape518.around.x = 300.0;
bbcShape518.around.y = 200.0;

bbcShape519.rotation += 1.0;
bbcShape519.around.x = 300.0;
bbcShape519.around.y = 200.0;

bbcShape520.rotation += 1.0;
bbcShape520.around.x = 300.0;
bbcShape520.around.y = 200.0;

bbcShape521.rotation += 1.0;
bbcShape521.around.x = 300.0;
bbcShape521.around.y = 200.0;

bbcShape522.rotation += 1.0;
bbcShape522.around.x = 300.0;
bbcShape522.around.y = 200.0;

bbcShape523.rotation += 1.0;
bbcShape523.around.x = 300.0;
bbcShape523.around.y = 200.0;

bbcShape524.rotation += 1.0;
bbcShape524.around.x = 300.0;
bbcShape524.around.y = 200.0;

bbcShape525.rotation += 1.0;
bbcShape525.around.x = 300.0;
bbcShape525.around.y = 200.0;

bbcShape526.rotation += 1.0;
bbcShape526.around.x = 300.0;
bbcShape526.around.y = 200.0;

bbcShape527.rotation += 1.0;
bbcShape527.around.x = 300.0;
bbcShape527.around.y = 200.0;

bbcShape528.rotation += 1.0;
bbcShape528.around.x = 300.0;
bbcShape528.around.y = 200.0;

bbcShape529.rotation += 1.0;
bbcShape529.around.x = 300.0;
bbcShape529.around.y = 200.0;

bbcShape530.rotation += 1.0;
bbcShape530.around.x = 300.0;
bbcShape530.around.y = 200.0;

bbcShape531.rotation += 1.0;
bbcShape531.around.x = 300.0;
bbcShape531.around.y = 200.0;

bbcShape532.rotation += 1.0;
bbcShape532.around.x = 300.0;
bbcShape532.around.y = 200.0;

bbcShape533.rotation += 1.0;
bbcShape533.around.x = 300.0;
bbcShape533.around.y = 200.0;

bbcShape534.rotation += 0.55;
bbcShape534.around.x = 300.0;
bbcShape534.around.y = 200.0;

bbcShape535.rotation += 1.1;
bbcShape535.around.x = 300.0;
bbcShape535.around.y = 200.0;

bbcShape536.rotation += 1.1;
bbcShape536.around.x = 300.0;
bbcShape536.around.y = 200.0;

bbcShape537.rotation += 1.1;
bbcShape537.around.x = 300.0;
bbcShape537.around.y = 200.0;

bbcShape538.rotation += 1.1;
bbcShape538.around.x = 300.0;
bbcShape538.around.y = 200.0;

bbcShape539.rotation += 1.1;
bbcShape539.around.x = 300.0;
bbcShape539.around.y = 200.0;

bbcShape540.rotation += 1.1;
bbcShape540.around.x = 300.0;
bbcShape540.around.y = 200.0;

bbcShape541.rotation += 1.1;
bbcShape541.around.x = 300.0;
bbcShape541.around.y = 200.0;

bbcShape542.rotation += 1.1;
bbcShape542.around.x = 300.0;
bbcShape542.around.y = 200.0;

bbcShape543.rotation += 1.1;
bbcShape543.around.x = 300.0;
bbcShape543.around.y = 200.0;

bbcShape544.rotation += 1.1;
bbcShape544.around.x = 300.0;
bbcShape544.around.y = 200.0;

bbcShape545.rotation += 1.1;
bbcShape545.around.x = 300.0;
bbcShape545.around.y = 200.0;

bbcShape546.rotation += 1.1;
bbcShape546.around.x = 300.0;
bbcShape546.around.y = 200.0;

bbcShape547.rotation += 1.1;
bbcShape547.around.x = 300.0;
bbcShape547.around.y = 200.0;

bbcShape548.rotation += 1.1;
bbcShape548.around.x = 300.0;
bbcShape548.around.y = 200.0;

bbcShape549.rotation += 1.1;
bbcShape549.around.x = 300.0;
bbcShape549.around.y = 200.0;

bbcShape550.rotation += 1.1;
bbcShape550.around.x = 300.0;
bbcShape550.around.y = 200.0;

bbcShape551.rotation += 1.1;
bbcShape551.around.x = 300.0;
bbcShape551.around.y = 200.0;

bbcShape552.rotation += 1.1;
bbcShape552.around.x = 300.0;
bbcShape552.around.y = 200.0;

bbcShape553.rotation += 1.1;
bbcShape553.around.x = 300.0;
bbcShape553.around.y = 200.0;

bbcShape554.rotation += 1.1;
bbcShape554.around.x = 300.0;
bbcShape554.around.y = 200.0;

bbcShape555.rotation += 0.6;
bbcShape555.around.x = 300.0;
bbcShape555.around.y = 200.0;

bbcShape556.rotation += 1.2;
bbcShape556.around.x = 300.0;
bbcShape556.around.y = 200.0;

bbcShape557.rotation += 1.2;
bbcShape557.around.x = 300.0;
bbcShape557.around.y = 200.0;

bbcShape558.rotation += 1.2;
bbcShape558.around.x = 300.0;
bbcShape558.around.y = 200.0;

bbcShape559.rotation += 1.2;
bbcShape559.around.x = 300.0;
bbcShape559.around.y = 200.0;

bbcShape560.rotation += 1.2;
bbcShape560.around.x = 300.0;
bbcShape560.around.y = 200.0;

bbcShape561.rotation += 1.2;
bbcShape561.around.x = 300.0;
bbcShape561.around.y = 200.0;

bbcShape562.rotation += 1.2;
bbcShape562.around.x = 300.0;
bbcShape562.around.y = 200.0;

bbcShape563.rotation += 1.2;
bbcShape563.around.x = 300.0;
bbcShape563.around.y = 200.0;

bbcShape564.rotation += 1.2;
bbcShape564.around.x = 300.0;
bbcShape564.around.y = 200.0;

bbcShape565.rotation += 1.2;
bbcShape565.around.x = 300.0;
bbcShape565.around.y = 200.0;

bbcShape566.rotation += 1.2;
bbcShape566.around.x = 300.0;
bbcShape566.around.y = 200.0;

bbcShape567.rotation += 1.2;
bbcShape567.around.x = 300.0;
bbcShape567.around.y = 200.0;

bbcShape568.rotation += 1.2;
bbcShape568.around.x = 300.0;
bbcShape568.around.y = 200.0;

bbcShape569.rotation += 1.2;
bbcShape569.around.x = 300.0;
bbcShape569.around.y = 200.0;

bbcShape570.rotation += 1.2;
bbcShape570.around.x = 300.0;
bbcShape570.around.y = 200.0;

bbcShape571.rotation += 1.2;
bbcShape571.around.x = 300.0;
bbcShape571.around.y = 200.0;

bbcShape572.rotation += 1.2;
bbcShape572.around.x = 300.0;
bbcShape572.around.y = 200.0;

bbcShape573.rotation += 1.2;
bbcShape573.around.x = 300.0;
bbcShape573.around.y = 200.0;

bbcShape574.rotation += 1.2;
bbcShape574.around.x = 300.0;
bbcShape574.around.y = 200.0;

bbcShape575.rotation += 1.2;
bbcShape575.around.x = 300.0;
bbcShape575.around.y = 200.0;

bbcShape576.rotation += 0.65;
bbcShape576.around.x = 300.0;
bbcShape576.around.y = 200.0;

bbcShape577.rotation += 1.3;
bbcShape577.around.x = 300.0;
bbcShape577.around.y = 200.0;

bbcShape578.rotation += 1.3;
bbcShape578.around.x = 300.0;
bbcShape578.around.y = 200.0;

bbcShape579.rotation += 1.3;
bbcShape579.around.x = 300.0;
bbcShape579.around.y = 200.0;

bbcShape580.rotation += 1.3;
bbcShape580.around.x = 300.0;
bbcShape580.around.y = 200.0;

bbcShape581.rotation += 1.3;
bbcShape581.around.x = 300.0;
bbcShape581.around.y = 200.0;

bbcShape582.rotation += 1.3;
bbcShape582.around.x = 300.0;
bbcShape582.around.y = 200.0;

bbcShape583.rotation += 1.3;
bbcShape583.around.x = 300.0;
bbcShape583.around.y = 200.0;

bbcShape584.rotation += 1.3;
bbcShape584.around.x = 300.0;
bbcShape584.around.y = 200.0;

bbcShape585.rotation += 1.3;
bbcShape585.around.x = 300.0;
bbcShape585.around.y = 200.0;

bbcShape586.rotation += 1.3;
bbcShape586.around.x = 300.0;
bbcShape586.around.y = 200.0;

bbcShape587.rotation += 1.3;
bbcShape587.around.x = 300.0;
bbcShape587.around.y = 200.0;

bbcShape588.rotation += 1.3;
bbcShape588.around.x = 300.0;
bbcShape588.around.y = 200.0;

bbcShape589.rotation += 1.3;
bbcShape589.around.x = 300.0;
bbcShape589.around.y = 200.0;

bbcShape590.rotation += 1.3;
bbcShape590.around.x = 300.0;
bbcShape590.around.y = 200.0;

bbcShape591.rotation += 1.3;
bbcShape591.around.x = 300.0;
bbcShape591.around.y = 200.0;

bbcShape592.rotation += 1.3;
bbcShape592.around.x = 300.0;
bbcShape592.around.y = 200.0;

bbcShape593.rotation += 1.3;
bbcShape593.around.x = 300.0;
bbcShape593.around.y = 200.0;

bbcShape594.rotation += 1.3;
bbcShape594.around.x = 300.0;
bbcShape594.around.y = 200.0;

bbcShape595.rotation += 1.3;
bbcShape595.around.x = 300.0;
bbcShape595.around.y = 200.0;

bbcShape596.rotation += 1.3;
bbcShape596.around.x = 300.0;
bbcShape596.around.y = 200.0;

bbcShape597.rotation += 0.7;
bbcShape597.around.x = 300.0;
bbcShape597.around.y = 200.0;

bbcShape598.rotation += 1.4;
bbcShape598.around.x = 300.0;
bbcShape598.around.y = 200.0;

bbcShape599.rotation += 1.4;
bbcShape599.around.x = 300.0;
bbcShape599.around.y = 200.0;

bbcShape600.rotation += 1.4;
bbcShape600.around.x = 300.0;
bbcShape600.around.y = 200.0;

bbcShape601.rotation += 1.4;
bbcShape601.around.x = 300.0;
bbcShape601.around.y = 200.0;

bbcShape602.rotation += 1.4;
bbcShape602.around.x = 300.0;
bbcShape602.around.y = 200.0;

bbcShape603.rotation += 1.4;
bbcShape603.around.x = 300.0;
bbcShape603.around.y = 200.0;

bbcShape604.rotation += 1.4;
bbcShape604.around.x = 300.0;
bbcShape604.around.y = 200.0;

bbcShape605.rotation += 1.4;
bbcShape605.around.x = 300.0;
bbcShape605.around.y = 200.0;

bbcShape606.rotation += 1.4;
bbcShape606.around.x = 300.0;
bbcShape606.around.y = 200.0;

bbcShape607.rotation += 1.4;
bbcShape607.around.x = 300.0;
bbcShape607.around.y = 200.0;

bbcShape608.rotation += 1.4;
bbcShape608.around.x = 300.0;
bbcShape608.around.y = 200.0;

bbcShape609.rotation += 1.4;
bbcShape609.around.x = 300.0;
bbcShape609.around.y = 200.0;

bbcShape610.rotation += 1.4;
bbcShape610.around.x = 300.0;
bbcShape610.around.y = 200.0;

bbcShape611.rotation += 1.4;
bbcShape611.around.x = 300.0;
bbcShape611.around.y = 200.0;

bbcShape612.rotation += 1.4;
bbcShape612.around.x = 300.0;
bbcShape612.around.y = 200.0;

bbcShape613.rotation += 1.4;
bbcShape613.around.x = 300.0;
bbcShape613.around.y = 200.0;

bbcShape614.rotation += 1.4;
bbcShape614.around.x = 300.0;
bbcShape614.around.y = 200.0;

bbcShape615.rotation += 1.4;
bbcShape615.around.x = 300.0;
bbcShape615.around.y = 200.0;

bbcShape616.rotation += 1.4;
bbcShape616.around.x = 300.0;
bbcShape616.around.y = 200.0;

bbcShape617.rotation += 1.4;
bbcShape617.around.x = 300.0;
bbcShape617.around.y = 200.0;

bbcShape618.rotation += 0.75;
bbcShape618.around.x = 300.0;
bbcShape618.around.y = 200.0;

bbcShape619.rotation += 1.5;
bbcShape619.around.x = 300.0;
bbcShape619.around.y = 200.0;

bbcShape620.rotation += 1.5;
bbcShape620.around.x = 300.0;
bbcShape620.around.y = 200.0;

bbcShape621.rotation += 1.5;
bbcShape621.around.x = 300.0;
bbcShape621.around.y = 200.0;

bbcShape622.rotation += 1.5;
bbcShape622.around.x = 300.0;
bbcShape622.around.y = 200.0;

bbcShape623.rotation += 1.5;
bbcShape623.around.x = 300.0;
bbcShape623.around.y = 200.0;

bbcShape624.rotation += 1.5;
bbcShape624.around.x = 300.0;
bbcShape624.around.y = 200.0;

bbcShape625.rotation += 1.5;
bbcShape625.around.x = 300.0;
bbcShape625.around.y = 200.0;

bbcShape626.rotation += 1.5;
bbcShape626.around.x = 300.0;
bbcShape626.around.y = 200.0;

bbcShape627.rotation += 1.5;
bbcShape627.around.x = 300.0;
bbcShape627.around.y = 200.0;

bbcShape628.rotation += 1.5;
bbcShape628.around.x = 300.0;
bbcShape628.around.y = 200.0;

bbcShape629.rotation += 1.5;
bbcShape629.around.x = 300.0;
bbcShape629.around.y = 200.0;

bbcShape630.rotation += 1.5;
bbcShape630.around.x = 300.0;
bbcShape630.around.y = 200.0;

bbcShape631.rotation += 1.5;
bbcShape631.around.x = 300.0;
bbcShape631.around.y = 200.0;

bbcShape632.rotation += 1.5;
bbcShape632.around.x = 300.0;
bbcShape632.around.y = 200.0;

bbcShape633.rotation += 1.5;
bbcShape633.around.x = 300.0;
bbcShape633.around.y = 200.0;

bbcShape634.rotation += 1.5;
bbcShape634.around.x = 300.0;
bbcShape634.around.y = 200.0;

bbcShape635.rotation += 1.5;
bbcShape635.around.x = 300.0;
bbcShape635.around.y = 200.0;

bbcShape636.rotation += 1.5;
bbcShape636.around.x = 300.0;
bbcShape636.around.y = 200.0;

bbcShape637.rotation += 1.5;
bbcShape637.around.x = 300.0;
bbcShape637.around.y = 200.0;

bbcShape638.rotation += 1.5;
bbcShape638.around.x = 300.0;
bbcShape638.around.y = 200.0;

bbcShape639.rotation += 0.8;
bbcShape639.around.x = 300.0;
bbcShape639.around.y = 200.0;

bbcShape640.rotation += 1.6;
bbcShape640.around.x = 300.0;
bbcShape640.around.y = 200.0;

bbcShape641.rotation += 1.6;
bbcShape641.around.x = 300.0;
bbcShape641.around.y = 200.0;

bbcShape642.rotation += 1.6;
bbcShape642.around.x = 300.0;
bbcShape642.around.y = 200.0;

bbcShape643.rotation += 1.6;
bbcShape643.around.x = 300.0;
bbcShape643.around.y = 200.0;

bbcShape644.rotation += 1.6;
bbcShape644.around.x = 300.0;
bbcShape644.around.y = 200.0;

bbcShape645.rotation += 1.6;
bbcShape645.around.x = 300.0;
bbcShape645.around.y = 200.0;

bbcShape646.rotation += 1.6;
bbcShape646.around.x = 300.0;
bbcShape646.around.y = 200.0;

bbcShape647.rotation += 1.6;
bbcShape647.around.x = 300.0;
bbcShape647.around.y = 200.0;

bbcShape648.rotation += 1.6;
bbcShape648.around.x = 300.0;
bbcShape648.around.y = 200.0;

bbcShape649.rotation += 1.6;
bbcShape649.around.x = 300.0;
bbcShape649.around.y = 200.0;

bbcShape650.rotation += 1.6;
bbcShape650.around.x = 300.0;
bbcShape650.around.y = 200.0;

bbcShape651.rotation += 1.6;
bbcShape651.around.x = 300.0;
bbcShape651.around.y = 200.0;

bbcShape652.rotation += 1.6;
bbcShape652.around.x = 300.0;
bbcShape652.around.y = 200.0;

bbcShape653.rotation += 1.6;
bbcShape653.around.x = 300.0;
bbcShape653.around.y = 200.0;

bbcShape654.rotation += 1.6;
bbcShape654.around.x = 300.0;
bbcShape654.around.y = 200.0;

bbcShape655.rotation += 1.6;
bbcShape655.around.x = 300.0;
bbcShape655.around.y = 200.0;

bbcShape656.rotation += 1.6;
bbcShape656.around.x = 300.0;
bbcShape656.around.y = 200.0;

bbcShape657.rotation += 1.6;
bbcShape657.around.x = 300.0;
bbcShape657.around.y = 200.0;

bbcShape658.rotation += 1.6;
bbcShape658.around.x = 300.0;
bbcShape658.around.y = 200.0;

bbcShape659.rotation += 1.6;
bbcShape659.around.x = 300.0;
bbcShape659.around.y = 200.0;

bbcShape660.rotation += 0.85;
bbcShape660.around.x = 300.0;
bbcShape660.around.y = 200.0;

bbcShape661.rotation += 1.7;
bbcShape661.around.x = 300.0;
bbcShape661.around.y = 200.0;

bbcShape662.rotation += 1.7;
bbcShape662.around.x = 300.0;
bbcShape662.around.y = 200.0;

bbcShape663.rotation += 1.7;
bbcShape663.around.x = 300.0;
bbcShape663.around.y = 200.0;

bbcShape664.rotation += 1.7;
bbcShape664.around.x = 300.0;
bbcShape664.around.y = 200.0;

bbcShape665.rotation += 1.7;
bbcShape665.around.x = 300.0;
bbcShape665.around.y = 200.0;

bbcShape666.rotation += 1.7;
bbcShape666.around.x = 300.0;
bbcShape666.around.y = 200.0;

bbcShape667.rotation += 1.7;
bbcShape667.around.x = 300.0;
bbcShape667.around.y = 200.0;

bbcShape668.rotation += 1.7;
bbcShape668.around.x = 300.0;
bbcShape668.around.y = 200.0;

bbcShape669.rotation += 1.7;
bbcShape669.around.x = 300.0;
bbcShape669.around.y = 200.0;

bbcShape670.rotation += 1.7;
bbcShape670.around.x = 300.0;
bbcShape670.around.y = 200.0;

bbcShape671.rotation += 1.7;
bbcShape671.around.x = 300.0;
bbcShape671.around.y = 200.0;

bbcShape672.rotation += 1.7;
bbcShape672.around.x = 300.0;
bbcShape672.around.y = 200.0;

bbcShape673.rotation += 1.7;
bbcShape673.around.x = 300.0;
bbcShape673.around.y = 200.0;

bbcShape674.rotation += 1.7;
bbcShape674.around.x = 300.0;
bbcShape674.around.y = 200.0;

bbcShape675.rotation += 1.7;
bbcShape675.around.x = 300.0;
bbcShape675.around.y = 200.0;

bbcShape676.rotation += 1.7;
bbcShape676.around.x = 300.0;
bbcShape676.around.y = 200.0;

bbcShape677.rotation += 1.7;
bbcShape677.around.x = 300.0;
bbcShape677.around.y = 200.0;

bbcShape678.rotation += 1.7;
bbcShape678.around.x = 300.0;
bbcShape678.around.y = 200.0;

bbcShape679.rotation += 1.7;
bbcShape679.around.x = 300.0;
bbcShape679.around.y = 200.0;

bbcShape680.rotation += 1.7;
bbcShape680.around.x = 300.0;
bbcShape680.around.y = 200.0;

bbcShape681.rotation += 0.9;
bbcShape681.around.x = 300.0;
bbcShape681.around.y = 200.0;

bbcShape682.rotation += 1.8;
bbcShape682.around.x = 300.0;
bbcShape682.around.y = 200.0;

bbcShape683.rotation += 1.8;
bbcShape683.around.x = 300.0;
bbcShape683.around.y = 200.0;

bbcShape684.rotation += 1.8;
bbcShape684.around.x = 300.0;
bbcShape684.around.y = 200.0;

bbcShape685.rotation += 1.8;
bbcShape685.around.x = 300.0;
bbcShape685.around.y = 200.0;

bbcShape686.rotation += 1.8;
bbcShape686.around.x = 300.0;
bbcShape686.around.y = 200.0;

bbcShape687.rotation += 1.8;
bbcShape687.around.x = 300.0;
bbcShape687.around.y = 200.0;

bbcShape688.rotation += 1.8;
bbcShape688.around.x = 300.0;
bbcShape688.around.y = 200.0;

bbcShape689.rotation += 1.8;
bbcShape689.around.x = 300.0;
bbcShape689.around.y = 200.0;

bbcShape690.rotation += 1.8;
bbcShape690.around.x = 300.0;
bbcShape690.around.y = 200.0;

bbcShape691.rotation += 1.8;
bbcShape691.around.x = 300.0;
bbcShape691.around.y = 200.0;

bbcShape692.rotation += 1.8;
bbcShape692.around.x = 300.0;
bbcShape692.around.y = 200.0;

bbcShape693.rotation += 1.8;
bbcShape693.around.x = 300.0;
bbcShape693.around.y = 200.0;

bbcShape694.rotation += 1.8;
bbcShape694.around.x = 300.0;
bbcShape694.around.y = 200.0;

bbcShape695.rotation += 1.8;
bbcShape695.around.x = 300.0;
bbcShape695.around.y = 200.0;

bbcShape696.rotation += 1.8;
bbcShape696.around.x = 300.0;
bbcShape696.around.y = 200.0;

bbcShape697.rotation += 1.8;
bbcShape697.around.x = 300.0;
bbcShape697.around.y = 200.0;

bbcShape698.rotation += 1.8;
bbcShape698.around.x = 300.0;
bbcShape698.around.y = 200.0;

bbcShape699.rotation += 1.8;
bbcShape699.around.x = 300.0;
bbcShape699.around.y = 200.0;

bbcShape700.rotation += 1.8;
bbcShape700.around.x = 300.0;
bbcShape700.around.y = 200.0;

bbcShape701.rotation += 1.8;
bbcShape701.around.x = 300.0;
bbcShape701.around.y = 200.0;

bbcShape702.rotation += 0.95;
bbcShape702.around.x = 300.0;
bbcShape702.around.y = 200.0;

bbcShape703.rotation += 1.9;
bbcShape703.around.x = 300.0;
bbcShape703.around.y = 200.0;

bbcShape704.rotation += 1.9;
bbcShape704.around.x = 300.0;
bbcShape704.around.y = 200.0;

bbcShape705.rotation += 1.9;
bbcShape705.around.x = 300.0;
bbcShape705.around.y = 200.0;

bbcShape706.rotation += 1.9;
bbcShape706.around.x = 300.0;
bbcShape706.around.y = 200.0;

bbcShape707.rotation += 1.9;
bbcShape707.around.x = 300.0;
bbcShape707.around.y = 200.0;

bbcShape708.rotation += 1.9;
bbcShape708.around.x = 300.0;
bbcShape708.around.y = 200.0;

bbcShape709.rotation += 1.9;
bbcShape709.around.x = 300.0;
bbcShape709.around.y = 200.0;

bbcShape710.rotation += 1.9;
bbcShape710.around.x = 300.0;
bbcShape710.around.y = 200.0;

bbcShape711.rotation += 1.9;
bbcShape711.around.x = 300.0;
bbcShape711.around.y = 200.0;

bbcShape712.rotation += 1.9;
bbcShape712.around.x = 300.0;
bbcShape712.around.y = 200.0;

bbcShape713.rotation += 1.9;
bbcShape713.around.x = 300.0;
bbcShape713.around.y = 200.0;

bbcShape714.rotation += 1.9;
bbcShape714.around.x = 300.0;
bbcShape714.around.y = 200.0;

bbcShape715.rotation += 1.9;
bbcShape715.around.x = 300.0;
bbcShape715.around.y = 200.0;

bbcShape716.rotation += 1.9;
bbcShape716.around.x = 300.0;
bbcShape716.around.y = 200.0;

bbcShape717.rotation += 1.9;
bbcShape717.around.x = 300.0;
bbcShape717.around.y = 200.0;

bbcShape718.rotation += 1.9;
bbcShape718.around.x = 300.0;
bbcShape718.around.y = 200.0;

bbcShape719.rotation += 1.9;
bbcShape719.around.x = 300.0;
bbcShape719.around.y = 200.0;

bbcShape720.rotation += 1.9;
bbcShape720.around.x = 300.0;
bbcShape720.around.y = 200.0;

bbcShape721.rotation += 1.9;
bbcShape721.around.x = 300.0;
bbcShape721.around.y = 200.0;

bbcShape722.rotation += 1.9;
bbcShape722.around.x = 300.0;
bbcShape722.around.y = 200.0;

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);
ctx.fillStyle = BACKGROUND_COLOR;
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

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
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape2.around.x, bbcShape2.around.y);
ctx.rotate(bbcShape2.rotation * Math.PI / 180);
ctx.translate(-bbcShape2.around.x, -bbcShape2.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape2.points[0][0], bbcShape2.points[0][1]);
ctx.lineTo(bbcShape2.points[1][0], bbcShape2.points[1][1]);
ctx.lineTo(bbcShape2.points[2][0], bbcShape2.points[2][1]);
ctx.lineTo(bbcShape2.points[3][0], bbcShape2.points[3][1]);
ctx.lineTo(bbcShape2.points[4][0], bbcShape2.points[4][1]);
ctx.lineTo(bbcShape2.points[5][0], bbcShape2.points[5][1]);
ctx.lineTo(bbcShape2.points[6][0], bbcShape2.points[6][1]);
ctx.lineTo(bbcShape2.points[7][0], bbcShape2.points[7][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 33, 204)';

ctx.save();
ctx.translate(bbcShape3.around.x, bbcShape3.around.y);
ctx.rotate(bbcShape3.rotation * Math.PI / 180);
ctx.translate(-bbcShape3.around.x, -bbcShape3.around.y);
ctx.beginPath();
ctx.arc(bbcShape3.point.x, bbcShape3.point.y, bbcShape3.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(58, 25, 131)';

ctx.save();
ctx.translate(bbcShape4.around.x, bbcShape4.around.y);
ctx.rotate(bbcShape4.rotation * Math.PI / 180);
ctx.translate(-bbcShape4.around.x, -bbcShape4.around.y);
ctx.beginPath();
ctx.arc(bbcShape4.point.x, bbcShape4.point.y, bbcShape4.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(236, 247, 131)';

ctx.save();
ctx.translate(bbcShape5.around.x, bbcShape5.around.y);
ctx.rotate(bbcShape5.rotation * Math.PI / 180);
ctx.translate(-bbcShape5.around.x, -bbcShape5.around.y);
ctx.beginPath();
ctx.arc(bbcShape5.point.x, bbcShape5.point.y, bbcShape5.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(204, 86, 41)';

ctx.save();
ctx.translate(bbcShape6.around.x, bbcShape6.around.y);
ctx.rotate(bbcShape6.rotation * Math.PI / 180);
ctx.translate(-bbcShape6.around.x, -bbcShape6.around.y);
ctx.beginPath();
ctx.arc(bbcShape6.point.x, bbcShape6.point.y, bbcShape6.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(192, 25, 91)';

ctx.save();
ctx.translate(bbcShape7.around.x, bbcShape7.around.y);
ctx.rotate(bbcShape7.rotation * Math.PI / 180);
ctx.translate(-bbcShape7.around.x, -bbcShape7.around.y);
ctx.beginPath();
ctx.arc(bbcShape7.point.x, bbcShape7.point.y, bbcShape7.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(109, 145, 97)';

ctx.save();
ctx.translate(bbcShape8.around.x, bbcShape8.around.y);
ctx.rotate(bbcShape8.rotation * Math.PI / 180);
ctx.translate(-bbcShape8.around.x, -bbcShape8.around.y);
ctx.beginPath();
ctx.arc(bbcShape8.point.x, bbcShape8.point.y, bbcShape8.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(105, 254, 142)';

ctx.save();
ctx.translate(bbcShape9.around.x, bbcShape9.around.y);
ctx.rotate(bbcShape9.rotation * Math.PI / 180);
ctx.translate(-bbcShape9.around.x, -bbcShape9.around.y);
ctx.beginPath();
ctx.arc(bbcShape9.point.x, bbcShape9.point.y, bbcShape9.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(73, 223, 171)';

ctx.save();
ctx.translate(bbcShape10.around.x, bbcShape10.around.y);
ctx.rotate(bbcShape10.rotation * Math.PI / 180);
ctx.translate(-bbcShape10.around.x, -bbcShape10.around.y);
ctx.beginPath();
ctx.arc(bbcShape10.point.x, bbcShape10.point.y, bbcShape10.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 147, 161)';

ctx.save();
ctx.translate(bbcShape11.around.x, bbcShape11.around.y);
ctx.rotate(bbcShape11.rotation * Math.PI / 180);
ctx.translate(-bbcShape11.around.x, -bbcShape11.around.y);
ctx.beginPath();
ctx.arc(bbcShape11.point.x, bbcShape11.point.y, bbcShape11.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(98, 222, 114)';

ctx.save();
ctx.translate(bbcShape12.around.x, bbcShape12.around.y);
ctx.rotate(bbcShape12.rotation * Math.PI / 180);
ctx.translate(-bbcShape12.around.x, -bbcShape12.around.y);
ctx.beginPath();
ctx.arc(bbcShape12.point.x, bbcShape12.point.y, bbcShape12.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(209, 222, 40)';

ctx.save();
ctx.translate(bbcShape13.around.x, bbcShape13.around.y);
ctx.rotate(bbcShape13.rotation * Math.PI / 180);
ctx.translate(-bbcShape13.around.x, -bbcShape13.around.y);
ctx.beginPath();
ctx.arc(bbcShape13.point.x, bbcShape13.point.y, bbcShape13.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(156, 32, 145)';

ctx.save();
ctx.translate(bbcShape14.around.x, bbcShape14.around.y);
ctx.rotate(bbcShape14.rotation * Math.PI / 180);
ctx.translate(-bbcShape14.around.x, -bbcShape14.around.y);
ctx.beginPath();
ctx.arc(bbcShape14.point.x, bbcShape14.point.y, bbcShape14.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 138, 62)';

ctx.save();
ctx.translate(bbcShape15.around.x, bbcShape15.around.y);
ctx.rotate(bbcShape15.rotation * Math.PI / 180);
ctx.translate(-bbcShape15.around.x, -bbcShape15.around.y);
ctx.beginPath();
ctx.arc(bbcShape15.point.x, bbcShape15.point.y, bbcShape15.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255, 209, 1)';

ctx.save();
ctx.translate(bbcShape16.around.x, bbcShape16.around.y);
ctx.rotate(bbcShape16.rotation * Math.PI / 180);
ctx.translate(-bbcShape16.around.x, -bbcShape16.around.y);
ctx.beginPath();
ctx.arc(bbcShape16.point.x, bbcShape16.point.y, bbcShape16.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 103, 201)';

ctx.save();
ctx.translate(bbcShape17.around.x, bbcShape17.around.y);
ctx.rotate(bbcShape17.rotation * Math.PI / 180);
ctx.translate(-bbcShape17.around.x, -bbcShape17.around.y);
ctx.beginPath();
ctx.arc(bbcShape17.point.x, bbcShape17.point.y, bbcShape17.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(202, 167, 134)';

ctx.save();
ctx.translate(bbcShape18.around.x, bbcShape18.around.y);
ctx.rotate(bbcShape18.rotation * Math.PI / 180);
ctx.translate(-bbcShape18.around.x, -bbcShape18.around.y);
ctx.beginPath();
ctx.arc(bbcShape18.point.x, bbcShape18.point.y, bbcShape18.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(131, 98, 104)';

ctx.save();
ctx.translate(bbcShape19.around.x, bbcShape19.around.y);
ctx.rotate(bbcShape19.rotation * Math.PI / 180);
ctx.translate(-bbcShape19.around.x, -bbcShape19.around.y);
ctx.beginPath();
ctx.arc(bbcShape19.point.x, bbcShape19.point.y, bbcShape19.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 32, 37)';

ctx.save();
ctx.translate(bbcShape20.around.x, bbcShape20.around.y);
ctx.rotate(bbcShape20.rotation * Math.PI / 180);
ctx.translate(-bbcShape20.around.x, -bbcShape20.around.y);
ctx.beginPath();
ctx.arc(bbcShape20.point.x, bbcShape20.point.y, bbcShape20.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(118, 254, 248)';

ctx.save();
ctx.translate(bbcShape21.around.x, bbcShape21.around.y);
ctx.rotate(bbcShape21.rotation * Math.PI / 180);
ctx.translate(-bbcShape21.around.x, -bbcShape21.around.y);
ctx.beginPath();
ctx.arc(bbcShape21.point.x, bbcShape21.point.y, bbcShape21.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(118, 175, 181)';

ctx.save();
ctx.translate(bbcShape22.around.x, bbcShape22.around.y);
ctx.rotate(bbcShape22.rotation * Math.PI / 180);
ctx.translate(-bbcShape22.around.x, -bbcShape22.around.y);
ctx.beginPath();
ctx.arc(bbcShape22.point.x, bbcShape22.point.y, bbcShape22.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(242, 16, 161)';

ctx.save();
ctx.translate(bbcShape23.around.x, bbcShape23.around.y);
ctx.rotate(bbcShape23.rotation * Math.PI / 180);
ctx.translate(-bbcShape23.around.x, -bbcShape23.around.y);
ctx.beginPath();
ctx.arc(bbcShape23.point.x, bbcShape23.point.y, bbcShape23.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(83, 72, 252)';

ctx.save();
ctx.translate(bbcShape24.around.x, bbcShape24.around.y);
ctx.rotate(bbcShape24.rotation * Math.PI / 180);
ctx.translate(-bbcShape24.around.x, -bbcShape24.around.y);
ctx.beginPath();
ctx.arc(bbcShape24.point.x, bbcShape24.point.y, bbcShape24.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(14, 37, 149)';

ctx.save();
ctx.translate(bbcShape25.around.x, bbcShape25.around.y);
ctx.rotate(bbcShape25.rotation * Math.PI / 180);
ctx.translate(-bbcShape25.around.x, -bbcShape25.around.y);
ctx.beginPath();
ctx.arc(bbcShape25.point.x, bbcShape25.point.y, bbcShape25.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(151, 212, 117)';

ctx.save();
ctx.translate(bbcShape26.around.x, bbcShape26.around.y);
ctx.rotate(bbcShape26.rotation * Math.PI / 180);
ctx.translate(-bbcShape26.around.x, -bbcShape26.around.y);
ctx.beginPath();
ctx.arc(bbcShape26.point.x, bbcShape26.point.y, bbcShape26.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(218, 124, 75)';

ctx.save();
ctx.translate(bbcShape27.around.x, bbcShape27.around.y);
ctx.rotate(bbcShape27.rotation * Math.PI / 180);
ctx.translate(-bbcShape27.around.x, -bbcShape27.around.y);
ctx.beginPath();
ctx.arc(bbcShape27.point.x, bbcShape27.point.y, bbcShape27.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 116, 159)';

ctx.save();
ctx.translate(bbcShape28.around.x, bbcShape28.around.y);
ctx.rotate(bbcShape28.rotation * Math.PI / 180);
ctx.translate(-bbcShape28.around.x, -bbcShape28.around.y);
ctx.beginPath();
ctx.arc(bbcShape28.point.x, bbcShape28.point.y, bbcShape28.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 111, 88)';

ctx.save();
ctx.translate(bbcShape29.around.x, bbcShape29.around.y);
ctx.rotate(bbcShape29.rotation * Math.PI / 180);
ctx.translate(-bbcShape29.around.x, -bbcShape29.around.y);
ctx.beginPath();
ctx.arc(bbcShape29.point.x, bbcShape29.point.y, bbcShape29.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(156, 145, 102)';

ctx.save();
ctx.translate(bbcShape30.around.x, bbcShape30.around.y);
ctx.rotate(bbcShape30.rotation * Math.PI / 180);
ctx.translate(-bbcShape30.around.x, -bbcShape30.around.y);
ctx.beginPath();
ctx.arc(bbcShape30.point.x, bbcShape30.point.y, bbcShape30.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(208, 196, 3)';

ctx.save();
ctx.translate(bbcShape31.around.x, bbcShape31.around.y);
ctx.rotate(bbcShape31.rotation * Math.PI / 180);
ctx.translate(-bbcShape31.around.x, -bbcShape31.around.y);
ctx.beginPath();
ctx.arc(bbcShape31.point.x, bbcShape31.point.y, bbcShape31.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250, 34, 10)';

ctx.save();
ctx.translate(bbcShape32.around.x, bbcShape32.around.y);
ctx.rotate(bbcShape32.rotation * Math.PI / 180);
ctx.translate(-bbcShape32.around.x, -bbcShape32.around.y);
ctx.beginPath();
ctx.arc(bbcShape32.point.x, bbcShape32.point.y, bbcShape32.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 28, 66)';

ctx.save();
ctx.translate(bbcShape33.around.x, bbcShape33.around.y);
ctx.rotate(bbcShape33.rotation * Math.PI / 180);
ctx.translate(-bbcShape33.around.x, -bbcShape33.around.y);
ctx.beginPath();
ctx.arc(bbcShape33.point.x, bbcShape33.point.y, bbcShape33.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 237, 30)';

ctx.save();
ctx.translate(bbcShape34.around.x, bbcShape34.around.y);
ctx.rotate(bbcShape34.rotation * Math.PI / 180);
ctx.translate(-bbcShape34.around.x, -bbcShape34.around.y);
ctx.beginPath();
ctx.arc(bbcShape34.point.x, bbcShape34.point.y, bbcShape34.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(119, 104, 208)';

ctx.save();
ctx.translate(bbcShape35.around.x, bbcShape35.around.y);
ctx.rotate(bbcShape35.rotation * Math.PI / 180);
ctx.translate(-bbcShape35.around.x, -bbcShape35.around.y);
ctx.beginPath();
ctx.arc(bbcShape35.point.x, bbcShape35.point.y, bbcShape35.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(51, 64, 191)';

ctx.save();
ctx.translate(bbcShape36.around.x, bbcShape36.around.y);
ctx.rotate(bbcShape36.rotation * Math.PI / 180);
ctx.translate(-bbcShape36.around.x, -bbcShape36.around.y);
ctx.beginPath();
ctx.arc(bbcShape36.point.x, bbcShape36.point.y, bbcShape36.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(217, 224, 226)';

ctx.save();
ctx.translate(bbcShape37.around.x, bbcShape37.around.y);
ctx.rotate(bbcShape37.rotation * Math.PI / 180);
ctx.translate(-bbcShape37.around.x, -bbcShape37.around.y);
ctx.beginPath();
ctx.arc(bbcShape37.point.x, bbcShape37.point.y, bbcShape37.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225, 200, 3)';

ctx.save();
ctx.translate(bbcShape38.around.x, bbcShape38.around.y);
ctx.rotate(bbcShape38.rotation * Math.PI / 180);
ctx.translate(-bbcShape38.around.x, -bbcShape38.around.y);
ctx.beginPath();
ctx.arc(bbcShape38.point.x, bbcShape38.point.y, bbcShape38.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(118, 8, 249)';

ctx.save();
ctx.translate(bbcShape39.around.x, bbcShape39.around.y);
ctx.rotate(bbcShape39.rotation * Math.PI / 180);
ctx.translate(-bbcShape39.around.x, -bbcShape39.around.y);
ctx.beginPath();
ctx.arc(bbcShape39.point.x, bbcShape39.point.y, bbcShape39.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(60, 31, 2)';

ctx.save();
ctx.translate(bbcShape40.around.x, bbcShape40.around.y);
ctx.rotate(bbcShape40.rotation * Math.PI / 180);
ctx.translate(-bbcShape40.around.x, -bbcShape40.around.y);
ctx.beginPath();
ctx.arc(bbcShape40.point.x, bbcShape40.point.y, bbcShape40.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 175, 23)';

ctx.save();
ctx.translate(bbcShape41.around.x, bbcShape41.around.y);
ctx.rotate(bbcShape41.rotation * Math.PI / 180);
ctx.translate(-bbcShape41.around.x, -bbcShape41.around.y);
ctx.beginPath();
ctx.arc(bbcShape41.point.x, bbcShape41.point.y, bbcShape41.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(1, 9, 34)';

ctx.save();
ctx.translate(bbcShape42.around.x, bbcShape42.around.y);
ctx.rotate(bbcShape42.rotation * Math.PI / 180);
ctx.translate(-bbcShape42.around.x, -bbcShape42.around.y);
ctx.beginPath();
ctx.arc(bbcShape42.point.x, bbcShape42.point.y, bbcShape42.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(9, 221, 230)';

ctx.save();
ctx.translate(bbcShape43.around.x, bbcShape43.around.y);
ctx.rotate(bbcShape43.rotation * Math.PI / 180);
ctx.translate(-bbcShape43.around.x, -bbcShape43.around.y);
ctx.beginPath();
ctx.arc(bbcShape43.point.x, bbcShape43.point.y, bbcShape43.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(134, 198, 98)';

ctx.save();
ctx.translate(bbcShape44.around.x, bbcShape44.around.y);
ctx.rotate(bbcShape44.rotation * Math.PI / 180);
ctx.translate(-bbcShape44.around.x, -bbcShape44.around.y);
ctx.beginPath();
ctx.arc(bbcShape44.point.x, bbcShape44.point.y, bbcShape44.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(165, 120, 47)';

ctx.save();
ctx.translate(bbcShape45.around.x, bbcShape45.around.y);
ctx.rotate(bbcShape45.rotation * Math.PI / 180);
ctx.translate(-bbcShape45.around.x, -bbcShape45.around.y);
ctx.beginPath();
ctx.arc(bbcShape45.point.x, bbcShape45.point.y, bbcShape45.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 19, 141)';

ctx.save();
ctx.translate(bbcShape46.around.x, bbcShape46.around.y);
ctx.rotate(bbcShape46.rotation * Math.PI / 180);
ctx.translate(-bbcShape46.around.x, -bbcShape46.around.y);
ctx.beginPath();
ctx.arc(bbcShape46.point.x, bbcShape46.point.y, bbcShape46.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125, 102, 111)';

ctx.save();
ctx.translate(bbcShape47.around.x, bbcShape47.around.y);
ctx.rotate(bbcShape47.rotation * Math.PI / 180);
ctx.translate(-bbcShape47.around.x, -bbcShape47.around.y);
ctx.beginPath();
ctx.arc(bbcShape47.point.x, bbcShape47.point.y, bbcShape47.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(95, 177, 39)';

ctx.save();
ctx.translate(bbcShape48.around.x, bbcShape48.around.y);
ctx.rotate(bbcShape48.rotation * Math.PI / 180);
ctx.translate(-bbcShape48.around.x, -bbcShape48.around.y);
ctx.beginPath();
ctx.arc(bbcShape48.point.x, bbcShape48.point.y, bbcShape48.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(166, 151, 21)';

ctx.save();
ctx.translate(bbcShape49.around.x, bbcShape49.around.y);
ctx.rotate(bbcShape49.rotation * Math.PI / 180);
ctx.translate(-bbcShape49.around.x, -bbcShape49.around.y);
ctx.beginPath();
ctx.arc(bbcShape49.point.x, bbcShape49.point.y, bbcShape49.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 164, 253)';

ctx.save();
ctx.translate(bbcShape50.around.x, bbcShape50.around.y);
ctx.rotate(bbcShape50.rotation * Math.PI / 180);
ctx.translate(-bbcShape50.around.x, -bbcShape50.around.y);
ctx.beginPath();
ctx.arc(bbcShape50.point.x, bbcShape50.point.y, bbcShape50.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 189, 78)';

ctx.save();
ctx.translate(bbcShape51.around.x, bbcShape51.around.y);
ctx.rotate(bbcShape51.rotation * Math.PI / 180);
ctx.translate(-bbcShape51.around.x, -bbcShape51.around.y);
ctx.beginPath();
ctx.arc(bbcShape51.point.x, bbcShape51.point.y, bbcShape51.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(140, 24, 90)';

ctx.save();
ctx.translate(bbcShape52.around.x, bbcShape52.around.y);
ctx.rotate(bbcShape52.rotation * Math.PI / 180);
ctx.translate(-bbcShape52.around.x, -bbcShape52.around.y);
ctx.beginPath();
ctx.arc(bbcShape52.point.x, bbcShape52.point.y, bbcShape52.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(76, 103, 92)';

ctx.save();
ctx.translate(bbcShape53.around.x, bbcShape53.around.y);
ctx.rotate(bbcShape53.rotation * Math.PI / 180);
ctx.translate(-bbcShape53.around.x, -bbcShape53.around.y);
ctx.beginPath();
ctx.arc(bbcShape53.point.x, bbcShape53.point.y, bbcShape53.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(38, 135, 70)';

ctx.save();
ctx.translate(bbcShape54.around.x, bbcShape54.around.y);
ctx.rotate(bbcShape54.rotation * Math.PI / 180);
ctx.translate(-bbcShape54.around.x, -bbcShape54.around.y);
ctx.beginPath();
ctx.arc(bbcShape54.point.x, bbcShape54.point.y, bbcShape54.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 199, 21)';

ctx.save();
ctx.translate(bbcShape55.around.x, bbcShape55.around.y);
ctx.rotate(bbcShape55.rotation * Math.PI / 180);
ctx.translate(-bbcShape55.around.x, -bbcShape55.around.y);
ctx.beginPath();
ctx.arc(bbcShape55.point.x, bbcShape55.point.y, bbcShape55.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(200, 97, 159)';

ctx.save();
ctx.translate(bbcShape56.around.x, bbcShape56.around.y);
ctx.rotate(bbcShape56.rotation * Math.PI / 180);
ctx.translate(-bbcShape56.around.x, -bbcShape56.around.y);
ctx.beginPath();
ctx.arc(bbcShape56.point.x, bbcShape56.point.y, bbcShape56.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 204, 82)';

ctx.save();
ctx.translate(bbcShape57.around.x, bbcShape57.around.y);
ctx.rotate(bbcShape57.rotation * Math.PI / 180);
ctx.translate(-bbcShape57.around.x, -bbcShape57.around.y);
ctx.beginPath();
ctx.arc(bbcShape57.point.x, bbcShape57.point.y, bbcShape57.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(188, 174, 73)';

ctx.save();
ctx.translate(bbcShape58.around.x, bbcShape58.around.y);
ctx.rotate(bbcShape58.rotation * Math.PI / 180);
ctx.translate(-bbcShape58.around.x, -bbcShape58.around.y);
ctx.beginPath();
ctx.arc(bbcShape58.point.x, bbcShape58.point.y, bbcShape58.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(77, 18, 72)';

ctx.save();
ctx.translate(bbcShape59.around.x, bbcShape59.around.y);
ctx.rotate(bbcShape59.rotation * Math.PI / 180);
ctx.translate(-bbcShape59.around.x, -bbcShape59.around.y);
ctx.beginPath();
ctx.arc(bbcShape59.point.x, bbcShape59.point.y, bbcShape59.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 86, 193)';

ctx.save();
ctx.translate(bbcShape60.around.x, bbcShape60.around.y);
ctx.rotate(bbcShape60.rotation * Math.PI / 180);
ctx.translate(-bbcShape60.around.x, -bbcShape60.around.y);
ctx.beginPath();
ctx.arc(bbcShape60.point.x, bbcShape60.point.y, bbcShape60.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 222, 4)';

ctx.save();
ctx.translate(bbcShape61.around.x, bbcShape61.around.y);
ctx.rotate(bbcShape61.rotation * Math.PI / 180);
ctx.translate(-bbcShape61.around.x, -bbcShape61.around.y);
ctx.beginPath();
ctx.arc(bbcShape61.point.x, bbcShape61.point.y, bbcShape61.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(194, 31, 29)';

ctx.save();
ctx.translate(bbcShape62.around.x, bbcShape62.around.y);
ctx.rotate(bbcShape62.rotation * Math.PI / 180);
ctx.translate(-bbcShape62.around.x, -bbcShape62.around.y);
ctx.beginPath();
ctx.arc(bbcShape62.point.x, bbcShape62.point.y, bbcShape62.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 75, 251)';

ctx.save();
ctx.translate(bbcShape63.around.x, bbcShape63.around.y);
ctx.rotate(bbcShape63.rotation * Math.PI / 180);
ctx.translate(-bbcShape63.around.x, -bbcShape63.around.y);
ctx.beginPath();
ctx.arc(bbcShape63.point.x, bbcShape63.point.y, bbcShape63.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(224, 82, 70)';

ctx.save();
ctx.translate(bbcShape64.around.x, bbcShape64.around.y);
ctx.rotate(bbcShape64.rotation * Math.PI / 180);
ctx.translate(-bbcShape64.around.x, -bbcShape64.around.y);
ctx.beginPath();
ctx.arc(bbcShape64.point.x, bbcShape64.point.y, bbcShape64.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(33, 87, 225)';

ctx.save();
ctx.translate(bbcShape65.around.x, bbcShape65.around.y);
ctx.rotate(bbcShape65.rotation * Math.PI / 180);
ctx.translate(-bbcShape65.around.x, -bbcShape65.around.y);
ctx.beginPath();
ctx.arc(bbcShape65.point.x, bbcShape65.point.y, bbcShape65.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(22, 77, 190)';

ctx.save();
ctx.translate(bbcShape66.around.x, bbcShape66.around.y);
ctx.rotate(bbcShape66.rotation * Math.PI / 180);
ctx.translate(-bbcShape66.around.x, -bbcShape66.around.y);
ctx.beginPath();
ctx.arc(bbcShape66.point.x, bbcShape66.point.y, bbcShape66.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 239, 95)';

ctx.save();
ctx.translate(bbcShape67.around.x, bbcShape67.around.y);
ctx.rotate(bbcShape67.rotation * Math.PI / 180);
ctx.translate(-bbcShape67.around.x, -bbcShape67.around.y);
ctx.beginPath();
ctx.arc(bbcShape67.point.x, bbcShape67.point.y, bbcShape67.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(96, 14, 235)';

ctx.save();
ctx.translate(bbcShape68.around.x, bbcShape68.around.y);
ctx.rotate(bbcShape68.rotation * Math.PI / 180);
ctx.translate(-bbcShape68.around.x, -bbcShape68.around.y);
ctx.beginPath();
ctx.arc(bbcShape68.point.x, bbcShape68.point.y, bbcShape68.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 163, 6)';

ctx.save();
ctx.translate(bbcShape69.around.x, bbcShape69.around.y);
ctx.rotate(bbcShape69.rotation * Math.PI / 180);
ctx.translate(-bbcShape69.around.x, -bbcShape69.around.y);
ctx.beginPath();
ctx.arc(bbcShape69.point.x, bbcShape69.point.y, bbcShape69.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(88, 10, 185)';

ctx.save();
ctx.translate(bbcShape70.around.x, bbcShape70.around.y);
ctx.rotate(bbcShape70.rotation * Math.PI / 180);
ctx.translate(-bbcShape70.around.x, -bbcShape70.around.y);
ctx.beginPath();
ctx.arc(bbcShape70.point.x, bbcShape70.point.y, bbcShape70.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(231, 245, 128)';

ctx.save();
ctx.translate(bbcShape71.around.x, bbcShape71.around.y);
ctx.rotate(bbcShape71.rotation * Math.PI / 180);
ctx.translate(-bbcShape71.around.x, -bbcShape71.around.y);
ctx.beginPath();
ctx.arc(bbcShape71.point.x, bbcShape71.point.y, bbcShape71.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(154, 141, 176)';

ctx.save();
ctx.translate(bbcShape72.around.x, bbcShape72.around.y);
ctx.rotate(bbcShape72.rotation * Math.PI / 180);
ctx.translate(-bbcShape72.around.x, -bbcShape72.around.y);
ctx.beginPath();
ctx.arc(bbcShape72.point.x, bbcShape72.point.y, bbcShape72.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(190, 191, 215)';

ctx.save();
ctx.translate(bbcShape73.around.x, bbcShape73.around.y);
ctx.rotate(bbcShape73.rotation * Math.PI / 180);
ctx.translate(-bbcShape73.around.x, -bbcShape73.around.y);
ctx.beginPath();
ctx.arc(bbcShape73.point.x, bbcShape73.point.y, bbcShape73.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(142, 198, 118)';

ctx.save();
ctx.translate(bbcShape74.around.x, bbcShape74.around.y);
ctx.rotate(bbcShape74.rotation * Math.PI / 180);
ctx.translate(-bbcShape74.around.x, -bbcShape74.around.y);
ctx.beginPath();
ctx.arc(bbcShape74.point.x, bbcShape74.point.y, bbcShape74.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255, 162, 128)';

ctx.save();
ctx.translate(bbcShape75.around.x, bbcShape75.around.y);
ctx.rotate(bbcShape75.rotation * Math.PI / 180);
ctx.translate(-bbcShape75.around.x, -bbcShape75.around.y);
ctx.beginPath();
ctx.arc(bbcShape75.point.x, bbcShape75.point.y, bbcShape75.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(27, 58, 30)';

ctx.save();
ctx.translate(bbcShape76.around.x, bbcShape76.around.y);
ctx.rotate(bbcShape76.rotation * Math.PI / 180);
ctx.translate(-bbcShape76.around.x, -bbcShape76.around.y);
ctx.beginPath();
ctx.arc(bbcShape76.point.x, bbcShape76.point.y, bbcShape76.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(51, 48, 35)';

ctx.save();
ctx.translate(bbcShape77.around.x, bbcShape77.around.y);
ctx.rotate(bbcShape77.rotation * Math.PI / 180);
ctx.translate(-bbcShape77.around.x, -bbcShape77.around.y);
ctx.beginPath();
ctx.arc(bbcShape77.point.x, bbcShape77.point.y, bbcShape77.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(217, 3, 158)';

ctx.save();
ctx.translate(bbcShape78.around.x, bbcShape78.around.y);
ctx.rotate(bbcShape78.rotation * Math.PI / 180);
ctx.translate(-bbcShape78.around.x, -bbcShape78.around.y);
ctx.beginPath();
ctx.arc(bbcShape78.point.x, bbcShape78.point.y, bbcShape78.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 207, 240)';

ctx.save();
ctx.translate(bbcShape79.around.x, bbcShape79.around.y);
ctx.rotate(bbcShape79.rotation * Math.PI / 180);
ctx.translate(-bbcShape79.around.x, -bbcShape79.around.y);
ctx.beginPath();
ctx.arc(bbcShape79.point.x, bbcShape79.point.y, bbcShape79.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(73, 108, 95)';

ctx.save();
ctx.translate(bbcShape80.around.x, bbcShape80.around.y);
ctx.rotate(bbcShape80.rotation * Math.PI / 180);
ctx.translate(-bbcShape80.around.x, -bbcShape80.around.y);
ctx.beginPath();
ctx.arc(bbcShape80.point.x, bbcShape80.point.y, bbcShape80.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(164, 159, 228)';

ctx.save();
ctx.translate(bbcShape81.around.x, bbcShape81.around.y);
ctx.rotate(bbcShape81.rotation * Math.PI / 180);
ctx.translate(-bbcShape81.around.x, -bbcShape81.around.y);
ctx.beginPath();
ctx.arc(bbcShape81.point.x, bbcShape81.point.y, bbcShape81.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(3, 233, 241)';

ctx.save();
ctx.translate(bbcShape82.around.x, bbcShape82.around.y);
ctx.rotate(bbcShape82.rotation * Math.PI / 180);
ctx.translate(-bbcShape82.around.x, -bbcShape82.around.y);
ctx.beginPath();
ctx.arc(bbcShape82.point.x, bbcShape82.point.y, bbcShape82.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(143, 128, 65)';

ctx.save();
ctx.translate(bbcShape83.around.x, bbcShape83.around.y);
ctx.rotate(bbcShape83.rotation * Math.PI / 180);
ctx.translate(-bbcShape83.around.x, -bbcShape83.around.y);
ctx.beginPath();
ctx.arc(bbcShape83.point.x, bbcShape83.point.y, bbcShape83.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 254, 98)';

ctx.save();
ctx.translate(bbcShape84.around.x, bbcShape84.around.y);
ctx.rotate(bbcShape84.rotation * Math.PI / 180);
ctx.translate(-bbcShape84.around.x, -bbcShape84.around.y);
ctx.beginPath();
ctx.arc(bbcShape84.point.x, bbcShape84.point.y, bbcShape84.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(21, 228, 79)';

ctx.save();
ctx.translate(bbcShape85.around.x, bbcShape85.around.y);
ctx.rotate(bbcShape85.rotation * Math.PI / 180);
ctx.translate(-bbcShape85.around.x, -bbcShape85.around.y);
ctx.beginPath();
ctx.arc(bbcShape85.point.x, bbcShape85.point.y, bbcShape85.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(200, 35, 209)';

ctx.save();
ctx.translate(bbcShape86.around.x, bbcShape86.around.y);
ctx.rotate(bbcShape86.rotation * Math.PI / 180);
ctx.translate(-bbcShape86.around.x, -bbcShape86.around.y);
ctx.beginPath();
ctx.arc(bbcShape86.point.x, bbcShape86.point.y, bbcShape86.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(147, 237, 241)';

ctx.save();
ctx.translate(bbcShape87.around.x, bbcShape87.around.y);
ctx.rotate(bbcShape87.rotation * Math.PI / 180);
ctx.translate(-bbcShape87.around.x, -bbcShape87.around.y);
ctx.beginPath();
ctx.arc(bbcShape87.point.x, bbcShape87.point.y, bbcShape87.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(95, 25, 231)';

ctx.save();
ctx.translate(bbcShape88.around.x, bbcShape88.around.y);
ctx.rotate(bbcShape88.rotation * Math.PI / 180);
ctx.translate(-bbcShape88.around.x, -bbcShape88.around.y);
ctx.beginPath();
ctx.arc(bbcShape88.point.x, bbcShape88.point.y, bbcShape88.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(184, 125, 181)';

ctx.save();
ctx.translate(bbcShape89.around.x, bbcShape89.around.y);
ctx.rotate(bbcShape89.rotation * Math.PI / 180);
ctx.translate(-bbcShape89.around.x, -bbcShape89.around.y);
ctx.beginPath();
ctx.arc(bbcShape89.point.x, bbcShape89.point.y, bbcShape89.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(158, 23, 224)';

ctx.save();
ctx.translate(bbcShape90.around.x, bbcShape90.around.y);
ctx.rotate(bbcShape90.rotation * Math.PI / 180);
ctx.translate(-bbcShape90.around.x, -bbcShape90.around.y);
ctx.beginPath();
ctx.arc(bbcShape90.point.x, bbcShape90.point.y, bbcShape90.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(160, 4, 218)';

ctx.save();
ctx.translate(bbcShape91.around.x, bbcShape91.around.y);
ctx.rotate(bbcShape91.rotation * Math.PI / 180);
ctx.translate(-bbcShape91.around.x, -bbcShape91.around.y);
ctx.beginPath();
ctx.arc(bbcShape91.point.x, bbcShape91.point.y, bbcShape91.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250, 45, 48)';

ctx.save();
ctx.translate(bbcShape92.around.x, bbcShape92.around.y);
ctx.rotate(bbcShape92.rotation * Math.PI / 180);
ctx.translate(-bbcShape92.around.x, -bbcShape92.around.y);
ctx.beginPath();
ctx.arc(bbcShape92.point.x, bbcShape92.point.y, bbcShape92.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(103, 134, 77)';

ctx.save();
ctx.translate(bbcShape93.around.x, bbcShape93.around.y);
ctx.rotate(bbcShape93.rotation * Math.PI / 180);
ctx.translate(-bbcShape93.around.x, -bbcShape93.around.y);
ctx.beginPath();
ctx.arc(bbcShape93.point.x, bbcShape93.point.y, bbcShape93.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(20, 120, 247)';

ctx.save();
ctx.translate(bbcShape94.around.x, bbcShape94.around.y);
ctx.rotate(bbcShape94.rotation * Math.PI / 180);
ctx.translate(-bbcShape94.around.x, -bbcShape94.around.y);
ctx.beginPath();
ctx.arc(bbcShape94.point.x, bbcShape94.point.y, bbcShape94.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 203, 56)';

ctx.save();
ctx.translate(bbcShape95.around.x, bbcShape95.around.y);
ctx.rotate(bbcShape95.rotation * Math.PI / 180);
ctx.translate(-bbcShape95.around.x, -bbcShape95.around.y);
ctx.beginPath();
ctx.arc(bbcShape95.point.x, bbcShape95.point.y, bbcShape95.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(127, 159, 126)';

ctx.save();
ctx.translate(bbcShape96.around.x, bbcShape96.around.y);
ctx.rotate(bbcShape96.rotation * Math.PI / 180);
ctx.translate(-bbcShape96.around.x, -bbcShape96.around.y);
ctx.beginPath();
ctx.arc(bbcShape96.point.x, bbcShape96.point.y, bbcShape96.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(41, 229, 147)';

ctx.save();
ctx.translate(bbcShape97.around.x, bbcShape97.around.y);
ctx.rotate(bbcShape97.rotation * Math.PI / 180);
ctx.translate(-bbcShape97.around.x, -bbcShape97.around.y);
ctx.beginPath();
ctx.arc(bbcShape97.point.x, bbcShape97.point.y, bbcShape97.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(170, 249, 58)';

ctx.save();
ctx.translate(bbcShape98.around.x, bbcShape98.around.y);
ctx.rotate(bbcShape98.rotation * Math.PI / 180);
ctx.translate(-bbcShape98.around.x, -bbcShape98.around.y);
ctx.beginPath();
ctx.arc(bbcShape98.point.x, bbcShape98.point.y, bbcShape98.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(208, 129, 64)';

ctx.save();
ctx.translate(bbcShape99.around.x, bbcShape99.around.y);
ctx.rotate(bbcShape99.rotation * Math.PI / 180);
ctx.translate(-bbcShape99.around.x, -bbcShape99.around.y);
ctx.beginPath();
ctx.arc(bbcShape99.point.x, bbcShape99.point.y, bbcShape99.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(120, 79, 98)';

ctx.save();
ctx.translate(bbcShape100.around.x, bbcShape100.around.y);
ctx.rotate(bbcShape100.rotation * Math.PI / 180);
ctx.translate(-bbcShape100.around.x, -bbcShape100.around.y);
ctx.beginPath();
ctx.arc(bbcShape100.point.x, bbcShape100.point.y, bbcShape100.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(14, 253, 48)';

ctx.save();
ctx.translate(bbcShape101.around.x, bbcShape101.around.y);
ctx.rotate(bbcShape101.rotation * Math.PI / 180);
ctx.translate(-bbcShape101.around.x, -bbcShape101.around.y);
ctx.beginPath();
ctx.arc(bbcShape101.point.x, bbcShape101.point.y, bbcShape101.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(20, 190, 97)';

ctx.save();
ctx.translate(bbcShape102.around.x, bbcShape102.around.y);
ctx.rotate(bbcShape102.rotation * Math.PI / 180);
ctx.translate(-bbcShape102.around.x, -bbcShape102.around.y);
ctx.beginPath();
ctx.arc(bbcShape102.point.x, bbcShape102.point.y, bbcShape102.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(230, 15, 70)';

ctx.save();
ctx.translate(bbcShape103.around.x, bbcShape103.around.y);
ctx.rotate(bbcShape103.rotation * Math.PI / 180);
ctx.translate(-bbcShape103.around.x, -bbcShape103.around.y);
ctx.beginPath();
ctx.arc(bbcShape103.point.x, bbcShape103.point.y, bbcShape103.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 74, 15)';

ctx.save();
ctx.translate(bbcShape104.around.x, bbcShape104.around.y);
ctx.rotate(bbcShape104.rotation * Math.PI / 180);
ctx.translate(-bbcShape104.around.x, -bbcShape104.around.y);
ctx.beginPath();
ctx.arc(bbcShape104.point.x, bbcShape104.point.y, bbcShape104.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(130, 168, 53)';

ctx.save();
ctx.translate(bbcShape105.around.x, bbcShape105.around.y);
ctx.rotate(bbcShape105.rotation * Math.PI / 180);
ctx.translate(-bbcShape105.around.x, -bbcShape105.around.y);
ctx.beginPath();
ctx.arc(bbcShape105.point.x, bbcShape105.point.y, bbcShape105.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(198, 215, 86)';

ctx.save();
ctx.translate(bbcShape106.around.x, bbcShape106.around.y);
ctx.rotate(bbcShape106.rotation * Math.PI / 180);
ctx.translate(-bbcShape106.around.x, -bbcShape106.around.y);
ctx.beginPath();
ctx.arc(bbcShape106.point.x, bbcShape106.point.y, bbcShape106.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 225, 91)';

ctx.save();
ctx.translate(bbcShape107.around.x, bbcShape107.around.y);
ctx.rotate(bbcShape107.rotation * Math.PI / 180);
ctx.translate(-bbcShape107.around.x, -bbcShape107.around.y);
ctx.beginPath();
ctx.arc(bbcShape107.point.x, bbcShape107.point.y, bbcShape107.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(129, 132, 92)';

ctx.save();
ctx.translate(bbcShape108.around.x, bbcShape108.around.y);
ctx.rotate(bbcShape108.rotation * Math.PI / 180);
ctx.translate(-bbcShape108.around.x, -bbcShape108.around.y);
ctx.beginPath();
ctx.arc(bbcShape108.point.x, bbcShape108.point.y, bbcShape108.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 62, 187)';

ctx.save();
ctx.translate(bbcShape109.around.x, bbcShape109.around.y);
ctx.rotate(bbcShape109.rotation * Math.PI / 180);
ctx.translate(-bbcShape109.around.x, -bbcShape109.around.y);
ctx.beginPath();
ctx.arc(bbcShape109.point.x, bbcShape109.point.y, bbcShape109.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(158, 242, 4)';

ctx.save();
ctx.translate(bbcShape110.around.x, bbcShape110.around.y);
ctx.rotate(bbcShape110.rotation * Math.PI / 180);
ctx.translate(-bbcShape110.around.x, -bbcShape110.around.y);
ctx.beginPath();
ctx.arc(bbcShape110.point.x, bbcShape110.point.y, bbcShape110.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(198, 177, 212)';

ctx.save();
ctx.translate(bbcShape111.around.x, bbcShape111.around.y);
ctx.rotate(bbcShape111.rotation * Math.PI / 180);
ctx.translate(-bbcShape111.around.x, -bbcShape111.around.y);
ctx.beginPath();
ctx.arc(bbcShape111.point.x, bbcShape111.point.y, bbcShape111.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 191, 212)';

ctx.save();
ctx.translate(bbcShape112.around.x, bbcShape112.around.y);
ctx.rotate(bbcShape112.rotation * Math.PI / 180);
ctx.translate(-bbcShape112.around.x, -bbcShape112.around.y);
ctx.beginPath();
ctx.arc(bbcShape112.point.x, bbcShape112.point.y, bbcShape112.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(158, 177, 149)';

ctx.save();
ctx.translate(bbcShape113.around.x, bbcShape113.around.y);
ctx.rotate(bbcShape113.rotation * Math.PI / 180);
ctx.translate(-bbcShape113.around.x, -bbcShape113.around.y);
ctx.beginPath();
ctx.arc(bbcShape113.point.x, bbcShape113.point.y, bbcShape113.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(89, 245, 22)';

ctx.save();
ctx.translate(bbcShape114.around.x, bbcShape114.around.y);
ctx.rotate(bbcShape114.rotation * Math.PI / 180);
ctx.translate(-bbcShape114.around.x, -bbcShape114.around.y);
ctx.beginPath();
ctx.arc(bbcShape114.point.x, bbcShape114.point.y, bbcShape114.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(112, 83, 166)';

ctx.save();
ctx.translate(bbcShape115.around.x, bbcShape115.around.y);
ctx.rotate(bbcShape115.rotation * Math.PI / 180);
ctx.translate(-bbcShape115.around.x, -bbcShape115.around.y);
ctx.beginPath();
ctx.arc(bbcShape115.point.x, bbcShape115.point.y, bbcShape115.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 119, 73)';

ctx.save();
ctx.translate(bbcShape116.around.x, bbcShape116.around.y);
ctx.rotate(bbcShape116.rotation * Math.PI / 180);
ctx.translate(-bbcShape116.around.x, -bbcShape116.around.y);
ctx.beginPath();
ctx.arc(bbcShape116.point.x, bbcShape116.point.y, bbcShape116.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(164, 48, 157)';

ctx.save();
ctx.translate(bbcShape117.around.x, bbcShape117.around.y);
ctx.rotate(bbcShape117.rotation * Math.PI / 180);
ctx.translate(-bbcShape117.around.x, -bbcShape117.around.y);
ctx.beginPath();
ctx.arc(bbcShape117.point.x, bbcShape117.point.y, bbcShape117.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(131, 173, 234)';

ctx.save();
ctx.translate(bbcShape118.around.x, bbcShape118.around.y);
ctx.rotate(bbcShape118.rotation * Math.PI / 180);
ctx.translate(-bbcShape118.around.x, -bbcShape118.around.y);
ctx.beginPath();
ctx.arc(bbcShape118.point.x, bbcShape118.point.y, bbcShape118.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 26, 89)';

ctx.save();
ctx.translate(bbcShape119.around.x, bbcShape119.around.y);
ctx.rotate(bbcShape119.rotation * Math.PI / 180);
ctx.translate(-bbcShape119.around.x, -bbcShape119.around.y);
ctx.beginPath();
ctx.arc(bbcShape119.point.x, bbcShape119.point.y, bbcShape119.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 53, 11)';

ctx.save();
ctx.translate(bbcShape120.around.x, bbcShape120.around.y);
ctx.rotate(bbcShape120.rotation * Math.PI / 180);
ctx.translate(-bbcShape120.around.x, -bbcShape120.around.y);
ctx.beginPath();
ctx.arc(bbcShape120.point.x, bbcShape120.point.y, bbcShape120.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(66, 165, 165)';

ctx.save();
ctx.translate(bbcShape121.around.x, bbcShape121.around.y);
ctx.rotate(bbcShape121.rotation * Math.PI / 180);
ctx.translate(-bbcShape121.around.x, -bbcShape121.around.y);
ctx.beginPath();
ctx.arc(bbcShape121.point.x, bbcShape121.point.y, bbcShape121.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(95, 12, 187)';

ctx.save();
ctx.translate(bbcShape122.around.x, bbcShape122.around.y);
ctx.rotate(bbcShape122.rotation * Math.PI / 180);
ctx.translate(-bbcShape122.around.x, -bbcShape122.around.y);
ctx.beginPath();
ctx.arc(bbcShape122.point.x, bbcShape122.point.y, bbcShape122.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(20, 165, 99)';

ctx.save();
ctx.translate(bbcShape123.around.x, bbcShape123.around.y);
ctx.rotate(bbcShape123.rotation * Math.PI / 180);
ctx.translate(-bbcShape123.around.x, -bbcShape123.around.y);
ctx.beginPath();
ctx.arc(bbcShape123.point.x, bbcShape123.point.y, bbcShape123.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(58, 27, 30)';

ctx.save();
ctx.translate(bbcShape124.around.x, bbcShape124.around.y);
ctx.rotate(bbcShape124.rotation * Math.PI / 180);
ctx.translate(-bbcShape124.around.x, -bbcShape124.around.y);
ctx.beginPath();
ctx.arc(bbcShape124.point.x, bbcShape124.point.y, bbcShape124.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 197, 41)';

ctx.save();
ctx.translate(bbcShape125.around.x, bbcShape125.around.y);
ctx.rotate(bbcShape125.rotation * Math.PI / 180);
ctx.translate(-bbcShape125.around.x, -bbcShape125.around.y);
ctx.beginPath();
ctx.arc(bbcShape125.point.x, bbcShape125.point.y, bbcShape125.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 21, 253)';

ctx.save();
ctx.translate(bbcShape126.around.x, bbcShape126.around.y);
ctx.rotate(bbcShape126.rotation * Math.PI / 180);
ctx.translate(-bbcShape126.around.x, -bbcShape126.around.y);
ctx.beginPath();
ctx.arc(bbcShape126.point.x, bbcShape126.point.y, bbcShape126.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(212, 222, 99)';

ctx.save();
ctx.translate(bbcShape127.around.x, bbcShape127.around.y);
ctx.rotate(bbcShape127.rotation * Math.PI / 180);
ctx.translate(-bbcShape127.around.x, -bbcShape127.around.y);
ctx.beginPath();
ctx.arc(bbcShape127.point.x, bbcShape127.point.y, bbcShape127.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(189, 68, 216)';

ctx.save();
ctx.translate(bbcShape128.around.x, bbcShape128.around.y);
ctx.rotate(bbcShape128.rotation * Math.PI / 180);
ctx.translate(-bbcShape128.around.x, -bbcShape128.around.y);
ctx.beginPath();
ctx.arc(bbcShape128.point.x, bbcShape128.point.y, bbcShape128.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 150, 221)';

ctx.save();
ctx.translate(bbcShape129.around.x, bbcShape129.around.y);
ctx.rotate(bbcShape129.rotation * Math.PI / 180);
ctx.translate(-bbcShape129.around.x, -bbcShape129.around.y);
ctx.beginPath();
ctx.arc(bbcShape129.point.x, bbcShape129.point.y, bbcShape129.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(116, 132, 164)';

ctx.save();
ctx.translate(bbcShape130.around.x, bbcShape130.around.y);
ctx.rotate(bbcShape130.rotation * Math.PI / 180);
ctx.translate(-bbcShape130.around.x, -bbcShape130.around.y);
ctx.beginPath();
ctx.arc(bbcShape130.point.x, bbcShape130.point.y, bbcShape130.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(107, 213, 57)';

ctx.save();
ctx.translate(bbcShape131.around.x, bbcShape131.around.y);
ctx.rotate(bbcShape131.rotation * Math.PI / 180);
ctx.translate(-bbcShape131.around.x, -bbcShape131.around.y);
ctx.beginPath();
ctx.arc(bbcShape131.point.x, bbcShape131.point.y, bbcShape131.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(93, 143, 234)';

ctx.save();
ctx.translate(bbcShape132.around.x, bbcShape132.around.y);
ctx.rotate(bbcShape132.rotation * Math.PI / 180);
ctx.translate(-bbcShape132.around.x, -bbcShape132.around.y);
ctx.beginPath();
ctx.arc(bbcShape132.point.x, bbcShape132.point.y, bbcShape132.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(201, 50, 167)';

ctx.save();
ctx.translate(bbcShape133.around.x, bbcShape133.around.y);
ctx.rotate(bbcShape133.rotation * Math.PI / 180);
ctx.translate(-bbcShape133.around.x, -bbcShape133.around.y);
ctx.beginPath();
ctx.arc(bbcShape133.point.x, bbcShape133.point.y, bbcShape133.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(73, 111, 30)';

ctx.save();
ctx.translate(bbcShape134.around.x, bbcShape134.around.y);
ctx.rotate(bbcShape134.rotation * Math.PI / 180);
ctx.translate(-bbcShape134.around.x, -bbcShape134.around.y);
ctx.beginPath();
ctx.arc(bbcShape134.point.x, bbcShape134.point.y, bbcShape134.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(116, 39, 129)';

ctx.save();
ctx.translate(bbcShape135.around.x, bbcShape135.around.y);
ctx.rotate(bbcShape135.rotation * Math.PI / 180);
ctx.translate(-bbcShape135.around.x, -bbcShape135.around.y);
ctx.beginPath();
ctx.arc(bbcShape135.point.x, bbcShape135.point.y, bbcShape135.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 165, 102)';

ctx.save();
ctx.translate(bbcShape136.around.x, bbcShape136.around.y);
ctx.rotate(bbcShape136.rotation * Math.PI / 180);
ctx.translate(-bbcShape136.around.x, -bbcShape136.around.y);
ctx.beginPath();
ctx.arc(bbcShape136.point.x, bbcShape136.point.y, bbcShape136.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(109, 76, 255)';

ctx.save();
ctx.translate(bbcShape137.around.x, bbcShape137.around.y);
ctx.rotate(bbcShape137.rotation * Math.PI / 180);
ctx.translate(-bbcShape137.around.x, -bbcShape137.around.y);
ctx.beginPath();
ctx.arc(bbcShape137.point.x, bbcShape137.point.y, bbcShape137.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(89, 44, 253)';

ctx.save();
ctx.translate(bbcShape138.around.x, bbcShape138.around.y);
ctx.rotate(bbcShape138.rotation * Math.PI / 180);
ctx.translate(-bbcShape138.around.x, -bbcShape138.around.y);
ctx.beginPath();
ctx.arc(bbcShape138.point.x, bbcShape138.point.y, bbcShape138.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 13, 15)';

ctx.save();
ctx.translate(bbcShape139.around.x, bbcShape139.around.y);
ctx.rotate(bbcShape139.rotation * Math.PI / 180);
ctx.translate(-bbcShape139.around.x, -bbcShape139.around.y);
ctx.beginPath();
ctx.arc(bbcShape139.point.x, bbcShape139.point.y, bbcShape139.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(24, 123, 208)';

ctx.save();
ctx.translate(bbcShape140.around.x, bbcShape140.around.y);
ctx.rotate(bbcShape140.rotation * Math.PI / 180);
ctx.translate(-bbcShape140.around.x, -bbcShape140.around.y);
ctx.beginPath();
ctx.arc(bbcShape140.point.x, bbcShape140.point.y, bbcShape140.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 100, 42)';

ctx.save();
ctx.translate(bbcShape141.around.x, bbcShape141.around.y);
ctx.rotate(bbcShape141.rotation * Math.PI / 180);
ctx.translate(-bbcShape141.around.x, -bbcShape141.around.y);
ctx.beginPath();
ctx.arc(bbcShape141.point.x, bbcShape141.point.y, bbcShape141.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 52, 86)';

ctx.save();
ctx.translate(bbcShape142.around.x, bbcShape142.around.y);
ctx.rotate(bbcShape142.rotation * Math.PI / 180);
ctx.translate(-bbcShape142.around.x, -bbcShape142.around.y);
ctx.beginPath();
ctx.arc(bbcShape142.point.x, bbcShape142.point.y, bbcShape142.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(135, 220, 9)';

ctx.save();
ctx.translate(bbcShape143.around.x, bbcShape143.around.y);
ctx.rotate(bbcShape143.rotation * Math.PI / 180);
ctx.translate(-bbcShape143.around.x, -bbcShape143.around.y);
ctx.beginPath();
ctx.arc(bbcShape143.point.x, bbcShape143.point.y, bbcShape143.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(42, 197, 111)';

ctx.save();
ctx.translate(bbcShape144.around.x, bbcShape144.around.y);
ctx.rotate(bbcShape144.rotation * Math.PI / 180);
ctx.translate(-bbcShape144.around.x, -bbcShape144.around.y);
ctx.beginPath();
ctx.arc(bbcShape144.point.x, bbcShape144.point.y, bbcShape144.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(92, 52, 132)';

ctx.save();
ctx.translate(bbcShape145.around.x, bbcShape145.around.y);
ctx.rotate(bbcShape145.rotation * Math.PI / 180);
ctx.translate(-bbcShape145.around.x, -bbcShape145.around.y);
ctx.beginPath();
ctx.arc(bbcShape145.point.x, bbcShape145.point.y, bbcShape145.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 77, 157)';

ctx.save();
ctx.translate(bbcShape146.around.x, bbcShape146.around.y);
ctx.rotate(bbcShape146.rotation * Math.PI / 180);
ctx.translate(-bbcShape146.around.x, -bbcShape146.around.y);
ctx.beginPath();
ctx.arc(bbcShape146.point.x, bbcShape146.point.y, bbcShape146.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(30, 110, 212)';

ctx.save();
ctx.translate(bbcShape147.around.x, bbcShape147.around.y);
ctx.rotate(bbcShape147.rotation * Math.PI / 180);
ctx.translate(-bbcShape147.around.x, -bbcShape147.around.y);
ctx.beginPath();
ctx.arc(bbcShape147.point.x, bbcShape147.point.y, bbcShape147.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(51, 184, 14)';

ctx.save();
ctx.translate(bbcShape148.around.x, bbcShape148.around.y);
ctx.rotate(bbcShape148.rotation * Math.PI / 180);
ctx.translate(-bbcShape148.around.x, -bbcShape148.around.y);
ctx.beginPath();
ctx.arc(bbcShape148.point.x, bbcShape148.point.y, bbcShape148.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(88, 159, 173)';

ctx.save();
ctx.translate(bbcShape149.around.x, bbcShape149.around.y);
ctx.rotate(bbcShape149.rotation * Math.PI / 180);
ctx.translate(-bbcShape149.around.x, -bbcShape149.around.y);
ctx.beginPath();
ctx.arc(bbcShape149.point.x, bbcShape149.point.y, bbcShape149.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(143, 122, 229)';

ctx.save();
ctx.translate(bbcShape150.around.x, bbcShape150.around.y);
ctx.rotate(bbcShape150.rotation * Math.PI / 180);
ctx.translate(-bbcShape150.around.x, -bbcShape150.around.y);
ctx.beginPath();
ctx.arc(bbcShape150.point.x, bbcShape150.point.y, bbcShape150.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(93, 118, 201)';

ctx.save();
ctx.translate(bbcShape151.around.x, bbcShape151.around.y);
ctx.rotate(bbcShape151.rotation * Math.PI / 180);
ctx.translate(-bbcShape151.around.x, -bbcShape151.around.y);
ctx.beginPath();
ctx.arc(bbcShape151.point.x, bbcShape151.point.y, bbcShape151.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(63, 69, 31)';

ctx.save();
ctx.translate(bbcShape152.around.x, bbcShape152.around.y);
ctx.rotate(bbcShape152.rotation * Math.PI / 180);
ctx.translate(-bbcShape152.around.x, -bbcShape152.around.y);
ctx.beginPath();
ctx.arc(bbcShape152.point.x, bbcShape152.point.y, bbcShape152.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125, 73, 196)';

ctx.save();
ctx.translate(bbcShape153.around.x, bbcShape153.around.y);
ctx.rotate(bbcShape153.rotation * Math.PI / 180);
ctx.translate(-bbcShape153.around.x, -bbcShape153.around.y);
ctx.beginPath();
ctx.arc(bbcShape153.point.x, bbcShape153.point.y, bbcShape153.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(28, 126, 127)';

ctx.save();
ctx.translate(bbcShape154.around.x, bbcShape154.around.y);
ctx.rotate(bbcShape154.rotation * Math.PI / 180);
ctx.translate(-bbcShape154.around.x, -bbcShape154.around.y);
ctx.beginPath();
ctx.arc(bbcShape154.point.x, bbcShape154.point.y, bbcShape154.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(41, 227, 104)';

ctx.save();
ctx.translate(bbcShape155.around.x, bbcShape155.around.y);
ctx.rotate(bbcShape155.rotation * Math.PI / 180);
ctx.translate(-bbcShape155.around.x, -bbcShape155.around.y);
ctx.beginPath();
ctx.arc(bbcShape155.point.x, bbcShape155.point.y, bbcShape155.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(64, 253, 53)';

ctx.save();
ctx.translate(bbcShape156.around.x, bbcShape156.around.y);
ctx.rotate(bbcShape156.rotation * Math.PI / 180);
ctx.translate(-bbcShape156.around.x, -bbcShape156.around.y);
ctx.beginPath();
ctx.arc(bbcShape156.point.x, bbcShape156.point.y, bbcShape156.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(97, 66, 172)';

ctx.save();
ctx.translate(bbcShape157.around.x, bbcShape157.around.y);
ctx.rotate(bbcShape157.rotation * Math.PI / 180);
ctx.translate(-bbcShape157.around.x, -bbcShape157.around.y);
ctx.beginPath();
ctx.arc(bbcShape157.point.x, bbcShape157.point.y, bbcShape157.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(85, 39, 41)';

ctx.save();
ctx.translate(bbcShape158.around.x, bbcShape158.around.y);
ctx.rotate(bbcShape158.rotation * Math.PI / 180);
ctx.translate(-bbcShape158.around.x, -bbcShape158.around.y);
ctx.beginPath();
ctx.arc(bbcShape158.point.x, bbcShape158.point.y, bbcShape158.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(249, 32, 170)';

ctx.save();
ctx.translate(bbcShape159.around.x, bbcShape159.around.y);
ctx.rotate(bbcShape159.rotation * Math.PI / 180);
ctx.translate(-bbcShape159.around.x, -bbcShape159.around.y);
ctx.beginPath();
ctx.arc(bbcShape159.point.x, bbcShape159.point.y, bbcShape159.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(51, 252, 56)';

ctx.save();
ctx.translate(bbcShape160.around.x, bbcShape160.around.y);
ctx.rotate(bbcShape160.rotation * Math.PI / 180);
ctx.translate(-bbcShape160.around.x, -bbcShape160.around.y);
ctx.beginPath();
ctx.arc(bbcShape160.point.x, bbcShape160.point.y, bbcShape160.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(142, 23, 4)';

ctx.save();
ctx.translate(bbcShape161.around.x, bbcShape161.around.y);
ctx.rotate(bbcShape161.rotation * Math.PI / 180);
ctx.translate(-bbcShape161.around.x, -bbcShape161.around.y);
ctx.beginPath();
ctx.arc(bbcShape161.point.x, bbcShape161.point.y, bbcShape161.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 108, 27)';

ctx.save();
ctx.translate(bbcShape162.around.x, bbcShape162.around.y);
ctx.rotate(bbcShape162.rotation * Math.PI / 180);
ctx.translate(-bbcShape162.around.x, -bbcShape162.around.y);
ctx.beginPath();
ctx.arc(bbcShape162.point.x, bbcShape162.point.y, bbcShape162.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 183, 46)';

ctx.save();
ctx.translate(bbcShape163.around.x, bbcShape163.around.y);
ctx.rotate(bbcShape163.rotation * Math.PI / 180);
ctx.translate(-bbcShape163.around.x, -bbcShape163.around.y);
ctx.beginPath();
ctx.arc(bbcShape163.point.x, bbcShape163.point.y, bbcShape163.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(200, 13, 58)';

ctx.save();
ctx.translate(bbcShape164.around.x, bbcShape164.around.y);
ctx.rotate(bbcShape164.rotation * Math.PI / 180);
ctx.translate(-bbcShape164.around.x, -bbcShape164.around.y);
ctx.beginPath();
ctx.arc(bbcShape164.point.x, bbcShape164.point.y, bbcShape164.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(196, 133, 38)';

ctx.save();
ctx.translate(bbcShape165.around.x, bbcShape165.around.y);
ctx.rotate(bbcShape165.rotation * Math.PI / 180);
ctx.translate(-bbcShape165.around.x, -bbcShape165.around.y);
ctx.beginPath();
ctx.arc(bbcShape165.point.x, bbcShape165.point.y, bbcShape165.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(35, 141, 107)';

ctx.save();
ctx.translate(bbcShape166.around.x, bbcShape166.around.y);
ctx.rotate(bbcShape166.rotation * Math.PI / 180);
ctx.translate(-bbcShape166.around.x, -bbcShape166.around.y);
ctx.beginPath();
ctx.arc(bbcShape166.point.x, bbcShape166.point.y, bbcShape166.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(162, 104, 239)';

ctx.save();
ctx.translate(bbcShape167.around.x, bbcShape167.around.y);
ctx.rotate(bbcShape167.rotation * Math.PI / 180);
ctx.translate(-bbcShape167.around.x, -bbcShape167.around.y);
ctx.beginPath();
ctx.arc(bbcShape167.point.x, bbcShape167.point.y, bbcShape167.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(242, 102, 242)';

ctx.save();
ctx.translate(bbcShape168.around.x, bbcShape168.around.y);
ctx.rotate(bbcShape168.rotation * Math.PI / 180);
ctx.translate(-bbcShape168.around.x, -bbcShape168.around.y);
ctx.beginPath();
ctx.arc(bbcShape168.point.x, bbcShape168.point.y, bbcShape168.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125, 90, 154)';

ctx.save();
ctx.translate(bbcShape169.around.x, bbcShape169.around.y);
ctx.rotate(bbcShape169.rotation * Math.PI / 180);
ctx.translate(-bbcShape169.around.x, -bbcShape169.around.y);
ctx.beginPath();
ctx.arc(bbcShape169.point.x, bbcShape169.point.y, bbcShape169.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 192, 251)';

ctx.save();
ctx.translate(bbcShape170.around.x, bbcShape170.around.y);
ctx.rotate(bbcShape170.rotation * Math.PI / 180);
ctx.translate(-bbcShape170.around.x, -bbcShape170.around.y);
ctx.beginPath();
ctx.arc(bbcShape170.point.x, bbcShape170.point.y, bbcShape170.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(9, 105, 195)';

ctx.save();
ctx.translate(bbcShape171.around.x, bbcShape171.around.y);
ctx.rotate(bbcShape171.rotation * Math.PI / 180);
ctx.translate(-bbcShape171.around.x, -bbcShape171.around.y);
ctx.beginPath();
ctx.arc(bbcShape171.point.x, bbcShape171.point.y, bbcShape171.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 55, 243)';

ctx.save();
ctx.translate(bbcShape172.around.x, bbcShape172.around.y);
ctx.rotate(bbcShape172.rotation * Math.PI / 180);
ctx.translate(-bbcShape172.around.x, -bbcShape172.around.y);
ctx.beginPath();
ctx.arc(bbcShape172.point.x, bbcShape172.point.y, bbcShape172.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(246, 117, 59)';

ctx.save();
ctx.translate(bbcShape173.around.x, bbcShape173.around.y);
ctx.rotate(bbcShape173.rotation * Math.PI / 180);
ctx.translate(-bbcShape173.around.x, -bbcShape173.around.y);
ctx.beginPath();
ctx.arc(bbcShape173.point.x, bbcShape173.point.y, bbcShape173.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(218, 61, 148)';

ctx.save();
ctx.translate(bbcShape174.around.x, bbcShape174.around.y);
ctx.rotate(bbcShape174.rotation * Math.PI / 180);
ctx.translate(-bbcShape174.around.x, -bbcShape174.around.y);
ctx.beginPath();
ctx.arc(bbcShape174.point.x, bbcShape174.point.y, bbcShape174.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(32, 111, 185)';

ctx.save();
ctx.translate(bbcShape175.around.x, bbcShape175.around.y);
ctx.rotate(bbcShape175.rotation * Math.PI / 180);
ctx.translate(-bbcShape175.around.x, -bbcShape175.around.y);
ctx.beginPath();
ctx.arc(bbcShape175.point.x, bbcShape175.point.y, bbcShape175.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(185, 201, 99)';

ctx.save();
ctx.translate(bbcShape176.around.x, bbcShape176.around.y);
ctx.rotate(bbcShape176.rotation * Math.PI / 180);
ctx.translate(-bbcShape176.around.x, -bbcShape176.around.y);
ctx.beginPath();
ctx.arc(bbcShape176.point.x, bbcShape176.point.y, bbcShape176.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(129, 67, 124)';

ctx.save();
ctx.translate(bbcShape177.around.x, bbcShape177.around.y);
ctx.rotate(bbcShape177.rotation * Math.PI / 180);
ctx.translate(-bbcShape177.around.x, -bbcShape177.around.y);
ctx.beginPath();
ctx.arc(bbcShape177.point.x, bbcShape177.point.y, bbcShape177.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(31, 192, 248)';

ctx.save();
ctx.translate(bbcShape178.around.x, bbcShape178.around.y);
ctx.rotate(bbcShape178.rotation * Math.PI / 180);
ctx.translate(-bbcShape178.around.x, -bbcShape178.around.y);
ctx.beginPath();
ctx.arc(bbcShape178.point.x, bbcShape178.point.y, bbcShape178.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(107, 102, 197)';

ctx.save();
ctx.translate(bbcShape179.around.x, bbcShape179.around.y);
ctx.rotate(bbcShape179.rotation * Math.PI / 180);
ctx.translate(-bbcShape179.around.x, -bbcShape179.around.y);
ctx.beginPath();
ctx.arc(bbcShape179.point.x, bbcShape179.point.y, bbcShape179.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(40, 11, 123)';

ctx.save();
ctx.translate(bbcShape180.around.x, bbcShape180.around.y);
ctx.rotate(bbcShape180.rotation * Math.PI / 180);
ctx.translate(-bbcShape180.around.x, -bbcShape180.around.y);
ctx.beginPath();
ctx.arc(bbcShape180.point.x, bbcShape180.point.y, bbcShape180.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(166, 195, 16)';

ctx.save();
ctx.translate(bbcShape181.around.x, bbcShape181.around.y);
ctx.rotate(bbcShape181.rotation * Math.PI / 180);
ctx.translate(-bbcShape181.around.x, -bbcShape181.around.y);
ctx.beginPath();
ctx.arc(bbcShape181.point.x, bbcShape181.point.y, bbcShape181.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(223, 243, 97)';

ctx.save();
ctx.translate(bbcShape182.around.x, bbcShape182.around.y);
ctx.rotate(bbcShape182.rotation * Math.PI / 180);
ctx.translate(-bbcShape182.around.x, -bbcShape182.around.y);
ctx.beginPath();
ctx.arc(bbcShape182.point.x, bbcShape182.point.y, bbcShape182.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(108, 15, 44)';

ctx.save();
ctx.translate(bbcShape183.around.x, bbcShape183.around.y);
ctx.rotate(bbcShape183.rotation * Math.PI / 180);
ctx.translate(-bbcShape183.around.x, -bbcShape183.around.y);
ctx.beginPath();
ctx.arc(bbcShape183.point.x, bbcShape183.point.y, bbcShape183.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(35, 128, 235)';

ctx.save();
ctx.translate(bbcShape184.around.x, bbcShape184.around.y);
ctx.rotate(bbcShape184.rotation * Math.PI / 180);
ctx.translate(-bbcShape184.around.x, -bbcShape184.around.y);
ctx.beginPath();
ctx.arc(bbcShape184.point.x, bbcShape184.point.y, bbcShape184.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(49, 240, 44)';

ctx.save();
ctx.translate(bbcShape185.around.x, bbcShape185.around.y);
ctx.rotate(bbcShape185.rotation * Math.PI / 180);
ctx.translate(-bbcShape185.around.x, -bbcShape185.around.y);
ctx.beginPath();
ctx.arc(bbcShape185.point.x, bbcShape185.point.y, bbcShape185.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(118, 168, 0)';

ctx.save();
ctx.translate(bbcShape186.around.x, bbcShape186.around.y);
ctx.rotate(bbcShape186.rotation * Math.PI / 180);
ctx.translate(-bbcShape186.around.x, -bbcShape186.around.y);
ctx.beginPath();
ctx.arc(bbcShape186.point.x, bbcShape186.point.y, bbcShape186.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(108, 122, 111)';

ctx.save();
ctx.translate(bbcShape187.around.x, bbcShape187.around.y);
ctx.rotate(bbcShape187.rotation * Math.PI / 180);
ctx.translate(-bbcShape187.around.x, -bbcShape187.around.y);
ctx.beginPath();
ctx.arc(bbcShape187.point.x, bbcShape187.point.y, bbcShape187.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(31, 148, 117)';

ctx.save();
ctx.translate(bbcShape188.around.x, bbcShape188.around.y);
ctx.rotate(bbcShape188.rotation * Math.PI / 180);
ctx.translate(-bbcShape188.around.x, -bbcShape188.around.y);
ctx.beginPath();
ctx.arc(bbcShape188.point.x, bbcShape188.point.y, bbcShape188.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(224, 31, 63)';

ctx.save();
ctx.translate(bbcShape189.around.x, bbcShape189.around.y);
ctx.rotate(bbcShape189.rotation * Math.PI / 180);
ctx.translate(-bbcShape189.around.x, -bbcShape189.around.y);
ctx.beginPath();
ctx.arc(bbcShape189.point.x, bbcShape189.point.y, bbcShape189.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(142, 77, 235)';

ctx.save();
ctx.translate(bbcShape190.around.x, bbcShape190.around.y);
ctx.rotate(bbcShape190.rotation * Math.PI / 180);
ctx.translate(-bbcShape190.around.x, -bbcShape190.around.y);
ctx.beginPath();
ctx.arc(bbcShape190.point.x, bbcShape190.point.y, bbcShape190.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(206, 34, 209)';

ctx.save();
ctx.translate(bbcShape191.around.x, bbcShape191.around.y);
ctx.rotate(bbcShape191.rotation * Math.PI / 180);
ctx.translate(-bbcShape191.around.x, -bbcShape191.around.y);
ctx.beginPath();
ctx.arc(bbcShape191.point.x, bbcShape191.point.y, bbcShape191.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(170, 171, 50)';

ctx.save();
ctx.translate(bbcShape192.around.x, bbcShape192.around.y);
ctx.rotate(bbcShape192.rotation * Math.PI / 180);
ctx.translate(-bbcShape192.around.x, -bbcShape192.around.y);
ctx.beginPath();
ctx.arc(bbcShape192.point.x, bbcShape192.point.y, bbcShape192.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 180, 88)';

ctx.save();
ctx.translate(bbcShape193.around.x, bbcShape193.around.y);
ctx.rotate(bbcShape193.rotation * Math.PI / 180);
ctx.translate(-bbcShape193.around.x, -bbcShape193.around.y);
ctx.beginPath();
ctx.arc(bbcShape193.point.x, bbcShape193.point.y, bbcShape193.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(91, 35, 64)';

ctx.save();
ctx.translate(bbcShape194.around.x, bbcShape194.around.y);
ctx.rotate(bbcShape194.rotation * Math.PI / 180);
ctx.translate(-bbcShape194.around.x, -bbcShape194.around.y);
ctx.beginPath();
ctx.arc(bbcShape194.point.x, bbcShape194.point.y, bbcShape194.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(35, 117, 36)';

ctx.save();
ctx.translate(bbcShape195.around.x, bbcShape195.around.y);
ctx.rotate(bbcShape195.rotation * Math.PI / 180);
ctx.translate(-bbcShape195.around.x, -bbcShape195.around.y);
ctx.beginPath();
ctx.arc(bbcShape195.point.x, bbcShape195.point.y, bbcShape195.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 57, 19)';

ctx.save();
ctx.translate(bbcShape196.around.x, bbcShape196.around.y);
ctx.rotate(bbcShape196.rotation * Math.PI / 180);
ctx.translate(-bbcShape196.around.x, -bbcShape196.around.y);
ctx.beginPath();
ctx.arc(bbcShape196.point.x, bbcShape196.point.y, bbcShape196.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(91, 32, 77)';

ctx.save();
ctx.translate(bbcShape197.around.x, bbcShape197.around.y);
ctx.rotate(bbcShape197.rotation * Math.PI / 180);
ctx.translate(-bbcShape197.around.x, -bbcShape197.around.y);
ctx.beginPath();
ctx.arc(bbcShape197.point.x, bbcShape197.point.y, bbcShape197.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(70, 153, 1)';

ctx.save();
ctx.translate(bbcShape198.around.x, bbcShape198.around.y);
ctx.rotate(bbcShape198.rotation * Math.PI / 180);
ctx.translate(-bbcShape198.around.x, -bbcShape198.around.y);
ctx.beginPath();
ctx.arc(bbcShape198.point.x, bbcShape198.point.y, bbcShape198.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(160, 169, 182)';

ctx.save();
ctx.translate(bbcShape199.around.x, bbcShape199.around.y);
ctx.rotate(bbcShape199.rotation * Math.PI / 180);
ctx.translate(-bbcShape199.around.x, -bbcShape199.around.y);
ctx.beginPath();
ctx.arc(bbcShape199.point.x, bbcShape199.point.y, bbcShape199.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 50, 149)';

ctx.save();
ctx.translate(bbcShape200.around.x, bbcShape200.around.y);
ctx.rotate(bbcShape200.rotation * Math.PI / 180);
ctx.translate(-bbcShape200.around.x, -bbcShape200.around.y);
ctx.beginPath();
ctx.arc(bbcShape200.point.x, bbcShape200.point.y, bbcShape200.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 233, 175)';

ctx.save();
ctx.translate(bbcShape201.around.x, bbcShape201.around.y);
ctx.rotate(bbcShape201.rotation * Math.PI / 180);
ctx.translate(-bbcShape201.around.x, -bbcShape201.around.y);
ctx.beginPath();
ctx.arc(bbcShape201.point.x, bbcShape201.point.y, bbcShape201.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(84, 198, 192)';

ctx.save();
ctx.translate(bbcShape202.around.x, bbcShape202.around.y);
ctx.rotate(bbcShape202.rotation * Math.PI / 180);
ctx.translate(-bbcShape202.around.x, -bbcShape202.around.y);
ctx.beginPath();
ctx.arc(bbcShape202.point.x, bbcShape202.point.y, bbcShape202.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(139, 158, 177)';

ctx.save();
ctx.translate(bbcShape203.around.x, bbcShape203.around.y);
ctx.rotate(bbcShape203.rotation * Math.PI / 180);
ctx.translate(-bbcShape203.around.x, -bbcShape203.around.y);
ctx.beginPath();
ctx.arc(bbcShape203.point.x, bbcShape203.point.y, bbcShape203.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(195, 225, 85)';

ctx.save();
ctx.translate(bbcShape204.around.x, bbcShape204.around.y);
ctx.rotate(bbcShape204.rotation * Math.PI / 180);
ctx.translate(-bbcShape204.around.x, -bbcShape204.around.y);
ctx.beginPath();
ctx.arc(bbcShape204.point.x, bbcShape204.point.y, bbcShape204.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(73, 170, 148)';

ctx.save();
ctx.translate(bbcShape205.around.x, bbcShape205.around.y);
ctx.rotate(bbcShape205.rotation * Math.PI / 180);
ctx.translate(-bbcShape205.around.x, -bbcShape205.around.y);
ctx.beginPath();
ctx.arc(bbcShape205.point.x, bbcShape205.point.y, bbcShape205.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(37, 167, 129)';

ctx.save();
ctx.translate(bbcShape206.around.x, bbcShape206.around.y);
ctx.rotate(bbcShape206.rotation * Math.PI / 180);
ctx.translate(-bbcShape206.around.x, -bbcShape206.around.y);
ctx.beginPath();
ctx.arc(bbcShape206.point.x, bbcShape206.point.y, bbcShape206.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 6, 134)';

ctx.save();
ctx.translate(bbcShape207.around.x, bbcShape207.around.y);
ctx.rotate(bbcShape207.rotation * Math.PI / 180);
ctx.translate(-bbcShape207.around.x, -bbcShape207.around.y);
ctx.beginPath();
ctx.arc(bbcShape207.point.x, bbcShape207.point.y, bbcShape207.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(55, 21, 155)';

ctx.save();
ctx.translate(bbcShape208.around.x, bbcShape208.around.y);
ctx.rotate(bbcShape208.rotation * Math.PI / 180);
ctx.translate(-bbcShape208.around.x, -bbcShape208.around.y);
ctx.beginPath();
ctx.arc(bbcShape208.point.x, bbcShape208.point.y, bbcShape208.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(44, 150, 19)';

ctx.save();
ctx.translate(bbcShape209.around.x, bbcShape209.around.y);
ctx.rotate(bbcShape209.rotation * Math.PI / 180);
ctx.translate(-bbcShape209.around.x, -bbcShape209.around.y);
ctx.beginPath();
ctx.arc(bbcShape209.point.x, bbcShape209.point.y, bbcShape209.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(106, 86, 44)';

ctx.save();
ctx.translate(bbcShape210.around.x, bbcShape210.around.y);
ctx.rotate(bbcShape210.rotation * Math.PI / 180);
ctx.translate(-bbcShape210.around.x, -bbcShape210.around.y);
ctx.beginPath();
ctx.arc(bbcShape210.point.x, bbcShape210.point.y, bbcShape210.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(29, 204, 178)';

ctx.save();
ctx.translate(bbcShape211.around.x, bbcShape211.around.y);
ctx.rotate(bbcShape211.rotation * Math.PI / 180);
ctx.translate(-bbcShape211.around.x, -bbcShape211.around.y);
ctx.beginPath();
ctx.arc(bbcShape211.point.x, bbcShape211.point.y, bbcShape211.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 190, 70)';

ctx.save();
ctx.translate(bbcShape212.around.x, bbcShape212.around.y);
ctx.rotate(bbcShape212.rotation * Math.PI / 180);
ctx.translate(-bbcShape212.around.x, -bbcShape212.around.y);
ctx.beginPath();
ctx.arc(bbcShape212.point.x, bbcShape212.point.y, bbcShape212.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(167, 246, 149)';

ctx.save();
ctx.translate(bbcShape213.around.x, bbcShape213.around.y);
ctx.rotate(bbcShape213.rotation * Math.PI / 180);
ctx.translate(-bbcShape213.around.x, -bbcShape213.around.y);
ctx.beginPath();
ctx.arc(bbcShape213.point.x, bbcShape213.point.y, bbcShape213.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(220, 0, 51)';

ctx.save();
ctx.translate(bbcShape214.around.x, bbcShape214.around.y);
ctx.rotate(bbcShape214.rotation * Math.PI / 180);
ctx.translate(-bbcShape214.around.x, -bbcShape214.around.y);
ctx.beginPath();
ctx.arc(bbcShape214.point.x, bbcShape214.point.y, bbcShape214.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 247, 48)';

ctx.save();
ctx.translate(bbcShape215.around.x, bbcShape215.around.y);
ctx.rotate(bbcShape215.rotation * Math.PI / 180);
ctx.translate(-bbcShape215.around.x, -bbcShape215.around.y);
ctx.beginPath();
ctx.arc(bbcShape215.point.x, bbcShape215.point.y, bbcShape215.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(193, 22, 49)';

ctx.save();
ctx.translate(bbcShape216.around.x, bbcShape216.around.y);
ctx.rotate(bbcShape216.rotation * Math.PI / 180);
ctx.translate(-bbcShape216.around.x, -bbcShape216.around.y);
ctx.beginPath();
ctx.arc(bbcShape216.point.x, bbcShape216.point.y, bbcShape216.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(252, 61, 243)';

ctx.save();
ctx.translate(bbcShape217.around.x, bbcShape217.around.y);
ctx.rotate(bbcShape217.rotation * Math.PI / 180);
ctx.translate(-bbcShape217.around.x, -bbcShape217.around.y);
ctx.beginPath();
ctx.arc(bbcShape217.point.x, bbcShape217.point.y, bbcShape217.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(46, 225, 198)';

ctx.save();
ctx.translate(bbcShape218.around.x, bbcShape218.around.y);
ctx.rotate(bbcShape218.rotation * Math.PI / 180);
ctx.translate(-bbcShape218.around.x, -bbcShape218.around.y);
ctx.beginPath();
ctx.arc(bbcShape218.point.x, bbcShape218.point.y, bbcShape218.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(103, 82, 7)';

ctx.save();
ctx.translate(bbcShape219.around.x, bbcShape219.around.y);
ctx.rotate(bbcShape219.rotation * Math.PI / 180);
ctx.translate(-bbcShape219.around.x, -bbcShape219.around.y);
ctx.beginPath();
ctx.arc(bbcShape219.point.x, bbcShape219.point.y, bbcShape219.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(171, 90, 201)';

ctx.save();
ctx.translate(bbcShape220.around.x, bbcShape220.around.y);
ctx.rotate(bbcShape220.rotation * Math.PI / 180);
ctx.translate(-bbcShape220.around.x, -bbcShape220.around.y);
ctx.beginPath();
ctx.arc(bbcShape220.point.x, bbcShape220.point.y, bbcShape220.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(197, 25, 47)';

ctx.save();
ctx.translate(bbcShape221.around.x, bbcShape221.around.y);
ctx.rotate(bbcShape221.rotation * Math.PI / 180);
ctx.translate(-bbcShape221.around.x, -bbcShape221.around.y);
ctx.beginPath();
ctx.arc(bbcShape221.point.x, bbcShape221.point.y, bbcShape221.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 117, 134)';

ctx.save();
ctx.translate(bbcShape222.around.x, bbcShape222.around.y);
ctx.rotate(bbcShape222.rotation * Math.PI / 180);
ctx.translate(-bbcShape222.around.x, -bbcShape222.around.y);
ctx.beginPath();
ctx.arc(bbcShape222.point.x, bbcShape222.point.y, bbcShape222.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 106, 99)';

ctx.save();
ctx.translate(bbcShape223.around.x, bbcShape223.around.y);
ctx.rotate(bbcShape223.rotation * Math.PI / 180);
ctx.translate(-bbcShape223.around.x, -bbcShape223.around.y);
ctx.beginPath();
ctx.arc(bbcShape223.point.x, bbcShape223.point.y, bbcShape223.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 188, 92)';

ctx.save();
ctx.translate(bbcShape224.around.x, bbcShape224.around.y);
ctx.rotate(bbcShape224.rotation * Math.PI / 180);
ctx.translate(-bbcShape224.around.x, -bbcShape224.around.y);
ctx.beginPath();
ctx.arc(bbcShape224.point.x, bbcShape224.point.y, bbcShape224.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(18, 201, 135)';

ctx.save();
ctx.translate(bbcShape225.around.x, bbcShape225.around.y);
ctx.rotate(bbcShape225.rotation * Math.PI / 180);
ctx.translate(-bbcShape225.around.x, -bbcShape225.around.y);
ctx.beginPath();
ctx.arc(bbcShape225.point.x, bbcShape225.point.y, bbcShape225.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 9, 157)';

ctx.save();
ctx.translate(bbcShape226.around.x, bbcShape226.around.y);
ctx.rotate(bbcShape226.rotation * Math.PI / 180);
ctx.translate(-bbcShape226.around.x, -bbcShape226.around.y);
ctx.beginPath();
ctx.arc(bbcShape226.point.x, bbcShape226.point.y, bbcShape226.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(13, 149, 182)';

ctx.save();
ctx.translate(bbcShape227.around.x, bbcShape227.around.y);
ctx.rotate(bbcShape227.rotation * Math.PI / 180);
ctx.translate(-bbcShape227.around.x, -bbcShape227.around.y);
ctx.beginPath();
ctx.arc(bbcShape227.point.x, bbcShape227.point.y, bbcShape227.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 46, 152)';

ctx.save();
ctx.translate(bbcShape228.around.x, bbcShape228.around.y);
ctx.rotate(bbcShape228.rotation * Math.PI / 180);
ctx.translate(-bbcShape228.around.x, -bbcShape228.around.y);
ctx.beginPath();
ctx.arc(bbcShape228.point.x, bbcShape228.point.y, bbcShape228.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(91, 212, 156)';

ctx.save();
ctx.translate(bbcShape229.around.x, bbcShape229.around.y);
ctx.rotate(bbcShape229.rotation * Math.PI / 180);
ctx.translate(-bbcShape229.around.x, -bbcShape229.around.y);
ctx.beginPath();
ctx.arc(bbcShape229.point.x, bbcShape229.point.y, bbcShape229.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 235, 98)';

ctx.save();
ctx.translate(bbcShape230.around.x, bbcShape230.around.y);
ctx.rotate(bbcShape230.rotation * Math.PI / 180);
ctx.translate(-bbcShape230.around.x, -bbcShape230.around.y);
ctx.beginPath();
ctx.arc(bbcShape230.point.x, bbcShape230.point.y, bbcShape230.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 194, 217)';

ctx.save();
ctx.translate(bbcShape231.around.x, bbcShape231.around.y);
ctx.rotate(bbcShape231.rotation * Math.PI / 180);
ctx.translate(-bbcShape231.around.x, -bbcShape231.around.y);
ctx.beginPath();
ctx.arc(bbcShape231.point.x, bbcShape231.point.y, bbcShape231.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(154, 47, 105)';

ctx.save();
ctx.translate(bbcShape232.around.x, bbcShape232.around.y);
ctx.rotate(bbcShape232.rotation * Math.PI / 180);
ctx.translate(-bbcShape232.around.x, -bbcShape232.around.y);
ctx.beginPath();
ctx.arc(bbcShape232.point.x, bbcShape232.point.y, bbcShape232.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(85, 17, 207)';

ctx.save();
ctx.translate(bbcShape233.around.x, bbcShape233.around.y);
ctx.rotate(bbcShape233.rotation * Math.PI / 180);
ctx.translate(-bbcShape233.around.x, -bbcShape233.around.y);
ctx.beginPath();
ctx.arc(bbcShape233.point.x, bbcShape233.point.y, bbcShape233.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(89, 177, 137)';

ctx.save();
ctx.translate(bbcShape234.around.x, bbcShape234.around.y);
ctx.rotate(bbcShape234.rotation * Math.PI / 180);
ctx.translate(-bbcShape234.around.x, -bbcShape234.around.y);
ctx.beginPath();
ctx.arc(bbcShape234.point.x, bbcShape234.point.y, bbcShape234.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(166, 184, 78)';

ctx.save();
ctx.translate(bbcShape235.around.x, bbcShape235.around.y);
ctx.rotate(bbcShape235.rotation * Math.PI / 180);
ctx.translate(-bbcShape235.around.x, -bbcShape235.around.y);
ctx.beginPath();
ctx.arc(bbcShape235.point.x, bbcShape235.point.y, bbcShape235.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(186, 247, 190)';

ctx.save();
ctx.translate(bbcShape236.around.x, bbcShape236.around.y);
ctx.rotate(bbcShape236.rotation * Math.PI / 180);
ctx.translate(-bbcShape236.around.x, -bbcShape236.around.y);
ctx.beginPath();
ctx.arc(bbcShape236.point.x, bbcShape236.point.y, bbcShape236.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(79, 17, 158)';

ctx.save();
ctx.translate(bbcShape237.around.x, bbcShape237.around.y);
ctx.rotate(bbcShape237.rotation * Math.PI / 180);
ctx.translate(-bbcShape237.around.x, -bbcShape237.around.y);
ctx.beginPath();
ctx.arc(bbcShape237.point.x, bbcShape237.point.y, bbcShape237.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(131, 9, 234)';

ctx.save();
ctx.translate(bbcShape238.around.x, bbcShape238.around.y);
ctx.rotate(bbcShape238.rotation * Math.PI / 180);
ctx.translate(-bbcShape238.around.x, -bbcShape238.around.y);
ctx.beginPath();
ctx.arc(bbcShape238.point.x, bbcShape238.point.y, bbcShape238.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(3, 232, 5)';

ctx.save();
ctx.translate(bbcShape239.around.x, bbcShape239.around.y);
ctx.rotate(bbcShape239.rotation * Math.PI / 180);
ctx.translate(-bbcShape239.around.x, -bbcShape239.around.y);
ctx.beginPath();
ctx.arc(bbcShape239.point.x, bbcShape239.point.y, bbcShape239.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(113, 105, 127)';

ctx.save();
ctx.translate(bbcShape240.around.x, bbcShape240.around.y);
ctx.rotate(bbcShape240.rotation * Math.PI / 180);
ctx.translate(-bbcShape240.around.x, -bbcShape240.around.y);
ctx.beginPath();
ctx.arc(bbcShape240.point.x, bbcShape240.point.y, bbcShape240.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(65, 182, 251)';

ctx.save();
ctx.translate(bbcShape241.around.x, bbcShape241.around.y);
ctx.rotate(bbcShape241.rotation * Math.PI / 180);
ctx.translate(-bbcShape241.around.x, -bbcShape241.around.y);
ctx.beginPath();
ctx.arc(bbcShape241.point.x, bbcShape241.point.y, bbcShape241.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(243, 5, 96)';

ctx.save();
ctx.translate(bbcShape242.around.x, bbcShape242.around.y);
ctx.rotate(bbcShape242.rotation * Math.PI / 180);
ctx.translate(-bbcShape242.around.x, -bbcShape242.around.y);
ctx.beginPath();
ctx.arc(bbcShape242.point.x, bbcShape242.point.y, bbcShape242.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(105, 101, 70)';

ctx.save();
ctx.translate(bbcShape243.around.x, bbcShape243.around.y);
ctx.rotate(bbcShape243.rotation * Math.PI / 180);
ctx.translate(-bbcShape243.around.x, -bbcShape243.around.y);
ctx.beginPath();
ctx.arc(bbcShape243.point.x, bbcShape243.point.y, bbcShape243.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 181, 249)';

ctx.save();
ctx.translate(bbcShape244.around.x, bbcShape244.around.y);
ctx.rotate(bbcShape244.rotation * Math.PI / 180);
ctx.translate(-bbcShape244.around.x, -bbcShape244.around.y);
ctx.beginPath();
ctx.arc(bbcShape244.point.x, bbcShape244.point.y, bbcShape244.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 11, 233)';

ctx.save();
ctx.translate(bbcShape245.around.x, bbcShape245.around.y);
ctx.rotate(bbcShape245.rotation * Math.PI / 180);
ctx.translate(-bbcShape245.around.x, -bbcShape245.around.y);
ctx.beginPath();
ctx.arc(bbcShape245.point.x, bbcShape245.point.y, bbcShape245.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(178, 223, 42)';

ctx.save();
ctx.translate(bbcShape246.around.x, bbcShape246.around.y);
ctx.rotate(bbcShape246.rotation * Math.PI / 180);
ctx.translate(-bbcShape246.around.x, -bbcShape246.around.y);
ctx.beginPath();
ctx.arc(bbcShape246.point.x, bbcShape246.point.y, bbcShape246.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(15, 195, 171)';

ctx.save();
ctx.translate(bbcShape247.around.x, bbcShape247.around.y);
ctx.rotate(bbcShape247.rotation * Math.PI / 180);
ctx.translate(-bbcShape247.around.x, -bbcShape247.around.y);
ctx.beginPath();
ctx.arc(bbcShape247.point.x, bbcShape247.point.y, bbcShape247.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(210, 67, 36)';

ctx.save();
ctx.translate(bbcShape248.around.x, bbcShape248.around.y);
ctx.rotate(bbcShape248.rotation * Math.PI / 180);
ctx.translate(-bbcShape248.around.x, -bbcShape248.around.y);
ctx.beginPath();
ctx.arc(bbcShape248.point.x, bbcShape248.point.y, bbcShape248.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(70, 18, 248)';

ctx.save();
ctx.translate(bbcShape249.around.x, bbcShape249.around.y);
ctx.rotate(bbcShape249.rotation * Math.PI / 180);
ctx.translate(-bbcShape249.around.x, -bbcShape249.around.y);
ctx.beginPath();
ctx.arc(bbcShape249.point.x, bbcShape249.point.y, bbcShape249.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 188, 65)';

ctx.save();
ctx.translate(bbcShape250.around.x, bbcShape250.around.y);
ctx.rotate(bbcShape250.rotation * Math.PI / 180);
ctx.translate(-bbcShape250.around.x, -bbcShape250.around.y);
ctx.beginPath();
ctx.arc(bbcShape250.point.x, bbcShape250.point.y, bbcShape250.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(61, 169, 58)';

ctx.save();
ctx.translate(bbcShape251.around.x, bbcShape251.around.y);
ctx.rotate(bbcShape251.rotation * Math.PI / 180);
ctx.translate(-bbcShape251.around.x, -bbcShape251.around.y);
ctx.beginPath();
ctx.arc(bbcShape251.point.x, bbcShape251.point.y, bbcShape251.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 148, 217)';

ctx.save();
ctx.translate(bbcShape252.around.x, bbcShape252.around.y);
ctx.rotate(bbcShape252.rotation * Math.PI / 180);
ctx.translate(-bbcShape252.around.x, -bbcShape252.around.y);
ctx.beginPath();
ctx.arc(bbcShape252.point.x, bbcShape252.point.y, bbcShape252.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(159, 241, 84)';

ctx.save();
ctx.translate(bbcShape253.around.x, bbcShape253.around.y);
ctx.rotate(bbcShape253.rotation * Math.PI / 180);
ctx.translate(-bbcShape253.around.x, -bbcShape253.around.y);
ctx.beginPath();
ctx.arc(bbcShape253.point.x, bbcShape253.point.y, bbcShape253.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(56, 66, 176)';

ctx.save();
ctx.translate(bbcShape254.around.x, bbcShape254.around.y);
ctx.rotate(bbcShape254.rotation * Math.PI / 180);
ctx.translate(-bbcShape254.around.x, -bbcShape254.around.y);
ctx.beginPath();
ctx.arc(bbcShape254.point.x, bbcShape254.point.y, bbcShape254.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 125, 162)';

ctx.save();
ctx.translate(bbcShape255.around.x, bbcShape255.around.y);
ctx.rotate(bbcShape255.rotation * Math.PI / 180);
ctx.translate(-bbcShape255.around.x, -bbcShape255.around.y);
ctx.beginPath();
ctx.arc(bbcShape255.point.x, bbcShape255.point.y, bbcShape255.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(206, 179, 208)';

ctx.save();
ctx.translate(bbcShape256.around.x, bbcShape256.around.y);
ctx.rotate(bbcShape256.rotation * Math.PI / 180);
ctx.translate(-bbcShape256.around.x, -bbcShape256.around.y);
ctx.beginPath();
ctx.arc(bbcShape256.point.x, bbcShape256.point.y, bbcShape256.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(245, 53, 44)';

ctx.save();
ctx.translate(bbcShape257.around.x, bbcShape257.around.y);
ctx.rotate(bbcShape257.rotation * Math.PI / 180);
ctx.translate(-bbcShape257.around.x, -bbcShape257.around.y);
ctx.beginPath();
ctx.arc(bbcShape257.point.x, bbcShape257.point.y, bbcShape257.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 214, 75)';

ctx.save();
ctx.translate(bbcShape258.around.x, bbcShape258.around.y);
ctx.rotate(bbcShape258.rotation * Math.PI / 180);
ctx.translate(-bbcShape258.around.x, -bbcShape258.around.y);
ctx.beginPath();
ctx.arc(bbcShape258.point.x, bbcShape258.point.y, bbcShape258.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(122, 150, 91)';

ctx.save();
ctx.translate(bbcShape259.around.x, bbcShape259.around.y);
ctx.rotate(bbcShape259.rotation * Math.PI / 180);
ctx.translate(-bbcShape259.around.x, -bbcShape259.around.y);
ctx.beginPath();
ctx.arc(bbcShape259.point.x, bbcShape259.point.y, bbcShape259.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 249, 195)';

ctx.save();
ctx.translate(bbcShape260.around.x, bbcShape260.around.y);
ctx.rotate(bbcShape260.rotation * Math.PI / 180);
ctx.translate(-bbcShape260.around.x, -bbcShape260.around.y);
ctx.beginPath();
ctx.arc(bbcShape260.point.x, bbcShape260.point.y, bbcShape260.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(74, 94, 216)';

ctx.save();
ctx.translate(bbcShape261.around.x, bbcShape261.around.y);
ctx.rotate(bbcShape261.rotation * Math.PI / 180);
ctx.translate(-bbcShape261.around.x, -bbcShape261.around.y);
ctx.beginPath();
ctx.arc(bbcShape261.point.x, bbcShape261.point.y, bbcShape261.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(110, 157, 116)';

ctx.save();
ctx.translate(bbcShape262.around.x, bbcShape262.around.y);
ctx.rotate(bbcShape262.rotation * Math.PI / 180);
ctx.translate(-bbcShape262.around.x, -bbcShape262.around.y);
ctx.beginPath();
ctx.arc(bbcShape262.point.x, bbcShape262.point.y, bbcShape262.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(136, 147, 48)';

ctx.save();
ctx.translate(bbcShape263.around.x, bbcShape263.around.y);
ctx.rotate(bbcShape263.rotation * Math.PI / 180);
ctx.translate(-bbcShape263.around.x, -bbcShape263.around.y);
ctx.beginPath();
ctx.arc(bbcShape263.point.x, bbcShape263.point.y, bbcShape263.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 128, 209)';

ctx.save();
ctx.translate(bbcShape264.around.x, bbcShape264.around.y);
ctx.rotate(bbcShape264.rotation * Math.PI / 180);
ctx.translate(-bbcShape264.around.x, -bbcShape264.around.y);
ctx.beginPath();
ctx.arc(bbcShape264.point.x, bbcShape264.point.y, bbcShape264.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0, 246, 172)';

ctx.save();
ctx.translate(bbcShape265.around.x, bbcShape265.around.y);
ctx.rotate(bbcShape265.rotation * Math.PI / 180);
ctx.translate(-bbcShape265.around.x, -bbcShape265.around.y);
ctx.beginPath();
ctx.arc(bbcShape265.point.x, bbcShape265.point.y, bbcShape265.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(62, 120, 205)';

ctx.save();
ctx.translate(bbcShape266.around.x, bbcShape266.around.y);
ctx.rotate(bbcShape266.rotation * Math.PI / 180);
ctx.translate(-bbcShape266.around.x, -bbcShape266.around.y);
ctx.beginPath();
ctx.arc(bbcShape266.point.x, bbcShape266.point.y, bbcShape266.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(161, 25, 35)';

ctx.save();
ctx.translate(bbcShape267.around.x, bbcShape267.around.y);
ctx.rotate(bbcShape267.rotation * Math.PI / 180);
ctx.translate(-bbcShape267.around.x, -bbcShape267.around.y);
ctx.beginPath();
ctx.arc(bbcShape267.point.x, bbcShape267.point.y, bbcShape267.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(218, 70, 202)';

ctx.save();
ctx.translate(bbcShape268.around.x, bbcShape268.around.y);
ctx.rotate(bbcShape268.rotation * Math.PI / 180);
ctx.translate(-bbcShape268.around.x, -bbcShape268.around.y);
ctx.beginPath();
ctx.arc(bbcShape268.point.x, bbcShape268.point.y, bbcShape268.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(55, 63, 251)';

ctx.save();
ctx.translate(bbcShape269.around.x, bbcShape269.around.y);
ctx.rotate(bbcShape269.rotation * Math.PI / 180);
ctx.translate(-bbcShape269.around.x, -bbcShape269.around.y);
ctx.beginPath();
ctx.arc(bbcShape269.point.x, bbcShape269.point.y, bbcShape269.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(158, 172, 176)';

ctx.save();
ctx.translate(bbcShape270.around.x, bbcShape270.around.y);
ctx.rotate(bbcShape270.rotation * Math.PI / 180);
ctx.translate(-bbcShape270.around.x, -bbcShape270.around.y);
ctx.beginPath();
ctx.arc(bbcShape270.point.x, bbcShape270.point.y, bbcShape270.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(68, 205, 166)';

ctx.save();
ctx.translate(bbcShape271.around.x, bbcShape271.around.y);
ctx.rotate(bbcShape271.rotation * Math.PI / 180);
ctx.translate(-bbcShape271.around.x, -bbcShape271.around.y);
ctx.beginPath();
ctx.arc(bbcShape271.point.x, bbcShape271.point.y, bbcShape271.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(14, 163, 138)';

ctx.save();
ctx.translate(bbcShape272.around.x, bbcShape272.around.y);
ctx.rotate(bbcShape272.rotation * Math.PI / 180);
ctx.translate(-bbcShape272.around.x, -bbcShape272.around.y);
ctx.beginPath();
ctx.arc(bbcShape272.point.x, bbcShape272.point.y, bbcShape272.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 61, 187)';

ctx.save();
ctx.translate(bbcShape273.around.x, bbcShape273.around.y);
ctx.rotate(bbcShape273.rotation * Math.PI / 180);
ctx.translate(-bbcShape273.around.x, -bbcShape273.around.y);
ctx.beginPath();
ctx.arc(bbcShape273.point.x, bbcShape273.point.y, bbcShape273.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(162, 216, 172)';

ctx.save();
ctx.translate(bbcShape274.around.x, bbcShape274.around.y);
ctx.rotate(bbcShape274.rotation * Math.PI / 180);
ctx.translate(-bbcShape274.around.x, -bbcShape274.around.y);
ctx.beginPath();
ctx.arc(bbcShape274.point.x, bbcShape274.point.y, bbcShape274.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(132, 220, 151)';

ctx.save();
ctx.translate(bbcShape275.around.x, bbcShape275.around.y);
ctx.rotate(bbcShape275.rotation * Math.PI / 180);
ctx.translate(-bbcShape275.around.x, -bbcShape275.around.y);
ctx.beginPath();
ctx.arc(bbcShape275.point.x, bbcShape275.point.y, bbcShape275.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(178, 88, 199)';

ctx.save();
ctx.translate(bbcShape276.around.x, bbcShape276.around.y);
ctx.rotate(bbcShape276.rotation * Math.PI / 180);
ctx.translate(-bbcShape276.around.x, -bbcShape276.around.y);
ctx.beginPath();
ctx.arc(bbcShape276.point.x, bbcShape276.point.y, bbcShape276.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(48, 83, 105)';

ctx.save();
ctx.translate(bbcShape277.around.x, bbcShape277.around.y);
ctx.rotate(bbcShape277.rotation * Math.PI / 180);
ctx.translate(-bbcShape277.around.x, -bbcShape277.around.y);
ctx.beginPath();
ctx.arc(bbcShape277.point.x, bbcShape277.point.y, bbcShape277.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(31, 171, 214)';

ctx.save();
ctx.translate(bbcShape278.around.x, bbcShape278.around.y);
ctx.rotate(bbcShape278.rotation * Math.PI / 180);
ctx.translate(-bbcShape278.around.x, -bbcShape278.around.y);
ctx.beginPath();
ctx.arc(bbcShape278.point.x, bbcShape278.point.y, bbcShape278.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(110, 245, 42)';

ctx.save();
ctx.translate(bbcShape279.around.x, bbcShape279.around.y);
ctx.rotate(bbcShape279.rotation * Math.PI / 180);
ctx.translate(-bbcShape279.around.x, -bbcShape279.around.y);
ctx.beginPath();
ctx.arc(bbcShape279.point.x, bbcShape279.point.y, bbcShape279.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(185, 254, 28)';

ctx.save();
ctx.translate(bbcShape280.around.x, bbcShape280.around.y);
ctx.rotate(bbcShape280.rotation * Math.PI / 180);
ctx.translate(-bbcShape280.around.x, -bbcShape280.around.y);
ctx.beginPath();
ctx.arc(bbcShape280.point.x, bbcShape280.point.y, bbcShape280.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(220, 132, 96)';

ctx.save();
ctx.translate(bbcShape281.around.x, bbcShape281.around.y);
ctx.rotate(bbcShape281.rotation * Math.PI / 180);
ctx.translate(-bbcShape281.around.x, -bbcShape281.around.y);
ctx.beginPath();
ctx.arc(bbcShape281.point.x, bbcShape281.point.y, bbcShape281.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(34, 180, 217)';

ctx.save();
ctx.translate(bbcShape282.around.x, bbcShape282.around.y);
ctx.rotate(bbcShape282.rotation * Math.PI / 180);
ctx.translate(-bbcShape282.around.x, -bbcShape282.around.y);
ctx.beginPath();
ctx.arc(bbcShape282.point.x, bbcShape282.point.y, bbcShape282.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(113, 185, 137)';

ctx.save();
ctx.translate(bbcShape283.around.x, bbcShape283.around.y);
ctx.rotate(bbcShape283.rotation * Math.PI / 180);
ctx.translate(-bbcShape283.around.x, -bbcShape283.around.y);
ctx.beginPath();
ctx.arc(bbcShape283.point.x, bbcShape283.point.y, bbcShape283.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(80, 192, 96)';

ctx.save();
ctx.translate(bbcShape284.around.x, bbcShape284.around.y);
ctx.rotate(bbcShape284.rotation * Math.PI / 180);
ctx.translate(-bbcShape284.around.x, -bbcShape284.around.y);
ctx.beginPath();
ctx.arc(bbcShape284.point.x, bbcShape284.point.y, bbcShape284.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(48, 227, 68)';

ctx.save();
ctx.translate(bbcShape285.around.x, bbcShape285.around.y);
ctx.rotate(bbcShape285.rotation * Math.PI / 180);
ctx.translate(-bbcShape285.around.x, -bbcShape285.around.y);
ctx.beginPath();
ctx.arc(bbcShape285.point.x, bbcShape285.point.y, bbcShape285.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(97, 229, 148)';

ctx.save();
ctx.translate(bbcShape286.around.x, bbcShape286.around.y);
ctx.rotate(bbcShape286.rotation * Math.PI / 180);
ctx.translate(-bbcShape286.around.x, -bbcShape286.around.y);
ctx.beginPath();
ctx.arc(bbcShape286.point.x, bbcShape286.point.y, bbcShape286.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(54, 253, 11)';

ctx.save();
ctx.translate(bbcShape287.around.x, bbcShape287.around.y);
ctx.rotate(bbcShape287.rotation * Math.PI / 180);
ctx.translate(-bbcShape287.around.x, -bbcShape287.around.y);
ctx.beginPath();
ctx.arc(bbcShape287.point.x, bbcShape287.point.y, bbcShape287.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(102, 80, 183)';

ctx.save();
ctx.translate(bbcShape288.around.x, bbcShape288.around.y);
ctx.rotate(bbcShape288.rotation * Math.PI / 180);
ctx.translate(-bbcShape288.around.x, -bbcShape288.around.y);
ctx.beginPath();
ctx.arc(bbcShape288.point.x, bbcShape288.point.y, bbcShape288.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(69, 190, 242)';

ctx.save();
ctx.translate(bbcShape289.around.x, bbcShape289.around.y);
ctx.rotate(bbcShape289.rotation * Math.PI / 180);
ctx.translate(-bbcShape289.around.x, -bbcShape289.around.y);
ctx.beginPath();
ctx.arc(bbcShape289.point.x, bbcShape289.point.y, bbcShape289.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(91, 248, 180)';

ctx.save();
ctx.translate(bbcShape290.around.x, bbcShape290.around.y);
ctx.rotate(bbcShape290.rotation * Math.PI / 180);
ctx.translate(-bbcShape290.around.x, -bbcShape290.around.y);
ctx.beginPath();
ctx.arc(bbcShape290.point.x, bbcShape290.point.y, bbcShape290.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(88, 91, 255)';

ctx.save();
ctx.translate(bbcShape291.around.x, bbcShape291.around.y);
ctx.rotate(bbcShape291.rotation * Math.PI / 180);
ctx.translate(-bbcShape291.around.x, -bbcShape291.around.y);
ctx.beginPath();
ctx.arc(bbcShape291.point.x, bbcShape291.point.y, bbcShape291.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(191, 208, 80)';

ctx.save();
ctx.translate(bbcShape292.around.x, bbcShape292.around.y);
ctx.rotate(bbcShape292.rotation * Math.PI / 180);
ctx.translate(-bbcShape292.around.x, -bbcShape292.around.y);
ctx.beginPath();
ctx.arc(bbcShape292.point.x, bbcShape292.point.y, bbcShape292.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(230, 184, 221)';

ctx.save();
ctx.translate(bbcShape293.around.x, bbcShape293.around.y);
ctx.rotate(bbcShape293.rotation * Math.PI / 180);
ctx.translate(-bbcShape293.around.x, -bbcShape293.around.y);
ctx.beginPath();
ctx.arc(bbcShape293.point.x, bbcShape293.point.y, bbcShape293.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(129, 3, 238)';

ctx.save();
ctx.translate(bbcShape294.around.x, bbcShape294.around.y);
ctx.rotate(bbcShape294.rotation * Math.PI / 180);
ctx.translate(-bbcShape294.around.x, -bbcShape294.around.y);
ctx.beginPath();
ctx.arc(bbcShape294.point.x, bbcShape294.point.y, bbcShape294.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(33, 38, 217)';

ctx.save();
ctx.translate(bbcShape295.around.x, bbcShape295.around.y);
ctx.rotate(bbcShape295.rotation * Math.PI / 180);
ctx.translate(-bbcShape295.around.x, -bbcShape295.around.y);
ctx.beginPath();
ctx.arc(bbcShape295.point.x, bbcShape295.point.y, bbcShape295.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(204, 121, 255)';

ctx.save();
ctx.translate(bbcShape296.around.x, bbcShape296.around.y);
ctx.rotate(bbcShape296.rotation * Math.PI / 180);
ctx.translate(-bbcShape296.around.x, -bbcShape296.around.y);
ctx.beginPath();
ctx.arc(bbcShape296.point.x, bbcShape296.point.y, bbcShape296.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(88, 3, 10)';

ctx.save();
ctx.translate(bbcShape297.around.x, bbcShape297.around.y);
ctx.rotate(bbcShape297.rotation * Math.PI / 180);
ctx.translate(-bbcShape297.around.x, -bbcShape297.around.y);
ctx.beginPath();
ctx.arc(bbcShape297.point.x, bbcShape297.point.y, bbcShape297.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(180, 25, 93)';

ctx.save();
ctx.translate(bbcShape298.around.x, bbcShape298.around.y);
ctx.rotate(bbcShape298.rotation * Math.PI / 180);
ctx.translate(-bbcShape298.around.x, -bbcShape298.around.y);
ctx.beginPath();
ctx.arc(bbcShape298.point.x, bbcShape298.point.y, bbcShape298.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(231, 44, 80)';

ctx.save();
ctx.translate(bbcShape299.around.x, bbcShape299.around.y);
ctx.rotate(bbcShape299.rotation * Math.PI / 180);
ctx.translate(-bbcShape299.around.x, -bbcShape299.around.y);
ctx.beginPath();
ctx.arc(bbcShape299.point.x, bbcShape299.point.y, bbcShape299.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(204, 186, 148)';

ctx.save();
ctx.translate(bbcShape300.around.x, bbcShape300.around.y);
ctx.rotate(bbcShape300.rotation * Math.PI / 180);
ctx.translate(-bbcShape300.around.x, -bbcShape300.around.y);
ctx.beginPath();
ctx.arc(bbcShape300.point.x, bbcShape300.point.y, bbcShape300.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(159, 73, 39)';

ctx.save();
ctx.translate(bbcShape301.around.x, bbcShape301.around.y);
ctx.rotate(bbcShape301.rotation * Math.PI / 180);
ctx.translate(-bbcShape301.around.x, -bbcShape301.around.y);
ctx.beginPath();
ctx.arc(bbcShape301.point.x, bbcShape301.point.y, bbcShape301.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(193, 43, 61)';

ctx.save();
ctx.translate(bbcShape302.around.x, bbcShape302.around.y);
ctx.rotate(bbcShape302.rotation * Math.PI / 180);
ctx.translate(-bbcShape302.around.x, -bbcShape302.around.y);
ctx.beginPath();
ctx.arc(bbcShape302.point.x, bbcShape302.point.y, bbcShape302.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape303.around.x, bbcShape303.around.y);
ctx.rotate(bbcShape303.rotation * Math.PI / 180);
ctx.translate(-bbcShape303.around.x, -bbcShape303.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape303.points[0][0], bbcShape303.points[0][1]);
ctx.lineTo(bbcShape303.points[1][0], bbcShape303.points[1][1]);
ctx.lineTo(bbcShape303.points[2][0], bbcShape303.points[2][1]);
ctx.lineTo(bbcShape303.points[3][0], bbcShape303.points[3][1]);
ctx.lineTo(bbcShape303.points[4][0], bbcShape303.points[4][1]);
ctx.lineTo(bbcShape303.points[5][0], bbcShape303.points[5][1]);
ctx.lineTo(bbcShape303.points[6][0], bbcShape303.points[6][1]);
ctx.lineTo(bbcShape303.points[7][0], bbcShape303.points[7][1]);
ctx.lineTo(bbcShape303.points[8][0], bbcShape303.points[8][1]);
ctx.lineTo(bbcShape303.points[9][0], bbcShape303.points[9][1]);
ctx.lineTo(bbcShape303.points[10][0], bbcShape303.points[10][1]);
ctx.lineTo(bbcShape303.points[11][0], bbcShape303.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape304.around.x, bbcShape304.around.y);
ctx.rotate(bbcShape304.rotation * Math.PI / 180);
ctx.translate(-bbcShape304.around.x, -bbcShape304.around.y);
ctx.beginPath();
ctx.rect(bbcShape304.point.x, bbcShape304.point.y, bbcShape304.size.width, bbcShape304.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape305.around.x, bbcShape305.around.y);
ctx.rotate(bbcShape305.rotation * Math.PI / 180);
ctx.translate(-bbcShape305.around.x, -bbcShape305.around.y);
ctx.beginPath();
ctx.rect(bbcShape305.point.x, bbcShape305.point.y, bbcShape305.size.width, bbcShape305.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape306.around.x, bbcShape306.around.y);
ctx.rotate(bbcShape306.rotation * Math.PI / 180);
ctx.translate(-bbcShape306.around.x, -bbcShape306.around.y);
ctx.beginPath();
ctx.rect(bbcShape306.point.x, bbcShape306.point.y, bbcShape306.size.width, bbcShape306.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape307.around.x, bbcShape307.around.y);
ctx.rotate(bbcShape307.rotation * Math.PI / 180);
ctx.translate(-bbcShape307.around.x, -bbcShape307.around.y);
ctx.beginPath();
ctx.rect(bbcShape307.point.x, bbcShape307.point.y, bbcShape307.size.width, bbcShape307.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape308.around.x, bbcShape308.around.y);
ctx.rotate(bbcShape308.rotation * Math.PI / 180);
ctx.translate(-bbcShape308.around.x, -bbcShape308.around.y);
ctx.beginPath();
ctx.rect(bbcShape308.point.x, bbcShape308.point.y, bbcShape308.size.width, bbcShape308.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape309.around.x, bbcShape309.around.y);
ctx.rotate(bbcShape309.rotation * Math.PI / 180);
ctx.translate(-bbcShape309.around.x, -bbcShape309.around.y);
ctx.beginPath();
ctx.rect(bbcShape309.point.x, bbcShape309.point.y, bbcShape309.size.width, bbcShape309.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape310.around.x, bbcShape310.around.y);
ctx.rotate(bbcShape310.rotation * Math.PI / 180);
ctx.translate(-bbcShape310.around.x, -bbcShape310.around.y);
ctx.beginPath();
ctx.rect(bbcShape310.point.x, bbcShape310.point.y, bbcShape310.size.width, bbcShape310.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape311.around.x, bbcShape311.around.y);
ctx.rotate(bbcShape311.rotation * Math.PI / 180);
ctx.translate(-bbcShape311.around.x, -bbcShape311.around.y);
ctx.beginPath();
ctx.rect(bbcShape311.point.x, bbcShape311.point.y, bbcShape311.size.width, bbcShape311.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape312.around.x, bbcShape312.around.y);
ctx.rotate(bbcShape312.rotation * Math.PI / 180);
ctx.translate(-bbcShape312.around.x, -bbcShape312.around.y);
ctx.beginPath();
ctx.rect(bbcShape312.point.x, bbcShape312.point.y, bbcShape312.size.width, bbcShape312.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape313.around.x, bbcShape313.around.y);
ctx.rotate(bbcShape313.rotation * Math.PI / 180);
ctx.translate(-bbcShape313.around.x, -bbcShape313.around.y);
ctx.beginPath();
ctx.rect(bbcShape313.point.x, bbcShape313.point.y, bbcShape313.size.width, bbcShape313.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape314.around.x, bbcShape314.around.y);
ctx.rotate(bbcShape314.rotation * Math.PI / 180);
ctx.translate(-bbcShape314.around.x, -bbcShape314.around.y);
ctx.beginPath();
ctx.rect(bbcShape314.point.x, bbcShape314.point.y, bbcShape314.size.width, bbcShape314.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape315.around.x, bbcShape315.around.y);
ctx.rotate(bbcShape315.rotation * Math.PI / 180);
ctx.translate(-bbcShape315.around.x, -bbcShape315.around.y);
ctx.beginPath();
ctx.rect(bbcShape315.point.x, bbcShape315.point.y, bbcShape315.size.width, bbcShape315.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape316.around.x, bbcShape316.around.y);
ctx.rotate(bbcShape316.rotation * Math.PI / 180);
ctx.translate(-bbcShape316.around.x, -bbcShape316.around.y);
ctx.beginPath();
ctx.rect(bbcShape316.point.x, bbcShape316.point.y, bbcShape316.size.width, bbcShape316.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape317.around.x, bbcShape317.around.y);
ctx.rotate(bbcShape317.rotation * Math.PI / 180);
ctx.translate(-bbcShape317.around.x, -bbcShape317.around.y);
ctx.beginPath();
ctx.rect(bbcShape317.point.x, bbcShape317.point.y, bbcShape317.size.width, bbcShape317.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape318.around.x, bbcShape318.around.y);
ctx.rotate(bbcShape318.rotation * Math.PI / 180);
ctx.translate(-bbcShape318.around.x, -bbcShape318.around.y);
ctx.beginPath();
ctx.rect(bbcShape318.point.x, bbcShape318.point.y, bbcShape318.size.width, bbcShape318.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape319.around.x, bbcShape319.around.y);
ctx.rotate(bbcShape319.rotation * Math.PI / 180);
ctx.translate(-bbcShape319.around.x, -bbcShape319.around.y);
ctx.beginPath();
ctx.rect(bbcShape319.point.x, bbcShape319.point.y, bbcShape319.size.width, bbcShape319.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape320.around.x, bbcShape320.around.y);
ctx.rotate(bbcShape320.rotation * Math.PI / 180);
ctx.translate(-bbcShape320.around.x, -bbcShape320.around.y);
ctx.beginPath();
ctx.rect(bbcShape320.point.x, bbcShape320.point.y, bbcShape320.size.width, bbcShape320.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape321.around.x, bbcShape321.around.y);
ctx.rotate(bbcShape321.rotation * Math.PI / 180);
ctx.translate(-bbcShape321.around.x, -bbcShape321.around.y);
ctx.beginPath();
ctx.rect(bbcShape321.point.x, bbcShape321.point.y, bbcShape321.size.width, bbcShape321.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape322.around.x, bbcShape322.around.y);
ctx.rotate(bbcShape322.rotation * Math.PI / 180);
ctx.translate(-bbcShape322.around.x, -bbcShape322.around.y);
ctx.beginPath();
ctx.rect(bbcShape322.point.x, bbcShape322.point.y, bbcShape322.size.width, bbcShape322.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape323.around.x, bbcShape323.around.y);
ctx.rotate(bbcShape323.rotation * Math.PI / 180);
ctx.translate(-bbcShape323.around.x, -bbcShape323.around.y);
ctx.beginPath();
ctx.rect(bbcShape323.point.x, bbcShape323.point.y, bbcShape323.size.width, bbcShape323.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape324.around.x, bbcShape324.around.y);
ctx.rotate(bbcShape324.rotation * Math.PI / 180);
ctx.translate(-bbcShape324.around.x, -bbcShape324.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape324.points[0][0], bbcShape324.points[0][1]);
ctx.lineTo(bbcShape324.points[1][0], bbcShape324.points[1][1]);
ctx.lineTo(bbcShape324.points[2][0], bbcShape324.points[2][1]);
ctx.lineTo(bbcShape324.points[3][0], bbcShape324.points[3][1]);
ctx.lineTo(bbcShape324.points[4][0], bbcShape324.points[4][1]);
ctx.lineTo(bbcShape324.points[5][0], bbcShape324.points[5][1]);
ctx.lineTo(bbcShape324.points[6][0], bbcShape324.points[6][1]);
ctx.lineTo(bbcShape324.points[7][0], bbcShape324.points[7][1]);
ctx.lineTo(bbcShape324.points[8][0], bbcShape324.points[8][1]);
ctx.lineTo(bbcShape324.points[9][0], bbcShape324.points[9][1]);
ctx.lineTo(bbcShape324.points[10][0], bbcShape324.points[10][1]);
ctx.lineTo(bbcShape324.points[11][0], bbcShape324.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape325.around.x, bbcShape325.around.y);
ctx.rotate(bbcShape325.rotation * Math.PI / 180);
ctx.translate(-bbcShape325.around.x, -bbcShape325.around.y);
ctx.beginPath();
ctx.rect(bbcShape325.point.x, bbcShape325.point.y, bbcShape325.size.width, bbcShape325.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape326.around.x, bbcShape326.around.y);
ctx.rotate(bbcShape326.rotation * Math.PI / 180);
ctx.translate(-bbcShape326.around.x, -bbcShape326.around.y);
ctx.beginPath();
ctx.rect(bbcShape326.point.x, bbcShape326.point.y, bbcShape326.size.width, bbcShape326.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape327.around.x, bbcShape327.around.y);
ctx.rotate(bbcShape327.rotation * Math.PI / 180);
ctx.translate(-bbcShape327.around.x, -bbcShape327.around.y);
ctx.beginPath();
ctx.rect(bbcShape327.point.x, bbcShape327.point.y, bbcShape327.size.width, bbcShape327.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape328.around.x, bbcShape328.around.y);
ctx.rotate(bbcShape328.rotation * Math.PI / 180);
ctx.translate(-bbcShape328.around.x, -bbcShape328.around.y);
ctx.beginPath();
ctx.rect(bbcShape328.point.x, bbcShape328.point.y, bbcShape328.size.width, bbcShape328.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape329.around.x, bbcShape329.around.y);
ctx.rotate(bbcShape329.rotation * Math.PI / 180);
ctx.translate(-bbcShape329.around.x, -bbcShape329.around.y);
ctx.beginPath();
ctx.rect(bbcShape329.point.x, bbcShape329.point.y, bbcShape329.size.width, bbcShape329.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape330.around.x, bbcShape330.around.y);
ctx.rotate(bbcShape330.rotation * Math.PI / 180);
ctx.translate(-bbcShape330.around.x, -bbcShape330.around.y);
ctx.beginPath();
ctx.rect(bbcShape330.point.x, bbcShape330.point.y, bbcShape330.size.width, bbcShape330.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape331.around.x, bbcShape331.around.y);
ctx.rotate(bbcShape331.rotation * Math.PI / 180);
ctx.translate(-bbcShape331.around.x, -bbcShape331.around.y);
ctx.beginPath();
ctx.rect(bbcShape331.point.x, bbcShape331.point.y, bbcShape331.size.width, bbcShape331.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape332.around.x, bbcShape332.around.y);
ctx.rotate(bbcShape332.rotation * Math.PI / 180);
ctx.translate(-bbcShape332.around.x, -bbcShape332.around.y);
ctx.beginPath();
ctx.rect(bbcShape332.point.x, bbcShape332.point.y, bbcShape332.size.width, bbcShape332.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape333.around.x, bbcShape333.around.y);
ctx.rotate(bbcShape333.rotation * Math.PI / 180);
ctx.translate(-bbcShape333.around.x, -bbcShape333.around.y);
ctx.beginPath();
ctx.rect(bbcShape333.point.x, bbcShape333.point.y, bbcShape333.size.width, bbcShape333.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape334.around.x, bbcShape334.around.y);
ctx.rotate(bbcShape334.rotation * Math.PI / 180);
ctx.translate(-bbcShape334.around.x, -bbcShape334.around.y);
ctx.beginPath();
ctx.rect(bbcShape334.point.x, bbcShape334.point.y, bbcShape334.size.width, bbcShape334.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape335.around.x, bbcShape335.around.y);
ctx.rotate(bbcShape335.rotation * Math.PI / 180);
ctx.translate(-bbcShape335.around.x, -bbcShape335.around.y);
ctx.beginPath();
ctx.rect(bbcShape335.point.x, bbcShape335.point.y, bbcShape335.size.width, bbcShape335.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape336.around.x, bbcShape336.around.y);
ctx.rotate(bbcShape336.rotation * Math.PI / 180);
ctx.translate(-bbcShape336.around.x, -bbcShape336.around.y);
ctx.beginPath();
ctx.rect(bbcShape336.point.x, bbcShape336.point.y, bbcShape336.size.width, bbcShape336.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape337.around.x, bbcShape337.around.y);
ctx.rotate(bbcShape337.rotation * Math.PI / 180);
ctx.translate(-bbcShape337.around.x, -bbcShape337.around.y);
ctx.beginPath();
ctx.rect(bbcShape337.point.x, bbcShape337.point.y, bbcShape337.size.width, bbcShape337.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape338.around.x, bbcShape338.around.y);
ctx.rotate(bbcShape338.rotation * Math.PI / 180);
ctx.translate(-bbcShape338.around.x, -bbcShape338.around.y);
ctx.beginPath();
ctx.rect(bbcShape338.point.x, bbcShape338.point.y, bbcShape338.size.width, bbcShape338.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape339.around.x, bbcShape339.around.y);
ctx.rotate(bbcShape339.rotation * Math.PI / 180);
ctx.translate(-bbcShape339.around.x, -bbcShape339.around.y);
ctx.beginPath();
ctx.rect(bbcShape339.point.x, bbcShape339.point.y, bbcShape339.size.width, bbcShape339.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape340.around.x, bbcShape340.around.y);
ctx.rotate(bbcShape340.rotation * Math.PI / 180);
ctx.translate(-bbcShape340.around.x, -bbcShape340.around.y);
ctx.beginPath();
ctx.rect(bbcShape340.point.x, bbcShape340.point.y, bbcShape340.size.width, bbcShape340.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape341.around.x, bbcShape341.around.y);
ctx.rotate(bbcShape341.rotation * Math.PI / 180);
ctx.translate(-bbcShape341.around.x, -bbcShape341.around.y);
ctx.beginPath();
ctx.rect(bbcShape341.point.x, bbcShape341.point.y, bbcShape341.size.width, bbcShape341.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape342.around.x, bbcShape342.around.y);
ctx.rotate(bbcShape342.rotation * Math.PI / 180);
ctx.translate(-bbcShape342.around.x, -bbcShape342.around.y);
ctx.beginPath();
ctx.rect(bbcShape342.point.x, bbcShape342.point.y, bbcShape342.size.width, bbcShape342.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape343.around.x, bbcShape343.around.y);
ctx.rotate(bbcShape343.rotation * Math.PI / 180);
ctx.translate(-bbcShape343.around.x, -bbcShape343.around.y);
ctx.beginPath();
ctx.rect(bbcShape343.point.x, bbcShape343.point.y, bbcShape343.size.width, bbcShape343.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape344.around.x, bbcShape344.around.y);
ctx.rotate(bbcShape344.rotation * Math.PI / 180);
ctx.translate(-bbcShape344.around.x, -bbcShape344.around.y);
ctx.beginPath();
ctx.rect(bbcShape344.point.x, bbcShape344.point.y, bbcShape344.size.width, bbcShape344.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape345.around.x, bbcShape345.around.y);
ctx.rotate(bbcShape345.rotation * Math.PI / 180);
ctx.translate(-bbcShape345.around.x, -bbcShape345.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape345.points[0][0], bbcShape345.points[0][1]);
ctx.lineTo(bbcShape345.points[1][0], bbcShape345.points[1][1]);
ctx.lineTo(bbcShape345.points[2][0], bbcShape345.points[2][1]);
ctx.lineTo(bbcShape345.points[3][0], bbcShape345.points[3][1]);
ctx.lineTo(bbcShape345.points[4][0], bbcShape345.points[4][1]);
ctx.lineTo(bbcShape345.points[5][0], bbcShape345.points[5][1]);
ctx.lineTo(bbcShape345.points[6][0], bbcShape345.points[6][1]);
ctx.lineTo(bbcShape345.points[7][0], bbcShape345.points[7][1]);
ctx.lineTo(bbcShape345.points[8][0], bbcShape345.points[8][1]);
ctx.lineTo(bbcShape345.points[9][0], bbcShape345.points[9][1]);
ctx.lineTo(bbcShape345.points[10][0], bbcShape345.points[10][1]);
ctx.lineTo(bbcShape345.points[11][0], bbcShape345.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape346.around.x, bbcShape346.around.y);
ctx.rotate(bbcShape346.rotation * Math.PI / 180);
ctx.translate(-bbcShape346.around.x, -bbcShape346.around.y);
ctx.beginPath();
ctx.rect(bbcShape346.point.x, bbcShape346.point.y, bbcShape346.size.width, bbcShape346.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape347.around.x, bbcShape347.around.y);
ctx.rotate(bbcShape347.rotation * Math.PI / 180);
ctx.translate(-bbcShape347.around.x, -bbcShape347.around.y);
ctx.beginPath();
ctx.rect(bbcShape347.point.x, bbcShape347.point.y, bbcShape347.size.width, bbcShape347.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape348.around.x, bbcShape348.around.y);
ctx.rotate(bbcShape348.rotation * Math.PI / 180);
ctx.translate(-bbcShape348.around.x, -bbcShape348.around.y);
ctx.beginPath();
ctx.rect(bbcShape348.point.x, bbcShape348.point.y, bbcShape348.size.width, bbcShape348.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape349.around.x, bbcShape349.around.y);
ctx.rotate(bbcShape349.rotation * Math.PI / 180);
ctx.translate(-bbcShape349.around.x, -bbcShape349.around.y);
ctx.beginPath();
ctx.rect(bbcShape349.point.x, bbcShape349.point.y, bbcShape349.size.width, bbcShape349.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape350.around.x, bbcShape350.around.y);
ctx.rotate(bbcShape350.rotation * Math.PI / 180);
ctx.translate(-bbcShape350.around.x, -bbcShape350.around.y);
ctx.beginPath();
ctx.rect(bbcShape350.point.x, bbcShape350.point.y, bbcShape350.size.width, bbcShape350.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape351.around.x, bbcShape351.around.y);
ctx.rotate(bbcShape351.rotation * Math.PI / 180);
ctx.translate(-bbcShape351.around.x, -bbcShape351.around.y);
ctx.beginPath();
ctx.rect(bbcShape351.point.x, bbcShape351.point.y, bbcShape351.size.width, bbcShape351.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape352.around.x, bbcShape352.around.y);
ctx.rotate(bbcShape352.rotation * Math.PI / 180);
ctx.translate(-bbcShape352.around.x, -bbcShape352.around.y);
ctx.beginPath();
ctx.rect(bbcShape352.point.x, bbcShape352.point.y, bbcShape352.size.width, bbcShape352.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape353.around.x, bbcShape353.around.y);
ctx.rotate(bbcShape353.rotation * Math.PI / 180);
ctx.translate(-bbcShape353.around.x, -bbcShape353.around.y);
ctx.beginPath();
ctx.rect(bbcShape353.point.x, bbcShape353.point.y, bbcShape353.size.width, bbcShape353.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape354.around.x, bbcShape354.around.y);
ctx.rotate(bbcShape354.rotation * Math.PI / 180);
ctx.translate(-bbcShape354.around.x, -bbcShape354.around.y);
ctx.beginPath();
ctx.rect(bbcShape354.point.x, bbcShape354.point.y, bbcShape354.size.width, bbcShape354.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape355.around.x, bbcShape355.around.y);
ctx.rotate(bbcShape355.rotation * Math.PI / 180);
ctx.translate(-bbcShape355.around.x, -bbcShape355.around.y);
ctx.beginPath();
ctx.rect(bbcShape355.point.x, bbcShape355.point.y, bbcShape355.size.width, bbcShape355.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape356.around.x, bbcShape356.around.y);
ctx.rotate(bbcShape356.rotation * Math.PI / 180);
ctx.translate(-bbcShape356.around.x, -bbcShape356.around.y);
ctx.beginPath();
ctx.rect(bbcShape356.point.x, bbcShape356.point.y, bbcShape356.size.width, bbcShape356.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape357.around.x, bbcShape357.around.y);
ctx.rotate(bbcShape357.rotation * Math.PI / 180);
ctx.translate(-bbcShape357.around.x, -bbcShape357.around.y);
ctx.beginPath();
ctx.rect(bbcShape357.point.x, bbcShape357.point.y, bbcShape357.size.width, bbcShape357.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape358.around.x, bbcShape358.around.y);
ctx.rotate(bbcShape358.rotation * Math.PI / 180);
ctx.translate(-bbcShape358.around.x, -bbcShape358.around.y);
ctx.beginPath();
ctx.rect(bbcShape358.point.x, bbcShape358.point.y, bbcShape358.size.width, bbcShape358.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape359.around.x, bbcShape359.around.y);
ctx.rotate(bbcShape359.rotation * Math.PI / 180);
ctx.translate(-bbcShape359.around.x, -bbcShape359.around.y);
ctx.beginPath();
ctx.rect(bbcShape359.point.x, bbcShape359.point.y, bbcShape359.size.width, bbcShape359.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape360.around.x, bbcShape360.around.y);
ctx.rotate(bbcShape360.rotation * Math.PI / 180);
ctx.translate(-bbcShape360.around.x, -bbcShape360.around.y);
ctx.beginPath();
ctx.rect(bbcShape360.point.x, bbcShape360.point.y, bbcShape360.size.width, bbcShape360.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape361.around.x, bbcShape361.around.y);
ctx.rotate(bbcShape361.rotation * Math.PI / 180);
ctx.translate(-bbcShape361.around.x, -bbcShape361.around.y);
ctx.beginPath();
ctx.rect(bbcShape361.point.x, bbcShape361.point.y, bbcShape361.size.width, bbcShape361.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape362.around.x, bbcShape362.around.y);
ctx.rotate(bbcShape362.rotation * Math.PI / 180);
ctx.translate(-bbcShape362.around.x, -bbcShape362.around.y);
ctx.beginPath();
ctx.rect(bbcShape362.point.x, bbcShape362.point.y, bbcShape362.size.width, bbcShape362.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape363.around.x, bbcShape363.around.y);
ctx.rotate(bbcShape363.rotation * Math.PI / 180);
ctx.translate(-bbcShape363.around.x, -bbcShape363.around.y);
ctx.beginPath();
ctx.rect(bbcShape363.point.x, bbcShape363.point.y, bbcShape363.size.width, bbcShape363.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape364.around.x, bbcShape364.around.y);
ctx.rotate(bbcShape364.rotation * Math.PI / 180);
ctx.translate(-bbcShape364.around.x, -bbcShape364.around.y);
ctx.beginPath();
ctx.rect(bbcShape364.point.x, bbcShape364.point.y, bbcShape364.size.width, bbcShape364.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape365.around.x, bbcShape365.around.y);
ctx.rotate(bbcShape365.rotation * Math.PI / 180);
ctx.translate(-bbcShape365.around.x, -bbcShape365.around.y);
ctx.beginPath();
ctx.rect(bbcShape365.point.x, bbcShape365.point.y, bbcShape365.size.width, bbcShape365.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape366.around.x, bbcShape366.around.y);
ctx.rotate(bbcShape366.rotation * Math.PI / 180);
ctx.translate(-bbcShape366.around.x, -bbcShape366.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape366.points[0][0], bbcShape366.points[0][1]);
ctx.lineTo(bbcShape366.points[1][0], bbcShape366.points[1][1]);
ctx.lineTo(bbcShape366.points[2][0], bbcShape366.points[2][1]);
ctx.lineTo(bbcShape366.points[3][0], bbcShape366.points[3][1]);
ctx.lineTo(bbcShape366.points[4][0], bbcShape366.points[4][1]);
ctx.lineTo(bbcShape366.points[5][0], bbcShape366.points[5][1]);
ctx.lineTo(bbcShape366.points[6][0], bbcShape366.points[6][1]);
ctx.lineTo(bbcShape366.points[7][0], bbcShape366.points[7][1]);
ctx.lineTo(bbcShape366.points[8][0], bbcShape366.points[8][1]);
ctx.lineTo(bbcShape366.points[9][0], bbcShape366.points[9][1]);
ctx.lineTo(bbcShape366.points[10][0], bbcShape366.points[10][1]);
ctx.lineTo(bbcShape366.points[11][0], bbcShape366.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape367.around.x, bbcShape367.around.y);
ctx.rotate(bbcShape367.rotation * Math.PI / 180);
ctx.translate(-bbcShape367.around.x, -bbcShape367.around.y);
ctx.beginPath();
ctx.rect(bbcShape367.point.x, bbcShape367.point.y, bbcShape367.size.width, bbcShape367.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape368.around.x, bbcShape368.around.y);
ctx.rotate(bbcShape368.rotation * Math.PI / 180);
ctx.translate(-bbcShape368.around.x, -bbcShape368.around.y);
ctx.beginPath();
ctx.rect(bbcShape368.point.x, bbcShape368.point.y, bbcShape368.size.width, bbcShape368.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape369.around.x, bbcShape369.around.y);
ctx.rotate(bbcShape369.rotation * Math.PI / 180);
ctx.translate(-bbcShape369.around.x, -bbcShape369.around.y);
ctx.beginPath();
ctx.rect(bbcShape369.point.x, bbcShape369.point.y, bbcShape369.size.width, bbcShape369.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape370.around.x, bbcShape370.around.y);
ctx.rotate(bbcShape370.rotation * Math.PI / 180);
ctx.translate(-bbcShape370.around.x, -bbcShape370.around.y);
ctx.beginPath();
ctx.rect(bbcShape370.point.x, bbcShape370.point.y, bbcShape370.size.width, bbcShape370.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape371.around.x, bbcShape371.around.y);
ctx.rotate(bbcShape371.rotation * Math.PI / 180);
ctx.translate(-bbcShape371.around.x, -bbcShape371.around.y);
ctx.beginPath();
ctx.rect(bbcShape371.point.x, bbcShape371.point.y, bbcShape371.size.width, bbcShape371.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape372.around.x, bbcShape372.around.y);
ctx.rotate(bbcShape372.rotation * Math.PI / 180);
ctx.translate(-bbcShape372.around.x, -bbcShape372.around.y);
ctx.beginPath();
ctx.rect(bbcShape372.point.x, bbcShape372.point.y, bbcShape372.size.width, bbcShape372.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape373.around.x, bbcShape373.around.y);
ctx.rotate(bbcShape373.rotation * Math.PI / 180);
ctx.translate(-bbcShape373.around.x, -bbcShape373.around.y);
ctx.beginPath();
ctx.rect(bbcShape373.point.x, bbcShape373.point.y, bbcShape373.size.width, bbcShape373.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape374.around.x, bbcShape374.around.y);
ctx.rotate(bbcShape374.rotation * Math.PI / 180);
ctx.translate(-bbcShape374.around.x, -bbcShape374.around.y);
ctx.beginPath();
ctx.rect(bbcShape374.point.x, bbcShape374.point.y, bbcShape374.size.width, bbcShape374.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape375.around.x, bbcShape375.around.y);
ctx.rotate(bbcShape375.rotation * Math.PI / 180);
ctx.translate(-bbcShape375.around.x, -bbcShape375.around.y);
ctx.beginPath();
ctx.rect(bbcShape375.point.x, bbcShape375.point.y, bbcShape375.size.width, bbcShape375.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape376.around.x, bbcShape376.around.y);
ctx.rotate(bbcShape376.rotation * Math.PI / 180);
ctx.translate(-bbcShape376.around.x, -bbcShape376.around.y);
ctx.beginPath();
ctx.rect(bbcShape376.point.x, bbcShape376.point.y, bbcShape376.size.width, bbcShape376.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape377.around.x, bbcShape377.around.y);
ctx.rotate(bbcShape377.rotation * Math.PI / 180);
ctx.translate(-bbcShape377.around.x, -bbcShape377.around.y);
ctx.beginPath();
ctx.rect(bbcShape377.point.x, bbcShape377.point.y, bbcShape377.size.width, bbcShape377.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape378.around.x, bbcShape378.around.y);
ctx.rotate(bbcShape378.rotation * Math.PI / 180);
ctx.translate(-bbcShape378.around.x, -bbcShape378.around.y);
ctx.beginPath();
ctx.rect(bbcShape378.point.x, bbcShape378.point.y, bbcShape378.size.width, bbcShape378.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape379.around.x, bbcShape379.around.y);
ctx.rotate(bbcShape379.rotation * Math.PI / 180);
ctx.translate(-bbcShape379.around.x, -bbcShape379.around.y);
ctx.beginPath();
ctx.rect(bbcShape379.point.x, bbcShape379.point.y, bbcShape379.size.width, bbcShape379.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape380.around.x, bbcShape380.around.y);
ctx.rotate(bbcShape380.rotation * Math.PI / 180);
ctx.translate(-bbcShape380.around.x, -bbcShape380.around.y);
ctx.beginPath();
ctx.rect(bbcShape380.point.x, bbcShape380.point.y, bbcShape380.size.width, bbcShape380.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape381.around.x, bbcShape381.around.y);
ctx.rotate(bbcShape381.rotation * Math.PI / 180);
ctx.translate(-bbcShape381.around.x, -bbcShape381.around.y);
ctx.beginPath();
ctx.rect(bbcShape381.point.x, bbcShape381.point.y, bbcShape381.size.width, bbcShape381.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape382.around.x, bbcShape382.around.y);
ctx.rotate(bbcShape382.rotation * Math.PI / 180);
ctx.translate(-bbcShape382.around.x, -bbcShape382.around.y);
ctx.beginPath();
ctx.rect(bbcShape382.point.x, bbcShape382.point.y, bbcShape382.size.width, bbcShape382.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape383.around.x, bbcShape383.around.y);
ctx.rotate(bbcShape383.rotation * Math.PI / 180);
ctx.translate(-bbcShape383.around.x, -bbcShape383.around.y);
ctx.beginPath();
ctx.rect(bbcShape383.point.x, bbcShape383.point.y, bbcShape383.size.width, bbcShape383.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape384.around.x, bbcShape384.around.y);
ctx.rotate(bbcShape384.rotation * Math.PI / 180);
ctx.translate(-bbcShape384.around.x, -bbcShape384.around.y);
ctx.beginPath();
ctx.rect(bbcShape384.point.x, bbcShape384.point.y, bbcShape384.size.width, bbcShape384.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape385.around.x, bbcShape385.around.y);
ctx.rotate(bbcShape385.rotation * Math.PI / 180);
ctx.translate(-bbcShape385.around.x, -bbcShape385.around.y);
ctx.beginPath();
ctx.rect(bbcShape385.point.x, bbcShape385.point.y, bbcShape385.size.width, bbcShape385.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape386.around.x, bbcShape386.around.y);
ctx.rotate(bbcShape386.rotation * Math.PI / 180);
ctx.translate(-bbcShape386.around.x, -bbcShape386.around.y);
ctx.beginPath();
ctx.rect(bbcShape386.point.x, bbcShape386.point.y, bbcShape386.size.width, bbcShape386.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(100.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape387.around.x, bbcShape387.around.y);
ctx.rotate(bbcShape387.rotation * Math.PI / 180);
ctx.translate(-bbcShape387.around.x, -bbcShape387.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape387.points[0][0], bbcShape387.points[0][1]);
ctx.lineTo(bbcShape387.points[1][0], bbcShape387.points[1][1]);
ctx.lineTo(bbcShape387.points[2][0], bbcShape387.points[2][1]);
ctx.lineTo(bbcShape387.points[3][0], bbcShape387.points[3][1]);
ctx.lineTo(bbcShape387.points[4][0], bbcShape387.points[4][1]);
ctx.lineTo(bbcShape387.points[5][0], bbcShape387.points[5][1]);
ctx.lineTo(bbcShape387.points[6][0], bbcShape387.points[6][1]);
ctx.lineTo(bbcShape387.points[7][0], bbcShape387.points[7][1]);
ctx.lineTo(bbcShape387.points[8][0], bbcShape387.points[8][1]);
ctx.lineTo(bbcShape387.points[9][0], bbcShape387.points[9][1]);
ctx.lineTo(bbcShape387.points[10][0], bbcShape387.points[10][1]);
ctx.lineTo(bbcShape387.points[11][0], bbcShape387.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape388.around.x, bbcShape388.around.y);
ctx.rotate(bbcShape388.rotation * Math.PI / 180);
ctx.translate(-bbcShape388.around.x, -bbcShape388.around.y);
ctx.beginPath();
ctx.rect(bbcShape388.point.x, bbcShape388.point.y, bbcShape388.size.width, bbcShape388.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape389.around.x, bbcShape389.around.y);
ctx.rotate(bbcShape389.rotation * Math.PI / 180);
ctx.translate(-bbcShape389.around.x, -bbcShape389.around.y);
ctx.beginPath();
ctx.rect(bbcShape389.point.x, bbcShape389.point.y, bbcShape389.size.width, bbcShape389.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape390.around.x, bbcShape390.around.y);
ctx.rotate(bbcShape390.rotation * Math.PI / 180);
ctx.translate(-bbcShape390.around.x, -bbcShape390.around.y);
ctx.beginPath();
ctx.rect(bbcShape390.point.x, bbcShape390.point.y, bbcShape390.size.width, bbcShape390.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape391.around.x, bbcShape391.around.y);
ctx.rotate(bbcShape391.rotation * Math.PI / 180);
ctx.translate(-bbcShape391.around.x, -bbcShape391.around.y);
ctx.beginPath();
ctx.rect(bbcShape391.point.x, bbcShape391.point.y, bbcShape391.size.width, bbcShape391.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape392.around.x, bbcShape392.around.y);
ctx.rotate(bbcShape392.rotation * Math.PI / 180);
ctx.translate(-bbcShape392.around.x, -bbcShape392.around.y);
ctx.beginPath();
ctx.rect(bbcShape392.point.x, bbcShape392.point.y, bbcShape392.size.width, bbcShape392.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape393.around.x, bbcShape393.around.y);
ctx.rotate(bbcShape393.rotation * Math.PI / 180);
ctx.translate(-bbcShape393.around.x, -bbcShape393.around.y);
ctx.beginPath();
ctx.rect(bbcShape393.point.x, bbcShape393.point.y, bbcShape393.size.width, bbcShape393.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape394.around.x, bbcShape394.around.y);
ctx.rotate(bbcShape394.rotation * Math.PI / 180);
ctx.translate(-bbcShape394.around.x, -bbcShape394.around.y);
ctx.beginPath();
ctx.rect(bbcShape394.point.x, bbcShape394.point.y, bbcShape394.size.width, bbcShape394.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape395.around.x, bbcShape395.around.y);
ctx.rotate(bbcShape395.rotation * Math.PI / 180);
ctx.translate(-bbcShape395.around.x, -bbcShape395.around.y);
ctx.beginPath();
ctx.rect(bbcShape395.point.x, bbcShape395.point.y, bbcShape395.size.width, bbcShape395.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape396.around.x, bbcShape396.around.y);
ctx.rotate(bbcShape396.rotation * Math.PI / 180);
ctx.translate(-bbcShape396.around.x, -bbcShape396.around.y);
ctx.beginPath();
ctx.rect(bbcShape396.point.x, bbcShape396.point.y, bbcShape396.size.width, bbcShape396.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape397.around.x, bbcShape397.around.y);
ctx.rotate(bbcShape397.rotation * Math.PI / 180);
ctx.translate(-bbcShape397.around.x, -bbcShape397.around.y);
ctx.beginPath();
ctx.rect(bbcShape397.point.x, bbcShape397.point.y, bbcShape397.size.width, bbcShape397.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape398.around.x, bbcShape398.around.y);
ctx.rotate(bbcShape398.rotation * Math.PI / 180);
ctx.translate(-bbcShape398.around.x, -bbcShape398.around.y);
ctx.beginPath();
ctx.rect(bbcShape398.point.x, bbcShape398.point.y, bbcShape398.size.width, bbcShape398.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape399.around.x, bbcShape399.around.y);
ctx.rotate(bbcShape399.rotation * Math.PI / 180);
ctx.translate(-bbcShape399.around.x, -bbcShape399.around.y);
ctx.beginPath();
ctx.rect(bbcShape399.point.x, bbcShape399.point.y, bbcShape399.size.width, bbcShape399.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape400.around.x, bbcShape400.around.y);
ctx.rotate(bbcShape400.rotation * Math.PI / 180);
ctx.translate(-bbcShape400.around.x, -bbcShape400.around.y);
ctx.beginPath();
ctx.rect(bbcShape400.point.x, bbcShape400.point.y, bbcShape400.size.width, bbcShape400.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape401.around.x, bbcShape401.around.y);
ctx.rotate(bbcShape401.rotation * Math.PI / 180);
ctx.translate(-bbcShape401.around.x, -bbcShape401.around.y);
ctx.beginPath();
ctx.rect(bbcShape401.point.x, bbcShape401.point.y, bbcShape401.size.width, bbcShape401.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape402.around.x, bbcShape402.around.y);
ctx.rotate(bbcShape402.rotation * Math.PI / 180);
ctx.translate(-bbcShape402.around.x, -bbcShape402.around.y);
ctx.beginPath();
ctx.rect(bbcShape402.point.x, bbcShape402.point.y, bbcShape402.size.width, bbcShape402.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape403.around.x, bbcShape403.around.y);
ctx.rotate(bbcShape403.rotation * Math.PI / 180);
ctx.translate(-bbcShape403.around.x, -bbcShape403.around.y);
ctx.beginPath();
ctx.rect(bbcShape403.point.x, bbcShape403.point.y, bbcShape403.size.width, bbcShape403.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape404.around.x, bbcShape404.around.y);
ctx.rotate(bbcShape404.rotation * Math.PI / 180);
ctx.translate(-bbcShape404.around.x, -bbcShape404.around.y);
ctx.beginPath();
ctx.rect(bbcShape404.point.x, bbcShape404.point.y, bbcShape404.size.width, bbcShape404.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape405.around.x, bbcShape405.around.y);
ctx.rotate(bbcShape405.rotation * Math.PI / 180);
ctx.translate(-bbcShape405.around.x, -bbcShape405.around.y);
ctx.beginPath();
ctx.rect(bbcShape405.point.x, bbcShape405.point.y, bbcShape405.size.width, bbcShape405.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape406.around.x, bbcShape406.around.y);
ctx.rotate(bbcShape406.rotation * Math.PI / 180);
ctx.translate(-bbcShape406.around.x, -bbcShape406.around.y);
ctx.beginPath();
ctx.rect(bbcShape406.point.x, bbcShape406.point.y, bbcShape406.size.width, bbcShape406.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape407.around.x, bbcShape407.around.y);
ctx.rotate(bbcShape407.rotation * Math.PI / 180);
ctx.translate(-bbcShape407.around.x, -bbcShape407.around.y);
ctx.beginPath();
ctx.rect(bbcShape407.point.x, bbcShape407.point.y, bbcShape407.size.width, bbcShape407.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape408.around.x, bbcShape408.around.y);
ctx.rotate(bbcShape408.rotation * Math.PI / 180);
ctx.translate(-bbcShape408.around.x, -bbcShape408.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape408.points[0][0], bbcShape408.points[0][1]);
ctx.lineTo(bbcShape408.points[1][0], bbcShape408.points[1][1]);
ctx.lineTo(bbcShape408.points[2][0], bbcShape408.points[2][1]);
ctx.lineTo(bbcShape408.points[3][0], bbcShape408.points[3][1]);
ctx.lineTo(bbcShape408.points[4][0], bbcShape408.points[4][1]);
ctx.lineTo(bbcShape408.points[5][0], bbcShape408.points[5][1]);
ctx.lineTo(bbcShape408.points[6][0], bbcShape408.points[6][1]);
ctx.lineTo(bbcShape408.points[7][0], bbcShape408.points[7][1]);
ctx.lineTo(bbcShape408.points[8][0], bbcShape408.points[8][1]);
ctx.lineTo(bbcShape408.points[9][0], bbcShape408.points[9][1]);
ctx.lineTo(bbcShape408.points[10][0], bbcShape408.points[10][1]);
ctx.lineTo(bbcShape408.points[11][0], bbcShape408.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape409.around.x, bbcShape409.around.y);
ctx.rotate(bbcShape409.rotation * Math.PI / 180);
ctx.translate(-bbcShape409.around.x, -bbcShape409.around.y);
ctx.beginPath();
ctx.rect(bbcShape409.point.x, bbcShape409.point.y, bbcShape409.size.width, bbcShape409.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape410.around.x, bbcShape410.around.y);
ctx.rotate(bbcShape410.rotation * Math.PI / 180);
ctx.translate(-bbcShape410.around.x, -bbcShape410.around.y);
ctx.beginPath();
ctx.rect(bbcShape410.point.x, bbcShape410.point.y, bbcShape410.size.width, bbcShape410.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape411.around.x, bbcShape411.around.y);
ctx.rotate(bbcShape411.rotation * Math.PI / 180);
ctx.translate(-bbcShape411.around.x, -bbcShape411.around.y);
ctx.beginPath();
ctx.rect(bbcShape411.point.x, bbcShape411.point.y, bbcShape411.size.width, bbcShape411.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape412.around.x, bbcShape412.around.y);
ctx.rotate(bbcShape412.rotation * Math.PI / 180);
ctx.translate(-bbcShape412.around.x, -bbcShape412.around.y);
ctx.beginPath();
ctx.rect(bbcShape412.point.x, bbcShape412.point.y, bbcShape412.size.width, bbcShape412.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape413.around.x, bbcShape413.around.y);
ctx.rotate(bbcShape413.rotation * Math.PI / 180);
ctx.translate(-bbcShape413.around.x, -bbcShape413.around.y);
ctx.beginPath();
ctx.rect(bbcShape413.point.x, bbcShape413.point.y, bbcShape413.size.width, bbcShape413.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape414.around.x, bbcShape414.around.y);
ctx.rotate(bbcShape414.rotation * Math.PI / 180);
ctx.translate(-bbcShape414.around.x, -bbcShape414.around.y);
ctx.beginPath();
ctx.rect(bbcShape414.point.x, bbcShape414.point.y, bbcShape414.size.width, bbcShape414.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape415.around.x, bbcShape415.around.y);
ctx.rotate(bbcShape415.rotation * Math.PI / 180);
ctx.translate(-bbcShape415.around.x, -bbcShape415.around.y);
ctx.beginPath();
ctx.rect(bbcShape415.point.x, bbcShape415.point.y, bbcShape415.size.width, bbcShape415.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape416.around.x, bbcShape416.around.y);
ctx.rotate(bbcShape416.rotation * Math.PI / 180);
ctx.translate(-bbcShape416.around.x, -bbcShape416.around.y);
ctx.beginPath();
ctx.rect(bbcShape416.point.x, bbcShape416.point.y, bbcShape416.size.width, bbcShape416.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape417.around.x, bbcShape417.around.y);
ctx.rotate(bbcShape417.rotation * Math.PI / 180);
ctx.translate(-bbcShape417.around.x, -bbcShape417.around.y);
ctx.beginPath();
ctx.rect(bbcShape417.point.x, bbcShape417.point.y, bbcShape417.size.width, bbcShape417.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape418.around.x, bbcShape418.around.y);
ctx.rotate(bbcShape418.rotation * Math.PI / 180);
ctx.translate(-bbcShape418.around.x, -bbcShape418.around.y);
ctx.beginPath();
ctx.rect(bbcShape418.point.x, bbcShape418.point.y, bbcShape418.size.width, bbcShape418.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape419.around.x, bbcShape419.around.y);
ctx.rotate(bbcShape419.rotation * Math.PI / 180);
ctx.translate(-bbcShape419.around.x, -bbcShape419.around.y);
ctx.beginPath();
ctx.rect(bbcShape419.point.x, bbcShape419.point.y, bbcShape419.size.width, bbcShape419.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape420.around.x, bbcShape420.around.y);
ctx.rotate(bbcShape420.rotation * Math.PI / 180);
ctx.translate(-bbcShape420.around.x, -bbcShape420.around.y);
ctx.beginPath();
ctx.rect(bbcShape420.point.x, bbcShape420.point.y, bbcShape420.size.width, bbcShape420.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape421.around.x, bbcShape421.around.y);
ctx.rotate(bbcShape421.rotation * Math.PI / 180);
ctx.translate(-bbcShape421.around.x, -bbcShape421.around.y);
ctx.beginPath();
ctx.rect(bbcShape421.point.x, bbcShape421.point.y, bbcShape421.size.width, bbcShape421.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape422.around.x, bbcShape422.around.y);
ctx.rotate(bbcShape422.rotation * Math.PI / 180);
ctx.translate(-bbcShape422.around.x, -bbcShape422.around.y);
ctx.beginPath();
ctx.rect(bbcShape422.point.x, bbcShape422.point.y, bbcShape422.size.width, bbcShape422.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape423.around.x, bbcShape423.around.y);
ctx.rotate(bbcShape423.rotation * Math.PI / 180);
ctx.translate(-bbcShape423.around.x, -bbcShape423.around.y);
ctx.beginPath();
ctx.rect(bbcShape423.point.x, bbcShape423.point.y, bbcShape423.size.width, bbcShape423.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape424.around.x, bbcShape424.around.y);
ctx.rotate(bbcShape424.rotation * Math.PI / 180);
ctx.translate(-bbcShape424.around.x, -bbcShape424.around.y);
ctx.beginPath();
ctx.rect(bbcShape424.point.x, bbcShape424.point.y, bbcShape424.size.width, bbcShape424.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape425.around.x, bbcShape425.around.y);
ctx.rotate(bbcShape425.rotation * Math.PI / 180);
ctx.translate(-bbcShape425.around.x, -bbcShape425.around.y);
ctx.beginPath();
ctx.rect(bbcShape425.point.x, bbcShape425.point.y, bbcShape425.size.width, bbcShape425.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape426.around.x, bbcShape426.around.y);
ctx.rotate(bbcShape426.rotation * Math.PI / 180);
ctx.translate(-bbcShape426.around.x, -bbcShape426.around.y);
ctx.beginPath();
ctx.rect(bbcShape426.point.x, bbcShape426.point.y, bbcShape426.size.width, bbcShape426.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape427.around.x, bbcShape427.around.y);
ctx.rotate(bbcShape427.rotation * Math.PI / 180);
ctx.translate(-bbcShape427.around.x, -bbcShape427.around.y);
ctx.beginPath();
ctx.rect(bbcShape427.point.x, bbcShape427.point.y, bbcShape427.size.width, bbcShape427.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape428.around.x, bbcShape428.around.y);
ctx.rotate(bbcShape428.rotation * Math.PI / 180);
ctx.translate(-bbcShape428.around.x, -bbcShape428.around.y);
ctx.beginPath();
ctx.rect(bbcShape428.point.x, bbcShape428.point.y, bbcShape428.size.width, bbcShape428.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(150.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape429.around.x, bbcShape429.around.y);
ctx.rotate(bbcShape429.rotation * Math.PI / 180);
ctx.translate(-bbcShape429.around.x, -bbcShape429.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape429.points[0][0], bbcShape429.points[0][1]);
ctx.lineTo(bbcShape429.points[1][0], bbcShape429.points[1][1]);
ctx.lineTo(bbcShape429.points[2][0], bbcShape429.points[2][1]);
ctx.lineTo(bbcShape429.points[3][0], bbcShape429.points[3][1]);
ctx.lineTo(bbcShape429.points[4][0], bbcShape429.points[4][1]);
ctx.lineTo(bbcShape429.points[5][0], bbcShape429.points[5][1]);
ctx.lineTo(bbcShape429.points[6][0], bbcShape429.points[6][1]);
ctx.lineTo(bbcShape429.points[7][0], bbcShape429.points[7][1]);
ctx.lineTo(bbcShape429.points[8][0], bbcShape429.points[8][1]);
ctx.lineTo(bbcShape429.points[9][0], bbcShape429.points[9][1]);
ctx.lineTo(bbcShape429.points[10][0], bbcShape429.points[10][1]);
ctx.lineTo(bbcShape429.points[11][0], bbcShape429.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape430.around.x, bbcShape430.around.y);
ctx.rotate(bbcShape430.rotation * Math.PI / 180);
ctx.translate(-bbcShape430.around.x, -bbcShape430.around.y);
ctx.beginPath();
ctx.rect(bbcShape430.point.x, bbcShape430.point.y, bbcShape430.size.width, bbcShape430.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape431.around.x, bbcShape431.around.y);
ctx.rotate(bbcShape431.rotation * Math.PI / 180);
ctx.translate(-bbcShape431.around.x, -bbcShape431.around.y);
ctx.beginPath();
ctx.rect(bbcShape431.point.x, bbcShape431.point.y, bbcShape431.size.width, bbcShape431.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape432.around.x, bbcShape432.around.y);
ctx.rotate(bbcShape432.rotation * Math.PI / 180);
ctx.translate(-bbcShape432.around.x, -bbcShape432.around.y);
ctx.beginPath();
ctx.rect(bbcShape432.point.x, bbcShape432.point.y, bbcShape432.size.width, bbcShape432.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape433.around.x, bbcShape433.around.y);
ctx.rotate(bbcShape433.rotation * Math.PI / 180);
ctx.translate(-bbcShape433.around.x, -bbcShape433.around.y);
ctx.beginPath();
ctx.rect(bbcShape433.point.x, bbcShape433.point.y, bbcShape433.size.width, bbcShape433.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape434.around.x, bbcShape434.around.y);
ctx.rotate(bbcShape434.rotation * Math.PI / 180);
ctx.translate(-bbcShape434.around.x, -bbcShape434.around.y);
ctx.beginPath();
ctx.rect(bbcShape434.point.x, bbcShape434.point.y, bbcShape434.size.width, bbcShape434.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape435.around.x, bbcShape435.around.y);
ctx.rotate(bbcShape435.rotation * Math.PI / 180);
ctx.translate(-bbcShape435.around.x, -bbcShape435.around.y);
ctx.beginPath();
ctx.rect(bbcShape435.point.x, bbcShape435.point.y, bbcShape435.size.width, bbcShape435.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape436.around.x, bbcShape436.around.y);
ctx.rotate(bbcShape436.rotation * Math.PI / 180);
ctx.translate(-bbcShape436.around.x, -bbcShape436.around.y);
ctx.beginPath();
ctx.rect(bbcShape436.point.x, bbcShape436.point.y, bbcShape436.size.width, bbcShape436.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape437.around.x, bbcShape437.around.y);
ctx.rotate(bbcShape437.rotation * Math.PI / 180);
ctx.translate(-bbcShape437.around.x, -bbcShape437.around.y);
ctx.beginPath();
ctx.rect(bbcShape437.point.x, bbcShape437.point.y, bbcShape437.size.width, bbcShape437.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape438.around.x, bbcShape438.around.y);
ctx.rotate(bbcShape438.rotation * Math.PI / 180);
ctx.translate(-bbcShape438.around.x, -bbcShape438.around.y);
ctx.beginPath();
ctx.rect(bbcShape438.point.x, bbcShape438.point.y, bbcShape438.size.width, bbcShape438.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape439.around.x, bbcShape439.around.y);
ctx.rotate(bbcShape439.rotation * Math.PI / 180);
ctx.translate(-bbcShape439.around.x, -bbcShape439.around.y);
ctx.beginPath();
ctx.rect(bbcShape439.point.x, bbcShape439.point.y, bbcShape439.size.width, bbcShape439.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape440.around.x, bbcShape440.around.y);
ctx.rotate(bbcShape440.rotation * Math.PI / 180);
ctx.translate(-bbcShape440.around.x, -bbcShape440.around.y);
ctx.beginPath();
ctx.rect(bbcShape440.point.x, bbcShape440.point.y, bbcShape440.size.width, bbcShape440.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape441.around.x, bbcShape441.around.y);
ctx.rotate(bbcShape441.rotation * Math.PI / 180);
ctx.translate(-bbcShape441.around.x, -bbcShape441.around.y);
ctx.beginPath();
ctx.rect(bbcShape441.point.x, bbcShape441.point.y, bbcShape441.size.width, bbcShape441.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape442.around.x, bbcShape442.around.y);
ctx.rotate(bbcShape442.rotation * Math.PI / 180);
ctx.translate(-bbcShape442.around.x, -bbcShape442.around.y);
ctx.beginPath();
ctx.rect(bbcShape442.point.x, bbcShape442.point.y, bbcShape442.size.width, bbcShape442.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape443.around.x, bbcShape443.around.y);
ctx.rotate(bbcShape443.rotation * Math.PI / 180);
ctx.translate(-bbcShape443.around.x, -bbcShape443.around.y);
ctx.beginPath();
ctx.rect(bbcShape443.point.x, bbcShape443.point.y, bbcShape443.size.width, bbcShape443.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape444.around.x, bbcShape444.around.y);
ctx.rotate(bbcShape444.rotation * Math.PI / 180);
ctx.translate(-bbcShape444.around.x, -bbcShape444.around.y);
ctx.beginPath();
ctx.rect(bbcShape444.point.x, bbcShape444.point.y, bbcShape444.size.width, bbcShape444.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape445.around.x, bbcShape445.around.y);
ctx.rotate(bbcShape445.rotation * Math.PI / 180);
ctx.translate(-bbcShape445.around.x, -bbcShape445.around.y);
ctx.beginPath();
ctx.rect(bbcShape445.point.x, bbcShape445.point.y, bbcShape445.size.width, bbcShape445.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape446.around.x, bbcShape446.around.y);
ctx.rotate(bbcShape446.rotation * Math.PI / 180);
ctx.translate(-bbcShape446.around.x, -bbcShape446.around.y);
ctx.beginPath();
ctx.rect(bbcShape446.point.x, bbcShape446.point.y, bbcShape446.size.width, bbcShape446.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape447.around.x, bbcShape447.around.y);
ctx.rotate(bbcShape447.rotation * Math.PI / 180);
ctx.translate(-bbcShape447.around.x, -bbcShape447.around.y);
ctx.beginPath();
ctx.rect(bbcShape447.point.x, bbcShape447.point.y, bbcShape447.size.width, bbcShape447.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape448.around.x, bbcShape448.around.y);
ctx.rotate(bbcShape448.rotation * Math.PI / 180);
ctx.translate(-bbcShape448.around.x, -bbcShape448.around.y);
ctx.beginPath();
ctx.rect(bbcShape448.point.x, bbcShape448.point.y, bbcShape448.size.width, bbcShape448.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape449.around.x, bbcShape449.around.y);
ctx.rotate(bbcShape449.rotation * Math.PI / 180);
ctx.translate(-bbcShape449.around.x, -bbcShape449.around.y);
ctx.beginPath();
ctx.rect(bbcShape449.point.x, bbcShape449.point.y, bbcShape449.size.width, bbcShape449.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(175.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape450.around.x, bbcShape450.around.y);
ctx.rotate(bbcShape450.rotation * Math.PI / 180);
ctx.translate(-bbcShape450.around.x, -bbcShape450.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape450.points[0][0], bbcShape450.points[0][1]);
ctx.lineTo(bbcShape450.points[1][0], bbcShape450.points[1][1]);
ctx.lineTo(bbcShape450.points[2][0], bbcShape450.points[2][1]);
ctx.lineTo(bbcShape450.points[3][0], bbcShape450.points[3][1]);
ctx.lineTo(bbcShape450.points[4][0], bbcShape450.points[4][1]);
ctx.lineTo(bbcShape450.points[5][0], bbcShape450.points[5][1]);
ctx.lineTo(bbcShape450.points[6][0], bbcShape450.points[6][1]);
ctx.lineTo(bbcShape450.points[7][0], bbcShape450.points[7][1]);
ctx.lineTo(bbcShape450.points[8][0], bbcShape450.points[8][1]);
ctx.lineTo(bbcShape450.points[9][0], bbcShape450.points[9][1]);
ctx.lineTo(bbcShape450.points[10][0], bbcShape450.points[10][1]);
ctx.lineTo(bbcShape450.points[11][0], bbcShape450.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape451.around.x, bbcShape451.around.y);
ctx.rotate(bbcShape451.rotation * Math.PI / 180);
ctx.translate(-bbcShape451.around.x, -bbcShape451.around.y);
ctx.beginPath();
ctx.rect(bbcShape451.point.x, bbcShape451.point.y, bbcShape451.size.width, bbcShape451.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape452.around.x, bbcShape452.around.y);
ctx.rotate(bbcShape452.rotation * Math.PI / 180);
ctx.translate(-bbcShape452.around.x, -bbcShape452.around.y);
ctx.beginPath();
ctx.rect(bbcShape452.point.x, bbcShape452.point.y, bbcShape452.size.width, bbcShape452.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape453.around.x, bbcShape453.around.y);
ctx.rotate(bbcShape453.rotation * Math.PI / 180);
ctx.translate(-bbcShape453.around.x, -bbcShape453.around.y);
ctx.beginPath();
ctx.rect(bbcShape453.point.x, bbcShape453.point.y, bbcShape453.size.width, bbcShape453.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape454.around.x, bbcShape454.around.y);
ctx.rotate(bbcShape454.rotation * Math.PI / 180);
ctx.translate(-bbcShape454.around.x, -bbcShape454.around.y);
ctx.beginPath();
ctx.rect(bbcShape454.point.x, bbcShape454.point.y, bbcShape454.size.width, bbcShape454.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape455.around.x, bbcShape455.around.y);
ctx.rotate(bbcShape455.rotation * Math.PI / 180);
ctx.translate(-bbcShape455.around.x, -bbcShape455.around.y);
ctx.beginPath();
ctx.rect(bbcShape455.point.x, bbcShape455.point.y, bbcShape455.size.width, bbcShape455.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape456.around.x, bbcShape456.around.y);
ctx.rotate(bbcShape456.rotation * Math.PI / 180);
ctx.translate(-bbcShape456.around.x, -bbcShape456.around.y);
ctx.beginPath();
ctx.rect(bbcShape456.point.x, bbcShape456.point.y, bbcShape456.size.width, bbcShape456.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape457.around.x, bbcShape457.around.y);
ctx.rotate(bbcShape457.rotation * Math.PI / 180);
ctx.translate(-bbcShape457.around.x, -bbcShape457.around.y);
ctx.beginPath();
ctx.rect(bbcShape457.point.x, bbcShape457.point.y, bbcShape457.size.width, bbcShape457.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape458.around.x, bbcShape458.around.y);
ctx.rotate(bbcShape458.rotation * Math.PI / 180);
ctx.translate(-bbcShape458.around.x, -bbcShape458.around.y);
ctx.beginPath();
ctx.rect(bbcShape458.point.x, bbcShape458.point.y, bbcShape458.size.width, bbcShape458.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape459.around.x, bbcShape459.around.y);
ctx.rotate(bbcShape459.rotation * Math.PI / 180);
ctx.translate(-bbcShape459.around.x, -bbcShape459.around.y);
ctx.beginPath();
ctx.rect(bbcShape459.point.x, bbcShape459.point.y, bbcShape459.size.width, bbcShape459.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape460.around.x, bbcShape460.around.y);
ctx.rotate(bbcShape460.rotation * Math.PI / 180);
ctx.translate(-bbcShape460.around.x, -bbcShape460.around.y);
ctx.beginPath();
ctx.rect(bbcShape460.point.x, bbcShape460.point.y, bbcShape460.size.width, bbcShape460.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape461.around.x, bbcShape461.around.y);
ctx.rotate(bbcShape461.rotation * Math.PI / 180);
ctx.translate(-bbcShape461.around.x, -bbcShape461.around.y);
ctx.beginPath();
ctx.rect(bbcShape461.point.x, bbcShape461.point.y, bbcShape461.size.width, bbcShape461.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape462.around.x, bbcShape462.around.y);
ctx.rotate(bbcShape462.rotation * Math.PI / 180);
ctx.translate(-bbcShape462.around.x, -bbcShape462.around.y);
ctx.beginPath();
ctx.rect(bbcShape462.point.x, bbcShape462.point.y, bbcShape462.size.width, bbcShape462.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape463.around.x, bbcShape463.around.y);
ctx.rotate(bbcShape463.rotation * Math.PI / 180);
ctx.translate(-bbcShape463.around.x, -bbcShape463.around.y);
ctx.beginPath();
ctx.rect(bbcShape463.point.x, bbcShape463.point.y, bbcShape463.size.width, bbcShape463.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape464.around.x, bbcShape464.around.y);
ctx.rotate(bbcShape464.rotation * Math.PI / 180);
ctx.translate(-bbcShape464.around.x, -bbcShape464.around.y);
ctx.beginPath();
ctx.rect(bbcShape464.point.x, bbcShape464.point.y, bbcShape464.size.width, bbcShape464.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape465.around.x, bbcShape465.around.y);
ctx.rotate(bbcShape465.rotation * Math.PI / 180);
ctx.translate(-bbcShape465.around.x, -bbcShape465.around.y);
ctx.beginPath();
ctx.rect(bbcShape465.point.x, bbcShape465.point.y, bbcShape465.size.width, bbcShape465.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape466.around.x, bbcShape466.around.y);
ctx.rotate(bbcShape466.rotation * Math.PI / 180);
ctx.translate(-bbcShape466.around.x, -bbcShape466.around.y);
ctx.beginPath();
ctx.rect(bbcShape466.point.x, bbcShape466.point.y, bbcShape466.size.width, bbcShape466.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape467.around.x, bbcShape467.around.y);
ctx.rotate(bbcShape467.rotation * Math.PI / 180);
ctx.translate(-bbcShape467.around.x, -bbcShape467.around.y);
ctx.beginPath();
ctx.rect(bbcShape467.point.x, bbcShape467.point.y, bbcShape467.size.width, bbcShape467.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape468.around.x, bbcShape468.around.y);
ctx.rotate(bbcShape468.rotation * Math.PI / 180);
ctx.translate(-bbcShape468.around.x, -bbcShape468.around.y);
ctx.beginPath();
ctx.rect(bbcShape468.point.x, bbcShape468.point.y, bbcShape468.size.width, bbcShape468.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape469.around.x, bbcShape469.around.y);
ctx.rotate(bbcShape469.rotation * Math.PI / 180);
ctx.translate(-bbcShape469.around.x, -bbcShape469.around.y);
ctx.beginPath();
ctx.rect(bbcShape469.point.x, bbcShape469.point.y, bbcShape469.size.width, bbcShape469.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape470.around.x, bbcShape470.around.y);
ctx.rotate(bbcShape470.rotation * Math.PI / 180);
ctx.translate(-bbcShape470.around.x, -bbcShape470.around.y);
ctx.beginPath();
ctx.rect(bbcShape470.point.x, bbcShape470.point.y, bbcShape470.size.width, bbcShape470.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(200.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape471.around.x, bbcShape471.around.y);
ctx.rotate(bbcShape471.rotation * Math.PI / 180);
ctx.translate(-bbcShape471.around.x, -bbcShape471.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape471.points[0][0], bbcShape471.points[0][1]);
ctx.lineTo(bbcShape471.points[1][0], bbcShape471.points[1][1]);
ctx.lineTo(bbcShape471.points[2][0], bbcShape471.points[2][1]);
ctx.lineTo(bbcShape471.points[3][0], bbcShape471.points[3][1]);
ctx.lineTo(bbcShape471.points[4][0], bbcShape471.points[4][1]);
ctx.lineTo(bbcShape471.points[5][0], bbcShape471.points[5][1]);
ctx.lineTo(bbcShape471.points[6][0], bbcShape471.points[6][1]);
ctx.lineTo(bbcShape471.points[7][0], bbcShape471.points[7][1]);
ctx.lineTo(bbcShape471.points[8][0], bbcShape471.points[8][1]);
ctx.lineTo(bbcShape471.points[9][0], bbcShape471.points[9][1]);
ctx.lineTo(bbcShape471.points[10][0], bbcShape471.points[10][1]);
ctx.lineTo(bbcShape471.points[11][0], bbcShape471.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape472.around.x, bbcShape472.around.y);
ctx.rotate(bbcShape472.rotation * Math.PI / 180);
ctx.translate(-bbcShape472.around.x, -bbcShape472.around.y);
ctx.beginPath();
ctx.rect(bbcShape472.point.x, bbcShape472.point.y, bbcShape472.size.width, bbcShape472.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape473.around.x, bbcShape473.around.y);
ctx.rotate(bbcShape473.rotation * Math.PI / 180);
ctx.translate(-bbcShape473.around.x, -bbcShape473.around.y);
ctx.beginPath();
ctx.rect(bbcShape473.point.x, bbcShape473.point.y, bbcShape473.size.width, bbcShape473.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape474.around.x, bbcShape474.around.y);
ctx.rotate(bbcShape474.rotation * Math.PI / 180);
ctx.translate(-bbcShape474.around.x, -bbcShape474.around.y);
ctx.beginPath();
ctx.rect(bbcShape474.point.x, bbcShape474.point.y, bbcShape474.size.width, bbcShape474.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape475.around.x, bbcShape475.around.y);
ctx.rotate(bbcShape475.rotation * Math.PI / 180);
ctx.translate(-bbcShape475.around.x, -bbcShape475.around.y);
ctx.beginPath();
ctx.rect(bbcShape475.point.x, bbcShape475.point.y, bbcShape475.size.width, bbcShape475.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape476.around.x, bbcShape476.around.y);
ctx.rotate(bbcShape476.rotation * Math.PI / 180);
ctx.translate(-bbcShape476.around.x, -bbcShape476.around.y);
ctx.beginPath();
ctx.rect(bbcShape476.point.x, bbcShape476.point.y, bbcShape476.size.width, bbcShape476.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape477.around.x, bbcShape477.around.y);
ctx.rotate(bbcShape477.rotation * Math.PI / 180);
ctx.translate(-bbcShape477.around.x, -bbcShape477.around.y);
ctx.beginPath();
ctx.rect(bbcShape477.point.x, bbcShape477.point.y, bbcShape477.size.width, bbcShape477.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape478.around.x, bbcShape478.around.y);
ctx.rotate(bbcShape478.rotation * Math.PI / 180);
ctx.translate(-bbcShape478.around.x, -bbcShape478.around.y);
ctx.beginPath();
ctx.rect(bbcShape478.point.x, bbcShape478.point.y, bbcShape478.size.width, bbcShape478.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape479.around.x, bbcShape479.around.y);
ctx.rotate(bbcShape479.rotation * Math.PI / 180);
ctx.translate(-bbcShape479.around.x, -bbcShape479.around.y);
ctx.beginPath();
ctx.rect(bbcShape479.point.x, bbcShape479.point.y, bbcShape479.size.width, bbcShape479.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape480.around.x, bbcShape480.around.y);
ctx.rotate(bbcShape480.rotation * Math.PI / 180);
ctx.translate(-bbcShape480.around.x, -bbcShape480.around.y);
ctx.beginPath();
ctx.rect(bbcShape480.point.x, bbcShape480.point.y, bbcShape480.size.width, bbcShape480.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape481.around.x, bbcShape481.around.y);
ctx.rotate(bbcShape481.rotation * Math.PI / 180);
ctx.translate(-bbcShape481.around.x, -bbcShape481.around.y);
ctx.beginPath();
ctx.rect(bbcShape481.point.x, bbcShape481.point.y, bbcShape481.size.width, bbcShape481.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape482.around.x, bbcShape482.around.y);
ctx.rotate(bbcShape482.rotation * Math.PI / 180);
ctx.translate(-bbcShape482.around.x, -bbcShape482.around.y);
ctx.beginPath();
ctx.rect(bbcShape482.point.x, bbcShape482.point.y, bbcShape482.size.width, bbcShape482.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape483.around.x, bbcShape483.around.y);
ctx.rotate(bbcShape483.rotation * Math.PI / 180);
ctx.translate(-bbcShape483.around.x, -bbcShape483.around.y);
ctx.beginPath();
ctx.rect(bbcShape483.point.x, bbcShape483.point.y, bbcShape483.size.width, bbcShape483.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape484.around.x, bbcShape484.around.y);
ctx.rotate(bbcShape484.rotation * Math.PI / 180);
ctx.translate(-bbcShape484.around.x, -bbcShape484.around.y);
ctx.beginPath();
ctx.rect(bbcShape484.point.x, bbcShape484.point.y, bbcShape484.size.width, bbcShape484.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape485.around.x, bbcShape485.around.y);
ctx.rotate(bbcShape485.rotation * Math.PI / 180);
ctx.translate(-bbcShape485.around.x, -bbcShape485.around.y);
ctx.beginPath();
ctx.rect(bbcShape485.point.x, bbcShape485.point.y, bbcShape485.size.width, bbcShape485.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape486.around.x, bbcShape486.around.y);
ctx.rotate(bbcShape486.rotation * Math.PI / 180);
ctx.translate(-bbcShape486.around.x, -bbcShape486.around.y);
ctx.beginPath();
ctx.rect(bbcShape486.point.x, bbcShape486.point.y, bbcShape486.size.width, bbcShape486.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape487.around.x, bbcShape487.around.y);
ctx.rotate(bbcShape487.rotation * Math.PI / 180);
ctx.translate(-bbcShape487.around.x, -bbcShape487.around.y);
ctx.beginPath();
ctx.rect(bbcShape487.point.x, bbcShape487.point.y, bbcShape487.size.width, bbcShape487.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape488.around.x, bbcShape488.around.y);
ctx.rotate(bbcShape488.rotation * Math.PI / 180);
ctx.translate(-bbcShape488.around.x, -bbcShape488.around.y);
ctx.beginPath();
ctx.rect(bbcShape488.point.x, bbcShape488.point.y, bbcShape488.size.width, bbcShape488.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape489.around.x, bbcShape489.around.y);
ctx.rotate(bbcShape489.rotation * Math.PI / 180);
ctx.translate(-bbcShape489.around.x, -bbcShape489.around.y);
ctx.beginPath();
ctx.rect(bbcShape489.point.x, bbcShape489.point.y, bbcShape489.size.width, bbcShape489.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape490.around.x, bbcShape490.around.y);
ctx.rotate(bbcShape490.rotation * Math.PI / 180);
ctx.translate(-bbcShape490.around.x, -bbcShape490.around.y);
ctx.beginPath();
ctx.rect(bbcShape490.point.x, bbcShape490.point.y, bbcShape490.size.width, bbcShape490.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape491.around.x, bbcShape491.around.y);
ctx.rotate(bbcShape491.rotation * Math.PI / 180);
ctx.translate(-bbcShape491.around.x, -bbcShape491.around.y);
ctx.beginPath();
ctx.rect(bbcShape491.point.x, bbcShape491.point.y, bbcShape491.size.width, bbcShape491.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape492.around.x, bbcShape492.around.y);
ctx.rotate(bbcShape492.rotation * Math.PI / 180);
ctx.translate(-bbcShape492.around.x, -bbcShape492.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape492.points[0][0], bbcShape492.points[0][1]);
ctx.lineTo(bbcShape492.points[1][0], bbcShape492.points[1][1]);
ctx.lineTo(bbcShape492.points[2][0], bbcShape492.points[2][1]);
ctx.lineTo(bbcShape492.points[3][0], bbcShape492.points[3][1]);
ctx.lineTo(bbcShape492.points[4][0], bbcShape492.points[4][1]);
ctx.lineTo(bbcShape492.points[5][0], bbcShape492.points[5][1]);
ctx.lineTo(bbcShape492.points[6][0], bbcShape492.points[6][1]);
ctx.lineTo(bbcShape492.points[7][0], bbcShape492.points[7][1]);
ctx.lineTo(bbcShape492.points[8][0], bbcShape492.points[8][1]);
ctx.lineTo(bbcShape492.points[9][0], bbcShape492.points[9][1]);
ctx.lineTo(bbcShape492.points[10][0], bbcShape492.points[10][1]);
ctx.lineTo(bbcShape492.points[11][0], bbcShape492.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape493.around.x, bbcShape493.around.y);
ctx.rotate(bbcShape493.rotation * Math.PI / 180);
ctx.translate(-bbcShape493.around.x, -bbcShape493.around.y);
ctx.beginPath();
ctx.rect(bbcShape493.point.x, bbcShape493.point.y, bbcShape493.size.width, bbcShape493.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape494.around.x, bbcShape494.around.y);
ctx.rotate(bbcShape494.rotation * Math.PI / 180);
ctx.translate(-bbcShape494.around.x, -bbcShape494.around.y);
ctx.beginPath();
ctx.rect(bbcShape494.point.x, bbcShape494.point.y, bbcShape494.size.width, bbcShape494.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape495.around.x, bbcShape495.around.y);
ctx.rotate(bbcShape495.rotation * Math.PI / 180);
ctx.translate(-bbcShape495.around.x, -bbcShape495.around.y);
ctx.beginPath();
ctx.rect(bbcShape495.point.x, bbcShape495.point.y, bbcShape495.size.width, bbcShape495.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape496.around.x, bbcShape496.around.y);
ctx.rotate(bbcShape496.rotation * Math.PI / 180);
ctx.translate(-bbcShape496.around.x, -bbcShape496.around.y);
ctx.beginPath();
ctx.rect(bbcShape496.point.x, bbcShape496.point.y, bbcShape496.size.width, bbcShape496.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape497.around.x, bbcShape497.around.y);
ctx.rotate(bbcShape497.rotation * Math.PI / 180);
ctx.translate(-bbcShape497.around.x, -bbcShape497.around.y);
ctx.beginPath();
ctx.rect(bbcShape497.point.x, bbcShape497.point.y, bbcShape497.size.width, bbcShape497.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape498.around.x, bbcShape498.around.y);
ctx.rotate(bbcShape498.rotation * Math.PI / 180);
ctx.translate(-bbcShape498.around.x, -bbcShape498.around.y);
ctx.beginPath();
ctx.rect(bbcShape498.point.x, bbcShape498.point.y, bbcShape498.size.width, bbcShape498.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape499.around.x, bbcShape499.around.y);
ctx.rotate(bbcShape499.rotation * Math.PI / 180);
ctx.translate(-bbcShape499.around.x, -bbcShape499.around.y);
ctx.beginPath();
ctx.rect(bbcShape499.point.x, bbcShape499.point.y, bbcShape499.size.width, bbcShape499.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape500.around.x, bbcShape500.around.y);
ctx.rotate(bbcShape500.rotation * Math.PI / 180);
ctx.translate(-bbcShape500.around.x, -bbcShape500.around.y);
ctx.beginPath();
ctx.rect(bbcShape500.point.x, bbcShape500.point.y, bbcShape500.size.width, bbcShape500.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape501.around.x, bbcShape501.around.y);
ctx.rotate(bbcShape501.rotation * Math.PI / 180);
ctx.translate(-bbcShape501.around.x, -bbcShape501.around.y);
ctx.beginPath();
ctx.rect(bbcShape501.point.x, bbcShape501.point.y, bbcShape501.size.width, bbcShape501.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape502.around.x, bbcShape502.around.y);
ctx.rotate(bbcShape502.rotation * Math.PI / 180);
ctx.translate(-bbcShape502.around.x, -bbcShape502.around.y);
ctx.beginPath();
ctx.rect(bbcShape502.point.x, bbcShape502.point.y, bbcShape502.size.width, bbcShape502.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape503.around.x, bbcShape503.around.y);
ctx.rotate(bbcShape503.rotation * Math.PI / 180);
ctx.translate(-bbcShape503.around.x, -bbcShape503.around.y);
ctx.beginPath();
ctx.rect(bbcShape503.point.x, bbcShape503.point.y, bbcShape503.size.width, bbcShape503.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape504.around.x, bbcShape504.around.y);
ctx.rotate(bbcShape504.rotation * Math.PI / 180);
ctx.translate(-bbcShape504.around.x, -bbcShape504.around.y);
ctx.beginPath();
ctx.rect(bbcShape504.point.x, bbcShape504.point.y, bbcShape504.size.width, bbcShape504.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape505.around.x, bbcShape505.around.y);
ctx.rotate(bbcShape505.rotation * Math.PI / 180);
ctx.translate(-bbcShape505.around.x, -bbcShape505.around.y);
ctx.beginPath();
ctx.rect(bbcShape505.point.x, bbcShape505.point.y, bbcShape505.size.width, bbcShape505.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape506.around.x, bbcShape506.around.y);
ctx.rotate(bbcShape506.rotation * Math.PI / 180);
ctx.translate(-bbcShape506.around.x, -bbcShape506.around.y);
ctx.beginPath();
ctx.rect(bbcShape506.point.x, bbcShape506.point.y, bbcShape506.size.width, bbcShape506.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape507.around.x, bbcShape507.around.y);
ctx.rotate(bbcShape507.rotation * Math.PI / 180);
ctx.translate(-bbcShape507.around.x, -bbcShape507.around.y);
ctx.beginPath();
ctx.rect(bbcShape507.point.x, bbcShape507.point.y, bbcShape507.size.width, bbcShape507.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape508.around.x, bbcShape508.around.y);
ctx.rotate(bbcShape508.rotation * Math.PI / 180);
ctx.translate(-bbcShape508.around.x, -bbcShape508.around.y);
ctx.beginPath();
ctx.rect(bbcShape508.point.x, bbcShape508.point.y, bbcShape508.size.width, bbcShape508.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape509.around.x, bbcShape509.around.y);
ctx.rotate(bbcShape509.rotation * Math.PI / 180);
ctx.translate(-bbcShape509.around.x, -bbcShape509.around.y);
ctx.beginPath();
ctx.rect(bbcShape509.point.x, bbcShape509.point.y, bbcShape509.size.width, bbcShape509.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape510.around.x, bbcShape510.around.y);
ctx.rotate(bbcShape510.rotation * Math.PI / 180);
ctx.translate(-bbcShape510.around.x, -bbcShape510.around.y);
ctx.beginPath();
ctx.rect(bbcShape510.point.x, bbcShape510.point.y, bbcShape510.size.width, bbcShape510.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape511.around.x, bbcShape511.around.y);
ctx.rotate(bbcShape511.rotation * Math.PI / 180);
ctx.translate(-bbcShape511.around.x, -bbcShape511.around.y);
ctx.beginPath();
ctx.rect(bbcShape511.point.x, bbcShape511.point.y, bbcShape511.size.width, bbcShape511.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape512.around.x, bbcShape512.around.y);
ctx.rotate(bbcShape512.rotation * Math.PI / 180);
ctx.translate(-bbcShape512.around.x, -bbcShape512.around.y);
ctx.beginPath();
ctx.rect(bbcShape512.point.x, bbcShape512.point.y, bbcShape512.size.width, bbcShape512.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape513.around.x, bbcShape513.around.y);
ctx.rotate(bbcShape513.rotation * Math.PI / 180);
ctx.translate(-bbcShape513.around.x, -bbcShape513.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape513.points[0][0], bbcShape513.points[0][1]);
ctx.lineTo(bbcShape513.points[1][0], bbcShape513.points[1][1]);
ctx.lineTo(bbcShape513.points[2][0], bbcShape513.points[2][1]);
ctx.lineTo(bbcShape513.points[3][0], bbcShape513.points[3][1]);
ctx.lineTo(bbcShape513.points[4][0], bbcShape513.points[4][1]);
ctx.lineTo(bbcShape513.points[5][0], bbcShape513.points[5][1]);
ctx.lineTo(bbcShape513.points[6][0], bbcShape513.points[6][1]);
ctx.lineTo(bbcShape513.points[7][0], bbcShape513.points[7][1]);
ctx.lineTo(bbcShape513.points[8][0], bbcShape513.points[8][1]);
ctx.lineTo(bbcShape513.points[9][0], bbcShape513.points[9][1]);
ctx.lineTo(bbcShape513.points[10][0], bbcShape513.points[10][1]);
ctx.lineTo(bbcShape513.points[11][0], bbcShape513.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape514.around.x, bbcShape514.around.y);
ctx.rotate(bbcShape514.rotation * Math.PI / 180);
ctx.translate(-bbcShape514.around.x, -bbcShape514.around.y);
ctx.beginPath();
ctx.rect(bbcShape514.point.x, bbcShape514.point.y, bbcShape514.size.width, bbcShape514.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape515.around.x, bbcShape515.around.y);
ctx.rotate(bbcShape515.rotation * Math.PI / 180);
ctx.translate(-bbcShape515.around.x, -bbcShape515.around.y);
ctx.beginPath();
ctx.rect(bbcShape515.point.x, bbcShape515.point.y, bbcShape515.size.width, bbcShape515.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape516.around.x, bbcShape516.around.y);
ctx.rotate(bbcShape516.rotation * Math.PI / 180);
ctx.translate(-bbcShape516.around.x, -bbcShape516.around.y);
ctx.beginPath();
ctx.rect(bbcShape516.point.x, bbcShape516.point.y, bbcShape516.size.width, bbcShape516.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape517.around.x, bbcShape517.around.y);
ctx.rotate(bbcShape517.rotation * Math.PI / 180);
ctx.translate(-bbcShape517.around.x, -bbcShape517.around.y);
ctx.beginPath();
ctx.rect(bbcShape517.point.x, bbcShape517.point.y, bbcShape517.size.width, bbcShape517.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape518.around.x, bbcShape518.around.y);
ctx.rotate(bbcShape518.rotation * Math.PI / 180);
ctx.translate(-bbcShape518.around.x, -bbcShape518.around.y);
ctx.beginPath();
ctx.rect(bbcShape518.point.x, bbcShape518.point.y, bbcShape518.size.width, bbcShape518.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape519.around.x, bbcShape519.around.y);
ctx.rotate(bbcShape519.rotation * Math.PI / 180);
ctx.translate(-bbcShape519.around.x, -bbcShape519.around.y);
ctx.beginPath();
ctx.rect(bbcShape519.point.x, bbcShape519.point.y, bbcShape519.size.width, bbcShape519.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape520.around.x, bbcShape520.around.y);
ctx.rotate(bbcShape520.rotation * Math.PI / 180);
ctx.translate(-bbcShape520.around.x, -bbcShape520.around.y);
ctx.beginPath();
ctx.rect(bbcShape520.point.x, bbcShape520.point.y, bbcShape520.size.width, bbcShape520.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape521.around.x, bbcShape521.around.y);
ctx.rotate(bbcShape521.rotation * Math.PI / 180);
ctx.translate(-bbcShape521.around.x, -bbcShape521.around.y);
ctx.beginPath();
ctx.rect(bbcShape521.point.x, bbcShape521.point.y, bbcShape521.size.width, bbcShape521.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape522.around.x, bbcShape522.around.y);
ctx.rotate(bbcShape522.rotation * Math.PI / 180);
ctx.translate(-bbcShape522.around.x, -bbcShape522.around.y);
ctx.beginPath();
ctx.rect(bbcShape522.point.x, bbcShape522.point.y, bbcShape522.size.width, bbcShape522.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape523.around.x, bbcShape523.around.y);
ctx.rotate(bbcShape523.rotation * Math.PI / 180);
ctx.translate(-bbcShape523.around.x, -bbcShape523.around.y);
ctx.beginPath();
ctx.rect(bbcShape523.point.x, bbcShape523.point.y, bbcShape523.size.width, bbcShape523.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape524.around.x, bbcShape524.around.y);
ctx.rotate(bbcShape524.rotation * Math.PI / 180);
ctx.translate(-bbcShape524.around.x, -bbcShape524.around.y);
ctx.beginPath();
ctx.rect(bbcShape524.point.x, bbcShape524.point.y, bbcShape524.size.width, bbcShape524.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape525.around.x, bbcShape525.around.y);
ctx.rotate(bbcShape525.rotation * Math.PI / 180);
ctx.translate(-bbcShape525.around.x, -bbcShape525.around.y);
ctx.beginPath();
ctx.rect(bbcShape525.point.x, bbcShape525.point.y, bbcShape525.size.width, bbcShape525.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape526.around.x, bbcShape526.around.y);
ctx.rotate(bbcShape526.rotation * Math.PI / 180);
ctx.translate(-bbcShape526.around.x, -bbcShape526.around.y);
ctx.beginPath();
ctx.rect(bbcShape526.point.x, bbcShape526.point.y, bbcShape526.size.width, bbcShape526.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape527.around.x, bbcShape527.around.y);
ctx.rotate(bbcShape527.rotation * Math.PI / 180);
ctx.translate(-bbcShape527.around.x, -bbcShape527.around.y);
ctx.beginPath();
ctx.rect(bbcShape527.point.x, bbcShape527.point.y, bbcShape527.size.width, bbcShape527.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape528.around.x, bbcShape528.around.y);
ctx.rotate(bbcShape528.rotation * Math.PI / 180);
ctx.translate(-bbcShape528.around.x, -bbcShape528.around.y);
ctx.beginPath();
ctx.rect(bbcShape528.point.x, bbcShape528.point.y, bbcShape528.size.width, bbcShape528.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape529.around.x, bbcShape529.around.y);
ctx.rotate(bbcShape529.rotation * Math.PI / 180);
ctx.translate(-bbcShape529.around.x, -bbcShape529.around.y);
ctx.beginPath();
ctx.rect(bbcShape529.point.x, bbcShape529.point.y, bbcShape529.size.width, bbcShape529.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape530.around.x, bbcShape530.around.y);
ctx.rotate(bbcShape530.rotation * Math.PI / 180);
ctx.translate(-bbcShape530.around.x, -bbcShape530.around.y);
ctx.beginPath();
ctx.rect(bbcShape530.point.x, bbcShape530.point.y, bbcShape530.size.width, bbcShape530.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape531.around.x, bbcShape531.around.y);
ctx.rotate(bbcShape531.rotation * Math.PI / 180);
ctx.translate(-bbcShape531.around.x, -bbcShape531.around.y);
ctx.beginPath();
ctx.rect(bbcShape531.point.x, bbcShape531.point.y, bbcShape531.size.width, bbcShape531.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape532.around.x, bbcShape532.around.y);
ctx.rotate(bbcShape532.rotation * Math.PI / 180);
ctx.translate(-bbcShape532.around.x, -bbcShape532.around.y);
ctx.beginPath();
ctx.rect(bbcShape532.point.x, bbcShape532.point.y, bbcShape532.size.width, bbcShape532.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape533.around.x, bbcShape533.around.y);
ctx.rotate(bbcShape533.rotation * Math.PI / 180);
ctx.translate(-bbcShape533.around.x, -bbcShape533.around.y);
ctx.beginPath();
ctx.rect(bbcShape533.point.x, bbcShape533.point.y, bbcShape533.size.width, bbcShape533.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(275.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape534.around.x, bbcShape534.around.y);
ctx.rotate(bbcShape534.rotation * Math.PI / 180);
ctx.translate(-bbcShape534.around.x, -bbcShape534.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape534.points[0][0], bbcShape534.points[0][1]);
ctx.lineTo(bbcShape534.points[1][0], bbcShape534.points[1][1]);
ctx.lineTo(bbcShape534.points[2][0], bbcShape534.points[2][1]);
ctx.lineTo(bbcShape534.points[3][0], bbcShape534.points[3][1]);
ctx.lineTo(bbcShape534.points[4][0], bbcShape534.points[4][1]);
ctx.lineTo(bbcShape534.points[5][0], bbcShape534.points[5][1]);
ctx.lineTo(bbcShape534.points[6][0], bbcShape534.points[6][1]);
ctx.lineTo(bbcShape534.points[7][0], bbcShape534.points[7][1]);
ctx.lineTo(bbcShape534.points[8][0], bbcShape534.points[8][1]);
ctx.lineTo(bbcShape534.points[9][0], bbcShape534.points[9][1]);
ctx.lineTo(bbcShape534.points[10][0], bbcShape534.points[10][1]);
ctx.lineTo(bbcShape534.points[11][0], bbcShape534.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape535.around.x, bbcShape535.around.y);
ctx.rotate(bbcShape535.rotation * Math.PI / 180);
ctx.translate(-bbcShape535.around.x, -bbcShape535.around.y);
ctx.beginPath();
ctx.rect(bbcShape535.point.x, bbcShape535.point.y, bbcShape535.size.width, bbcShape535.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape536.around.x, bbcShape536.around.y);
ctx.rotate(bbcShape536.rotation * Math.PI / 180);
ctx.translate(-bbcShape536.around.x, -bbcShape536.around.y);
ctx.beginPath();
ctx.rect(bbcShape536.point.x, bbcShape536.point.y, bbcShape536.size.width, bbcShape536.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape537.around.x, bbcShape537.around.y);
ctx.rotate(bbcShape537.rotation * Math.PI / 180);
ctx.translate(-bbcShape537.around.x, -bbcShape537.around.y);
ctx.beginPath();
ctx.rect(bbcShape537.point.x, bbcShape537.point.y, bbcShape537.size.width, bbcShape537.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape538.around.x, bbcShape538.around.y);
ctx.rotate(bbcShape538.rotation * Math.PI / 180);
ctx.translate(-bbcShape538.around.x, -bbcShape538.around.y);
ctx.beginPath();
ctx.rect(bbcShape538.point.x, bbcShape538.point.y, bbcShape538.size.width, bbcShape538.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape539.around.x, bbcShape539.around.y);
ctx.rotate(bbcShape539.rotation * Math.PI / 180);
ctx.translate(-bbcShape539.around.x, -bbcShape539.around.y);
ctx.beginPath();
ctx.rect(bbcShape539.point.x, bbcShape539.point.y, bbcShape539.size.width, bbcShape539.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape540.around.x, bbcShape540.around.y);
ctx.rotate(bbcShape540.rotation * Math.PI / 180);
ctx.translate(-bbcShape540.around.x, -bbcShape540.around.y);
ctx.beginPath();
ctx.rect(bbcShape540.point.x, bbcShape540.point.y, bbcShape540.size.width, bbcShape540.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape541.around.x, bbcShape541.around.y);
ctx.rotate(bbcShape541.rotation * Math.PI / 180);
ctx.translate(-bbcShape541.around.x, -bbcShape541.around.y);
ctx.beginPath();
ctx.rect(bbcShape541.point.x, bbcShape541.point.y, bbcShape541.size.width, bbcShape541.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape542.around.x, bbcShape542.around.y);
ctx.rotate(bbcShape542.rotation * Math.PI / 180);
ctx.translate(-bbcShape542.around.x, -bbcShape542.around.y);
ctx.beginPath();
ctx.rect(bbcShape542.point.x, bbcShape542.point.y, bbcShape542.size.width, bbcShape542.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape543.around.x, bbcShape543.around.y);
ctx.rotate(bbcShape543.rotation * Math.PI / 180);
ctx.translate(-bbcShape543.around.x, -bbcShape543.around.y);
ctx.beginPath();
ctx.rect(bbcShape543.point.x, bbcShape543.point.y, bbcShape543.size.width, bbcShape543.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape544.around.x, bbcShape544.around.y);
ctx.rotate(bbcShape544.rotation * Math.PI / 180);
ctx.translate(-bbcShape544.around.x, -bbcShape544.around.y);
ctx.beginPath();
ctx.rect(bbcShape544.point.x, bbcShape544.point.y, bbcShape544.size.width, bbcShape544.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape545.around.x, bbcShape545.around.y);
ctx.rotate(bbcShape545.rotation * Math.PI / 180);
ctx.translate(-bbcShape545.around.x, -bbcShape545.around.y);
ctx.beginPath();
ctx.rect(bbcShape545.point.x, bbcShape545.point.y, bbcShape545.size.width, bbcShape545.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape546.around.x, bbcShape546.around.y);
ctx.rotate(bbcShape546.rotation * Math.PI / 180);
ctx.translate(-bbcShape546.around.x, -bbcShape546.around.y);
ctx.beginPath();
ctx.rect(bbcShape546.point.x, bbcShape546.point.y, bbcShape546.size.width, bbcShape546.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape547.around.x, bbcShape547.around.y);
ctx.rotate(bbcShape547.rotation * Math.PI / 180);
ctx.translate(-bbcShape547.around.x, -bbcShape547.around.y);
ctx.beginPath();
ctx.rect(bbcShape547.point.x, bbcShape547.point.y, bbcShape547.size.width, bbcShape547.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape548.around.x, bbcShape548.around.y);
ctx.rotate(bbcShape548.rotation * Math.PI / 180);
ctx.translate(-bbcShape548.around.x, -bbcShape548.around.y);
ctx.beginPath();
ctx.rect(bbcShape548.point.x, bbcShape548.point.y, bbcShape548.size.width, bbcShape548.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape549.around.x, bbcShape549.around.y);
ctx.rotate(bbcShape549.rotation * Math.PI / 180);
ctx.translate(-bbcShape549.around.x, -bbcShape549.around.y);
ctx.beginPath();
ctx.rect(bbcShape549.point.x, bbcShape549.point.y, bbcShape549.size.width, bbcShape549.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape550.around.x, bbcShape550.around.y);
ctx.rotate(bbcShape550.rotation * Math.PI / 180);
ctx.translate(-bbcShape550.around.x, -bbcShape550.around.y);
ctx.beginPath();
ctx.rect(bbcShape550.point.x, bbcShape550.point.y, bbcShape550.size.width, bbcShape550.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape551.around.x, bbcShape551.around.y);
ctx.rotate(bbcShape551.rotation * Math.PI / 180);
ctx.translate(-bbcShape551.around.x, -bbcShape551.around.y);
ctx.beginPath();
ctx.rect(bbcShape551.point.x, bbcShape551.point.y, bbcShape551.size.width, bbcShape551.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape552.around.x, bbcShape552.around.y);
ctx.rotate(bbcShape552.rotation * Math.PI / 180);
ctx.translate(-bbcShape552.around.x, -bbcShape552.around.y);
ctx.beginPath();
ctx.rect(bbcShape552.point.x, bbcShape552.point.y, bbcShape552.size.width, bbcShape552.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape553.around.x, bbcShape553.around.y);
ctx.rotate(bbcShape553.rotation * Math.PI / 180);
ctx.translate(-bbcShape553.around.x, -bbcShape553.around.y);
ctx.beginPath();
ctx.rect(bbcShape553.point.x, bbcShape553.point.y, bbcShape553.size.width, bbcShape553.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape554.around.x, bbcShape554.around.y);
ctx.rotate(bbcShape554.rotation * Math.PI / 180);
ctx.translate(-bbcShape554.around.x, -bbcShape554.around.y);
ctx.beginPath();
ctx.rect(bbcShape554.point.x, bbcShape554.point.y, bbcShape554.size.width, bbcShape554.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(300.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape555.around.x, bbcShape555.around.y);
ctx.rotate(bbcShape555.rotation * Math.PI / 180);
ctx.translate(-bbcShape555.around.x, -bbcShape555.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape555.points[0][0], bbcShape555.points[0][1]);
ctx.lineTo(bbcShape555.points[1][0], bbcShape555.points[1][1]);
ctx.lineTo(bbcShape555.points[2][0], bbcShape555.points[2][1]);
ctx.lineTo(bbcShape555.points[3][0], bbcShape555.points[3][1]);
ctx.lineTo(bbcShape555.points[4][0], bbcShape555.points[4][1]);
ctx.lineTo(bbcShape555.points[5][0], bbcShape555.points[5][1]);
ctx.lineTo(bbcShape555.points[6][0], bbcShape555.points[6][1]);
ctx.lineTo(bbcShape555.points[7][0], bbcShape555.points[7][1]);
ctx.lineTo(bbcShape555.points[8][0], bbcShape555.points[8][1]);
ctx.lineTo(bbcShape555.points[9][0], bbcShape555.points[9][1]);
ctx.lineTo(bbcShape555.points[10][0], bbcShape555.points[10][1]);
ctx.lineTo(bbcShape555.points[11][0], bbcShape555.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape556.around.x, bbcShape556.around.y);
ctx.rotate(bbcShape556.rotation * Math.PI / 180);
ctx.translate(-bbcShape556.around.x, -bbcShape556.around.y);
ctx.beginPath();
ctx.rect(bbcShape556.point.x, bbcShape556.point.y, bbcShape556.size.width, bbcShape556.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape557.around.x, bbcShape557.around.y);
ctx.rotate(bbcShape557.rotation * Math.PI / 180);
ctx.translate(-bbcShape557.around.x, -bbcShape557.around.y);
ctx.beginPath();
ctx.rect(bbcShape557.point.x, bbcShape557.point.y, bbcShape557.size.width, bbcShape557.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape558.around.x, bbcShape558.around.y);
ctx.rotate(bbcShape558.rotation * Math.PI / 180);
ctx.translate(-bbcShape558.around.x, -bbcShape558.around.y);
ctx.beginPath();
ctx.rect(bbcShape558.point.x, bbcShape558.point.y, bbcShape558.size.width, bbcShape558.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape559.around.x, bbcShape559.around.y);
ctx.rotate(bbcShape559.rotation * Math.PI / 180);
ctx.translate(-bbcShape559.around.x, -bbcShape559.around.y);
ctx.beginPath();
ctx.rect(bbcShape559.point.x, bbcShape559.point.y, bbcShape559.size.width, bbcShape559.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape560.around.x, bbcShape560.around.y);
ctx.rotate(bbcShape560.rotation * Math.PI / 180);
ctx.translate(-bbcShape560.around.x, -bbcShape560.around.y);
ctx.beginPath();
ctx.rect(bbcShape560.point.x, bbcShape560.point.y, bbcShape560.size.width, bbcShape560.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape561.around.x, bbcShape561.around.y);
ctx.rotate(bbcShape561.rotation * Math.PI / 180);
ctx.translate(-bbcShape561.around.x, -bbcShape561.around.y);
ctx.beginPath();
ctx.rect(bbcShape561.point.x, bbcShape561.point.y, bbcShape561.size.width, bbcShape561.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape562.around.x, bbcShape562.around.y);
ctx.rotate(bbcShape562.rotation * Math.PI / 180);
ctx.translate(-bbcShape562.around.x, -bbcShape562.around.y);
ctx.beginPath();
ctx.rect(bbcShape562.point.x, bbcShape562.point.y, bbcShape562.size.width, bbcShape562.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape563.around.x, bbcShape563.around.y);
ctx.rotate(bbcShape563.rotation * Math.PI / 180);
ctx.translate(-bbcShape563.around.x, -bbcShape563.around.y);
ctx.beginPath();
ctx.rect(bbcShape563.point.x, bbcShape563.point.y, bbcShape563.size.width, bbcShape563.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape564.around.x, bbcShape564.around.y);
ctx.rotate(bbcShape564.rotation * Math.PI / 180);
ctx.translate(-bbcShape564.around.x, -bbcShape564.around.y);
ctx.beginPath();
ctx.rect(bbcShape564.point.x, bbcShape564.point.y, bbcShape564.size.width, bbcShape564.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape565.around.x, bbcShape565.around.y);
ctx.rotate(bbcShape565.rotation * Math.PI / 180);
ctx.translate(-bbcShape565.around.x, -bbcShape565.around.y);
ctx.beginPath();
ctx.rect(bbcShape565.point.x, bbcShape565.point.y, bbcShape565.size.width, bbcShape565.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape566.around.x, bbcShape566.around.y);
ctx.rotate(bbcShape566.rotation * Math.PI / 180);
ctx.translate(-bbcShape566.around.x, -bbcShape566.around.y);
ctx.beginPath();
ctx.rect(bbcShape566.point.x, bbcShape566.point.y, bbcShape566.size.width, bbcShape566.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape567.around.x, bbcShape567.around.y);
ctx.rotate(bbcShape567.rotation * Math.PI / 180);
ctx.translate(-bbcShape567.around.x, -bbcShape567.around.y);
ctx.beginPath();
ctx.rect(bbcShape567.point.x, bbcShape567.point.y, bbcShape567.size.width, bbcShape567.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape568.around.x, bbcShape568.around.y);
ctx.rotate(bbcShape568.rotation * Math.PI / 180);
ctx.translate(-bbcShape568.around.x, -bbcShape568.around.y);
ctx.beginPath();
ctx.rect(bbcShape568.point.x, bbcShape568.point.y, bbcShape568.size.width, bbcShape568.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape569.around.x, bbcShape569.around.y);
ctx.rotate(bbcShape569.rotation * Math.PI / 180);
ctx.translate(-bbcShape569.around.x, -bbcShape569.around.y);
ctx.beginPath();
ctx.rect(bbcShape569.point.x, bbcShape569.point.y, bbcShape569.size.width, bbcShape569.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape570.around.x, bbcShape570.around.y);
ctx.rotate(bbcShape570.rotation * Math.PI / 180);
ctx.translate(-bbcShape570.around.x, -bbcShape570.around.y);
ctx.beginPath();
ctx.rect(bbcShape570.point.x, bbcShape570.point.y, bbcShape570.size.width, bbcShape570.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape571.around.x, bbcShape571.around.y);
ctx.rotate(bbcShape571.rotation * Math.PI / 180);
ctx.translate(-bbcShape571.around.x, -bbcShape571.around.y);
ctx.beginPath();
ctx.rect(bbcShape571.point.x, bbcShape571.point.y, bbcShape571.size.width, bbcShape571.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape572.around.x, bbcShape572.around.y);
ctx.rotate(bbcShape572.rotation * Math.PI / 180);
ctx.translate(-bbcShape572.around.x, -bbcShape572.around.y);
ctx.beginPath();
ctx.rect(bbcShape572.point.x, bbcShape572.point.y, bbcShape572.size.width, bbcShape572.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape573.around.x, bbcShape573.around.y);
ctx.rotate(bbcShape573.rotation * Math.PI / 180);
ctx.translate(-bbcShape573.around.x, -bbcShape573.around.y);
ctx.beginPath();
ctx.rect(bbcShape573.point.x, bbcShape573.point.y, bbcShape573.size.width, bbcShape573.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape574.around.x, bbcShape574.around.y);
ctx.rotate(bbcShape574.rotation * Math.PI / 180);
ctx.translate(-bbcShape574.around.x, -bbcShape574.around.y);
ctx.beginPath();
ctx.rect(bbcShape574.point.x, bbcShape574.point.y, bbcShape574.size.width, bbcShape574.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape575.around.x, bbcShape575.around.y);
ctx.rotate(bbcShape575.rotation * Math.PI / 180);
ctx.translate(-bbcShape575.around.x, -bbcShape575.around.y);
ctx.beginPath();
ctx.rect(bbcShape575.point.x, bbcShape575.point.y, bbcShape575.size.width, bbcShape575.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(325.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape576.around.x, bbcShape576.around.y);
ctx.rotate(bbcShape576.rotation * Math.PI / 180);
ctx.translate(-bbcShape576.around.x, -bbcShape576.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape576.points[0][0], bbcShape576.points[0][1]);
ctx.lineTo(bbcShape576.points[1][0], bbcShape576.points[1][1]);
ctx.lineTo(bbcShape576.points[2][0], bbcShape576.points[2][1]);
ctx.lineTo(bbcShape576.points[3][0], bbcShape576.points[3][1]);
ctx.lineTo(bbcShape576.points[4][0], bbcShape576.points[4][1]);
ctx.lineTo(bbcShape576.points[5][0], bbcShape576.points[5][1]);
ctx.lineTo(bbcShape576.points[6][0], bbcShape576.points[6][1]);
ctx.lineTo(bbcShape576.points[7][0], bbcShape576.points[7][1]);
ctx.lineTo(bbcShape576.points[8][0], bbcShape576.points[8][1]);
ctx.lineTo(bbcShape576.points[9][0], bbcShape576.points[9][1]);
ctx.lineTo(bbcShape576.points[10][0], bbcShape576.points[10][1]);
ctx.lineTo(bbcShape576.points[11][0], bbcShape576.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape577.around.x, bbcShape577.around.y);
ctx.rotate(bbcShape577.rotation * Math.PI / 180);
ctx.translate(-bbcShape577.around.x, -bbcShape577.around.y);
ctx.beginPath();
ctx.rect(bbcShape577.point.x, bbcShape577.point.y, bbcShape577.size.width, bbcShape577.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape578.around.x, bbcShape578.around.y);
ctx.rotate(bbcShape578.rotation * Math.PI / 180);
ctx.translate(-bbcShape578.around.x, -bbcShape578.around.y);
ctx.beginPath();
ctx.rect(bbcShape578.point.x, bbcShape578.point.y, bbcShape578.size.width, bbcShape578.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape579.around.x, bbcShape579.around.y);
ctx.rotate(bbcShape579.rotation * Math.PI / 180);
ctx.translate(-bbcShape579.around.x, -bbcShape579.around.y);
ctx.beginPath();
ctx.rect(bbcShape579.point.x, bbcShape579.point.y, bbcShape579.size.width, bbcShape579.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape580.around.x, bbcShape580.around.y);
ctx.rotate(bbcShape580.rotation * Math.PI / 180);
ctx.translate(-bbcShape580.around.x, -bbcShape580.around.y);
ctx.beginPath();
ctx.rect(bbcShape580.point.x, bbcShape580.point.y, bbcShape580.size.width, bbcShape580.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape581.around.x, bbcShape581.around.y);
ctx.rotate(bbcShape581.rotation * Math.PI / 180);
ctx.translate(-bbcShape581.around.x, -bbcShape581.around.y);
ctx.beginPath();
ctx.rect(bbcShape581.point.x, bbcShape581.point.y, bbcShape581.size.width, bbcShape581.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape582.around.x, bbcShape582.around.y);
ctx.rotate(bbcShape582.rotation * Math.PI / 180);
ctx.translate(-bbcShape582.around.x, -bbcShape582.around.y);
ctx.beginPath();
ctx.rect(bbcShape582.point.x, bbcShape582.point.y, bbcShape582.size.width, bbcShape582.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape583.around.x, bbcShape583.around.y);
ctx.rotate(bbcShape583.rotation * Math.PI / 180);
ctx.translate(-bbcShape583.around.x, -bbcShape583.around.y);
ctx.beginPath();
ctx.rect(bbcShape583.point.x, bbcShape583.point.y, bbcShape583.size.width, bbcShape583.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape584.around.x, bbcShape584.around.y);
ctx.rotate(bbcShape584.rotation * Math.PI / 180);
ctx.translate(-bbcShape584.around.x, -bbcShape584.around.y);
ctx.beginPath();
ctx.rect(bbcShape584.point.x, bbcShape584.point.y, bbcShape584.size.width, bbcShape584.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape585.around.x, bbcShape585.around.y);
ctx.rotate(bbcShape585.rotation * Math.PI / 180);
ctx.translate(-bbcShape585.around.x, -bbcShape585.around.y);
ctx.beginPath();
ctx.rect(bbcShape585.point.x, bbcShape585.point.y, bbcShape585.size.width, bbcShape585.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape586.around.x, bbcShape586.around.y);
ctx.rotate(bbcShape586.rotation * Math.PI / 180);
ctx.translate(-bbcShape586.around.x, -bbcShape586.around.y);
ctx.beginPath();
ctx.rect(bbcShape586.point.x, bbcShape586.point.y, bbcShape586.size.width, bbcShape586.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape587.around.x, bbcShape587.around.y);
ctx.rotate(bbcShape587.rotation * Math.PI / 180);
ctx.translate(-bbcShape587.around.x, -bbcShape587.around.y);
ctx.beginPath();
ctx.rect(bbcShape587.point.x, bbcShape587.point.y, bbcShape587.size.width, bbcShape587.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape588.around.x, bbcShape588.around.y);
ctx.rotate(bbcShape588.rotation * Math.PI / 180);
ctx.translate(-bbcShape588.around.x, -bbcShape588.around.y);
ctx.beginPath();
ctx.rect(bbcShape588.point.x, bbcShape588.point.y, bbcShape588.size.width, bbcShape588.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape589.around.x, bbcShape589.around.y);
ctx.rotate(bbcShape589.rotation * Math.PI / 180);
ctx.translate(-bbcShape589.around.x, -bbcShape589.around.y);
ctx.beginPath();
ctx.rect(bbcShape589.point.x, bbcShape589.point.y, bbcShape589.size.width, bbcShape589.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape590.around.x, bbcShape590.around.y);
ctx.rotate(bbcShape590.rotation * Math.PI / 180);
ctx.translate(-bbcShape590.around.x, -bbcShape590.around.y);
ctx.beginPath();
ctx.rect(bbcShape590.point.x, bbcShape590.point.y, bbcShape590.size.width, bbcShape590.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape591.around.x, bbcShape591.around.y);
ctx.rotate(bbcShape591.rotation * Math.PI / 180);
ctx.translate(-bbcShape591.around.x, -bbcShape591.around.y);
ctx.beginPath();
ctx.rect(bbcShape591.point.x, bbcShape591.point.y, bbcShape591.size.width, bbcShape591.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape592.around.x, bbcShape592.around.y);
ctx.rotate(bbcShape592.rotation * Math.PI / 180);
ctx.translate(-bbcShape592.around.x, -bbcShape592.around.y);
ctx.beginPath();
ctx.rect(bbcShape592.point.x, bbcShape592.point.y, bbcShape592.size.width, bbcShape592.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape593.around.x, bbcShape593.around.y);
ctx.rotate(bbcShape593.rotation * Math.PI / 180);
ctx.translate(-bbcShape593.around.x, -bbcShape593.around.y);
ctx.beginPath();
ctx.rect(bbcShape593.point.x, bbcShape593.point.y, bbcShape593.size.width, bbcShape593.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape594.around.x, bbcShape594.around.y);
ctx.rotate(bbcShape594.rotation * Math.PI / 180);
ctx.translate(-bbcShape594.around.x, -bbcShape594.around.y);
ctx.beginPath();
ctx.rect(bbcShape594.point.x, bbcShape594.point.y, bbcShape594.size.width, bbcShape594.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape595.around.x, bbcShape595.around.y);
ctx.rotate(bbcShape595.rotation * Math.PI / 180);
ctx.translate(-bbcShape595.around.x, -bbcShape595.around.y);
ctx.beginPath();
ctx.rect(bbcShape595.point.x, bbcShape595.point.y, bbcShape595.size.width, bbcShape595.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape596.around.x, bbcShape596.around.y);
ctx.rotate(bbcShape596.rotation * Math.PI / 180);
ctx.translate(-bbcShape596.around.x, -bbcShape596.around.y);
ctx.beginPath();
ctx.rect(bbcShape596.point.x, bbcShape596.point.y, bbcShape596.size.width, bbcShape596.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(350.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape597.around.x, bbcShape597.around.y);
ctx.rotate(bbcShape597.rotation * Math.PI / 180);
ctx.translate(-bbcShape597.around.x, -bbcShape597.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape597.points[0][0], bbcShape597.points[0][1]);
ctx.lineTo(bbcShape597.points[1][0], bbcShape597.points[1][1]);
ctx.lineTo(bbcShape597.points[2][0], bbcShape597.points[2][1]);
ctx.lineTo(bbcShape597.points[3][0], bbcShape597.points[3][1]);
ctx.lineTo(bbcShape597.points[4][0], bbcShape597.points[4][1]);
ctx.lineTo(bbcShape597.points[5][0], bbcShape597.points[5][1]);
ctx.lineTo(bbcShape597.points[6][0], bbcShape597.points[6][1]);
ctx.lineTo(bbcShape597.points[7][0], bbcShape597.points[7][1]);
ctx.lineTo(bbcShape597.points[8][0], bbcShape597.points[8][1]);
ctx.lineTo(bbcShape597.points[9][0], bbcShape597.points[9][1]);
ctx.lineTo(bbcShape597.points[10][0], bbcShape597.points[10][1]);
ctx.lineTo(bbcShape597.points[11][0], bbcShape597.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape598.around.x, bbcShape598.around.y);
ctx.rotate(bbcShape598.rotation * Math.PI / 180);
ctx.translate(-bbcShape598.around.x, -bbcShape598.around.y);
ctx.beginPath();
ctx.rect(bbcShape598.point.x, bbcShape598.point.y, bbcShape598.size.width, bbcShape598.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape599.around.x, bbcShape599.around.y);
ctx.rotate(bbcShape599.rotation * Math.PI / 180);
ctx.translate(-bbcShape599.around.x, -bbcShape599.around.y);
ctx.beginPath();
ctx.rect(bbcShape599.point.x, bbcShape599.point.y, bbcShape599.size.width, bbcShape599.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape600.around.x, bbcShape600.around.y);
ctx.rotate(bbcShape600.rotation * Math.PI / 180);
ctx.translate(-bbcShape600.around.x, -bbcShape600.around.y);
ctx.beginPath();
ctx.rect(bbcShape600.point.x, bbcShape600.point.y, bbcShape600.size.width, bbcShape600.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape601.around.x, bbcShape601.around.y);
ctx.rotate(bbcShape601.rotation * Math.PI / 180);
ctx.translate(-bbcShape601.around.x, -bbcShape601.around.y);
ctx.beginPath();
ctx.rect(bbcShape601.point.x, bbcShape601.point.y, bbcShape601.size.width, bbcShape601.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape602.around.x, bbcShape602.around.y);
ctx.rotate(bbcShape602.rotation * Math.PI / 180);
ctx.translate(-bbcShape602.around.x, -bbcShape602.around.y);
ctx.beginPath();
ctx.rect(bbcShape602.point.x, bbcShape602.point.y, bbcShape602.size.width, bbcShape602.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape603.around.x, bbcShape603.around.y);
ctx.rotate(bbcShape603.rotation * Math.PI / 180);
ctx.translate(-bbcShape603.around.x, -bbcShape603.around.y);
ctx.beginPath();
ctx.rect(bbcShape603.point.x, bbcShape603.point.y, bbcShape603.size.width, bbcShape603.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape604.around.x, bbcShape604.around.y);
ctx.rotate(bbcShape604.rotation * Math.PI / 180);
ctx.translate(-bbcShape604.around.x, -bbcShape604.around.y);
ctx.beginPath();
ctx.rect(bbcShape604.point.x, bbcShape604.point.y, bbcShape604.size.width, bbcShape604.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape605.around.x, bbcShape605.around.y);
ctx.rotate(bbcShape605.rotation * Math.PI / 180);
ctx.translate(-bbcShape605.around.x, -bbcShape605.around.y);
ctx.beginPath();
ctx.rect(bbcShape605.point.x, bbcShape605.point.y, bbcShape605.size.width, bbcShape605.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape606.around.x, bbcShape606.around.y);
ctx.rotate(bbcShape606.rotation * Math.PI / 180);
ctx.translate(-bbcShape606.around.x, -bbcShape606.around.y);
ctx.beginPath();
ctx.rect(bbcShape606.point.x, bbcShape606.point.y, bbcShape606.size.width, bbcShape606.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape607.around.x, bbcShape607.around.y);
ctx.rotate(bbcShape607.rotation * Math.PI / 180);
ctx.translate(-bbcShape607.around.x, -bbcShape607.around.y);
ctx.beginPath();
ctx.rect(bbcShape607.point.x, bbcShape607.point.y, bbcShape607.size.width, bbcShape607.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape608.around.x, bbcShape608.around.y);
ctx.rotate(bbcShape608.rotation * Math.PI / 180);
ctx.translate(-bbcShape608.around.x, -bbcShape608.around.y);
ctx.beginPath();
ctx.rect(bbcShape608.point.x, bbcShape608.point.y, bbcShape608.size.width, bbcShape608.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape609.around.x, bbcShape609.around.y);
ctx.rotate(bbcShape609.rotation * Math.PI / 180);
ctx.translate(-bbcShape609.around.x, -bbcShape609.around.y);
ctx.beginPath();
ctx.rect(bbcShape609.point.x, bbcShape609.point.y, bbcShape609.size.width, bbcShape609.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape610.around.x, bbcShape610.around.y);
ctx.rotate(bbcShape610.rotation * Math.PI / 180);
ctx.translate(-bbcShape610.around.x, -bbcShape610.around.y);
ctx.beginPath();
ctx.rect(bbcShape610.point.x, bbcShape610.point.y, bbcShape610.size.width, bbcShape610.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape611.around.x, bbcShape611.around.y);
ctx.rotate(bbcShape611.rotation * Math.PI / 180);
ctx.translate(-bbcShape611.around.x, -bbcShape611.around.y);
ctx.beginPath();
ctx.rect(bbcShape611.point.x, bbcShape611.point.y, bbcShape611.size.width, bbcShape611.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape612.around.x, bbcShape612.around.y);
ctx.rotate(bbcShape612.rotation * Math.PI / 180);
ctx.translate(-bbcShape612.around.x, -bbcShape612.around.y);
ctx.beginPath();
ctx.rect(bbcShape612.point.x, bbcShape612.point.y, bbcShape612.size.width, bbcShape612.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape613.around.x, bbcShape613.around.y);
ctx.rotate(bbcShape613.rotation * Math.PI / 180);
ctx.translate(-bbcShape613.around.x, -bbcShape613.around.y);
ctx.beginPath();
ctx.rect(bbcShape613.point.x, bbcShape613.point.y, bbcShape613.size.width, bbcShape613.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape614.around.x, bbcShape614.around.y);
ctx.rotate(bbcShape614.rotation * Math.PI / 180);
ctx.translate(-bbcShape614.around.x, -bbcShape614.around.y);
ctx.beginPath();
ctx.rect(bbcShape614.point.x, bbcShape614.point.y, bbcShape614.size.width, bbcShape614.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape615.around.x, bbcShape615.around.y);
ctx.rotate(bbcShape615.rotation * Math.PI / 180);
ctx.translate(-bbcShape615.around.x, -bbcShape615.around.y);
ctx.beginPath();
ctx.rect(bbcShape615.point.x, bbcShape615.point.y, bbcShape615.size.width, bbcShape615.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape616.around.x, bbcShape616.around.y);
ctx.rotate(bbcShape616.rotation * Math.PI / 180);
ctx.translate(-bbcShape616.around.x, -bbcShape616.around.y);
ctx.beginPath();
ctx.rect(bbcShape616.point.x, bbcShape616.point.y, bbcShape616.size.width, bbcShape616.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape617.around.x, bbcShape617.around.y);
ctx.rotate(bbcShape617.rotation * Math.PI / 180);
ctx.translate(-bbcShape617.around.x, -bbcShape617.around.y);
ctx.beginPath();
ctx.rect(bbcShape617.point.x, bbcShape617.point.y, bbcShape617.size.width, bbcShape617.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(375.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape618.around.x, bbcShape618.around.y);
ctx.rotate(bbcShape618.rotation * Math.PI / 180);
ctx.translate(-bbcShape618.around.x, -bbcShape618.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape618.points[0][0], bbcShape618.points[0][1]);
ctx.lineTo(bbcShape618.points[1][0], bbcShape618.points[1][1]);
ctx.lineTo(bbcShape618.points[2][0], bbcShape618.points[2][1]);
ctx.lineTo(bbcShape618.points[3][0], bbcShape618.points[3][1]);
ctx.lineTo(bbcShape618.points[4][0], bbcShape618.points[4][1]);
ctx.lineTo(bbcShape618.points[5][0], bbcShape618.points[5][1]);
ctx.lineTo(bbcShape618.points[6][0], bbcShape618.points[6][1]);
ctx.lineTo(bbcShape618.points[7][0], bbcShape618.points[7][1]);
ctx.lineTo(bbcShape618.points[8][0], bbcShape618.points[8][1]);
ctx.lineTo(bbcShape618.points[9][0], bbcShape618.points[9][1]);
ctx.lineTo(bbcShape618.points[10][0], bbcShape618.points[10][1]);
ctx.lineTo(bbcShape618.points[11][0], bbcShape618.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape619.around.x, bbcShape619.around.y);
ctx.rotate(bbcShape619.rotation * Math.PI / 180);
ctx.translate(-bbcShape619.around.x, -bbcShape619.around.y);
ctx.beginPath();
ctx.rect(bbcShape619.point.x, bbcShape619.point.y, bbcShape619.size.width, bbcShape619.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape620.around.x, bbcShape620.around.y);
ctx.rotate(bbcShape620.rotation * Math.PI / 180);
ctx.translate(-bbcShape620.around.x, -bbcShape620.around.y);
ctx.beginPath();
ctx.rect(bbcShape620.point.x, bbcShape620.point.y, bbcShape620.size.width, bbcShape620.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape621.around.x, bbcShape621.around.y);
ctx.rotate(bbcShape621.rotation * Math.PI / 180);
ctx.translate(-bbcShape621.around.x, -bbcShape621.around.y);
ctx.beginPath();
ctx.rect(bbcShape621.point.x, bbcShape621.point.y, bbcShape621.size.width, bbcShape621.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape622.around.x, bbcShape622.around.y);
ctx.rotate(bbcShape622.rotation * Math.PI / 180);
ctx.translate(-bbcShape622.around.x, -bbcShape622.around.y);
ctx.beginPath();
ctx.rect(bbcShape622.point.x, bbcShape622.point.y, bbcShape622.size.width, bbcShape622.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape623.around.x, bbcShape623.around.y);
ctx.rotate(bbcShape623.rotation * Math.PI / 180);
ctx.translate(-bbcShape623.around.x, -bbcShape623.around.y);
ctx.beginPath();
ctx.rect(bbcShape623.point.x, bbcShape623.point.y, bbcShape623.size.width, bbcShape623.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape624.around.x, bbcShape624.around.y);
ctx.rotate(bbcShape624.rotation * Math.PI / 180);
ctx.translate(-bbcShape624.around.x, -bbcShape624.around.y);
ctx.beginPath();
ctx.rect(bbcShape624.point.x, bbcShape624.point.y, bbcShape624.size.width, bbcShape624.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape625.around.x, bbcShape625.around.y);
ctx.rotate(bbcShape625.rotation * Math.PI / 180);
ctx.translate(-bbcShape625.around.x, -bbcShape625.around.y);
ctx.beginPath();
ctx.rect(bbcShape625.point.x, bbcShape625.point.y, bbcShape625.size.width, bbcShape625.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape626.around.x, bbcShape626.around.y);
ctx.rotate(bbcShape626.rotation * Math.PI / 180);
ctx.translate(-bbcShape626.around.x, -bbcShape626.around.y);
ctx.beginPath();
ctx.rect(bbcShape626.point.x, bbcShape626.point.y, bbcShape626.size.width, bbcShape626.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape627.around.x, bbcShape627.around.y);
ctx.rotate(bbcShape627.rotation * Math.PI / 180);
ctx.translate(-bbcShape627.around.x, -bbcShape627.around.y);
ctx.beginPath();
ctx.rect(bbcShape627.point.x, bbcShape627.point.y, bbcShape627.size.width, bbcShape627.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape628.around.x, bbcShape628.around.y);
ctx.rotate(bbcShape628.rotation * Math.PI / 180);
ctx.translate(-bbcShape628.around.x, -bbcShape628.around.y);
ctx.beginPath();
ctx.rect(bbcShape628.point.x, bbcShape628.point.y, bbcShape628.size.width, bbcShape628.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape629.around.x, bbcShape629.around.y);
ctx.rotate(bbcShape629.rotation * Math.PI / 180);
ctx.translate(-bbcShape629.around.x, -bbcShape629.around.y);
ctx.beginPath();
ctx.rect(bbcShape629.point.x, bbcShape629.point.y, bbcShape629.size.width, bbcShape629.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape630.around.x, bbcShape630.around.y);
ctx.rotate(bbcShape630.rotation * Math.PI / 180);
ctx.translate(-bbcShape630.around.x, -bbcShape630.around.y);
ctx.beginPath();
ctx.rect(bbcShape630.point.x, bbcShape630.point.y, bbcShape630.size.width, bbcShape630.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape631.around.x, bbcShape631.around.y);
ctx.rotate(bbcShape631.rotation * Math.PI / 180);
ctx.translate(-bbcShape631.around.x, -bbcShape631.around.y);
ctx.beginPath();
ctx.rect(bbcShape631.point.x, bbcShape631.point.y, bbcShape631.size.width, bbcShape631.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape632.around.x, bbcShape632.around.y);
ctx.rotate(bbcShape632.rotation * Math.PI / 180);
ctx.translate(-bbcShape632.around.x, -bbcShape632.around.y);
ctx.beginPath();
ctx.rect(bbcShape632.point.x, bbcShape632.point.y, bbcShape632.size.width, bbcShape632.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape633.around.x, bbcShape633.around.y);
ctx.rotate(bbcShape633.rotation * Math.PI / 180);
ctx.translate(-bbcShape633.around.x, -bbcShape633.around.y);
ctx.beginPath();
ctx.rect(bbcShape633.point.x, bbcShape633.point.y, bbcShape633.size.width, bbcShape633.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape634.around.x, bbcShape634.around.y);
ctx.rotate(bbcShape634.rotation * Math.PI / 180);
ctx.translate(-bbcShape634.around.x, -bbcShape634.around.y);
ctx.beginPath();
ctx.rect(bbcShape634.point.x, bbcShape634.point.y, bbcShape634.size.width, bbcShape634.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape635.around.x, bbcShape635.around.y);
ctx.rotate(bbcShape635.rotation * Math.PI / 180);
ctx.translate(-bbcShape635.around.x, -bbcShape635.around.y);
ctx.beginPath();
ctx.rect(bbcShape635.point.x, bbcShape635.point.y, bbcShape635.size.width, bbcShape635.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape636.around.x, bbcShape636.around.y);
ctx.rotate(bbcShape636.rotation * Math.PI / 180);
ctx.translate(-bbcShape636.around.x, -bbcShape636.around.y);
ctx.beginPath();
ctx.rect(bbcShape636.point.x, bbcShape636.point.y, bbcShape636.size.width, bbcShape636.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape637.around.x, bbcShape637.around.y);
ctx.rotate(bbcShape637.rotation * Math.PI / 180);
ctx.translate(-bbcShape637.around.x, -bbcShape637.around.y);
ctx.beginPath();
ctx.rect(bbcShape637.point.x, bbcShape637.point.y, bbcShape637.size.width, bbcShape637.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape638.around.x, bbcShape638.around.y);
ctx.rotate(bbcShape638.rotation * Math.PI / 180);
ctx.translate(-bbcShape638.around.x, -bbcShape638.around.y);
ctx.beginPath();
ctx.rect(bbcShape638.point.x, bbcShape638.point.y, bbcShape638.size.width, bbcShape638.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(400.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape639.around.x, bbcShape639.around.y);
ctx.rotate(bbcShape639.rotation * Math.PI / 180);
ctx.translate(-bbcShape639.around.x, -bbcShape639.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape639.points[0][0], bbcShape639.points[0][1]);
ctx.lineTo(bbcShape639.points[1][0], bbcShape639.points[1][1]);
ctx.lineTo(bbcShape639.points[2][0], bbcShape639.points[2][1]);
ctx.lineTo(bbcShape639.points[3][0], bbcShape639.points[3][1]);
ctx.lineTo(bbcShape639.points[4][0], bbcShape639.points[4][1]);
ctx.lineTo(bbcShape639.points[5][0], bbcShape639.points[5][1]);
ctx.lineTo(bbcShape639.points[6][0], bbcShape639.points[6][1]);
ctx.lineTo(bbcShape639.points[7][0], bbcShape639.points[7][1]);
ctx.lineTo(bbcShape639.points[8][0], bbcShape639.points[8][1]);
ctx.lineTo(bbcShape639.points[9][0], bbcShape639.points[9][1]);
ctx.lineTo(bbcShape639.points[10][0], bbcShape639.points[10][1]);
ctx.lineTo(bbcShape639.points[11][0], bbcShape639.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape640.around.x, bbcShape640.around.y);
ctx.rotate(bbcShape640.rotation * Math.PI / 180);
ctx.translate(-bbcShape640.around.x, -bbcShape640.around.y);
ctx.beginPath();
ctx.rect(bbcShape640.point.x, bbcShape640.point.y, bbcShape640.size.width, bbcShape640.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape641.around.x, bbcShape641.around.y);
ctx.rotate(bbcShape641.rotation * Math.PI / 180);
ctx.translate(-bbcShape641.around.x, -bbcShape641.around.y);
ctx.beginPath();
ctx.rect(bbcShape641.point.x, bbcShape641.point.y, bbcShape641.size.width, bbcShape641.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape642.around.x, bbcShape642.around.y);
ctx.rotate(bbcShape642.rotation * Math.PI / 180);
ctx.translate(-bbcShape642.around.x, -bbcShape642.around.y);
ctx.beginPath();
ctx.rect(bbcShape642.point.x, bbcShape642.point.y, bbcShape642.size.width, bbcShape642.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape643.around.x, bbcShape643.around.y);
ctx.rotate(bbcShape643.rotation * Math.PI / 180);
ctx.translate(-bbcShape643.around.x, -bbcShape643.around.y);
ctx.beginPath();
ctx.rect(bbcShape643.point.x, bbcShape643.point.y, bbcShape643.size.width, bbcShape643.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape644.around.x, bbcShape644.around.y);
ctx.rotate(bbcShape644.rotation * Math.PI / 180);
ctx.translate(-bbcShape644.around.x, -bbcShape644.around.y);
ctx.beginPath();
ctx.rect(bbcShape644.point.x, bbcShape644.point.y, bbcShape644.size.width, bbcShape644.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape645.around.x, bbcShape645.around.y);
ctx.rotate(bbcShape645.rotation * Math.PI / 180);
ctx.translate(-bbcShape645.around.x, -bbcShape645.around.y);
ctx.beginPath();
ctx.rect(bbcShape645.point.x, bbcShape645.point.y, bbcShape645.size.width, bbcShape645.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape646.around.x, bbcShape646.around.y);
ctx.rotate(bbcShape646.rotation * Math.PI / 180);
ctx.translate(-bbcShape646.around.x, -bbcShape646.around.y);
ctx.beginPath();
ctx.rect(bbcShape646.point.x, bbcShape646.point.y, bbcShape646.size.width, bbcShape646.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape647.around.x, bbcShape647.around.y);
ctx.rotate(bbcShape647.rotation * Math.PI / 180);
ctx.translate(-bbcShape647.around.x, -bbcShape647.around.y);
ctx.beginPath();
ctx.rect(bbcShape647.point.x, bbcShape647.point.y, bbcShape647.size.width, bbcShape647.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape648.around.x, bbcShape648.around.y);
ctx.rotate(bbcShape648.rotation * Math.PI / 180);
ctx.translate(-bbcShape648.around.x, -bbcShape648.around.y);
ctx.beginPath();
ctx.rect(bbcShape648.point.x, bbcShape648.point.y, bbcShape648.size.width, bbcShape648.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape649.around.x, bbcShape649.around.y);
ctx.rotate(bbcShape649.rotation * Math.PI / 180);
ctx.translate(-bbcShape649.around.x, -bbcShape649.around.y);
ctx.beginPath();
ctx.rect(bbcShape649.point.x, bbcShape649.point.y, bbcShape649.size.width, bbcShape649.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape650.around.x, bbcShape650.around.y);
ctx.rotate(bbcShape650.rotation * Math.PI / 180);
ctx.translate(-bbcShape650.around.x, -bbcShape650.around.y);
ctx.beginPath();
ctx.rect(bbcShape650.point.x, bbcShape650.point.y, bbcShape650.size.width, bbcShape650.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape651.around.x, bbcShape651.around.y);
ctx.rotate(bbcShape651.rotation * Math.PI / 180);
ctx.translate(-bbcShape651.around.x, -bbcShape651.around.y);
ctx.beginPath();
ctx.rect(bbcShape651.point.x, bbcShape651.point.y, bbcShape651.size.width, bbcShape651.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape652.around.x, bbcShape652.around.y);
ctx.rotate(bbcShape652.rotation * Math.PI / 180);
ctx.translate(-bbcShape652.around.x, -bbcShape652.around.y);
ctx.beginPath();
ctx.rect(bbcShape652.point.x, bbcShape652.point.y, bbcShape652.size.width, bbcShape652.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape653.around.x, bbcShape653.around.y);
ctx.rotate(bbcShape653.rotation * Math.PI / 180);
ctx.translate(-bbcShape653.around.x, -bbcShape653.around.y);
ctx.beginPath();
ctx.rect(bbcShape653.point.x, bbcShape653.point.y, bbcShape653.size.width, bbcShape653.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape654.around.x, bbcShape654.around.y);
ctx.rotate(bbcShape654.rotation * Math.PI / 180);
ctx.translate(-bbcShape654.around.x, -bbcShape654.around.y);
ctx.beginPath();
ctx.rect(bbcShape654.point.x, bbcShape654.point.y, bbcShape654.size.width, bbcShape654.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape655.around.x, bbcShape655.around.y);
ctx.rotate(bbcShape655.rotation * Math.PI / 180);
ctx.translate(-bbcShape655.around.x, -bbcShape655.around.y);
ctx.beginPath();
ctx.rect(bbcShape655.point.x, bbcShape655.point.y, bbcShape655.size.width, bbcShape655.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape656.around.x, bbcShape656.around.y);
ctx.rotate(bbcShape656.rotation * Math.PI / 180);
ctx.translate(-bbcShape656.around.x, -bbcShape656.around.y);
ctx.beginPath();
ctx.rect(bbcShape656.point.x, bbcShape656.point.y, bbcShape656.size.width, bbcShape656.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape657.around.x, bbcShape657.around.y);
ctx.rotate(bbcShape657.rotation * Math.PI / 180);
ctx.translate(-bbcShape657.around.x, -bbcShape657.around.y);
ctx.beginPath();
ctx.rect(bbcShape657.point.x, bbcShape657.point.y, bbcShape657.size.width, bbcShape657.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape658.around.x, bbcShape658.around.y);
ctx.rotate(bbcShape658.rotation * Math.PI / 180);
ctx.translate(-bbcShape658.around.x, -bbcShape658.around.y);
ctx.beginPath();
ctx.rect(bbcShape658.point.x, bbcShape658.point.y, bbcShape658.size.width, bbcShape658.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape659.around.x, bbcShape659.around.y);
ctx.rotate(bbcShape659.rotation * Math.PI / 180);
ctx.translate(-bbcShape659.around.x, -bbcShape659.around.y);
ctx.beginPath();
ctx.rect(bbcShape659.point.x, bbcShape659.point.y, bbcShape659.size.width, bbcShape659.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(425.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape660.around.x, bbcShape660.around.y);
ctx.rotate(bbcShape660.rotation * Math.PI / 180);
ctx.translate(-bbcShape660.around.x, -bbcShape660.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape660.points[0][0], bbcShape660.points[0][1]);
ctx.lineTo(bbcShape660.points[1][0], bbcShape660.points[1][1]);
ctx.lineTo(bbcShape660.points[2][0], bbcShape660.points[2][1]);
ctx.lineTo(bbcShape660.points[3][0], bbcShape660.points[3][1]);
ctx.lineTo(bbcShape660.points[4][0], bbcShape660.points[4][1]);
ctx.lineTo(bbcShape660.points[5][0], bbcShape660.points[5][1]);
ctx.lineTo(bbcShape660.points[6][0], bbcShape660.points[6][1]);
ctx.lineTo(bbcShape660.points[7][0], bbcShape660.points[7][1]);
ctx.lineTo(bbcShape660.points[8][0], bbcShape660.points[8][1]);
ctx.lineTo(bbcShape660.points[9][0], bbcShape660.points[9][1]);
ctx.lineTo(bbcShape660.points[10][0], bbcShape660.points[10][1]);
ctx.lineTo(bbcShape660.points[11][0], bbcShape660.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape661.around.x, bbcShape661.around.y);
ctx.rotate(bbcShape661.rotation * Math.PI / 180);
ctx.translate(-bbcShape661.around.x, -bbcShape661.around.y);
ctx.beginPath();
ctx.rect(bbcShape661.point.x, bbcShape661.point.y, bbcShape661.size.width, bbcShape661.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape662.around.x, bbcShape662.around.y);
ctx.rotate(bbcShape662.rotation * Math.PI / 180);
ctx.translate(-bbcShape662.around.x, -bbcShape662.around.y);
ctx.beginPath();
ctx.rect(bbcShape662.point.x, bbcShape662.point.y, bbcShape662.size.width, bbcShape662.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape663.around.x, bbcShape663.around.y);
ctx.rotate(bbcShape663.rotation * Math.PI / 180);
ctx.translate(-bbcShape663.around.x, -bbcShape663.around.y);
ctx.beginPath();
ctx.rect(bbcShape663.point.x, bbcShape663.point.y, bbcShape663.size.width, bbcShape663.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape664.around.x, bbcShape664.around.y);
ctx.rotate(bbcShape664.rotation * Math.PI / 180);
ctx.translate(-bbcShape664.around.x, -bbcShape664.around.y);
ctx.beginPath();
ctx.rect(bbcShape664.point.x, bbcShape664.point.y, bbcShape664.size.width, bbcShape664.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape665.around.x, bbcShape665.around.y);
ctx.rotate(bbcShape665.rotation * Math.PI / 180);
ctx.translate(-bbcShape665.around.x, -bbcShape665.around.y);
ctx.beginPath();
ctx.rect(bbcShape665.point.x, bbcShape665.point.y, bbcShape665.size.width, bbcShape665.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape666.around.x, bbcShape666.around.y);
ctx.rotate(bbcShape666.rotation * Math.PI / 180);
ctx.translate(-bbcShape666.around.x, -bbcShape666.around.y);
ctx.beginPath();
ctx.rect(bbcShape666.point.x, bbcShape666.point.y, bbcShape666.size.width, bbcShape666.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape667.around.x, bbcShape667.around.y);
ctx.rotate(bbcShape667.rotation * Math.PI / 180);
ctx.translate(-bbcShape667.around.x, -bbcShape667.around.y);
ctx.beginPath();
ctx.rect(bbcShape667.point.x, bbcShape667.point.y, bbcShape667.size.width, bbcShape667.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape668.around.x, bbcShape668.around.y);
ctx.rotate(bbcShape668.rotation * Math.PI / 180);
ctx.translate(-bbcShape668.around.x, -bbcShape668.around.y);
ctx.beginPath();
ctx.rect(bbcShape668.point.x, bbcShape668.point.y, bbcShape668.size.width, bbcShape668.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape669.around.x, bbcShape669.around.y);
ctx.rotate(bbcShape669.rotation * Math.PI / 180);
ctx.translate(-bbcShape669.around.x, -bbcShape669.around.y);
ctx.beginPath();
ctx.rect(bbcShape669.point.x, bbcShape669.point.y, bbcShape669.size.width, bbcShape669.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape670.around.x, bbcShape670.around.y);
ctx.rotate(bbcShape670.rotation * Math.PI / 180);
ctx.translate(-bbcShape670.around.x, -bbcShape670.around.y);
ctx.beginPath();
ctx.rect(bbcShape670.point.x, bbcShape670.point.y, bbcShape670.size.width, bbcShape670.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape671.around.x, bbcShape671.around.y);
ctx.rotate(bbcShape671.rotation * Math.PI / 180);
ctx.translate(-bbcShape671.around.x, -bbcShape671.around.y);
ctx.beginPath();
ctx.rect(bbcShape671.point.x, bbcShape671.point.y, bbcShape671.size.width, bbcShape671.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape672.around.x, bbcShape672.around.y);
ctx.rotate(bbcShape672.rotation * Math.PI / 180);
ctx.translate(-bbcShape672.around.x, -bbcShape672.around.y);
ctx.beginPath();
ctx.rect(bbcShape672.point.x, bbcShape672.point.y, bbcShape672.size.width, bbcShape672.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape673.around.x, bbcShape673.around.y);
ctx.rotate(bbcShape673.rotation * Math.PI / 180);
ctx.translate(-bbcShape673.around.x, -bbcShape673.around.y);
ctx.beginPath();
ctx.rect(bbcShape673.point.x, bbcShape673.point.y, bbcShape673.size.width, bbcShape673.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape674.around.x, bbcShape674.around.y);
ctx.rotate(bbcShape674.rotation * Math.PI / 180);
ctx.translate(-bbcShape674.around.x, -bbcShape674.around.y);
ctx.beginPath();
ctx.rect(bbcShape674.point.x, bbcShape674.point.y, bbcShape674.size.width, bbcShape674.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape675.around.x, bbcShape675.around.y);
ctx.rotate(bbcShape675.rotation * Math.PI / 180);
ctx.translate(-bbcShape675.around.x, -bbcShape675.around.y);
ctx.beginPath();
ctx.rect(bbcShape675.point.x, bbcShape675.point.y, bbcShape675.size.width, bbcShape675.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape676.around.x, bbcShape676.around.y);
ctx.rotate(bbcShape676.rotation * Math.PI / 180);
ctx.translate(-bbcShape676.around.x, -bbcShape676.around.y);
ctx.beginPath();
ctx.rect(bbcShape676.point.x, bbcShape676.point.y, bbcShape676.size.width, bbcShape676.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape677.around.x, bbcShape677.around.y);
ctx.rotate(bbcShape677.rotation * Math.PI / 180);
ctx.translate(-bbcShape677.around.x, -bbcShape677.around.y);
ctx.beginPath();
ctx.rect(bbcShape677.point.x, bbcShape677.point.y, bbcShape677.size.width, bbcShape677.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape678.around.x, bbcShape678.around.y);
ctx.rotate(bbcShape678.rotation * Math.PI / 180);
ctx.translate(-bbcShape678.around.x, -bbcShape678.around.y);
ctx.beginPath();
ctx.rect(bbcShape678.point.x, bbcShape678.point.y, bbcShape678.size.width, bbcShape678.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape679.around.x, bbcShape679.around.y);
ctx.rotate(bbcShape679.rotation * Math.PI / 180);
ctx.translate(-bbcShape679.around.x, -bbcShape679.around.y);
ctx.beginPath();
ctx.rect(bbcShape679.point.x, bbcShape679.point.y, bbcShape679.size.width, bbcShape679.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape680.around.x, bbcShape680.around.y);
ctx.rotate(bbcShape680.rotation * Math.PI / 180);
ctx.translate(-bbcShape680.around.x, -bbcShape680.around.y);
ctx.beginPath();
ctx.rect(bbcShape680.point.x, bbcShape680.point.y, bbcShape680.size.width, bbcShape680.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(450.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape681.around.x, bbcShape681.around.y);
ctx.rotate(bbcShape681.rotation * Math.PI / 180);
ctx.translate(-bbcShape681.around.x, -bbcShape681.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape681.points[0][0], bbcShape681.points[0][1]);
ctx.lineTo(bbcShape681.points[1][0], bbcShape681.points[1][1]);
ctx.lineTo(bbcShape681.points[2][0], bbcShape681.points[2][1]);
ctx.lineTo(bbcShape681.points[3][0], bbcShape681.points[3][1]);
ctx.lineTo(bbcShape681.points[4][0], bbcShape681.points[4][1]);
ctx.lineTo(bbcShape681.points[5][0], bbcShape681.points[5][1]);
ctx.lineTo(bbcShape681.points[6][0], bbcShape681.points[6][1]);
ctx.lineTo(bbcShape681.points[7][0], bbcShape681.points[7][1]);
ctx.lineTo(bbcShape681.points[8][0], bbcShape681.points[8][1]);
ctx.lineTo(bbcShape681.points[9][0], bbcShape681.points[9][1]);
ctx.lineTo(bbcShape681.points[10][0], bbcShape681.points[10][1]);
ctx.lineTo(bbcShape681.points[11][0], bbcShape681.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape682.around.x, bbcShape682.around.y);
ctx.rotate(bbcShape682.rotation * Math.PI / 180);
ctx.translate(-bbcShape682.around.x, -bbcShape682.around.y);
ctx.beginPath();
ctx.rect(bbcShape682.point.x, bbcShape682.point.y, bbcShape682.size.width, bbcShape682.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape683.around.x, bbcShape683.around.y);
ctx.rotate(bbcShape683.rotation * Math.PI / 180);
ctx.translate(-bbcShape683.around.x, -bbcShape683.around.y);
ctx.beginPath();
ctx.rect(bbcShape683.point.x, bbcShape683.point.y, bbcShape683.size.width, bbcShape683.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape684.around.x, bbcShape684.around.y);
ctx.rotate(bbcShape684.rotation * Math.PI / 180);
ctx.translate(-bbcShape684.around.x, -bbcShape684.around.y);
ctx.beginPath();
ctx.rect(bbcShape684.point.x, bbcShape684.point.y, bbcShape684.size.width, bbcShape684.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape685.around.x, bbcShape685.around.y);
ctx.rotate(bbcShape685.rotation * Math.PI / 180);
ctx.translate(-bbcShape685.around.x, -bbcShape685.around.y);
ctx.beginPath();
ctx.rect(bbcShape685.point.x, bbcShape685.point.y, bbcShape685.size.width, bbcShape685.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape686.around.x, bbcShape686.around.y);
ctx.rotate(bbcShape686.rotation * Math.PI / 180);
ctx.translate(-bbcShape686.around.x, -bbcShape686.around.y);
ctx.beginPath();
ctx.rect(bbcShape686.point.x, bbcShape686.point.y, bbcShape686.size.width, bbcShape686.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape687.around.x, bbcShape687.around.y);
ctx.rotate(bbcShape687.rotation * Math.PI / 180);
ctx.translate(-bbcShape687.around.x, -bbcShape687.around.y);
ctx.beginPath();
ctx.rect(bbcShape687.point.x, bbcShape687.point.y, bbcShape687.size.width, bbcShape687.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape688.around.x, bbcShape688.around.y);
ctx.rotate(bbcShape688.rotation * Math.PI / 180);
ctx.translate(-bbcShape688.around.x, -bbcShape688.around.y);
ctx.beginPath();
ctx.rect(bbcShape688.point.x, bbcShape688.point.y, bbcShape688.size.width, bbcShape688.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape689.around.x, bbcShape689.around.y);
ctx.rotate(bbcShape689.rotation * Math.PI / 180);
ctx.translate(-bbcShape689.around.x, -bbcShape689.around.y);
ctx.beginPath();
ctx.rect(bbcShape689.point.x, bbcShape689.point.y, bbcShape689.size.width, bbcShape689.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape690.around.x, bbcShape690.around.y);
ctx.rotate(bbcShape690.rotation * Math.PI / 180);
ctx.translate(-bbcShape690.around.x, -bbcShape690.around.y);
ctx.beginPath();
ctx.rect(bbcShape690.point.x, bbcShape690.point.y, bbcShape690.size.width, bbcShape690.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape691.around.x, bbcShape691.around.y);
ctx.rotate(bbcShape691.rotation * Math.PI / 180);
ctx.translate(-bbcShape691.around.x, -bbcShape691.around.y);
ctx.beginPath();
ctx.rect(bbcShape691.point.x, bbcShape691.point.y, bbcShape691.size.width, bbcShape691.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape692.around.x, bbcShape692.around.y);
ctx.rotate(bbcShape692.rotation * Math.PI / 180);
ctx.translate(-bbcShape692.around.x, -bbcShape692.around.y);
ctx.beginPath();
ctx.rect(bbcShape692.point.x, bbcShape692.point.y, bbcShape692.size.width, bbcShape692.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape693.around.x, bbcShape693.around.y);
ctx.rotate(bbcShape693.rotation * Math.PI / 180);
ctx.translate(-bbcShape693.around.x, -bbcShape693.around.y);
ctx.beginPath();
ctx.rect(bbcShape693.point.x, bbcShape693.point.y, bbcShape693.size.width, bbcShape693.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape694.around.x, bbcShape694.around.y);
ctx.rotate(bbcShape694.rotation * Math.PI / 180);
ctx.translate(-bbcShape694.around.x, -bbcShape694.around.y);
ctx.beginPath();
ctx.rect(bbcShape694.point.x, bbcShape694.point.y, bbcShape694.size.width, bbcShape694.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape695.around.x, bbcShape695.around.y);
ctx.rotate(bbcShape695.rotation * Math.PI / 180);
ctx.translate(-bbcShape695.around.x, -bbcShape695.around.y);
ctx.beginPath();
ctx.rect(bbcShape695.point.x, bbcShape695.point.y, bbcShape695.size.width, bbcShape695.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape696.around.x, bbcShape696.around.y);
ctx.rotate(bbcShape696.rotation * Math.PI / 180);
ctx.translate(-bbcShape696.around.x, -bbcShape696.around.y);
ctx.beginPath();
ctx.rect(bbcShape696.point.x, bbcShape696.point.y, bbcShape696.size.width, bbcShape696.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape697.around.x, bbcShape697.around.y);
ctx.rotate(bbcShape697.rotation * Math.PI / 180);
ctx.translate(-bbcShape697.around.x, -bbcShape697.around.y);
ctx.beginPath();
ctx.rect(bbcShape697.point.x, bbcShape697.point.y, bbcShape697.size.width, bbcShape697.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape698.around.x, bbcShape698.around.y);
ctx.rotate(bbcShape698.rotation * Math.PI / 180);
ctx.translate(-bbcShape698.around.x, -bbcShape698.around.y);
ctx.beginPath();
ctx.rect(bbcShape698.point.x, bbcShape698.point.y, bbcShape698.size.width, bbcShape698.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape699.around.x, bbcShape699.around.y);
ctx.rotate(bbcShape699.rotation * Math.PI / 180);
ctx.translate(-bbcShape699.around.x, -bbcShape699.around.y);
ctx.beginPath();
ctx.rect(bbcShape699.point.x, bbcShape699.point.y, bbcShape699.size.width, bbcShape699.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape700.around.x, bbcShape700.around.y);
ctx.rotate(bbcShape700.rotation * Math.PI / 180);
ctx.translate(-bbcShape700.around.x, -bbcShape700.around.y);
ctx.beginPath();
ctx.rect(bbcShape700.point.x, bbcShape700.point.y, bbcShape700.size.width, bbcShape700.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape701.around.x, bbcShape701.around.y);
ctx.rotate(bbcShape701.rotation * Math.PI / 180);
ctx.translate(-bbcShape701.around.x, -bbcShape701.around.y);
ctx.beginPath();
ctx.rect(bbcShape701.point.x, bbcShape701.point.y, bbcShape701.size.width, bbcShape701.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(475.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape702.around.x, bbcShape702.around.y);
ctx.rotate(bbcShape702.rotation * Math.PI / 180);
ctx.translate(-bbcShape702.around.x, -bbcShape702.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape702.points[0][0], bbcShape702.points[0][1]);
ctx.lineTo(bbcShape702.points[1][0], bbcShape702.points[1][1]);
ctx.lineTo(bbcShape702.points[2][0], bbcShape702.points[2][1]);
ctx.lineTo(bbcShape702.points[3][0], bbcShape702.points[3][1]);
ctx.lineTo(bbcShape702.points[4][0], bbcShape702.points[4][1]);
ctx.lineTo(bbcShape702.points[5][0], bbcShape702.points[5][1]);
ctx.lineTo(bbcShape702.points[6][0], bbcShape702.points[6][1]);
ctx.lineTo(bbcShape702.points[7][0], bbcShape702.points[7][1]);
ctx.lineTo(bbcShape702.points[8][0], bbcShape702.points[8][1]);
ctx.lineTo(bbcShape702.points[9][0], bbcShape702.points[9][1]);
ctx.lineTo(bbcShape702.points[10][0], bbcShape702.points[10][1]);
ctx.lineTo(bbcShape702.points[11][0], bbcShape702.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape703.around.x, bbcShape703.around.y);
ctx.rotate(bbcShape703.rotation * Math.PI / 180);
ctx.translate(-bbcShape703.around.x, -bbcShape703.around.y);
ctx.beginPath();
ctx.rect(bbcShape703.point.x, bbcShape703.point.y, bbcShape703.size.width, bbcShape703.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape704.around.x, bbcShape704.around.y);
ctx.rotate(bbcShape704.rotation * Math.PI / 180);
ctx.translate(-bbcShape704.around.x, -bbcShape704.around.y);
ctx.beginPath();
ctx.rect(bbcShape704.point.x, bbcShape704.point.y, bbcShape704.size.width, bbcShape704.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape705.around.x, bbcShape705.around.y);
ctx.rotate(bbcShape705.rotation * Math.PI / 180);
ctx.translate(-bbcShape705.around.x, -bbcShape705.around.y);
ctx.beginPath();
ctx.rect(bbcShape705.point.x, bbcShape705.point.y, bbcShape705.size.width, bbcShape705.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape706.around.x, bbcShape706.around.y);
ctx.rotate(bbcShape706.rotation * Math.PI / 180);
ctx.translate(-bbcShape706.around.x, -bbcShape706.around.y);
ctx.beginPath();
ctx.rect(bbcShape706.point.x, bbcShape706.point.y, bbcShape706.size.width, bbcShape706.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape707.around.x, bbcShape707.around.y);
ctx.rotate(bbcShape707.rotation * Math.PI / 180);
ctx.translate(-bbcShape707.around.x, -bbcShape707.around.y);
ctx.beginPath();
ctx.rect(bbcShape707.point.x, bbcShape707.point.y, bbcShape707.size.width, bbcShape707.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape708.around.x, bbcShape708.around.y);
ctx.rotate(bbcShape708.rotation * Math.PI / 180);
ctx.translate(-bbcShape708.around.x, -bbcShape708.around.y);
ctx.beginPath();
ctx.rect(bbcShape708.point.x, bbcShape708.point.y, bbcShape708.size.width, bbcShape708.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape709.around.x, bbcShape709.around.y);
ctx.rotate(bbcShape709.rotation * Math.PI / 180);
ctx.translate(-bbcShape709.around.x, -bbcShape709.around.y);
ctx.beginPath();
ctx.rect(bbcShape709.point.x, bbcShape709.point.y, bbcShape709.size.width, bbcShape709.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape710.around.x, bbcShape710.around.y);
ctx.rotate(bbcShape710.rotation * Math.PI / 180);
ctx.translate(-bbcShape710.around.x, -bbcShape710.around.y);
ctx.beginPath();
ctx.rect(bbcShape710.point.x, bbcShape710.point.y, bbcShape710.size.width, bbcShape710.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape711.around.x, bbcShape711.around.y);
ctx.rotate(bbcShape711.rotation * Math.PI / 180);
ctx.translate(-bbcShape711.around.x, -bbcShape711.around.y);
ctx.beginPath();
ctx.rect(bbcShape711.point.x, bbcShape711.point.y, bbcShape711.size.width, bbcShape711.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape712.around.x, bbcShape712.around.y);
ctx.rotate(bbcShape712.rotation * Math.PI / 180);
ctx.translate(-bbcShape712.around.x, -bbcShape712.around.y);
ctx.beginPath();
ctx.rect(bbcShape712.point.x, bbcShape712.point.y, bbcShape712.size.width, bbcShape712.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape713.around.x, bbcShape713.around.y);
ctx.rotate(bbcShape713.rotation * Math.PI / 180);
ctx.translate(-bbcShape713.around.x, -bbcShape713.around.y);
ctx.beginPath();
ctx.rect(bbcShape713.point.x, bbcShape713.point.y, bbcShape713.size.width, bbcShape713.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape714.around.x, bbcShape714.around.y);
ctx.rotate(bbcShape714.rotation * Math.PI / 180);
ctx.translate(-bbcShape714.around.x, -bbcShape714.around.y);
ctx.beginPath();
ctx.rect(bbcShape714.point.x, bbcShape714.point.y, bbcShape714.size.width, bbcShape714.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape715.around.x, bbcShape715.around.y);
ctx.rotate(bbcShape715.rotation * Math.PI / 180);
ctx.translate(-bbcShape715.around.x, -bbcShape715.around.y);
ctx.beginPath();
ctx.rect(bbcShape715.point.x, bbcShape715.point.y, bbcShape715.size.width, bbcShape715.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape716.around.x, bbcShape716.around.y);
ctx.rotate(bbcShape716.rotation * Math.PI / 180);
ctx.translate(-bbcShape716.around.x, -bbcShape716.around.y);
ctx.beginPath();
ctx.rect(bbcShape716.point.x, bbcShape716.point.y, bbcShape716.size.width, bbcShape716.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape717.around.x, bbcShape717.around.y);
ctx.rotate(bbcShape717.rotation * Math.PI / 180);
ctx.translate(-bbcShape717.around.x, -bbcShape717.around.y);
ctx.beginPath();
ctx.rect(bbcShape717.point.x, bbcShape717.point.y, bbcShape717.size.width, bbcShape717.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape718.around.x, bbcShape718.around.y);
ctx.rotate(bbcShape718.rotation * Math.PI / 180);
ctx.translate(-bbcShape718.around.x, -bbcShape718.around.y);
ctx.beginPath();
ctx.rect(bbcShape718.point.x, bbcShape718.point.y, bbcShape718.size.width, bbcShape718.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape719.around.x, bbcShape719.around.y);
ctx.rotate(bbcShape719.rotation * Math.PI / 180);
ctx.translate(-bbcShape719.around.x, -bbcShape719.around.y);
ctx.beginPath();
ctx.rect(bbcShape719.point.x, bbcShape719.point.y, bbcShape719.size.width, bbcShape719.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape720.around.x, bbcShape720.around.y);
ctx.rotate(bbcShape720.rotation * Math.PI / 180);
ctx.translate(-bbcShape720.around.x, -bbcShape720.around.y);
ctx.beginPath();
ctx.rect(bbcShape720.point.x, bbcShape720.point.y, bbcShape720.size.width, bbcShape720.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape721.around.x, bbcShape721.around.y);
ctx.rotate(bbcShape721.rotation * Math.PI / 180);
ctx.translate(-bbcShape721.around.x, -bbcShape721.around.y);
ctx.beginPath();
ctx.rect(bbcShape721.point.x, bbcShape721.point.y, bbcShape721.size.width, bbcShape721.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape722.around.x, bbcShape722.around.y);
ctx.rotate(bbcShape722.rotation * Math.PI / 180);
ctx.translate(-bbcShape722.around.x, -bbcShape722.around.y);
ctx.beginPath();
ctx.rect(bbcShape722.point.x, bbcShape722.point.y, bbcShape722.size.width, bbcShape722.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}
