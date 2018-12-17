
# parsetab.py
# This file is automatically generated. Do not edit.
# pylint: disable=W,C,R
_tabversion = '3.10'

_lr_method = 'LALR'

_lr_signature = "leftADD_OPleftMUL_OPrightUMINUSADD_OP CIRCLE COLOR IDENTIFIER MUL_OP NUMBER POINT PRINT RADIUS RECT ROTATE SIZE TRANSLATE WHILE program : statement  program : statement ';' program  statement : assignation\n        | structure\n        | shape\n        | animation  statement : PRINT expression  structure : WHILE expression '{' program '}'  animation : translation  translation : TRANSLATE '(' IDENTIFIER ',' point_expression ')'  shape : circle_g \n        | rect_g  circle_g : CIRCLE '{' point_expression ',' RADIUS '(' expression ')' ',' color_expression '}'  rect_g : RECT '{' point_expression ',' size_expression ',' color_expression '}'  point_expression : POINT '(' expression ',' expression ')'  size_expression : SIZE '(' expression ',' expression ')'  color_expression : COLOR '(' expression ',' expression ',' expression ')' expression : expression ADD_OP expression\n            | expression MUL_OP expressionexpression : NUMBER\n        | IDENTIFIER expression : '(' expression ')'  expression : ADD_OP expression %prec UMINUS assignation : IDENTIFIER '=' assign_expression  assign_expression : expression\n        | shape "
    
_lr_action_items = {'PRINT':([0,16,35,],[7,7,7,]),'IDENTIFIER':([0,7,9,16,18,21,22,26,28,29,35,45,54,55,57,67,68,73,77,],[8,20,20,8,20,20,20,39,20,20,8,20,20,20,20,20,20,20,20,]),'WHILE':([0,16,35,],[9,9,9,]),'CIRCLE':([0,16,22,35,],[13,13,13,13,]),'RECT':([0,16,22,35,],[14,14,14,14,]),'TRANSLATE':([0,16,35,],[15,15,15,]),'$end':([1,2,3,4,5,6,10,11,12,17,19,20,27,30,32,33,34,40,41,42,48,58,66,75,],[0,-1,-3,-4,-5,-6,-11,-12,-9,-7,-20,-21,-2,-23,-24,-25,-26,-18,-19,-22,-8,-10,-14,-13,]),'}':([2,3,4,5,6,10,11,12,17,19,20,27,30,32,33,34,40,41,42,43,48,58,61,66,72,75,79,],[-1,-3,-4,-5,-6,-11,-12,-9,-7,-20,-21,-2,-23,-24,-25,-26,-18,-19,-22,48,-8,-10,66,-14,75,-13,-17,]),';':([2,3,4,5,6,10,11,12,17,19,20,30,32,33,34,40,41,42,48,58,66,75,],[16,-3,-4,-5,-6,-11,-12,-9,-7,-20,-21,-23,-24,-25,-26,-18,-19,-22,-8,-10,-14,-13,]),'NUMBER':([7,9,18,21,22,28,29,45,54,55,57,67,68,73,77,],[19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,]),'(':([7,9,15,18,21,22,28,29,37,45,49,52,54,55,57,62,67,68,73,77,],[21,21,26,21,21,21,21,21,45,21,54,57,21,21,21,67,21,21,21,21,]),'ADD_OP':([7,9,17,18,19,20,21,22,23,28,29,30,31,33,40,41,42,45,50,54,55,57,59,60,63,67,68,70,71,73,76,77,78,],[18,18,28,18,-20,-21,18,18,28,18,18,-23,28,28,-18,-19,-22,18,28,18,18,18,28,28,28,18,18,28,28,18,28,18,28,]),'=':([8,],[22,]),'{':([13,14,19,20,23,30,40,41,42,],[24,25,-20,-21,35,-23,-18,-19,-22,]),'MUL_OP':([17,19,20,23,30,31,33,40,41,42,50,59,60,63,70,71,76,78,],[29,-20,-21,29,-23,29,29,29,-19,-22,29,29,29,29,29,29,29,29,]),')':([19,20,30,31,40,41,42,53,59,60,65,71,78,],[-20,-21,-23,42,-18,-19,-22,58,64,65,-15,74,79,]),',':([19,20,30,36,38,39,40,41,42,50,51,63,64,65,70,74,76,],[-20,-21,-23,44,46,47,-18,-19,-22,55,56,68,69,-15,73,-16,77,]),'POINT':([24,25,47,],[37,37,37,]),'RADIUS':([44,],[49,]),'SIZE':([46,],[52,]),'COLOR':([56,69,],[62,62,]),}

