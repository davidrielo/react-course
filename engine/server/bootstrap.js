const ROOT = '../../exercises';

const first = require('lodash.first');
const fs = require('fs');
const glob = require('glob');
const pascalCase = require('pascal-case');
const path = require('path');

const getIndex = (slug) => {
  return first(slug.match(/^\d\d/));
};

const getTitle = (slug) => {
  return slug.replace(getIndex(slug), '')
    .replace(/\-/g, ' ')
    .split(/\s/)
    .map(word => pascalCase(word))
    .join(' ');
};

const getFiles = (slug) => {
  return glob.sync(path.join(__dirname, `${ROOT}/${slug}/*.js`)).map((file) => {
    return file.replace(path.join(__dirname, `${ROOT}/${slug}/`), '');
  });
};

const directories = fs.readdirSync(path.join(__dirname, '../../exercises'));

const slugs = directories.filter(function(ex) {
  return (/^\d\d/).test(ex);
});

const exercises = slugs.map(function(slug) {
  return {
    slug: slug,
    index: Number(getIndex(slug)),
    title: getTitle(slug),
    files: getFiles(slug)
  };
}).sort((a, b) => {
  return a.index - b.index;
}).reduce(function(all, ex) {
  return Object.assign(all, {
    [ex.index]: ex
  });
}, {});

const str = JSON.stringify(exercises, null, 2);
const filename = path.join(__dirname, '../client/.exercises.json');
fs.writeFileSync(filename, str, 'utf-8');
