// https://www.terraform.io/docs/providers/google-beta/r/google_storage_bucket_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleStorageBucketIamMemberConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: GoogleStorageBucketIamMemberCondition[];
}
export interface GoogleStorageBucketIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleStorageBucketIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleStorageBucketIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._member = config.member;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: GoogleStorageBucketIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleStorageBucketIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      member: this._member,
      role: this._role,
      condition: this._condition,
    };
  }
}
