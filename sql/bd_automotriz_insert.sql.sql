SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `t_concesionaria` (
  `id_concesionaria` int(11) NOT NULL,
  `nombre_concesionaria` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion_concesionaria` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_modificacion` date DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `vigente` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `t_concesionaria` (`id_concesionaria`, `nombre_concesionaria`, `descripcion_concesionaria`, `fecha_creacion`, `fecha_modificacion`, `usuario_creacion`, `usuario_modificacion`, `vigente`) VALUES
(1, 'Hernández Motores', 'Hernández Motores', '2019-05-03', NULL, NULL, NULL, NULL),
(2, 'Balmaceda', 'Balmaceda', '2019-05-03', NULL, NULL, NULL, NULL),
(3, 'Aste', 'Aste', '2019-05-03', NULL, NULL, NULL, NULL),
(4, 'AutoFip', 'AutoFip', '2019-05-03', NULL, NULL, NULL, NULL),
(5, 'Automotora Chicureo', 'Automotora Chicureo', '2019-05-03', NULL, NULL, NULL, NULL),
(6, 'Bruno Fritsch', 'Bruno Fritsch', '2019-05-03', NULL, NULL, NULL, NULL),
(7, 'Kovacs', 'Kovacs', '2019-05-03', NULL, NULL, NULL, NULL),
(8, 'Lira Larrain', 'Lira Larrain', '2019-05-03', NULL, NULL, NULL, NULL),
(9, 'Peugeot', 'Peugeot', '2019-05-03', NULL, NULL, NULL, NULL),
(10, 'Portillo', 'Portillo', '2019-05-03', NULL, NULL, NULL, NULL),
(11, 'Valenzuela Delarze', 'Valenzuela Delarze', '2019-05-03', NULL, NULL, NULL, NULL),
(12, 'Alameda', 'Alameda', '2019-05-04', NULL, NULL, NULL, NULL),
(13, 'Covema', 'Covema', '2019-05-04', NULL, NULL, NULL, NULL),
(14, 'Tecnosur', 'Tecnosur', '2019-05-04', NULL, NULL, NULL, NULL),
(15, 'Tecnocid', 'Tecnocid', '2019-05-04', NULL, NULL, NULL, NULL),
(16, 'Difor', 'Difor', '2019-05-04', NULL, NULL, NULL, NULL),
(17, 'Arecheta', 'Arecheta', '2019-05-04', NULL, NULL, NULL, NULL);

CREATE TABLE `t_marca` (
  `id_marca` int(11) NOT NULL,
  `nombre_marca` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion_marca` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_modificacion` date DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `vigente` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `t_marca` (`id_marca`, `nombre_marca`, `descripcion_marca`, `fecha_creacion`, `fecha_modificacion`, `usuario_creacion`, `usuario_modificacion`, `vigente`) VALUES
(1, 'Peugeot', 'Peugeot', '2019-05-03', NULL, NULL, NULL, NULL);

CREATE TABLE `t_modelo` (
  `id_modelo` int(11) NOT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `nombre_modelo` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion_modelo` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_modificacion` date DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `vigente` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `t_modelo` (`id_modelo`, `id_marca`, `nombre_modelo`, `descripcion_modelo`, `fecha_creacion`, `fecha_modificacion`, `usuario_creacion`, `usuario_modificacion`, `vigente`) VALUES
(1, 1, 'Allure BlueHDi 130 EAT8', 'Allure BlueHDi 130 EAT8', '2019-05-03', NULL, NULL, NULL, NULL),
(2, 1, 'Allure BlueHDi 100', 'Allure BlueHDi 100', '2019-05-03', NULL, NULL, NULL, NULL);

CREATE TABLE `t_registros_marca_concesionaria` (
  `id_marca` int(11) NOT NULL,
  `id_concesionaria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `t_registros_marca_concesionaria` (`id_marca`, `id_concesionaria`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17);

CREATE TABLE `t_registros_modelo_sucursal` (
  `id_modelo` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `t_sucursal` (
  `id_sucursal` int(11) NOT NULL,
  `nombre_sucursal` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion_sucursal` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_comuna` int(11) DEFAULT NULL,
  `id_concesionaria` int(11) DEFAULT NULL,
  `direccion_sucursal` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_modificacion` date DEFAULT NULL,
  `usuario_creacion` int(11) DEFAULT NULL,
  `usuario_modificacion` int(11) DEFAULT NULL,
  `vigente` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `t_sucursal` (`id_sucursal`, `nombre_sucursal`, `descripcion_sucursal`, `id_comuna`, `id_concesionaria`, `direccion_sucursal`, `fecha_creacion`, `fecha_modificacion`, `usuario_creacion`, `usuario_modificacion`, `vigente`) VALUES
(1, 'Antofagasta', 'Antofagasta', 2, 1, 'La que sea', '2019-05-03', NULL, NULL, NULL, NULL),
(2, 'Calama', 'Calama', 12, 1, 'La que sea', '2019-05-03', NULL, NULL, NULL, NULL),
(3, 'Copiapó', 'Copiapó', 17, 2, NULL, '2019-05-03', NULL, NULL, NULL, NULL),
(4, 'La Serena', 'La Serena', 26, 2, NULL, '2019-05-03', NULL, NULL, NULL, NULL),
(5, 'Ovalle', 'Ovalle', 36, 2, NULL, '2019-05-03', NULL, NULL, NULL, NULL),
(6, 'Valparaíso', 'Valparaíso', 41, 3, NULL, '2019-05-03', NULL, NULL, NULL, NULL),
(7, 'Viña del Mar', 'Viña del Mar', 47, 3, NULL, '2019-05-03', NULL, NULL, NULL, NULL),
(8, 'Curauma', 'Curauma', 41, 3, NULL, '2019-05-03', NULL, NULL, NULL, NULL),
(9, 'Los Andes', 'Los Andes', 49, 4, NULL, '2019-05-03', NULL, NULL, NULL, NULL),
(10, 'Colina', 'Colina', 314, 5, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(11, 'Mall Plaza Tobalaba', 'Mall Plaza Tobalaba', 311, 6, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(12, 'Mall Plaza Vespucio', 'Mall Plaza Vespucio', 288, 6, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(13, 'Vicuña Mackenna', 'Vicuña Mackenna', 279, 6, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(14, 'Movicenter', 'Movicenter', 285, 7, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(15, 'Vitacura', 'Vitacura', 310, 7, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(16, 'Providencia', 'Providencia', 301, 8, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(17, 'Providencia', 'Providencia', 301, 9, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(18, 'Huechuraba', 'Huechuraba', 285, 9, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(19, 'Gran Avenida', 'Gran Avenida', 308, 10, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(20, 'La Dehesa', 'La Dehesa', 293, 10, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(21, 'Las Condes', 'Las Condes', 292, 10, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(22, 'Mall plaza oeste', 'Mall plaza oeste', 280, 10, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(23, 'Mall plaza sur', 'Mall plaza sur', 317, 10, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(24, 'Bilbao', 'Bilbao', 301, 11, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(25, 'Irarrazaval', 'Irarrazaval', 298, 11, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(26, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'Mall plaza egaña', 'Mall plaza egaña', 291, 11, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(28, 'Rancagua', 'Rancagua', 79, 12, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(29, 'Curicó', 'Curicó', 125, 12, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(30, 'Talca', 'Talca', 112, 13, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(31, 'Chillán', 'Chillán', 175, 13, NULL, '2019-05-04', NULL, NULL, NULL, NULL),
(32, 'Concepción', 'Concepción', 142, 6, NULL, '2019-05-04', NULL, NULL, NULL, NULL);


ALTER TABLE `t_concesionaria`
  ADD PRIMARY KEY (`id_concesionaria`);

ALTER TABLE `t_marca`
  ADD PRIMARY KEY (`id_marca`);

ALTER TABLE `t_modelo`
  ADD PRIMARY KEY (`id_modelo`),
  ADD KEY `FK_T_MODELO_MARCA` (`id_marca`);

ALTER TABLE `t_registros_marca_concesionaria`
  ADD KEY `FK_T_REGISTROS_MARCA_CONCESIONARIA_MARCA` (`id_marca`),
  ADD KEY `FK_T_REGISTROS_MARCA_CONCESIONARIA_CONCESIONARIA` (`id_concesionaria`);

ALTER TABLE `t_registros_modelo_sucursal`
  ADD KEY `FK_T_REGISTROS_MODELO_SUCURSAL` (`id_modelo`);

ALTER TABLE `t_sucursal`
  ADD PRIMARY KEY (`id_sucursal`),
  ADD KEY `FK_T_SUCURSAL_CONCESIONARIA` (`id_concesionaria`);


ALTER TABLE `t_concesionaria`
  MODIFY `id_concesionaria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

ALTER TABLE `t_marca`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `t_modelo`
  MODIFY `id_modelo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `t_sucursal`
  MODIFY `id_sucursal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;


ALTER TABLE `t_modelo`
  ADD CONSTRAINT `FK_T_MODELO_MARCA` FOREIGN KEY (`id_marca`) REFERENCES `t_marca` (`id_marca`);

ALTER TABLE `t_registros_marca_concesionaria`
  ADD CONSTRAINT `FK_T_REGISTROS_MARCA_CONCESIONARIA_CONCESIONARIA` FOREIGN KEY (`id_concesionaria`) REFERENCES `t_concesionaria` (`id_concesionaria`),
  ADD CONSTRAINT `FK_T_REGISTROS_MARCA_CONCESIONARIA_MARCA` FOREIGN KEY (`id_marca`) REFERENCES `t_marca` (`id_marca`);

ALTER TABLE `t_registros_modelo_sucursal`
  ADD CONSTRAINT `FK_T_REGISTROS_MODELO_SUCURSAL` FOREIGN KEY (`id_modelo`) REFERENCES `t_modelo` (`id_modelo`);

ALTER TABLE `t_sucursal`
  ADD CONSTRAINT `FK_T_SUCURSAL_CONCESIONARIA` FOREIGN KEY (`id_concesionaria`) REFERENCES `t_concesionaria` (`id_concesionaria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
