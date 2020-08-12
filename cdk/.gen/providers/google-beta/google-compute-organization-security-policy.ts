// https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeOrganizationSecurityPolicyConfig extends TerraformMetaArguments {
  /** A textual description for the organization security policy. */
  readonly description?: string;
  /** A textual name of the security policy. */
  readonly displayName: string;
  /** The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id} or folders/{folder_id} */
  readonly parent: string;
  /** The type indicates the intended use of the security policy.
For organization security policies, the only supported type
is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"] */
  readonly type?: string;
  /** timeouts block */
  readonly timeouts?: GoogleComputeOrganizationSecurityPolicyTimeouts;
}
export interface GoogleComputeOrganizationSecurityPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleComputeOrganizationSecurityPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeOrganizationSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy',
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
    this._parent = config.parent;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // policy_id - computed: true, optional: false, required: true
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeOrganizationSecurityPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeOrganizationSecurityPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      parent: this._parent,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
