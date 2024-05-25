-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE OpenBook;

USE OpenBook;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);

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
    titulo varchar(45),
	descricao varchar(200),
    fkForum int,
    constraint fkForumDiscussao foreign key (fkForum) references forum(idForum)
);

CREATE TABLE comentario (
	idComentario INT primary key auto_increment,
    texto VARCHAR(300),
    fkDiscussao int,
    fkUsuario int,
    constraint fkDiscussaoComentario foreign key (fkDiscussao) references discussao(idDiscussao),
    constraint fkUsuarioComentario foreign key (fkUsuario) references usuario(id)
);


CREATE TABLE livro (
	idLivro int primary key auto_increment,
	nome VARCHAR(45),
	autor VARCHAR(45),
	descricao VARCHAR(400),
	genero VARCHAR(45),
    fotoLivro VARCHAR(200)
);


select* from usuario;
select * from forum;





CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
