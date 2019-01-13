
# parsetab.py
# This file is automatically generated. Do not edit.
# pylint: disable=W,C,R
_tabversion = '3.10'

_lr_method = 'LALR'

_lr_signature = "leftADD_OPleftMUL_OPrightUMINUSADD_OP AROUND CIRCLE COLOR FOR IDENTIFIER MUL_OP NUMBER POINT POLYGON PRINT RADIUS RANDOM RECT ROTATE SIZE TIME TRANSLATE program : subprogram  subprogram : statement ';'  subprogram : statement ';' subprogram  statement : assignation\n        | assignation_shape\n        | assignation_color\n        | assignation_point\n        | assignation_size\n        | assignation_time\n        | structure\n        | shape\n        | animation  statement : PRINT expression  structure : FOR '(' expression ',' expression ',' expression ')' '{' subprogram '}'  animation : translation  translation : TRANSLATE '(' animation_param ',' point_expression ')'  translation : ROTATE '(' animation_param ',' expression ',' AROUND '(' point_expression ')' ')'  animation_param : IDENTIFIER  animation_param : shape  shape : circle_g \n        | rect_g\n        | polygon_g  circle_g : CIRCLE '{' point_expression ',' RADIUS '(' expression ')' ',' color_expression '}'  rect_g : RECT '{' point_expression ',' size_expression ',' color_expression '}'  polygon_g : POLYGON '{' point_expression ',' '(' points_expression ')' ',' color_expression '}'  points_expression : point_expression  points_expression : point_expression ',' points_expression  point_expression : POINT '(' expression ',' expression ')'  size_expression : SIZE '(' expression ',' expression ')'  color_expression : COLOR '(' expression ',' expression ',' expression ')' expression : expression ADD_OP expression\n            | expression MUL_OP expressionexpression : NUMBER\n        | IDENTIFIER expression : '(' expression ')'  expression : ADD_OP expression %prec UMINUS assignation_size : IDENTIFIER '=' size_expression  assignation_point : IDENTIFIER '=' point_expression  assignation_color : IDENTIFIER '=' color_expression  assignation_shape : IDENTIFIER '=' shape  assignation_time : IDENTIFIER '=' TIME '(' expression ')'  assignation : IDENTIFIER '=' expression expression : RANDOM '(' expression ')' expression : RANDOM '(' expression ',' expression ')' "
    
