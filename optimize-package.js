const fs = require('fs-extra');
const path = require('path');

const pkg = fs.readJSONSync(path.resolve(__dirname, 'package.json'));

delete pkg.scripts;
delete pkg.devDependencies;

fs.writeFileSync(path.resolve(__dirname, 'package.json'), JSON.stringify(pkg, null, 2));
