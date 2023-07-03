-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: emmaus
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `smartphone`
--

DROP TABLE IF EXISTS `smartphone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smartphone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marque` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `couleur` varchar(50) DEFAULT NULL,
  `stockage` int NOT NULL,
  `ram` int NOT NULL,
  `antutu` int NOT NULL,
  `os` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smartphone`
--

LOCK TABLES `smartphone` WRITE;
/*!40000 ALTER TABLE `smartphone` DISABLE KEYS */;
INSERT INTO `smartphone` VALUES (5,'Apple','iPhone 10','gris',64,3,302245,'iOS'),(6,'Apple','iPhone 10','argent',64,3,302245,'iOS'),(7,'Apple','iPhone 10','gris',256,3,302245,'iOS'),(8,'Apple','iPhone 10','argent',256,3,302245,'iOS'),(9,'Apple','iPhone 13','rouge',128,4,775519,'iOS'),(10,'Apple','iPhone 13','bleu',128,4,775519,'iOS'),(11,'Apple','iPhone 13','noir',128,4,775519,'iOS'),(12,'Apple','iPhone 13','blanc',128,4,775519,'iOS'),(13,'Apple','iPhone 13','rouge',256,4,775519,'iOS'),(14,'Apple','iPhone 13','bleu',256,4,775519,'iOS'),(15,'Apple','iPhone 13','noir',256,4,775519,'iOS'),(16,'Apple','iPhone 13','blanc',256,4,775519,'iOS'),(17,'Apple','iPhone XR','blanc',64,3,408205,'iOS'),(18,'Apple','iPhone XR','noir',64,3,408205,'iOS'),(19,'Apple','iPhone XR','blanc',128,3,408205,'iOS'),(20,'Apple','iPhone XR','noir',128,3,408205,'iOS'),(21,'Apple','iPhone XR','blanc',256,3,408205,'iOS'),(22,'Apple','iPhone XR','noir',256,3,408205,'iOS'),(23,'Samsung','S23','noir',128,8,1147800,'android'),(24,'Samsung','S23','rose',128,8,1147800,'android'),(25,'Samsung','S23','jaune',128,8,1147800,'android'),(26,'Samsung','S23','noir',256,8,1147800,'android'),(27,'Samsung','S23','rose',256,8,1147800,'android'),(28,'Samsung','S23','jaune',256,8,1147800,'android'),(29,'Samsung','S23','noir',512,8,1147800,'android'),(30,'Samsung','S23','rose',512,8,1147800,'android'),(31,'Samsung','S23','jaune',512,8,1147800,'android'),(32,'Samsung','A50','noir',64,4,144485,'android'),(33,'Samsung','A50','blanc',64,4,144485,'android'),(34,'Samsung','A50','noir',128,4,144485,'android'),(35,'Samsung','A50','blanc',128,4,144485,'android'),(36,'Samsung','A50','noir',64,6,144485,'android'),(37,'Samsung','A50','blanc',64,6,144485,'android'),(38,'Samsung','A50','noir',128,6,144485,'android'),(39,'Samsung','A50','blanc',128,6,144485,'android'),(40,'Samsung','S21','violet',128,8,755000,'android'),(41,'Samsung','S21','noir',128,8,755000,'android'),(42,'Samsung','S21','blanc',128,8,755000,'android'),(43,'Samsung','S21','rose',128,8,755000,'android'),(44,'Samsung','z-Flip','bleu',256,8,949728,'android'),(45,'Samsung','z-Flip','rose',256,8,949728,'android'),(46,'Samsung','z-Flip','noir',256,8,949728,'android'),(47,'Samsung','z-Flip','blanc',256,8,949728,'android'),(48,'Blackberry','key2','noir',64,6,104000,'android'),(49,'Blackberry','key2','blanc',64,6,104000,'android'),(50,'Blackberry','Q10','noir',16,2,3568,'android'),(51,'Blackberry','Q10','blanc',16,2,3568,'android'),(52,'Blackberry','Passport','noir',32,3,37896,'android'),(53,'Blackberry','Passport','blanc',32,3,37896,'android'),(54,'LG','V40 thinQ','noir',64,6,270341,'android'),(55,'LG','V40 thinQ','blanc',64,6,270341,'android'),(56,'LG','V40 thinQ','noir',128,6,270341,'android'),(57,'LG','V40 thinQ','blanc',128,6,270341,'android'),(58,'LG','V20','noir',64,4,362096,'android'),(59,'LG','V20','blanc',64,4,362096,'android'),(60,'LG','Velvet Single','noir',256,6,315155,'android'),(61,'LG','Velvet Single','blanc',256,6,315155,'android'),(62,'huawei','P30 Lite','noir',128,4,139281,'android'),(63,'huawei','P30 Lite','blanc',128,4,139281,'android'),(64,'huawei','P30 Lite','rouge',128,4,139281,'android'),(65,'huawei','P30 Lite','jaune',128,4,139281,'android'),(66,'huawei','P30 Lite','vert',128,4,139281,'android'),(67,'huawei','P30 Lite','bleu',128,4,139281,'android'),(68,'huawei','Nova 11 Pro','vert',256,8,400000,'android'),(69,'huawei','Nova 11 Pro','noir',256,8,400000,'android'),(70,'huawei','Nova 11 Pro','blanc',256,8,400000,'android'),(71,'huawei','Nova 11 Pro','vert',512,8,400000,'android'),(72,'huawei','Nova 11 Pro','noir',512,8,400000,'android'),(73,'huawei','Nova 11 Pro','blanc',512,8,400000,'android'),(74,'huawei','Honor 90 Lite','noir',256,8,320000,'android'),(75,'huawei','Honor 90 Lite','noir',256,8,320000,'android'),(76,'Apple','iPhone 8','gris sidéral',64,2,210000,'iOS'),(77,'Apple','iPhone 8','or',64,2,210000,'iOS'),(78,'Apple','iPhone 8','argent',64,2,210000,'iOS'),(79,'Apple','iPhone 8','gris sidéral',256,2,210000,'iOS'),(80,'Apple','iPhone 8','or',256,2,210000,'iOS'),(81,'Apple','iPhone 8','argent',256,2,210000,'iOS'),(82,'Samsung','Galaxy S20','bleu',128,8,380000,'android'),(83,'Samsung','Galaxy S20','rose',128,8,380000,'android'),(84,'Google','Pixel 5','noir',128,8,350000,'android'),(85,'Google','Pixel 5','vert',128,8,350000,'android'),(86,'OnePlus','9 Pro','noir',256,12,380000,'android'),(87,'OnePlus','9 Pro','argent',256,12,380000,'android'),(88,'OnePlus','8 Pro','noir',256,12,380000,'android'),(89,'OnePlus','8 Pro','vert',256,12,380000,'android'),(90,'Xiaomi','Mi 11','noir',256,12,390000,'android'),(91,'Xiaomi','Mi 11','bleu',256,12,390000,'android'),(92,'Sony','Xperia 1 III','noir',256,12,370000,'android'),(93,'Sony','Xperia 1 III','blanc',256,12,370000,'android'),(94,'Google','Pixel 4a','noir',64,6,300000,'android'),(95,'Google','Pixel 4a','blanc',64,6,300000,'android'),(96,'Xiaomi','Mi 10','noir',128,8,350000,'android'),(97,'Xiaomi','Mi 10','gris',128,8,350000,'android');
/*!40000 ALTER TABLE `smartphone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30  9:47:06
