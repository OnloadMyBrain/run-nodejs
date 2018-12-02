module.exports=(sequelize, DataTypes) => {
		return sequelize.define('comment', {
		comment:{
			type:DataTypes.TEXT,
			allowNull:false,
		},
		created_at:{
			type:DataTypes.DATE,
			allowNull:false,
			defaultValue:sequelize.literal('now()'),
		}
		},{
				timestamps:false,
		})
}