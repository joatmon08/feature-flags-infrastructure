// https://www.terraform.io/docs/providers/google-beta/r/google_service_directory_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleServiceDirectoryNamespaceConfig extends TerraformMetaArguments {
  /** Resource labels associated with this Namespace. No more than 64 user
labels can be associated with a given resource. Label keys and values can
be no longer than 63 characters. */
  readonly labels?: { [key: string]: string };
  /** The location for the Namespace.
A full list of valid locations can be found by running
'gcloud beta service-directory locations list'. */
  readonly location: string;
  /** The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character. */
  readonly namespaceId: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: GoogleServiceDirectoryNamespaceTimeouts;
}
export interface GoogleServiceDirectoryNamespaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleServiceDirectoryNamespace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleServiceDirectoryNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_directory_namespace',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._location = config.location;
    this._namespaceId = config.namespaceId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId: string;
  public get namespaceId() {
    return this._namespaceId;
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
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
  private _timeouts?: GoogleServiceDirectoryNamespaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleServiceDirectoryNamespaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: this._labels,
      location: this._location,
      namespace_id: this._namespaceId,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
