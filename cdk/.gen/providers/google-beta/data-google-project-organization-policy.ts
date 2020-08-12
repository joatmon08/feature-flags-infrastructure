// https://www.terraform.io/docs/providers/google-beta/r/data_google_project_organization_policy_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleProjectOrganizationPolicyAConfig extends TerraformMetaArguments {
  /** The name of the Constraint the Policy is configuring, for example, serviceuser.services. */
  readonly constraint: string;
  /** The project ID. */
  readonly project: string;
}
export class DataGoogleProjectOrganizationPolicyBooleanPolicyA extends ComplexComputedList {

  // enforced - computed: true, optional: false, required: true
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
}
export class DataGoogleProjectOrganizationPolicyListPolicyAllowA extends ComplexComputedList {

  // all - computed: true, optional: false, required: true
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleProjectOrganizationPolicyListPolicyDenyA extends ComplexComputedList {

  // all - computed: true, optional: false, required: true
  public get all() {
    return this.getBooleanAttribute('all');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataGoogleProjectOrganizationPolicyListPolicyA extends ComplexComputedList {

  // allow - computed: true, optional: false, required: true
  public get allow() {
    return 'not implemented' as any;
  }

  // deny - computed: true, optional: false, required: true
  public get deny() {
    return 'not implemented' as any;
  }

  // inherit_from_parent - computed: true, optional: false, required: true
  public get inheritFromParent() {
    return this.getBooleanAttribute('inherit_from_parent');
  }

  // suggested_value - computed: true, optional: false, required: true
  public get suggestedValue() {
    return this.getStringAttribute('suggested_value');
  }
}
export class DataGoogleProjectOrganizationPolicyRestorePolicyA extends ComplexComputedList {

  // default - computed: true, optional: false, required: true
  public get default() {
    return this.getBooleanAttribute('default');
  }
}

// Resource

export class DataGoogleProjectOrganizationPolicyA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleProjectOrganizationPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boolean_policy - computed: true, optional: false, required: true
  public booleanPolicy(index: string) {
    return new DataGoogleProjectOrganizationPolicyBooleanPolicyA(this, 'boolean_policy', index);
  }

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

  // list_policy - computed: true, optional: false, required: true
  public listPolicy(index: string) {
    return new DataGoogleProjectOrganizationPolicyListPolicyA(this, 'list_policy', index);
  }

  // project - computed: false, optional: false, required: true
  private _project: string;
  public get project() {
    return this._project;
  }
  public set project(value: string) {
    this._project = value;
  }

  // restore_policy - computed: true, optional: false, required: true
  public restorePolicy(index: string) {
    return new DataGoogleProjectOrganizationPolicyRestorePolicyA(this, 'restore_policy', index);
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      constraint: this._constraint,
      project: this._project,
    };
  }
}
