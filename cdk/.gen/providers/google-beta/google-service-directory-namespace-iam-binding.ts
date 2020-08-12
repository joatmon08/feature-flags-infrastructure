// https://www.terraform.io/docs/providers/google-beta/r/google_service_directory_namespace_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleServiceDirectoryNamespaceIamBindingConfig extends TerraformMetaArguments {
  readonly members: string[];
  readonly name: string;
  readonly role: string;
  /** condition block */
  readonly condition?: GoogleServiceDirectoryNamespaceIamBindingCondition[];
}
export interface GoogleServiceDirectoryNamespaceIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleServiceDirectoryNamespaceIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleServiceDirectoryNamespaceIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_directory_namespace_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._name = config.name;
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

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[]) {
    this._members = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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
  private _condition?: GoogleServiceDirectoryNamespaceIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleServiceDirectoryNamespaceIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      members: this._members,
      name: this._name,
      role: this._role,
      condition: this._condition,
    };
  }
}
