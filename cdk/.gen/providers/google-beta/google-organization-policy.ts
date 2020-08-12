// https://www.terraform.io/docs/providers/google-beta/r/google_organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleOrganizationPolicyConfig extends TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  readonly orgId: string;
  /** Version of the Policy. Default version is 0. */
  readonly version?: number;
  /** boolean_policy block */
  readonly booleanPolicy?: GoogleOrganizationPolicyBooleanPolicy[];
  /** list_policy block */
  readonly listPolicy?: GoogleOrganizationPolicyListPolicy[];
  /** restore_policy block */
  readonly restorePolicy?: GoogleOrganizationPolicyRestorePolicy[];
  /** timeouts block */
  readonly timeouts?: GoogleOrganizationPolicyTimeouts;
}
export interface GoogleOrganizationPolicyBooleanPolicy {
  /** If true, then the Policy is enforced. If false, then any configuration is acceptable. */
  readonly enforced: boolean;
}
export interface GoogleOrganizationPolicyListPolicyAllow {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}
export interface GoogleOrganizationPolicyListPolicyDeny {
  /** The policy allows or denies all values. */
  readonly all?: boolean;
  /** The policy can define specific values that are allowed or denied. */
  readonly values?: string[];
}
export interface GoogleOrganizationPolicyListPolicy {
  /** If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. */
  readonly inheritFromParent?: boolean;
  /** The Google Cloud Console will try to default to a configuration that matches the value specified in this field. */
  readonly suggestedValue?: string;
  /** allow block */
  readonly allow?: GoogleOrganizationPolicyListPolicyAllow[];
  /** deny block */
  readonly deny?: GoogleOrganizationPolicyListPolicyDeny[];
}
export interface GoogleOrganizationPolicyRestorePolicy {
  /** May only be set to true. If set, then the default Policy is restored. */
  readonly default: boolean;
}
export interface GoogleOrganizationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class GoogleOrganizationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._orgId = config.orgId;
    this._version = config.version;
    this._booleanPolicy = config.booleanPolicy;
    this._listPolicy = config.listPolicy;
    this._restorePolicy = config.restorePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraint - computed: false, optional: false, required: true
  private _constraint: string;
  public get constraint() {
    return this._constraint;
  }
  public set constraint(value: string) {
    this._constraint = value;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string) {
    this._orgId = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this._version ?? this.getNumberAttribute('version');
  }
  public set version(value: number | undefined) {
    this._version = value;
  }

  // boolean_policy - computed: false, optional: true, required: false
  private _booleanPolicy?: GoogleOrganizationPolicyBooleanPolicy[];
  public get booleanPolicy() {
    return this._booleanPolicy;
  }
  public set booleanPolicy(value: GoogleOrganizationPolicyBooleanPolicy[] | undefined) {
    this._booleanPolicy = value;
  }

  // list_policy - computed: false, optional: true, required: false
  private _listPolicy?: GoogleOrganizationPolicyListPolicy[];
  public get listPolicy() {
    return this._listPolicy;
  }
  public set listPolicy(value: GoogleOrganizationPolicyListPolicy[] | undefined) {
    this._listPolicy = value;
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy?: GoogleOrganizationPolicyRestorePolicy[];
  public get restorePolicy() {
    return this._restorePolicy;
  }
  public set restorePolicy(value: GoogleOrganizationPolicyRestorePolicy[] | undefined) {
    this._restorePolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleOrganizationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleOrganizationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint: this._constraint,
      org_id: this._orgId,
      version: this._version,
      boolean_policy: this._booleanPolicy,
      list_policy: this._listPolicy,
      restore_policy: this._restorePolicy,
      timeouts: this._timeouts,
    };
  }
}
