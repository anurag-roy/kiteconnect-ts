//@ts-check
const { writeFileSync, readdirSync } = require('node:fs');
const { join } = require('node:path');
const TypeDoc = require('typedoc');

const DOCS_DIR = join('docs', 'pages');

const createMetaFiles = () => {
  writeFileSync(
    join(DOCS_DIR, '_meta.json'),
    JSON.stringify(
      {
        index: 'Introduction',
        classes: 'Classes',
        interfaces: 'Interfaces',
        modules: 'Modules',
      },
      null,
      2
    ),
    'utf-8'
  );

  writeFileSync(
    join(DOCS_DIR, 'classes', '_meta.json'),
    JSON.stringify(
      {
        KiteConnect: 'KiteConnect',
        KiteTicker: 'KiteTicker',
      },
      null,
      2
    ),
    'utf-8'
  );

  const interfacesFolder = join(DOCS_DIR, 'interfaces');
  const interfacesMeta = {};
  for (const fileName of readdirSync(interfacesFolder)) {
    const [interfaceName] = fileName.split('.');
    interfacesMeta[interfaceName] = interfaceName;
  }
  writeFileSync(
    join(interfacesFolder, '_meta.json'),
    JSON.stringify(interfacesMeta, null, 2),
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
    createMetaFiles();
  }
}

main().catch(console.error);
