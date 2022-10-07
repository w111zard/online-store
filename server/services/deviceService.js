const {Device} = require('../models/models');
const fileService = require('../services/fileService');

class DeviceService {
    async create(deviceData) {
        const imageFileName = fileService.save(deviceData.image);

        return await Device.create({
            name: deviceData.name,
            price: deviceData.price,
            image: imageFileName,
            typeId: deviceData.typeId,
            brandId: deviceData.brandId
        });
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
