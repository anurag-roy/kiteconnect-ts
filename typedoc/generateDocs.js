//@ts-check
const { writeFileSync, readdirSync } = require('node:fs');
const { join } = require('node:path');
const TypeDoc = require('typedoc');

const DOCS_DIR = join('docs', 'pages');

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

const createMetaFiles = () => {
  writeFileSync(
    join(DOCS_DIR, '_meta.json'),
    JSON.stringify(
      {
        index: 'Introduction',
        modules: 'Modules',
        enums: 'Enums',
        classes: 'Classes',
        interfaces: 'Interfaces',
      },
      null,
      2
    ),
    'utf-8'
  );

  preserveCamelCaseNaming(join(DOCS_DIR, 'classes'));
  preserveCamelCaseNaming(join(DOCS_DIR, 'interfaces'));
  preserveCamelCaseNaming(join(DOCS_DIR, 'enums'));
};

async function main() {
  const app = new TypeDoc.Application();

  app.options.addReader(new TypeDoc.TSConfigReader());
  app.options.addReader(new TypeDoc.TypeDocReader());

  app.bootstrap({});

  const project = app.convert();

  if (project) {
    await app.generateDocs(project, DOCS_DIR);
    createMetaFiles();
  }
}

main().catch(console.error);
