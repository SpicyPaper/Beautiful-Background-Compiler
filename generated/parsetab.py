
# parsetab.py
# This file is automatically generated. Do not edit.
# pylint: disable=W,C,R
_tabversion = '3.10'

_lr_method = 'LALR'

_lr_signature = "leftADD_OPleftMUL_OPrightUMINUSADD_OP CIRCLE COLOR IDENTIFIER MUL_OP NUMBER POINT POLYGON PRINT RADIUS RECT ROTATE SIZE TRANSLATE WHILE program : subprogram  subprogram : statement  subprogram : statement ';' subprogram  statement : assignation\n        | structure\n        | shape\n        | animation  statement : PRINT expression  structure : WHILE expression '{' subprogram '}'  animation : translation  translation : TRANSLATE '(' IDENTIFIER ',' point_expression ')'  translation : ROTATE '(' IDENTIFIER ',' expression ')'  shape : circle_g \n        | rect_g\n        | polygon_g  circle_g : CIRCLE '{' point_expression ',' RADIUS '(' expression ')' ',' color_expression '}'  rect_g : RECT '{' point_expression ',' size_expression ',' color_expression '}'  polygon_g : POLYGON '{' '(' points_expression ')' ',' color_expression '}'  points_expression : point_expression  points_expression : point_expression ',' points_expression  point_expression : POINT '(' expression ',' expression ')'  size_expression : SIZE '(' expression ',' expression ')'  color_expression : COLOR '(' expression ',' expression ',' expression ')' expression : expression ADD_OP expression\n            | expression MUL_OP expressionexpression : NUMBER\n        | IDENTIFIER expression : '(' expression ')'  expression : ADD_OP expression %prec UMINUS assignation : IDENTIFIER '=' assign_expression  assign_expression : expression\n        | shape "
    
_lr_action_items = {'COLOR':([68,71,90,],[76,76,76,]),'WHILE':([0,27,34,],[1,1,1,]),'RECT':([0,27,30,34,],[4,4,4,4,]),';':([6,7,8,12,13,14,17,18,19,20,22,31,37,44,45,46,48,50,51,59,73,74,83,86,95,],[27,-15,-10,-6,-13,-14,-5,-7,-4,-26,-27,-8,-29,-30,-31,-32,-28,-24,-25,-9,-11,-12,-17,-18,-16,]),'=':([11,],[30,]),'{':([4,5,16,20,22,23,37,48,50,51,],[25,26,32,-26,-27,34,-29,-28,-24,-25,]),'POINT':([25,32,40,56,64,],[39,39,39,39,39,]),'(':([1,9,10,15,21,24,26,30,35,36,39,53,57,61,67,69,70,75,76,82,84,91,96,],[21,28,29,21,21,21,40,21,21,21,53,21,21,69,75,21,21,21,82,21,21,21,21,]),'ADD_OP':([1,15,20,21,22,23,24,30,31,33,35,36,37,45,48,50,51,53,57,62,66,69,70,75,78,79,81,82,84,88,89,91,94,96,97,],[24,24,-26,24,-27,35,24,24,35,35,24,24,-29,35,-28,-24,-25,24,24,35,35,24,24,24,35,35,35,24,24,35,35,24,35,24,35,]),'MUL_OP':([20,22,23,31,33,37,45,48,50,51,62,66,78,79,81,88,89,94,97,],[-26,-27,36,36,36,-29,36,-28,36,-25,36,36,36,36,36,36,36,36,36,]),'POLYGON':([0,27,30,34,],[5,5,5,5,]),'ROTATE':([0,27,34,],[10,10,10,]),'TRANSLATE':([0,27,34,],[9,9,9,]),'RADIUS':([58,],[67,]),'IDENTIFIER':([0,1,15,21,24,27,28,29,30,34,35,36,53,57,69,70,75,82,84,91,96,],[11,22,22,22,22,11,42,43,22,11,22,22,22,22,22,22,22,22,22,22,22,]),'NUMBER':([1,15,21,24,30,35,36,53,57,69,70,75,82,84,91,96,],[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,]),'$end':([2,3,6,7,8,12,13,14,17,18,19,20,22,31,37,41,44,45,46,48,50,51,59,73,74,83,86,95,],[0,-1,-2,-15,-10,-6,-13,-14,-5,-7,-4,-26,-27,-8,-29,-3,-30,-31,-32,-28,-24,-25,-9,-11,-12,-17,-18,-16,]),'PRINT':([0,27,34,],[15,15,15,]),')':([20,22,33,37,48,50,51,54,55,65,66,72,79,81,85,89,97,],[-26,-27,48,-29,-28,-24,-25,63,-19,73,74,-20,85,87,-21,92,98,]),'CIRCLE':([0,27,30,34,],[16,16,16,16,]),'}':([6,7,8,12,13,14,17,18,19,20,22,31,37,41,44,45,46,48,49,50,51,59,73,74,77,80,83,86,93,95,98,],[-2,-15,-10,-6,-13,-14,-5,-7,-4,-26,-27,-8,-29,-3,-30,-31,-32,-28,59,-24,-25,-9,-11,-12,83,86,-17,-18,95,-16,-23,]),',':([20,22,37,38,42,43,47,48,50,51,55,60,62,63,78,85,87,88,92,94,],[-26,-27,-29,52,56,57,58,-28,-24,-25,64,68,70,71,84,-21,90,91,-22,96,]),'SIZE':([52,],[61,]),}

