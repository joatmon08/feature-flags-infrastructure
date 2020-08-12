// https://www.terraform.io/docs/providers/google-beta/r/google_billing_budget.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleBillingBudgetConfig extends TerraformMetaArguments {
  /** ID of the billing account to set a budget on. */
  readonly billingAccount: string;
  /** User data for display name in UI. Must be <= 60 chars. */
  readonly displayName?: string;
  /** all_updates_rule block */
  readonly allUpdatesRule?: GoogleBillingBudgetAllUpdatesRule[];
  /** amount block */
  readonly amount: GoogleBillingBudgetAmount[];
  /** budget_filter block */
  readonly budgetFilter?: GoogleBillingBudgetBudgetFilter[];
  /** threshold_rules block */
  readonly thresholdRules: GoogleBillingBudgetThresholdRules[];
  /** timeouts block */
  readonly timeouts?: GoogleBillingBudgetTimeouts;
}
export interface GoogleBillingBudgetAllUpdatesRule {
  /** The name of the Cloud Pub/Sub topic where budget related
messages will be published, in the form
projects/{project_id}/topics/{topic_id}. Updates are sent
at regular intervals to the topic. */
  readonly pubsubTopic: string;
  /** The schema version of the notification. Only "1.0" is
accepted. It represents the JSON schema as defined in
https://cloud.google.com/billing/docs/how-to/budgets#notification_format. */
  readonly schemaVersion?: string;
}
export interface GoogleBillingBudgetAmountSpecifiedAmount {
  /** The 3-letter currency code defined in ISO 4217. */
  readonly currencyCode?: string;
  /** Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000. */
  readonly nanos?: number;
  /** The whole units of the amount. For example if currencyCode
is "USD", then 1 unit is one US dollar. */
  readonly units?: string;
}
export interface GoogleBillingBudgetAmount {
  /** specified_amount block */
  readonly specifiedAmount: GoogleBillingBudgetAmountSpecifiedAmount[];
}
export interface GoogleBillingBudgetBudgetFilter {
  /** Specifies how credits should be treated when determining spend
for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS"] */
  readonly creditTypesTreatment?: string;
  /** A set of projects of the form projects/{project_id},
specifying that usage from only this set of projects should be
included in the budget. If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on. Only zero or one project can be
specified currently. */
  readonly projects?: string[];
  /** A set of services of the form services/{service_id},
specifying that usage from only this set of services should be
included in the budget. If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api. */
  readonly services?: string[];
}
export interface GoogleBillingBudgetThresholdRules {
  /** The type of basis used to determine if spend has passed
the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"] */
  readonly spendBasis?: string;
  /** Send an alert when this threshold is exceeded. This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0. */
  readonly thresholdPercent: number;
}
export interface GoogleBillingBudgetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleBillingBudget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleBillingBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_billing_budget',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccount = config.billingAccount;
    this._displayName = config.displayName;
    this._allUpdatesRule = config.allUpdatesRule;
    this._amount = config.amount;
    this._budgetFilter = config.budgetFilter;
    this._thresholdRules = config.thresholdRules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount: string;
  public get billingAccount() {
    return this._billingAccount;
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
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

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // all_updates_rule - computed: false, optional: true, required: false
  private _allUpdatesRule?: GoogleBillingBudgetAllUpdatesRule[];
  public get allUpdatesRule() {
    return this._allUpdatesRule;
  }
  public set allUpdatesRule(value: GoogleBillingBudgetAllUpdatesRule[] | undefined) {
    this._allUpdatesRule = value;
  }

  // amount - computed: false, optional: false, required: true
  private _amount: GoogleBillingBudgetAmount[];
  public get amount() {
    return this._amount;
  }
  public set amount(value: GoogleBillingBudgetAmount[]) {
    this._amount = value;
  }

  // budget_filter - computed: false, optional: true, required: false
  private _budgetFilter?: GoogleBillingBudgetBudgetFilter[];
  public get budgetFilter() {
    return this._budgetFilter;
  }
  public set budgetFilter(value: GoogleBillingBudgetBudgetFilter[] | undefined) {
    this._budgetFilter = value;
  }

  // threshold_rules - computed: false, optional: false, required: true
  private _thresholdRules: GoogleBillingBudgetThresholdRules[];
  public get thresholdRules() {
    return this._thresholdRules;
  }
  public set thresholdRules(value: GoogleBillingBudgetThresholdRules[]) {
    this._thresholdRules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleBillingBudgetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleBillingBudgetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: this._billingAccount,
      display_name: this._displayName,
      all_updates_rule: this._allUpdatesRule,
      amount: this._amount,
      budget_filter: this._budgetFilter,
      threshold_rules: this._thresholdRules,
      timeouts: this._timeouts,
    };
  }
}
