import fs from 'fs';

export default function Engine(filePath: string, options: any, callback: any): any {
  fs.readFile(filePath, (err, data) => {
    if (err) callback(err);

    let html = data.toString();
    const groups = html.match(/#([^"<]+)#/g);

    if (groups) {
      groups.forEach((value) => {
        const blocks = value.split('||');
        const tag = blocks[0]?.replace(/#/g, '');
        const defaultValue = blocks[1]?.replace(/#/g, '');
        const result = options[tag] || defaultValue;
        html = html.replace(value, result);
      });
    }

    callback(null, html);
  });
}
