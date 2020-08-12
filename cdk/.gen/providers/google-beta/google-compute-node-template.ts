// https://www.terraform.io/docs/providers/google-beta/r/google_compute_node_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeNodeTemplateConfig extends TerraformMetaArguments {
  /** CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"] */
  readonly cpuOvercommitType?: string;
  /** An optional textual description of the resource. */
  readonly description?: string;
  /** Name of the resource. */
  readonly name?: string;
  /** Labels to use for node affinity, which will be used in
instance scheduling. */
  readonly nodeAffinityLabels?: { [key: string]: string };
  /** Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified. */
  readonly nodeType?: string;
  readonly project?: string;
  /** Region where nodes using the node template will be created.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** node_type_flexibility block */
  readonly nodeTypeFlexibility?: GoogleComputeNodeTemplateNodeTypeFlexibility[];
  /** server_binding block */
  readonly serverBinding?: GoogleComputeNodeTemplateServerBinding[];
  /** timeouts block */
  readonly timeouts?: GoogleComputeNodeTemplateTimeouts;
}
export interface GoogleComputeNodeTemplateNodeTypeFlexibility {
  /** Number of virtual CPUs to use. */
  readonly cpus?: string;
  /** Physical memory available to the node, defined in MB. */
  readonly memory?: string;
}
export interface GoogleComputeNodeTemplateServerBinding {
  /** Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER',
nodes using this template will restart on any physical server
following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"] */
  readonly type: string;
}
export interface GoogleComputeNodeTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GoogleComputeNodeTemplate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeNodeTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_node_template',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cpuOvercommitType = config.cpuOvercommitType;
    this._description = config.description;
    this._name = config.name;
    this._nodeAffinityLabels = config.nodeAffinityLabels;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._region = config.region;
    this._nodeTypeFlexibility = config.nodeTypeFlexibility;
    this._serverBinding = config.serverBinding;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_overcommit_type - computed: false, optional: true, required: false
  private _cpuOvercommitType?: string;
  public get cpuOvercommitType() {
    return this._cpuOvercommitType;
  }
  public set cpuOvercommitType(value: string | undefined) {
    this._cpuOvercommitType = value;
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // node_affinity_labels - computed: false, optional: true, required: false
  private _nodeAffinityLabels?: { [key: string]: string };
  public get nodeAffinityLabels() {
    return this._nodeAffinityLabels;
  }
  public set nodeAffinityLabels(value: { [key: string]: string } | undefined) {
    this._nodeAffinityLabels = value;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string;
  public get nodeType() {
    return this._nodeType;
  }
  public set nodeType(value: string | undefined) {
    this._nodeType = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // node_type_flexibility - computed: false, optional: true, required: false
  private _nodeTypeFlexibility?: GoogleComputeNodeTemplateNodeTypeFlexibility[];
  public get nodeTypeFlexibility() {
    return this._nodeTypeFlexibility;
  }
  public set nodeTypeFlexibility(value: GoogleComputeNodeTemplateNodeTypeFlexibility[] | undefined) {
    this._nodeTypeFlexibility = value;
  }

  // server_binding - computed: false, optional: true, required: false
  private _serverBinding?: GoogleComputeNodeTemplateServerBinding[];
  public get serverBinding() {
    return this._serverBinding;
  }
  public set serverBinding(value: GoogleComputeNodeTemplateServerBinding[] | undefined) {
    this._serverBinding = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeNodeTemplateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeNodeTemplateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_overcommit_type: this._cpuOvercommitType,
      description: this._description,
      name: this._name,
      node_affinity_labels: this._nodeAffinityLabels,
      node_type: this._nodeType,
      project: this._project,
      region: this._region,
      node_type_flexibility: this._nodeTypeFlexibility,
      server_binding: this._serverBinding,
      timeouts: this._timeouts,
    };
  }
}
