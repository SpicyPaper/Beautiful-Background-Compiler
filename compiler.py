# coding=utf-8
import AST
from AST import addToClass

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

JSContent = """
window.onload = function() {
    var canvas = document.getElementById('bbcCanvas');
    var ctx = canvas.getContext('2d');
    %s
}
"""

JSCircle = """
ctx.beginPath();
ctx.arc(%s, %s, %s, 0, 2 * Math.PI);
ctx.fill();
"""

JSColor = """
ctx.fillStyle = 'rgb(%s, %s, %s)';
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
	jscode = ""
	for c in self.children:
		jscode += c.compile()
	return JSContent %(jscode)

@addToClass(AST.TokenNode)
def compile(self):
    return self.tok
	
@addToClass(AST.AssignNode)
def compile(self):
    return self.children[1].compile()
	
@addToClass(AST.OpNode)
def compile(self):
	jscode = ""
	if len(self.children) == 1:
		jscode += operations[self.op](0, self.children[0].compile())
	else:
		jscode += operations[self.op](self.children[0].compile(), self.children[1].compile())
	return jscode
    
@addToClass(AST.ColorNode)
def compile(self):
    return JSColor %(self.children[0].compile(), self.children[1].compile(), self.children[2].compile())
    
@addToClass(AST.CircleNode)
def compile(self):
    jscode = self.children[3].compile()
    jscode += JSCircle %(self.children[0].compile(), self.children[1].compile(), self.children[2].compile())
    return jscode

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