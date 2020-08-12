// https://www.terraform.io/docs/providers/google-beta/r/google_firebase_project_location.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleFirebaseProjectLocationConfig extends TerraformMetaArguments {
  /** The ID of the default GCP resource location for the Project. The location must be one of the available GCP
resource locations. */
  readonly locationId: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: GoogleFirebaseProjectLocationTimeouts;
}
export interface GoogleFirebaseProjectLocationTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GoogleFirebaseProjectLocation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleFirebaseProjectLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_project_location',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._locationId = config.locationId;
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

  // location_id - computed: false, optional: false, required: true
  private _locationId: string;
  public get locationId() {
    return this._locationId;
  }
  public set locationId(value: string) {
    this._locationId = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleFirebaseProjectLocationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleFirebaseProjectLocationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location_id: this._locationId,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
