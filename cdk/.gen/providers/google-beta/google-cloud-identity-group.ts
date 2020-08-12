// https://www.terraform.io/docs/providers/google-beta/r/google_cloud_identity_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleCloudIdentityGroupConfig extends TerraformMetaArguments {
  /** An extended description to help users determine the purpose of a Group.
Must not be longer than 4,096 characters. */
  readonly description?: string;
  /** The display name of the Group. */
  readonly displayName?: string;
  /** The labels that apply to the Group.

Must not contain more than one entry. Must contain the entry
'cloudidentity.googleapis.com/groups.discussion_forum': '' if the Group is a Google Group or
'system/groups/external': '' if the Group is an external-identity-mapped group. */
  readonly labels: { [key: string]: string };
  /** The resource name of the entity under which this Group resides in the
Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups. */
  readonly parent: string;
  /** group_key block */
  readonly groupKey: GoogleCloudIdentityGroupGroupKey[];
  /** timeouts block */
  readonly timeouts?: GoogleCloudIdentityGroupTimeouts;
}
export interface GoogleCloudIdentityGroupGroupKey {
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
export interface GoogleCloudIdentityGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleCloudIdentityGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleCloudIdentityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._parent = config.parent;
    this._groupKey = config.groupKey;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: false, required: true
  private _labels: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // group_key - computed: false, optional: false, required: true
  private _groupKey: GoogleCloudIdentityGroupGroupKey[];
  public get groupKey() {
    return this._groupKey;
  }
  public set groupKey(value: GoogleCloudIdentityGroupGroupKey[]) {
    this._groupKey = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleCloudIdentityGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleCloudIdentityGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      labels: this._labels,
      parent: this._parent,
      group_key: this._groupKey,
      timeouts: this._timeouts,
    };
  }
}
