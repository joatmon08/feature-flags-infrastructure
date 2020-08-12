// https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleNotebooksEnvironmentConfig extends TerraformMetaArguments {
  /** A brief description of this environment. */
  readonly description?: string;
  /** Display name of this environment for the UI. */
  readonly displayName?: string;
  /** A reference to the zone where the machine resides. */
  readonly location: string;
  /** The name specified for the Environment instance.
Format: projects/{project_id}/locations/{location}/environments/{environmentId} */
  readonly name: string;
  /** Path to a Bash script that automatically runs after a notebook instance fully boots up. 
The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name" */
  readonly postStartupScript?: string;
  readonly project?: string;
  /** container_image block */
  readonly containerImage?: GoogleNotebooksEnvironmentContainerImage[];
  /** timeouts block */
  readonly timeouts?: GoogleNotebooksEnvironmentTimeouts;
  /** vm_image block */
  readonly vmImage?: GoogleNotebooksEnvironmentVmImage[];
}
export interface GoogleNotebooksEnvironmentContainerImage {
  /** The path to the container image repository. 
For example: gcr.io/{project_id}/{imageName} */
  readonly repository: string;
  /** The tag of the container image. If not specified, this defaults to the latest tag. */
  readonly tag?: string;
}
export interface GoogleNotebooksEnvironmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface GoogleNotebooksEnvironmentVmImage {
  /** Use this VM image family to find the image; the newest image in this family will be used. */
  readonly imageFamily?: string;
  /** Use VM image name to find the image. */
  readonly imageName?: string;
  /** The name of the Google Cloud project that this VM image belongs to. 
Format: projects/{project_id} */
  readonly project: string;
}

// Resource

export class GoogleNotebooksEnvironment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleNotebooksEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_environment',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._location = config.location;
    this._name = config.name;
    this._postStartupScript = config.postStartupScript;
    this._project = config.project;
    this._containerImage = config.containerImage;
    this._timeouts = config.timeouts;
    this._vmImage = config.vmImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

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

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string;
  public get postStartupScript() {
    return this._postStartupScript;
  }
  public set postStartupScript(value: string | undefined) {
    this._postStartupScript = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: GoogleNotebooksEnvironmentContainerImage[];
  public get containerImage() {
    return this._containerImage;
  }
  public set containerImage(value: GoogleNotebooksEnvironmentContainerImage[] | undefined) {
    this._containerImage = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleNotebooksEnvironmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleNotebooksEnvironmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // vm_image - computed: false, optional: true, required: false
  private _vmImage?: GoogleNotebooksEnvironmentVmImage[];
  public get vmImage() {
    return this._vmImage;
  }
  public set vmImage(value: GoogleNotebooksEnvironmentVmImage[] | undefined) {
    this._vmImage = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      location: this._location,
      name: this._name,
      post_startup_script: this._postStartupScript,
      project: this._project,
      container_image: this._containerImage,
      timeouts: this._timeouts,
      vm_image: this._vmImage,
    };
  }
}
