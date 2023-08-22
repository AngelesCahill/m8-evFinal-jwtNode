const {
    User,
    Bootcamp
} = require("../models");
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res) => {
    try {
        const usuarios = await User.findAll({
            include: [{
                model: Bootcamp,
                as: "bootcamps",
                attributes: ["id", "title", "cue", "description"],
                through: {
                    attributes: [],
                },
            }, ],
        });
        //console.log(`Usuarios encontrados: ${JSON.stringify(usuarios, null, 4)}`);

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
        const id = Number(req.params.id);
        console.log(typeof (Number(id)));
        const usuario = await User.findByPk(id, {
            include: [{
                model: Bootcamp,
                as: "bootcamps",
                attributes: ["id", "title"],
                through: {
                    attributes: [],
                },
            }, ],
        });
        if (!usuario) {
            res.status(404).json({
                message: `usuario id ${id} no fue encontrado`,
            });
            return;
        }
        res.status(200).json({
            message: `usuario id ${id} fue encontrado con éxito`,
            firstName: `${usuario.firstName}`,
            lastName: `${usuario.lastName}`,
        });
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            firstName,
            lastName
        } = req.body;
        if (!(id && firstName && lastName)) {
            res.status(400).json({
                message: "Los campos nombre y apellido son requeridos"
            });
            return;
        }
        const actualizados = await User.update({
            firstName,
            lastName,
        }, {
            where: {
                id
            },
        });
        console.log(`actualizados: ${actualizados}`);
        console.log(`Usuario con id ${id} fue actualizado con éxito`);
        if (!actualizados[0]) {
            res.status(404).json({
                message: `Usuario con id ${id} no fue encontrado`,
            });
            return;
        }
        res.status(201).json({
            message: `Usuario id ${id} fue actualizado con éxito`,
            data: actualizados
        });
    } catch (error) {
        console.error(error);
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
                id,
            },
        });
        if (!usuarioEliminado) {
            res.status(404).json({
                message: `usuario id ${id} no fue encontrado`,
            });
            return;
        }
        res.status(201).json({
            message: `usuario id ${id} fue borrado con éxito`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    findUserById,
    findAllUsers,
    updateUser,
    deleteUserById,
};