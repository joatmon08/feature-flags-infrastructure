// https://www.terraform.io/docs/providers/google-beta/r/google_service_usage_consumer_quota_override.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleServiceUsageConsumerQuotaOverrideConfig extends TerraformMetaArguments {
  /** If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. */
  readonly dimensions?: { [key: string]: string };
  /** If the new quota would decrease the existing quota by more than 10%, the request is rejected.
If 'force' is 'true', that safety check is ignored. */
  readonly force?: boolean;
  /** The limit on the metric, e.g. '/project/region'. */
  readonly limit: string;
  /** The metric that should be limited, e.g. 'compute.googleapis.com/cpus'. */
  readonly metric: string;
  /** The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). */
  readonly overrideValue: string;
  readonly project?: string;
  /** The service that the metrics belong to, e.g. 'compute.googleapis.com'. */
  readonly service: string;
  /** timeouts block */
  readonly timeouts?: GoogleServiceUsageConsumerQuotaOverrideTimeouts;
}
export interface GoogleServiceUsageConsumerQuotaOverrideTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleServiceUsageConsumerQuotaOverride extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleServiceUsageConsumerQuotaOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_usage_consumer_quota_override',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dimensions = config.dimensions;
    this._force = config.force;
    this._limit = config.limit;
    this._metric = config.metric;
    this._overrideValue = config.overrideValue;
    this._project = config.project;
    this._service = config.service;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string };
  public get dimensions() {
    return this._dimensions;
  }
  public set dimensions(value: { [key: string]: string } | undefined) {
    this._dimensions = value;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean;
  public get force() {
    return this._force;
  }
  public set force(value: boolean | undefined) {
    this._force = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // limit - computed: false, optional: false, required: true
  private _limit: string;
  public get limit() {
    return this._limit;
  }
  public set limit(value: string) {
    this._limit = value;
  }

  // metric - computed: false, optional: false, required: true
  private _metric: string;
  public get metric() {
    return this._metric;
  }
  public set metric(value: string) {
    this._metric = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_value - computed: false, optional: false, required: true
  private _overrideValue: string;
  public get overrideValue() {
    return this._overrideValue;
  }
  public set overrideValue(value: string) {
    this._overrideValue = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleServiceUsageConsumerQuotaOverrideTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleServiceUsageConsumerQuotaOverrideTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dimensions: this._dimensions,
      force: this._force,
      limit: this._limit,
      metric: this._metric,
      override_value: this._overrideValue,
      project: this._project,
      service: this._service,
      timeouts: this._timeouts,
    };
  }
}
