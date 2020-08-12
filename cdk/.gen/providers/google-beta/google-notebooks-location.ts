// https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_location.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleNotebooksLocationConfig extends TerraformMetaArguments {
  /** Name of the Location resource. */
  readonly name?: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: GoogleNotebooksLocationTimeouts;
}
export interface GoogleNotebooksLocationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleNotebooksLocation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleNotebooksLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_location',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._project = config.project;
    this._timeouts = config.timeouts;
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleNotebooksLocationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleNotebooksLocationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
