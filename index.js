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

    let isValid = parser(inputYamlFile, schemaJsonFile);

    if (!isValid) {
        console.error(`[ERROR] input not valid!`);
        return;
    }

    console.log(isValid)
}

main();