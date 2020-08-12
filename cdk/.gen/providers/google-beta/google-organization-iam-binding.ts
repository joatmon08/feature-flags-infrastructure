// https://www.terraform.io/docs/providers/google-beta/r/google_organization_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleOrganizationIamBindingConfig extends TerraformMetaArguments {
  readonly members: string[];
  /** The numeric ID of the organization in which you want to manage the audit logging config. */
  readonly orgId: string;
  readonly role: string;
  /** condition block */
  readonly condition?: GoogleOrganizationIamBindingCondition[];
}
export interface GoogleOrganizationIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleOrganizationIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleOrganizationIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._orgId = config.orgId;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string) {
    this._orgId = value;
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
  private _condition?: GoogleOrganizationIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleOrganizationIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      members: this._members,
      org_id: this._orgId,
      role: this._role,
      condition: this._condition,
    };
  }
}
