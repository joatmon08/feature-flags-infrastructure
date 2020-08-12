// https://www.terraform.io/docs/providers/google-beta/r/google_data_catalog_tag.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleDataCatalogTagConfig extends TerraformMetaArguments {
  /** Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column' */
  readonly column?: string;
  /** The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group. */
  readonly parent?: string;
  /** The resource name of the tag template that this tag uses. Example:
projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}
This field cannot be modified after creation. */
  readonly template: string;
  /** fields block */
  readonly fields: GoogleDataCatalogTagFields[];
  /** timeouts block */
  readonly timeouts?: GoogleDataCatalogTagTimeouts;
}
export interface GoogleDataCatalogTagFields {
  /** Holds the value for a tag field with boolean type. */
  readonly boolValue?: boolean;
  /** Holds the value for a tag field with double type. */
  readonly doubleValue?: number;
  /** The display name of the enum value. */
  readonly enumValue?: string;
  readonly fieldName: string;
  /** Holds the value for a tag field with string type. */
  readonly stringValue?: string;
  /** Holds the value for a tag field with timestamp type. */
  readonly timestampValue?: string;
}
export interface GoogleDataCatalogTagTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleDataCatalogTag extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleDataCatalogTagConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_tag',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._column = config.column;
    this._parent = config.parent;
    this._template = config.template;
    this._fields = config.fields;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column - computed: false, optional: true, required: false
  private _column?: string;
  public get column() {
    return this._column;
  }
  public set column(value: string | undefined) {
    this._column = value;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string | undefined) {
    this._parent = value;
  }

  // template - computed: false, optional: false, required: true
  private _template: string;
  public get template() {
    return this._template;
  }
  public set template(value: string) {
    this._template = value;
  }

  // template_displayname - computed: true, optional: false, required: true
  public get templateDisplayname() {
    return this.getStringAttribute('template_displayname');
  }

  // fields - computed: false, optional: false, required: true
  private _fields: GoogleDataCatalogTagFields[];
  public get fields() {
    return this._fields;
  }
  public set fields(value: GoogleDataCatalogTagFields[]) {
    this._fields = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleDataCatalogTagTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleDataCatalogTagTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      column: this._column,
      parent: this._parent,
      template: this._template,
      fields: this._fields,
      timeouts: this._timeouts,
    };
  }
}
