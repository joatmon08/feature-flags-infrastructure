// https://www.terraform.io/docs/providers/google-beta/r/google_service_directory_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleServiceDirectoryEndpointConfig extends TerraformMetaArguments {
  /** IPv4 or IPv6 address of the endpoint. */
  readonly address?: string;
  /** The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character. */
  readonly endpointId: string;
  /** Metadata for the endpoint. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected. */
  readonly metadata?: { [key: string]: string };
  /** Port that the endpoint is running on, must be in the
range of [0, 65535]. If unspecified, the default is 0. */
  readonly port?: number;
  /** The resource name of the service that this endpoint provides. */
  readonly service: string;
  /** timeouts block */
  readonly timeouts?: GoogleServiceDirectoryEndpointTimeouts;
}
export interface GoogleServiceDirectoryEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleServiceDirectoryEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleServiceDirectoryEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_directory_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._address = config.address;
    this._endpointId = config.endpointId;
    this._metadata = config.metadata;
    this._port = config.port;
    this._service = config.service;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string;
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId: string;
  public get endpointId() {
    return this._endpointId;
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
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
  private _timeouts?: GoogleServiceDirectoryEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleServiceDirectoryEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address: this._address,
      endpoint_id: this._endpointId,
      metadata: this._metadata,
      port: this._port,
      service: this._service,
      timeouts: this._timeouts,
    };
  }
}
