import * as fs from 'fs';

export class DataFactory {

    public static toJsObjects = (filename: string) =>  {
        let rawData = fs.readFileSync(filename);
        let obj = JSON.parse(rawData.toString());
        return obj;
    }
    
}