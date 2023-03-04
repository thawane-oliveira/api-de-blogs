const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'published',
      defaultValue: DataTypes.NOW
    },
    updated: {
      type: DataTypes.DATE,
      field: 'updated'
    },
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }
  return BlogPost;

};

module.exports = BlogPost;