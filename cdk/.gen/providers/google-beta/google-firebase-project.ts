// https://www.terraform.io/docs/providers/google-beta/r/google_firebase_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleFirebaseProjectConfig extends TerraformMetaArguments {
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: GoogleFirebaseProjectTimeouts;
}
export interface GoogleFirebaseProjectTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GoogleFirebaseProject extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleFirebaseProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_project',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // project_number - computed: true, optional: false, required: true
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleFirebaseProjectTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleFirebaseProjectTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
