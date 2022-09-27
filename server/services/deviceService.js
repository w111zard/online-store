const {Device} = require('../models/models');

class DeviceService {
    async create(name) {
        return await Device.create({name});
    }

    async getAll() {
        return await Device.findAll();
    }

    async getOne(id) {
        return await Device.findAll({where: {id: id}});
    }

    async deleteByID(id) {
        return await Device.destroy({where: {id: id}});
    }
}

module.exports = new DeviceService();
