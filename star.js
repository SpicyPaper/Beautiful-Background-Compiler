
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
    point:{
    x:861,
    y:942
},
    radius:5.0,
    color:{
    r:67,
    g:236,
    b:83
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape2 = {
    point:{
    x:46,
    y:435
},
    radius:5.0,
    color:{
    r:69,
    g:106,
    b:228
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape3 = {
    point:{
    x:552,
    y:901
},
    radius:5.0,
    color:{
    r:241,
    g:151,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape4 = {
    point:{
    x:1881,
    y:521
},
    radius:5.0,
    color:{
    r:144,
    g:146,
    b:191
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape5 = {
    point:{
    x:321,
    y:288
},
    radius:5.0,
    color:{
    r:114,
    g:140,
    b:158
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape6 = {
    point:{
    x:73,
    y:322
},
    radius:5.0,
    color:{
    r:7,
    g:12,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape7 = {
    point:{
    x:400,
    y:439
},
    radius:5.0,
    color:{
    r:132,
    g:234,
    b:35
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape8 = {
    point:{
    x:1706,
    y:850
},
    radius:5.0,
    color:{
    r:29,
    g:180,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape9 = {
    point:{
    x:1515,
    y:107
},
    radius:5.0,
    color:{
    r:63,
    g:224,
    b:204
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape10 = {
    point:{
    x:394,
    y:130
},
    radius:5.0,
    color:{
    r:98,
    g:237,
    b:180
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape11 = {
    point:{
    x:1336,
    y:556
},
    radius:5.0,
    color:{
    r:108,
    g:134,
    b:86
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape12 = {
    point:{
    x:396,
    y:622
},
    radius:5.0,
    color:{
    r:61,
    g:80,
    b:207
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape13 = {
    point:{
    x:270,
    y:28
},
    radius:5.0,
    color:{
    r:184,
    g:109,
    b:26
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape14 = {
    point:{
    x:113,
    y:15
},
    radius:5.0,
    color:{
    r:70,
    g:49,
    b:45
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape15 = {
    point:{
    x:1377,
    y:324
},
    radius:5.0,
    color:{
    r:70,
    g:212,
    b:174
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape16 = {
    point:{
    x:480,
    y:491
},
    radius:5.0,
    color:{
    r:56,
    g:27,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape17 = {
    point:{
    x:1393,
    y:251
},
    radius:5.0,
    color:{
    r:148,
    g:145,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape18 = {
    point:{
    x:1661,
    y:226
},
    radius:5.0,
    color:{
    r:65,
    g:73,
    b:196
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape19 = {
    point:{
    x:114,
    y:520
},
    radius:5.0,
    color:{
    r:83,
    g:222,
    b:172
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape20 = {
    point:{
    x:149,
    y:169
},
    radius:5.0,
    color:{
    r:47,
    g:242,
    b:208
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape21 = {
    point:{
    x:1605,
    y:153
},
    radius:5.0,
    color:{
    r:53,
    g:206,
    b:224
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape22 = {
    point:{
    x:292,
    y:871
},
    radius:5.0,
    color:{
    r:99,
    g:47,
    b:18
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape23 = {
    point:{
    x:483,
    y:1
},
    radius:5.0,
    color:{
    r:221,
    g:104,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape24 = {
    point:{
    x:781,
    y:98
},
    radius:5.0,
    color:{
    r:6,
    g:225,
    b:190
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape25 = {
    point:{
    x:1129,
    y:866
},
    radius:5.0,
    color:{
    r:74,
    g:133,
    b:63
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape26 = {
    point:{
    x:796,
    y:979
},
    radius:5.0,
    color:{
    r:210,
    g:230,
    b:145
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape27 = {
    point:{
    x:1005,
    y:265
},
    radius:5.0,
    color:{
    r:120,
    g:150,
    b:231
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape28 = {
    point:{
    x:881,
    y:774
},
    radius:5.0,
    color:{
    r:174,
    g:246,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape29 = {
    point:{
    x:1553,
    y:762
},
    radius:5.0,
    color:{
    r:230,
    g:177,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape30 = {
    point:{
    x:378,
    y:837
},
    radius:5.0,
    color:{
    r:31,
    g:121,
    b:232
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape31 = {
    point:{
    x:655,
    y:354
},
    radius:5.0,
    color:{
    r:194,
    g:167,
    b:107
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape32 = {
    point:{
    x:14,
    y:590
},
    radius:5.0,
    color:{
    r:254,
    g:205,
    b:237
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape33 = {
    point:{
    x:546,
    y:760
},
    radius:5.0,
    color:{
    r:205,
    g:95,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape34 = {
    point:{
    x:1321,
    y:330
},
    radius:5.0,
    color:{
    r:85,
    g:124,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape35 = {
    point:{
    x:1500,
    y:774
},
    radius:5.0,
    color:{
    r:186,
    g:11,
    b:76
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape36 = {
    point:{
    x:1397,
    y:689
},
    radius:5.0,
    color:{
    r:171,
    g:221,
    b:99
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape37 = {
    point:{
    x:1257,
    y:615
},
    radius:5.0,
    color:{
    r:111,
    g:138,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape38 = {
    point:{
    x:699,
    y:315
},
    radius:5.0,
    color:{
    r:22,
    g:197,
    b:246
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape39 = {
    point:{
    x:200,
    y:877
},
    radius:5.0,
    color:{
    r:214,
    g:17,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape40 = {
    point:{
    x:1736,
    y:583
},
    radius:5.0,
    color:{
    r:234,
    g:121,
    b:103
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape41 = {
    point:{
    x:92,
    y:54
},
    radius:5.0,
    color:{
    r:127,
    g:91,
    b:86
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape42 = {
    point:{
    x:1706,
    y:298
},
    radius:5.0,
    color:{
    r:241,
    g:96,
    b:203
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape43 = {
    point:{
    x:1402,
    y:291
},
    radius:5.0,
    color:{
    r:21,
    g:150,
    b:240
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape44 = {
    point:{
    x:32,
    y:602
},
    radius:5.0,
    color:{
    r:6,
    g:230,
    b:136
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape45 = {
    point:{
    x:1896,
    y:730
},
    radius:5.0,
    color:{
    r:253,
    g:236,
    b:13
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape46 = {
    point:{
    x:139,
    y:1014
},
    radius:5.0,
    color:{
    r:115,
    g:246,
    b:116
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape47 = {
    point:{
    x:190,
    y:1069
},
    radius:5.0,
    color:{
    r:181,
    g:138,
    b:29
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape48 = {
    point:{
    x:999,
    y:661
},
    radius:5.0,
    color:{
    r:9,
    g:168,
    b:246
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape49 = {
    point:{
    x:474,
    y:1010
},
    radius:5.0,
    color:{
    r:46,
    g:52,
    b:248
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape50 = {
    point:{
    x:623,
    y:937
},
    radius:5.0,
    color:{
    r:254,
    g:235,
    b:141
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape51 = {
    point:{
    x:796,
    y:48
},
    radius:5.0,
    color:{
    r:154,
    g:136,
    b:25
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape52 = {
    point:{
    x:646,
    y:328
},
    radius:5.0,
    color:{
    r:219,
    g:165,
    b:178
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape53 = {
    point:{
    x:1053,
    y:200
},
    radius:5.0,
    color:{
    r:85,
    g:71,
    b:90
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape54 = {
    point:{
    x:831,
    y:1062
},
    radius:5.0,
    color:{
    r:38,
    g:41,
    b:187
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape55 = {
    point:{
    x:874,
    y:702
},
    radius:5.0,
    color:{
    r:94,
    g:0,
    b:27
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape56 = {
    point:{
    x:651,
    y:243
},
    radius:5.0,
    color:{
    r:121,
    g:19,
    b:92
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape57 = {
    point:{
    x:968,
    y:631
},
    radius:5.0,
    color:{
    r:246,
    g:51,
    b:65
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape58 = {
    point:{
    x:1786,
    y:28
},
    radius:5.0,
    color:{
    r:211,
    g:7,
    b:18
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape59 = {
    point:{
    x:1589,
    y:886
},
    radius:5.0,
    color:{
    r:103,
    g:167,
    b:15
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape60 = {
    point:{
    x:20,
    y:279
},
    radius:5.0,
    color:{
    r:96,
    g:253,
    b:188
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape61 = {
    point:{
    x:1592,
    y:826
},
    radius:5.0,
    color:{
    r:255,
    g:169,
    b:8
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape62 = {
    point:{
    x:229,
    y:1044
},
    radius:5.0,
    color:{
    r:226,
    g:176,
    b:137
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape63 = {
    point:{
    x:715,
    y:105
},
    radius:5.0,
    color:{
    r:120,
    g:137,
    b:215
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape64 = {
    point:{
    x:1440,
    y:447
},
    radius:5.0,
    color:{
    r:55,
    g:186,
    b:102
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape65 = {
    point:{
    x:76,
    y:890
},
    radius:5.0,
    color:{
    r:88,
    g:152,
    b:45
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape66 = {
    point:{
    x:547,
    y:1060
},
    radius:5.0,
    color:{
    r:230,
    g:31,
    b:204
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape67 = {
    point:{
    x:1548,
    y:579
},
    radius:5.0,
    color:{
    r:215,
    g:159,
    b:101
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape68 = {
    point:{
    x:1624,
    y:17
},
    radius:5.0,
    color:{
    r:152,
    g:200,
    b:138
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape69 = {
    point:{
    x:1197,
    y:334
},
    radius:5.0,
    color:{
    r:42,
    g:109,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape70 = {
    point:{
    x:846,
    y:977
},
    radius:5.0,
    color:{
    r:238,
    g:207,
    b:206
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape71 = {
    point:{
    x:905,
    y:17
},
    radius:5.0,
    color:{
    r:255,
    g:11,
    b:137
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape72 = {
    point:{
    x:1473,
    y:932
},
    radius:5.0,
    color:{
    r:136,
    g:124,
    b:140
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape73 = {
    point:{
    x:1095,
    y:959
},
    radius:5.0,
    color:{
    r:90,
    g:243,
    b:195
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape74 = {
    point:{
    x:689,
    y:43
},
    radius:5.0,
    color:{
    r:249,
    g:88,
    b:241
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape75 = {
    point:{
    x:31,
    y:522
},
    radius:5.0,
    color:{
    r:245,
    g:127,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape76 = {
    point:{
    x:1195,
    y:41
},
    radius:5.0,
    color:{
    r:39,
    g:158,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape77 = {
    point:{
    x:1025,
    y:465
},
    radius:5.0,
    color:{
    r:239,
    g:246,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape78 = {
    point:{
    x:503,
    y:32
},
    radius:5.0,
    color:{
    r:107,
    g:157,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape79 = {
    point:{
    x:850,
    y:245
},
    radius:5.0,
    color:{
    r:22,
    g:147,
    b:216
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape80 = {
    point:{
    x:414,
    y:168
},
    radius:5.0,
    color:{
    r:221,
    g:54,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape81 = {
    point:{
    x:1637,
    y:103
},
    radius:5.0,
    color:{
    r:209,
    g:170,
    b:230
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape82 = {
    point:{
    x:599,
    y:589
},
    radius:5.0,
    color:{
    r:173,
    g:244,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape83 = {
    point:{
    x:1507,
    y:1024
},
    radius:5.0,
    color:{
    r:223,
    g:234,
    b:128
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape84 = {
    point:{
    x:1304,
    y:568
},
    radius:5.0,
    color:{
    r:214,
    g:24,
    b:33
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape85 = {
    point:{
    x:882,
    y:303
},
    radius:5.0,
    color:{
    r:9,
    g:218,
    b:177
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape86 = {
    point:{
    x:1807,
    y:798
},
    radius:5.0,
    color:{
    r:128,
    g:61,
    b:97
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape87 = {
    point:{
    x:1871,
    y:266
},
    radius:5.0,
    color:{
    r:235,
    g:141,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape88 = {
    point:{
    x:1907,
    y:766
},
    radius:5.0,
    color:{
    r:148,
    g:102,
    b:191
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape89 = {
    point:{
    x:1824,
    y:940
},
    radius:5.0,
    color:{
    r:77,
    g:56,
    b:199
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape90 = {
    point:{
    x:1363,
    y:472
},
    radius:5.0,
    color:{
    r:85,
    g:64,
    b:60
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape91 = {
    point:{
    x:1813,
    y:943
},
    radius:5.0,
    color:{
    r:109,
    g:23,
    b:135
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape92 = {
    point:{
    x:522,
    y:677
},
    radius:5.0,
    color:{
    r:157,
    g:157,
    b:205
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape93 = {
    point:{
    x:587,
    y:321
},
    radius:5.0,
    color:{
    r:62,
    g:58,
    b:121
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape94 = {
    point:{
    x:234,
    y:378
},
    radius:5.0,
    color:{
    r:163,
    g:147,
    b:209
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape95 = {
    point:{
    x:1906,
    y:1069
},
    radius:5.0,
    color:{
    r:39,
    g:79,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape96 = {
    point:{
    x:1402,
    y:37
},
    radius:5.0,
    color:{
    r:164,
    g:137,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape97 = {
    point:{
    x:463,
    y:918
},
    radius:5.0,
    color:{
    r:188,
    g:137,
    b:158
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape98 = {
    point:{
    x:1655,
    y:434
},
    radius:5.0,
    color:{
    r:10,
    g:2,
    b:102
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape99 = {
    point:{
    x:835,
    y:0
},
    radius:5.0,
    color:{
    r:43,
    g:101,
    b:239
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape100 = {
    point:{
    x:1311,
    y:1033
},
    radius:5.0,
    color:{
    r:53,
    g:56,
    b:151
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape101 = {
    point:{
    x:739,
    y:843
},
    radius:5.0,
    color:{
    r:0,
    g:242,
    b:205
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape102 = {
    point:{
    x:864,
    y:266
},
    radius:5.0,
    color:{
    r:11,
    g:56,
    b:241
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape103 = {
    point:{
    x:1661,
    y:965
},
    radius:5.0,
    color:{
    r:239,
    g:92,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape104 = {
    point:{
    x:133,
    y:538
},
    radius:5.0,
    color:{
    r:185,
    g:154,
    b:133
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape105 = {
    point:{
    x:1120,
    y:500
},
    radius:5.0,
    color:{
    r:171,
    g:239,
    b:219
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape106 = {
    point:{
    x:559,
    y:565
},
    radius:5.0,
    color:{
    r:53,
    g:185,
    b:187
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape107 = {
    point:{
    x:1216,
    y:531
},
    radius:5.0,
    color:{
    r:171,
    g:237,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape108 = {
    point:{
    x:55,
    y:116
},
    radius:5.0,
    color:{
    r:117,
    g:149,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape109 = {
    point:{
    x:761,
    y:344
},
    radius:5.0,
    color:{
    r:219,
    g:186,
    b:152
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape110 = {
    point:{
    x:264,
    y:153
},
    radius:5.0,
    color:{
    r:92,
    g:25,
    b:151
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape111 = {
    point:{
    x:1423,
    y:1001
},
    radius:5.0,
    color:{
    r:83,
    g:250,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape112 = {
    point:{
    x:1767,
    y:935
},
    radius:5.0,
    color:{
    r:206,
    g:122,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape113 = {
    point:{
    x:243,
    y:905
},
    radius:5.0,
    color:{
    r:117,
    g:236,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape114 = {
    point:{
    x:584,
    y:652
},
    radius:5.0,
    color:{
    r:228,
    g:19,
    b:110
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape115 = {
    point:{
    x:1225,
    y:882
},
    radius:5.0,
    color:{
    r:187,
    g:17,
    b:241
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape116 = {
    point:{
    x:1644,
    y:905
},
    radius:5.0,
    color:{
    r:3,
    g:210,
    b:84
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape117 = {
    point:{
    x:1148,
    y:160
},
    radius:5.0,
    color:{
    r:234,
    g:1,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape118 = {
    point:{
    x:698,
    y:754
},
    radius:5.0,
    color:{
    r:67,
    g:173,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape119 = {
    point:{
    x:1212,
    y:726
},
    radius:5.0,
    color:{
    r:23,
    g:28,
    b:37
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape120 = {
    point:{
    x:754,
    y:821
},
    radius:5.0,
    color:{
    r:54,
    g:72,
    b:112
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape121 = {
    point:{
    x:1671,
    y:847
},
    radius:5.0,
    color:{
    r:117,
    g:7,
    b:218
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape122 = {
    point:{
    x:941,
    y:905
},
    radius:5.0,
    color:{
    r:11,
    g:224,
    b:246
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape123 = {
    point:{
    x:1028,
    y:210
},
    radius:5.0,
    color:{
    r:17,
    g:198,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape124 = {
    point:{
    x:602,
    y:862
},
    radius:5.0,
    color:{
    r:42,
    g:225,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape125 = {
    point:{
    x:1293,
    y:661
},
    radius:5.0,
    color:{
    r:250,
    g:241,
    b:116
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape126 = {
    point:{
    x:5,
    y:672
},
    radius:5.0,
    color:{
    r:65,
    g:154,
    b:93
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape127 = {
    point:{
    x:631,
    y:875
},
    radius:5.0,
    color:{
    r:40,
    g:13,
    b:119
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape128 = {
    point:{
    x:1308,
    y:495
},
    radius:5.0,
    color:{
    r:182,
    g:202,
    b:42
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape129 = {
    point:{
    x:1077,
    y:24
},
    radius:5.0,
    color:{
    r:45,
    g:150,
    b:223
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape130 = {
    point:{
    x:30,
    y:830
},
    radius:5.0,
    color:{
    r:63,
    g:139,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape131 = {
    point:{
    x:1848,
    y:650
},
    radius:5.0,
    color:{
    r:136,
    g:128,
    b:170
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape132 = {
    point:{
    x:1088,
    y:1018
},
    radius:5.0,
    color:{
    r:78,
    g:78,
    b:254
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape133 = {
    point:{
    x:144,
    y:321
},
    radius:5.0,
    color:{
    r:156,
    g:254,
    b:112
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape134 = {
    point:{
    x:585,
    y:325
},
    radius:5.0,
    color:{
    r:26,
    g:46,
    b:186
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape135 = {
    point:{
    x:1374,
    y:259
},
    radius:5.0,
    color:{
    r:45,
    g:147,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape136 = {
    point:{
    x:32,
    y:653
},
    radius:5.0,
    color:{
    r:17,
    g:252,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape137 = {
    point:{
    x:47,
    y:1075
},
    radius:5.0,
    color:{
    r:64,
    g:107,
    b:34
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape138 = {
    point:{
    x:866,
    y:459
},
    radius:5.0,
    color:{
    r:173,
    g:253,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape139 = {
    point:{
    x:1357,
    y:102
},
    radius:5.0,
    color:{
    r:97,
    g:159,
    b:141
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape140 = {
    point:{
    x:506,
    y:553
},
    radius:5.0,
    color:{
    r:150,
    g:108,
    b:182
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape141 = {
    point:{
    x:1891,
    y:36
},
    radius:5.0,
    color:{
    r:166,
    g:1,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape142 = {
    point:{
    x:963,
    y:2
},
    radius:5.0,
    color:{
    r:45,
    g:253,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape143 = {
    point:{
    x:183,
    y:884
},
    radius:5.0,
    color:{
    r:192,
    g:121,
    b:192
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape144 = {
    point:{
    x:1763,
    y:319
},
    radius:5.0,
    color:{
    r:53,
    g:53,
    b:196
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape145 = {
    point:{
    x:754,
    y:338
},
    radius:5.0,
    color:{
    r:20,
    g:28,
    b:239
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape146 = {
    point:{
    x:730,
    y:84
},
    radius:5.0,
    color:{
    r:160,
    g:242,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape147 = {
    point:{
    x:1188,
    y:255
},
    radius:5.0,
    color:{
    r:96,
    g:173,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape148 = {
    point:{
    x:650,
    y:1004
},
    radius:5.0,
    color:{
    r:252,
    g:223,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape149 = {
    point:{
    x:5,
    y:114
},
    radius:5.0,
    color:{
    r:125,
    g:181,
    b:18
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape150 = {
    point:{
    x:1620,
    y:743
},
    radius:5.0,
    color:{
    r:113,
    g:149,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape151 = {
    point:{
    x:39,
    y:1077
},
    radius:5.0,
    color:{
    r:43,
    g:101,
    b:186
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape152 = {
    point:{
    x:1829,
    y:687
},
    radius:5.0,
    color:{
    r:49,
    g:90,
    b:89
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape153 = {
    point:{
    x:634,
    y:579
},
    radius:5.0,
    color:{
    r:191,
    g:212,
    b:250
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape154 = {
    point:{
    x:41,
    y:863
},
    radius:5.0,
    color:{
    r:123,
    g:103,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape155 = {
    point:{
    x:982,
    y:990
},
    radius:5.0,
    color:{
    r:185,
    g:152,
    b:188
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape156 = {
    point:{
    x:1017,
    y:801
},
    radius:5.0,
    color:{
    r:10,
    g:223,
    b:45
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape157 = {
    point:{
    x:521,
    y:558
},
    radius:5.0,
    color:{
    r:188,
    g:170,
    b:76
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape158 = {
    point:{
    x:1564,
    y:307
},
    radius:5.0,
    color:{
    r:41,
    g:161,
    b:141
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape159 = {
    point:{
    x:848,
    y:70
},
    radius:5.0,
    color:{
    r:70,
    g:194,
    b:219
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape160 = {
    point:{
    x:1297,
    y:899
},
    radius:5.0,
    color:{
    r:104,
    g:70,
    b:199
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape161 = {
    point:{
    x:1137,
    y:54
},
    radius:5.0,
    color:{
    r:204,
    g:94,
    b:242
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape162 = {
    point:{
    x:1794,
    y:516
},
    radius:5.0,
    color:{
    r:102,
    g:4,
    b:55
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape163 = {
    point:{
    x:138,
    y:660
},
    radius:5.0,
    color:{
    r:27,
    g:142,
    b:21
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape164 = {
    point:{
    x:1090,
    y:334
},
    radius:5.0,
    color:{
    r:249,
    g:1,
    b:45
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape165 = {
    point:{
    x:798,
    y:1047
},
    radius:5.0,
    color:{
    r:74,
    g:1,
    b:8
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape166 = {
    point:{
    x:1208,
    y:430
},
    radius:5.0,
    color:{
    r:46,
    g:10,
    b:43
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape167 = {
    point:{
    x:1168,
    y:169
},
    radius:5.0,
    color:{
    r:1,
    g:151,
    b:242
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape168 = {
    point:{
    x:504,
    y:479
},
    radius:5.0,
    color:{
    r:82,
    g:251,
    b:212
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape169 = {
    point:{
    x:1493,
    y:97
},
    radius:5.0,
    color:{
    r:181,
    g:31,
    b:186
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape170 = {
    point:{
    x:767,
    y:713
},
    radius:5.0,
    color:{
    r:159,
    g:244,
    b:92
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape171 = {
    point:{
    x:800,
    y:142
},
    radius:5.0,
    color:{
    r:102,
    g:215,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape172 = {
    point:{
    x:1015,
    y:973
},
    radius:5.0,
    color:{
    r:48,
    g:213,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape173 = {
    point:{
    x:619,
    y:991
},
    radius:5.0,
    color:{
    r:15,
    g:247,
    b:151
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape174 = {
    point:{
    x:923,
    y:317
},
    radius:5.0,
    color:{
    r:124,
    g:181,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape175 = {
    point:{
    x:1214,
    y:378
},
    radius:5.0,
    color:{
    r:26,
    g:186,
    b:24
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape176 = {
    point:{
    x:169,
    y:655
},
    radius:5.0,
    color:{
    r:137,
    g:132,
    b:96
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape177 = {
    point:{
    x:834,
    y:648
},
    radius:5.0,
    color:{
    r:214,
    g:145,
    b:244
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape178 = {
    point:{
    x:1394,
    y:477
},
    radius:5.0,
    color:{
    r:123,
    g:90,
    b:39
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape179 = {
    point:{
    x:896,
    y:231
},
    radius:5.0,
    color:{
    r:40,
    g:186,
    b:187
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape180 = {
    point:{
    x:1730,
    y:619
},
    radius:5.0,
    color:{
    r:47,
    g:114,
    b:68
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape181 = {
    point:{
    x:843,
    y:867
},
    radius:5.0,
    color:{
    r:17,
    g:72,
    b:103
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape182 = {
    point:{
    x:685,
    y:338
},
    radius:5.0,
    color:{
    r:209,
    g:77,
    b:90
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape183 = {
    point:{
    x:1077,
    y:121
},
    radius:5.0,
    color:{
    r:45,
    g:118,
    b:196
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape184 = {
    point:{
    x:1011,
    y:333
},
    radius:5.0,
    color:{
    r:128,
    g:98,
    b:101
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape185 = {
    point:{
    x:339,
    y:39
},
    radius:5.0,
    color:{
    r:251,
    g:121,
    b:203
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape186 = {
    point:{
    x:839,
    y:110
},
    radius:5.0,
    color:{
    r:219,
    g:205,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape187 = {
    point:{
    x:1871,
    y:769
},
    radius:5.0,
    color:{
    r:167,
    g:44,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape188 = {
    point:{
    x:897,
    y:939
},
    radius:5.0,
    color:{
    r:25,
    g:26,
    b:79
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape189 = {
    point:{
    x:341,
    y:137
},
    radius:5.0,
    color:{
    r:222,
    g:156,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape190 = {
    point:{
    x:1764,
    y:1076
},
    radius:5.0,
    color:{
    r:205,
    g:231,
    b:26
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape191 = {
    point:{
    x:697,
    y:766
},
    radius:5.0,
    color:{
    r:238,
    g:107,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape192 = {
    point:{
    x:1392,
    y:363
},
    radius:5.0,
    color:{
    r:139,
    g:207,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape193 = {
    point:{
    x:556,
    y:946
},
    radius:5.0,
    color:{
    r:10,
    g:26,
    b:111
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape194 = {
    point:{
    x:1880,
    y:255
},
    radius:5.0,
    color:{
    r:117,
    g:146,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape195 = {
    point:{
    x:147,
    y:249
},
    radius:5.0,
    color:{
    r:221,
    g:29,
    b:87
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape196 = {
    point:{
    x:1788,
    y:964
},
    radius:5.0,
    color:{
    r:50,
    g:85,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape197 = {
    point:{
    x:981,
    y:840
},
    radius:5.0,
    color:{
    r:197,
    g:151,
    b:36
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape198 = {
    point:{
    x:1870,
    y:376
},
    radius:5.0,
    color:{
    r:235,
    g:99,
    b:243
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape199 = {
    point:{
    x:1509,
    y:1000
},
    radius:5.0,
    color:{
    r:225,
    g:73,
    b:246
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape200 = {
    point:{
    x:317,
    y:673
},
    radius:5.0,
    color:{
    r:65,
    g:139,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape201 = {
    point:{
    x:954,
    y:187
},
    radius:5.0,
    color:{
    r:136,
    g:142,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape202 = {
    point:{
    x:1736,
    y:756
},
    radius:5.0,
    color:{
    r:117,
    g:120,
    b:7
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape203 = {
    point:{
    x:1158,
    y:1033
},
    radius:5.0,
    color:{
    r:153,
    g:223,
    b:72
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape204 = {
    point:{
    x:810,
    y:784
},
    radius:5.0,
    color:{
    r:12,
    g:234,
    b:61
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape205 = {
    point:{
    x:1165,
    y:844
},
    radius:5.0,
    color:{
    r:145,
    g:181,
    b:110
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape206 = {
    point:{
    x:558,
    y:209
},
    radius:5.0,
    color:{
    r:223,
    g:77,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape207 = {
    point:{
    x:603,
    y:1041
},
    radius:5.0,
    color:{
    r:47,
    g:148,
    b:95
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape208 = {
    point:{
    x:545,
    y:119
},
    radius:5.0,
    color:{
    r:148,
    g:63,
    b:241
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape209 = {
    point:{
    x:846,
    y:696
},
    radius:5.0,
    color:{
    r:162,
    g:118,
    b:208
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape210 = {
    point:{
    x:1539,
    y:642
},
    radius:5.0,
    color:{
    r:232,
    g:198,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape211 = {
    point:{
    x:558,
    y:1034
},
    radius:5.0,
    color:{
    r:78,
    g:235,
    b:38
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape212 = {
    point:{
    x:38,
    y:459
},
    radius:5.0,
    color:{
    r:159,
    g:190,
    b:45
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape213 = {
    point:{
    x:788,
    y:284
},
    radius:5.0,
    color:{
    r:237,
    g:245,
    b:180
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape214 = {
    point:{
    x:413,
    y:301
},
    radius:5.0,
    color:{
    r:201,
    g:106,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape215 = {
    point:{
    x:327,
    y:941
},
    radius:5.0,
    color:{
    r:25,
    g:25,
    b:122
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape216 = {
    point:{
    x:96,
    y:746
},
    radius:5.0,
    color:{
    r:65,
    g:214,
    b:150
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape217 = {
    point:{
    x:1747,
    y:921
},
    radius:5.0,
    color:{
    r:26,
    g:19,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape218 = {
    point:{
    x:1293,
    y:994
},
    radius:5.0,
    color:{
    r:76,
    g:16,
    b:5
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape219 = {
    point:{
    x:206,
    y:453
},
    radius:5.0,
    color:{
    r:173,
    g:132,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape220 = {
    point:{
    x:1855,
    y:968
},
    radius:5.0,
    color:{
    r:201,
    g:129,
    b:14
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape221 = {
    point:{
    x:207,
    y:53
},
    radius:5.0,
    color:{
    r:8,
    g:113,
    b:215
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape222 = {
    point:{
    x:921,
    y:67
},
    radius:5.0,
    color:{
    r:101,
    g:19,
    b:162
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape223 = {
    point:{
    x:1702,
    y:466
},
    radius:5.0,
    color:{
    r:179,
    g:60,
    b:32
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape224 = {
    point:{
    x:574,
    y:649
},
    radius:5.0,
    color:{
    r:56,
    g:226,
    b:235
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape225 = {
    point:{
    x:417,
    y:88
},
    radius:5.0,
    color:{
    r:50,
    g:151,
    b:108
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape226 = {
    point:{
    x:1054,
    y:60
},
    radius:5.0,
    color:{
    r:87,
    g:189,
    b:37
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape227 = {
    point:{
    x:1176,
    y:791
},
    radius:5.0,
    color:{
    r:87,
    g:44,
    b:220
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape228 = {
    point:{
    x:624,
    y:81
},
    radius:5.0,
    color:{
    r:158,
    g:229,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape229 = {
    point:{
    x:855,
    y:386
},
    radius:5.0,
    color:{
    r:152,
    g:219,
    b:111
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape230 = {
    point:{
    x:1637,
    y:402
},
    radius:5.0,
    color:{
    r:218,
    g:215,
    b:43
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape231 = {
    point:{
    x:608,
    y:29
},
    radius:5.0,
    color:{
    r:211,
    g:172,
    b:220
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape232 = {
    point:{
    x:801,
    y:47
},
    radius:5.0,
    color:{
    r:64,
    g:186,
    b:86
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape233 = {
    point:{
    x:1409,
    y:1045
},
    radius:5.0,
    color:{
    r:53,
    g:220,
    b:253
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape234 = {
    point:{
    x:1728,
    y:238
},
    radius:5.0,
    color:{
    r:143,
    g:182,
    b:87
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape235 = {
    point:{
    x:1918,
    y:104
},
    radius:5.0,
    color:{
    r:25,
    g:46,
    b:9
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape236 = {
    point:{
    x:683,
    y:739
},
    radius:5.0,
    color:{
    r:28,
    g:188,
    b:232
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape237 = {
    point:{
    x:1053,
    y:832
},
    radius:5.0,
    color:{
    r:108,
    g:217,
    b:131
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape238 = {
    point:{
    x:1373,
    y:398
},
    radius:5.0,
    color:{
    r:13,
    g:201,
    b:214
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape239 = {
    point:{
    x:47,
    y:152
},
    radius:5.0,
    color:{
    r:2,
    g:184,
    b:88
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape240 = {
    point:{
    x:150,
    y:74
},
    radius:5.0,
    color:{
    r:183,
    g:42,
    b:182
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape241 = {
    point:{
    x:887,
    y:493
},
    radius:5.0,
    color:{
    r:149,
    g:149,
    b:254
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape242 = {
    point:{
    x:737,
    y:280
},
    radius:5.0,
    color:{
    r:229,
    g:76,
    b:31
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape243 = {
    point:{
    x:191,
    y:726
},
    radius:5.0,
    color:{
    r:220,
    g:112,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape244 = {
    point:{
    x:112,
    y:569
},
    radius:5.0,
    color:{
    r:221,
    g:53,
    b:13
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape245 = {
    point:{
    x:1118,
    y:781
},
    radius:5.0,
    color:{
    r:116,
    g:118,
    b:183
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape246 = {
    point:{
    x:1691,
    y:228
},
    radius:5.0,
    color:{
    r:204,
    g:87,
    b:5
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape247 = {
    point:{
    x:772,
    y:452
},
    radius:5.0,
    color:{
    r:233,
    g:202,
    b:35
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape248 = {
    point:{
    x:347,
    y:664
},
    radius:5.0,
    color:{
    r:34,
    g:245,
    b:62
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape249 = {
    point:{
    x:214,
    y:56
},
    radius:5.0,
    color:{
    r:174,
    g:137,
    b:28
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape250 = {
    point:{
    x:522,
    y:502
},
    radius:5.0,
    color:{
    r:46,
    g:238,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape251 = {
    point:{
    x:104,
    y:576
},
    radius:5.0,
    color:{
    r:121,
    g:174,
    b:91
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape252 = {
    point:{
    x:1264,
    y:353
},
    radius:5.0,
    color:{
    r:231,
    g:28,
    b:250
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape253 = {
    point:{
    x:435,
    y:525
},
    radius:5.0,
    color:{
    r:123,
    g:184,
    b:177
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape254 = {
    point:{
    x:1624,
    y:511
},
    radius:5.0,
    color:{
    r:150,
    g:106,
    b:197
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape255 = {
    point:{
    x:980,
    y:973
},
    radius:5.0,
    color:{
    r:147,
    g:168,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape256 = {
    point:{
    x:299,
    y:131
},
    radius:5.0,
    color:{
    r:112,
    g:229,
    b:188
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape257 = {
    point:{
    x:1138,
    y:98
},
    radius:5.0,
    color:{
    r:14,
    g:44,
    b:179
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape258 = {
    point:{
    x:1027,
    y:308
},
    radius:5.0,
    color:{
    r:154,
    g:80,
    b:192
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape259 = {
    point:{
    x:1039,
    y:295
},
    radius:5.0,
    color:{
    r:87,
    g:93,
    b:119
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape260 = {
    point:{
    x:1693,
    y:826
},
    radius:5.0,
    color:{
    r:89,
    g:39,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape261 = {
    point:{
    x:1902,
    y:103
},
    radius:5.0,
    color:{
    r:188,
    g:56,
    b:227
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape262 = {
    point:{
    x:1815,
    y:421
},
    radius:5.0,
    color:{
    r:188,
    g:24,
    b:71
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape263 = {
    point:{
    x:870,
    y:988
},
    radius:5.0,
    color:{
    r:14,
    g:43,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape264 = {
    point:{
    x:1146,
    y:966
},
    radius:5.0,
    color:{
    r:68,
    g:138,
    b:12
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape265 = {
    point:{
    x:1622,
    y:419
},
    radius:5.0,
    color:{
    r:190,
    g:148,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape266 = {
    point:{
    x:443,
    y:811
},
    radius:5.0,
    color:{
    r:25,
    g:190,
    b:37
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape267 = {
    point:{
    x:586,
    y:861
},
    radius:5.0,
    color:{
    r:253,
    g:60,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape268 = {
    point:{
    x:52,
    y:12
},
    radius:5.0,
    color:{
    r:76,
    g:163,
    b:223
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape269 = {
    point:{
    x:968,
    y:490
},
    radius:5.0,
    color:{
    r:17,
    g:162,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape270 = {
    point:{
    x:513,
    y:978
},
    radius:5.0,
    color:{
    r:58,
    g:18,
    b:101
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape271 = {
    point:{
    x:1915,
    y:458
},
    radius:5.0,
    color:{
    r:145,
    g:196,
    b:161
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape272 = {
    point:{
    x:1540,
    y:345
},
    radius:5.0,
    color:{
    r:44,
    g:126,
    b:171
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape273 = {
    point:{
    x:1358,
    y:198
},
    radius:5.0,
    color:{
    r:8,
    g:208,
    b:153
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape274 = {
    point:{
    x:1606,
    y:242
},
    radius:5.0,
    color:{
    r:47,
    g:49,
    b:179
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape275 = {
    point:{
    x:1380,
    y:870
},
    radius:5.0,
    color:{
    r:251,
    g:209,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape276 = {
    point:{
    x:1864,
    y:968
},
    radius:5.0,
    color:{
    r:219,
    g:181,
    b:116
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape277 = {
    point:{
    x:459,
    y:430
},
    radius:5.0,
    color:{
    r:14,
    g:100,
    b:141
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
    y:908
},
    radius:5.0,
    color:{
    r:71,
    g:223,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape279 = {
    point:{
    x:282,
    y:292
},
    radius:5.0,
    color:{
    r:25,
    g:11,
    b:195
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape280 = {
    point:{
    x:914,
    y:178
},
    radius:5.0,
    color:{
    r:17,
    g:71,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape281 = {
    point:{
    x:365,
    y:7
},
    radius:5.0,
    color:{
    r:247,
    g:12,
    b:16
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape282 = {
    point:{
    x:394,
    y:194
},
    radius:5.0,
    color:{
    r:18,
    g:17,
    b:222
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape283 = {
    point:{
    x:86,
    y:1055
},
    radius:5.0,
    color:{
    r:12,
    g:171,
    b:116
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape284 = {
    point:{
    x:625,
    y:841
},
    radius:5.0,
    color:{
    r:199,
    g:130,
    b:119
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape285 = {
    point:{
    x:1186,
    y:830
},
    radius:5.0,
    color:{
    r:160,
    g:133,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape286 = {
    point:{
    x:1034,
    y:1078
},
    radius:5.0,
    color:{
    r:53,
    g:158,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape287 = {
    point:{
    x:1136,
    y:100
},
    radius:5.0,
    color:{
    r:118,
    g:92,
    b:68
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape288 = {
    point:{
    x:538,
    y:702
},
    radius:5.0,
    color:{
    r:8,
    g:5,
    b:196
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape289 = {
    point:{
    x:1498,
    y:954
},
    radius:5.0,
    color:{
    r:132,
    g:223,
    b:152
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape290 = {
    point:{
    x:842,
    y:709
},
    radius:5.0,
    color:{
    r:144,
    g:81,
    b:62
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape291 = {
    point:{
    x:787,
    y:399
},
    radius:5.0,
    color:{
    r:11,
    g:225,
    b:63
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape292 = {
    point:{
    x:1037,
    y:498
},
    radius:5.0,
    color:{
    r:216,
    g:114,
    b:140
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape293 = {
    point:{
    x:923,
    y:622
},
    radius:5.0,
    color:{
    r:216,
    g:243,
    b:138
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape294 = {
    point:{
    x:814,
    y:198
},
    radius:5.0,
    color:{
    r:23,
    g:168,
    b:15
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape295 = {
    point:{
    x:1511,
    y:936
},
    radius:5.0,
    color:{
    r:167,
    g:236,
    b:95
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape296 = {
    point:{
    x:106,
    y:263
},
    radius:5.0,
    color:{
    r:206,
    g:255,
    b:124
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape297 = {
    point:{
    x:1350,
    y:589
},
    radius:5.0,
    color:{
    r:60,
    g:212,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape298 = {
    point:{
    x:1072,
    y:915
},
    radius:5.0,
    color:{
    r:3,
    g:4,
    b:144
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape299 = {
    point:{
    x:480,
    y:772
},
    radius:5.0,
    color:{
    r:220,
    g:250,
    b:182
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape300 = {
    point:{
    x:370,
    y:379
},
    radius:5.0,
    color:{
    r:146,
    g:190,
    b:2
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape301 = {
    point:{
    x:1716,
    y:312
},
    radius:5.0,
    color:{
    r:139,
    g:234,
    b:119
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape302 = {
    point:{
    x:1590,
    y:367
},
    radius:5.0,
    color:{
    r:63,
    g:49,
    b:46
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape303 = {
    point:{
    x:631,
    y:768
},
    radius:5.0,
    color:{
    r:16,
    g:81,
    b:142
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape304 = {
    point:{
    x:465,
    y:761
},
    radius:5.0,
    color:{
    r:75,
    g:0,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape305 = {
    point:{
    x:1351,
    y:30
},
    radius:5.0,
    color:{
    r:193,
    g:51,
    b:237
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape306 = {
    point:{
    x:196,
    y:875
},
    radius:5.0,
    color:{
    r:221,
    g:83,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape307 = {
    point:{
    x:1572,
    y:47
},
    radius:5.0,
    color:{
    r:12,
    g:57,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape308 = {
    point:{
    x:1700,
    y:451
},
    radius:5.0,
    color:{
    r:203,
    g:192,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape309 = {
    point:{
    x:165,
    y:213
},
    radius:5.0,
    color:{
    r:56,
    g:33,
    b:52
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape310 = {
    point:{
    x:251,
    y:929
},
    radius:5.0,
    color:{
    r:91,
    g:143,
    b:211
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape311 = {
    point:{
    x:1224,
    y:995
},
    radius:5.0,
    color:{
    r:32,
    g:237,
    b:6
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape312 = {
    point:{
    x:1657,
    y:987
},
    radius:5.0,
    color:{
    r:115,
    g:223,
    b:78
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape313 = {
    point:{
    x:299,
    y:826
},
    radius:5.0,
    color:{
    r:104,
    g:87,
    b:168
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape314 = {
    point:{
    x:1352,
    y:649
},
    radius:5.0,
    color:{
    r:49,
    g:236,
    b:120
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape315 = {
    point:{
    x:1134,
    y:319
},
    radius:5.0,
    color:{
    r:154,
    g:189,
    b:163
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape316 = {
    point:{
    x:444,
    y:453
},
    radius:5.0,
    color:{
    r:231,
    g:95,
    b:222
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape317 = {
    point:{
    x:1551,
    y:27
},
    radius:5.0,
    color:{
    r:59,
    g:103,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape318 = {
    point:{
    x:301,
    y:146
},
    radius:5.0,
    color:{
    r:214,
    g:21,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape319 = {
    point:{
    x:435,
    y:610
},
    radius:5.0,
    color:{
    r:1,
    g:84,
    b:198
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape320 = {
    point:{
    x:496,
    y:19
},
    radius:5.0,
    color:{
    r:235,
    g:66,
    b:78
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape321 = {
    point:{
    x:582,
    y:483
},
    radius:5.0,
    color:{
    r:195,
    g:1,
    b:211
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape322 = {
    point:{
    x:1429,
    y:443
},
    radius:5.0,
    color:{
    r:191,
    g:139,
    b:179
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape323 = {
    point:{
    x:136,
    y:672
},
    radius:5.0,
    color:{
    r:190,
    g:7,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape324 = {
    point:{
    x:656,
    y:657
},
    radius:5.0,
    color:{
    r:175,
    g:250,
    b:186
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape325 = {
    point:{
    x:711,
    y:62
},
    radius:5.0,
    color:{
    r:136,
    g:116,
    b:23
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape326 = {
    point:{
    x:147,
    y:709
},
    radius:5.0,
    color:{
    r:76,
    g:170,
    b:74
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape327 = {
    point:{
    x:723,
    y:876
},
    radius:5.0,
    color:{
    r:8,
    g:91,
    b:86
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape328 = {
    point:{
    x:391,
    y:735
},
    radius:5.0,
    color:{
    r:4,
    g:107,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape329 = {
    point:{
    x:683,
    y:1030
},
    radius:5.0,
    color:{
    r:168,
    g:150,
    b:203
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape330 = {
    point:{
    x:1573,
    y:817
},
    radius:5.0,
    color:{
    r:144,
    g:32,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape331 = {
    point:{
    x:1746,
    y:1005
},
    radius:5.0,
    color:{
    r:10,
    g:114,
    b:32
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape332 = {
    point:{
    x:1244,
    y:717
},
    radius:5.0,
    color:{
    r:177,
    g:174,
    b:203
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape333 = {
    point:{
    x:959,
    y:491
},
    radius:5.0,
    color:{
    r:141,
    g:189,
    b:124
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape334 = {
    point:{
    x:514,
    y:307
},
    radius:5.0,
    color:{
    r:69,
    g:255,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape335 = {
    point:{
    x:131,
    y:461
},
    radius:5.0,
    color:{
    r:130,
    g:63,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape336 = {
    point:{
    x:1665,
    y:252
},
    radius:5.0,
    color:{
    r:255,
    g:145,
    b:105
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape337 = {
    point:{
    x:1590,
    y:681
},
    radius:5.0,
    color:{
    r:178,
    g:173,
    b:157
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape338 = {
    point:{
    x:1147,
    y:281
},
    radius:5.0,
    color:{
    r:27,
    g:52,
    b:142
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape339 = {
    point:{
    x:1471,
    y:476
},
    radius:5.0,
    color:{
    r:123,
    g:10,
    b:72
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape340 = {
    point:{
    x:1507,
    y:990
},
    radius:5.0,
    color:{
    r:106,
    g:192,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape341 = {
    point:{
    x:914,
    y:754
},
    radius:5.0,
    color:{
    r:12,
    g:253,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape342 = {
    point:{
    x:788,
    y:583
},
    radius:5.0,
    color:{
    r:125,
    g:89,
    b:93
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape343 = {
    point:{
    x:1166,
    y:958
},
    radius:5.0,
    color:{
    r:11,
    g:254,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape344 = {
    point:{
    x:121,
    y:127
},
    radius:5.0,
    color:{
    r:221,
    g:166,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape345 = {
    point:{
    x:1448,
    y:667
},
    radius:5.0,
    color:{
    r:50,
    g:1,
    b:229
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape346 = {
    point:{
    x:785,
    y:70
},
    radius:5.0,
    color:{
    r:251,
    g:102,
    b:134
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape347 = {
    point:{
    x:719,
    y:622
},
    radius:5.0,
    color:{
    r:182,
    g:4,
    b:34
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape348 = {
    point:{
    x:43,
    y:555
},
    radius:5.0,
    color:{
    r:147,
    g:196,
    b:29
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape349 = {
    point:{
    x:803,
    y:154
},
    radius:5.0,
    color:{
    r:11,
    g:29,
    b:109
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape350 = {
    point:{
    x:1184,
    y:240
},
    radius:5.0,
    color:{
    r:247,
    g:63,
    b:136
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape351 = {
    point:{
    x:906,
    y:443
},
    radius:5.0,
    color:{
    r:18,
    g:154,
    b:56
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape352 = {
    point:{
    x:1860,
    y:746
},
    radius:5.0,
    color:{
    r:78,
    g:29,
    b:190
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape353 = {
    point:{
    x:1833,
    y:823
},
    radius:5.0,
    color:{
    r:35,
    g:118,
    b:142
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape354 = {
    point:{
    x:1635,
    y:415
},
    radius:5.0,
    color:{
    r:209,
    g:215,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape355 = {
    point:{
    x:1897,
    y:822
},
    radius:5.0,
    color:{
    r:0,
    g:199,
    b:45
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape356 = {
    point:{
    x:1920,
    y:504
},
    radius:5.0,
    color:{
    r:228,
    g:23,
    b:191
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape357 = {
    point:{
    x:258,
    y:143
},
    radius:5.0,
    color:{
    r:179,
    g:75,
    b:109
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape358 = {
    point:{
    x:1675,
    y:318
},
    radius:5.0,
    color:{
    r:57,
    g:198,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape359 = {
    point:{
    x:1070,
    y:356
},
    radius:5.0,
    color:{
    r:250,
    g:9,
    b:244
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape360 = {
    point:{
    x:1286,
    y:407
},
    radius:5.0,
    color:{
    r:137,
    g:29,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape361 = {
    point:{
    x:660,
    y:141
},
    radius:5.0,
    color:{
    r:181,
    g:1,
    b:153
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape362 = {
    point:{
    x:1157,
    y:659
},
    radius:5.0,
    color:{
    r:55,
    g:37,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape363 = {
    point:{
    x:1657,
    y:27
},
    radius:5.0,
    color:{
    r:23,
    g:241,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape364 = {
    point:{
    x:1174,
    y:136
},
    radius:5.0,
    color:{
    r:179,
    g:148,
    b:227
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape365 = {
    point:{
    x:1586,
    y:49
},
    radius:5.0,
    color:{
    r:16,
    g:220,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape366 = {
    point:{
    x:645,
    y:893
},
    radius:5.0,
    color:{
    r:121,
    g:121,
    b:7
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape367 = {
    point:{
    x:257,
    y:399
},
    radius:5.0,
    color:{
    r:131,
    g:152,
    b:46
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape368 = {
    point:{
    x:1265,
    y:169
},
    radius:5.0,
    color:{
    r:127,
    g:115,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape369 = {
    point:{
    x:12,
    y:457
},
    radius:5.0,
    color:{
    r:238,
    g:239,
    b:54
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape370 = {
    point:{
    x:726,
    y:968
},
    radius:5.0,
    color:{
    r:197,
    g:238,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape371 = {
    point:{
    x:909,
    y:448
},
    radius:5.0,
    color:{
    r:241,
    g:143,
    b:179
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape372 = {
    point:{
    x:1688,
    y:345
},
    radius:5.0,
    color:{
    r:105,
    g:96,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape373 = {
    point:{
    x:1468,
    y:492
},
    radius:5.0,
    color:{
    r:147,
    g:149,
    b:233
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape374 = {
    point:{
    x:971,
    y:909
},
    radius:5.0,
    color:{
    r:185,
    g:5,
    b:90
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape375 = {
    point:{
    x:962,
    y:1004
},
    radius:5.0,
    color:{
    r:38,
    g:204,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape376 = {
    point:{
    x:683,
    y:775
},
    radius:5.0,
    color:{
    r:61,
    g:223,
    b:81
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape377 = {
    point:{
    x:1143,
    y:506
},
    radius:5.0,
    color:{
    r:153,
    g:243,
    b:8
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape378 = {
    point:{
    x:216,
    y:997
},
    radius:5.0,
    color:{
    r:104,
    g:151,
    b:108
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape379 = {
    point:{
    x:4,
    y:328
},
    radius:5.0,
    color:{
    r:166,
    g:131,
    b:146
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape380 = {
    point:{
    x:1845,
    y:792
},
    radius:5.0,
    color:{
    r:33,
    g:85,
    b:177
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape381 = {
    point:{
    x:50,
    y:1073
},
    radius:5.0,
    color:{
    r:227,
    g:124,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape382 = {
    point:{
    x:486,
    y:338
},
    radius:5.0,
    color:{
    r:67,
    g:40,
    b:22
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape383 = {
    point:{
    x:1592,
    y:970
},
    radius:5.0,
    color:{
    r:250,
    g:175,
    b:132
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape384 = {
    point:{
    x:401,
    y:70
},
    radius:5.0,
    color:{
    r:27,
    g:104,
    b:163
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape385 = {
    point:{
    x:246,
    y:802
},
    radius:5.0,
    color:{
    r:44,
    g:201,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape386 = {
    point:{
    x:1919,
    y:396
},
    radius:5.0,
    color:{
    r:227,
    g:55,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape387 = {
    point:{
    x:56,
    y:66
},
    radius:5.0,
    color:{
    r:11,
    g:84,
    b:244
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape388 = {
    point:{
    x:318,
    y:1055
},
    radius:5.0,
    color:{
    r:147,
    g:13,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape389 = {
    point:{
    x:1474,
    y:17
},
    radius:5.0,
    color:{
    r:251,
    g:36,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape390 = {
    point:{
    x:129,
    y:186
},
    radius:5.0,
    color:{
    r:158,
    g:84,
    b:228
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape391 = {
    point:{
    x:870,
    y:858
},
    radius:5.0,
    color:{
    r:195,
    g:34,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape392 = {
    point:{
    x:1755,
    y:936
},
    radius:5.0,
    color:{
    r:183,
    g:76,
    b:22
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape393 = {
    point:{
    x:719,
    y:738
},
    radius:5.0,
    color:{
    r:228,
    g:97,
    b:79
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape394 = {
    point:{
    x:985,
    y:135
},
    radius:5.0,
    color:{
    r:215,
    g:95,
    b:203
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape395 = {
    point:{
    x:1120,
    y:976
},
    radius:5.0,
    color:{
    r:17,
    g:31,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape396 = {
    point:{
    x:1024,
    y:421
},
    radius:5.0,
    color:{
    r:246,
    g:134,
    b:191
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape397 = {
    point:{
    x:324,
    y:362
},
    radius:5.0,
    color:{
    r:23,
    g:88,
    b:64
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape398 = {
    point:{
    x:402,
    y:1006
},
    radius:5.0,
    color:{
    r:17,
    g:11,
    b:215
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape399 = {
    point:{
    x:780,
    y:370
},
    radius:5.0,
    color:{
    r:230,
    g:158,
    b:83
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape400 = {
    point:{
    x:1725,
    y:195
},
    radius:5.0,
    color:{
    r:216,
    g:75,
    b:131
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape401 = {
    point:{
    x:817,
    y:816
},
    radius:5.0,
    color:{
    r:159,
    g:66,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape402 = {
    point:{
    x:805,
    y:1070
},
    radius:5.0,
    color:{
    r:145,
    g:6,
    b:83
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape403 = {
    point:{
    x:262,
    y:188
},
    radius:5.0,
    color:{
    r:121,
    g:74,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape404 = {
    point:{
    x:448,
    y:763
},
    radius:5.0,
    color:{
    r:19,
    g:102,
    b:145
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape405 = {
    point:{
    x:913,
    y:404
},
    radius:5.0,
    color:{
    r:167,
    g:48,
    b:89
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape406 = {
    point:{
    x:694,
    y:60
},
    radius:5.0,
    color:{
    r:252,
    g:160,
    b:205
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape407 = {
    point:{
    x:91,
    y:134
},
    radius:5.0,
    color:{
    r:61,
    g:58,
    b:102
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape408 = {
    point:{
    x:1827,
    y:264
},
    radius:5.0,
    color:{
    r:15,
    g:200,
    b:24
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape409 = {
    point:{
    x:1542,
    y:748
},
    radius:5.0,
    color:{
    r:67,
    g:216,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape410 = {
    point:{
    x:110,
    y:30
},
    radius:5.0,
    color:{
    r:154,
    g:155,
    b:84
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape411 = {
    point:{
    x:515,
    y:711
},
    radius:5.0,
    color:{
    r:8,
    g:165,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape412 = {
    point:{
    x:1868,
    y:1066
},
    radius:5.0,
    color:{
    r:114,
    g:164,
    b:9
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape413 = {
    point:{
    x:42,
    y:1007
},
    radius:5.0,
    color:{
    r:2,
    g:79,
    b:1
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape414 = {
    point:{
    x:71,
    y:985
},
    radius:5.0,
    color:{
    r:117,
    g:134,
    b:126
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape415 = {
    point:{
    x:1471,
    y:396
},
    radius:5.0,
    color:{
    r:38,
    g:1,
    b:161
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape416 = {
    point:{
    x:204,
    y:608
},
    radius:5.0,
    color:{
    r:130,
    g:93,
    b:208
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape417 = {
    point:{
    x:946,
    y:602
},
    radius:5.0,
    color:{
    r:72,
    g:191,
    b:88
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape418 = {
    point:{
    x:1113,
    y:697
},
    radius:5.0,
    color:{
    r:38,
    g:165,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape419 = {
    point:{
    x:458,
    y:622
},
    radius:5.0,
    color:{
    r:98,
    g:63,
    b:200
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape420 = {
    point:{
    x:1918,
    y:1074
},
    radius:5.0,
    color:{
    r:181,
    g:49,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape421 = {
    point:{
    x:628,
    y:678
},
    radius:5.0,
    color:{
    r:133,
    g:72,
    b:91
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape422 = {
    point:{
    x:1057,
    y:195
},
    radius:5.0,
    color:{
    r:249,
    g:158,
    b:94
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape423 = {
    point:{
    x:1838,
    y:930
},
    radius:5.0,
    color:{
    r:83,
    g:16,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape424 = {
    point:{
    x:998,
    y:868
},
    radius:5.0,
    color:{
    r:209,
    g:22,
    b:158
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape425 = {
    point:{
    x:271,
    y:1020
},
    radius:5.0,
    color:{
    r:47,
    g:176,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape426 = {
    point:{
    x:222,
    y:125
},
    radius:5.0,
    color:{
    r:135,
    g:65,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape427 = {
    point:{
    x:1760,
    y:723
},
    radius:5.0,
    color:{
    r:196,
    g:55,
    b:243
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape428 = {
    point:{
    x:902,
    y:329
},
    radius:5.0,
    color:{
    r:85,
    g:138,
    b:158
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape429 = {
    point:{
    x:1381,
    y:658
},
    radius:5.0,
    color:{
    r:142,
    g:75,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape430 = {
    point:{
    x:1900,
    y:930
},
    radius:5.0,
    color:{
    r:248,
    g:96,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape431 = {
    point:{
    x:1224,
    y:377
},
    radius:5.0,
    color:{
    r:140,
    g:123,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape432 = {
    point:{
    x:1038,
    y:955
},
    radius:5.0,
    color:{
    r:62,
    g:94,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape433 = {
    point:{
    x:674,
    y:302
},
    radius:5.0,
    color:{
    r:44,
    g:198,
    b:143
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape434 = {
    point:{
    x:683,
    y:298
},
    radius:5.0,
    color:{
    r:206,
    g:3,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape435 = {
    point:{
    x:1209,
    y:564
},
    radius:5.0,
    color:{
    r:153,
    g:155,
    b:34
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape436 = {
    point:{
    x:78,
    y:935
},
    radius:5.0,
    color:{
    r:231,
    g:53,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape437 = {
    point:{
    x:1007,
    y:390
},
    radius:5.0,
    color:{
    r:9,
    g:134,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape438 = {
    point:{
    x:1654,
    y:538
},
    radius:5.0,
    color:{
    r:203,
    g:53,
    b:110
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape439 = {
    point:{
    x:909,
    y:835
},
    radius:5.0,
    color:{
    r:119,
    g:106,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape440 = {
    point:{
    x:1867,
    y:820
},
    radius:5.0,
    color:{
    r:38,
    g:119,
    b:226
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape441 = {
    point:{
    x:1057,
    y:593
},
    radius:5.0,
    color:{
    r:244,
    g:245,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape442 = {
    point:{
    x:1394,
    y:26
},
    radius:5.0,
    color:{
    r:130,
    g:163,
    b:153
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape443 = {
    point:{
    x:364,
    y:680
},
    radius:5.0,
    color:{
    r:124,
    g:166,
    b:97
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape444 = {
    point:{
    x:1869,
    y:157
},
    radius:5.0,
    color:{
    r:251,
    g:244,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape445 = {
    point:{
    x:1271,
    y:2
},
    radius:5.0,
    color:{
    r:67,
    g:135,
    b:208
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape446 = {
    point:{
    x:1735,
    y:232
},
    radius:5.0,
    color:{
    r:215,
    g:45,
    b:146
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape447 = {
    point:{
    x:1473,
    y:906
},
    radius:5.0,
    color:{
    r:12,
    g:40,
    b:104
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape448 = {
    point:{
    x:367,
    y:130
},
    radius:5.0,
    color:{
    r:21,
    g:210,
    b:156
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape449 = {
    point:{
    x:1693,
    y:913
},
    radius:5.0,
    color:{
    r:238,
    g:36,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape450 = {
    point:{
    x:682,
    y:623
},
    radius:5.0,
    color:{
    r:180,
    g:150,
    b:13
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape451 = {
    point:{
    x:366,
    y:334
},
    radius:5.0,
    color:{
    r:204,
    g:101,
    b:88
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape452 = {
    point:{
    x:760,
    y:135
},
    radius:5.0,
    color:{
    r:227,
    g:77,
    b:71
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape453 = {
    point:{
    x:482,
    y:97
},
    radius:5.0,
    color:{
    r:215,
    g:132,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape454 = {
    point:{
    x:1056,
    y:716
},
    radius:5.0,
    color:{
    r:192,
    g:31,
    b:199
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape455 = {
    point:{
    x:1214,
    y:488
},
    radius:5.0,
    color:{
    r:252,
    g:86,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape456 = {
    point:{
    x:1358,
    y:816
},
    radius:5.0,
    color:{
    r:82,
    g:131,
    b:99
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape457 = {
    point:{
    x:402,
    y:828
},
    radius:5.0,
    color:{
    r:162,
    g:40,
    b:172
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape458 = {
    point:{
    x:1048,
    y:556
},
    radius:5.0,
    color:{
    r:70,
    g:183,
    b:230
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape459 = {
    point:{
    x:1513,
    y:768
},
    radius:5.0,
    color:{
    r:234,
    g:95,
    b:136
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape460 = {
    point:{
    x:100,
    y:1059
},
    radius:5.0,
    color:{
    r:253,
    g:52,
    b:95
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape461 = {
    point:{
    x:1258,
    y:231
},
    radius:5.0,
    color:{
    r:114,
    g:47,
    b:244
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape462 = {
    point:{
    x:1737,
    y:76
},
    radius:5.0,
    color:{
    r:223,
    g:104,
    b:60
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape463 = {
    point:{
    x:1618,
    y:572
},
    radius:5.0,
    color:{
    r:7,
    g:138,
    b:14
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape464 = {
    point:{
    x:761,
    y:136
},
    radius:5.0,
    color:{
    r:137,
    g:35,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape465 = {
    point:{
    x:457,
    y:618
},
    radius:5.0,
    color:{
    r:252,
    g:172,
    b:37
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape466 = {
    point:{
    x:1001,
    y:40
},
    radius:5.0,
    color:{
    r:50,
    g:194,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape467 = {
    point:{
    x:535,
    y:307
},
    radius:5.0,
    color:{
    r:11,
    g:8,
    b:199
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape468 = {
    point:{
    x:1919,
    y:820
},
    radius:5.0,
    color:{
    r:227,
    g:26,
    b:150
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape469 = {
    point:{
    x:1815,
    y:188
},
    radius:5.0,
    color:{
    r:248,
    g:160,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape470 = {
    point:{
    x:1596,
    y:244
},
    radius:5.0,
    color:{
    r:215,
    g:172,
    b:219
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape471 = {
    point:{
    x:512,
    y:650
},
    radius:5.0,
    color:{
    r:202,
    g:195,
    b:25
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape472 = {
    point:{
    x:1803,
    y:991
},
    radius:5.0,
    color:{
    r:27,
    g:149,
    b:21
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape473 = {
    point:{
    x:1131,
    y:871
},
    radius:5.0,
    color:{
    r:22,
    g:250,
    b:132
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape474 = {
    point:{
    x:698,
    y:22
},
    radius:5.0,
    color:{
    r:99,
    g:26,
    b:66
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape475 = {
    point:{
    x:1476,
    y:115
},
    radius:5.0,
    color:{
    r:93,
    g:176,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape476 = {
    point:{
    x:240,
    y:187
},
    radius:5.0,
    color:{
    r:223,
    g:81,
    b:28
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape477 = {
    point:{
    x:841,
    y:1018
},
    radius:5.0,
    color:{
    r:192,
    g:175,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape478 = {
    point:{
    x:862,
    y:310
},
    radius:5.0,
    color:{
    r:33,
    g:246,
    b:87
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape479 = {
    point:{
    x:345,
    y:612
},
    radius:5.0,
    color:{
    r:47,
    g:169,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape480 = {
    point:{
    x:170,
    y:937
},
    radius:5.0,
    color:{
    r:179,
    g:52,
    b:32
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape481 = {
    point:{
    x:1116,
    y:722
},
    radius:5.0,
    color:{
    r:81,
    g:29,
    b:59
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape482 = {
    point:{
    x:1784,
    y:536
},
    radius:5.0,
    color:{
    r:9,
    g:37,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape483 = {
    point:{
    x:425,
    y:632
},
    radius:5.0,
    color:{
    r:86,
    g:155,
    b:182
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape484 = {
    point:{
    x:713,
    y:872
},
    radius:5.0,
    color:{
    r:5,
    g:166,
    b:40
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape485 = {
    point:{
    x:187,
    y:462
},
    radius:5.0,
    color:{
    r:108,
    g:185,
    b:55
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape486 = {
    point:{
    x:1573,
    y:973
},
    radius:5.0,
    color:{
    r:94,
    g:25,
    b:110
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape487 = {
    point:{
    x:591,
    y:177
},
    radius:5.0,
    color:{
    r:191,
    g:141,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape488 = {
    point:{
    x:132,
    y:743
},
    radius:5.0,
    color:{
    r:186,
    g:236,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape489 = {
    point:{
    x:761,
    y:589
},
    radius:5.0,
    color:{
    r:126,
    g:251,
    b:105
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape490 = {
    point:{
    x:1444,
    y:744
},
    radius:5.0,
    color:{
    r:155,
    g:51,
    b:17
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape491 = {
    point:{
    x:1312,
    y:314
},
    radius:5.0,
    color:{
    r:33,
    g:74,
    b:86
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape492 = {
    point:{
    x:1736,
    y:513
},
    radius:5.0,
    color:{
    r:86,
    g:125,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape493 = {
    point:{
    x:101,
    y:874
},
    radius:5.0,
    color:{
    r:44,
    g:167,
    b:20
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape494 = {
    point:{
    x:914,
    y:790
},
    radius:5.0,
    color:{
    r:107,
    g:58,
    b:11
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape495 = {
    point:{
    x:1839,
    y:347
},
    radius:5.0,
    color:{
    r:156,
    g:156,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape496 = {
    point:{
    x:1085,
    y:1013
},
    radius:5.0,
    color:{
    r:93,
    g:148,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape497 = {
    point:{
    x:1466,
    y:308
},
    radius:5.0,
    color:{
    r:68,
    g:126,
    b:250
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape498 = {
    point:{
    x:1076,
    y:690
},
    radius:5.0,
    color:{
    r:226,
    g:21,
    b:250
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape499 = {
    point:{
    x:998,
    y:731
},
    radius:5.0,
    color:{
    r:170,
    g:250,
    b:11
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape500 = {
    point:{
    x:923,
    y:303
},
    radius:5.0,
    color:{
    r:93,
    g:106,
    b:128
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape501 = {
    point:{
    x:1286,
    y:640
},
    radius:5.0,
    color:{
    r:225,
    g:235,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape502 = {
    point:{
    x:510,
    y:555
},
    radius:5.0,
    color:{
    r:84,
    g:173,
    b:24
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape503 = {
    point:{
    x:1748,
    y:220
},
    radius:5.0,
    color:{
    r:63,
    g:39,
    b:34
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape504 = {
    point:{
    x:592,
    y:484
},
    radius:5.0,
    color:{
    r:53,
    g:237,
    b:42
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape505 = {
    point:{
    x:1237,
    y:623
},
    radius:5.0,
    color:{
    r:98,
    g:41,
    b:13
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape506 = {
    point:{
    x:169,
    y:285
},
    radius:5.0,
    color:{
    r:155,
    g:94,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape507 = {
    point:{
    x:1147,
    y:117
},
    radius:5.0,
    color:{
    r:249,
    g:136,
    b:13
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape508 = {
    point:{
    x:335,
    y:350
},
    radius:5.0,
    color:{
    r:43,
    g:134,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape509 = {
    point:{
    x:1356,
    y:225
},
    radius:5.0,
    color:{
    r:221,
    g:46,
    b:97
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape510 = {
    point:{
    x:827,
    y:804
},
    radius:5.0,
    color:{
    r:13,
    g:235,
    b:161
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape511 = {
    point:{
    x:161,
    y:655
},
    radius:5.0,
    color:{
    r:229,
    g:252,
    b:200
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape512 = {
    point:{
    x:446,
    y:685
},
    radius:5.0,
    color:{
    r:138,
    g:1,
    b:241
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape513 = {
    point:{
    x:1179,
    y:589
},
    radius:5.0,
    color:{
    r:19,
    g:16,
    b:103
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape514 = {
    point:{
    x:33,
    y:971
},
    radius:5.0,
    color:{
    r:122,
    g:21,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape515 = {
    point:{
    x:960,
    y:913
},
    radius:5.0,
    color:{
    r:106,
    g:134,
    b:89
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape516 = {
    point:{
    x:40,
    y:344
},
    radius:5.0,
    color:{
    r:43,
    g:213,
    b:214
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape517 = {
    point:{
    x:50,
    y:1064
},
    radius:5.0,
    color:{
    r:192,
    g:207,
    b:152
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape518 = {
    point:{
    x:836,
    y:337
},
    radius:5.0,
    color:{
    r:66,
    g:13,
    b:52
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape519 = {
    point:{
    x:859,
    y:27
},
    radius:5.0,
    color:{
    r:95,
    g:72,
    b:156
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape520 = {
    point:{
    x:200,
    y:603
},
    radius:5.0,
    color:{
    r:244,
    g:2,
    b:207
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape521 = {
    point:{
    x:1538,
    y:209
},
    radius:5.0,
    color:{
    r:171,
    g:225,
    b:76
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape522 = {
    point:{
    x:1515,
    y:771
},
    radius:5.0,
    color:{
    r:156,
    g:170,
    b:8
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape523 = {
    point:{
    x:1060,
    y:636
},
    radius:5.0,
    color:{
    r:218,
    g:170,
    b:83
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape524 = {
    point:{
    x:286,
    y:436
},
    radius:5.0,
    color:{
    r:16,
    g:171,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape525 = {
    point:{
    x:1816,
    y:695
},
    radius:5.0,
    color:{
    r:153,
    g:146,
    b:14
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape526 = {
    point:{
    x:1857,
    y:149
},
    radius:5.0,
    color:{
    r:53,
    g:60,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape527 = {
    point:{
    x:1438,
    y:48
},
    radius:5.0,
    color:{
    r:2,
    g:156,
    b:219
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape528 = {
    point:{
    x:238,
    y:546
},
    radius:5.0,
    color:{
    r:6,
    g:22,
    b:194
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape529 = {
    point:{
    x:1895,
    y:694
},
    radius:5.0,
    color:{
    r:111,
    g:224,
    b:33
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape530 = {
    point:{
    x:1115,
    y:1044
},
    radius:5.0,
    color:{
    r:20,
    g:69,
    b:119
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape531 = {
    point:{
    x:388,
    y:599
},
    radius:5.0,
    color:{
    r:164,
    g:48,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape532 = {
    point:{
    x:1602,
    y:1016
},
    radius:5.0,
    color:{
    r:207,
    g:240,
    b:97
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape533 = {
    point:{
    x:1001,
    y:589
},
    radius:5.0,
    color:{
    r:101,
    g:75,
    b:75
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape534 = {
    point:{
    x:1146,
    y:11
},
    radius:5.0,
    color:{
    r:252,
    g:71,
    b:240
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape535 = {
    point:{
    x:310,
    y:805
},
    radius:5.0,
    color:{
    r:16,
    g:225,
    b:107
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape536 = {
    point:{
    x:1786,
    y:283
},
    radius:5.0,
    color:{
    r:53,
    g:69,
    b:225
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape537 = {
    point:{
    x:1718,
    y:996
},
    radius:5.0,
    color:{
    r:146,
    g:184,
    b:120
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape538 = {
    point:{
    x:1358,
    y:215
},
    radius:5.0,
    color:{
    r:250,
    g:21,
    b:214
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape539 = {
    point:{
    x:412,
    y:621
},
    radius:5.0,
    color:{
    r:15,
    g:241,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape540 = {
    point:{
    x:1469,
    y:397
},
    radius:5.0,
    color:{
    r:54,
    g:208,
    b:194
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape541 = {
    point:{
    x:1532,
    y:1078
},
    radius:5.0,
    color:{
    r:91,
    g:110,
    b:215
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape542 = {
    point:{
    x:340,
    y:543
},
    radius:5.0,
    color:{
    r:25,
    g:150,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape543 = {
    point:{
    x:1897,
    y:238
},
    radius:5.0,
    color:{
    r:242,
    g:47,
    b:139
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape544 = {
    point:{
    x:1074,
    y:872
},
    radius:5.0,
    color:{
    r:132,
    g:22,
    b:133
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape545 = {
    point:{
    x:553,
    y:616
},
    radius:5.0,
    color:{
    r:34,
    g:211,
    b:64
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape546 = {
    point:{
    x:1206,
    y:200
},
    radius:5.0,
    color:{
    r:75,
    g:17,
    b:194
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape547 = {
    point:{
    x:1406,
    y:838
},
    radius:5.0,
    color:{
    r:205,
    g:16,
    b:244
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape548 = {
    point:{
    x:392,
    y:622
},
    radius:5.0,
    color:{
    r:184,
    g:130,
    b:128
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape549 = {
    point:{
    x:763,
    y:827
},
    radius:5.0,
    color:{
    r:82,
    g:92,
    b:184
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape550 = {
    point:{
    x:1530,
    y:652
},
    radius:5.0,
    color:{
    r:194,
    g:233,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape551 = {
    point:{
    x:1275,
    y:962
},
    radius:5.0,
    color:{
    r:71,
    g:31,
    b:89
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape552 = {
    point:{
    x:607,
    y:446
},
    radius:5.0,
    color:{
    r:157,
    g:7,
    b:123
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape553 = {
    point:{
    x:767,
    y:167
},
    radius:5.0,
    color:{
    r:148,
    g:33,
    b:174
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape554 = {
    point:{
    x:843,
    y:191
},
    radius:5.0,
    color:{
    r:20,
    g:217,
    b:218
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape555 = {
    point:{
    x:442,
    y:702
},
    radius:5.0,
    color:{
    r:53,
    g:233,
    b:30
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape556 = {
    point:{
    x:1511,
    y:971
},
    radius:5.0,
    color:{
    r:86,
    g:53,
    b:185
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape557 = {
    point:{
    x:773,
    y:239
},
    radius:5.0,
    color:{
    r:56,
    g:138,
    b:179
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape558 = {
    point:{
    x:1820,
    y:458
},
    radius:5.0,
    color:{
    r:182,
    g:175,
    b:54
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape559 = {
    point:{
    x:1156,
    y:342
},
    radius:5.0,
    color:{
    r:34,
    g:72,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape560 = {
    point:{
    x:585,
    y:855
},
    radius:5.0,
    color:{
    r:34,
    g:132,
    b:193
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape561 = {
    point:{
    x:1660,
    y:1073
},
    radius:5.0,
    color:{
    r:239,
    g:157,
    b:77
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape562 = {
    point:{
    x:1162,
    y:981
},
    radius:5.0,
    color:{
    r:124,
    g:187,
    b:170
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape563 = {
    point:{
    x:424,
    y:665
},
    radius:5.0,
    color:{
    r:80,
    g:182,
    b:184
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape564 = {
    point:{
    x:898,
    y:880
},
    radius:5.0,
    color:{
    r:148,
    g:94,
    b:121
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape565 = {
    point:{
    x:1304,
    y:869
},
    radius:5.0,
    color:{
    r:18,
    g:25,
    b:61
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape566 = {
    point:{
    x:901,
    y:591
},
    radius:5.0,
    color:{
    r:169,
    g:95,
    b:18
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape567 = {
    point:{
    x:702,
    y:239
},
    radius:5.0,
    color:{
    r:237,
    g:54,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape568 = {
    point:{
    x:346,
    y:600
},
    radius:5.0,
    color:{
    r:213,
    g:169,
    b:120
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape569 = {
    point:{
    x:76,
    y:66
},
    radius:5.0,
    color:{
    r:23,
    g:178,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape570 = {
    point:{
    x:1549,
    y:895
},
    radius:5.0,
    color:{
    r:19,
    g:89,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape571 = {
    point:{
    x:482,
    y:145
},
    radius:5.0,
    color:{
    r:15,
    g:222,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape572 = {
    point:{
    x:1576,
    y:774
},
    radius:5.0,
    color:{
    r:226,
    g:230,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape573 = {
    point:{
    x:278,
    y:87
},
    radius:5.0,
    color:{
    r:219,
    g:51,
    b:105
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape574 = {
    point:{
    x:1481,
    y:221
},
    radius:5.0,
    color:{
    r:68,
    g:196,
    b:53
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape575 = {
    point:{
    x:125,
    y:961
},
    radius:5.0,
    color:{
    r:105,
    g:126,
    b:62
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape576 = {
    point:{
    x:1634,
    y:54
},
    radius:5.0,
    color:{
    r:132,
    g:238,
    b:161
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape577 = {
    point:{
    x:1805,
    y:1029
},
    radius:5.0,
    color:{
    r:87,
    g:201,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape578 = {
    point:{
    x:767,
    y:102
},
    radius:5.0,
    color:{
    r:136,
    g:221,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape579 = {
    point:{
    x:670,
    y:309
},
    radius:5.0,
    color:{
    r:87,
    g:48,
    b:36
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape580 = {
    point:{
    x:1492,
    y:599
},
    radius:5.0,
    color:{
    r:179,
    g:143,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape581 = {
    point:{
    x:1762,
    y:540
},
    radius:5.0,
    color:{
    r:123,
    g:153,
    b:115
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape582 = {
    point:{
    x:1649,
    y:114
},
    radius:5.0,
    color:{
    r:149,
    g:33,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape583 = {
    point:{
    x:701,
    y:1072
},
    radius:5.0,
    color:{
    r:125,
    g:131,
    b:136
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape584 = {
    point:{
    x:660,
    y:504
},
    radius:5.0,
    color:{
    r:58,
    g:135,
    b:35
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape585 = {
    point:{
    x:1567,
    y:753
},
    radius:5.0,
    color:{
    r:1,
    g:179,
    b:163
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape586 = {
    point:{
    x:1859,
    y:966
},
    radius:5.0,
    color:{
    r:129,
    g:206,
    b:204
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape587 = {
    point:{
    x:652,
    y:199
},
    radius:5.0,
    color:{
    r:168,
    g:239,
    b:136
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape588 = {
    point:{
    x:1387,
    y:1072
},
    radius:5.0,
    color:{
    r:232,
    g:34,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape589 = {
    point:{
    x:1574,
    y:516
},
    radius:5.0,
    color:{
    r:153,
    g:50,
    b:191
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape590 = {
    point:{
    x:1306,
    y:558
},
    radius:5.0,
    color:{
    r:67,
    g:77,
    b:185
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape591 = {
    point:{
    x:1240,
    y:178
},
    radius:5.0,
    color:{
    r:7,
    g:202,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape592 = {
    point:{
    x:291,
    y:143
},
    radius:5.0,
    color:{
    r:23,
    g:164,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape593 = {
    point:{
    x:79,
    y:943
},
    radius:5.0,
    color:{
    r:184,
    g:22,
    b:102
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape594 = {
    point:{
    x:591,
    y:668
},
    radius:5.0,
    color:{
    r:145,
    g:136,
    b:95
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape595 = {
    point:{
    x:246,
    y:242
},
    radius:5.0,
    color:{
    r:55,
    g:155,
    b:238
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape596 = {
    point:{
    x:123,
    y:33
},
    radius:5.0,
    color:{
    r:216,
    g:105,
    b:192
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape597 = {
    point:{
    x:641,
    y:460
},
    radius:5.0,
    color:{
    r:146,
    g:156,
    b:18
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape598 = {
    point:{
    x:901,
    y:292
},
    radius:5.0,
    color:{
    r:242,
    g:184,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape599 = {
    point:{
    x:1257,
    y:450
},
    radius:5.0,
    color:{
    r:100,
    g:27,
    b:156
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape600 = {
    point:{
    x:1089,
    y:23
},
    radius:5.0,
    color:{
    r:111,
    g:163,
    b:57
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape601 = {
    point:{
    x:1377,
    y:1074
},
    radius:5.0,
    color:{
    r:246,
    g:5,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape602 = {
    point:{
    x:406,
    y:345
},
    radius:5.0,
    color:{
    r:100,
    g:11,
    b:38
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape603 = {
    point:{
    x:861,
    y:833
},
    radius:5.0,
    color:{
    r:211,
    g:0,
    b:193
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape604 = {
    point:{
    x:1763,
    y:606
},
    radius:5.0,
    color:{
    r:26,
    g:110,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape605 = {
    point:{
    x:619,
    y:193
},
    radius:5.0,
    color:{
    r:134,
    g:4,
    b:242
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape606 = {
    point:{
    x:474,
    y:45
},
    radius:5.0,
    color:{
    r:181,
    g:236,
    b:214
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape607 = {
    point:{
    x:1419,
    y:255
},
    radius:5.0,
    color:{
    r:155,
    g:93,
    b:91
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape608 = {
    point:{
    x:698,
    y:953
},
    radius:5.0,
    color:{
    r:219,
    g:243,
    b:186
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape609 = {
    point:{
    x:1013,
    y:218
},
    radius:5.0,
    color:{
    r:68,
    g:99,
    b:254
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape610 = {
    point:{
    x:1718,
    y:494
},
    radius:5.0,
    color:{
    r:143,
    g:192,
    b:115
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape611 = {
    point:{
    x:1468,
    y:547
},
    radius:5.0,
    color:{
    r:199,
    g:182,
    b:37
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape612 = {
    point:{
    x:1328,
    y:770
},
    radius:5.0,
    color:{
    r:205,
    g:161,
    b:123
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape613 = {
    point:{
    x:1000,
    y:271
},
    radius:5.0,
    color:{
    r:28,
    g:93,
    b:216
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape614 = {
    point:{
    x:1855,
    y:1044
},
    radius:5.0,
    color:{
    r:43,
    g:195,
    b:2
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape615 = {
    point:{
    x:740,
    y:441
},
    radius:5.0,
    color:{
    r:185,
    g:136,
    b:171
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape616 = {
    point:{
    x:1590,
    y:311
},
    radius:5.0,
    color:{
    r:129,
    g:11,
    b:72
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape617 = {
    point:{
    x:1793,
    y:349
},
    radius:5.0,
    color:{
    r:10,
    g:3,
    b:233
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape618 = {
    point:{
    x:1002,
    y:137
},
    radius:5.0,
    color:{
    r:92,
    g:36,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape619 = {
    point:{
    x:1749,
    y:654
},
    radius:5.0,
    color:{
    r:127,
    g:79,
    b:174
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape620 = {
    point:{
    x:914,
    y:838
},
    radius:5.0,
    color:{
    r:2,
    g:235,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape621 = {
    point:{
    x:1302,
    y:190
},
    radius:5.0,
    color:{
    r:238,
    g:161,
    b:172
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape622 = {
    point:{
    x:516,
    y:54
},
    radius:5.0,
    color:{
    r:19,
    g:94,
    b:40
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape623 = {
    point:{
    x:69,
    y:582
},
    radius:5.0,
    color:{
    r:32,
    g:88,
    b:112
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape624 = {
    point:{
    x:1234,
    y:1008
},
    radius:5.0,
    color:{
    r:155,
    g:229,
    b:75
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape625 = {
    point:{
    x:981,
    y:17
},
    radius:5.0,
    color:{
    r:94,
    g:55,
    b:225
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape626 = {
    point:{
    x:1689,
    y:200
},
    radius:5.0,
    color:{
    r:99,
    g:154,
    b:122
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape627 = {
    point:{
    x:631,
    y:24
},
    radius:5.0,
    color:{
    r:35,
    g:138,
    b:68
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape628 = {
    point:{
    x:930,
    y:530
},
    radius:5.0,
    color:{
    r:255,
    g:90,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape629 = {
    point:{
    x:292,
    y:638
},
    radius:5.0,
    color:{
    r:233,
    g:39,
    b:157
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape630 = {
    point:{
    x:305,
    y:503
},
    radius:5.0,
    color:{
    r:17,
    g:91,
    b:83
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape631 = {
    point:{
    x:122,
    y:1071
},
    radius:5.0,
    color:{
    r:91,
    g:250,
    b:92
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape632 = {
    point:{
    x:1005,
    y:97
},
    radius:5.0,
    color:{
    r:54,
    g:227,
    b:122
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape633 = {
    point:{
    x:894,
    y:386
},
    radius:5.0,
    color:{
    r:101,
    g:10,
    b:36
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape634 = {
    point:{
    x:266,
    y:224
},
    radius:5.0,
    color:{
    r:173,
    g:243,
    b:252
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape635 = {
    point:{
    x:562,
    y:678
},
    radius:5.0,
    color:{
    r:152,
    g:105,
    b:143
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape636 = {
    point:{
    x:268,
    y:867
},
    radius:5.0,
    color:{
    r:142,
    g:11,
    b:11
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape637 = {
    point:{
    x:1437,
    y:546
},
    radius:5.0,
    color:{
    r:125,
    g:252,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape638 = {
    point:{
    x:806,
    y:548
},
    radius:5.0,
    color:{
    r:93,
    g:49,
    b:30
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape639 = {
    point:{
    x:12,
    y:1064
},
    radius:5.0,
    color:{
    r:211,
    g:87,
    b:66
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape640 = {
    point:{
    x:294,
    y:723
},
    radius:5.0,
    color:{
    r:79,
    g:55,
    b:183
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape641 = {
    point:{
    x:1805,
    y:605
},
    radius:5.0,
    color:{
    r:28,
    g:160,
    b:52
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape642 = {
    point:{
    x:1401,
    y:204
},
    radius:5.0,
    color:{
    r:7,
    g:85,
    b:254
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape643 = {
    point:{
    x:345,
    y:347
},
    radius:5.0,
    color:{
    r:157,
    g:120,
    b:115
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape644 = {
    point:{
    x:1402,
    y:886
},
    radius:5.0,
    color:{
    r:198,
    g:175,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape645 = {
    point:{
    x:1240,
    y:374
},
    radius:5.0,
    color:{
    r:240,
    g:138,
    b:82
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape646 = {
    point:{
    x:948,
    y:693
},
    radius:5.0,
    color:{
    r:48,
    g:110,
    b:131
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape647 = {
    point:{
    x:1337,
    y:782
},
    radius:5.0,
    color:{
    r:176,
    g:58,
    b:177
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape648 = {
    point:{
    x:682,
    y:987
},
    radius:5.0,
    color:{
    r:224,
    g:214,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape649 = {
    point:{
    x:515,
    y:602
},
    radius:5.0,
    color:{
    r:148,
    g:224,
    b:81
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape650 = {
    point:{
    x:1259,
    y:969
},
    radius:5.0,
    color:{
    r:19,
    g:59,
    b:107
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape651 = {
    point:{
    x:332,
    y:100
},
    radius:5.0,
    color:{
    r:74,
    g:221,
    b:246
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape652 = {
    point:{
    x:1608,
    y:809
},
    radius:5.0,
    color:{
    r:20,
    g:250,
    b:221
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape653 = {
    point:{
    x:344,
    y:478
},
    radius:5.0,
    color:{
    r:57,
    g:30,
    b:158
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape654 = {
    point:{
    x:1065,
    y:32
},
    radius:5.0,
    color:{
    r:175,
    g:156,
    b:46
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape655 = {
    point:{
    x:1501,
    y:174
},
    radius:5.0,
    color:{
    r:22,
    g:100,
    b:120
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape656 = {
    point:{
    x:1191,
    y:633
},
    radius:5.0,
    color:{
    r:48,
    g:170,
    b:119
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape657 = {
    point:{
    x:1749,
    y:983
},
    radius:5.0,
    color:{
    r:107,
    g:17,
    b:240
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape658 = {
    point:{
    x:152,
    y:974
},
    radius:5.0,
    color:{
    r:150,
    g:45,
    b:170
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape659 = {
    point:{
    x:562,
    y:866
},
    radius:5.0,
    color:{
    r:138,
    g:161,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape660 = {
    point:{
    x:1492,
    y:207
},
    radius:5.0,
    color:{
    r:2,
    g:52,
    b:240
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape661 = {
    point:{
    x:686,
    y:736
},
    radius:5.0,
    color:{
    r:138,
    g:87,
    b:76
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape662 = {
    point:{
    x:1466,
    y:311
},
    radius:5.0,
    color:{
    r:142,
    g:164,
    b:54
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape663 = {
    point:{
    x:830,
    y:369
},
    radius:5.0,
    color:{
    r:94,
    g:197,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape664 = {
    point:{
    x:1259,
    y:623
},
    radius:5.0,
    color:{
    r:236,
    g:245,
    b:174
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape665 = {
    point:{
    x:1400,
    y:988
},
    radius:5.0,
    color:{
    r:122,
    g:163,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape666 = {
    point:{
    x:198,
    y:756
},
    radius:5.0,
    color:{
    r:79,
    g:194,
    b:112
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape667 = {
    point:{
    x:1236,
    y:291
},
    radius:5.0,
    color:{
    r:79,
    g:90,
    b:183
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape668 = {
    point:{
    x:339,
    y:319
},
    radius:5.0,
    color:{
    r:145,
    g:99,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape669 = {
    point:{
    x:595,
    y:356
},
    radius:5.0,
    color:{
    r:132,
    g:93,
    b:12
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape670 = {
    point:{
    x:58,
    y:819
},
    radius:5.0,
    color:{
    r:185,
    g:204,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape671 = {
    point:{
    x:795,
    y:407
},
    radius:5.0,
    color:{
    r:237,
    g:86,
    b:120
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape672 = {
    point:{
    x:1534,
    y:821
},
    radius:5.0,
    color:{
    r:58,
    g:33,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape673 = {
    point:{
    x:592,
    y:8
},
    radius:5.0,
    color:{
    r:1,
    g:120,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape674 = {
    point:{
    x:856,
    y:354
},
    radius:5.0,
    color:{
    r:232,
    g:143,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape675 = {
    point:{
    x:886,
    y:908
},
    radius:5.0,
    color:{
    r:146,
    g:3,
    b:244
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape676 = {
    point:{
    x:207,
    y:525
},
    radius:5.0,
    color:{
    r:43,
    g:32,
    b:26
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape677 = {
    point:{
    x:1087,
    y:1044
},
    radius:5.0,
    color:{
    r:190,
    g:227,
    b:65
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape678 = {
    point:{
    x:1353,
    y:388
},
    radius:5.0,
    color:{
    r:251,
    g:88,
    b:17
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape679 = {
    point:{
    x:1304,
    y:491
},
    radius:5.0,
    color:{
    r:54,
    g:38,
    b:16
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape680 = {
    point:{
    x:1833,
    y:773
},
    radius:5.0,
    color:{
    r:62,
    g:21,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape681 = {
    point:{
    x:953,
    y:456
},
    radius:5.0,
    color:{
    r:78,
    g:39,
    b:151
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape682 = {
    point:{
    x:1570,
    y:978
},
    radius:5.0,
    color:{
    r:45,
    g:142,
    b:225
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape683 = {
    point:{
    x:175,
    y:898
},
    radius:5.0,
    color:{
    r:4,
    g:247,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape684 = {
    point:{
    x:1716,
    y:750
},
    radius:5.0,
    color:{
    r:219,
    g:47,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape685 = {
    point:{
    x:379,
    y:19
},
    radius:5.0,
    color:{
    r:34,
    g:175,
    b:237
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape686 = {
    point:{
    x:1448,
    y:959
},
    radius:5.0,
    color:{
    r:242,
    g:107,
    b:207
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape687 = {
    point:{
    x:1703,
    y:482
},
    radius:5.0,
    color:{
    r:37,
    g:21,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape688 = {
    point:{
    x:33,
    y:542
},
    radius:5.0,
    color:{
    r:152,
    g:81,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape689 = {
    point:{
    x:1416,
    y:184
},
    radius:5.0,
    color:{
    r:63,
    g:100,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape690 = {
    point:{
    x:624,
    y:855
},
    radius:5.0,
    color:{
    r:199,
    g:90,
    b:29
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape691 = {
    point:{
    x:878,
    y:770
},
    radius:5.0,
    color:{
    r:225,
    g:175,
    b:143
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape692 = {
    point:{
    x:81,
    y:278
},
    radius:5.0,
    color:{
    r:101,
    g:210,
    b:57
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape693 = {
    point:{
    x:1607,
    y:1037
},
    radius:5.0,
    color:{
    r:40,
    g:53,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape694 = {
    point:{
    x:1613,
    y:189
},
    radius:5.0,
    color:{
    r:205,
    g:50,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape695 = {
    point:{
    x:607,
    y:65
},
    radius:5.0,
    color:{
    r:7,
    g:1,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape696 = {
    point:{
    x:266,
    y:669
},
    radius:5.0,
    color:{
    r:101,
    g:141,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape697 = {
    point:{
    x:336,
    y:37
},
    radius:5.0,
    color:{
    r:130,
    g:235,
    b:220
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape698 = {
    point:{
    x:1199,
    y:567
},
    radius:5.0,
    color:{
    r:72,
    g:173,
    b:223
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape699 = {
    point:{
    x:170,
    y:926
},
    radius:5.0,
    color:{
    r:3,
    g:95,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape700 = {
    point:{
    x:922,
    y:90
},
    radius:5.0,
    color:{
    r:103,
    g:68,
    b:169
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape701 = {
    point:{
    x:116,
    y:128
},
    radius:5.0,
    color:{
    r:157,
    g:111,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape702 = {
    point:{
    x:558,
    y:437
},
    radius:5.0,
    color:{
    r:101,
    g:216,
    b:68
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape703 = {
    point:{
    x:833,
    y:431
},
    radius:5.0,
    color:{
    r:139,
    g:52,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape704 = {
    point:{
    x:129,
    y:839
},
    radius:5.0,
    color:{
    r:23,
    g:21,
    b:92
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape705 = {
    point:{
    x:1141,
    y:374
},
    radius:5.0,
    color:{
    r:79,
    g:153,
    b:185
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape706 = {
    point:{
    x:474,
    y:498
},
    radius:5.0,
    color:{
    r:155,
    g:45,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape707 = {
    point:{
    x:358,
    y:796
},
    radius:5.0,
    color:{
    r:40,
    g:153,
    b:69
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape708 = {
    point:{
    x:1600,
    y:106
},
    radius:5.0,
    color:{
    r:203,
    g:54,
    b:96
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape709 = {
    point:{
    x:792,
    y:921
},
    radius:5.0,
    color:{
    r:134,
    g:190,
    b:33
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape710 = {
    point:{
    x:1319,
    y:240
},
    radius:5.0,
    color:{
    r:233,
    g:65,
    b:38
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape711 = {
    point:{
    x:1629,
    y:621
},
    radius:5.0,
    color:{
    r:240,
    g:228,
    b:8
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape712 = {
    point:{
    x:274,
    y:789
},
    radius:5.0,
    color:{
    r:65,
    g:105,
    b:74
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape713 = {
    point:{
    x:919,
    y:295
},
    radius:5.0,
    color:{
    r:105,
    g:114,
    b:32
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape714 = {
    point:{
    x:1313,
    y:1072
},
    radius:5.0,
    color:{
    r:222,
    g:75,
    b:121
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape715 = {
    point:{
    x:1814,
    y:1066
},
    radius:5.0,
    color:{
    r:99,
    g:45,
    b:227
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape716 = {
    point:{
    x:112,
    y:526
},
    radius:5.0,
    color:{
    r:65,
    g:225,
    b:210
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape717 = {
    point:{
    x:812,
    y:1009
},
    radius:5.0,
    color:{
    r:90,
    g:17,
    b:108
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape718 = {
    point:{
    x:376,
    y:80
},
    radius:5.0,
    color:{
    r:144,
    g:150,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape719 = {
    point:{
    x:977,
    y:464
},
    radius:5.0,
    color:{
    r:57,
    g:12,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape720 = {
    point:{
    x:1334,
    y:1024
},
    radius:5.0,
    color:{
    r:205,
    g:60,
    b:42
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape721 = {
    point:{
    x:1652,
    y:858
},
    radius:5.0,
    color:{
    r:44,
    g:47,
    b:135
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape722 = {
    point:{
    x:1894,
    y:844
},
    radius:5.0,
    color:{
    r:135,
    g:84,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape723 = {
    point:{
    x:730,
    y:540
},
    radius:5.0,
    color:{
    r:80,
    g:195,
    b:14
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape724 = {
    point:{
    x:465,
    y:927
},
    radius:5.0,
    color:{
    r:212,
    g:223,
    b:131
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape725 = {
    point:{
    x:1449,
    y:255
},
    radius:5.0,
    color:{
    r:163,
    g:211,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape726 = {
    point:{
    x:251,
    y:177
},
    radius:5.0,
    color:{
    r:10,
    g:230,
    b:103
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape727 = {
    point:{
    x:1008,
    y:456
},
    radius:5.0,
    color:{
    r:104,
    g:71,
    b:199
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape728 = {
    point:{
    x:369,
    y:133
},
    radius:5.0,
    color:{
    r:210,
    g:80,
    b:78
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape729 = {
    point:{
    x:777,
    y:690
},
    radius:5.0,
    color:{
    r:149,
    g:199,
    b:247
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape730 = {
    point:{
    x:1678,
    y:66
},
    radius:5.0,
    color:{
    r:145,
    g:89,
    b:13
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape731 = {
    point:{
    x:276,
    y:970
},
    radius:5.0,
    color:{
    r:110,
    g:229,
    b:93
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape732 = {
    point:{
    x:1199,
    y:381
},
    radius:5.0,
    color:{
    r:89,
    g:113,
    b:115
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape733 = {
    point:{
    x:921,
    y:799
},
    radius:5.0,
    color:{
    r:28,
    g:212,
    b:202
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape734 = {
    point:{
    x:353,
    y:463
},
    radius:5.0,
    color:{
    r:131,
    g:100,
    b:60
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape735 = {
    point:{
    x:38,
    y:467
},
    radius:5.0,
    color:{
    r:216,
    g:5,
    b:79
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape736 = {
    point:{
    x:1691,
    y:800
},
    radius:5.0,
    color:{
    r:240,
    g:67,
    b:141
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape737 = {
    point:{
    x:1517,
    y:429
},
    radius:5.0,
    color:{
    r:57,
    g:244,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape738 = {
    point:{
    x:1767,
    y:705
},
    radius:5.0,
    color:{
    r:241,
    g:89,
    b:18
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape739 = {
    point:{
    x:370,
    y:525
},
    radius:5.0,
    color:{
    r:177,
    g:103,
    b:204
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape740 = {
    point:{
    x:746,
    y:639
},
    radius:5.0,
    color:{
    r:254,
    g:140,
    b:79
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape741 = {
    point:{
    x:715,
    y:307
},
    radius:5.0,
    color:{
    r:25,
    g:83,
    b:25
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape742 = {
    point:{
    x:422,
    y:967
},
    radius:5.0,
    color:{
    r:134,
    g:101,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape743 = {
    point:{
    x:1197,
    y:1016
},
    radius:5.0,
    color:{
    r:84,
    g:218,
    b:102
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape744 = {
    point:{
    x:658,
    y:497
},
    radius:5.0,
    color:{
    r:28,
    g:23,
    b:12
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape745 = {
    point:{
    x:393,
    y:676
},
    radius:5.0,
    color:{
    r:71,
    g:16,
    b:222
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape746 = {
    point:{
    x:1291,
    y:759
},
    radius:5.0,
    color:{
    r:204,
    g:13,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape747 = {
    point:{
    x:571,
    y:39
},
    radius:5.0,
    color:{
    r:108,
    g:45,
    b:196
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape748 = {
    point:{
    x:169,
    y:586
},
    radius:5.0,
    color:{
    r:97,
    g:251,
    b:199
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape749 = {
    point:{
    x:485,
    y:699
},
    radius:5.0,
    color:{
    r:72,
    g:138,
    b:160
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape750 = {
    point:{
    x:153,
    y:971
},
    radius:5.0,
    color:{
    r:232,
    g:138,
    b:219
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape751 = {
    point:{
    x:411,
    y:326
},
    radius:5.0,
    color:{
    r:191,
    g:127,
    b:54
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape752 = {
    point:{
    x:187,
    y:523
},
    radius:5.0,
    color:{
    r:75,
    g:27,
    b:214
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape753 = {
    point:{
    x:625,
    y:304
},
    radius:5.0,
    color:{
    r:43,
    g:87,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape754 = {
    point:{
    x:654,
    y:873
},
    radius:5.0,
    color:{
    r:41,
    g:46,
    b:98
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape755 = {
    point:{
    x:1659,
    y:382
},
    radius:5.0,
    color:{
    r:126,
    g:230,
    b:4
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape756 = {
    point:{
    x:1531,
    y:127
},
    radius:5.0,
    color:{
    r:116,
    g:171,
    b:153
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape757 = {
    point:{
    x:59,
    y:587
},
    radius:5.0,
    color:{
    r:111,
    g:170,
    b:165
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape758 = {
    point:{
    x:1856,
    y:760
},
    radius:5.0,
    color:{
    r:83,
    g:2,
    b:18
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape759 = {
    point:{
    x:1098,
    y:96
},
    radius:5.0,
    color:{
    r:196,
    g:242,
    b:230
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape760 = {
    point:{
    x:1614,
    y:150
},
    radius:5.0,
    color:{
    r:165,
    g:220,
    b:59
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape761 = {
    point:{
    x:1891,
    y:332
},
    radius:5.0,
    color:{
    r:239,
    g:138,
    b:62
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape762 = {
    point:{
    x:1797,
    y:413
},
    radius:5.0,
    color:{
    r:180,
    g:16,
    b:179
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape763 = {
    point:{
    x:713,
    y:1013
},
    radius:5.0,
    color:{
    r:82,
    g:129,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape764 = {
    point:{
    x:16,
    y:103
},
    radius:5.0,
    color:{
    r:230,
    g:90,
    b:246
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape765 = {
    point:{
    x:985,
    y:245
},
    radius:5.0,
    color:{
    r:163,
    g:93,
    b:188
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape766 = {
    point:{
    x:437,
    y:222
},
    radius:5.0,
    color:{
    r:0,
    g:56,
    b:19
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape767 = {
    point:{
    x:1514,
    y:911
},
    radius:5.0,
    color:{
    r:114,
    g:161,
    b:11
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape768 = {
    point:{
    x:668,
    y:83
},
    radius:5.0,
    color:{
    r:29,
    g:183,
    b:235
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape769 = {
    point:{
    x:47,
    y:818
},
    radius:5.0,
    color:{
    r:250,
    g:11,
    b:51
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape770 = {
    point:{
    x:864,
    y:964
},
    radius:5.0,
    color:{
    r:32,
    g:136,
    b:119
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape771 = {
    point:{
    x:1401,
    y:295
},
    radius:5.0,
    color:{
    r:29,
    g:103,
    b:144
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape772 = {
    point:{
    x:1702,
    y:534
},
    radius:5.0,
    color:{
    r:254,
    g:237,
    b:40
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape773 = {
    point:{
    x:50,
    y:682
},
    radius:5.0,
    color:{
    r:2,
    g:242,
    b:111
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape774 = {
    point:{
    x:1032,
    y:965
},
    radius:5.0,
    color:{
    r:49,
    g:86,
    b:123
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape775 = {
    point:{
    x:327,
    y:889
},
    radius:5.0,
    color:{
    r:75,
    g:141,
    b:110
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape776 = {
    point:{
    x:501,
    y:1005
},
    radius:5.0,
    color:{
    r:221,
    g:80,
    b:114
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape777 = {
    point:{
    x:1531,
    y:170
},
    radius:5.0,
    color:{
    r:63,
    g:237,
    b:113
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape778 = {
    point:{
    x:1491,
    y:186
},
    radius:5.0,
    color:{
    r:110,
    g:130,
    b:249
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape779 = {
    point:{
    x:624,
    y:336
},
    radius:5.0,
    color:{
    r:173,
    g:160,
    b:65
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape780 = {
    point:{
    x:44,
    y:993
},
    radius:5.0,
    color:{
    r:71,
    g:16,
    b:105
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape781 = {
    point:{
    x:1513,
    y:843
},
    radius:5.0,
    color:{
    r:2,
    g:155,
    b:101
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape782 = {
    point:{
    x:984,
    y:886
},
    radius:5.0,
    color:{
    r:199,
    g:191,
    b:22
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape783 = {
    point:{
    x:675,
    y:538
},
    radius:5.0,
    color:{
    r:54,
    g:88,
    b:253
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape784 = {
    point:{
    x:1194,
    y:908
},
    radius:5.0,
    color:{
    r:245,
    g:234,
    b:225
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape785 = {
    point:{
    x:771,
    y:923
},
    radius:5.0,
    color:{
    r:153,
    g:37,
    b:77
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape786 = {
    point:{
    x:773,
    y:1073
},
    radius:5.0,
    color:{
    r:239,
    g:50,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape787 = {
    point:{
    x:1395,
    y:888
},
    radius:5.0,
    color:{
    r:157,
    g:179,
    b:69
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape788 = {
    point:{
    x:2,
    y:71
},
    radius:5.0,
    color:{
    r:16,
    g:160,
    b:205
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape789 = {
    point:{
    x:1528,
    y:32
},
    radius:5.0,
    color:{
    r:210,
    g:146,
    b:242
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape790 = {
    point:{
    x:1502,
    y:1023
},
    radius:5.0,
    color:{
    r:6,
    g:52,
    b:139
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape791 = {
    point:{
    x:575,
    y:594
},
    radius:5.0,
    color:{
    r:37,
    g:182,
    b:209
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape792 = {
    point:{
    x:1340,
    y:492
},
    radius:5.0,
    color:{
    r:57,
    g:71,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape793 = {
    point:{
    x:1028,
    y:985
},
    radius:5.0,
    color:{
    r:25,
    g:178,
    b:6
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape794 = {
    point:{
    x:1566,
    y:752
},
    radius:5.0,
    color:{
    r:81,
    g:133,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape795 = {
    point:{
    x:1215,
    y:710
},
    radius:5.0,
    color:{
    r:227,
    g:46,
    b:82
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape796 = {
    point:{
    x:590,
    y:35
},
    radius:5.0,
    color:{
    r:187,
    g:21,
    b:205
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape797 = {
    point:{
    x:1049,
    y:520
},
    radius:5.0,
    color:{
    r:51,
    g:52,
    b:118
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape798 = {
    point:{
    x:1712,
    y:1046
},
    radius:5.0,
    color:{
    r:155,
    g:208,
    b:174
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape799 = {
    point:{
    x:188,
    y:621
},
    radius:5.0,
    color:{
    r:124,
    g:194,
    b:124
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape800 = {
    point:{
    x:454,
    y:340
},
    radius:5.0,
    color:{
    r:194,
    g:51,
    b:3
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape801 = {
    point:{
    x:864,
    y:925
},
    radius:5.0,
    color:{
    r:234,
    g:89,
    b:12
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape802 = {
    point:{
    x:1118,
    y:1000
},
    radius:5.0,
    color:{
    r:200,
    g:155,
    b:198
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape803 = {
    point:{
    x:1524,
    y:790
},
    radius:5.0,
    color:{
    r:151,
    g:89,
    b:66
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape804 = {
    point:{
    x:1157,
    y:625
},
    radius:5.0,
    color:{
    r:222,
    g:47,
    b:44
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape805 = {
    point:{
    x:1420,
    y:137
},
    radius:5.0,
    color:{
    r:33,
    g:221,
    b:28
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape806 = {
    point:{
    x:843,
    y:620
},
    radius:5.0,
    color:{
    r:24,
    g:179,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape807 = {
    point:{
    x:1353,
    y:849
},
    radius:5.0,
    color:{
    r:115,
    g:214,
    b:151
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape808 = {
    point:{
    x:1724,
    y:412
},
    radius:5.0,
    color:{
    r:214,
    g:39,
    b:48
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape809 = {
    point:{
    x:1764,
    y:149
},
    radius:5.0,
    color:{
    r:74,
    g:75,
    b:89
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape810 = {
    point:{
    x:1204,
    y:546
},
    radius:5.0,
    color:{
    r:192,
    g:166,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape811 = {
    point:{
    x:1053,
    y:252
},
    radius:5.0,
    color:{
    r:111,
    g:29,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape812 = {
    point:{
    x:1104,
    y:818
},
    radius:5.0,
    color:{
    r:177,
    g:121,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape813 = {
    point:{
    x:1582,
    y:237
},
    radius:5.0,
    color:{
    r:233,
    g:197,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape814 = {
    point:{
    x:165,
    y:148
},
    radius:5.0,
    color:{
    r:107,
    g:174,
    b:226
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape815 = {
    point:{
    x:384,
    y:647
},
    radius:5.0,
    color:{
    r:120,
    g:176,
    b:147
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape816 = {
    point:{
    x:946,
    y:292
},
    radius:5.0,
    color:{
    r:57,
    g:73,
    b:38
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape817 = {
    point:{
    x:1382,
    y:938
},
    radius:5.0,
    color:{
    r:102,
    g:100,
    b:210
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape818 = {
    point:{
    x:1540,
    y:1027
},
    radius:5.0,
    color:{
    r:134,
    g:163,
    b:25
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape819 = {
    point:{
    x:127,
    y:302
},
    radius:5.0,
    color:{
    r:196,
    g:251,
    b:141
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape820 = {
    point:{
    x:855,
    y:664
},
    radius:5.0,
    color:{
    r:197,
    g:200,
    b:149
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape821 = {
    point:{
    x:1884,
    y:602
},
    radius:5.0,
    color:{
    r:178,
    g:155,
    b:81
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape822 = {
    point:{
    x:762,
    y:1033
},
    radius:5.0,
    color:{
    r:86,
    g:147,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape823 = {
    point:{
    x:1038,
    y:272
},
    radius:5.0,
    color:{
    r:217,
    g:202,
    b:152
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape824 = {
    point:{
    x:963,
    y:20
},
    radius:5.0,
    color:{
    r:31,
    g:81,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape825 = {
    point:{
    x:1439,
    y:266
},
    radius:5.0,
    color:{
    r:26,
    g:41,
    b:10
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape826 = {
    point:{
    x:445,
    y:31
},
    radius:5.0,
    color:{
    r:88,
    g:35,
    b:227
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape827 = {
    point:{
    x:808,
    y:825
},
    radius:5.0,
    color:{
    r:235,
    g:231,
    b:186
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape828 = {
    point:{
    x:690,
    y:16
},
    radius:5.0,
    color:{
    r:166,
    g:200,
    b:181
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape829 = {
    point:{
    x:1568,
    y:270
},
    radius:5.0,
    color:{
    r:51,
    g:207,
    b:133
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape830 = {
    point:{
    x:1542,
    y:448
},
    radius:5.0,
    color:{
    r:170,
    g:195,
    b:13
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape831 = {
    point:{
    x:444,
    y:72
},
    radius:5.0,
    color:{
    r:237,
    g:34,
    b:202
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape832 = {
    point:{
    x:139,
    y:1029
},
    radius:5.0,
    color:{
    r:135,
    g:124,
    b:160
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape833 = {
    point:{
    x:631,
    y:916
},
    radius:5.0,
    color:{
    r:72,
    g:191,
    b:224
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape834 = {
    point:{
    x:650,
    y:486
},
    radius:5.0,
    color:{
    r:19,
    g:223,
    b:248
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape835 = {
    point:{
    x:956,
    y:904
},
    radius:5.0,
    color:{
    r:227,
    g:48,
    b:82
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape836 = {
    point:{
    x:1717,
    y:337
},
    radius:5.0,
    color:{
    r:45,
    g:41,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape837 = {
    point:{
    x:64,
    y:402
},
    radius:5.0,
    color:{
    r:108,
    g:151,
    b:255
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape838 = {
    point:{
    x:443,
    y:747
},
    radius:5.0,
    color:{
    r:225,
    g:32,
    b:110
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape839 = {
    point:{
    x:77,
    y:44
},
    radius:5.0,
    color:{
    r:142,
    g:255,
    b:231
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape840 = {
    point:{
    x:851,
    y:122
},
    radius:5.0,
    color:{
    r:191,
    g:245,
    b:253
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape841 = {
    point:{
    x:1842,
    y:319
},
    radius:5.0,
    color:{
    r:1,
    g:179,
    b:34
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape842 = {
    point:{
    x:972,
    y:23
},
    radius:5.0,
    color:{
    r:226,
    g:218,
    b:129
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape843 = {
    point:{
    x:1836,
    y:258
},
    radius:5.0,
    color:{
    r:159,
    g:98,
    b:80
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape844 = {
    point:{
    x:1805,
    y:109
},
    radius:5.0,
    color:{
    r:75,
    g:9,
    b:32
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape845 = {
    point:{
    x:1324,
    y:1016
},
    radius:5.0,
    color:{
    r:148,
    g:245,
    b:146
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape846 = {
    point:{
    x:165,
    y:644
},
    radius:5.0,
    color:{
    r:158,
    g:93,
    b:58
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape847 = {
    point:{
    x:97,
    y:1047
},
    radius:5.0,
    color:{
    r:230,
    g:121,
    b:108
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape848 = {
    point:{
    x:176,
    y:743
},
    radius:5.0,
    color:{
    r:45,
    g:48,
    b:51
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape849 = {
    point:{
    x:954,
    y:73
},
    radius:5.0,
    color:{
    r:62,
    g:223,
    b:194
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape850 = {
    point:{
    x:397,
    y:730
},
    radius:5.0,
    color:{
    r:238,
    g:156,
    b:246
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape851 = {
    point:{
    x:1290,
    y:236
},
    radius:5.0,
    color:{
    r:72,
    g:167,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape852 = {
    point:{
    x:567,
    y:115
},
    radius:5.0,
    color:{
    r:56,
    g:124,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape853 = {
    point:{
    x:1412,
    y:880
},
    radius:5.0,
    color:{
    r:241,
    g:218,
    b:1
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape854 = {
    point:{
    x:524,
    y:459
},
    radius:5.0,
    color:{
    r:218,
    g:127,
    b:73
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape855 = {
    point:{
    x:1189,
    y:824
},
    radius:5.0,
    color:{
    r:190,
    g:224,
    b:82
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape856 = {
    point:{
    x:1763,
    y:26
},
    radius:5.0,
    color:{
    r:193,
    g:113,
    b:142
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape857 = {
    point:{
    x:439,
    y:67
},
    radius:5.0,
    color:{
    r:244,
    g:31,
    b:221
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape858 = {
    point:{
    x:214,
    y:743
},
    radius:5.0,
    color:{
    r:205,
    g:221,
    b:170
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape859 = {
    point:{
    x:1528,
    y:920
},
    radius:5.0,
    color:{
    r:228,
    g:173,
    b:254
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape860 = {
    point:{
    x:1312,
    y:580
},
    radius:5.0,
    color:{
    r:172,
    g:82,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape861 = {
    point:{
    x:846,
    y:458
},
    radius:5.0,
    color:{
    r:114,
    g:59,
    b:237
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape862 = {
    point:{
    x:666,
    y:335
},
    radius:5.0,
    color:{
    r:160,
    g:79,
    b:0
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape863 = {
    point:{
    x:293,
    y:966
},
    radius:5.0,
    color:{
    r:53,
    g:36,
    b:70
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape864 = {
    point:{
    x:1187,
    y:814
},
    radius:5.0,
    color:{
    r:123,
    g:66,
    b:207
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape865 = {
    point:{
    x:811,
    y:210
},
    radius:5.0,
    color:{
    r:187,
    g:251,
    b:209
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape866 = {
    point:{
    x:1669,
    y:260
},
    radius:5.0,
    color:{
    r:162,
    g:211,
    b:170
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape867 = {
    point:{
    x:1090,
    y:845
},
    radius:5.0,
    color:{
    r:97,
    g:71,
    b:100
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape868 = {
    point:{
    x:882,
    y:847
},
    radius:5.0,
    color:{
    r:175,
    g:178,
    b:52
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape869 = {
    point:{
    x:255,
    y:770
},
    radius:5.0,
    color:{
    r:99,
    g:250,
    b:217
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape870 = {
    point:{
    x:1449,
    y:537
},
    radius:5.0,
    color:{
    r:126,
    g:6,
    b:118
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape871 = {
    point:{
    x:363,
    y:732
},
    radius:5.0,
    color:{
    r:215,
    g:106,
    b:233
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape872 = {
    point:{
    x:1114,
    y:267
},
    radius:5.0,
    color:{
    r:139,
    g:83,
    b:133
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape873 = {
    point:{
    x:801,
    y:585
},
    radius:5.0,
    color:{
    r:110,
    g:36,
    b:201
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape874 = {
    point:{
    x:1842,
    y:1006
},
    radius:5.0,
    color:{
    r:199,
    g:141,
    b:112
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape875 = {
    point:{
    x:616,
    y:439
},
    radius:5.0,
    color:{
    r:143,
    g:228,
    b:29
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape876 = {
    point:{
    x:1712,
    y:582
},
    radius:5.0,
    color:{
    r:121,
    g:31,
    b:210
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape877 = {
    point:{
    x:162,
    y:309
},
    radius:5.0,
    color:{
    r:78,
    g:217,
    b:180
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape878 = {
    point:{
    x:1752,
    y:709
},
    radius:5.0,
    color:{
    r:71,
    g:20,
    b:8
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape879 = {
    point:{
    x:642,
    y:598
},
    radius:5.0,
    color:{
    r:148,
    g:113,
    b:85
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape880 = {
    point:{
    x:899,
    y:854
},
    radius:5.0,
    color:{
    r:195,
    g:150,
    b:25
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape881 = {
    point:{
    x:104,
    y:459
},
    radius:5.0,
    color:{
    r:75,
    g:71,
    b:153
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape882 = {
    point:{
    x:147,
    y:893
},
    radius:5.0,
    color:{
    r:251,
    g:90,
    b:87
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape883 = {
    point:{
    x:1477,
    y:265
},
    radius:5.0,
    color:{
    r:172,
    g:20,
    b:222
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape884 = {
    point:{
    x:1220,
    y:795
},
    radius:5.0,
    color:{
    r:69,
    g:180,
    b:54
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape885 = {
    point:{
    x:760,
    y:764
},
    radius:5.0,
    color:{
    r:114,
    g:184,
    b:154
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape886 = {
    point:{
    x:1616,
    y:919
},
    radius:5.0,
    color:{
    r:10,
    g:139,
    b:218
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape887 = {
    point:{
    x:1765,
    y:166
},
    radius:5.0,
    color:{
    r:139,
    g:245,
    b:115
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape888 = {
    point:{
    x:353,
    y:457
},
    radius:5.0,
    color:{
    r:162,
    g:252,
    b:146
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape889 = {
    point:{
    x:1877,
    y:753
},
    radius:5.0,
    color:{
    r:55,
    g:199,
    b:116
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape890 = {
    point:{
    x:309,
    y:693
},
    radius:5.0,
    color:{
    r:10,
    g:43,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape891 = {
    point:{
    x:398,
    y:114
},
    radius:5.0,
    color:{
    r:53,
    g:216,
    b:175
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape892 = {
    point:{
    x:1041,
    y:110
},
    radius:5.0,
    color:{
    r:112,
    g:138,
    b:171
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape893 = {
    point:{
    x:1890,
    y:428
},
    radius:5.0,
    color:{
    r:60,
    g:87,
    b:136
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape894 = {
    point:{
    x:686,
    y:301
},
    radius:5.0,
    color:{
    r:57,
    g:77,
    b:132
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape895 = {
    point:{
    x:1138,
    y:507
},
    radius:5.0,
    color:{
    r:212,
    g:113,
    b:243
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape896 = {
    point:{
    x:1803,
    y:991
},
    radius:5.0,
    color:{
    r:64,
    g:55,
    b:27
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape897 = {
    point:{
    x:357,
    y:663
},
    radius:5.0,
    color:{
    r:237,
    g:158,
    b:106
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape898 = {
    point:{
    x:613,
    y:159
},
    radius:5.0,
    color:{
    r:240,
    g:130,
    b:65
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape899 = {
    point:{
    x:1015,
    y:1066
},
    radius:5.0,
    color:{
    r:29,
    g:109,
    b:14
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape900 = {
    point:{
    x:27,
    y:869
},
    radius:5.0,
    color:{
    r:238,
    g:76,
    b:125
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape901 = {
    point:{
    x:275,
    y:242
},
    radius:5.0,
    color:{
    r:7,
    g:228,
    b:108
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape902 = {
    point:{
    x:504,
    y:864
},
    radius:5.0,
    color:{
    r:208,
    g:96,
    b:23
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape903 = {
    point:{
    x:1542,
    y:754
},
    radius:5.0,
    color:{
    r:232,
    g:91,
    b:137
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape904 = {
    point:{
    x:790,
    y:829
},
    radius:5.0,
    color:{
    r:109,
    g:67,
    b:197
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape905 = {
    point:{
    x:767,
    y:500
},
    radius:5.0,
    color:{
    r:103,
    g:149,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape906 = {
    point:{
    x:1298,
    y:622
},
    radius:5.0,
    color:{
    r:35,
    g:24,
    b:139
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape907 = {
    point:{
    x:778,
    y:998
},
    radius:5.0,
    color:{
    r:87,
    g:18,
    b:212
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape908 = {
    point:{
    x:1783,
    y:359
},
    radius:5.0,
    color:{
    r:140,
    g:221,
    b:113
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape909 = {
    point:{
    x:826,
    y:477
},
    radius:5.0,
    color:{
    r:181,
    g:34,
    b:148
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape910 = {
    point:{
    x:798,
    y:578
},
    radius:5.0,
    color:{
    r:16,
    g:46,
    b:157
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape911 = {
    point:{
    x:1684,
    y:744
},
    radius:5.0,
    color:{
    r:77,
    g:212,
    b:115
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape912 = {
    point:{
    x:433,
    y:508
},
    radius:5.0,
    color:{
    r:207,
    g:145,
    b:121
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape913 = {
    point:{
    x:674,
    y:79
},
    radius:5.0,
    color:{
    r:215,
    g:220,
    b:94
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape914 = {
    point:{
    x:733,
    y:897
},
    radius:5.0,
    color:{
    r:2,
    g:163,
    b:173
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape915 = {
    point:{
    x:730,
    y:523
},
    radius:5.0,
    color:{
    r:251,
    g:69,
    b:190
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape916 = {
    point:{
    x:1033,
    y:572
},
    radius:5.0,
    color:{
    r:203,
    g:231,
    b:37
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape917 = {
    point:{
    x:769,
    y:1040
},
    radius:5.0,
    color:{
    r:26,
    g:97,
    b:111
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape918 = {
    point:{
    x:275,
    y:184
},
    radius:5.0,
    color:{
    r:122,
    g:150,
    b:19
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape919 = {
    point:{
    x:1579,
    y:197
},
    radius:5.0,
    color:{
    r:26,
    g:239,
    b:59
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape920 = {
    point:{
    x:800,
    y:290
},
    radius:5.0,
    color:{
    r:155,
    g:199,
    b:16
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape921 = {
    point:{
    x:959,
    y:620
},
    radius:5.0,
    color:{
    r:39,
    g:217,
    b:160
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape922 = {
    point:{
    x:104,
    y:614
},
    radius:5.0,
    color:{
    r:113,
    g:124,
    b:31
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape923 = {
    point:{
    x:603,
    y:594
},
    radius:5.0,
    color:{
    r:114,
    g:205,
    b:232
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape924 = {
    point:{
    x:504,
    y:356
},
    radius:5.0,
    color:{
    r:79,
    g:202,
    b:41
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape925 = {
    point:{
    x:892,
    y:504
},
    radius:5.0,
    color:{
    r:254,
    g:193,
    b:113
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape926 = {
    point:{
    x:1063,
    y:1069
},
    radius:5.0,
    color:{
    r:75,
    g:41,
    b:234
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape927 = {
    point:{
    x:1088,
    y:367
},
    radius:5.0,
    color:{
    r:43,
    g:176,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape928 = {
    point:{
    x:1724,
    y:603
},
    radius:5.0,
    color:{
    r:253,
    g:147,
    b:185
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape929 = {
    point:{
    x:1187,
    y:656
},
    radius:5.0,
    color:{
    r:10,
    g:182,
    b:71
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape930 = {
    point:{
    x:1698,
    y:495
},
    radius:5.0,
    color:{
    r:233,
    g:205,
    b:152
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape931 = {
    point:{
    x:1904,
    y:510
},
    radius:5.0,
    color:{
    r:166,
    g:73,
    b:118
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape932 = {
    point:{
    x:1240,
    y:160
},
    radius:5.0,
    color:{
    r:216,
    g:19,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape933 = {
    point:{
    x:885,
    y:1007
},
    radius:5.0,
    color:{
    r:50,
    g:97,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape934 = {
    point:{
    x:62,
    y:237
},
    radius:5.0,
    color:{
    r:57,
    g:218,
    b:76
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape935 = {
    point:{
    x:968,
    y:679
},
    radius:5.0,
    color:{
    r:101,
    g:244,
    b:202
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape936 = {
    point:{
    x:938,
    y:267
},
    radius:5.0,
    color:{
    r:92,
    g:9,
    b:5
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape937 = {
    point:{
    x:650,
    y:271
},
    radius:5.0,
    color:{
    r:31,
    g:218,
    b:224
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape938 = {
    point:{
    x:1065,
    y:1003
},
    radius:5.0,
    color:{
    r:12,
    g:98,
    b:127
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape939 = {
    point:{
    x:853,
    y:790
},
    radius:5.0,
    color:{
    r:193,
    g:248,
    b:36
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape940 = {
    point:{
    x:473,
    y:1051
},
    radius:5.0,
    color:{
    r:56,
    g:32,
    b:211
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape941 = {
    point:{
    x:1729,
    y:477
},
    radius:5.0,
    color:{
    r:102,
    g:97,
    b:155
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape942 = {
    point:{
    x:1320,
    y:408
},
    radius:5.0,
    color:{
    r:197,
    g:230,
    b:202
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape943 = {
    point:{
    x:1151,
    y:869
},
    radius:5.0,
    color:{
    r:4,
    g:85,
    b:72
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape944 = {
    point:{
    x:1611,
    y:701
},
    radius:5.0,
    color:{
    r:8,
    g:85,
    b:178
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape945 = {
    point:{
    x:1745,
    y:497
},
    radius:5.0,
    color:{
    r:96,
    g:185,
    b:203
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape946 = {
    point:{
    x:202,
    y:737
},
    radius:5.0,
    color:{
    r:104,
    g:25,
    b:189
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape947 = {
    point:{
    x:1525,
    y:946
},
    radius:5.0,
    color:{
    r:54,
    g:175,
    b:59
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape948 = {
    point:{
    x:1004,
    y:759
},
    radius:5.0,
    color:{
    r:8,
    g:166,
    b:235
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape949 = {
    point:{
    x:1002,
    y:150
},
    radius:5.0,
    color:{
    r:228,
    g:10,
    b:136
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape950 = {
    point:{
    x:1261,
    y:303
},
    radius:5.0,
    color:{
    r:159,
    g:64,
    b:251
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape951 = {
    point:{
    x:1341,
    y:499
},
    radius:5.0,
    color:{
    r:197,
    g:187,
    b:121
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape952 = {
    point:{
    x:534,
    y:621
},
    radius:5.0,
    color:{
    r:32,
    g:139,
    b:2
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape953 = {
    point:{
    x:644,
    y:887
},
    radius:5.0,
    color:{
    r:126,
    g:229,
    b:39
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape954 = {
    point:{
    x:1899,
    y:658
},
    radius:5.0,
    color:{
    r:239,
    g:150,
    b:96
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape955 = {
    point:{
    x:223,
    y:1037
},
    radius:5.0,
    color:{
    r:49,
    g:167,
    b:88
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape956 = {
    point:{
    x:1870,
    y:341
},
    radius:5.0,
    color:{
    r:127,
    g:81,
    b:153
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape957 = {
    point:{
    x:1017,
    y:28
},
    radius:5.0,
    color:{
    r:156,
    g:220,
    b:33
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape958 = {
    point:{
    x:1527,
    y:422
},
    radius:5.0,
    color:{
    r:100,
    g:29,
    b:159
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape959 = {
    point:{
    x:554,
    y:119
},
    radius:5.0,
    color:{
    r:225,
    g:222,
    b:130
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape960 = {
    point:{
    x:427,
    y:415
},
    radius:5.0,
    color:{
    r:98,
    g:169,
    b:216
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape961 = {
    point:{
    x:726,
    y:106
},
    radius:5.0,
    color:{
    r:26,
    g:233,
    b:138
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape962 = {
    point:{
    x:968,
    y:151
},
    radius:5.0,
    color:{
    r:97,
    g:160,
    b:216
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape963 = {
    point:{
    x:1447,
    y:485
},
    radius:5.0,
    color:{
    r:21,
    g:177,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape964 = {
    point:{
    x:388,
    y:170
},
    radius:5.0,
    color:{
    r:220,
    g:197,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape965 = {
    point:{
    x:995,
    y:952
},
    radius:5.0,
    color:{
    r:87,
    g:183,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape966 = {
    point:{
    x:590,
    y:244
},
    radius:5.0,
    color:{
    r:78,
    g:23,
    b:49
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape967 = {
    point:{
    x:1815,
    y:359
},
    radius:5.0,
    color:{
    r:87,
    g:216,
    b:176
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape968 = {
    point:{
    x:1691,
    y:124
},
    radius:5.0,
    color:{
    r:34,
    g:82,
    b:17
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape969 = {
    point:{
    x:511,
    y:187
},
    radius:5.0,
    color:{
    r:72,
    g:148,
    b:140
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape970 = {
    point:{
    x:1338,
    y:817
},
    radius:5.0,
    color:{
    r:22,
    g:4,
    b:194
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape971 = {
    point:{
    x:152,
    y:254
},
    radius:5.0,
    color:{
    r:196,
    g:92,
    b:63
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape972 = {
    point:{
    x:885,
    y:921
},
    radius:5.0,
    color:{
    r:115,
    g:52,
    b:43
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape973 = {
    point:{
    x:1373,
    y:1017
},
    radius:5.0,
    color:{
    r:112,
    g:5,
    b:164
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape974 = {
    point:{
    x:460,
    y:286
},
    radius:5.0,
    color:{
    r:179,
    g:70,
    b:81
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape975 = {
    point:{
    x:1378,
    y:993
},
    radius:5.0,
    color:{
    r:198,
    g:14,
    b:223
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape976 = {
    point:{
    x:1154,
    y:964
},
    radius:5.0,
    color:{
    r:217,
    g:154,
    b:133
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape977 = {
    point:{
    x:1199,
    y:823
},
    radius:5.0,
    color:{
    r:51,
    g:72,
    b:26
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape978 = {
    point:{
    x:418,
    y:472
},
    radius:5.0,
    color:{
    r:47,
    g:56,
    b:104
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape979 = {
    point:{
    x:1155,
    y:551
},
    radius:5.0,
    color:{
    r:116,
    g:89,
    b:94
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape980 = {
    point:{
    x:700,
    y:801
},
    radius:5.0,
    color:{
    r:174,
    g:97,
    b:135
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape981 = {
    point:{
    x:264,
    y:118
},
    radius:5.0,
    color:{
    r:127,
    g:154,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape982 = {
    point:{
    x:804,
    y:1033
},
    radius:5.0,
    color:{
    r:174,
    g:130,
    b:115
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape983 = {
    point:{
    x:667,
    y:69
},
    radius:5.0,
    color:{
    r:40,
    g:11,
    b:226
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape984 = {
    point:{
    x:1038,
    y:907
},
    radius:5.0,
    color:{
    r:90,
    g:133,
    b:188
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape985 = {
    point:{
    x:183,
    y:271
},
    radius:5.0,
    color:{
    r:252,
    g:207,
    b:152
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape986 = {
    point:{
    x:1281,
    y:361
},
    radius:5.0,
    color:{
    r:212,
    g:139,
    b:83
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape987 = {
    point:{
    x:714,
    y:232
},
    radius:5.0,
    color:{
    r:1,
    g:193,
    b:65
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape988 = {
    point:{
    x:455,
    y:39
},
    radius:5.0,
    color:{
    r:12,
    g:221,
    b:122
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape989 = {
    point:{
    x:1367,
    y:827
},
    radius:5.0,
    color:{
    r:101,
    g:167,
    b:230
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape990 = {
    point:{
    x:1663,
    y:451
},
    radius:5.0,
    color:{
    r:24,
    g:200,
    b:12
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape991 = {
    point:{
    x:1364,
    y:221
},
    radius:5.0,
    color:{
    r:247,
    g:250,
    b:50
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape992 = {
    point:{
    x:845,
    y:698
},
    radius:5.0,
    color:{
    r:183,
    g:143,
    b:250
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape993 = {
    point:{
    x:1036,
    y:181
},
    radius:5.0,
    color:{
    r:202,
    g:206,
    b:23
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape994 = {
    point:{
    x:420,
    y:442
},
    radius:5.0,
    color:{
    r:203,
    g:36,
    b:245
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape995 = {
    point:{
    x:503,
    y:407
},
    radius:5.0,
    color:{
    r:40,
    g:55,
    b:231
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape996 = {
    point:{
    x:461,
    y:709
},
    radius:5.0,
    color:{
    r:135,
    g:82,
    b:67
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape997 = {
    point:{
    x:165,
    y:593
},
    radius:5.0,
    color:{
    r:184,
    g:124,
    b:71
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape998 = {
    point:{
    x:219,
    y:411
},
    radius:5.0,
    color:{
    r:192,
    g:182,
    b:22
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape999 = {
    point:{
    x:1617,
    y:108
},
    radius:5.0,
    color:{
    r:241,
    g:80,
    b:87
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape1000 = {
    point:{
    x:219,
    y:332
},
    radius:5.0,
    color:{
    r:59,
    g:41,
    b:90
},
    rotation:0,
    around:{
    x:0,
    y:0
}
};

bbcShape1001 = {
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

bbcShape1002 = {
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

bbcShape1003 = {
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

bbcShape1004 = {
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

bbcShape1005 = {
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

bbcShape1006 = {
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

bbcShape1007 = {
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

bbcShape1008 = {
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

bbcShape1009 = {
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

bbcShape1010 = {
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

bbcShape1011 = {
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

bbcShape1012 = {
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

bbcShape1013 = {
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

bbcShape1014 = {
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

bbcShape1015 = {
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

bbcShape1016 = {
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

bbcShape1017 = {
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

bbcShape1018 = {
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

bbcShape1019 = {
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

bbcShape1020 = {
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

bbcShape1021 = {
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

bbcShape1022 = {
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

bbcShape1023 = {
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

bbcShape1024 = {
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

bbcShape1025 = {
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

bbcShape1026 = {
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

bbcShape1027 = {
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

bbcShape1028 = {
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

bbcShape1029 = {
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

bbcShape1030 = {
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

bbcShape1031 = {
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

bbcShape1032 = {
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

bbcShape1033 = {
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

bbcShape1034 = {
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

bbcShape1035 = {
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

bbcShape1036 = {
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

bbcShape1037 = {
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

bbcShape1038 = {
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

bbcShape1039 = {
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

bbcShape1040 = {
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

bbcShape1041 = {
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

bbcShape1042 = {
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

bbcShape1043 = {
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

bbcShape1044 = {
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

bbcShape1045 = {
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

bbcShape1046 = {
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

bbcShape1047 = {
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

bbcShape1048 = {
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

bbcShape1049 = {
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

bbcShape1050 = {
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

bbcShape1051 = {
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

bbcShape1052 = {
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

bbcShape1053 = {
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

bbcShape1054 = {
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

bbcShape1055 = {
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

bbcShape1056 = {
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

bbcShape1057 = {
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

bbcShape1058 = {
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

bbcShape1059 = {
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

bbcShape1060 = {
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

bbcShape1061 = {
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

bbcShape1062 = {
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

bbcShape1063 = {
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

bbcShape1064 = {
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

bbcShape1065 = {
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

bbcShape1066 = {
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

bbcShape1067 = {
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

bbcShape1068 = {
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

bbcShape1069 = {
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

bbcShape1070 = {
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

bbcShape1071 = {
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

bbcShape1072 = {
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

bbcShape1073 = {
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

bbcShape1074 = {
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

bbcShape1075 = {
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

bbcShape1076 = {
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

bbcShape1077 = {
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

bbcShape1078 = {
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

bbcShape1079 = {
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

bbcShape1080 = {
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

bbcShape1081 = {
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

bbcShape1082 = {
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

bbcShape1083 = {
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

bbcShape1084 = {
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

bbcShape1085 = {
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

bbcShape1086 = {
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

bbcShape1087 = {
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

bbcShape1088 = {
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

bbcShape1089 = {
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

bbcShape1090 = {
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

bbcShape1091 = {
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

bbcShape1092 = {
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

bbcShape1093 = {
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

bbcShape1094 = {
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

bbcShape1095 = {
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

bbcShape1096 = {
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

bbcShape1097 = {
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

bbcShape1098 = {
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

bbcShape1099 = {
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

bbcShape1100 = {
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

bbcShape1101 = {
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

bbcShape1102 = {
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

bbcShape1103 = {
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

bbcShape1104 = {
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

bbcShape1105 = {
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

bbcShape1106 = {
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

bbcShape1107 = {
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

bbcShape1108 = {
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

bbcShape1109 = {
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

bbcShape1110 = {
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

bbcShape1111 = {
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

bbcShape1112 = {
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

bbcShape1113 = {
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

bbcShape1114 = {
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

bbcShape1115 = {
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

bbcShape1116 = {
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

bbcShape1117 = {
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

bbcShape1118 = {
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

bbcShape1119 = {
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

bbcShape1120 = {
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

bbcShape1121 = {
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

bbcShape1122 = {
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

bbcShape1123 = {
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

bbcShape1124 = {
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

bbcShape1125 = {
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

bbcShape1126 = {
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

bbcShape1127 = {
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

bbcShape1128 = {
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

bbcShape1129 = {
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

bbcShape1130 = {
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

bbcShape1131 = {
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

bbcShape1132 = {
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

bbcShape1133 = {
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

bbcShape1134 = {
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

bbcShape1135 = {
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

bbcShape1136 = {
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

bbcShape1137 = {
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

bbcShape1138 = {
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

bbcShape1139 = {
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

bbcShape1140 = {
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

bbcShape1141 = {
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

bbcShape1142 = {
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

bbcShape1143 = {
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

bbcShape1144 = {
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

bbcShape1145 = {
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

bbcShape1146 = {
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

bbcShape1147 = {
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

bbcShape1148 = {
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

bbcShape1149 = {
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

bbcShape1150 = {
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

bbcShape1151 = {
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

bbcShape1152 = {
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

bbcShape1153 = {
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

bbcShape1154 = {
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

bbcShape1155 = {
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

bbcShape1156 = {
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

bbcShape1157 = {
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

bbcShape1158 = {
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

bbcShape1159 = {
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

bbcShape1160 = {
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

bbcShape1161 = {
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

bbcShape1162 = {
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

bbcShape1163 = {
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

bbcShape1164 = {
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

bbcShape1165 = {
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

bbcShape1166 = {
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

bbcShape1167 = {
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

bbcShape1168 = {
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

bbcShape1169 = {
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

bbcShape1170 = {
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

bbcShape1171 = {
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

bbcShape1172 = {
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

bbcShape1173 = {
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

bbcShape1174 = {
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

bbcShape1175 = {
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

bbcShape1176 = {
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

bbcShape1177 = {
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

bbcShape1178 = {
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

bbcShape1179 = {
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

bbcShape1180 = {
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

bbcShape1181 = {
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

bbcShape1182 = {
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

bbcShape1183 = {
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

bbcShape1184 = {
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

bbcShape1185 = {
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

bbcShape1186 = {
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

bbcShape1187 = {
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

bbcShape1188 = {
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

bbcShape1189 = {
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

bbcShape1190 = {
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

bbcShape1191 = {
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

bbcShape1192 = {
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

bbcShape1193 = {
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

bbcShape1194 = {
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

bbcShape1195 = {
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

bbcShape1196 = {
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

bbcShape1197 = {
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

bbcShape1198 = {
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

bbcShape1199 = {
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

bbcShape1200 = {
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

bbcShape1201 = {
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

bbcShape1202 = {
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

bbcShape1203 = {
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

bbcShape1204 = {
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

bbcShape1205 = {
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

bbcShape1206 = {
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

bbcShape1207 = {
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

bbcShape1208 = {
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

bbcShape1209 = {
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

bbcShape1210 = {
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

bbcShape1211 = {
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

bbcShape1212 = {
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

bbcShape1213 = {
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

bbcShape1214 = {
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

bbcShape1215 = {
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

bbcShape1216 = {
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

bbcShape1217 = {
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

bbcShape1218 = {
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

bbcShape1219 = {
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

bbcShape1220 = {
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

bbcShape1221 = {
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

bbcShape1222 = {
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

bbcShape1223 = {
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

bbcShape1224 = {
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

bbcShape1225 = {
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

bbcShape1226 = {
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

bbcShape1227 = {
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

bbcShape1228 = {
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

bbcShape1229 = {
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

bbcShape1230 = {
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

bbcShape1231 = {
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

bbcShape1232 = {
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

bbcShape1233 = {
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

bbcShape1234 = {
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

bbcShape1235 = {
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

bbcShape1236 = {
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

bbcShape1237 = {
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

bbcShape1238 = {
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

bbcShape1239 = {
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

bbcShape1240 = {
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

bbcShape1241 = {
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

bbcShape1242 = {
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

bbcShape1243 = {
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

bbcShape1244 = {
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

bbcShape1245 = {
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

bbcShape1246 = {
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

bbcShape1247 = {
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

bbcShape1248 = {
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

bbcShape1249 = {
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

bbcShape1250 = {
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

bbcShape1251 = {
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

bbcShape1252 = {
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

bbcShape1253 = {
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

bbcShape1254 = {
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

bbcShape1255 = {
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

bbcShape1256 = {
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

bbcShape1257 = {
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

bbcShape1258 = {
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

bbcShape1259 = {
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

bbcShape1260 = {
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

bbcShape1261 = {
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

bbcShape1262 = {
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

bbcShape1263 = {
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

bbcShape1264 = {
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

bbcShape1265 = {
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

bbcShape1266 = {
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

bbcShape1267 = {
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

bbcShape1268 = {
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

bbcShape1269 = {
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

bbcShape1270 = {
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

bbcShape1271 = {
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

bbcShape1272 = {
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

bbcShape1273 = {
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

bbcShape1274 = {
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

bbcShape1275 = {
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

bbcShape1276 = {
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

bbcShape1277 = {
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

bbcShape1278 = {
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

bbcShape1279 = {
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

bbcShape1280 = {
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

bbcShape1281 = {
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

bbcShape1282 = {
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

bbcShape1283 = {
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

bbcShape1284 = {
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

bbcShape1285 = {
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

bbcShape1286 = {
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

bbcShape1287 = {
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

bbcShape1288 = {
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

bbcShape1289 = {
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

bbcShape1290 = {
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

bbcShape1291 = {
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

bbcShape1292 = {
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

bbcShape1293 = {
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

bbcShape1294 = {
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

bbcShape1295 = {
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

bbcShape1296 = {
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

bbcShape1297 = {
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

bbcShape1298 = {
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

bbcShape1299 = {
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

bbcShape1300 = {
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

bbcShape1301 = {
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

bbcShape1302 = {
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

bbcShape1303 = {
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

bbcShape1304 = {
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

bbcShape1305 = {
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

bbcShape1306 = {
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

bbcShape1307 = {
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

bbcShape1308 = {
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

bbcShape1309 = {
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

bbcShape1310 = {
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

bbcShape1311 = {
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

bbcShape1312 = {
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

bbcShape1313 = {
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

bbcShape1314 = {
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

bbcShape1315 = {
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

bbcShape1316 = {
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

bbcShape1317 = {
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

bbcShape1318 = {
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

bbcShape1319 = {
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

bbcShape1320 = {
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

bbcShape1321 = {
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

bbcShape1322 = {
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

bbcShape1323 = {
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

bbcShape1324 = {
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

bbcShape1325 = {
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

bbcShape1326 = {
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

bbcShape1327 = {
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

bbcShape1328 = {
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

bbcShape1329 = {
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

bbcShape1330 = {
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

bbcShape1331 = {
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

bbcShape1332 = {
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

bbcShape1333 = {
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

bbcShape1334 = {
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

bbcShape1335 = {
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

bbcShape1336 = {
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

bbcShape1337 = {
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

bbcShape1338 = {
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

bbcShape1339 = {
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

bbcShape1340 = {
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

bbcShape1341 = {
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

bbcShape1342 = {
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

bbcShape1343 = {
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

bbcShape1344 = {
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

bbcShape1345 = {
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

bbcShape1346 = {
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

bbcShape1347 = {
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

bbcShape1348 = {
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

bbcShape1349 = {
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

bbcShape1350 = {
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

bbcShape1351 = {
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

bbcShape1352 = {
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

bbcShape1353 = {
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

bbcShape1354 = {
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

bbcShape1355 = {
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

bbcShape1356 = {
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

bbcShape1357 = {
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

bbcShape1358 = {
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

bbcShape1359 = {
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

bbcShape1360 = {
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

bbcShape1361 = {
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

bbcShape1362 = {
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

bbcShape1363 = {
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

bbcShape1364 = {
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

bbcShape1365 = {
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

bbcShape1366 = {
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

bbcShape1367 = {
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

bbcShape1368 = {
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

bbcShape1369 = {
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

bbcShape1370 = {
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

bbcShape1371 = {
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

bbcShape1372 = {
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

bbcShape1373 = {
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

bbcShape1374 = {
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

bbcShape1375 = {
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

bbcShape1376 = {
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

bbcShape1377 = {
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

bbcShape1378 = {
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

bbcShape1379 = {
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

bbcShape1380 = {
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

bbcShape1381 = {
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

bbcShape1382 = {
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

bbcShape1383 = {
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

bbcShape1384 = {
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

bbcShape1385 = {
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

bbcShape1386 = {
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

bbcShape1387 = {
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

bbcShape1388 = {
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

bbcShape1389 = {
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

bbcShape1390 = {
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

bbcShape1391 = {
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

bbcShape1392 = {
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

bbcShape1393 = {
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

bbcShape1394 = {
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

bbcShape1395 = {
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

bbcShape1396 = {
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

bbcShape1397 = {
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

bbcShape1398 = {
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

bbcShape1399 = {
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

bbcShape1400 = {
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

bbcShape1401 = {
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

bbcShape1402 = {
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

bbcShape1403 = {
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

bbcShape1404 = {
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

bbcShape1405 = {
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

bbcShape1406 = {
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

bbcShape1407 = {
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

bbcShape1408 = {
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

bbcShape1409 = {
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

bbcShape1410 = {
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

bbcShape1411 = {
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

bbcShape1412 = {
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

bbcShape1413 = {
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

bbcShape1414 = {
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

bbcShape1415 = {
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

bbcShape1416 = {
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

bbcShape1417 = {
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

bbcShape1418 = {
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

bbcShape1419 = {
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

bbcShape1420 = {
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

bbcShape1.point.x += -2;
bbcShape1.point.y += -6;

bbcShape2.point.x += 2;
bbcShape2.point.y += -2;

bbcShape3.point.x += -10;
bbcShape3.point.y += -9;

bbcShape4.point.x += 9;
bbcShape4.point.y += 6;

bbcShape5.point.x += 1;
bbcShape5.point.y += -9;

bbcShape6.point.x += 10;
bbcShape6.point.y += -1;

bbcShape7.point.x += -5;
bbcShape7.point.y += -1;

bbcShape8.point.x += 8;
bbcShape8.point.y += 7;

bbcShape9.point.x += -3;
bbcShape9.point.y += 10;

bbcShape10.point.x += -3;
bbcShape10.point.y += 2;

bbcShape11.point.x += 8;
bbcShape11.point.y += -5;

bbcShape12.point.x += 9;
bbcShape12.point.y += -10;

bbcShape13.point.x += 6;
bbcShape13.point.y += 8;

bbcShape14.point.x += -5;
bbcShape14.point.y += 0;

bbcShape15.point.x += 10;
bbcShape15.point.y += -2;

bbcShape16.point.x += 9;
bbcShape16.point.y += -1;

bbcShape17.point.x += 1;
bbcShape17.point.y += 4;

bbcShape18.point.x += 2;
bbcShape18.point.y += -4;

bbcShape19.point.x += -6;
bbcShape19.point.y += -6;

bbcShape20.point.x += -3;
bbcShape20.point.y += -10;

bbcShape21.point.x += 4;
bbcShape21.point.y += 9;

bbcShape22.point.x += -3;
bbcShape22.point.y += 4;

bbcShape23.point.x += 5;
bbcShape23.point.y += 9;

bbcShape24.point.x += 1;
bbcShape24.point.y += 3;

bbcShape25.point.x += 4;
bbcShape25.point.y += 5;

bbcShape26.point.x += 9;
bbcShape26.point.y += 4;

bbcShape27.point.x += 9;
bbcShape27.point.y += -4;

bbcShape28.point.x += 5;
bbcShape28.point.y += -5;

bbcShape29.point.x += 8;
bbcShape29.point.y += 2;

bbcShape30.point.x += 5;
bbcShape30.point.y += -6;

bbcShape31.point.x += 0;
bbcShape31.point.y += -10;

bbcShape32.point.x += 4;
bbcShape32.point.y += 0;

bbcShape33.point.x += -8;
bbcShape33.point.y += -3;

bbcShape34.point.x += -2;
bbcShape34.point.y += -6;

bbcShape35.point.x += 0;
bbcShape35.point.y += 0;

bbcShape36.point.x += 1;
bbcShape36.point.y += 6;

bbcShape37.point.x += -9;
bbcShape37.point.y += -4;

bbcShape38.point.x += -9;
bbcShape38.point.y += 2;

bbcShape39.point.x += 4;
bbcShape39.point.y += 4;

bbcShape40.point.x += -1;
bbcShape40.point.y += 4;

bbcShape41.point.x += -6;
bbcShape41.point.y += 1;

bbcShape42.point.x += -6;
bbcShape42.point.y += -2;

bbcShape43.point.x += -9;
bbcShape43.point.y += 0;

bbcShape44.point.x += -6;
bbcShape44.point.y += 8;

bbcShape45.point.x += 4;
bbcShape45.point.y += 5;

bbcShape46.point.x += 5;
bbcShape46.point.y += -10;

bbcShape47.point.x += 2;
bbcShape47.point.y += -7;

bbcShape48.point.x += 9;
bbcShape48.point.y += 6;

bbcShape49.point.x += -10;
bbcShape49.point.y += 8;

bbcShape50.point.x += -9;
bbcShape50.point.y += -10;

bbcShape51.point.x += -3;
bbcShape51.point.y += 5;

bbcShape52.point.x += -8;
bbcShape52.point.y += 4;

bbcShape53.point.x += 10;
bbcShape53.point.y += 10;

bbcShape54.point.x += 1;
bbcShape54.point.y += -4;

bbcShape55.point.x += 1;
bbcShape55.point.y += 10;

bbcShape56.point.x += 6;
bbcShape56.point.y += 8;

bbcShape57.point.x += -6;
bbcShape57.point.y += -1;

bbcShape58.point.x += 9;
bbcShape58.point.y += -8;

bbcShape59.point.x += 7;
bbcShape59.point.y += 6;

bbcShape60.point.x += 6;
bbcShape60.point.y += 5;

bbcShape61.point.x += -10;
bbcShape61.point.y += -4;

bbcShape62.point.x += -2;
bbcShape62.point.y += 0;

bbcShape63.point.x += 1;
bbcShape63.point.y += 10;

bbcShape64.point.x += -7;
bbcShape64.point.y += -9;

bbcShape65.point.x += 1;
bbcShape65.point.y += 4;

bbcShape66.point.x += -5;
bbcShape66.point.y += 5;

bbcShape67.point.x += -3;
bbcShape67.point.y += -1;

bbcShape68.point.x += 10;
bbcShape68.point.y += -10;

bbcShape69.point.x += 6;
bbcShape69.point.y += -6;

bbcShape70.point.x += -6;
bbcShape70.point.y += 8;

bbcShape71.point.x += 1;
bbcShape71.point.y += 5;

bbcShape72.point.x += 7;
bbcShape72.point.y += 9;

bbcShape73.point.x += 4;
bbcShape73.point.y += 7;

bbcShape74.point.x += 5;
bbcShape74.point.y += 5;

bbcShape75.point.x += 6;
bbcShape75.point.y += -4;

bbcShape76.point.x += -10;
bbcShape76.point.y += -8;

bbcShape77.point.x += -10;
bbcShape77.point.y += -2;

bbcShape78.point.x += -6;
bbcShape78.point.y += 1;

bbcShape79.point.x += 6;
bbcShape79.point.y += 4;

bbcShape80.point.x += -2;
bbcShape80.point.y += -9;

bbcShape81.point.x += -6;
bbcShape81.point.y += -2;

bbcShape82.point.x += -7;
bbcShape82.point.y += -5;

bbcShape83.point.x += -8;
bbcShape83.point.y += 4;

bbcShape84.point.x += -10;
bbcShape84.point.y += 0;

bbcShape85.point.x += 2;
bbcShape85.point.y += -8;

bbcShape86.point.x += 9;
bbcShape86.point.y += -9;

bbcShape87.point.x += -8;
bbcShape87.point.y += 8;

bbcShape88.point.x += 0;
bbcShape88.point.y += 9;

bbcShape89.point.x += 5;
bbcShape89.point.y += -1;

bbcShape90.point.x += 7;
bbcShape90.point.y += 10;

bbcShape91.point.x += 9;
bbcShape91.point.y += -4;

bbcShape92.point.x += -10;
bbcShape92.point.y += 10;

bbcShape93.point.x += 0;
bbcShape93.point.y += -3;

bbcShape94.point.x += -1;
bbcShape94.point.y += 7;

bbcShape95.point.x += 7;
bbcShape95.point.y += 7;

bbcShape96.point.x += -8;
bbcShape96.point.y += 2;

bbcShape97.point.x += 9;
bbcShape97.point.y += 7;

bbcShape98.point.x += -4;
bbcShape98.point.y += -3;

bbcShape99.point.x += 1;
bbcShape99.point.y += 3;

bbcShape100.point.x += 2;
bbcShape100.point.y += 6;

bbcShape101.point.x += -6;
bbcShape101.point.y += 5;

bbcShape102.point.x += -2;
bbcShape102.point.y += 3;

bbcShape103.point.x += -10;
bbcShape103.point.y += -10;

bbcShape104.point.x += -4;
bbcShape104.point.y += 7;

bbcShape105.point.x += 4;
bbcShape105.point.y += 3;

bbcShape106.point.x += -4;
bbcShape106.point.y += 5;

bbcShape107.point.x += 2;
bbcShape107.point.y += -7;

bbcShape108.point.x += 9;
bbcShape108.point.y += -5;

bbcShape109.point.x += 10;
bbcShape109.point.y += -5;

bbcShape110.point.x += 9;
bbcShape110.point.y += -5;

bbcShape111.point.x += -8;
bbcShape111.point.y += -8;

bbcShape112.point.x += -5;
bbcShape112.point.y += 9;

bbcShape113.point.x += 9;
bbcShape113.point.y += 7;

bbcShape114.point.x += 4;
bbcShape114.point.y += -1;

bbcShape115.point.x += -1;
bbcShape115.point.y += 6;

bbcShape116.point.x += 3;
bbcShape116.point.y += -8;

bbcShape117.point.x += 10;
bbcShape117.point.y += 0;

bbcShape118.point.x += -8;
bbcShape118.point.y += 8;

bbcShape119.point.x += -8;
bbcShape119.point.y += -5;

bbcShape120.point.x += -2;
bbcShape120.point.y += -4;

bbcShape121.point.x += 9;
bbcShape121.point.y += -4;

bbcShape122.point.x += -3;
bbcShape122.point.y += -1;

bbcShape123.point.x += 6;
bbcShape123.point.y += -8;

bbcShape124.point.x += -5;
bbcShape124.point.y += 5;

bbcShape125.point.x += -6;
bbcShape125.point.y += 7;

bbcShape126.point.x += 4;
bbcShape126.point.y += -7;

bbcShape127.point.x += 4;
bbcShape127.point.y += 10;

bbcShape128.point.x += -5;
bbcShape128.point.y += -7;

bbcShape129.point.x += -10;
bbcShape129.point.y += -1;

bbcShape130.point.x += -5;
bbcShape130.point.y += -8;

bbcShape131.point.x += -4;
bbcShape131.point.y += -7;

bbcShape132.point.x += -7;
bbcShape132.point.y += -5;

bbcShape133.point.x += -2;
bbcShape133.point.y += 2;

bbcShape134.point.x += -4;
bbcShape134.point.y += -8;

bbcShape135.point.x += -9;
bbcShape135.point.y += -9;

bbcShape136.point.x += 9;
bbcShape136.point.y += -8;

bbcShape137.point.x += 3;
bbcShape137.point.y += -7;

bbcShape138.point.x += 9;
bbcShape138.point.y += -7;

bbcShape139.point.x += 0;
bbcShape139.point.y += -10;

bbcShape140.point.x += 4;
bbcShape140.point.y += 10;

bbcShape141.point.x += -4;
bbcShape141.point.y += -7;

bbcShape142.point.x += 6;
bbcShape142.point.y += 1;

bbcShape143.point.x += 2;
bbcShape143.point.y += -1;

bbcShape144.point.x += -4;
bbcShape144.point.y += 1;

bbcShape145.point.x += 0;
bbcShape145.point.y += 0;

bbcShape146.point.x += -6;
bbcShape146.point.y += 1;

bbcShape147.point.x += 2;
bbcShape147.point.y += 0;

bbcShape148.point.x += -2;
bbcShape148.point.y += -9;

bbcShape149.point.x += 10;
bbcShape149.point.y += -7;

bbcShape150.point.x += -8;
bbcShape150.point.y += 7;

bbcShape151.point.x += -9;
bbcShape151.point.y += 9;

bbcShape152.point.x += 0;
bbcShape152.point.y += 8;

bbcShape153.point.x += -9;
bbcShape153.point.y += -1;

bbcShape154.point.x += 2;
bbcShape154.point.y += 1;

bbcShape155.point.x += 4;
bbcShape155.point.y += 6;

bbcShape156.point.x += 2;
bbcShape156.point.y += -3;

bbcShape157.point.x += -1;
bbcShape157.point.y += -7;

bbcShape158.point.x += -7;
bbcShape158.point.y += -4;

bbcShape159.point.x += -3;
bbcShape159.point.y += 8;

bbcShape160.point.x += 5;
bbcShape160.point.y += 10;

bbcShape161.point.x += -9;
bbcShape161.point.y += 1;

bbcShape162.point.x += -2;
bbcShape162.point.y += 5;

bbcShape163.point.x += 3;
bbcShape163.point.y += 9;

bbcShape164.point.x += 6;
bbcShape164.point.y += 5;

bbcShape165.point.x += 9;
bbcShape165.point.y += -2;

bbcShape166.point.x += 4;
bbcShape166.point.y += 3;

bbcShape167.point.x += -6;
bbcShape167.point.y += -7;

bbcShape168.point.x += -4;
bbcShape168.point.y += -1;

bbcShape169.point.x += -2;
bbcShape169.point.y += 3;

bbcShape170.point.x += -2;
bbcShape170.point.y += -5;

bbcShape171.point.x += -7;
bbcShape171.point.y += -2;

bbcShape172.point.x += 7;
bbcShape172.point.y += 2;

bbcShape173.point.x += 7;
bbcShape173.point.y += 8;

bbcShape174.point.x += -6;
bbcShape174.point.y += -9;

bbcShape175.point.x += -1;
bbcShape175.point.y += 6;

bbcShape176.point.x += 7;
bbcShape176.point.y += -5;

bbcShape177.point.x += 3;
bbcShape177.point.y += -5;

bbcShape178.point.x += -1;
bbcShape178.point.y += -6;

bbcShape179.point.x += 0;
bbcShape179.point.y += 7;

bbcShape180.point.x += -7;
bbcShape180.point.y += -6;

bbcShape181.point.x += 4;
bbcShape181.point.y += -4;

bbcShape182.point.x += 9;
bbcShape182.point.y += 10;

bbcShape183.point.x += -2;
bbcShape183.point.y += 0;

bbcShape184.point.x += 4;
bbcShape184.point.y += -10;

bbcShape185.point.x += 8;
bbcShape185.point.y += -4;

bbcShape186.point.x += -9;
bbcShape186.point.y += -7;

bbcShape187.point.x += -7;
bbcShape187.point.y += 1;

bbcShape188.point.x += 8;
bbcShape188.point.y += 5;

bbcShape189.point.x += -10;
bbcShape189.point.y += -5;

bbcShape190.point.x += 8;
bbcShape190.point.y += 5;

bbcShape191.point.x += 9;
bbcShape191.point.y += 6;

bbcShape192.point.x += -3;
bbcShape192.point.y += -5;

bbcShape193.point.x += 6;
bbcShape193.point.y += -1;

bbcShape194.point.x += -1;
bbcShape194.point.y += -10;

bbcShape195.point.x += -2;
bbcShape195.point.y += 4;

bbcShape196.point.x += 10;
bbcShape196.point.y += -7;

bbcShape197.point.x += -5;
bbcShape197.point.y += -5;

bbcShape198.point.x += 8;
bbcShape198.point.y += -2;

bbcShape199.point.x += -3;
bbcShape199.point.y += -8;

bbcShape200.point.x += -8;
bbcShape200.point.y += 10;

bbcShape201.point.x += 6;
bbcShape201.point.y += -9;

bbcShape202.point.x += -2;
bbcShape202.point.y += -7;

bbcShape203.point.x += -3;
bbcShape203.point.y += -7;

bbcShape204.point.x += -6;
bbcShape204.point.y += 6;

bbcShape205.point.x += 2;
bbcShape205.point.y += 7;

bbcShape206.point.x += 7;
bbcShape206.point.y += 7;

bbcShape207.point.x += -3;
bbcShape207.point.y += 6;

bbcShape208.point.x += -3;
bbcShape208.point.y += 10;

bbcShape209.point.x += -2;
bbcShape209.point.y += -5;

bbcShape210.point.x += -9;
bbcShape210.point.y += -10;

bbcShape211.point.x += 2;
bbcShape211.point.y += 3;

bbcShape212.point.x += 8;
bbcShape212.point.y += -3;

bbcShape213.point.x += -8;
bbcShape213.point.y += 6;

bbcShape214.point.x += 0;
bbcShape214.point.y += 7;

bbcShape215.point.x += 8;
bbcShape215.point.y += 6;

bbcShape216.point.x += -6;
bbcShape216.point.y += -4;

bbcShape217.point.x += -8;
bbcShape217.point.y += 8;

bbcShape218.point.x += -10;
bbcShape218.point.y += -1;

bbcShape219.point.x += 7;
bbcShape219.point.y += -5;

bbcShape220.point.x += -8;
bbcShape220.point.y += 2;

bbcShape221.point.x += -1;
bbcShape221.point.y += -10;

bbcShape222.point.x += 8;
bbcShape222.point.y += -6;

bbcShape223.point.x += -1;
bbcShape223.point.y += 4;

bbcShape224.point.x += 3;
bbcShape224.point.y += -7;

bbcShape225.point.x += -6;
bbcShape225.point.y += -4;

bbcShape226.point.x += 1;
bbcShape226.point.y += 6;

bbcShape227.point.x += 0;
bbcShape227.point.y += -4;

bbcShape228.point.x += 1;
bbcShape228.point.y += 6;

bbcShape229.point.x += -2;
bbcShape229.point.y += 2;

bbcShape230.point.x += 7;
bbcShape230.point.y += -10;

bbcShape231.point.x += 3;
bbcShape231.point.y += -3;

bbcShape232.point.x += 5;
bbcShape232.point.y += 3;

bbcShape233.point.x += 9;
bbcShape233.point.y += 7;

bbcShape234.point.x += 6;
bbcShape234.point.y += -8;

bbcShape235.point.x += -9;
bbcShape235.point.y += 4;

bbcShape236.point.x += -7;
bbcShape236.point.y += 5;

bbcShape237.point.x += -5;
bbcShape237.point.y += -9;

bbcShape238.point.x += -3;
bbcShape238.point.y += 10;

bbcShape239.point.x += -9;
bbcShape239.point.y += 8;

bbcShape240.point.x += 4;
bbcShape240.point.y += -3;

bbcShape241.point.x += 0;
bbcShape241.point.y += 3;

bbcShape242.point.x += -4;
bbcShape242.point.y += -8;

bbcShape243.point.x += -1;
bbcShape243.point.y += 1;

bbcShape244.point.x += 5;
bbcShape244.point.y += -7;

bbcShape245.point.x += 1;
bbcShape245.point.y += -9;

bbcShape246.point.x += 5;
bbcShape246.point.y += -5;

bbcShape247.point.x += 0;
bbcShape247.point.y += 2;

bbcShape248.point.x += 8;
bbcShape248.point.y += 2;

bbcShape249.point.x += 3;
bbcShape249.point.y += 7;

bbcShape250.point.x += 5;
bbcShape250.point.y += -4;

bbcShape251.point.x += -10;
bbcShape251.point.y += -3;

bbcShape252.point.x += -9;
bbcShape252.point.y += -8;

bbcShape253.point.x += 10;
bbcShape253.point.y += -9;

bbcShape254.point.x += -7;
bbcShape254.point.y += -4;

bbcShape255.point.x += -9;
bbcShape255.point.y += 3;

bbcShape256.point.x += 10;
bbcShape256.point.y += 10;

bbcShape257.point.x += 1;
bbcShape257.point.y += -3;

bbcShape258.point.x += 0;
bbcShape258.point.y += -10;

bbcShape259.point.x += -5;
bbcShape259.point.y += 1;

bbcShape260.point.x += 9;
bbcShape260.point.y += -10;

bbcShape261.point.x += -10;
bbcShape261.point.y += 9;

bbcShape262.point.x += 4;
bbcShape262.point.y += 0;

bbcShape263.point.x += -1;
bbcShape263.point.y += 6;

bbcShape264.point.x += 3;
bbcShape264.point.y += 2;

bbcShape265.point.x += 3;
bbcShape265.point.y += 0;

bbcShape266.point.x += -3;
bbcShape266.point.y += -8;

bbcShape267.point.x += -9;
bbcShape267.point.y += 3;

bbcShape268.point.x += -3;
bbcShape268.point.y += 1;

bbcShape269.point.x += -7;
bbcShape269.point.y += 1;

bbcShape270.point.x += 0;
bbcShape270.point.y += -3;

bbcShape271.point.x += 4;
bbcShape271.point.y += 8;

bbcShape272.point.x += -6;
bbcShape272.point.y += 2;

bbcShape273.point.x += -2;
bbcShape273.point.y += 6;

bbcShape274.point.x += 10;
bbcShape274.point.y += -4;

bbcShape275.point.x += 1;
bbcShape275.point.y += -1;

bbcShape276.point.x += 5;
bbcShape276.point.y += -1;

bbcShape277.point.x += -9;
bbcShape277.point.y += 5;

bbcShape278.point.x += -1;
bbcShape278.point.y += -8;

bbcShape279.point.x += -10;
bbcShape279.point.y += 1;

bbcShape280.point.x += -8;
bbcShape280.point.y += 9;

bbcShape281.point.x += -6;
bbcShape281.point.y += 6;

bbcShape282.point.x += -8;
bbcShape282.point.y += 3;

bbcShape283.point.x += -6;
bbcShape283.point.y += -7;

bbcShape284.point.x += 9;
bbcShape284.point.y += -8;

bbcShape285.point.x += 1;
bbcShape285.point.y += -1;

bbcShape286.point.x += -2;
bbcShape286.point.y += -1;

bbcShape287.point.x += -3;
bbcShape287.point.y += -2;

bbcShape288.point.x += -4;
bbcShape288.point.y += 6;

bbcShape289.point.x += 3;
bbcShape289.point.y += 3;

bbcShape290.point.x += -7;
bbcShape290.point.y += 3;

bbcShape291.point.x += -7;
bbcShape291.point.y += -4;

bbcShape292.point.x += 8;
bbcShape292.point.y += 4;

bbcShape293.point.x += 9;
bbcShape293.point.y += -7;

bbcShape294.point.x += 0;
bbcShape294.point.y += -10;

bbcShape295.point.x += -8;
bbcShape295.point.y += 3;

bbcShape296.point.x += -8;
bbcShape296.point.y += -3;

bbcShape297.point.x += -9;
bbcShape297.point.y += -7;

bbcShape298.point.x += -3;
bbcShape298.point.y += -4;

bbcShape299.point.x += 4;
bbcShape299.point.y += -1;

bbcShape300.point.x += 4;
bbcShape300.point.y += 6;

bbcShape301.point.x += 2;
bbcShape301.point.y += -3;

bbcShape302.point.x += -2;
bbcShape302.point.y += -10;

bbcShape303.point.x += 4;
bbcShape303.point.y += 1;

bbcShape304.point.x += 4;
bbcShape304.point.y += 7;

bbcShape305.point.x += 10;
bbcShape305.point.y += -1;

bbcShape306.point.x += -4;
bbcShape306.point.y += 9;

bbcShape307.point.x += 4;
bbcShape307.point.y += -4;

bbcShape308.point.x += 3;
bbcShape308.point.y += -6;

bbcShape309.point.x += -6;
bbcShape309.point.y += 8;

bbcShape310.point.x += -9;
bbcShape310.point.y += 3;

bbcShape311.point.x += -8;
bbcShape311.point.y += 2;

bbcShape312.point.x += -10;
bbcShape312.point.y += 1;

bbcShape313.point.x += -4;
bbcShape313.point.y += -7;

bbcShape314.point.x += 0;
bbcShape314.point.y += -3;

bbcShape315.point.x += 3;
bbcShape315.point.y += -10;

bbcShape316.point.x += -8;
bbcShape316.point.y += 2;

bbcShape317.point.x += 10;
bbcShape317.point.y += -9;

bbcShape318.point.x += 0;
bbcShape318.point.y += -2;

bbcShape319.point.x += -10;
bbcShape319.point.y += 1;

bbcShape320.point.x += -7;
bbcShape320.point.y += 2;

bbcShape321.point.x += 8;
bbcShape321.point.y += -7;

bbcShape322.point.x += -10;
bbcShape322.point.y += 3;

bbcShape323.point.x += 3;
bbcShape323.point.y += -7;

bbcShape324.point.x += -2;
bbcShape324.point.y += -5;

bbcShape325.point.x += -9;
bbcShape325.point.y += 1;

bbcShape326.point.x += -7;
bbcShape326.point.y += 0;

bbcShape327.point.x += -3;
bbcShape327.point.y += -5;

bbcShape328.point.x += 9;
bbcShape328.point.y += -10;

bbcShape329.point.x += 2;
bbcShape329.point.y += 3;

bbcShape330.point.x += 7;
bbcShape330.point.y += 5;

bbcShape331.point.x += 0;
bbcShape331.point.y += 4;

bbcShape332.point.x += 10;
bbcShape332.point.y += 10;

bbcShape333.point.x += -10;
bbcShape333.point.y += -7;

bbcShape334.point.x += -3;
bbcShape334.point.y += -9;

bbcShape335.point.x += -1;
bbcShape335.point.y += 3;

bbcShape336.point.x += 4;
bbcShape336.point.y += -1;

bbcShape337.point.x += -7;
bbcShape337.point.y += -5;

bbcShape338.point.x += -4;
bbcShape338.point.y += -7;

bbcShape339.point.x += 9;
bbcShape339.point.y += -10;

bbcShape340.point.x += -2;
bbcShape340.point.y += 10;

bbcShape341.point.x += 4;
bbcShape341.point.y += 4;

bbcShape342.point.x += 1;
bbcShape342.point.y += 3;

bbcShape343.point.x += -8;
bbcShape343.point.y += -3;

bbcShape344.point.x += 6;
bbcShape344.point.y += 7;

bbcShape345.point.x += -9;
bbcShape345.point.y += 9;

bbcShape346.point.x += -2;
bbcShape346.point.y += 2;

bbcShape347.point.x += 5;
bbcShape347.point.y += 9;

bbcShape348.point.x += -10;
bbcShape348.point.y += 10;

bbcShape349.point.x += -1;
bbcShape349.point.y += 6;

bbcShape350.point.x += 9;
bbcShape350.point.y += -2;

bbcShape351.point.x += 10;
bbcShape351.point.y += -6;

bbcShape352.point.x += 9;
bbcShape352.point.y += -1;

bbcShape353.point.x += -10;
bbcShape353.point.y += 6;

bbcShape354.point.x += -1;
bbcShape354.point.y += -7;

bbcShape355.point.x += 10;
bbcShape355.point.y += 2;

bbcShape356.point.x += -7;
bbcShape356.point.y += -10;

bbcShape357.point.x += -2;
bbcShape357.point.y += -10;

bbcShape358.point.x += 9;
bbcShape358.point.y += 10;

bbcShape359.point.x += -6;
bbcShape359.point.y += -10;

bbcShape360.point.x += -5;
bbcShape360.point.y += 6;

bbcShape361.point.x += 9;
bbcShape361.point.y += 9;

bbcShape362.point.x += 9;
bbcShape362.point.y += 1;

bbcShape363.point.x += 9;
bbcShape363.point.y += -6;

bbcShape364.point.x += 6;
bbcShape364.point.y += 8;

bbcShape365.point.x += 5;
bbcShape365.point.y += -6;

bbcShape366.point.x += -2;
bbcShape366.point.y += 9;

bbcShape367.point.x += 8;
bbcShape367.point.y += 4;

bbcShape368.point.x += 6;
bbcShape368.point.y += -4;

bbcShape369.point.x += -10;
bbcShape369.point.y += 2;

bbcShape370.point.x += -6;
bbcShape370.point.y += -7;

bbcShape371.point.x += -2;
bbcShape371.point.y += -7;

bbcShape372.point.x += -7;
bbcShape372.point.y += 0;

bbcShape373.point.x += -6;
bbcShape373.point.y += -3;

bbcShape374.point.x += 4;
bbcShape374.point.y += -8;

bbcShape375.point.x += 5;
bbcShape375.point.y += 9;

bbcShape376.point.x += -10;
bbcShape376.point.y += 5;

bbcShape377.point.x += -6;
bbcShape377.point.y += -8;

bbcShape378.point.x += 0;
bbcShape378.point.y += 3;

bbcShape379.point.x += -3;
bbcShape379.point.y += -6;

bbcShape380.point.x += -8;
bbcShape380.point.y += 10;

bbcShape381.point.x += -1;
bbcShape381.point.y += 6;

bbcShape382.point.x += -7;
bbcShape382.point.y += 1;

bbcShape383.point.x += 1;
bbcShape383.point.y += -7;

bbcShape384.point.x += -10;
bbcShape384.point.y += 4;

bbcShape385.point.x += -2;
bbcShape385.point.y += -2;

bbcShape386.point.x += -3;
bbcShape386.point.y += 5;

bbcShape387.point.x += -5;
bbcShape387.point.y += -5;

bbcShape388.point.x += 9;
bbcShape388.point.y += -2;

bbcShape389.point.x += 1;
bbcShape389.point.y += -7;

bbcShape390.point.x += -3;
bbcShape390.point.y += -9;

bbcShape391.point.x += -3;
bbcShape391.point.y += 0;

bbcShape392.point.x += -7;
bbcShape392.point.y += -5;

bbcShape393.point.x += -10;
bbcShape393.point.y += -6;

bbcShape394.point.x += -5;
bbcShape394.point.y += 10;

bbcShape395.point.x += 10;
bbcShape395.point.y += 4;

bbcShape396.point.x += 3;
bbcShape396.point.y += 8;

bbcShape397.point.x += -5;
bbcShape397.point.y += 2;

bbcShape398.point.x += -4;
bbcShape398.point.y += -7;

bbcShape399.point.x += -1;
bbcShape399.point.y += 10;

bbcShape400.point.x += 7;
bbcShape400.point.y += 2;

bbcShape401.point.x += -4;
bbcShape401.point.y += 2;

bbcShape402.point.x += 3;
bbcShape402.point.y += -2;

bbcShape403.point.x += -9;
bbcShape403.point.y += -1;

bbcShape404.point.x += 7;
bbcShape404.point.y += -7;

bbcShape405.point.x += 4;
bbcShape405.point.y += 0;

bbcShape406.point.x += -3;
bbcShape406.point.y += 5;

bbcShape407.point.x += -3;
bbcShape407.point.y += 7;

bbcShape408.point.x += 5;
bbcShape408.point.y += -7;

bbcShape409.point.x += -1;
bbcShape409.point.y += 1;

bbcShape410.point.x += 1;
bbcShape410.point.y += -1;

bbcShape411.point.x += 6;
bbcShape411.point.y += 0;

bbcShape412.point.x += -3;
bbcShape412.point.y += -1;

bbcShape413.point.x += -2;
bbcShape413.point.y += -3;

bbcShape414.point.x += -8;
bbcShape414.point.y += -6;

bbcShape415.point.x += -5;
bbcShape415.point.y += 7;

bbcShape416.point.x += -8;
bbcShape416.point.y += -9;

bbcShape417.point.x += -3;
bbcShape417.point.y += 6;

bbcShape418.point.x += 0;
bbcShape418.point.y += -4;

bbcShape419.point.x += -3;
bbcShape419.point.y += 4;

bbcShape420.point.x += 10;
bbcShape420.point.y += -3;

bbcShape421.point.x += 10;
bbcShape421.point.y += 10;

bbcShape422.point.x += -9;
bbcShape422.point.y += 6;

bbcShape423.point.x += 9;
bbcShape423.point.y += -8;

bbcShape424.point.x += -1;
bbcShape424.point.y += 7;

bbcShape425.point.x += 1;
bbcShape425.point.y += -5;

bbcShape426.point.x += 3;
bbcShape426.point.y += 5;

bbcShape427.point.x += 9;
bbcShape427.point.y += 2;

bbcShape428.point.x += 1;
bbcShape428.point.y += 6;

bbcShape429.point.x += -8;
bbcShape429.point.y += 7;

bbcShape430.point.x += 8;
bbcShape430.point.y += -10;

bbcShape431.point.x += -3;
bbcShape431.point.y += -3;

bbcShape432.point.x += -4;
bbcShape432.point.y += 8;

bbcShape433.point.x += 8;
bbcShape433.point.y += -8;

bbcShape434.point.x += -8;
bbcShape434.point.y += 8;

bbcShape435.point.x += -5;
bbcShape435.point.y += -3;

bbcShape436.point.x += -5;
bbcShape436.point.y += 7;

bbcShape437.point.x += 1;
bbcShape437.point.y += 9;

bbcShape438.point.x += -6;
bbcShape438.point.y += 7;

bbcShape439.point.x += -5;
bbcShape439.point.y += 5;

bbcShape440.point.x += -4;
bbcShape440.point.y += 1;

bbcShape441.point.x += 10;
bbcShape441.point.y += -4;

bbcShape442.point.x += -1;
bbcShape442.point.y += 8;

bbcShape443.point.x += -2;
bbcShape443.point.y += -1;

bbcShape444.point.x += 1;
bbcShape444.point.y += -9;

bbcShape445.point.x += -3;
bbcShape445.point.y += -9;

bbcShape446.point.x += -5;
bbcShape446.point.y += 2;

bbcShape447.point.x += 3;
bbcShape447.point.y += 4;

bbcShape448.point.x += -5;
bbcShape448.point.y += -4;

bbcShape449.point.x += -2;
bbcShape449.point.y += 0;

bbcShape450.point.x += 3;
bbcShape450.point.y += -8;

bbcShape451.point.x += 10;
bbcShape451.point.y += 7;

bbcShape452.point.x += -10;
bbcShape452.point.y += 6;

bbcShape453.point.x += 3;
bbcShape453.point.y += 9;

bbcShape454.point.x += -5;
bbcShape454.point.y += 10;

bbcShape455.point.x += -4;
bbcShape455.point.y += -9;

bbcShape456.point.x += 6;
bbcShape456.point.y += 9;

bbcShape457.point.x += -1;
bbcShape457.point.y += -2;

bbcShape458.point.x += -3;
bbcShape458.point.y += 3;

bbcShape459.point.x += 6;
bbcShape459.point.y += 10;

bbcShape460.point.x += 6;
bbcShape460.point.y += -9;

bbcShape461.point.x += 0;
bbcShape461.point.y += -2;

bbcShape462.point.x += 5;
bbcShape462.point.y += 7;

bbcShape463.point.x += 0;
bbcShape463.point.y += 6;

bbcShape464.point.x += -6;
bbcShape464.point.y += 6;

bbcShape465.point.x += 3;
bbcShape465.point.y += 6;

bbcShape466.point.x += -6;
bbcShape466.point.y += -3;

bbcShape467.point.x += -3;
bbcShape467.point.y += -1;

bbcShape468.point.x += -2;
bbcShape468.point.y += 4;

bbcShape469.point.x += -9;
bbcShape469.point.y += 3;

bbcShape470.point.x += 7;
bbcShape470.point.y += -10;

bbcShape471.point.x += 8;
bbcShape471.point.y += 10;

bbcShape472.point.x += 9;
bbcShape472.point.y += 5;

bbcShape473.point.x += -9;
bbcShape473.point.y += -3;

bbcShape474.point.x += 6;
bbcShape474.point.y += 9;

bbcShape475.point.x += -10;
bbcShape475.point.y += -9;

bbcShape476.point.x += -6;
bbcShape476.point.y += 7;

bbcShape477.point.x += -5;
bbcShape477.point.y += -1;

bbcShape478.point.x += -7;
bbcShape478.point.y += -9;

bbcShape479.point.x += 10;
bbcShape479.point.y += -1;

bbcShape480.point.x += -9;
bbcShape480.point.y += -3;

bbcShape481.point.x += -8;
bbcShape481.point.y += -6;

bbcShape482.point.x += 8;
bbcShape482.point.y += 0;

bbcShape483.point.x += -8;
bbcShape483.point.y += 6;

bbcShape484.point.x += -1;
bbcShape484.point.y += -7;

bbcShape485.point.x += 3;
bbcShape485.point.y += -3;

bbcShape486.point.x += -9;
bbcShape486.point.y += -2;

bbcShape487.point.x += -8;
bbcShape487.point.y += 7;

bbcShape488.point.x += -9;
bbcShape488.point.y += 7;

bbcShape489.point.x += 1;
bbcShape489.point.y += -4;

bbcShape490.point.x += 0;
bbcShape490.point.y += -8;

bbcShape491.point.x += 6;
bbcShape491.point.y += -10;

bbcShape492.point.x += -8;
bbcShape492.point.y += -1;

bbcShape493.point.x += 9;
bbcShape493.point.y += -2;

bbcShape494.point.x += -7;
bbcShape494.point.y += -6;

bbcShape495.point.x += 10;
bbcShape495.point.y += -10;

bbcShape496.point.x += -8;
bbcShape496.point.y += -4;

bbcShape497.point.x += 7;
bbcShape497.point.y += 5;

bbcShape498.point.x += -7;
bbcShape498.point.y += 2;

bbcShape499.point.x += -4;
bbcShape499.point.y += -2;

bbcShape500.point.x += -9;
bbcShape500.point.y += -4;

bbcShape501.point.x += -5;
bbcShape501.point.y += 1;

bbcShape502.point.x += 0;
bbcShape502.point.y += -4;

bbcShape503.point.x += 1;
bbcShape503.point.y += 2;

bbcShape504.point.x += -2;
bbcShape504.point.y += 1;

bbcShape505.point.x += 0;
bbcShape505.point.y += 9;

bbcShape506.point.x += -10;
bbcShape506.point.y += 5;

bbcShape507.point.x += 7;
bbcShape507.point.y += 1;

bbcShape508.point.x += 4;
bbcShape508.point.y += 8;

bbcShape509.point.x += -7;
bbcShape509.point.y += -3;

bbcShape510.point.x += -4;
bbcShape510.point.y += -4;

bbcShape511.point.x += 0;
bbcShape511.point.y += 8;

bbcShape512.point.x += -7;
bbcShape512.point.y += 2;

bbcShape513.point.x += -6;
bbcShape513.point.y += -2;

bbcShape514.point.x += 8;
bbcShape514.point.y += -8;

bbcShape515.point.x += -5;
bbcShape515.point.y += -6;

bbcShape516.point.x += 2;
bbcShape516.point.y += -8;

bbcShape517.point.x += 5;
bbcShape517.point.y += -7;

bbcShape518.point.x += -7;
bbcShape518.point.y += 7;

bbcShape519.point.x += 1;
bbcShape519.point.y += -10;

bbcShape520.point.x += 2;
bbcShape520.point.y += 0;

bbcShape521.point.x += 6;
bbcShape521.point.y += 2;

bbcShape522.point.x += -1;
bbcShape522.point.y += 8;

bbcShape523.point.x += 10;
bbcShape523.point.y += -6;

bbcShape524.point.x += 1;
bbcShape524.point.y += 3;

bbcShape525.point.x += 2;
bbcShape525.point.y += -7;

bbcShape526.point.x += -3;
bbcShape526.point.y += 10;

bbcShape527.point.x += -6;
bbcShape527.point.y += 8;

bbcShape528.point.x += 9;
bbcShape528.point.y += -1;

bbcShape529.point.x += 5;
bbcShape529.point.y += 5;

bbcShape530.point.x += 3;
bbcShape530.point.y += 9;

bbcShape531.point.x += -9;
bbcShape531.point.y += 5;

bbcShape532.point.x += -4;
bbcShape532.point.y += 1;

bbcShape533.point.x += 9;
bbcShape533.point.y += 6;

bbcShape534.point.x += 0;
bbcShape534.point.y += 3;

bbcShape535.point.x += -3;
bbcShape535.point.y += -3;

bbcShape536.point.x += 10;
bbcShape536.point.y += 5;

bbcShape537.point.x += 3;
bbcShape537.point.y += 0;

bbcShape538.point.x += 0;
bbcShape538.point.y += -6;

bbcShape539.point.x += 7;
bbcShape539.point.y += -6;

bbcShape540.point.x += 4;
bbcShape540.point.y += -5;

bbcShape541.point.x += 7;
bbcShape541.point.y += 1;

bbcShape542.point.x += 10;
bbcShape542.point.y += -7;

bbcShape543.point.x += -4;
bbcShape543.point.y += -8;

bbcShape544.point.x += -4;
bbcShape544.point.y += 10;

bbcShape545.point.x += -1;
bbcShape545.point.y += -4;

bbcShape546.point.x += -5;
bbcShape546.point.y += 2;

bbcShape547.point.x += -4;
bbcShape547.point.y += 10;

bbcShape548.point.x += -7;
bbcShape548.point.y += -2;

bbcShape549.point.x += -8;
bbcShape549.point.y += -3;

bbcShape550.point.x += -9;
bbcShape550.point.y += 1;

bbcShape551.point.x += -10;
bbcShape551.point.y += -6;

bbcShape552.point.x += -4;
bbcShape552.point.y += -6;

bbcShape553.point.x += 7;
bbcShape553.point.y += -10;

bbcShape554.point.x += -7;
bbcShape554.point.y += 9;

bbcShape555.point.x += -2;
bbcShape555.point.y += 4;

bbcShape556.point.x += -5;
bbcShape556.point.y += -6;

bbcShape557.point.x += 10;
bbcShape557.point.y += 4;

bbcShape558.point.x += -7;
bbcShape558.point.y += 3;

bbcShape559.point.x += -4;
bbcShape559.point.y += 0;

bbcShape560.point.x += -7;
bbcShape560.point.y += -7;

bbcShape561.point.x += -4;
bbcShape561.point.y += -4;

bbcShape562.point.x += 1;
bbcShape562.point.y += 2;

bbcShape563.point.x += -2;
bbcShape563.point.y += -2;

bbcShape564.point.x += 3;
bbcShape564.point.y += 1;

bbcShape565.point.x += 0;
bbcShape565.point.y += -5;

bbcShape566.point.x += 4;
bbcShape566.point.y += -4;

bbcShape567.point.x += 5;
bbcShape567.point.y += -2;

bbcShape568.point.x += -7;
bbcShape568.point.y += 7;

bbcShape569.point.x += -1;
bbcShape569.point.y += 10;

bbcShape570.point.x += -6;
bbcShape570.point.y += -8;

bbcShape571.point.x += 4;
bbcShape571.point.y += 0;

bbcShape572.point.x += -10;
bbcShape572.point.y += -6;

bbcShape573.point.x += 6;
bbcShape573.point.y += 6;

bbcShape574.point.x += -1;
bbcShape574.point.y += -4;

bbcShape575.point.x += 7;
bbcShape575.point.y += -8;

bbcShape576.point.x += 4;
bbcShape576.point.y += 1;

bbcShape577.point.x += -1;
bbcShape577.point.y += 0;

bbcShape578.point.x += 10;
bbcShape578.point.y += -10;

bbcShape579.point.x += -6;
bbcShape579.point.y += 1;

bbcShape580.point.x += 8;
bbcShape580.point.y += -8;

bbcShape581.point.x += -2;
bbcShape581.point.y += 9;

bbcShape582.point.x += -1;
bbcShape582.point.y += 8;

bbcShape583.point.x += -2;
bbcShape583.point.y += -10;

bbcShape584.point.x += -2;
bbcShape584.point.y += -6;

bbcShape585.point.x += -4;
bbcShape585.point.y += 0;

bbcShape586.point.x += 9;
bbcShape586.point.y += -8;

bbcShape587.point.x += -7;
bbcShape587.point.y += 7;

bbcShape588.point.x += -1;
bbcShape588.point.y += -3;

bbcShape589.point.x += 4;
bbcShape589.point.y += 0;

bbcShape590.point.x += -3;
bbcShape590.point.y += 0;

bbcShape591.point.x += -7;
bbcShape591.point.y += -3;

bbcShape592.point.x += -5;
bbcShape592.point.y += 5;

bbcShape593.point.x += 7;
bbcShape593.point.y += -2;

bbcShape594.point.x += 5;
bbcShape594.point.y += -1;

bbcShape595.point.x += -5;
bbcShape595.point.y += 3;

bbcShape596.point.x += 8;
bbcShape596.point.y += 3;

bbcShape597.point.x += 8;
bbcShape597.point.y += -7;

bbcShape598.point.x += 2;
bbcShape598.point.y += -10;

bbcShape599.point.x += 9;
bbcShape599.point.y += 0;

bbcShape600.point.x += -8;
bbcShape600.point.y += 5;

bbcShape601.point.x += -6;
bbcShape601.point.y += -4;

bbcShape602.point.x += -10;
bbcShape602.point.y += 6;

bbcShape603.point.x += -5;
bbcShape603.point.y += 8;

bbcShape604.point.x += 4;
bbcShape604.point.y += 6;

bbcShape605.point.x += 1;
bbcShape605.point.y += -4;

bbcShape606.point.x += 10;
bbcShape606.point.y += 10;

bbcShape607.point.x += -3;
bbcShape607.point.y += 4;

bbcShape608.point.x += -6;
bbcShape608.point.y += -10;

bbcShape609.point.x += 0;
bbcShape609.point.y += 2;

bbcShape610.point.x += 4;
bbcShape610.point.y += -4;

bbcShape611.point.x += -3;
bbcShape611.point.y += 1;

bbcShape612.point.x += -7;
bbcShape612.point.y += 1;

bbcShape613.point.x += -8;
bbcShape613.point.y += 1;

bbcShape614.point.x += 9;
bbcShape614.point.y += 2;

bbcShape615.point.x += -3;
bbcShape615.point.y += 10;

bbcShape616.point.x += 2;
bbcShape616.point.y += -9;

bbcShape617.point.x += -10;
bbcShape617.point.y += 6;

bbcShape618.point.x += 7;
bbcShape618.point.y += 8;

bbcShape619.point.x += -9;
bbcShape619.point.y += -5;

bbcShape620.point.x += -10;
bbcShape620.point.y += -5;

bbcShape621.point.x += -2;
bbcShape621.point.y += -8;

bbcShape622.point.x += -8;
bbcShape622.point.y += -3;

bbcShape623.point.x += 9;
bbcShape623.point.y += -5;

bbcShape624.point.x += 8;
bbcShape624.point.y += -8;

bbcShape625.point.x += -6;
bbcShape625.point.y += 1;

bbcShape626.point.x += 3;
bbcShape626.point.y += 3;

bbcShape627.point.x += 6;
bbcShape627.point.y += 9;

bbcShape628.point.x += -3;
bbcShape628.point.y += -9;

bbcShape629.point.x += 10;
bbcShape629.point.y += 4;

bbcShape630.point.x += -1;
bbcShape630.point.y += 10;

bbcShape631.point.x += -5;
bbcShape631.point.y += 4;

bbcShape632.point.x += -5;
bbcShape632.point.y += -7;

bbcShape633.point.x += -7;
bbcShape633.point.y += -3;

bbcShape634.point.x += -9;
bbcShape634.point.y += -8;

bbcShape635.point.x += 7;
bbcShape635.point.y += -3;

bbcShape636.point.x += -2;
bbcShape636.point.y += 7;

bbcShape637.point.x += -7;
bbcShape637.point.y += -9;

bbcShape638.point.x += 9;
bbcShape638.point.y += -3;

bbcShape639.point.x += -5;
bbcShape639.point.y += 8;

bbcShape640.point.x += 8;
bbcShape640.point.y += -4;

bbcShape641.point.x += -4;
bbcShape641.point.y += -8;

bbcShape642.point.x += 3;
bbcShape642.point.y += 9;

bbcShape643.point.x += 7;
bbcShape643.point.y += 10;

bbcShape644.point.x += -10;
bbcShape644.point.y += 0;

bbcShape645.point.x += 2;
bbcShape645.point.y += 1;

bbcShape646.point.x += 3;
bbcShape646.point.y += 5;

bbcShape647.point.x += -7;
bbcShape647.point.y += -7;

bbcShape648.point.x += 3;
bbcShape648.point.y += -10;

bbcShape649.point.x += 9;
bbcShape649.point.y += -8;

bbcShape650.point.x += -3;
bbcShape650.point.y += 0;

bbcShape651.point.x += 7;
bbcShape651.point.y += -6;

bbcShape652.point.x += -9;
bbcShape652.point.y += 6;

bbcShape653.point.x += 4;
bbcShape653.point.y += 4;

bbcShape654.point.x += -2;
bbcShape654.point.y += 5;

bbcShape655.point.x += 0;
bbcShape655.point.y += -8;

bbcShape656.point.x += -9;
bbcShape656.point.y += 8;

bbcShape657.point.x += -3;
bbcShape657.point.y += 7;

bbcShape658.point.x += 7;
bbcShape658.point.y += 9;

bbcShape659.point.x += -1;
bbcShape659.point.y += 1;

bbcShape660.point.x += -1;
bbcShape660.point.y += -4;

bbcShape661.point.x += 0;
bbcShape661.point.y += -5;

bbcShape662.point.x += -8;
bbcShape662.point.y += -5;

bbcShape663.point.x += -2;
bbcShape663.point.y += 7;

bbcShape664.point.x += 8;
bbcShape664.point.y += 2;

bbcShape665.point.x += -6;
bbcShape665.point.y += -10;

bbcShape666.point.x += 9;
bbcShape666.point.y += -9;

bbcShape667.point.x += -10;
bbcShape667.point.y += 4;

bbcShape668.point.x += 2;
bbcShape668.point.y += -8;

bbcShape669.point.x += -8;
bbcShape669.point.y += 0;

bbcShape670.point.x += 5;
bbcShape670.point.y += 4;

bbcShape671.point.x += 4;
bbcShape671.point.y += -5;

bbcShape672.point.x += 5;
bbcShape672.point.y += 4;

bbcShape673.point.x += -2;
bbcShape673.point.y += -5;

bbcShape674.point.x += -5;
bbcShape674.point.y += -10;

bbcShape675.point.x += 7;
bbcShape675.point.y += -8;

bbcShape676.point.x += -4;
bbcShape676.point.y += 1;

bbcShape677.point.x += 7;
bbcShape677.point.y += 3;

bbcShape678.point.x += 9;
bbcShape678.point.y += 4;

bbcShape679.point.x += 1;
bbcShape679.point.y += -2;

bbcShape680.point.x += -3;
bbcShape680.point.y += 7;

bbcShape681.point.x += -9;
bbcShape681.point.y += 6;

bbcShape682.point.x += 2;
bbcShape682.point.y += -6;

bbcShape683.point.x += -9;
bbcShape683.point.y += -6;

bbcShape684.point.x += -10;
bbcShape684.point.y += 7;

bbcShape685.point.x += -2;
bbcShape685.point.y += 4;

bbcShape686.point.x += 10;
bbcShape686.point.y += 4;

bbcShape687.point.x += 9;
bbcShape687.point.y += 8;

bbcShape688.point.x += -4;
bbcShape688.point.y += 2;

bbcShape689.point.x += 0;
bbcShape689.point.y += -8;

bbcShape690.point.x += -3;
bbcShape690.point.y += 9;

bbcShape691.point.x += 1;
bbcShape691.point.y += -4;

bbcShape692.point.x += -5;
bbcShape692.point.y += -6;

bbcShape693.point.x += 3;
bbcShape693.point.y += -3;

bbcShape694.point.x += -10;
bbcShape694.point.y += -1;

bbcShape695.point.x += -3;
bbcShape695.point.y += 2;

bbcShape696.point.x += -10;
bbcShape696.point.y += -2;

bbcShape697.point.x += -1;
bbcShape697.point.y += -4;

bbcShape698.point.x += -2;
bbcShape698.point.y += -8;

bbcShape699.point.x += -9;
bbcShape699.point.y += -9;

bbcShape700.point.x += 5;
bbcShape700.point.y += 7;

bbcShape701.point.x += -9;
bbcShape701.point.y += -4;

bbcShape702.point.x += 10;
bbcShape702.point.y += 1;

bbcShape703.point.x += 8;
bbcShape703.point.y += 9;

bbcShape704.point.x += 10;
bbcShape704.point.y += -8;

bbcShape705.point.x += 4;
bbcShape705.point.y += 0;

bbcShape706.point.x += 4;
bbcShape706.point.y += 3;

bbcShape707.point.x += 8;
bbcShape707.point.y += -8;

bbcShape708.point.x += 9;
bbcShape708.point.y += 0;

bbcShape709.point.x += -6;
bbcShape709.point.y += -10;

bbcShape710.point.x += 7;
bbcShape710.point.y += -3;

bbcShape711.point.x += 8;
bbcShape711.point.y += 3;

bbcShape712.point.x += -9;
bbcShape712.point.y += -2;

bbcShape713.point.x += -6;
bbcShape713.point.y += 4;

bbcShape714.point.x += -4;
bbcShape714.point.y += 4;

bbcShape715.point.x += 3;
bbcShape715.point.y += 8;

bbcShape716.point.x += 2;
bbcShape716.point.y += 2;

bbcShape717.point.x += -5;
bbcShape717.point.y += 3;

bbcShape718.point.x += 6;
bbcShape718.point.y += -7;

bbcShape719.point.x += 7;
bbcShape719.point.y += -9;

bbcShape720.point.x += 10;
bbcShape720.point.y += -5;

bbcShape721.point.x += 3;
bbcShape721.point.y += 2;

bbcShape722.point.x += 5;
bbcShape722.point.y += -2;

bbcShape723.point.x += -9;
bbcShape723.point.y += 5;

bbcShape724.point.x += -5;
bbcShape724.point.y += 5;

bbcShape725.point.x += 0;
bbcShape725.point.y += -2;

bbcShape726.point.x += 10;
bbcShape726.point.y += 9;

bbcShape727.point.x += -6;
bbcShape727.point.y += -2;

bbcShape728.point.x += 7;
bbcShape728.point.y += 2;

bbcShape729.point.x += -2;
bbcShape729.point.y += -4;

bbcShape730.point.x += 10;
bbcShape730.point.y += 4;

bbcShape731.point.x += 5;
bbcShape731.point.y += -5;

bbcShape732.point.x += 10;
bbcShape732.point.y += -2;

bbcShape733.point.x += 4;
bbcShape733.point.y += 8;

bbcShape734.point.x += -5;
bbcShape734.point.y += 6;

bbcShape735.point.x += -9;
bbcShape735.point.y += 1;

bbcShape736.point.x += 1;
bbcShape736.point.y += 0;

bbcShape737.point.x += 3;
bbcShape737.point.y += -2;

bbcShape738.point.x += -2;
bbcShape738.point.y += -8;

bbcShape739.point.x += 3;
bbcShape739.point.y += -4;

bbcShape740.point.x += 8;
bbcShape740.point.y += -10;

bbcShape741.point.x += 7;
bbcShape741.point.y += 6;

bbcShape742.point.x += -9;
bbcShape742.point.y += -7;

bbcShape743.point.x += -7;
bbcShape743.point.y += 6;

bbcShape744.point.x += 0;
bbcShape744.point.y += -10;

bbcShape745.point.x += 2;
bbcShape745.point.y += -8;

bbcShape746.point.x += 5;
bbcShape746.point.y += -7;

bbcShape747.point.x += 3;
bbcShape747.point.y += 9;

bbcShape748.point.x += -2;
bbcShape748.point.y += -8;

bbcShape749.point.x += -6;
bbcShape749.point.y += -1;

bbcShape750.point.x += 7;
bbcShape750.point.y += 10;

bbcShape751.point.x += -4;
bbcShape751.point.y += 3;

bbcShape752.point.x += -10;
bbcShape752.point.y += -6;

bbcShape753.point.x += -7;
bbcShape753.point.y += -1;

bbcShape754.point.x += 0;
bbcShape754.point.y += 7;

bbcShape755.point.x += -7;
bbcShape755.point.y += -8;

bbcShape756.point.x += -4;
bbcShape756.point.y += -6;

bbcShape757.point.x += 1;
bbcShape757.point.y += -8;

bbcShape758.point.x += -7;
bbcShape758.point.y += -8;

bbcShape759.point.x += -10;
bbcShape759.point.y += 7;

bbcShape760.point.x += 2;
bbcShape760.point.y += 7;

bbcShape761.point.x += -5;
bbcShape761.point.y += 0;

bbcShape762.point.x += 4;
bbcShape762.point.y += -4;

bbcShape763.point.x += -9;
bbcShape763.point.y += 10;

bbcShape764.point.x += 7;
bbcShape764.point.y += 9;

bbcShape765.point.x += -9;
bbcShape765.point.y += -1;

bbcShape766.point.x += -8;
bbcShape766.point.y += 9;

bbcShape767.point.x += 9;
bbcShape767.point.y += 0;

bbcShape768.point.x += 3;
bbcShape768.point.y += -4;

bbcShape769.point.x += -2;
bbcShape769.point.y += 8;

bbcShape770.point.x += 0;
bbcShape770.point.y += -5;

bbcShape771.point.x += 4;
bbcShape771.point.y += 5;

bbcShape772.point.x += 10;
bbcShape772.point.y += 9;

bbcShape773.point.x += -2;
bbcShape773.point.y += 8;

bbcShape774.point.x += -9;
bbcShape774.point.y += -1;

bbcShape775.point.x += -8;
bbcShape775.point.y += -2;

bbcShape776.point.x += 5;
bbcShape776.point.y += 5;

bbcShape777.point.x += 3;
bbcShape777.point.y += -4;

bbcShape778.point.x += -5;
bbcShape778.point.y += 0;

bbcShape779.point.x += -8;
bbcShape779.point.y += 5;

bbcShape780.point.x += -6;
bbcShape780.point.y += 0;

bbcShape781.point.x += -7;
bbcShape781.point.y += 4;

bbcShape782.point.x += 0;
bbcShape782.point.y += 9;

bbcShape783.point.x += -3;
bbcShape783.point.y += -1;

bbcShape784.point.x += -3;
bbcShape784.point.y += 1;

bbcShape785.point.x += -7;
bbcShape785.point.y += -5;

bbcShape786.point.x += -6;
bbcShape786.point.y += -9;

bbcShape787.point.x += 2;
bbcShape787.point.y += 0;

bbcShape788.point.x += -9;
bbcShape788.point.y += 7;

bbcShape789.point.x += -6;
bbcShape789.point.y += 6;

bbcShape790.point.x += -8;
bbcShape790.point.y += 9;

bbcShape791.point.x += -1;
bbcShape791.point.y += -5;

bbcShape792.point.x += 5;
bbcShape792.point.y += 9;

bbcShape793.point.x += 7;
bbcShape793.point.y += -4;

bbcShape794.point.x += -7;
bbcShape794.point.y += 0;

bbcShape795.point.x += -10;
bbcShape795.point.y += 0;

bbcShape796.point.x += 1;
bbcShape796.point.y += 9;

bbcShape797.point.x += -4;
bbcShape797.point.y += -3;

bbcShape798.point.x += 9;
bbcShape798.point.y += 5;

bbcShape799.point.x += -1;
bbcShape799.point.y += 6;

bbcShape800.point.x += 8;
bbcShape800.point.y += -1;

bbcShape801.point.x += 10;
bbcShape801.point.y += 2;

bbcShape802.point.x += -4;
bbcShape802.point.y += -8;

bbcShape803.point.x += 3;
bbcShape803.point.y += -10;

bbcShape804.point.x += -8;
bbcShape804.point.y += 3;

bbcShape805.point.x += -5;
bbcShape805.point.y += 4;

bbcShape806.point.x += 10;
bbcShape806.point.y += -8;

bbcShape807.point.x += 2;
bbcShape807.point.y += -8;

bbcShape808.point.x += -6;
bbcShape808.point.y += -4;

bbcShape809.point.x += -10;
bbcShape809.point.y += 9;

bbcShape810.point.x += 2;
bbcShape810.point.y += 5;

bbcShape811.point.x += 3;
bbcShape811.point.y += -3;

bbcShape812.point.x += 6;
bbcShape812.point.y += -5;

bbcShape813.point.x += 5;
bbcShape813.point.y += 8;

bbcShape814.point.x += 2;
bbcShape814.point.y += -9;

bbcShape815.point.x += 2;
bbcShape815.point.y += 3;

bbcShape816.point.x += 8;
bbcShape816.point.y += 3;

bbcShape817.point.x += -10;
bbcShape817.point.y += -6;

bbcShape818.point.x += -7;
bbcShape818.point.y += 8;

bbcShape819.point.x += -6;
bbcShape819.point.y += -8;

bbcShape820.point.x += -3;
bbcShape820.point.y += 2;

bbcShape821.point.x += -1;
bbcShape821.point.y += 1;

bbcShape822.point.x += -5;
bbcShape822.point.y += -2;

bbcShape823.point.x += 5;
bbcShape823.point.y += 7;

bbcShape824.point.x += -3;
bbcShape824.point.y += -2;

bbcShape825.point.x += 2;
bbcShape825.point.y += 4;

bbcShape826.point.x += 6;
bbcShape826.point.y += -2;

bbcShape827.point.x += 5;
bbcShape827.point.y += -1;

bbcShape828.point.x += -8;
bbcShape828.point.y += 5;

bbcShape829.point.x += 5;
bbcShape829.point.y += -4;

bbcShape830.point.x += 6;
bbcShape830.point.y += 0;

bbcShape831.point.x += 9;
bbcShape831.point.y += 9;

bbcShape832.point.x += 8;
bbcShape832.point.y += -7;

bbcShape833.point.x += -9;
bbcShape833.point.y += 8;

bbcShape834.point.x += 10;
bbcShape834.point.y += -9;

bbcShape835.point.x += 0;
bbcShape835.point.y += -6;

bbcShape836.point.x += 1;
bbcShape836.point.y += 4;

bbcShape837.point.x += 9;
bbcShape837.point.y += 6;

bbcShape838.point.x += 8;
bbcShape838.point.y += 9;

bbcShape839.point.x += -3;
bbcShape839.point.y += -2;

bbcShape840.point.x += 0;
bbcShape840.point.y += -7;

bbcShape841.point.x += 4;
bbcShape841.point.y += -10;

bbcShape842.point.x += 8;
bbcShape842.point.y += 6;

bbcShape843.point.x += 8;
bbcShape843.point.y += 6;

bbcShape844.point.x += 2;
bbcShape844.point.y += -1;

bbcShape845.point.x += -3;
bbcShape845.point.y += 10;

bbcShape846.point.x += -4;
bbcShape846.point.y += -1;

bbcShape847.point.x += 1;
bbcShape847.point.y += 4;

bbcShape848.point.x += 10;
bbcShape848.point.y += 2;

bbcShape849.point.x += 2;
bbcShape849.point.y += -5;

bbcShape850.point.x += -4;
bbcShape850.point.y += -1;

bbcShape851.point.x += 1;
bbcShape851.point.y += 9;

bbcShape852.point.x += -3;
bbcShape852.point.y += -8;

bbcShape853.point.x += 9;
bbcShape853.point.y += 8;

bbcShape854.point.x += 10;
bbcShape854.point.y += 0;

bbcShape855.point.x += 3;
bbcShape855.point.y += 8;

bbcShape856.point.x += -6;
bbcShape856.point.y += 3;

bbcShape857.point.x += 6;
bbcShape857.point.y += 0;

bbcShape858.point.x += 9;
bbcShape858.point.y += -5;

bbcShape859.point.x += 7;
bbcShape859.point.y += 1;

bbcShape860.point.x += -6;
bbcShape860.point.y += -2;

bbcShape861.point.x += 3;
bbcShape861.point.y += 4;

bbcShape862.point.x += 1;
bbcShape862.point.y += 9;

bbcShape863.point.x += 1;
bbcShape863.point.y += 6;

bbcShape864.point.x += 4;
bbcShape864.point.y += 6;

bbcShape865.point.x += 3;
bbcShape865.point.y += 0;

bbcShape866.point.x += -5;
bbcShape866.point.y += 10;

bbcShape867.point.x += -2;
bbcShape867.point.y += -8;

bbcShape868.point.x += 0;
bbcShape868.point.y += -9;

bbcShape869.point.x += 3;
bbcShape869.point.y += 7;

bbcShape870.point.x += 4;
bbcShape870.point.y += 8;

bbcShape871.point.x += 3;
bbcShape871.point.y += 7;

bbcShape872.point.x += 3;
bbcShape872.point.y += -1;

bbcShape873.point.x += -10;
bbcShape873.point.y += -7;

bbcShape874.point.x += 0;
bbcShape874.point.y += -4;

bbcShape875.point.x += 5;
bbcShape875.point.y += 6;

bbcShape876.point.x += 10;
bbcShape876.point.y += -6;

bbcShape877.point.x += 10;
bbcShape877.point.y += 3;

bbcShape878.point.x += -2;
bbcShape878.point.y += -2;

bbcShape879.point.x += -10;
bbcShape879.point.y += 4;

bbcShape880.point.x += -1;
bbcShape880.point.y += 3;

bbcShape881.point.x += 0;
bbcShape881.point.y += 4;

bbcShape882.point.x += 6;
bbcShape882.point.y += -4;

bbcShape883.point.x += 7;
bbcShape883.point.y += 0;

bbcShape884.point.x += -9;
bbcShape884.point.y += -4;

bbcShape885.point.x += 4;
bbcShape885.point.y += -1;

bbcShape886.point.x += -6;
bbcShape886.point.y += 4;

bbcShape887.point.x += -5;
bbcShape887.point.y += -5;

bbcShape888.point.x += 9;
bbcShape888.point.y += 8;

bbcShape889.point.x += -1;
bbcShape889.point.y += -6;

bbcShape890.point.x += 5;
bbcShape890.point.y += -5;

bbcShape891.point.x += 2;
bbcShape891.point.y += 10;

bbcShape892.point.x += 1;
bbcShape892.point.y += -4;

bbcShape893.point.x += -10;
bbcShape893.point.y += 2;

bbcShape894.point.x += 3;
bbcShape894.point.y += 10;

bbcShape895.point.x += -6;
bbcShape895.point.y += -5;

bbcShape896.point.x += 5;
bbcShape896.point.y += 4;

bbcShape897.point.x += -1;
bbcShape897.point.y += -1;

bbcShape898.point.x += -5;
bbcShape898.point.y += 1;

bbcShape899.point.x += -10;
bbcShape899.point.y += -8;

bbcShape900.point.x += 6;
bbcShape900.point.y += 6;

bbcShape901.point.x += -9;
bbcShape901.point.y += 5;

bbcShape902.point.x += 9;
bbcShape902.point.y += -2;

bbcShape903.point.x += 5;
bbcShape903.point.y += 0;

bbcShape904.point.x += -1;
bbcShape904.point.y += 3;

bbcShape905.point.x += 3;
bbcShape905.point.y += -4;

bbcShape906.point.x += 3;
bbcShape906.point.y += -10;

bbcShape907.point.x += -3;
bbcShape907.point.y += 4;

bbcShape908.point.x += 5;
bbcShape908.point.y += -7;

bbcShape909.point.x += 8;
bbcShape909.point.y += -7;

bbcShape910.point.x += -2;
bbcShape910.point.y += 7;

bbcShape911.point.x += 4;
bbcShape911.point.y += -3;

bbcShape912.point.x += 3;
bbcShape912.point.y += 1;

bbcShape913.point.x += 4;
bbcShape913.point.y += 1;

bbcShape914.point.x += 4;
bbcShape914.point.y += -3;

bbcShape915.point.x += 10;
bbcShape915.point.y += 2;

bbcShape916.point.x += 6;
bbcShape916.point.y += -6;

bbcShape917.point.x += -1;
bbcShape917.point.y += -2;

bbcShape918.point.x += 9;
bbcShape918.point.y += 7;

bbcShape919.point.x += -8;
bbcShape919.point.y += 6;

bbcShape920.point.x += 9;
bbcShape920.point.y += 0;

bbcShape921.point.x += -9;
bbcShape921.point.y += 9;

bbcShape922.point.x += 0;
bbcShape922.point.y += 0;

bbcShape923.point.x += -8;
bbcShape923.point.y += -10;

bbcShape924.point.x += -6;
bbcShape924.point.y += -2;

bbcShape925.point.x += -7;
bbcShape925.point.y += -10;

bbcShape926.point.x += 1;
bbcShape926.point.y += 2;

bbcShape927.point.x += -1;
bbcShape927.point.y += 1;

bbcShape928.point.x += -2;
bbcShape928.point.y += -9;

bbcShape929.point.x += 10;
bbcShape929.point.y += 7;

bbcShape930.point.x += -7;
bbcShape930.point.y += 1;

bbcShape931.point.x += 7;
bbcShape931.point.y += -4;

bbcShape932.point.x += 8;
bbcShape932.point.y += -3;

bbcShape933.point.x += 2;
bbcShape933.point.y += 8;

bbcShape934.point.x += -6;
bbcShape934.point.y += 4;

bbcShape935.point.x += 3;
bbcShape935.point.y += -9;

bbcShape936.point.x += 9;
bbcShape936.point.y += 8;

bbcShape937.point.x += -6;
bbcShape937.point.y += 8;

bbcShape938.point.x += -9;
bbcShape938.point.y += -2;

bbcShape939.point.x += -1;
bbcShape939.point.y += -1;

bbcShape940.point.x += -5;
bbcShape940.point.y += 4;

bbcShape941.point.x += 2;
bbcShape941.point.y += -2;

bbcShape942.point.x += 8;
bbcShape942.point.y += 6;

bbcShape943.point.x += -8;
bbcShape943.point.y += 3;

bbcShape944.point.x += 4;
bbcShape944.point.y += 9;

bbcShape945.point.x += 1;
bbcShape945.point.y += -5;

bbcShape946.point.x += -4;
bbcShape946.point.y += 3;

bbcShape947.point.x += -7;
bbcShape947.point.y += 1;

bbcShape948.point.x += 1;
bbcShape948.point.y += -5;

bbcShape949.point.x += 0;
bbcShape949.point.y += 8;

bbcShape950.point.x += -5;
bbcShape950.point.y += 1;

bbcShape951.point.x += 1;
bbcShape951.point.y += 1;

bbcShape952.point.x += 4;
bbcShape952.point.y += 0;

bbcShape953.point.x += -2;
bbcShape953.point.y += 8;

bbcShape954.point.x += 4;
bbcShape954.point.y += 6;

bbcShape955.point.x += 9;
bbcShape955.point.y += -4;

bbcShape956.point.x += 2;
bbcShape956.point.y += 6;

bbcShape957.point.x += -4;
bbcShape957.point.y += -6;

bbcShape958.point.x += 5;
bbcShape958.point.y += 0;

bbcShape959.point.x += -2;
bbcShape959.point.y += -8;

bbcShape960.point.x += 8;
bbcShape960.point.y += 4;

bbcShape961.point.x += 0;
bbcShape961.point.y += -9;

bbcShape962.point.x += -9;
bbcShape962.point.y += 10;

bbcShape963.point.x += -3;
bbcShape963.point.y += -5;

bbcShape964.point.x += 4;
bbcShape964.point.y += 0;

bbcShape965.point.x += 4;
bbcShape965.point.y += -10;

bbcShape966.point.x += 3;
bbcShape966.point.y += -3;

bbcShape967.point.x += 10;
bbcShape967.point.y += -6;

bbcShape968.point.x += -10;
bbcShape968.point.y += 9;

bbcShape969.point.x += 9;
bbcShape969.point.y += 6;

bbcShape970.point.x += 9;
bbcShape970.point.y += -9;

bbcShape971.point.x += -6;
bbcShape971.point.y += -3;

bbcShape972.point.x += -4;
bbcShape972.point.y += -7;

bbcShape973.point.x += -2;
bbcShape973.point.y += 3;

bbcShape974.point.x += 7;
bbcShape974.point.y += -8;

bbcShape975.point.x += -2;
bbcShape975.point.y += 4;

bbcShape976.point.x += 10;
bbcShape976.point.y += 8;

bbcShape977.point.x += -1;
bbcShape977.point.y += -9;

bbcShape978.point.x += 6;
bbcShape978.point.y += 8;

bbcShape979.point.x += 10;
bbcShape979.point.y += 0;

bbcShape980.point.x += 4;
bbcShape980.point.y += -4;

bbcShape981.point.x += 5;
bbcShape981.point.y += -5;

bbcShape982.point.x += -10;
bbcShape982.point.y += -10;

bbcShape983.point.x += 10;
bbcShape983.point.y += -2;

bbcShape984.point.x += -1;
bbcShape984.point.y += 6;

bbcShape985.point.x += -8;
bbcShape985.point.y += -8;

bbcShape986.point.x += -2;
bbcShape986.point.y += 2;

bbcShape987.point.x += -9;
bbcShape987.point.y += 2;

bbcShape988.point.x += 7;
bbcShape988.point.y += -4;

bbcShape989.point.x += -9;
bbcShape989.point.y += -5;

bbcShape990.point.x += 10;
bbcShape990.point.y += -1;

bbcShape991.point.x += 8;
bbcShape991.point.y += 0;

bbcShape992.point.x += 8;
bbcShape992.point.y += 8;

bbcShape993.point.x += 2;
bbcShape993.point.y += -8;

bbcShape994.point.x += 9;
bbcShape994.point.y += -2;

bbcShape995.point.x += 8;
bbcShape995.point.y += -3;

bbcShape996.point.x += 7;
bbcShape996.point.y += -1;

bbcShape997.point.x += 4;
bbcShape997.point.y += -4;

bbcShape998.point.x += -7;
bbcShape998.point.y += -4;

bbcShape999.point.x += -2;
bbcShape999.point.y += -7;

bbcShape1000.point.x += 3;
bbcShape1000.point.y += -2;

bbcShape1001.rotation += 0.0;
bbcShape1001.around.x = 300.0;
bbcShape1001.around.y = 200.0;

bbcShape1002.rotation += 0.0;
bbcShape1002.around.x = 300.0;
bbcShape1002.around.y = 200.0;

bbcShape1003.rotation += 0.0;
bbcShape1003.around.x = 300.0;
bbcShape1003.around.y = 200.0;

bbcShape1004.rotation += 0.0;
bbcShape1004.around.x = 300.0;
bbcShape1004.around.y = 200.0;

bbcShape1005.rotation += 0.0;
bbcShape1005.around.x = 300.0;
bbcShape1005.around.y = 200.0;

bbcShape1006.rotation += 0.0;
bbcShape1006.around.x = 300.0;
bbcShape1006.around.y = 200.0;

bbcShape1007.rotation += 0.0;
bbcShape1007.around.x = 300.0;
bbcShape1007.around.y = 200.0;

bbcShape1008.rotation += 0.0;
bbcShape1008.around.x = 300.0;
bbcShape1008.around.y = 200.0;

bbcShape1009.rotation += 0.0;
bbcShape1009.around.x = 300.0;
bbcShape1009.around.y = 200.0;

bbcShape1010.rotation += 0.0;
bbcShape1010.around.x = 300.0;
bbcShape1010.around.y = 200.0;

bbcShape1011.rotation += 0.0;
bbcShape1011.around.x = 300.0;
bbcShape1011.around.y = 200.0;

bbcShape1012.rotation += 0.0;
bbcShape1012.around.x = 300.0;
bbcShape1012.around.y = 200.0;

bbcShape1013.rotation += 0.0;
bbcShape1013.around.x = 300.0;
bbcShape1013.around.y = 200.0;

bbcShape1014.rotation += 0.0;
bbcShape1014.around.x = 300.0;
bbcShape1014.around.y = 200.0;

bbcShape1015.rotation += 0.0;
bbcShape1015.around.x = 300.0;
bbcShape1015.around.y = 200.0;

bbcShape1016.rotation += 0.0;
bbcShape1016.around.x = 300.0;
bbcShape1016.around.y = 200.0;

bbcShape1017.rotation += 0.0;
bbcShape1017.around.x = 300.0;
bbcShape1017.around.y = 200.0;

bbcShape1018.rotation += 0.0;
bbcShape1018.around.x = 300.0;
bbcShape1018.around.y = 200.0;

bbcShape1019.rotation += 0.0;
bbcShape1019.around.x = 300.0;
bbcShape1019.around.y = 200.0;

bbcShape1020.rotation += 0.0;
bbcShape1020.around.x = 300.0;
bbcShape1020.around.y = 200.0;

bbcShape1021.rotation += 0.0;
bbcShape1021.around.x = 300.0;
bbcShape1021.around.y = 200.0;

bbcShape1022.rotation += 0.05;
bbcShape1022.around.x = 300.0;
bbcShape1022.around.y = 200.0;

bbcShape1023.rotation += 0.1;
bbcShape1023.around.x = 300.0;
bbcShape1023.around.y = 200.0;

bbcShape1024.rotation += 0.1;
bbcShape1024.around.x = 300.0;
bbcShape1024.around.y = 200.0;

bbcShape1025.rotation += 0.1;
bbcShape1025.around.x = 300.0;
bbcShape1025.around.y = 200.0;

bbcShape1026.rotation += 0.1;
bbcShape1026.around.x = 300.0;
bbcShape1026.around.y = 200.0;

bbcShape1027.rotation += 0.1;
bbcShape1027.around.x = 300.0;
bbcShape1027.around.y = 200.0;

bbcShape1028.rotation += 0.1;
bbcShape1028.around.x = 300.0;
bbcShape1028.around.y = 200.0;

bbcShape1029.rotation += 0.1;
bbcShape1029.around.x = 300.0;
bbcShape1029.around.y = 200.0;

bbcShape1030.rotation += 0.1;
bbcShape1030.around.x = 300.0;
bbcShape1030.around.y = 200.0;

bbcShape1031.rotation += 0.1;
bbcShape1031.around.x = 300.0;
bbcShape1031.around.y = 200.0;

bbcShape1032.rotation += 0.1;
bbcShape1032.around.x = 300.0;
bbcShape1032.around.y = 200.0;

bbcShape1033.rotation += 0.1;
bbcShape1033.around.x = 300.0;
bbcShape1033.around.y = 200.0;

bbcShape1034.rotation += 0.1;
bbcShape1034.around.x = 300.0;
bbcShape1034.around.y = 200.0;

bbcShape1035.rotation += 0.1;
bbcShape1035.around.x = 300.0;
bbcShape1035.around.y = 200.0;

bbcShape1036.rotation += 0.1;
bbcShape1036.around.x = 300.0;
bbcShape1036.around.y = 200.0;

bbcShape1037.rotation += 0.1;
bbcShape1037.around.x = 300.0;
bbcShape1037.around.y = 200.0;

bbcShape1038.rotation += 0.1;
bbcShape1038.around.x = 300.0;
bbcShape1038.around.y = 200.0;

bbcShape1039.rotation += 0.1;
bbcShape1039.around.x = 300.0;
bbcShape1039.around.y = 200.0;

bbcShape1040.rotation += 0.1;
bbcShape1040.around.x = 300.0;
bbcShape1040.around.y = 200.0;

bbcShape1041.rotation += 0.1;
bbcShape1041.around.x = 300.0;
bbcShape1041.around.y = 200.0;

bbcShape1042.rotation += 0.1;
bbcShape1042.around.x = 300.0;
bbcShape1042.around.y = 200.0;

bbcShape1043.rotation += 0.1;
bbcShape1043.around.x = 300.0;
bbcShape1043.around.y = 200.0;

bbcShape1044.rotation += 0.2;
bbcShape1044.around.x = 300.0;
bbcShape1044.around.y = 200.0;

bbcShape1045.rotation += 0.2;
bbcShape1045.around.x = 300.0;
bbcShape1045.around.y = 200.0;

bbcShape1046.rotation += 0.2;
bbcShape1046.around.x = 300.0;
bbcShape1046.around.y = 200.0;

bbcShape1047.rotation += 0.2;
bbcShape1047.around.x = 300.0;
bbcShape1047.around.y = 200.0;

bbcShape1048.rotation += 0.2;
bbcShape1048.around.x = 300.0;
bbcShape1048.around.y = 200.0;

bbcShape1049.rotation += 0.2;
bbcShape1049.around.x = 300.0;
bbcShape1049.around.y = 200.0;

bbcShape1050.rotation += 0.2;
bbcShape1050.around.x = 300.0;
bbcShape1050.around.y = 200.0;

bbcShape1051.rotation += 0.2;
bbcShape1051.around.x = 300.0;
bbcShape1051.around.y = 200.0;

bbcShape1052.rotation += 0.2;
bbcShape1052.around.x = 300.0;
bbcShape1052.around.y = 200.0;

bbcShape1053.rotation += 0.2;
bbcShape1053.around.x = 300.0;
bbcShape1053.around.y = 200.0;

bbcShape1054.rotation += 0.2;
bbcShape1054.around.x = 300.0;
bbcShape1054.around.y = 200.0;

bbcShape1055.rotation += 0.2;
bbcShape1055.around.x = 300.0;
bbcShape1055.around.y = 200.0;

bbcShape1056.rotation += 0.2;
bbcShape1056.around.x = 300.0;
bbcShape1056.around.y = 200.0;

bbcShape1057.rotation += 0.2;
bbcShape1057.around.x = 300.0;
bbcShape1057.around.y = 200.0;

bbcShape1058.rotation += 0.2;
bbcShape1058.around.x = 300.0;
bbcShape1058.around.y = 200.0;

bbcShape1059.rotation += 0.2;
bbcShape1059.around.x = 300.0;
bbcShape1059.around.y = 200.0;

bbcShape1060.rotation += 0.2;
bbcShape1060.around.x = 300.0;
bbcShape1060.around.y = 200.0;

bbcShape1061.rotation += 0.2;
bbcShape1061.around.x = 300.0;
bbcShape1061.around.y = 200.0;

bbcShape1062.rotation += 0.2;
bbcShape1062.around.x = 300.0;
bbcShape1062.around.y = 200.0;

bbcShape1063.rotation += 0.2;
bbcShape1063.around.x = 300.0;
bbcShape1063.around.y = 200.0;

bbcShape1064.rotation += 0.15;
bbcShape1064.around.x = 300.0;
bbcShape1064.around.y = 200.0;

bbcShape1065.rotation += 0.3;
bbcShape1065.around.x = 300.0;
bbcShape1065.around.y = 200.0;

bbcShape1066.rotation += 0.3;
bbcShape1066.around.x = 300.0;
bbcShape1066.around.y = 200.0;

bbcShape1067.rotation += 0.3;
bbcShape1067.around.x = 300.0;
bbcShape1067.around.y = 200.0;

bbcShape1068.rotation += 0.3;
bbcShape1068.around.x = 300.0;
bbcShape1068.around.y = 200.0;

bbcShape1069.rotation += 0.3;
bbcShape1069.around.x = 300.0;
bbcShape1069.around.y = 200.0;

bbcShape1070.rotation += 0.3;
bbcShape1070.around.x = 300.0;
bbcShape1070.around.y = 200.0;

bbcShape1071.rotation += 0.3;
bbcShape1071.around.x = 300.0;
bbcShape1071.around.y = 200.0;

bbcShape1072.rotation += 0.3;
bbcShape1072.around.x = 300.0;
bbcShape1072.around.y = 200.0;

bbcShape1073.rotation += 0.3;
bbcShape1073.around.x = 300.0;
bbcShape1073.around.y = 200.0;

bbcShape1074.rotation += 0.3;
bbcShape1074.around.x = 300.0;
bbcShape1074.around.y = 200.0;

bbcShape1075.rotation += 0.3;
bbcShape1075.around.x = 300.0;
bbcShape1075.around.y = 200.0;

bbcShape1076.rotation += 0.3;
bbcShape1076.around.x = 300.0;
bbcShape1076.around.y = 200.0;

bbcShape1077.rotation += 0.3;
bbcShape1077.around.x = 300.0;
bbcShape1077.around.y = 200.0;

bbcShape1078.rotation += 0.3;
bbcShape1078.around.x = 300.0;
bbcShape1078.around.y = 200.0;

bbcShape1079.rotation += 0.3;
bbcShape1079.around.x = 300.0;
bbcShape1079.around.y = 200.0;

bbcShape1080.rotation += 0.3;
bbcShape1080.around.x = 300.0;
bbcShape1080.around.y = 200.0;

bbcShape1081.rotation += 0.3;
bbcShape1081.around.x = 300.0;
bbcShape1081.around.y = 200.0;

bbcShape1082.rotation += 0.3;
bbcShape1082.around.x = 300.0;
bbcShape1082.around.y = 200.0;

bbcShape1083.rotation += 0.3;
bbcShape1083.around.x = 300.0;
bbcShape1083.around.y = 200.0;

bbcShape1084.rotation += 0.3;
bbcShape1084.around.x = 300.0;
bbcShape1084.around.y = 200.0;

bbcShape1085.rotation += 0.2;
bbcShape1085.around.x = 300.0;
bbcShape1085.around.y = 200.0;

bbcShape1086.rotation += 0.4;
bbcShape1086.around.x = 300.0;
bbcShape1086.around.y = 200.0;

bbcShape1087.rotation += 0.4;
bbcShape1087.around.x = 300.0;
bbcShape1087.around.y = 200.0;

bbcShape1088.rotation += 0.4;
bbcShape1088.around.x = 300.0;
bbcShape1088.around.y = 200.0;

bbcShape1089.rotation += 0.4;
bbcShape1089.around.x = 300.0;
bbcShape1089.around.y = 200.0;

bbcShape1090.rotation += 0.4;
bbcShape1090.around.x = 300.0;
bbcShape1090.around.y = 200.0;

bbcShape1091.rotation += 0.4;
bbcShape1091.around.x = 300.0;
bbcShape1091.around.y = 200.0;

bbcShape1092.rotation += 0.4;
bbcShape1092.around.x = 300.0;
bbcShape1092.around.y = 200.0;

bbcShape1093.rotation += 0.4;
bbcShape1093.around.x = 300.0;
bbcShape1093.around.y = 200.0;

bbcShape1094.rotation += 0.4;
bbcShape1094.around.x = 300.0;
bbcShape1094.around.y = 200.0;

bbcShape1095.rotation += 0.4;
bbcShape1095.around.x = 300.0;
bbcShape1095.around.y = 200.0;

bbcShape1096.rotation += 0.4;
bbcShape1096.around.x = 300.0;
bbcShape1096.around.y = 200.0;

bbcShape1097.rotation += 0.4;
bbcShape1097.around.x = 300.0;
bbcShape1097.around.y = 200.0;

bbcShape1098.rotation += 0.4;
bbcShape1098.around.x = 300.0;
bbcShape1098.around.y = 200.0;

bbcShape1099.rotation += 0.4;
bbcShape1099.around.x = 300.0;
bbcShape1099.around.y = 200.0;

bbcShape1100.rotation += 0.4;
bbcShape1100.around.x = 300.0;
bbcShape1100.around.y = 200.0;

bbcShape1101.rotation += 0.4;
bbcShape1101.around.x = 300.0;
bbcShape1101.around.y = 200.0;

bbcShape1102.rotation += 0.4;
bbcShape1102.around.x = 300.0;
bbcShape1102.around.y = 200.0;

bbcShape1103.rotation += 0.4;
bbcShape1103.around.x = 300.0;
bbcShape1103.around.y = 200.0;

bbcShape1104.rotation += 0.4;
bbcShape1104.around.x = 300.0;
bbcShape1104.around.y = 200.0;

bbcShape1105.rotation += 0.4;
bbcShape1105.around.x = 300.0;
bbcShape1105.around.y = 200.0;

bbcShape1106.rotation += 0.25;
bbcShape1106.around.x = 300.0;
bbcShape1106.around.y = 200.0;

bbcShape1107.rotation += 0.5;
bbcShape1107.around.x = 300.0;
bbcShape1107.around.y = 200.0;

bbcShape1108.rotation += 0.5;
bbcShape1108.around.x = 300.0;
bbcShape1108.around.y = 200.0;

bbcShape1109.rotation += 0.5;
bbcShape1109.around.x = 300.0;
bbcShape1109.around.y = 200.0;

bbcShape1110.rotation += 0.5;
bbcShape1110.around.x = 300.0;
bbcShape1110.around.y = 200.0;

bbcShape1111.rotation += 0.5;
bbcShape1111.around.x = 300.0;
bbcShape1111.around.y = 200.0;

bbcShape1112.rotation += 0.5;
bbcShape1112.around.x = 300.0;
bbcShape1112.around.y = 200.0;

bbcShape1113.rotation += 0.5;
bbcShape1113.around.x = 300.0;
bbcShape1113.around.y = 200.0;

bbcShape1114.rotation += 0.5;
bbcShape1114.around.x = 300.0;
bbcShape1114.around.y = 200.0;

bbcShape1115.rotation += 0.5;
bbcShape1115.around.x = 300.0;
bbcShape1115.around.y = 200.0;

bbcShape1116.rotation += 0.5;
bbcShape1116.around.x = 300.0;
bbcShape1116.around.y = 200.0;

bbcShape1117.rotation += 0.5;
bbcShape1117.around.x = 300.0;
bbcShape1117.around.y = 200.0;

bbcShape1118.rotation += 0.5;
bbcShape1118.around.x = 300.0;
bbcShape1118.around.y = 200.0;

bbcShape1119.rotation += 0.5;
bbcShape1119.around.x = 300.0;
bbcShape1119.around.y = 200.0;

bbcShape1120.rotation += 0.5;
bbcShape1120.around.x = 300.0;
bbcShape1120.around.y = 200.0;

bbcShape1121.rotation += 0.5;
bbcShape1121.around.x = 300.0;
bbcShape1121.around.y = 200.0;

bbcShape1122.rotation += 0.5;
bbcShape1122.around.x = 300.0;
bbcShape1122.around.y = 200.0;

bbcShape1123.rotation += 0.5;
bbcShape1123.around.x = 300.0;
bbcShape1123.around.y = 200.0;

bbcShape1124.rotation += 0.5;
bbcShape1124.around.x = 300.0;
bbcShape1124.around.y = 200.0;

bbcShape1125.rotation += 0.5;
bbcShape1125.around.x = 300.0;
bbcShape1125.around.y = 200.0;

bbcShape1126.rotation += 0.5;
bbcShape1126.around.x = 300.0;
bbcShape1126.around.y = 200.0;

bbcShape1127.rotation += 0.3;
bbcShape1127.around.x = 300.0;
bbcShape1127.around.y = 200.0;

bbcShape1128.rotation += 0.6;
bbcShape1128.around.x = 300.0;
bbcShape1128.around.y = 200.0;

bbcShape1129.rotation += 0.6;
bbcShape1129.around.x = 300.0;
bbcShape1129.around.y = 200.0;

bbcShape1130.rotation += 0.6;
bbcShape1130.around.x = 300.0;
bbcShape1130.around.y = 200.0;

bbcShape1131.rotation += 0.6;
bbcShape1131.around.x = 300.0;
bbcShape1131.around.y = 200.0;

bbcShape1132.rotation += 0.6;
bbcShape1132.around.x = 300.0;
bbcShape1132.around.y = 200.0;

bbcShape1133.rotation += 0.6;
bbcShape1133.around.x = 300.0;
bbcShape1133.around.y = 200.0;

bbcShape1134.rotation += 0.6;
bbcShape1134.around.x = 300.0;
bbcShape1134.around.y = 200.0;

bbcShape1135.rotation += 0.6;
bbcShape1135.around.x = 300.0;
bbcShape1135.around.y = 200.0;

bbcShape1136.rotation += 0.6;
bbcShape1136.around.x = 300.0;
bbcShape1136.around.y = 200.0;

bbcShape1137.rotation += 0.6;
bbcShape1137.around.x = 300.0;
bbcShape1137.around.y = 200.0;

bbcShape1138.rotation += 0.6;
bbcShape1138.around.x = 300.0;
bbcShape1138.around.y = 200.0;

bbcShape1139.rotation += 0.6;
bbcShape1139.around.x = 300.0;
bbcShape1139.around.y = 200.0;

bbcShape1140.rotation += 0.6;
bbcShape1140.around.x = 300.0;
bbcShape1140.around.y = 200.0;

bbcShape1141.rotation += 0.6;
bbcShape1141.around.x = 300.0;
bbcShape1141.around.y = 200.0;

bbcShape1142.rotation += 0.6;
bbcShape1142.around.x = 300.0;
bbcShape1142.around.y = 200.0;

bbcShape1143.rotation += 0.6;
bbcShape1143.around.x = 300.0;
bbcShape1143.around.y = 200.0;

bbcShape1144.rotation += 0.6;
bbcShape1144.around.x = 300.0;
bbcShape1144.around.y = 200.0;

bbcShape1145.rotation += 0.6;
bbcShape1145.around.x = 300.0;
bbcShape1145.around.y = 200.0;

bbcShape1146.rotation += 0.6;
bbcShape1146.around.x = 300.0;
bbcShape1146.around.y = 200.0;

bbcShape1147.rotation += 0.6;
bbcShape1147.around.x = 300.0;
bbcShape1147.around.y = 200.0;

bbcShape1148.rotation += 0.35;
bbcShape1148.around.x = 300.0;
bbcShape1148.around.y = 200.0;

bbcShape1149.rotation += 0.7;
bbcShape1149.around.x = 300.0;
bbcShape1149.around.y = 200.0;

bbcShape1150.rotation += 0.7;
bbcShape1150.around.x = 300.0;
bbcShape1150.around.y = 200.0;

bbcShape1151.rotation += 0.7;
bbcShape1151.around.x = 300.0;
bbcShape1151.around.y = 200.0;

bbcShape1152.rotation += 0.7;
bbcShape1152.around.x = 300.0;
bbcShape1152.around.y = 200.0;

bbcShape1153.rotation += 0.7;
bbcShape1153.around.x = 300.0;
bbcShape1153.around.y = 200.0;

bbcShape1154.rotation += 0.7;
bbcShape1154.around.x = 300.0;
bbcShape1154.around.y = 200.0;

bbcShape1155.rotation += 0.7;
bbcShape1155.around.x = 300.0;
bbcShape1155.around.y = 200.0;

bbcShape1156.rotation += 0.7;
bbcShape1156.around.x = 300.0;
bbcShape1156.around.y = 200.0;

bbcShape1157.rotation += 0.7;
bbcShape1157.around.x = 300.0;
bbcShape1157.around.y = 200.0;

bbcShape1158.rotation += 0.7;
bbcShape1158.around.x = 300.0;
bbcShape1158.around.y = 200.0;

bbcShape1159.rotation += 0.7;
bbcShape1159.around.x = 300.0;
bbcShape1159.around.y = 200.0;

bbcShape1160.rotation += 0.7;
bbcShape1160.around.x = 300.0;
bbcShape1160.around.y = 200.0;

bbcShape1161.rotation += 0.7;
bbcShape1161.around.x = 300.0;
bbcShape1161.around.y = 200.0;

bbcShape1162.rotation += 0.7;
bbcShape1162.around.x = 300.0;
bbcShape1162.around.y = 200.0;

bbcShape1163.rotation += 0.7;
bbcShape1163.around.x = 300.0;
bbcShape1163.around.y = 200.0;

bbcShape1164.rotation += 0.7;
bbcShape1164.around.x = 300.0;
bbcShape1164.around.y = 200.0;

bbcShape1165.rotation += 0.7;
bbcShape1165.around.x = 300.0;
bbcShape1165.around.y = 200.0;

bbcShape1166.rotation += 0.7;
bbcShape1166.around.x = 300.0;
bbcShape1166.around.y = 200.0;

bbcShape1167.rotation += 0.7;
bbcShape1167.around.x = 300.0;
bbcShape1167.around.y = 200.0;

bbcShape1168.rotation += 0.7;
bbcShape1168.around.x = 300.0;
bbcShape1168.around.y = 200.0;

bbcShape1169.rotation += 0.4;
bbcShape1169.around.x = 300.0;
bbcShape1169.around.y = 200.0;

bbcShape1170.rotation += 0.8;
bbcShape1170.around.x = 300.0;
bbcShape1170.around.y = 200.0;

bbcShape1171.rotation += 0.8;
bbcShape1171.around.x = 300.0;
bbcShape1171.around.y = 200.0;

bbcShape1172.rotation += 0.8;
bbcShape1172.around.x = 300.0;
bbcShape1172.around.y = 200.0;

bbcShape1173.rotation += 0.8;
bbcShape1173.around.x = 300.0;
bbcShape1173.around.y = 200.0;

bbcShape1174.rotation += 0.8;
bbcShape1174.around.x = 300.0;
bbcShape1174.around.y = 200.0;

bbcShape1175.rotation += 0.8;
bbcShape1175.around.x = 300.0;
bbcShape1175.around.y = 200.0;

bbcShape1176.rotation += 0.8;
bbcShape1176.around.x = 300.0;
bbcShape1176.around.y = 200.0;

bbcShape1177.rotation += 0.8;
bbcShape1177.around.x = 300.0;
bbcShape1177.around.y = 200.0;

bbcShape1178.rotation += 0.8;
bbcShape1178.around.x = 300.0;
bbcShape1178.around.y = 200.0;

bbcShape1179.rotation += 0.8;
bbcShape1179.around.x = 300.0;
bbcShape1179.around.y = 200.0;

bbcShape1180.rotation += 0.8;
bbcShape1180.around.x = 300.0;
bbcShape1180.around.y = 200.0;

bbcShape1181.rotation += 0.8;
bbcShape1181.around.x = 300.0;
bbcShape1181.around.y = 200.0;

bbcShape1182.rotation += 0.8;
bbcShape1182.around.x = 300.0;
bbcShape1182.around.y = 200.0;

bbcShape1183.rotation += 0.8;
bbcShape1183.around.x = 300.0;
bbcShape1183.around.y = 200.0;

bbcShape1184.rotation += 0.8;
bbcShape1184.around.x = 300.0;
bbcShape1184.around.y = 200.0;

bbcShape1185.rotation += 0.8;
bbcShape1185.around.x = 300.0;
bbcShape1185.around.y = 200.0;

bbcShape1186.rotation += 0.8;
bbcShape1186.around.x = 300.0;
bbcShape1186.around.y = 200.0;

bbcShape1187.rotation += 0.8;
bbcShape1187.around.x = 300.0;
bbcShape1187.around.y = 200.0;

bbcShape1188.rotation += 0.8;
bbcShape1188.around.x = 300.0;
bbcShape1188.around.y = 200.0;

bbcShape1189.rotation += 0.8;
bbcShape1189.around.x = 300.0;
bbcShape1189.around.y = 200.0;

bbcShape1190.rotation += 0.45;
bbcShape1190.around.x = 300.0;
bbcShape1190.around.y = 200.0;

bbcShape1191.rotation += 0.9;
bbcShape1191.around.x = 300.0;
bbcShape1191.around.y = 200.0;

bbcShape1192.rotation += 0.9;
bbcShape1192.around.x = 300.0;
bbcShape1192.around.y = 200.0;

bbcShape1193.rotation += 0.9;
bbcShape1193.around.x = 300.0;
bbcShape1193.around.y = 200.0;

bbcShape1194.rotation += 0.9;
bbcShape1194.around.x = 300.0;
bbcShape1194.around.y = 200.0;

bbcShape1195.rotation += 0.9;
bbcShape1195.around.x = 300.0;
bbcShape1195.around.y = 200.0;

bbcShape1196.rotation += 0.9;
bbcShape1196.around.x = 300.0;
bbcShape1196.around.y = 200.0;

bbcShape1197.rotation += 0.9;
bbcShape1197.around.x = 300.0;
bbcShape1197.around.y = 200.0;

bbcShape1198.rotation += 0.9;
bbcShape1198.around.x = 300.0;
bbcShape1198.around.y = 200.0;

bbcShape1199.rotation += 0.9;
bbcShape1199.around.x = 300.0;
bbcShape1199.around.y = 200.0;

bbcShape1200.rotation += 0.9;
bbcShape1200.around.x = 300.0;
bbcShape1200.around.y = 200.0;

bbcShape1201.rotation += 0.9;
bbcShape1201.around.x = 300.0;
bbcShape1201.around.y = 200.0;

bbcShape1202.rotation += 0.9;
bbcShape1202.around.x = 300.0;
bbcShape1202.around.y = 200.0;

bbcShape1203.rotation += 0.9;
bbcShape1203.around.x = 300.0;
bbcShape1203.around.y = 200.0;

bbcShape1204.rotation += 0.9;
bbcShape1204.around.x = 300.0;
bbcShape1204.around.y = 200.0;

bbcShape1205.rotation += 0.9;
bbcShape1205.around.x = 300.0;
bbcShape1205.around.y = 200.0;

bbcShape1206.rotation += 0.9;
bbcShape1206.around.x = 300.0;
bbcShape1206.around.y = 200.0;

bbcShape1207.rotation += 0.9;
bbcShape1207.around.x = 300.0;
bbcShape1207.around.y = 200.0;

bbcShape1208.rotation += 0.9;
bbcShape1208.around.x = 300.0;
bbcShape1208.around.y = 200.0;

bbcShape1209.rotation += 0.9;
bbcShape1209.around.x = 300.0;
bbcShape1209.around.y = 200.0;

bbcShape1210.rotation += 0.9;
bbcShape1210.around.x = 300.0;
bbcShape1210.around.y = 200.0;

bbcShape1211.rotation += 0.5;
bbcShape1211.around.x = 300.0;
bbcShape1211.around.y = 200.0;

bbcShape1212.rotation += 1.0;
bbcShape1212.around.x = 300.0;
bbcShape1212.around.y = 200.0;

bbcShape1213.rotation += 1.0;
bbcShape1213.around.x = 300.0;
bbcShape1213.around.y = 200.0;

bbcShape1214.rotation += 1.0;
bbcShape1214.around.x = 300.0;
bbcShape1214.around.y = 200.0;

bbcShape1215.rotation += 1.0;
bbcShape1215.around.x = 300.0;
bbcShape1215.around.y = 200.0;

bbcShape1216.rotation += 1.0;
bbcShape1216.around.x = 300.0;
bbcShape1216.around.y = 200.0;

bbcShape1217.rotation += 1.0;
bbcShape1217.around.x = 300.0;
bbcShape1217.around.y = 200.0;

bbcShape1218.rotation += 1.0;
bbcShape1218.around.x = 300.0;
bbcShape1218.around.y = 200.0;

bbcShape1219.rotation += 1.0;
bbcShape1219.around.x = 300.0;
bbcShape1219.around.y = 200.0;

bbcShape1220.rotation += 1.0;
bbcShape1220.around.x = 300.0;
bbcShape1220.around.y = 200.0;

bbcShape1221.rotation += 1.0;
bbcShape1221.around.x = 300.0;
bbcShape1221.around.y = 200.0;

bbcShape1222.rotation += 1.0;
bbcShape1222.around.x = 300.0;
bbcShape1222.around.y = 200.0;

bbcShape1223.rotation += 1.0;
bbcShape1223.around.x = 300.0;
bbcShape1223.around.y = 200.0;

bbcShape1224.rotation += 1.0;
bbcShape1224.around.x = 300.0;
bbcShape1224.around.y = 200.0;

bbcShape1225.rotation += 1.0;
bbcShape1225.around.x = 300.0;
bbcShape1225.around.y = 200.0;

bbcShape1226.rotation += 1.0;
bbcShape1226.around.x = 300.0;
bbcShape1226.around.y = 200.0;

bbcShape1227.rotation += 1.0;
bbcShape1227.around.x = 300.0;
bbcShape1227.around.y = 200.0;

bbcShape1228.rotation += 1.0;
bbcShape1228.around.x = 300.0;
bbcShape1228.around.y = 200.0;

bbcShape1229.rotation += 1.0;
bbcShape1229.around.x = 300.0;
bbcShape1229.around.y = 200.0;

bbcShape1230.rotation += 1.0;
bbcShape1230.around.x = 300.0;
bbcShape1230.around.y = 200.0;

bbcShape1231.rotation += 1.0;
bbcShape1231.around.x = 300.0;
bbcShape1231.around.y = 200.0;

bbcShape1232.rotation += 0.55;
bbcShape1232.around.x = 300.0;
bbcShape1232.around.y = 200.0;

bbcShape1233.rotation += 1.1;
bbcShape1233.around.x = 300.0;
bbcShape1233.around.y = 200.0;

bbcShape1234.rotation += 1.1;
bbcShape1234.around.x = 300.0;
bbcShape1234.around.y = 200.0;

bbcShape1235.rotation += 1.1;
bbcShape1235.around.x = 300.0;
bbcShape1235.around.y = 200.0;

bbcShape1236.rotation += 1.1;
bbcShape1236.around.x = 300.0;
bbcShape1236.around.y = 200.0;

bbcShape1237.rotation += 1.1;
bbcShape1237.around.x = 300.0;
bbcShape1237.around.y = 200.0;

bbcShape1238.rotation += 1.1;
bbcShape1238.around.x = 300.0;
bbcShape1238.around.y = 200.0;

bbcShape1239.rotation += 1.1;
bbcShape1239.around.x = 300.0;
bbcShape1239.around.y = 200.0;

bbcShape1240.rotation += 1.1;
bbcShape1240.around.x = 300.0;
bbcShape1240.around.y = 200.0;

bbcShape1241.rotation += 1.1;
bbcShape1241.around.x = 300.0;
bbcShape1241.around.y = 200.0;

bbcShape1242.rotation += 1.1;
bbcShape1242.around.x = 300.0;
bbcShape1242.around.y = 200.0;

bbcShape1243.rotation += 1.1;
bbcShape1243.around.x = 300.0;
bbcShape1243.around.y = 200.0;

bbcShape1244.rotation += 1.1;
bbcShape1244.around.x = 300.0;
bbcShape1244.around.y = 200.0;

bbcShape1245.rotation += 1.1;
bbcShape1245.around.x = 300.0;
bbcShape1245.around.y = 200.0;

bbcShape1246.rotation += 1.1;
bbcShape1246.around.x = 300.0;
bbcShape1246.around.y = 200.0;

bbcShape1247.rotation += 1.1;
bbcShape1247.around.x = 300.0;
bbcShape1247.around.y = 200.0;

bbcShape1248.rotation += 1.1;
bbcShape1248.around.x = 300.0;
bbcShape1248.around.y = 200.0;

bbcShape1249.rotation += 1.1;
bbcShape1249.around.x = 300.0;
bbcShape1249.around.y = 200.0;

bbcShape1250.rotation += 1.1;
bbcShape1250.around.x = 300.0;
bbcShape1250.around.y = 200.0;

bbcShape1251.rotation += 1.1;
bbcShape1251.around.x = 300.0;
bbcShape1251.around.y = 200.0;

bbcShape1252.rotation += 1.1;
bbcShape1252.around.x = 300.0;
bbcShape1252.around.y = 200.0;

bbcShape1253.rotation += 0.6;
bbcShape1253.around.x = 300.0;
bbcShape1253.around.y = 200.0;

bbcShape1254.rotation += 1.2;
bbcShape1254.around.x = 300.0;
bbcShape1254.around.y = 200.0;

bbcShape1255.rotation += 1.2;
bbcShape1255.around.x = 300.0;
bbcShape1255.around.y = 200.0;

bbcShape1256.rotation += 1.2;
bbcShape1256.around.x = 300.0;
bbcShape1256.around.y = 200.0;

bbcShape1257.rotation += 1.2;
bbcShape1257.around.x = 300.0;
bbcShape1257.around.y = 200.0;

bbcShape1258.rotation += 1.2;
bbcShape1258.around.x = 300.0;
bbcShape1258.around.y = 200.0;

bbcShape1259.rotation += 1.2;
bbcShape1259.around.x = 300.0;
bbcShape1259.around.y = 200.0;

bbcShape1260.rotation += 1.2;
bbcShape1260.around.x = 300.0;
bbcShape1260.around.y = 200.0;

bbcShape1261.rotation += 1.2;
bbcShape1261.around.x = 300.0;
bbcShape1261.around.y = 200.0;

bbcShape1262.rotation += 1.2;
bbcShape1262.around.x = 300.0;
bbcShape1262.around.y = 200.0;

bbcShape1263.rotation += 1.2;
bbcShape1263.around.x = 300.0;
bbcShape1263.around.y = 200.0;

bbcShape1264.rotation += 1.2;
bbcShape1264.around.x = 300.0;
bbcShape1264.around.y = 200.0;

bbcShape1265.rotation += 1.2;
bbcShape1265.around.x = 300.0;
bbcShape1265.around.y = 200.0;

bbcShape1266.rotation += 1.2;
bbcShape1266.around.x = 300.0;
bbcShape1266.around.y = 200.0;

bbcShape1267.rotation += 1.2;
bbcShape1267.around.x = 300.0;
bbcShape1267.around.y = 200.0;

bbcShape1268.rotation += 1.2;
bbcShape1268.around.x = 300.0;
bbcShape1268.around.y = 200.0;

bbcShape1269.rotation += 1.2;
bbcShape1269.around.x = 300.0;
bbcShape1269.around.y = 200.0;

bbcShape1270.rotation += 1.2;
bbcShape1270.around.x = 300.0;
bbcShape1270.around.y = 200.0;

bbcShape1271.rotation += 1.2;
bbcShape1271.around.x = 300.0;
bbcShape1271.around.y = 200.0;

bbcShape1272.rotation += 1.2;
bbcShape1272.around.x = 300.0;
bbcShape1272.around.y = 200.0;

bbcShape1273.rotation += 1.2;
bbcShape1273.around.x = 300.0;
bbcShape1273.around.y = 200.0;

bbcShape1274.rotation += 0.65;
bbcShape1274.around.x = 300.0;
bbcShape1274.around.y = 200.0;

bbcShape1275.rotation += 1.3;
bbcShape1275.around.x = 300.0;
bbcShape1275.around.y = 200.0;

bbcShape1276.rotation += 1.3;
bbcShape1276.around.x = 300.0;
bbcShape1276.around.y = 200.0;

bbcShape1277.rotation += 1.3;
bbcShape1277.around.x = 300.0;
bbcShape1277.around.y = 200.0;

bbcShape1278.rotation += 1.3;
bbcShape1278.around.x = 300.0;
bbcShape1278.around.y = 200.0;

bbcShape1279.rotation += 1.3;
bbcShape1279.around.x = 300.0;
bbcShape1279.around.y = 200.0;

bbcShape1280.rotation += 1.3;
bbcShape1280.around.x = 300.0;
bbcShape1280.around.y = 200.0;

bbcShape1281.rotation += 1.3;
bbcShape1281.around.x = 300.0;
bbcShape1281.around.y = 200.0;

bbcShape1282.rotation += 1.3;
bbcShape1282.around.x = 300.0;
bbcShape1282.around.y = 200.0;

bbcShape1283.rotation += 1.3;
bbcShape1283.around.x = 300.0;
bbcShape1283.around.y = 200.0;

bbcShape1284.rotation += 1.3;
bbcShape1284.around.x = 300.0;
bbcShape1284.around.y = 200.0;

bbcShape1285.rotation += 1.3;
bbcShape1285.around.x = 300.0;
bbcShape1285.around.y = 200.0;

bbcShape1286.rotation += 1.3;
bbcShape1286.around.x = 300.0;
bbcShape1286.around.y = 200.0;

bbcShape1287.rotation += 1.3;
bbcShape1287.around.x = 300.0;
bbcShape1287.around.y = 200.0;

bbcShape1288.rotation += 1.3;
bbcShape1288.around.x = 300.0;
bbcShape1288.around.y = 200.0;

bbcShape1289.rotation += 1.3;
bbcShape1289.around.x = 300.0;
bbcShape1289.around.y = 200.0;

bbcShape1290.rotation += 1.3;
bbcShape1290.around.x = 300.0;
bbcShape1290.around.y = 200.0;

bbcShape1291.rotation += 1.3;
bbcShape1291.around.x = 300.0;
bbcShape1291.around.y = 200.0;

bbcShape1292.rotation += 1.3;
bbcShape1292.around.x = 300.0;
bbcShape1292.around.y = 200.0;

bbcShape1293.rotation += 1.3;
bbcShape1293.around.x = 300.0;
bbcShape1293.around.y = 200.0;

bbcShape1294.rotation += 1.3;
bbcShape1294.around.x = 300.0;
bbcShape1294.around.y = 200.0;

bbcShape1295.rotation += 0.7;
bbcShape1295.around.x = 300.0;
bbcShape1295.around.y = 200.0;

bbcShape1296.rotation += 1.4;
bbcShape1296.around.x = 300.0;
bbcShape1296.around.y = 200.0;

bbcShape1297.rotation += 1.4;
bbcShape1297.around.x = 300.0;
bbcShape1297.around.y = 200.0;

bbcShape1298.rotation += 1.4;
bbcShape1298.around.x = 300.0;
bbcShape1298.around.y = 200.0;

bbcShape1299.rotation += 1.4;
bbcShape1299.around.x = 300.0;
bbcShape1299.around.y = 200.0;

bbcShape1300.rotation += 1.4;
bbcShape1300.around.x = 300.0;
bbcShape1300.around.y = 200.0;

bbcShape1301.rotation += 1.4;
bbcShape1301.around.x = 300.0;
bbcShape1301.around.y = 200.0;

bbcShape1302.rotation += 1.4;
bbcShape1302.around.x = 300.0;
bbcShape1302.around.y = 200.0;

bbcShape1303.rotation += 1.4;
bbcShape1303.around.x = 300.0;
bbcShape1303.around.y = 200.0;

bbcShape1304.rotation += 1.4;
bbcShape1304.around.x = 300.0;
bbcShape1304.around.y = 200.0;

bbcShape1305.rotation += 1.4;
bbcShape1305.around.x = 300.0;
bbcShape1305.around.y = 200.0;

bbcShape1306.rotation += 1.4;
bbcShape1306.around.x = 300.0;
bbcShape1306.around.y = 200.0;

bbcShape1307.rotation += 1.4;
bbcShape1307.around.x = 300.0;
bbcShape1307.around.y = 200.0;

bbcShape1308.rotation += 1.4;
bbcShape1308.around.x = 300.0;
bbcShape1308.around.y = 200.0;

bbcShape1309.rotation += 1.4;
bbcShape1309.around.x = 300.0;
bbcShape1309.around.y = 200.0;

bbcShape1310.rotation += 1.4;
bbcShape1310.around.x = 300.0;
bbcShape1310.around.y = 200.0;

bbcShape1311.rotation += 1.4;
bbcShape1311.around.x = 300.0;
bbcShape1311.around.y = 200.0;

bbcShape1312.rotation += 1.4;
bbcShape1312.around.x = 300.0;
bbcShape1312.around.y = 200.0;

bbcShape1313.rotation += 1.4;
bbcShape1313.around.x = 300.0;
bbcShape1313.around.y = 200.0;

bbcShape1314.rotation += 1.4;
bbcShape1314.around.x = 300.0;
bbcShape1314.around.y = 200.0;

bbcShape1315.rotation += 1.4;
bbcShape1315.around.x = 300.0;
bbcShape1315.around.y = 200.0;

bbcShape1316.rotation += 0.75;
bbcShape1316.around.x = 300.0;
bbcShape1316.around.y = 200.0;

bbcShape1317.rotation += 1.5;
bbcShape1317.around.x = 300.0;
bbcShape1317.around.y = 200.0;

bbcShape1318.rotation += 1.5;
bbcShape1318.around.x = 300.0;
bbcShape1318.around.y = 200.0;

bbcShape1319.rotation += 1.5;
bbcShape1319.around.x = 300.0;
bbcShape1319.around.y = 200.0;

bbcShape1320.rotation += 1.5;
bbcShape1320.around.x = 300.0;
bbcShape1320.around.y = 200.0;

bbcShape1321.rotation += 1.5;
bbcShape1321.around.x = 300.0;
bbcShape1321.around.y = 200.0;

bbcShape1322.rotation += 1.5;
bbcShape1322.around.x = 300.0;
bbcShape1322.around.y = 200.0;

bbcShape1323.rotation += 1.5;
bbcShape1323.around.x = 300.0;
bbcShape1323.around.y = 200.0;

bbcShape1324.rotation += 1.5;
bbcShape1324.around.x = 300.0;
bbcShape1324.around.y = 200.0;

bbcShape1325.rotation += 1.5;
bbcShape1325.around.x = 300.0;
bbcShape1325.around.y = 200.0;

bbcShape1326.rotation += 1.5;
bbcShape1326.around.x = 300.0;
bbcShape1326.around.y = 200.0;

bbcShape1327.rotation += 1.5;
bbcShape1327.around.x = 300.0;
bbcShape1327.around.y = 200.0;

bbcShape1328.rotation += 1.5;
bbcShape1328.around.x = 300.0;
bbcShape1328.around.y = 200.0;

bbcShape1329.rotation += 1.5;
bbcShape1329.around.x = 300.0;
bbcShape1329.around.y = 200.0;

bbcShape1330.rotation += 1.5;
bbcShape1330.around.x = 300.0;
bbcShape1330.around.y = 200.0;

bbcShape1331.rotation += 1.5;
bbcShape1331.around.x = 300.0;
bbcShape1331.around.y = 200.0;

bbcShape1332.rotation += 1.5;
bbcShape1332.around.x = 300.0;
bbcShape1332.around.y = 200.0;

bbcShape1333.rotation += 1.5;
bbcShape1333.around.x = 300.0;
bbcShape1333.around.y = 200.0;

bbcShape1334.rotation += 1.5;
bbcShape1334.around.x = 300.0;
bbcShape1334.around.y = 200.0;

bbcShape1335.rotation += 1.5;
bbcShape1335.around.x = 300.0;
bbcShape1335.around.y = 200.0;

bbcShape1336.rotation += 1.5;
bbcShape1336.around.x = 300.0;
bbcShape1336.around.y = 200.0;

bbcShape1337.rotation += 0.8;
bbcShape1337.around.x = 300.0;
bbcShape1337.around.y = 200.0;

bbcShape1338.rotation += 1.6;
bbcShape1338.around.x = 300.0;
bbcShape1338.around.y = 200.0;

bbcShape1339.rotation += 1.6;
bbcShape1339.around.x = 300.0;
bbcShape1339.around.y = 200.0;

bbcShape1340.rotation += 1.6;
bbcShape1340.around.x = 300.0;
bbcShape1340.around.y = 200.0;

bbcShape1341.rotation += 1.6;
bbcShape1341.around.x = 300.0;
bbcShape1341.around.y = 200.0;

bbcShape1342.rotation += 1.6;
bbcShape1342.around.x = 300.0;
bbcShape1342.around.y = 200.0;

bbcShape1343.rotation += 1.6;
bbcShape1343.around.x = 300.0;
bbcShape1343.around.y = 200.0;

bbcShape1344.rotation += 1.6;
bbcShape1344.around.x = 300.0;
bbcShape1344.around.y = 200.0;

bbcShape1345.rotation += 1.6;
bbcShape1345.around.x = 300.0;
bbcShape1345.around.y = 200.0;

bbcShape1346.rotation += 1.6;
bbcShape1346.around.x = 300.0;
bbcShape1346.around.y = 200.0;

bbcShape1347.rotation += 1.6;
bbcShape1347.around.x = 300.0;
bbcShape1347.around.y = 200.0;

bbcShape1348.rotation += 1.6;
bbcShape1348.around.x = 300.0;
bbcShape1348.around.y = 200.0;

bbcShape1349.rotation += 1.6;
bbcShape1349.around.x = 300.0;
bbcShape1349.around.y = 200.0;

bbcShape1350.rotation += 1.6;
bbcShape1350.around.x = 300.0;
bbcShape1350.around.y = 200.0;

bbcShape1351.rotation += 1.6;
bbcShape1351.around.x = 300.0;
bbcShape1351.around.y = 200.0;

bbcShape1352.rotation += 1.6;
bbcShape1352.around.x = 300.0;
bbcShape1352.around.y = 200.0;

bbcShape1353.rotation += 1.6;
bbcShape1353.around.x = 300.0;
bbcShape1353.around.y = 200.0;

bbcShape1354.rotation += 1.6;
bbcShape1354.around.x = 300.0;
bbcShape1354.around.y = 200.0;

bbcShape1355.rotation += 1.6;
bbcShape1355.around.x = 300.0;
bbcShape1355.around.y = 200.0;

bbcShape1356.rotation += 1.6;
bbcShape1356.around.x = 300.0;
bbcShape1356.around.y = 200.0;

bbcShape1357.rotation += 1.6;
bbcShape1357.around.x = 300.0;
bbcShape1357.around.y = 200.0;

bbcShape1358.rotation += 0.85;
bbcShape1358.around.x = 300.0;
bbcShape1358.around.y = 200.0;

bbcShape1359.rotation += 1.7;
bbcShape1359.around.x = 300.0;
bbcShape1359.around.y = 200.0;

bbcShape1360.rotation += 1.7;
bbcShape1360.around.x = 300.0;
bbcShape1360.around.y = 200.0;

bbcShape1361.rotation += 1.7;
bbcShape1361.around.x = 300.0;
bbcShape1361.around.y = 200.0;

bbcShape1362.rotation += 1.7;
bbcShape1362.around.x = 300.0;
bbcShape1362.around.y = 200.0;

bbcShape1363.rotation += 1.7;
bbcShape1363.around.x = 300.0;
bbcShape1363.around.y = 200.0;

bbcShape1364.rotation += 1.7;
bbcShape1364.around.x = 300.0;
bbcShape1364.around.y = 200.0;

bbcShape1365.rotation += 1.7;
bbcShape1365.around.x = 300.0;
bbcShape1365.around.y = 200.0;

bbcShape1366.rotation += 1.7;
bbcShape1366.around.x = 300.0;
bbcShape1366.around.y = 200.0;

bbcShape1367.rotation += 1.7;
bbcShape1367.around.x = 300.0;
bbcShape1367.around.y = 200.0;

bbcShape1368.rotation += 1.7;
bbcShape1368.around.x = 300.0;
bbcShape1368.around.y = 200.0;

bbcShape1369.rotation += 1.7;
bbcShape1369.around.x = 300.0;
bbcShape1369.around.y = 200.0;

bbcShape1370.rotation += 1.7;
bbcShape1370.around.x = 300.0;
bbcShape1370.around.y = 200.0;

bbcShape1371.rotation += 1.7;
bbcShape1371.around.x = 300.0;
bbcShape1371.around.y = 200.0;

bbcShape1372.rotation += 1.7;
bbcShape1372.around.x = 300.0;
bbcShape1372.around.y = 200.0;

bbcShape1373.rotation += 1.7;
bbcShape1373.around.x = 300.0;
bbcShape1373.around.y = 200.0;

bbcShape1374.rotation += 1.7;
bbcShape1374.around.x = 300.0;
bbcShape1374.around.y = 200.0;

bbcShape1375.rotation += 1.7;
bbcShape1375.around.x = 300.0;
bbcShape1375.around.y = 200.0;

bbcShape1376.rotation += 1.7;
bbcShape1376.around.x = 300.0;
bbcShape1376.around.y = 200.0;

bbcShape1377.rotation += 1.7;
bbcShape1377.around.x = 300.0;
bbcShape1377.around.y = 200.0;

bbcShape1378.rotation += 1.7;
bbcShape1378.around.x = 300.0;
bbcShape1378.around.y = 200.0;

bbcShape1379.rotation += 0.9;
bbcShape1379.around.x = 300.0;
bbcShape1379.around.y = 200.0;

bbcShape1380.rotation += 1.8;
bbcShape1380.around.x = 300.0;
bbcShape1380.around.y = 200.0;

bbcShape1381.rotation += 1.8;
bbcShape1381.around.x = 300.0;
bbcShape1381.around.y = 200.0;

bbcShape1382.rotation += 1.8;
bbcShape1382.around.x = 300.0;
bbcShape1382.around.y = 200.0;

bbcShape1383.rotation += 1.8;
bbcShape1383.around.x = 300.0;
bbcShape1383.around.y = 200.0;

bbcShape1384.rotation += 1.8;
bbcShape1384.around.x = 300.0;
bbcShape1384.around.y = 200.0;

bbcShape1385.rotation += 1.8;
bbcShape1385.around.x = 300.0;
bbcShape1385.around.y = 200.0;

bbcShape1386.rotation += 1.8;
bbcShape1386.around.x = 300.0;
bbcShape1386.around.y = 200.0;

bbcShape1387.rotation += 1.8;
bbcShape1387.around.x = 300.0;
bbcShape1387.around.y = 200.0;

bbcShape1388.rotation += 1.8;
bbcShape1388.around.x = 300.0;
bbcShape1388.around.y = 200.0;

bbcShape1389.rotation += 1.8;
bbcShape1389.around.x = 300.0;
bbcShape1389.around.y = 200.0;

bbcShape1390.rotation += 1.8;
bbcShape1390.around.x = 300.0;
bbcShape1390.around.y = 200.0;

bbcShape1391.rotation += 1.8;
bbcShape1391.around.x = 300.0;
bbcShape1391.around.y = 200.0;

bbcShape1392.rotation += 1.8;
bbcShape1392.around.x = 300.0;
bbcShape1392.around.y = 200.0;

bbcShape1393.rotation += 1.8;
bbcShape1393.around.x = 300.0;
bbcShape1393.around.y = 200.0;

bbcShape1394.rotation += 1.8;
bbcShape1394.around.x = 300.0;
bbcShape1394.around.y = 200.0;

bbcShape1395.rotation += 1.8;
bbcShape1395.around.x = 300.0;
bbcShape1395.around.y = 200.0;

bbcShape1396.rotation += 1.8;
bbcShape1396.around.x = 300.0;
bbcShape1396.around.y = 200.0;

bbcShape1397.rotation += 1.8;
bbcShape1397.around.x = 300.0;
bbcShape1397.around.y = 200.0;

bbcShape1398.rotation += 1.8;
bbcShape1398.around.x = 300.0;
bbcShape1398.around.y = 200.0;

bbcShape1399.rotation += 1.8;
bbcShape1399.around.x = 300.0;
bbcShape1399.around.y = 200.0;

bbcShape1400.rotation += 0.95;
bbcShape1400.around.x = 300.0;
bbcShape1400.around.y = 200.0;

bbcShape1401.rotation += 1.9;
bbcShape1401.around.x = 300.0;
bbcShape1401.around.y = 200.0;

bbcShape1402.rotation += 1.9;
bbcShape1402.around.x = 300.0;
bbcShape1402.around.y = 200.0;

bbcShape1403.rotation += 1.9;
bbcShape1403.around.x = 300.0;
bbcShape1403.around.y = 200.0;

bbcShape1404.rotation += 1.9;
bbcShape1404.around.x = 300.0;
bbcShape1404.around.y = 200.0;

bbcShape1405.rotation += 1.9;
bbcShape1405.around.x = 300.0;
bbcShape1405.around.y = 200.0;

bbcShape1406.rotation += 1.9;
bbcShape1406.around.x = 300.0;
bbcShape1406.around.y = 200.0;

bbcShape1407.rotation += 1.9;
bbcShape1407.around.x = 300.0;
bbcShape1407.around.y = 200.0;

bbcShape1408.rotation += 1.9;
bbcShape1408.around.x = 300.0;
bbcShape1408.around.y = 200.0;

bbcShape1409.rotation += 1.9;
bbcShape1409.around.x = 300.0;
bbcShape1409.around.y = 200.0;

bbcShape1410.rotation += 1.9;
bbcShape1410.around.x = 300.0;
bbcShape1410.around.y = 200.0;

bbcShape1411.rotation += 1.9;
bbcShape1411.around.x = 300.0;
bbcShape1411.around.y = 200.0;

bbcShape1412.rotation += 1.9;
bbcShape1412.around.x = 300.0;
bbcShape1412.around.y = 200.0;

bbcShape1413.rotation += 1.9;
bbcShape1413.around.x = 300.0;
bbcShape1413.around.y = 200.0;

bbcShape1414.rotation += 1.9;
bbcShape1414.around.x = 300.0;
bbcShape1414.around.y = 200.0;

bbcShape1415.rotation += 1.9;
bbcShape1415.around.x = 300.0;
bbcShape1415.around.y = 200.0;

bbcShape1416.rotation += 1.9;
bbcShape1416.around.x = 300.0;
bbcShape1416.around.y = 200.0;

bbcShape1417.rotation += 1.9;
bbcShape1417.around.x = 300.0;
bbcShape1417.around.y = 200.0;

bbcShape1418.rotation += 1.9;
bbcShape1418.around.x = 300.0;
bbcShape1418.around.y = 200.0;

bbcShape1419.rotation += 1.9;
bbcShape1419.around.x = 300.0;
bbcShape1419.around.y = 200.0;

bbcShape1420.rotation += 1.9;
bbcShape1420.around.x = 300.0;
bbcShape1420.around.y = 200.0;

bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);

ctx.fillStyle = 'rgb(67, 236, 83)';

ctx.save();
ctx.translate(bbcShape1.around.x, bbcShape1.around.y);
ctx.rotate(bbcShape1.rotation * Math.PI / 180);
ctx.translate(-bbcShape1.around.x, -bbcShape1.around.y);
ctx.beginPath();
ctx.arc(bbcShape1.point.x, bbcShape1.point.y, bbcShape1.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(69, 106, 228)';

ctx.save();
ctx.translate(bbcShape2.around.x, bbcShape2.around.y);
ctx.rotate(bbcShape2.rotation * Math.PI / 180);
ctx.translate(-bbcShape2.around.x, -bbcShape2.around.y);
ctx.beginPath();
ctx.arc(bbcShape2.point.x, bbcShape2.point.y, bbcShape2.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 151, 49)';

ctx.save();
ctx.translate(bbcShape3.around.x, bbcShape3.around.y);
ctx.rotate(bbcShape3.rotation * Math.PI / 180);
ctx.translate(-bbcShape3.around.x, -bbcShape3.around.y);
ctx.beginPath();
ctx.arc(bbcShape3.point.x, bbcShape3.point.y, bbcShape3.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(144, 146, 191)';

ctx.save();
ctx.translate(bbcShape4.around.x, bbcShape4.around.y);
ctx.rotate(bbcShape4.rotation * Math.PI / 180);
ctx.translate(-bbcShape4.around.x, -bbcShape4.around.y);
ctx.beginPath();
ctx.arc(bbcShape4.point.x, bbcShape4.point.y, bbcShape4.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 140, 158)';

ctx.save();
ctx.translate(bbcShape5.around.x, bbcShape5.around.y);
ctx.rotate(bbcShape5.rotation * Math.PI / 180);
ctx.translate(-bbcShape5.around.x, -bbcShape5.around.y);
ctx.beginPath();
ctx.arc(bbcShape5.point.x, bbcShape5.point.y, bbcShape5.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(7, 12, 175)';

ctx.save();
ctx.translate(bbcShape6.around.x, bbcShape6.around.y);
ctx.rotate(bbcShape6.rotation * Math.PI / 180);
ctx.translate(-bbcShape6.around.x, -bbcShape6.around.y);
ctx.beginPath();
ctx.arc(bbcShape6.point.x, bbcShape6.point.y, bbcShape6.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(132, 234, 35)';

ctx.save();
ctx.translate(bbcShape7.around.x, bbcShape7.around.y);
ctx.rotate(bbcShape7.rotation * Math.PI / 180);
ctx.translate(-bbcShape7.around.x, -bbcShape7.around.y);
ctx.beginPath();
ctx.arc(bbcShape7.point.x, bbcShape7.point.y, bbcShape7.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(29, 180, 100)';

ctx.save();
ctx.translate(bbcShape8.around.x, bbcShape8.around.y);
ctx.rotate(bbcShape8.rotation * Math.PI / 180);
ctx.translate(-bbcShape8.around.x, -bbcShape8.around.y);
ctx.beginPath();
ctx.arc(bbcShape8.point.x, bbcShape8.point.y, bbcShape8.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(63, 224, 204)';

ctx.save();
ctx.translate(bbcShape9.around.x, bbcShape9.around.y);
ctx.rotate(bbcShape9.rotation * Math.PI / 180);
ctx.translate(-bbcShape9.around.x, -bbcShape9.around.y);
ctx.beginPath();
ctx.arc(bbcShape9.point.x, bbcShape9.point.y, bbcShape9.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(98, 237, 180)';

ctx.save();
ctx.translate(bbcShape10.around.x, bbcShape10.around.y);
ctx.rotate(bbcShape10.rotation * Math.PI / 180);
ctx.translate(-bbcShape10.around.x, -bbcShape10.around.y);
ctx.beginPath();
ctx.arc(bbcShape10.point.x, bbcShape10.point.y, bbcShape10.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(108, 134, 86)';

ctx.save();
ctx.translate(bbcShape11.around.x, bbcShape11.around.y);
ctx.rotate(bbcShape11.rotation * Math.PI / 180);
ctx.translate(-bbcShape11.around.x, -bbcShape11.around.y);
ctx.beginPath();
ctx.arc(bbcShape11.point.x, bbcShape11.point.y, bbcShape11.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(61, 80, 207)';

ctx.save();
ctx.translate(bbcShape12.around.x, bbcShape12.around.y);
ctx.rotate(bbcShape12.rotation * Math.PI / 180);
ctx.translate(-bbcShape12.around.x, -bbcShape12.around.y);
ctx.beginPath();
ctx.arc(bbcShape12.point.x, bbcShape12.point.y, bbcShape12.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(184, 109, 26)';

ctx.save();
ctx.translate(bbcShape13.around.x, bbcShape13.around.y);
ctx.rotate(bbcShape13.rotation * Math.PI / 180);
ctx.translate(-bbcShape13.around.x, -bbcShape13.around.y);
ctx.beginPath();
ctx.arc(bbcShape13.point.x, bbcShape13.point.y, bbcShape13.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(70, 49, 45)';

ctx.save();
ctx.translate(bbcShape14.around.x, bbcShape14.around.y);
ctx.rotate(bbcShape14.rotation * Math.PI / 180);
ctx.translate(-bbcShape14.around.x, -bbcShape14.around.y);
ctx.beginPath();
ctx.arc(bbcShape14.point.x, bbcShape14.point.y, bbcShape14.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(70, 212, 174)';

ctx.save();
ctx.translate(bbcShape15.around.x, bbcShape15.around.y);
ctx.rotate(bbcShape15.rotation * Math.PI / 180);
ctx.translate(-bbcShape15.around.x, -bbcShape15.around.y);
ctx.beginPath();
ctx.arc(bbcShape15.point.x, bbcShape15.point.y, bbcShape15.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(56, 27, 67)';

ctx.save();
ctx.translate(bbcShape16.around.x, bbcShape16.around.y);
ctx.rotate(bbcShape16.rotation * Math.PI / 180);
ctx.translate(-bbcShape16.around.x, -bbcShape16.around.y);
ctx.beginPath();
ctx.arc(bbcShape16.point.x, bbcShape16.point.y, bbcShape16.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 145, 48)';

ctx.save();
ctx.translate(bbcShape17.around.x, bbcShape17.around.y);
ctx.rotate(bbcShape17.rotation * Math.PI / 180);
ctx.translate(-bbcShape17.around.x, -bbcShape17.around.y);
ctx.beginPath();
ctx.arc(bbcShape17.point.x, bbcShape17.point.y, bbcShape17.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(65, 73, 196)';

ctx.save();
ctx.translate(bbcShape18.around.x, bbcShape18.around.y);
ctx.rotate(bbcShape18.rotation * Math.PI / 180);
ctx.translate(-bbcShape18.around.x, -bbcShape18.around.y);
ctx.beginPath();
ctx.arc(bbcShape18.point.x, bbcShape18.point.y, bbcShape18.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(83, 222, 172)';

ctx.save();
ctx.translate(bbcShape19.around.x, bbcShape19.around.y);
ctx.rotate(bbcShape19.rotation * Math.PI / 180);
ctx.translate(-bbcShape19.around.x, -bbcShape19.around.y);
ctx.beginPath();
ctx.arc(bbcShape19.point.x, bbcShape19.point.y, bbcShape19.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 242, 208)';

ctx.save();
ctx.translate(bbcShape20.around.x, bbcShape20.around.y);
ctx.rotate(bbcShape20.rotation * Math.PI / 180);
ctx.translate(-bbcShape20.around.x, -bbcShape20.around.y);
ctx.beginPath();
ctx.arc(bbcShape20.point.x, bbcShape20.point.y, bbcShape20.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 206, 224)';

ctx.save();
ctx.translate(bbcShape21.around.x, bbcShape21.around.y);
ctx.rotate(bbcShape21.rotation * Math.PI / 180);
ctx.translate(-bbcShape21.around.x, -bbcShape21.around.y);
ctx.beginPath();
ctx.arc(bbcShape21.point.x, bbcShape21.point.y, bbcShape21.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 47, 18)';

ctx.save();
ctx.translate(bbcShape22.around.x, bbcShape22.around.y);
ctx.rotate(bbcShape22.rotation * Math.PI / 180);
ctx.translate(-bbcShape22.around.x, -bbcShape22.around.y);
ctx.beginPath();
ctx.arc(bbcShape22.point.x, bbcShape22.point.y, bbcShape22.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 104, 106)';

ctx.save();
ctx.translate(bbcShape23.around.x, bbcShape23.around.y);
ctx.rotate(bbcShape23.rotation * Math.PI / 180);
ctx.translate(-bbcShape23.around.x, -bbcShape23.around.y);
ctx.beginPath();
ctx.arc(bbcShape23.point.x, bbcShape23.point.y, bbcShape23.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(6, 225, 190)';

ctx.save();
ctx.translate(bbcShape24.around.x, bbcShape24.around.y);
ctx.rotate(bbcShape24.rotation * Math.PI / 180);
ctx.translate(-bbcShape24.around.x, -bbcShape24.around.y);
ctx.beginPath();
ctx.arc(bbcShape24.point.x, bbcShape24.point.y, bbcShape24.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(74, 133, 63)';

ctx.save();
ctx.translate(bbcShape25.around.x, bbcShape25.around.y);
ctx.rotate(bbcShape25.rotation * Math.PI / 180);
ctx.translate(-bbcShape25.around.x, -bbcShape25.around.y);
ctx.beginPath();
ctx.arc(bbcShape25.point.x, bbcShape25.point.y, bbcShape25.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(210, 230, 145)';

ctx.save();
ctx.translate(bbcShape26.around.x, bbcShape26.around.y);
ctx.rotate(bbcShape26.rotation * Math.PI / 180);
ctx.translate(-bbcShape26.around.x, -bbcShape26.around.y);
ctx.beginPath();
ctx.arc(bbcShape26.point.x, bbcShape26.point.y, bbcShape26.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(120, 150, 231)';

ctx.save();
ctx.translate(bbcShape27.around.x, bbcShape27.around.y);
ctx.rotate(bbcShape27.rotation * Math.PI / 180);
ctx.translate(-bbcShape27.around.x, -bbcShape27.around.y);
ctx.beginPath();
ctx.arc(bbcShape27.point.x, bbcShape27.point.y, bbcShape27.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(174, 246, 175)';

ctx.save();
ctx.translate(bbcShape28.around.x, bbcShape28.around.y);
ctx.rotate(bbcShape28.rotation * Math.PI / 180);
ctx.translate(-bbcShape28.around.x, -bbcShape28.around.y);
ctx.beginPath();
ctx.arc(bbcShape28.point.x, bbcShape28.point.y, bbcShape28.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(230, 177, 10)';

ctx.save();
ctx.translate(bbcShape29.around.x, bbcShape29.around.y);
ctx.rotate(bbcShape29.rotation * Math.PI / 180);
ctx.translate(-bbcShape29.around.x, -bbcShape29.around.y);
ctx.beginPath();
ctx.arc(bbcShape29.point.x, bbcShape29.point.y, bbcShape29.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(31, 121, 232)';

ctx.save();
ctx.translate(bbcShape30.around.x, bbcShape30.around.y);
ctx.rotate(bbcShape30.rotation * Math.PI / 180);
ctx.translate(-bbcShape30.around.x, -bbcShape30.around.y);
ctx.beginPath();
ctx.arc(bbcShape30.point.x, bbcShape30.point.y, bbcShape30.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(194, 167, 107)';

ctx.save();
ctx.translate(bbcShape31.around.x, bbcShape31.around.y);
ctx.rotate(bbcShape31.rotation * Math.PI / 180);
ctx.translate(-bbcShape31.around.x, -bbcShape31.around.y);
ctx.beginPath();
ctx.arc(bbcShape31.point.x, bbcShape31.point.y, bbcShape31.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(254, 205, 237)';

ctx.save();
ctx.translate(bbcShape32.around.x, bbcShape32.around.y);
ctx.rotate(bbcShape32.rotation * Math.PI / 180);
ctx.translate(-bbcShape32.around.x, -bbcShape32.around.y);
ctx.beginPath();
ctx.arc(bbcShape32.point.x, bbcShape32.point.y, bbcShape32.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 95, 155)';

ctx.save();
ctx.translate(bbcShape33.around.x, bbcShape33.around.y);
ctx.rotate(bbcShape33.rotation * Math.PI / 180);
ctx.translate(-bbcShape33.around.x, -bbcShape33.around.y);
ctx.beginPath();
ctx.arc(bbcShape33.point.x, bbcShape33.point.y, bbcShape33.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(85, 124, 0)';

ctx.save();
ctx.translate(bbcShape34.around.x, bbcShape34.around.y);
ctx.rotate(bbcShape34.rotation * Math.PI / 180);
ctx.translate(-bbcShape34.around.x, -bbcShape34.around.y);
ctx.beginPath();
ctx.arc(bbcShape34.point.x, bbcShape34.point.y, bbcShape34.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(186, 11, 76)';

ctx.save();
ctx.translate(bbcShape35.around.x, bbcShape35.around.y);
ctx.rotate(bbcShape35.rotation * Math.PI / 180);
ctx.translate(-bbcShape35.around.x, -bbcShape35.around.y);
ctx.beginPath();
ctx.arc(bbcShape35.point.x, bbcShape35.point.y, bbcShape35.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(171, 221, 99)';

ctx.save();
ctx.translate(bbcShape36.around.x, bbcShape36.around.y);
ctx.rotate(bbcShape36.rotation * Math.PI / 180);
ctx.translate(-bbcShape36.around.x, -bbcShape36.around.y);
ctx.beginPath();
ctx.arc(bbcShape36.point.x, bbcShape36.point.y, bbcShape36.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(111, 138, 249)';

ctx.save();
ctx.translate(bbcShape37.around.x, bbcShape37.around.y);
ctx.rotate(bbcShape37.rotation * Math.PI / 180);
ctx.translate(-bbcShape37.around.x, -bbcShape37.around.y);
ctx.beginPath();
ctx.arc(bbcShape37.point.x, bbcShape37.point.y, bbcShape37.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(22, 197, 246)';

ctx.save();
ctx.translate(bbcShape38.around.x, bbcShape38.around.y);
ctx.rotate(bbcShape38.rotation * Math.PI / 180);
ctx.translate(-bbcShape38.around.x, -bbcShape38.around.y);
ctx.beginPath();
ctx.arc(bbcShape38.point.x, bbcShape38.point.y, bbcShape38.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 17, 100)';

ctx.save();
ctx.translate(bbcShape39.around.x, bbcShape39.around.y);
ctx.rotate(bbcShape39.rotation * Math.PI / 180);
ctx.translate(-bbcShape39.around.x, -bbcShape39.around.y);
ctx.beginPath();
ctx.arc(bbcShape39.point.x, bbcShape39.point.y, bbcShape39.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(234, 121, 103)';

ctx.save();
ctx.translate(bbcShape40.around.x, bbcShape40.around.y);
ctx.rotate(bbcShape40.rotation * Math.PI / 180);
ctx.translate(-bbcShape40.around.x, -bbcShape40.around.y);
ctx.beginPath();
ctx.arc(bbcShape40.point.x, bbcShape40.point.y, bbcShape40.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(127, 91, 86)';

ctx.save();
ctx.translate(bbcShape41.around.x, bbcShape41.around.y);
ctx.rotate(bbcShape41.rotation * Math.PI / 180);
ctx.translate(-bbcShape41.around.x, -bbcShape41.around.y);
ctx.beginPath();
ctx.arc(bbcShape41.point.x, bbcShape41.point.y, bbcShape41.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 96, 203)';

ctx.save();
ctx.translate(bbcShape42.around.x, bbcShape42.around.y);
ctx.rotate(bbcShape42.rotation * Math.PI / 180);
ctx.translate(-bbcShape42.around.x, -bbcShape42.around.y);
ctx.beginPath();
ctx.arc(bbcShape42.point.x, bbcShape42.point.y, bbcShape42.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(21, 150, 240)';

ctx.save();
ctx.translate(bbcShape43.around.x, bbcShape43.around.y);
ctx.rotate(bbcShape43.rotation * Math.PI / 180);
ctx.translate(-bbcShape43.around.x, -bbcShape43.around.y);
ctx.beginPath();
ctx.arc(bbcShape43.point.x, bbcShape43.point.y, bbcShape43.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(6, 230, 136)';

ctx.save();
ctx.translate(bbcShape44.around.x, bbcShape44.around.y);
ctx.rotate(bbcShape44.rotation * Math.PI / 180);
ctx.translate(-bbcShape44.around.x, -bbcShape44.around.y);
ctx.beginPath();
ctx.arc(bbcShape44.point.x, bbcShape44.point.y, bbcShape44.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(253, 236, 13)';

ctx.save();
ctx.translate(bbcShape45.around.x, bbcShape45.around.y);
ctx.rotate(bbcShape45.rotation * Math.PI / 180);
ctx.translate(-bbcShape45.around.x, -bbcShape45.around.y);
ctx.beginPath();
ctx.arc(bbcShape45.point.x, bbcShape45.point.y, bbcShape45.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 246, 116)';

ctx.save();
ctx.translate(bbcShape46.around.x, bbcShape46.around.y);
ctx.rotate(bbcShape46.rotation * Math.PI / 180);
ctx.translate(-bbcShape46.around.x, -bbcShape46.around.y);
ctx.beginPath();
ctx.arc(bbcShape46.point.x, bbcShape46.point.y, bbcShape46.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(181, 138, 29)';

ctx.save();
ctx.translate(bbcShape47.around.x, bbcShape47.around.y);
ctx.rotate(bbcShape47.rotation * Math.PI / 180);
ctx.translate(-bbcShape47.around.x, -bbcShape47.around.y);
ctx.beginPath();
ctx.arc(bbcShape47.point.x, bbcShape47.point.y, bbcShape47.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(9, 168, 246)';

ctx.save();
ctx.translate(bbcShape48.around.x, bbcShape48.around.y);
ctx.rotate(bbcShape48.rotation * Math.PI / 180);
ctx.translate(-bbcShape48.around.x, -bbcShape48.around.y);
ctx.beginPath();
ctx.arc(bbcShape48.point.x, bbcShape48.point.y, bbcShape48.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(46, 52, 248)';

ctx.save();
ctx.translate(bbcShape49.around.x, bbcShape49.around.y);
ctx.rotate(bbcShape49.rotation * Math.PI / 180);
ctx.translate(-bbcShape49.around.x, -bbcShape49.around.y);
ctx.beginPath();
ctx.arc(bbcShape49.point.x, bbcShape49.point.y, bbcShape49.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(254, 235, 141)';

ctx.save();
ctx.translate(bbcShape50.around.x, bbcShape50.around.y);
ctx.rotate(bbcShape50.rotation * Math.PI / 180);
ctx.translate(-bbcShape50.around.x, -bbcShape50.around.y);
ctx.beginPath();
ctx.arc(bbcShape50.point.x, bbcShape50.point.y, bbcShape50.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(154, 136, 25)';

ctx.save();
ctx.translate(bbcShape51.around.x, bbcShape51.around.y);
ctx.rotate(bbcShape51.rotation * Math.PI / 180);
ctx.translate(-bbcShape51.around.x, -bbcShape51.around.y);
ctx.beginPath();
ctx.arc(bbcShape51.point.x, bbcShape51.point.y, bbcShape51.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 165, 178)';

ctx.save();
ctx.translate(bbcShape52.around.x, bbcShape52.around.y);
ctx.rotate(bbcShape52.rotation * Math.PI / 180);
ctx.translate(-bbcShape52.around.x, -bbcShape52.around.y);
ctx.beginPath();
ctx.arc(bbcShape52.point.x, bbcShape52.point.y, bbcShape52.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(85, 71, 90)';

ctx.save();
ctx.translate(bbcShape53.around.x, bbcShape53.around.y);
ctx.rotate(bbcShape53.rotation * Math.PI / 180);
ctx.translate(-bbcShape53.around.x, -bbcShape53.around.y);
ctx.beginPath();
ctx.arc(bbcShape53.point.x, bbcShape53.point.y, bbcShape53.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(38, 41, 187)';

ctx.save();
ctx.translate(bbcShape54.around.x, bbcShape54.around.y);
ctx.rotate(bbcShape54.rotation * Math.PI / 180);
ctx.translate(-bbcShape54.around.x, -bbcShape54.around.y);
ctx.beginPath();
ctx.arc(bbcShape54.point.x, bbcShape54.point.y, bbcShape54.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(94, 0, 27)';

ctx.save();
ctx.translate(bbcShape55.around.x, bbcShape55.around.y);
ctx.rotate(bbcShape55.rotation * Math.PI / 180);
ctx.translate(-bbcShape55.around.x, -bbcShape55.around.y);
ctx.beginPath();
ctx.arc(bbcShape55.point.x, bbcShape55.point.y, bbcShape55.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 19, 92)';

ctx.save();
ctx.translate(bbcShape56.around.x, bbcShape56.around.y);
ctx.rotate(bbcShape56.rotation * Math.PI / 180);
ctx.translate(-bbcShape56.around.x, -bbcShape56.around.y);
ctx.beginPath();
ctx.arc(bbcShape56.point.x, bbcShape56.point.y, bbcShape56.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(246, 51, 65)';

ctx.save();
ctx.translate(bbcShape57.around.x, bbcShape57.around.y);
ctx.rotate(bbcShape57.rotation * Math.PI / 180);
ctx.translate(-bbcShape57.around.x, -bbcShape57.around.y);
ctx.beginPath();
ctx.arc(bbcShape57.point.x, bbcShape57.point.y, bbcShape57.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(211, 7, 18)';

ctx.save();
ctx.translate(bbcShape58.around.x, bbcShape58.around.y);
ctx.rotate(bbcShape58.rotation * Math.PI / 180);
ctx.translate(-bbcShape58.around.x, -bbcShape58.around.y);
ctx.beginPath();
ctx.arc(bbcShape58.point.x, bbcShape58.point.y, bbcShape58.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(103, 167, 15)';

ctx.save();
ctx.translate(bbcShape59.around.x, bbcShape59.around.y);
ctx.rotate(bbcShape59.rotation * Math.PI / 180);
ctx.translate(-bbcShape59.around.x, -bbcShape59.around.y);
ctx.beginPath();
ctx.arc(bbcShape59.point.x, bbcShape59.point.y, bbcShape59.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(96, 253, 188)';

ctx.save();
ctx.translate(bbcShape60.around.x, bbcShape60.around.y);
ctx.rotate(bbcShape60.rotation * Math.PI / 180);
ctx.translate(-bbcShape60.around.x, -bbcShape60.around.y);
ctx.beginPath();
ctx.arc(bbcShape60.point.x, bbcShape60.point.y, bbcShape60.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255, 169, 8)';

ctx.save();
ctx.translate(bbcShape61.around.x, bbcShape61.around.y);
ctx.rotate(bbcShape61.rotation * Math.PI / 180);
ctx.translate(-bbcShape61.around.x, -bbcShape61.around.y);
ctx.beginPath();
ctx.arc(bbcShape61.point.x, bbcShape61.point.y, bbcShape61.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(226, 176, 137)';

ctx.save();
ctx.translate(bbcShape62.around.x, bbcShape62.around.y);
ctx.rotate(bbcShape62.rotation * Math.PI / 180);
ctx.translate(-bbcShape62.around.x, -bbcShape62.around.y);
ctx.beginPath();
ctx.arc(bbcShape62.point.x, bbcShape62.point.y, bbcShape62.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(120, 137, 215)';

ctx.save();
ctx.translate(bbcShape63.around.x, bbcShape63.around.y);
ctx.rotate(bbcShape63.rotation * Math.PI / 180);
ctx.translate(-bbcShape63.around.x, -bbcShape63.around.y);
ctx.beginPath();
ctx.arc(bbcShape63.point.x, bbcShape63.point.y, bbcShape63.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(55, 186, 102)';

ctx.save();
ctx.translate(bbcShape64.around.x, bbcShape64.around.y);
ctx.rotate(bbcShape64.rotation * Math.PI / 180);
ctx.translate(-bbcShape64.around.x, -bbcShape64.around.y);
ctx.beginPath();
ctx.arc(bbcShape64.point.x, bbcShape64.point.y, bbcShape64.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(88, 152, 45)';

ctx.save();
ctx.translate(bbcShape65.around.x, bbcShape65.around.y);
ctx.rotate(bbcShape65.rotation * Math.PI / 180);
ctx.translate(-bbcShape65.around.x, -bbcShape65.around.y);
ctx.beginPath();
ctx.arc(bbcShape65.point.x, bbcShape65.point.y, bbcShape65.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(230, 31, 204)';

ctx.save();
ctx.translate(bbcShape66.around.x, bbcShape66.around.y);
ctx.rotate(bbcShape66.rotation * Math.PI / 180);
ctx.translate(-bbcShape66.around.x, -bbcShape66.around.y);
ctx.beginPath();
ctx.arc(bbcShape66.point.x, bbcShape66.point.y, bbcShape66.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 159, 101)';

ctx.save();
ctx.translate(bbcShape67.around.x, bbcShape67.around.y);
ctx.rotate(bbcShape67.rotation * Math.PI / 180);
ctx.translate(-bbcShape67.around.x, -bbcShape67.around.y);
ctx.beginPath();
ctx.arc(bbcShape67.point.x, bbcShape67.point.y, bbcShape67.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(152, 200, 138)';

ctx.save();
ctx.translate(bbcShape68.around.x, bbcShape68.around.y);
ctx.rotate(bbcShape68.rotation * Math.PI / 180);
ctx.translate(-bbcShape68.around.x, -bbcShape68.around.y);
ctx.beginPath();
ctx.arc(bbcShape68.point.x, bbcShape68.point.y, bbcShape68.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(42, 109, 53)';

ctx.save();
ctx.translate(bbcShape69.around.x, bbcShape69.around.y);
ctx.rotate(bbcShape69.rotation * Math.PI / 180);
ctx.translate(-bbcShape69.around.x, -bbcShape69.around.y);
ctx.beginPath();
ctx.arc(bbcShape69.point.x, bbcShape69.point.y, bbcShape69.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(238, 207, 206)';

ctx.save();
ctx.translate(bbcShape70.around.x, bbcShape70.around.y);
ctx.rotate(bbcShape70.rotation * Math.PI / 180);
ctx.translate(-bbcShape70.around.x, -bbcShape70.around.y);
ctx.beginPath();
ctx.arc(bbcShape70.point.x, bbcShape70.point.y, bbcShape70.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255, 11, 137)';

ctx.save();
ctx.translate(bbcShape71.around.x, bbcShape71.around.y);
ctx.rotate(bbcShape71.rotation * Math.PI / 180);
ctx.translate(-bbcShape71.around.x, -bbcShape71.around.y);
ctx.beginPath();
ctx.arc(bbcShape71.point.x, bbcShape71.point.y, bbcShape71.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(136, 124, 140)';

ctx.save();
ctx.translate(bbcShape72.around.x, bbcShape72.around.y);
ctx.rotate(bbcShape72.rotation * Math.PI / 180);
ctx.translate(-bbcShape72.around.x, -bbcShape72.around.y);
ctx.beginPath();
ctx.arc(bbcShape72.point.x, bbcShape72.point.y, bbcShape72.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(90, 243, 195)';

ctx.save();
ctx.translate(bbcShape73.around.x, bbcShape73.around.y);
ctx.rotate(bbcShape73.rotation * Math.PI / 180);
ctx.translate(-bbcShape73.around.x, -bbcShape73.around.y);
ctx.beginPath();
ctx.arc(bbcShape73.point.x, bbcShape73.point.y, bbcShape73.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(249, 88, 241)';

ctx.save();
ctx.translate(bbcShape74.around.x, bbcShape74.around.y);
ctx.rotate(bbcShape74.rotation * Math.PI / 180);
ctx.translate(-bbcShape74.around.x, -bbcShape74.around.y);
ctx.beginPath();
ctx.arc(bbcShape74.point.x, bbcShape74.point.y, bbcShape74.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(245, 127, 53)';

ctx.save();
ctx.translate(bbcShape75.around.x, bbcShape75.around.y);
ctx.rotate(bbcShape75.rotation * Math.PI / 180);
ctx.translate(-bbcShape75.around.x, -bbcShape75.around.y);
ctx.beginPath();
ctx.arc(bbcShape75.point.x, bbcShape75.point.y, bbcShape75.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(39, 158, 149)';

ctx.save();
ctx.translate(bbcShape76.around.x, bbcShape76.around.y);
ctx.rotate(bbcShape76.rotation * Math.PI / 180);
ctx.translate(-bbcShape76.around.x, -bbcShape76.around.y);
ctx.beginPath();
ctx.arc(bbcShape76.point.x, bbcShape76.point.y, bbcShape76.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(239, 246, 70)';

ctx.save();
ctx.translate(bbcShape77.around.x, bbcShape77.around.y);
ctx.rotate(bbcShape77.rotation * Math.PI / 180);
ctx.translate(-bbcShape77.around.x, -bbcShape77.around.y);
ctx.beginPath();
ctx.arc(bbcShape77.point.x, bbcShape77.point.y, bbcShape77.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(107, 157, 164)';

ctx.save();
ctx.translate(bbcShape78.around.x, bbcShape78.around.y);
ctx.rotate(bbcShape78.rotation * Math.PI / 180);
ctx.translate(-bbcShape78.around.x, -bbcShape78.around.y);
ctx.beginPath();
ctx.arc(bbcShape78.point.x, bbcShape78.point.y, bbcShape78.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(22, 147, 216)';

ctx.save();
ctx.translate(bbcShape79.around.x, bbcShape79.around.y);
ctx.rotate(bbcShape79.rotation * Math.PI / 180);
ctx.translate(-bbcShape79.around.x, -bbcShape79.around.y);
ctx.beginPath();
ctx.arc(bbcShape79.point.x, bbcShape79.point.y, bbcShape79.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 54, 106)';

ctx.save();
ctx.translate(bbcShape80.around.x, bbcShape80.around.y);
ctx.rotate(bbcShape80.rotation * Math.PI / 180);
ctx.translate(-bbcShape80.around.x, -bbcShape80.around.y);
ctx.beginPath();
ctx.arc(bbcShape80.point.x, bbcShape80.point.y, bbcShape80.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(209, 170, 230)';

ctx.save();
ctx.translate(bbcShape81.around.x, bbcShape81.around.y);
ctx.rotate(bbcShape81.rotation * Math.PI / 180);
ctx.translate(-bbcShape81.around.x, -bbcShape81.around.y);
ctx.beginPath();
ctx.arc(bbcShape81.point.x, bbcShape81.point.y, bbcShape81.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 244, 217)';

ctx.save();
ctx.translate(bbcShape82.around.x, bbcShape82.around.y);
ctx.rotate(bbcShape82.rotation * Math.PI / 180);
ctx.translate(-bbcShape82.around.x, -bbcShape82.around.y);
ctx.beginPath();
ctx.arc(bbcShape82.point.x, bbcShape82.point.y, bbcShape82.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(223, 234, 128)';

ctx.save();
ctx.translate(bbcShape83.around.x, bbcShape83.around.y);
ctx.rotate(bbcShape83.rotation * Math.PI / 180);
ctx.translate(-bbcShape83.around.x, -bbcShape83.around.y);
ctx.beginPath();
ctx.arc(bbcShape83.point.x, bbcShape83.point.y, bbcShape83.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 24, 33)';

ctx.save();
ctx.translate(bbcShape84.around.x, bbcShape84.around.y);
ctx.rotate(bbcShape84.rotation * Math.PI / 180);
ctx.translate(-bbcShape84.around.x, -bbcShape84.around.y);
ctx.beginPath();
ctx.arc(bbcShape84.point.x, bbcShape84.point.y, bbcShape84.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(9, 218, 177)';

ctx.save();
ctx.translate(bbcShape85.around.x, bbcShape85.around.y);
ctx.rotate(bbcShape85.rotation * Math.PI / 180);
ctx.translate(-bbcShape85.around.x, -bbcShape85.around.y);
ctx.beginPath();
ctx.arc(bbcShape85.point.x, bbcShape85.point.y, bbcShape85.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(128, 61, 97)';

ctx.save();
ctx.translate(bbcShape86.around.x, bbcShape86.around.y);
ctx.rotate(bbcShape86.rotation * Math.PI / 180);
ctx.translate(-bbcShape86.around.x, -bbcShape86.around.y);
ctx.beginPath();
ctx.arc(bbcShape86.point.x, bbcShape86.point.y, bbcShape86.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(235, 141, 175)';

ctx.save();
ctx.translate(bbcShape87.around.x, bbcShape87.around.y);
ctx.rotate(bbcShape87.rotation * Math.PI / 180);
ctx.translate(-bbcShape87.around.x, -bbcShape87.around.y);
ctx.beginPath();
ctx.arc(bbcShape87.point.x, bbcShape87.point.y, bbcShape87.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 102, 191)';

ctx.save();
ctx.translate(bbcShape88.around.x, bbcShape88.around.y);
ctx.rotate(bbcShape88.rotation * Math.PI / 180);
ctx.translate(-bbcShape88.around.x, -bbcShape88.around.y);
ctx.beginPath();
ctx.arc(bbcShape88.point.x, bbcShape88.point.y, bbcShape88.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(77, 56, 199)';

ctx.save();
ctx.translate(bbcShape89.around.x, bbcShape89.around.y);
ctx.rotate(bbcShape89.rotation * Math.PI / 180);
ctx.translate(-bbcShape89.around.x, -bbcShape89.around.y);
ctx.beginPath();
ctx.arc(bbcShape89.point.x, bbcShape89.point.y, bbcShape89.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(85, 64, 60)';

ctx.save();
ctx.translate(bbcShape90.around.x, bbcShape90.around.y);
ctx.rotate(bbcShape90.rotation * Math.PI / 180);
ctx.translate(-bbcShape90.around.x, -bbcShape90.around.y);
ctx.beginPath();
ctx.arc(bbcShape90.point.x, bbcShape90.point.y, bbcShape90.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(109, 23, 135)';

ctx.save();
ctx.translate(bbcShape91.around.x, bbcShape91.around.y);
ctx.rotate(bbcShape91.rotation * Math.PI / 180);
ctx.translate(-bbcShape91.around.x, -bbcShape91.around.y);
ctx.beginPath();
ctx.arc(bbcShape91.point.x, bbcShape91.point.y, bbcShape91.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(157, 157, 205)';

ctx.save();
ctx.translate(bbcShape92.around.x, bbcShape92.around.y);
ctx.rotate(bbcShape92.rotation * Math.PI / 180);
ctx.translate(-bbcShape92.around.x, -bbcShape92.around.y);
ctx.beginPath();
ctx.arc(bbcShape92.point.x, bbcShape92.point.y, bbcShape92.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(62, 58, 121)';

ctx.save();
ctx.translate(bbcShape93.around.x, bbcShape93.around.y);
ctx.rotate(bbcShape93.rotation * Math.PI / 180);
ctx.translate(-bbcShape93.around.x, -bbcShape93.around.y);
ctx.beginPath();
ctx.arc(bbcShape93.point.x, bbcShape93.point.y, bbcShape93.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(163, 147, 209)';

ctx.save();
ctx.translate(bbcShape94.around.x, bbcShape94.around.y);
ctx.rotate(bbcShape94.rotation * Math.PI / 180);
ctx.translate(-bbcShape94.around.x, -bbcShape94.around.y);
ctx.beginPath();
ctx.arc(bbcShape94.point.x, bbcShape94.point.y, bbcShape94.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(39, 79, 129)';

ctx.save();
ctx.translate(bbcShape95.around.x, bbcShape95.around.y);
ctx.rotate(bbcShape95.rotation * Math.PI / 180);
ctx.translate(-bbcShape95.around.x, -bbcShape95.around.y);
ctx.beginPath();
ctx.arc(bbcShape95.point.x, bbcShape95.point.y, bbcShape95.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(164, 137, 234)';

ctx.save();
ctx.translate(bbcShape96.around.x, bbcShape96.around.y);
ctx.rotate(bbcShape96.rotation * Math.PI / 180);
ctx.translate(-bbcShape96.around.x, -bbcShape96.around.y);
ctx.beginPath();
ctx.arc(bbcShape96.point.x, bbcShape96.point.y, bbcShape96.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(188, 137, 158)';

ctx.save();
ctx.translate(bbcShape97.around.x, bbcShape97.around.y);
ctx.rotate(bbcShape97.rotation * Math.PI / 180);
ctx.translate(-bbcShape97.around.x, -bbcShape97.around.y);
ctx.beginPath();
ctx.arc(bbcShape97.point.x, bbcShape97.point.y, bbcShape97.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 2, 102)';

ctx.save();
ctx.translate(bbcShape98.around.x, bbcShape98.around.y);
ctx.rotate(bbcShape98.rotation * Math.PI / 180);
ctx.translate(-bbcShape98.around.x, -bbcShape98.around.y);
ctx.beginPath();
ctx.arc(bbcShape98.point.x, bbcShape98.point.y, bbcShape98.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 101, 239)';

ctx.save();
ctx.translate(bbcShape99.around.x, bbcShape99.around.y);
ctx.rotate(bbcShape99.rotation * Math.PI / 180);
ctx.translate(-bbcShape99.around.x, -bbcShape99.around.y);
ctx.beginPath();
ctx.arc(bbcShape99.point.x, bbcShape99.point.y, bbcShape99.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 56, 151)';

ctx.save();
ctx.translate(bbcShape100.around.x, bbcShape100.around.y);
ctx.rotate(bbcShape100.rotation * Math.PI / 180);
ctx.translate(-bbcShape100.around.x, -bbcShape100.around.y);
ctx.beginPath();
ctx.arc(bbcShape100.point.x, bbcShape100.point.y, bbcShape100.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0, 242, 205)';

ctx.save();
ctx.translate(bbcShape101.around.x, bbcShape101.around.y);
ctx.rotate(bbcShape101.rotation * Math.PI / 180);
ctx.translate(-bbcShape101.around.x, -bbcShape101.around.y);
ctx.beginPath();
ctx.arc(bbcShape101.point.x, bbcShape101.point.y, bbcShape101.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 56, 241)';

ctx.save();
ctx.translate(bbcShape102.around.x, bbcShape102.around.y);
ctx.rotate(bbcShape102.rotation * Math.PI / 180);
ctx.translate(-bbcShape102.around.x, -bbcShape102.around.y);
ctx.beginPath();
ctx.arc(bbcShape102.point.x, bbcShape102.point.y, bbcShape102.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(239, 92, 85)';

ctx.save();
ctx.translate(bbcShape103.around.x, bbcShape103.around.y);
ctx.rotate(bbcShape103.rotation * Math.PI / 180);
ctx.translate(-bbcShape103.around.x, -bbcShape103.around.y);
ctx.beginPath();
ctx.arc(bbcShape103.point.x, bbcShape103.point.y, bbcShape103.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(185, 154, 133)';

ctx.save();
ctx.translate(bbcShape104.around.x, bbcShape104.around.y);
ctx.rotate(bbcShape104.rotation * Math.PI / 180);
ctx.translate(-bbcShape104.around.x, -bbcShape104.around.y);
ctx.beginPath();
ctx.arc(bbcShape104.point.x, bbcShape104.point.y, bbcShape104.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(171, 239, 219)';

ctx.save();
ctx.translate(bbcShape105.around.x, bbcShape105.around.y);
ctx.rotate(bbcShape105.rotation * Math.PI / 180);
ctx.translate(-bbcShape105.around.x, -bbcShape105.around.y);
ctx.beginPath();
ctx.arc(bbcShape105.point.x, bbcShape105.point.y, bbcShape105.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 185, 187)';

ctx.save();
ctx.translate(bbcShape106.around.x, bbcShape106.around.y);
ctx.rotate(bbcShape106.rotation * Math.PI / 180);
ctx.translate(-bbcShape106.around.x, -bbcShape106.around.y);
ctx.beginPath();
ctx.arc(bbcShape106.point.x, bbcShape106.point.y, bbcShape106.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(171, 237, 49)';

ctx.save();
ctx.translate(bbcShape107.around.x, bbcShape107.around.y);
ctx.rotate(bbcShape107.rotation * Math.PI / 180);
ctx.translate(-bbcShape107.around.x, -bbcShape107.around.y);
ctx.beginPath();
ctx.arc(bbcShape107.point.x, bbcShape107.point.y, bbcShape107.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(117, 149, 10)';

ctx.save();
ctx.translate(bbcShape108.around.x, bbcShape108.around.y);
ctx.rotate(bbcShape108.rotation * Math.PI / 180);
ctx.translate(-bbcShape108.around.x, -bbcShape108.around.y);
ctx.beginPath();
ctx.arc(bbcShape108.point.x, bbcShape108.point.y, bbcShape108.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 186, 152)';

ctx.save();
ctx.translate(bbcShape109.around.x, bbcShape109.around.y);
ctx.rotate(bbcShape109.rotation * Math.PI / 180);
ctx.translate(-bbcShape109.around.x, -bbcShape109.around.y);
ctx.beginPath();
ctx.arc(bbcShape109.point.x, bbcShape109.point.y, bbcShape109.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(92, 25, 151)';

ctx.save();
ctx.translate(bbcShape110.around.x, bbcShape110.around.y);
ctx.rotate(bbcShape110.rotation * Math.PI / 180);
ctx.translate(-bbcShape110.around.x, -bbcShape110.around.y);
ctx.beginPath();
ctx.arc(bbcShape110.point.x, bbcShape110.point.y, bbcShape110.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(83, 250, 149)';

ctx.save();
ctx.translate(bbcShape111.around.x, bbcShape111.around.y);
ctx.rotate(bbcShape111.rotation * Math.PI / 180);
ctx.translate(-bbcShape111.around.x, -bbcShape111.around.y);
ctx.beginPath();
ctx.arc(bbcShape111.point.x, bbcShape111.point.y, bbcShape111.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(206, 122, 49)';

ctx.save();
ctx.translate(bbcShape112.around.x, bbcShape112.around.y);
ctx.rotate(bbcShape112.rotation * Math.PI / 180);
ctx.translate(-bbcShape112.around.x, -bbcShape112.around.y);
ctx.beginPath();
ctx.arc(bbcShape112.point.x, bbcShape112.point.y, bbcShape112.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(117, 236, 175)';

ctx.save();
ctx.translate(bbcShape113.around.x, bbcShape113.around.y);
ctx.rotate(bbcShape113.rotation * Math.PI / 180);
ctx.translate(-bbcShape113.around.x, -bbcShape113.around.y);
ctx.beginPath();
ctx.arc(bbcShape113.point.x, bbcShape113.point.y, bbcShape113.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(228, 19, 110)';

ctx.save();
ctx.translate(bbcShape114.around.x, bbcShape114.around.y);
ctx.rotate(bbcShape114.rotation * Math.PI / 180);
ctx.translate(-bbcShape114.around.x, -bbcShape114.around.y);
ctx.beginPath();
ctx.arc(bbcShape114.point.x, bbcShape114.point.y, bbcShape114.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(187, 17, 241)';

ctx.save();
ctx.translate(bbcShape115.around.x, bbcShape115.around.y);
ctx.rotate(bbcShape115.rotation * Math.PI / 180);
ctx.translate(-bbcShape115.around.x, -bbcShape115.around.y);
ctx.beginPath();
ctx.arc(bbcShape115.point.x, bbcShape115.point.y, bbcShape115.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(3, 210, 84)';

ctx.save();
ctx.translate(bbcShape116.around.x, bbcShape116.around.y);
ctx.rotate(bbcShape116.rotation * Math.PI / 180);
ctx.translate(-bbcShape116.around.x, -bbcShape116.around.y);
ctx.beginPath();
ctx.arc(bbcShape116.point.x, bbcShape116.point.y, bbcShape116.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(234, 1, 181)';

ctx.save();
ctx.translate(bbcShape117.around.x, bbcShape117.around.y);
ctx.rotate(bbcShape117.rotation * Math.PI / 180);
ctx.translate(-bbcShape117.around.x, -bbcShape117.around.y);
ctx.beginPath();
ctx.arc(bbcShape117.point.x, bbcShape117.point.y, bbcShape117.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(67, 173, 217)';

ctx.save();
ctx.translate(bbcShape118.around.x, bbcShape118.around.y);
ctx.rotate(bbcShape118.rotation * Math.PI / 180);
ctx.translate(-bbcShape118.around.x, -bbcShape118.around.y);
ctx.beginPath();
ctx.arc(bbcShape118.point.x, bbcShape118.point.y, bbcShape118.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 28, 37)';

ctx.save();
ctx.translate(bbcShape119.around.x, bbcShape119.around.y);
ctx.rotate(bbcShape119.rotation * Math.PI / 180);
ctx.translate(-bbcShape119.around.x, -bbcShape119.around.y);
ctx.beginPath();
ctx.arc(bbcShape119.point.x, bbcShape119.point.y, bbcShape119.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(54, 72, 112)';

ctx.save();
ctx.translate(bbcShape120.around.x, bbcShape120.around.y);
ctx.rotate(bbcShape120.rotation * Math.PI / 180);
ctx.translate(-bbcShape120.around.x, -bbcShape120.around.y);
ctx.beginPath();
ctx.arc(bbcShape120.point.x, bbcShape120.point.y, bbcShape120.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(117, 7, 218)';

ctx.save();
ctx.translate(bbcShape121.around.x, bbcShape121.around.y);
ctx.rotate(bbcShape121.rotation * Math.PI / 180);
ctx.translate(-bbcShape121.around.x, -bbcShape121.around.y);
ctx.beginPath();
ctx.arc(bbcShape121.point.x, bbcShape121.point.y, bbcShape121.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 224, 246)';

ctx.save();
ctx.translate(bbcShape122.around.x, bbcShape122.around.y);
ctx.rotate(bbcShape122.rotation * Math.PI / 180);
ctx.translate(-bbcShape122.around.x, -bbcShape122.around.y);
ctx.beginPath();
ctx.arc(bbcShape122.point.x, bbcShape122.point.y, bbcShape122.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 198, 130)';

ctx.save();
ctx.translate(bbcShape123.around.x, bbcShape123.around.y);
ctx.rotate(bbcShape123.rotation * Math.PI / 180);
ctx.translate(-bbcShape123.around.x, -bbcShape123.around.y);
ctx.beginPath();
ctx.arc(bbcShape123.point.x, bbcShape123.point.y, bbcShape123.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(42, 225, 189)';

ctx.save();
ctx.translate(bbcShape124.around.x, bbcShape124.around.y);
ctx.rotate(bbcShape124.rotation * Math.PI / 180);
ctx.translate(-bbcShape124.around.x, -bbcShape124.around.y);
ctx.beginPath();
ctx.arc(bbcShape124.point.x, bbcShape124.point.y, bbcShape124.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250, 241, 116)';

ctx.save();
ctx.translate(bbcShape125.around.x, bbcShape125.around.y);
ctx.rotate(bbcShape125.rotation * Math.PI / 180);
ctx.translate(-bbcShape125.around.x, -bbcShape125.around.y);
ctx.beginPath();
ctx.arc(bbcShape125.point.x, bbcShape125.point.y, bbcShape125.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(65, 154, 93)';

ctx.save();
ctx.translate(bbcShape126.around.x, bbcShape126.around.y);
ctx.rotate(bbcShape126.rotation * Math.PI / 180);
ctx.translate(-bbcShape126.around.x, -bbcShape126.around.y);
ctx.beginPath();
ctx.arc(bbcShape126.point.x, bbcShape126.point.y, bbcShape126.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(40, 13, 119)';

ctx.save();
ctx.translate(bbcShape127.around.x, bbcShape127.around.y);
ctx.rotate(bbcShape127.rotation * Math.PI / 180);
ctx.translate(-bbcShape127.around.x, -bbcShape127.around.y);
ctx.beginPath();
ctx.arc(bbcShape127.point.x, bbcShape127.point.y, bbcShape127.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(182, 202, 42)';

ctx.save();
ctx.translate(bbcShape128.around.x, bbcShape128.around.y);
ctx.rotate(bbcShape128.rotation * Math.PI / 180);
ctx.translate(-bbcShape128.around.x, -bbcShape128.around.y);
ctx.beginPath();
ctx.arc(bbcShape128.point.x, bbcShape128.point.y, bbcShape128.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 150, 223)';

ctx.save();
ctx.translate(bbcShape129.around.x, bbcShape129.around.y);
ctx.rotate(bbcShape129.rotation * Math.PI / 180);
ctx.translate(-bbcShape129.around.x, -bbcShape129.around.y);
ctx.beginPath();
ctx.arc(bbcShape129.point.x, bbcShape129.point.y, bbcShape129.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(63, 139, 53)';

ctx.save();
ctx.translate(bbcShape130.around.x, bbcShape130.around.y);
ctx.rotate(bbcShape130.rotation * Math.PI / 180);
ctx.translate(-bbcShape130.around.x, -bbcShape130.around.y);
ctx.beginPath();
ctx.arc(bbcShape130.point.x, bbcShape130.point.y, bbcShape130.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(136, 128, 170)';

ctx.save();
ctx.translate(bbcShape131.around.x, bbcShape131.around.y);
ctx.rotate(bbcShape131.rotation * Math.PI / 180);
ctx.translate(-bbcShape131.around.x, -bbcShape131.around.y);
ctx.beginPath();
ctx.arc(bbcShape131.point.x, bbcShape131.point.y, bbcShape131.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(78, 78, 254)';

ctx.save();
ctx.translate(bbcShape132.around.x, bbcShape132.around.y);
ctx.rotate(bbcShape132.rotation * Math.PI / 180);
ctx.translate(-bbcShape132.around.x, -bbcShape132.around.y);
ctx.beginPath();
ctx.arc(bbcShape132.point.x, bbcShape132.point.y, bbcShape132.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(156, 254, 112)';

ctx.save();
ctx.translate(bbcShape133.around.x, bbcShape133.around.y);
ctx.rotate(bbcShape133.rotation * Math.PI / 180);
ctx.translate(-bbcShape133.around.x, -bbcShape133.around.y);
ctx.beginPath();
ctx.arc(bbcShape133.point.x, bbcShape133.point.y, bbcShape133.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 46, 186)';

ctx.save();
ctx.translate(bbcShape134.around.x, bbcShape134.around.y);
ctx.rotate(bbcShape134.rotation * Math.PI / 180);
ctx.translate(-bbcShape134.around.x, -bbcShape134.around.y);
ctx.beginPath();
ctx.arc(bbcShape134.point.x, bbcShape134.point.y, bbcShape134.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 147, 247)';

ctx.save();
ctx.translate(bbcShape135.around.x, bbcShape135.around.y);
ctx.rotate(bbcShape135.rotation * Math.PI / 180);
ctx.translate(-bbcShape135.around.x, -bbcShape135.around.y);
ctx.beginPath();
ctx.arc(bbcShape135.point.x, bbcShape135.point.y, bbcShape135.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 252, 247)';

ctx.save();
ctx.translate(bbcShape136.around.x, bbcShape136.around.y);
ctx.rotate(bbcShape136.rotation * Math.PI / 180);
ctx.translate(-bbcShape136.around.x, -bbcShape136.around.y);
ctx.beginPath();
ctx.arc(bbcShape136.point.x, bbcShape136.point.y, bbcShape136.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(64, 107, 34)';

ctx.save();
ctx.translate(bbcShape137.around.x, bbcShape137.around.y);
ctx.rotate(bbcShape137.rotation * Math.PI / 180);
ctx.translate(-bbcShape137.around.x, -bbcShape137.around.y);
ctx.beginPath();
ctx.arc(bbcShape137.point.x, bbcShape137.point.y, bbcShape137.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 253, 127)';

ctx.save();
ctx.translate(bbcShape138.around.x, bbcShape138.around.y);
ctx.rotate(bbcShape138.rotation * Math.PI / 180);
ctx.translate(-bbcShape138.around.x, -bbcShape138.around.y);
ctx.beginPath();
ctx.arc(bbcShape138.point.x, bbcShape138.point.y, bbcShape138.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(97, 159, 141)';

ctx.save();
ctx.translate(bbcShape139.around.x, bbcShape139.around.y);
ctx.rotate(bbcShape139.rotation * Math.PI / 180);
ctx.translate(-bbcShape139.around.x, -bbcShape139.around.y);
ctx.beginPath();
ctx.arc(bbcShape139.point.x, bbcShape139.point.y, bbcShape139.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(150, 108, 182)';

ctx.save();
ctx.translate(bbcShape140.around.x, bbcShape140.around.y);
ctx.rotate(bbcShape140.rotation * Math.PI / 180);
ctx.translate(-bbcShape140.around.x, -bbcShape140.around.y);
ctx.beginPath();
ctx.arc(bbcShape140.point.x, bbcShape140.point.y, bbcShape140.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(166, 1, 3)';

ctx.save();
ctx.translate(bbcShape141.around.x, bbcShape141.around.y);
ctx.rotate(bbcShape141.rotation * Math.PI / 180);
ctx.translate(-bbcShape141.around.x, -bbcShape141.around.y);
ctx.beginPath();
ctx.arc(bbcShape141.point.x, bbcShape141.point.y, bbcShape141.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 253, 247)';

ctx.save();
ctx.translate(bbcShape142.around.x, bbcShape142.around.y);
ctx.rotate(bbcShape142.rotation * Math.PI / 180);
ctx.translate(-bbcShape142.around.x, -bbcShape142.around.y);
ctx.beginPath();
ctx.arc(bbcShape142.point.x, bbcShape142.point.y, bbcShape142.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(192, 121, 192)';

ctx.save();
ctx.translate(bbcShape143.around.x, bbcShape143.around.y);
ctx.rotate(bbcShape143.rotation * Math.PI / 180);
ctx.translate(-bbcShape143.around.x, -bbcShape143.around.y);
ctx.beginPath();
ctx.arc(bbcShape143.point.x, bbcShape143.point.y, bbcShape143.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 53, 196)';

ctx.save();
ctx.translate(bbcShape144.around.x, bbcShape144.around.y);
ctx.rotate(bbcShape144.rotation * Math.PI / 180);
ctx.translate(-bbcShape144.around.x, -bbcShape144.around.y);
ctx.beginPath();
ctx.arc(bbcShape144.point.x, bbcShape144.point.y, bbcShape144.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(20, 28, 239)';

ctx.save();
ctx.translate(bbcShape145.around.x, bbcShape145.around.y);
ctx.rotate(bbcShape145.rotation * Math.PI / 180);
ctx.translate(-bbcShape145.around.x, -bbcShape145.around.y);
ctx.beginPath();
ctx.arc(bbcShape145.point.x, bbcShape145.point.y, bbcShape145.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(160, 242, 189)';

ctx.save();
ctx.translate(bbcShape146.around.x, bbcShape146.around.y);
ctx.rotate(bbcShape146.rotation * Math.PI / 180);
ctx.translate(-bbcShape146.around.x, -bbcShape146.around.y);
ctx.beginPath();
ctx.arc(bbcShape146.point.x, bbcShape146.point.y, bbcShape146.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(96, 173, 49)';

ctx.save();
ctx.translate(bbcShape147.around.x, bbcShape147.around.y);
ctx.rotate(bbcShape147.rotation * Math.PI / 180);
ctx.translate(-bbcShape147.around.x, -bbcShape147.around.y);
ctx.beginPath();
ctx.arc(bbcShape147.point.x, bbcShape147.point.y, bbcShape147.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(252, 223, 0)';

ctx.save();
ctx.translate(bbcShape148.around.x, bbcShape148.around.y);
ctx.rotate(bbcShape148.rotation * Math.PI / 180);
ctx.translate(-bbcShape148.around.x, -bbcShape148.around.y);
ctx.beginPath();
ctx.arc(bbcShape148.point.x, bbcShape148.point.y, bbcShape148.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125, 181, 18)';

ctx.save();
ctx.translate(bbcShape149.around.x, bbcShape149.around.y);
ctx.rotate(bbcShape149.rotation * Math.PI / 180);
ctx.translate(-bbcShape149.around.x, -bbcShape149.around.y);
ctx.beginPath();
ctx.arc(bbcShape149.point.x, bbcShape149.point.y, bbcShape149.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(113, 149, 106)';

ctx.save();
ctx.translate(bbcShape150.around.x, bbcShape150.around.y);
ctx.rotate(bbcShape150.rotation * Math.PI / 180);
ctx.translate(-bbcShape150.around.x, -bbcShape150.around.y);
ctx.beginPath();
ctx.arc(bbcShape150.point.x, bbcShape150.point.y, bbcShape150.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 101, 186)';

ctx.save();
ctx.translate(bbcShape151.around.x, bbcShape151.around.y);
ctx.rotate(bbcShape151.rotation * Math.PI / 180);
ctx.translate(-bbcShape151.around.x, -bbcShape151.around.y);
ctx.beginPath();
ctx.arc(bbcShape151.point.x, bbcShape151.point.y, bbcShape151.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(49, 90, 89)';

ctx.save();
ctx.translate(bbcShape152.around.x, bbcShape152.around.y);
ctx.rotate(bbcShape152.rotation * Math.PI / 180);
ctx.translate(-bbcShape152.around.x, -bbcShape152.around.y);
ctx.beginPath();
ctx.arc(bbcShape152.point.x, bbcShape152.point.y, bbcShape152.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(191, 212, 250)';

ctx.save();
ctx.translate(bbcShape153.around.x, bbcShape153.around.y);
ctx.rotate(bbcShape153.rotation * Math.PI / 180);
ctx.translate(-bbcShape153.around.x, -bbcShape153.around.y);
ctx.beginPath();
ctx.arc(bbcShape153.point.x, bbcShape153.point.y, bbcShape153.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(123, 103, 73)';

ctx.save();
ctx.translate(bbcShape154.around.x, bbcShape154.around.y);
ctx.rotate(bbcShape154.rotation * Math.PI / 180);
ctx.translate(-bbcShape154.around.x, -bbcShape154.around.y);
ctx.beginPath();
ctx.arc(bbcShape154.point.x, bbcShape154.point.y, bbcShape154.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(185, 152, 188)';

ctx.save();
ctx.translate(bbcShape155.around.x, bbcShape155.around.y);
ctx.rotate(bbcShape155.rotation * Math.PI / 180);
ctx.translate(-bbcShape155.around.x, -bbcShape155.around.y);
ctx.beginPath();
ctx.arc(bbcShape155.point.x, bbcShape155.point.y, bbcShape155.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 223, 45)';

ctx.save();
ctx.translate(bbcShape156.around.x, bbcShape156.around.y);
ctx.rotate(bbcShape156.rotation * Math.PI / 180);
ctx.translate(-bbcShape156.around.x, -bbcShape156.around.y);
ctx.beginPath();
ctx.arc(bbcShape156.point.x, bbcShape156.point.y, bbcShape156.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(188, 170, 76)';

ctx.save();
ctx.translate(bbcShape157.around.x, bbcShape157.around.y);
ctx.rotate(bbcShape157.rotation * Math.PI / 180);
ctx.translate(-bbcShape157.around.x, -bbcShape157.around.y);
ctx.beginPath();
ctx.arc(bbcShape157.point.x, bbcShape157.point.y, bbcShape157.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(41, 161, 141)';

ctx.save();
ctx.translate(bbcShape158.around.x, bbcShape158.around.y);
ctx.rotate(bbcShape158.rotation * Math.PI / 180);
ctx.translate(-bbcShape158.around.x, -bbcShape158.around.y);
ctx.beginPath();
ctx.arc(bbcShape158.point.x, bbcShape158.point.y, bbcShape158.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(70, 194, 219)';

ctx.save();
ctx.translate(bbcShape159.around.x, bbcShape159.around.y);
ctx.rotate(bbcShape159.rotation * Math.PI / 180);
ctx.translate(-bbcShape159.around.x, -bbcShape159.around.y);
ctx.beginPath();
ctx.arc(bbcShape159.point.x, bbcShape159.point.y, bbcShape159.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(104, 70, 199)';

ctx.save();
ctx.translate(bbcShape160.around.x, bbcShape160.around.y);
ctx.rotate(bbcShape160.rotation * Math.PI / 180);
ctx.translate(-bbcShape160.around.x, -bbcShape160.around.y);
ctx.beginPath();
ctx.arc(bbcShape160.point.x, bbcShape160.point.y, bbcShape160.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(204, 94, 242)';

ctx.save();
ctx.translate(bbcShape161.around.x, bbcShape161.around.y);
ctx.rotate(bbcShape161.rotation * Math.PI / 180);
ctx.translate(-bbcShape161.around.x, -bbcShape161.around.y);
ctx.beginPath();
ctx.arc(bbcShape161.point.x, bbcShape161.point.y, bbcShape161.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(102, 4, 55)';

ctx.save();
ctx.translate(bbcShape162.around.x, bbcShape162.around.y);
ctx.rotate(bbcShape162.rotation * Math.PI / 180);
ctx.translate(-bbcShape162.around.x, -bbcShape162.around.y);
ctx.beginPath();
ctx.arc(bbcShape162.point.x, bbcShape162.point.y, bbcShape162.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(27, 142, 21)';

ctx.save();
ctx.translate(bbcShape163.around.x, bbcShape163.around.y);
ctx.rotate(bbcShape163.rotation * Math.PI / 180);
ctx.translate(-bbcShape163.around.x, -bbcShape163.around.y);
ctx.beginPath();
ctx.arc(bbcShape163.point.x, bbcShape163.point.y, bbcShape163.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(249, 1, 45)';

ctx.save();
ctx.translate(bbcShape164.around.x, bbcShape164.around.y);
ctx.rotate(bbcShape164.rotation * Math.PI / 180);
ctx.translate(-bbcShape164.around.x, -bbcShape164.around.y);
ctx.beginPath();
ctx.arc(bbcShape164.point.x, bbcShape164.point.y, bbcShape164.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(74, 1, 8)';

ctx.save();
ctx.translate(bbcShape165.around.x, bbcShape165.around.y);
ctx.rotate(bbcShape165.rotation * Math.PI / 180);
ctx.translate(-bbcShape165.around.x, -bbcShape165.around.y);
ctx.beginPath();
ctx.arc(bbcShape165.point.x, bbcShape165.point.y, bbcShape165.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(46, 10, 43)';

ctx.save();
ctx.translate(bbcShape166.around.x, bbcShape166.around.y);
ctx.rotate(bbcShape166.rotation * Math.PI / 180);
ctx.translate(-bbcShape166.around.x, -bbcShape166.around.y);
ctx.beginPath();
ctx.arc(bbcShape166.point.x, bbcShape166.point.y, bbcShape166.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(1, 151, 242)';

ctx.save();
ctx.translate(bbcShape167.around.x, bbcShape167.around.y);
ctx.rotate(bbcShape167.rotation * Math.PI / 180);
ctx.translate(-bbcShape167.around.x, -bbcShape167.around.y);
ctx.beginPath();
ctx.arc(bbcShape167.point.x, bbcShape167.point.y, bbcShape167.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(82, 251, 212)';

ctx.save();
ctx.translate(bbcShape168.around.x, bbcShape168.around.y);
ctx.rotate(bbcShape168.rotation * Math.PI / 180);
ctx.translate(-bbcShape168.around.x, -bbcShape168.around.y);
ctx.beginPath();
ctx.arc(bbcShape168.point.x, bbcShape168.point.y, bbcShape168.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(181, 31, 186)';

ctx.save();
ctx.translate(bbcShape169.around.x, bbcShape169.around.y);
ctx.rotate(bbcShape169.rotation * Math.PI / 180);
ctx.translate(-bbcShape169.around.x, -bbcShape169.around.y);
ctx.beginPath();
ctx.arc(bbcShape169.point.x, bbcShape169.point.y, bbcShape169.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(159, 244, 92)';

ctx.save();
ctx.translate(bbcShape170.around.x, bbcShape170.around.y);
ctx.rotate(bbcShape170.rotation * Math.PI / 180);
ctx.translate(-bbcShape170.around.x, -bbcShape170.around.y);
ctx.beginPath();
ctx.arc(bbcShape170.point.x, bbcShape170.point.y, bbcShape170.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(102, 215, 251)';

ctx.save();
ctx.translate(bbcShape171.around.x, bbcShape171.around.y);
ctx.rotate(bbcShape171.rotation * Math.PI / 180);
ctx.translate(-bbcShape171.around.x, -bbcShape171.around.y);
ctx.beginPath();
ctx.arc(bbcShape171.point.x, bbcShape171.point.y, bbcShape171.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(48, 213, 255)';

ctx.save();
ctx.translate(bbcShape172.around.x, bbcShape172.around.y);
ctx.rotate(bbcShape172.rotation * Math.PI / 180);
ctx.translate(-bbcShape172.around.x, -bbcShape172.around.y);
ctx.beginPath();
ctx.arc(bbcShape172.point.x, bbcShape172.point.y, bbcShape172.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(15, 247, 151)';

ctx.save();
ctx.translate(bbcShape173.around.x, bbcShape173.around.y);
ctx.rotate(bbcShape173.rotation * Math.PI / 180);
ctx.translate(-bbcShape173.around.x, -bbcShape173.around.y);
ctx.beginPath();
ctx.arc(bbcShape173.point.x, bbcShape173.point.y, bbcShape173.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 181, 189)';

ctx.save();
ctx.translate(bbcShape174.around.x, bbcShape174.around.y);
ctx.rotate(bbcShape174.rotation * Math.PI / 180);
ctx.translate(-bbcShape174.around.x, -bbcShape174.around.y);
ctx.beginPath();
ctx.arc(bbcShape174.point.x, bbcShape174.point.y, bbcShape174.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 186, 24)';

ctx.save();
ctx.translate(bbcShape175.around.x, bbcShape175.around.y);
ctx.rotate(bbcShape175.rotation * Math.PI / 180);
ctx.translate(-bbcShape175.around.x, -bbcShape175.around.y);
ctx.beginPath();
ctx.arc(bbcShape175.point.x, bbcShape175.point.y, bbcShape175.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(137, 132, 96)';

ctx.save();
ctx.translate(bbcShape176.around.x, bbcShape176.around.y);
ctx.rotate(bbcShape176.rotation * Math.PI / 180);
ctx.translate(-bbcShape176.around.x, -bbcShape176.around.y);
ctx.beginPath();
ctx.arc(bbcShape176.point.x, bbcShape176.point.y, bbcShape176.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 145, 244)';

ctx.save();
ctx.translate(bbcShape177.around.x, bbcShape177.around.y);
ctx.rotate(bbcShape177.rotation * Math.PI / 180);
ctx.translate(-bbcShape177.around.x, -bbcShape177.around.y);
ctx.beginPath();
ctx.arc(bbcShape177.point.x, bbcShape177.point.y, bbcShape177.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(123, 90, 39)';

ctx.save();
ctx.translate(bbcShape178.around.x, bbcShape178.around.y);
ctx.rotate(bbcShape178.rotation * Math.PI / 180);
ctx.translate(-bbcShape178.around.x, -bbcShape178.around.y);
ctx.beginPath();
ctx.arc(bbcShape178.point.x, bbcShape178.point.y, bbcShape178.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(40, 186, 187)';

ctx.save();
ctx.translate(bbcShape179.around.x, bbcShape179.around.y);
ctx.rotate(bbcShape179.rotation * Math.PI / 180);
ctx.translate(-bbcShape179.around.x, -bbcShape179.around.y);
ctx.beginPath();
ctx.arc(bbcShape179.point.x, bbcShape179.point.y, bbcShape179.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 114, 68)';

ctx.save();
ctx.translate(bbcShape180.around.x, bbcShape180.around.y);
ctx.rotate(bbcShape180.rotation * Math.PI / 180);
ctx.translate(-bbcShape180.around.x, -bbcShape180.around.y);
ctx.beginPath();
ctx.arc(bbcShape180.point.x, bbcShape180.point.y, bbcShape180.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 72, 103)';

ctx.save();
ctx.translate(bbcShape181.around.x, bbcShape181.around.y);
ctx.rotate(bbcShape181.rotation * Math.PI / 180);
ctx.translate(-bbcShape181.around.x, -bbcShape181.around.y);
ctx.beginPath();
ctx.arc(bbcShape181.point.x, bbcShape181.point.y, bbcShape181.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(209, 77, 90)';

ctx.save();
ctx.translate(bbcShape182.around.x, bbcShape182.around.y);
ctx.rotate(bbcShape182.rotation * Math.PI / 180);
ctx.translate(-bbcShape182.around.x, -bbcShape182.around.y);
ctx.beginPath();
ctx.arc(bbcShape182.point.x, bbcShape182.point.y, bbcShape182.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 118, 196)';

ctx.save();
ctx.translate(bbcShape183.around.x, bbcShape183.around.y);
ctx.rotate(bbcShape183.rotation * Math.PI / 180);
ctx.translate(-bbcShape183.around.x, -bbcShape183.around.y);
ctx.beginPath();
ctx.arc(bbcShape183.point.x, bbcShape183.point.y, bbcShape183.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(128, 98, 101)';

ctx.save();
ctx.translate(bbcShape184.around.x, bbcShape184.around.y);
ctx.rotate(bbcShape184.rotation * Math.PI / 180);
ctx.translate(-bbcShape184.around.x, -bbcShape184.around.y);
ctx.beginPath();
ctx.arc(bbcShape184.point.x, bbcShape184.point.y, bbcShape184.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 121, 203)';

ctx.save();
ctx.translate(bbcShape185.around.x, bbcShape185.around.y);
ctx.rotate(bbcShape185.rotation * Math.PI / 180);
ctx.translate(-bbcShape185.around.x, -bbcShape185.around.y);
ctx.beginPath();
ctx.arc(bbcShape185.point.x, bbcShape185.point.y, bbcShape185.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 205, 130)';

ctx.save();
ctx.translate(bbcShape186.around.x, bbcShape186.around.y);
ctx.rotate(bbcShape186.rotation * Math.PI / 180);
ctx.translate(-bbcShape186.around.x, -bbcShape186.around.y);
ctx.beginPath();
ctx.arc(bbcShape186.point.x, bbcShape186.point.y, bbcShape186.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(167, 44, 50)';

ctx.save();
ctx.translate(bbcShape187.around.x, bbcShape187.around.y);
ctx.rotate(bbcShape187.rotation * Math.PI / 180);
ctx.translate(-bbcShape187.around.x, -bbcShape187.around.y);
ctx.beginPath();
ctx.arc(bbcShape187.point.x, bbcShape187.point.y, bbcShape187.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 26, 79)';

ctx.save();
ctx.translate(bbcShape188.around.x, bbcShape188.around.y);
ctx.rotate(bbcShape188.rotation * Math.PI / 180);
ctx.translate(-bbcShape188.around.x, -bbcShape188.around.y);
ctx.beginPath();
ctx.arc(bbcShape188.point.x, bbcShape188.point.y, bbcShape188.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(222, 156, 106)';

ctx.save();
ctx.translate(bbcShape189.around.x, bbcShape189.around.y);
ctx.rotate(bbcShape189.rotation * Math.PI / 180);
ctx.translate(-bbcShape189.around.x, -bbcShape189.around.y);
ctx.beginPath();
ctx.arc(bbcShape189.point.x, bbcShape189.point.y, bbcShape189.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 231, 26)';

ctx.save();
ctx.translate(bbcShape190.around.x, bbcShape190.around.y);
ctx.rotate(bbcShape190.rotation * Math.PI / 180);
ctx.translate(-bbcShape190.around.x, -bbcShape190.around.y);
ctx.beginPath();
ctx.arc(bbcShape190.point.x, bbcShape190.point.y, bbcShape190.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(238, 107, 169)';

ctx.save();
ctx.translate(bbcShape191.around.x, bbcShape191.around.y);
ctx.rotate(bbcShape191.rotation * Math.PI / 180);
ctx.translate(-bbcShape191.around.x, -bbcShape191.around.y);
ctx.beginPath();
ctx.arc(bbcShape191.point.x, bbcShape191.point.y, bbcShape191.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(139, 207, 169)';

ctx.save();
ctx.translate(bbcShape192.around.x, bbcShape192.around.y);
ctx.rotate(bbcShape192.rotation * Math.PI / 180);
ctx.translate(-bbcShape192.around.x, -bbcShape192.around.y);
ctx.beginPath();
ctx.arc(bbcShape192.point.x, bbcShape192.point.y, bbcShape192.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 26, 111)';

ctx.save();
ctx.translate(bbcShape193.around.x, bbcShape193.around.y);
ctx.rotate(bbcShape193.rotation * Math.PI / 180);
ctx.translate(-bbcShape193.around.x, -bbcShape193.around.y);
ctx.beginPath();
ctx.arc(bbcShape193.point.x, bbcShape193.point.y, bbcShape193.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(117, 146, 0)';

ctx.save();
ctx.translate(bbcShape194.around.x, bbcShape194.around.y);
ctx.rotate(bbcShape194.rotation * Math.PI / 180);
ctx.translate(-bbcShape194.around.x, -bbcShape194.around.y);
ctx.beginPath();
ctx.arc(bbcShape194.point.x, bbcShape194.point.y, bbcShape194.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 29, 87)';

ctx.save();
ctx.translate(bbcShape195.around.x, bbcShape195.around.y);
ctx.rotate(bbcShape195.rotation * Math.PI / 180);
ctx.translate(-bbcShape195.around.x, -bbcShape195.around.y);
ctx.beginPath();
ctx.arc(bbcShape195.point.x, bbcShape195.point.y, bbcShape195.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50, 85, 147)';

ctx.save();
ctx.translate(bbcShape196.around.x, bbcShape196.around.y);
ctx.rotate(bbcShape196.rotation * Math.PI / 180);
ctx.translate(-bbcShape196.around.x, -bbcShape196.around.y);
ctx.beginPath();
ctx.arc(bbcShape196.point.x, bbcShape196.point.y, bbcShape196.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(197, 151, 36)';

ctx.save();
ctx.translate(bbcShape197.around.x, bbcShape197.around.y);
ctx.rotate(bbcShape197.rotation * Math.PI / 180);
ctx.translate(-bbcShape197.around.x, -bbcShape197.around.y);
ctx.beginPath();
ctx.arc(bbcShape197.point.x, bbcShape197.point.y, bbcShape197.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(235, 99, 243)';

ctx.save();
ctx.translate(bbcShape198.around.x, bbcShape198.around.y);
ctx.rotate(bbcShape198.rotation * Math.PI / 180);
ctx.translate(-bbcShape198.around.x, -bbcShape198.around.y);
ctx.beginPath();
ctx.arc(bbcShape198.point.x, bbcShape198.point.y, bbcShape198.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225, 73, 246)';

ctx.save();
ctx.translate(bbcShape199.around.x, bbcShape199.around.y);
ctx.rotate(bbcShape199.rotation * Math.PI / 180);
ctx.translate(-bbcShape199.around.x, -bbcShape199.around.y);
ctx.beginPath();
ctx.arc(bbcShape199.point.x, bbcShape199.point.y, bbcShape199.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(65, 139, 155)';

ctx.save();
ctx.translate(bbcShape200.around.x, bbcShape200.around.y);
ctx.rotate(bbcShape200.rotation * Math.PI / 180);
ctx.translate(-bbcShape200.around.x, -bbcShape200.around.y);
ctx.beginPath();
ctx.arc(bbcShape200.point.x, bbcShape200.point.y, bbcShape200.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(136, 142, 73)';

ctx.save();
ctx.translate(bbcShape201.around.x, bbcShape201.around.y);
ctx.rotate(bbcShape201.rotation * Math.PI / 180);
ctx.translate(-bbcShape201.around.x, -bbcShape201.around.y);
ctx.beginPath();
ctx.arc(bbcShape201.point.x, bbcShape201.point.y, bbcShape201.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(117, 120, 7)';

ctx.save();
ctx.translate(bbcShape202.around.x, bbcShape202.around.y);
ctx.rotate(bbcShape202.rotation * Math.PI / 180);
ctx.translate(-bbcShape202.around.x, -bbcShape202.around.y);
ctx.beginPath();
ctx.arc(bbcShape202.point.x, bbcShape202.point.y, bbcShape202.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 223, 72)';

ctx.save();
ctx.translate(bbcShape203.around.x, bbcShape203.around.y);
ctx.rotate(bbcShape203.rotation * Math.PI / 180);
ctx.translate(-bbcShape203.around.x, -bbcShape203.around.y);
ctx.beginPath();
ctx.arc(bbcShape203.point.x, bbcShape203.point.y, bbcShape203.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 234, 61)';

ctx.save();
ctx.translate(bbcShape204.around.x, bbcShape204.around.y);
ctx.rotate(bbcShape204.rotation * Math.PI / 180);
ctx.translate(-bbcShape204.around.x, -bbcShape204.around.y);
ctx.beginPath();
ctx.arc(bbcShape204.point.x, bbcShape204.point.y, bbcShape204.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(145, 181, 110)';

ctx.save();
ctx.translate(bbcShape205.around.x, bbcShape205.around.y);
ctx.rotate(bbcShape205.rotation * Math.PI / 180);
ctx.translate(-bbcShape205.around.x, -bbcShape205.around.y);
ctx.beginPath();
ctx.arc(bbcShape205.point.x, bbcShape205.point.y, bbcShape205.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(223, 77, 73)';

ctx.save();
ctx.translate(bbcShape206.around.x, bbcShape206.around.y);
ctx.rotate(bbcShape206.rotation * Math.PI / 180);
ctx.translate(-bbcShape206.around.x, -bbcShape206.around.y);
ctx.beginPath();
ctx.arc(bbcShape206.point.x, bbcShape206.point.y, bbcShape206.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 148, 95)';

ctx.save();
ctx.translate(bbcShape207.around.x, bbcShape207.around.y);
ctx.rotate(bbcShape207.rotation * Math.PI / 180);
ctx.translate(-bbcShape207.around.x, -bbcShape207.around.y);
ctx.beginPath();
ctx.arc(bbcShape207.point.x, bbcShape207.point.y, bbcShape207.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 63, 241)';

ctx.save();
ctx.translate(bbcShape208.around.x, bbcShape208.around.y);
ctx.rotate(bbcShape208.rotation * Math.PI / 180);
ctx.translate(-bbcShape208.around.x, -bbcShape208.around.y);
ctx.beginPath();
ctx.arc(bbcShape208.point.x, bbcShape208.point.y, bbcShape208.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(162, 118, 208)';

ctx.save();
ctx.translate(bbcShape209.around.x, bbcShape209.around.y);
ctx.rotate(bbcShape209.rotation * Math.PI / 180);
ctx.translate(-bbcShape209.around.x, -bbcShape209.around.y);
ctx.beginPath();
ctx.arc(bbcShape209.point.x, bbcShape209.point.y, bbcShape209.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(232, 198, 155)';

ctx.save();
ctx.translate(bbcShape210.around.x, bbcShape210.around.y);
ctx.rotate(bbcShape210.rotation * Math.PI / 180);
ctx.translate(-bbcShape210.around.x, -bbcShape210.around.y);
ctx.beginPath();
ctx.arc(bbcShape210.point.x, bbcShape210.point.y, bbcShape210.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(78, 235, 38)';

ctx.save();
ctx.translate(bbcShape211.around.x, bbcShape211.around.y);
ctx.rotate(bbcShape211.rotation * Math.PI / 180);
ctx.translate(-bbcShape211.around.x, -bbcShape211.around.y);
ctx.beginPath();
ctx.arc(bbcShape211.point.x, bbcShape211.point.y, bbcShape211.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(159, 190, 45)';

ctx.save();
ctx.translate(bbcShape212.around.x, bbcShape212.around.y);
ctx.rotate(bbcShape212.rotation * Math.PI / 180);
ctx.translate(-bbcShape212.around.x, -bbcShape212.around.y);
ctx.beginPath();
ctx.arc(bbcShape212.point.x, bbcShape212.point.y, bbcShape212.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(237, 245, 180)';

ctx.save();
ctx.translate(bbcShape213.around.x, bbcShape213.around.y);
ctx.rotate(bbcShape213.rotation * Math.PI / 180);
ctx.translate(-bbcShape213.around.x, -bbcShape213.around.y);
ctx.beginPath();
ctx.arc(bbcShape213.point.x, bbcShape213.point.y, bbcShape213.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(201, 106, 127)';

ctx.save();
ctx.translate(bbcShape214.around.x, bbcShape214.around.y);
ctx.rotate(bbcShape214.rotation * Math.PI / 180);
ctx.translate(-bbcShape214.around.x, -bbcShape214.around.y);
ctx.beginPath();
ctx.arc(bbcShape214.point.x, bbcShape214.point.y, bbcShape214.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 25, 122)';

ctx.save();
ctx.translate(bbcShape215.around.x, bbcShape215.around.y);
ctx.rotate(bbcShape215.rotation * Math.PI / 180);
ctx.translate(-bbcShape215.around.x, -bbcShape215.around.y);
ctx.beginPath();
ctx.arc(bbcShape215.point.x, bbcShape215.point.y, bbcShape215.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(65, 214, 150)';

ctx.save();
ctx.translate(bbcShape216.around.x, bbcShape216.around.y);
ctx.rotate(bbcShape216.rotation * Math.PI / 180);
ctx.translate(-bbcShape216.around.x, -bbcShape216.around.y);
ctx.beginPath();
ctx.arc(bbcShape216.point.x, bbcShape216.point.y, bbcShape216.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 19, 50)';

ctx.save();
ctx.translate(bbcShape217.around.x, bbcShape217.around.y);
ctx.rotate(bbcShape217.rotation * Math.PI / 180);
ctx.translate(-bbcShape217.around.x, -bbcShape217.around.y);
ctx.beginPath();
ctx.arc(bbcShape217.point.x, bbcShape217.point.y, bbcShape217.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(76, 16, 5)';

ctx.save();
ctx.translate(bbcShape218.around.x, bbcShape218.around.y);
ctx.rotate(bbcShape218.rotation * Math.PI / 180);
ctx.translate(-bbcShape218.around.x, -bbcShape218.around.y);
ctx.beginPath();
ctx.arc(bbcShape218.point.x, bbcShape218.point.y, bbcShape218.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 132, 147)';

ctx.save();
ctx.translate(bbcShape219.around.x, bbcShape219.around.y);
ctx.rotate(bbcShape219.rotation * Math.PI / 180);
ctx.translate(-bbcShape219.around.x, -bbcShape219.around.y);
ctx.beginPath();
ctx.arc(bbcShape219.point.x, bbcShape219.point.y, bbcShape219.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(201, 129, 14)';

ctx.save();
ctx.translate(bbcShape220.around.x, bbcShape220.around.y);
ctx.rotate(bbcShape220.rotation * Math.PI / 180);
ctx.translate(-bbcShape220.around.x, -bbcShape220.around.y);
ctx.beginPath();
ctx.arc(bbcShape220.point.x, bbcShape220.point.y, bbcShape220.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(8, 113, 215)';

ctx.save();
ctx.translate(bbcShape221.around.x, bbcShape221.around.y);
ctx.rotate(bbcShape221.rotation * Math.PI / 180);
ctx.translate(-bbcShape221.around.x, -bbcShape221.around.y);
ctx.beginPath();
ctx.arc(bbcShape221.point.x, bbcShape221.point.y, bbcShape221.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 19, 162)';

ctx.save();
ctx.translate(bbcShape222.around.x, bbcShape222.around.y);
ctx.rotate(bbcShape222.rotation * Math.PI / 180);
ctx.translate(-bbcShape222.around.x, -bbcShape222.around.y);
ctx.beginPath();
ctx.arc(bbcShape222.point.x, bbcShape222.point.y, bbcShape222.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 60, 32)';

ctx.save();
ctx.translate(bbcShape223.around.x, bbcShape223.around.y);
ctx.rotate(bbcShape223.rotation * Math.PI / 180);
ctx.translate(-bbcShape223.around.x, -bbcShape223.around.y);
ctx.beginPath();
ctx.arc(bbcShape223.point.x, bbcShape223.point.y, bbcShape223.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(56, 226, 235)';

ctx.save();
ctx.translate(bbcShape224.around.x, bbcShape224.around.y);
ctx.rotate(bbcShape224.rotation * Math.PI / 180);
ctx.translate(-bbcShape224.around.x, -bbcShape224.around.y);
ctx.beginPath();
ctx.arc(bbcShape224.point.x, bbcShape224.point.y, bbcShape224.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50, 151, 108)';

ctx.save();
ctx.translate(bbcShape225.around.x, bbcShape225.around.y);
ctx.rotate(bbcShape225.rotation * Math.PI / 180);
ctx.translate(-bbcShape225.around.x, -bbcShape225.around.y);
ctx.beginPath();
ctx.arc(bbcShape225.point.x, bbcShape225.point.y, bbcShape225.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 189, 37)';

ctx.save();
ctx.translate(bbcShape226.around.x, bbcShape226.around.y);
ctx.rotate(bbcShape226.rotation * Math.PI / 180);
ctx.translate(-bbcShape226.around.x, -bbcShape226.around.y);
ctx.beginPath();
ctx.arc(bbcShape226.point.x, bbcShape226.point.y, bbcShape226.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 44, 220)';

ctx.save();
ctx.translate(bbcShape227.around.x, bbcShape227.around.y);
ctx.rotate(bbcShape227.rotation * Math.PI / 180);
ctx.translate(-bbcShape227.around.x, -bbcShape227.around.y);
ctx.beginPath();
ctx.arc(bbcShape227.point.x, bbcShape227.point.y, bbcShape227.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(158, 229, 80)';

ctx.save();
ctx.translate(bbcShape228.around.x, bbcShape228.around.y);
ctx.rotate(bbcShape228.rotation * Math.PI / 180);
ctx.translate(-bbcShape228.around.x, -bbcShape228.around.y);
ctx.beginPath();
ctx.arc(bbcShape228.point.x, bbcShape228.point.y, bbcShape228.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(152, 219, 111)';

ctx.save();
ctx.translate(bbcShape229.around.x, bbcShape229.around.y);
ctx.rotate(bbcShape229.rotation * Math.PI / 180);
ctx.translate(-bbcShape229.around.x, -bbcShape229.around.y);
ctx.beginPath();
ctx.arc(bbcShape229.point.x, bbcShape229.point.y, bbcShape229.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(218, 215, 43)';

ctx.save();
ctx.translate(bbcShape230.around.x, bbcShape230.around.y);
ctx.rotate(bbcShape230.rotation * Math.PI / 180);
ctx.translate(-bbcShape230.around.x, -bbcShape230.around.y);
ctx.beginPath();
ctx.arc(bbcShape230.point.x, bbcShape230.point.y, bbcShape230.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(211, 172, 220)';

ctx.save();
ctx.translate(bbcShape231.around.x, bbcShape231.around.y);
ctx.rotate(bbcShape231.rotation * Math.PI / 180);
ctx.translate(-bbcShape231.around.x, -bbcShape231.around.y);
ctx.beginPath();
ctx.arc(bbcShape231.point.x, bbcShape231.point.y, bbcShape231.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(64, 186, 86)';

ctx.save();
ctx.translate(bbcShape232.around.x, bbcShape232.around.y);
ctx.rotate(bbcShape232.rotation * Math.PI / 180);
ctx.translate(-bbcShape232.around.x, -bbcShape232.around.y);
ctx.beginPath();
ctx.arc(bbcShape232.point.x, bbcShape232.point.y, bbcShape232.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 220, 253)';

ctx.save();
ctx.translate(bbcShape233.around.x, bbcShape233.around.y);
ctx.rotate(bbcShape233.rotation * Math.PI / 180);
ctx.translate(-bbcShape233.around.x, -bbcShape233.around.y);
ctx.beginPath();
ctx.arc(bbcShape233.point.x, bbcShape233.point.y, bbcShape233.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(143, 182, 87)';

ctx.save();
ctx.translate(bbcShape234.around.x, bbcShape234.around.y);
ctx.rotate(bbcShape234.rotation * Math.PI / 180);
ctx.translate(-bbcShape234.around.x, -bbcShape234.around.y);
ctx.beginPath();
ctx.arc(bbcShape234.point.x, bbcShape234.point.y, bbcShape234.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 46, 9)';

ctx.save();
ctx.translate(bbcShape235.around.x, bbcShape235.around.y);
ctx.rotate(bbcShape235.rotation * Math.PI / 180);
ctx.translate(-bbcShape235.around.x, -bbcShape235.around.y);
ctx.beginPath();
ctx.arc(bbcShape235.point.x, bbcShape235.point.y, bbcShape235.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(28, 188, 232)';

ctx.save();
ctx.translate(bbcShape236.around.x, bbcShape236.around.y);
ctx.rotate(bbcShape236.rotation * Math.PI / 180);
ctx.translate(-bbcShape236.around.x, -bbcShape236.around.y);
ctx.beginPath();
ctx.arc(bbcShape236.point.x, bbcShape236.point.y, bbcShape236.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(108, 217, 131)';

ctx.save();
ctx.translate(bbcShape237.around.x, bbcShape237.around.y);
ctx.rotate(bbcShape237.rotation * Math.PI / 180);
ctx.translate(-bbcShape237.around.x, -bbcShape237.around.y);
ctx.beginPath();
ctx.arc(bbcShape237.point.x, bbcShape237.point.y, bbcShape237.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(13, 201, 214)';

ctx.save();
ctx.translate(bbcShape238.around.x, bbcShape238.around.y);
ctx.rotate(bbcShape238.rotation * Math.PI / 180);
ctx.translate(-bbcShape238.around.x, -bbcShape238.around.y);
ctx.beginPath();
ctx.arc(bbcShape238.point.x, bbcShape238.point.y, bbcShape238.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 184, 88)';

ctx.save();
ctx.translate(bbcShape239.around.x, bbcShape239.around.y);
ctx.rotate(bbcShape239.rotation * Math.PI / 180);
ctx.translate(-bbcShape239.around.x, -bbcShape239.around.y);
ctx.beginPath();
ctx.arc(bbcShape239.point.x, bbcShape239.point.y, bbcShape239.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(183, 42, 182)';

ctx.save();
ctx.translate(bbcShape240.around.x, bbcShape240.around.y);
ctx.rotate(bbcShape240.rotation * Math.PI / 180);
ctx.translate(-bbcShape240.around.x, -bbcShape240.around.y);
ctx.beginPath();
ctx.arc(bbcShape240.point.x, bbcShape240.point.y, bbcShape240.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(149, 149, 254)';

ctx.save();
ctx.translate(bbcShape241.around.x, bbcShape241.around.y);
ctx.rotate(bbcShape241.rotation * Math.PI / 180);
ctx.translate(-bbcShape241.around.x, -bbcShape241.around.y);
ctx.beginPath();
ctx.arc(bbcShape241.point.x, bbcShape241.point.y, bbcShape241.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(229, 76, 31)';

ctx.save();
ctx.translate(bbcShape242.around.x, bbcShape242.around.y);
ctx.rotate(bbcShape242.rotation * Math.PI / 180);
ctx.translate(-bbcShape242.around.x, -bbcShape242.around.y);
ctx.beginPath();
ctx.arc(bbcShape242.point.x, bbcShape242.point.y, bbcShape242.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(220, 112, 41)';

ctx.save();
ctx.translate(bbcShape243.around.x, bbcShape243.around.y);
ctx.rotate(bbcShape243.rotation * Math.PI / 180);
ctx.translate(-bbcShape243.around.x, -bbcShape243.around.y);
ctx.beginPath();
ctx.arc(bbcShape243.point.x, bbcShape243.point.y, bbcShape243.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 53, 13)';

ctx.save();
ctx.translate(bbcShape244.around.x, bbcShape244.around.y);
ctx.rotate(bbcShape244.rotation * Math.PI / 180);
ctx.translate(-bbcShape244.around.x, -bbcShape244.around.y);
ctx.beginPath();
ctx.arc(bbcShape244.point.x, bbcShape244.point.y, bbcShape244.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(116, 118, 183)';

ctx.save();
ctx.translate(bbcShape245.around.x, bbcShape245.around.y);
ctx.rotate(bbcShape245.rotation * Math.PI / 180);
ctx.translate(-bbcShape245.around.x, -bbcShape245.around.y);
ctx.beginPath();
ctx.arc(bbcShape245.point.x, bbcShape245.point.y, bbcShape245.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(204, 87, 5)';

ctx.save();
ctx.translate(bbcShape246.around.x, bbcShape246.around.y);
ctx.rotate(bbcShape246.rotation * Math.PI / 180);
ctx.translate(-bbcShape246.around.x, -bbcShape246.around.y);
ctx.beginPath();
ctx.arc(bbcShape246.point.x, bbcShape246.point.y, bbcShape246.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(233, 202, 35)';

ctx.save();
ctx.translate(bbcShape247.around.x, bbcShape247.around.y);
ctx.rotate(bbcShape247.rotation * Math.PI / 180);
ctx.translate(-bbcShape247.around.x, -bbcShape247.around.y);
ctx.beginPath();
ctx.arc(bbcShape247.point.x, bbcShape247.point.y, bbcShape247.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(34, 245, 62)';

ctx.save();
ctx.translate(bbcShape248.around.x, bbcShape248.around.y);
ctx.rotate(bbcShape248.rotation * Math.PI / 180);
ctx.translate(-bbcShape248.around.x, -bbcShape248.around.y);
ctx.beginPath();
ctx.arc(bbcShape248.point.x, bbcShape248.point.y, bbcShape248.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(174, 137, 28)';

ctx.save();
ctx.translate(bbcShape249.around.x, bbcShape249.around.y);
ctx.rotate(bbcShape249.rotation * Math.PI / 180);
ctx.translate(-bbcShape249.around.x, -bbcShape249.around.y);
ctx.beginPath();
ctx.arc(bbcShape249.point.x, bbcShape249.point.y, bbcShape249.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(46, 238, 53)';

ctx.save();
ctx.translate(bbcShape250.around.x, bbcShape250.around.y);
ctx.rotate(bbcShape250.rotation * Math.PI / 180);
ctx.translate(-bbcShape250.around.x, -bbcShape250.around.y);
ctx.beginPath();
ctx.arc(bbcShape250.point.x, bbcShape250.point.y, bbcShape250.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 174, 91)';

ctx.save();
ctx.translate(bbcShape251.around.x, bbcShape251.around.y);
ctx.rotate(bbcShape251.rotation * Math.PI / 180);
ctx.translate(-bbcShape251.around.x, -bbcShape251.around.y);
ctx.beginPath();
ctx.arc(bbcShape251.point.x, bbcShape251.point.y, bbcShape251.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(231, 28, 250)';

ctx.save();
ctx.translate(bbcShape252.around.x, bbcShape252.around.y);
ctx.rotate(bbcShape252.rotation * Math.PI / 180);
ctx.translate(-bbcShape252.around.x, -bbcShape252.around.y);
ctx.beginPath();
ctx.arc(bbcShape252.point.x, bbcShape252.point.y, bbcShape252.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(123, 184, 177)';

ctx.save();
ctx.translate(bbcShape253.around.x, bbcShape253.around.y);
ctx.rotate(bbcShape253.rotation * Math.PI / 180);
ctx.translate(-bbcShape253.around.x, -bbcShape253.around.y);
ctx.beginPath();
ctx.arc(bbcShape253.point.x, bbcShape253.point.y, bbcShape253.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(150, 106, 197)';

ctx.save();
ctx.translate(bbcShape254.around.x, bbcShape254.around.y);
ctx.rotate(bbcShape254.rotation * Math.PI / 180);
ctx.translate(-bbcShape254.around.x, -bbcShape254.around.y);
ctx.beginPath();
ctx.arc(bbcShape254.point.x, bbcShape254.point.y, bbcShape254.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(147, 168, 147)';

ctx.save();
ctx.translate(bbcShape255.around.x, bbcShape255.around.y);
ctx.rotate(bbcShape255.rotation * Math.PI / 180);
ctx.translate(-bbcShape255.around.x, -bbcShape255.around.y);
ctx.beginPath();
ctx.arc(bbcShape255.point.x, bbcShape255.point.y, bbcShape255.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(112, 229, 188)';

ctx.save();
ctx.translate(bbcShape256.around.x, bbcShape256.around.y);
ctx.rotate(bbcShape256.rotation * Math.PI / 180);
ctx.translate(-bbcShape256.around.x, -bbcShape256.around.y);
ctx.beginPath();
ctx.arc(bbcShape256.point.x, bbcShape256.point.y, bbcShape256.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(14, 44, 179)';

ctx.save();
ctx.translate(bbcShape257.around.x, bbcShape257.around.y);
ctx.rotate(bbcShape257.rotation * Math.PI / 180);
ctx.translate(-bbcShape257.around.x, -bbcShape257.around.y);
ctx.beginPath();
ctx.arc(bbcShape257.point.x, bbcShape257.point.y, bbcShape257.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(154, 80, 192)';

ctx.save();
ctx.translate(bbcShape258.around.x, bbcShape258.around.y);
ctx.rotate(bbcShape258.rotation * Math.PI / 180);
ctx.translate(-bbcShape258.around.x, -bbcShape258.around.y);
ctx.beginPath();
ctx.arc(bbcShape258.point.x, bbcShape258.point.y, bbcShape258.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 93, 119)';

ctx.save();
ctx.translate(bbcShape259.around.x, bbcShape259.around.y);
ctx.rotate(bbcShape259.rotation * Math.PI / 180);
ctx.translate(-bbcShape259.around.x, -bbcShape259.around.y);
ctx.beginPath();
ctx.arc(bbcShape259.point.x, bbcShape259.point.y, bbcShape259.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(89, 39, 10)';

ctx.save();
ctx.translate(bbcShape260.around.x, bbcShape260.around.y);
ctx.rotate(bbcShape260.rotation * Math.PI / 180);
ctx.translate(-bbcShape260.around.x, -bbcShape260.around.y);
ctx.beginPath();
ctx.arc(bbcShape260.point.x, bbcShape260.point.y, bbcShape260.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(188, 56, 227)';

ctx.save();
ctx.translate(bbcShape261.around.x, bbcShape261.around.y);
ctx.rotate(bbcShape261.rotation * Math.PI / 180);
ctx.translate(-bbcShape261.around.x, -bbcShape261.around.y);
ctx.beginPath();
ctx.arc(bbcShape261.point.x, bbcShape261.point.y, bbcShape261.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(188, 24, 71)';

ctx.save();
ctx.translate(bbcShape262.around.x, bbcShape262.around.y);
ctx.rotate(bbcShape262.rotation * Math.PI / 180);
ctx.translate(-bbcShape262.around.x, -bbcShape262.around.y);
ctx.beginPath();
ctx.arc(bbcShape262.point.x, bbcShape262.point.y, bbcShape262.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(14, 43, 70)';

ctx.save();
ctx.translate(bbcShape263.around.x, bbcShape263.around.y);
ctx.rotate(bbcShape263.rotation * Math.PI / 180);
ctx.translate(-bbcShape263.around.x, -bbcShape263.around.y);
ctx.beginPath();
ctx.arc(bbcShape263.point.x, bbcShape263.point.y, bbcShape263.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(68, 138, 12)';

ctx.save();
ctx.translate(bbcShape264.around.x, bbcShape264.around.y);
ctx.rotate(bbcShape264.rotation * Math.PI / 180);
ctx.translate(-bbcShape264.around.x, -bbcShape264.around.y);
ctx.beginPath();
ctx.arc(bbcShape264.point.x, bbcShape264.point.y, bbcShape264.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(190, 148, 255)';

ctx.save();
ctx.translate(bbcShape265.around.x, bbcShape265.around.y);
ctx.rotate(bbcShape265.rotation * Math.PI / 180);
ctx.translate(-bbcShape265.around.x, -bbcShape265.around.y);
ctx.beginPath();
ctx.arc(bbcShape265.point.x, bbcShape265.point.y, bbcShape265.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 190, 37)';

ctx.save();
ctx.translate(bbcShape266.around.x, bbcShape266.around.y);
ctx.rotate(bbcShape266.rotation * Math.PI / 180);
ctx.translate(-bbcShape266.around.x, -bbcShape266.around.y);
ctx.beginPath();
ctx.arc(bbcShape266.point.x, bbcShape266.point.y, bbcShape266.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(253, 60, 159)';

ctx.save();
ctx.translate(bbcShape267.around.x, bbcShape267.around.y);
ctx.rotate(bbcShape267.rotation * Math.PI / 180);
ctx.translate(-bbcShape267.around.x, -bbcShape267.around.y);
ctx.beginPath();
ctx.arc(bbcShape267.point.x, bbcShape267.point.y, bbcShape267.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(76, 163, 223)';

ctx.save();
ctx.translate(bbcShape268.around.x, bbcShape268.around.y);
ctx.rotate(bbcShape268.rotation * Math.PI / 180);
ctx.translate(-bbcShape268.around.x, -bbcShape268.around.y);
ctx.beginPath();
ctx.arc(bbcShape268.point.x, bbcShape268.point.y, bbcShape268.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 162, 100)';

ctx.save();
ctx.translate(bbcShape269.around.x, bbcShape269.around.y);
ctx.rotate(bbcShape269.rotation * Math.PI / 180);
ctx.translate(-bbcShape269.around.x, -bbcShape269.around.y);
ctx.beginPath();
ctx.arc(bbcShape269.point.x, bbcShape269.point.y, bbcShape269.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(58, 18, 101)';

ctx.save();
ctx.translate(bbcShape270.around.x, bbcShape270.around.y);
ctx.rotate(bbcShape270.rotation * Math.PI / 180);
ctx.translate(-bbcShape270.around.x, -bbcShape270.around.y);
ctx.beginPath();
ctx.arc(bbcShape270.point.x, bbcShape270.point.y, bbcShape270.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(145, 196, 161)';

ctx.save();
ctx.translate(bbcShape271.around.x, bbcShape271.around.y);
ctx.rotate(bbcShape271.rotation * Math.PI / 180);
ctx.translate(-bbcShape271.around.x, -bbcShape271.around.y);
ctx.beginPath();
ctx.arc(bbcShape271.point.x, bbcShape271.point.y, bbcShape271.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(44, 126, 171)';

ctx.save();
ctx.translate(bbcShape272.around.x, bbcShape272.around.y);
ctx.rotate(bbcShape272.rotation * Math.PI / 180);
ctx.translate(-bbcShape272.around.x, -bbcShape272.around.y);
ctx.beginPath();
ctx.arc(bbcShape272.point.x, bbcShape272.point.y, bbcShape272.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(8, 208, 153)';

ctx.save();
ctx.translate(bbcShape273.around.x, bbcShape273.around.y);
ctx.rotate(bbcShape273.rotation * Math.PI / 180);
ctx.translate(-bbcShape273.around.x, -bbcShape273.around.y);
ctx.beginPath();
ctx.arc(bbcShape273.point.x, bbcShape273.point.y, bbcShape273.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 49, 179)';

ctx.save();
ctx.translate(bbcShape274.around.x, bbcShape274.around.y);
ctx.rotate(bbcShape274.rotation * Math.PI / 180);
ctx.translate(-bbcShape274.around.x, -bbcShape274.around.y);
ctx.beginPath();
ctx.arc(bbcShape274.point.x, bbcShape274.point.y, bbcShape274.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 209, 106)';

ctx.save();
ctx.translate(bbcShape275.around.x, bbcShape275.around.y);
ctx.rotate(bbcShape275.rotation * Math.PI / 180);
ctx.translate(-bbcShape275.around.x, -bbcShape275.around.y);
ctx.beginPath();
ctx.arc(bbcShape275.point.x, bbcShape275.point.y, bbcShape275.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 181, 116)';

ctx.save();
ctx.translate(bbcShape276.around.x, bbcShape276.around.y);
ctx.rotate(bbcShape276.rotation * Math.PI / 180);
ctx.translate(-bbcShape276.around.x, -bbcShape276.around.y);
ctx.beginPath();
ctx.arc(bbcShape276.point.x, bbcShape276.point.y, bbcShape276.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(14, 100, 141)';

ctx.save();
ctx.translate(bbcShape277.around.x, bbcShape277.around.y);
ctx.rotate(bbcShape277.rotation * Math.PI / 180);
ctx.translate(-bbcShape277.around.x, -bbcShape277.around.y);
ctx.beginPath();
ctx.arc(bbcShape277.point.x, bbcShape277.point.y, bbcShape277.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(71, 223, 48)';

ctx.save();
ctx.translate(bbcShape278.around.x, bbcShape278.around.y);
ctx.rotate(bbcShape278.rotation * Math.PI / 180);
ctx.translate(-bbcShape278.around.x, -bbcShape278.around.y);
ctx.beginPath();
ctx.arc(bbcShape278.point.x, bbcShape278.point.y, bbcShape278.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 11, 195)';

ctx.save();
ctx.translate(bbcShape279.around.x, bbcShape279.around.y);
ctx.rotate(bbcShape279.rotation * Math.PI / 180);
ctx.translate(-bbcShape279.around.x, -bbcShape279.around.y);
ctx.beginPath();
ctx.arc(bbcShape279.point.x, bbcShape279.point.y, bbcShape279.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 71, 181)';

ctx.save();
ctx.translate(bbcShape280.around.x, bbcShape280.around.y);
ctx.rotate(bbcShape280.rotation * Math.PI / 180);
ctx.translate(-bbcShape280.around.x, -bbcShape280.around.y);
ctx.beginPath();
ctx.arc(bbcShape280.point.x, bbcShape280.point.y, bbcShape280.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(247, 12, 16)';

ctx.save();
ctx.translate(bbcShape281.around.x, bbcShape281.around.y);
ctx.rotate(bbcShape281.rotation * Math.PI / 180);
ctx.translate(-bbcShape281.around.x, -bbcShape281.around.y);
ctx.beginPath();
ctx.arc(bbcShape281.point.x, bbcShape281.point.y, bbcShape281.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(18, 17, 222)';

ctx.save();
ctx.translate(bbcShape282.around.x, bbcShape282.around.y);
ctx.rotate(bbcShape282.rotation * Math.PI / 180);
ctx.translate(-bbcShape282.around.x, -bbcShape282.around.y);
ctx.beginPath();
ctx.arc(bbcShape282.point.x, bbcShape282.point.y, bbcShape282.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 171, 116)';

ctx.save();
ctx.translate(bbcShape283.around.x, bbcShape283.around.y);
ctx.rotate(bbcShape283.rotation * Math.PI / 180);
ctx.translate(-bbcShape283.around.x, -bbcShape283.around.y);
ctx.beginPath();
ctx.arc(bbcShape283.point.x, bbcShape283.point.y, bbcShape283.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(199, 130, 119)';

ctx.save();
ctx.translate(bbcShape284.around.x, bbcShape284.around.y);
ctx.rotate(bbcShape284.rotation * Math.PI / 180);
ctx.translate(-bbcShape284.around.x, -bbcShape284.around.y);
ctx.beginPath();
ctx.arc(bbcShape284.point.x, bbcShape284.point.y, bbcShape284.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(160, 133, 255)';

ctx.save();
ctx.translate(bbcShape285.around.x, bbcShape285.around.y);
ctx.rotate(bbcShape285.rotation * Math.PI / 180);
ctx.translate(-bbcShape285.around.x, -bbcShape285.around.y);
ctx.beginPath();
ctx.arc(bbcShape285.point.x, bbcShape285.point.y, bbcShape285.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 158, 80)';

ctx.save();
ctx.translate(bbcShape286.around.x, bbcShape286.around.y);
ctx.rotate(bbcShape286.rotation * Math.PI / 180);
ctx.translate(-bbcShape286.around.x, -bbcShape286.around.y);
ctx.beginPath();
ctx.arc(bbcShape286.point.x, bbcShape286.point.y, bbcShape286.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(118, 92, 68)';

ctx.save();
ctx.translate(bbcShape287.around.x, bbcShape287.around.y);
ctx.rotate(bbcShape287.rotation * Math.PI / 180);
ctx.translate(-bbcShape287.around.x, -bbcShape287.around.y);
ctx.beginPath();
ctx.arc(bbcShape287.point.x, bbcShape287.point.y, bbcShape287.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(8, 5, 196)';

ctx.save();
ctx.translate(bbcShape288.around.x, bbcShape288.around.y);
ctx.rotate(bbcShape288.rotation * Math.PI / 180);
ctx.translate(-bbcShape288.around.x, -bbcShape288.around.y);
ctx.beginPath();
ctx.arc(bbcShape288.point.x, bbcShape288.point.y, bbcShape288.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(132, 223, 152)';

ctx.save();
ctx.translate(bbcShape289.around.x, bbcShape289.around.y);
ctx.rotate(bbcShape289.rotation * Math.PI / 180);
ctx.translate(-bbcShape289.around.x, -bbcShape289.around.y);
ctx.beginPath();
ctx.arc(bbcShape289.point.x, bbcShape289.point.y, bbcShape289.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(144, 81, 62)';

ctx.save();
ctx.translate(bbcShape290.around.x, bbcShape290.around.y);
ctx.rotate(bbcShape290.rotation * Math.PI / 180);
ctx.translate(-bbcShape290.around.x, -bbcShape290.around.y);
ctx.beginPath();
ctx.arc(bbcShape290.point.x, bbcShape290.point.y, bbcShape290.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 225, 63)';

ctx.save();
ctx.translate(bbcShape291.around.x, bbcShape291.around.y);
ctx.rotate(bbcShape291.rotation * Math.PI / 180);
ctx.translate(-bbcShape291.around.x, -bbcShape291.around.y);
ctx.beginPath();
ctx.arc(bbcShape291.point.x, bbcShape291.point.y, bbcShape291.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 114, 140)';

ctx.save();
ctx.translate(bbcShape292.around.x, bbcShape292.around.y);
ctx.rotate(bbcShape292.rotation * Math.PI / 180);
ctx.translate(-bbcShape292.around.x, -bbcShape292.around.y);
ctx.beginPath();
ctx.arc(bbcShape292.point.x, bbcShape292.point.y, bbcShape292.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 243, 138)';

ctx.save();
ctx.translate(bbcShape293.around.x, bbcShape293.around.y);
ctx.rotate(bbcShape293.rotation * Math.PI / 180);
ctx.translate(-bbcShape293.around.x, -bbcShape293.around.y);
ctx.beginPath();
ctx.arc(bbcShape293.point.x, bbcShape293.point.y, bbcShape293.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 168, 15)';

ctx.save();
ctx.translate(bbcShape294.around.x, bbcShape294.around.y);
ctx.rotate(bbcShape294.rotation * Math.PI / 180);
ctx.translate(-bbcShape294.around.x, -bbcShape294.around.y);
ctx.beginPath();
ctx.arc(bbcShape294.point.x, bbcShape294.point.y, bbcShape294.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(167, 236, 95)';

ctx.save();
ctx.translate(bbcShape295.around.x, bbcShape295.around.y);
ctx.rotate(bbcShape295.rotation * Math.PI / 180);
ctx.translate(-bbcShape295.around.x, -bbcShape295.around.y);
ctx.beginPath();
ctx.arc(bbcShape295.point.x, bbcShape295.point.y, bbcShape295.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(206, 255, 124)';

ctx.save();
ctx.translate(bbcShape296.around.x, bbcShape296.around.y);
ctx.rotate(bbcShape296.rotation * Math.PI / 180);
ctx.translate(-bbcShape296.around.x, -bbcShape296.around.y);
ctx.beginPath();
ctx.arc(bbcShape296.point.x, bbcShape296.point.y, bbcShape296.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(60, 212, 80)';

ctx.save();
ctx.translate(bbcShape297.around.x, bbcShape297.around.y);
ctx.rotate(bbcShape297.rotation * Math.PI / 180);
ctx.translate(-bbcShape297.around.x, -bbcShape297.around.y);
ctx.beginPath();
ctx.arc(bbcShape297.point.x, bbcShape297.point.y, bbcShape297.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(3, 4, 144)';

ctx.save();
ctx.translate(bbcShape298.around.x, bbcShape298.around.y);
ctx.rotate(bbcShape298.rotation * Math.PI / 180);
ctx.translate(-bbcShape298.around.x, -bbcShape298.around.y);
ctx.beginPath();
ctx.arc(bbcShape298.point.x, bbcShape298.point.y, bbcShape298.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(220, 250, 182)';

ctx.save();
ctx.translate(bbcShape299.around.x, bbcShape299.around.y);
ctx.rotate(bbcShape299.rotation * Math.PI / 180);
ctx.translate(-bbcShape299.around.x, -bbcShape299.around.y);
ctx.beginPath();
ctx.arc(bbcShape299.point.x, bbcShape299.point.y, bbcShape299.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(146, 190, 2)';

ctx.save();
ctx.translate(bbcShape300.around.x, bbcShape300.around.y);
ctx.rotate(bbcShape300.rotation * Math.PI / 180);
ctx.translate(-bbcShape300.around.x, -bbcShape300.around.y);
ctx.beginPath();
ctx.arc(bbcShape300.point.x, bbcShape300.point.y, bbcShape300.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(139, 234, 119)';

ctx.save();
ctx.translate(bbcShape301.around.x, bbcShape301.around.y);
ctx.rotate(bbcShape301.rotation * Math.PI / 180);
ctx.translate(-bbcShape301.around.x, -bbcShape301.around.y);
ctx.beginPath();
ctx.arc(bbcShape301.point.x, bbcShape301.point.y, bbcShape301.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(63, 49, 46)';

ctx.save();
ctx.translate(bbcShape302.around.x, bbcShape302.around.y);
ctx.rotate(bbcShape302.rotation * Math.PI / 180);
ctx.translate(-bbcShape302.around.x, -bbcShape302.around.y);
ctx.beginPath();
ctx.arc(bbcShape302.point.x, bbcShape302.point.y, bbcShape302.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 81, 142)';

ctx.save();
ctx.translate(bbcShape303.around.x, bbcShape303.around.y);
ctx.rotate(bbcShape303.rotation * Math.PI / 180);
ctx.translate(-bbcShape303.around.x, -bbcShape303.around.y);
ctx.beginPath();
ctx.arc(bbcShape303.point.x, bbcShape303.point.y, bbcShape303.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 0, 189)';

ctx.save();
ctx.translate(bbcShape304.around.x, bbcShape304.around.y);
ctx.rotate(bbcShape304.rotation * Math.PI / 180);
ctx.translate(-bbcShape304.around.x, -bbcShape304.around.y);
ctx.beginPath();
ctx.arc(bbcShape304.point.x, bbcShape304.point.y, bbcShape304.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(193, 51, 237)';

ctx.save();
ctx.translate(bbcShape305.around.x, bbcShape305.around.y);
ctx.rotate(bbcShape305.rotation * Math.PI / 180);
ctx.translate(-bbcShape305.around.x, -bbcShape305.around.y);
ctx.beginPath();
ctx.arc(bbcShape305.point.x, bbcShape305.point.y, bbcShape305.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 83, 67)';

ctx.save();
ctx.translate(bbcShape306.around.x, bbcShape306.around.y);
ctx.rotate(bbcShape306.rotation * Math.PI / 180);
ctx.translate(-bbcShape306.around.x, -bbcShape306.around.y);
ctx.beginPath();
ctx.arc(bbcShape306.point.x, bbcShape306.point.y, bbcShape306.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 57, 147)';

ctx.save();
ctx.translate(bbcShape307.around.x, bbcShape307.around.y);
ctx.rotate(bbcShape307.rotation * Math.PI / 180);
ctx.translate(-bbcShape307.around.x, -bbcShape307.around.y);
ctx.beginPath();
ctx.arc(bbcShape307.point.x, bbcShape307.point.y, bbcShape307.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(203, 192, 247)';

ctx.save();
ctx.translate(bbcShape308.around.x, bbcShape308.around.y);
ctx.rotate(bbcShape308.rotation * Math.PI / 180);
ctx.translate(-bbcShape308.around.x, -bbcShape308.around.y);
ctx.beginPath();
ctx.arc(bbcShape308.point.x, bbcShape308.point.y, bbcShape308.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(56, 33, 52)';

ctx.save();
ctx.translate(bbcShape309.around.x, bbcShape309.around.y);
ctx.rotate(bbcShape309.rotation * Math.PI / 180);
ctx.translate(-bbcShape309.around.x, -bbcShape309.around.y);
ctx.beginPath();
ctx.arc(bbcShape309.point.x, bbcShape309.point.y, bbcShape309.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(91, 143, 211)';

ctx.save();
ctx.translate(bbcShape310.around.x, bbcShape310.around.y);
ctx.rotate(bbcShape310.rotation * Math.PI / 180);
ctx.translate(-bbcShape310.around.x, -bbcShape310.around.y);
ctx.beginPath();
ctx.arc(bbcShape310.point.x, bbcShape310.point.y, bbcShape310.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(32, 237, 6)';

ctx.save();
ctx.translate(bbcShape311.around.x, bbcShape311.around.y);
ctx.rotate(bbcShape311.rotation * Math.PI / 180);
ctx.translate(-bbcShape311.around.x, -bbcShape311.around.y);
ctx.beginPath();
ctx.arc(bbcShape311.point.x, bbcShape311.point.y, bbcShape311.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 223, 78)';

ctx.save();
ctx.translate(bbcShape312.around.x, bbcShape312.around.y);
ctx.rotate(bbcShape312.rotation * Math.PI / 180);
ctx.translate(-bbcShape312.around.x, -bbcShape312.around.y);
ctx.beginPath();
ctx.arc(bbcShape312.point.x, bbcShape312.point.y, bbcShape312.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(104, 87, 168)';

ctx.save();
ctx.translate(bbcShape313.around.x, bbcShape313.around.y);
ctx.rotate(bbcShape313.rotation * Math.PI / 180);
ctx.translate(-bbcShape313.around.x, -bbcShape313.around.y);
ctx.beginPath();
ctx.arc(bbcShape313.point.x, bbcShape313.point.y, bbcShape313.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(49, 236, 120)';

ctx.save();
ctx.translate(bbcShape314.around.x, bbcShape314.around.y);
ctx.rotate(bbcShape314.rotation * Math.PI / 180);
ctx.translate(-bbcShape314.around.x, -bbcShape314.around.y);
ctx.beginPath();
ctx.arc(bbcShape314.point.x, bbcShape314.point.y, bbcShape314.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(154, 189, 163)';

ctx.save();
ctx.translate(bbcShape315.around.x, bbcShape315.around.y);
ctx.rotate(bbcShape315.rotation * Math.PI / 180);
ctx.translate(-bbcShape315.around.x, -bbcShape315.around.y);
ctx.beginPath();
ctx.arc(bbcShape315.point.x, bbcShape315.point.y, bbcShape315.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(231, 95, 222)';

ctx.save();
ctx.translate(bbcShape316.around.x, bbcShape316.around.y);
ctx.rotate(bbcShape316.rotation * Math.PI / 180);
ctx.translate(-bbcShape316.around.x, -bbcShape316.around.y);
ctx.beginPath();
ctx.arc(bbcShape316.point.x, bbcShape316.point.y, bbcShape316.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(59, 103, 201)';

ctx.save();
ctx.translate(bbcShape317.around.x, bbcShape317.around.y);
ctx.rotate(bbcShape317.rotation * Math.PI / 180);
ctx.translate(-bbcShape317.around.x, -bbcShape317.around.y);
ctx.beginPath();
ctx.arc(bbcShape317.point.x, bbcShape317.point.y, bbcShape317.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 21, 3)';

ctx.save();
ctx.translate(bbcShape318.around.x, bbcShape318.around.y);
ctx.rotate(bbcShape318.rotation * Math.PI / 180);
ctx.translate(-bbcShape318.around.x, -bbcShape318.around.y);
ctx.beginPath();
ctx.arc(bbcShape318.point.x, bbcShape318.point.y, bbcShape318.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(1, 84, 198)';

ctx.save();
ctx.translate(bbcShape319.around.x, bbcShape319.around.y);
ctx.rotate(bbcShape319.rotation * Math.PI / 180);
ctx.translate(-bbcShape319.around.x, -bbcShape319.around.y);
ctx.beginPath();
ctx.arc(bbcShape319.point.x, bbcShape319.point.y, bbcShape319.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(235, 66, 78)';

ctx.save();
ctx.translate(bbcShape320.around.x, bbcShape320.around.y);
ctx.rotate(bbcShape320.rotation * Math.PI / 180);
ctx.translate(-bbcShape320.around.x, -bbcShape320.around.y);
ctx.beginPath();
ctx.arc(bbcShape320.point.x, bbcShape320.point.y, bbcShape320.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(195, 1, 211)';

ctx.save();
ctx.translate(bbcShape321.around.x, bbcShape321.around.y);
ctx.rotate(bbcShape321.rotation * Math.PI / 180);
ctx.translate(-bbcShape321.around.x, -bbcShape321.around.y);
ctx.beginPath();
ctx.arc(bbcShape321.point.x, bbcShape321.point.y, bbcShape321.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(191, 139, 179)';

ctx.save();
ctx.translate(bbcShape322.around.x, bbcShape322.around.y);
ctx.rotate(bbcShape322.rotation * Math.PI / 180);
ctx.translate(-bbcShape322.around.x, -bbcShape322.around.y);
ctx.beginPath();
ctx.arc(bbcShape322.point.x, bbcShape322.point.y, bbcShape322.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(190, 7, 155)';

ctx.save();
ctx.translate(bbcShape323.around.x, bbcShape323.around.y);
ctx.rotate(bbcShape323.rotation * Math.PI / 180);
ctx.translate(-bbcShape323.around.x, -bbcShape323.around.y);
ctx.beginPath();
ctx.arc(bbcShape323.point.x, bbcShape323.point.y, bbcShape323.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(175, 250, 186)';

ctx.save();
ctx.translate(bbcShape324.around.x, bbcShape324.around.y);
ctx.rotate(bbcShape324.rotation * Math.PI / 180);
ctx.translate(-bbcShape324.around.x, -bbcShape324.around.y);
ctx.beginPath();
ctx.arc(bbcShape324.point.x, bbcShape324.point.y, bbcShape324.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(136, 116, 23)';

ctx.save();
ctx.translate(bbcShape325.around.x, bbcShape325.around.y);
ctx.rotate(bbcShape325.rotation * Math.PI / 180);
ctx.translate(-bbcShape325.around.x, -bbcShape325.around.y);
ctx.beginPath();
ctx.arc(bbcShape325.point.x, bbcShape325.point.y, bbcShape325.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(76, 170, 74)';

ctx.save();
ctx.translate(bbcShape326.around.x, bbcShape326.around.y);
ctx.rotate(bbcShape326.rotation * Math.PI / 180);
ctx.translate(-bbcShape326.around.x, -bbcShape326.around.y);
ctx.beginPath();
ctx.arc(bbcShape326.point.x, bbcShape326.point.y, bbcShape326.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(8, 91, 86)';

ctx.save();
ctx.translate(bbcShape327.around.x, bbcShape327.around.y);
ctx.rotate(bbcShape327.rotation * Math.PI / 180);
ctx.translate(-bbcShape327.around.x, -bbcShape327.around.y);
ctx.beginPath();
ctx.arc(bbcShape327.point.x, bbcShape327.point.y, bbcShape327.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(4, 107, 98)';

ctx.save();
ctx.translate(bbcShape328.around.x, bbcShape328.around.y);
ctx.rotate(bbcShape328.rotation * Math.PI / 180);
ctx.translate(-bbcShape328.around.x, -bbcShape328.around.y);
ctx.beginPath();
ctx.arc(bbcShape328.point.x, bbcShape328.point.y, bbcShape328.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(168, 150, 203)';

ctx.save();
ctx.translate(bbcShape329.around.x, bbcShape329.around.y);
ctx.rotate(bbcShape329.rotation * Math.PI / 180);
ctx.translate(-bbcShape329.around.x, -bbcShape329.around.y);
ctx.beginPath();
ctx.arc(bbcShape329.point.x, bbcShape329.point.y, bbcShape329.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(144, 32, 169)';

ctx.save();
ctx.translate(bbcShape330.around.x, bbcShape330.around.y);
ctx.rotate(bbcShape330.rotation * Math.PI / 180);
ctx.translate(-bbcShape330.around.x, -bbcShape330.around.y);
ctx.beginPath();
ctx.arc(bbcShape330.point.x, bbcShape330.point.y, bbcShape330.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 114, 32)';

ctx.save();
ctx.translate(bbcShape331.around.x, bbcShape331.around.y);
ctx.rotate(bbcShape331.rotation * Math.PI / 180);
ctx.translate(-bbcShape331.around.x, -bbcShape331.around.y);
ctx.beginPath();
ctx.arc(bbcShape331.point.x, bbcShape331.point.y, bbcShape331.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(177, 174, 203)';

ctx.save();
ctx.translate(bbcShape332.around.x, bbcShape332.around.y);
ctx.rotate(bbcShape332.rotation * Math.PI / 180);
ctx.translate(-bbcShape332.around.x, -bbcShape332.around.y);
ctx.beginPath();
ctx.arc(bbcShape332.point.x, bbcShape332.point.y, bbcShape332.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(141, 189, 124)';

ctx.save();
ctx.translate(bbcShape333.around.x, bbcShape333.around.y);
ctx.rotate(bbcShape333.rotation * Math.PI / 180);
ctx.translate(-bbcShape333.around.x, -bbcShape333.around.y);
ctx.beginPath();
ctx.arc(bbcShape333.point.x, bbcShape333.point.y, bbcShape333.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(69, 255, 175)';

ctx.save();
ctx.translate(bbcShape334.around.x, bbcShape334.around.y);
ctx.rotate(bbcShape334.rotation * Math.PI / 180);
ctx.translate(-bbcShape334.around.x, -bbcShape334.around.y);
ctx.beginPath();
ctx.arc(bbcShape334.point.x, bbcShape334.point.y, bbcShape334.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(130, 63, 217)';

ctx.save();
ctx.translate(bbcShape335.around.x, bbcShape335.around.y);
ctx.rotate(bbcShape335.rotation * Math.PI / 180);
ctx.translate(-bbcShape335.around.x, -bbcShape335.around.y);
ctx.beginPath();
ctx.arc(bbcShape335.point.x, bbcShape335.point.y, bbcShape335.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255, 145, 105)';

ctx.save();
ctx.translate(bbcShape336.around.x, bbcShape336.around.y);
ctx.rotate(bbcShape336.rotation * Math.PI / 180);
ctx.translate(-bbcShape336.around.x, -bbcShape336.around.y);
ctx.beginPath();
ctx.arc(bbcShape336.point.x, bbcShape336.point.y, bbcShape336.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(178, 173, 157)';

ctx.save();
ctx.translate(bbcShape337.around.x, bbcShape337.around.y);
ctx.rotate(bbcShape337.rotation * Math.PI / 180);
ctx.translate(-bbcShape337.around.x, -bbcShape337.around.y);
ctx.beginPath();
ctx.arc(bbcShape337.point.x, bbcShape337.point.y, bbcShape337.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(27, 52, 142)';

ctx.save();
ctx.translate(bbcShape338.around.x, bbcShape338.around.y);
ctx.rotate(bbcShape338.rotation * Math.PI / 180);
ctx.translate(-bbcShape338.around.x, -bbcShape338.around.y);
ctx.beginPath();
ctx.arc(bbcShape338.point.x, bbcShape338.point.y, bbcShape338.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(123, 10, 72)';

ctx.save();
ctx.translate(bbcShape339.around.x, bbcShape339.around.y);
ctx.rotate(bbcShape339.rotation * Math.PI / 180);
ctx.translate(-bbcShape339.around.x, -bbcShape339.around.y);
ctx.beginPath();
ctx.arc(bbcShape339.point.x, bbcShape339.point.y, bbcShape339.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(106, 192, 164)';

ctx.save();
ctx.translate(bbcShape340.around.x, bbcShape340.around.y);
ctx.rotate(bbcShape340.rotation * Math.PI / 180);
ctx.translate(-bbcShape340.around.x, -bbcShape340.around.y);
ctx.beginPath();
ctx.arc(bbcShape340.point.x, bbcShape340.point.y, bbcShape340.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 253, 149)';

ctx.save();
ctx.translate(bbcShape341.around.x, bbcShape341.around.y);
ctx.rotate(bbcShape341.rotation * Math.PI / 180);
ctx.translate(-bbcShape341.around.x, -bbcShape341.around.y);
ctx.beginPath();
ctx.arc(bbcShape341.point.x, bbcShape341.point.y, bbcShape341.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125, 89, 93)';

ctx.save();
ctx.translate(bbcShape342.around.x, bbcShape342.around.y);
ctx.rotate(bbcShape342.rotation * Math.PI / 180);
ctx.translate(-bbcShape342.around.x, -bbcShape342.around.y);
ctx.beginPath();
ctx.arc(bbcShape342.point.x, bbcShape342.point.y, bbcShape342.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 254, 175)';

ctx.save();
ctx.translate(bbcShape343.around.x, bbcShape343.around.y);
ctx.rotate(bbcShape343.rotation * Math.PI / 180);
ctx.translate(-bbcShape343.around.x, -bbcShape343.around.y);
ctx.beginPath();
ctx.arc(bbcShape343.point.x, bbcShape343.point.y, bbcShape343.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 166, 181)';

ctx.save();
ctx.translate(bbcShape344.around.x, bbcShape344.around.y);
ctx.rotate(bbcShape344.rotation * Math.PI / 180);
ctx.translate(-bbcShape344.around.x, -bbcShape344.around.y);
ctx.beginPath();
ctx.arc(bbcShape344.point.x, bbcShape344.point.y, bbcShape344.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50, 1, 229)';

ctx.save();
ctx.translate(bbcShape345.around.x, bbcShape345.around.y);
ctx.rotate(bbcShape345.rotation * Math.PI / 180);
ctx.translate(-bbcShape345.around.x, -bbcShape345.around.y);
ctx.beginPath();
ctx.arc(bbcShape345.point.x, bbcShape345.point.y, bbcShape345.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 102, 134)';

ctx.save();
ctx.translate(bbcShape346.around.x, bbcShape346.around.y);
ctx.rotate(bbcShape346.rotation * Math.PI / 180);
ctx.translate(-bbcShape346.around.x, -bbcShape346.around.y);
ctx.beginPath();
ctx.arc(bbcShape346.point.x, bbcShape346.point.y, bbcShape346.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(182, 4, 34)';

ctx.save();
ctx.translate(bbcShape347.around.x, bbcShape347.around.y);
ctx.rotate(bbcShape347.rotation * Math.PI / 180);
ctx.translate(-bbcShape347.around.x, -bbcShape347.around.y);
ctx.beginPath();
ctx.arc(bbcShape347.point.x, bbcShape347.point.y, bbcShape347.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(147, 196, 29)';

ctx.save();
ctx.translate(bbcShape348.around.x, bbcShape348.around.y);
ctx.rotate(bbcShape348.rotation * Math.PI / 180);
ctx.translate(-bbcShape348.around.x, -bbcShape348.around.y);
ctx.beginPath();
ctx.arc(bbcShape348.point.x, bbcShape348.point.y, bbcShape348.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 29, 109)';

ctx.save();
ctx.translate(bbcShape349.around.x, bbcShape349.around.y);
ctx.rotate(bbcShape349.rotation * Math.PI / 180);
ctx.translate(-bbcShape349.around.x, -bbcShape349.around.y);
ctx.beginPath();
ctx.arc(bbcShape349.point.x, bbcShape349.point.y, bbcShape349.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(247, 63, 136)';

ctx.save();
ctx.translate(bbcShape350.around.x, bbcShape350.around.y);
ctx.rotate(bbcShape350.rotation * Math.PI / 180);
ctx.translate(-bbcShape350.around.x, -bbcShape350.around.y);
ctx.beginPath();
ctx.arc(bbcShape350.point.x, bbcShape350.point.y, bbcShape350.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(18, 154, 56)';

ctx.save();
ctx.translate(bbcShape351.around.x, bbcShape351.around.y);
ctx.rotate(bbcShape351.rotation * Math.PI / 180);
ctx.translate(-bbcShape351.around.x, -bbcShape351.around.y);
ctx.beginPath();
ctx.arc(bbcShape351.point.x, bbcShape351.point.y, bbcShape351.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(78, 29, 190)';

ctx.save();
ctx.translate(bbcShape352.around.x, bbcShape352.around.y);
ctx.rotate(bbcShape352.rotation * Math.PI / 180);
ctx.translate(-bbcShape352.around.x, -bbcShape352.around.y);
ctx.beginPath();
ctx.arc(bbcShape352.point.x, bbcShape352.point.y, bbcShape352.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(35, 118, 142)';

ctx.save();
ctx.translate(bbcShape353.around.x, bbcShape353.around.y);
ctx.rotate(bbcShape353.rotation * Math.PI / 180);
ctx.translate(-bbcShape353.around.x, -bbcShape353.around.y);
ctx.beginPath();
ctx.arc(bbcShape353.point.x, bbcShape353.point.y, bbcShape353.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(209, 215, 251)';

ctx.save();
ctx.translate(bbcShape354.around.x, bbcShape354.around.y);
ctx.rotate(bbcShape354.rotation * Math.PI / 180);
ctx.translate(-bbcShape354.around.x, -bbcShape354.around.y);
ctx.beginPath();
ctx.arc(bbcShape354.point.x, bbcShape354.point.y, bbcShape354.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0, 199, 45)';

ctx.save();
ctx.translate(bbcShape355.around.x, bbcShape355.around.y);
ctx.rotate(bbcShape355.rotation * Math.PI / 180);
ctx.translate(-bbcShape355.around.x, -bbcShape355.around.y);
ctx.beginPath();
ctx.arc(bbcShape355.point.x, bbcShape355.point.y, bbcShape355.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(228, 23, 191)';

ctx.save();
ctx.translate(bbcShape356.around.x, bbcShape356.around.y);
ctx.rotate(bbcShape356.rotation * Math.PI / 180);
ctx.translate(-bbcShape356.around.x, -bbcShape356.around.y);
ctx.beginPath();
ctx.arc(bbcShape356.point.x, bbcShape356.point.y, bbcShape356.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 75, 109)';

ctx.save();
ctx.translate(bbcShape357.around.x, bbcShape357.around.y);
ctx.rotate(bbcShape357.rotation * Math.PI / 180);
ctx.translate(-bbcShape357.around.x, -bbcShape357.around.y);
ctx.beginPath();
ctx.arc(bbcShape357.point.x, bbcShape357.point.y, bbcShape357.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 198, 249)';

ctx.save();
ctx.translate(bbcShape358.around.x, bbcShape358.around.y);
ctx.rotate(bbcShape358.rotation * Math.PI / 180);
ctx.translate(-bbcShape358.around.x, -bbcShape358.around.y);
ctx.beginPath();
ctx.arc(bbcShape358.point.x, bbcShape358.point.y, bbcShape358.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250, 9, 244)';

ctx.save();
ctx.translate(bbcShape359.around.x, bbcShape359.around.y);
ctx.rotate(bbcShape359.rotation * Math.PI / 180);
ctx.translate(-bbcShape359.around.x, -bbcShape359.around.y);
ctx.beginPath();
ctx.arc(bbcShape359.point.x, bbcShape359.point.y, bbcShape359.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(137, 29, 73)';

ctx.save();
ctx.translate(bbcShape360.around.x, bbcShape360.around.y);
ctx.rotate(bbcShape360.rotation * Math.PI / 180);
ctx.translate(-bbcShape360.around.x, -bbcShape360.around.y);
ctx.beginPath();
ctx.arc(bbcShape360.point.x, bbcShape360.point.y, bbcShape360.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(181, 1, 153)';

ctx.save();
ctx.translate(bbcShape361.around.x, bbcShape361.around.y);
ctx.rotate(bbcShape361.rotation * Math.PI / 180);
ctx.translate(-bbcShape361.around.x, -bbcShape361.around.y);
ctx.beginPath();
ctx.arc(bbcShape361.point.x, bbcShape361.point.y, bbcShape361.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(55, 37, 189)';

ctx.save();
ctx.translate(bbcShape362.around.x, bbcShape362.around.y);
ctx.rotate(bbcShape362.rotation * Math.PI / 180);
ctx.translate(-bbcShape362.around.x, -bbcShape362.around.y);
ctx.beginPath();
ctx.arc(bbcShape362.point.x, bbcShape362.point.y, bbcShape362.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 241, 98)';

ctx.save();
ctx.translate(bbcShape363.around.x, bbcShape363.around.y);
ctx.rotate(bbcShape363.rotation * Math.PI / 180);
ctx.translate(-bbcShape363.around.x, -bbcShape363.around.y);
ctx.beginPath();
ctx.arc(bbcShape363.point.x, bbcShape363.point.y, bbcShape363.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 148, 227)';

ctx.save();
ctx.translate(bbcShape364.around.x, bbcShape364.around.y);
ctx.rotate(bbcShape364.rotation * Math.PI / 180);
ctx.translate(-bbcShape364.around.x, -bbcShape364.around.y);
ctx.beginPath();
ctx.arc(bbcShape364.point.x, bbcShape364.point.y, bbcShape364.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 220, 155)';

ctx.save();
ctx.translate(bbcShape365.around.x, bbcShape365.around.y);
ctx.rotate(bbcShape365.rotation * Math.PI / 180);
ctx.translate(-bbcShape365.around.x, -bbcShape365.around.y);
ctx.beginPath();
ctx.arc(bbcShape365.point.x, bbcShape365.point.y, bbcShape365.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 121, 7)';

ctx.save();
ctx.translate(bbcShape366.around.x, bbcShape366.around.y);
ctx.rotate(bbcShape366.rotation * Math.PI / 180);
ctx.translate(-bbcShape366.around.x, -bbcShape366.around.y);
ctx.beginPath();
ctx.arc(bbcShape366.point.x, bbcShape366.point.y, bbcShape366.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(131, 152, 46)';

ctx.save();
ctx.translate(bbcShape367.around.x, bbcShape367.around.y);
ctx.rotate(bbcShape367.rotation * Math.PI / 180);
ctx.translate(-bbcShape367.around.x, -bbcShape367.around.y);
ctx.beginPath();
ctx.arc(bbcShape367.point.x, bbcShape367.point.y, bbcShape367.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(127, 115, 3)';

ctx.save();
ctx.translate(bbcShape368.around.x, bbcShape368.around.y);
ctx.rotate(bbcShape368.rotation * Math.PI / 180);
ctx.translate(-bbcShape368.around.x, -bbcShape368.around.y);
ctx.beginPath();
ctx.arc(bbcShape368.point.x, bbcShape368.point.y, bbcShape368.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(238, 239, 54)';

ctx.save();
ctx.translate(bbcShape369.around.x, bbcShape369.around.y);
ctx.rotate(bbcShape369.rotation * Math.PI / 180);
ctx.translate(-bbcShape369.around.x, -bbcShape369.around.y);
ctx.beginPath();
ctx.arc(bbcShape369.point.x, bbcShape369.point.y, bbcShape369.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(197, 238, 0)';

ctx.save();
ctx.translate(bbcShape370.around.x, bbcShape370.around.y);
ctx.rotate(bbcShape370.rotation * Math.PI / 180);
ctx.translate(-bbcShape370.around.x, -bbcShape370.around.y);
ctx.beginPath();
ctx.arc(bbcShape370.point.x, bbcShape370.point.y, bbcShape370.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 143, 179)';

ctx.save();
ctx.translate(bbcShape371.around.x, bbcShape371.around.y);
ctx.rotate(bbcShape371.rotation * Math.PI / 180);
ctx.translate(-bbcShape371.around.x, -bbcShape371.around.y);
ctx.beginPath();
ctx.arc(bbcShape371.point.x, bbcShape371.point.y, bbcShape371.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(105, 96, 155)';

ctx.save();
ctx.translate(bbcShape372.around.x, bbcShape372.around.y);
ctx.rotate(bbcShape372.rotation * Math.PI / 180);
ctx.translate(-bbcShape372.around.x, -bbcShape372.around.y);
ctx.beginPath();
ctx.arc(bbcShape372.point.x, bbcShape372.point.y, bbcShape372.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(147, 149, 233)';

ctx.save();
ctx.translate(bbcShape373.around.x, bbcShape373.around.y);
ctx.rotate(bbcShape373.rotation * Math.PI / 180);
ctx.translate(-bbcShape373.around.x, -bbcShape373.around.y);
ctx.beginPath();
ctx.arc(bbcShape373.point.x, bbcShape373.point.y, bbcShape373.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(185, 5, 90)';

ctx.save();
ctx.translate(bbcShape374.around.x, bbcShape374.around.y);
ctx.rotate(bbcShape374.rotation * Math.PI / 180);
ctx.translate(-bbcShape374.around.x, -bbcShape374.around.y);
ctx.beginPath();
ctx.arc(bbcShape374.point.x, bbcShape374.point.y, bbcShape374.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(38, 204, 4)';

ctx.save();
ctx.translate(bbcShape375.around.x, bbcShape375.around.y);
ctx.rotate(bbcShape375.rotation * Math.PI / 180);
ctx.translate(-bbcShape375.around.x, -bbcShape375.around.y);
ctx.beginPath();
ctx.arc(bbcShape375.point.x, bbcShape375.point.y, bbcShape375.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(61, 223, 81)';

ctx.save();
ctx.translate(bbcShape376.around.x, bbcShape376.around.y);
ctx.rotate(bbcShape376.rotation * Math.PI / 180);
ctx.translate(-bbcShape376.around.x, -bbcShape376.around.y);
ctx.beginPath();
ctx.arc(bbcShape376.point.x, bbcShape376.point.y, bbcShape376.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 243, 8)';

ctx.save();
ctx.translate(bbcShape377.around.x, bbcShape377.around.y);
ctx.rotate(bbcShape377.rotation * Math.PI / 180);
ctx.translate(-bbcShape377.around.x, -bbcShape377.around.y);
ctx.beginPath();
ctx.arc(bbcShape377.point.x, bbcShape377.point.y, bbcShape377.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(104, 151, 108)';

ctx.save();
ctx.translate(bbcShape378.around.x, bbcShape378.around.y);
ctx.rotate(bbcShape378.rotation * Math.PI / 180);
ctx.translate(-bbcShape378.around.x, -bbcShape378.around.y);
ctx.beginPath();
ctx.arc(bbcShape378.point.x, bbcShape378.point.y, bbcShape378.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(166, 131, 146)';

ctx.save();
ctx.translate(bbcShape379.around.x, bbcShape379.around.y);
ctx.rotate(bbcShape379.rotation * Math.PI / 180);
ctx.translate(-bbcShape379.around.x, -bbcShape379.around.y);
ctx.beginPath();
ctx.arc(bbcShape379.point.x, bbcShape379.point.y, bbcShape379.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(33, 85, 177)';

ctx.save();
ctx.translate(bbcShape380.around.x, bbcShape380.around.y);
ctx.rotate(bbcShape380.rotation * Math.PI / 180);
ctx.translate(-bbcShape380.around.x, -bbcShape380.around.y);
ctx.beginPath();
ctx.arc(bbcShape380.point.x, bbcShape380.point.y, bbcShape380.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(227, 124, 100)';

ctx.save();
ctx.translate(bbcShape381.around.x, bbcShape381.around.y);
ctx.rotate(bbcShape381.rotation * Math.PI / 180);
ctx.translate(-bbcShape381.around.x, -bbcShape381.around.y);
ctx.beginPath();
ctx.arc(bbcShape381.point.x, bbcShape381.point.y, bbcShape381.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(67, 40, 22)';

ctx.save();
ctx.translate(bbcShape382.around.x, bbcShape382.around.y);
ctx.rotate(bbcShape382.rotation * Math.PI / 180);
ctx.translate(-bbcShape382.around.x, -bbcShape382.around.y);
ctx.beginPath();
ctx.arc(bbcShape382.point.x, bbcShape382.point.y, bbcShape382.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250, 175, 132)';

ctx.save();
ctx.translate(bbcShape383.around.x, bbcShape383.around.y);
ctx.rotate(bbcShape383.rotation * Math.PI / 180);
ctx.translate(-bbcShape383.around.x, -bbcShape383.around.y);
ctx.beginPath();
ctx.arc(bbcShape383.point.x, bbcShape383.point.y, bbcShape383.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(27, 104, 163)';

ctx.save();
ctx.translate(bbcShape384.around.x, bbcShape384.around.y);
ctx.rotate(bbcShape384.rotation * Math.PI / 180);
ctx.translate(-bbcShape384.around.x, -bbcShape384.around.y);
ctx.beginPath();
ctx.arc(bbcShape384.point.x, bbcShape384.point.y, bbcShape384.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(44, 201, 129)';

ctx.save();
ctx.translate(bbcShape385.around.x, bbcShape385.around.y);
ctx.rotate(bbcShape385.rotation * Math.PI / 180);
ctx.translate(-bbcShape385.around.x, -bbcShape385.around.y);
ctx.beginPath();
ctx.arc(bbcShape385.point.x, bbcShape385.point.y, bbcShape385.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(227, 55, 53)';

ctx.save();
ctx.translate(bbcShape386.around.x, bbcShape386.around.y);
ctx.rotate(bbcShape386.rotation * Math.PI / 180);
ctx.translate(-bbcShape386.around.x, -bbcShape386.around.y);
ctx.beginPath();
ctx.arc(bbcShape386.point.x, bbcShape386.point.y, bbcShape386.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 84, 244)';

ctx.save();
ctx.translate(bbcShape387.around.x, bbcShape387.around.y);
ctx.rotate(bbcShape387.rotation * Math.PI / 180);
ctx.translate(-bbcShape387.around.x, -bbcShape387.around.y);
ctx.beginPath();
ctx.arc(bbcShape387.point.x, bbcShape387.point.y, bbcShape387.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(147, 13, 41)';

ctx.save();
ctx.translate(bbcShape388.around.x, bbcShape388.around.y);
ctx.rotate(bbcShape388.rotation * Math.PI / 180);
ctx.translate(-bbcShape388.around.x, -bbcShape388.around.y);
ctx.beginPath();
ctx.arc(bbcShape388.point.x, bbcShape388.point.y, bbcShape388.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 36, 100)';

ctx.save();
ctx.translate(bbcShape389.around.x, bbcShape389.around.y);
ctx.rotate(bbcShape389.rotation * Math.PI / 180);
ctx.translate(-bbcShape389.around.x, -bbcShape389.around.y);
ctx.beginPath();
ctx.arc(bbcShape389.point.x, bbcShape389.point.y, bbcShape389.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(158, 84, 228)';

ctx.save();
ctx.translate(bbcShape390.around.x, bbcShape390.around.y);
ctx.rotate(bbcShape390.rotation * Math.PI / 180);
ctx.translate(-bbcShape390.around.x, -bbcShape390.around.y);
ctx.beginPath();
ctx.arc(bbcShape390.point.x, bbcShape390.point.y, bbcShape390.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(195, 34, 50)';

ctx.save();
ctx.translate(bbcShape391.around.x, bbcShape391.around.y);
ctx.rotate(bbcShape391.rotation * Math.PI / 180);
ctx.translate(-bbcShape391.around.x, -bbcShape391.around.y);
ctx.beginPath();
ctx.arc(bbcShape391.point.x, bbcShape391.point.y, bbcShape391.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(183, 76, 22)';

ctx.save();
ctx.translate(bbcShape392.around.x, bbcShape392.around.y);
ctx.rotate(bbcShape392.rotation * Math.PI / 180);
ctx.translate(-bbcShape392.around.x, -bbcShape392.around.y);
ctx.beginPath();
ctx.arc(bbcShape392.point.x, bbcShape392.point.y, bbcShape392.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(228, 97, 79)';

ctx.save();
ctx.translate(bbcShape393.around.x, bbcShape393.around.y);
ctx.rotate(bbcShape393.rotation * Math.PI / 180);
ctx.translate(-bbcShape393.around.x, -bbcShape393.around.y);
ctx.beginPath();
ctx.arc(bbcShape393.point.x, bbcShape393.point.y, bbcShape393.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 95, 203)';

ctx.save();
ctx.translate(bbcShape394.around.x, bbcShape394.around.y);
ctx.rotate(bbcShape394.rotation * Math.PI / 180);
ctx.translate(-bbcShape394.around.x, -bbcShape394.around.y);
ctx.beginPath();
ctx.arc(bbcShape394.point.x, bbcShape394.point.y, bbcShape394.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 31, 0)';

ctx.save();
ctx.translate(bbcShape395.around.x, bbcShape395.around.y);
ctx.rotate(bbcShape395.rotation * Math.PI / 180);
ctx.translate(-bbcShape395.around.x, -bbcShape395.around.y);
ctx.beginPath();
ctx.arc(bbcShape395.point.x, bbcShape395.point.y, bbcShape395.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(246, 134, 191)';

ctx.save();
ctx.translate(bbcShape396.around.x, bbcShape396.around.y);
ctx.rotate(bbcShape396.rotation * Math.PI / 180);
ctx.translate(-bbcShape396.around.x, -bbcShape396.around.y);
ctx.beginPath();
ctx.arc(bbcShape396.point.x, bbcShape396.point.y, bbcShape396.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 88, 64)';

ctx.save();
ctx.translate(bbcShape397.around.x, bbcShape397.around.y);
ctx.rotate(bbcShape397.rotation * Math.PI / 180);
ctx.translate(-bbcShape397.around.x, -bbcShape397.around.y);
ctx.beginPath();
ctx.arc(bbcShape397.point.x, bbcShape397.point.y, bbcShape397.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 11, 215)';

ctx.save();
ctx.translate(bbcShape398.around.x, bbcShape398.around.y);
ctx.rotate(bbcShape398.rotation * Math.PI / 180);
ctx.translate(-bbcShape398.around.x, -bbcShape398.around.y);
ctx.beginPath();
ctx.arc(bbcShape398.point.x, bbcShape398.point.y, bbcShape398.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(230, 158, 83)';

ctx.save();
ctx.translate(bbcShape399.around.x, bbcShape399.around.y);
ctx.rotate(bbcShape399.rotation * Math.PI / 180);
ctx.translate(-bbcShape399.around.x, -bbcShape399.around.y);
ctx.beginPath();
ctx.arc(bbcShape399.point.x, bbcShape399.point.y, bbcShape399.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 75, 131)';

ctx.save();
ctx.translate(bbcShape400.around.x, bbcShape400.around.y);
ctx.rotate(bbcShape400.rotation * Math.PI / 180);
ctx.translate(-bbcShape400.around.x, -bbcShape400.around.y);
ctx.beginPath();
ctx.arc(bbcShape400.point.x, bbcShape400.point.y, bbcShape400.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(159, 66, 149)';

ctx.save();
ctx.translate(bbcShape401.around.x, bbcShape401.around.y);
ctx.rotate(bbcShape401.rotation * Math.PI / 180);
ctx.translate(-bbcShape401.around.x, -bbcShape401.around.y);
ctx.beginPath();
ctx.arc(bbcShape401.point.x, bbcShape401.point.y, bbcShape401.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(145, 6, 83)';

ctx.save();
ctx.translate(bbcShape402.around.x, bbcShape402.around.y);
ctx.rotate(bbcShape402.rotation * Math.PI / 180);
ctx.translate(-bbcShape402.around.x, -bbcShape402.around.y);
ctx.beginPath();
ctx.arc(bbcShape402.point.x, bbcShape402.point.y, bbcShape402.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 74, 234)';

ctx.save();
ctx.translate(bbcShape403.around.x, bbcShape403.around.y);
ctx.rotate(bbcShape403.rotation * Math.PI / 180);
ctx.translate(-bbcShape403.around.x, -bbcShape403.around.y);
ctx.beginPath();
ctx.arc(bbcShape403.point.x, bbcShape403.point.y, bbcShape403.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 102, 145)';

ctx.save();
ctx.translate(bbcShape404.around.x, bbcShape404.around.y);
ctx.rotate(bbcShape404.rotation * Math.PI / 180);
ctx.translate(-bbcShape404.around.x, -bbcShape404.around.y);
ctx.beginPath();
ctx.arc(bbcShape404.point.x, bbcShape404.point.y, bbcShape404.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(167, 48, 89)';

ctx.save();
ctx.translate(bbcShape405.around.x, bbcShape405.around.y);
ctx.rotate(bbcShape405.rotation * Math.PI / 180);
ctx.translate(-bbcShape405.around.x, -bbcShape405.around.y);
ctx.beginPath();
ctx.arc(bbcShape405.point.x, bbcShape405.point.y, bbcShape405.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(252, 160, 205)';

ctx.save();
ctx.translate(bbcShape406.around.x, bbcShape406.around.y);
ctx.rotate(bbcShape406.rotation * Math.PI / 180);
ctx.translate(-bbcShape406.around.x, -bbcShape406.around.y);
ctx.beginPath();
ctx.arc(bbcShape406.point.x, bbcShape406.point.y, bbcShape406.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(61, 58, 102)';

ctx.save();
ctx.translate(bbcShape407.around.x, bbcShape407.around.y);
ctx.rotate(bbcShape407.rotation * Math.PI / 180);
ctx.translate(-bbcShape407.around.x, -bbcShape407.around.y);
ctx.beginPath();
ctx.arc(bbcShape407.point.x, bbcShape407.point.y, bbcShape407.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(15, 200, 24)';

ctx.save();
ctx.translate(bbcShape408.around.x, bbcShape408.around.y);
ctx.rotate(bbcShape408.rotation * Math.PI / 180);
ctx.translate(-bbcShape408.around.x, -bbcShape408.around.y);
ctx.beginPath();
ctx.arc(bbcShape408.point.x, bbcShape408.point.y, bbcShape408.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(67, 216, 130)';

ctx.save();
ctx.translate(bbcShape409.around.x, bbcShape409.around.y);
ctx.rotate(bbcShape409.rotation * Math.PI / 180);
ctx.translate(-bbcShape409.around.x, -bbcShape409.around.y);
ctx.beginPath();
ctx.arc(bbcShape409.point.x, bbcShape409.point.y, bbcShape409.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(154, 155, 84)';

ctx.save();
ctx.translate(bbcShape410.around.x, bbcShape410.around.y);
ctx.rotate(bbcShape410.rotation * Math.PI / 180);
ctx.translate(-bbcShape410.around.x, -bbcShape410.around.y);
ctx.beginPath();
ctx.arc(bbcShape410.point.x, bbcShape410.point.y, bbcShape410.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(8, 165, 67)';

ctx.save();
ctx.translate(bbcShape411.around.x, bbcShape411.around.y);
ctx.rotate(bbcShape411.rotation * Math.PI / 180);
ctx.translate(-bbcShape411.around.x, -bbcShape411.around.y);
ctx.beginPath();
ctx.arc(bbcShape411.point.x, bbcShape411.point.y, bbcShape411.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 164, 9)';

ctx.save();
ctx.translate(bbcShape412.around.x, bbcShape412.around.y);
ctx.rotate(bbcShape412.rotation * Math.PI / 180);
ctx.translate(-bbcShape412.around.x, -bbcShape412.around.y);
ctx.beginPath();
ctx.arc(bbcShape412.point.x, bbcShape412.point.y, bbcShape412.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 79, 1)';

ctx.save();
ctx.translate(bbcShape413.around.x, bbcShape413.around.y);
ctx.rotate(bbcShape413.rotation * Math.PI / 180);
ctx.translate(-bbcShape413.around.x, -bbcShape413.around.y);
ctx.beginPath();
ctx.arc(bbcShape413.point.x, bbcShape413.point.y, bbcShape413.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(117, 134, 126)';

ctx.save();
ctx.translate(bbcShape414.around.x, bbcShape414.around.y);
ctx.rotate(bbcShape414.rotation * Math.PI / 180);
ctx.translate(-bbcShape414.around.x, -bbcShape414.around.y);
ctx.beginPath();
ctx.arc(bbcShape414.point.x, bbcShape414.point.y, bbcShape414.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(38, 1, 161)';

ctx.save();
ctx.translate(bbcShape415.around.x, bbcShape415.around.y);
ctx.rotate(bbcShape415.rotation * Math.PI / 180);
ctx.translate(-bbcShape415.around.x, -bbcShape415.around.y);
ctx.beginPath();
ctx.arc(bbcShape415.point.x, bbcShape415.point.y, bbcShape415.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(130, 93, 208)';

ctx.save();
ctx.translate(bbcShape416.around.x, bbcShape416.around.y);
ctx.rotate(bbcShape416.rotation * Math.PI / 180);
ctx.translate(-bbcShape416.around.x, -bbcShape416.around.y);
ctx.beginPath();
ctx.arc(bbcShape416.point.x, bbcShape416.point.y, bbcShape416.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 191, 88)';

ctx.save();
ctx.translate(bbcShape417.around.x, bbcShape417.around.y);
ctx.rotate(bbcShape417.rotation * Math.PI / 180);
ctx.translate(-bbcShape417.around.x, -bbcShape417.around.y);
ctx.beginPath();
ctx.arc(bbcShape417.point.x, bbcShape417.point.y, bbcShape417.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(38, 165, 164)';

ctx.save();
ctx.translate(bbcShape418.around.x, bbcShape418.around.y);
ctx.rotate(bbcShape418.rotation * Math.PI / 180);
ctx.translate(-bbcShape418.around.x, -bbcShape418.around.y);
ctx.beginPath();
ctx.arc(bbcShape418.point.x, bbcShape418.point.y, bbcShape418.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(98, 63, 200)';

ctx.save();
ctx.translate(bbcShape419.around.x, bbcShape419.around.y);
ctx.rotate(bbcShape419.rotation * Math.PI / 180);
ctx.translate(-bbcShape419.around.x, -bbcShape419.around.y);
ctx.beginPath();
ctx.arc(bbcShape419.point.x, bbcShape419.point.y, bbcShape419.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(181, 49, 234)';

ctx.save();
ctx.translate(bbcShape420.around.x, bbcShape420.around.y);
ctx.rotate(bbcShape420.rotation * Math.PI / 180);
ctx.translate(-bbcShape420.around.x, -bbcShape420.around.y);
ctx.beginPath();
ctx.arc(bbcShape420.point.x, bbcShape420.point.y, bbcShape420.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(133, 72, 91)';

ctx.save();
ctx.translate(bbcShape421.around.x, bbcShape421.around.y);
ctx.rotate(bbcShape421.rotation * Math.PI / 180);
ctx.translate(-bbcShape421.around.x, -bbcShape421.around.y);
ctx.beginPath();
ctx.arc(bbcShape421.point.x, bbcShape421.point.y, bbcShape421.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(249, 158, 94)';

ctx.save();
ctx.translate(bbcShape422.around.x, bbcShape422.around.y);
ctx.rotate(bbcShape422.rotation * Math.PI / 180);
ctx.translate(-bbcShape422.around.x, -bbcShape422.around.y);
ctx.beginPath();
ctx.arc(bbcShape422.point.x, bbcShape422.point.y, bbcShape422.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(83, 16, 176)';

ctx.save();
ctx.translate(bbcShape423.around.x, bbcShape423.around.y);
ctx.rotate(bbcShape423.rotation * Math.PI / 180);
ctx.translate(-bbcShape423.around.x, -bbcShape423.around.y);
ctx.beginPath();
ctx.arc(bbcShape423.point.x, bbcShape423.point.y, bbcShape423.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(209, 22, 158)';

ctx.save();
ctx.translate(bbcShape424.around.x, bbcShape424.around.y);
ctx.rotate(bbcShape424.rotation * Math.PI / 180);
ctx.translate(-bbcShape424.around.x, -bbcShape424.around.y);
ctx.beginPath();
ctx.arc(bbcShape424.point.x, bbcShape424.point.y, bbcShape424.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 176, 249)';

ctx.save();
ctx.translate(bbcShape425.around.x, bbcShape425.around.y);
ctx.rotate(bbcShape425.rotation * Math.PI / 180);
ctx.translate(-bbcShape425.around.x, -bbcShape425.around.y);
ctx.beginPath();
ctx.arc(bbcShape425.point.x, bbcShape425.point.y, bbcShape425.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(135, 65, 247)';

ctx.save();
ctx.translate(bbcShape426.around.x, bbcShape426.around.y);
ctx.rotate(bbcShape426.rotation * Math.PI / 180);
ctx.translate(-bbcShape426.around.x, -bbcShape426.around.y);
ctx.beginPath();
ctx.arc(bbcShape426.point.x, bbcShape426.point.y, bbcShape426.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(196, 55, 243)';

ctx.save();
ctx.translate(bbcShape427.around.x, bbcShape427.around.y);
ctx.rotate(bbcShape427.rotation * Math.PI / 180);
ctx.translate(-bbcShape427.around.x, -bbcShape427.around.y);
ctx.beginPath();
ctx.arc(bbcShape427.point.x, bbcShape427.point.y, bbcShape427.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(85, 138, 158)';

ctx.save();
ctx.translate(bbcShape428.around.x, bbcShape428.around.y);
ctx.rotate(bbcShape428.rotation * Math.PI / 180);
ctx.translate(-bbcShape428.around.x, -bbcShape428.around.y);
ctx.beginPath();
ctx.arc(bbcShape428.point.x, bbcShape428.point.y, bbcShape428.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(142, 75, 100)';

ctx.save();
ctx.translate(bbcShape429.around.x, bbcShape429.around.y);
ctx.rotate(bbcShape429.rotation * Math.PI / 180);
ctx.translate(-bbcShape429.around.x, -bbcShape429.around.y);
ctx.beginPath();
ctx.arc(bbcShape429.point.x, bbcShape429.point.y, bbcShape429.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(248, 96, 147)';

ctx.save();
ctx.translate(bbcShape430.around.x, bbcShape430.around.y);
ctx.rotate(bbcShape430.rotation * Math.PI / 180);
ctx.translate(-bbcShape430.around.x, -bbcShape430.around.y);
ctx.beginPath();
ctx.arc(bbcShape430.point.x, bbcShape430.point.y, bbcShape430.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(140, 123, 169)';

ctx.save();
ctx.translate(bbcShape431.around.x, bbcShape431.around.y);
ctx.rotate(bbcShape431.rotation * Math.PI / 180);
ctx.translate(-bbcShape431.around.x, -bbcShape431.around.y);
ctx.beginPath();
ctx.arc(bbcShape431.point.x, bbcShape431.point.y, bbcShape431.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(62, 94, 255)';

ctx.save();
ctx.translate(bbcShape432.around.x, bbcShape432.around.y);
ctx.rotate(bbcShape432.rotation * Math.PI / 180);
ctx.translate(-bbcShape432.around.x, -bbcShape432.around.y);
ctx.beginPath();
ctx.arc(bbcShape432.point.x, bbcShape432.point.y, bbcShape432.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(44, 198, 143)';

ctx.save();
ctx.translate(bbcShape433.around.x, bbcShape433.around.y);
ctx.rotate(bbcShape433.rotation * Math.PI / 180);
ctx.translate(-bbcShape433.around.x, -bbcShape433.around.y);
ctx.beginPath();
ctx.arc(bbcShape433.point.x, bbcShape433.point.y, bbcShape433.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(206, 3, 50)';

ctx.save();
ctx.translate(bbcShape434.around.x, bbcShape434.around.y);
ctx.rotate(bbcShape434.rotation * Math.PI / 180);
ctx.translate(-bbcShape434.around.x, -bbcShape434.around.y);
ctx.beginPath();
ctx.arc(bbcShape434.point.x, bbcShape434.point.y, bbcShape434.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 155, 34)';

ctx.save();
ctx.translate(bbcShape435.around.x, bbcShape435.around.y);
ctx.rotate(bbcShape435.rotation * Math.PI / 180);
ctx.translate(-bbcShape435.around.x, -bbcShape435.around.y);
ctx.beginPath();
ctx.arc(bbcShape435.point.x, bbcShape435.point.y, bbcShape435.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(231, 53, 181)';

ctx.save();
ctx.translate(bbcShape436.around.x, bbcShape436.around.y);
ctx.rotate(bbcShape436.rotation * Math.PI / 180);
ctx.translate(-bbcShape436.around.x, -bbcShape436.around.y);
ctx.beginPath();
ctx.arc(bbcShape436.point.x, bbcShape436.point.y, bbcShape436.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(9, 134, 0)';

ctx.save();
ctx.translate(bbcShape437.around.x, bbcShape437.around.y);
ctx.rotate(bbcShape437.rotation * Math.PI / 180);
ctx.translate(-bbcShape437.around.x, -bbcShape437.around.y);
ctx.beginPath();
ctx.arc(bbcShape437.point.x, bbcShape437.point.y, bbcShape437.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(203, 53, 110)';

ctx.save();
ctx.translate(bbcShape438.around.x, bbcShape438.around.y);
ctx.rotate(bbcShape438.rotation * Math.PI / 180);
ctx.translate(-bbcShape438.around.x, -bbcShape438.around.y);
ctx.beginPath();
ctx.arc(bbcShape438.point.x, bbcShape438.point.y, bbcShape438.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(119, 106, 41)';

ctx.save();
ctx.translate(bbcShape439.around.x, bbcShape439.around.y);
ctx.rotate(bbcShape439.rotation * Math.PI / 180);
ctx.translate(-bbcShape439.around.x, -bbcShape439.around.y);
ctx.beginPath();
ctx.arc(bbcShape439.point.x, bbcShape439.point.y, bbcShape439.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(38, 119, 226)';

ctx.save();
ctx.translate(bbcShape440.around.x, bbcShape440.around.y);
ctx.rotate(bbcShape440.rotation * Math.PI / 180);
ctx.translate(-bbcShape440.around.x, -bbcShape440.around.y);
ctx.beginPath();
ctx.arc(bbcShape440.point.x, bbcShape440.point.y, bbcShape440.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(244, 245, 49)';

ctx.save();
ctx.translate(bbcShape441.around.x, bbcShape441.around.y);
ctx.rotate(bbcShape441.rotation * Math.PI / 180);
ctx.translate(-bbcShape441.around.x, -bbcShape441.around.y);
ctx.beginPath();
ctx.arc(bbcShape441.point.x, bbcShape441.point.y, bbcShape441.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(130, 163, 153)';

ctx.save();
ctx.translate(bbcShape442.around.x, bbcShape442.around.y);
ctx.rotate(bbcShape442.rotation * Math.PI / 180);
ctx.translate(-bbcShape442.around.x, -bbcShape442.around.y);
ctx.beginPath();
ctx.arc(bbcShape442.point.x, bbcShape442.point.y, bbcShape442.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 166, 97)';

ctx.save();
ctx.translate(bbcShape443.around.x, bbcShape443.around.y);
ctx.rotate(bbcShape443.rotation * Math.PI / 180);
ctx.translate(-bbcShape443.around.x, -bbcShape443.around.y);
ctx.beginPath();
ctx.arc(bbcShape443.point.x, bbcShape443.point.y, bbcShape443.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 244, 251)';

ctx.save();
ctx.translate(bbcShape444.around.x, bbcShape444.around.y);
ctx.rotate(bbcShape444.rotation * Math.PI / 180);
ctx.translate(-bbcShape444.around.x, -bbcShape444.around.y);
ctx.beginPath();
ctx.arc(bbcShape444.point.x, bbcShape444.point.y, bbcShape444.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(67, 135, 208)';

ctx.save();
ctx.translate(bbcShape445.around.x, bbcShape445.around.y);
ctx.rotate(bbcShape445.rotation * Math.PI / 180);
ctx.translate(-bbcShape445.around.x, -bbcShape445.around.y);
ctx.beginPath();
ctx.arc(bbcShape445.point.x, bbcShape445.point.y, bbcShape445.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 45, 146)';

ctx.save();
ctx.translate(bbcShape446.around.x, bbcShape446.around.y);
ctx.rotate(bbcShape446.rotation * Math.PI / 180);
ctx.translate(-bbcShape446.around.x, -bbcShape446.around.y);
ctx.beginPath();
ctx.arc(bbcShape446.point.x, bbcShape446.point.y, bbcShape446.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 40, 104)';

ctx.save();
ctx.translate(bbcShape447.around.x, bbcShape447.around.y);
ctx.rotate(bbcShape447.rotation * Math.PI / 180);
ctx.translate(-bbcShape447.around.x, -bbcShape447.around.y);
ctx.beginPath();
ctx.arc(bbcShape447.point.x, bbcShape447.point.y, bbcShape447.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(21, 210, 156)';

ctx.save();
ctx.translate(bbcShape448.around.x, bbcShape448.around.y);
ctx.rotate(bbcShape448.rotation * Math.PI / 180);
ctx.translate(-bbcShape448.around.x, -bbcShape448.around.y);
ctx.beginPath();
ctx.arc(bbcShape448.point.x, bbcShape448.point.y, bbcShape448.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(238, 36, 41)';

ctx.save();
ctx.translate(bbcShape449.around.x, bbcShape449.around.y);
ctx.rotate(bbcShape449.rotation * Math.PI / 180);
ctx.translate(-bbcShape449.around.x, -bbcShape449.around.y);
ctx.beginPath();
ctx.arc(bbcShape449.point.x, bbcShape449.point.y, bbcShape449.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(180, 150, 13)';

ctx.save();
ctx.translate(bbcShape450.around.x, bbcShape450.around.y);
ctx.rotate(bbcShape450.rotation * Math.PI / 180);
ctx.translate(-bbcShape450.around.x, -bbcShape450.around.y);
ctx.beginPath();
ctx.arc(bbcShape450.point.x, bbcShape450.point.y, bbcShape450.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(204, 101, 88)';

ctx.save();
ctx.translate(bbcShape451.around.x, bbcShape451.around.y);
ctx.rotate(bbcShape451.rotation * Math.PI / 180);
ctx.translate(-bbcShape451.around.x, -bbcShape451.around.y);
ctx.beginPath();
ctx.arc(bbcShape451.point.x, bbcShape451.point.y, bbcShape451.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(227, 77, 71)';

ctx.save();
ctx.translate(bbcShape452.around.x, bbcShape452.around.y);
ctx.rotate(bbcShape452.rotation * Math.PI / 180);
ctx.translate(-bbcShape452.around.x, -bbcShape452.around.y);
ctx.beginPath();
ctx.arc(bbcShape452.point.x, bbcShape452.point.y, bbcShape452.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 132, 169)';

ctx.save();
ctx.translate(bbcShape453.around.x, bbcShape453.around.y);
ctx.rotate(bbcShape453.rotation * Math.PI / 180);
ctx.translate(-bbcShape453.around.x, -bbcShape453.around.y);
ctx.beginPath();
ctx.arc(bbcShape453.point.x, bbcShape453.point.y, bbcShape453.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(192, 31, 199)';

ctx.save();
ctx.translate(bbcShape454.around.x, bbcShape454.around.y);
ctx.rotate(bbcShape454.rotation * Math.PI / 180);
ctx.translate(-bbcShape454.around.x, -bbcShape454.around.y);
ctx.beginPath();
ctx.arc(bbcShape454.point.x, bbcShape454.point.y, bbcShape454.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(252, 86, 73)';

ctx.save();
ctx.translate(bbcShape455.around.x, bbcShape455.around.y);
ctx.rotate(bbcShape455.rotation * Math.PI / 180);
ctx.translate(-bbcShape455.around.x, -bbcShape455.around.y);
ctx.beginPath();
ctx.arc(bbcShape455.point.x, bbcShape455.point.y, bbcShape455.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(82, 131, 99)';

ctx.save();
ctx.translate(bbcShape456.around.x, bbcShape456.around.y);
ctx.rotate(bbcShape456.rotation * Math.PI / 180);
ctx.translate(-bbcShape456.around.x, -bbcShape456.around.y);
ctx.beginPath();
ctx.arc(bbcShape456.point.x, bbcShape456.point.y, bbcShape456.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(162, 40, 172)';

ctx.save();
ctx.translate(bbcShape457.around.x, bbcShape457.around.y);
ctx.rotate(bbcShape457.rotation * Math.PI / 180);
ctx.translate(-bbcShape457.around.x, -bbcShape457.around.y);
ctx.beginPath();
ctx.arc(bbcShape457.point.x, bbcShape457.point.y, bbcShape457.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(70, 183, 230)';

ctx.save();
ctx.translate(bbcShape458.around.x, bbcShape458.around.y);
ctx.rotate(bbcShape458.rotation * Math.PI / 180);
ctx.translate(-bbcShape458.around.x, -bbcShape458.around.y);
ctx.beginPath();
ctx.arc(bbcShape458.point.x, bbcShape458.point.y, bbcShape458.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(234, 95, 136)';

ctx.save();
ctx.translate(bbcShape459.around.x, bbcShape459.around.y);
ctx.rotate(bbcShape459.rotation * Math.PI / 180);
ctx.translate(-bbcShape459.around.x, -bbcShape459.around.y);
ctx.beginPath();
ctx.arc(bbcShape459.point.x, bbcShape459.point.y, bbcShape459.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(253, 52, 95)';

ctx.save();
ctx.translate(bbcShape460.around.x, bbcShape460.around.y);
ctx.rotate(bbcShape460.rotation * Math.PI / 180);
ctx.translate(-bbcShape460.around.x, -bbcShape460.around.y);
ctx.beginPath();
ctx.arc(bbcShape460.point.x, bbcShape460.point.y, bbcShape460.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 47, 244)';

ctx.save();
ctx.translate(bbcShape461.around.x, bbcShape461.around.y);
ctx.rotate(bbcShape461.rotation * Math.PI / 180);
ctx.translate(-bbcShape461.around.x, -bbcShape461.around.y);
ctx.beginPath();
ctx.arc(bbcShape461.point.x, bbcShape461.point.y, bbcShape461.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(223, 104, 60)';

ctx.save();
ctx.translate(bbcShape462.around.x, bbcShape462.around.y);
ctx.rotate(bbcShape462.rotation * Math.PI / 180);
ctx.translate(-bbcShape462.around.x, -bbcShape462.around.y);
ctx.beginPath();
ctx.arc(bbcShape462.point.x, bbcShape462.point.y, bbcShape462.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(7, 138, 14)';

ctx.save();
ctx.translate(bbcShape463.around.x, bbcShape463.around.y);
ctx.rotate(bbcShape463.rotation * Math.PI / 180);
ctx.translate(-bbcShape463.around.x, -bbcShape463.around.y);
ctx.beginPath();
ctx.arc(bbcShape463.point.x, bbcShape463.point.y, bbcShape463.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(137, 35, 255)';

ctx.save();
ctx.translate(bbcShape464.around.x, bbcShape464.around.y);
ctx.rotate(bbcShape464.rotation * Math.PI / 180);
ctx.translate(-bbcShape464.around.x, -bbcShape464.around.y);
ctx.beginPath();
ctx.arc(bbcShape464.point.x, bbcShape464.point.y, bbcShape464.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(252, 172, 37)';

ctx.save();
ctx.translate(bbcShape465.around.x, bbcShape465.around.y);
ctx.rotate(bbcShape465.rotation * Math.PI / 180);
ctx.translate(-bbcShape465.around.x, -bbcShape465.around.y);
ctx.beginPath();
ctx.arc(bbcShape465.point.x, bbcShape465.point.y, bbcShape465.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50, 194, 3)';

ctx.save();
ctx.translate(bbcShape466.around.x, bbcShape466.around.y);
ctx.rotate(bbcShape466.rotation * Math.PI / 180);
ctx.translate(-bbcShape466.around.x, -bbcShape466.around.y);
ctx.beginPath();
ctx.arc(bbcShape466.point.x, bbcShape466.point.y, bbcShape466.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(11, 8, 199)';

ctx.save();
ctx.translate(bbcShape467.around.x, bbcShape467.around.y);
ctx.rotate(bbcShape467.rotation * Math.PI / 180);
ctx.translate(-bbcShape467.around.x, -bbcShape467.around.y);
ctx.beginPath();
ctx.arc(bbcShape467.point.x, bbcShape467.point.y, bbcShape467.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(227, 26, 150)';

ctx.save();
ctx.translate(bbcShape468.around.x, bbcShape468.around.y);
ctx.rotate(bbcShape468.rotation * Math.PI / 180);
ctx.translate(-bbcShape468.around.x, -bbcShape468.around.y);
ctx.beginPath();
ctx.arc(bbcShape468.point.x, bbcShape468.point.y, bbcShape468.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(248, 160, 201)';

ctx.save();
ctx.translate(bbcShape469.around.x, bbcShape469.around.y);
ctx.rotate(bbcShape469.rotation * Math.PI / 180);
ctx.translate(-bbcShape469.around.x, -bbcShape469.around.y);
ctx.beginPath();
ctx.arc(bbcShape469.point.x, bbcShape469.point.y, bbcShape469.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 172, 219)';

ctx.save();
ctx.translate(bbcShape470.around.x, bbcShape470.around.y);
ctx.rotate(bbcShape470.rotation * Math.PI / 180);
ctx.translate(-bbcShape470.around.x, -bbcShape470.around.y);
ctx.beginPath();
ctx.arc(bbcShape470.point.x, bbcShape470.point.y, bbcShape470.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(202, 195, 25)';

ctx.save();
ctx.translate(bbcShape471.around.x, bbcShape471.around.y);
ctx.rotate(bbcShape471.rotation * Math.PI / 180);
ctx.translate(-bbcShape471.around.x, -bbcShape471.around.y);
ctx.beginPath();
ctx.arc(bbcShape471.point.x, bbcShape471.point.y, bbcShape471.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(27, 149, 21)';

ctx.save();
ctx.translate(bbcShape472.around.x, bbcShape472.around.y);
ctx.rotate(bbcShape472.rotation * Math.PI / 180);
ctx.translate(-bbcShape472.around.x, -bbcShape472.around.y);
ctx.beginPath();
ctx.arc(bbcShape472.point.x, bbcShape472.point.y, bbcShape472.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(22, 250, 132)';

ctx.save();
ctx.translate(bbcShape473.around.x, bbcShape473.around.y);
ctx.rotate(bbcShape473.rotation * Math.PI / 180);
ctx.translate(-bbcShape473.around.x, -bbcShape473.around.y);
ctx.beginPath();
ctx.arc(bbcShape473.point.x, bbcShape473.point.y, bbcShape473.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 26, 66)';

ctx.save();
ctx.translate(bbcShape474.around.x, bbcShape474.around.y);
ctx.rotate(bbcShape474.rotation * Math.PI / 180);
ctx.translate(-bbcShape474.around.x, -bbcShape474.around.y);
ctx.beginPath();
ctx.arc(bbcShape474.point.x, bbcShape474.point.y, bbcShape474.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(93, 176, 73)';

ctx.save();
ctx.translate(bbcShape475.around.x, bbcShape475.around.y);
ctx.rotate(bbcShape475.rotation * Math.PI / 180);
ctx.translate(-bbcShape475.around.x, -bbcShape475.around.y);
ctx.beginPath();
ctx.arc(bbcShape475.point.x, bbcShape475.point.y, bbcShape475.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(223, 81, 28)';

ctx.save();
ctx.translate(bbcShape476.around.x, bbcShape476.around.y);
ctx.rotate(bbcShape476.rotation * Math.PI / 180);
ctx.translate(-bbcShape476.around.x, -bbcShape476.around.y);
ctx.beginPath();
ctx.arc(bbcShape476.point.x, bbcShape476.point.y, bbcShape476.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(192, 175, 169)';

ctx.save();
ctx.translate(bbcShape477.around.x, bbcShape477.around.y);
ctx.rotate(bbcShape477.rotation * Math.PI / 180);
ctx.translate(-bbcShape477.around.x, -bbcShape477.around.y);
ctx.beginPath();
ctx.arc(bbcShape477.point.x, bbcShape477.point.y, bbcShape477.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(33, 246, 87)';

ctx.save();
ctx.translate(bbcShape478.around.x, bbcShape478.around.y);
ctx.rotate(bbcShape478.rotation * Math.PI / 180);
ctx.translate(-bbcShape478.around.x, -bbcShape478.around.y);
ctx.beginPath();
ctx.arc(bbcShape478.point.x, bbcShape478.point.y, bbcShape478.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 169, 98)';

ctx.save();
ctx.translate(bbcShape479.around.x, bbcShape479.around.y);
ctx.rotate(bbcShape479.rotation * Math.PI / 180);
ctx.translate(-bbcShape479.around.x, -bbcShape479.around.y);
ctx.beginPath();
ctx.arc(bbcShape479.point.x, bbcShape479.point.y, bbcShape479.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 52, 32)';

ctx.save();
ctx.translate(bbcShape480.around.x, bbcShape480.around.y);
ctx.rotate(bbcShape480.rotation * Math.PI / 180);
ctx.translate(-bbcShape480.around.x, -bbcShape480.around.y);
ctx.beginPath();
ctx.arc(bbcShape480.point.x, bbcShape480.point.y, bbcShape480.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(81, 29, 59)';

ctx.save();
ctx.translate(bbcShape481.around.x, bbcShape481.around.y);
ctx.rotate(bbcShape481.rotation * Math.PI / 180);
ctx.translate(-bbcShape481.around.x, -bbcShape481.around.y);
ctx.beginPath();
ctx.arc(bbcShape481.point.x, bbcShape481.point.y, bbcShape481.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(9, 37, 10)';

ctx.save();
ctx.translate(bbcShape482.around.x, bbcShape482.around.y);
ctx.rotate(bbcShape482.rotation * Math.PI / 180);
ctx.translate(-bbcShape482.around.x, -bbcShape482.around.y);
ctx.beginPath();
ctx.arc(bbcShape482.point.x, bbcShape482.point.y, bbcShape482.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(86, 155, 182)';

ctx.save();
ctx.translate(bbcShape483.around.x, bbcShape483.around.y);
ctx.rotate(bbcShape483.rotation * Math.PI / 180);
ctx.translate(-bbcShape483.around.x, -bbcShape483.around.y);
ctx.beginPath();
ctx.arc(bbcShape483.point.x, bbcShape483.point.y, bbcShape483.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(5, 166, 40)';

ctx.save();
ctx.translate(bbcShape484.around.x, bbcShape484.around.y);
ctx.rotate(bbcShape484.rotation * Math.PI / 180);
ctx.translate(-bbcShape484.around.x, -bbcShape484.around.y);
ctx.beginPath();
ctx.arc(bbcShape484.point.x, bbcShape484.point.y, bbcShape484.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(108, 185, 55)';

ctx.save();
ctx.translate(bbcShape485.around.x, bbcShape485.around.y);
ctx.rotate(bbcShape485.rotation * Math.PI / 180);
ctx.translate(-bbcShape485.around.x, -bbcShape485.around.y);
ctx.beginPath();
ctx.arc(bbcShape485.point.x, bbcShape485.point.y, bbcShape485.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(94, 25, 110)';

ctx.save();
ctx.translate(bbcShape486.around.x, bbcShape486.around.y);
ctx.rotate(bbcShape486.rotation * Math.PI / 180);
ctx.translate(-bbcShape486.around.x, -bbcShape486.around.y);
ctx.beginPath();
ctx.arc(bbcShape486.point.x, bbcShape486.point.y, bbcShape486.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(191, 141, 217)';

ctx.save();
ctx.translate(bbcShape487.around.x, bbcShape487.around.y);
ctx.rotate(bbcShape487.rotation * Math.PI / 180);
ctx.translate(-bbcShape487.around.x, -bbcShape487.around.y);
ctx.beginPath();
ctx.arc(bbcShape487.point.x, bbcShape487.point.y, bbcShape487.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(186, 236, 85)';

ctx.save();
ctx.translate(bbcShape488.around.x, bbcShape488.around.y);
ctx.rotate(bbcShape488.rotation * Math.PI / 180);
ctx.translate(-bbcShape488.around.x, -bbcShape488.around.y);
ctx.beginPath();
ctx.arc(bbcShape488.point.x, bbcShape488.point.y, bbcShape488.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(126, 251, 105)';

ctx.save();
ctx.translate(bbcShape489.around.x, bbcShape489.around.y);
ctx.rotate(bbcShape489.rotation * Math.PI / 180);
ctx.translate(-bbcShape489.around.x, -bbcShape489.around.y);
ctx.beginPath();
ctx.arc(bbcShape489.point.x, bbcShape489.point.y, bbcShape489.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 51, 17)';

ctx.save();
ctx.translate(bbcShape490.around.x, bbcShape490.around.y);
ctx.rotate(bbcShape490.rotation * Math.PI / 180);
ctx.translate(-bbcShape490.around.x, -bbcShape490.around.y);
ctx.beginPath();
ctx.arc(bbcShape490.point.x, bbcShape490.point.y, bbcShape490.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(33, 74, 86)';

ctx.save();
ctx.translate(bbcShape491.around.x, bbcShape491.around.y);
ctx.rotate(bbcShape491.rotation * Math.PI / 180);
ctx.translate(-bbcShape491.around.x, -bbcShape491.around.y);
ctx.beginPath();
ctx.arc(bbcShape491.point.x, bbcShape491.point.y, bbcShape491.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(86, 125, 4)';

ctx.save();
ctx.translate(bbcShape492.around.x, bbcShape492.around.y);
ctx.rotate(bbcShape492.rotation * Math.PI / 180);
ctx.translate(-bbcShape492.around.x, -bbcShape492.around.y);
ctx.beginPath();
ctx.arc(bbcShape492.point.x, bbcShape492.point.y, bbcShape492.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(44, 167, 20)';

ctx.save();
ctx.translate(bbcShape493.around.x, bbcShape493.around.y);
ctx.rotate(bbcShape493.rotation * Math.PI / 180);
ctx.translate(-bbcShape493.around.x, -bbcShape493.around.y);
ctx.beginPath();
ctx.arc(bbcShape493.point.x, bbcShape493.point.y, bbcShape493.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(107, 58, 11)';

ctx.save();
ctx.translate(bbcShape494.around.x, bbcShape494.around.y);
ctx.rotate(bbcShape494.rotation * Math.PI / 180);
ctx.translate(-bbcShape494.around.x, -bbcShape494.around.y);
ctx.beginPath();
ctx.arc(bbcShape494.point.x, bbcShape494.point.y, bbcShape494.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(156, 156, 50)';

ctx.save();
ctx.translate(bbcShape495.around.x, bbcShape495.around.y);
ctx.rotate(bbcShape495.rotation * Math.PI / 180);
ctx.translate(-bbcShape495.around.x, -bbcShape495.around.y);
ctx.beginPath();
ctx.arc(bbcShape495.point.x, bbcShape495.point.y, bbcShape495.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(93, 148, 155)';

ctx.save();
ctx.translate(bbcShape496.around.x, bbcShape496.around.y);
ctx.rotate(bbcShape496.rotation * Math.PI / 180);
ctx.translate(-bbcShape496.around.x, -bbcShape496.around.y);
ctx.beginPath();
ctx.arc(bbcShape496.point.x, bbcShape496.point.y, bbcShape496.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(68, 126, 250)';

ctx.save();
ctx.translate(bbcShape497.around.x, bbcShape497.around.y);
ctx.rotate(bbcShape497.rotation * Math.PI / 180);
ctx.translate(-bbcShape497.around.x, -bbcShape497.around.y);
ctx.beginPath();
ctx.arc(bbcShape497.point.x, bbcShape497.point.y, bbcShape497.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(226, 21, 250)';

ctx.save();
ctx.translate(bbcShape498.around.x, bbcShape498.around.y);
ctx.rotate(bbcShape498.rotation * Math.PI / 180);
ctx.translate(-bbcShape498.around.x, -bbcShape498.around.y);
ctx.beginPath();
ctx.arc(bbcShape498.point.x, bbcShape498.point.y, bbcShape498.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(170, 250, 11)';

ctx.save();
ctx.translate(bbcShape499.around.x, bbcShape499.around.y);
ctx.rotate(bbcShape499.rotation * Math.PI / 180);
ctx.translate(-bbcShape499.around.x, -bbcShape499.around.y);
ctx.beginPath();
ctx.arc(bbcShape499.point.x, bbcShape499.point.y, bbcShape499.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(93, 106, 128)';

ctx.save();
ctx.translate(bbcShape500.around.x, bbcShape500.around.y);
ctx.rotate(bbcShape500.rotation * Math.PI / 180);
ctx.translate(-bbcShape500.around.x, -bbcShape500.around.y);
ctx.beginPath();
ctx.arc(bbcShape500.point.x, bbcShape500.point.y, bbcShape500.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225, 235, 249)';

ctx.save();
ctx.translate(bbcShape501.around.x, bbcShape501.around.y);
ctx.rotate(bbcShape501.rotation * Math.PI / 180);
ctx.translate(-bbcShape501.around.x, -bbcShape501.around.y);
ctx.beginPath();
ctx.arc(bbcShape501.point.x, bbcShape501.point.y, bbcShape501.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(84, 173, 24)';

ctx.save();
ctx.translate(bbcShape502.around.x, bbcShape502.around.y);
ctx.rotate(bbcShape502.rotation * Math.PI / 180);
ctx.translate(-bbcShape502.around.x, -bbcShape502.around.y);
ctx.beginPath();
ctx.arc(bbcShape502.point.x, bbcShape502.point.y, bbcShape502.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(63, 39, 34)';

ctx.save();
ctx.translate(bbcShape503.around.x, bbcShape503.around.y);
ctx.rotate(bbcShape503.rotation * Math.PI / 180);
ctx.translate(-bbcShape503.around.x, -bbcShape503.around.y);
ctx.beginPath();
ctx.arc(bbcShape503.point.x, bbcShape503.point.y, bbcShape503.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 237, 42)';

ctx.save();
ctx.translate(bbcShape504.around.x, bbcShape504.around.y);
ctx.rotate(bbcShape504.rotation * Math.PI / 180);
ctx.translate(-bbcShape504.around.x, -bbcShape504.around.y);
ctx.beginPath();
ctx.arc(bbcShape504.point.x, bbcShape504.point.y, bbcShape504.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(98, 41, 13)';

ctx.save();
ctx.translate(bbcShape505.around.x, bbcShape505.around.y);
ctx.rotate(bbcShape505.rotation * Math.PI / 180);
ctx.translate(-bbcShape505.around.x, -bbcShape505.around.y);
ctx.beginPath();
ctx.arc(bbcShape505.point.x, bbcShape505.point.y, bbcShape505.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 94, 169)';

ctx.save();
ctx.translate(bbcShape506.around.x, bbcShape506.around.y);
ctx.rotate(bbcShape506.rotation * Math.PI / 180);
ctx.translate(-bbcShape506.around.x, -bbcShape506.around.y);
ctx.beginPath();
ctx.arc(bbcShape506.point.x, bbcShape506.point.y, bbcShape506.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(249, 136, 13)';

ctx.save();
ctx.translate(bbcShape507.around.x, bbcShape507.around.y);
ctx.rotate(bbcShape507.rotation * Math.PI / 180);
ctx.translate(-bbcShape507.around.x, -bbcShape507.around.y);
ctx.beginPath();
ctx.arc(bbcShape507.point.x, bbcShape507.point.y, bbcShape507.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 134, 189)';

ctx.save();
ctx.translate(bbcShape508.around.x, bbcShape508.around.y);
ctx.rotate(bbcShape508.rotation * Math.PI / 180);
ctx.translate(-bbcShape508.around.x, -bbcShape508.around.y);
ctx.beginPath();
ctx.arc(bbcShape508.point.x, bbcShape508.point.y, bbcShape508.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 46, 97)';

ctx.save();
ctx.translate(bbcShape509.around.x, bbcShape509.around.y);
ctx.rotate(bbcShape509.rotation * Math.PI / 180);
ctx.translate(-bbcShape509.around.x, -bbcShape509.around.y);
ctx.beginPath();
ctx.arc(bbcShape509.point.x, bbcShape509.point.y, bbcShape509.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(13, 235, 161)';

ctx.save();
ctx.translate(bbcShape510.around.x, bbcShape510.around.y);
ctx.rotate(bbcShape510.rotation * Math.PI / 180);
ctx.translate(-bbcShape510.around.x, -bbcShape510.around.y);
ctx.beginPath();
ctx.arc(bbcShape510.point.x, bbcShape510.point.y, bbcShape510.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(229, 252, 200)';

ctx.save();
ctx.translate(bbcShape511.around.x, bbcShape511.around.y);
ctx.rotate(bbcShape511.rotation * Math.PI / 180);
ctx.translate(-bbcShape511.around.x, -bbcShape511.around.y);
ctx.beginPath();
ctx.arc(bbcShape511.point.x, bbcShape511.point.y, bbcShape511.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(138, 1, 241)';

ctx.save();
ctx.translate(bbcShape512.around.x, bbcShape512.around.y);
ctx.rotate(bbcShape512.rotation * Math.PI / 180);
ctx.translate(-bbcShape512.around.x, -bbcShape512.around.y);
ctx.beginPath();
ctx.arc(bbcShape512.point.x, bbcShape512.point.y, bbcShape512.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 16, 103)';

ctx.save();
ctx.translate(bbcShape513.around.x, bbcShape513.around.y);
ctx.rotate(bbcShape513.rotation * Math.PI / 180);
ctx.translate(-bbcShape513.around.x, -bbcShape513.around.y);
ctx.beginPath();
ctx.arc(bbcShape513.point.x, bbcShape513.point.y, bbcShape513.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(122, 21, 130)';

ctx.save();
ctx.translate(bbcShape514.around.x, bbcShape514.around.y);
ctx.rotate(bbcShape514.rotation * Math.PI / 180);
ctx.translate(-bbcShape514.around.x, -bbcShape514.around.y);
ctx.beginPath();
ctx.arc(bbcShape514.point.x, bbcShape514.point.y, bbcShape514.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(106, 134, 89)';

ctx.save();
ctx.translate(bbcShape515.around.x, bbcShape515.around.y);
ctx.rotate(bbcShape515.rotation * Math.PI / 180);
ctx.translate(-bbcShape515.around.x, -bbcShape515.around.y);
ctx.beginPath();
ctx.arc(bbcShape515.point.x, bbcShape515.point.y, bbcShape515.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 213, 214)';

ctx.save();
ctx.translate(bbcShape516.around.x, bbcShape516.around.y);
ctx.rotate(bbcShape516.rotation * Math.PI / 180);
ctx.translate(-bbcShape516.around.x, -bbcShape516.around.y);
ctx.beginPath();
ctx.arc(bbcShape516.point.x, bbcShape516.point.y, bbcShape516.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(192, 207, 152)';

ctx.save();
ctx.translate(bbcShape517.around.x, bbcShape517.around.y);
ctx.rotate(bbcShape517.rotation * Math.PI / 180);
ctx.translate(-bbcShape517.around.x, -bbcShape517.around.y);
ctx.beginPath();
ctx.arc(bbcShape517.point.x, bbcShape517.point.y, bbcShape517.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(66, 13, 52)';

ctx.save();
ctx.translate(bbcShape518.around.x, bbcShape518.around.y);
ctx.rotate(bbcShape518.rotation * Math.PI / 180);
ctx.translate(-bbcShape518.around.x, -bbcShape518.around.y);
ctx.beginPath();
ctx.arc(bbcShape518.point.x, bbcShape518.point.y, bbcShape518.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(95, 72, 156)';

ctx.save();
ctx.translate(bbcShape519.around.x, bbcShape519.around.y);
ctx.rotate(bbcShape519.rotation * Math.PI / 180);
ctx.translate(-bbcShape519.around.x, -bbcShape519.around.y);
ctx.beginPath();
ctx.arc(bbcShape519.point.x, bbcShape519.point.y, bbcShape519.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(244, 2, 207)';

ctx.save();
ctx.translate(bbcShape520.around.x, bbcShape520.around.y);
ctx.rotate(bbcShape520.rotation * Math.PI / 180);
ctx.translate(-bbcShape520.around.x, -bbcShape520.around.y);
ctx.beginPath();
ctx.arc(bbcShape520.point.x, bbcShape520.point.y, bbcShape520.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(171, 225, 76)';

ctx.save();
ctx.translate(bbcShape521.around.x, bbcShape521.around.y);
ctx.rotate(bbcShape521.rotation * Math.PI / 180);
ctx.translate(-bbcShape521.around.x, -bbcShape521.around.y);
ctx.beginPath();
ctx.arc(bbcShape521.point.x, bbcShape521.point.y, bbcShape521.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(156, 170, 8)';

ctx.save();
ctx.translate(bbcShape522.around.x, bbcShape522.around.y);
ctx.rotate(bbcShape522.rotation * Math.PI / 180);
ctx.translate(-bbcShape522.around.x, -bbcShape522.around.y);
ctx.beginPath();
ctx.arc(bbcShape522.point.x, bbcShape522.point.y, bbcShape522.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(218, 170, 83)';

ctx.save();
ctx.translate(bbcShape523.around.x, bbcShape523.around.y);
ctx.rotate(bbcShape523.rotation * Math.PI / 180);
ctx.translate(-bbcShape523.around.x, -bbcShape523.around.y);
ctx.beginPath();
ctx.arc(bbcShape523.point.x, bbcShape523.point.y, bbcShape523.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 171, 80)';

ctx.save();
ctx.translate(bbcShape524.around.x, bbcShape524.around.y);
ctx.rotate(bbcShape524.rotation * Math.PI / 180);
ctx.translate(-bbcShape524.around.x, -bbcShape524.around.y);
ctx.beginPath();
ctx.arc(bbcShape524.point.x, bbcShape524.point.y, bbcShape524.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 146, 14)';

ctx.save();
ctx.translate(bbcShape525.around.x, bbcShape525.around.y);
ctx.rotate(bbcShape525.rotation * Math.PI / 180);
ctx.translate(-bbcShape525.around.x, -bbcShape525.around.y);
ctx.beginPath();
ctx.arc(bbcShape525.point.x, bbcShape525.point.y, bbcShape525.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 60, 48)';

ctx.save();
ctx.translate(bbcShape526.around.x, bbcShape526.around.y);
ctx.rotate(bbcShape526.rotation * Math.PI / 180);
ctx.translate(-bbcShape526.around.x, -bbcShape526.around.y);
ctx.beginPath();
ctx.arc(bbcShape526.point.x, bbcShape526.point.y, bbcShape526.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 156, 219)';

ctx.save();
ctx.translate(bbcShape527.around.x, bbcShape527.around.y);
ctx.rotate(bbcShape527.rotation * Math.PI / 180);
ctx.translate(-bbcShape527.around.x, -bbcShape527.around.y);
ctx.beginPath();
ctx.arc(bbcShape527.point.x, bbcShape527.point.y, bbcShape527.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(6, 22, 194)';

ctx.save();
ctx.translate(bbcShape528.around.x, bbcShape528.around.y);
ctx.rotate(bbcShape528.rotation * Math.PI / 180);
ctx.translate(-bbcShape528.around.x, -bbcShape528.around.y);
ctx.beginPath();
ctx.arc(bbcShape528.point.x, bbcShape528.point.y, bbcShape528.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(111, 224, 33)';

ctx.save();
ctx.translate(bbcShape529.around.x, bbcShape529.around.y);
ctx.rotate(bbcShape529.rotation * Math.PI / 180);
ctx.translate(-bbcShape529.around.x, -bbcShape529.around.y);
ctx.beginPath();
ctx.arc(bbcShape529.point.x, bbcShape529.point.y, bbcShape529.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(20, 69, 119)';

ctx.save();
ctx.translate(bbcShape530.around.x, bbcShape530.around.y);
ctx.rotate(bbcShape530.rotation * Math.PI / 180);
ctx.translate(-bbcShape530.around.x, -bbcShape530.around.y);
ctx.beginPath();
ctx.arc(bbcShape530.point.x, bbcShape530.point.y, bbcShape530.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(164, 48, 0)';

ctx.save();
ctx.translate(bbcShape531.around.x, bbcShape531.around.y);
ctx.rotate(bbcShape531.rotation * Math.PI / 180);
ctx.translate(-bbcShape531.around.x, -bbcShape531.around.y);
ctx.beginPath();
ctx.arc(bbcShape531.point.x, bbcShape531.point.y, bbcShape531.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(207, 240, 97)';

ctx.save();
ctx.translate(bbcShape532.around.x, bbcShape532.around.y);
ctx.rotate(bbcShape532.rotation * Math.PI / 180);
ctx.translate(-bbcShape532.around.x, -bbcShape532.around.y);
ctx.beginPath();
ctx.arc(bbcShape532.point.x, bbcShape532.point.y, bbcShape532.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 75, 75)';

ctx.save();
ctx.translate(bbcShape533.around.x, bbcShape533.around.y);
ctx.rotate(bbcShape533.rotation * Math.PI / 180);
ctx.translate(-bbcShape533.around.x, -bbcShape533.around.y);
ctx.beginPath();
ctx.arc(bbcShape533.point.x, bbcShape533.point.y, bbcShape533.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(252, 71, 240)';

ctx.save();
ctx.translate(bbcShape534.around.x, bbcShape534.around.y);
ctx.rotate(bbcShape534.rotation * Math.PI / 180);
ctx.translate(-bbcShape534.around.x, -bbcShape534.around.y);
ctx.beginPath();
ctx.arc(bbcShape534.point.x, bbcShape534.point.y, bbcShape534.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 225, 107)';

ctx.save();
ctx.translate(bbcShape535.around.x, bbcShape535.around.y);
ctx.rotate(bbcShape535.rotation * Math.PI / 180);
ctx.translate(-bbcShape535.around.x, -bbcShape535.around.y);
ctx.beginPath();
ctx.arc(bbcShape535.point.x, bbcShape535.point.y, bbcShape535.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 69, 225)';

ctx.save();
ctx.translate(bbcShape536.around.x, bbcShape536.around.y);
ctx.rotate(bbcShape536.rotation * Math.PI / 180);
ctx.translate(-bbcShape536.around.x, -bbcShape536.around.y);
ctx.beginPath();
ctx.arc(bbcShape536.point.x, bbcShape536.point.y, bbcShape536.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(146, 184, 120)';

ctx.save();
ctx.translate(bbcShape537.around.x, bbcShape537.around.y);
ctx.rotate(bbcShape537.rotation * Math.PI / 180);
ctx.translate(-bbcShape537.around.x, -bbcShape537.around.y);
ctx.beginPath();
ctx.arc(bbcShape537.point.x, bbcShape537.point.y, bbcShape537.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250, 21, 214)';

ctx.save();
ctx.translate(bbcShape538.around.x, bbcShape538.around.y);
ctx.rotate(bbcShape538.rotation * Math.PI / 180);
ctx.translate(-bbcShape538.around.x, -bbcShape538.around.y);
ctx.beginPath();
ctx.arc(bbcShape538.point.x, bbcShape538.point.y, bbcShape538.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(15, 241, 234)';

ctx.save();
ctx.translate(bbcShape539.around.x, bbcShape539.around.y);
ctx.rotate(bbcShape539.rotation * Math.PI / 180);
ctx.translate(-bbcShape539.around.x, -bbcShape539.around.y);
ctx.beginPath();
ctx.arc(bbcShape539.point.x, bbcShape539.point.y, bbcShape539.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(54, 208, 194)';

ctx.save();
ctx.translate(bbcShape540.around.x, bbcShape540.around.y);
ctx.rotate(bbcShape540.rotation * Math.PI / 180);
ctx.translate(-bbcShape540.around.x, -bbcShape540.around.y);
ctx.beginPath();
ctx.arc(bbcShape540.point.x, bbcShape540.point.y, bbcShape540.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(91, 110, 215)';

ctx.save();
ctx.translate(bbcShape541.around.x, bbcShape541.around.y);
ctx.rotate(bbcShape541.rotation * Math.PI / 180);
ctx.translate(-bbcShape541.around.x, -bbcShape541.around.y);
ctx.beginPath();
ctx.arc(bbcShape541.point.x, bbcShape541.point.y, bbcShape541.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 150, 129)';

ctx.save();
ctx.translate(bbcShape542.around.x, bbcShape542.around.y);
ctx.rotate(bbcShape542.rotation * Math.PI / 180);
ctx.translate(-bbcShape542.around.x, -bbcShape542.around.y);
ctx.beginPath();
ctx.arc(bbcShape542.point.x, bbcShape542.point.y, bbcShape542.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(242, 47, 139)';

ctx.save();
ctx.translate(bbcShape543.around.x, bbcShape543.around.y);
ctx.rotate(bbcShape543.rotation * Math.PI / 180);
ctx.translate(-bbcShape543.around.x, -bbcShape543.around.y);
ctx.beginPath();
ctx.arc(bbcShape543.point.x, bbcShape543.point.y, bbcShape543.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(132, 22, 133)';

ctx.save();
ctx.translate(bbcShape544.around.x, bbcShape544.around.y);
ctx.rotate(bbcShape544.rotation * Math.PI / 180);
ctx.translate(-bbcShape544.around.x, -bbcShape544.around.y);
ctx.beginPath();
ctx.arc(bbcShape544.point.x, bbcShape544.point.y, bbcShape544.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(34, 211, 64)';

ctx.save();
ctx.translate(bbcShape545.around.x, bbcShape545.around.y);
ctx.rotate(bbcShape545.rotation * Math.PI / 180);
ctx.translate(-bbcShape545.around.x, -bbcShape545.around.y);
ctx.beginPath();
ctx.arc(bbcShape545.point.x, bbcShape545.point.y, bbcShape545.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 17, 194)';

ctx.save();
ctx.translate(bbcShape546.around.x, bbcShape546.around.y);
ctx.rotate(bbcShape546.rotation * Math.PI / 180);
ctx.translate(-bbcShape546.around.x, -bbcShape546.around.y);
ctx.beginPath();
ctx.arc(bbcShape546.point.x, bbcShape546.point.y, bbcShape546.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 16, 244)';

ctx.save();
ctx.translate(bbcShape547.around.x, bbcShape547.around.y);
ctx.rotate(bbcShape547.rotation * Math.PI / 180);
ctx.translate(-bbcShape547.around.x, -bbcShape547.around.y);
ctx.beginPath();
ctx.arc(bbcShape547.point.x, bbcShape547.point.y, bbcShape547.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(184, 130, 128)';

ctx.save();
ctx.translate(bbcShape548.around.x, bbcShape548.around.y);
ctx.rotate(bbcShape548.rotation * Math.PI / 180);
ctx.translate(-bbcShape548.around.x, -bbcShape548.around.y);
ctx.beginPath();
ctx.arc(bbcShape548.point.x, bbcShape548.point.y, bbcShape548.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(82, 92, 184)';

ctx.save();
ctx.translate(bbcShape549.around.x, bbcShape549.around.y);
ctx.rotate(bbcShape549.rotation * Math.PI / 180);
ctx.translate(-bbcShape549.around.x, -bbcShape549.around.y);
ctx.beginPath();
ctx.arc(bbcShape549.point.x, bbcShape549.point.y, bbcShape549.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(194, 233, 176)';

ctx.save();
ctx.translate(bbcShape550.around.x, bbcShape550.around.y);
ctx.rotate(bbcShape550.rotation * Math.PI / 180);
ctx.translate(-bbcShape550.around.x, -bbcShape550.around.y);
ctx.beginPath();
ctx.arc(bbcShape550.point.x, bbcShape550.point.y, bbcShape550.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(71, 31, 89)';

ctx.save();
ctx.translate(bbcShape551.around.x, bbcShape551.around.y);
ctx.rotate(bbcShape551.rotation * Math.PI / 180);
ctx.translate(-bbcShape551.around.x, -bbcShape551.around.y);
ctx.beginPath();
ctx.arc(bbcShape551.point.x, bbcShape551.point.y, bbcShape551.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(157, 7, 123)';

ctx.save();
ctx.translate(bbcShape552.around.x, bbcShape552.around.y);
ctx.rotate(bbcShape552.rotation * Math.PI / 180);
ctx.translate(-bbcShape552.around.x, -bbcShape552.around.y);
ctx.beginPath();
ctx.arc(bbcShape552.point.x, bbcShape552.point.y, bbcShape552.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 33, 174)';

ctx.save();
ctx.translate(bbcShape553.around.x, bbcShape553.around.y);
ctx.rotate(bbcShape553.rotation * Math.PI / 180);
ctx.translate(-bbcShape553.around.x, -bbcShape553.around.y);
ctx.beginPath();
ctx.arc(bbcShape553.point.x, bbcShape553.point.y, bbcShape553.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(20, 217, 218)';

ctx.save();
ctx.translate(bbcShape554.around.x, bbcShape554.around.y);
ctx.rotate(bbcShape554.rotation * Math.PI / 180);
ctx.translate(-bbcShape554.around.x, -bbcShape554.around.y);
ctx.beginPath();
ctx.arc(bbcShape554.point.x, bbcShape554.point.y, bbcShape554.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 233, 30)';

ctx.save();
ctx.translate(bbcShape555.around.x, bbcShape555.around.y);
ctx.rotate(bbcShape555.rotation * Math.PI / 180);
ctx.translate(-bbcShape555.around.x, -bbcShape555.around.y);
ctx.beginPath();
ctx.arc(bbcShape555.point.x, bbcShape555.point.y, bbcShape555.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(86, 53, 185)';

ctx.save();
ctx.translate(bbcShape556.around.x, bbcShape556.around.y);
ctx.rotate(bbcShape556.rotation * Math.PI / 180);
ctx.translate(-bbcShape556.around.x, -bbcShape556.around.y);
ctx.beginPath();
ctx.arc(bbcShape556.point.x, bbcShape556.point.y, bbcShape556.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(56, 138, 179)';

ctx.save();
ctx.translate(bbcShape557.around.x, bbcShape557.around.y);
ctx.rotate(bbcShape557.rotation * Math.PI / 180);
ctx.translate(-bbcShape557.around.x, -bbcShape557.around.y);
ctx.beginPath();
ctx.arc(bbcShape557.point.x, bbcShape557.point.y, bbcShape557.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(182, 175, 54)';

ctx.save();
ctx.translate(bbcShape558.around.x, bbcShape558.around.y);
ctx.rotate(bbcShape558.rotation * Math.PI / 180);
ctx.translate(-bbcShape558.around.x, -bbcShape558.around.y);
ctx.beginPath();
ctx.arc(bbcShape558.point.x, bbcShape558.point.y, bbcShape558.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(34, 72, 106)';

ctx.save();
ctx.translate(bbcShape559.around.x, bbcShape559.around.y);
ctx.rotate(bbcShape559.rotation * Math.PI / 180);
ctx.translate(-bbcShape559.around.x, -bbcShape559.around.y);
ctx.beginPath();
ctx.arc(bbcShape559.point.x, bbcShape559.point.y, bbcShape559.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(34, 132, 193)';

ctx.save();
ctx.translate(bbcShape560.around.x, bbcShape560.around.y);
ctx.rotate(bbcShape560.rotation * Math.PI / 180);
ctx.translate(-bbcShape560.around.x, -bbcShape560.around.y);
ctx.beginPath();
ctx.arc(bbcShape560.point.x, bbcShape560.point.y, bbcShape560.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(239, 157, 77)';

ctx.save();
ctx.translate(bbcShape561.around.x, bbcShape561.around.y);
ctx.rotate(bbcShape561.rotation * Math.PI / 180);
ctx.translate(-bbcShape561.around.x, -bbcShape561.around.y);
ctx.beginPath();
ctx.arc(bbcShape561.point.x, bbcShape561.point.y, bbcShape561.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 187, 170)';

ctx.save();
ctx.translate(bbcShape562.around.x, bbcShape562.around.y);
ctx.rotate(bbcShape562.rotation * Math.PI / 180);
ctx.translate(-bbcShape562.around.x, -bbcShape562.around.y);
ctx.beginPath();
ctx.arc(bbcShape562.point.x, bbcShape562.point.y, bbcShape562.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(80, 182, 184)';

ctx.save();
ctx.translate(bbcShape563.around.x, bbcShape563.around.y);
ctx.rotate(bbcShape563.rotation * Math.PI / 180);
ctx.translate(-bbcShape563.around.x, -bbcShape563.around.y);
ctx.beginPath();
ctx.arc(bbcShape563.point.x, bbcShape563.point.y, bbcShape563.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 94, 121)';

ctx.save();
ctx.translate(bbcShape564.around.x, bbcShape564.around.y);
ctx.rotate(bbcShape564.rotation * Math.PI / 180);
ctx.translate(-bbcShape564.around.x, -bbcShape564.around.y);
ctx.beginPath();
ctx.arc(bbcShape564.point.x, bbcShape564.point.y, bbcShape564.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(18, 25, 61)';

ctx.save();
ctx.translate(bbcShape565.around.x, bbcShape565.around.y);
ctx.rotate(bbcShape565.rotation * Math.PI / 180);
ctx.translate(-bbcShape565.around.x, -bbcShape565.around.y);
ctx.beginPath();
ctx.arc(bbcShape565.point.x, bbcShape565.point.y, bbcShape565.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(169, 95, 18)';

ctx.save();
ctx.translate(bbcShape566.around.x, bbcShape566.around.y);
ctx.rotate(bbcShape566.rotation * Math.PI / 180);
ctx.translate(-bbcShape566.around.x, -bbcShape566.around.y);
ctx.beginPath();
ctx.arc(bbcShape566.point.x, bbcShape566.point.y, bbcShape566.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(237, 54, 85)';

ctx.save();
ctx.translate(bbcShape567.around.x, bbcShape567.around.y);
ctx.rotate(bbcShape567.rotation * Math.PI / 180);
ctx.translate(-bbcShape567.around.x, -bbcShape567.around.y);
ctx.beginPath();
ctx.arc(bbcShape567.point.x, bbcShape567.point.y, bbcShape567.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(213, 169, 120)';

ctx.save();
ctx.translate(bbcShape568.around.x, bbcShape568.around.y);
ctx.rotate(bbcShape568.rotation * Math.PI / 180);
ctx.translate(-bbcShape568.around.x, -bbcShape568.around.y);
ctx.beginPath();
ctx.arc(bbcShape568.point.x, bbcShape568.point.y, bbcShape568.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 178, 106)';

ctx.save();
ctx.translate(bbcShape569.around.x, bbcShape569.around.y);
ctx.rotate(bbcShape569.rotation * Math.PI / 180);
ctx.translate(-bbcShape569.around.x, -bbcShape569.around.y);
ctx.beginPath();
ctx.arc(bbcShape569.point.x, bbcShape569.point.y, bbcShape569.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 89, 201)';

ctx.save();
ctx.translate(bbcShape570.around.x, bbcShape570.around.y);
ctx.rotate(bbcShape570.rotation * Math.PI / 180);
ctx.translate(-bbcShape570.around.x, -bbcShape570.around.y);
ctx.beginPath();
ctx.arc(bbcShape570.point.x, bbcShape570.point.y, bbcShape570.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(15, 222, 85)';

ctx.save();
ctx.translate(bbcShape571.around.x, bbcShape571.around.y);
ctx.rotate(bbcShape571.rotation * Math.PI / 180);
ctx.translate(-bbcShape571.around.x, -bbcShape571.around.y);
ctx.beginPath();
ctx.arc(bbcShape571.point.x, bbcShape571.point.y, bbcShape571.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(226, 230, 50)';

ctx.save();
ctx.translate(bbcShape572.around.x, bbcShape572.around.y);
ctx.rotate(bbcShape572.rotation * Math.PI / 180);
ctx.translate(-bbcShape572.around.x, -bbcShape572.around.y);
ctx.beginPath();
ctx.arc(bbcShape572.point.x, bbcShape572.point.y, bbcShape572.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 51, 105)';

ctx.save();
ctx.translate(bbcShape573.around.x, bbcShape573.around.y);
ctx.rotate(bbcShape573.rotation * Math.PI / 180);
ctx.translate(-bbcShape573.around.x, -bbcShape573.around.y);
ctx.beginPath();
ctx.arc(bbcShape573.point.x, bbcShape573.point.y, bbcShape573.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(68, 196, 53)';

ctx.save();
ctx.translate(bbcShape574.around.x, bbcShape574.around.y);
ctx.rotate(bbcShape574.rotation * Math.PI / 180);
ctx.translate(-bbcShape574.around.x, -bbcShape574.around.y);
ctx.beginPath();
ctx.arc(bbcShape574.point.x, bbcShape574.point.y, bbcShape574.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(105, 126, 62)';

ctx.save();
ctx.translate(bbcShape575.around.x, bbcShape575.around.y);
ctx.rotate(bbcShape575.rotation * Math.PI / 180);
ctx.translate(-bbcShape575.around.x, -bbcShape575.around.y);
ctx.beginPath();
ctx.arc(bbcShape575.point.x, bbcShape575.point.y, bbcShape575.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(132, 238, 161)';

ctx.save();
ctx.translate(bbcShape576.around.x, bbcShape576.around.y);
ctx.rotate(bbcShape576.rotation * Math.PI / 180);
ctx.translate(-bbcShape576.around.x, -bbcShape576.around.y);
ctx.beginPath();
ctx.arc(bbcShape576.point.x, bbcShape576.point.y, bbcShape576.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 201, 148)';

ctx.save();
ctx.translate(bbcShape577.around.x, bbcShape577.around.y);
ctx.rotate(bbcShape577.rotation * Math.PI / 180);
ctx.translate(-bbcShape577.around.x, -bbcShape577.around.y);
ctx.beginPath();
ctx.arc(bbcShape577.point.x, bbcShape577.point.y, bbcShape577.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(136, 221, 181)';

ctx.save();
ctx.translate(bbcShape578.around.x, bbcShape578.around.y);
ctx.rotate(bbcShape578.rotation * Math.PI / 180);
ctx.translate(-bbcShape578.around.x, -bbcShape578.around.y);
ctx.beginPath();
ctx.arc(bbcShape578.point.x, bbcShape578.point.y, bbcShape578.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 48, 36)';

ctx.save();
ctx.translate(bbcShape579.around.x, bbcShape579.around.y);
ctx.rotate(bbcShape579.rotation * Math.PI / 180);
ctx.translate(-bbcShape579.around.x, -bbcShape579.around.y);
ctx.beginPath();
ctx.arc(bbcShape579.point.x, bbcShape579.point.y, bbcShape579.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 143, 159)';

ctx.save();
ctx.translate(bbcShape580.around.x, bbcShape580.around.y);
ctx.rotate(bbcShape580.rotation * Math.PI / 180);
ctx.translate(-bbcShape580.around.x, -bbcShape580.around.y);
ctx.beginPath();
ctx.arc(bbcShape580.point.x, bbcShape580.point.y, bbcShape580.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(123, 153, 115)';

ctx.save();
ctx.translate(bbcShape581.around.x, bbcShape581.around.y);
ctx.rotate(bbcShape581.rotation * Math.PI / 180);
ctx.translate(-bbcShape581.around.x, -bbcShape581.around.y);
ctx.beginPath();
ctx.arc(bbcShape581.point.x, bbcShape581.point.y, bbcShape581.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(149, 33, 159)';

ctx.save();
ctx.translate(bbcShape582.around.x, bbcShape582.around.y);
ctx.rotate(bbcShape582.rotation * Math.PI / 180);
ctx.translate(-bbcShape582.around.x, -bbcShape582.around.y);
ctx.beginPath();
ctx.arc(bbcShape582.point.x, bbcShape582.point.y, bbcShape582.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125, 131, 136)';

ctx.save();
ctx.translate(bbcShape583.around.x, bbcShape583.around.y);
ctx.rotate(bbcShape583.rotation * Math.PI / 180);
ctx.translate(-bbcShape583.around.x, -bbcShape583.around.y);
ctx.beginPath();
ctx.arc(bbcShape583.point.x, bbcShape583.point.y, bbcShape583.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(58, 135, 35)';

ctx.save();
ctx.translate(bbcShape584.around.x, bbcShape584.around.y);
ctx.rotate(bbcShape584.rotation * Math.PI / 180);
ctx.translate(-bbcShape584.around.x, -bbcShape584.around.y);
ctx.beginPath();
ctx.arc(bbcShape584.point.x, bbcShape584.point.y, bbcShape584.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(1, 179, 163)';

ctx.save();
ctx.translate(bbcShape585.around.x, bbcShape585.around.y);
ctx.rotate(bbcShape585.rotation * Math.PI / 180);
ctx.translate(-bbcShape585.around.x, -bbcShape585.around.y);
ctx.beginPath();
ctx.arc(bbcShape585.point.x, bbcShape585.point.y, bbcShape585.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(129, 206, 204)';

ctx.save();
ctx.translate(bbcShape586.around.x, bbcShape586.around.y);
ctx.rotate(bbcShape586.rotation * Math.PI / 180);
ctx.translate(-bbcShape586.around.x, -bbcShape586.around.y);
ctx.beginPath();
ctx.arc(bbcShape586.point.x, bbcShape586.point.y, bbcShape586.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(168, 239, 136)';

ctx.save();
ctx.translate(bbcShape587.around.x, bbcShape587.around.y);
ctx.rotate(bbcShape587.rotation * Math.PI / 180);
ctx.translate(-bbcShape587.around.x, -bbcShape587.around.y);
ctx.beginPath();
ctx.arc(bbcShape587.point.x, bbcShape587.point.y, bbcShape587.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(232, 34, 100)';

ctx.save();
ctx.translate(bbcShape588.around.x, bbcShape588.around.y);
ctx.rotate(bbcShape588.rotation * Math.PI / 180);
ctx.translate(-bbcShape588.around.x, -bbcShape588.around.y);
ctx.beginPath();
ctx.arc(bbcShape588.point.x, bbcShape588.point.y, bbcShape588.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 50, 191)';

ctx.save();
ctx.translate(bbcShape589.around.x, bbcShape589.around.y);
ctx.rotate(bbcShape589.rotation * Math.PI / 180);
ctx.translate(-bbcShape589.around.x, -bbcShape589.around.y);
ctx.beginPath();
ctx.arc(bbcShape589.point.x, bbcShape589.point.y, bbcShape589.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(67, 77, 185)';

ctx.save();
ctx.translate(bbcShape590.around.x, bbcShape590.around.y);
ctx.rotate(bbcShape590.rotation * Math.PI / 180);
ctx.translate(-bbcShape590.around.x, -bbcShape590.around.y);
ctx.beginPath();
ctx.arc(bbcShape590.point.x, bbcShape590.point.y, bbcShape590.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(7, 202, 100)';

ctx.save();
ctx.translate(bbcShape591.around.x, bbcShape591.around.y);
ctx.rotate(bbcShape591.rotation * Math.PI / 180);
ctx.translate(-bbcShape591.around.x, -bbcShape591.around.y);
ctx.beginPath();
ctx.arc(bbcShape591.point.x, bbcShape591.point.y, bbcShape591.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 164, 67)';

ctx.save();
ctx.translate(bbcShape592.around.x, bbcShape592.around.y);
ctx.rotate(bbcShape592.rotation * Math.PI / 180);
ctx.translate(-bbcShape592.around.x, -bbcShape592.around.y);
ctx.beginPath();
ctx.arc(bbcShape592.point.x, bbcShape592.point.y, bbcShape592.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(184, 22, 102)';

ctx.save();
ctx.translate(bbcShape593.around.x, bbcShape593.around.y);
ctx.rotate(bbcShape593.rotation * Math.PI / 180);
ctx.translate(-bbcShape593.around.x, -bbcShape593.around.y);
ctx.beginPath();
ctx.arc(bbcShape593.point.x, bbcShape593.point.y, bbcShape593.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(145, 136, 95)';

ctx.save();
ctx.translate(bbcShape594.around.x, bbcShape594.around.y);
ctx.rotate(bbcShape594.rotation * Math.PI / 180);
ctx.translate(-bbcShape594.around.x, -bbcShape594.around.y);
ctx.beginPath();
ctx.arc(bbcShape594.point.x, bbcShape594.point.y, bbcShape594.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(55, 155, 238)';

ctx.save();
ctx.translate(bbcShape595.around.x, bbcShape595.around.y);
ctx.rotate(bbcShape595.rotation * Math.PI / 180);
ctx.translate(-bbcShape595.around.x, -bbcShape595.around.y);
ctx.beginPath();
ctx.arc(bbcShape595.point.x, bbcShape595.point.y, bbcShape595.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 105, 192)';

ctx.save();
ctx.translate(bbcShape596.around.x, bbcShape596.around.y);
ctx.rotate(bbcShape596.rotation * Math.PI / 180);
ctx.translate(-bbcShape596.around.x, -bbcShape596.around.y);
ctx.beginPath();
ctx.arc(bbcShape596.point.x, bbcShape596.point.y, bbcShape596.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(146, 156, 18)';

ctx.save();
ctx.translate(bbcShape597.around.x, bbcShape597.around.y);
ctx.rotate(bbcShape597.rotation * Math.PI / 180);
ctx.translate(-bbcShape597.around.x, -bbcShape597.around.y);
ctx.beginPath();
ctx.arc(bbcShape597.point.x, bbcShape597.point.y, bbcShape597.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(242, 184, 127)';

ctx.save();
ctx.translate(bbcShape598.around.x, bbcShape598.around.y);
ctx.rotate(bbcShape598.rotation * Math.PI / 180);
ctx.translate(-bbcShape598.around.x, -bbcShape598.around.y);
ctx.beginPath();
ctx.arc(bbcShape598.point.x, bbcShape598.point.y, bbcShape598.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(100, 27, 156)';

ctx.save();
ctx.translate(bbcShape599.around.x, bbcShape599.around.y);
ctx.rotate(bbcShape599.rotation * Math.PI / 180);
ctx.translate(-bbcShape599.around.x, -bbcShape599.around.y);
ctx.beginPath();
ctx.arc(bbcShape599.point.x, bbcShape599.point.y, bbcShape599.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(111, 163, 57)';

ctx.save();
ctx.translate(bbcShape600.around.x, bbcShape600.around.y);
ctx.rotate(bbcShape600.rotation * Math.PI / 180);
ctx.translate(-bbcShape600.around.x, -bbcShape600.around.y);
ctx.beginPath();
ctx.arc(bbcShape600.point.x, bbcShape600.point.y, bbcShape600.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(246, 5, 67)';

ctx.save();
ctx.translate(bbcShape601.around.x, bbcShape601.around.y);
ctx.rotate(bbcShape601.rotation * Math.PI / 180);
ctx.translate(-bbcShape601.around.x, -bbcShape601.around.y);
ctx.beginPath();
ctx.arc(bbcShape601.point.x, bbcShape601.point.y, bbcShape601.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(100, 11, 38)';

ctx.save();
ctx.translate(bbcShape602.around.x, bbcShape602.around.y);
ctx.rotate(bbcShape602.rotation * Math.PI / 180);
ctx.translate(-bbcShape602.around.x, -bbcShape602.around.y);
ctx.beginPath();
ctx.arc(bbcShape602.point.x, bbcShape602.point.y, bbcShape602.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(211, 0, 193)';

ctx.save();
ctx.translate(bbcShape603.around.x, bbcShape603.around.y);
ctx.rotate(bbcShape603.rotation * Math.PI / 180);
ctx.translate(-bbcShape603.around.x, -bbcShape603.around.y);
ctx.beginPath();
ctx.arc(bbcShape603.point.x, bbcShape603.point.y, bbcShape603.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 110, 247)';

ctx.save();
ctx.translate(bbcShape604.around.x, bbcShape604.around.y);
ctx.rotate(bbcShape604.rotation * Math.PI / 180);
ctx.translate(-bbcShape604.around.x, -bbcShape604.around.y);
ctx.beginPath();
ctx.arc(bbcShape604.point.x, bbcShape604.point.y, bbcShape604.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(134, 4, 242)';

ctx.save();
ctx.translate(bbcShape605.around.x, bbcShape605.around.y);
ctx.rotate(bbcShape605.rotation * Math.PI / 180);
ctx.translate(-bbcShape605.around.x, -bbcShape605.around.y);
ctx.beginPath();
ctx.arc(bbcShape605.point.x, bbcShape605.point.y, bbcShape605.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(181, 236, 214)';

ctx.save();
ctx.translate(bbcShape606.around.x, bbcShape606.around.y);
ctx.rotate(bbcShape606.rotation * Math.PI / 180);
ctx.translate(-bbcShape606.around.x, -bbcShape606.around.y);
ctx.beginPath();
ctx.arc(bbcShape606.point.x, bbcShape606.point.y, bbcShape606.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 93, 91)';

ctx.save();
ctx.translate(bbcShape607.around.x, bbcShape607.around.y);
ctx.rotate(bbcShape607.rotation * Math.PI / 180);
ctx.translate(-bbcShape607.around.x, -bbcShape607.around.y);
ctx.beginPath();
ctx.arc(bbcShape607.point.x, bbcShape607.point.y, bbcShape607.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 243, 186)';

ctx.save();
ctx.translate(bbcShape608.around.x, bbcShape608.around.y);
ctx.rotate(bbcShape608.rotation * Math.PI / 180);
ctx.translate(-bbcShape608.around.x, -bbcShape608.around.y);
ctx.beginPath();
ctx.arc(bbcShape608.point.x, bbcShape608.point.y, bbcShape608.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(68, 99, 254)';

ctx.save();
ctx.translate(bbcShape609.around.x, bbcShape609.around.y);
ctx.rotate(bbcShape609.rotation * Math.PI / 180);
ctx.translate(-bbcShape609.around.x, -bbcShape609.around.y);
ctx.beginPath();
ctx.arc(bbcShape609.point.x, bbcShape609.point.y, bbcShape609.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(143, 192, 115)';

ctx.save();
ctx.translate(bbcShape610.around.x, bbcShape610.around.y);
ctx.rotate(bbcShape610.rotation * Math.PI / 180);
ctx.translate(-bbcShape610.around.x, -bbcShape610.around.y);
ctx.beginPath();
ctx.arc(bbcShape610.point.x, bbcShape610.point.y, bbcShape610.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(199, 182, 37)';

ctx.save();
ctx.translate(bbcShape611.around.x, bbcShape611.around.y);
ctx.rotate(bbcShape611.rotation * Math.PI / 180);
ctx.translate(-bbcShape611.around.x, -bbcShape611.around.y);
ctx.beginPath();
ctx.arc(bbcShape611.point.x, bbcShape611.point.y, bbcShape611.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 161, 123)';

ctx.save();
ctx.translate(bbcShape612.around.x, bbcShape612.around.y);
ctx.rotate(bbcShape612.rotation * Math.PI / 180);
ctx.translate(-bbcShape612.around.x, -bbcShape612.around.y);
ctx.beginPath();
ctx.arc(bbcShape612.point.x, bbcShape612.point.y, bbcShape612.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(28, 93, 216)';

ctx.save();
ctx.translate(bbcShape613.around.x, bbcShape613.around.y);
ctx.rotate(bbcShape613.rotation * Math.PI / 180);
ctx.translate(-bbcShape613.around.x, -bbcShape613.around.y);
ctx.beginPath();
ctx.arc(bbcShape613.point.x, bbcShape613.point.y, bbcShape613.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 195, 2)';

ctx.save();
ctx.translate(bbcShape614.around.x, bbcShape614.around.y);
ctx.rotate(bbcShape614.rotation * Math.PI / 180);
ctx.translate(-bbcShape614.around.x, -bbcShape614.around.y);
ctx.beginPath();
ctx.arc(bbcShape614.point.x, bbcShape614.point.y, bbcShape614.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(185, 136, 171)';

ctx.save();
ctx.translate(bbcShape615.around.x, bbcShape615.around.y);
ctx.rotate(bbcShape615.rotation * Math.PI / 180);
ctx.translate(-bbcShape615.around.x, -bbcShape615.around.y);
ctx.beginPath();
ctx.arc(bbcShape615.point.x, bbcShape615.point.y, bbcShape615.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(129, 11, 72)';

ctx.save();
ctx.translate(bbcShape616.around.x, bbcShape616.around.y);
ctx.rotate(bbcShape616.rotation * Math.PI / 180);
ctx.translate(-bbcShape616.around.x, -bbcShape616.around.y);
ctx.beginPath();
ctx.arc(bbcShape616.point.x, bbcShape616.point.y, bbcShape616.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 3, 233)';

ctx.save();
ctx.translate(bbcShape617.around.x, bbcShape617.around.y);
ctx.rotate(bbcShape617.rotation * Math.PI / 180);
ctx.translate(-bbcShape617.around.x, -bbcShape617.around.y);
ctx.beginPath();
ctx.arc(bbcShape617.point.x, bbcShape617.point.y, bbcShape617.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(92, 36, 249)';

ctx.save();
ctx.translate(bbcShape618.around.x, bbcShape618.around.y);
ctx.rotate(bbcShape618.rotation * Math.PI / 180);
ctx.translate(-bbcShape618.around.x, -bbcShape618.around.y);
ctx.beginPath();
ctx.arc(bbcShape618.point.x, bbcShape618.point.y, bbcShape618.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(127, 79, 174)';

ctx.save();
ctx.translate(bbcShape619.around.x, bbcShape619.around.y);
ctx.rotate(bbcShape619.rotation * Math.PI / 180);
ctx.translate(-bbcShape619.around.x, -bbcShape619.around.y);
ctx.beginPath();
ctx.arc(bbcShape619.point.x, bbcShape619.point.y, bbcShape619.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 235, 85)';

ctx.save();
ctx.translate(bbcShape620.around.x, bbcShape620.around.y);
ctx.rotate(bbcShape620.rotation * Math.PI / 180);
ctx.translate(-bbcShape620.around.x, -bbcShape620.around.y);
ctx.beginPath();
ctx.arc(bbcShape620.point.x, bbcShape620.point.y, bbcShape620.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(238, 161, 172)';

ctx.save();
ctx.translate(bbcShape621.around.x, bbcShape621.around.y);
ctx.rotate(bbcShape621.rotation * Math.PI / 180);
ctx.translate(-bbcShape621.around.x, -bbcShape621.around.y);
ctx.beginPath();
ctx.arc(bbcShape621.point.x, bbcShape621.point.y, bbcShape621.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 94, 40)';

ctx.save();
ctx.translate(bbcShape622.around.x, bbcShape622.around.y);
ctx.rotate(bbcShape622.rotation * Math.PI / 180);
ctx.translate(-bbcShape622.around.x, -bbcShape622.around.y);
ctx.beginPath();
ctx.arc(bbcShape622.point.x, bbcShape622.point.y, bbcShape622.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(32, 88, 112)';

ctx.save();
ctx.translate(bbcShape623.around.x, bbcShape623.around.y);
ctx.rotate(bbcShape623.rotation * Math.PI / 180);
ctx.translate(-bbcShape623.around.x, -bbcShape623.around.y);
ctx.beginPath();
ctx.arc(bbcShape623.point.x, bbcShape623.point.y, bbcShape623.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 229, 75)';

ctx.save();
ctx.translate(bbcShape624.around.x, bbcShape624.around.y);
ctx.rotate(bbcShape624.rotation * Math.PI / 180);
ctx.translate(-bbcShape624.around.x, -bbcShape624.around.y);
ctx.beginPath();
ctx.arc(bbcShape624.point.x, bbcShape624.point.y, bbcShape624.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(94, 55, 225)';

ctx.save();
ctx.translate(bbcShape625.around.x, bbcShape625.around.y);
ctx.rotate(bbcShape625.rotation * Math.PI / 180);
ctx.translate(-bbcShape625.around.x, -bbcShape625.around.y);
ctx.beginPath();
ctx.arc(bbcShape625.point.x, bbcShape625.point.y, bbcShape625.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 154, 122)';

ctx.save();
ctx.translate(bbcShape626.around.x, bbcShape626.around.y);
ctx.rotate(bbcShape626.rotation * Math.PI / 180);
ctx.translate(-bbcShape626.around.x, -bbcShape626.around.y);
ctx.beginPath();
ctx.arc(bbcShape626.point.x, bbcShape626.point.y, bbcShape626.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(35, 138, 68)';

ctx.save();
ctx.translate(bbcShape627.around.x, bbcShape627.around.y);
ctx.rotate(bbcShape627.rotation * Math.PI / 180);
ctx.translate(-bbcShape627.around.x, -bbcShape627.around.y);
ctx.beginPath();
ctx.arc(bbcShape627.point.x, bbcShape627.point.y, bbcShape627.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255, 90, 4)';

ctx.save();
ctx.translate(bbcShape628.around.x, bbcShape628.around.y);
ctx.rotate(bbcShape628.rotation * Math.PI / 180);
ctx.translate(-bbcShape628.around.x, -bbcShape628.around.y);
ctx.beginPath();
ctx.arc(bbcShape628.point.x, bbcShape628.point.y, bbcShape628.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(233, 39, 157)';

ctx.save();
ctx.translate(bbcShape629.around.x, bbcShape629.around.y);
ctx.rotate(bbcShape629.rotation * Math.PI / 180);
ctx.translate(-bbcShape629.around.x, -bbcShape629.around.y);
ctx.beginPath();
ctx.arc(bbcShape629.point.x, bbcShape629.point.y, bbcShape629.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(17, 91, 83)';

ctx.save();
ctx.translate(bbcShape630.around.x, bbcShape630.around.y);
ctx.rotate(bbcShape630.rotation * Math.PI / 180);
ctx.translate(-bbcShape630.around.x, -bbcShape630.around.y);
ctx.beginPath();
ctx.arc(bbcShape630.point.x, bbcShape630.point.y, bbcShape630.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(91, 250, 92)';

ctx.save();
ctx.translate(bbcShape631.around.x, bbcShape631.around.y);
ctx.rotate(bbcShape631.rotation * Math.PI / 180);
ctx.translate(-bbcShape631.around.x, -bbcShape631.around.y);
ctx.beginPath();
ctx.arc(bbcShape631.point.x, bbcShape631.point.y, bbcShape631.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(54, 227, 122)';

ctx.save();
ctx.translate(bbcShape632.around.x, bbcShape632.around.y);
ctx.rotate(bbcShape632.rotation * Math.PI / 180);
ctx.translate(-bbcShape632.around.x, -bbcShape632.around.y);
ctx.beginPath();
ctx.arc(bbcShape632.point.x, bbcShape632.point.y, bbcShape632.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 10, 36)';

ctx.save();
ctx.translate(bbcShape633.around.x, bbcShape633.around.y);
ctx.rotate(bbcShape633.rotation * Math.PI / 180);
ctx.translate(-bbcShape633.around.x, -bbcShape633.around.y);
ctx.beginPath();
ctx.arc(bbcShape633.point.x, bbcShape633.point.y, bbcShape633.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 243, 252)';

ctx.save();
ctx.translate(bbcShape634.around.x, bbcShape634.around.y);
ctx.rotate(bbcShape634.rotation * Math.PI / 180);
ctx.translate(-bbcShape634.around.x, -bbcShape634.around.y);
ctx.beginPath();
ctx.arc(bbcShape634.point.x, bbcShape634.point.y, bbcShape634.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(152, 105, 143)';

ctx.save();
ctx.translate(bbcShape635.around.x, bbcShape635.around.y);
ctx.rotate(bbcShape635.rotation * Math.PI / 180);
ctx.translate(-bbcShape635.around.x, -bbcShape635.around.y);
ctx.beginPath();
ctx.arc(bbcShape635.point.x, bbcShape635.point.y, bbcShape635.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(142, 11, 11)';

ctx.save();
ctx.translate(bbcShape636.around.x, bbcShape636.around.y);
ctx.rotate(bbcShape636.rotation * Math.PI / 180);
ctx.translate(-bbcShape636.around.x, -bbcShape636.around.y);
ctx.beginPath();
ctx.arc(bbcShape636.point.x, bbcShape636.point.y, bbcShape636.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125, 252, 176)';

ctx.save();
ctx.translate(bbcShape637.around.x, bbcShape637.around.y);
ctx.rotate(bbcShape637.rotation * Math.PI / 180);
ctx.translate(-bbcShape637.around.x, -bbcShape637.around.y);
ctx.beginPath();
ctx.arc(bbcShape637.point.x, bbcShape637.point.y, bbcShape637.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(93, 49, 30)';

ctx.save();
ctx.translate(bbcShape638.around.x, bbcShape638.around.y);
ctx.rotate(bbcShape638.rotation * Math.PI / 180);
ctx.translate(-bbcShape638.around.x, -bbcShape638.around.y);
ctx.beginPath();
ctx.arc(bbcShape638.point.x, bbcShape638.point.y, bbcShape638.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(211, 87, 66)';

ctx.save();
ctx.translate(bbcShape639.around.x, bbcShape639.around.y);
ctx.rotate(bbcShape639.rotation * Math.PI / 180);
ctx.translate(-bbcShape639.around.x, -bbcShape639.around.y);
ctx.beginPath();
ctx.arc(bbcShape639.point.x, bbcShape639.point.y, bbcShape639.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(79, 55, 183)';

ctx.save();
ctx.translate(bbcShape640.around.x, bbcShape640.around.y);
ctx.rotate(bbcShape640.rotation * Math.PI / 180);
ctx.translate(-bbcShape640.around.x, -bbcShape640.around.y);
ctx.beginPath();
ctx.arc(bbcShape640.point.x, bbcShape640.point.y, bbcShape640.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(28, 160, 52)';

ctx.save();
ctx.translate(bbcShape641.around.x, bbcShape641.around.y);
ctx.rotate(bbcShape641.rotation * Math.PI / 180);
ctx.translate(-bbcShape641.around.x, -bbcShape641.around.y);
ctx.beginPath();
ctx.arc(bbcShape641.point.x, bbcShape641.point.y, bbcShape641.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(7, 85, 254)';

ctx.save();
ctx.translate(bbcShape642.around.x, bbcShape642.around.y);
ctx.rotate(bbcShape642.rotation * Math.PI / 180);
ctx.translate(-bbcShape642.around.x, -bbcShape642.around.y);
ctx.beginPath();
ctx.arc(bbcShape642.point.x, bbcShape642.point.y, bbcShape642.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(157, 120, 115)';

ctx.save();
ctx.translate(bbcShape643.around.x, bbcShape643.around.y);
ctx.rotate(bbcShape643.rotation * Math.PI / 180);
ctx.translate(-bbcShape643.around.x, -bbcShape643.around.y);
ctx.beginPath();
ctx.arc(bbcShape643.point.x, bbcShape643.point.y, bbcShape643.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(198, 175, 3)';

ctx.save();
ctx.translate(bbcShape644.around.x, bbcShape644.around.y);
ctx.rotate(bbcShape644.rotation * Math.PI / 180);
ctx.translate(-bbcShape644.around.x, -bbcShape644.around.y);
ctx.beginPath();
ctx.arc(bbcShape644.point.x, bbcShape644.point.y, bbcShape644.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(240, 138, 82)';

ctx.save();
ctx.translate(bbcShape645.around.x, bbcShape645.around.y);
ctx.rotate(bbcShape645.rotation * Math.PI / 180);
ctx.translate(-bbcShape645.around.x, -bbcShape645.around.y);
ctx.beginPath();
ctx.arc(bbcShape645.point.x, bbcShape645.point.y, bbcShape645.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(48, 110, 131)';

ctx.save();
ctx.translate(bbcShape646.around.x, bbcShape646.around.y);
ctx.rotate(bbcShape646.rotation * Math.PI / 180);
ctx.translate(-bbcShape646.around.x, -bbcShape646.around.y);
ctx.beginPath();
ctx.arc(bbcShape646.point.x, bbcShape646.point.y, bbcShape646.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(176, 58, 177)';

ctx.save();
ctx.translate(bbcShape647.around.x, bbcShape647.around.y);
ctx.rotate(bbcShape647.rotation * Math.PI / 180);
ctx.translate(-bbcShape647.around.x, -bbcShape647.around.y);
ctx.beginPath();
ctx.arc(bbcShape647.point.x, bbcShape647.point.y, bbcShape647.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(224, 214, 49)';

ctx.save();
ctx.translate(bbcShape648.around.x, bbcShape648.around.y);
ctx.rotate(bbcShape648.rotation * Math.PI / 180);
ctx.translate(-bbcShape648.around.x, -bbcShape648.around.y);
ctx.beginPath();
ctx.arc(bbcShape648.point.x, bbcShape648.point.y, bbcShape648.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 224, 81)';

ctx.save();
ctx.translate(bbcShape649.around.x, bbcShape649.around.y);
ctx.rotate(bbcShape649.rotation * Math.PI / 180);
ctx.translate(-bbcShape649.around.x, -bbcShape649.around.y);
ctx.beginPath();
ctx.arc(bbcShape649.point.x, bbcShape649.point.y, bbcShape649.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 59, 107)';

ctx.save();
ctx.translate(bbcShape650.around.x, bbcShape650.around.y);
ctx.rotate(bbcShape650.rotation * Math.PI / 180);
ctx.translate(-bbcShape650.around.x, -bbcShape650.around.y);
ctx.beginPath();
ctx.arc(bbcShape650.point.x, bbcShape650.point.y, bbcShape650.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(74, 221, 246)';

ctx.save();
ctx.translate(bbcShape651.around.x, bbcShape651.around.y);
ctx.rotate(bbcShape651.rotation * Math.PI / 180);
ctx.translate(-bbcShape651.around.x, -bbcShape651.around.y);
ctx.beginPath();
ctx.arc(bbcShape651.point.x, bbcShape651.point.y, bbcShape651.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(20, 250, 221)';

ctx.save();
ctx.translate(bbcShape652.around.x, bbcShape652.around.y);
ctx.rotate(bbcShape652.rotation * Math.PI / 180);
ctx.translate(-bbcShape652.around.x, -bbcShape652.around.y);
ctx.beginPath();
ctx.arc(bbcShape652.point.x, bbcShape652.point.y, bbcShape652.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 30, 158)';

ctx.save();
ctx.translate(bbcShape653.around.x, bbcShape653.around.y);
ctx.rotate(bbcShape653.rotation * Math.PI / 180);
ctx.translate(-bbcShape653.around.x, -bbcShape653.around.y);
ctx.beginPath();
ctx.arc(bbcShape653.point.x, bbcShape653.point.y, bbcShape653.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(175, 156, 46)';

ctx.save();
ctx.translate(bbcShape654.around.x, bbcShape654.around.y);
ctx.rotate(bbcShape654.rotation * Math.PI / 180);
ctx.translate(-bbcShape654.around.x, -bbcShape654.around.y);
ctx.beginPath();
ctx.arc(bbcShape654.point.x, bbcShape654.point.y, bbcShape654.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(22, 100, 120)';

ctx.save();
ctx.translate(bbcShape655.around.x, bbcShape655.around.y);
ctx.rotate(bbcShape655.rotation * Math.PI / 180);
ctx.translate(-bbcShape655.around.x, -bbcShape655.around.y);
ctx.beginPath();
ctx.arc(bbcShape655.point.x, bbcShape655.point.y, bbcShape655.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(48, 170, 119)';

ctx.save();
ctx.translate(bbcShape656.around.x, bbcShape656.around.y);
ctx.rotate(bbcShape656.rotation * Math.PI / 180);
ctx.translate(-bbcShape656.around.x, -bbcShape656.around.y);
ctx.beginPath();
ctx.arc(bbcShape656.point.x, bbcShape656.point.y, bbcShape656.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(107, 17, 240)';

ctx.save();
ctx.translate(bbcShape657.around.x, bbcShape657.around.y);
ctx.rotate(bbcShape657.rotation * Math.PI / 180);
ctx.translate(-bbcShape657.around.x, -bbcShape657.around.y);
ctx.beginPath();
ctx.arc(bbcShape657.point.x, bbcShape657.point.y, bbcShape657.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(150, 45, 170)';

ctx.save();
ctx.translate(bbcShape658.around.x, bbcShape658.around.y);
ctx.rotate(bbcShape658.rotation * Math.PI / 180);
ctx.translate(-bbcShape658.around.x, -bbcShape658.around.y);
ctx.beginPath();
ctx.arc(bbcShape658.point.x, bbcShape658.point.y, bbcShape658.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(138, 161, 159)';

ctx.save();
ctx.translate(bbcShape659.around.x, bbcShape659.around.y);
ctx.rotate(bbcShape659.rotation * Math.PI / 180);
ctx.translate(-bbcShape659.around.x, -bbcShape659.around.y);
ctx.beginPath();
ctx.arc(bbcShape659.point.x, bbcShape659.point.y, bbcShape659.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 52, 240)';

ctx.save();
ctx.translate(bbcShape660.around.x, bbcShape660.around.y);
ctx.rotate(bbcShape660.rotation * Math.PI / 180);
ctx.translate(-bbcShape660.around.x, -bbcShape660.around.y);
ctx.beginPath();
ctx.arc(bbcShape660.point.x, bbcShape660.point.y, bbcShape660.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(138, 87, 76)';

ctx.save();
ctx.translate(bbcShape661.around.x, bbcShape661.around.y);
ctx.rotate(bbcShape661.rotation * Math.PI / 180);
ctx.translate(-bbcShape661.around.x, -bbcShape661.around.y);
ctx.beginPath();
ctx.arc(bbcShape661.point.x, bbcShape661.point.y, bbcShape661.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(142, 164, 54)';

ctx.save();
ctx.translate(bbcShape662.around.x, bbcShape662.around.y);
ctx.rotate(bbcShape662.rotation * Math.PI / 180);
ctx.translate(-bbcShape662.around.x, -bbcShape662.around.y);
ctx.beginPath();
ctx.arc(bbcShape662.point.x, bbcShape662.point.y, bbcShape662.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(94, 197, 148)';

ctx.save();
ctx.translate(bbcShape663.around.x, bbcShape663.around.y);
ctx.rotate(bbcShape663.rotation * Math.PI / 180);
ctx.translate(-bbcShape663.around.x, -bbcShape663.around.y);
ctx.beginPath();
ctx.arc(bbcShape663.point.x, bbcShape663.point.y, bbcShape663.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(236, 245, 174)';

ctx.save();
ctx.translate(bbcShape664.around.x, bbcShape664.around.y);
ctx.rotate(bbcShape664.rotation * Math.PI / 180);
ctx.translate(-bbcShape664.around.x, -bbcShape664.around.y);
ctx.beginPath();
ctx.arc(bbcShape664.point.x, bbcShape664.point.y, bbcShape664.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(122, 163, 129)';

ctx.save();
ctx.translate(bbcShape665.around.x, bbcShape665.around.y);
ctx.rotate(bbcShape665.rotation * Math.PI / 180);
ctx.translate(-bbcShape665.around.x, -bbcShape665.around.y);
ctx.beginPath();
ctx.arc(bbcShape665.point.x, bbcShape665.point.y, bbcShape665.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(79, 194, 112)';

ctx.save();
ctx.translate(bbcShape666.around.x, bbcShape666.around.y);
ctx.rotate(bbcShape666.rotation * Math.PI / 180);
ctx.translate(-bbcShape666.around.x, -bbcShape666.around.y);
ctx.beginPath();
ctx.arc(bbcShape666.point.x, bbcShape666.point.y, bbcShape666.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(79, 90, 183)';

ctx.save();
ctx.translate(bbcShape667.around.x, bbcShape667.around.y);
ctx.rotate(bbcShape667.rotation * Math.PI / 180);
ctx.translate(-bbcShape667.around.x, -bbcShape667.around.y);
ctx.beginPath();
ctx.arc(bbcShape667.point.x, bbcShape667.point.y, bbcShape667.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(145, 99, 100)';

ctx.save();
ctx.translate(bbcShape668.around.x, bbcShape668.around.y);
ctx.rotate(bbcShape668.rotation * Math.PI / 180);
ctx.translate(-bbcShape668.around.x, -bbcShape668.around.y);
ctx.beginPath();
ctx.arc(bbcShape668.point.x, bbcShape668.point.y, bbcShape668.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(132, 93, 12)';

ctx.save();
ctx.translate(bbcShape669.around.x, bbcShape669.around.y);
ctx.rotate(bbcShape669.rotation * Math.PI / 180);
ctx.translate(-bbcShape669.around.x, -bbcShape669.around.y);
ctx.beginPath();
ctx.arc(bbcShape669.point.x, bbcShape669.point.y, bbcShape669.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(185, 204, 130)';

ctx.save();
ctx.translate(bbcShape670.around.x, bbcShape670.around.y);
ctx.rotate(bbcShape670.rotation * Math.PI / 180);
ctx.translate(-bbcShape670.around.x, -bbcShape670.around.y);
ctx.beginPath();
ctx.arc(bbcShape670.point.x, bbcShape670.point.y, bbcShape670.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(237, 86, 120)';

ctx.save();
ctx.translate(bbcShape671.around.x, bbcShape671.around.y);
ctx.rotate(bbcShape671.rotation * Math.PI / 180);
ctx.translate(-bbcShape671.around.x, -bbcShape671.around.y);
ctx.beginPath();
ctx.arc(bbcShape671.point.x, bbcShape671.point.y, bbcShape671.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(58, 33, 234)';

ctx.save();
ctx.translate(bbcShape672.around.x, bbcShape672.around.y);
ctx.rotate(bbcShape672.rotation * Math.PI / 180);
ctx.translate(-bbcShape672.around.x, -bbcShape672.around.y);
ctx.beginPath();
ctx.arc(bbcShape672.point.x, bbcShape672.point.y, bbcShape672.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(1, 120, 159)';

ctx.save();
ctx.translate(bbcShape673.around.x, bbcShape673.around.y);
ctx.rotate(bbcShape673.rotation * Math.PI / 180);
ctx.translate(-bbcShape673.around.x, -bbcShape673.around.y);
ctx.beginPath();
ctx.arc(bbcShape673.point.x, bbcShape673.point.y, bbcShape673.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(232, 143, 130)';

ctx.save();
ctx.translate(bbcShape674.around.x, bbcShape674.around.y);
ctx.rotate(bbcShape674.rotation * Math.PI / 180);
ctx.translate(-bbcShape674.around.x, -bbcShape674.around.y);
ctx.beginPath();
ctx.arc(bbcShape674.point.x, bbcShape674.point.y, bbcShape674.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(146, 3, 244)';

ctx.save();
ctx.translate(bbcShape675.around.x, bbcShape675.around.y);
ctx.rotate(bbcShape675.rotation * Math.PI / 180);
ctx.translate(-bbcShape675.around.x, -bbcShape675.around.y);
ctx.beginPath();
ctx.arc(bbcShape675.point.x, bbcShape675.point.y, bbcShape675.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 32, 26)';

ctx.save();
ctx.translate(bbcShape676.around.x, bbcShape676.around.y);
ctx.rotate(bbcShape676.rotation * Math.PI / 180);
ctx.translate(-bbcShape676.around.x, -bbcShape676.around.y);
ctx.beginPath();
ctx.arc(bbcShape676.point.x, bbcShape676.point.y, bbcShape676.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(190, 227, 65)';

ctx.save();
ctx.translate(bbcShape677.around.x, bbcShape677.around.y);
ctx.rotate(bbcShape677.rotation * Math.PI / 180);
ctx.translate(-bbcShape677.around.x, -bbcShape677.around.y);
ctx.beginPath();
ctx.arc(bbcShape677.point.x, bbcShape677.point.y, bbcShape677.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 88, 17)';

ctx.save();
ctx.translate(bbcShape678.around.x, bbcShape678.around.y);
ctx.rotate(bbcShape678.rotation * Math.PI / 180);
ctx.translate(-bbcShape678.around.x, -bbcShape678.around.y);
ctx.beginPath();
ctx.arc(bbcShape678.point.x, bbcShape678.point.y, bbcShape678.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(54, 38, 16)';

ctx.save();
ctx.translate(bbcShape679.around.x, bbcShape679.around.y);
ctx.rotate(bbcShape679.rotation * Math.PI / 180);
ctx.translate(-bbcShape679.around.x, -bbcShape679.around.y);
ctx.beginPath();
ctx.arc(bbcShape679.point.x, bbcShape679.point.y, bbcShape679.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(62, 21, 127)';

ctx.save();
ctx.translate(bbcShape680.around.x, bbcShape680.around.y);
ctx.rotate(bbcShape680.rotation * Math.PI / 180);
ctx.translate(-bbcShape680.around.x, -bbcShape680.around.y);
ctx.beginPath();
ctx.arc(bbcShape680.point.x, bbcShape680.point.y, bbcShape680.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(78, 39, 151)';

ctx.save();
ctx.translate(bbcShape681.around.x, bbcShape681.around.y);
ctx.rotate(bbcShape681.rotation * Math.PI / 180);
ctx.translate(-bbcShape681.around.x, -bbcShape681.around.y);
ctx.beginPath();
ctx.arc(bbcShape681.point.x, bbcShape681.point.y, bbcShape681.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 142, 225)';

ctx.save();
ctx.translate(bbcShape682.around.x, bbcShape682.around.y);
ctx.rotate(bbcShape682.rotation * Math.PI / 180);
ctx.translate(-bbcShape682.around.x, -bbcShape682.around.y);
ctx.beginPath();
ctx.arc(bbcShape682.point.x, bbcShape682.point.y, bbcShape682.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(4, 247, 129)';

ctx.save();
ctx.translate(bbcShape683.around.x, bbcShape683.around.y);
ctx.rotate(bbcShape683.rotation * Math.PI / 180);
ctx.translate(-bbcShape683.around.x, -bbcShape683.around.y);
ctx.beginPath();
ctx.arc(bbcShape683.point.x, bbcShape683.point.y, bbcShape683.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(219, 47, 127)';

ctx.save();
ctx.translate(bbcShape684.around.x, bbcShape684.around.y);
ctx.rotate(bbcShape684.rotation * Math.PI / 180);
ctx.translate(-bbcShape684.around.x, -bbcShape684.around.y);
ctx.beginPath();
ctx.arc(bbcShape684.point.x, bbcShape684.point.y, bbcShape684.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(34, 175, 237)';

ctx.save();
ctx.translate(bbcShape685.around.x, bbcShape685.around.y);
ctx.rotate(bbcShape685.rotation * Math.PI / 180);
ctx.translate(-bbcShape685.around.x, -bbcShape685.around.y);
ctx.beginPath();
ctx.arc(bbcShape685.point.x, bbcShape685.point.y, bbcShape685.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(242, 107, 207)';

ctx.save();
ctx.translate(bbcShape686.around.x, bbcShape686.around.y);
ctx.rotate(bbcShape686.rotation * Math.PI / 180);
ctx.translate(-bbcShape686.around.x, -bbcShape686.around.y);
ctx.beginPath();
ctx.arc(bbcShape686.point.x, bbcShape686.point.y, bbcShape686.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(37, 21, 189)';

ctx.save();
ctx.translate(bbcShape687.around.x, bbcShape687.around.y);
ctx.rotate(bbcShape687.rotation * Math.PI / 180);
ctx.translate(-bbcShape687.around.x, -bbcShape687.around.y);
ctx.beginPath();
ctx.arc(bbcShape687.point.x, bbcShape687.point.y, bbcShape687.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(152, 81, 67)';

ctx.save();
ctx.translate(bbcShape688.around.x, bbcShape688.around.y);
ctx.rotate(bbcShape688.rotation * Math.PI / 180);
ctx.translate(-bbcShape688.around.x, -bbcShape688.around.y);
ctx.beginPath();
ctx.arc(bbcShape688.point.x, bbcShape688.point.y, bbcShape688.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(63, 100, 4)';

ctx.save();
ctx.translate(bbcShape689.around.x, bbcShape689.around.y);
ctx.rotate(bbcShape689.rotation * Math.PI / 180);
ctx.translate(-bbcShape689.around.x, -bbcShape689.around.y);
ctx.beginPath();
ctx.arc(bbcShape689.point.x, bbcShape689.point.y, bbcShape689.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(199, 90, 29)';

ctx.save();
ctx.translate(bbcShape690.around.x, bbcShape690.around.y);
ctx.rotate(bbcShape690.rotation * Math.PI / 180);
ctx.translate(-bbcShape690.around.x, -bbcShape690.around.y);
ctx.beginPath();
ctx.arc(bbcShape690.point.x, bbcShape690.point.y, bbcShape690.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225, 175, 143)';

ctx.save();
ctx.translate(bbcShape691.around.x, bbcShape691.around.y);
ctx.rotate(bbcShape691.rotation * Math.PI / 180);
ctx.translate(-bbcShape691.around.x, -bbcShape691.around.y);
ctx.beginPath();
ctx.arc(bbcShape691.point.x, bbcShape691.point.y, bbcShape691.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 210, 57)';

ctx.save();
ctx.translate(bbcShape692.around.x, bbcShape692.around.y);
ctx.rotate(bbcShape692.rotation * Math.PI / 180);
ctx.translate(-bbcShape692.around.x, -bbcShape692.around.y);
ctx.beginPath();
ctx.arc(bbcShape692.point.x, bbcShape692.point.y, bbcShape692.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(40, 53, 67)';

ctx.save();
ctx.translate(bbcShape693.around.x, bbcShape693.around.y);
ctx.rotate(bbcShape693.rotation * Math.PI / 180);
ctx.translate(-bbcShape693.around.x, -bbcShape693.around.y);
ctx.beginPath();
ctx.arc(bbcShape693.point.x, bbcShape693.point.y, bbcShape693.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 50, 4)';

ctx.save();
ctx.translate(bbcShape694.around.x, bbcShape694.around.y);
ctx.rotate(bbcShape694.rotation * Math.PI / 180);
ctx.translate(-bbcShape694.around.x, -bbcShape694.around.y);
ctx.beginPath();
ctx.arc(bbcShape694.point.x, bbcShape694.point.y, bbcShape694.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(7, 1, 159)';

ctx.save();
ctx.translate(bbcShape695.around.x, bbcShape695.around.y);
ctx.rotate(bbcShape695.rotation * Math.PI / 180);
ctx.translate(-bbcShape695.around.x, -bbcShape695.around.y);
ctx.beginPath();
ctx.arc(bbcShape695.point.x, bbcShape695.point.y, bbcShape695.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 141, 217)';

ctx.save();
ctx.translate(bbcShape696.around.x, bbcShape696.around.y);
ctx.rotate(bbcShape696.rotation * Math.PI / 180);
ctx.translate(-bbcShape696.around.x, -bbcShape696.around.y);
ctx.beginPath();
ctx.arc(bbcShape696.point.x, bbcShape696.point.y, bbcShape696.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(130, 235, 220)';

ctx.save();
ctx.translate(bbcShape697.around.x, bbcShape697.around.y);
ctx.rotate(bbcShape697.rotation * Math.PI / 180);
ctx.translate(-bbcShape697.around.x, -bbcShape697.around.y);
ctx.beginPath();
ctx.arc(bbcShape697.point.x, bbcShape697.point.y, bbcShape697.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 173, 223)';

ctx.save();
ctx.translate(bbcShape698.around.x, bbcShape698.around.y);
ctx.rotate(bbcShape698.rotation * Math.PI / 180);
ctx.translate(-bbcShape698.around.x, -bbcShape698.around.y);
ctx.beginPath();
ctx.arc(bbcShape698.point.x, bbcShape698.point.y, bbcShape698.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(3, 95, 148)';

ctx.save();
ctx.translate(bbcShape699.around.x, bbcShape699.around.y);
ctx.rotate(bbcShape699.rotation * Math.PI / 180);
ctx.translate(-bbcShape699.around.x, -bbcShape699.around.y);
ctx.beginPath();
ctx.arc(bbcShape699.point.x, bbcShape699.point.y, bbcShape699.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(103, 68, 169)';

ctx.save();
ctx.translate(bbcShape700.around.x, bbcShape700.around.y);
ctx.rotate(bbcShape700.rotation * Math.PI / 180);
ctx.translate(-bbcShape700.around.x, -bbcShape700.around.y);
ctx.beginPath();
ctx.arc(bbcShape700.point.x, bbcShape700.point.y, bbcShape700.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(157, 111, 80)';

ctx.save();
ctx.translate(bbcShape701.around.x, bbcShape701.around.y);
ctx.rotate(bbcShape701.rotation * Math.PI / 180);
ctx.translate(-bbcShape701.around.x, -bbcShape701.around.y);
ctx.beginPath();
ctx.arc(bbcShape701.point.x, bbcShape701.point.y, bbcShape701.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 216, 68)';

ctx.save();
ctx.translate(bbcShape702.around.x, bbcShape702.around.y);
ctx.rotate(bbcShape702.rotation * Math.PI / 180);
ctx.translate(-bbcShape702.around.x, -bbcShape702.around.y);
ctx.beginPath();
ctx.arc(bbcShape702.point.x, bbcShape702.point.y, bbcShape702.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(139, 52, 127)';

ctx.save();
ctx.translate(bbcShape703.around.x, bbcShape703.around.y);
ctx.rotate(bbcShape703.rotation * Math.PI / 180);
ctx.translate(-bbcShape703.around.x, -bbcShape703.around.y);
ctx.beginPath();
ctx.arc(bbcShape703.point.x, bbcShape703.point.y, bbcShape703.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(23, 21, 92)';

ctx.save();
ctx.translate(bbcShape704.around.x, bbcShape704.around.y);
ctx.rotate(bbcShape704.rotation * Math.PI / 180);
ctx.translate(-bbcShape704.around.x, -bbcShape704.around.y);
ctx.beginPath();
ctx.arc(bbcShape704.point.x, bbcShape704.point.y, bbcShape704.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(79, 153, 185)';

ctx.save();
ctx.translate(bbcShape705.around.x, bbcShape705.around.y);
ctx.rotate(bbcShape705.rotation * Math.PI / 180);
ctx.translate(-bbcShape705.around.x, -bbcShape705.around.y);
ctx.beginPath();
ctx.arc(bbcShape705.point.x, bbcShape705.point.y, bbcShape705.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 45, 127)';

ctx.save();
ctx.translate(bbcShape706.around.x, bbcShape706.around.y);
ctx.rotate(bbcShape706.rotation * Math.PI / 180);
ctx.translate(-bbcShape706.around.x, -bbcShape706.around.y);
ctx.beginPath();
ctx.arc(bbcShape706.point.x, bbcShape706.point.y, bbcShape706.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(40, 153, 69)';

ctx.save();
ctx.translate(bbcShape707.around.x, bbcShape707.around.y);
ctx.rotate(bbcShape707.rotation * Math.PI / 180);
ctx.translate(-bbcShape707.around.x, -bbcShape707.around.y);
ctx.beginPath();
ctx.arc(bbcShape707.point.x, bbcShape707.point.y, bbcShape707.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(203, 54, 96)';

ctx.save();
ctx.translate(bbcShape708.around.x, bbcShape708.around.y);
ctx.rotate(bbcShape708.rotation * Math.PI / 180);
ctx.translate(-bbcShape708.around.x, -bbcShape708.around.y);
ctx.beginPath();
ctx.arc(bbcShape708.point.x, bbcShape708.point.y, bbcShape708.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(134, 190, 33)';

ctx.save();
ctx.translate(bbcShape709.around.x, bbcShape709.around.y);
ctx.rotate(bbcShape709.rotation * Math.PI / 180);
ctx.translate(-bbcShape709.around.x, -bbcShape709.around.y);
ctx.beginPath();
ctx.arc(bbcShape709.point.x, bbcShape709.point.y, bbcShape709.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(233, 65, 38)';

ctx.save();
ctx.translate(bbcShape710.around.x, bbcShape710.around.y);
ctx.rotate(bbcShape710.rotation * Math.PI / 180);
ctx.translate(-bbcShape710.around.x, -bbcShape710.around.y);
ctx.beginPath();
ctx.arc(bbcShape710.point.x, bbcShape710.point.y, bbcShape710.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(240, 228, 8)';

ctx.save();
ctx.translate(bbcShape711.around.x, bbcShape711.around.y);
ctx.rotate(bbcShape711.rotation * Math.PI / 180);
ctx.translate(-bbcShape711.around.x, -bbcShape711.around.y);
ctx.beginPath();
ctx.arc(bbcShape711.point.x, bbcShape711.point.y, bbcShape711.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(65, 105, 74)';

ctx.save();
ctx.translate(bbcShape712.around.x, bbcShape712.around.y);
ctx.rotate(bbcShape712.rotation * Math.PI / 180);
ctx.translate(-bbcShape712.around.x, -bbcShape712.around.y);
ctx.beginPath();
ctx.arc(bbcShape712.point.x, bbcShape712.point.y, bbcShape712.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(105, 114, 32)';

ctx.save();
ctx.translate(bbcShape713.around.x, bbcShape713.around.y);
ctx.rotate(bbcShape713.rotation * Math.PI / 180);
ctx.translate(-bbcShape713.around.x, -bbcShape713.around.y);
ctx.beginPath();
ctx.arc(bbcShape713.point.x, bbcShape713.point.y, bbcShape713.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(222, 75, 121)';

ctx.save();
ctx.translate(bbcShape714.around.x, bbcShape714.around.y);
ctx.rotate(bbcShape714.rotation * Math.PI / 180);
ctx.translate(-bbcShape714.around.x, -bbcShape714.around.y);
ctx.beginPath();
ctx.arc(bbcShape714.point.x, bbcShape714.point.y, bbcShape714.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 45, 227)';

ctx.save();
ctx.translate(bbcShape715.around.x, bbcShape715.around.y);
ctx.rotate(bbcShape715.rotation * Math.PI / 180);
ctx.translate(-bbcShape715.around.x, -bbcShape715.around.y);
ctx.beginPath();
ctx.arc(bbcShape715.point.x, bbcShape715.point.y, bbcShape715.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(65, 225, 210)';

ctx.save();
ctx.translate(bbcShape716.around.x, bbcShape716.around.y);
ctx.rotate(bbcShape716.rotation * Math.PI / 180);
ctx.translate(-bbcShape716.around.x, -bbcShape716.around.y);
ctx.beginPath();
ctx.arc(bbcShape716.point.x, bbcShape716.point.y, bbcShape716.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(90, 17, 108)';

ctx.save();
ctx.translate(bbcShape717.around.x, bbcShape717.around.y);
ctx.rotate(bbcShape717.rotation * Math.PI / 180);
ctx.translate(-bbcShape717.around.x, -bbcShape717.around.y);
ctx.beginPath();
ctx.arc(bbcShape717.point.x, bbcShape717.point.y, bbcShape717.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(144, 150, 148)';

ctx.save();
ctx.translate(bbcShape718.around.x, bbcShape718.around.y);
ctx.rotate(bbcShape718.rotation * Math.PI / 180);
ctx.translate(-bbcShape718.around.x, -bbcShape718.around.y);
ctx.beginPath();
ctx.arc(bbcShape718.point.x, bbcShape718.point.y, bbcShape718.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 12, 4)';

ctx.save();
ctx.translate(bbcShape719.around.x, bbcShape719.around.y);
ctx.rotate(bbcShape719.rotation * Math.PI / 180);
ctx.translate(-bbcShape719.around.x, -bbcShape719.around.y);
ctx.beginPath();
ctx.arc(bbcShape719.point.x, bbcShape719.point.y, bbcShape719.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 60, 42)';

ctx.save();
ctx.translate(bbcShape720.around.x, bbcShape720.around.y);
ctx.rotate(bbcShape720.rotation * Math.PI / 180);
ctx.translate(-bbcShape720.around.x, -bbcShape720.around.y);
ctx.beginPath();
ctx.arc(bbcShape720.point.x, bbcShape720.point.y, bbcShape720.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(44, 47, 135)';

ctx.save();
ctx.translate(bbcShape721.around.x, bbcShape721.around.y);
ctx.rotate(bbcShape721.rotation * Math.PI / 180);
ctx.translate(-bbcShape721.around.x, -bbcShape721.around.y);
ctx.beginPath();
ctx.arc(bbcShape721.point.x, bbcShape721.point.y, bbcShape721.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(135, 84, 164)';

ctx.save();
ctx.translate(bbcShape722.around.x, bbcShape722.around.y);
ctx.rotate(bbcShape722.rotation * Math.PI / 180);
ctx.translate(-bbcShape722.around.x, -bbcShape722.around.y);
ctx.beginPath();
ctx.arc(bbcShape722.point.x, bbcShape722.point.y, bbcShape722.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(80, 195, 14)';

ctx.save();
ctx.translate(bbcShape723.around.x, bbcShape723.around.y);
ctx.rotate(bbcShape723.rotation * Math.PI / 180);
ctx.translate(-bbcShape723.around.x, -bbcShape723.around.y);
ctx.beginPath();
ctx.arc(bbcShape723.point.x, bbcShape723.point.y, bbcShape723.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(212, 223, 131)';

ctx.save();
ctx.translate(bbcShape724.around.x, bbcShape724.around.y);
ctx.rotate(bbcShape724.rotation * Math.PI / 180);
ctx.translate(-bbcShape724.around.x, -bbcShape724.around.y);
ctx.beginPath();
ctx.arc(bbcShape724.point.x, bbcShape724.point.y, bbcShape724.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(163, 211, 130)';

ctx.save();
ctx.translate(bbcShape725.around.x, bbcShape725.around.y);
ctx.rotate(bbcShape725.rotation * Math.PI / 180);
ctx.translate(-bbcShape725.around.x, -bbcShape725.around.y);
ctx.beginPath();
ctx.arc(bbcShape725.point.x, bbcShape725.point.y, bbcShape725.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 230, 103)';

ctx.save();
ctx.translate(bbcShape726.around.x, bbcShape726.around.y);
ctx.rotate(bbcShape726.rotation * Math.PI / 180);
ctx.translate(-bbcShape726.around.x, -bbcShape726.around.y);
ctx.beginPath();
ctx.arc(bbcShape726.point.x, bbcShape726.point.y, bbcShape726.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(104, 71, 199)';

ctx.save();
ctx.translate(bbcShape727.around.x, bbcShape727.around.y);
ctx.rotate(bbcShape727.rotation * Math.PI / 180);
ctx.translate(-bbcShape727.around.x, -bbcShape727.around.y);
ctx.beginPath();
ctx.arc(bbcShape727.point.x, bbcShape727.point.y, bbcShape727.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(210, 80, 78)';

ctx.save();
ctx.translate(bbcShape728.around.x, bbcShape728.around.y);
ctx.rotate(bbcShape728.rotation * Math.PI / 180);
ctx.translate(-bbcShape728.around.x, -bbcShape728.around.y);
ctx.beginPath();
ctx.arc(bbcShape728.point.x, bbcShape728.point.y, bbcShape728.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(149, 199, 247)';

ctx.save();
ctx.translate(bbcShape729.around.x, bbcShape729.around.y);
ctx.rotate(bbcShape729.rotation * Math.PI / 180);
ctx.translate(-bbcShape729.around.x, -bbcShape729.around.y);
ctx.beginPath();
ctx.arc(bbcShape729.point.x, bbcShape729.point.y, bbcShape729.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(145, 89, 13)';

ctx.save();
ctx.translate(bbcShape730.around.x, bbcShape730.around.y);
ctx.rotate(bbcShape730.rotation * Math.PI / 180);
ctx.translate(-bbcShape730.around.x, -bbcShape730.around.y);
ctx.beginPath();
ctx.arc(bbcShape730.point.x, bbcShape730.point.y, bbcShape730.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(110, 229, 93)';

ctx.save();
ctx.translate(bbcShape731.around.x, bbcShape731.around.y);
ctx.rotate(bbcShape731.rotation * Math.PI / 180);
ctx.translate(-bbcShape731.around.x, -bbcShape731.around.y);
ctx.beginPath();
ctx.arc(bbcShape731.point.x, bbcShape731.point.y, bbcShape731.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(89, 113, 115)';

ctx.save();
ctx.translate(bbcShape732.around.x, bbcShape732.around.y);
ctx.rotate(bbcShape732.rotation * Math.PI / 180);
ctx.translate(-bbcShape732.around.x, -bbcShape732.around.y);
ctx.beginPath();
ctx.arc(bbcShape732.point.x, bbcShape732.point.y, bbcShape732.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(28, 212, 202)';

ctx.save();
ctx.translate(bbcShape733.around.x, bbcShape733.around.y);
ctx.rotate(bbcShape733.rotation * Math.PI / 180);
ctx.translate(-bbcShape733.around.x, -bbcShape733.around.y);
ctx.beginPath();
ctx.arc(bbcShape733.point.x, bbcShape733.point.y, bbcShape733.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(131, 100, 60)';

ctx.save();
ctx.translate(bbcShape734.around.x, bbcShape734.around.y);
ctx.rotate(bbcShape734.rotation * Math.PI / 180);
ctx.translate(-bbcShape734.around.x, -bbcShape734.around.y);
ctx.beginPath();
ctx.arc(bbcShape734.point.x, bbcShape734.point.y, bbcShape734.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 5, 79)';

ctx.save();
ctx.translate(bbcShape735.around.x, bbcShape735.around.y);
ctx.rotate(bbcShape735.rotation * Math.PI / 180);
ctx.translate(-bbcShape735.around.x, -bbcShape735.around.y);
ctx.beginPath();
ctx.arc(bbcShape735.point.x, bbcShape735.point.y, bbcShape735.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(240, 67, 141)';

ctx.save();
ctx.translate(bbcShape736.around.x, bbcShape736.around.y);
ctx.rotate(bbcShape736.rotation * Math.PI / 180);
ctx.translate(-bbcShape736.around.x, -bbcShape736.around.y);
ctx.beginPath();
ctx.arc(bbcShape736.point.x, bbcShape736.point.y, bbcShape736.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 244, 85)';

ctx.save();
ctx.translate(bbcShape737.around.x, bbcShape737.around.y);
ctx.rotate(bbcShape737.rotation * Math.PI / 180);
ctx.translate(-bbcShape737.around.x, -bbcShape737.around.y);
ctx.beginPath();
ctx.arc(bbcShape737.point.x, bbcShape737.point.y, bbcShape737.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 89, 18)';

ctx.save();
ctx.translate(bbcShape738.around.x, bbcShape738.around.y);
ctx.rotate(bbcShape738.rotation * Math.PI / 180);
ctx.translate(-bbcShape738.around.x, -bbcShape738.around.y);
ctx.beginPath();
ctx.arc(bbcShape738.point.x, bbcShape738.point.y, bbcShape738.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(177, 103, 204)';

ctx.save();
ctx.translate(bbcShape739.around.x, bbcShape739.around.y);
ctx.rotate(bbcShape739.rotation * Math.PI / 180);
ctx.translate(-bbcShape739.around.x, -bbcShape739.around.y);
ctx.beginPath();
ctx.arc(bbcShape739.point.x, bbcShape739.point.y, bbcShape739.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(254, 140, 79)';

ctx.save();
ctx.translate(bbcShape740.around.x, bbcShape740.around.y);
ctx.rotate(bbcShape740.rotation * Math.PI / 180);
ctx.translate(-bbcShape740.around.x, -bbcShape740.around.y);
ctx.beginPath();
ctx.arc(bbcShape740.point.x, bbcShape740.point.y, bbcShape740.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 83, 25)';

ctx.save();
ctx.translate(bbcShape741.around.x, bbcShape741.around.y);
ctx.rotate(bbcShape741.rotation * Math.PI / 180);
ctx.translate(-bbcShape741.around.x, -bbcShape741.around.y);
ctx.beginPath();
ctx.arc(bbcShape741.point.x, bbcShape741.point.y, bbcShape741.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(134, 101, 189)';

ctx.save();
ctx.translate(bbcShape742.around.x, bbcShape742.around.y);
ctx.rotate(bbcShape742.rotation * Math.PI / 180);
ctx.translate(-bbcShape742.around.x, -bbcShape742.around.y);
ctx.beginPath();
ctx.arc(bbcShape742.point.x, bbcShape742.point.y, bbcShape742.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(84, 218, 102)';

ctx.save();
ctx.translate(bbcShape743.around.x, bbcShape743.around.y);
ctx.rotate(bbcShape743.rotation * Math.PI / 180);
ctx.translate(-bbcShape743.around.x, -bbcShape743.around.y);
ctx.beginPath();
ctx.arc(bbcShape743.point.x, bbcShape743.point.y, bbcShape743.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(28, 23, 12)';

ctx.save();
ctx.translate(bbcShape744.around.x, bbcShape744.around.y);
ctx.rotate(bbcShape744.rotation * Math.PI / 180);
ctx.translate(-bbcShape744.around.x, -bbcShape744.around.y);
ctx.beginPath();
ctx.arc(bbcShape744.point.x, bbcShape744.point.y, bbcShape744.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(71, 16, 222)';

ctx.save();
ctx.translate(bbcShape745.around.x, bbcShape745.around.y);
ctx.rotate(bbcShape745.rotation * Math.PI / 180);
ctx.translate(-bbcShape745.around.x, -bbcShape745.around.y);
ctx.beginPath();
ctx.arc(bbcShape745.point.x, bbcShape745.point.y, bbcShape745.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(204, 13, 201)';

ctx.save();
ctx.translate(bbcShape746.around.x, bbcShape746.around.y);
ctx.rotate(bbcShape746.rotation * Math.PI / 180);
ctx.translate(-bbcShape746.around.x, -bbcShape746.around.y);
ctx.beginPath();
ctx.arc(bbcShape746.point.x, bbcShape746.point.y, bbcShape746.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(108, 45, 196)';

ctx.save();
ctx.translate(bbcShape747.around.x, bbcShape747.around.y);
ctx.rotate(bbcShape747.rotation * Math.PI / 180);
ctx.translate(-bbcShape747.around.x, -bbcShape747.around.y);
ctx.beginPath();
ctx.arc(bbcShape747.point.x, bbcShape747.point.y, bbcShape747.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(97, 251, 199)';

ctx.save();
ctx.translate(bbcShape748.around.x, bbcShape748.around.y);
ctx.rotate(bbcShape748.rotation * Math.PI / 180);
ctx.translate(-bbcShape748.around.x, -bbcShape748.around.y);
ctx.beginPath();
ctx.arc(bbcShape748.point.x, bbcShape748.point.y, bbcShape748.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 138, 160)';

ctx.save();
ctx.translate(bbcShape749.around.x, bbcShape749.around.y);
ctx.rotate(bbcShape749.rotation * Math.PI / 180);
ctx.translate(-bbcShape749.around.x, -bbcShape749.around.y);
ctx.beginPath();
ctx.arc(bbcShape749.point.x, bbcShape749.point.y, bbcShape749.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(232, 138, 219)';

ctx.save();
ctx.translate(bbcShape750.around.x, bbcShape750.around.y);
ctx.rotate(bbcShape750.rotation * Math.PI / 180);
ctx.translate(-bbcShape750.around.x, -bbcShape750.around.y);
ctx.beginPath();
ctx.arc(bbcShape750.point.x, bbcShape750.point.y, bbcShape750.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(191, 127, 54)';

ctx.save();
ctx.translate(bbcShape751.around.x, bbcShape751.around.y);
ctx.rotate(bbcShape751.rotation * Math.PI / 180);
ctx.translate(-bbcShape751.around.x, -bbcShape751.around.y);
ctx.beginPath();
ctx.arc(bbcShape751.point.x, bbcShape751.point.y, bbcShape751.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 27, 214)';

ctx.save();
ctx.translate(bbcShape752.around.x, bbcShape752.around.y);
ctx.rotate(bbcShape752.rotation * Math.PI / 180);
ctx.translate(-bbcShape752.around.x, -bbcShape752.around.y);
ctx.beginPath();
ctx.arc(bbcShape752.point.x, bbcShape752.point.y, bbcShape752.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 87, 98)';

ctx.save();
ctx.translate(bbcShape753.around.x, bbcShape753.around.y);
ctx.rotate(bbcShape753.rotation * Math.PI / 180);
ctx.translate(-bbcShape753.around.x, -bbcShape753.around.y);
ctx.beginPath();
ctx.arc(bbcShape753.point.x, bbcShape753.point.y, bbcShape753.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(41, 46, 98)';

ctx.save();
ctx.translate(bbcShape754.around.x, bbcShape754.around.y);
ctx.rotate(bbcShape754.rotation * Math.PI / 180);
ctx.translate(-bbcShape754.around.x, -bbcShape754.around.y);
ctx.beginPath();
ctx.arc(bbcShape754.point.x, bbcShape754.point.y, bbcShape754.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(126, 230, 4)';

ctx.save();
ctx.translate(bbcShape755.around.x, bbcShape755.around.y);
ctx.rotate(bbcShape755.rotation * Math.PI / 180);
ctx.translate(-bbcShape755.around.x, -bbcShape755.around.y);
ctx.beginPath();
ctx.arc(bbcShape755.point.x, bbcShape755.point.y, bbcShape755.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(116, 171, 153)';

ctx.save();
ctx.translate(bbcShape756.around.x, bbcShape756.around.y);
ctx.rotate(bbcShape756.rotation * Math.PI / 180);
ctx.translate(-bbcShape756.around.x, -bbcShape756.around.y);
ctx.beginPath();
ctx.arc(bbcShape756.point.x, bbcShape756.point.y, bbcShape756.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(111, 170, 165)';

ctx.save();
ctx.translate(bbcShape757.around.x, bbcShape757.around.y);
ctx.rotate(bbcShape757.rotation * Math.PI / 180);
ctx.translate(-bbcShape757.around.x, -bbcShape757.around.y);
ctx.beginPath();
ctx.arc(bbcShape757.point.x, bbcShape757.point.y, bbcShape757.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(83, 2, 18)';

ctx.save();
ctx.translate(bbcShape758.around.x, bbcShape758.around.y);
ctx.rotate(bbcShape758.rotation * Math.PI / 180);
ctx.translate(-bbcShape758.around.x, -bbcShape758.around.y);
ctx.beginPath();
ctx.arc(bbcShape758.point.x, bbcShape758.point.y, bbcShape758.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(196, 242, 230)';

ctx.save();
ctx.translate(bbcShape759.around.x, bbcShape759.around.y);
ctx.rotate(bbcShape759.rotation * Math.PI / 180);
ctx.translate(-bbcShape759.around.x, -bbcShape759.around.y);
ctx.beginPath();
ctx.arc(bbcShape759.point.x, bbcShape759.point.y, bbcShape759.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(165, 220, 59)';

ctx.save();
ctx.translate(bbcShape760.around.x, bbcShape760.around.y);
ctx.rotate(bbcShape760.rotation * Math.PI / 180);
ctx.translate(-bbcShape760.around.x, -bbcShape760.around.y);
ctx.beginPath();
ctx.arc(bbcShape760.point.x, bbcShape760.point.y, bbcShape760.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(239, 138, 62)';

ctx.save();
ctx.translate(bbcShape761.around.x, bbcShape761.around.y);
ctx.rotate(bbcShape761.rotation * Math.PI / 180);
ctx.translate(-bbcShape761.around.x, -bbcShape761.around.y);
ctx.beginPath();
ctx.arc(bbcShape761.point.x, bbcShape761.point.y, bbcShape761.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(180, 16, 179)';

ctx.save();
ctx.translate(bbcShape762.around.x, bbcShape762.around.y);
ctx.rotate(bbcShape762.rotation * Math.PI / 180);
ctx.translate(-bbcShape762.around.x, -bbcShape762.around.y);
ctx.beginPath();
ctx.arc(bbcShape762.point.x, bbcShape762.point.y, bbcShape762.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(82, 129, 234)';

ctx.save();
ctx.translate(bbcShape763.around.x, bbcShape763.around.y);
ctx.rotate(bbcShape763.rotation * Math.PI / 180);
ctx.translate(-bbcShape763.around.x, -bbcShape763.around.y);
ctx.beginPath();
ctx.arc(bbcShape763.point.x, bbcShape763.point.y, bbcShape763.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(230, 90, 246)';

ctx.save();
ctx.translate(bbcShape764.around.x, bbcShape764.around.y);
ctx.rotate(bbcShape764.rotation * Math.PI / 180);
ctx.translate(-bbcShape764.around.x, -bbcShape764.around.y);
ctx.beginPath();
ctx.arc(bbcShape764.point.x, bbcShape764.point.y, bbcShape764.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(163, 93, 188)';

ctx.save();
ctx.translate(bbcShape765.around.x, bbcShape765.around.y);
ctx.rotate(bbcShape765.rotation * Math.PI / 180);
ctx.translate(-bbcShape765.around.x, -bbcShape765.around.y);
ctx.beginPath();
ctx.arc(bbcShape765.point.x, bbcShape765.point.y, bbcShape765.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0, 56, 19)';

ctx.save();
ctx.translate(bbcShape766.around.x, bbcShape766.around.y);
ctx.rotate(bbcShape766.rotation * Math.PI / 180);
ctx.translate(-bbcShape766.around.x, -bbcShape766.around.y);
ctx.beginPath();
ctx.arc(bbcShape766.point.x, bbcShape766.point.y, bbcShape766.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 161, 11)';

ctx.save();
ctx.translate(bbcShape767.around.x, bbcShape767.around.y);
ctx.rotate(bbcShape767.rotation * Math.PI / 180);
ctx.translate(-bbcShape767.around.x, -bbcShape767.around.y);
ctx.beginPath();
ctx.arc(bbcShape767.point.x, bbcShape767.point.y, bbcShape767.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(29, 183, 235)';

ctx.save();
ctx.translate(bbcShape768.around.x, bbcShape768.around.y);
ctx.rotate(bbcShape768.rotation * Math.PI / 180);
ctx.translate(-bbcShape768.around.x, -bbcShape768.around.y);
ctx.beginPath();
ctx.arc(bbcShape768.point.x, bbcShape768.point.y, bbcShape768.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250, 11, 51)';

ctx.save();
ctx.translate(bbcShape769.around.x, bbcShape769.around.y);
ctx.rotate(bbcShape769.rotation * Math.PI / 180);
ctx.translate(-bbcShape769.around.x, -bbcShape769.around.y);
ctx.beginPath();
ctx.arc(bbcShape769.point.x, bbcShape769.point.y, bbcShape769.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(32, 136, 119)';

ctx.save();
ctx.translate(bbcShape770.around.x, bbcShape770.around.y);
ctx.rotate(bbcShape770.rotation * Math.PI / 180);
ctx.translate(-bbcShape770.around.x, -bbcShape770.around.y);
ctx.beginPath();
ctx.arc(bbcShape770.point.x, bbcShape770.point.y, bbcShape770.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(29, 103, 144)';

ctx.save();
ctx.translate(bbcShape771.around.x, bbcShape771.around.y);
ctx.rotate(bbcShape771.rotation * Math.PI / 180);
ctx.translate(-bbcShape771.around.x, -bbcShape771.around.y);
ctx.beginPath();
ctx.arc(bbcShape771.point.x, bbcShape771.point.y, bbcShape771.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(254, 237, 40)';

ctx.save();
ctx.translate(bbcShape772.around.x, bbcShape772.around.y);
ctx.rotate(bbcShape772.rotation * Math.PI / 180);
ctx.translate(-bbcShape772.around.x, -bbcShape772.around.y);
ctx.beginPath();
ctx.arc(bbcShape772.point.x, bbcShape772.point.y, bbcShape772.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 242, 111)';

ctx.save();
ctx.translate(bbcShape773.around.x, bbcShape773.around.y);
ctx.rotate(bbcShape773.rotation * Math.PI / 180);
ctx.translate(-bbcShape773.around.x, -bbcShape773.around.y);
ctx.beginPath();
ctx.arc(bbcShape773.point.x, bbcShape773.point.y, bbcShape773.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(49, 86, 123)';

ctx.save();
ctx.translate(bbcShape774.around.x, bbcShape774.around.y);
ctx.rotate(bbcShape774.rotation * Math.PI / 180);
ctx.translate(-bbcShape774.around.x, -bbcShape774.around.y);
ctx.beginPath();
ctx.arc(bbcShape774.point.x, bbcShape774.point.y, bbcShape774.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 141, 110)';

ctx.save();
ctx.translate(bbcShape775.around.x, bbcShape775.around.y);
ctx.rotate(bbcShape775.rotation * Math.PI / 180);
ctx.translate(-bbcShape775.around.x, -bbcShape775.around.y);
ctx.beginPath();
ctx.arc(bbcShape775.point.x, bbcShape775.point.y, bbcShape775.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(221, 80, 114)';

ctx.save();
ctx.translate(bbcShape776.around.x, bbcShape776.around.y);
ctx.rotate(bbcShape776.rotation * Math.PI / 180);
ctx.translate(-bbcShape776.around.x, -bbcShape776.around.y);
ctx.beginPath();
ctx.arc(bbcShape776.point.x, bbcShape776.point.y, bbcShape776.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(63, 237, 113)';

ctx.save();
ctx.translate(bbcShape777.around.x, bbcShape777.around.y);
ctx.rotate(bbcShape777.rotation * Math.PI / 180);
ctx.translate(-bbcShape777.around.x, -bbcShape777.around.y);
ctx.beginPath();
ctx.arc(bbcShape777.point.x, bbcShape777.point.y, bbcShape777.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(110, 130, 249)';

ctx.save();
ctx.translate(bbcShape778.around.x, bbcShape778.around.y);
ctx.rotate(bbcShape778.rotation * Math.PI / 180);
ctx.translate(-bbcShape778.around.x, -bbcShape778.around.y);
ctx.beginPath();
ctx.arc(bbcShape778.point.x, bbcShape778.point.y, bbcShape778.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(173, 160, 65)';

ctx.save();
ctx.translate(bbcShape779.around.x, bbcShape779.around.y);
ctx.rotate(bbcShape779.rotation * Math.PI / 180);
ctx.translate(-bbcShape779.around.x, -bbcShape779.around.y);
ctx.beginPath();
ctx.arc(bbcShape779.point.x, bbcShape779.point.y, bbcShape779.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(71, 16, 105)';

ctx.save();
ctx.translate(bbcShape780.around.x, bbcShape780.around.y);
ctx.rotate(bbcShape780.rotation * Math.PI / 180);
ctx.translate(-bbcShape780.around.x, -bbcShape780.around.y);
ctx.beginPath();
ctx.arc(bbcShape780.point.x, bbcShape780.point.y, bbcShape780.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 155, 101)';

ctx.save();
ctx.translate(bbcShape781.around.x, bbcShape781.around.y);
ctx.rotate(bbcShape781.rotation * Math.PI / 180);
ctx.translate(-bbcShape781.around.x, -bbcShape781.around.y);
ctx.beginPath();
ctx.arc(bbcShape781.point.x, bbcShape781.point.y, bbcShape781.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(199, 191, 22)';

ctx.save();
ctx.translate(bbcShape782.around.x, bbcShape782.around.y);
ctx.rotate(bbcShape782.rotation * Math.PI / 180);
ctx.translate(-bbcShape782.around.x, -bbcShape782.around.y);
ctx.beginPath();
ctx.arc(bbcShape782.point.x, bbcShape782.point.y, bbcShape782.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(54, 88, 253)';

ctx.save();
ctx.translate(bbcShape783.around.x, bbcShape783.around.y);
ctx.rotate(bbcShape783.rotation * Math.PI / 180);
ctx.translate(-bbcShape783.around.x, -bbcShape783.around.y);
ctx.beginPath();
ctx.arc(bbcShape783.point.x, bbcShape783.point.y, bbcShape783.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(245, 234, 225)';

ctx.save();
ctx.translate(bbcShape784.around.x, bbcShape784.around.y);
ctx.rotate(bbcShape784.rotation * Math.PI / 180);
ctx.translate(-bbcShape784.around.x, -bbcShape784.around.y);
ctx.beginPath();
ctx.arc(bbcShape784.point.x, bbcShape784.point.y, bbcShape784.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(153, 37, 77)';

ctx.save();
ctx.translate(bbcShape785.around.x, bbcShape785.around.y);
ctx.rotate(bbcShape785.rotation * Math.PI / 180);
ctx.translate(-bbcShape785.around.x, -bbcShape785.around.y);
ctx.beginPath();
ctx.arc(bbcShape785.point.x, bbcShape785.point.y, bbcShape785.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(239, 50, 147)';

ctx.save();
ctx.translate(bbcShape786.around.x, bbcShape786.around.y);
ctx.rotate(bbcShape786.rotation * Math.PI / 180);
ctx.translate(-bbcShape786.around.x, -bbcShape786.around.y);
ctx.beginPath();
ctx.arc(bbcShape786.point.x, bbcShape786.point.y, bbcShape786.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(157, 179, 69)';

ctx.save();
ctx.translate(bbcShape787.around.x, bbcShape787.around.y);
ctx.rotate(bbcShape787.rotation * Math.PI / 180);
ctx.translate(-bbcShape787.around.x, -bbcShape787.around.y);
ctx.beginPath();
ctx.arc(bbcShape787.point.x, bbcShape787.point.y, bbcShape787.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 160, 205)';

ctx.save();
ctx.translate(bbcShape788.around.x, bbcShape788.around.y);
ctx.rotate(bbcShape788.rotation * Math.PI / 180);
ctx.translate(-bbcShape788.around.x, -bbcShape788.around.y);
ctx.beginPath();
ctx.arc(bbcShape788.point.x, bbcShape788.point.y, bbcShape788.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(210, 146, 242)';

ctx.save();
ctx.translate(bbcShape789.around.x, bbcShape789.around.y);
ctx.rotate(bbcShape789.rotation * Math.PI / 180);
ctx.translate(-bbcShape789.around.x, -bbcShape789.around.y);
ctx.beginPath();
ctx.arc(bbcShape789.point.x, bbcShape789.point.y, bbcShape789.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(6, 52, 139)';

ctx.save();
ctx.translate(bbcShape790.around.x, bbcShape790.around.y);
ctx.rotate(bbcShape790.rotation * Math.PI / 180);
ctx.translate(-bbcShape790.around.x, -bbcShape790.around.y);
ctx.beginPath();
ctx.arc(bbcShape790.point.x, bbcShape790.point.y, bbcShape790.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(37, 182, 209)';

ctx.save();
ctx.translate(bbcShape791.around.x, bbcShape791.around.y);
ctx.rotate(bbcShape791.rotation * Math.PI / 180);
ctx.translate(-bbcShape791.around.x, -bbcShape791.around.y);
ctx.beginPath();
ctx.arc(bbcShape791.point.x, bbcShape791.point.y, bbcShape791.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 71, 80)';

ctx.save();
ctx.translate(bbcShape792.around.x, bbcShape792.around.y);
ctx.rotate(bbcShape792.rotation * Math.PI / 180);
ctx.translate(-bbcShape792.around.x, -bbcShape792.around.y);
ctx.beginPath();
ctx.arc(bbcShape792.point.x, bbcShape792.point.y, bbcShape792.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25, 178, 6)';

ctx.save();
ctx.translate(bbcShape793.around.x, bbcShape793.around.y);
ctx.rotate(bbcShape793.rotation * Math.PI / 180);
ctx.translate(-bbcShape793.around.x, -bbcShape793.around.y);
ctx.beginPath();
ctx.arc(bbcShape793.point.x, bbcShape793.point.y, bbcShape793.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(81, 133, 73)';

ctx.save();
ctx.translate(bbcShape794.around.x, bbcShape794.around.y);
ctx.rotate(bbcShape794.rotation * Math.PI / 180);
ctx.translate(-bbcShape794.around.x, -bbcShape794.around.y);
ctx.beginPath();
ctx.arc(bbcShape794.point.x, bbcShape794.point.y, bbcShape794.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(227, 46, 82)';

ctx.save();
ctx.translate(bbcShape795.around.x, bbcShape795.around.y);
ctx.rotate(bbcShape795.rotation * Math.PI / 180);
ctx.translate(-bbcShape795.around.x, -bbcShape795.around.y);
ctx.beginPath();
ctx.arc(bbcShape795.point.x, bbcShape795.point.y, bbcShape795.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(187, 21, 205)';

ctx.save();
ctx.translate(bbcShape796.around.x, bbcShape796.around.y);
ctx.rotate(bbcShape796.rotation * Math.PI / 180);
ctx.translate(-bbcShape796.around.x, -bbcShape796.around.y);
ctx.beginPath();
ctx.arc(bbcShape796.point.x, bbcShape796.point.y, bbcShape796.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(51, 52, 118)';

ctx.save();
ctx.translate(bbcShape797.around.x, bbcShape797.around.y);
ctx.rotate(bbcShape797.rotation * Math.PI / 180);
ctx.translate(-bbcShape797.around.x, -bbcShape797.around.y);
ctx.beginPath();
ctx.arc(bbcShape797.point.x, bbcShape797.point.y, bbcShape797.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 208, 174)';

ctx.save();
ctx.translate(bbcShape798.around.x, bbcShape798.around.y);
ctx.rotate(bbcShape798.rotation * Math.PI / 180);
ctx.translate(-bbcShape798.around.x, -bbcShape798.around.y);
ctx.beginPath();
ctx.arc(bbcShape798.point.x, bbcShape798.point.y, bbcShape798.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(124, 194, 124)';

ctx.save();
ctx.translate(bbcShape799.around.x, bbcShape799.around.y);
ctx.rotate(bbcShape799.rotation * Math.PI / 180);
ctx.translate(-bbcShape799.around.x, -bbcShape799.around.y);
ctx.beginPath();
ctx.arc(bbcShape799.point.x, bbcShape799.point.y, bbcShape799.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(194, 51, 3)';

ctx.save();
ctx.translate(bbcShape800.around.x, bbcShape800.around.y);
ctx.rotate(bbcShape800.rotation * Math.PI / 180);
ctx.translate(-bbcShape800.around.x, -bbcShape800.around.y);
ctx.beginPath();
ctx.arc(bbcShape800.point.x, bbcShape800.point.y, bbcShape800.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(234, 89, 12)';

ctx.save();
ctx.translate(bbcShape801.around.x, bbcShape801.around.y);
ctx.rotate(bbcShape801.rotation * Math.PI / 180);
ctx.translate(-bbcShape801.around.x, -bbcShape801.around.y);
ctx.beginPath();
ctx.arc(bbcShape801.point.x, bbcShape801.point.y, bbcShape801.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(200, 155, 198)';

ctx.save();
ctx.translate(bbcShape802.around.x, bbcShape802.around.y);
ctx.rotate(bbcShape802.rotation * Math.PI / 180);
ctx.translate(-bbcShape802.around.x, -bbcShape802.around.y);
ctx.beginPath();
ctx.arc(bbcShape802.point.x, bbcShape802.point.y, bbcShape802.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(151, 89, 66)';

ctx.save();
ctx.translate(bbcShape803.around.x, bbcShape803.around.y);
ctx.rotate(bbcShape803.rotation * Math.PI / 180);
ctx.translate(-bbcShape803.around.x, -bbcShape803.around.y);
ctx.beginPath();
ctx.arc(bbcShape803.point.x, bbcShape803.point.y, bbcShape803.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(222, 47, 44)';

ctx.save();
ctx.translate(bbcShape804.around.x, bbcShape804.around.y);
ctx.rotate(bbcShape804.rotation * Math.PI / 180);
ctx.translate(-bbcShape804.around.x, -bbcShape804.around.y);
ctx.beginPath();
ctx.arc(bbcShape804.point.x, bbcShape804.point.y, bbcShape804.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(33, 221, 28)';

ctx.save();
ctx.translate(bbcShape805.around.x, bbcShape805.around.y);
ctx.rotate(bbcShape805.rotation * Math.PI / 180);
ctx.translate(-bbcShape805.around.x, -bbcShape805.around.y);
ctx.beginPath();
ctx.arc(bbcShape805.point.x, bbcShape805.point.y, bbcShape805.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(24, 179, 129)';

ctx.save();
ctx.translate(bbcShape806.around.x, bbcShape806.around.y);
ctx.rotate(bbcShape806.rotation * Math.PI / 180);
ctx.translate(-bbcShape806.around.x, -bbcShape806.around.y);
ctx.beginPath();
ctx.arc(bbcShape806.point.x, bbcShape806.point.y, bbcShape806.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 214, 151)';

ctx.save();
ctx.translate(bbcShape807.around.x, bbcShape807.around.y);
ctx.rotate(bbcShape807.rotation * Math.PI / 180);
ctx.translate(-bbcShape807.around.x, -bbcShape807.around.y);
ctx.beginPath();
ctx.arc(bbcShape807.point.x, bbcShape807.point.y, bbcShape807.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(214, 39, 48)';

ctx.save();
ctx.translate(bbcShape808.around.x, bbcShape808.around.y);
ctx.rotate(bbcShape808.rotation * Math.PI / 180);
ctx.translate(-bbcShape808.around.x, -bbcShape808.around.y);
ctx.beginPath();
ctx.arc(bbcShape808.point.x, bbcShape808.point.y, bbcShape808.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(74, 75, 89)';

ctx.save();
ctx.translate(bbcShape809.around.x, bbcShape809.around.y);
ctx.rotate(bbcShape809.rotation * Math.PI / 180);
ctx.translate(-bbcShape809.around.x, -bbcShape809.around.y);
ctx.beginPath();
ctx.arc(bbcShape809.point.x, bbcShape809.point.y, bbcShape809.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(192, 166, 201)';

ctx.save();
ctx.translate(bbcShape810.around.x, bbcShape810.around.y);
ctx.rotate(bbcShape810.rotation * Math.PI / 180);
ctx.translate(-bbcShape810.around.x, -bbcShape810.around.y);
ctx.beginPath();
ctx.arc(bbcShape810.point.x, bbcShape810.point.y, bbcShape810.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(111, 29, 255)';

ctx.save();
ctx.translate(bbcShape811.around.x, bbcShape811.around.y);
ctx.rotate(bbcShape811.rotation * Math.PI / 180);
ctx.translate(-bbcShape811.around.x, -bbcShape811.around.y);
ctx.beginPath();
ctx.arc(bbcShape811.point.x, bbcShape811.point.y, bbcShape811.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(177, 121, 175)';

ctx.save();
ctx.translate(bbcShape812.around.x, bbcShape812.around.y);
ctx.rotate(bbcShape812.rotation * Math.PI / 180);
ctx.translate(-bbcShape812.around.x, -bbcShape812.around.y);
ctx.beginPath();
ctx.arc(bbcShape812.point.x, bbcShape812.point.y, bbcShape812.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(233, 197, 189)';

ctx.save();
ctx.translate(bbcShape813.around.x, bbcShape813.around.y);
ctx.rotate(bbcShape813.rotation * Math.PI / 180);
ctx.translate(-bbcShape813.around.x, -bbcShape813.around.y);
ctx.beginPath();
ctx.arc(bbcShape813.point.x, bbcShape813.point.y, bbcShape813.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(107, 174, 226)';

ctx.save();
ctx.translate(bbcShape814.around.x, bbcShape814.around.y);
ctx.rotate(bbcShape814.rotation * Math.PI / 180);
ctx.translate(-bbcShape814.around.x, -bbcShape814.around.y);
ctx.beginPath();
ctx.arc(bbcShape814.point.x, bbcShape814.point.y, bbcShape814.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(120, 176, 147)';

ctx.save();
ctx.translate(bbcShape815.around.x, bbcShape815.around.y);
ctx.rotate(bbcShape815.rotation * Math.PI / 180);
ctx.translate(-bbcShape815.around.x, -bbcShape815.around.y);
ctx.beginPath();
ctx.arc(bbcShape815.point.x, bbcShape815.point.y, bbcShape815.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 73, 38)';

ctx.save();
ctx.translate(bbcShape816.around.x, bbcShape816.around.y);
ctx.rotate(bbcShape816.rotation * Math.PI / 180);
ctx.translate(-bbcShape816.around.x, -bbcShape816.around.y);
ctx.beginPath();
ctx.arc(bbcShape816.point.x, bbcShape816.point.y, bbcShape816.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(102, 100, 210)';

ctx.save();
ctx.translate(bbcShape817.around.x, bbcShape817.around.y);
ctx.rotate(bbcShape817.rotation * Math.PI / 180);
ctx.translate(-bbcShape817.around.x, -bbcShape817.around.y);
ctx.beginPath();
ctx.arc(bbcShape817.point.x, bbcShape817.point.y, bbcShape817.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(134, 163, 25)';

ctx.save();
ctx.translate(bbcShape818.around.x, bbcShape818.around.y);
ctx.rotate(bbcShape818.rotation * Math.PI / 180);
ctx.translate(-bbcShape818.around.x, -bbcShape818.around.y);
ctx.beginPath();
ctx.arc(bbcShape818.point.x, bbcShape818.point.y, bbcShape818.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(196, 251, 141)';

ctx.save();
ctx.translate(bbcShape819.around.x, bbcShape819.around.y);
ctx.rotate(bbcShape819.rotation * Math.PI / 180);
ctx.translate(-bbcShape819.around.x, -bbcShape819.around.y);
ctx.beginPath();
ctx.arc(bbcShape819.point.x, bbcShape819.point.y, bbcShape819.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(197, 200, 149)';

ctx.save();
ctx.translate(bbcShape820.around.x, bbcShape820.around.y);
ctx.rotate(bbcShape820.rotation * Math.PI / 180);
ctx.translate(-bbcShape820.around.x, -bbcShape820.around.y);
ctx.beginPath();
ctx.arc(bbcShape820.point.x, bbcShape820.point.y, bbcShape820.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(178, 155, 81)';

ctx.save();
ctx.translate(bbcShape821.around.x, bbcShape821.around.y);
ctx.rotate(bbcShape821.rotation * Math.PI / 180);
ctx.translate(-bbcShape821.around.x, -bbcShape821.around.y);
ctx.beginPath();
ctx.arc(bbcShape821.point.x, bbcShape821.point.y, bbcShape821.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(86, 147, 10)';

ctx.save();
ctx.translate(bbcShape822.around.x, bbcShape822.around.y);
ctx.rotate(bbcShape822.rotation * Math.PI / 180);
ctx.translate(-bbcShape822.around.x, -bbcShape822.around.y);
ctx.beginPath();
ctx.arc(bbcShape822.point.x, bbcShape822.point.y, bbcShape822.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(217, 202, 152)';

ctx.save();
ctx.translate(bbcShape823.around.x, bbcShape823.around.y);
ctx.rotate(bbcShape823.rotation * Math.PI / 180);
ctx.translate(-bbcShape823.around.x, -bbcShape823.around.y);
ctx.beginPath();
ctx.arc(bbcShape823.point.x, bbcShape823.point.y, bbcShape823.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(31, 81, 80)';

ctx.save();
ctx.translate(bbcShape824.around.x, bbcShape824.around.y);
ctx.rotate(bbcShape824.rotation * Math.PI / 180);
ctx.translate(-bbcShape824.around.x, -bbcShape824.around.y);
ctx.beginPath();
ctx.arc(bbcShape824.point.x, bbcShape824.point.y, bbcShape824.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 41, 10)';

ctx.save();
ctx.translate(bbcShape825.around.x, bbcShape825.around.y);
ctx.rotate(bbcShape825.rotation * Math.PI / 180);
ctx.translate(-bbcShape825.around.x, -bbcShape825.around.y);
ctx.beginPath();
ctx.arc(bbcShape825.point.x, bbcShape825.point.y, bbcShape825.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(88, 35, 227)';

ctx.save();
ctx.translate(bbcShape826.around.x, bbcShape826.around.y);
ctx.rotate(bbcShape826.rotation * Math.PI / 180);
ctx.translate(-bbcShape826.around.x, -bbcShape826.around.y);
ctx.beginPath();
ctx.arc(bbcShape826.point.x, bbcShape826.point.y, bbcShape826.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(235, 231, 186)';

ctx.save();
ctx.translate(bbcShape827.around.x, bbcShape827.around.y);
ctx.rotate(bbcShape827.rotation * Math.PI / 180);
ctx.translate(-bbcShape827.around.x, -bbcShape827.around.y);
ctx.beginPath();
ctx.arc(bbcShape827.point.x, bbcShape827.point.y, bbcShape827.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(166, 200, 181)';

ctx.save();
ctx.translate(bbcShape828.around.x, bbcShape828.around.y);
ctx.rotate(bbcShape828.rotation * Math.PI / 180);
ctx.translate(-bbcShape828.around.x, -bbcShape828.around.y);
ctx.beginPath();
ctx.arc(bbcShape828.point.x, bbcShape828.point.y, bbcShape828.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(51, 207, 133)';

ctx.save();
ctx.translate(bbcShape829.around.x, bbcShape829.around.y);
ctx.rotate(bbcShape829.rotation * Math.PI / 180);
ctx.translate(-bbcShape829.around.x, -bbcShape829.around.y);
ctx.beginPath();
ctx.arc(bbcShape829.point.x, bbcShape829.point.y, bbcShape829.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(170, 195, 13)';

ctx.save();
ctx.translate(bbcShape830.around.x, bbcShape830.around.y);
ctx.rotate(bbcShape830.rotation * Math.PI / 180);
ctx.translate(-bbcShape830.around.x, -bbcShape830.around.y);
ctx.beginPath();
ctx.arc(bbcShape830.point.x, bbcShape830.point.y, bbcShape830.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(237, 34, 202)';

ctx.save();
ctx.translate(bbcShape831.around.x, bbcShape831.around.y);
ctx.rotate(bbcShape831.rotation * Math.PI / 180);
ctx.translate(-bbcShape831.around.x, -bbcShape831.around.y);
ctx.beginPath();
ctx.arc(bbcShape831.point.x, bbcShape831.point.y, bbcShape831.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(135, 124, 160)';

ctx.save();
ctx.translate(bbcShape832.around.x, bbcShape832.around.y);
ctx.rotate(bbcShape832.rotation * Math.PI / 180);
ctx.translate(-bbcShape832.around.x, -bbcShape832.around.y);
ctx.beginPath();
ctx.arc(bbcShape832.point.x, bbcShape832.point.y, bbcShape832.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 191, 224)';

ctx.save();
ctx.translate(bbcShape833.around.x, bbcShape833.around.y);
ctx.rotate(bbcShape833.rotation * Math.PI / 180);
ctx.translate(-bbcShape833.around.x, -bbcShape833.around.y);
ctx.beginPath();
ctx.arc(bbcShape833.point.x, bbcShape833.point.y, bbcShape833.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(19, 223, 248)';

ctx.save();
ctx.translate(bbcShape834.around.x, bbcShape834.around.y);
ctx.rotate(bbcShape834.rotation * Math.PI / 180);
ctx.translate(-bbcShape834.around.x, -bbcShape834.around.y);
ctx.beginPath();
ctx.arc(bbcShape834.point.x, bbcShape834.point.y, bbcShape834.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(227, 48, 82)';

ctx.save();
ctx.translate(bbcShape835.around.x, bbcShape835.around.y);
ctx.rotate(bbcShape835.rotation * Math.PI / 180);
ctx.translate(-bbcShape835.around.x, -bbcShape835.around.y);
ctx.beginPath();
ctx.arc(bbcShape835.point.x, bbcShape835.point.y, bbcShape835.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 41, 67)';

ctx.save();
ctx.translate(bbcShape836.around.x, bbcShape836.around.y);
ctx.rotate(bbcShape836.rotation * Math.PI / 180);
ctx.translate(-bbcShape836.around.x, -bbcShape836.around.y);
ctx.beginPath();
ctx.arc(bbcShape836.point.x, bbcShape836.point.y, bbcShape836.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(108, 151, 255)';

ctx.save();
ctx.translate(bbcShape837.around.x, bbcShape837.around.y);
ctx.rotate(bbcShape837.rotation * Math.PI / 180);
ctx.translate(-bbcShape837.around.x, -bbcShape837.around.y);
ctx.beginPath();
ctx.arc(bbcShape837.point.x, bbcShape837.point.y, bbcShape837.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225, 32, 110)';

ctx.save();
ctx.translate(bbcShape838.around.x, bbcShape838.around.y);
ctx.rotate(bbcShape838.rotation * Math.PI / 180);
ctx.translate(-bbcShape838.around.x, -bbcShape838.around.y);
ctx.beginPath();
ctx.arc(bbcShape838.point.x, bbcShape838.point.y, bbcShape838.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(142, 255, 231)';

ctx.save();
ctx.translate(bbcShape839.around.x, bbcShape839.around.y);
ctx.rotate(bbcShape839.rotation * Math.PI / 180);
ctx.translate(-bbcShape839.around.x, -bbcShape839.around.y);
ctx.beginPath();
ctx.arc(bbcShape839.point.x, bbcShape839.point.y, bbcShape839.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(191, 245, 253)';

ctx.save();
ctx.translate(bbcShape840.around.x, bbcShape840.around.y);
ctx.rotate(bbcShape840.rotation * Math.PI / 180);
ctx.translate(-bbcShape840.around.x, -bbcShape840.around.y);
ctx.beginPath();
ctx.arc(bbcShape840.point.x, bbcShape840.point.y, bbcShape840.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(1, 179, 34)';

ctx.save();
ctx.translate(bbcShape841.around.x, bbcShape841.around.y);
ctx.rotate(bbcShape841.rotation * Math.PI / 180);
ctx.translate(-bbcShape841.around.x, -bbcShape841.around.y);
ctx.beginPath();
ctx.arc(bbcShape841.point.x, bbcShape841.point.y, bbcShape841.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(226, 218, 129)';

ctx.save();
ctx.translate(bbcShape842.around.x, bbcShape842.around.y);
ctx.rotate(bbcShape842.rotation * Math.PI / 180);
ctx.translate(-bbcShape842.around.x, -bbcShape842.around.y);
ctx.beginPath();
ctx.arc(bbcShape842.point.x, bbcShape842.point.y, bbcShape842.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(159, 98, 80)';

ctx.save();
ctx.translate(bbcShape843.around.x, bbcShape843.around.y);
ctx.rotate(bbcShape843.rotation * Math.PI / 180);
ctx.translate(-bbcShape843.around.x, -bbcShape843.around.y);
ctx.beginPath();
ctx.arc(bbcShape843.point.x, bbcShape843.point.y, bbcShape843.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 9, 32)';

ctx.save();
ctx.translate(bbcShape844.around.x, bbcShape844.around.y);
ctx.rotate(bbcShape844.rotation * Math.PI / 180);
ctx.translate(-bbcShape844.around.x, -bbcShape844.around.y);
ctx.beginPath();
ctx.arc(bbcShape844.point.x, bbcShape844.point.y, bbcShape844.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 245, 146)';

ctx.save();
ctx.translate(bbcShape845.around.x, bbcShape845.around.y);
ctx.rotate(bbcShape845.rotation * Math.PI / 180);
ctx.translate(-bbcShape845.around.x, -bbcShape845.around.y);
ctx.beginPath();
ctx.arc(bbcShape845.point.x, bbcShape845.point.y, bbcShape845.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(158, 93, 58)';

ctx.save();
ctx.translate(bbcShape846.around.x, bbcShape846.around.y);
ctx.rotate(bbcShape846.rotation * Math.PI / 180);
ctx.translate(-bbcShape846.around.x, -bbcShape846.around.y);
ctx.beginPath();
ctx.arc(bbcShape846.point.x, bbcShape846.point.y, bbcShape846.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(230, 121, 108)';

ctx.save();
ctx.translate(bbcShape847.around.x, bbcShape847.around.y);
ctx.rotate(bbcShape847.rotation * Math.PI / 180);
ctx.translate(-bbcShape847.around.x, -bbcShape847.around.y);
ctx.beginPath();
ctx.arc(bbcShape847.point.x, bbcShape847.point.y, bbcShape847.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(45, 48, 51)';

ctx.save();
ctx.translate(bbcShape848.around.x, bbcShape848.around.y);
ctx.rotate(bbcShape848.rotation * Math.PI / 180);
ctx.translate(-bbcShape848.around.x, -bbcShape848.around.y);
ctx.beginPath();
ctx.arc(bbcShape848.point.x, bbcShape848.point.y, bbcShape848.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(62, 223, 194)';

ctx.save();
ctx.translate(bbcShape849.around.x, bbcShape849.around.y);
ctx.rotate(bbcShape849.rotation * Math.PI / 180);
ctx.translate(-bbcShape849.around.x, -bbcShape849.around.y);
ctx.beginPath();
ctx.arc(bbcShape849.point.x, bbcShape849.point.y, bbcShape849.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(238, 156, 246)';

ctx.save();
ctx.translate(bbcShape850.around.x, bbcShape850.around.y);
ctx.rotate(bbcShape850.rotation * Math.PI / 180);
ctx.translate(-bbcShape850.around.x, -bbcShape850.around.y);
ctx.beginPath();
ctx.arc(bbcShape850.point.x, bbcShape850.point.y, bbcShape850.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 167, 127)';

ctx.save();
ctx.translate(bbcShape851.around.x, bbcShape851.around.y);
ctx.rotate(bbcShape851.rotation * Math.PI / 180);
ctx.translate(-bbcShape851.around.x, -bbcShape851.around.y);
ctx.beginPath();
ctx.arc(bbcShape851.point.x, bbcShape851.point.y, bbcShape851.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(56, 124, 164)';

ctx.save();
ctx.translate(bbcShape852.around.x, bbcShape852.around.y);
ctx.rotate(bbcShape852.rotation * Math.PI / 180);
ctx.translate(-bbcShape852.around.x, -bbcShape852.around.y);
ctx.beginPath();
ctx.arc(bbcShape852.point.x, bbcShape852.point.y, bbcShape852.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 218, 1)';

ctx.save();
ctx.translate(bbcShape853.around.x, bbcShape853.around.y);
ctx.rotate(bbcShape853.rotation * Math.PI / 180);
ctx.translate(-bbcShape853.around.x, -bbcShape853.around.y);
ctx.beginPath();
ctx.arc(bbcShape853.point.x, bbcShape853.point.y, bbcShape853.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(218, 127, 73)';

ctx.save();
ctx.translate(bbcShape854.around.x, bbcShape854.around.y);
ctx.rotate(bbcShape854.rotation * Math.PI / 180);
ctx.translate(-bbcShape854.around.x, -bbcShape854.around.y);
ctx.beginPath();
ctx.arc(bbcShape854.point.x, bbcShape854.point.y, bbcShape854.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(190, 224, 82)';

ctx.save();
ctx.translate(bbcShape855.around.x, bbcShape855.around.y);
ctx.rotate(bbcShape855.rotation * Math.PI / 180);
ctx.translate(-bbcShape855.around.x, -bbcShape855.around.y);
ctx.beginPath();
ctx.arc(bbcShape855.point.x, bbcShape855.point.y, bbcShape855.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(193, 113, 142)';

ctx.save();
ctx.translate(bbcShape856.around.x, bbcShape856.around.y);
ctx.rotate(bbcShape856.rotation * Math.PI / 180);
ctx.translate(-bbcShape856.around.x, -bbcShape856.around.y);
ctx.beginPath();
ctx.arc(bbcShape856.point.x, bbcShape856.point.y, bbcShape856.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(244, 31, 221)';

ctx.save();
ctx.translate(bbcShape857.around.x, bbcShape857.around.y);
ctx.rotate(bbcShape857.rotation * Math.PI / 180);
ctx.translate(-bbcShape857.around.x, -bbcShape857.around.y);
ctx.beginPath();
ctx.arc(bbcShape857.point.x, bbcShape857.point.y, bbcShape857.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(205, 221, 170)';

ctx.save();
ctx.translate(bbcShape858.around.x, bbcShape858.around.y);
ctx.rotate(bbcShape858.rotation * Math.PI / 180);
ctx.translate(-bbcShape858.around.x, -bbcShape858.around.y);
ctx.beginPath();
ctx.arc(bbcShape858.point.x, bbcShape858.point.y, bbcShape858.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(228, 173, 254)';

ctx.save();
ctx.translate(bbcShape859.around.x, bbcShape859.around.y);
ctx.rotate(bbcShape859.rotation * Math.PI / 180);
ctx.translate(-bbcShape859.around.x, -bbcShape859.around.y);
ctx.beginPath();
ctx.arc(bbcShape859.point.x, bbcShape859.point.y, bbcShape859.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(172, 82, 189)';

ctx.save();
ctx.translate(bbcShape860.around.x, bbcShape860.around.y);
ctx.rotate(bbcShape860.rotation * Math.PI / 180);
ctx.translate(-bbcShape860.around.x, -bbcShape860.around.y);
ctx.beginPath();
ctx.arc(bbcShape860.point.x, bbcShape860.point.y, bbcShape860.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 59, 237)';

ctx.save();
ctx.translate(bbcShape861.around.x, bbcShape861.around.y);
ctx.rotate(bbcShape861.rotation * Math.PI / 180);
ctx.translate(-bbcShape861.around.x, -bbcShape861.around.y);
ctx.beginPath();
ctx.arc(bbcShape861.point.x, bbcShape861.point.y, bbcShape861.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(160, 79, 0)';

ctx.save();
ctx.translate(bbcShape862.around.x, bbcShape862.around.y);
ctx.rotate(bbcShape862.rotation * Math.PI / 180);
ctx.translate(-bbcShape862.around.x, -bbcShape862.around.y);
ctx.beginPath();
ctx.arc(bbcShape862.point.x, bbcShape862.point.y, bbcShape862.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 36, 70)';

ctx.save();
ctx.translate(bbcShape863.around.x, bbcShape863.around.y);
ctx.rotate(bbcShape863.rotation * Math.PI / 180);
ctx.translate(-bbcShape863.around.x, -bbcShape863.around.y);
ctx.beginPath();
ctx.arc(bbcShape863.point.x, bbcShape863.point.y, bbcShape863.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(123, 66, 207)';

ctx.save();
ctx.translate(bbcShape864.around.x, bbcShape864.around.y);
ctx.rotate(bbcShape864.rotation * Math.PI / 180);
ctx.translate(-bbcShape864.around.x, -bbcShape864.around.y);
ctx.beginPath();
ctx.arc(bbcShape864.point.x, bbcShape864.point.y, bbcShape864.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(187, 251, 209)';

ctx.save();
ctx.translate(bbcShape865.around.x, bbcShape865.around.y);
ctx.rotate(bbcShape865.rotation * Math.PI / 180);
ctx.translate(-bbcShape865.around.x, -bbcShape865.around.y);
ctx.beginPath();
ctx.arc(bbcShape865.point.x, bbcShape865.point.y, bbcShape865.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(162, 211, 170)';

ctx.save();
ctx.translate(bbcShape866.around.x, bbcShape866.around.y);
ctx.rotate(bbcShape866.rotation * Math.PI / 180);
ctx.translate(-bbcShape866.around.x, -bbcShape866.around.y);
ctx.beginPath();
ctx.arc(bbcShape866.point.x, bbcShape866.point.y, bbcShape866.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(97, 71, 100)';

ctx.save();
ctx.translate(bbcShape867.around.x, bbcShape867.around.y);
ctx.rotate(bbcShape867.rotation * Math.PI / 180);
ctx.translate(-bbcShape867.around.x, -bbcShape867.around.y);
ctx.beginPath();
ctx.arc(bbcShape867.point.x, bbcShape867.point.y, bbcShape867.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(175, 178, 52)';

ctx.save();
ctx.translate(bbcShape868.around.x, bbcShape868.around.y);
ctx.rotate(bbcShape868.rotation * Math.PI / 180);
ctx.translate(-bbcShape868.around.x, -bbcShape868.around.y);
ctx.beginPath();
ctx.arc(bbcShape868.point.x, bbcShape868.point.y, bbcShape868.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(99, 250, 217)';

ctx.save();
ctx.translate(bbcShape869.around.x, bbcShape869.around.y);
ctx.rotate(bbcShape869.rotation * Math.PI / 180);
ctx.translate(-bbcShape869.around.x, -bbcShape869.around.y);
ctx.beginPath();
ctx.arc(bbcShape869.point.x, bbcShape869.point.y, bbcShape869.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(126, 6, 118)';

ctx.save();
ctx.translate(bbcShape870.around.x, bbcShape870.around.y);
ctx.rotate(bbcShape870.rotation * Math.PI / 180);
ctx.translate(-bbcShape870.around.x, -bbcShape870.around.y);
ctx.beginPath();
ctx.arc(bbcShape870.point.x, bbcShape870.point.y, bbcShape870.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 106, 233)';

ctx.save();
ctx.translate(bbcShape871.around.x, bbcShape871.around.y);
ctx.rotate(bbcShape871.rotation * Math.PI / 180);
ctx.translate(-bbcShape871.around.x, -bbcShape871.around.y);
ctx.beginPath();
ctx.arc(bbcShape871.point.x, bbcShape871.point.y, bbcShape871.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(139, 83, 133)';

ctx.save();
ctx.translate(bbcShape872.around.x, bbcShape872.around.y);
ctx.rotate(bbcShape872.rotation * Math.PI / 180);
ctx.translate(-bbcShape872.around.x, -bbcShape872.around.y);
ctx.beginPath();
ctx.arc(bbcShape872.point.x, bbcShape872.point.y, bbcShape872.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(110, 36, 201)';

ctx.save();
ctx.translate(bbcShape873.around.x, bbcShape873.around.y);
ctx.rotate(bbcShape873.rotation * Math.PI / 180);
ctx.translate(-bbcShape873.around.x, -bbcShape873.around.y);
ctx.beginPath();
ctx.arc(bbcShape873.point.x, bbcShape873.point.y, bbcShape873.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(199, 141, 112)';

ctx.save();
ctx.translate(bbcShape874.around.x, bbcShape874.around.y);
ctx.rotate(bbcShape874.rotation * Math.PI / 180);
ctx.translate(-bbcShape874.around.x, -bbcShape874.around.y);
ctx.beginPath();
ctx.arc(bbcShape874.point.x, bbcShape874.point.y, bbcShape874.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(143, 228, 29)';

ctx.save();
ctx.translate(bbcShape875.around.x, bbcShape875.around.y);
ctx.rotate(bbcShape875.rotation * Math.PI / 180);
ctx.translate(-bbcShape875.around.x, -bbcShape875.around.y);
ctx.beginPath();
ctx.arc(bbcShape875.point.x, bbcShape875.point.y, bbcShape875.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(121, 31, 210)';

ctx.save();
ctx.translate(bbcShape876.around.x, bbcShape876.around.y);
ctx.rotate(bbcShape876.rotation * Math.PI / 180);
ctx.translate(-bbcShape876.around.x, -bbcShape876.around.y);
ctx.beginPath();
ctx.arc(bbcShape876.point.x, bbcShape876.point.y, bbcShape876.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(78, 217, 180)';

ctx.save();
ctx.translate(bbcShape877.around.x, bbcShape877.around.y);
ctx.rotate(bbcShape877.rotation * Math.PI / 180);
ctx.translate(-bbcShape877.around.x, -bbcShape877.around.y);
ctx.beginPath();
ctx.arc(bbcShape877.point.x, bbcShape877.point.y, bbcShape877.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(71, 20, 8)';

ctx.save();
ctx.translate(bbcShape878.around.x, bbcShape878.around.y);
ctx.rotate(bbcShape878.rotation * Math.PI / 180);
ctx.translate(-bbcShape878.around.x, -bbcShape878.around.y);
ctx.beginPath();
ctx.arc(bbcShape878.point.x, bbcShape878.point.y, bbcShape878.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(148, 113, 85)';

ctx.save();
ctx.translate(bbcShape879.around.x, bbcShape879.around.y);
ctx.rotate(bbcShape879.rotation * Math.PI / 180);
ctx.translate(-bbcShape879.around.x, -bbcShape879.around.y);
ctx.beginPath();
ctx.arc(bbcShape879.point.x, bbcShape879.point.y, bbcShape879.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(195, 150, 25)';

ctx.save();
ctx.translate(bbcShape880.around.x, bbcShape880.around.y);
ctx.rotate(bbcShape880.rotation * Math.PI / 180);
ctx.translate(-bbcShape880.around.x, -bbcShape880.around.y);
ctx.beginPath();
ctx.arc(bbcShape880.point.x, bbcShape880.point.y, bbcShape880.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 71, 153)';

ctx.save();
ctx.translate(bbcShape881.around.x, bbcShape881.around.y);
ctx.rotate(bbcShape881.rotation * Math.PI / 180);
ctx.translate(-bbcShape881.around.x, -bbcShape881.around.y);
ctx.beginPath();
ctx.arc(bbcShape881.point.x, bbcShape881.point.y, bbcShape881.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 90, 87)';

ctx.save();
ctx.translate(bbcShape882.around.x, bbcShape882.around.y);
ctx.rotate(bbcShape882.rotation * Math.PI / 180);
ctx.translate(-bbcShape882.around.x, -bbcShape882.around.y);
ctx.beginPath();
ctx.arc(bbcShape882.point.x, bbcShape882.point.y, bbcShape882.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(172, 20, 222)';

ctx.save();
ctx.translate(bbcShape883.around.x, bbcShape883.around.y);
ctx.rotate(bbcShape883.rotation * Math.PI / 180);
ctx.translate(-bbcShape883.around.x, -bbcShape883.around.y);
ctx.beginPath();
ctx.arc(bbcShape883.point.x, bbcShape883.point.y, bbcShape883.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(69, 180, 54)';

ctx.save();
ctx.translate(bbcShape884.around.x, bbcShape884.around.y);
ctx.rotate(bbcShape884.rotation * Math.PI / 180);
ctx.translate(-bbcShape884.around.x, -bbcShape884.around.y);
ctx.beginPath();
ctx.arc(bbcShape884.point.x, bbcShape884.point.y, bbcShape884.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 184, 154)';

ctx.save();
ctx.translate(bbcShape885.around.x, bbcShape885.around.y);
ctx.rotate(bbcShape885.rotation * Math.PI / 180);
ctx.translate(-bbcShape885.around.x, -bbcShape885.around.y);
ctx.beginPath();
ctx.arc(bbcShape885.point.x, bbcShape885.point.y, bbcShape885.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 139, 218)';

ctx.save();
ctx.translate(bbcShape886.around.x, bbcShape886.around.y);
ctx.rotate(bbcShape886.rotation * Math.PI / 180);
ctx.translate(-bbcShape886.around.x, -bbcShape886.around.y);
ctx.beginPath();
ctx.arc(bbcShape886.point.x, bbcShape886.point.y, bbcShape886.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(139, 245, 115)';

ctx.save();
ctx.translate(bbcShape887.around.x, bbcShape887.around.y);
ctx.rotate(bbcShape887.rotation * Math.PI / 180);
ctx.translate(-bbcShape887.around.x, -bbcShape887.around.y);
ctx.beginPath();
ctx.arc(bbcShape887.point.x, bbcShape887.point.y, bbcShape887.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(162, 252, 146)';

ctx.save();
ctx.translate(bbcShape888.around.x, bbcShape888.around.y);
ctx.rotate(bbcShape888.rotation * Math.PI / 180);
ctx.translate(-bbcShape888.around.x, -bbcShape888.around.y);
ctx.beginPath();
ctx.arc(bbcShape888.point.x, bbcShape888.point.y, bbcShape888.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(55, 199, 116)';

ctx.save();
ctx.translate(bbcShape889.around.x, bbcShape889.around.y);
ctx.rotate(bbcShape889.rotation * Math.PI / 180);
ctx.translate(-bbcShape889.around.x, -bbcShape889.around.y);
ctx.beginPath();
ctx.arc(bbcShape889.point.x, bbcShape889.point.y, bbcShape889.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 43, 127)';

ctx.save();
ctx.translate(bbcShape890.around.x, bbcShape890.around.y);
ctx.rotate(bbcShape890.rotation * Math.PI / 180);
ctx.translate(-bbcShape890.around.x, -bbcShape890.around.y);
ctx.beginPath();
ctx.arc(bbcShape890.point.x, bbcShape890.point.y, bbcShape890.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(53, 216, 175)';

ctx.save();
ctx.translate(bbcShape891.around.x, bbcShape891.around.y);
ctx.rotate(bbcShape891.rotation * Math.PI / 180);
ctx.translate(-bbcShape891.around.x, -bbcShape891.around.y);
ctx.beginPath();
ctx.arc(bbcShape891.point.x, bbcShape891.point.y, bbcShape891.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(112, 138, 171)';

ctx.save();
ctx.translate(bbcShape892.around.x, bbcShape892.around.y);
ctx.rotate(bbcShape892.rotation * Math.PI / 180);
ctx.translate(-bbcShape892.around.x, -bbcShape892.around.y);
ctx.beginPath();
ctx.arc(bbcShape892.point.x, bbcShape892.point.y, bbcShape892.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(60, 87, 136)';

ctx.save();
ctx.translate(bbcShape893.around.x, bbcShape893.around.y);
ctx.rotate(bbcShape893.rotation * Math.PI / 180);
ctx.translate(-bbcShape893.around.x, -bbcShape893.around.y);
ctx.beginPath();
ctx.arc(bbcShape893.point.x, bbcShape893.point.y, bbcShape893.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 77, 132)';

ctx.save();
ctx.translate(bbcShape894.around.x, bbcShape894.around.y);
ctx.rotate(bbcShape894.rotation * Math.PI / 180);
ctx.translate(-bbcShape894.around.x, -bbcShape894.around.y);
ctx.beginPath();
ctx.arc(bbcShape894.point.x, bbcShape894.point.y, bbcShape894.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(212, 113, 243)';

ctx.save();
ctx.translate(bbcShape895.around.x, bbcShape895.around.y);
ctx.rotate(bbcShape895.rotation * Math.PI / 180);
ctx.translate(-bbcShape895.around.x, -bbcShape895.around.y);
ctx.beginPath();
ctx.arc(bbcShape895.point.x, bbcShape895.point.y, bbcShape895.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(64, 55, 27)';

ctx.save();
ctx.translate(bbcShape896.around.x, bbcShape896.around.y);
ctx.rotate(bbcShape896.rotation * Math.PI / 180);
ctx.translate(-bbcShape896.around.x, -bbcShape896.around.y);
ctx.beginPath();
ctx.arc(bbcShape896.point.x, bbcShape896.point.y, bbcShape896.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(237, 158, 106)';

ctx.save();
ctx.translate(bbcShape897.around.x, bbcShape897.around.y);
ctx.rotate(bbcShape897.rotation * Math.PI / 180);
ctx.translate(-bbcShape897.around.x, -bbcShape897.around.y);
ctx.beginPath();
ctx.arc(bbcShape897.point.x, bbcShape897.point.y, bbcShape897.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(240, 130, 65)';

ctx.save();
ctx.translate(bbcShape898.around.x, bbcShape898.around.y);
ctx.rotate(bbcShape898.rotation * Math.PI / 180);
ctx.translate(-bbcShape898.around.x, -bbcShape898.around.y);
ctx.beginPath();
ctx.arc(bbcShape898.point.x, bbcShape898.point.y, bbcShape898.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(29, 109, 14)';

ctx.save();
ctx.translate(bbcShape899.around.x, bbcShape899.around.y);
ctx.rotate(bbcShape899.rotation * Math.PI / 180);
ctx.translate(-bbcShape899.around.x, -bbcShape899.around.y);
ctx.beginPath();
ctx.arc(bbcShape899.point.x, bbcShape899.point.y, bbcShape899.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(238, 76, 125)';

ctx.save();
ctx.translate(bbcShape900.around.x, bbcShape900.around.y);
ctx.rotate(bbcShape900.rotation * Math.PI / 180);
ctx.translate(-bbcShape900.around.x, -bbcShape900.around.y);
ctx.beginPath();
ctx.arc(bbcShape900.point.x, bbcShape900.point.y, bbcShape900.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(7, 228, 108)';

ctx.save();
ctx.translate(bbcShape901.around.x, bbcShape901.around.y);
ctx.rotate(bbcShape901.rotation * Math.PI / 180);
ctx.translate(-bbcShape901.around.x, -bbcShape901.around.y);
ctx.beginPath();
ctx.arc(bbcShape901.point.x, bbcShape901.point.y, bbcShape901.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(208, 96, 23)';

ctx.save();
ctx.translate(bbcShape902.around.x, bbcShape902.around.y);
ctx.rotate(bbcShape902.rotation * Math.PI / 180);
ctx.translate(-bbcShape902.around.x, -bbcShape902.around.y);
ctx.beginPath();
ctx.arc(bbcShape902.point.x, bbcShape902.point.y, bbcShape902.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(232, 91, 137)';

ctx.save();
ctx.translate(bbcShape903.around.x, bbcShape903.around.y);
ctx.rotate(bbcShape903.rotation * Math.PI / 180);
ctx.translate(-bbcShape903.around.x, -bbcShape903.around.y);
ctx.beginPath();
ctx.arc(bbcShape903.point.x, bbcShape903.point.y, bbcShape903.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(109, 67, 197)';

ctx.save();
ctx.translate(bbcShape904.around.x, bbcShape904.around.y);
ctx.rotate(bbcShape904.rotation * Math.PI / 180);
ctx.translate(-bbcShape904.around.x, -bbcShape904.around.y);
ctx.beginPath();
ctx.arc(bbcShape904.point.x, bbcShape904.point.y, bbcShape904.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(103, 149, 67)';

ctx.save();
ctx.translate(bbcShape905.around.x, bbcShape905.around.y);
ctx.rotate(bbcShape905.rotation * Math.PI / 180);
ctx.translate(-bbcShape905.around.x, -bbcShape905.around.y);
ctx.beginPath();
ctx.arc(bbcShape905.point.x, bbcShape905.point.y, bbcShape905.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(35, 24, 139)';

ctx.save();
ctx.translate(bbcShape906.around.x, bbcShape906.around.y);
ctx.rotate(bbcShape906.rotation * Math.PI / 180);
ctx.translate(-bbcShape906.around.x, -bbcShape906.around.y);
ctx.beginPath();
ctx.arc(bbcShape906.point.x, bbcShape906.point.y, bbcShape906.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 18, 212)';

ctx.save();
ctx.translate(bbcShape907.around.x, bbcShape907.around.y);
ctx.rotate(bbcShape907.rotation * Math.PI / 180);
ctx.translate(-bbcShape907.around.x, -bbcShape907.around.y);
ctx.beginPath();
ctx.arc(bbcShape907.point.x, bbcShape907.point.y, bbcShape907.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(140, 221, 113)';

ctx.save();
ctx.translate(bbcShape908.around.x, bbcShape908.around.y);
ctx.rotate(bbcShape908.rotation * Math.PI / 180);
ctx.translate(-bbcShape908.around.x, -bbcShape908.around.y);
ctx.beginPath();
ctx.arc(bbcShape908.point.x, bbcShape908.point.y, bbcShape908.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(181, 34, 148)';

ctx.save();
ctx.translate(bbcShape909.around.x, bbcShape909.around.y);
ctx.rotate(bbcShape909.rotation * Math.PI / 180);
ctx.translate(-bbcShape909.around.x, -bbcShape909.around.y);
ctx.beginPath();
ctx.arc(bbcShape909.point.x, bbcShape909.point.y, bbcShape909.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(16, 46, 157)';

ctx.save();
ctx.translate(bbcShape910.around.x, bbcShape910.around.y);
ctx.rotate(bbcShape910.rotation * Math.PI / 180);
ctx.translate(-bbcShape910.around.x, -bbcShape910.around.y);
ctx.beginPath();
ctx.arc(bbcShape910.point.x, bbcShape910.point.y, bbcShape910.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(77, 212, 115)';

ctx.save();
ctx.translate(bbcShape911.around.x, bbcShape911.around.y);
ctx.rotate(bbcShape911.rotation * Math.PI / 180);
ctx.translate(-bbcShape911.around.x, -bbcShape911.around.y);
ctx.beginPath();
ctx.arc(bbcShape911.point.x, bbcShape911.point.y, bbcShape911.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(207, 145, 121)';

ctx.save();
ctx.translate(bbcShape912.around.x, bbcShape912.around.y);
ctx.rotate(bbcShape912.rotation * Math.PI / 180);
ctx.translate(-bbcShape912.around.x, -bbcShape912.around.y);
ctx.beginPath();
ctx.arc(bbcShape912.point.x, bbcShape912.point.y, bbcShape912.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(215, 220, 94)';

ctx.save();
ctx.translate(bbcShape913.around.x, bbcShape913.around.y);
ctx.rotate(bbcShape913.rotation * Math.PI / 180);
ctx.translate(-bbcShape913.around.x, -bbcShape913.around.y);
ctx.beginPath();
ctx.arc(bbcShape913.point.x, bbcShape913.point.y, bbcShape913.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(2, 163, 173)';

ctx.save();
ctx.translate(bbcShape914.around.x, bbcShape914.around.y);
ctx.rotate(bbcShape914.rotation * Math.PI / 180);
ctx.translate(-bbcShape914.around.x, -bbcShape914.around.y);
ctx.beginPath();
ctx.arc(bbcShape914.point.x, bbcShape914.point.y, bbcShape914.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(251, 69, 190)';

ctx.save();
ctx.translate(bbcShape915.around.x, bbcShape915.around.y);
ctx.rotate(bbcShape915.rotation * Math.PI / 180);
ctx.translate(-bbcShape915.around.x, -bbcShape915.around.y);
ctx.beginPath();
ctx.arc(bbcShape915.point.x, bbcShape915.point.y, bbcShape915.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(203, 231, 37)';

ctx.save();
ctx.translate(bbcShape916.around.x, bbcShape916.around.y);
ctx.rotate(bbcShape916.rotation * Math.PI / 180);
ctx.translate(-bbcShape916.around.x, -bbcShape916.around.y);
ctx.beginPath();
ctx.arc(bbcShape916.point.x, bbcShape916.point.y, bbcShape916.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 97, 111)';

ctx.save();
ctx.translate(bbcShape917.around.x, bbcShape917.around.y);
ctx.rotate(bbcShape917.rotation * Math.PI / 180);
ctx.translate(-bbcShape917.around.x, -bbcShape917.around.y);
ctx.beginPath();
ctx.arc(bbcShape917.point.x, bbcShape917.point.y, bbcShape917.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(122, 150, 19)';

ctx.save();
ctx.translate(bbcShape918.around.x, bbcShape918.around.y);
ctx.rotate(bbcShape918.rotation * Math.PI / 180);
ctx.translate(-bbcShape918.around.x, -bbcShape918.around.y);
ctx.beginPath();
ctx.arc(bbcShape918.point.x, bbcShape918.point.y, bbcShape918.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 239, 59)';

ctx.save();
ctx.translate(bbcShape919.around.x, bbcShape919.around.y);
ctx.rotate(bbcShape919.rotation * Math.PI / 180);
ctx.translate(-bbcShape919.around.x, -bbcShape919.around.y);
ctx.beginPath();
ctx.arc(bbcShape919.point.x, bbcShape919.point.y, bbcShape919.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(155, 199, 16)';

ctx.save();
ctx.translate(bbcShape920.around.x, bbcShape920.around.y);
ctx.rotate(bbcShape920.rotation * Math.PI / 180);
ctx.translate(-bbcShape920.around.x, -bbcShape920.around.y);
ctx.beginPath();
ctx.arc(bbcShape920.point.x, bbcShape920.point.y, bbcShape920.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(39, 217, 160)';

ctx.save();
ctx.translate(bbcShape921.around.x, bbcShape921.around.y);
ctx.rotate(bbcShape921.rotation * Math.PI / 180);
ctx.translate(-bbcShape921.around.x, -bbcShape921.around.y);
ctx.beginPath();
ctx.arc(bbcShape921.point.x, bbcShape921.point.y, bbcShape921.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(113, 124, 31)';

ctx.save();
ctx.translate(bbcShape922.around.x, bbcShape922.around.y);
ctx.rotate(bbcShape922.rotation * Math.PI / 180);
ctx.translate(-bbcShape922.around.x, -bbcShape922.around.y);
ctx.beginPath();
ctx.arc(bbcShape922.point.x, bbcShape922.point.y, bbcShape922.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(114, 205, 232)';

ctx.save();
ctx.translate(bbcShape923.around.x, bbcShape923.around.y);
ctx.rotate(bbcShape923.rotation * Math.PI / 180);
ctx.translate(-bbcShape923.around.x, -bbcShape923.around.y);
ctx.beginPath();
ctx.arc(bbcShape923.point.x, bbcShape923.point.y, bbcShape923.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(79, 202, 41)';

ctx.save();
ctx.translate(bbcShape924.around.x, bbcShape924.around.y);
ctx.rotate(bbcShape924.rotation * Math.PI / 180);
ctx.translate(-bbcShape924.around.x, -bbcShape924.around.y);
ctx.beginPath();
ctx.arc(bbcShape924.point.x, bbcShape924.point.y, bbcShape924.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(254, 193, 113)';

ctx.save();
ctx.translate(bbcShape925.around.x, bbcShape925.around.y);
ctx.rotate(bbcShape925.rotation * Math.PI / 180);
ctx.translate(-bbcShape925.around.x, -bbcShape925.around.y);
ctx.beginPath();
ctx.arc(bbcShape925.point.x, bbcShape925.point.y, bbcShape925.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75, 41, 234)';

ctx.save();
ctx.translate(bbcShape926.around.x, bbcShape926.around.y);
ctx.rotate(bbcShape926.rotation * Math.PI / 180);
ctx.translate(-bbcShape926.around.x, -bbcShape926.around.y);
ctx.beginPath();
ctx.arc(bbcShape926.point.x, bbcShape926.point.y, bbcShape926.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(43, 176, 155)';

ctx.save();
ctx.translate(bbcShape927.around.x, bbcShape927.around.y);
ctx.rotate(bbcShape927.rotation * Math.PI / 180);
ctx.translate(-bbcShape927.around.x, -bbcShape927.around.y);
ctx.beginPath();
ctx.arc(bbcShape927.point.x, bbcShape927.point.y, bbcShape927.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(253, 147, 185)';

ctx.save();
ctx.translate(bbcShape928.around.x, bbcShape928.around.y);
ctx.rotate(bbcShape928.rotation * Math.PI / 180);
ctx.translate(-bbcShape928.around.x, -bbcShape928.around.y);
ctx.beginPath();
ctx.arc(bbcShape928.point.x, bbcShape928.point.y, bbcShape928.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(10, 182, 71)';

ctx.save();
ctx.translate(bbcShape929.around.x, bbcShape929.around.y);
ctx.rotate(bbcShape929.rotation * Math.PI / 180);
ctx.translate(-bbcShape929.around.x, -bbcShape929.around.y);
ctx.beginPath();
ctx.arc(bbcShape929.point.x, bbcShape929.point.y, bbcShape929.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(233, 205, 152)';

ctx.save();
ctx.translate(bbcShape930.around.x, bbcShape930.around.y);
ctx.rotate(bbcShape930.rotation * Math.PI / 180);
ctx.translate(-bbcShape930.around.x, -bbcShape930.around.y);
ctx.beginPath();
ctx.arc(bbcShape930.point.x, bbcShape930.point.y, bbcShape930.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(166, 73, 118)';

ctx.save();
ctx.translate(bbcShape931.around.x, bbcShape931.around.y);
ctx.rotate(bbcShape931.rotation * Math.PI / 180);
ctx.translate(-bbcShape931.around.x, -bbcShape931.around.y);
ctx.beginPath();
ctx.arc(bbcShape931.point.x, bbcShape931.point.y, bbcShape931.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(216, 19, 164)';

ctx.save();
ctx.translate(bbcShape932.around.x, bbcShape932.around.y);
ctx.rotate(bbcShape932.rotation * Math.PI / 180);
ctx.translate(-bbcShape932.around.x, -bbcShape932.around.y);
ctx.beginPath();
ctx.arc(bbcShape932.point.x, bbcShape932.point.y, bbcShape932.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50, 97, 127)';

ctx.save();
ctx.translate(bbcShape933.around.x, bbcShape933.around.y);
ctx.rotate(bbcShape933.rotation * Math.PI / 180);
ctx.translate(-bbcShape933.around.x, -bbcShape933.around.y);
ctx.beginPath();
ctx.arc(bbcShape933.point.x, bbcShape933.point.y, bbcShape933.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(57, 218, 76)';

ctx.save();
ctx.translate(bbcShape934.around.x, bbcShape934.around.y);
ctx.rotate(bbcShape934.rotation * Math.PI / 180);
ctx.translate(-bbcShape934.around.x, -bbcShape934.around.y);
ctx.beginPath();
ctx.arc(bbcShape934.point.x, bbcShape934.point.y, bbcShape934.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 244, 202)';

ctx.save();
ctx.translate(bbcShape935.around.x, bbcShape935.around.y);
ctx.rotate(bbcShape935.rotation * Math.PI / 180);
ctx.translate(-bbcShape935.around.x, -bbcShape935.around.y);
ctx.beginPath();
ctx.arc(bbcShape935.point.x, bbcShape935.point.y, bbcShape935.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(92, 9, 5)';

ctx.save();
ctx.translate(bbcShape936.around.x, bbcShape936.around.y);
ctx.rotate(bbcShape936.rotation * Math.PI / 180);
ctx.translate(-bbcShape936.around.x, -bbcShape936.around.y);
ctx.beginPath();
ctx.arc(bbcShape936.point.x, bbcShape936.point.y, bbcShape936.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(31, 218, 224)';

ctx.save();
ctx.translate(bbcShape937.around.x, bbcShape937.around.y);
ctx.rotate(bbcShape937.rotation * Math.PI / 180);
ctx.translate(-bbcShape937.around.x, -bbcShape937.around.y);
ctx.beginPath();
ctx.arc(bbcShape937.point.x, bbcShape937.point.y, bbcShape937.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 98, 127)';

ctx.save();
ctx.translate(bbcShape938.around.x, bbcShape938.around.y);
ctx.rotate(bbcShape938.rotation * Math.PI / 180);
ctx.translate(-bbcShape938.around.x, -bbcShape938.around.y);
ctx.beginPath();
ctx.arc(bbcShape938.point.x, bbcShape938.point.y, bbcShape938.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(193, 248, 36)';

ctx.save();
ctx.translate(bbcShape939.around.x, bbcShape939.around.y);
ctx.rotate(bbcShape939.rotation * Math.PI / 180);
ctx.translate(-bbcShape939.around.x, -bbcShape939.around.y);
ctx.beginPath();
ctx.arc(bbcShape939.point.x, bbcShape939.point.y, bbcShape939.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(56, 32, 211)';

ctx.save();
ctx.translate(bbcShape940.around.x, bbcShape940.around.y);
ctx.rotate(bbcShape940.rotation * Math.PI / 180);
ctx.translate(-bbcShape940.around.x, -bbcShape940.around.y);
ctx.beginPath();
ctx.arc(bbcShape940.point.x, bbcShape940.point.y, bbcShape940.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(102, 97, 155)';

ctx.save();
ctx.translate(bbcShape941.around.x, bbcShape941.around.y);
ctx.rotate(bbcShape941.rotation * Math.PI / 180);
ctx.translate(-bbcShape941.around.x, -bbcShape941.around.y);
ctx.beginPath();
ctx.arc(bbcShape941.point.x, bbcShape941.point.y, bbcShape941.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(197, 230, 202)';

ctx.save();
ctx.translate(bbcShape942.around.x, bbcShape942.around.y);
ctx.rotate(bbcShape942.rotation * Math.PI / 180);
ctx.translate(-bbcShape942.around.x, -bbcShape942.around.y);
ctx.beginPath();
ctx.arc(bbcShape942.point.x, bbcShape942.point.y, bbcShape942.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(4, 85, 72)';

ctx.save();
ctx.translate(bbcShape943.around.x, bbcShape943.around.y);
ctx.rotate(bbcShape943.rotation * Math.PI / 180);
ctx.translate(-bbcShape943.around.x, -bbcShape943.around.y);
ctx.beginPath();
ctx.arc(bbcShape943.point.x, bbcShape943.point.y, bbcShape943.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(8, 85, 178)';

ctx.save();
ctx.translate(bbcShape944.around.x, bbcShape944.around.y);
ctx.rotate(bbcShape944.rotation * Math.PI / 180);
ctx.translate(-bbcShape944.around.x, -bbcShape944.around.y);
ctx.beginPath();
ctx.arc(bbcShape944.point.x, bbcShape944.point.y, bbcShape944.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(96, 185, 203)';

ctx.save();
ctx.translate(bbcShape945.around.x, bbcShape945.around.y);
ctx.rotate(bbcShape945.rotation * Math.PI / 180);
ctx.translate(-bbcShape945.around.x, -bbcShape945.around.y);
ctx.beginPath();
ctx.arc(bbcShape945.point.x, bbcShape945.point.y, bbcShape945.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(104, 25, 189)';

ctx.save();
ctx.translate(bbcShape946.around.x, bbcShape946.around.y);
ctx.rotate(bbcShape946.rotation * Math.PI / 180);
ctx.translate(-bbcShape946.around.x, -bbcShape946.around.y);
ctx.beginPath();
ctx.arc(bbcShape946.point.x, bbcShape946.point.y, bbcShape946.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(54, 175, 59)';

ctx.save();
ctx.translate(bbcShape947.around.x, bbcShape947.around.y);
ctx.rotate(bbcShape947.rotation * Math.PI / 180);
ctx.translate(-bbcShape947.around.x, -bbcShape947.around.y);
ctx.beginPath();
ctx.arc(bbcShape947.point.x, bbcShape947.point.y, bbcShape947.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(8, 166, 235)';

ctx.save();
ctx.translate(bbcShape948.around.x, bbcShape948.around.y);
ctx.rotate(bbcShape948.rotation * Math.PI / 180);
ctx.translate(-bbcShape948.around.x, -bbcShape948.around.y);
ctx.beginPath();
ctx.arc(bbcShape948.point.x, bbcShape948.point.y, bbcShape948.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(228, 10, 136)';

ctx.save();
ctx.translate(bbcShape949.around.x, bbcShape949.around.y);
ctx.rotate(bbcShape949.rotation * Math.PI / 180);
ctx.translate(-bbcShape949.around.x, -bbcShape949.around.y);
ctx.beginPath();
ctx.arc(bbcShape949.point.x, bbcShape949.point.y, bbcShape949.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(159, 64, 251)';

ctx.save();
ctx.translate(bbcShape950.around.x, bbcShape950.around.y);
ctx.rotate(bbcShape950.rotation * Math.PI / 180);
ctx.translate(-bbcShape950.around.x, -bbcShape950.around.y);
ctx.beginPath();
ctx.arc(bbcShape950.point.x, bbcShape950.point.y, bbcShape950.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(197, 187, 121)';

ctx.save();
ctx.translate(bbcShape951.around.x, bbcShape951.around.y);
ctx.rotate(bbcShape951.rotation * Math.PI / 180);
ctx.translate(-bbcShape951.around.x, -bbcShape951.around.y);
ctx.beginPath();
ctx.arc(bbcShape951.point.x, bbcShape951.point.y, bbcShape951.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(32, 139, 2)';

ctx.save();
ctx.translate(bbcShape952.around.x, bbcShape952.around.y);
ctx.rotate(bbcShape952.rotation * Math.PI / 180);
ctx.translate(-bbcShape952.around.x, -bbcShape952.around.y);
ctx.beginPath();
ctx.arc(bbcShape952.point.x, bbcShape952.point.y, bbcShape952.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(126, 229, 39)';

ctx.save();
ctx.translate(bbcShape953.around.x, bbcShape953.around.y);
ctx.rotate(bbcShape953.rotation * Math.PI / 180);
ctx.translate(-bbcShape953.around.x, -bbcShape953.around.y);
ctx.beginPath();
ctx.arc(bbcShape953.point.x, bbcShape953.point.y, bbcShape953.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(239, 150, 96)';

ctx.save();
ctx.translate(bbcShape954.around.x, bbcShape954.around.y);
ctx.rotate(bbcShape954.rotation * Math.PI / 180);
ctx.translate(-bbcShape954.around.x, -bbcShape954.around.y);
ctx.beginPath();
ctx.arc(bbcShape954.point.x, bbcShape954.point.y, bbcShape954.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(49, 167, 88)';

ctx.save();
ctx.translate(bbcShape955.around.x, bbcShape955.around.y);
ctx.rotate(bbcShape955.rotation * Math.PI / 180);
ctx.translate(-bbcShape955.around.x, -bbcShape955.around.y);
ctx.beginPath();
ctx.arc(bbcShape955.point.x, bbcShape955.point.y, bbcShape955.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(127, 81, 153)';

ctx.save();
ctx.translate(bbcShape956.around.x, bbcShape956.around.y);
ctx.rotate(bbcShape956.rotation * Math.PI / 180);
ctx.translate(-bbcShape956.around.x, -bbcShape956.around.y);
ctx.beginPath();
ctx.arc(bbcShape956.point.x, bbcShape956.point.y, bbcShape956.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(156, 220, 33)';

ctx.save();
ctx.translate(bbcShape957.around.x, bbcShape957.around.y);
ctx.rotate(bbcShape957.rotation * Math.PI / 180);
ctx.translate(-bbcShape957.around.x, -bbcShape957.around.y);
ctx.beginPath();
ctx.arc(bbcShape957.point.x, bbcShape957.point.y, bbcShape957.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(100, 29, 159)';

ctx.save();
ctx.translate(bbcShape958.around.x, bbcShape958.around.y);
ctx.rotate(bbcShape958.rotation * Math.PI / 180);
ctx.translate(-bbcShape958.around.x, -bbcShape958.around.y);
ctx.beginPath();
ctx.arc(bbcShape958.point.x, bbcShape958.point.y, bbcShape958.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225, 222, 130)';

ctx.save();
ctx.translate(bbcShape959.around.x, bbcShape959.around.y);
ctx.rotate(bbcShape959.rotation * Math.PI / 180);
ctx.translate(-bbcShape959.around.x, -bbcShape959.around.y);
ctx.beginPath();
ctx.arc(bbcShape959.point.x, bbcShape959.point.y, bbcShape959.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(98, 169, 216)';

ctx.save();
ctx.translate(bbcShape960.around.x, bbcShape960.around.y);
ctx.rotate(bbcShape960.rotation * Math.PI / 180);
ctx.translate(-bbcShape960.around.x, -bbcShape960.around.y);
ctx.beginPath();
ctx.arc(bbcShape960.point.x, bbcShape960.point.y, bbcShape960.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(26, 233, 138)';

ctx.save();
ctx.translate(bbcShape961.around.x, bbcShape961.around.y);
ctx.rotate(bbcShape961.rotation * Math.PI / 180);
ctx.translate(-bbcShape961.around.x, -bbcShape961.around.y);
ctx.beginPath();
ctx.arc(bbcShape961.point.x, bbcShape961.point.y, bbcShape961.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(97, 160, 216)';

ctx.save();
ctx.translate(bbcShape962.around.x, bbcShape962.around.y);
ctx.rotate(bbcShape962.rotation * Math.PI / 180);
ctx.translate(-bbcShape962.around.x, -bbcShape962.around.y);
ctx.beginPath();
ctx.arc(bbcShape962.point.x, bbcShape962.point.y, bbcShape962.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(21, 177, 49)';

ctx.save();
ctx.translate(bbcShape963.around.x, bbcShape963.around.y);
ctx.rotate(bbcShape963.rotation * Math.PI / 180);
ctx.translate(-bbcShape963.around.x, -bbcShape963.around.y);
ctx.beginPath();
ctx.arc(bbcShape963.point.x, bbcShape963.point.y, bbcShape963.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(220, 197, 49)';

ctx.save();
ctx.translate(bbcShape964.around.x, bbcShape964.around.y);
ctx.rotate(bbcShape964.rotation * Math.PI / 180);
ctx.translate(-bbcShape964.around.x, -bbcShape964.around.y);
ctx.beginPath();
ctx.arc(bbcShape964.point.x, bbcShape964.point.y, bbcShape964.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 183, 176)';

ctx.save();
ctx.translate(bbcShape965.around.x, bbcShape965.around.y);
ctx.rotate(bbcShape965.rotation * Math.PI / 180);
ctx.translate(-bbcShape965.around.x, -bbcShape965.around.y);
ctx.beginPath();
ctx.arc(bbcShape965.point.x, bbcShape965.point.y, bbcShape965.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(78, 23, 49)';

ctx.save();
ctx.translate(bbcShape966.around.x, bbcShape966.around.y);
ctx.rotate(bbcShape966.rotation * Math.PI / 180);
ctx.translate(-bbcShape966.around.x, -bbcShape966.around.y);
ctx.beginPath();
ctx.arc(bbcShape966.point.x, bbcShape966.point.y, bbcShape966.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(87, 216, 176)';

ctx.save();
ctx.translate(bbcShape967.around.x, bbcShape967.around.y);
ctx.rotate(bbcShape967.rotation * Math.PI / 180);
ctx.translate(-bbcShape967.around.x, -bbcShape967.around.y);
ctx.beginPath();
ctx.arc(bbcShape967.point.x, bbcShape967.point.y, bbcShape967.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(34, 82, 17)';

ctx.save();
ctx.translate(bbcShape968.around.x, bbcShape968.around.y);
ctx.rotate(bbcShape968.rotation * Math.PI / 180);
ctx.translate(-bbcShape968.around.x, -bbcShape968.around.y);
ctx.beginPath();
ctx.arc(bbcShape968.point.x, bbcShape968.point.y, bbcShape968.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(72, 148, 140)';

ctx.save();
ctx.translate(bbcShape969.around.x, bbcShape969.around.y);
ctx.rotate(bbcShape969.rotation * Math.PI / 180);
ctx.translate(-bbcShape969.around.x, -bbcShape969.around.y);
ctx.beginPath();
ctx.arc(bbcShape969.point.x, bbcShape969.point.y, bbcShape969.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(22, 4, 194)';

ctx.save();
ctx.translate(bbcShape970.around.x, bbcShape970.around.y);
ctx.rotate(bbcShape970.rotation * Math.PI / 180);
ctx.translate(-bbcShape970.around.x, -bbcShape970.around.y);
ctx.beginPath();
ctx.arc(bbcShape970.point.x, bbcShape970.point.y, bbcShape970.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(196, 92, 63)';

ctx.save();
ctx.translate(bbcShape971.around.x, bbcShape971.around.y);
ctx.rotate(bbcShape971.rotation * Math.PI / 180);
ctx.translate(-bbcShape971.around.x, -bbcShape971.around.y);
ctx.beginPath();
ctx.arc(bbcShape971.point.x, bbcShape971.point.y, bbcShape971.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(115, 52, 43)';

ctx.save();
ctx.translate(bbcShape972.around.x, bbcShape972.around.y);
ctx.rotate(bbcShape972.rotation * Math.PI / 180);
ctx.translate(-bbcShape972.around.x, -bbcShape972.around.y);
ctx.beginPath();
ctx.arc(bbcShape972.point.x, bbcShape972.point.y, bbcShape972.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(112, 5, 164)';

ctx.save();
ctx.translate(bbcShape973.around.x, bbcShape973.around.y);
ctx.rotate(bbcShape973.rotation * Math.PI / 180);
ctx.translate(-bbcShape973.around.x, -bbcShape973.around.y);
ctx.beginPath();
ctx.arc(bbcShape973.point.x, bbcShape973.point.y, bbcShape973.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(179, 70, 81)';

ctx.save();
ctx.translate(bbcShape974.around.x, bbcShape974.around.y);
ctx.rotate(bbcShape974.rotation * Math.PI / 180);
ctx.translate(-bbcShape974.around.x, -bbcShape974.around.y);
ctx.beginPath();
ctx.arc(bbcShape974.point.x, bbcShape974.point.y, bbcShape974.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(198, 14, 223)';

ctx.save();
ctx.translate(bbcShape975.around.x, bbcShape975.around.y);
ctx.rotate(bbcShape975.rotation * Math.PI / 180);
ctx.translate(-bbcShape975.around.x, -bbcShape975.around.y);
ctx.beginPath();
ctx.arc(bbcShape975.point.x, bbcShape975.point.y, bbcShape975.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(217, 154, 133)';

ctx.save();
ctx.translate(bbcShape976.around.x, bbcShape976.around.y);
ctx.rotate(bbcShape976.rotation * Math.PI / 180);
ctx.translate(-bbcShape976.around.x, -bbcShape976.around.y);
ctx.beginPath();
ctx.arc(bbcShape976.point.x, bbcShape976.point.y, bbcShape976.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(51, 72, 26)';

ctx.save();
ctx.translate(bbcShape977.around.x, bbcShape977.around.y);
ctx.rotate(bbcShape977.rotation * Math.PI / 180);
ctx.translate(-bbcShape977.around.x, -bbcShape977.around.y);
ctx.beginPath();
ctx.arc(bbcShape977.point.x, bbcShape977.point.y, bbcShape977.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(47, 56, 104)';

ctx.save();
ctx.translate(bbcShape978.around.x, bbcShape978.around.y);
ctx.rotate(bbcShape978.rotation * Math.PI / 180);
ctx.translate(-bbcShape978.around.x, -bbcShape978.around.y);
ctx.beginPath();
ctx.arc(bbcShape978.point.x, bbcShape978.point.y, bbcShape978.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(116, 89, 94)';

ctx.save();
ctx.translate(bbcShape979.around.x, bbcShape979.around.y);
ctx.rotate(bbcShape979.rotation * Math.PI / 180);
ctx.translate(-bbcShape979.around.x, -bbcShape979.around.y);
ctx.beginPath();
ctx.arc(bbcShape979.point.x, bbcShape979.point.y, bbcShape979.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(174, 97, 135)';

ctx.save();
ctx.translate(bbcShape980.around.x, bbcShape980.around.y);
ctx.rotate(bbcShape980.rotation * Math.PI / 180);
ctx.translate(-bbcShape980.around.x, -bbcShape980.around.y);
ctx.beginPath();
ctx.arc(bbcShape980.point.x, bbcShape980.point.y, bbcShape980.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(127, 154, 50)';

ctx.save();
ctx.translate(bbcShape981.around.x, bbcShape981.around.y);
ctx.rotate(bbcShape981.rotation * Math.PI / 180);
ctx.translate(-bbcShape981.around.x, -bbcShape981.around.y);
ctx.beginPath();
ctx.arc(bbcShape981.point.x, bbcShape981.point.y, bbcShape981.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(174, 130, 115)';

ctx.save();
ctx.translate(bbcShape982.around.x, bbcShape982.around.y);
ctx.rotate(bbcShape982.rotation * Math.PI / 180);
ctx.translate(-bbcShape982.around.x, -bbcShape982.around.y);
ctx.beginPath();
ctx.arc(bbcShape982.point.x, bbcShape982.point.y, bbcShape982.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(40, 11, 226)';

ctx.save();
ctx.translate(bbcShape983.around.x, bbcShape983.around.y);
ctx.rotate(bbcShape983.rotation * Math.PI / 180);
ctx.translate(-bbcShape983.around.x, -bbcShape983.around.y);
ctx.beginPath();
ctx.arc(bbcShape983.point.x, bbcShape983.point.y, bbcShape983.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(90, 133, 188)';

ctx.save();
ctx.translate(bbcShape984.around.x, bbcShape984.around.y);
ctx.rotate(bbcShape984.rotation * Math.PI / 180);
ctx.translate(-bbcShape984.around.x, -bbcShape984.around.y);
ctx.beginPath();
ctx.arc(bbcShape984.point.x, bbcShape984.point.y, bbcShape984.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(252, 207, 152)';

ctx.save();
ctx.translate(bbcShape985.around.x, bbcShape985.around.y);
ctx.rotate(bbcShape985.rotation * Math.PI / 180);
ctx.translate(-bbcShape985.around.x, -bbcShape985.around.y);
ctx.beginPath();
ctx.arc(bbcShape985.point.x, bbcShape985.point.y, bbcShape985.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(212, 139, 83)';

ctx.save();
ctx.translate(bbcShape986.around.x, bbcShape986.around.y);
ctx.rotate(bbcShape986.rotation * Math.PI / 180);
ctx.translate(-bbcShape986.around.x, -bbcShape986.around.y);
ctx.beginPath();
ctx.arc(bbcShape986.point.x, bbcShape986.point.y, bbcShape986.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(1, 193, 65)';

ctx.save();
ctx.translate(bbcShape987.around.x, bbcShape987.around.y);
ctx.rotate(bbcShape987.rotation * Math.PI / 180);
ctx.translate(-bbcShape987.around.x, -bbcShape987.around.y);
ctx.beginPath();
ctx.arc(bbcShape987.point.x, bbcShape987.point.y, bbcShape987.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(12, 221, 122)';

ctx.save();
ctx.translate(bbcShape988.around.x, bbcShape988.around.y);
ctx.rotate(bbcShape988.rotation * Math.PI / 180);
ctx.translate(-bbcShape988.around.x, -bbcShape988.around.y);
ctx.beginPath();
ctx.arc(bbcShape988.point.x, bbcShape988.point.y, bbcShape988.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(101, 167, 230)';

ctx.save();
ctx.translate(bbcShape989.around.x, bbcShape989.around.y);
ctx.rotate(bbcShape989.rotation * Math.PI / 180);
ctx.translate(-bbcShape989.around.x, -bbcShape989.around.y);
ctx.beginPath();
ctx.arc(bbcShape989.point.x, bbcShape989.point.y, bbcShape989.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(24, 200, 12)';

ctx.save();
ctx.translate(bbcShape990.around.x, bbcShape990.around.y);
ctx.rotate(bbcShape990.rotation * Math.PI / 180);
ctx.translate(-bbcShape990.around.x, -bbcShape990.around.y);
ctx.beginPath();
ctx.arc(bbcShape990.point.x, bbcShape990.point.y, bbcShape990.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(247, 250, 50)';

ctx.save();
ctx.translate(bbcShape991.around.x, bbcShape991.around.y);
ctx.rotate(bbcShape991.rotation * Math.PI / 180);
ctx.translate(-bbcShape991.around.x, -bbcShape991.around.y);
ctx.beginPath();
ctx.arc(bbcShape991.point.x, bbcShape991.point.y, bbcShape991.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(183, 143, 250)';

ctx.save();
ctx.translate(bbcShape992.around.x, bbcShape992.around.y);
ctx.rotate(bbcShape992.rotation * Math.PI / 180);
ctx.translate(-bbcShape992.around.x, -bbcShape992.around.y);
ctx.beginPath();
ctx.arc(bbcShape992.point.x, bbcShape992.point.y, bbcShape992.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(202, 206, 23)';

ctx.save();
ctx.translate(bbcShape993.around.x, bbcShape993.around.y);
ctx.rotate(bbcShape993.rotation * Math.PI / 180);
ctx.translate(-bbcShape993.around.x, -bbcShape993.around.y);
ctx.beginPath();
ctx.arc(bbcShape993.point.x, bbcShape993.point.y, bbcShape993.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(203, 36, 245)';

ctx.save();
ctx.translate(bbcShape994.around.x, bbcShape994.around.y);
ctx.rotate(bbcShape994.rotation * Math.PI / 180);
ctx.translate(-bbcShape994.around.x, -bbcShape994.around.y);
ctx.beginPath();
ctx.arc(bbcShape994.point.x, bbcShape994.point.y, bbcShape994.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(40, 55, 231)';

ctx.save();
ctx.translate(bbcShape995.around.x, bbcShape995.around.y);
ctx.rotate(bbcShape995.rotation * Math.PI / 180);
ctx.translate(-bbcShape995.around.x, -bbcShape995.around.y);
ctx.beginPath();
ctx.arc(bbcShape995.point.x, bbcShape995.point.y, bbcShape995.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(135, 82, 67)';

ctx.save();
ctx.translate(bbcShape996.around.x, bbcShape996.around.y);
ctx.rotate(bbcShape996.rotation * Math.PI / 180);
ctx.translate(-bbcShape996.around.x, -bbcShape996.around.y);
ctx.beginPath();
ctx.arc(bbcShape996.point.x, bbcShape996.point.y, bbcShape996.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(184, 124, 71)';

ctx.save();
ctx.translate(bbcShape997.around.x, bbcShape997.around.y);
ctx.rotate(bbcShape997.rotation * Math.PI / 180);
ctx.translate(-bbcShape997.around.x, -bbcShape997.around.y);
ctx.beginPath();
ctx.arc(bbcShape997.point.x, bbcShape997.point.y, bbcShape997.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(192, 182, 22)';

ctx.save();
ctx.translate(bbcShape998.around.x, bbcShape998.around.y);
ctx.rotate(bbcShape998.rotation * Math.PI / 180);
ctx.translate(-bbcShape998.around.x, -bbcShape998.around.y);
ctx.beginPath();
ctx.arc(bbcShape998.point.x, bbcShape998.point.y, bbcShape998.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(241, 80, 87)';

ctx.save();
ctx.translate(bbcShape999.around.x, bbcShape999.around.y);
ctx.rotate(bbcShape999.rotation * Math.PI / 180);
ctx.translate(-bbcShape999.around.x, -bbcShape999.around.y);
ctx.beginPath();
ctx.arc(bbcShape999.point.x, bbcShape999.point.y, bbcShape999.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(59, 41, 90)';

ctx.save();
ctx.translate(bbcShape1000.around.x, bbcShape1000.around.y);
ctx.rotate(bbcShape1000.rotation * Math.PI / 180);
ctx.translate(-bbcShape1000.around.x, -bbcShape1000.around.y);
ctx.beginPath();
ctx.arc(bbcShape1000.point.x, bbcShape1000.point.y, bbcShape1000.radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(0.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1001.around.x, bbcShape1001.around.y);
ctx.rotate(bbcShape1001.rotation * Math.PI / 180);
ctx.translate(-bbcShape1001.around.x, -bbcShape1001.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1001.points[0][0], bbcShape1001.points[0][1]);
ctx.lineTo(bbcShape1001.points[1][0], bbcShape1001.points[1][1]);
ctx.lineTo(bbcShape1001.points[2][0], bbcShape1001.points[2][1]);
ctx.lineTo(bbcShape1001.points[3][0], bbcShape1001.points[3][1]);
ctx.lineTo(bbcShape1001.points[4][0], bbcShape1001.points[4][1]);
ctx.lineTo(bbcShape1001.points[5][0], bbcShape1001.points[5][1]);
ctx.lineTo(bbcShape1001.points[6][0], bbcShape1001.points[6][1]);
ctx.lineTo(bbcShape1001.points[7][0], bbcShape1001.points[7][1]);
ctx.lineTo(bbcShape1001.points[8][0], bbcShape1001.points[8][1]);
ctx.lineTo(bbcShape1001.points[9][0], bbcShape1001.points[9][1]);
ctx.lineTo(bbcShape1001.points[10][0], bbcShape1001.points[10][1]);
ctx.lineTo(bbcShape1001.points[11][0], bbcShape1001.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1002.around.x, bbcShape1002.around.y);
ctx.rotate(bbcShape1002.rotation * Math.PI / 180);
ctx.translate(-bbcShape1002.around.x, -bbcShape1002.around.y);
ctx.beginPath();
ctx.rect(bbcShape1002.point.x, bbcShape1002.point.y, bbcShape1002.size.width, bbcShape1002.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1003.around.x, bbcShape1003.around.y);
ctx.rotate(bbcShape1003.rotation * Math.PI / 180);
ctx.translate(-bbcShape1003.around.x, -bbcShape1003.around.y);
ctx.beginPath();
ctx.rect(bbcShape1003.point.x, bbcShape1003.point.y, bbcShape1003.size.width, bbcShape1003.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1004.around.x, bbcShape1004.around.y);
ctx.rotate(bbcShape1004.rotation * Math.PI / 180);
ctx.translate(-bbcShape1004.around.x, -bbcShape1004.around.y);
ctx.beginPath();
ctx.rect(bbcShape1004.point.x, bbcShape1004.point.y, bbcShape1004.size.width, bbcShape1004.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1005.around.x, bbcShape1005.around.y);
ctx.rotate(bbcShape1005.rotation * Math.PI / 180);
ctx.translate(-bbcShape1005.around.x, -bbcShape1005.around.y);
ctx.beginPath();
ctx.rect(bbcShape1005.point.x, bbcShape1005.point.y, bbcShape1005.size.width, bbcShape1005.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1006.around.x, bbcShape1006.around.y);
ctx.rotate(bbcShape1006.rotation * Math.PI / 180);
ctx.translate(-bbcShape1006.around.x, -bbcShape1006.around.y);
ctx.beginPath();
ctx.rect(bbcShape1006.point.x, bbcShape1006.point.y, bbcShape1006.size.width, bbcShape1006.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1007.around.x, bbcShape1007.around.y);
ctx.rotate(bbcShape1007.rotation * Math.PI / 180);
ctx.translate(-bbcShape1007.around.x, -bbcShape1007.around.y);
ctx.beginPath();
ctx.rect(bbcShape1007.point.x, bbcShape1007.point.y, bbcShape1007.size.width, bbcShape1007.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1008.around.x, bbcShape1008.around.y);
ctx.rotate(bbcShape1008.rotation * Math.PI / 180);
ctx.translate(-bbcShape1008.around.x, -bbcShape1008.around.y);
ctx.beginPath();
ctx.rect(bbcShape1008.point.x, bbcShape1008.point.y, bbcShape1008.size.width, bbcShape1008.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1009.around.x, bbcShape1009.around.y);
ctx.rotate(bbcShape1009.rotation * Math.PI / 180);
ctx.translate(-bbcShape1009.around.x, -bbcShape1009.around.y);
ctx.beginPath();
ctx.rect(bbcShape1009.point.x, bbcShape1009.point.y, bbcShape1009.size.width, bbcShape1009.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1010.around.x, bbcShape1010.around.y);
ctx.rotate(bbcShape1010.rotation * Math.PI / 180);
ctx.translate(-bbcShape1010.around.x, -bbcShape1010.around.y);
ctx.beginPath();
ctx.rect(bbcShape1010.point.x, bbcShape1010.point.y, bbcShape1010.size.width, bbcShape1010.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1011.around.x, bbcShape1011.around.y);
ctx.rotate(bbcShape1011.rotation * Math.PI / 180);
ctx.translate(-bbcShape1011.around.x, -bbcShape1011.around.y);
ctx.beginPath();
ctx.rect(bbcShape1011.point.x, bbcShape1011.point.y, bbcShape1011.size.width, bbcShape1011.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1012.around.x, bbcShape1012.around.y);
ctx.rotate(bbcShape1012.rotation * Math.PI / 180);
ctx.translate(-bbcShape1012.around.x, -bbcShape1012.around.y);
ctx.beginPath();
ctx.rect(bbcShape1012.point.x, bbcShape1012.point.y, bbcShape1012.size.width, bbcShape1012.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1013.around.x, bbcShape1013.around.y);
ctx.rotate(bbcShape1013.rotation * Math.PI / 180);
ctx.translate(-bbcShape1013.around.x, -bbcShape1013.around.y);
ctx.beginPath();
ctx.rect(bbcShape1013.point.x, bbcShape1013.point.y, bbcShape1013.size.width, bbcShape1013.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1014.around.x, bbcShape1014.around.y);
ctx.rotate(bbcShape1014.rotation * Math.PI / 180);
ctx.translate(-bbcShape1014.around.x, -bbcShape1014.around.y);
ctx.beginPath();
ctx.rect(bbcShape1014.point.x, bbcShape1014.point.y, bbcShape1014.size.width, bbcShape1014.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1015.around.x, bbcShape1015.around.y);
ctx.rotate(bbcShape1015.rotation * Math.PI / 180);
ctx.translate(-bbcShape1015.around.x, -bbcShape1015.around.y);
ctx.beginPath();
ctx.rect(bbcShape1015.point.x, bbcShape1015.point.y, bbcShape1015.size.width, bbcShape1015.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1016.around.x, bbcShape1016.around.y);
ctx.rotate(bbcShape1016.rotation * Math.PI / 180);
ctx.translate(-bbcShape1016.around.x, -bbcShape1016.around.y);
ctx.beginPath();
ctx.rect(bbcShape1016.point.x, bbcShape1016.point.y, bbcShape1016.size.width, bbcShape1016.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1017.around.x, bbcShape1017.around.y);
ctx.rotate(bbcShape1017.rotation * Math.PI / 180);
ctx.translate(-bbcShape1017.around.x, -bbcShape1017.around.y);
ctx.beginPath();
ctx.rect(bbcShape1017.point.x, bbcShape1017.point.y, bbcShape1017.size.width, bbcShape1017.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1018.around.x, bbcShape1018.around.y);
ctx.rotate(bbcShape1018.rotation * Math.PI / 180);
ctx.translate(-bbcShape1018.around.x, -bbcShape1018.around.y);
ctx.beginPath();
ctx.rect(bbcShape1018.point.x, bbcShape1018.point.y, bbcShape1018.size.width, bbcShape1018.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1019.around.x, bbcShape1019.around.y);
ctx.rotate(bbcShape1019.rotation * Math.PI / 180);
ctx.translate(-bbcShape1019.around.x, -bbcShape1019.around.y);
ctx.beginPath();
ctx.rect(bbcShape1019.point.x, bbcShape1019.point.y, bbcShape1019.size.width, bbcShape1019.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1020.around.x, bbcShape1020.around.y);
ctx.rotate(bbcShape1020.rotation * Math.PI / 180);
ctx.translate(-bbcShape1020.around.x, -bbcShape1020.around.y);
ctx.beginPath();
ctx.rect(bbcShape1020.point.x, bbcShape1020.point.y, bbcShape1020.size.width, bbcShape1020.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 0.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1021.around.x, bbcShape1021.around.y);
ctx.rotate(bbcShape1021.rotation * Math.PI / 180);
ctx.translate(-bbcShape1021.around.x, -bbcShape1021.around.y);
ctx.beginPath();
ctx.rect(bbcShape1021.point.x, bbcShape1021.point.y, bbcShape1021.size.width, bbcShape1021.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(25.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1022.around.x, bbcShape1022.around.y);
ctx.rotate(bbcShape1022.rotation * Math.PI / 180);
ctx.translate(-bbcShape1022.around.x, -bbcShape1022.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1022.points[0][0], bbcShape1022.points[0][1]);
ctx.lineTo(bbcShape1022.points[1][0], bbcShape1022.points[1][1]);
ctx.lineTo(bbcShape1022.points[2][0], bbcShape1022.points[2][1]);
ctx.lineTo(bbcShape1022.points[3][0], bbcShape1022.points[3][1]);
ctx.lineTo(bbcShape1022.points[4][0], bbcShape1022.points[4][1]);
ctx.lineTo(bbcShape1022.points[5][0], bbcShape1022.points[5][1]);
ctx.lineTo(bbcShape1022.points[6][0], bbcShape1022.points[6][1]);
ctx.lineTo(bbcShape1022.points[7][0], bbcShape1022.points[7][1]);
ctx.lineTo(bbcShape1022.points[8][0], bbcShape1022.points[8][1]);
ctx.lineTo(bbcShape1022.points[9][0], bbcShape1022.points[9][1]);
ctx.lineTo(bbcShape1022.points[10][0], bbcShape1022.points[10][1]);
ctx.lineTo(bbcShape1022.points[11][0], bbcShape1022.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1023.around.x, bbcShape1023.around.y);
ctx.rotate(bbcShape1023.rotation * Math.PI / 180);
ctx.translate(-bbcShape1023.around.x, -bbcShape1023.around.y);
ctx.beginPath();
ctx.rect(bbcShape1023.point.x, bbcShape1023.point.y, bbcShape1023.size.width, bbcShape1023.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1024.around.x, bbcShape1024.around.y);
ctx.rotate(bbcShape1024.rotation * Math.PI / 180);
ctx.translate(-bbcShape1024.around.x, -bbcShape1024.around.y);
ctx.beginPath();
ctx.rect(bbcShape1024.point.x, bbcShape1024.point.y, bbcShape1024.size.width, bbcShape1024.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1025.around.x, bbcShape1025.around.y);
ctx.rotate(bbcShape1025.rotation * Math.PI / 180);
ctx.translate(-bbcShape1025.around.x, -bbcShape1025.around.y);
ctx.beginPath();
ctx.rect(bbcShape1025.point.x, bbcShape1025.point.y, bbcShape1025.size.width, bbcShape1025.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1026.around.x, bbcShape1026.around.y);
ctx.rotate(bbcShape1026.rotation * Math.PI / 180);
ctx.translate(-bbcShape1026.around.x, -bbcShape1026.around.y);
ctx.beginPath();
ctx.rect(bbcShape1026.point.x, bbcShape1026.point.y, bbcShape1026.size.width, bbcShape1026.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1027.around.x, bbcShape1027.around.y);
ctx.rotate(bbcShape1027.rotation * Math.PI / 180);
ctx.translate(-bbcShape1027.around.x, -bbcShape1027.around.y);
ctx.beginPath();
ctx.rect(bbcShape1027.point.x, bbcShape1027.point.y, bbcShape1027.size.width, bbcShape1027.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1028.around.x, bbcShape1028.around.y);
ctx.rotate(bbcShape1028.rotation * Math.PI / 180);
ctx.translate(-bbcShape1028.around.x, -bbcShape1028.around.y);
ctx.beginPath();
ctx.rect(bbcShape1028.point.x, bbcShape1028.point.y, bbcShape1028.size.width, bbcShape1028.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1029.around.x, bbcShape1029.around.y);
ctx.rotate(bbcShape1029.rotation * Math.PI / 180);
ctx.translate(-bbcShape1029.around.x, -bbcShape1029.around.y);
ctx.beginPath();
ctx.rect(bbcShape1029.point.x, bbcShape1029.point.y, bbcShape1029.size.width, bbcShape1029.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1030.around.x, bbcShape1030.around.y);
ctx.rotate(bbcShape1030.rotation * Math.PI / 180);
ctx.translate(-bbcShape1030.around.x, -bbcShape1030.around.y);
ctx.beginPath();
ctx.rect(bbcShape1030.point.x, bbcShape1030.point.y, bbcShape1030.size.width, bbcShape1030.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1031.around.x, bbcShape1031.around.y);
ctx.rotate(bbcShape1031.rotation * Math.PI / 180);
ctx.translate(-bbcShape1031.around.x, -bbcShape1031.around.y);
ctx.beginPath();
ctx.rect(bbcShape1031.point.x, bbcShape1031.point.y, bbcShape1031.size.width, bbcShape1031.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1032.around.x, bbcShape1032.around.y);
ctx.rotate(bbcShape1032.rotation * Math.PI / 180);
ctx.translate(-bbcShape1032.around.x, -bbcShape1032.around.y);
ctx.beginPath();
ctx.rect(bbcShape1032.point.x, bbcShape1032.point.y, bbcShape1032.size.width, bbcShape1032.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1033.around.x, bbcShape1033.around.y);
ctx.rotate(bbcShape1033.rotation * Math.PI / 180);
ctx.translate(-bbcShape1033.around.x, -bbcShape1033.around.y);
ctx.beginPath();
ctx.rect(bbcShape1033.point.x, bbcShape1033.point.y, bbcShape1033.size.width, bbcShape1033.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1034.around.x, bbcShape1034.around.y);
ctx.rotate(bbcShape1034.rotation * Math.PI / 180);
ctx.translate(-bbcShape1034.around.x, -bbcShape1034.around.y);
ctx.beginPath();
ctx.rect(bbcShape1034.point.x, bbcShape1034.point.y, bbcShape1034.size.width, bbcShape1034.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1035.around.x, bbcShape1035.around.y);
ctx.rotate(bbcShape1035.rotation * Math.PI / 180);
ctx.translate(-bbcShape1035.around.x, -bbcShape1035.around.y);
ctx.beginPath();
ctx.rect(bbcShape1035.point.x, bbcShape1035.point.y, bbcShape1035.size.width, bbcShape1035.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1036.around.x, bbcShape1036.around.y);
ctx.rotate(bbcShape1036.rotation * Math.PI / 180);
ctx.translate(-bbcShape1036.around.x, -bbcShape1036.around.y);
ctx.beginPath();
ctx.rect(bbcShape1036.point.x, bbcShape1036.point.y, bbcShape1036.size.width, bbcShape1036.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1037.around.x, bbcShape1037.around.y);
ctx.rotate(bbcShape1037.rotation * Math.PI / 180);
ctx.translate(-bbcShape1037.around.x, -bbcShape1037.around.y);
ctx.beginPath();
ctx.rect(bbcShape1037.point.x, bbcShape1037.point.y, bbcShape1037.size.width, bbcShape1037.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1038.around.x, bbcShape1038.around.y);
ctx.rotate(bbcShape1038.rotation * Math.PI / 180);
ctx.translate(-bbcShape1038.around.x, -bbcShape1038.around.y);
ctx.beginPath();
ctx.rect(bbcShape1038.point.x, bbcShape1038.point.y, bbcShape1038.size.width, bbcShape1038.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1039.around.x, bbcShape1039.around.y);
ctx.rotate(bbcShape1039.rotation * Math.PI / 180);
ctx.translate(-bbcShape1039.around.x, -bbcShape1039.around.y);
ctx.beginPath();
ctx.rect(bbcShape1039.point.x, bbcShape1039.point.y, bbcShape1039.size.width, bbcShape1039.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1040.around.x, bbcShape1040.around.y);
ctx.rotate(bbcShape1040.rotation * Math.PI / 180);
ctx.translate(-bbcShape1040.around.x, -bbcShape1040.around.y);
ctx.beginPath();
ctx.rect(bbcShape1040.point.x, bbcShape1040.point.y, bbcShape1040.size.width, bbcShape1040.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1041.around.x, bbcShape1041.around.y);
ctx.rotate(bbcShape1041.rotation * Math.PI / 180);
ctx.translate(-bbcShape1041.around.x, -bbcShape1041.around.y);
ctx.beginPath();
ctx.rect(bbcShape1041.point.x, bbcShape1041.point.y, bbcShape1041.size.width, bbcShape1041.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 25.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1042.around.x, bbcShape1042.around.y);
ctx.rotate(bbcShape1042.rotation * Math.PI / 180);
ctx.translate(-bbcShape1042.around.x, -bbcShape1042.around.y);
ctx.beginPath();
ctx.rect(bbcShape1042.point.x, bbcShape1042.point.y, bbcShape1042.size.width, bbcShape1042.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(50.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1043.around.x, bbcShape1043.around.y);
ctx.rotate(bbcShape1043.rotation * Math.PI / 180);
ctx.translate(-bbcShape1043.around.x, -bbcShape1043.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1043.points[0][0], bbcShape1043.points[0][1]);
ctx.lineTo(bbcShape1043.points[1][0], bbcShape1043.points[1][1]);
ctx.lineTo(bbcShape1043.points[2][0], bbcShape1043.points[2][1]);
ctx.lineTo(bbcShape1043.points[3][0], bbcShape1043.points[3][1]);
ctx.lineTo(bbcShape1043.points[4][0], bbcShape1043.points[4][1]);
ctx.lineTo(bbcShape1043.points[5][0], bbcShape1043.points[5][1]);
ctx.lineTo(bbcShape1043.points[6][0], bbcShape1043.points[6][1]);
ctx.lineTo(bbcShape1043.points[7][0], bbcShape1043.points[7][1]);
ctx.lineTo(bbcShape1043.points[8][0], bbcShape1043.points[8][1]);
ctx.lineTo(bbcShape1043.points[9][0], bbcShape1043.points[9][1]);
ctx.lineTo(bbcShape1043.points[10][0], bbcShape1043.points[10][1]);
ctx.lineTo(bbcShape1043.points[11][0], bbcShape1043.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1044.around.x, bbcShape1044.around.y);
ctx.rotate(bbcShape1044.rotation * Math.PI / 180);
ctx.translate(-bbcShape1044.around.x, -bbcShape1044.around.y);
ctx.beginPath();
ctx.rect(bbcShape1044.point.x, bbcShape1044.point.y, bbcShape1044.size.width, bbcShape1044.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1045.around.x, bbcShape1045.around.y);
ctx.rotate(bbcShape1045.rotation * Math.PI / 180);
ctx.translate(-bbcShape1045.around.x, -bbcShape1045.around.y);
ctx.beginPath();
ctx.rect(bbcShape1045.point.x, bbcShape1045.point.y, bbcShape1045.size.width, bbcShape1045.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1046.around.x, bbcShape1046.around.y);
ctx.rotate(bbcShape1046.rotation * Math.PI / 180);
ctx.translate(-bbcShape1046.around.x, -bbcShape1046.around.y);
ctx.beginPath();
ctx.rect(bbcShape1046.point.x, bbcShape1046.point.y, bbcShape1046.size.width, bbcShape1046.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1047.around.x, bbcShape1047.around.y);
ctx.rotate(bbcShape1047.rotation * Math.PI / 180);
ctx.translate(-bbcShape1047.around.x, -bbcShape1047.around.y);
ctx.beginPath();
ctx.rect(bbcShape1047.point.x, bbcShape1047.point.y, bbcShape1047.size.width, bbcShape1047.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1048.around.x, bbcShape1048.around.y);
ctx.rotate(bbcShape1048.rotation * Math.PI / 180);
ctx.translate(-bbcShape1048.around.x, -bbcShape1048.around.y);
ctx.beginPath();
ctx.rect(bbcShape1048.point.x, bbcShape1048.point.y, bbcShape1048.size.width, bbcShape1048.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1049.around.x, bbcShape1049.around.y);
ctx.rotate(bbcShape1049.rotation * Math.PI / 180);
ctx.translate(-bbcShape1049.around.x, -bbcShape1049.around.y);
ctx.beginPath();
ctx.rect(bbcShape1049.point.x, bbcShape1049.point.y, bbcShape1049.size.width, bbcShape1049.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1050.around.x, bbcShape1050.around.y);
ctx.rotate(bbcShape1050.rotation * Math.PI / 180);
ctx.translate(-bbcShape1050.around.x, -bbcShape1050.around.y);
ctx.beginPath();
ctx.rect(bbcShape1050.point.x, bbcShape1050.point.y, bbcShape1050.size.width, bbcShape1050.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1051.around.x, bbcShape1051.around.y);
ctx.rotate(bbcShape1051.rotation * Math.PI / 180);
ctx.translate(-bbcShape1051.around.x, -bbcShape1051.around.y);
ctx.beginPath();
ctx.rect(bbcShape1051.point.x, bbcShape1051.point.y, bbcShape1051.size.width, bbcShape1051.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1052.around.x, bbcShape1052.around.y);
ctx.rotate(bbcShape1052.rotation * Math.PI / 180);
ctx.translate(-bbcShape1052.around.x, -bbcShape1052.around.y);
ctx.beginPath();
ctx.rect(bbcShape1052.point.x, bbcShape1052.point.y, bbcShape1052.size.width, bbcShape1052.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1053.around.x, bbcShape1053.around.y);
ctx.rotate(bbcShape1053.rotation * Math.PI / 180);
ctx.translate(-bbcShape1053.around.x, -bbcShape1053.around.y);
ctx.beginPath();
ctx.rect(bbcShape1053.point.x, bbcShape1053.point.y, bbcShape1053.size.width, bbcShape1053.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1054.around.x, bbcShape1054.around.y);
ctx.rotate(bbcShape1054.rotation * Math.PI / 180);
ctx.translate(-bbcShape1054.around.x, -bbcShape1054.around.y);
ctx.beginPath();
ctx.rect(bbcShape1054.point.x, bbcShape1054.point.y, bbcShape1054.size.width, bbcShape1054.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1055.around.x, bbcShape1055.around.y);
ctx.rotate(bbcShape1055.rotation * Math.PI / 180);
ctx.translate(-bbcShape1055.around.x, -bbcShape1055.around.y);
ctx.beginPath();
ctx.rect(bbcShape1055.point.x, bbcShape1055.point.y, bbcShape1055.size.width, bbcShape1055.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1056.around.x, bbcShape1056.around.y);
ctx.rotate(bbcShape1056.rotation * Math.PI / 180);
ctx.translate(-bbcShape1056.around.x, -bbcShape1056.around.y);
ctx.beginPath();
ctx.rect(bbcShape1056.point.x, bbcShape1056.point.y, bbcShape1056.size.width, bbcShape1056.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1057.around.x, bbcShape1057.around.y);
ctx.rotate(bbcShape1057.rotation * Math.PI / 180);
ctx.translate(-bbcShape1057.around.x, -bbcShape1057.around.y);
ctx.beginPath();
ctx.rect(bbcShape1057.point.x, bbcShape1057.point.y, bbcShape1057.size.width, bbcShape1057.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1058.around.x, bbcShape1058.around.y);
ctx.rotate(bbcShape1058.rotation * Math.PI / 180);
ctx.translate(-bbcShape1058.around.x, -bbcShape1058.around.y);
ctx.beginPath();
ctx.rect(bbcShape1058.point.x, bbcShape1058.point.y, bbcShape1058.size.width, bbcShape1058.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1059.around.x, bbcShape1059.around.y);
ctx.rotate(bbcShape1059.rotation * Math.PI / 180);
ctx.translate(-bbcShape1059.around.x, -bbcShape1059.around.y);
ctx.beginPath();
ctx.rect(bbcShape1059.point.x, bbcShape1059.point.y, bbcShape1059.size.width, bbcShape1059.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1060.around.x, bbcShape1060.around.y);
ctx.rotate(bbcShape1060.rotation * Math.PI / 180);
ctx.translate(-bbcShape1060.around.x, -bbcShape1060.around.y);
ctx.beginPath();
ctx.rect(bbcShape1060.point.x, bbcShape1060.point.y, bbcShape1060.size.width, bbcShape1060.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1061.around.x, bbcShape1061.around.y);
ctx.rotate(bbcShape1061.rotation * Math.PI / 180);
ctx.translate(-bbcShape1061.around.x, -bbcShape1061.around.y);
ctx.beginPath();
ctx.rect(bbcShape1061.point.x, bbcShape1061.point.y, bbcShape1061.size.width, bbcShape1061.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1062.around.x, bbcShape1062.around.y);
ctx.rotate(bbcShape1062.rotation * Math.PI / 180);
ctx.translate(-bbcShape1062.around.x, -bbcShape1062.around.y);
ctx.beginPath();
ctx.rect(bbcShape1062.point.x, bbcShape1062.point.y, bbcShape1062.size.width, bbcShape1062.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 50.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1063.around.x, bbcShape1063.around.y);
ctx.rotate(bbcShape1063.rotation * Math.PI / 180);
ctx.translate(-bbcShape1063.around.x, -bbcShape1063.around.y);
ctx.beginPath();
ctx.rect(bbcShape1063.point.x, bbcShape1063.point.y, bbcShape1063.size.width, bbcShape1063.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(75.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1064.around.x, bbcShape1064.around.y);
ctx.rotate(bbcShape1064.rotation * Math.PI / 180);
ctx.translate(-bbcShape1064.around.x, -bbcShape1064.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1064.points[0][0], bbcShape1064.points[0][1]);
ctx.lineTo(bbcShape1064.points[1][0], bbcShape1064.points[1][1]);
ctx.lineTo(bbcShape1064.points[2][0], bbcShape1064.points[2][1]);
ctx.lineTo(bbcShape1064.points[3][0], bbcShape1064.points[3][1]);
ctx.lineTo(bbcShape1064.points[4][0], bbcShape1064.points[4][1]);
ctx.lineTo(bbcShape1064.points[5][0], bbcShape1064.points[5][1]);
ctx.lineTo(bbcShape1064.points[6][0], bbcShape1064.points[6][1]);
ctx.lineTo(bbcShape1064.points[7][0], bbcShape1064.points[7][1]);
ctx.lineTo(bbcShape1064.points[8][0], bbcShape1064.points[8][1]);
ctx.lineTo(bbcShape1064.points[9][0], bbcShape1064.points[9][1]);
ctx.lineTo(bbcShape1064.points[10][0], bbcShape1064.points[10][1]);
ctx.lineTo(bbcShape1064.points[11][0], bbcShape1064.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1065.around.x, bbcShape1065.around.y);
ctx.rotate(bbcShape1065.rotation * Math.PI / 180);
ctx.translate(-bbcShape1065.around.x, -bbcShape1065.around.y);
ctx.beginPath();
ctx.rect(bbcShape1065.point.x, bbcShape1065.point.y, bbcShape1065.size.width, bbcShape1065.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1066.around.x, bbcShape1066.around.y);
ctx.rotate(bbcShape1066.rotation * Math.PI / 180);
ctx.translate(-bbcShape1066.around.x, -bbcShape1066.around.y);
ctx.beginPath();
ctx.rect(bbcShape1066.point.x, bbcShape1066.point.y, bbcShape1066.size.width, bbcShape1066.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1067.around.x, bbcShape1067.around.y);
ctx.rotate(bbcShape1067.rotation * Math.PI / 180);
ctx.translate(-bbcShape1067.around.x, -bbcShape1067.around.y);
ctx.beginPath();
ctx.rect(bbcShape1067.point.x, bbcShape1067.point.y, bbcShape1067.size.width, bbcShape1067.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1068.around.x, bbcShape1068.around.y);
ctx.rotate(bbcShape1068.rotation * Math.PI / 180);
ctx.translate(-bbcShape1068.around.x, -bbcShape1068.around.y);
ctx.beginPath();
ctx.rect(bbcShape1068.point.x, bbcShape1068.point.y, bbcShape1068.size.width, bbcShape1068.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1069.around.x, bbcShape1069.around.y);
ctx.rotate(bbcShape1069.rotation * Math.PI / 180);
ctx.translate(-bbcShape1069.around.x, -bbcShape1069.around.y);
ctx.beginPath();
ctx.rect(bbcShape1069.point.x, bbcShape1069.point.y, bbcShape1069.size.width, bbcShape1069.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1070.around.x, bbcShape1070.around.y);
ctx.rotate(bbcShape1070.rotation * Math.PI / 180);
ctx.translate(-bbcShape1070.around.x, -bbcShape1070.around.y);
ctx.beginPath();
ctx.rect(bbcShape1070.point.x, bbcShape1070.point.y, bbcShape1070.size.width, bbcShape1070.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1071.around.x, bbcShape1071.around.y);
ctx.rotate(bbcShape1071.rotation * Math.PI / 180);
ctx.translate(-bbcShape1071.around.x, -bbcShape1071.around.y);
ctx.beginPath();
ctx.rect(bbcShape1071.point.x, bbcShape1071.point.y, bbcShape1071.size.width, bbcShape1071.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1072.around.x, bbcShape1072.around.y);
ctx.rotate(bbcShape1072.rotation * Math.PI / 180);
ctx.translate(-bbcShape1072.around.x, -bbcShape1072.around.y);
ctx.beginPath();
ctx.rect(bbcShape1072.point.x, bbcShape1072.point.y, bbcShape1072.size.width, bbcShape1072.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1073.around.x, bbcShape1073.around.y);
ctx.rotate(bbcShape1073.rotation * Math.PI / 180);
ctx.translate(-bbcShape1073.around.x, -bbcShape1073.around.y);
ctx.beginPath();
ctx.rect(bbcShape1073.point.x, bbcShape1073.point.y, bbcShape1073.size.width, bbcShape1073.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1074.around.x, bbcShape1074.around.y);
ctx.rotate(bbcShape1074.rotation * Math.PI / 180);
ctx.translate(-bbcShape1074.around.x, -bbcShape1074.around.y);
ctx.beginPath();
ctx.rect(bbcShape1074.point.x, bbcShape1074.point.y, bbcShape1074.size.width, bbcShape1074.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1075.around.x, bbcShape1075.around.y);
ctx.rotate(bbcShape1075.rotation * Math.PI / 180);
ctx.translate(-bbcShape1075.around.x, -bbcShape1075.around.y);
ctx.beginPath();
ctx.rect(bbcShape1075.point.x, bbcShape1075.point.y, bbcShape1075.size.width, bbcShape1075.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1076.around.x, bbcShape1076.around.y);
ctx.rotate(bbcShape1076.rotation * Math.PI / 180);
ctx.translate(-bbcShape1076.around.x, -bbcShape1076.around.y);
ctx.beginPath();
ctx.rect(bbcShape1076.point.x, bbcShape1076.point.y, bbcShape1076.size.width, bbcShape1076.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1077.around.x, bbcShape1077.around.y);
ctx.rotate(bbcShape1077.rotation * Math.PI / 180);
ctx.translate(-bbcShape1077.around.x, -bbcShape1077.around.y);
ctx.beginPath();
ctx.rect(bbcShape1077.point.x, bbcShape1077.point.y, bbcShape1077.size.width, bbcShape1077.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1078.around.x, bbcShape1078.around.y);
ctx.rotate(bbcShape1078.rotation * Math.PI / 180);
ctx.translate(-bbcShape1078.around.x, -bbcShape1078.around.y);
ctx.beginPath();
ctx.rect(bbcShape1078.point.x, bbcShape1078.point.y, bbcShape1078.size.width, bbcShape1078.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1079.around.x, bbcShape1079.around.y);
ctx.rotate(bbcShape1079.rotation * Math.PI / 180);
ctx.translate(-bbcShape1079.around.x, -bbcShape1079.around.y);
ctx.beginPath();
ctx.rect(bbcShape1079.point.x, bbcShape1079.point.y, bbcShape1079.size.width, bbcShape1079.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1080.around.x, bbcShape1080.around.y);
ctx.rotate(bbcShape1080.rotation * Math.PI / 180);
ctx.translate(-bbcShape1080.around.x, -bbcShape1080.around.y);
ctx.beginPath();
ctx.rect(bbcShape1080.point.x, bbcShape1080.point.y, bbcShape1080.size.width, bbcShape1080.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1081.around.x, bbcShape1081.around.y);
ctx.rotate(bbcShape1081.rotation * Math.PI / 180);
ctx.translate(-bbcShape1081.around.x, -bbcShape1081.around.y);
ctx.beginPath();
ctx.rect(bbcShape1081.point.x, bbcShape1081.point.y, bbcShape1081.size.width, bbcShape1081.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1082.around.x, bbcShape1082.around.y);
ctx.rotate(bbcShape1082.rotation * Math.PI / 180);
ctx.translate(-bbcShape1082.around.x, -bbcShape1082.around.y);
ctx.beginPath();
ctx.rect(bbcShape1082.point.x, bbcShape1082.point.y, bbcShape1082.size.width, bbcShape1082.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1083.around.x, bbcShape1083.around.y);
ctx.rotate(bbcShape1083.rotation * Math.PI / 180);
ctx.translate(-bbcShape1083.around.x, -bbcShape1083.around.y);
ctx.beginPath();
ctx.rect(bbcShape1083.point.x, bbcShape1083.point.y, bbcShape1083.size.width, bbcShape1083.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 75.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1084.around.x, bbcShape1084.around.y);
ctx.rotate(bbcShape1084.rotation * Math.PI / 180);
ctx.translate(-bbcShape1084.around.x, -bbcShape1084.around.y);
ctx.beginPath();
ctx.rect(bbcShape1084.point.x, bbcShape1084.point.y, bbcShape1084.size.width, bbcShape1084.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(100.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1085.around.x, bbcShape1085.around.y);
ctx.rotate(bbcShape1085.rotation * Math.PI / 180);
ctx.translate(-bbcShape1085.around.x, -bbcShape1085.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1085.points[0][0], bbcShape1085.points[0][1]);
ctx.lineTo(bbcShape1085.points[1][0], bbcShape1085.points[1][1]);
ctx.lineTo(bbcShape1085.points[2][0], bbcShape1085.points[2][1]);
ctx.lineTo(bbcShape1085.points[3][0], bbcShape1085.points[3][1]);
ctx.lineTo(bbcShape1085.points[4][0], bbcShape1085.points[4][1]);
ctx.lineTo(bbcShape1085.points[5][0], bbcShape1085.points[5][1]);
ctx.lineTo(bbcShape1085.points[6][0], bbcShape1085.points[6][1]);
ctx.lineTo(bbcShape1085.points[7][0], bbcShape1085.points[7][1]);
ctx.lineTo(bbcShape1085.points[8][0], bbcShape1085.points[8][1]);
ctx.lineTo(bbcShape1085.points[9][0], bbcShape1085.points[9][1]);
ctx.lineTo(bbcShape1085.points[10][0], bbcShape1085.points[10][1]);
ctx.lineTo(bbcShape1085.points[11][0], bbcShape1085.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1086.around.x, bbcShape1086.around.y);
ctx.rotate(bbcShape1086.rotation * Math.PI / 180);
ctx.translate(-bbcShape1086.around.x, -bbcShape1086.around.y);
ctx.beginPath();
ctx.rect(bbcShape1086.point.x, bbcShape1086.point.y, bbcShape1086.size.width, bbcShape1086.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1087.around.x, bbcShape1087.around.y);
ctx.rotate(bbcShape1087.rotation * Math.PI / 180);
ctx.translate(-bbcShape1087.around.x, -bbcShape1087.around.y);
ctx.beginPath();
ctx.rect(bbcShape1087.point.x, bbcShape1087.point.y, bbcShape1087.size.width, bbcShape1087.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1088.around.x, bbcShape1088.around.y);
ctx.rotate(bbcShape1088.rotation * Math.PI / 180);
ctx.translate(-bbcShape1088.around.x, -bbcShape1088.around.y);
ctx.beginPath();
ctx.rect(bbcShape1088.point.x, bbcShape1088.point.y, bbcShape1088.size.width, bbcShape1088.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1089.around.x, bbcShape1089.around.y);
ctx.rotate(bbcShape1089.rotation * Math.PI / 180);
ctx.translate(-bbcShape1089.around.x, -bbcShape1089.around.y);
ctx.beginPath();
ctx.rect(bbcShape1089.point.x, bbcShape1089.point.y, bbcShape1089.size.width, bbcShape1089.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1090.around.x, bbcShape1090.around.y);
ctx.rotate(bbcShape1090.rotation * Math.PI / 180);
ctx.translate(-bbcShape1090.around.x, -bbcShape1090.around.y);
ctx.beginPath();
ctx.rect(bbcShape1090.point.x, bbcShape1090.point.y, bbcShape1090.size.width, bbcShape1090.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1091.around.x, bbcShape1091.around.y);
ctx.rotate(bbcShape1091.rotation * Math.PI / 180);
ctx.translate(-bbcShape1091.around.x, -bbcShape1091.around.y);
ctx.beginPath();
ctx.rect(bbcShape1091.point.x, bbcShape1091.point.y, bbcShape1091.size.width, bbcShape1091.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1092.around.x, bbcShape1092.around.y);
ctx.rotate(bbcShape1092.rotation * Math.PI / 180);
ctx.translate(-bbcShape1092.around.x, -bbcShape1092.around.y);
ctx.beginPath();
ctx.rect(bbcShape1092.point.x, bbcShape1092.point.y, bbcShape1092.size.width, bbcShape1092.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1093.around.x, bbcShape1093.around.y);
ctx.rotate(bbcShape1093.rotation * Math.PI / 180);
ctx.translate(-bbcShape1093.around.x, -bbcShape1093.around.y);
ctx.beginPath();
ctx.rect(bbcShape1093.point.x, bbcShape1093.point.y, bbcShape1093.size.width, bbcShape1093.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1094.around.x, bbcShape1094.around.y);
ctx.rotate(bbcShape1094.rotation * Math.PI / 180);
ctx.translate(-bbcShape1094.around.x, -bbcShape1094.around.y);
ctx.beginPath();
ctx.rect(bbcShape1094.point.x, bbcShape1094.point.y, bbcShape1094.size.width, bbcShape1094.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1095.around.x, bbcShape1095.around.y);
ctx.rotate(bbcShape1095.rotation * Math.PI / 180);
ctx.translate(-bbcShape1095.around.x, -bbcShape1095.around.y);
ctx.beginPath();
ctx.rect(bbcShape1095.point.x, bbcShape1095.point.y, bbcShape1095.size.width, bbcShape1095.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1096.around.x, bbcShape1096.around.y);
ctx.rotate(bbcShape1096.rotation * Math.PI / 180);
ctx.translate(-bbcShape1096.around.x, -bbcShape1096.around.y);
ctx.beginPath();
ctx.rect(bbcShape1096.point.x, bbcShape1096.point.y, bbcShape1096.size.width, bbcShape1096.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1097.around.x, bbcShape1097.around.y);
ctx.rotate(bbcShape1097.rotation * Math.PI / 180);
ctx.translate(-bbcShape1097.around.x, -bbcShape1097.around.y);
ctx.beginPath();
ctx.rect(bbcShape1097.point.x, bbcShape1097.point.y, bbcShape1097.size.width, bbcShape1097.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1098.around.x, bbcShape1098.around.y);
ctx.rotate(bbcShape1098.rotation * Math.PI / 180);
ctx.translate(-bbcShape1098.around.x, -bbcShape1098.around.y);
ctx.beginPath();
ctx.rect(bbcShape1098.point.x, bbcShape1098.point.y, bbcShape1098.size.width, bbcShape1098.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1099.around.x, bbcShape1099.around.y);
ctx.rotate(bbcShape1099.rotation * Math.PI / 180);
ctx.translate(-bbcShape1099.around.x, -bbcShape1099.around.y);
ctx.beginPath();
ctx.rect(bbcShape1099.point.x, bbcShape1099.point.y, bbcShape1099.size.width, bbcShape1099.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1100.around.x, bbcShape1100.around.y);
ctx.rotate(bbcShape1100.rotation * Math.PI / 180);
ctx.translate(-bbcShape1100.around.x, -bbcShape1100.around.y);
ctx.beginPath();
ctx.rect(bbcShape1100.point.x, bbcShape1100.point.y, bbcShape1100.size.width, bbcShape1100.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1101.around.x, bbcShape1101.around.y);
ctx.rotate(bbcShape1101.rotation * Math.PI / 180);
ctx.translate(-bbcShape1101.around.x, -bbcShape1101.around.y);
ctx.beginPath();
ctx.rect(bbcShape1101.point.x, bbcShape1101.point.y, bbcShape1101.size.width, bbcShape1101.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1102.around.x, bbcShape1102.around.y);
ctx.rotate(bbcShape1102.rotation * Math.PI / 180);
ctx.translate(-bbcShape1102.around.x, -bbcShape1102.around.y);
ctx.beginPath();
ctx.rect(bbcShape1102.point.x, bbcShape1102.point.y, bbcShape1102.size.width, bbcShape1102.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1103.around.x, bbcShape1103.around.y);
ctx.rotate(bbcShape1103.rotation * Math.PI / 180);
ctx.translate(-bbcShape1103.around.x, -bbcShape1103.around.y);
ctx.beginPath();
ctx.rect(bbcShape1103.point.x, bbcShape1103.point.y, bbcShape1103.size.width, bbcShape1103.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1104.around.x, bbcShape1104.around.y);
ctx.rotate(bbcShape1104.rotation * Math.PI / 180);
ctx.translate(-bbcShape1104.around.x, -bbcShape1104.around.y);
ctx.beginPath();
ctx.rect(bbcShape1104.point.x, bbcShape1104.point.y, bbcShape1104.size.width, bbcShape1104.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 100.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1105.around.x, bbcShape1105.around.y);
ctx.rotate(bbcShape1105.rotation * Math.PI / 180);
ctx.translate(-bbcShape1105.around.x, -bbcShape1105.around.y);
ctx.beginPath();
ctx.rect(bbcShape1105.point.x, bbcShape1105.point.y, bbcShape1105.size.width, bbcShape1105.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(125.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1106.around.x, bbcShape1106.around.y);
ctx.rotate(bbcShape1106.rotation * Math.PI / 180);
ctx.translate(-bbcShape1106.around.x, -bbcShape1106.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1106.points[0][0], bbcShape1106.points[0][1]);
ctx.lineTo(bbcShape1106.points[1][0], bbcShape1106.points[1][1]);
ctx.lineTo(bbcShape1106.points[2][0], bbcShape1106.points[2][1]);
ctx.lineTo(bbcShape1106.points[3][0], bbcShape1106.points[3][1]);
ctx.lineTo(bbcShape1106.points[4][0], bbcShape1106.points[4][1]);
ctx.lineTo(bbcShape1106.points[5][0], bbcShape1106.points[5][1]);
ctx.lineTo(bbcShape1106.points[6][0], bbcShape1106.points[6][1]);
ctx.lineTo(bbcShape1106.points[7][0], bbcShape1106.points[7][1]);
ctx.lineTo(bbcShape1106.points[8][0], bbcShape1106.points[8][1]);
ctx.lineTo(bbcShape1106.points[9][0], bbcShape1106.points[9][1]);
ctx.lineTo(bbcShape1106.points[10][0], bbcShape1106.points[10][1]);
ctx.lineTo(bbcShape1106.points[11][0], bbcShape1106.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1107.around.x, bbcShape1107.around.y);
ctx.rotate(bbcShape1107.rotation * Math.PI / 180);
ctx.translate(-bbcShape1107.around.x, -bbcShape1107.around.y);
ctx.beginPath();
ctx.rect(bbcShape1107.point.x, bbcShape1107.point.y, bbcShape1107.size.width, bbcShape1107.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1108.around.x, bbcShape1108.around.y);
ctx.rotate(bbcShape1108.rotation * Math.PI / 180);
ctx.translate(-bbcShape1108.around.x, -bbcShape1108.around.y);
ctx.beginPath();
ctx.rect(bbcShape1108.point.x, bbcShape1108.point.y, bbcShape1108.size.width, bbcShape1108.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1109.around.x, bbcShape1109.around.y);
ctx.rotate(bbcShape1109.rotation * Math.PI / 180);
ctx.translate(-bbcShape1109.around.x, -bbcShape1109.around.y);
ctx.beginPath();
ctx.rect(bbcShape1109.point.x, bbcShape1109.point.y, bbcShape1109.size.width, bbcShape1109.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1110.around.x, bbcShape1110.around.y);
ctx.rotate(bbcShape1110.rotation * Math.PI / 180);
ctx.translate(-bbcShape1110.around.x, -bbcShape1110.around.y);
ctx.beginPath();
ctx.rect(bbcShape1110.point.x, bbcShape1110.point.y, bbcShape1110.size.width, bbcShape1110.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1111.around.x, bbcShape1111.around.y);
ctx.rotate(bbcShape1111.rotation * Math.PI / 180);
ctx.translate(-bbcShape1111.around.x, -bbcShape1111.around.y);
ctx.beginPath();
ctx.rect(bbcShape1111.point.x, bbcShape1111.point.y, bbcShape1111.size.width, bbcShape1111.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1112.around.x, bbcShape1112.around.y);
ctx.rotate(bbcShape1112.rotation * Math.PI / 180);
ctx.translate(-bbcShape1112.around.x, -bbcShape1112.around.y);
ctx.beginPath();
ctx.rect(bbcShape1112.point.x, bbcShape1112.point.y, bbcShape1112.size.width, bbcShape1112.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1113.around.x, bbcShape1113.around.y);
ctx.rotate(bbcShape1113.rotation * Math.PI / 180);
ctx.translate(-bbcShape1113.around.x, -bbcShape1113.around.y);
ctx.beginPath();
ctx.rect(bbcShape1113.point.x, bbcShape1113.point.y, bbcShape1113.size.width, bbcShape1113.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1114.around.x, bbcShape1114.around.y);
ctx.rotate(bbcShape1114.rotation * Math.PI / 180);
ctx.translate(-bbcShape1114.around.x, -bbcShape1114.around.y);
ctx.beginPath();
ctx.rect(bbcShape1114.point.x, bbcShape1114.point.y, bbcShape1114.size.width, bbcShape1114.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1115.around.x, bbcShape1115.around.y);
ctx.rotate(bbcShape1115.rotation * Math.PI / 180);
ctx.translate(-bbcShape1115.around.x, -bbcShape1115.around.y);
ctx.beginPath();
ctx.rect(bbcShape1115.point.x, bbcShape1115.point.y, bbcShape1115.size.width, bbcShape1115.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1116.around.x, bbcShape1116.around.y);
ctx.rotate(bbcShape1116.rotation * Math.PI / 180);
ctx.translate(-bbcShape1116.around.x, -bbcShape1116.around.y);
ctx.beginPath();
ctx.rect(bbcShape1116.point.x, bbcShape1116.point.y, bbcShape1116.size.width, bbcShape1116.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1117.around.x, bbcShape1117.around.y);
ctx.rotate(bbcShape1117.rotation * Math.PI / 180);
ctx.translate(-bbcShape1117.around.x, -bbcShape1117.around.y);
ctx.beginPath();
ctx.rect(bbcShape1117.point.x, bbcShape1117.point.y, bbcShape1117.size.width, bbcShape1117.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1118.around.x, bbcShape1118.around.y);
ctx.rotate(bbcShape1118.rotation * Math.PI / 180);
ctx.translate(-bbcShape1118.around.x, -bbcShape1118.around.y);
ctx.beginPath();
ctx.rect(bbcShape1118.point.x, bbcShape1118.point.y, bbcShape1118.size.width, bbcShape1118.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1119.around.x, bbcShape1119.around.y);
ctx.rotate(bbcShape1119.rotation * Math.PI / 180);
ctx.translate(-bbcShape1119.around.x, -bbcShape1119.around.y);
ctx.beginPath();
ctx.rect(bbcShape1119.point.x, bbcShape1119.point.y, bbcShape1119.size.width, bbcShape1119.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1120.around.x, bbcShape1120.around.y);
ctx.rotate(bbcShape1120.rotation * Math.PI / 180);
ctx.translate(-bbcShape1120.around.x, -bbcShape1120.around.y);
ctx.beginPath();
ctx.rect(bbcShape1120.point.x, bbcShape1120.point.y, bbcShape1120.size.width, bbcShape1120.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1121.around.x, bbcShape1121.around.y);
ctx.rotate(bbcShape1121.rotation * Math.PI / 180);
ctx.translate(-bbcShape1121.around.x, -bbcShape1121.around.y);
ctx.beginPath();
ctx.rect(bbcShape1121.point.x, bbcShape1121.point.y, bbcShape1121.size.width, bbcShape1121.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1122.around.x, bbcShape1122.around.y);
ctx.rotate(bbcShape1122.rotation * Math.PI / 180);
ctx.translate(-bbcShape1122.around.x, -bbcShape1122.around.y);
ctx.beginPath();
ctx.rect(bbcShape1122.point.x, bbcShape1122.point.y, bbcShape1122.size.width, bbcShape1122.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1123.around.x, bbcShape1123.around.y);
ctx.rotate(bbcShape1123.rotation * Math.PI / 180);
ctx.translate(-bbcShape1123.around.x, -bbcShape1123.around.y);
ctx.beginPath();
ctx.rect(bbcShape1123.point.x, bbcShape1123.point.y, bbcShape1123.size.width, bbcShape1123.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1124.around.x, bbcShape1124.around.y);
ctx.rotate(bbcShape1124.rotation * Math.PI / 180);
ctx.translate(-bbcShape1124.around.x, -bbcShape1124.around.y);
ctx.beginPath();
ctx.rect(bbcShape1124.point.x, bbcShape1124.point.y, bbcShape1124.size.width, bbcShape1124.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1125.around.x, bbcShape1125.around.y);
ctx.rotate(bbcShape1125.rotation * Math.PI / 180);
ctx.translate(-bbcShape1125.around.x, -bbcShape1125.around.y);
ctx.beginPath();
ctx.rect(bbcShape1125.point.x, bbcShape1125.point.y, bbcShape1125.size.width, bbcShape1125.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 125.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1126.around.x, bbcShape1126.around.y);
ctx.rotate(bbcShape1126.rotation * Math.PI / 180);
ctx.translate(-bbcShape1126.around.x, -bbcShape1126.around.y);
ctx.beginPath();
ctx.rect(bbcShape1126.point.x, bbcShape1126.point.y, bbcShape1126.size.width, bbcShape1126.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(150.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1127.around.x, bbcShape1127.around.y);
ctx.rotate(bbcShape1127.rotation * Math.PI / 180);
ctx.translate(-bbcShape1127.around.x, -bbcShape1127.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1127.points[0][0], bbcShape1127.points[0][1]);
ctx.lineTo(bbcShape1127.points[1][0], bbcShape1127.points[1][1]);
ctx.lineTo(bbcShape1127.points[2][0], bbcShape1127.points[2][1]);
ctx.lineTo(bbcShape1127.points[3][0], bbcShape1127.points[3][1]);
ctx.lineTo(bbcShape1127.points[4][0], bbcShape1127.points[4][1]);
ctx.lineTo(bbcShape1127.points[5][0], bbcShape1127.points[5][1]);
ctx.lineTo(bbcShape1127.points[6][0], bbcShape1127.points[6][1]);
ctx.lineTo(bbcShape1127.points[7][0], bbcShape1127.points[7][1]);
ctx.lineTo(bbcShape1127.points[8][0], bbcShape1127.points[8][1]);
ctx.lineTo(bbcShape1127.points[9][0], bbcShape1127.points[9][1]);
ctx.lineTo(bbcShape1127.points[10][0], bbcShape1127.points[10][1]);
ctx.lineTo(bbcShape1127.points[11][0], bbcShape1127.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1128.around.x, bbcShape1128.around.y);
ctx.rotate(bbcShape1128.rotation * Math.PI / 180);
ctx.translate(-bbcShape1128.around.x, -bbcShape1128.around.y);
ctx.beginPath();
ctx.rect(bbcShape1128.point.x, bbcShape1128.point.y, bbcShape1128.size.width, bbcShape1128.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1129.around.x, bbcShape1129.around.y);
ctx.rotate(bbcShape1129.rotation * Math.PI / 180);
ctx.translate(-bbcShape1129.around.x, -bbcShape1129.around.y);
ctx.beginPath();
ctx.rect(bbcShape1129.point.x, bbcShape1129.point.y, bbcShape1129.size.width, bbcShape1129.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1130.around.x, bbcShape1130.around.y);
ctx.rotate(bbcShape1130.rotation * Math.PI / 180);
ctx.translate(-bbcShape1130.around.x, -bbcShape1130.around.y);
ctx.beginPath();
ctx.rect(bbcShape1130.point.x, bbcShape1130.point.y, bbcShape1130.size.width, bbcShape1130.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1131.around.x, bbcShape1131.around.y);
ctx.rotate(bbcShape1131.rotation * Math.PI / 180);
ctx.translate(-bbcShape1131.around.x, -bbcShape1131.around.y);
ctx.beginPath();
ctx.rect(bbcShape1131.point.x, bbcShape1131.point.y, bbcShape1131.size.width, bbcShape1131.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1132.around.x, bbcShape1132.around.y);
ctx.rotate(bbcShape1132.rotation * Math.PI / 180);
ctx.translate(-bbcShape1132.around.x, -bbcShape1132.around.y);
ctx.beginPath();
ctx.rect(bbcShape1132.point.x, bbcShape1132.point.y, bbcShape1132.size.width, bbcShape1132.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1133.around.x, bbcShape1133.around.y);
ctx.rotate(bbcShape1133.rotation * Math.PI / 180);
ctx.translate(-bbcShape1133.around.x, -bbcShape1133.around.y);
ctx.beginPath();
ctx.rect(bbcShape1133.point.x, bbcShape1133.point.y, bbcShape1133.size.width, bbcShape1133.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1134.around.x, bbcShape1134.around.y);
ctx.rotate(bbcShape1134.rotation * Math.PI / 180);
ctx.translate(-bbcShape1134.around.x, -bbcShape1134.around.y);
ctx.beginPath();
ctx.rect(bbcShape1134.point.x, bbcShape1134.point.y, bbcShape1134.size.width, bbcShape1134.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1135.around.x, bbcShape1135.around.y);
ctx.rotate(bbcShape1135.rotation * Math.PI / 180);
ctx.translate(-bbcShape1135.around.x, -bbcShape1135.around.y);
ctx.beginPath();
ctx.rect(bbcShape1135.point.x, bbcShape1135.point.y, bbcShape1135.size.width, bbcShape1135.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1136.around.x, bbcShape1136.around.y);
ctx.rotate(bbcShape1136.rotation * Math.PI / 180);
ctx.translate(-bbcShape1136.around.x, -bbcShape1136.around.y);
ctx.beginPath();
ctx.rect(bbcShape1136.point.x, bbcShape1136.point.y, bbcShape1136.size.width, bbcShape1136.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1137.around.x, bbcShape1137.around.y);
ctx.rotate(bbcShape1137.rotation * Math.PI / 180);
ctx.translate(-bbcShape1137.around.x, -bbcShape1137.around.y);
ctx.beginPath();
ctx.rect(bbcShape1137.point.x, bbcShape1137.point.y, bbcShape1137.size.width, bbcShape1137.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1138.around.x, bbcShape1138.around.y);
ctx.rotate(bbcShape1138.rotation * Math.PI / 180);
ctx.translate(-bbcShape1138.around.x, -bbcShape1138.around.y);
ctx.beginPath();
ctx.rect(bbcShape1138.point.x, bbcShape1138.point.y, bbcShape1138.size.width, bbcShape1138.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1139.around.x, bbcShape1139.around.y);
ctx.rotate(bbcShape1139.rotation * Math.PI / 180);
ctx.translate(-bbcShape1139.around.x, -bbcShape1139.around.y);
ctx.beginPath();
ctx.rect(bbcShape1139.point.x, bbcShape1139.point.y, bbcShape1139.size.width, bbcShape1139.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1140.around.x, bbcShape1140.around.y);
ctx.rotate(bbcShape1140.rotation * Math.PI / 180);
ctx.translate(-bbcShape1140.around.x, -bbcShape1140.around.y);
ctx.beginPath();
ctx.rect(bbcShape1140.point.x, bbcShape1140.point.y, bbcShape1140.size.width, bbcShape1140.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1141.around.x, bbcShape1141.around.y);
ctx.rotate(bbcShape1141.rotation * Math.PI / 180);
ctx.translate(-bbcShape1141.around.x, -bbcShape1141.around.y);
ctx.beginPath();
ctx.rect(bbcShape1141.point.x, bbcShape1141.point.y, bbcShape1141.size.width, bbcShape1141.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1142.around.x, bbcShape1142.around.y);
ctx.rotate(bbcShape1142.rotation * Math.PI / 180);
ctx.translate(-bbcShape1142.around.x, -bbcShape1142.around.y);
ctx.beginPath();
ctx.rect(bbcShape1142.point.x, bbcShape1142.point.y, bbcShape1142.size.width, bbcShape1142.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1143.around.x, bbcShape1143.around.y);
ctx.rotate(bbcShape1143.rotation * Math.PI / 180);
ctx.translate(-bbcShape1143.around.x, -bbcShape1143.around.y);
ctx.beginPath();
ctx.rect(bbcShape1143.point.x, bbcShape1143.point.y, bbcShape1143.size.width, bbcShape1143.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1144.around.x, bbcShape1144.around.y);
ctx.rotate(bbcShape1144.rotation * Math.PI / 180);
ctx.translate(-bbcShape1144.around.x, -bbcShape1144.around.y);
ctx.beginPath();
ctx.rect(bbcShape1144.point.x, bbcShape1144.point.y, bbcShape1144.size.width, bbcShape1144.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1145.around.x, bbcShape1145.around.y);
ctx.rotate(bbcShape1145.rotation * Math.PI / 180);
ctx.translate(-bbcShape1145.around.x, -bbcShape1145.around.y);
ctx.beginPath();
ctx.rect(bbcShape1145.point.x, bbcShape1145.point.y, bbcShape1145.size.width, bbcShape1145.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1146.around.x, bbcShape1146.around.y);
ctx.rotate(bbcShape1146.rotation * Math.PI / 180);
ctx.translate(-bbcShape1146.around.x, -bbcShape1146.around.y);
ctx.beginPath();
ctx.rect(bbcShape1146.point.x, bbcShape1146.point.y, bbcShape1146.size.width, bbcShape1146.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 150.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1147.around.x, bbcShape1147.around.y);
ctx.rotate(bbcShape1147.rotation * Math.PI / 180);
ctx.translate(-bbcShape1147.around.x, -bbcShape1147.around.y);
ctx.beginPath();
ctx.rect(bbcShape1147.point.x, bbcShape1147.point.y, bbcShape1147.size.width, bbcShape1147.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(175.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1148.around.x, bbcShape1148.around.y);
ctx.rotate(bbcShape1148.rotation * Math.PI / 180);
ctx.translate(-bbcShape1148.around.x, -bbcShape1148.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1148.points[0][0], bbcShape1148.points[0][1]);
ctx.lineTo(bbcShape1148.points[1][0], bbcShape1148.points[1][1]);
ctx.lineTo(bbcShape1148.points[2][0], bbcShape1148.points[2][1]);
ctx.lineTo(bbcShape1148.points[3][0], bbcShape1148.points[3][1]);
ctx.lineTo(bbcShape1148.points[4][0], bbcShape1148.points[4][1]);
ctx.lineTo(bbcShape1148.points[5][0], bbcShape1148.points[5][1]);
ctx.lineTo(bbcShape1148.points[6][0], bbcShape1148.points[6][1]);
ctx.lineTo(bbcShape1148.points[7][0], bbcShape1148.points[7][1]);
ctx.lineTo(bbcShape1148.points[8][0], bbcShape1148.points[8][1]);
ctx.lineTo(bbcShape1148.points[9][0], bbcShape1148.points[9][1]);
ctx.lineTo(bbcShape1148.points[10][0], bbcShape1148.points[10][1]);
ctx.lineTo(bbcShape1148.points[11][0], bbcShape1148.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1149.around.x, bbcShape1149.around.y);
ctx.rotate(bbcShape1149.rotation * Math.PI / 180);
ctx.translate(-bbcShape1149.around.x, -bbcShape1149.around.y);
ctx.beginPath();
ctx.rect(bbcShape1149.point.x, bbcShape1149.point.y, bbcShape1149.size.width, bbcShape1149.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1150.around.x, bbcShape1150.around.y);
ctx.rotate(bbcShape1150.rotation * Math.PI / 180);
ctx.translate(-bbcShape1150.around.x, -bbcShape1150.around.y);
ctx.beginPath();
ctx.rect(bbcShape1150.point.x, bbcShape1150.point.y, bbcShape1150.size.width, bbcShape1150.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1151.around.x, bbcShape1151.around.y);
ctx.rotate(bbcShape1151.rotation * Math.PI / 180);
ctx.translate(-bbcShape1151.around.x, -bbcShape1151.around.y);
ctx.beginPath();
ctx.rect(bbcShape1151.point.x, bbcShape1151.point.y, bbcShape1151.size.width, bbcShape1151.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1152.around.x, bbcShape1152.around.y);
ctx.rotate(bbcShape1152.rotation * Math.PI / 180);
ctx.translate(-bbcShape1152.around.x, -bbcShape1152.around.y);
ctx.beginPath();
ctx.rect(bbcShape1152.point.x, bbcShape1152.point.y, bbcShape1152.size.width, bbcShape1152.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1153.around.x, bbcShape1153.around.y);
ctx.rotate(bbcShape1153.rotation * Math.PI / 180);
ctx.translate(-bbcShape1153.around.x, -bbcShape1153.around.y);
ctx.beginPath();
ctx.rect(bbcShape1153.point.x, bbcShape1153.point.y, bbcShape1153.size.width, bbcShape1153.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1154.around.x, bbcShape1154.around.y);
ctx.rotate(bbcShape1154.rotation * Math.PI / 180);
ctx.translate(-bbcShape1154.around.x, -bbcShape1154.around.y);
ctx.beginPath();
ctx.rect(bbcShape1154.point.x, bbcShape1154.point.y, bbcShape1154.size.width, bbcShape1154.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1155.around.x, bbcShape1155.around.y);
ctx.rotate(bbcShape1155.rotation * Math.PI / 180);
ctx.translate(-bbcShape1155.around.x, -bbcShape1155.around.y);
ctx.beginPath();
ctx.rect(bbcShape1155.point.x, bbcShape1155.point.y, bbcShape1155.size.width, bbcShape1155.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1156.around.x, bbcShape1156.around.y);
ctx.rotate(bbcShape1156.rotation * Math.PI / 180);
ctx.translate(-bbcShape1156.around.x, -bbcShape1156.around.y);
ctx.beginPath();
ctx.rect(bbcShape1156.point.x, bbcShape1156.point.y, bbcShape1156.size.width, bbcShape1156.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1157.around.x, bbcShape1157.around.y);
ctx.rotate(bbcShape1157.rotation * Math.PI / 180);
ctx.translate(-bbcShape1157.around.x, -bbcShape1157.around.y);
ctx.beginPath();
ctx.rect(bbcShape1157.point.x, bbcShape1157.point.y, bbcShape1157.size.width, bbcShape1157.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1158.around.x, bbcShape1158.around.y);
ctx.rotate(bbcShape1158.rotation * Math.PI / 180);
ctx.translate(-bbcShape1158.around.x, -bbcShape1158.around.y);
ctx.beginPath();
ctx.rect(bbcShape1158.point.x, bbcShape1158.point.y, bbcShape1158.size.width, bbcShape1158.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1159.around.x, bbcShape1159.around.y);
ctx.rotate(bbcShape1159.rotation * Math.PI / 180);
ctx.translate(-bbcShape1159.around.x, -bbcShape1159.around.y);
ctx.beginPath();
ctx.rect(bbcShape1159.point.x, bbcShape1159.point.y, bbcShape1159.size.width, bbcShape1159.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1160.around.x, bbcShape1160.around.y);
ctx.rotate(bbcShape1160.rotation * Math.PI / 180);
ctx.translate(-bbcShape1160.around.x, -bbcShape1160.around.y);
ctx.beginPath();
ctx.rect(bbcShape1160.point.x, bbcShape1160.point.y, bbcShape1160.size.width, bbcShape1160.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1161.around.x, bbcShape1161.around.y);
ctx.rotate(bbcShape1161.rotation * Math.PI / 180);
ctx.translate(-bbcShape1161.around.x, -bbcShape1161.around.y);
ctx.beginPath();
ctx.rect(bbcShape1161.point.x, bbcShape1161.point.y, bbcShape1161.size.width, bbcShape1161.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1162.around.x, bbcShape1162.around.y);
ctx.rotate(bbcShape1162.rotation * Math.PI / 180);
ctx.translate(-bbcShape1162.around.x, -bbcShape1162.around.y);
ctx.beginPath();
ctx.rect(bbcShape1162.point.x, bbcShape1162.point.y, bbcShape1162.size.width, bbcShape1162.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1163.around.x, bbcShape1163.around.y);
ctx.rotate(bbcShape1163.rotation * Math.PI / 180);
ctx.translate(-bbcShape1163.around.x, -bbcShape1163.around.y);
ctx.beginPath();
ctx.rect(bbcShape1163.point.x, bbcShape1163.point.y, bbcShape1163.size.width, bbcShape1163.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1164.around.x, bbcShape1164.around.y);
ctx.rotate(bbcShape1164.rotation * Math.PI / 180);
ctx.translate(-bbcShape1164.around.x, -bbcShape1164.around.y);
ctx.beginPath();
ctx.rect(bbcShape1164.point.x, bbcShape1164.point.y, bbcShape1164.size.width, bbcShape1164.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1165.around.x, bbcShape1165.around.y);
ctx.rotate(bbcShape1165.rotation * Math.PI / 180);
ctx.translate(-bbcShape1165.around.x, -bbcShape1165.around.y);
ctx.beginPath();
ctx.rect(bbcShape1165.point.x, bbcShape1165.point.y, bbcShape1165.size.width, bbcShape1165.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1166.around.x, bbcShape1166.around.y);
ctx.rotate(bbcShape1166.rotation * Math.PI / 180);
ctx.translate(-bbcShape1166.around.x, -bbcShape1166.around.y);
ctx.beginPath();
ctx.rect(bbcShape1166.point.x, bbcShape1166.point.y, bbcShape1166.size.width, bbcShape1166.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1167.around.x, bbcShape1167.around.y);
ctx.rotate(bbcShape1167.rotation * Math.PI / 180);
ctx.translate(-bbcShape1167.around.x, -bbcShape1167.around.y);
ctx.beginPath();
ctx.rect(bbcShape1167.point.x, bbcShape1167.point.y, bbcShape1167.size.width, bbcShape1167.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 175.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1168.around.x, bbcShape1168.around.y);
ctx.rotate(bbcShape1168.rotation * Math.PI / 180);
ctx.translate(-bbcShape1168.around.x, -bbcShape1168.around.y);
ctx.beginPath();
ctx.rect(bbcShape1168.point.x, bbcShape1168.point.y, bbcShape1168.size.width, bbcShape1168.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(200.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1169.around.x, bbcShape1169.around.y);
ctx.rotate(bbcShape1169.rotation * Math.PI / 180);
ctx.translate(-bbcShape1169.around.x, -bbcShape1169.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1169.points[0][0], bbcShape1169.points[0][1]);
ctx.lineTo(bbcShape1169.points[1][0], bbcShape1169.points[1][1]);
ctx.lineTo(bbcShape1169.points[2][0], bbcShape1169.points[2][1]);
ctx.lineTo(bbcShape1169.points[3][0], bbcShape1169.points[3][1]);
ctx.lineTo(bbcShape1169.points[4][0], bbcShape1169.points[4][1]);
ctx.lineTo(bbcShape1169.points[5][0], bbcShape1169.points[5][1]);
ctx.lineTo(bbcShape1169.points[6][0], bbcShape1169.points[6][1]);
ctx.lineTo(bbcShape1169.points[7][0], bbcShape1169.points[7][1]);
ctx.lineTo(bbcShape1169.points[8][0], bbcShape1169.points[8][1]);
ctx.lineTo(bbcShape1169.points[9][0], bbcShape1169.points[9][1]);
ctx.lineTo(bbcShape1169.points[10][0], bbcShape1169.points[10][1]);
ctx.lineTo(bbcShape1169.points[11][0], bbcShape1169.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1170.around.x, bbcShape1170.around.y);
ctx.rotate(bbcShape1170.rotation * Math.PI / 180);
ctx.translate(-bbcShape1170.around.x, -bbcShape1170.around.y);
ctx.beginPath();
ctx.rect(bbcShape1170.point.x, bbcShape1170.point.y, bbcShape1170.size.width, bbcShape1170.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1171.around.x, bbcShape1171.around.y);
ctx.rotate(bbcShape1171.rotation * Math.PI / 180);
ctx.translate(-bbcShape1171.around.x, -bbcShape1171.around.y);
ctx.beginPath();
ctx.rect(bbcShape1171.point.x, bbcShape1171.point.y, bbcShape1171.size.width, bbcShape1171.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1172.around.x, bbcShape1172.around.y);
ctx.rotate(bbcShape1172.rotation * Math.PI / 180);
ctx.translate(-bbcShape1172.around.x, -bbcShape1172.around.y);
ctx.beginPath();
ctx.rect(bbcShape1172.point.x, bbcShape1172.point.y, bbcShape1172.size.width, bbcShape1172.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1173.around.x, bbcShape1173.around.y);
ctx.rotate(bbcShape1173.rotation * Math.PI / 180);
ctx.translate(-bbcShape1173.around.x, -bbcShape1173.around.y);
ctx.beginPath();
ctx.rect(bbcShape1173.point.x, bbcShape1173.point.y, bbcShape1173.size.width, bbcShape1173.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1174.around.x, bbcShape1174.around.y);
ctx.rotate(bbcShape1174.rotation * Math.PI / 180);
ctx.translate(-bbcShape1174.around.x, -bbcShape1174.around.y);
ctx.beginPath();
ctx.rect(bbcShape1174.point.x, bbcShape1174.point.y, bbcShape1174.size.width, bbcShape1174.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1175.around.x, bbcShape1175.around.y);
ctx.rotate(bbcShape1175.rotation * Math.PI / 180);
ctx.translate(-bbcShape1175.around.x, -bbcShape1175.around.y);
ctx.beginPath();
ctx.rect(bbcShape1175.point.x, bbcShape1175.point.y, bbcShape1175.size.width, bbcShape1175.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1176.around.x, bbcShape1176.around.y);
ctx.rotate(bbcShape1176.rotation * Math.PI / 180);
ctx.translate(-bbcShape1176.around.x, -bbcShape1176.around.y);
ctx.beginPath();
ctx.rect(bbcShape1176.point.x, bbcShape1176.point.y, bbcShape1176.size.width, bbcShape1176.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1177.around.x, bbcShape1177.around.y);
ctx.rotate(bbcShape1177.rotation * Math.PI / 180);
ctx.translate(-bbcShape1177.around.x, -bbcShape1177.around.y);
ctx.beginPath();
ctx.rect(bbcShape1177.point.x, bbcShape1177.point.y, bbcShape1177.size.width, bbcShape1177.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1178.around.x, bbcShape1178.around.y);
ctx.rotate(bbcShape1178.rotation * Math.PI / 180);
ctx.translate(-bbcShape1178.around.x, -bbcShape1178.around.y);
ctx.beginPath();
ctx.rect(bbcShape1178.point.x, bbcShape1178.point.y, bbcShape1178.size.width, bbcShape1178.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1179.around.x, bbcShape1179.around.y);
ctx.rotate(bbcShape1179.rotation * Math.PI / 180);
ctx.translate(-bbcShape1179.around.x, -bbcShape1179.around.y);
ctx.beginPath();
ctx.rect(bbcShape1179.point.x, bbcShape1179.point.y, bbcShape1179.size.width, bbcShape1179.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1180.around.x, bbcShape1180.around.y);
ctx.rotate(bbcShape1180.rotation * Math.PI / 180);
ctx.translate(-bbcShape1180.around.x, -bbcShape1180.around.y);
ctx.beginPath();
ctx.rect(bbcShape1180.point.x, bbcShape1180.point.y, bbcShape1180.size.width, bbcShape1180.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1181.around.x, bbcShape1181.around.y);
ctx.rotate(bbcShape1181.rotation * Math.PI / 180);
ctx.translate(-bbcShape1181.around.x, -bbcShape1181.around.y);
ctx.beginPath();
ctx.rect(bbcShape1181.point.x, bbcShape1181.point.y, bbcShape1181.size.width, bbcShape1181.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1182.around.x, bbcShape1182.around.y);
ctx.rotate(bbcShape1182.rotation * Math.PI / 180);
ctx.translate(-bbcShape1182.around.x, -bbcShape1182.around.y);
ctx.beginPath();
ctx.rect(bbcShape1182.point.x, bbcShape1182.point.y, bbcShape1182.size.width, bbcShape1182.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1183.around.x, bbcShape1183.around.y);
ctx.rotate(bbcShape1183.rotation * Math.PI / 180);
ctx.translate(-bbcShape1183.around.x, -bbcShape1183.around.y);
ctx.beginPath();
ctx.rect(bbcShape1183.point.x, bbcShape1183.point.y, bbcShape1183.size.width, bbcShape1183.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1184.around.x, bbcShape1184.around.y);
ctx.rotate(bbcShape1184.rotation * Math.PI / 180);
ctx.translate(-bbcShape1184.around.x, -bbcShape1184.around.y);
ctx.beginPath();
ctx.rect(bbcShape1184.point.x, bbcShape1184.point.y, bbcShape1184.size.width, bbcShape1184.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1185.around.x, bbcShape1185.around.y);
ctx.rotate(bbcShape1185.rotation * Math.PI / 180);
ctx.translate(-bbcShape1185.around.x, -bbcShape1185.around.y);
ctx.beginPath();
ctx.rect(bbcShape1185.point.x, bbcShape1185.point.y, bbcShape1185.size.width, bbcShape1185.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1186.around.x, bbcShape1186.around.y);
ctx.rotate(bbcShape1186.rotation * Math.PI / 180);
ctx.translate(-bbcShape1186.around.x, -bbcShape1186.around.y);
ctx.beginPath();
ctx.rect(bbcShape1186.point.x, bbcShape1186.point.y, bbcShape1186.size.width, bbcShape1186.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1187.around.x, bbcShape1187.around.y);
ctx.rotate(bbcShape1187.rotation * Math.PI / 180);
ctx.translate(-bbcShape1187.around.x, -bbcShape1187.around.y);
ctx.beginPath();
ctx.rect(bbcShape1187.point.x, bbcShape1187.point.y, bbcShape1187.size.width, bbcShape1187.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1188.around.x, bbcShape1188.around.y);
ctx.rotate(bbcShape1188.rotation * Math.PI / 180);
ctx.translate(-bbcShape1188.around.x, -bbcShape1188.around.y);
ctx.beginPath();
ctx.rect(bbcShape1188.point.x, bbcShape1188.point.y, bbcShape1188.size.width, bbcShape1188.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 200.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1189.around.x, bbcShape1189.around.y);
ctx.rotate(bbcShape1189.rotation * Math.PI / 180);
ctx.translate(-bbcShape1189.around.x, -bbcShape1189.around.y);
ctx.beginPath();
ctx.rect(bbcShape1189.point.x, bbcShape1189.point.y, bbcShape1189.size.width, bbcShape1189.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(225.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1190.around.x, bbcShape1190.around.y);
ctx.rotate(bbcShape1190.rotation * Math.PI / 180);
ctx.translate(-bbcShape1190.around.x, -bbcShape1190.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1190.points[0][0], bbcShape1190.points[0][1]);
ctx.lineTo(bbcShape1190.points[1][0], bbcShape1190.points[1][1]);
ctx.lineTo(bbcShape1190.points[2][0], bbcShape1190.points[2][1]);
ctx.lineTo(bbcShape1190.points[3][0], bbcShape1190.points[3][1]);
ctx.lineTo(bbcShape1190.points[4][0], bbcShape1190.points[4][1]);
ctx.lineTo(bbcShape1190.points[5][0], bbcShape1190.points[5][1]);
ctx.lineTo(bbcShape1190.points[6][0], bbcShape1190.points[6][1]);
ctx.lineTo(bbcShape1190.points[7][0], bbcShape1190.points[7][1]);
ctx.lineTo(bbcShape1190.points[8][0], bbcShape1190.points[8][1]);
ctx.lineTo(bbcShape1190.points[9][0], bbcShape1190.points[9][1]);
ctx.lineTo(bbcShape1190.points[10][0], bbcShape1190.points[10][1]);
ctx.lineTo(bbcShape1190.points[11][0], bbcShape1190.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1191.around.x, bbcShape1191.around.y);
ctx.rotate(bbcShape1191.rotation * Math.PI / 180);
ctx.translate(-bbcShape1191.around.x, -bbcShape1191.around.y);
ctx.beginPath();
ctx.rect(bbcShape1191.point.x, bbcShape1191.point.y, bbcShape1191.size.width, bbcShape1191.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1192.around.x, bbcShape1192.around.y);
ctx.rotate(bbcShape1192.rotation * Math.PI / 180);
ctx.translate(-bbcShape1192.around.x, -bbcShape1192.around.y);
ctx.beginPath();
ctx.rect(bbcShape1192.point.x, bbcShape1192.point.y, bbcShape1192.size.width, bbcShape1192.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1193.around.x, bbcShape1193.around.y);
ctx.rotate(bbcShape1193.rotation * Math.PI / 180);
ctx.translate(-bbcShape1193.around.x, -bbcShape1193.around.y);
ctx.beginPath();
ctx.rect(bbcShape1193.point.x, bbcShape1193.point.y, bbcShape1193.size.width, bbcShape1193.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1194.around.x, bbcShape1194.around.y);
ctx.rotate(bbcShape1194.rotation * Math.PI / 180);
ctx.translate(-bbcShape1194.around.x, -bbcShape1194.around.y);
ctx.beginPath();
ctx.rect(bbcShape1194.point.x, bbcShape1194.point.y, bbcShape1194.size.width, bbcShape1194.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1195.around.x, bbcShape1195.around.y);
ctx.rotate(bbcShape1195.rotation * Math.PI / 180);
ctx.translate(-bbcShape1195.around.x, -bbcShape1195.around.y);
ctx.beginPath();
ctx.rect(bbcShape1195.point.x, bbcShape1195.point.y, bbcShape1195.size.width, bbcShape1195.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1196.around.x, bbcShape1196.around.y);
ctx.rotate(bbcShape1196.rotation * Math.PI / 180);
ctx.translate(-bbcShape1196.around.x, -bbcShape1196.around.y);
ctx.beginPath();
ctx.rect(bbcShape1196.point.x, bbcShape1196.point.y, bbcShape1196.size.width, bbcShape1196.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1197.around.x, bbcShape1197.around.y);
ctx.rotate(bbcShape1197.rotation * Math.PI / 180);
ctx.translate(-bbcShape1197.around.x, -bbcShape1197.around.y);
ctx.beginPath();
ctx.rect(bbcShape1197.point.x, bbcShape1197.point.y, bbcShape1197.size.width, bbcShape1197.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1198.around.x, bbcShape1198.around.y);
ctx.rotate(bbcShape1198.rotation * Math.PI / 180);
ctx.translate(-bbcShape1198.around.x, -bbcShape1198.around.y);
ctx.beginPath();
ctx.rect(bbcShape1198.point.x, bbcShape1198.point.y, bbcShape1198.size.width, bbcShape1198.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1199.around.x, bbcShape1199.around.y);
ctx.rotate(bbcShape1199.rotation * Math.PI / 180);
ctx.translate(-bbcShape1199.around.x, -bbcShape1199.around.y);
ctx.beginPath();
ctx.rect(bbcShape1199.point.x, bbcShape1199.point.y, bbcShape1199.size.width, bbcShape1199.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1200.around.x, bbcShape1200.around.y);
ctx.rotate(bbcShape1200.rotation * Math.PI / 180);
ctx.translate(-bbcShape1200.around.x, -bbcShape1200.around.y);
ctx.beginPath();
ctx.rect(bbcShape1200.point.x, bbcShape1200.point.y, bbcShape1200.size.width, bbcShape1200.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1201.around.x, bbcShape1201.around.y);
ctx.rotate(bbcShape1201.rotation * Math.PI / 180);
ctx.translate(-bbcShape1201.around.x, -bbcShape1201.around.y);
ctx.beginPath();
ctx.rect(bbcShape1201.point.x, bbcShape1201.point.y, bbcShape1201.size.width, bbcShape1201.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1202.around.x, bbcShape1202.around.y);
ctx.rotate(bbcShape1202.rotation * Math.PI / 180);
ctx.translate(-bbcShape1202.around.x, -bbcShape1202.around.y);
ctx.beginPath();
ctx.rect(bbcShape1202.point.x, bbcShape1202.point.y, bbcShape1202.size.width, bbcShape1202.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1203.around.x, bbcShape1203.around.y);
ctx.rotate(bbcShape1203.rotation * Math.PI / 180);
ctx.translate(-bbcShape1203.around.x, -bbcShape1203.around.y);
ctx.beginPath();
ctx.rect(bbcShape1203.point.x, bbcShape1203.point.y, bbcShape1203.size.width, bbcShape1203.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1204.around.x, bbcShape1204.around.y);
ctx.rotate(bbcShape1204.rotation * Math.PI / 180);
ctx.translate(-bbcShape1204.around.x, -bbcShape1204.around.y);
ctx.beginPath();
ctx.rect(bbcShape1204.point.x, bbcShape1204.point.y, bbcShape1204.size.width, bbcShape1204.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1205.around.x, bbcShape1205.around.y);
ctx.rotate(bbcShape1205.rotation * Math.PI / 180);
ctx.translate(-bbcShape1205.around.x, -bbcShape1205.around.y);
ctx.beginPath();
ctx.rect(bbcShape1205.point.x, bbcShape1205.point.y, bbcShape1205.size.width, bbcShape1205.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1206.around.x, bbcShape1206.around.y);
ctx.rotate(bbcShape1206.rotation * Math.PI / 180);
ctx.translate(-bbcShape1206.around.x, -bbcShape1206.around.y);
ctx.beginPath();
ctx.rect(bbcShape1206.point.x, bbcShape1206.point.y, bbcShape1206.size.width, bbcShape1206.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1207.around.x, bbcShape1207.around.y);
ctx.rotate(bbcShape1207.rotation * Math.PI / 180);
ctx.translate(-bbcShape1207.around.x, -bbcShape1207.around.y);
ctx.beginPath();
ctx.rect(bbcShape1207.point.x, bbcShape1207.point.y, bbcShape1207.size.width, bbcShape1207.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1208.around.x, bbcShape1208.around.y);
ctx.rotate(bbcShape1208.rotation * Math.PI / 180);
ctx.translate(-bbcShape1208.around.x, -bbcShape1208.around.y);
ctx.beginPath();
ctx.rect(bbcShape1208.point.x, bbcShape1208.point.y, bbcShape1208.size.width, bbcShape1208.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1209.around.x, bbcShape1209.around.y);
ctx.rotate(bbcShape1209.rotation * Math.PI / 180);
ctx.translate(-bbcShape1209.around.x, -bbcShape1209.around.y);
ctx.beginPath();
ctx.rect(bbcShape1209.point.x, bbcShape1209.point.y, bbcShape1209.size.width, bbcShape1209.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 225.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1210.around.x, bbcShape1210.around.y);
ctx.rotate(bbcShape1210.rotation * Math.PI / 180);
ctx.translate(-bbcShape1210.around.x, -bbcShape1210.around.y);
ctx.beginPath();
ctx.rect(bbcShape1210.point.x, bbcShape1210.point.y, bbcShape1210.size.width, bbcShape1210.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(250.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1211.around.x, bbcShape1211.around.y);
ctx.rotate(bbcShape1211.rotation * Math.PI / 180);
ctx.translate(-bbcShape1211.around.x, -bbcShape1211.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1211.points[0][0], bbcShape1211.points[0][1]);
ctx.lineTo(bbcShape1211.points[1][0], bbcShape1211.points[1][1]);
ctx.lineTo(bbcShape1211.points[2][0], bbcShape1211.points[2][1]);
ctx.lineTo(bbcShape1211.points[3][0], bbcShape1211.points[3][1]);
ctx.lineTo(bbcShape1211.points[4][0], bbcShape1211.points[4][1]);
ctx.lineTo(bbcShape1211.points[5][0], bbcShape1211.points[5][1]);
ctx.lineTo(bbcShape1211.points[6][0], bbcShape1211.points[6][1]);
ctx.lineTo(bbcShape1211.points[7][0], bbcShape1211.points[7][1]);
ctx.lineTo(bbcShape1211.points[8][0], bbcShape1211.points[8][1]);
ctx.lineTo(bbcShape1211.points[9][0], bbcShape1211.points[9][1]);
ctx.lineTo(bbcShape1211.points[10][0], bbcShape1211.points[10][1]);
ctx.lineTo(bbcShape1211.points[11][0], bbcShape1211.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1212.around.x, bbcShape1212.around.y);
ctx.rotate(bbcShape1212.rotation * Math.PI / 180);
ctx.translate(-bbcShape1212.around.x, -bbcShape1212.around.y);
ctx.beginPath();
ctx.rect(bbcShape1212.point.x, bbcShape1212.point.y, bbcShape1212.size.width, bbcShape1212.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1213.around.x, bbcShape1213.around.y);
ctx.rotate(bbcShape1213.rotation * Math.PI / 180);
ctx.translate(-bbcShape1213.around.x, -bbcShape1213.around.y);
ctx.beginPath();
ctx.rect(bbcShape1213.point.x, bbcShape1213.point.y, bbcShape1213.size.width, bbcShape1213.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1214.around.x, bbcShape1214.around.y);
ctx.rotate(bbcShape1214.rotation * Math.PI / 180);
ctx.translate(-bbcShape1214.around.x, -bbcShape1214.around.y);
ctx.beginPath();
ctx.rect(bbcShape1214.point.x, bbcShape1214.point.y, bbcShape1214.size.width, bbcShape1214.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1215.around.x, bbcShape1215.around.y);
ctx.rotate(bbcShape1215.rotation * Math.PI / 180);
ctx.translate(-bbcShape1215.around.x, -bbcShape1215.around.y);
ctx.beginPath();
ctx.rect(bbcShape1215.point.x, bbcShape1215.point.y, bbcShape1215.size.width, bbcShape1215.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1216.around.x, bbcShape1216.around.y);
ctx.rotate(bbcShape1216.rotation * Math.PI / 180);
ctx.translate(-bbcShape1216.around.x, -bbcShape1216.around.y);
ctx.beginPath();
ctx.rect(bbcShape1216.point.x, bbcShape1216.point.y, bbcShape1216.size.width, bbcShape1216.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1217.around.x, bbcShape1217.around.y);
ctx.rotate(bbcShape1217.rotation * Math.PI / 180);
ctx.translate(-bbcShape1217.around.x, -bbcShape1217.around.y);
ctx.beginPath();
ctx.rect(bbcShape1217.point.x, bbcShape1217.point.y, bbcShape1217.size.width, bbcShape1217.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1218.around.x, bbcShape1218.around.y);
ctx.rotate(bbcShape1218.rotation * Math.PI / 180);
ctx.translate(-bbcShape1218.around.x, -bbcShape1218.around.y);
ctx.beginPath();
ctx.rect(bbcShape1218.point.x, bbcShape1218.point.y, bbcShape1218.size.width, bbcShape1218.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1219.around.x, bbcShape1219.around.y);
ctx.rotate(bbcShape1219.rotation * Math.PI / 180);
ctx.translate(-bbcShape1219.around.x, -bbcShape1219.around.y);
ctx.beginPath();
ctx.rect(bbcShape1219.point.x, bbcShape1219.point.y, bbcShape1219.size.width, bbcShape1219.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1220.around.x, bbcShape1220.around.y);
ctx.rotate(bbcShape1220.rotation * Math.PI / 180);
ctx.translate(-bbcShape1220.around.x, -bbcShape1220.around.y);
ctx.beginPath();
ctx.rect(bbcShape1220.point.x, bbcShape1220.point.y, bbcShape1220.size.width, bbcShape1220.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1221.around.x, bbcShape1221.around.y);
ctx.rotate(bbcShape1221.rotation * Math.PI / 180);
ctx.translate(-bbcShape1221.around.x, -bbcShape1221.around.y);
ctx.beginPath();
ctx.rect(bbcShape1221.point.x, bbcShape1221.point.y, bbcShape1221.size.width, bbcShape1221.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1222.around.x, bbcShape1222.around.y);
ctx.rotate(bbcShape1222.rotation * Math.PI / 180);
ctx.translate(-bbcShape1222.around.x, -bbcShape1222.around.y);
ctx.beginPath();
ctx.rect(bbcShape1222.point.x, bbcShape1222.point.y, bbcShape1222.size.width, bbcShape1222.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1223.around.x, bbcShape1223.around.y);
ctx.rotate(bbcShape1223.rotation * Math.PI / 180);
ctx.translate(-bbcShape1223.around.x, -bbcShape1223.around.y);
ctx.beginPath();
ctx.rect(bbcShape1223.point.x, bbcShape1223.point.y, bbcShape1223.size.width, bbcShape1223.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1224.around.x, bbcShape1224.around.y);
ctx.rotate(bbcShape1224.rotation * Math.PI / 180);
ctx.translate(-bbcShape1224.around.x, -bbcShape1224.around.y);
ctx.beginPath();
ctx.rect(bbcShape1224.point.x, bbcShape1224.point.y, bbcShape1224.size.width, bbcShape1224.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1225.around.x, bbcShape1225.around.y);
ctx.rotate(bbcShape1225.rotation * Math.PI / 180);
ctx.translate(-bbcShape1225.around.x, -bbcShape1225.around.y);
ctx.beginPath();
ctx.rect(bbcShape1225.point.x, bbcShape1225.point.y, bbcShape1225.size.width, bbcShape1225.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1226.around.x, bbcShape1226.around.y);
ctx.rotate(bbcShape1226.rotation * Math.PI / 180);
ctx.translate(-bbcShape1226.around.x, -bbcShape1226.around.y);
ctx.beginPath();
ctx.rect(bbcShape1226.point.x, bbcShape1226.point.y, bbcShape1226.size.width, bbcShape1226.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1227.around.x, bbcShape1227.around.y);
ctx.rotate(bbcShape1227.rotation * Math.PI / 180);
ctx.translate(-bbcShape1227.around.x, -bbcShape1227.around.y);
ctx.beginPath();
ctx.rect(bbcShape1227.point.x, bbcShape1227.point.y, bbcShape1227.size.width, bbcShape1227.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1228.around.x, bbcShape1228.around.y);
ctx.rotate(bbcShape1228.rotation * Math.PI / 180);
ctx.translate(-bbcShape1228.around.x, -bbcShape1228.around.y);
ctx.beginPath();
ctx.rect(bbcShape1228.point.x, bbcShape1228.point.y, bbcShape1228.size.width, bbcShape1228.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1229.around.x, bbcShape1229.around.y);
ctx.rotate(bbcShape1229.rotation * Math.PI / 180);
ctx.translate(-bbcShape1229.around.x, -bbcShape1229.around.y);
ctx.beginPath();
ctx.rect(bbcShape1229.point.x, bbcShape1229.point.y, bbcShape1229.size.width, bbcShape1229.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1230.around.x, bbcShape1230.around.y);
ctx.rotate(bbcShape1230.rotation * Math.PI / 180);
ctx.translate(-bbcShape1230.around.x, -bbcShape1230.around.y);
ctx.beginPath();
ctx.rect(bbcShape1230.point.x, bbcShape1230.point.y, bbcShape1230.size.width, bbcShape1230.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 250.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1231.around.x, bbcShape1231.around.y);
ctx.rotate(bbcShape1231.rotation * Math.PI / 180);
ctx.translate(-bbcShape1231.around.x, -bbcShape1231.around.y);
ctx.beginPath();
ctx.rect(bbcShape1231.point.x, bbcShape1231.point.y, bbcShape1231.size.width, bbcShape1231.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(275.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1232.around.x, bbcShape1232.around.y);
ctx.rotate(bbcShape1232.rotation * Math.PI / 180);
ctx.translate(-bbcShape1232.around.x, -bbcShape1232.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1232.points[0][0], bbcShape1232.points[0][1]);
ctx.lineTo(bbcShape1232.points[1][0], bbcShape1232.points[1][1]);
ctx.lineTo(bbcShape1232.points[2][0], bbcShape1232.points[2][1]);
ctx.lineTo(bbcShape1232.points[3][0], bbcShape1232.points[3][1]);
ctx.lineTo(bbcShape1232.points[4][0], bbcShape1232.points[4][1]);
ctx.lineTo(bbcShape1232.points[5][0], bbcShape1232.points[5][1]);
ctx.lineTo(bbcShape1232.points[6][0], bbcShape1232.points[6][1]);
ctx.lineTo(bbcShape1232.points[7][0], bbcShape1232.points[7][1]);
ctx.lineTo(bbcShape1232.points[8][0], bbcShape1232.points[8][1]);
ctx.lineTo(bbcShape1232.points[9][0], bbcShape1232.points[9][1]);
ctx.lineTo(bbcShape1232.points[10][0], bbcShape1232.points[10][1]);
ctx.lineTo(bbcShape1232.points[11][0], bbcShape1232.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1233.around.x, bbcShape1233.around.y);
ctx.rotate(bbcShape1233.rotation * Math.PI / 180);
ctx.translate(-bbcShape1233.around.x, -bbcShape1233.around.y);
ctx.beginPath();
ctx.rect(bbcShape1233.point.x, bbcShape1233.point.y, bbcShape1233.size.width, bbcShape1233.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1234.around.x, bbcShape1234.around.y);
ctx.rotate(bbcShape1234.rotation * Math.PI / 180);
ctx.translate(-bbcShape1234.around.x, -bbcShape1234.around.y);
ctx.beginPath();
ctx.rect(bbcShape1234.point.x, bbcShape1234.point.y, bbcShape1234.size.width, bbcShape1234.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1235.around.x, bbcShape1235.around.y);
ctx.rotate(bbcShape1235.rotation * Math.PI / 180);
ctx.translate(-bbcShape1235.around.x, -bbcShape1235.around.y);
ctx.beginPath();
ctx.rect(bbcShape1235.point.x, bbcShape1235.point.y, bbcShape1235.size.width, bbcShape1235.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1236.around.x, bbcShape1236.around.y);
ctx.rotate(bbcShape1236.rotation * Math.PI / 180);
ctx.translate(-bbcShape1236.around.x, -bbcShape1236.around.y);
ctx.beginPath();
ctx.rect(bbcShape1236.point.x, bbcShape1236.point.y, bbcShape1236.size.width, bbcShape1236.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1237.around.x, bbcShape1237.around.y);
ctx.rotate(bbcShape1237.rotation * Math.PI / 180);
ctx.translate(-bbcShape1237.around.x, -bbcShape1237.around.y);
ctx.beginPath();
ctx.rect(bbcShape1237.point.x, bbcShape1237.point.y, bbcShape1237.size.width, bbcShape1237.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1238.around.x, bbcShape1238.around.y);
ctx.rotate(bbcShape1238.rotation * Math.PI / 180);
ctx.translate(-bbcShape1238.around.x, -bbcShape1238.around.y);
ctx.beginPath();
ctx.rect(bbcShape1238.point.x, bbcShape1238.point.y, bbcShape1238.size.width, bbcShape1238.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1239.around.x, bbcShape1239.around.y);
ctx.rotate(bbcShape1239.rotation * Math.PI / 180);
ctx.translate(-bbcShape1239.around.x, -bbcShape1239.around.y);
ctx.beginPath();
ctx.rect(bbcShape1239.point.x, bbcShape1239.point.y, bbcShape1239.size.width, bbcShape1239.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1240.around.x, bbcShape1240.around.y);
ctx.rotate(bbcShape1240.rotation * Math.PI / 180);
ctx.translate(-bbcShape1240.around.x, -bbcShape1240.around.y);
ctx.beginPath();
ctx.rect(bbcShape1240.point.x, bbcShape1240.point.y, bbcShape1240.size.width, bbcShape1240.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1241.around.x, bbcShape1241.around.y);
ctx.rotate(bbcShape1241.rotation * Math.PI / 180);
ctx.translate(-bbcShape1241.around.x, -bbcShape1241.around.y);
ctx.beginPath();
ctx.rect(bbcShape1241.point.x, bbcShape1241.point.y, bbcShape1241.size.width, bbcShape1241.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1242.around.x, bbcShape1242.around.y);
ctx.rotate(bbcShape1242.rotation * Math.PI / 180);
ctx.translate(-bbcShape1242.around.x, -bbcShape1242.around.y);
ctx.beginPath();
ctx.rect(bbcShape1242.point.x, bbcShape1242.point.y, bbcShape1242.size.width, bbcShape1242.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1243.around.x, bbcShape1243.around.y);
ctx.rotate(bbcShape1243.rotation * Math.PI / 180);
ctx.translate(-bbcShape1243.around.x, -bbcShape1243.around.y);
ctx.beginPath();
ctx.rect(bbcShape1243.point.x, bbcShape1243.point.y, bbcShape1243.size.width, bbcShape1243.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1244.around.x, bbcShape1244.around.y);
ctx.rotate(bbcShape1244.rotation * Math.PI / 180);
ctx.translate(-bbcShape1244.around.x, -bbcShape1244.around.y);
ctx.beginPath();
ctx.rect(bbcShape1244.point.x, bbcShape1244.point.y, bbcShape1244.size.width, bbcShape1244.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1245.around.x, bbcShape1245.around.y);
ctx.rotate(bbcShape1245.rotation * Math.PI / 180);
ctx.translate(-bbcShape1245.around.x, -bbcShape1245.around.y);
ctx.beginPath();
ctx.rect(bbcShape1245.point.x, bbcShape1245.point.y, bbcShape1245.size.width, bbcShape1245.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1246.around.x, bbcShape1246.around.y);
ctx.rotate(bbcShape1246.rotation * Math.PI / 180);
ctx.translate(-bbcShape1246.around.x, -bbcShape1246.around.y);
ctx.beginPath();
ctx.rect(bbcShape1246.point.x, bbcShape1246.point.y, bbcShape1246.size.width, bbcShape1246.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1247.around.x, bbcShape1247.around.y);
ctx.rotate(bbcShape1247.rotation * Math.PI / 180);
ctx.translate(-bbcShape1247.around.x, -bbcShape1247.around.y);
ctx.beginPath();
ctx.rect(bbcShape1247.point.x, bbcShape1247.point.y, bbcShape1247.size.width, bbcShape1247.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1248.around.x, bbcShape1248.around.y);
ctx.rotate(bbcShape1248.rotation * Math.PI / 180);
ctx.translate(-bbcShape1248.around.x, -bbcShape1248.around.y);
ctx.beginPath();
ctx.rect(bbcShape1248.point.x, bbcShape1248.point.y, bbcShape1248.size.width, bbcShape1248.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1249.around.x, bbcShape1249.around.y);
ctx.rotate(bbcShape1249.rotation * Math.PI / 180);
ctx.translate(-bbcShape1249.around.x, -bbcShape1249.around.y);
ctx.beginPath();
ctx.rect(bbcShape1249.point.x, bbcShape1249.point.y, bbcShape1249.size.width, bbcShape1249.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1250.around.x, bbcShape1250.around.y);
ctx.rotate(bbcShape1250.rotation * Math.PI / 180);
ctx.translate(-bbcShape1250.around.x, -bbcShape1250.around.y);
ctx.beginPath();
ctx.rect(bbcShape1250.point.x, bbcShape1250.point.y, bbcShape1250.size.width, bbcShape1250.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1251.around.x, bbcShape1251.around.y);
ctx.rotate(bbcShape1251.rotation * Math.PI / 180);
ctx.translate(-bbcShape1251.around.x, -bbcShape1251.around.y);
ctx.beginPath();
ctx.rect(bbcShape1251.point.x, bbcShape1251.point.y, bbcShape1251.size.width, bbcShape1251.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 275.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1252.around.x, bbcShape1252.around.y);
ctx.rotate(bbcShape1252.rotation * Math.PI / 180);
ctx.translate(-bbcShape1252.around.x, -bbcShape1252.around.y);
ctx.beginPath();
ctx.rect(bbcShape1252.point.x, bbcShape1252.point.y, bbcShape1252.size.width, bbcShape1252.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(300.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1253.around.x, bbcShape1253.around.y);
ctx.rotate(bbcShape1253.rotation * Math.PI / 180);
ctx.translate(-bbcShape1253.around.x, -bbcShape1253.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1253.points[0][0], bbcShape1253.points[0][1]);
ctx.lineTo(bbcShape1253.points[1][0], bbcShape1253.points[1][1]);
ctx.lineTo(bbcShape1253.points[2][0], bbcShape1253.points[2][1]);
ctx.lineTo(bbcShape1253.points[3][0], bbcShape1253.points[3][1]);
ctx.lineTo(bbcShape1253.points[4][0], bbcShape1253.points[4][1]);
ctx.lineTo(bbcShape1253.points[5][0], bbcShape1253.points[5][1]);
ctx.lineTo(bbcShape1253.points[6][0], bbcShape1253.points[6][1]);
ctx.lineTo(bbcShape1253.points[7][0], bbcShape1253.points[7][1]);
ctx.lineTo(bbcShape1253.points[8][0], bbcShape1253.points[8][1]);
ctx.lineTo(bbcShape1253.points[9][0], bbcShape1253.points[9][1]);
ctx.lineTo(bbcShape1253.points[10][0], bbcShape1253.points[10][1]);
ctx.lineTo(bbcShape1253.points[11][0], bbcShape1253.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1254.around.x, bbcShape1254.around.y);
ctx.rotate(bbcShape1254.rotation * Math.PI / 180);
ctx.translate(-bbcShape1254.around.x, -bbcShape1254.around.y);
ctx.beginPath();
ctx.rect(bbcShape1254.point.x, bbcShape1254.point.y, bbcShape1254.size.width, bbcShape1254.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1255.around.x, bbcShape1255.around.y);
ctx.rotate(bbcShape1255.rotation * Math.PI / 180);
ctx.translate(-bbcShape1255.around.x, -bbcShape1255.around.y);
ctx.beginPath();
ctx.rect(bbcShape1255.point.x, bbcShape1255.point.y, bbcShape1255.size.width, bbcShape1255.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1256.around.x, bbcShape1256.around.y);
ctx.rotate(bbcShape1256.rotation * Math.PI / 180);
ctx.translate(-bbcShape1256.around.x, -bbcShape1256.around.y);
ctx.beginPath();
ctx.rect(bbcShape1256.point.x, bbcShape1256.point.y, bbcShape1256.size.width, bbcShape1256.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1257.around.x, bbcShape1257.around.y);
ctx.rotate(bbcShape1257.rotation * Math.PI / 180);
ctx.translate(-bbcShape1257.around.x, -bbcShape1257.around.y);
ctx.beginPath();
ctx.rect(bbcShape1257.point.x, bbcShape1257.point.y, bbcShape1257.size.width, bbcShape1257.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1258.around.x, bbcShape1258.around.y);
ctx.rotate(bbcShape1258.rotation * Math.PI / 180);
ctx.translate(-bbcShape1258.around.x, -bbcShape1258.around.y);
ctx.beginPath();
ctx.rect(bbcShape1258.point.x, bbcShape1258.point.y, bbcShape1258.size.width, bbcShape1258.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1259.around.x, bbcShape1259.around.y);
ctx.rotate(bbcShape1259.rotation * Math.PI / 180);
ctx.translate(-bbcShape1259.around.x, -bbcShape1259.around.y);
ctx.beginPath();
ctx.rect(bbcShape1259.point.x, bbcShape1259.point.y, bbcShape1259.size.width, bbcShape1259.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1260.around.x, bbcShape1260.around.y);
ctx.rotate(bbcShape1260.rotation * Math.PI / 180);
ctx.translate(-bbcShape1260.around.x, -bbcShape1260.around.y);
ctx.beginPath();
ctx.rect(bbcShape1260.point.x, bbcShape1260.point.y, bbcShape1260.size.width, bbcShape1260.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1261.around.x, bbcShape1261.around.y);
ctx.rotate(bbcShape1261.rotation * Math.PI / 180);
ctx.translate(-bbcShape1261.around.x, -bbcShape1261.around.y);
ctx.beginPath();
ctx.rect(bbcShape1261.point.x, bbcShape1261.point.y, bbcShape1261.size.width, bbcShape1261.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1262.around.x, bbcShape1262.around.y);
ctx.rotate(bbcShape1262.rotation * Math.PI / 180);
ctx.translate(-bbcShape1262.around.x, -bbcShape1262.around.y);
ctx.beginPath();
ctx.rect(bbcShape1262.point.x, bbcShape1262.point.y, bbcShape1262.size.width, bbcShape1262.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1263.around.x, bbcShape1263.around.y);
ctx.rotate(bbcShape1263.rotation * Math.PI / 180);
ctx.translate(-bbcShape1263.around.x, -bbcShape1263.around.y);
ctx.beginPath();
ctx.rect(bbcShape1263.point.x, bbcShape1263.point.y, bbcShape1263.size.width, bbcShape1263.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1264.around.x, bbcShape1264.around.y);
ctx.rotate(bbcShape1264.rotation * Math.PI / 180);
ctx.translate(-bbcShape1264.around.x, -bbcShape1264.around.y);
ctx.beginPath();
ctx.rect(bbcShape1264.point.x, bbcShape1264.point.y, bbcShape1264.size.width, bbcShape1264.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1265.around.x, bbcShape1265.around.y);
ctx.rotate(bbcShape1265.rotation * Math.PI / 180);
ctx.translate(-bbcShape1265.around.x, -bbcShape1265.around.y);
ctx.beginPath();
ctx.rect(bbcShape1265.point.x, bbcShape1265.point.y, bbcShape1265.size.width, bbcShape1265.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1266.around.x, bbcShape1266.around.y);
ctx.rotate(bbcShape1266.rotation * Math.PI / 180);
ctx.translate(-bbcShape1266.around.x, -bbcShape1266.around.y);
ctx.beginPath();
ctx.rect(bbcShape1266.point.x, bbcShape1266.point.y, bbcShape1266.size.width, bbcShape1266.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1267.around.x, bbcShape1267.around.y);
ctx.rotate(bbcShape1267.rotation * Math.PI / 180);
ctx.translate(-bbcShape1267.around.x, -bbcShape1267.around.y);
ctx.beginPath();
ctx.rect(bbcShape1267.point.x, bbcShape1267.point.y, bbcShape1267.size.width, bbcShape1267.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1268.around.x, bbcShape1268.around.y);
ctx.rotate(bbcShape1268.rotation * Math.PI / 180);
ctx.translate(-bbcShape1268.around.x, -bbcShape1268.around.y);
ctx.beginPath();
ctx.rect(bbcShape1268.point.x, bbcShape1268.point.y, bbcShape1268.size.width, bbcShape1268.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1269.around.x, bbcShape1269.around.y);
ctx.rotate(bbcShape1269.rotation * Math.PI / 180);
ctx.translate(-bbcShape1269.around.x, -bbcShape1269.around.y);
ctx.beginPath();
ctx.rect(bbcShape1269.point.x, bbcShape1269.point.y, bbcShape1269.size.width, bbcShape1269.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1270.around.x, bbcShape1270.around.y);
ctx.rotate(bbcShape1270.rotation * Math.PI / 180);
ctx.translate(-bbcShape1270.around.x, -bbcShape1270.around.y);
ctx.beginPath();
ctx.rect(bbcShape1270.point.x, bbcShape1270.point.y, bbcShape1270.size.width, bbcShape1270.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1271.around.x, bbcShape1271.around.y);
ctx.rotate(bbcShape1271.rotation * Math.PI / 180);
ctx.translate(-bbcShape1271.around.x, -bbcShape1271.around.y);
ctx.beginPath();
ctx.rect(bbcShape1271.point.x, bbcShape1271.point.y, bbcShape1271.size.width, bbcShape1271.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1272.around.x, bbcShape1272.around.y);
ctx.rotate(bbcShape1272.rotation * Math.PI / 180);
ctx.translate(-bbcShape1272.around.x, -bbcShape1272.around.y);
ctx.beginPath();
ctx.rect(bbcShape1272.point.x, bbcShape1272.point.y, bbcShape1272.size.width, bbcShape1272.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 300.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1273.around.x, bbcShape1273.around.y);
ctx.rotate(bbcShape1273.rotation * Math.PI / 180);
ctx.translate(-bbcShape1273.around.x, -bbcShape1273.around.y);
ctx.beginPath();
ctx.rect(bbcShape1273.point.x, bbcShape1273.point.y, bbcShape1273.size.width, bbcShape1273.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(325.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1274.around.x, bbcShape1274.around.y);
ctx.rotate(bbcShape1274.rotation * Math.PI / 180);
ctx.translate(-bbcShape1274.around.x, -bbcShape1274.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1274.points[0][0], bbcShape1274.points[0][1]);
ctx.lineTo(bbcShape1274.points[1][0], bbcShape1274.points[1][1]);
ctx.lineTo(bbcShape1274.points[2][0], bbcShape1274.points[2][1]);
ctx.lineTo(bbcShape1274.points[3][0], bbcShape1274.points[3][1]);
ctx.lineTo(bbcShape1274.points[4][0], bbcShape1274.points[4][1]);
ctx.lineTo(bbcShape1274.points[5][0], bbcShape1274.points[5][1]);
ctx.lineTo(bbcShape1274.points[6][0], bbcShape1274.points[6][1]);
ctx.lineTo(bbcShape1274.points[7][0], bbcShape1274.points[7][1]);
ctx.lineTo(bbcShape1274.points[8][0], bbcShape1274.points[8][1]);
ctx.lineTo(bbcShape1274.points[9][0], bbcShape1274.points[9][1]);
ctx.lineTo(bbcShape1274.points[10][0], bbcShape1274.points[10][1]);
ctx.lineTo(bbcShape1274.points[11][0], bbcShape1274.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1275.around.x, bbcShape1275.around.y);
ctx.rotate(bbcShape1275.rotation * Math.PI / 180);
ctx.translate(-bbcShape1275.around.x, -bbcShape1275.around.y);
ctx.beginPath();
ctx.rect(bbcShape1275.point.x, bbcShape1275.point.y, bbcShape1275.size.width, bbcShape1275.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1276.around.x, bbcShape1276.around.y);
ctx.rotate(bbcShape1276.rotation * Math.PI / 180);
ctx.translate(-bbcShape1276.around.x, -bbcShape1276.around.y);
ctx.beginPath();
ctx.rect(bbcShape1276.point.x, bbcShape1276.point.y, bbcShape1276.size.width, bbcShape1276.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1277.around.x, bbcShape1277.around.y);
ctx.rotate(bbcShape1277.rotation * Math.PI / 180);
ctx.translate(-bbcShape1277.around.x, -bbcShape1277.around.y);
ctx.beginPath();
ctx.rect(bbcShape1277.point.x, bbcShape1277.point.y, bbcShape1277.size.width, bbcShape1277.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1278.around.x, bbcShape1278.around.y);
ctx.rotate(bbcShape1278.rotation * Math.PI / 180);
ctx.translate(-bbcShape1278.around.x, -bbcShape1278.around.y);
ctx.beginPath();
ctx.rect(bbcShape1278.point.x, bbcShape1278.point.y, bbcShape1278.size.width, bbcShape1278.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1279.around.x, bbcShape1279.around.y);
ctx.rotate(bbcShape1279.rotation * Math.PI / 180);
ctx.translate(-bbcShape1279.around.x, -bbcShape1279.around.y);
ctx.beginPath();
ctx.rect(bbcShape1279.point.x, bbcShape1279.point.y, bbcShape1279.size.width, bbcShape1279.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1280.around.x, bbcShape1280.around.y);
ctx.rotate(bbcShape1280.rotation * Math.PI / 180);
ctx.translate(-bbcShape1280.around.x, -bbcShape1280.around.y);
ctx.beginPath();
ctx.rect(bbcShape1280.point.x, bbcShape1280.point.y, bbcShape1280.size.width, bbcShape1280.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1281.around.x, bbcShape1281.around.y);
ctx.rotate(bbcShape1281.rotation * Math.PI / 180);
ctx.translate(-bbcShape1281.around.x, -bbcShape1281.around.y);
ctx.beginPath();
ctx.rect(bbcShape1281.point.x, bbcShape1281.point.y, bbcShape1281.size.width, bbcShape1281.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1282.around.x, bbcShape1282.around.y);
ctx.rotate(bbcShape1282.rotation * Math.PI / 180);
ctx.translate(-bbcShape1282.around.x, -bbcShape1282.around.y);
ctx.beginPath();
ctx.rect(bbcShape1282.point.x, bbcShape1282.point.y, bbcShape1282.size.width, bbcShape1282.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1283.around.x, bbcShape1283.around.y);
ctx.rotate(bbcShape1283.rotation * Math.PI / 180);
ctx.translate(-bbcShape1283.around.x, -bbcShape1283.around.y);
ctx.beginPath();
ctx.rect(bbcShape1283.point.x, bbcShape1283.point.y, bbcShape1283.size.width, bbcShape1283.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1284.around.x, bbcShape1284.around.y);
ctx.rotate(bbcShape1284.rotation * Math.PI / 180);
ctx.translate(-bbcShape1284.around.x, -bbcShape1284.around.y);
ctx.beginPath();
ctx.rect(bbcShape1284.point.x, bbcShape1284.point.y, bbcShape1284.size.width, bbcShape1284.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1285.around.x, bbcShape1285.around.y);
ctx.rotate(bbcShape1285.rotation * Math.PI / 180);
ctx.translate(-bbcShape1285.around.x, -bbcShape1285.around.y);
ctx.beginPath();
ctx.rect(bbcShape1285.point.x, bbcShape1285.point.y, bbcShape1285.size.width, bbcShape1285.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1286.around.x, bbcShape1286.around.y);
ctx.rotate(bbcShape1286.rotation * Math.PI / 180);
ctx.translate(-bbcShape1286.around.x, -bbcShape1286.around.y);
ctx.beginPath();
ctx.rect(bbcShape1286.point.x, bbcShape1286.point.y, bbcShape1286.size.width, bbcShape1286.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1287.around.x, bbcShape1287.around.y);
ctx.rotate(bbcShape1287.rotation * Math.PI / 180);
ctx.translate(-bbcShape1287.around.x, -bbcShape1287.around.y);
ctx.beginPath();
ctx.rect(bbcShape1287.point.x, bbcShape1287.point.y, bbcShape1287.size.width, bbcShape1287.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1288.around.x, bbcShape1288.around.y);
ctx.rotate(bbcShape1288.rotation * Math.PI / 180);
ctx.translate(-bbcShape1288.around.x, -bbcShape1288.around.y);
ctx.beginPath();
ctx.rect(bbcShape1288.point.x, bbcShape1288.point.y, bbcShape1288.size.width, bbcShape1288.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1289.around.x, bbcShape1289.around.y);
ctx.rotate(bbcShape1289.rotation * Math.PI / 180);
ctx.translate(-bbcShape1289.around.x, -bbcShape1289.around.y);
ctx.beginPath();
ctx.rect(bbcShape1289.point.x, bbcShape1289.point.y, bbcShape1289.size.width, bbcShape1289.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1290.around.x, bbcShape1290.around.y);
ctx.rotate(bbcShape1290.rotation * Math.PI / 180);
ctx.translate(-bbcShape1290.around.x, -bbcShape1290.around.y);
ctx.beginPath();
ctx.rect(bbcShape1290.point.x, bbcShape1290.point.y, bbcShape1290.size.width, bbcShape1290.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1291.around.x, bbcShape1291.around.y);
ctx.rotate(bbcShape1291.rotation * Math.PI / 180);
ctx.translate(-bbcShape1291.around.x, -bbcShape1291.around.y);
ctx.beginPath();
ctx.rect(bbcShape1291.point.x, bbcShape1291.point.y, bbcShape1291.size.width, bbcShape1291.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1292.around.x, bbcShape1292.around.y);
ctx.rotate(bbcShape1292.rotation * Math.PI / 180);
ctx.translate(-bbcShape1292.around.x, -bbcShape1292.around.y);
ctx.beginPath();
ctx.rect(bbcShape1292.point.x, bbcShape1292.point.y, bbcShape1292.size.width, bbcShape1292.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1293.around.x, bbcShape1293.around.y);
ctx.rotate(bbcShape1293.rotation * Math.PI / 180);
ctx.translate(-bbcShape1293.around.x, -bbcShape1293.around.y);
ctx.beginPath();
ctx.rect(bbcShape1293.point.x, bbcShape1293.point.y, bbcShape1293.size.width, bbcShape1293.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 325.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1294.around.x, bbcShape1294.around.y);
ctx.rotate(bbcShape1294.rotation * Math.PI / 180);
ctx.translate(-bbcShape1294.around.x, -bbcShape1294.around.y);
ctx.beginPath();
ctx.rect(bbcShape1294.point.x, bbcShape1294.point.y, bbcShape1294.size.width, bbcShape1294.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(350.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1295.around.x, bbcShape1295.around.y);
ctx.rotate(bbcShape1295.rotation * Math.PI / 180);
ctx.translate(-bbcShape1295.around.x, -bbcShape1295.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1295.points[0][0], bbcShape1295.points[0][1]);
ctx.lineTo(bbcShape1295.points[1][0], bbcShape1295.points[1][1]);
ctx.lineTo(bbcShape1295.points[2][0], bbcShape1295.points[2][1]);
ctx.lineTo(bbcShape1295.points[3][0], bbcShape1295.points[3][1]);
ctx.lineTo(bbcShape1295.points[4][0], bbcShape1295.points[4][1]);
ctx.lineTo(bbcShape1295.points[5][0], bbcShape1295.points[5][1]);
ctx.lineTo(bbcShape1295.points[6][0], bbcShape1295.points[6][1]);
ctx.lineTo(bbcShape1295.points[7][0], bbcShape1295.points[7][1]);
ctx.lineTo(bbcShape1295.points[8][0], bbcShape1295.points[8][1]);
ctx.lineTo(bbcShape1295.points[9][0], bbcShape1295.points[9][1]);
ctx.lineTo(bbcShape1295.points[10][0], bbcShape1295.points[10][1]);
ctx.lineTo(bbcShape1295.points[11][0], bbcShape1295.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1296.around.x, bbcShape1296.around.y);
ctx.rotate(bbcShape1296.rotation * Math.PI / 180);
ctx.translate(-bbcShape1296.around.x, -bbcShape1296.around.y);
ctx.beginPath();
ctx.rect(bbcShape1296.point.x, bbcShape1296.point.y, bbcShape1296.size.width, bbcShape1296.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1297.around.x, bbcShape1297.around.y);
ctx.rotate(bbcShape1297.rotation * Math.PI / 180);
ctx.translate(-bbcShape1297.around.x, -bbcShape1297.around.y);
ctx.beginPath();
ctx.rect(bbcShape1297.point.x, bbcShape1297.point.y, bbcShape1297.size.width, bbcShape1297.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1298.around.x, bbcShape1298.around.y);
ctx.rotate(bbcShape1298.rotation * Math.PI / 180);
ctx.translate(-bbcShape1298.around.x, -bbcShape1298.around.y);
ctx.beginPath();
ctx.rect(bbcShape1298.point.x, bbcShape1298.point.y, bbcShape1298.size.width, bbcShape1298.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1299.around.x, bbcShape1299.around.y);
ctx.rotate(bbcShape1299.rotation * Math.PI / 180);
ctx.translate(-bbcShape1299.around.x, -bbcShape1299.around.y);
ctx.beginPath();
ctx.rect(bbcShape1299.point.x, bbcShape1299.point.y, bbcShape1299.size.width, bbcShape1299.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1300.around.x, bbcShape1300.around.y);
ctx.rotate(bbcShape1300.rotation * Math.PI / 180);
ctx.translate(-bbcShape1300.around.x, -bbcShape1300.around.y);
ctx.beginPath();
ctx.rect(bbcShape1300.point.x, bbcShape1300.point.y, bbcShape1300.size.width, bbcShape1300.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1301.around.x, bbcShape1301.around.y);
ctx.rotate(bbcShape1301.rotation * Math.PI / 180);
ctx.translate(-bbcShape1301.around.x, -bbcShape1301.around.y);
ctx.beginPath();
ctx.rect(bbcShape1301.point.x, bbcShape1301.point.y, bbcShape1301.size.width, bbcShape1301.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1302.around.x, bbcShape1302.around.y);
ctx.rotate(bbcShape1302.rotation * Math.PI / 180);
ctx.translate(-bbcShape1302.around.x, -bbcShape1302.around.y);
ctx.beginPath();
ctx.rect(bbcShape1302.point.x, bbcShape1302.point.y, bbcShape1302.size.width, bbcShape1302.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1303.around.x, bbcShape1303.around.y);
ctx.rotate(bbcShape1303.rotation * Math.PI / 180);
ctx.translate(-bbcShape1303.around.x, -bbcShape1303.around.y);
ctx.beginPath();
ctx.rect(bbcShape1303.point.x, bbcShape1303.point.y, bbcShape1303.size.width, bbcShape1303.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1304.around.x, bbcShape1304.around.y);
ctx.rotate(bbcShape1304.rotation * Math.PI / 180);
ctx.translate(-bbcShape1304.around.x, -bbcShape1304.around.y);
ctx.beginPath();
ctx.rect(bbcShape1304.point.x, bbcShape1304.point.y, bbcShape1304.size.width, bbcShape1304.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1305.around.x, bbcShape1305.around.y);
ctx.rotate(bbcShape1305.rotation * Math.PI / 180);
ctx.translate(-bbcShape1305.around.x, -bbcShape1305.around.y);
ctx.beginPath();
ctx.rect(bbcShape1305.point.x, bbcShape1305.point.y, bbcShape1305.size.width, bbcShape1305.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1306.around.x, bbcShape1306.around.y);
ctx.rotate(bbcShape1306.rotation * Math.PI / 180);
ctx.translate(-bbcShape1306.around.x, -bbcShape1306.around.y);
ctx.beginPath();
ctx.rect(bbcShape1306.point.x, bbcShape1306.point.y, bbcShape1306.size.width, bbcShape1306.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1307.around.x, bbcShape1307.around.y);
ctx.rotate(bbcShape1307.rotation * Math.PI / 180);
ctx.translate(-bbcShape1307.around.x, -bbcShape1307.around.y);
ctx.beginPath();
ctx.rect(bbcShape1307.point.x, bbcShape1307.point.y, bbcShape1307.size.width, bbcShape1307.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1308.around.x, bbcShape1308.around.y);
ctx.rotate(bbcShape1308.rotation * Math.PI / 180);
ctx.translate(-bbcShape1308.around.x, -bbcShape1308.around.y);
ctx.beginPath();
ctx.rect(bbcShape1308.point.x, bbcShape1308.point.y, bbcShape1308.size.width, bbcShape1308.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1309.around.x, bbcShape1309.around.y);
ctx.rotate(bbcShape1309.rotation * Math.PI / 180);
ctx.translate(-bbcShape1309.around.x, -bbcShape1309.around.y);
ctx.beginPath();
ctx.rect(bbcShape1309.point.x, bbcShape1309.point.y, bbcShape1309.size.width, bbcShape1309.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1310.around.x, bbcShape1310.around.y);
ctx.rotate(bbcShape1310.rotation * Math.PI / 180);
ctx.translate(-bbcShape1310.around.x, -bbcShape1310.around.y);
ctx.beginPath();
ctx.rect(bbcShape1310.point.x, bbcShape1310.point.y, bbcShape1310.size.width, bbcShape1310.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1311.around.x, bbcShape1311.around.y);
ctx.rotate(bbcShape1311.rotation * Math.PI / 180);
ctx.translate(-bbcShape1311.around.x, -bbcShape1311.around.y);
ctx.beginPath();
ctx.rect(bbcShape1311.point.x, bbcShape1311.point.y, bbcShape1311.size.width, bbcShape1311.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1312.around.x, bbcShape1312.around.y);
ctx.rotate(bbcShape1312.rotation * Math.PI / 180);
ctx.translate(-bbcShape1312.around.x, -bbcShape1312.around.y);
ctx.beginPath();
ctx.rect(bbcShape1312.point.x, bbcShape1312.point.y, bbcShape1312.size.width, bbcShape1312.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1313.around.x, bbcShape1313.around.y);
ctx.rotate(bbcShape1313.rotation * Math.PI / 180);
ctx.translate(-bbcShape1313.around.x, -bbcShape1313.around.y);
ctx.beginPath();
ctx.rect(bbcShape1313.point.x, bbcShape1313.point.y, bbcShape1313.size.width, bbcShape1313.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1314.around.x, bbcShape1314.around.y);
ctx.rotate(bbcShape1314.rotation * Math.PI / 180);
ctx.translate(-bbcShape1314.around.x, -bbcShape1314.around.y);
ctx.beginPath();
ctx.rect(bbcShape1314.point.x, bbcShape1314.point.y, bbcShape1314.size.width, bbcShape1314.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 350.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1315.around.x, bbcShape1315.around.y);
ctx.rotate(bbcShape1315.rotation * Math.PI / 180);
ctx.translate(-bbcShape1315.around.x, -bbcShape1315.around.y);
ctx.beginPath();
ctx.rect(bbcShape1315.point.x, bbcShape1315.point.y, bbcShape1315.size.width, bbcShape1315.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(375.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1316.around.x, bbcShape1316.around.y);
ctx.rotate(bbcShape1316.rotation * Math.PI / 180);
ctx.translate(-bbcShape1316.around.x, -bbcShape1316.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1316.points[0][0], bbcShape1316.points[0][1]);
ctx.lineTo(bbcShape1316.points[1][0], bbcShape1316.points[1][1]);
ctx.lineTo(bbcShape1316.points[2][0], bbcShape1316.points[2][1]);
ctx.lineTo(bbcShape1316.points[3][0], bbcShape1316.points[3][1]);
ctx.lineTo(bbcShape1316.points[4][0], bbcShape1316.points[4][1]);
ctx.lineTo(bbcShape1316.points[5][0], bbcShape1316.points[5][1]);
ctx.lineTo(bbcShape1316.points[6][0], bbcShape1316.points[6][1]);
ctx.lineTo(bbcShape1316.points[7][0], bbcShape1316.points[7][1]);
ctx.lineTo(bbcShape1316.points[8][0], bbcShape1316.points[8][1]);
ctx.lineTo(bbcShape1316.points[9][0], bbcShape1316.points[9][1]);
ctx.lineTo(bbcShape1316.points[10][0], bbcShape1316.points[10][1]);
ctx.lineTo(bbcShape1316.points[11][0], bbcShape1316.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1317.around.x, bbcShape1317.around.y);
ctx.rotate(bbcShape1317.rotation * Math.PI / 180);
ctx.translate(-bbcShape1317.around.x, -bbcShape1317.around.y);
ctx.beginPath();
ctx.rect(bbcShape1317.point.x, bbcShape1317.point.y, bbcShape1317.size.width, bbcShape1317.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1318.around.x, bbcShape1318.around.y);
ctx.rotate(bbcShape1318.rotation * Math.PI / 180);
ctx.translate(-bbcShape1318.around.x, -bbcShape1318.around.y);
ctx.beginPath();
ctx.rect(bbcShape1318.point.x, bbcShape1318.point.y, bbcShape1318.size.width, bbcShape1318.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1319.around.x, bbcShape1319.around.y);
ctx.rotate(bbcShape1319.rotation * Math.PI / 180);
ctx.translate(-bbcShape1319.around.x, -bbcShape1319.around.y);
ctx.beginPath();
ctx.rect(bbcShape1319.point.x, bbcShape1319.point.y, bbcShape1319.size.width, bbcShape1319.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1320.around.x, bbcShape1320.around.y);
ctx.rotate(bbcShape1320.rotation * Math.PI / 180);
ctx.translate(-bbcShape1320.around.x, -bbcShape1320.around.y);
ctx.beginPath();
ctx.rect(bbcShape1320.point.x, bbcShape1320.point.y, bbcShape1320.size.width, bbcShape1320.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1321.around.x, bbcShape1321.around.y);
ctx.rotate(bbcShape1321.rotation * Math.PI / 180);
ctx.translate(-bbcShape1321.around.x, -bbcShape1321.around.y);
ctx.beginPath();
ctx.rect(bbcShape1321.point.x, bbcShape1321.point.y, bbcShape1321.size.width, bbcShape1321.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1322.around.x, bbcShape1322.around.y);
ctx.rotate(bbcShape1322.rotation * Math.PI / 180);
ctx.translate(-bbcShape1322.around.x, -bbcShape1322.around.y);
ctx.beginPath();
ctx.rect(bbcShape1322.point.x, bbcShape1322.point.y, bbcShape1322.size.width, bbcShape1322.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1323.around.x, bbcShape1323.around.y);
ctx.rotate(bbcShape1323.rotation * Math.PI / 180);
ctx.translate(-bbcShape1323.around.x, -bbcShape1323.around.y);
ctx.beginPath();
ctx.rect(bbcShape1323.point.x, bbcShape1323.point.y, bbcShape1323.size.width, bbcShape1323.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1324.around.x, bbcShape1324.around.y);
ctx.rotate(bbcShape1324.rotation * Math.PI / 180);
ctx.translate(-bbcShape1324.around.x, -bbcShape1324.around.y);
ctx.beginPath();
ctx.rect(bbcShape1324.point.x, bbcShape1324.point.y, bbcShape1324.size.width, bbcShape1324.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1325.around.x, bbcShape1325.around.y);
ctx.rotate(bbcShape1325.rotation * Math.PI / 180);
ctx.translate(-bbcShape1325.around.x, -bbcShape1325.around.y);
ctx.beginPath();
ctx.rect(bbcShape1325.point.x, bbcShape1325.point.y, bbcShape1325.size.width, bbcShape1325.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1326.around.x, bbcShape1326.around.y);
ctx.rotate(bbcShape1326.rotation * Math.PI / 180);
ctx.translate(-bbcShape1326.around.x, -bbcShape1326.around.y);
ctx.beginPath();
ctx.rect(bbcShape1326.point.x, bbcShape1326.point.y, bbcShape1326.size.width, bbcShape1326.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1327.around.x, bbcShape1327.around.y);
ctx.rotate(bbcShape1327.rotation * Math.PI / 180);
ctx.translate(-bbcShape1327.around.x, -bbcShape1327.around.y);
ctx.beginPath();
ctx.rect(bbcShape1327.point.x, bbcShape1327.point.y, bbcShape1327.size.width, bbcShape1327.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1328.around.x, bbcShape1328.around.y);
ctx.rotate(bbcShape1328.rotation * Math.PI / 180);
ctx.translate(-bbcShape1328.around.x, -bbcShape1328.around.y);
ctx.beginPath();
ctx.rect(bbcShape1328.point.x, bbcShape1328.point.y, bbcShape1328.size.width, bbcShape1328.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1329.around.x, bbcShape1329.around.y);
ctx.rotate(bbcShape1329.rotation * Math.PI / 180);
ctx.translate(-bbcShape1329.around.x, -bbcShape1329.around.y);
ctx.beginPath();
ctx.rect(bbcShape1329.point.x, bbcShape1329.point.y, bbcShape1329.size.width, bbcShape1329.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1330.around.x, bbcShape1330.around.y);
ctx.rotate(bbcShape1330.rotation * Math.PI / 180);
ctx.translate(-bbcShape1330.around.x, -bbcShape1330.around.y);
ctx.beginPath();
ctx.rect(bbcShape1330.point.x, bbcShape1330.point.y, bbcShape1330.size.width, bbcShape1330.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1331.around.x, bbcShape1331.around.y);
ctx.rotate(bbcShape1331.rotation * Math.PI / 180);
ctx.translate(-bbcShape1331.around.x, -bbcShape1331.around.y);
ctx.beginPath();
ctx.rect(bbcShape1331.point.x, bbcShape1331.point.y, bbcShape1331.size.width, bbcShape1331.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1332.around.x, bbcShape1332.around.y);
ctx.rotate(bbcShape1332.rotation * Math.PI / 180);
ctx.translate(-bbcShape1332.around.x, -bbcShape1332.around.y);
ctx.beginPath();
ctx.rect(bbcShape1332.point.x, bbcShape1332.point.y, bbcShape1332.size.width, bbcShape1332.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1333.around.x, bbcShape1333.around.y);
ctx.rotate(bbcShape1333.rotation * Math.PI / 180);
ctx.translate(-bbcShape1333.around.x, -bbcShape1333.around.y);
ctx.beginPath();
ctx.rect(bbcShape1333.point.x, bbcShape1333.point.y, bbcShape1333.size.width, bbcShape1333.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1334.around.x, bbcShape1334.around.y);
ctx.rotate(bbcShape1334.rotation * Math.PI / 180);
ctx.translate(-bbcShape1334.around.x, -bbcShape1334.around.y);
ctx.beginPath();
ctx.rect(bbcShape1334.point.x, bbcShape1334.point.y, bbcShape1334.size.width, bbcShape1334.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1335.around.x, bbcShape1335.around.y);
ctx.rotate(bbcShape1335.rotation * Math.PI / 180);
ctx.translate(-bbcShape1335.around.x, -bbcShape1335.around.y);
ctx.beginPath();
ctx.rect(bbcShape1335.point.x, bbcShape1335.point.y, bbcShape1335.size.width, bbcShape1335.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 375.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1336.around.x, bbcShape1336.around.y);
ctx.rotate(bbcShape1336.rotation * Math.PI / 180);
ctx.translate(-bbcShape1336.around.x, -bbcShape1336.around.y);
ctx.beginPath();
ctx.rect(bbcShape1336.point.x, bbcShape1336.point.y, bbcShape1336.size.width, bbcShape1336.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(400.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1337.around.x, bbcShape1337.around.y);
ctx.rotate(bbcShape1337.rotation * Math.PI / 180);
ctx.translate(-bbcShape1337.around.x, -bbcShape1337.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1337.points[0][0], bbcShape1337.points[0][1]);
ctx.lineTo(bbcShape1337.points[1][0], bbcShape1337.points[1][1]);
ctx.lineTo(bbcShape1337.points[2][0], bbcShape1337.points[2][1]);
ctx.lineTo(bbcShape1337.points[3][0], bbcShape1337.points[3][1]);
ctx.lineTo(bbcShape1337.points[4][0], bbcShape1337.points[4][1]);
ctx.lineTo(bbcShape1337.points[5][0], bbcShape1337.points[5][1]);
ctx.lineTo(bbcShape1337.points[6][0], bbcShape1337.points[6][1]);
ctx.lineTo(bbcShape1337.points[7][0], bbcShape1337.points[7][1]);
ctx.lineTo(bbcShape1337.points[8][0], bbcShape1337.points[8][1]);
ctx.lineTo(bbcShape1337.points[9][0], bbcShape1337.points[9][1]);
ctx.lineTo(bbcShape1337.points[10][0], bbcShape1337.points[10][1]);
ctx.lineTo(bbcShape1337.points[11][0], bbcShape1337.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1338.around.x, bbcShape1338.around.y);
ctx.rotate(bbcShape1338.rotation * Math.PI / 180);
ctx.translate(-bbcShape1338.around.x, -bbcShape1338.around.y);
ctx.beginPath();
ctx.rect(bbcShape1338.point.x, bbcShape1338.point.y, bbcShape1338.size.width, bbcShape1338.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1339.around.x, bbcShape1339.around.y);
ctx.rotate(bbcShape1339.rotation * Math.PI / 180);
ctx.translate(-bbcShape1339.around.x, -bbcShape1339.around.y);
ctx.beginPath();
ctx.rect(bbcShape1339.point.x, bbcShape1339.point.y, bbcShape1339.size.width, bbcShape1339.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1340.around.x, bbcShape1340.around.y);
ctx.rotate(bbcShape1340.rotation * Math.PI / 180);
ctx.translate(-bbcShape1340.around.x, -bbcShape1340.around.y);
ctx.beginPath();
ctx.rect(bbcShape1340.point.x, bbcShape1340.point.y, bbcShape1340.size.width, bbcShape1340.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1341.around.x, bbcShape1341.around.y);
ctx.rotate(bbcShape1341.rotation * Math.PI / 180);
ctx.translate(-bbcShape1341.around.x, -bbcShape1341.around.y);
ctx.beginPath();
ctx.rect(bbcShape1341.point.x, bbcShape1341.point.y, bbcShape1341.size.width, bbcShape1341.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1342.around.x, bbcShape1342.around.y);
ctx.rotate(bbcShape1342.rotation * Math.PI / 180);
ctx.translate(-bbcShape1342.around.x, -bbcShape1342.around.y);
ctx.beginPath();
ctx.rect(bbcShape1342.point.x, bbcShape1342.point.y, bbcShape1342.size.width, bbcShape1342.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1343.around.x, bbcShape1343.around.y);
ctx.rotate(bbcShape1343.rotation * Math.PI / 180);
ctx.translate(-bbcShape1343.around.x, -bbcShape1343.around.y);
ctx.beginPath();
ctx.rect(bbcShape1343.point.x, bbcShape1343.point.y, bbcShape1343.size.width, bbcShape1343.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1344.around.x, bbcShape1344.around.y);
ctx.rotate(bbcShape1344.rotation * Math.PI / 180);
ctx.translate(-bbcShape1344.around.x, -bbcShape1344.around.y);
ctx.beginPath();
ctx.rect(bbcShape1344.point.x, bbcShape1344.point.y, bbcShape1344.size.width, bbcShape1344.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1345.around.x, bbcShape1345.around.y);
ctx.rotate(bbcShape1345.rotation * Math.PI / 180);
ctx.translate(-bbcShape1345.around.x, -bbcShape1345.around.y);
ctx.beginPath();
ctx.rect(bbcShape1345.point.x, bbcShape1345.point.y, bbcShape1345.size.width, bbcShape1345.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1346.around.x, bbcShape1346.around.y);
ctx.rotate(bbcShape1346.rotation * Math.PI / 180);
ctx.translate(-bbcShape1346.around.x, -bbcShape1346.around.y);
ctx.beginPath();
ctx.rect(bbcShape1346.point.x, bbcShape1346.point.y, bbcShape1346.size.width, bbcShape1346.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1347.around.x, bbcShape1347.around.y);
ctx.rotate(bbcShape1347.rotation * Math.PI / 180);
ctx.translate(-bbcShape1347.around.x, -bbcShape1347.around.y);
ctx.beginPath();
ctx.rect(bbcShape1347.point.x, bbcShape1347.point.y, bbcShape1347.size.width, bbcShape1347.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1348.around.x, bbcShape1348.around.y);
ctx.rotate(bbcShape1348.rotation * Math.PI / 180);
ctx.translate(-bbcShape1348.around.x, -bbcShape1348.around.y);
ctx.beginPath();
ctx.rect(bbcShape1348.point.x, bbcShape1348.point.y, bbcShape1348.size.width, bbcShape1348.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1349.around.x, bbcShape1349.around.y);
ctx.rotate(bbcShape1349.rotation * Math.PI / 180);
ctx.translate(-bbcShape1349.around.x, -bbcShape1349.around.y);
ctx.beginPath();
ctx.rect(bbcShape1349.point.x, bbcShape1349.point.y, bbcShape1349.size.width, bbcShape1349.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1350.around.x, bbcShape1350.around.y);
ctx.rotate(bbcShape1350.rotation * Math.PI / 180);
ctx.translate(-bbcShape1350.around.x, -bbcShape1350.around.y);
ctx.beginPath();
ctx.rect(bbcShape1350.point.x, bbcShape1350.point.y, bbcShape1350.size.width, bbcShape1350.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1351.around.x, bbcShape1351.around.y);
ctx.rotate(bbcShape1351.rotation * Math.PI / 180);
ctx.translate(-bbcShape1351.around.x, -bbcShape1351.around.y);
ctx.beginPath();
ctx.rect(bbcShape1351.point.x, bbcShape1351.point.y, bbcShape1351.size.width, bbcShape1351.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1352.around.x, bbcShape1352.around.y);
ctx.rotate(bbcShape1352.rotation * Math.PI / 180);
ctx.translate(-bbcShape1352.around.x, -bbcShape1352.around.y);
ctx.beginPath();
ctx.rect(bbcShape1352.point.x, bbcShape1352.point.y, bbcShape1352.size.width, bbcShape1352.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1353.around.x, bbcShape1353.around.y);
ctx.rotate(bbcShape1353.rotation * Math.PI / 180);
ctx.translate(-bbcShape1353.around.x, -bbcShape1353.around.y);
ctx.beginPath();
ctx.rect(bbcShape1353.point.x, bbcShape1353.point.y, bbcShape1353.size.width, bbcShape1353.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1354.around.x, bbcShape1354.around.y);
ctx.rotate(bbcShape1354.rotation * Math.PI / 180);
ctx.translate(-bbcShape1354.around.x, -bbcShape1354.around.y);
ctx.beginPath();
ctx.rect(bbcShape1354.point.x, bbcShape1354.point.y, bbcShape1354.size.width, bbcShape1354.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1355.around.x, bbcShape1355.around.y);
ctx.rotate(bbcShape1355.rotation * Math.PI / 180);
ctx.translate(-bbcShape1355.around.x, -bbcShape1355.around.y);
ctx.beginPath();
ctx.rect(bbcShape1355.point.x, bbcShape1355.point.y, bbcShape1355.size.width, bbcShape1355.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1356.around.x, bbcShape1356.around.y);
ctx.rotate(bbcShape1356.rotation * Math.PI / 180);
ctx.translate(-bbcShape1356.around.x, -bbcShape1356.around.y);
ctx.beginPath();
ctx.rect(bbcShape1356.point.x, bbcShape1356.point.y, bbcShape1356.size.width, bbcShape1356.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 400.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1357.around.x, bbcShape1357.around.y);
ctx.rotate(bbcShape1357.rotation * Math.PI / 180);
ctx.translate(-bbcShape1357.around.x, -bbcShape1357.around.y);
ctx.beginPath();
ctx.rect(bbcShape1357.point.x, bbcShape1357.point.y, bbcShape1357.size.width, bbcShape1357.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(425.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1358.around.x, bbcShape1358.around.y);
ctx.rotate(bbcShape1358.rotation * Math.PI / 180);
ctx.translate(-bbcShape1358.around.x, -bbcShape1358.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1358.points[0][0], bbcShape1358.points[0][1]);
ctx.lineTo(bbcShape1358.points[1][0], bbcShape1358.points[1][1]);
ctx.lineTo(bbcShape1358.points[2][0], bbcShape1358.points[2][1]);
ctx.lineTo(bbcShape1358.points[3][0], bbcShape1358.points[3][1]);
ctx.lineTo(bbcShape1358.points[4][0], bbcShape1358.points[4][1]);
ctx.lineTo(bbcShape1358.points[5][0], bbcShape1358.points[5][1]);
ctx.lineTo(bbcShape1358.points[6][0], bbcShape1358.points[6][1]);
ctx.lineTo(bbcShape1358.points[7][0], bbcShape1358.points[7][1]);
ctx.lineTo(bbcShape1358.points[8][0], bbcShape1358.points[8][1]);
ctx.lineTo(bbcShape1358.points[9][0], bbcShape1358.points[9][1]);
ctx.lineTo(bbcShape1358.points[10][0], bbcShape1358.points[10][1]);
ctx.lineTo(bbcShape1358.points[11][0], bbcShape1358.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1359.around.x, bbcShape1359.around.y);
ctx.rotate(bbcShape1359.rotation * Math.PI / 180);
ctx.translate(-bbcShape1359.around.x, -bbcShape1359.around.y);
ctx.beginPath();
ctx.rect(bbcShape1359.point.x, bbcShape1359.point.y, bbcShape1359.size.width, bbcShape1359.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1360.around.x, bbcShape1360.around.y);
ctx.rotate(bbcShape1360.rotation * Math.PI / 180);
ctx.translate(-bbcShape1360.around.x, -bbcShape1360.around.y);
ctx.beginPath();
ctx.rect(bbcShape1360.point.x, bbcShape1360.point.y, bbcShape1360.size.width, bbcShape1360.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1361.around.x, bbcShape1361.around.y);
ctx.rotate(bbcShape1361.rotation * Math.PI / 180);
ctx.translate(-bbcShape1361.around.x, -bbcShape1361.around.y);
ctx.beginPath();
ctx.rect(bbcShape1361.point.x, bbcShape1361.point.y, bbcShape1361.size.width, bbcShape1361.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1362.around.x, bbcShape1362.around.y);
ctx.rotate(bbcShape1362.rotation * Math.PI / 180);
ctx.translate(-bbcShape1362.around.x, -bbcShape1362.around.y);
ctx.beginPath();
ctx.rect(bbcShape1362.point.x, bbcShape1362.point.y, bbcShape1362.size.width, bbcShape1362.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1363.around.x, bbcShape1363.around.y);
ctx.rotate(bbcShape1363.rotation * Math.PI / 180);
ctx.translate(-bbcShape1363.around.x, -bbcShape1363.around.y);
ctx.beginPath();
ctx.rect(bbcShape1363.point.x, bbcShape1363.point.y, bbcShape1363.size.width, bbcShape1363.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1364.around.x, bbcShape1364.around.y);
ctx.rotate(bbcShape1364.rotation * Math.PI / 180);
ctx.translate(-bbcShape1364.around.x, -bbcShape1364.around.y);
ctx.beginPath();
ctx.rect(bbcShape1364.point.x, bbcShape1364.point.y, bbcShape1364.size.width, bbcShape1364.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1365.around.x, bbcShape1365.around.y);
ctx.rotate(bbcShape1365.rotation * Math.PI / 180);
ctx.translate(-bbcShape1365.around.x, -bbcShape1365.around.y);
ctx.beginPath();
ctx.rect(bbcShape1365.point.x, bbcShape1365.point.y, bbcShape1365.size.width, bbcShape1365.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1366.around.x, bbcShape1366.around.y);
ctx.rotate(bbcShape1366.rotation * Math.PI / 180);
ctx.translate(-bbcShape1366.around.x, -bbcShape1366.around.y);
ctx.beginPath();
ctx.rect(bbcShape1366.point.x, bbcShape1366.point.y, bbcShape1366.size.width, bbcShape1366.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1367.around.x, bbcShape1367.around.y);
ctx.rotate(bbcShape1367.rotation * Math.PI / 180);
ctx.translate(-bbcShape1367.around.x, -bbcShape1367.around.y);
ctx.beginPath();
ctx.rect(bbcShape1367.point.x, bbcShape1367.point.y, bbcShape1367.size.width, bbcShape1367.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1368.around.x, bbcShape1368.around.y);
ctx.rotate(bbcShape1368.rotation * Math.PI / 180);
ctx.translate(-bbcShape1368.around.x, -bbcShape1368.around.y);
ctx.beginPath();
ctx.rect(bbcShape1368.point.x, bbcShape1368.point.y, bbcShape1368.size.width, bbcShape1368.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1369.around.x, bbcShape1369.around.y);
ctx.rotate(bbcShape1369.rotation * Math.PI / 180);
ctx.translate(-bbcShape1369.around.x, -bbcShape1369.around.y);
ctx.beginPath();
ctx.rect(bbcShape1369.point.x, bbcShape1369.point.y, bbcShape1369.size.width, bbcShape1369.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1370.around.x, bbcShape1370.around.y);
ctx.rotate(bbcShape1370.rotation * Math.PI / 180);
ctx.translate(-bbcShape1370.around.x, -bbcShape1370.around.y);
ctx.beginPath();
ctx.rect(bbcShape1370.point.x, bbcShape1370.point.y, bbcShape1370.size.width, bbcShape1370.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1371.around.x, bbcShape1371.around.y);
ctx.rotate(bbcShape1371.rotation * Math.PI / 180);
ctx.translate(-bbcShape1371.around.x, -bbcShape1371.around.y);
ctx.beginPath();
ctx.rect(bbcShape1371.point.x, bbcShape1371.point.y, bbcShape1371.size.width, bbcShape1371.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1372.around.x, bbcShape1372.around.y);
ctx.rotate(bbcShape1372.rotation * Math.PI / 180);
ctx.translate(-bbcShape1372.around.x, -bbcShape1372.around.y);
ctx.beginPath();
ctx.rect(bbcShape1372.point.x, bbcShape1372.point.y, bbcShape1372.size.width, bbcShape1372.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1373.around.x, bbcShape1373.around.y);
ctx.rotate(bbcShape1373.rotation * Math.PI / 180);
ctx.translate(-bbcShape1373.around.x, -bbcShape1373.around.y);
ctx.beginPath();
ctx.rect(bbcShape1373.point.x, bbcShape1373.point.y, bbcShape1373.size.width, bbcShape1373.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1374.around.x, bbcShape1374.around.y);
ctx.rotate(bbcShape1374.rotation * Math.PI / 180);
ctx.translate(-bbcShape1374.around.x, -bbcShape1374.around.y);
ctx.beginPath();
ctx.rect(bbcShape1374.point.x, bbcShape1374.point.y, bbcShape1374.size.width, bbcShape1374.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1375.around.x, bbcShape1375.around.y);
ctx.rotate(bbcShape1375.rotation * Math.PI / 180);
ctx.translate(-bbcShape1375.around.x, -bbcShape1375.around.y);
ctx.beginPath();
ctx.rect(bbcShape1375.point.x, bbcShape1375.point.y, bbcShape1375.size.width, bbcShape1375.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1376.around.x, bbcShape1376.around.y);
ctx.rotate(bbcShape1376.rotation * Math.PI / 180);
ctx.translate(-bbcShape1376.around.x, -bbcShape1376.around.y);
ctx.beginPath();
ctx.rect(bbcShape1376.point.x, bbcShape1376.point.y, bbcShape1376.size.width, bbcShape1376.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1377.around.x, bbcShape1377.around.y);
ctx.rotate(bbcShape1377.rotation * Math.PI / 180);
ctx.translate(-bbcShape1377.around.x, -bbcShape1377.around.y);
ctx.beginPath();
ctx.rect(bbcShape1377.point.x, bbcShape1377.point.y, bbcShape1377.size.width, bbcShape1377.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 425.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1378.around.x, bbcShape1378.around.y);
ctx.rotate(bbcShape1378.rotation * Math.PI / 180);
ctx.translate(-bbcShape1378.around.x, -bbcShape1378.around.y);
ctx.beginPath();
ctx.rect(bbcShape1378.point.x, bbcShape1378.point.y, bbcShape1378.size.width, bbcShape1378.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(450.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1379.around.x, bbcShape1379.around.y);
ctx.rotate(bbcShape1379.rotation * Math.PI / 180);
ctx.translate(-bbcShape1379.around.x, -bbcShape1379.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1379.points[0][0], bbcShape1379.points[0][1]);
ctx.lineTo(bbcShape1379.points[1][0], bbcShape1379.points[1][1]);
ctx.lineTo(bbcShape1379.points[2][0], bbcShape1379.points[2][1]);
ctx.lineTo(bbcShape1379.points[3][0], bbcShape1379.points[3][1]);
ctx.lineTo(bbcShape1379.points[4][0], bbcShape1379.points[4][1]);
ctx.lineTo(bbcShape1379.points[5][0], bbcShape1379.points[5][1]);
ctx.lineTo(bbcShape1379.points[6][0], bbcShape1379.points[6][1]);
ctx.lineTo(bbcShape1379.points[7][0], bbcShape1379.points[7][1]);
ctx.lineTo(bbcShape1379.points[8][0], bbcShape1379.points[8][1]);
ctx.lineTo(bbcShape1379.points[9][0], bbcShape1379.points[9][1]);
ctx.lineTo(bbcShape1379.points[10][0], bbcShape1379.points[10][1]);
ctx.lineTo(bbcShape1379.points[11][0], bbcShape1379.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1380.around.x, bbcShape1380.around.y);
ctx.rotate(bbcShape1380.rotation * Math.PI / 180);
ctx.translate(-bbcShape1380.around.x, -bbcShape1380.around.y);
ctx.beginPath();
ctx.rect(bbcShape1380.point.x, bbcShape1380.point.y, bbcShape1380.size.width, bbcShape1380.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1381.around.x, bbcShape1381.around.y);
ctx.rotate(bbcShape1381.rotation * Math.PI / 180);
ctx.translate(-bbcShape1381.around.x, -bbcShape1381.around.y);
ctx.beginPath();
ctx.rect(bbcShape1381.point.x, bbcShape1381.point.y, bbcShape1381.size.width, bbcShape1381.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1382.around.x, bbcShape1382.around.y);
ctx.rotate(bbcShape1382.rotation * Math.PI / 180);
ctx.translate(-bbcShape1382.around.x, -bbcShape1382.around.y);
ctx.beginPath();
ctx.rect(bbcShape1382.point.x, bbcShape1382.point.y, bbcShape1382.size.width, bbcShape1382.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1383.around.x, bbcShape1383.around.y);
ctx.rotate(bbcShape1383.rotation * Math.PI / 180);
ctx.translate(-bbcShape1383.around.x, -bbcShape1383.around.y);
ctx.beginPath();
ctx.rect(bbcShape1383.point.x, bbcShape1383.point.y, bbcShape1383.size.width, bbcShape1383.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1384.around.x, bbcShape1384.around.y);
ctx.rotate(bbcShape1384.rotation * Math.PI / 180);
ctx.translate(-bbcShape1384.around.x, -bbcShape1384.around.y);
ctx.beginPath();
ctx.rect(bbcShape1384.point.x, bbcShape1384.point.y, bbcShape1384.size.width, bbcShape1384.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1385.around.x, bbcShape1385.around.y);
ctx.rotate(bbcShape1385.rotation * Math.PI / 180);
ctx.translate(-bbcShape1385.around.x, -bbcShape1385.around.y);
ctx.beginPath();
ctx.rect(bbcShape1385.point.x, bbcShape1385.point.y, bbcShape1385.size.width, bbcShape1385.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1386.around.x, bbcShape1386.around.y);
ctx.rotate(bbcShape1386.rotation * Math.PI / 180);
ctx.translate(-bbcShape1386.around.x, -bbcShape1386.around.y);
ctx.beginPath();
ctx.rect(bbcShape1386.point.x, bbcShape1386.point.y, bbcShape1386.size.width, bbcShape1386.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1387.around.x, bbcShape1387.around.y);
ctx.rotate(bbcShape1387.rotation * Math.PI / 180);
ctx.translate(-bbcShape1387.around.x, -bbcShape1387.around.y);
ctx.beginPath();
ctx.rect(bbcShape1387.point.x, bbcShape1387.point.y, bbcShape1387.size.width, bbcShape1387.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1388.around.x, bbcShape1388.around.y);
ctx.rotate(bbcShape1388.rotation * Math.PI / 180);
ctx.translate(-bbcShape1388.around.x, -bbcShape1388.around.y);
ctx.beginPath();
ctx.rect(bbcShape1388.point.x, bbcShape1388.point.y, bbcShape1388.size.width, bbcShape1388.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1389.around.x, bbcShape1389.around.y);
ctx.rotate(bbcShape1389.rotation * Math.PI / 180);
ctx.translate(-bbcShape1389.around.x, -bbcShape1389.around.y);
ctx.beginPath();
ctx.rect(bbcShape1389.point.x, bbcShape1389.point.y, bbcShape1389.size.width, bbcShape1389.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1390.around.x, bbcShape1390.around.y);
ctx.rotate(bbcShape1390.rotation * Math.PI / 180);
ctx.translate(-bbcShape1390.around.x, -bbcShape1390.around.y);
ctx.beginPath();
ctx.rect(bbcShape1390.point.x, bbcShape1390.point.y, bbcShape1390.size.width, bbcShape1390.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1391.around.x, bbcShape1391.around.y);
ctx.rotate(bbcShape1391.rotation * Math.PI / 180);
ctx.translate(-bbcShape1391.around.x, -bbcShape1391.around.y);
ctx.beginPath();
ctx.rect(bbcShape1391.point.x, bbcShape1391.point.y, bbcShape1391.size.width, bbcShape1391.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1392.around.x, bbcShape1392.around.y);
ctx.rotate(bbcShape1392.rotation * Math.PI / 180);
ctx.translate(-bbcShape1392.around.x, -bbcShape1392.around.y);
ctx.beginPath();
ctx.rect(bbcShape1392.point.x, bbcShape1392.point.y, bbcShape1392.size.width, bbcShape1392.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1393.around.x, bbcShape1393.around.y);
ctx.rotate(bbcShape1393.rotation * Math.PI / 180);
ctx.translate(-bbcShape1393.around.x, -bbcShape1393.around.y);
ctx.beginPath();
ctx.rect(bbcShape1393.point.x, bbcShape1393.point.y, bbcShape1393.size.width, bbcShape1393.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1394.around.x, bbcShape1394.around.y);
ctx.rotate(bbcShape1394.rotation * Math.PI / 180);
ctx.translate(-bbcShape1394.around.x, -bbcShape1394.around.y);
ctx.beginPath();
ctx.rect(bbcShape1394.point.x, bbcShape1394.point.y, bbcShape1394.size.width, bbcShape1394.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1395.around.x, bbcShape1395.around.y);
ctx.rotate(bbcShape1395.rotation * Math.PI / 180);
ctx.translate(-bbcShape1395.around.x, -bbcShape1395.around.y);
ctx.beginPath();
ctx.rect(bbcShape1395.point.x, bbcShape1395.point.y, bbcShape1395.size.width, bbcShape1395.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1396.around.x, bbcShape1396.around.y);
ctx.rotate(bbcShape1396.rotation * Math.PI / 180);
ctx.translate(-bbcShape1396.around.x, -bbcShape1396.around.y);
ctx.beginPath();
ctx.rect(bbcShape1396.point.x, bbcShape1396.point.y, bbcShape1396.size.width, bbcShape1396.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1397.around.x, bbcShape1397.around.y);
ctx.rotate(bbcShape1397.rotation * Math.PI / 180);
ctx.translate(-bbcShape1397.around.x, -bbcShape1397.around.y);
ctx.beginPath();
ctx.rect(bbcShape1397.point.x, bbcShape1397.point.y, bbcShape1397.size.width, bbcShape1397.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1398.around.x, bbcShape1398.around.y);
ctx.rotate(bbcShape1398.rotation * Math.PI / 180);
ctx.translate(-bbcShape1398.around.x, -bbcShape1398.around.y);
ctx.beginPath();
ctx.rect(bbcShape1398.point.x, bbcShape1398.point.y, bbcShape1398.size.width, bbcShape1398.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 450.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1399.around.x, bbcShape1399.around.y);
ctx.rotate(bbcShape1399.rotation * Math.PI / 180);
ctx.translate(-bbcShape1399.around.x, -bbcShape1399.around.y);
ctx.beginPath();
ctx.rect(bbcShape1399.point.x, bbcShape1399.point.y, bbcShape1399.size.width, bbcShape1399.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(475.0, 255.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1400.around.x, bbcShape1400.around.y);
ctx.rotate(bbcShape1400.rotation * Math.PI / 180);
ctx.translate(-bbcShape1400.around.x, -bbcShape1400.around.y);
ctx.beginPath();
ctx.moveTo(bbcShape1400.points[0][0], bbcShape1400.points[0][1]);
ctx.lineTo(bbcShape1400.points[1][0], bbcShape1400.points[1][1]);
ctx.lineTo(bbcShape1400.points[2][0], bbcShape1400.points[2][1]);
ctx.lineTo(bbcShape1400.points[3][0], bbcShape1400.points[3][1]);
ctx.lineTo(bbcShape1400.points[4][0], bbcShape1400.points[4][1]);
ctx.lineTo(bbcShape1400.points[5][0], bbcShape1400.points[5][1]);
ctx.lineTo(bbcShape1400.points[6][0], bbcShape1400.points[6][1]);
ctx.lineTo(bbcShape1400.points[7][0], bbcShape1400.points[7][1]);
ctx.lineTo(bbcShape1400.points[8][0], bbcShape1400.points[8][1]);
ctx.lineTo(bbcShape1400.points[9][0], bbcShape1400.points[9][1]);
ctx.lineTo(bbcShape1400.points[10][0], bbcShape1400.points[10][1]);
ctx.lineTo(bbcShape1400.points[11][0], bbcShape1400.points[11][1]);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1401.around.x, bbcShape1401.around.y);
ctx.rotate(bbcShape1401.rotation * Math.PI / 180);
ctx.translate(-bbcShape1401.around.x, -bbcShape1401.around.y);
ctx.beginPath();
ctx.rect(bbcShape1401.point.x, bbcShape1401.point.y, bbcShape1401.size.width, bbcShape1401.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1402.around.x, bbcShape1402.around.y);
ctx.rotate(bbcShape1402.rotation * Math.PI / 180);
ctx.translate(-bbcShape1402.around.x, -bbcShape1402.around.y);
ctx.beginPath();
ctx.rect(bbcShape1402.point.x, bbcShape1402.point.y, bbcShape1402.size.width, bbcShape1402.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1403.around.x, bbcShape1403.around.y);
ctx.rotate(bbcShape1403.rotation * Math.PI / 180);
ctx.translate(-bbcShape1403.around.x, -bbcShape1403.around.y);
ctx.beginPath();
ctx.rect(bbcShape1403.point.x, bbcShape1403.point.y, bbcShape1403.size.width, bbcShape1403.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1404.around.x, bbcShape1404.around.y);
ctx.rotate(bbcShape1404.rotation * Math.PI / 180);
ctx.translate(-bbcShape1404.around.x, -bbcShape1404.around.y);
ctx.beginPath();
ctx.rect(bbcShape1404.point.x, bbcShape1404.point.y, bbcShape1404.size.width, bbcShape1404.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1405.around.x, bbcShape1405.around.y);
ctx.rotate(bbcShape1405.rotation * Math.PI / 180);
ctx.translate(-bbcShape1405.around.x, -bbcShape1405.around.y);
ctx.beginPath();
ctx.rect(bbcShape1405.point.x, bbcShape1405.point.y, bbcShape1405.size.width, bbcShape1405.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1406.around.x, bbcShape1406.around.y);
ctx.rotate(bbcShape1406.rotation * Math.PI / 180);
ctx.translate(-bbcShape1406.around.x, -bbcShape1406.around.y);
ctx.beginPath();
ctx.rect(bbcShape1406.point.x, bbcShape1406.point.y, bbcShape1406.size.width, bbcShape1406.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1407.around.x, bbcShape1407.around.y);
ctx.rotate(bbcShape1407.rotation * Math.PI / 180);
ctx.translate(-bbcShape1407.around.x, -bbcShape1407.around.y);
ctx.beginPath();
ctx.rect(bbcShape1407.point.x, bbcShape1407.point.y, bbcShape1407.size.width, bbcShape1407.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1408.around.x, bbcShape1408.around.y);
ctx.rotate(bbcShape1408.rotation * Math.PI / 180);
ctx.translate(-bbcShape1408.around.x, -bbcShape1408.around.y);
ctx.beginPath();
ctx.rect(bbcShape1408.point.x, bbcShape1408.point.y, bbcShape1408.size.width, bbcShape1408.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1409.around.x, bbcShape1409.around.y);
ctx.rotate(bbcShape1409.rotation * Math.PI / 180);
ctx.translate(-bbcShape1409.around.x, -bbcShape1409.around.y);
ctx.beginPath();
ctx.rect(bbcShape1409.point.x, bbcShape1409.point.y, bbcShape1409.size.width, bbcShape1409.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1410.around.x, bbcShape1410.around.y);
ctx.rotate(bbcShape1410.rotation * Math.PI / 180);
ctx.translate(-bbcShape1410.around.x, -bbcShape1410.around.y);
ctx.beginPath();
ctx.rect(bbcShape1410.point.x, bbcShape1410.point.y, bbcShape1410.size.width, bbcShape1410.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1411.around.x, bbcShape1411.around.y);
ctx.rotate(bbcShape1411.rotation * Math.PI / 180);
ctx.translate(-bbcShape1411.around.x, -bbcShape1411.around.y);
ctx.beginPath();
ctx.rect(bbcShape1411.point.x, bbcShape1411.point.y, bbcShape1411.size.width, bbcShape1411.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1412.around.x, bbcShape1412.around.y);
ctx.rotate(bbcShape1412.rotation * Math.PI / 180);
ctx.translate(-bbcShape1412.around.x, -bbcShape1412.around.y);
ctx.beginPath();
ctx.rect(bbcShape1412.point.x, bbcShape1412.point.y, bbcShape1412.size.width, bbcShape1412.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1413.around.x, bbcShape1413.around.y);
ctx.rotate(bbcShape1413.rotation * Math.PI / 180);
ctx.translate(-bbcShape1413.around.x, -bbcShape1413.around.y);
ctx.beginPath();
ctx.rect(bbcShape1413.point.x, bbcShape1413.point.y, bbcShape1413.size.width, bbcShape1413.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1414.around.x, bbcShape1414.around.y);
ctx.rotate(bbcShape1414.rotation * Math.PI / 180);
ctx.translate(-bbcShape1414.around.x, -bbcShape1414.around.y);
ctx.beginPath();
ctx.rect(bbcShape1414.point.x, bbcShape1414.point.y, bbcShape1414.size.width, bbcShape1414.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1415.around.x, bbcShape1415.around.y);
ctx.rotate(bbcShape1415.rotation * Math.PI / 180);
ctx.translate(-bbcShape1415.around.x, -bbcShape1415.around.y);
ctx.beginPath();
ctx.rect(bbcShape1415.point.x, bbcShape1415.point.y, bbcShape1415.size.width, bbcShape1415.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1416.around.x, bbcShape1416.around.y);
ctx.rotate(bbcShape1416.rotation * Math.PI / 180);
ctx.translate(-bbcShape1416.around.x, -bbcShape1416.around.y);
ctx.beginPath();
ctx.rect(bbcShape1416.point.x, bbcShape1416.point.y, bbcShape1416.size.width, bbcShape1416.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1417.around.x, bbcShape1417.around.y);
ctx.rotate(bbcShape1417.rotation * Math.PI / 180);
ctx.translate(-bbcShape1417.around.x, -bbcShape1417.around.y);
ctx.beginPath();
ctx.rect(bbcShape1417.point.x, bbcShape1417.point.y, bbcShape1417.size.width, bbcShape1417.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1418.around.x, bbcShape1418.around.y);
ctx.rotate(bbcShape1418.rotation * Math.PI / 180);
ctx.translate(-bbcShape1418.around.x, -bbcShape1418.around.y);
ctx.beginPath();
ctx.rect(bbcShape1418.point.x, bbcShape1418.point.y, bbcShape1418.size.width, bbcShape1418.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1419.around.x, bbcShape1419.around.y);
ctx.rotate(bbcShape1419.rotation * Math.PI / 180);
ctx.translate(-bbcShape1419.around.x, -bbcShape1419.around.y);
ctx.beginPath();
ctx.rect(bbcShape1419.point.x, bbcShape1419.point.y, bbcShape1419.size.width, bbcShape1419.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

ctx.fillStyle = 'rgb(255.0, 475.0, 0.0)';

ctx.save();
ctx.translate(bbcShape1420.around.x, bbcShape1420.around.y);
ctx.rotate(bbcShape1420.rotation * Math.PI / 180);
ctx.translate(-bbcShape1420.around.x, -bbcShape1420.around.y);
ctx.beginPath();
ctx.rect(bbcShape1420.point.x, bbcShape1420.point.y, bbcShape1420.size.width, bbcShape1420.size.height);
ctx.fill();
ctx.stroke();
ctx.restore();

setTimeout(bbcUpdate, 1000 / 60);

}
