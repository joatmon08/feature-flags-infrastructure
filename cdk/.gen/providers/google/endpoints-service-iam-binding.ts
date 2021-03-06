// https://www.terraform.io/docs/providers/google/r/endpoints_service_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EndpointsServiceIamBindingConfig extends TerraformMetaArguments {
  readonly members: string[];
  readonly role: string;
  readonly serviceName: string;
  /** condition block */
  readonly condition?: EndpointsServiceIamBindingCondition[];
}
export interface EndpointsServiceIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class EndpointsServiceIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EndpointsServiceIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_endpoints_service_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._role = config.role;
    this._serviceName = config.serviceName;
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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this._serviceName;
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: EndpointsServiceIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: EndpointsServiceIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      members: this._members,
      role: this._role,
      service_name: this._serviceName,
      condition: this._condition,
    };
  }
}
