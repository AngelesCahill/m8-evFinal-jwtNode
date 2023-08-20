const { Bootcamp, User } = require("../models");

const createBootcamp = async (req, res) => {
    try {
        const {
            title,
            cue,
            description
        } = req.body;
        // Validar los datos de entrada
        if (!(title && cue && description)) {
            res.status(400).json({
                message: "Todos los campos son requeridos"
            });
            return;
        }
        const bootcamp = await Bootcamp.create({
            title,
            cue,
            description
        });
        console.log(
            `Se ha creado el Bootcamp ${JSON.stringify(bootcamp, null, 4)}`
        );
        res.status(201).json({
            message: `Bootcamp ${bootcamp.name} fue creado con éxito`,
            bootcamp: bootcamp,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const addUserToBootcamp = async (req, res) => {
    try {
        const {
            bootcampId,
            userId
        } = req.body;
        console.log("bootcampId:", projectId);
        console.log("userId:", userId);
        const boot = await Bootcamp.findByPk(bootcampId);
        if (!boot) {
            console.log(`No se encontró bootcamp con id ${bootcampId}`);
            res.status(404).json({
                message: `No se encontró bootcamp con id ${bootcampId}`,
            });
            return;
        }
        console.log("Bootcamp:", boot);
        const usuario = await User.findByPk(userId);
        if (!usuario) {
            console.log(`No se encontró usuario con id ${userId}`);
            res.status(404).json({
                message: `No se encontró usuario con id ${userId}`,
            });
            return;
        }
        console.log("usuario:", usuario);
        await boot.addUser(usuario);
        console.log(
            `Agredado el usuario id ${usuario.id} al bootcamp con id ${boot.id}`
        );
        res.status(201).json({
            message: `Se agregó el usuario id ${usuario.id} al bootcamp id ${boot.id}`,
            bootcamp: boot,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const findBootcampById = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const boot = await Bootcamp.findByPk(id, {
            include: [{
                model: User,
                as: "user",
                attributes: ["id", "firstName", "lastName", "email", "password"],
                through: {
                    attributes: [],
                },
            }, ],
        });
        if (!boot) {
            res.status(404).json({
                message: `El bootcamp id ${id} no fue encontrado`,
            });
            return;
        }
        console.log(
            `Se ha encontrado el bootcamp ${JSON.stringify(boot, null, 4)}`
        );
        res.status(200).json({
            message: `El bootcamp ${boot.name} fue encontrado con éxito`,
            project: boot,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const findAllBootcamps = async (req, res) => {
    try {
        const boots = await Bootcamp.findAll({
            include: [{
                model: User,
                as: "user",
                attributes: ["id", "firstName", "lastName", "email"],
                through: {
                    attributes: [],
                },
            }, ],
        });
        console.log(
            `Se han encontrado los Bootcamps ${JSON.stringify(boots, null, 4)}`
        );
        res.status(200).json({
            message: `se encontraron ${boots.length} bootcamp`,
            bootcamps: boots,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createBootcamp,
    addUserToBootcamp,
    findBootcampById,
    findAllBootcamps,
};