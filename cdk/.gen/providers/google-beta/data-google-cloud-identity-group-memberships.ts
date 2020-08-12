// https://www.terraform.io/docs/providers/google-beta/r/data_google_cloud_identity_group_memberships.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleCloudIdentityGroupMembershipsConfig extends TerraformMetaArguments {
  /** The name of the Group to get memberships from. */
  readonly group: string;
}
export class DataGoogleCloudIdentityGroupMembershipsMembershipsMemberKey extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataGoogleCloudIdentityGroupMembershipsMembershipsPreferredMemberKey extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataGoogleCloudIdentityGroupMembershipsMembershipsRoles extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataGoogleCloudIdentityGroupMembershipsMemberships extends ComplexComputedList {

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // group - computed: true, optional: false, required: true
  public get group() {
    return this.getStringAttribute('group');
  }

  // member_key - computed: true, optional: false, required: true
  public get memberKey() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // preferred_member_key - computed: true, optional: false, required: true
  public get preferredMemberKey() {
    return 'not implemented' as any;
  }

  // roles - computed: true, optional: false, required: true
  public get roles() {
    return 'not implemented' as any;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

// Resource

export class DataGoogleCloudIdentityGroupMemberships extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group_memberships',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // memberships - computed: true, optional: false, required: true
  public memberships(index: string) {
    return new DataGoogleCloudIdentityGroupMembershipsMemberships(this, 'memberships', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group: this._group,
    };
  }
}
