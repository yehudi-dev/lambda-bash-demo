const { awscdk } = require('projen');

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: 'lamdba-bash-demo',
  deps: [
    'cdk-lambda-bash@^2',
  ],
});
project.synth();
