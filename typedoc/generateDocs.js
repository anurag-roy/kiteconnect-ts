//@ts-check
const { writeFileSync, readdirSync, copyFileSync } = require('node:fs');
const { join } = require('node:path');
const TypeDoc = require('typedoc');

const DOCS_DIR = join('docs', 'pages');

const copyFilesToDocs = () => {
  copyFileSync(join('typedoc', '_meta.json'), join(DOCS_DIR, '_meta.json'));
  copyFileSync(
    join('typedoc', 'quickStart.md'),
    join(DOCS_DIR, 'quickStart.md')
  );
  copyFileSync('CHANGELOG.md', join(DOCS_DIR, 'CHANGELOG.md'));
  copyFileSync('CONTRIBUTING.md', join(DOCS_DIR, 'CONTRIBUTING.md'));
  copyFileSync('CODE_OF_CONDUCT.md', join(DOCS_DIR, 'CODE_OF_CONDUCT.md'));
};

// Explicity create a '_meta.json' file with camelCase names
// Because Nextra defaults them to title case
const preserveCamelCaseNaming = (/**@type string*/ folder) => {
  const meta = {};
  for (const fileName of readdirSync(folder)) {
    const [name] = fileName.split('.');
    meta[name] = name;
  }
  writeFileSync(
    join(folder, '_meta.json'),
    JSON.stringify(meta, null, 2),
    'utf-8'
  );
};

async function main() {
  const app = new TypeDoc.Application();

  app.options.addReader(new TypeDoc.TSConfigReader());
  app.options.addReader(new TypeDoc.TypeDocReader());

  app.bootstrap({});

  const project = app.convert();

  if (project) {
    await app.generateDocs(project, DOCS_DIR);

    // Copy extra md and json files
    copyFilesToDocs();

    // Create _meta.json files with camelCased naming
    const folders = ['classes', 'interfaces', 'enums'];
    for (const folder of folders) {
      preserveCamelCaseNaming(join(DOCS_DIR, folder));
    }
  }
}

main().catch(console.error);
