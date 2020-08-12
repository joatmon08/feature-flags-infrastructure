// https://www.terraform.io/docs/providers/google-beta/r/data_google_compute_regions_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleComputeRegionsAConfig extends TerraformMetaArguments {
  readonly project?: string;
  readonly status?: string;
}

// Resource

export class DataGoogleComputeRegionsA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeRegionsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_regions',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._status = config.status;
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

  // names - computed: true, optional: false, required: true
  public get names() {
    return this.getListAttribute('names');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      status: this._status,
    };
  }
}
