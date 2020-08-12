// https://www.terraform.io/docs/providers/google-beta/r/google_compute_machine_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeMachineImageConfig extends TerraformMetaArguments {
  /** A text description of the resource. */
  readonly description?: string;
  /** Name of the resource. */
  readonly name: string;
  readonly project?: string;
  /** The source instance used to create the machine image. You can provide this as a partial or full URL to the resource. */
  readonly sourceInstance: string;
  /** timeouts block */
  readonly timeouts?: GoogleComputeMachineImageTimeouts;
}
export interface GoogleComputeMachineImageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleComputeMachineImage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeMachineImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_machine_image',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._sourceInstance = config.sourceInstance;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // source_instance - computed: false, optional: false, required: true
  private _sourceInstance: string;
  public get sourceInstance() {
    return this._sourceInstance;
  }
  public set sourceInstance(value: string) {
    this._sourceInstance = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeMachineImageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeMachineImageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      project: this._project,
      source_instance: this._sourceInstance,
      timeouts: this._timeouts,
    };
  }
}
