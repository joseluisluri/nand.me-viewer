[![Build Status](https://travis-ci.org/joseluisluri/nand.me-viewer.svg?branch=master)](https://travis-ci.org/joseluisluri/nand.me-viewer)

# Viewer

### Usage
First time:

```
$ npm install typescript -g
$ tsc -p src

```

Start
```
$ npm start
```

## Settings

- src/app/appsettings.ts (git ignored)

## Sonar

1. Install [SonarQube Scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner)
 
2. Run this in src folder:
 ```$xslt
$ sonar-scanner.bat -Dsonar.projectKey=_nand.me-viewer_ -Dsonar.organization=joseluisluri-github -Dsonar.sources=. -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=6d426b8ca7c93c43625419a3852393bd6a4fd4a5
```