**Serverless Homework**

**Create a VPC**

<img src="images/createVPC.png">

- create a vpc to have subnet

**Create database in RDS**

- allow Publicly accessible
- connect VPC

<img src="images/createRDS.png">

**Create lambda in AWS**

- create and setting postgresql Database

<img src="images/createLambda.png">

- config env for lambda function to connect to RDS database

- <img src="images/createEnv.png">

- connect lambda with VPC

- create javascript repository to use in lambda function

- zip the repository using node-lambda

**Create API Gate Way**

<img src="images/createAPIGateWay.png">

- create post function
- connect to lambda function in aws

**Create security group**

<img src="images/createSecurityGroup">

- edit security group to expose to any ware
- using security group in subnet
