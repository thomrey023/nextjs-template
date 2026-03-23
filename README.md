This is a [Next.js](https://nextjs.org) project template.

## Getting Started

First, run this in console to install necessary packages in the template:
(Double check package.json first to see which packages will be installed so you can add/remove packages)

```bash
pnpm install
```

Warning: This project template will be using pnpm as the package manager. If you want to use something else, please handle accordingly.

## Remove VSCODE settings in actual project

To remove VSCODE settings from repo and no longer track it, just follow these steps:

1. Type this in first in console to remove vscode folder from repo and stop tracking it in git

```bash
git rm -r --cached .vscode
```

2. Update .gitignore and add .vscode/
3. Push changes

## TODO: erase README text in actual project
