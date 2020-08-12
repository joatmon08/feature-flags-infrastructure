// https://www.terraform.io/docs/providers/google-beta/r/data_google_iam_policy_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleIamPolicyAConfig extends TerraformMetaArguments {
  /** audit_config block */
  readonly auditConfig?: DataGoogleIamPolicyAuditConfigA[];
  /** binding block */
  readonly binding?: DataGoogleIamPolicyBindingA[];
}
export interface DataGoogleIamPolicyAuditConfigAuditLogConfigsA {
  readonly exemptedMembers?: string[];
  readonly logType: string;
}
export interface DataGoogleIamPolicyAuditConfigA {
  readonly service: string;
  /** audit_log_configs block */
  readonly auditLogConfigs: DataGoogleIamPolicyAuditConfigAuditLogConfigsA[];
}
export interface DataGoogleIamPolicyBindingConditionA {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}
export interface DataGoogleIamPolicyBindingA {
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: DataGoogleIamPolicyBindingConditionA[];
}

// Resource

export class DataGoogleIamPolicyA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleIamPolicyAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auditConfig = config.auditConfig;
    this._binding = config.binding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy_data - computed: true, optional: false, required: true
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // audit_config - computed: false, optional: true, required: false
  private _auditConfig?: DataGoogleIamPolicyAuditConfigA[];
  public get auditConfig() {
    return this._auditConfig;
  }
  public set auditConfig(value: DataGoogleIamPolicyAuditConfigA[] | undefined) {
    this._auditConfig = value;
  }

  // binding - computed: false, optional: true, required: false
  private _binding?: DataGoogleIamPolicyBindingA[];
  public get binding() {
    return this._binding;
  }
  public set binding(value: DataGoogleIamPolicyBindingA[] | undefined) {
    this._binding = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_config: this._auditConfig,
      binding: this._binding,
    };
  }
}
