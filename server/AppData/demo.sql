/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 15/04/2021 18:32:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for createruser
-- ----------------------------
DROP TABLE IF EXISTS `createruser`;
CREATE TABLE `createruser`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creator` int(255) NULL DEFAULT NULL COMMENT '创建者，记录创建者的id',
  `creatorName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建者的name',
  `regiserTime` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `userId` int(11) NULL DEFAULT NULL COMMENT '被创建者的id',
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '被创建者的名字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of createruser
-- ----------------------------
INSERT INTO `createruser` VALUES (1, 1, '管理员·', '2021-04-09 17:35:41', 2, '张三');
INSERT INTO `createruser` VALUES (2, 2, '管理员', '2021-04-09 17:35:41', 3, 'Rosingsun');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户名称，与登录无关',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '密码',
  `lastTime` datetime(0) NULL DEFAULT NULL COMMENT '上次登陆时间',
  `age` int(10) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `sex` int(11) NOT NULL DEFAULT 1 COMMENT '1是男，0是女',
  `creator` int(11) NULL DEFAULT NULL COMMENT '创建者的id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '管理员', 'admin', 'admin', '2021-04-14 09:30:43', NULL, 1, 1);
INSERT INTO `user` VALUES (2, '张三', 'zs', '123456', '2020-02-01 12:23:02', 0000000012, 1, 1);
INSERT INTO `user` VALUES (3, 'Rosingsun', '123456', '123456', '2021-04-12 10:23:10', 0000000001, 1, 2);
INSERT INTO `user` VALUES (4, NULL, '2', '2', '2021-04-12 10:23:16', NULL, 1, NULL);

SET FOREIGN_KEY_CHECKS = 1;
