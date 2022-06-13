-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-05-31 16:47:49
-- 伺服器版本： 8.0.28
-- PHP 版本： 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `test2`
--

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE `users` (
  `userId` int NOT NULL,
  `userAccount` varchar(255) NOT NULL,
  `userPassword` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userMobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userNickName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userAvatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userBirthday` date DEFAULT NULL,
  `userGender` int DEFAULT NULL,
  `userCreatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `users`
--

INSERT INTO `users` (`userId`, `userAccount`, `userPassword`, `userEmail`, `userName`, `userMobile`, `userAddress`, `userNickName`, `userAvatar`, `userBirthday`, `userGender`, `userCreatedAt`) VALUES
(1, '123', '123@123.com', '123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-31 12:11:43'),
(2, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-31 15:36:02'),
(3, '123', '456@gmail', '123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-31 15:40:55'),
(4, '123', '456@gmail', '123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-31 15:42:54'),
(5, '1234567', '456@gmail', '123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-31 16:43:44'),
(6, '1234567', '456@gmail', '123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-05-31 16:43:55');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users`
--
ALTER TABLE `users`
  MODIFY `userId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
