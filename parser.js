// Author: Mitch Allen
// File: parser.js

import { readFileSync } from 'fs';
import Ajv from 'ajv';

import * as yaml from 'js-yaml';

const ajv = new Ajv();

export function parser(inputFile, schemaFile) {

    const [input, schema] = [
        inputFile,
        schemaFile
    ].map(file => yaml.load(readFileSync(file, 'utf8')));

    const isValid = ajv.validate(schema, input);

    if (!isValid) {
        console.error(JSON.stringify(ajv.errors, null, 2));
        return undefined;
    }

    console.info('[INFO] Valid!');

    return input;
}