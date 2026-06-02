provider "aws" {
  region = "us-east-1"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "ganesh-iniyan-1"
    key    = "devjunenew2026.tfstate"
    region = "ap-southeast-2"
  }
}

