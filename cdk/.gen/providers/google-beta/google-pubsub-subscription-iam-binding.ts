// https://www.terraform.io/docs/providers/google-beta/r/google_pubsub_subscription_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GooglePubsubSubscriptionIamBindingConfig extends TerraformMetaArguments {
  readonly members: string[];
  readonly project?: string;
  readonly role: string;
  readonly subscription: string;
  /** condition block */
  readonly condition?: GooglePubsubSubscriptionIamBindingCondition[];
}
export interface GooglePubsubSubscriptionIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GooglePubsubSubscriptionIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GooglePubsubSubscriptionIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription_iam_binding',
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
    this._subscription = config.subscription;
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

  // subscription - computed: false, optional: false, required: true
  private _subscription: string;
  public get subscription() {
    return this._subscription;
  }
  public set subscription(value: string) {
    this._subscription = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: GooglePubsubSubscriptionIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GooglePubsubSubscriptionIamBindingCondition[] | undefined) {
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
      subscription: this._subscription,
      condition: this._condition,
    };
  }
}
