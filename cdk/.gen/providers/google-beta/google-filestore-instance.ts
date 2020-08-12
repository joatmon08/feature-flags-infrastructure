// https://www.terraform.io/docs/providers/google-beta/r/google_filestore_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleFilestoreInstanceConfig extends TerraformMetaArguments {
  /** A description of the instance. */
  readonly description?: string;
  /** Resource labels to represent user-provided metadata. */
  readonly labels?: { [key: string]: string };
  /** The resource name of the instance. */
  readonly name: string;
  readonly project?: string;
  /** The service tier of the instance. Possible values: ["TIER_UNSPECIFIED", "STANDARD", "PREMIUM", "BASIC_HDD", "BASIC_SSD", "HIGH_SCALE_SSD"] */
  readonly tier: string;
  /** The name of the Filestore zone of the instance. */
  readonly zone: string;
  /** file_shares block */
  readonly fileShares: GoogleFilestoreInstanceFileShares[];
  /** networks block */
  readonly networks: GoogleFilestoreInstanceNetworks[];
  /** timeouts block */
  readonly timeouts?: GoogleFilestoreInstanceTimeouts;
}
export interface GoogleFilestoreInstanceFileSharesNfsExportOptions {
  /** Either READ_ONLY, for allowing only read requests on the exported directory,
or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"] */
  readonly accessMode?: string;
  /** An integer representing the anonymous group id with a default value of 65534.
Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings. */
  readonly anonGid?: number;
  /** An integer representing the anonymous user id with a default value of 65534.
Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings. */
  readonly anonUid?: number;
  /** List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.
Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions. */
  readonly ipRanges?: string[];
  /** Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH,
for not allowing root access. The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"] */
  readonly squashMode?: string;
}
export interface GoogleFilestoreInstanceFileShares {
  /** File share capacity in GiB. This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier. */
  readonly capacityGb: number;
  /** The name of the fileshare (16 characters or less) */
  readonly name: string;
  /** nfs_export_options block */
  readonly nfsExportOptions?: GoogleFilestoreInstanceFileSharesNfsExportOptions[];
}
export interface GoogleFilestoreInstanceNetworks {
  /** IP versions for which the instance has
IP addresses assigned. */
  readonly modes: string[];
  /** The name of the GCE VPC network to which the
instance is connected. */
  readonly network: string;
  /** A /29 CIDR block that identifies the range of IP
addresses reserved for this instance. */
  readonly reservedIpRange?: string;
}
export interface GoogleFilestoreInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleFilestoreInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleFilestoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_filestore_instance',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._zone = config.zone;
    this._fileShares = config.fileShares;
    this._networks = config.networks;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // tier - computed: false, optional: false, required: true
  private _tier: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string) {
    this._tier = value;
  }

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string) {
    this._zone = value;
  }

  // file_shares - computed: false, optional: false, required: true
  private _fileShares: GoogleFilestoreInstanceFileShares[];
  public get fileShares() {
    return this._fileShares;
  }
  public set fileShares(value: GoogleFilestoreInstanceFileShares[]) {
    this._fileShares = value;
  }

  // networks - computed: false, optional: false, required: true
  private _networks: GoogleFilestoreInstanceNetworks[];
  public get networks() {
    return this._networks;
  }
  public set networks(value: GoogleFilestoreInstanceNetworks[]) {
    this._networks = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleFilestoreInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleFilestoreInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      labels: this._labels,
      name: this._name,
      project: this._project,
      tier: this._tier,
      zone: this._zone,
      file_shares: this._fileShares,
      networks: this._networks,
      timeouts: this._timeouts,
    };
  }
}
