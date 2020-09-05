import fs from 'fs';

export default function Engine(filePath: string, options: any, callback: any): any {
  fs.readFile(filePath, (err, data) => {
    if (err) callback(err);
    const html = data.toString();
    callback(null, html);
  });
}
