
# parsetab.py
# This file is automatically generated. Do not edit.
# pylint: disable=W,C,R
_tabversion = '3.10'

_lr_method = 'LALR'

_lr_signature = "leftADD_OPleftMUL_OPrightUMINUSADD_OP AROUND CIRCLE COLOR FOR IDENTIFIER MUL_OP NUMBER POINT POLYGON PRINT RADIUS RANDOM RECT ROTATE SIZE TIME TRANSLATE program : subprogram  subprogram : statement ';'  subprogram : statement ';' subprogram  statement : assignation\n        | assignation_shape\n        | assignation_color\n        | assignation_point\n        | assignation_size\n        | assignation_time\n        | structure\n        | shape\n        | animation  statement : PRINT expression  structure : FOR '(' expression ',' expression ',' expression ')' '{' subprogram '}'  animation : translation  translation : TRANSLATE '(' animation_param ',' point_expression ')'  translation : ROTATE '(' animation_param ',' expression ',' AROUND '(' point_expression ')' ')'  animation_param : IDENTIFIER  animation_param : shape  shape : circle_g \n        | rect_g\n        | polygon_g  circle_g : CIRCLE '{' point_expression ',' RADIUS '(' expression ')' ',' color_expression '}'  rect_g : RECT '{' point_expression ',' size_expression ',' color_expression '}'  polygon_g : POLYGON '{' point_expression ',' '(' points_expression ')' ',' color_expression '}'  points_expression : point_expression  points_expression : point_expression ',' points_expression  point_expression : POINT '(' expression ',' expression ')'  size_expression : SIZE '(' expression ',' expression ')'  color_expression : COLOR '(' expression ',' expression ',' expression ')' expression : expression ADD_OP expression\n            | expression MUL_OP expressionexpression : NUMBER\n        | IDENTIFIER expression : '(' expression ')'  expression : ADD_OP expression %prec UMINUS assignation_size : IDENTIFIER '=' size_expression  assignation_point : IDENTIFIER '=' point_expression  assignation_color : IDENTIFIER '=' color_expression  assignation_shape : IDENTIFIER '=' shape  assignation_time : IDENTIFIER '=' TIME '(' expression ')'  assignation : IDENTIFIER '=' expression expression : RANDOM '(' expression ')' expression : RANDOM '(' expression ',' expression ')' "
    
_lr_action_items = {'POLYGON':([0,25,28,29,38,122,],[5,5,5,5,5,5,]),'ADD_OP':([12,29,30,31,32,33,34,36,46,54,55,56,57,58,59,62,65,66,67,68,69,70,71,72,73,76,79,80,81,82,83,84,85,88,93,95,96,97,98,100,105,106,107,108,109,116,121,],[34,34,-33,-34,55,34,34,34,55,34,34,55,-36,34,55,34,34,34,34,34,-32,-31,-35,55,34,55,55,55,55,55,34,-43,55,34,34,34,55,34,34,55,55,55,-44,55,55,34,55,]),'RADIUS':([74,],[86,]),'FOR':([0,25,122,],[14,14,14,]),'SIZE':([29,63,],[47,47,]),')':([30,31,56,57,69,70,71,72,81,84,87,90,91,96,100,105,107,108,109,110,113,120,121,125,],[-33,-34,71,-36,-32,-31,-35,84,94,-43,99,102,-26,107,110,115,-44,117,118,-28,-27,125,126,129,]),'POINT':([26,27,29,37,75,78,103,114,],[40,40,40,40,40,40,40,40,]),'ROTATE':([0,25,122,],[8,8,8,]),'IDENTIFIER':([0,12,25,28,29,33,34,36,38,54,55,58,62,65,66,67,68,73,83,88,93,95,97,98,116,122,],[9,31,9,44,31,31,31,31,44,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,9,]),'AROUND':([92,],[104,]),',':([13,17,21,30,31,41,42,43,44,45,57,59,60,61,69,70,71,72,76,77,79,80,82,84,85,91,102,106,107,110,111,115,118,124,131,],[-20,-22,-21,-33,-34,63,64,-19,-18,65,-36,73,74,75,-32,-31,-35,83,88,89,92,93,95,-43,97,103,112,116,-44,-28,-24,-29,123,-25,-23,]),'PRINT':([0,25,122,],[12,12,12,]),'MUL_OP':([30,31,32,46,56,57,59,69,70,71,72,76,79,80,81,82,84,85,96,100,105,106,107,108,109,121,],[-33,-34,54,54,54,-36,54,-32,54,-35,54,54,54,54,54,54,-43,54,54,54,54,54,-44,54,54,54,]),'RECT':([0,25,28,29,38,122,],[4,4,4,4,4,4,]),';':([1,2,3,6,7,10,11,13,16,17,18,19,21,23,30,31,32,46,48,49,50,51,57,69,70,71,84,94,99,107,110,111,115,124,126,129,130,131,],[25,-12,-4,-11,-6,-5,-8,-20,-7,-22,-10,-15,-21,-9,-33,-34,-13,-42,-40,-39,-38,-37,-36,-32,-31,-35,-43,-41,-16,-44,-28,-24,-29,-25,-30,-17,-14,-23,]),'}':([25,39,101,119,126,127,128,],[-2,-3,111,124,-30,130,131,]),'TIME':([29,],[52,]),'RANDOM':([12,29,33,34,36,54,55,58,62,65,66,67,68,73,83,88,93,95,97,98,116,],[35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,]),'CIRCLE':([0,25,28,29,38,122,],[15,15,15,15,15,15,]),'(':([8,12,14,20,29,33,34,35,36,40,47,52,53,54,55,58,62,64,65,66,67,68,73,83,86,88,93,95,97,98,104,116,],[28,33,36,38,33,33,33,58,33,62,66,67,68,33,33,33,33,78,33,33,33,33,33,33,98,33,33,33,33,33,114,33,]),'NUMBER':([12,29,33,34,36,54,55,58,62,65,66,67,68,73,83,88,93,95,97,98,116,],[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,]),'TRANSLATE':([0,25,122,],[20,20,20,]),'COLOR':([29,89,112,123,],[53,53,53,53,]),'=':([9,],[29,]),'$end':([22,24,25,39,],[-1,0,-2,-3,]),'{':([4,5,15,117,],[26,27,37,122,]),}

