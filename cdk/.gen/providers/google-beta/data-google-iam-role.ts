// https://www.terraform.io/docs/providers/google-beta/r/data_google_iam_role_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleIamRoleAConfig extends TerraformMetaArguments {
  readonly name: string;
}

// Resource

export class DataGoogleIamRoleA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleIamRoleAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // included_permissions - computed: true, optional: false, required: true
  public get includedPermissions() {
    return this.getListAttribute('included_permissions');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // stage - computed: true, optional: false, required: true
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // title - computed: true, optional: false, required: true
  public get title() {
    return this.getStringAttribute('title');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
