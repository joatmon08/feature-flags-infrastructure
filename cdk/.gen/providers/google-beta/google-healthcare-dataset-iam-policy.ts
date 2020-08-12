// https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_dataset_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleHealthcareDatasetIamPolicyConfig extends TerraformMetaArguments {
  readonly datasetId: string;
  readonly policyData: string;
}

// Resource

export class GoogleHealthcareDatasetIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleHealthcareDatasetIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dataset_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId: string;
  public get datasetId() {
    return this._datasetId;
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this._policyData;
  }
  public set policyData(value: string) {
    this._policyData = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset_id: this._datasetId,
      policy_data: this._policyData,
    };
  }
}