_lr_action = {}
for _k, _v in _lr_action_items.items():
   for _x,_y in zip(_v[0],_v[1]):
      if not _x in _lr_action:  _lr_action[_x] = {}
      _lr_action[_x][_k] = _y
del _lr_action_items

_lr_goto_items = {'circle_g':([0,25,28,29,38,122,],[13,13,13,13,13,13,]),'statement':([0,25,122,],[1,1,1,]),'animation':([0,25,122,],[2,2,2,]),'expression':([12,29,33,34,36,54,55,58,62,65,66,67,68,73,83,88,93,95,97,98,116,],[32,46,56,57,59,69,70,72,76,79,80,81,82,85,96,100,105,106,108,109,121,]),'assignation':([0,25,122,],[3,3,3,]),'shape':([0,25,28,29,38,122,],[6,6,43,48,43,6,]),'points_expression':([78,103,],[90,113,]),'assignation_color':([0,25,122,],[7,7,7,]),'assignation_shape':([0,25,122,],[10,10,10,]),'color_expression':([29,89,112,123,],[49,101,119,128,]),'point_expression':([26,27,29,37,75,78,103,114,],[41,42,50,60,87,91,91,120,]),'assignation_size':([0,25,122,],[11,11,11,]),'size_expression':([29,63,],[51,77,]),'program':([0,],[24,]),'translation':([0,25,122,],[19,19,19,]),'animation_param':([28,38,],[45,61,]),'polygon_g':([0,25,28,29,38,122,],[17,17,17,17,17,17,]),'structure':([0,25,122,],[18,18,18,]),'rect_g':([0,25,28,29,38,122,],[21,21,21,21,21,21,]),'subprogram':([0,25,122,],[22,39,127,]),'assignation_time':([0,25,122,],[23,23,23,]),'assignation_point':([0,25,122,],[16,16,16,]),}

_lr_goto = {}
for _k, _v in _lr_goto_items.items():
   for _x, _y in zip(_v[0], _v[1]):
       if not _x in _lr_goto: _lr_goto[_x] = {}
       _lr_goto[_x][_k] = _y
