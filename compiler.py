# coding=utf-8
import AST
from AST import addToClass

# HTML

HTMLContent = """
<!DOCTYPE html>
<html>
    <head>
        <script src="%s.js"></script>
        <title>%s</title>
    </head>
    <body style="margin: 0px; padding: 0px; overflow:hidden;">
         <canvas id="bbcCanvas" width="500" height="500"></canvas>
    </body>
</html>
"""

# JS

JSContent = """
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
%s
}

function bbcUpdate() {
if(Date.now() > start + updateTime)
{
    bbcInit();
}
%s
bbcDraw();

}

function bbcDraw() {

ctx.clearRect(0, 0, bbcCanvas.width, bbcCanvas.height);
%s
setTimeout(bbcUpdate, 1000 / 60);

}
"""

JSInit = ""

JSUpdate = ""

JSDraw = ""

JSCircle = """
ctx.save();
ctx.translate(%s, %s);
ctx.rotate(%s * Math.PI / 180);
ctx.translate(-%s, -%s);
ctx.beginPath();
ctx.arc(%s, %s, %s, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.restore();
"""

JSRect = """
ctx.save();
ctx.translate(%s, %s);
ctx.rotate(%s * Math.PI / 180);
ctx.translate(-%s, -%s);
ctx.beginPath();
ctx.rect(%s, %s, %s, %s);
ctx.fill();
ctx.stroke();
ctx.restore();
"""

JSPolygon = """
ctx.save();
ctx.translate(%s, %s);
ctx.rotate(%s * Math.PI / 180);
ctx.translate(-%s, -%s);
ctx.beginPath();%s
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
"""

JSMoveTo = """
ctx.moveTo(%s, %s);
"""

JSLineTo = """
ctx.lineTo(%s, %s);
"""

JSColor = """
ctx.fillStyle = 'rgb(%s, %s, %s)';
"""

JSAssign = """
%s = %s;
"""

# JS Objects

bbc_shape_num = 0

def nextShapeNum():
    global bbc_shape_num
    bbc_shape_num += 1
    return bbc_shape_num

JSCircleObject = """{
    point:%s,
    radius:%s,
    color:%s,
    rotation:%s,
    around:%s
}"""

JSRectObject = """{
    point:%s,
    size:%s,
    color:%s,
    rotation:%s,
    around:%s
}"""

JSPolygonObject = """{
    points:%s,
    color:%s,
    rotation:%s,
    around:%s
}"""

JSSizeObject = """{
    width:%s,
    height:%s
}"""

JSPointObject = """{
    x:%s,
    y:%s
}"""

JSColorObject = """{
    r:%s,
    g:%s,
    b:%s
}"""

# JS animations

JSTranslate = """
%s.point.x += %s;
%s.point.y += %s;
"""

JSRotate = """
%s += %s;
%s.around.x = %s;
%s.around.y = %s;
"""

operations = {
    '+' : lambda x,y: x+y,
    '-' : lambda x,y: x-y,
    '*' : lambda x,y: x*y,
    '/' : lambda x,y: x/y,
}

vars = {}

# noeud de programme
# retourne la suite d'opcodes de tous les enfants
@addToClass(AST.ProgramNode)
def compile(self):
    global JSInit
    global JSUpdate
    global JSDraw
    for c in self.children:
        c.compile()
    return JSContent %(JSInit, JSUpdate, JSDraw)

@addToClass(AST.SubProgramNode)
def compile(self):
    for c in self.children:
        c.compile()

@addToClass(AST.ForNode)
def compile(self):
    start = int(self.children[0].compile())
    end = int(self.children[1].compile())
    step = int(self.children[2].compile())

    for i in range(start, end, step):
        self.children[3].compile()

@addToClass(AST.TokenNode)
def compile(self):
    if isinstance(self.tok, str):
        try:
            return vars[self.tok]
        except KeyError:
            print ("*** Error: variable %s undefined!" % self.tok)
    return self.tok

@addToClass(AST.TokenShapeNode)
def compile(self):
    return self.tok
	
@addToClass(AST.AssignShapeNode)
def compile(self):
    global JSInit

    identifier = self.children[0].compile()
    value = self.children[1].compile()
    
    JSInit += JSAssign %(identifier, value[1])
	
@addToClass(AST.AssignNode)
def compile(self):

    identifier = self.children[0].tok
    value = self.children[1].compile()

    vars[identifier] = value
	
@addToClass(AST.OpNode)
def compile(self):
    if len(self.children) == 1:
        return operations[self.op](0, self.children[0].compile())
    else:
        return operations[self.op](self.children[0].compile(), self.children[1].compile())
    
@addToClass(AST.ColorNode)
def compile(self):
    colorArray = []

    r = self.children[0].compile()
    g = self.children[1].compile()
    b = self.children[2].compile()

    colorArray.append(JSColor %(r, g, b))
    colorArray.append(JSColorObject %(r, g, b))

    return colorArray
    
