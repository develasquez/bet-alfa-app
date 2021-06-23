#!/bin/bash

export TEMPLATE_VERSION=$2;
export PROJECT_ID=$1
echo $PROJECT_ID;

gcloud config set project $PROJECT_ID;

gcloud config list;

cat deployment.yaml | sed -e "s/{PROJECT_ID}/${PROJECT_ID}/g;" | sed -e "s/{TEMPLATE_VERSION}/${TEMPLATE_VERSION}/g;"  > deployment_version.yaml

gcloud beta run services replace deployment_version.yaml --platform managed --region us-central1 