del _lr_goto_items
_lr_productions = [
  ("S' -> program","S'",1,None,None,None),
  ('program -> subprogram','program',1,'p_program_statement','parser5.py',7),
  ('subprogram -> statement ;','subprogram',2,'p_program_subprogram','parser5.py',11),
  ('subprogram -> statement ; subprogram','subprogram',3,'p_program_recursive','parser5.py',15),
  ('statement -> assignation','statement',1,'p_statement','parser5.py',19),
  ('statement -> assignation_shape','statement',1,'p_statement','parser5.py',20),
  ('statement -> assignation_color','statement',1,'p_statement','parser5.py',21),
  ('statement -> assignation_point','statement',1,'p_statement','parser5.py',22),
  ('statement -> assignation_size','statement',1,'p_statement','parser5.py',23),
  ('statement -> assignation_time','statement',1,'p_statement','parser5.py',24),
  ('statement -> structure','statement',1,'p_statement','parser5.py',25),
  ('statement -> shape','statement',1,'p_statement','parser5.py',26),
  ('statement -> animation','statement',1,'p_statement','parser5.py',27),
  ('statement -> PRINT expression','statement',2,'p_statement_print','parser5.py',31),
  ('structure -> FOR ( expression , expression , expression ) { subprogram }','structure',11,'p_structure','parser5.py',35),
  ('animation -> translation','animation',1,'p_animation','parser5.py',39),
  ('translation -> TRANSLATE ( animation_param , point_expression )','translation',6,'p_animation_translation','parser5.py',43),
  ('translation -> ROTATE ( animation_param , expression , AROUND ( point_expression ) )','translation',11,'p_animation_rotation','parser5.py',47),
  ('animation_param -> IDENTIFIER','animation_param',1,'p_animation_param_id','parser5.py',51),
  ('animation_param -> shape','animation_param',1,'p_animation_param_shape','parser5.py',55),
  ('shape -> circle_g','shape',1,'p_shape','parser5.py',59),
  ('shape -> rect_g','shape',1,'p_shape','parser5.py',60),
  ('shape -> polygon_g','shape',1,'p_shape','parser5.py',61),
  ('circle_g -> CIRCLE { point_expression , RADIUS ( expression ) , color_expression }','circle_g',11,'p_circle_g','parser5.py',65),
  ('rect_g -> RECT { point_expression , size_expression , color_expression }','rect_g',8,'p_rect_g','parser5.py',69),
  ('polygon_g -> POLYGON { point_expression , ( points_expression ) , color_expression }','polygon_g',10,'p_polygon_g','parser5.py',73),
  ('points_expression -> point_expression','points_expression',1,'p_expression_points','parser5.py',77),
  ('points_expression -> point_expression , points_expression','points_expression',3,'p_expression_points_recursive','parser5.py',81),
  ('point_expression -> POINT ( expression , expression )','point_expression',6,'p_expression_point','parser5.py',85),
  ('size_expression -> SIZE ( expression , expression )','size_expression',6,'p_expression_size','parser5.py',89),
  ('color_expression -> COLOR ( expression , expression , expression )','color_expression',8,'p_expression_color','parser5.py',93),
  ('expression -> expression ADD_OP expression','expression',3,'p_expression_op','parser5.py',97),
  ('expression -> expression MUL_OP expression','expression',3,'p_expression_op','parser5.py',98),
  ('expression -> NUMBER','expression',1,'p_expression_num_or_var','parser5.py',102),
  ('expression -> IDENTIFIER','expression',1,'p_expression_num_or_var','parser5.py',103),
  ('expression -> ( expression )','expression',3,'p_expression_paren','parser5.py',107),
  ('expression -> ADD_OP expression','expression',2,'p_minus','parser5.py',111),
  ('assignation_size -> IDENTIFIER = size_expression','assignation_size',3,'p_assign_size','parser5.py',115),
  ('assignation_point -> IDENTIFIER = point_expression','assignation_point',3,'p_assign_point','parser5.py',119),
  ('assignation_color -> IDENTIFIER = color_expression','assignation_color',3,'p_assign_color','parser5.py',123),
  ('assignation_shape -> IDENTIFIER = shape','assignation_shape',3,'p_assign_shape','parser5.py',127),
  ('assignation_time -> IDENTIFIER = TIME ( expression )','assignation_time',6,'p_assign_time','parser5.py',131),
  ('assignation -> IDENTIFIER = expression','assignation',3,'p_assign','parser5.py',135),
  ('expression -> RANDOM ( expression )','expression',4,'p_expression_random_max','parser5.py',146),
  ('expression -> RANDOM ( expression , expression )','expression',6,'p_expression_random_min_max','parser5.py',150),
]
