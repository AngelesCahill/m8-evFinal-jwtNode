const { User, Bootcamp } = require("../models");
const bcrypt = require("bcryptjs");


const findAllUsers = async (req, res) => {
    try {
        const usuarios = await User.findAll({
            include: [{
                model: Bootcamp,
                as: "bootcamps",
                attributes: ["id", "title", "cue", "description"],
                through: {
                    attributes: []
                }
            }]
        });
        console.log(`Usuarios encontrados: ${JSON.stringify(usuarios, null, 4)}`);

        res.status(200).json({
            message: `se encontraron ${usuarios.length} usuarios`,
            users: usuarios,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const findUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await User.findByPk(id, {
            include: [{
                model: Bootcamp,
                as: "bootcamps",
                attributes: ["id", "title", "cue", "description"],
                through: {
                    attributes: []
                }
            }]
        });
        if (usuario) {
            res.status(404).json({
                message: `usuario id ${id} no fue encontrado con éxito`
            });
            return;
        }
        res.status(200).json({
            message: `usuario id ${id} fue encontrado`,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const createUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        // Validar los datos de entrada
        if (!(firstName && lastName && email && password)) {
            res.status(400).json({
                message: "Todos los campos son requeridos"
            });
            return;
        }
        const nuevoUser = await User.create({
            firstName,
            lastName,
            email,
            password
        });
        console.log(
            `Se ha creado el User ${JSON.stringify(nuevoUser, null, 4)}`
        );
        res.status(201).json({
            message: `User ${nuevoUser.name} fue creado con éxito`,
            user: nuevoUser,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const user = req.body;

        if (!(user.firstName && user.lastName)) {
            res.status(400).json({
                message: " Campo firstName y LastName son requeridos"
            });
            return;
        }
        const usuario = await User.findByPk(id);
        let actualizados = [],
            actualizado;

        if (usuario) {
            const salt = await bcrypt.genSalt(10);
            encryptedPwd = await bcrypt.hash(user.password, salt);
            if ((usuario.firstName !== user.firstName) || (usuario.lastName !== user.lastName)) {
                actualizados = await User.update({
                    firstName: user.firstName,
                    lastName: user.lastName
                }, {
                    where: {
                        id: id
                    }
                });
                actualizado = actualizado[0];
            } else {
                actualizado = -1;
            }
        } else {
            actualizado = 0;
        }

        if (!actualizado) {
            res.status(404).json({
                message: ` El usuario id ${id} no fue encontrado`
            });
            return;
        }
        res.status(201).json({
            message: `El usuario id ${id} fue actualizado con éxito`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioEliminado = await User.destroy({
            where: {
                id
            },
        });
        console.log(`Se ha eliminado a usuario: ${usuarioEliminado}`);
        if (!usuarioEliminado) {
            res.status(404).json({
                message: `usuario id ${id} no fue encontrado`,
            });
            return;
        }
        console.log(`Usuario id ${id} fue borrado con éxito`);
        res.status(201).json({
            message: `usuario id ${id} fue borrado con éxito`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    findUserById,
    findAllUsers,
    createUser,
    updateUser,
    deleteUserById,
};