_lr_action_items = {'PRINT':([0,25,120,],[13,13,13,]),'IDENTIFIER':([0,13,25,27,30,32,33,37,38,40,41,44,66,67,68,69,70,75,77,90,91,92,93,94,110,120,],[14,29,14,29,29,29,29,59,59,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,14,]),'FOR':([0,25,120,],[15,15,15,]),'CIRCLE':([0,25,32,37,38,120,],[20,20,20,20,20,20,]),'RECT':([0,25,32,37,38,120,],[21,21,21,21,21,21,]),'POLYGON':([0,25,32,37,38,120,],[22,22,22,22,22,22,]),'TRANSLATE':([0,25,120,],[23,23,23,]),'ROTATE':([0,25,120,],[24,24,24,]),'$end':([1,2,25,39,],[0,-1,-2,-3,]),';':([3,4,5,6,7,8,9,10,11,12,16,17,18,19,26,28,29,42,45,46,47,48,49,62,63,64,76,89,98,100,111,112,115,124,127,129,130,131,],[25,-4,-5,-6,-7,-8,-9,-10,-11,-12,-20,-21,-22,-15,-13,-33,-34,-36,-42,-40,-39,-38,-37,-31,-32,-35,-43,-41,-16,-44,-28,-29,-24,-30,-25,-14,-23,-17,]),'NUMBER':([13,27,30,32,33,40,41,44,66,67,68,69,70,75,77,90,91,92,93,94,110,],[28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,]),'(':([13,15,23,24,27,30,31,32,33,40,41,44,50,51,52,53,66,67,68,69,70,73,75,77,83,90,91,92,93,94,109,110,],[30,33,37,38,30,30,44,30,30,30,30,30,66,67,68,69,30,30,30,30,30,85,30,30,94,30,30,30,30,30,118,30,]),'ADD_OP':([13,26,27,28,29,30,32,33,40,41,42,43,44,45,54,62,63,64,65,66,67,68,69,70,75,76,77,78,79,80,81,82,87,88,90,91,92,93,94,100,101,102,103,104,105,110,119,],[27,40,27,-33,-34,27,27,27,27,27,-36,40,27,40,40,-31,-32,-35,40,27,27,27,27,27,27,-43,27,40,40,40,40,40,40,40,27,27,27,27,27,-44,40,40,40,40,40,27,40,]),'RANDOM':([13,27,30,32,33,40,41,44,66,67,68,69,70,75,77,90,91,92,93,94,110,],[31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,]),'=':([14,],[32,]),',':([16,17,18,28,29,42,54,55,56,57,58,59,60,61,62,63,64,65,76,79,80,81,82,84,87,96,100,101,108,111,112,114,115,127,130,],[-20,-21,-22,-33,-34,-36,70,71,72,73,74,-18,-19,75,-31,-32,-35,77,-43,90,91,92,93,95,99,107,-44,110,117,-28,-29,121,-24,-25,-23,]),'{':([20,21,22,113,],[34,35,36,120,]),'}':([25,39,106,122,124,125,126,],[-2,-3,115,127,-30,129,130,]),'MUL_OP':([26,28,29,42,43,45,54,62,63,64,65,76,78,79,80,81,82,87,88,100,101,102,103,104,105,119,],[41,-33,-34,-36,41,41,41,41,-32,-35,41,-43,41,41,41,41,41,41,41,-44,41,41,41,41,41,41,]),')':([28,29,42,43,62,63,64,65,76,78,86,88,96,97,100,102,103,104,105,111,116,119,123,128,],[-33,-34,-36,64,-31,-32,-35,76,-43,89,98,100,-26,108,-44,111,112,113,114,-28,-27,124,128,131,]),'TIME':([32,],[50,]),'COLOR':([32,95,117,121,],[51,51,51,51,]),'POINT':([32,34,35,36,74,85,107,118,],[52,52,52,52,52,52,52,52,]),'SIZE':([32,72,],[53,53,]),'RADIUS':([71,],[83,]),'AROUND':([99,],[109,]),}

_lr_action = {}
for _k, _v in _lr_action_items.items():
   for _x,_y in zip(_v[0],_v[1]):
      if not _x in _lr_action:  _lr_action[_x] = {}
      _lr_action[_x][_k] = _y
del _lr_action_items

_lr_goto_items = {'program':([0,],[1,]),'subprogram':([0,25,120,],[2,39,125,]),'statement':([0,25,120,],[3,3,3,]),'assignation':([0,25,120,],[4,4,4,]),'assignation_shape':([0,25,120,],[5,5,5,]),'assignation_color':([0,25,120,],[6,6,6,]),'assignation_point':([0,25,120,],[7,7,7,]),'assignation_size':([0,25,120,],[8,8,8,]),'assignation_time':([0,25,120,],[9,9,9,]),'structure':([0,25,120,],[10,10,10,]),'shape':([0,25,32,37,38,120,],[11,11,46,60,60,11,]),'animation':([0,25,120,],[12,12,12,]),'circle_g':([0,25,32,37,38,120,],[16,16,16,16,16,16,]),'rect_g':([0,25,32,37,38,120,],[17,17,17,17,17,17,]),'polygon_g':([0,25,32,37,38,120,],[18,18,18,18,18,18,]),'translation':([0,25,120,],[19,19,19,]),'expression':([13,27,30,32,33,40,41,44,66,67,68,69,70,75,77,90,91,92,93,94,110,],[26,42,43,45,54,62,63,65,78,79,80,81,82,87,88,101,102,103,104,105,119,]),'color_expression':([32,95,117,121,],[47,106,122,126,]),'point_expression':([32,34,35,36,74,85,107,118,],[48,55,56,57,86,96,96,123,]),'size_expression':([32,72,],[49,84,]),'animation_param':([37,38,],[58,61,]),'points_expression':([85,107,],[97,116,]),}

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
