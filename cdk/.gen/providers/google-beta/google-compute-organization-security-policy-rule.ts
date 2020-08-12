// https://www.terraform.io/docs/providers/google-beta/r/google_compute_organization_security_policy_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeOrganizationSecurityPolicyRuleConfig extends TerraformMetaArguments {
  /** The Action to perform when the client connection triggers the rule. Can currently be either
"allow", "deny" or "goto_next". */
  readonly action: string;
  /** A description of the rule. */
  readonly description?: string;
  /** The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"] */
  readonly direction?: string;
  /** Denotes whether to enable logging for a particular rule.
If logging is enabled, logs will be exported to the
configured export destination in Stackdriver. */
  readonly enableLogging?: boolean;
  /** The ID of the OrganizationSecurityPolicy this rule applies to. */
  readonly policyId: string;
  /** If set to true, the specified action is not enforced. */
  readonly preview?: boolean;
  /** An integer indicating the priority of a rule in the list. The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority. */
  readonly priority: number;
  /** A list of network resource URLs to which this rule applies.
This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule. */
  readonly targetResources?: string[];
  /** A list of service accounts indicating the sets of
instances that are applied with this rule. */
  readonly targetServiceAccounts?: string[];
  /** match block */
  readonly match: GoogleComputeOrganizationSecurityPolicyRuleMatch[];
  /** timeouts block */
  readonly timeouts?: GoogleComputeOrganizationSecurityPolicyRuleTimeouts;
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config {
  /** The IP protocol to which this rule applies. The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number. */
  readonly ipProtocol: string;
  /** An optional list of ports to which this rule applies. This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"]. */
  readonly ports?: string[];
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatchConfig {
  /** Destination IP address range in CIDR format. Required for
EGRESS rules. */
  readonly destIpRanges?: string[];
  /** Source IP address range in CIDR format. Required for
INGRESS rules. */
  readonly srcIpRanges?: string[];
  /** layer4_config block */
  readonly layer4Config: GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config[];
}
export interface GoogleComputeOrganizationSecurityPolicyRuleMatch {
  /** A description of the rule. */
  readonly description?: string;
  /** Preconfigured versioned expression. For organization security policy rules,
the only supported type is "FIREWALL". Default value: "FIREWALL" Possible values: ["FIREWALL"] */
  readonly versionedExpr?: string;
  /** config block */
  readonly config: GoogleComputeOrganizationSecurityPolicyRuleMatchConfig[];
}
export interface GoogleComputeOrganizationSecurityPolicyRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleComputeOrganizationSecurityPolicyRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeOrganizationSecurityPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._description = config.description;
    this._direction = config.direction;
    this._enableLogging = config.enableLogging;
    this._policyId = config.policyId;
    this._preview = config.preview;
    this._priority = config.priority;
    this._targetResources = config.targetResources;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._match = config.match;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this._action;
  }
  public set action(value: string) {
    this._action = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string;
  public get direction() {
    return this._direction;
  }
  public set direction(value: string | undefined) {
    this._direction = value;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this._enableLogging;
  }
  public set enableLogging(value: boolean | undefined) {
    this._enableLogging = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId: string;
  public get policyId() {
    return this._policyId;
  }
  public set policyId(value: string) {
    this._policyId = value;
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean;
  public get preview() {
    return this._preview;
  }
  public set preview(value: boolean | undefined) {
    this._preview = value;
  }

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number) {
    this._priority = value;
  }

  // target_resources - computed: false, optional: true, required: false
  private _targetResources?: string[];
  public get targetResources() {
    return this._targetResources;
  }
  public set targetResources(value: string[] | undefined) {
    this._targetResources = value;
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[];
  public get targetServiceAccounts() {
    return this._targetServiceAccounts;
  }
  public set targetServiceAccounts(value: string[] | undefined) {
    this._targetServiceAccounts = value;
  }

  // match - computed: false, optional: false, required: true
  private _match: GoogleComputeOrganizationSecurityPolicyRuleMatch[];
  public get match() {
    return this._match;
  }
  public set match(value: GoogleComputeOrganizationSecurityPolicyRuleMatch[]) {
    this._match = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeOrganizationSecurityPolicyRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeOrganizationSecurityPolicyRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      description: this._description,
      direction: this._direction,
      enable_logging: this._enableLogging,
      policy_id: this._policyId,
      preview: this._preview,
      priority: this._priority,
      target_resources: this._targetResources,
      target_service_accounts: this._targetServiceAccounts,
      match: this._match,
      timeouts: this._timeouts,
    };
  }
}
