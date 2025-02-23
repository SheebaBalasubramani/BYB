# React LocalStack S3 Deployment

## Overview
This project deploys a React application to LocalStack S3 using Docker.

## Prerequisites
- Docker & Docker Compose
- LocalStack CLI
- AWS CLI

## Deployment Steps
1. Build React project:  
npm install
npm run build

2. Start LocalStack:
docker-compose up -d

3. Enter LocalStack container:  
docker exec -it react-s3-deployment-localstack bash

4. Create S3 bucket:  
awslocal s3api create-bucket --bucket my-react-app

5. Upload files to S3:  
awslocal s3 cp /mnt/build/ s3://my-react-app --recursive

6. Set S3 bucket policy:  
awslocal s3api put-bucket-policy --bucket my-react-app --policy file:///mnt/policy.json

7. Visit react app:  
http://my-react-app.s3.localhost.localstack.cloud:4566/index.html
