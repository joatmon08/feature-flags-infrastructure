// https://www.terraform.io/docs/providers/google-beta/r/google_sourcerepo_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleSourcerepoRepositoryConfig extends TerraformMetaArguments {
  /** Resource name of the repository, of the form '{{repo}}'.
The repo name may contain slashes. eg, 'name/with/slash' */
  readonly name: string;
  readonly project?: string;
  /** pubsub_configs block */
  readonly pubsubConfigs?: GoogleSourcerepoRepositoryPubsubConfigs[];
  /** timeouts block */
  readonly timeouts?: GoogleSourcerepoRepositoryTimeouts;
}
export interface GoogleSourcerepoRepositoryPubsubConfigs {
  /** The format of the Cloud Pub/Sub messages. 
- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"] */
  readonly messageFormat: string;
  /** Email address of the service account used for publishing Cloud Pub/Sub messages. 
This service account needs to be in the same project as the PubsubConfig. When added, 
the caller needs to have iam.serviceAccounts.actAs permission on this service account. 
If unspecified, it defaults to the compute engine default service account. */
  readonly serviceAccountEmail?: string;
  readonly topic: string;
}
export interface GoogleSourcerepoRepositoryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleSourcerepoRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleSourcerepoRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sourcerepo_repository',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._project = config.project;
    this._pubsubConfigs = config.pubsubConfigs;
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

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // pubsub_configs - computed: false, optional: true, required: false
  private _pubsubConfigs?: GoogleSourcerepoRepositoryPubsubConfigs[];
  public get pubsubConfigs() {
    return this._pubsubConfigs;
  }
  public set pubsubConfigs(value: GoogleSourcerepoRepositoryPubsubConfigs[] | undefined) {
    this._pubsubConfigs = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleSourcerepoRepositoryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleSourcerepoRepositoryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      pubsub_configs: this._pubsubConfigs,
      timeouts: this._timeouts,
    };
  }
}
