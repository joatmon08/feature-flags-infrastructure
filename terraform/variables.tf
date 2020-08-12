variable "project" {
  type        = string
  description = "GCP Project"
}

variable "environment" {
  type        = string
  description = "Environment"
}

variable "zone" {
  type        = string
  description = "GCP Zone to deploy"
  default     = "us-central1-a"
}
