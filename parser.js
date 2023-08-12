// Author: Mitch Allen
// File: parser.js

import { readFileSync } from 'fs';
import Ajv from 'ajv';
import * as yaml from 'js-yaml';

const ajv = new Ajv();

export function parser(inputYamlFile, schemaJsonFile) {

    // convert input yaml file to json
    const inputJson = yaml.load(readFileSync(inputYamlFile, 'utf8'))
    // load schema json file
    const schemaJson = JSON.parse(readFileSync(schemaJsonFile, 'utf8'))

    // validate input json against schema json
    const isValid = ajv.validate(schemaJson, inputJson);

    if (!isValid) {
        console.error(JSON.stringify(ajv.errors, null, 2));
        return false;
    }

    console.info('[INFO] Valid!');

    return true;
}