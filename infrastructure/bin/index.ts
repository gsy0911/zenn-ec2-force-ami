import {
  App,
  Tags
} from 'aws-cdk-lib';
import * as lib from '../lib';
const app = new App();
const description = "version@1.0.0"

const ec2Ssm = new lib.Ec2SsmStack(app, "example-ec2-ssm", lib.paramsEc2Ssm, {env: lib.env, description});

Tags.of(ec2Ssm).add("project", "ec2-ssm")
app.synth();
