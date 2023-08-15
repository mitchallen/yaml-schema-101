yaml-schema-101
==

## Reference

For more information on this repo, see this article:

* [How to Validate YAML Input with NodeJS (Schema)](https://scriptable.com/how-to-validate-yaml-input-with-nodejs-schema/)

## Usage 

### Validate schema

```sh
node index.js test-files/good.yaml test-files/schema.json
```

```sh
npm start -- test-files/good.yaml test-files/schema.json
```

### Fail validation 

```sh
node index.js test-files/bad.yaml test-files/schema.json
```

