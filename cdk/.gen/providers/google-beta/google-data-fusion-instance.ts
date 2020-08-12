// https://www.terraform.io/docs/providers/google-beta/r/google_data_fusion_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleDataFusionInstanceConfig extends TerraformMetaArguments {
  /** An optional description of the instance. */
  readonly description?: string;
  /** Option to enable Stackdriver Logging. */
  readonly enableStackdriverLogging?: boolean;
  /** Option to enable Stackdriver Monitoring. */
  readonly enableStackdriverMonitoring?: boolean;
  /** The resource labels for instance to use to annotate any related underlying resources,
such as Compute Engine VMs. */
  readonly labels?: { [key: string]: string };
  /** The ID of the instance or a fully qualified identifier for the instance. */
  readonly name: string;
  /** Map of additional options used to configure the behavior of Data Fusion instance. */
  readonly options?: { [key: string]: string };
  /** Specifies whether the Data Fusion instance should be private. If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet. */
  readonly privateInstance?: boolean;
  readonly project?: string;
  /** The region of the Data Fusion instance. */
  readonly region?: string;
  /** Represents the type of Data Fusion instance. Each type is configured with
the default settings for processing and memory.
- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
using point and click UI. However, there are certain limitations, such as fewer number
of concurrent pipelines, no support for streaming pipelines, etc.
- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
available, such as support for streaming pipelines, higher number of concurrent pipelines, etc. Possible values: ["BASIC", "ENTERPRISE"] */
  readonly type: string;
  /** Current version of the Data Fusion. */
  readonly version?: string;
  /** network_config block */
  readonly networkConfig?: GoogleDataFusionInstanceNetworkConfig[];
  /** timeouts block */
  readonly timeouts?: GoogleDataFusionInstanceTimeouts;
}
export interface GoogleDataFusionInstanceNetworkConfig {
  /** The IP range in CIDR notation to use for the managed Data Fusion instance
nodes. This range must not overlap with any other ranges used in the Data Fusion instance network. */
  readonly ipAllocation: string;
  /** Name of the network in the project with which the tenant project
will be peered for executing pipelines. In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network} */
  readonly network: string;
}
export interface GoogleDataFusionInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleDataFusionInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleDataFusionInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_fusion_instance',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._enableStackdriverMonitoring = config.enableStackdriverMonitoring;
    this._labels = config.labels;
    this._name = config.name;
    this._options = config.options;
    this._privateInstance = config.privateInstance;
    this._project = config.project;
    this._region = config.region;
    this._type = config.type;
    this._version = config.version;
    this._networkConfig = config.networkConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean;
  public get enableStackdriverLogging() {
    return this._enableStackdriverLogging;
  }
  public set enableStackdriverLogging(value: boolean | undefined) {
    this._enableStackdriverLogging = value;
  }

  // enable_stackdriver_monitoring - computed: false, optional: true, required: false
  private _enableStackdriverMonitoring?: boolean;
  public get enableStackdriverMonitoring() {
    return this._enableStackdriverMonitoring;
  }
  public set enableStackdriverMonitoring(value: boolean | undefined) {
    this._enableStackdriverMonitoring = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string };
  public get options() {
    return this._options;
  }
  public set options(value: { [key: string]: string } | undefined) {
    this._options = value;
  }

  // private_instance - computed: false, optional: true, required: false
  private _privateInstance?: boolean;
  public get privateInstance() {
    return this._privateInstance;
  }
  public set privateInstance(value: boolean | undefined) {
    this._privateInstance = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // service_account - computed: true, optional: false, required: true
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // service_endpoint - computed: true, optional: false, required: true
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig?: GoogleDataFusionInstanceNetworkConfig[];
  public get networkConfig() {
    return this._networkConfig;
  }
  public set networkConfig(value: GoogleDataFusionInstanceNetworkConfig[] | undefined) {
    this._networkConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleDataFusionInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleDataFusionInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      enable_stackdriver_logging: this._enableStackdriverLogging,
      enable_stackdriver_monitoring: this._enableStackdriverMonitoring,
      labels: this._labels,
      name: this._name,
      options: this._options,
      private_instance: this._privateInstance,
      project: this._project,
      region: this._region,
      type: this._type,
      version: this._version,
      network_config: this._networkConfig,
      timeouts: this._timeouts,
    };
  }
}
