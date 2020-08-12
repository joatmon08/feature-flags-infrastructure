// https://www.terraform.io/docs/providers/google-beta/r/data_google_cloud_identity_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleCloudIdentityGroupsConfig extends TerraformMetaArguments {
  /** The resource name of the entity under which this Group resides in the
Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups. */
  readonly parent: string;
}
export class DataGoogleCloudIdentityGroupsGroupsGroupKey extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataGoogleCloudIdentityGroupsGroups extends ComplexComputedList {

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_key - computed: true, optional: false, required: true
  public get groupKey() {
    return 'not implemented' as any;
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: true, optional: false, required: true
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

// Resource

export class DataGoogleCloudIdentityGroups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_groups',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: true, optional: false, required: true
  public groups(index: string) {
    return new DataGoogleCloudIdentityGroupsGroups(this, 'groups', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      parent: this._parent,
    };
  }
}
