import sequelize from "@/utils/sequelize";
import { DataTypes } from "sequelize";

const Project = sequelize.define("Project", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    techStack: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    githubURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    liveURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectStatus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

export default Project;