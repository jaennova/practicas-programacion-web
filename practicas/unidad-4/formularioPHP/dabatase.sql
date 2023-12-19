CREATE DATABASE mydatabase;
USE mydatabase;

CREATE TABLE `myguests` (
  `id` int(6) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `numero_control` varchar(50) DEFAULT NULL,
  `carrera` varchar(50) DEFAULT NULL,
  `rfc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
