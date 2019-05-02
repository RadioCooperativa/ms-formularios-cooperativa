CREATE TABLE T_MARCA(
	id_marca				int not null,
	id_modelo				int not null,
	nombre_marca 			varchar(100) null,
	descripcion_marca 		varchar(100) null,
	fecha_creacion 			date null,
  	fecha_modificacion 		date null,
  	usuario_creacion 		int null,
  	usuario_modificacion 	int null,
 	vigente 				bit,
 	CONSTRAINT PK_T_MARCA PRIMARY KEY (id_marca)
)ENGINE=InnoDb;

CREATE TABLE T_MODELO(
	id_modelo				int not null,
	nombre_modelo			varchar(100) null,
	descripcion_modelo		varchar(100) null,
	fecha_creacion 			date null,
  	fecha_modificacion 		date null,
  	usuario_creacion 		int null,
  	usuario_modificacion 	int null,
 	vigente 				bit,
 	CONSTRAINT PK_T_SUCURSAL PRIMARY KEY (id_modelo)
)ENGINE=InnoDb;

CREATE TABLE T_REGISTROS_MARCA_CONCESIONARIA(
	id_marca 			int not null,
	id_concesionaria 	int not null
)ENGINE=InnoDb;

CREATE TABLE T_CONCESIONARIA(
	id_concesionaria		int not null,
	id_sucursal 			int not null,
	nombre_sucursal			varchar(100) null,
	descripcion_sucursal 	varchar(100) null,
	id_comuna				int null,
	direccion				varchar(100),
	fecha_creacion 			date null,
  	fecha_modificacion 		date null,
  	usuario_creacion 		int null,
  	usuario_modificacion 	int null,
 	vigente 				bit,
 	CONSTRAINT PK_T_CONCESIONARIA PRIMARY KEY (id_concesionaria)
)ENGINE=InnoDb;

CREATE TABLE T_SUCURSAL(
	id_sucursal 			int not null,
	nombre_sucursal			varchar(100) null,
	descripcion_sucursal 	varchar(100) null,
	id_comuna				int null,
	direccion				varchar(100),
	fecha_creacion 			date null,
  	fecha_modificacion 		date null,
  	usuario_creacion 		int null,
  	usuario_modificacion 	int null,
 	vigente 				bit,
 	CONSTRAINT PK_T_SUCURSAL PRIMARY KEY (id_sucursal)
)ENGINE=InnoDb;

/* === FOREIGN === */
ALTER TABLE T_MARCA ADD CONSTRAINT FK_T_MARCA_MODELO FOREIGN KEY(id_modelo)
REFERENCES T_MODELO (id_modelo);

ALTER TABLE T_CONCESIONARIA ADD CONSTRAINT FK_T_CONCESIONARIA_SUCURSAL FOREIGN KEY(id_sucursal)
REFERENCES T_SUCURSAL (id_sucursal);

ALTER TABLE T_REGISTROS_MARCA_CONCESIONARIA ADD CONSTRAINT FK_T_REGISTROS_MARCA_CONCESIONARIA_MARCA FOREIGN KEY(id_marca)
REFERENCES T_MARCA (id_marca);

ALTER TABLE T_REGISTROS_MARCA_CONCESIONARIA ADD CONSTRAINT FK_T_REGISTROS_MARCA_CONCESIONARIA_CONCESIONARIA FOREIGN KEY(id_concesionaria)
REFERENCES T_CONCESIONARIA (id_concesionaria);