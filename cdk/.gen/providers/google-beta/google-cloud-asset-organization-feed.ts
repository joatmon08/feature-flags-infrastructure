// https://www.terraform.io/docs/providers/google-beta/r/google_cloud_asset_organization_feed.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleCloudAssetOrganizationFeedConfig extends TerraformMetaArguments {
  /** A list of the full names of the assets to receive updates. You must specify either or both of 
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info. */
  readonly assetNames?: string[];
  /** A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types. */
  readonly assetTypes?: string[];
  /** The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API 
enablement check, quota, and billing. */
  readonly billingProject: string;
  /** Asset content type. If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "ACCESS_POLICY"] */
  readonly contentType?: string;
  /** This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. */
  readonly feedId: string;
  /** The organization this feed should be created in. */
  readonly orgId: string;
  /** feed_output_config block */
  readonly feedOutputConfig: GoogleCloudAssetOrganizationFeedFeedOutputConfig[];
  /** timeouts block */
  readonly timeouts?: GoogleCloudAssetOrganizationFeedTimeouts;
}
export interface GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination {
  /** Destination on Cloud Pubsub topic. */
  readonly topic: string;
}
export interface GoogleCloudAssetOrganizationFeedFeedOutputConfig {
  /** pubsub_destination block */
  readonly pubsubDestination: GoogleCloudAssetOrganizationFeedFeedOutputConfigPubsubDestination[];
}
export interface GoogleCloudAssetOrganizationFeedTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleCloudAssetOrganizationFeed extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleCloudAssetOrganizationFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_asset_organization_feed',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assetNames = config.assetNames;
    this._assetTypes = config.assetTypes;
    this._billingProject = config.billingProject;
    this._contentType = config.contentType;
    this._feedId = config.feedId;
    this._orgId = config.orgId;
    this._feedOutputConfig = config.feedOutputConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_names - computed: false, optional: true, required: false
  private _assetNames?: string[];
  public get assetNames() {
    return this._assetNames;
  }
  public set assetNames(value: string[] | undefined) {
    this._assetNames = value;
  }

  // asset_types - computed: false, optional: true, required: false
  private _assetTypes?: string[];
  public get assetTypes() {
    return this._assetTypes;
  }
  public set assetTypes(value: string[] | undefined) {
    this._assetTypes = value;
  }

  // billing_project - computed: false, optional: false, required: true
  private _billingProject: string;
  public get billingProject() {
    return this._billingProject;
  }
  public set billingProject(value: string) {
    this._billingProject = value;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType;
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }

  // feed_id - computed: false, optional: false, required: true
  private _feedId: string;
  public get feedId() {
    return this._feedId;
  }
  public set feedId(value: string) {
    this._feedId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string) {
    this._orgId = value;
  }

  // feed_output_config - computed: false, optional: false, required: true
  private _feedOutputConfig: GoogleCloudAssetOrganizationFeedFeedOutputConfig[];
  public get feedOutputConfig() {
    return this._feedOutputConfig;
  }
  public set feedOutputConfig(value: GoogleCloudAssetOrganizationFeedFeedOutputConfig[]) {
    this._feedOutputConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleCloudAssetOrganizationFeedTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleCloudAssetOrganizationFeedTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_names: this._assetNames,
      asset_types: this._assetTypes,
      billing_project: this._billingProject,
      content_type: this._contentType,
      feed_id: this._feedId,
      org_id: this._orgId,
      feed_output_config: this._feedOutputConfig,
      timeouts: this._timeouts,
    };
  }
}
