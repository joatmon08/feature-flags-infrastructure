// https://www.terraform.io/docs/providers/google-beta/r/google_service_directory_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleServiceDirectoryServiceConfig extends TerraformMetaArguments {
  /** Metadata for the service. This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 2000 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected. */
  readonly metadata?: { [key: string]: string };
  /** The resource name of the namespace this service will belong to. */
  readonly namespace: string;
  /** The Resource ID must be 1-63 characters long, including digits,
lowercase letters or the hyphen character. */
  readonly serviceId: string;
  /** timeouts block */
  readonly timeouts?: GoogleServiceDirectoryServiceTimeouts;
}
export interface GoogleServiceDirectoryServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleServiceDirectoryService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleServiceDirectoryServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_directory_service',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._namespace = config.namespace;
    this._serviceId = config.serviceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId: string;
  public get serviceId() {
    return this._serviceId;
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleServiceDirectoryServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleServiceDirectoryServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      namespace: this._namespace,
      service_id: this._serviceId,
      timeouts: this._timeouts,
    };
  }
}
