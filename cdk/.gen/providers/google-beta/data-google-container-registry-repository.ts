// https://www.terraform.io/docs/providers/google-beta/r/data_google_container_registry_repository_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleContainerRegistryRepositoryAConfig extends TerraformMetaArguments {
  readonly project?: string;
  readonly region?: string;
}

// Resource

export class DataGoogleContainerRegistryRepositoryA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleContainerRegistryRepositoryAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_container_registry_repository',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._region = config.region;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // repository_url - computed: true, optional: false, required: true
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      region: this._region,
    };
  }
}
