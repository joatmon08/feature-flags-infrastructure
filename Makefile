clean:
	rm -rf terraform/.terraform terraform/terraform.tfvars terraform/toggles.tf terraform/consul-template.tfplan
	rm -rf cdk/tfvars.json cdk/cdk.out
