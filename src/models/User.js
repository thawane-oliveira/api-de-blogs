const User = (sequelize, DataTypes) => {
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
      underscored: true,
      tableName: 'users',
      timestamps: false,
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost,
        {
          foreignKey: 'userId',
          as: 'user'
      });
    }

  return User;
};

module.exports = User;