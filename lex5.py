import ply.lex as lex

# Parameters of the JS Objects
reserved_params = (
	'point',
	'size',
	'radius',
	'color',
)

# JS Shapes
reserved_objects = (
	'circle',
	'rect',
	'polygon',
)

# Animations and random function
reserved_functions = (
	'translate',
	'rotate',
	'random'
)

# Printing and for loop
reserved_words = (
	'for',
	'print',
)

# All tokens
tokens = (
	'NUMBER',
	'ADD_OP',
	'MUL_OP',
	'IDENTIFIER',
	'AROUND',
	'TIME',
) + tuple(map(lambda s:s.upper(),reserved_words)) + tuple(map(lambda s:s.upper(),reserved_params)) + tuple(map(lambda s:s.upper(),reserved_objects)) + tuple(map(lambda s:s.upper(),reserved_functions))

literals = '();={},:'

t_ignore = ' \t'

# Define how the tokens are used in the code with regex
def t_RANDOM(t):
	r'random'
	return t

def t_ROTATE(t):
	r'rotate'
	return t

def t_TRANSLATE(t):
	r'translate'
	return t

def t_AROUND(t):
	r'around'
	return t

def t_TIME(t):
	r'time'
	return t

def t_CIRCLE(t):
	r'circle'
	return t

def t_RECT(t):
	r'rect'
	return t

def t_POLYGON(t):
	r'polygon'
	return t

def t_COLOR(t):
	r'color'
	return t

def t_POINT(t):
	r'point'
	return t

def t_SIZE(t):
	r'size'
	return t

def t_RADIUS(t):
	r'radius'
	return t

def t_ADD_OP(t):
	r'[+-]'
	return t
	
def t_MUL_OP(t):
	r'[*/]'
	return t

def t_NUMBER(t):
	r'\d+(\.\d+)?'
	try:
		t.value = float(t.value)    
	except ValueError:
		print ("Line %d: Problem while parsing %s!" % (t.lineno,t.value))
		t.value = 0
	return t

def t_IDENTIFIER(t):
	r'[A-Za-z_]\w*'
	if t.value in reserved_words:
		t.type = t.value.upper()
	return t
	
def t_newline(t):
	r'\n+'
	t.lexer.lineno += len(t.value)

def t_error(t):
	print ("Illegal character '%s'" % repr(t.value[0]))
	t.lexer.skip(1)

lex.lex()

if __name__ == "__main__":
	import sys
	prog = open(sys.argv[1]).read()

	lex.input(prog)

	while 1:
		tok = lex.token()
		if not tok: break
		print ("line %d: %s(%s)" % (tok.lineno, tok.type, tok.value))
