const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'display_name'
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
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