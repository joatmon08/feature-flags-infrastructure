// https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleSecurityScannerScanConfigConfig extends TerraformMetaArguments {
  /** The blacklist URL patterns as described in
https://cloud.google.com/security-scanner/docs/excluded-urls */
  readonly blacklistPatterns?: string[];
  /** The user provider display name of the ScanConfig. */
  readonly displayName: string;
  /** Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"] */
  readonly exportToSecurityCommandCenter?: string;
  /** The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.
Defaults to 15. */
  readonly maxQps?: number;
  readonly project?: string;
  /** The starting URLs from which the scanner finds site pages. */
  readonly startingUrls: string[];
  /** Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default. */
  readonly targetPlatforms?: string[];
  /** Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"] */
  readonly userAgent?: string;
  /** authentication block */
  readonly authentication?: GoogleSecurityScannerScanConfigAuthentication[];
  /** schedule block */
  readonly schedule?: GoogleSecurityScannerScanConfigSchedule[];
  /** timeouts block */
  readonly timeouts?: GoogleSecurityScannerScanConfigTimeouts;
}
export interface GoogleSecurityScannerScanConfigAuthenticationCustomAccount {
  /** The login form URL of the website. */
  readonly loginUrl: string;
  /** The password of the custom account. The credential is stored encrypted
in GCP. */
  readonly password: string;
  /** The user name of the custom account. */
  readonly username: string;
}
export interface GoogleSecurityScannerScanConfigAuthenticationGoogleAccount {
  /** The password of the Google account. The credential is stored encrypted
in GCP. */
  readonly password: string;
  /** The user name of the Google account. */
  readonly username: string;
}
export interface GoogleSecurityScannerScanConfigAuthentication {
  /** custom_account block */
  readonly customAccount?: GoogleSecurityScannerScanConfigAuthenticationCustomAccount[];
  /** google_account block */
  readonly googleAccount?: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount[];
}
export interface GoogleSecurityScannerScanConfigSchedule {
  /** The duration of time between executions in days */
  readonly intervalDurationDays: number;
  /** A timestamp indicates when the next run will be scheduled. The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately. */
  readonly scheduleTime?: string;
}
export interface GoogleSecurityScannerScanConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleSecurityScannerScanConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleSecurityScannerScanConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_security_scanner_scan_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blacklistPatterns = config.blacklistPatterns;
    this._displayName = config.displayName;
    this._exportToSecurityCommandCenter = config.exportToSecurityCommandCenter;
    this._maxQps = config.maxQps;
    this._project = config.project;
    this._startingUrls = config.startingUrls;
    this._targetPlatforms = config.targetPlatforms;
    this._userAgent = config.userAgent;
    this._authentication = config.authentication;
    this._schedule = config.schedule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blacklist_patterns - computed: false, optional: true, required: false
  private _blacklistPatterns?: string[];
  public get blacklistPatterns() {
    return this._blacklistPatterns;
  }
  public set blacklistPatterns(value: string[] | undefined) {
    this._blacklistPatterns = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // export_to_security_command_center - computed: false, optional: true, required: false
  private _exportToSecurityCommandCenter?: string;
  public get exportToSecurityCommandCenter() {
    return this._exportToSecurityCommandCenter;
  }
  public set exportToSecurityCommandCenter(value: string | undefined) {
    this._exportToSecurityCommandCenter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_qps - computed: false, optional: true, required: false
  private _maxQps?: number;
  public get maxQps() {
    return this._maxQps;
  }
  public set maxQps(value: number | undefined) {
    this._maxQps = value;
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

  // starting_urls - computed: false, optional: false, required: true
  private _startingUrls: string[];
  public get startingUrls() {
    return this._startingUrls;
  }
  public set startingUrls(value: string[]) {
    this._startingUrls = value;
  }

  // target_platforms - computed: false, optional: true, required: false
  private _targetPlatforms?: string[];
  public get targetPlatforms() {
    return this._targetPlatforms;
  }
  public set targetPlatforms(value: string[] | undefined) {
    this._targetPlatforms = value;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string;
  public get userAgent() {
    return this._userAgent;
  }
  public set userAgent(value: string | undefined) {
    this._userAgent = value;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: GoogleSecurityScannerScanConfigAuthentication[];
  public get authentication() {
    return this._authentication;
  }
  public set authentication(value: GoogleSecurityScannerScanConfigAuthentication[] | undefined) {
    this._authentication = value;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: GoogleSecurityScannerScanConfigSchedule[];
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: GoogleSecurityScannerScanConfigSchedule[] | undefined) {
    this._schedule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleSecurityScannerScanConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleSecurityScannerScanConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      blacklist_patterns: this._blacklistPatterns,
      display_name: this._displayName,
      export_to_security_command_center: this._exportToSecurityCommandCenter,
      max_qps: this._maxQps,
      project: this._project,
      starting_urls: this._startingUrls,
      target_platforms: this._targetPlatforms,
      user_agent: this._userAgent,
      authentication: this._authentication,
      schedule: this._schedule,
      timeouts: this._timeouts,
    };
  }
}
