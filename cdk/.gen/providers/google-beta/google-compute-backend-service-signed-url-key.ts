// https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service_signed_url_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeBackendServiceSignedUrlKeyConfig extends TerraformMetaArguments {
  /** The backend service this signed URL key belongs. */
  readonly backendService: string;
  /** 128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string. */
  readonly keyValue: string;
  /** Name of the signed URL key. */
  readonly name: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: GoogleComputeBackendServiceSignedUrlKeyTimeouts;
}
export interface GoogleComputeBackendServiceSignedUrlKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GoogleComputeBackendServiceSignedUrlKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeBackendServiceSignedUrlKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_service_signed_url_key',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendService = config.backendService;
    this._keyValue = config.keyValue;
    this._name = config.name;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_service - computed: false, optional: false, required: true
  private _backendService: string;
  public get backendService() {
    return this._backendService;
  }
  public set backendService(value: string) {
    this._backendService = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_value - computed: false, optional: false, required: true
  private _keyValue: string;
  public get keyValue() {
    return this._keyValue;
  }
  public set keyValue(value: string) {
    this._keyValue = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeBackendServiceSignedUrlKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeBackendServiceSignedUrlKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_service: this._backendService,
      key_value: this._keyValue,
      name: this._name,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
