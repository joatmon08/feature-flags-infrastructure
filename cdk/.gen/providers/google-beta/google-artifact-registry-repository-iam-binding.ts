// https://www.terraform.io/docs/providers/google-beta/r/google_artifact_registry_repository_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleArtifactRegistryRepositoryIamBindingConfig extends TerraformMetaArguments {
  readonly location?: string;
  readonly members: string[];
  readonly project?: string;
  readonly repository: string;
  readonly role: string;
  /** condition block */
  readonly condition?: GoogleArtifactRegistryRepositoryIamBindingCondition[];
}
export interface GoogleArtifactRegistryRepositoryIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleArtifactRegistryRepositoryIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleArtifactRegistryRepositoryIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_repository_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._members = config.members;
    this._project = config.project;
    this._repository = config.repository;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location ?? this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[]) {
    this._members = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: GoogleArtifactRegistryRepositoryIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleArtifactRegistryRepositoryIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      members: this._members,
      project: this._project,
      repository: this._repository,
      role: this._role,
      condition: this._condition,
    };
  }
}
