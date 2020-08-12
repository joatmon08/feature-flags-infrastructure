// https://www.terraform.io/docs/providers/google-beta/r/google_monitoring_custom_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleMonitoringCustomServiceConfig extends TerraformMetaArguments {
  /** Name used for UI elements listing this Service. */
  readonly displayName?: string;
  readonly project?: string;
  /** An optional service ID to use. If not given, the server will generate a
service ID. */
  readonly serviceId?: string;
  /** telemetry block */
  readonly telemetry?: GoogleMonitoringCustomServiceTelemetry[];
  /** timeouts block */
  readonly timeouts?: GoogleMonitoringCustomServiceTimeouts;
}
export interface GoogleMonitoringCustomServiceTelemetry {
  /** The full name of the resource that defines this service.
Formatted as described in
https://cloud.google.com/apis/design/resource_names. */
  readonly resourceName?: string;
}
export interface GoogleMonitoringCustomServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleMonitoringCustomService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleMonitoringCustomServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_custom_service',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._project = config.project;
    this._serviceId = config.serviceId;
    this._telemetry = config.telemetry;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string;
  public get serviceId() {
    return this._serviceId ?? this.getStringAttribute('service_id');
  }
  public set serviceId(value: string | undefined) {
    this._serviceId = value;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry?: GoogleMonitoringCustomServiceTelemetry[];
  public get telemetry() {
    return this._telemetry;
  }
  public set telemetry(value: GoogleMonitoringCustomServiceTelemetry[] | undefined) {
    this._telemetry = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleMonitoringCustomServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleMonitoringCustomServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      project: this._project,
      service_id: this._serviceId,
      telemetry: this._telemetry,
      timeouts: this._timeouts,
    };
  }
}
