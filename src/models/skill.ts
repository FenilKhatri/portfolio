import sequelize from "@/utils/sequelize";
import { DataTypes } from "sequelize";

const Skill = sequelize.define("Skill", {
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    skillName: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
});

export default Skill;