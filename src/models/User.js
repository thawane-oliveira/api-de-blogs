const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      underscore: true,
      tableName: 'users',
      timestamps: false,
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost,
        {
          foreignKey: '',
          as: ''
      });
    }

  return User;
};

module.exports = UserModel;