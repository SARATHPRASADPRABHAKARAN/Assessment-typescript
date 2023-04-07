import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';

class Camera extends Model {
  public id!: number;
  public name!: string;
  public description!: Text;
  public url!: string;
  public deletedAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Camera.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      
    },
  },
  {
    sequelize:sequelize,
    tableName: 'cameras',
  }
);

export { Camera };
sequelize.sync();