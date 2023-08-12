// Author: Mitch Allen
// File: index.js

import { parser } from './parser.js';

function main() {

    const [, , ...args] = process.argv;

    if (args.length < 2) {
        console.log('USAGE: node index.js test-files/good.yaml test-files/schema.json');
        return;
    }

    const [inputYamlFile, schemaJsonFile] = args;

    console.log(`input file: ${inputYamlFile}`);
    console.log(`schema file: ${schemaJsonFile}`);

    const [isValid, err] = parser(inputYamlFile, schemaJsonFile);

    console.log(isValid)

    if (err) {
        console.error(`[ERROR] input not valid!`);
        console.error(JSON.stringify(err, null, 2));
        return;
    }

    if( isValid ) {
        console.info('[INFO] Valid!');
    }
}

main();