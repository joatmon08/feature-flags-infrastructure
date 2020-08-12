// https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleBigqueryConnectionConfig extends TerraformMetaArguments {
  /** Optional connection id that should be assigned to the created connection. */
  readonly connectionId?: string;
  /** A descriptive description for the connection */
  readonly description?: string;
  /** A descriptive name for the connection */
  readonly friendlyName?: string;
  /** The geographic location where the connection should reside.
Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1. The default value is US. */
  readonly location?: string;
  readonly project?: string;
  /** cloud_sql block */
  readonly cloudSql: GoogleBigqueryConnectionCloudSql[];
  /** timeouts block */
  readonly timeouts?: GoogleBigqueryConnectionTimeouts;
}
export interface GoogleBigqueryConnectionCloudSqlCredential {
  /** Password for database. */
  readonly password: string;
  /** Username for database. */
  readonly username: string;
}
export interface GoogleBigqueryConnectionCloudSql {
  /** Database name. */
  readonly database: string;
  /** Cloud SQL instance ID in the form project:location:instance. */
  readonly instanceId: string;
  /** Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"] */
  readonly type: string;
  /** credential block */
  readonly credential: GoogleBigqueryConnectionCloudSqlCredential[];
}
export interface GoogleBigqueryConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleBigqueryConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleBigqueryConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_connection',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._location = config.location;
    this._project = config.project;
    this._cloudSql = config.cloudSql;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string;
  public get connectionId() {
    return this._connectionId;
  }
  public set connectionId(value: string | undefined) {
    this._connectionId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string;
  public get friendlyName() {
    return this._friendlyName;
  }
  public set friendlyName(value: string | undefined) {
    this._friendlyName = value;
  }

  // has_credential - computed: true, optional: false, required: true
  public get hasCredential() {
    return this.getBooleanAttribute('has_credential');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
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

  // cloud_sql - computed: false, optional: false, required: true
  private _cloudSql: GoogleBigqueryConnectionCloudSql[];
  public get cloudSql() {
    return this._cloudSql;
  }
  public set cloudSql(value: GoogleBigqueryConnectionCloudSql[]) {
    this._cloudSql = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleBigqueryConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleBigqueryConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: this._connectionId,
      description: this._description,
      friendly_name: this._friendlyName,
      location: this._location,
      project: this._project,
      cloud_sql: this._cloudSql,
      timeouts: this._timeouts,
    };
  }
}
