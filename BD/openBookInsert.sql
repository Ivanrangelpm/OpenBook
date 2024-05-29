USE OpenBook;

INSERT into usuario ( nome, nick, email, senha, foto) VALUES 
	('Joao Augusto Cabral', 'Joaozin', 'joaozin@gmail.com', '12345', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsylWHBKjwb5nSRCSaNrA3CzJdgWGTlxlKw&usqp=CAU'), 
	('Ivan Rangel', 'Ivanzito', 'joaozin@gmail.com', 'teste!123', 'https://awoiaf.westeros.org/images/thumb/1/18/Mauro_Dal_Bo_Small_Paul.jpg/450px-Mauro_Dal_Bo_Small_Paul.jpg'),
	('Frabizio Gonçalves Bragança', 'Frabs', 'frabs@gmail.com', 'agrvai@@', 'https://awoiaf.westeros.org/images/thumb/c/ca/Daenerys_by_Hylora.JPG/450px-Daenerys_by_Hylora.JPG'),
	('Bidu Pereira Rodrigues', 'Bidu', 'bidu@gmail.com', '55tentei', 'https://upload.wikimedia.org/wikipedia/pt/e/e1/Bidu.png');

INSERT INTO forum (nomeForum, fotoForum, fkAdm) VALUES 
	('Harry Potter', 'https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg', 1),
	('Rangers', 'https://upload.wikimedia.org/wikipedia/pt/3/35/Ponte_em_Chamas.png', 3),
	('Companhia de herois', 'https://m.media-amazon.com/images/I/41bwWukefwL._SY445_SX342_.jpg', 2),
	('Revolução dos bichos', 'https://m.media-amazon.com/images/I/91BsZhxCRjL._SY425_.jpg', 4),
	('Game of Thrones', 'https://m.media-amazon.com/images/I/51SRGgaei2L._SY445_SX342_.jpg', 2);
    
INSERT INTO discussao (titulo, fkForum, fkCriador) VALUES 
	('Por que o Dobby gostava tanto de meias?', 1, 2),
	('De que casa eu seria se entrasse em Hogwarts', 1, 4),
	('Quem deveria ter ganhado a guerra dos tronos?', 5, 3),
	('Qual seria o nome do seu lobo/dragão?', 5, 2),
	('Qual a logica do cavalo mais rapido ter formato de barril?', 2, 1),
	('Esses caras foram guerreiros', 3, 3),
	('Qual dos gemeos era pior?', 1, 4),
	('Nunca ficaria do lado da Daenerys', 5, 2);
    
    

SELECT * FROM usuario;
SELECT * FROM forum;
SELECT * FROM discussao;
SELECT * FROM comentario;
SELECT * FROM livro;
