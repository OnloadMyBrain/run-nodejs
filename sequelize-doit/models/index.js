'use strict';
// const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 정의한 user, comment 테이블을 연결
db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

// user와 comment 테이블 관계 설정
db.User.hasMany(db.Comment, {foreignKey:'commenter', sourceKey:'id'});
db.Comment.belongsTo(db.User, {foreignKey:'commenter', targetKey:'id'});

module.exports = db;
