// https://www.terraform.io/docs/providers/google-beta/r/google_secret_manager_secret_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleSecretManagerSecretIamBindingConfig extends TerraformMetaArguments {
  readonly members: string[];
  readonly project?: string;
  readonly role: string;
  readonly secretId: string;
  /** condition block */
  readonly condition?: GoogleSecretManagerSecretIamBindingCondition[];
}
export interface GoogleSecretManagerSecretIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleSecretManagerSecretIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleSecretManagerSecretIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._project = config.project;
    this._role = config.role;
    this._secretId = config.secretId;
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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: GoogleSecretManagerSecretIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleSecretManagerSecretIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      members: this._members,
      project: this._project,
      role: this._role,
      secret_id: this._secretId,
      condition: this._condition,
    };
  }
}
