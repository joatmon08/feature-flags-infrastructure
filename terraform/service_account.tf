resource "google_service_account" "feature_flags" {
  account_id   = "${var.environment}-feature-flags"
  display_name = "Service Account for GKE"
}

resource "google_project_iam_member" "feature_flags_pubsub_subscriber" {
  role   = "roles/pubsub.subscriber"
  member = "serviceAccount:${google_service_account.feature_flags.email}"
}

resource "google_project_iam_member" "feature_flags_pubsub_publisher" {
  count  = var.enable_pubsub_publisher ? 1 : 0
  role   = "roles/pubsub.publisher"
  member = "serviceAccount:${google_service_account.feature_flags.email}"
}