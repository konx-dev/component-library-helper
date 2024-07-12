import shell from 'shelljs';

// kill process if no components are provided
if (process.argv.length < 3) {
  shell.echo('No arguments provided, please see documentation.');
  process.exit();
}

// establishing current working directory
const path = process.cwd();

// Position 2 signifies the arguments position
const components = process.argv.slice(2);

// remote github repo, this will be my collection of components
const componentLibraryUrl = 'https://github.com/konx-dev/component-library-demo.git';

// helpers
function prepareLocal() {
  shell.mkdir('-p', 'temp');
  shell.mkdir('-p', 'components/kx');
}

function cloneRemote(remoteUrl, targetFolder) {
  shell.exec(`git clone ${remoteUrl} ${targetFolder}`);
}

function installComponents(components) {
  const remoteComponentList = buildRemoteComponentList();

  components.forEach((component) => {
    // compare against available components before attempting to copy
    if (remoteComponentList.includes(component)) {
      // no-clobber (-n) prevents component accidental overwrites, no need for file checking
      shell.cp('-Rn', `${path}/temp/src/components/${component}`, `${path}/components/kx`);
    } else {
      shell.echo(`warn: '${component}' doesn't exist, skipping install.`);
    }
  });
}

// Check the temp folder for a list of all available components
function buildRemoteComponentList() {
  return shell.ls('-A', `${path}/temp/src/components`).toString().split(',');
}

// delete temp files
function purgeLocal() {
  shell.rm('-rf', 'temp');
}

//// SCRIPT STARTS

// prep local
prepareLocal();

// clone remote
cloneRemote(componentLibraryUrl, 'temp');

// move component(s) into project folder
installComponents(components);

// tidy up (delete temp etc)
purgeLocal();

//// SCRIPT ENDS
