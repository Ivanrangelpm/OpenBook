CREATE DATABASE openBook;

USE openBook;

CREATE TABLE usuario(
	idUsuario INT primary key auto_increment,
	nickname varchar(45),
    nome VARCHAR (80),
	email varchar(45),
    senha VARCHAR(45)
);


CREATE TABLE livro (
	idLivro int primary key auto_increment,
	nome VARCHAR(45),
	autor VARCHAR(45),
	descricao VARCHAR(400),
	genero VARCHAR(45)
);

CREATE TABLE forum (
	idForum int primary key auto_increment,
    fkLivro int,
    CONSTRAINT fkLivroForum foreign key (fkLivro) references livro(idLivro)
);

CREATE TABLE discussao (
	idDiscussao INT primary key auto_increment,
    titulo varchar(45),
	descricao varchar(200),
    fkForum int,
    constraint fkForumDiscussao foreign key (fkForum) references forum(idForum)
);

CREATE TABLE comentario (
	idComentario INT primary key auto_increment,
    texto VARCHAR(300),
    fkDiscussao int,
    constraint fkDiscussaoComentario foreign key (fkDiscussao) references discussao(idDiscussao)
);