CREATE TABLE `member` (
  `memID` varchar2 PRIMARY KEY,
  `memPW` varchar2,
  `memName` varchar2,
  `memAddr` varchar2,
  `memPhone` varchar2,
  `memEMail` varchar2,
  `memDate` date,
  `memBrith` date,
  `memRole` int
);

CREATE TABLE `role` (
  `roleCode` int PRIMARY KEY,
  `roloName` varchar2
);


CREATE TABLE `cart` (
  `seq` int PRIMARY KEY,
  `proCode` int,
  `cartCnt` int,
  `memID` varchar2
);

CREATE TABLE `product` (
  `proCode` int PRIMARY KEY,
  `proName` varchar2,
  `proPrice` int,
  `proStock` int,
  `proDetail` varchar2,
  `proCount` int,
  `proCategory` int,
  `proGender` int,
  `proColor` int,
  `proSize` int,
  `proMaterial` int,
  `proSeason` int,
  `proPriceRange` int,
  `proAge` int
);

CREATE TABLE `Category` (
  `categoryCode` int PRIMARY KEY,
  `categorylargeName` varchar2,
  `categorysmallName` varchar2
);

CREATE TABLE `Gender` (
  `genderCode` int PRIMARY KEY,
  `genderName` varchar2
);

CREATE TABLE `Color` (
  `colorCode` int PRIMARY KEY,
  `colorName` varchar2
);

CREATE TABLE `Size` (
  `sizeCode` int PRIMARY KEY,
  `sizeName` varchar2
);

CREATE TABLE `Material` (
  `materialCode` int PRIMARY KEY,
  `materialName` varchar2
);

CREATE TABLE `Season` (
  `seasonCode` int PRIMARY KEY,
  `seasonName` varchar2
);

CREATE TABLE `priceRange` (
  `priceRangeCode` int PRIMARY KEY,
  `priceRangeName` varchar2
);

CREATE TABLE `age` (
  `ageCode` int PRIMARY KEY,
  `ageName` varchar2
);

CREATE TABLE `order` (
  `orderCode` int PRIMARY KEY,
  `memID` varchar2,
  `proCode` int,
  `orderPrice` int,
  `orderCount` int,
  `orderDate` date,
  `orderState` int,
  `orderStartDate` date,
  `orderFinishDate` date
);

CREATE TABLE `orderState` (
  `orderStateCode` int PRIMARY KEY,
  `orderStateName` varchar2
);

CREATE TABLE `reviewBoard` (
  `reviewNo` int PRIMARY KEY,
  `reviewWriter` varchar2,
  `reviewProduct` int,
  `reviewDate` date,
  `reviewTitle` varchar2,
  `reviewContent` varchar2,
  `reviewStar` int,
  `reviewPhoto` varchar2
);

CREATE TABLE `noticeBoard` (
  `noticeNo` int PRIMARY KEY,
  `noticeWriter` varchar2,
  `noticeTitle` varchar2,
  `noticeDate` date,
  `noticeContent` varchar2,
  `noticeCount` int
);

CREATE TABLE `qnaBoard` (
  `qnaNo` int PRIMARY KEY,
  `qnaWriter` varchar2,
  `qnaPW` varchar2,
  `qnaTitle` varchar2,
  `qnaDate` date,
  `qnaContent` varchar2,
  `qnaCount` int
);

CREATE TABLE `qnaComment` (
  `qnaNo` int PRIMARY KEY,
  `qnaCoOrder` int,
  `qnaCoWriter` varchar2,
  `qnaCoDate` date,
  `qnaCoContent` varchar2
);

ALTER TABLE `member` ADD FOREIGN KEY (`memRole`) REFERENCES `role` (`roleCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proCategory`) REFERENCES `Category` (`categoryCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proGender`) REFERENCES `Gender` (`genderCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proColor`) REFERENCES `Color` (`colorCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proSize`) REFERENCES `Size` (`sizeCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proMaterial`) REFERENCES `Material` (`materialCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proSeason`) REFERENCES `Season` (`seasonCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proPriceRange`) REFERENCES `priceRange` (`priceRangeCode`);

ALTER TABLE `product` ADD FOREIGN KEY (`proAge`) REFERENCES `age` (`ageCode`);

ALTER TABLE `order` ADD FOREIGN KEY (`memID`) REFERENCES `member` (`memID`);

ALTER TABLE `order` ADD FOREIGN KEY (`proCode`) REFERENCES `product` (`proCode`);

ALTER TABLE `order` ADD FOREIGN KEY (`orderState`) REFERENCES `orderState` (`orderStateCode`);

ALTER TABLE `reviewBoard` ADD FOREIGN KEY (`reviewWriter`) REFERENCES `member` (`memID`);

ALTER TABLE `reviewBoard` ADD FOREIGN KEY (`reviewProduct`) REFERENCES `product` (`proCode`);

ALTER TABLE `noticeBoard` ADD FOREIGN KEY (`noticeWriter`) REFERENCES `member` (`memID`);

ALTER TABLE `qnaBoard` ADD FOREIGN KEY (`qnaWriter`) REFERENCES `member` (`memID`);

ALTER TABLE `qnaComment` ADD FOREIGN KEY (`qnaNo`) REFERENCES `qnaBoard` (`qnaNo`);

ALTER TABLE `qnaComment` ADD FOREIGN KEY (`qnaCoWriter`) REFERENCES `member` (`memID`);

ALTER TABLE `priceRange` ADD FOREIGN KEY (`priceRangeName`) REFERENCES `priceRange` (`priceRangeCode`);

