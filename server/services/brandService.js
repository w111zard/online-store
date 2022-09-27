const {Brand} = require('../models/models');

class BrandService {
    async create(name) {
        return await Brand.create({name});
    }

    async getAll() {
        return await Brand.findAll();
    }

    async getOne(id) {
        return await Brand.findAll({where: {id: id}});
    }

    async deleteByID(id) {
        return await Brand.destroy({where: {id: id}});
    }
}

module.exports = new BrandService();