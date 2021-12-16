const { awscdk } = require('projen');

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '1.133.0',
  defaultReleaseBranch: 'main',
  name: 'lamdba-bash-demo',
  deps: [
    'cdk-lambda-bash',
    'aws-cdk-lib@2.0.0-rc.16',
  ],
});
project.synth();
