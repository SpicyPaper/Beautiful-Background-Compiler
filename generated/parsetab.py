
# parsetab.py
# This file is automatically generated. Do not edit.
# pylint: disable=W,C,R
_tabversion = '3.10'

_lr_method = 'LALR'

_lr_signature = "leftADD_OPleftMUL_OPrightUMINUSADD_OP AROUND CIRCLE COLOR FOR IDENTIFIER MUL_OP NUMBER POINT POLYGON PRINT RADIUS RANDOM RECT ROTATE SIZE TRANSLATE program : subprogram  subprogram : statement ';'  subprogram : statement ';' subprogram  statement : assignation\n        | assignation_shape\n        | structure\n        | shape\n        | animation  statement : PRINT expression  structure : FOR '(' expression ',' expression ',' expression ')' '{' subprogram '}'  animation : translation  translation : TRANSLATE '(' animation_param ',' point_expression ')'  translation : ROTATE '(' animation_param ',' expression ',' AROUND '(' point_expression ')' ')'  animation_param : IDENTIFIER  animation_param : shape  shape : circle_g \n        | rect_g\n        | polygon_g  circle_g : CIRCLE '{' point_expression ',' RADIUS '(' expression ')' ',' color_expression '}'  rect_g : RECT '{' point_expression ',' size_expression ',' color_expression '}'  polygon_g : POLYGON '{' '(' points_expression ')' ',' color_expression '}'  points_expression : point_expression  points_expression : point_expression ',' points_expression  point_expression : POINT '(' expression ',' expression ')'  size_expression : SIZE '(' expression ',' expression ')'  color_expression : COLOR '(' expression ',' expression ',' expression ')' expression : expression ADD_OP expression\n            | expression MUL_OP expressionexpression : NUMBER\n        | IDENTIFIER expression : '(' expression ')'  expression : ADD_OP expression %prec UMINUS assignation_shape : IDENTIFIER '=' shape  assignation : IDENTIFIER '=' expression expression : RANDOM '(' expression ')' expression : RANDOM '(' expression ',' expression ')' "
    
_lr_action_items = {'PRINT':([0,21,102,],[9,9,9,]),'IDENTIFIER':([0,9,21,23,26,28,29,33,34,36,37,40,56,58,63,65,76,77,78,80,98,99,102,109,116,],[10,25,10,25,25,25,25,49,49,25,25,25,25,25,25,25,25,25,25,25,25,25,10,25,25,]),'FOR':([0,21,102,],[11,11,11,]),'CIRCLE':([0,21,28,33,34,102,],[16,16,16,16,16,16,]),'RECT':([0,21,28,33,34,102,],[17,17,17,17,17,17,]),'POLYGON':([0,21,28,33,34,102,],[18,18,18,18,18,18,]),'TRANSLATE':([0,21,102,],[19,19,19,]),'ROTATE':([0,21,102,],[20,20,20,]),'$end':([1,2,21,35,],[0,-1,-2,-3,]),';':([3,4,5,6,7,8,12,13,14,15,22,24,25,38,41,42,52,53,54,64,83,85,97,100,112,113,115,],[21,-4,-5,-6,-7,-8,-16,-17,-18,-11,-9,-29,-30,-32,-34,-33,-27,-28,-31,-35,-12,-36,-20,-21,-10,-19,-13,]),'NUMBER':([9,23,26,28,29,36,37,40,56,58,63,65,76,77,78,80,98,99,109,116,],[24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,]),'(':([9,11,19,20,23,26,27,28,29,32,36,37,40,45,56,58,63,65,67,70,76,77,78,80,90,93,98,99,109,116,],[26,29,33,34,26,26,40,26,26,47,26,26,26,58,26,26,26,26,77,80,26,26,26,26,98,101,26,26,26,26,]),'ADD_OP':([9,22,23,24,25,26,28,29,36,37,38,39,40,41,43,52,53,54,55,56,58,63,64,65,66,68,74,75,76,77,78,80,85,86,87,88,91,98,99,104,105,109,114,116,117,],[23,36,23,-29,-30,23,23,23,23,23,-32,36,23,36,36,-27,-28,-31,36,23,23,23,-35,23,36,36,36,36,23,23,23,23,-36,36,36,36,36,23,23,36,36,23,36,23,36,]),'RANDOM':([9,23,26,28,29,36,37,40,56,58,63,65,76,77,78,80,98,99,109,116,],[27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,]),'=':([10,],[28,]),',':([12,13,14,24,25,38,43,44,46,48,49,50,51,52,53,54,55,61,64,66,68,69,71,74,85,91,95,96,97,100,104,110,113,114,],[-16,-17,-18,-29,-30,-32,56,57,59,62,-14,-15,63,-27,-28,-31,65,72,-35,76,78,79,81,84,-36,99,103,-24,-20,-21,109,-25,-19,116,]),'{':([16,17,18,94,],[30,31,32,102,]),'}':([21,35,89,92,107,108,118,],[-2,-3,97,100,112,113,-26,]),'MUL_OP':([22,24,25,38,39,41,43,52,53,54,55,64,66,68,74,75,85,86,87,88,91,104,105,114,117,],[37,-29,-30,-32,37,37,37,37,-28,-31,37,-35,37,37,37,37,-36,37,37,37,37,37,37,37,37,]),')':([24,25,38,39,52,53,54,55,60,61,64,73,75,82,85,86,87,88,96,105,106,111,117,],[-29,-30,-32,54,-27,-28,-31,64,71,-22,-35,83,85,-23,-36,94,95,96,-24,110,111,115,118,]),'POINT':([30,31,47,62,72,101,],[45,45,45,45,45,45,]),'RADIUS':([57,],[67,]),'SIZE':([59,],[70,]),'COLOR':([79,81,103,],[90,90,90,]),'AROUND':([84,],[93,]),}

