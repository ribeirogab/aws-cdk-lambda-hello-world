import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class HelloWorldService extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const handler = new lambda.Function(this, "AwsCdkLambdaHelloWorld", {
      functionName: "aws-cdk-lambda-hello-world",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("dist"),
      handler: "index.handler",
    });

    const api = new apigateway.RestApi(this, "aws-cdk-lambda-hello-world-api", {
      restApiName: "Hello World Service",
      description: 'This service serves a simple "Hello, World" message.',
    });

    const getIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' },
    });

    api.root.addMethod("GET", getIntegration); // GET /
  }
}
