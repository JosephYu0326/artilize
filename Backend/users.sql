-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-06-07 15:34:39
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
  `userAvatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'user.png',
  `userBirthday` date DEFAULT NULL,
  `userGender` int DEFAULT NULL,
  `userCreatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `users`
--

INSERT INTO `users` (`userId`, `userAccount`, `userPassword`, `userEmail`, `userName`, `userMobile`, `userAddress`, `userNickName`, `userAvatar`, `userBirthday`, `userGender`, `userCreatedAt`) VALUES
(1, 'joseph', '!Joseph0326', 'artilize.official@gmail.com', 'Joseph', '0912345679', '高雄市前金區中正四路700號', 'Joseph123', '1654485271065.jpg', '1985-06-06', 1, '2022-06-03 14:27:17'),
(2, 'alice0109', 'AAAaaa111+++', 'alice@gamil.com', '王小雅', '0926558128', '台北市內湖區江南街98號', '雅雅', NULL, '1999-01-09', 2, '2022-06-03 17:47:50'),
(3, 'linlin5400', 'ber11125A-', 'bernice_lin@gamil.com', '林宣', '0919057098', '台北市南港區興東街7號', '小兔', 'user12.png', '1997-04-05', 3, '2022-06-03 17:48:34'),
(8, 'littlejoe33', 'Pass_2233', 'joe_33@gmail.com', '黃兆元', '0932855763', '台北市信義區永吉路30巷123號', 'littleJoe', 'user1.png', NULL, NULL, '2022-06-07 15:22:26'),
(9, 'toyzzz22', 'Abc123+', 'toyzzz22@gmail.com', '李俊傑', '0932283859', NULL, 'ballz', 'user2.png', NULL, NULL, '2022-06-07 15:22:26'),
(10, 'FRFR5588', 'bbC_58', 'fr_5588@gmail.com', '', '', NULL, '玖仈', 'user3.png', NULL, NULL, '2022-06-07 15:22:26'),
(11, 'toyzzz88', 'bbC_5777', '22@gmail.com', '黃怡', '0975997685', '台東縣台東市建興里知本路四段2號', 'ax', 'user4.png', '2022-03-25', 0, '2022-03-14 10:32:23'),
(12, 'jennywang1999', 'Je3+nny3aoa', 'jennywang1999@yahoo.com.tw', '王甄妮', '0956789755', '南投縣草屯鎮太平路一段221號', 'AOA', 'user5.png', '1969-12-31', 1, '2022-03-14 14:02:30'),
(13, 'wwcatieww', 'kldfv5+A', 'catiewww@hotmail.com', '', '', '', 'xd', 'user6.png', '2022-03-02', 0, '2022-03-14 16:18:57'),
(14, 'carollee38', 'Vvca+5', 'carollee38@gmail.com', '李淑娟', '0932085856', '', '紅蘿蔔不喜歡兔子', 'user7.png', '2022-03-17', 1, '2022-03-14 16:33:56'),
(15, 'spidermen959', 'ski765A+', 'spidermen959@gmail.com', '', '0956343676', '桃園市楊梅區梅山西街10號', '蜘蛛人', 'user8.png', '2022-03-17', 2, '2022-03-18 16:04:28'),
(16, 'jason1230301', 'OALsss01~', 'jasonwww@yahoo.com.tw', '黃傑森', '', '', 'Jason', 'user9.png', '1992-07-18', 0, '2022-03-18 16:06:10'),
(17, 'maxine0509', '~A123JEIFJIOALzzz', 'maxine_0509@gmail.com', '黃子蕊', '0919007893', '宜蘭縣大同鄉南山村泰雅路七段220號', 'xddd', 'user10.png', '1996-06-27', 1, '2022-03-18 17:29:50'),
(18, 'a860505', 'qwertQQ!123456', 'a_860505@hotmail.com', '蕭宏玉', '0912856147', '', 'QQ', 'user11.png', '2009-05-05', 0, '2022-03-21 09:31:42');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userAccount` (`userAccount`),
  ADD UNIQUE KEY `userEmail` (`userEmail`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users`
--
ALTER TABLE `users`
  MODIFY `userId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
