const ApiError = require('../error/apiError');
const deviceService = require('../services/deviceService');

class DeviceController {
    async create(req, res, next) {
        try {
            const deviceData = req.body;
            deviceData.image = req.files.image;
            const item = await deviceService.create(deviceData);
            return res.json(item);
        } catch (error) {
            return next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res) {
        const items = await deviceService.getAll();
        return res.json(items);
    }

    async getOne(req, res) {
        const id = req.params.id;
        const item = await deviceService.getOne(id);
        return res.json(item);
    }

    async deleteByID(req, res) {
        const id = req.params.id;
        const deletedCount = await deviceService.deleteByID(id);
        return res.json(deletedCount);
    }
}

module.exports = new DeviceController();
