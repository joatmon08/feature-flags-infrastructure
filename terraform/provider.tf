terraform {
  backend "remote" {}
  required_version = "~> 0.13.0"
  required_providers {
    google = {
      version = "~> 3.34"
    }
    google-beta = {
      version = "~> 3.34"
    }
  }
}

provider "google" {
  project = var.project
}

provider "google-beta" {
  project = var.project
}