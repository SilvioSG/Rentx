import crypto from "crypto";
import multer from "multer";
import {resolve} from "path";


export default {
    upload(folder: string) {
        return{
            storage: multer.diskStorage({
                
                // Criar um hash randômico e concatenar com o nome do arquivo
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;

                    return callback(null, fileName);
                }
            })
        }
    }
}