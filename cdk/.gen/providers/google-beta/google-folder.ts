// https://www.terraform.io/docs/providers/google-beta/r/google_folder.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleFolderConfig extends TerraformMetaArguments {
  /** The folder's display name. A folder's display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. */
  readonly displayName: string;
  /** The resource name of the parent Folder or Organization. Must be of the form folders/{folder_id} or organizations/{org_id}. */
  readonly parent: string;
  /** timeouts block */
  readonly timeouts?: GoogleFolderTimeouts;
}
export interface GoogleFolderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class GoogleFolder extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._parent = config.parent;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // folder_id - computed: true, optional: false, required: true
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_state - computed: true, optional: false, required: true
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleFolderTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleFolderTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      parent: this._parent,
      timeouts: this._timeouts,
    };
  }
}
