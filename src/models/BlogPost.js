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
        model: 'users',
        key: 'id',
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'published'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated'
    },
  },
    {
      underscored: true,
      tableName: 'blog_posts',
    });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    });
  }
  return BlogPost;

};

module.exports = BlogPost;