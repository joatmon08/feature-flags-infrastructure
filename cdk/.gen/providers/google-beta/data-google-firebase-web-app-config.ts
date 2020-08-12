// https://www.terraform.io/docs/providers/google-beta/r/data_google_firebase_web_app_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleFirebaseWebAppConfigConfig extends TerraformMetaArguments {
  /** The project id of the Firebase web App. */
  readonly project?: string;
  /** The id of the Firebase web App. */
  readonly webAppId: string;
}

// Resource

export class DataGoogleFirebaseWebAppConfig extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleFirebaseWebAppConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_web_app_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._webAppId = config.webAppId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: true
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // auth_domain - computed: true, optional: false, required: true
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }

  // database_url - computed: true, optional: false, required: true
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location_id - computed: true, optional: false, required: true
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // measurement_id - computed: true, optional: false, required: true
  public get measurementId() {
    return this.getStringAttribute('measurement_id');
  }

  // messaging_sender_id - computed: true, optional: false, required: true
  public get messagingSenderId() {
    return this.getStringAttribute('messaging_sender_id');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // storage_bucket - computed: true, optional: false, required: true
  public get storageBucket() {
    return this.getStringAttribute('storage_bucket');
  }

  // web_app_id - computed: false, optional: false, required: true
  private _webAppId: string;
  public get webAppId() {
    return this._webAppId;
  }
  public set webAppId(value: string) {
    this._webAppId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      web_app_id: this._webAppId,
    };
  }
}
