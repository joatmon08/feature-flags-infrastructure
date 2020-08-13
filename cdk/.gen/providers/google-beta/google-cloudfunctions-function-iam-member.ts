// https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions_function_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleCloudfunctionsFunctionIamMemberConfig extends TerraformMetaArguments {
  readonly cloudFunction: string;
  readonly member: string;
  readonly project?: string;
  readonly region?: string;
  readonly role: string;
  /** condition block */
  readonly condition?: GoogleCloudfunctionsFunctionIamMemberCondition[];
}
export interface GoogleCloudfunctionsFunctionIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleCloudfunctionsFunctionIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleCloudfunctionsFunctionIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions_function_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudFunction = config.cloudFunction;
    this._member = config.member;
    this._project = config.project;
    this._region = config.region;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_function - computed: false, optional: false, required: true
  private _cloudFunction: string;
  public get cloudFunction() {
    return this._cloudFunction;
  }
  public set cloudFunction(value: string) {
    this._cloudFunction = value;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
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
  private _condition?: GoogleCloudfunctionsFunctionIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleCloudfunctionsFunctionIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_function: this._cloudFunction,
      member: this._member,
      project: this._project,
      region: this._region,
      role: this._role,
      condition: this._condition,
    };
  }
}
