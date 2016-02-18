/*
Navicat MySQL Data Transfer

Source Server         : 163.53.18.217_3306
Source Server Version : 50525
Source Host           : 163.53.18.217:3306
Source Database       : louis

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2016-02-18 12:19:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `atime_blog_abstract`
-- ----------------------------
DROP TABLE IF EXISTS `atime_blog_abstract`;
CREATE TABLE `atime_blog_abstract` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text,
  `abstract` text,
  `timestamp` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `author` text,
  `tag` text,
  `more` text,
  `picture` text,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atime_blog_abstract
-- ----------------------------

-- ----------------------------
-- Table structure for `atime_catagory`
-- ----------------------------
DROP TABLE IF EXISTS `atime_catagory`;
CREATE TABLE `atime_catagory` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `catagory` text NOT NULL COMMENT '栏目',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atime_catagory
-- ----------------------------
INSERT INTO `atime_catagory` VALUES ('1', 'Home');
INSERT INTO `atime_catagory` VALUES ('2', 'Code');
INSERT INTO `atime_catagory` VALUES ('3', 'Video');
INSERT INTO `atime_catagory` VALUES ('4', 'Contacts');

-- ----------------------------
-- Table structure for `atime_ci_session`
-- ----------------------------
DROP TABLE IF EXISTS `atime_ci_session`;
CREATE TABLE `atime_ci_session` (
  `id` varchar(40) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) unsigned NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ci_sessions_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atime_ci_session
-- ----------------------------

-- ----------------------------
-- Table structure for `atime_index_home`
-- ----------------------------
DROP TABLE IF EXISTS `atime_index_home`;
CREATE TABLE `atime_index_home` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `value` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atime_index_home
-- ----------------------------
INSERT INTO `atime_index_home` VALUES ('1', 'page1mid', 'Your internal mediocrity is the moment when you lost the faith of being excellent.');
INSERT INTO `atime_index_home` VALUES ('2', 'page2top', '电子信息专业学生，热爱电子。');
INSERT INTO `atime_index_home` VALUES ('3', 'page2mid', '测试数据测试数据');
INSERT INTO `atime_index_home` VALUES ('4', 'page2pic', 'http://i13.tietuku.com/5c16e1a63f5b16a6.png');
INSERT INTO `atime_index_home` VALUES ('5', 'page1top', 'I\'m <span>ATIME</span>');

-- ----------------------------
-- Table structure for `atime_message`
-- ----------------------------
DROP TABLE IF EXISTS `atime_message`;
CREATE TABLE `atime_message` (
  `id` int(11) NOT NULL,
  `name` text,
  `email` text,
  `message` text,
  `date` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atime_message
-- ----------------------------
INSERT INTO `atime_message` VALUES ('0', null, null, null, '1');
