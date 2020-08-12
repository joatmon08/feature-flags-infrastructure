// https://www.terraform.io/docs/providers/google-beta/r/data_google_projects_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleProjectsAConfig extends TerraformMetaArguments {
  readonly filter: string;
}
export class DataGoogleProjectsProjectsA extends ComplexComputedList {

  // project_id - computed: true, optional: false, required: true
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

// Resource

export class DataGoogleProjectsA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleProjectsAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_projects',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: false, required: true
  private _filter: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string) {
    this._filter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // projects - computed: true, optional: false, required: true
  public projects(index: string) {
    return new DataGoogleProjectsProjectsA(this, 'projects', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: this._filter,
    };
  }
}
