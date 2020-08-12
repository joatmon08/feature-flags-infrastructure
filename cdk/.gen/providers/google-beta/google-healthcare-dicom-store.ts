// https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_dicom_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleHealthcareDicomStoreConfig extends TerraformMetaArguments {
  /** Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}' */
  readonly dataset: string;
  /** User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly labels?: { [key: string]: string };
  /** The resource name for the DicomStore.

** Changing this property may recreate the Dicom store (removing all data) ** */
  readonly name: string;
  /** notification_config block */
  readonly notificationConfig?: GoogleHealthcareDicomStoreNotificationConfig[];
  /** timeouts block */
  readonly timeouts?: GoogleHealthcareDicomStoreTimeouts;
}
export interface GoogleHealthcareDicomStoreNotificationConfig {
  /** The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. cloud-healthcare@system.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail. */
  readonly pubsubTopic: string;
}
export interface GoogleHealthcareDicomStoreTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleHealthcareDicomStore extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleHealthcareDicomStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dicom_store',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataset = config.dataset;
    this._labels = config.labels;
    this._name = config.name;
    this._notificationConfig = config.notificationConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: false, required: true
  private _dataset: string;
  public get dataset() {
    return this._dataset;
  }
  public set dataset(value: string) {
    this._dataset = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig?: GoogleHealthcareDicomStoreNotificationConfig[];
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public set notificationConfig(value: GoogleHealthcareDicomStoreNotificationConfig[] | undefined) {
    this._notificationConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleHealthcareDicomStoreTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleHealthcareDicomStoreTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: this._dataset,
      labels: this._labels,
      name: this._name,
      notification_config: this._notificationConfig,
      timeouts: this._timeouts,
    };
  }
}