_lr_action = {}
for _k, _v in _lr_action_items.items():
   for _x,_y in zip(_v[0],_v[1]):
      if not _x in _lr_action:  _lr_action[_x] = {}
      _lr_action[_x][_k] = _y
del _lr_action_items

_lr_goto_items = {'program':([0,16,35,],[1,27,43,]),'statement':([0,16,35,],[2,2,2,]),'assignation':([0,16,35,],[3,3,3,]),'structure':([0,16,35,],[4,4,4,]),'shape':([0,16,22,35,],[5,5,34,5,]),'animation':([0,16,35,],[6,6,6,]),'circle_g':([0,16,22,35,],[10,10,10,10,]),'rect_g':([0,16,22,35,],[11,11,11,11,]),'translation':([0,16,35,],[12,12,12,]),'expression':([7,9,18,21,22,28,29,45,54,55,57,67,68,73,77,],[17,23,30,31,33,40,41,50,59,60,63,70,71,76,78,]),'assign_expression':([22,],[32,]),'point_expression':([24,25,47,],[36,38,53,]),'size_expression':([46,],[51,]),'color_expression':([56,69,],[61,72,]),}

_lr_goto = {}
for _k, _v in _lr_goto_items.items():
   for _x, _y in zip(_v[0], _v[1]):
       if not _x in _lr_goto: _lr_goto[_x] = {}
       _lr_goto[_x][_k] = _y
del _lr_goto_items
_lr_productions = [
  ("S' -> program","S'",1,None,None,None),
  ('program -> statement','program',1,'p_program_statement','parser5.py',7),
  ('program -> statement ; program','program',3,'p_program_recursive','parser5.py',11),
  ('statement -> assignation','statement',1,'p_statement','parser5.py',15),
  ('statement -> structure','statement',1,'p_statement','parser5.py',16),
  ('statement -> shape','statement',1,'p_statement','parser5.py',17),
  ('statement -> animation','statement',1,'p_statement','parser5.py',18),
  ('statement -> PRINT expression','statement',2,'p_statement_print','parser5.py',22),
  ('structure -> WHILE expression { program }','structure',5,'p_structure','parser5.py',26),
  ('animation -> translation','animation',1,'p_animation','parser5.py',30),
  ('translation -> TRANSLATE ( IDENTIFIER , point_expression )','translation',6,'p_animation_translation','parser5.py',34),
  ('shape -> circle_g','shape',1,'p_shape','parser5.py',38),
  ('shape -> rect_g','shape',1,'p_shape','parser5.py',39),
  ('circle_g -> CIRCLE { point_expression , RADIUS ( expression ) , color_expression }','circle_g',11,'p_circle_g','parser5.py',43),
  ('rect_g -> RECT { point_expression , size_expression , color_expression }','rect_g',8,'p_rect_g','parser5.py',47),
  ('point_expression -> POINT ( expression , expression )','point_expression',6,'p_expression_point','parser5.py',51),
  ('size_expression -> SIZE ( expression , expression )','size_expression',6,'p_expression_size','parser5.py',55),
  ('color_expression -> COLOR ( expression , expression , expression )','color_expression',8,'p_expression_color','parser5.py',59),
  ('expression -> expression ADD_OP expression','expression',3,'p_expression_op','parser5.py',63),
  ('expression -> expression MUL_OP expression','expression',3,'p_expression_op','parser5.py',64),
  ('expression -> NUMBER','expression',1,'p_expression_num_or_var','parser5.py',68),
  ('expression -> IDENTIFIER','expression',1,'p_expression_num_or_var','parser5.py',69),
  ('expression -> ( expression )','expression',3,'p_expression_paren','parser5.py',73),
  ('expression -> ADD_OP expression','expression',2,'p_minus','parser5.py',77),
  ('assignation -> IDENTIFIER = assign_expression','assignation',3,'p_assign','parser5.py',81),
  ('assign_expression -> expression','assign_expression',1,'p_assign_expression','parser5.py',85),
  ('assign_expression -> shape','assign_expression',1,'p_assign_expression','parser5.py',86),
]