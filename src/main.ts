import { App, Construct, Stack } from '@aws-cdk/core';
import { BashExecFunction } from 'cdk-lambda-bash';
import * as path from 'path';

export interface DemoProps {}

export class Demo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new BashExecFunction(this, 'BashFunc', {
      script:  path.join( __dirname, 'demo.sh'),
    })
    define resources here...
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

const stack = new Stack(app,'my-stack-dev', { env: devEnv });
new Demo(stack,'Demo')

app.synth();
