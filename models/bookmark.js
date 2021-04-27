const bookmark = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('bookmark', {
      url: {
        type: DataTypes.STRING(60)
      },
      info: {
        type: DataTypes.STRING(60)
      },
      tag: {
          type: DataTypes.STRING(60)
      }
    }, {
      timestamps: false
    });
  
    return Bookmark;
  };
  
  module.exports = bookmark