_lr_action = {}
for _k, _v in _lr_action_items.items():
   for _x,_y in zip(_v[0],_v[1]):
      if not _x in _lr_action:  _lr_action[_x] = {}
      _lr_action[_x][_k] = _y
del _lr_action_items

_lr_goto_items = {'program':([0,],[1,]),'subprogram':([0,21,102,],[2,35,107,]),'statement':([0,21,102,],[3,3,3,]),'assignation':([0,21,102,],[4,4,4,]),'assignation_shape':([0,21,102,],[5,5,5,]),'structure':([0,21,102,],[6,6,6,]),'shape':([0,21,28,33,34,102,],[7,7,42,50,50,7,]),'animation':([0,21,102,],[8,8,8,]),'circle_g':([0,21,28,33,34,102,],[12,12,12,12,12,12,]),'rect_g':([0,21,28,33,34,102,],[13,13,13,13,13,13,]),'polygon_g':([0,21,28,33,34,102,],[14,14,14,14,14,14,]),'translation':([0,21,102,],[15,15,15,]),'expression':([9,23,26,28,29,36,37,40,56,58,63,65,76,77,78,80,98,99,109,116,],[22,38,39,41,43,52,53,55,66,68,74,75,86,87,88,91,104,105,114,117,]),'point_expression':([30,31,47,62,72,101,],[44,46,61,73,61,106,]),'animation_param':([33,34,],[48,51,]),'points_expression':([47,72,],[60,82,]),'size_expression':([59,],[69,]),'color_expression':([79,81,103,],[89,92,108,]),}

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
  ('statement -> structure','statement',1,'p_statement','parser5.py',21),
  ('statement -> shape','statement',1,'p_statement','parser5.py',22),
  ('statement -> animation','statement',1,'p_statement','parser5.py',23),
  ('statement -> PRINT expression','statement',2,'p_statement_print','parser5.py',27),
  ('structure -> FOR ( expression , expression , expression ) { subprogram }','structure',11,'p_structure','parser5.py',31),
  ('animation -> translation','animation',1,'p_animation','parser5.py',35),
  ('translation -> TRANSLATE ( animation_param , point_expression )','translation',6,'p_animation_translation','parser5.py',39),
  ('translation -> ROTATE ( animation_param , expression , AROUND ( point_expression ) )','translation',11,'p_animation_rotation','parser5.py',43),
  ('animation_param -> IDENTIFIER','animation_param',1,'p_animation_param_id','parser5.py',47),
  ('animation_param -> shape','animation_param',1,'p_animation_param_shape','parser5.py',51),
  ('shape -> circle_g','shape',1,'p_shape','parser5.py',55),
  ('shape -> rect_g','shape',1,'p_shape','parser5.py',56),
  ('shape -> polygon_g','shape',1,'p_shape','parser5.py',57),
  ('circle_g -> CIRCLE { point_expression , RADIUS ( expression ) , color_expression }','circle_g',11,'p_circle_g','parser5.py',61),
  ('rect_g -> RECT { point_expression , size_expression , color_expression }','rect_g',8,'p_rect_g','parser5.py',65),
  ('polygon_g -> POLYGON { ( points_expression ) , color_expression }','polygon_g',8,'p_polygon_g','parser5.py',69),
  ('points_expression -> point_expression','points_expression',1,'p_expression_points','parser5.py',73),
  ('points_expression -> point_expression , points_expression','points_expression',3,'p_expression_points_recursive','parser5.py',77),
  ('point_expression -> POINT ( expression , expression )','point_expression',6,'p_expression_point','parser5.py',81),
  ('size_expression -> SIZE ( expression , expression )','size_expression',6,'p_expression_size','parser5.py',85),
  ('color_expression -> COLOR ( expression , expression , expression )','color_expression',8,'p_expression_color','parser5.py',89),
  ('expression -> expression ADD_OP expression','expression',3,'p_expression_op','parser5.py',93),
  ('expression -> expression MUL_OP expression','expression',3,'p_expression_op','parser5.py',94),
  ('expression -> NUMBER','expression',1,'p_expression_num_or_var','parser5.py',98),
  ('expression -> IDENTIFIER','expression',1,'p_expression_num_or_var','parser5.py',99),
  ('expression -> ( expression )','expression',3,'p_expression_paren','parser5.py',103),
  ('expression -> ADD_OP expression','expression',2,'p_minus','parser5.py',107),
  ('assignation_shape -> IDENTIFIER = shape','assignation_shape',3,'p_assign_shape','parser5.py',111),
  ('assignation -> IDENTIFIER = expression','assignation',3,'p_assign','parser5.py',115),
  ('expression -> RANDOM ( expression )','expression',4,'p_expression_random_max','parser5.py',126),
  ('expression -> RANDOM ( expression , expression )','expression',6,'p_expression_random_min_max','parser5.py',130),
]
