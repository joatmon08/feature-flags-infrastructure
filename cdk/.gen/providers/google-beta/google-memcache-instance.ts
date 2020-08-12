// https://www.terraform.io/docs/providers/google-beta/r/google_memcache_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleMemcacheInstanceConfig extends TerraformMetaArguments {
  /** The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used. */
  readonly authorizedNetwork?: string;
  /** A user-visible name for the instance. */
  readonly displayName?: string;
  /** Resource labels to represent user-provided metadata. */
  readonly labels?: { [key: string]: string };
  /** The resource name of the instance. */
  readonly name: string;
  /** Number of nodes in the memcache instance. */
  readonly nodeCount: number;
  readonly project?: string;
  /** The name of the Memcache region of the instance. */
  readonly region: string;
  /** Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used. */
  readonly zones?: string[];
  /** memcache_parameters block */
  readonly memcacheParameters?: GoogleMemcacheInstanceMemcacheParameters[];
  /** node_config block */
  readonly nodeConfig: GoogleMemcacheInstanceNodeConfig[];
  /** timeouts block */
  readonly timeouts?: GoogleMemcacheInstanceTimeouts;
}
export interface GoogleMemcacheInstanceMemcacheParameters {
  /** User-defined set of parameters to use in the memcache process. */
  readonly params?: { [key: string]: string };
}
export interface GoogleMemcacheInstanceNodeConfig {
  /** Number of CPUs per node. */
  readonly cpuCount: number;
  /** Memory size in Mebibytes for each memcache node. */
  readonly memorySizeMb: number;
}
export interface GoogleMemcacheInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleMemcacheInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleMemcacheInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_memcache_instance',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizedNetwork = config.authorizedNetwork;
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._project = config.project;
    this._region = config.region;
    this._zones = config.zones;
    this._memcacheParameters = config.memcacheParameters;
    this._nodeConfig = config.nodeConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_network - computed: false, optional: true, required: false
  private _authorizedNetwork?: string;
  public get authorizedNetwork() {
    return this._authorizedNetwork;
  }
  public set authorizedNetwork(value: string | undefined) {
    this._authorizedNetwork = value;
  }

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount: number;
  public get nodeCount() {
    return this._nodeCount;
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this._region;
  }
  public set region(value: string) {
    this._region = value;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones ?? this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // memcache_parameters - computed: false, optional: true, required: false
  private _memcacheParameters?: GoogleMemcacheInstanceMemcacheParameters[];
  public get memcacheParameters() {
    return this._memcacheParameters;
  }
  public set memcacheParameters(value: GoogleMemcacheInstanceMemcacheParameters[] | undefined) {
    this._memcacheParameters = value;
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig: GoogleMemcacheInstanceNodeConfig[];
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public set nodeConfig(value: GoogleMemcacheInstanceNodeConfig[]) {
    this._nodeConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleMemcacheInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleMemcacheInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_network: this._authorizedNetwork,
      display_name: this._displayName,
      labels: this._labels,
      name: this._name,
      node_count: this._nodeCount,
      project: this._project,
      region: this._region,
      zones: this._zones,
      memcache_parameters: this._memcacheParameters,
      node_config: this._nodeConfig,
      timeouts: this._timeouts,
    };
  }
}
