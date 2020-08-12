// https://www.terraform.io/docs/providers/google-beta/r/data_google_storage_transfer_project_service_account_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleStorageTransferProjectServiceAccountAConfig extends TerraformMetaArguments {
  readonly project?: string;
}

// Resource

export class DataGoogleStorageTransferProjectServiceAccountA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleStorageTransferProjectServiceAccountAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_storage_transfer_project_service_account',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
    };
  }
}
