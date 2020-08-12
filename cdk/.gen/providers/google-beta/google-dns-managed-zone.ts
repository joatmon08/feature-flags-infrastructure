// https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleDnsManagedZoneConfig extends TerraformMetaArguments {
  /** A textual description field. Defaults to 'Managed by Terraform'. */
  readonly description?: string;
  /** The DNS name of this managed zone, for instance "example.com.". */
  readonly dnsName: string;
  /** A set of key/value label pairs to assign to this ManagedZone. */
  readonly labels?: { [key: string]: string };
  /** User assigned name for this resource.
Must be unique within the project. */
  readonly name: string;
  readonly project?: string;
  /** Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under 'private_visibility_config'. */
  readonly reverseLookup?: boolean;
  /** The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources. Default value: "public" Possible values: ["private", "public"] */
  readonly visibility?: string;
  /** dnssec_config block */
  readonly dnssecConfig?: GoogleDnsManagedZoneDnssecConfig[];
  /** forwarding_config block */
  readonly forwardingConfig?: GoogleDnsManagedZoneForwardingConfig[];
  /** peering_config block */
  readonly peeringConfig?: GoogleDnsManagedZonePeeringConfig[];
  /** private_visibility_config block */
  readonly privateVisibilityConfig?: GoogleDnsManagedZonePrivateVisibilityConfig[];
  /** service_directory_config block */
  readonly serviceDirectoryConfig?: GoogleDnsManagedZoneServiceDirectoryConfig[];
  /** timeouts block */
  readonly timeouts?: GoogleDnsManagedZoneTimeouts;
}
export interface GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs {
  /** String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"] */
  readonly algorithm?: string;
  /** Length of the keys in bits */
  readonly keyLength?: number;
  /** Specifies whether this is a key signing key (KSK) or a zone
signing key (ZSK). Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"] */
  readonly keyType?: string;
  /** Identifies what kind of resource this is */
  readonly kind?: string;
}
export interface GoogleDnsManagedZoneDnssecConfig {
  /** Identifies what kind of resource this is */
  readonly kind?: string;
  /** Specifies the mechanism used to provide authenticated denial-of-existence responses.
non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"] */
  readonly nonExistence?: string;
  /** Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"] */
  readonly state?: string;
  /** default_key_specs block */
  readonly defaultKeySpecs?: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs[];
}
export interface GoogleDnsManagedZoneForwardingConfigTargetNameServers {
  /** Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"] */
  readonly forwardingPath?: string;
  /** IPv4 address of a target name server. */
  readonly ipv4Address: string;
}
export interface GoogleDnsManagedZoneForwardingConfig {
  /** target_name_servers block */
  readonly targetNameServers: GoogleDnsManagedZoneForwardingConfigTargetNameServers[];
}
export interface GoogleDnsManagedZonePeeringConfigTargetNetwork {
  /** The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}' */
  readonly networkUrl: string;
}
export interface GoogleDnsManagedZonePeeringConfig {
  /** target_network block */
  readonly targetNetwork: GoogleDnsManagedZonePeeringConfigTargetNetwork[];
}
export interface GoogleDnsManagedZonePrivateVisibilityConfigNetworks {
  /** The id or fully qualified URL of the VPC network to bind to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}' */
  readonly networkUrl: string;
}
export interface GoogleDnsManagedZonePrivateVisibilityConfig {
  /** networks block */
  readonly networks: GoogleDnsManagedZonePrivateVisibilityConfigNetworks[];
}
export interface GoogleDnsManagedZoneServiceDirectoryConfigNamespace {
  /** The fully qualified or partial URL of the service directory namespace that should be
associated with the zone. This should be formatted like
'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
Ignored for 'public' visibility zones. */
  readonly namespaceUrl: string;
}
export interface GoogleDnsManagedZoneServiceDirectoryConfig {
  /** namespace block */
  readonly namespace: GoogleDnsManagedZoneServiceDirectoryConfigNamespace[];
}
export interface GoogleDnsManagedZoneTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleDnsManagedZone extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleDnsManagedZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_managed_zone',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._dnsName = config.dnsName;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._reverseLookup = config.reverseLookup;
    this._visibility = config.visibility;
    this._dnssecConfig = config.dnssecConfig;
    this._forwardingConfig = config.forwardingConfig;
    this._peeringConfig = config.peeringConfig;
    this._privateVisibilityConfig = config.privateVisibilityConfig;
    this._serviceDirectoryConfig = config.serviceDirectoryConfig;
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

  // dns_name - computed: false, optional: false, required: true
  private _dnsName: string;
  public get dnsName() {
    return this._dnsName;
  }
  public set dnsName(value: string) {
    this._dnsName = value;
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

  // name_servers - computed: true, optional: false, required: true
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // reverse_lookup - computed: false, optional: true, required: false
  private _reverseLookup?: boolean;
  public get reverseLookup() {
    return this._reverseLookup;
  }
  public set reverseLookup(value: boolean | undefined) {
    this._reverseLookup = value;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string;
  public get visibility() {
    return this._visibility;
  }
  public set visibility(value: string | undefined) {
    this._visibility = value;
  }

  // dnssec_config - computed: false, optional: true, required: false
  private _dnssecConfig?: GoogleDnsManagedZoneDnssecConfig[];
  public get dnssecConfig() {
    return this._dnssecConfig;
  }
  public set dnssecConfig(value: GoogleDnsManagedZoneDnssecConfig[] | undefined) {
    this._dnssecConfig = value;
  }

  // forwarding_config - computed: false, optional: true, required: false
  private _forwardingConfig?: GoogleDnsManagedZoneForwardingConfig[];
  public get forwardingConfig() {
    return this._forwardingConfig;
  }
  public set forwardingConfig(value: GoogleDnsManagedZoneForwardingConfig[] | undefined) {
    this._forwardingConfig = value;
  }

  // peering_config - computed: false, optional: true, required: false
  private _peeringConfig?: GoogleDnsManagedZonePeeringConfig[];
  public get peeringConfig() {
    return this._peeringConfig;
  }
  public set peeringConfig(value: GoogleDnsManagedZonePeeringConfig[] | undefined) {
    this._peeringConfig = value;
  }

  // private_visibility_config - computed: false, optional: true, required: false
  private _privateVisibilityConfig?: GoogleDnsManagedZonePrivateVisibilityConfig[];
  public get privateVisibilityConfig() {
    return this._privateVisibilityConfig;
  }
  public set privateVisibilityConfig(value: GoogleDnsManagedZonePrivateVisibilityConfig[] | undefined) {
    this._privateVisibilityConfig = value;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig?: GoogleDnsManagedZoneServiceDirectoryConfig[];
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public set serviceDirectoryConfig(value: GoogleDnsManagedZoneServiceDirectoryConfig[] | undefined) {
    this._serviceDirectoryConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleDnsManagedZoneTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleDnsManagedZoneTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      dns_name: this._dnsName,
      labels: this._labels,
      name: this._name,
      project: this._project,
      reverse_lookup: this._reverseLookup,
      visibility: this._visibility,
      dnssec_config: this._dnssecConfig,
      forwarding_config: this._forwardingConfig,
      peering_config: this._peeringConfig,
      private_visibility_config: this._privateVisibilityConfig,
      service_directory_config: this._serviceDirectoryConfig,
      timeouts: this._timeouts,
    };
  }
}
