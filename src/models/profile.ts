import sequelize from "@/utils/sequelize";
import { DataTypes } from "sequelize";

const Profile = sequelize.define("Profile", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    headline: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tagline: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resumeURL: {
        type: DataTypes.STRING,
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

export default Profile;