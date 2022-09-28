import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import { HelloWorldService } from "./hello-world-service";

export class AwsCdkLambdaHelloWorldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new HelloWorldService(this, "HelloWorld");
  }
}
