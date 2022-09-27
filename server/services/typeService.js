const {Type} = require('../models/models');

class TypeService {
    async create(name) {
        return await Type.create({name});
    }

    async getAll() {
        return await Type.findAll();
    }

    async getOne(id) {
        return await Type.findAll({where: {id: id}});
    }

    async deleteByID(id) {
        return await Type.destroy({where: {id: id}});
    }
}

module.exports = new TypeService();