@addToClass(AST.CircleNode)
def compile(self):
    # Init
    global JSInit
    global JSDraw
    circleArray = []

    # Get compiled values
    point = self.children[0].compile()[0]
    radius = self.children[1].compile()
    color = self.children[2].compile()
    around = JSPointObject %(0, 0)

    # Create object
    circleObject = JSCircleObject %(point, radius, color[1], 0, around)

    # Generate shape var name
    shapeName = "bbcShape" + str(nextShapeNum())

    # Create js code
    jscode = color[0]
    jscode += JSCircle %(shapeName + ".around.x", shapeName + ".around.y", shapeName + ".rotation", shapeName + ".around.x", shapeName + ".around.y", shapeName + ".point.x", shapeName + ".point.y", shapeName + ".radius")
    JSDraw += jscode

    # Create the array
    circleArray.append(jscode)
    circleArray.append(shapeName)

    JSInit += JSAssign %(shapeName, circleObject)

    return circleArray

@addToClass(AST.RectNode)
def compile(self):
    # Init
    global JSInit
    global JSDraw
    rectArray = []

    # Get compiled values
    point = self.children[0].compile()[0]
    size = self.children[1].compile()
    color = self.children[2].compile()
    around = JSPointObject %(0, 0)

    # Create object
    rectObject = JSRectObject %(point, size, color[1], 0, around)

    # Generate shape var name
    shapeName = "bbcShape" + str(nextShapeNum())

    # Create js code
    jscode = color[0]
    jscode += JSRect %(shapeName + ".around.x", shapeName + ".around.y", shapeName + ".rotation", shapeName + ".around.x", shapeName + ".around.y", shapeName + ".point.x", shapeName + ".point.y", shapeName + ".size.width", shapeName + ".size.height")
    JSDraw += jscode

    # Create the array
    rectArray.append(jscode)
    rectArray.append(shapeName)

    JSInit += JSAssign %(shapeName, rectObject)

    return rectArray

@addToClass(AST.LinkedPointNode)
def compile(self):
    points = []
    for c in self.children:
        points.append(c.compile())
    return points

@addToClass(AST.PolygonNode)
def compile(self):
    # Init
    global JSInit
    global JSDraw
    polygonArray = []

    # Get compiled values
    points = self.children[0].compile()
    color = self.children[1].compile()
    pointsforJS = [point[1] for point in points]
    for i in range(0, len(pointsforJS)):
        array = []
        array.append(pointsforJS[i][0])
        array.append(pointsforJS[i][1])
        pointsforJS[i] = array
    around = JSPointObject %(0, 0)

    # Create object
    polygonObject = JSPolygonObject %(pointsforJS, color[1], 0, around)

    # Generate shape var name
    shapeName = "bbcShape" + str(nextShapeNum())

    # Create js code
    jscode = color[0]
    jspoints = ""
    for i in range(0, len(points)):
        if i == 0:
            jspoints += (JSMoveTo %(shapeName + ".points[" + str(i) + "][0]", shapeName + ".points[" + str(i) + "][1]")).rstrip("\r\n")
        else:
            jspoints += (JSLineTo %(shapeName + ".points[" + str(i) + "][0]", shapeName + ".points[" + str(i) + "][1]")).rstrip("\r\n")
    jscode += JSPolygon %(shapeName + ".around.x", shapeName + ".around.y", shapeName + ".rotation", shapeName + ".around.x", shapeName + ".around.y", jspoints)
    JSDraw += jscode

    # Create the array
    polygonArray.append(jscode)
    polygonArray.append(shapeName)

    JSInit += JSAssign %(shapeName, polygonObject)

    return polygonArray

@addToClass(AST.PointNode)
def compile(self):
    pointArray = []
    jscode = JSPointObject %(self.children[0].compile(), self.children[1].compile())
    values = (self.children[0].compile(), self.children[1].compile())

    pointArray.append(jscode)
    pointArray.append(values)

    return pointArray

@addToClass(AST.SizeNode)
def compile(self):
    return JSSizeObject %(self.children[0].compile(), self.children[1].compile())
    
@addToClass(AST.TranslateNode)
def compile(self):
    global JSUpdate
    
    identifier = self.children[0].compile()

    if isinstance(identifier, list):
        identifier = identifier[1]

    translatePoint = self.children[1].compile()[1]

    JSUpdate += JSTranslate %(identifier, translatePoint[0], identifier, translatePoint[1])
    
@addToClass(AST.RotateNode)
def compile(self):
    global JSUpdate

    identifier = self.children[0].compile()

    if isinstance(identifier, list):
        identifier = identifier[1]

    rotation = self.children[1].compile()
    
    translatePoint = self.children[2].compile()[1]

    JSUpdate += JSRotate %(identifier + ".rotation", rotation, identifier, translatePoint[0], identifier, translatePoint[1])

if __name__ == "__main__":
    from parser5 import parse
    import sys, os
    jsPath = os.path.splitext(sys.argv[1])[0]
    HTMLName = os.path.splitext(sys.argv[1])[0]+'.html'
    outfile = open(HTMLName, 'w')
    outfile.write(HTMLContent %(jsPath, jsPath))

    prog = open(sys.argv[1]).read()
    ast = parse(prog)
    compiled = ast.compile()
    JSName = os.path.splitext(sys.argv[1])[0]+'.js'
    outfile = open(JSName, 'w')
    outfile.write(compiled)
    outfile.close()
    print ("Wrote output to", JSName, "and", HTMLName)