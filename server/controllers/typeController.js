const ApiError = require('../error/apiError');
const typeService = require('../services/typeService');

class TypeController {
    async create(req, res, next) {
        try {
            const item = await typeService.create(req.body.name);
            return res.json(item);
        } catch (error) {
            return next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res) {
        const items = await typeService.getAll();
        return res.json(items);
    }

    async getOne(req, res) {
        const id = req.params.id;
        const item = await typeService.getOne(id);
        return res.json(item);
    }

    async deleteByID(req, res) {
        const id = req.params.id;
        const deletedCount = await typeService.deleteByID(id);
        return res.json(deletedCount);
    }
}

module.exports = new TypeController();
