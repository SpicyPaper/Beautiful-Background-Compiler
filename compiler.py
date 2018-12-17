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
    <body>
         <canvas id="bbcCanvas" width="500" height="500"></canvas>
    </body>
</html>
"""

# JS

JSContent = """
window.onload = function() {

canvas = document.getElementById('bbcCanvas');
ctx = canvas.getContext('2d');
bbcInit();
bbcUpdate();

}

function bbcInit() {
%s
}

function bbcUpdate() {
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
ctx.beginPath();
ctx.arc(%s, %s, %s, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
"""

JSRect = """
ctx.beginPath();
ctx.rect(%s, %s, %s, %s);
ctx.fill();
ctx.stroke();
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
    color:%s
}"""

JSRectObject = """{
    point:%s,
    size:%s,
    color:%s
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
%s += %s;
%s += %s;
"""

operations = {
    '+' : lambda x,y: x+y,
    '-' : lambda x,y: x-y,
    '*' : lambda x,y: x*y,
    '/' : lambda x,y: x/y,
}

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

@addToClass(AST.TokenNode)
def compile(self):
    return self.tok
	
@addToClass(AST.AssignNode)
def compile(self):
    global JSInit

    identifier = self.children[0].compile()
    value = self.children[1].compile()

    if isinstance(value, list):
        JSInit += JSAssign %(identifier, value[1])
    else:
        JSInit += JSAssign %(identifier, value)
	
@addToClass(AST.OpNode)
def compile(self):
    jscode = ""
    if len(self.children) == 1:
        jscode += str(operations[self.op](0, self.children[0].compile()))
    else:
        jscode += str(operations[self.op](self.children[0].compile(), self.children[1].compile()))
    return jscode
    
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

    # Create object
    circleObject = JSCircleObject %(point, radius, color[1])

    # Generate shape var name
    shapeName = "bbcShape" + str(nextShapeNum())

    # Create js code
    jscode = color[0]
    jscode += JSCircle %(shapeName + ".point.x", shapeName + ".point.y", shapeName + ".radius")
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

    # Create object
    rectObject = JSRectObject %(point, size, color[1])

    # Generate shape var name
    shapeName = "bbcShape" + str(nextShapeNum())

    # Create js code
    jscode = color[0]
    jscode += JSRect %(shapeName + ".point.x", shapeName + ".point.y", shapeName + ".size.width", shapeName + ".size.height")
    JSDraw += jscode

    # Create the array
    rectArray.append(jscode)
    rectArray.append(shapeName)

    JSInit += JSAssign %(shapeName, rectObject)

    return rectArray

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

    identifier = self.children[0]
    translatePoint = self.children[1].compile()[1]
    print(translatePoint)

    JSUpdate += JSTranslate %(identifier + ".point.x", translatePoint[0], identifier + ".point.y", translatePoint[1])

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