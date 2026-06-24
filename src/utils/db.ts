import sequelize from "./sequelize";

import "@/models/contact";
import "@/models/education";
import "@/models/experience";
import "@/models/profile";
import "@/models/project";
import "@/models/skill";

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");
        await sequelize.sync({ alter: true });
        console.log("Tables synced.")
    } catch (error) {
        console.error("Failed to connect database!", error);
    }
}