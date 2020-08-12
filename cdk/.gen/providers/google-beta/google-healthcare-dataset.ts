// https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleHealthcareDatasetConfig extends TerraformMetaArguments {
  /** The location for the Dataset. */
  readonly location: string;
  /** The resource name for the Dataset. */
  readonly name: string;
  readonly project?: string;
  /** The default timezone used by this dataset. Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified. */
  readonly timeZone?: string;
  /** timeouts block */
  readonly timeouts?: GoogleHealthcareDatasetTimeouts;
}
export interface GoogleHealthcareDatasetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleHealthcareDataset extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleHealthcareDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dataset',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._timeZone = config.timeZone;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
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

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this._timeZone ?? this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string | undefined) {
    this._timeZone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleHealthcareDatasetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleHealthcareDatasetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      project: this._project,
      time_zone: this._timeZone,
      timeouts: this._timeouts,
    };
  }
}
