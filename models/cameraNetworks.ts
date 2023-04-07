import { Model, DataTypes,Sequelize } from 'sequelize';
import { sequelize } from '../config/sequelize';

class CameraNetworks extends Model {
  public id!: number;
  public name!: string;
  public descriptions!: Text;
  public cameras!: number;
  public deletedAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CameraNetworks.init(
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
    descriptions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cameras: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize:sequelize,
    tableName: 'cameranetworks',
  }
);

export { CameraNetworks };
