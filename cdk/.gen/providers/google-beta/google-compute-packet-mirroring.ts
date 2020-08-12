// https://www.terraform.io/docs/providers/google-beta/r/google_compute_packet_mirroring.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputePacketMirroringConfig extends TerraformMetaArguments {
  /** A human-readable description of the rule. */
  readonly description?: string;
  /** The name of the packet mirroring rule */
  readonly name: string;
  /** Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances. */
  readonly priority?: number;
  readonly project?: string;
  /** The Region in which the created address should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** collector_ilb block */
  readonly collectorIlb: GoogleComputePacketMirroringCollectorIlb[];
  /** filter block */
  readonly filter?: GoogleComputePacketMirroringFilter[];
  /** mirrored_resources block */
  readonly mirroredResources: GoogleComputePacketMirroringMirroredResources[];
  /** network block */
  readonly network: GoogleComputePacketMirroringNetwork[];
  /** timeouts block */
  readonly timeouts?: GoogleComputePacketMirroringTimeouts;
}
export interface GoogleComputePacketMirroringCollectorIlb {
  /** The URL of the forwarding rule. */
  readonly url: string;
}
export interface GoogleComputePacketMirroringFilter {
  /** IP CIDR ranges that apply as a filter on the source (ingress) or
destination (egress) IP in the IP header. Only IPv4 is supported. */
  readonly cidrRanges?: string[];
  /** Protocols that apply as a filter on mirrored traffic. */
  readonly ipProtocols?: string[];
}
export interface GoogleComputePacketMirroringMirroredResourcesInstances {
  /** The URL of the instances where this rule should be active. */
  readonly url: string;
}
export interface GoogleComputePacketMirroringMirroredResourcesSubnetworks {
  /** The URL of the subnetwork where this rule should be active. */
  readonly url: string;
}
export interface GoogleComputePacketMirroringMirroredResources {
  /** All instances with these tags will be mirrored. */
  readonly tags?: string[];
  /** instances block */
  readonly instances?: GoogleComputePacketMirroringMirroredResourcesInstances[];
  /** subnetworks block */
  readonly subnetworks?: GoogleComputePacketMirroringMirroredResourcesSubnetworks[];
}
export interface GoogleComputePacketMirroringNetwork {
  /** The full self_link URL of the network where this rule is active. */
  readonly url: string;
}
export interface GoogleComputePacketMirroringTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleComputePacketMirroring extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputePacketMirroringConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_packet_mirroring',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._priority = config.priority;
    this._project = config.project;
    this._region = config.region;
    this._collectorIlb = config.collectorIlb;
    this._filter = config.filter;
    this._mirroredResources = config.mirroredResources;
    this._network = config.network;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this._priority ?? this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
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

  // collector_ilb - computed: false, optional: false, required: true
  private _collectorIlb: GoogleComputePacketMirroringCollectorIlb[];
  public get collectorIlb() {
    return this._collectorIlb;
  }
  public set collectorIlb(value: GoogleComputePacketMirroringCollectorIlb[]) {
    this._collectorIlb = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: GoogleComputePacketMirroringFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: GoogleComputePacketMirroringFilter[] | undefined) {
    this._filter = value;
  }

  // mirrored_resources - computed: false, optional: false, required: true
  private _mirroredResources: GoogleComputePacketMirroringMirroredResources[];
  public get mirroredResources() {
    return this._mirroredResources;
  }
  public set mirroredResources(value: GoogleComputePacketMirroringMirroredResources[]) {
    this._mirroredResources = value;
  }

  // network - computed: false, optional: false, required: true
  private _network: GoogleComputePacketMirroringNetwork[];
  public get network() {
    return this._network;
  }
  public set network(value: GoogleComputePacketMirroringNetwork[]) {
    this._network = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputePacketMirroringTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputePacketMirroringTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      priority: this._priority,
      project: this._project,
      region: this._region,
      collector_ilb: this._collectorIlb,
      filter: this._filter,
      mirrored_resources: this._mirroredResources,
      network: this._network,
      timeouts: this._timeouts,
    };
  }
}
