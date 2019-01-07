import ply.yacc as yacc

from lex5 import tokens
import AST

def p_program_statement(p):
    ''' program : subprogram '''
    p[0] = AST.ProgramNode(p[1])

def p_program_subprogram(p):
    ''' subprogram : statement '''
    p[0] = AST.SubProgramNode(p[1])

def p_program_recursive(p):
    ''' subprogram : statement ';' subprogram '''
    p[0] = AST.SubProgramNode([p[1]]+p[3].children)

def p_statement(p):
    ''' statement : assignation
        | structure
        | shape
        | animation '''
    p[0] = p[1]
    	
def p_statement_print(p):
    ''' statement : PRINT expression '''
    p[0] = AST.PrintNode(p[2])

def p_structure(p):
    ''' structure : WHILE expression '{' subprogram '}' '''
    p[0] = AST.WhileNode([p[2],p[4]])

def p_animation(p):
    ''' animation : translation '''
    p[0] = p[1]

def p_animation_translation(p):
    ''' translation : TRANSLATE '(' IDENTIFIER ',' point_expression ')' '''
    p[0] = AST.TranslateNode([AST.TokenNode(p[3]), p[5]])

def p_animation_rotation(p):
    ''' translation : ROTATE '(' IDENTIFIER ',' expression ')' '''
    p[0] = AST.RotateNode([AST.TokenNode(p[3]), p[5]])

def p_shape(p):
    ''' shape : circle_g 
        | rect_g
        | polygon_g '''
    p[0] = p[1]

def p_circle_g(p):
    ''' circle_g : CIRCLE '{' point_expression ',' RADIUS '(' expression ')' ',' color_expression '}' '''
    p[0] = AST.CircleNode([p[3], p[7], p[10]])

def p_rect_g(p):
    ''' rect_g : RECT '{' point_expression ',' size_expression ',' color_expression '}' '''
    p[0] = AST.RectNode([p[3], p[5], p[7]])

def p_polygon_g(p):
    ''' polygon_g : POLYGON '{' point_expression ',' color_expression '}' '''
    p[0] = AST.PolygonNode([p[3], p[5]])

def p_expression_points(p):
    ''' points_expression : point_expression 
        | point_expression ',' points_expression '''
    try:
        p[0] = AST.LinkedPointNode([p[1], p[3]])
    except:
        p[0] = AST.LinkedPointNode([p[1]])

def p_expression_point(p):
    ''' point_expression : POINT '(' expression ',' expression ')' '''
    p[0] = AST.PointNode([p[3], p[5]])

def p_expression_size(p):
    ''' size_expression : SIZE '(' expression ',' expression ')' '''
    p[0] = AST.SizeNode([p[3], p[5]])
    
def p_expression_color(p):
    ''' color_expression : COLOR '(' expression ',' expression ',' expression ')' '''
    p[0] = AST.ColorNode([p[3], p[5], p[7]])

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
    ''' assignation : IDENTIFIER '=' assign_expression '''
    p[0] = AST.AssignNode([AST.TokenNode(p[1]), p[3]])
    	
def p_assign_expression(p):
    ''' assign_expression : expression
        | shape '''
    p[0] = p[1]

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