_lr_action = {}
for _k, _v in _lr_action_items.items():
   for _x,_y in zip(_v[0],_v[1]):
      if not _x in _lr_action:  _lr_action[_x] = {}
      _lr_action[_x][_k] = _y
del _lr_action_items

_lr_goto_items = {'assign_expression':([30,],[44,]),'program':([0,],[2,]),'subprogram':([0,27,34,],[3,41,49,]),'points_expression':([40,64,],[54,72,]),'expression':([1,15,21,24,30,35,36,53,57,69,70,75,82,84,91,96,],[23,31,33,37,45,50,51,62,66,78,79,81,88,89,94,97,]),'shape':([0,27,30,34,],[12,12,46,12,]),'circle_g':([0,27,30,34,],[13,13,13,13,]),'rect_g':([0,27,30,34,],[14,14,14,14,]),'statement':([0,27,34,],[6,6,6,]),'color_expression':([68,71,90,],[77,80,93,]),'polygon_g':([0,27,30,34,],[7,7,7,7,]),'size_expression':([52,],[60,]),'structure':([0,27,34,],[17,17,17,]),'point_expression':([25,32,40,56,64,],[38,47,55,65,55,]),'animation':([0,27,34,],[18,18,18,]),'translation':([0,27,34,],[8,8,8,]),'assignation':([0,27,34,],[19,19,19,]),}

_lr_goto = {}
for _k, _v in _lr_goto_items.items():
   for _x, _y in zip(_v[0], _v[1]):
       if not _x in _lr_goto: _lr_goto[_x] = {}
       _lr_goto[_x][_k] = _y
del _lr_goto_items
_lr_productions = [
  ("S' -> program","S'",1,None,None,None),
  ('program -> subprogram','program',1,'p_program_statement','parser5.py',7),
  ('subprogram -> statement','subprogram',1,'p_program_subprogram','parser5.py',11),
  ('subprogram -> statement ; subprogram','subprogram',3,'p_program_recursive','parser5.py',15),
  ('statement -> assignation','statement',1,'p_statement','parser5.py',19),
  ('statement -> structure','statement',1,'p_statement','parser5.py',20),
  ('statement -> shape','statement',1,'p_statement','parser5.py',21),
  ('statement -> animation','statement',1,'p_statement','parser5.py',22),
  ('statement -> PRINT expression','statement',2,'p_statement_print','parser5.py',26),
  ('structure -> WHILE expression { subprogram }','structure',5,'p_structure','parser5.py',30),
  ('animation -> translation','animation',1,'p_animation','parser5.py',34),
  ('translation -> TRANSLATE ( IDENTIFIER , point_expression )','translation',6,'p_animation_translation','parser5.py',38),
  ('translation -> ROTATE ( IDENTIFIER , expression )','translation',6,'p_animation_rotation','parser5.py',42),
  ('shape -> circle_g','shape',1,'p_shape','parser5.py',46),
  ('shape -> rect_g','shape',1,'p_shape','parser5.py',47),
  ('shape -> polygon_g','shape',1,'p_shape','parser5.py',48),
  ('circle_g -> CIRCLE { point_expression , RADIUS ( expression ) , color_expression }','circle_g',11,'p_circle_g','parser5.py',52),
  ('rect_g -> RECT { point_expression , size_expression , color_expression }','rect_g',8,'p_rect_g','parser5.py',56),
  ('polygon_g -> POLYGON { ( points_expression ) , color_expression }','polygon_g',8,'p_polygon_g','parser5.py',60),
  ('points_expression -> point_expression','points_expression',1,'p_expression_points','parser5.py',64),
  ('points_expression -> point_expression , points_expression','points_expression',3,'p_expression_points_recursive','parser5.py',68),
  ('point_expression -> POINT ( expression , expression )','point_expression',6,'p_expression_point','parser5.py',72),
  ('size_expression -> SIZE ( expression , expression )','size_expression',6,'p_expression_size','parser5.py',76),
  ('color_expression -> COLOR ( expression , expression , expression )','color_expression',8,'p_expression_color','parser5.py',80),
  ('expression -> expression ADD_OP expression','expression',3,'p_expression_op','parser5.py',84),
  ('expression -> expression MUL_OP expression','expression',3,'p_expression_op','parser5.py',85),
  ('expression -> NUMBER','expression',1,'p_expression_num_or_var','parser5.py',89),
  ('expression -> IDENTIFIER','expression',1,'p_expression_num_or_var','parser5.py',90),
  ('expression -> ( expression )','expression',3,'p_expression_paren','parser5.py',94),
  ('expression -> ADD_OP expression','expression',2,'p_minus','parser5.py',98),
  ('assignation -> IDENTIFIER = assign_expression','assignation',3,'p_assign','parser5.py',102),
  ('assign_expression -> expression','assign_expression',1,'p_assign_expression','parser5.py',106),
  ('assign_expression -> shape','assign_expression',1,'p_assign_expression','parser5.py',107),
]
