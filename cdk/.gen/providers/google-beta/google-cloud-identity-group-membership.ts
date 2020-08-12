// https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group_membership.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleCloudIdentityGroupMembershipConfig extends TerraformMetaArguments {
  /** The name of the Group to create this membership in. */
  readonly group: string;
  /** member_key block */
  readonly memberKey?: GoogleCloudIdentityGroupMembershipMemberKey[];
  /** preferred_member_key block */
  readonly preferredMemberKey?: GoogleCloudIdentityGroupMembershipPreferredMemberKey[];
  /** roles block */
  readonly roles: GoogleCloudIdentityGroupMembershipRoles[];
  /** timeouts block */
  readonly timeouts?: GoogleCloudIdentityGroupMembershipTimeouts;
}
export interface GoogleCloudIdentityGroupMembershipMemberKey {
  /** The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace. */
  readonly id: string;
  /** The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'. */
  readonly namespace?: string;
}
export interface GoogleCloudIdentityGroupMembershipPreferredMemberKey {
  /** The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace. */
  readonly id: string;
  /** The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'. */
  readonly namespace?: string;
}
export interface GoogleCloudIdentityGroupMembershipRoles {
  /** The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"] */
  readonly name: string;
}
export interface GoogleCloudIdentityGroupMembershipTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleCloudIdentityGroupMembership extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleCloudIdentityGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
    this._memberKey = config.memberKey;
    this._preferredMemberKey = config.preferredMemberKey;
    this._roles = config.roles;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // group - computed: false, optional: false, required: true
  private _group: string;
  public get group() {
    return this._group;
  }
  public set group(value: string) {
    this._group = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // member_key - computed: false, optional: true, required: false
  private _memberKey?: GoogleCloudIdentityGroupMembershipMemberKey[];
  public get memberKey() {
    return this._memberKey;
  }
  public set memberKey(value: GoogleCloudIdentityGroupMembershipMemberKey[] | undefined) {
    this._memberKey = value;
  }

  // preferred_member_key - computed: false, optional: true, required: false
  private _preferredMemberKey?: GoogleCloudIdentityGroupMembershipPreferredMemberKey[];
  public get preferredMemberKey() {
    return this._preferredMemberKey;
  }
  public set preferredMemberKey(value: GoogleCloudIdentityGroupMembershipPreferredMemberKey[] | undefined) {
    this._preferredMemberKey = value;
  }

  // roles - computed: false, optional: false, required: true
  private _roles: GoogleCloudIdentityGroupMembershipRoles[];
  public get roles() {
    return this._roles;
  }
  public set roles(value: GoogleCloudIdentityGroupMembershipRoles[]) {
    this._roles = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleCloudIdentityGroupMembershipTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleCloudIdentityGroupMembershipTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group: this._group,
      member_key: this._memberKey,
      preferred_member_key: this._preferredMemberKey,
      roles: this._roles,
      timeouts: this._timeouts,
    };
  }
}
