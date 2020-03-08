# dedupe-slash
To deduplicate multiple consecutive slashes in a path.

## Installation
```
npm install dedupe-slash --save
```

## Usage
```javascript
const dedupeSlash = require('dedupe-slash');

dedupeSlash('https://example.com//a////b')
//=> https://example.com/a/b
```
