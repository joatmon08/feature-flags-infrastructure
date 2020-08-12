// https://www.terraform.io/docs/providers/google-beta/r/data_google_client_config_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleClientConfigAConfig extends TerraformMetaArguments {
}

// Resource

export class DataGoogleClientConfigA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleClientConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_client_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: true
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: false, required: true
  public get project() {
    return this.getStringAttribute('project');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // zone - computed: true, optional: false, required: true
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
