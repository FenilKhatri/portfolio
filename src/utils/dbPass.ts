import bcrypt from "bcryptjs";

const hash = await bcrypt.hash("yourpassword", 10);
console.log(hash);