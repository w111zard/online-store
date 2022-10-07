const uuid = require('uuid');
const path = require('path');

class FileService {
    save(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);
            return fileName;
        } catch (error) {
            return error;
        }
    }
}

module.exports = new FileService();