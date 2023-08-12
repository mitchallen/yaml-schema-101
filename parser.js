// Author: Mitch Allen
// File: parser.js

import { readFileSync } from 'fs';
import Ajv from 'ajv';
import * as yaml from 'js-yaml';

const ajv = new Ajv();

export function parser(inputYamlFile, schemaJsonFile) {

    // define a function to read utf8 files
    const readUtf8 = (file) => readFileSync(file, 'utf8');

    // convert input yaml file to json
    const inputJson = yaml.load(readUtf8(inputYamlFile));

    // load schema json file
    const schemaJson = JSON.parse(readUtf8(schemaJsonFile));

    // validate input json against schema json
    const isValid = ajv.validate(schemaJson, inputJson);

    // return response and errors (if any)
    return [isValid, ajv.errors];
}