import sequelize from "./sequelize";

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");
        await sequelize.sync();
        console.log("Tables synced.")
    } catch (error) {
        console.error("Failed to connect database!", error);
    }
}