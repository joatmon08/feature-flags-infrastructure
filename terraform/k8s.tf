resource "google_container_cluster" "feature_flags" {
  name                     = "${var.environment}-feature-flags"
  location                 = var.zone
  initial_node_count       = 1
  remove_default_node_pool = true

  master_auth {
    username = ""
    password = ""

    client_certificate_config {
      issue_client_certificate = false
    }
  }
}

resource "google_container_node_pool" "feature_flags" {
  depends_on = [google_service_account.feature_flags]
  name       = "${var.environment}-feature-flags-node-pool"
  location   = var.zone
  cluster    = google_container_cluster.feature_flags.name
  node_count = 1

  node_config {
    preemptible  = true
    machine_type = "e2-medium"

    service_account = google_service_account.feature_flags.email

    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}

module "kubernetes" {
  count = var.enable_workload_identity ? 1 : 0
  providers = {
    google      = google,
    google-beta = google-beta,
  }
  source                  = "joatmon08/kubernetes/google"
  version                 = "0.4.0"
  project                 = var.project
  enable_highmem_nodepool = var.enable_highmem_nodepool
  environment             = var.environment
  zone                    = var.zone
  version_identifier      = "v2"
  service_account_id      = google_service_account.feature_flags.account_id
}