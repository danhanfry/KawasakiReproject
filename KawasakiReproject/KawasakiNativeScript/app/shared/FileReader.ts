import * as fs from "file-system";
let documents = fs.knownFolders.currentApp();

export class FileReader {


    public static ReadJSON(path: string): Promise<Object> {
        let jsonFile = documents.getFile(path);
        return new Promise<Object>((resolve, reject) => {
            jsonFile.readText().then((content: string) => {
                let data = <Array<Object>>JSON.parse(content);
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }


}