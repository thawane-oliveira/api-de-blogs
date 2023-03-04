const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id',
      }
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      }
    },
  },
    {
      underscored: true,
      tableName: 'posts_categories',
      timestamps: false,
    });

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(
        models.BlogPost,
        {
          as: 'blog_post',
          through: PostCategory,
          foreignKey: 'post_id',
          otherKey: 'category_id',
        },
      );
      models.BlogPost.belongsToMany(
        models.Category,
        {
          as: 'category',
          through: PostCategory,
          foreignKey: 'category_id',
          otherKey: 'post_id',
        },
      );
    };

  return PostCategory;

};

module.exports = PostCategory;