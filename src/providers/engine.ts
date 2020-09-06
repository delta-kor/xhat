import fs from 'fs';
import Resource, { Language } from '@providers/resource';

export default function Engine(filePath: string, options: any, callback: any): any {
  fs.readFile(filePath, (err, data) => {
    if (err) callback(err);

    let html = data.toString();
    const optionGroups = html.match(/#([^"<]+)#/g);

    if (optionGroups) {
      optionGroups.forEach((value) => {
        const blocks = value.split('||');
        const tag = blocks[0]?.replace(/#/g, '');
        const defaultValue = blocks[1]?.replace(/#/g, '');
        const result = options[tag] || defaultValue;
        html = html.replace(value, result);
      });
    }

    const language: Language = options.language ?? Language.ENGLISH;
    const resourceGroups = html.match(/%([^"<]+)%/g);

    let resource = new Resource(language).export();
    if (!resource) resource = new Resource(Language.ENGLISH).export();

    if (resourceGroups) {
      resourceGroups.forEach((value) => {
        const tag = value.replace(/%/g, '');
        const result = resource[tag];
        html = html.replace(value, result);
      });
    }

    callback(null, html);
  });
}
