// https://www.terraform.io/docs/providers/google-beta/r/google_service_directory_namespace_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleServiceDirectoryNamespaceIamMemberConfig extends TerraformMetaArguments {
  readonly member: string;
  readonly name: string;
  readonly role: string;
  /** condition block */
  readonly condition?: GoogleServiceDirectoryNamespaceIamMemberCondition[];
}
export interface GoogleServiceDirectoryNamespaceIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleServiceDirectoryNamespaceIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleServiceDirectoryNamespaceIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_directory_namespace_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
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

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this._member;
  }
  public set member(value: string) {
    this._member = value;
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
  private _condition?: GoogleServiceDirectoryNamespaceIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleServiceDirectoryNamespaceIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      member: this._member,
      name: this._name,
      role: this._role,
      condition: this._condition,
    };
  }
}
