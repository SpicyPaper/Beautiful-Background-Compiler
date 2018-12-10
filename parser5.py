import ply.yacc as yacc

from lex5 import tokens
import AST

vars = {}

def p_program_statement(p):
    ''' program : statement '''
    p[0] = AST.ProgramNode(p[1])

def p_program_recursive(p):
    ''' program : statement ';' program '''
    p[0] = AST.ProgramNode([p[1]]+p[3].children)

def p_statement(p):
    ''' statement : assignation
        | structure
        | shape '''
    p[0] = p[1]
    	
def p_statement_print(p):
    ''' statement : PRINT expression '''
    p[0] = AST.PrintNode(p[2])

def p_structure(p):
    ''' structure : WHILE expression '{' program '}' '''
    p[0] = AST.WhileNode([p[2],p[4]])

def p_shape(p):
    ''' shape : circle_g '''
    p[0] = p[1]

def p_circle_g(p):
    ''' circle_g : CIRCLE '{' x_expression ',' y_expression ',' radius_expression ',' color_expression '}' '''
    p[0] = AST.CircleNode([p[3], p[5], p[7], p[9]])

def p_expression_x(p):
    ''' x_expression : X ':' expression '''
    p[0] = AST.XNode(p[3])

def p_expression_y(p):
    ''' y_expression : Y ':' expression '''
    p[0] = AST.YNode(p[3])
    
def p_expression_radius(p):
    ''' radius_expression : RADIUS ':' expression '''
    p[0] = AST.RadiusNode(p[3])
    
def p_expression_color(p):
    ''' color_expression : COLOR ':' '(' r_expression ',' g_expression ',' b_expression ')' '''
    p[0] = AST.ColorNode([p[4], p[6], p[8]])

def p_expression_r(p):
    ''' r_expression : expression '''
    p[0] = AST.RNode(p[1])

def p_expression_g(p):
    ''' g_expression : expression '''
    p[0] = AST.GNode(p[1])

def p_expression_b(p):
    ''' b_expression : expression '''
    p[0] = AST.BNode(p[1])

def p_expression_op(p):
    '''expression : expression ADD_OP expression
            | expression MUL_OP expression'''
    p[0] = AST.OpNode(p[2], [p[1], p[3]])
    	
def p_expression_num_or_var(p):
    '''expression : NUMBER
        | IDENTIFIER '''
    p[0] = AST.TokenNode(p[1])
    	
def p_expression_paren(p):
    '''expression : '(' expression ')' '''
    p[0] = p[2]
    	
def p_minus(p):
    ''' expression : ADD_OP expression %prec UMINUS'''
    p[0] = AST.OpNode(p[1], [p[2]])
    	
def p_assign(p):
    ''' assignation : IDENTIFIER '=' expression '''
    p[0] = AST.AssignNode([AST.TokenNode(p[1]),p[3]])

def p_error(p):
    if p:
        print ("Syntax error in line %s" % p)
        yacc.errok()
    else:
        print ("Sytax error: unexpected end of file!")

precedence = (
    ('left', 'ADD_OP'),
    ('left', 'MUL_OP'),
    ('right', 'UMINUS'),  
)

def parse(program):
    return yacc.parse(program)

yacc.yacc(outputdir='generated')

if __name__ == "__main__":
    import sys 
    	
    prog = open(sys.argv[1]).read()
    result = yacc.parse(prog)
    if result:
        print (result)
            
        import os
        graph = result.makegraphicaltree()
        name = os.path.splitext(sys.argv[1])[0]+'-ast.pdf'
        graph.write_pdf(name) 
        print ("wrote ast to", name)
    else:
        print ("Parsing returned no result!")