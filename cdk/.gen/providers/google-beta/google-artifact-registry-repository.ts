// https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleArtifactRegistryRepositoryConfig extends TerraformMetaArguments {
  /** The user-provided description of the repository. */
  readonly description?: string;
  /** The format of packages that are stored in the repoitory. Possible values: ["DOCKER"] */
  readonly format: string;
  /** The Cloud KMS resource name of the customer managed encryption key that’s
used to encrypt the contents of the Repository. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created. */
  readonly kmsKeyName?: string;
  /** Labels with user-defined metadata.
This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes. */
  readonly labels?: { [key: string]: string };
  /** The name of the location this repository is located in. */
  readonly location?: string;
  readonly project?: string;
  /** The last part of the repository name, for example:
"repo1" */
  readonly repositoryId: string;
  /** timeouts block */
  readonly timeouts?: GoogleArtifactRegistryRepositoryTimeouts;
}
export interface GoogleArtifactRegistryRepositoryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleArtifactRegistryRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleArtifactRegistryRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_repository',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._format = config.format;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._timeouts = config.timeouts;
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

  // format - computed: false, optional: false, required: true
  private _format: string;
  public get format() {
    return this._format;
  }
  public set format(value: string) {
    this._format = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string;
  public get kmsKeyName() {
    return this._kmsKeyName;
  }
  public set kmsKeyName(value: string | undefined) {
    this._kmsKeyName = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location ?? this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId: string;
  public get repositoryId() {
    return this._repositoryId;
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleArtifactRegistryRepositoryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleArtifactRegistryRepositoryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      format: this._format,
      kms_key_name: this._kmsKeyName,
      labels: this._labels,
      location: this._location,
      project: this._project,
      repository_id: this._repositoryId,
      timeouts: this._timeouts,
    };
  }
}
