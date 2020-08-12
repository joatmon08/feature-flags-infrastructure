// https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeOrganizationSecurityPolicyAssociationConfig extends TerraformMetaArguments {
  /** The resource that the security policy is attached to. */
  readonly attachmentId: string;
  /** The name for an association. */
  readonly name: string;
  /** The security policy ID of the association. */
  readonly policyId: string;
  /** timeouts block */
  readonly timeouts?: GoogleComputeOrganizationSecurityPolicyAssociationTimeouts;
}
export interface GoogleComputeOrganizationSecurityPolicyAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GoogleComputeOrganizationSecurityPolicyAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeOrganizationSecurityPolicyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy_association',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attachmentId = config.attachmentId;
    this._name = config.name;
    this._policyId = config.policyId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: false, optional: false, required: true
  private _attachmentId: string;
  public get attachmentId() {
    return this._attachmentId;
  }
  public set attachmentId(value: string) {
    this._attachmentId = value;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId: string;
  public get policyId() {
    return this._policyId;
  }
  public set policyId(value: string) {
    this._policyId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeOrganizationSecurityPolicyAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeOrganizationSecurityPolicyAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_id: this._attachmentId,
      name: this._name,
      policy_id: this._policyId,
      timeouts: this._timeouts,
    };
  }
}
