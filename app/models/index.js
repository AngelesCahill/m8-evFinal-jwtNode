// Para importar el modelo completo
const User = require("./user.model");
const Bootcamp = require("./bootcamp.model");

Bootcamp.belongsToMany(User, {
    through: "user_bootcamp",
    foreignKey: "bootcamp_id",
    as: "users",
});

User.belongsToMany(Bootcamp, {
    through: "user_bootcamp",
    foreignKey: "user_id",
    as: "bootcamps",
});

module.exports = {
    User,
    Bootcamp,
};