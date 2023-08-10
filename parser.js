// Author: Mitch Allen
// File: parser.js

import { readFileSync } from 'fs';
import Ajv from 'ajv';
import * as yaml from 'js-yaml';
import * as prettyYaml from 'json-to-pretty-yaml';

const ajv = new Ajv();

export function parser(inputYamlFile, schemaYamlFile) {

    const [inputJson, schemaJson] = [
        inputYamlFile,
        schemaYamlFile
    ].map(yamlFile => yaml.load(readFileSync(yamlFile, 'utf8')));

    const isValid = ajv.validate(schemaJson, inputJson);

    if (!isValid) {
        console.error(JSON.stringify(ajv.errors, null, 2));
        return undefined;
    }

    console.info('[INFO] Valid!');

    console.log(readFileSync(inputYamlFile, 'utf8'));

    return prettyYaml.stringify(inputJson);
}