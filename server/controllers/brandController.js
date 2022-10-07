const ApiError = require('../error/apiError');
const brandService = require('../services/brandService');

class BrandController {
    async create(req, res, next) {
        try {
            const item = await brandService.create(req.body.name);
            return res.json(item);
        } catch (error) {
            return next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res) {
        const items = await brandService.getAll();
        return res.json(items);
    }

    async getOne(req, res) {
        const id = req.params.id;
        const item = await brandService.getOne(id);
        return res.json(item);
    }

    async deleteByID(req, res) {
        const id = req.params.id;
        const deletedCount = await brandService.deleteByID(id);
        return res.json(deletedCount);
    }
}

module.exports = new BrandController();