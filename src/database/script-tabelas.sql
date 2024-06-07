
/*
comandos para mysql server
*/

CREATE DATABASE OpenBook;

USE OpenBook;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	nick VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    foto VARCHAR(200)
);

CREATE TABLE forum (
	idForum int primary key auto_increment,
    nomeForum varchar(45),
    fotoForum varchar(200),
    fkAdm int,
    constraint fkUsuarioForum foreign key (fkAdm) references usuario(id)
);

CREATE TABLE discussao (
	idDiscussao INT primary key auto_increment,
    titulo varchar(70),
    fkForum int,
    fkCriador int,
    constraint fkForumDiscussao foreign key (fkForum) references forum(idForum),
    constraint fkUsuarioDiscussao foreign key (fkCriador) references usuario(id)
);

CREATE TABLE comentario (
	idComentario INT primary key auto_increment,
    texto VARCHAR(300),
    fkTopico int,
    fkUsuario int,
    dtComent datetime default current_timestamp,
    constraint fkTopicoComentario foreign key (fkTopico) references discussao(idDiscussao),
    constraint fkUsuarioComentario foreign key (fkUsuario) references usuario(id)
);

        
CREATE TABLE livro (
	idLivro int primary key auto_increment,
	nome VARCHAR(80),
	autor VARCHAR(45),
	genero VARCHAR(45),
    nota decimal(5,2),
    dtLeitura date,
    fotoLivro VARCHAR(200),
    fkUsuario int,
    constraint fkUsuarioLivro foreign key (fkUsuario) references usuario(id)
);



