# @konx-dev/component-library-helper

Utility script to add/remove components from konx-dev/component-library, functionality inspiration taken from shadcn/ui.

-- This is only a demo repo, currently under development on a proof of concept --

## How to use

Reference paired component library for full component list, found [here](https://github.com/konx-dev/component-library-demo)

`npx @konx-dev/component-library-helper add <component_name>`

## Todolist

### MVP

[x] - error script if no args are passed
[x] - check if a component already exists in the project, if so skip (achieved via -n flag)
[x] - be able to handle multiple component installations i.e 'npm run add link button'
[x] - check for validity of requested components against remote component list
[x] - Decide on plan for temp files (purged at the end)
[ ] - Test functionality via a NPX command

### QoL

[ ] - Echo install outcome (fail, success, passed component installs)
[ ] - Handle install skips with echos
[ ] - Additional scripts (tbc) remove components etc

## Thoughts / Issues / Questions

- goal will be to have this in npm and perform something like... 'npx @konx-dev/component-library add button'
- rename temp folder or better solution for initial git clone

## Assumptions

- Intended for Nuxt projects only.
- The project will use file-based naming imports and folder structure should reflect that.
- The script will target FOLDERS rather than .vue files, so any additional child components will be brought in.
