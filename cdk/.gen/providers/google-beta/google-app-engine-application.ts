// https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface GoogleAppEngineApplicationConfig extends TerraformMetaArguments {
  /** The domain to authenticate users with when using App Engine's User API. */
  readonly authDomain?: string;
  readonly databaseType?: string;
  /** The location to serve the app from. */
  readonly locationId: string;
  /** The project ID to create the application under. */
  readonly project?: string;
  /** The serving status of the app. */
  readonly servingStatus?: string;
  /** feature_settings block */
  readonly featureSettings?: GoogleAppEngineApplicationFeatureSettings[];
  /** iap block */
  readonly iap?: GoogleAppEngineApplicationIap[];
  /** timeouts block */
  readonly timeouts?: GoogleAppEngineApplicationTimeouts;
}
export class GoogleAppEngineApplicationUrlDispatchRule extends ComplexComputedList {

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // service - computed: true, optional: false, required: true
  public get service() {
    return this.getStringAttribute('service');
  }
}
export interface GoogleAppEngineApplicationFeatureSettings {
  readonly splitHealthChecks: boolean;
}
export interface GoogleAppEngineApplicationIap {
  /** Adapted for use with the app */
  readonly enabled?: boolean;
  /** OAuth2 client ID to use for the authentication flow. */
  readonly oauth2ClientId: string;
  /** OAuth2 client secret to use for the authentication flow. The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field. */
  readonly oauth2ClientSecret: string;
}
export interface GoogleAppEngineApplicationTimeouts {
  readonly create?: string;
  readonly update?: string;
}

// Resource

export class GoogleAppEngineApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleAppEngineApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authDomain = config.authDomain;
    this._databaseType = config.databaseType;
    this._locationId = config.locationId;
    this._project = config.project;
    this._servingStatus = config.servingStatus;
    this._featureSettings = config.featureSettings;
    this._iap = config.iap;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: true
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // auth_domain - computed: true, optional: true, required: false
  private _authDomain?: string;
  public get authDomain() {
    return this._authDomain ?? this.getStringAttribute('auth_domain');
  }
  public set authDomain(value: string | undefined) {
    this._authDomain = value;
  }

  // code_bucket - computed: true, optional: false, required: true
  public get codeBucket() {
    return this.getStringAttribute('code_bucket');
  }

  // database_type - computed: true, optional: true, required: false
  private _databaseType?: string;
  public get databaseType() {
    return this._databaseType ?? this.getStringAttribute('database_type');
  }
  public set databaseType(value: string | undefined) {
    this._databaseType = value;
  }

  // default_bucket - computed: true, optional: false, required: true
  public get defaultBucket() {
    return this.getStringAttribute('default_bucket');
  }

  // default_hostname - computed: true, optional: false, required: true
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // gcr_domain - computed: true, optional: false, required: true
  public get gcrDomain() {
    return this.getStringAttribute('gcr_domain');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId: string;
  public get locationId() {
    return this._locationId;
  }
  public set locationId(value: string) {
    this._locationId = value;
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

  // serving_status - computed: true, optional: true, required: false
  private _servingStatus?: string;
  public get servingStatus() {
    return this._servingStatus ?? this.getStringAttribute('serving_status');
  }
  public set servingStatus(value: string | undefined) {
    this._servingStatus = value;
  }

  // url_dispatch_rule - computed: true, optional: false, required: true
  public urlDispatchRule(index: string) {
    return new GoogleAppEngineApplicationUrlDispatchRule(this, 'url_dispatch_rule', index);
  }

  // feature_settings - computed: false, optional: true, required: false
  private _featureSettings?: GoogleAppEngineApplicationFeatureSettings[];
  public get featureSettings() {
    return this._featureSettings;
  }
  public set featureSettings(value: GoogleAppEngineApplicationFeatureSettings[] | undefined) {
    this._featureSettings = value;
  }

  // iap - computed: false, optional: true, required: false
  private _iap?: GoogleAppEngineApplicationIap[];
  public get iap() {
    return this._iap;
  }
  public set iap(value: GoogleAppEngineApplicationIap[] | undefined) {
    this._iap = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleAppEngineApplicationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleAppEngineApplicationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_domain: this._authDomain,
      database_type: this._databaseType,
      location_id: this._locationId,
      project: this._project,
      serving_status: this._servingStatus,
      feature_settings: this._featureSettings,
      iap: this._iap,
      timeouts: this._timeouts,
    };
  }
}
