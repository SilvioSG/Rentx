import crypto from "crypto";
import multer from "multer";
import {resolve} from "path";

const tmpFolder =  resolve(__dirname, "..", "..", "tmp")

export default {
    tmpFolder,
    storage: multer.diskStorage({
        // Criar um hash randômico e concatenar com o nome do arquivo
        destination: tmpFolder,
        filename: (request, file, callback) => {
            const fileHash = crypto.randomBytes(16).toString("hex");
            const fileName = `${fileHash}-${file.originalname}`;
            
            return callback(null, fileName);
        },
    }),
};