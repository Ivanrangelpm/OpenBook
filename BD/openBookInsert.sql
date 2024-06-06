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

--  ficCientifica terror biografia aventura drama romance desenvolvimento
INSERT INTO livro (nome, autor, genero, nota, dtLeitura, fotoLivro, fkUsuario) VALUES 
('O Homem Mais Rico da Babilonia', 'George Clason', 'desenvolvimento', 3, '2023-07-14', 'https://m.media-amazon.com/images/I/81ehX6Quw2L._SY425_.jpg', 1),
('Steve Jobs', 'Walter Isaacson', 'biografia', 4.8, '2023-08-20', 'https://m.media-amazon.com/images/I/41OnkWAt1SL._SY445_SX342_.jpg', 1),
('Elon Musk', 'Walter Isaacson', 'biografia', 4.0, '2023-09-14', 'https://m.media-amazon.com/images/I/418hYhj8vZL._SY445_SX342_.jpg', 1),
('Harry Potter e a Pedra Filosofal', 'JK Rowling', 'aventura', 5, '2023-10-21', 'https://m.media-amazon.com/images/I/81ibfYk4qmL._SY425_.jpg', 1),
('Harry Potter e a Câmara Secreta', 'JK Rowling', 'aventura', 4.5, '2023-10-25', 'https://m.media-amazon.com/images/I/51SnGLrrJcL._SY445_SX342_.jpg', 1),
('Harry Potter e o Cálice de Fogo', 'JK Rowling', 'aventura', 4.7, '2023-11-14', 'https://m.media-amazon.com/images/I/81nTLN-kz7L._SY425_.jpg', 1),
('Game of Thrones 1', 'George Martin', 'aventura', 4.8, '2024-01-02', 'https://m.media-amazon.com/images/I/41UKpOWrZVL._SY445_SX342_.jpg', 1),
('Game of Thrones 2', 'George Martin', 'aventura', 4.7, '2024-02-02', 'https://m.media-amazon.com/images/I/51OxMUhiXwL._SY445_SX342_.jpg', 1),
('Game of Thrones 3', 'George Martin', 'aventura', 4.5, '2024-06-02', 'https://m.media-amazon.com/images/I/51lbSoFZYwL._SY445_SX342_.jpg', 1),
('Game of Thrones 4', 'George Martin', 'aventura', 3.5, '2024-06-05', 'https://m.media-amazon.com/images/I/41j4e8si8cL._SY445_SX342_.jpg', 1),
('Game of Thrones 5', 'George Martin', 'aventura', 2, '2024-06-07', 'https://m.media-amazon.com/images/I/51SRGgaei2L._SY445_SX342_.jpg', 1);
    
insert into discussao (titulo, fkForum, fkCriador ) VALUES ('O grande irmão existia?', 1, 1);
insert into comentario (texto, fkTopico, fkUsuario) VALUES ('Eu acho que ele era só uma metafora', 1,1 );



SELECT * FROM usuario;
SELECT * FROM forum;
SELECT * FROM discussao;
SELECT * FROM comentario;
SELECT * FROM livro;

show tables from OpenBook;