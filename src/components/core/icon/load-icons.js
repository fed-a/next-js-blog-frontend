'use strict';

const fs = require('fs');
const path = require('path');

const ICONS_DIR_PATH = '/assets/icons';

const DEFAULT_CLASS = `
.icon {
  mask-repeat: no-repeat;
  mask-size: cover;
}
`;

let CSS_FILE_CONTENT = [DEFAULT_CLASS];
let TYPE_FILE_CONTENT = [];

const createIconStyle = (className, fileName) => `
.${className} {
  mask-image: url('${ICONS_DIR_PATH}/${fileName}');
  @apply icon;
}
`;

const toCamel = (val) => val.trim().replace(/([-_ ]+)./g, ($) => $.at(-1).toUpperCase());
const toKebab = (val) =>
  toCamel(val).replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, o) => (o ? '-' : '') + $.toLowerCase());

fs.readdirSync(path.join(__dirname, '../../../../public/assets/icons')).forEach((file) => {
  const withoutFormat = file.replace('.svg', '');
  const iconName = toKebab(withoutFormat);
  const className = 'i-' + iconName;

  TYPE_FILE_CONTENT.push(`'${iconName}'`);
  CSS_FILE_CONTENT.push(createIconStyle(className, file));
});

fs.writeFile(__dirname + '/icons.css', CSS_FILE_CONTENT.join('\n'), function (err) {
  if (err) throw err;
  console.log('Css file is created successfully');
});

const createTypeFile = () => {
  return 'export type IconName = ' + TYPE_FILE_CONTENT.join(' | ');
};

fs.writeFile(__dirname + '/types.ts', createTypeFile(), function (err) {
  if (err) throw err;
  console.log('Type file is created successfully.');
});
