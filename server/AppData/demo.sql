/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 09/04/2021 17:57:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '密码',
  `lastTime` datetime NULL DEFAULT NULL COMMENT '上次登陆时间',
  `registerTime` datetime NULL DEFAULT NULL COMMENT '注册时间',
  `age` int(10) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `sex` int NOT NULL DEFAULT 1 COMMENT '1是男，0是女',
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户名称，与登录无关',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', 'admin', NULL, NULL, NULL, 1, NULL);
INSERT INTO `user` VALUES (2, '张三', '123456', '2020-02-01 12:23:02', '2021-04-09 17:35:41', 0000000012, 1, NULL);

SET FOREIGN_KEY_CHECKS = 1;
