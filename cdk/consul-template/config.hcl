consul {
  address = "consul:8500"
}

template {
  source = "./consul-template/tfvars.ctmpl"

  destination = "./tfvars.json"
}

exec {
  command = "plan.sh cdktf"
}