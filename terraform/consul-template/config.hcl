consul {
  address = "consul:8500"
}

template {
  source = "./consul-template/terraform.ctmpl"

  destination = "./terraform.tfvars"
}

exec {
  command = "plan.sh terraform -backend-config=backend.json"
}