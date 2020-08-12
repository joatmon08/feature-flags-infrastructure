// https://www.terraform.io/docs/providers/google-beta/r/google_dialogflow_entity_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleDialogflowEntityTypeConfig extends TerraformMetaArguments {
  /** The name of this entity type to be displayed on the console. */
  readonly displayName: string;
  /** Enables fuzzy entity extraction during classification. */
  readonly enableFuzzyExtraction?: boolean;
  /** Indicates the kind of entity type.
* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"] */
  readonly kind: string;
  readonly project?: string;
  /** entities block */
  readonly entities?: GoogleDialogflowEntityTypeEntities[];
  /** timeouts block */
  readonly timeouts?: GoogleDialogflowEntityTypeTimeouts;
}
export interface GoogleDialogflowEntityTypeEntities {
  /** A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym
could be green onions.
For KIND_LIST entity types:
* This collection must contain exactly one synonym equal to value. */
  readonly synonyms: string[];
  /** The primary value associated with this entity entry. For example, if the entity type is vegetable, the value
could be scallions.
For KIND_MAP entity types:
* A reference value to be used in place of synonyms.
For KIND_LIST entity types:
* A string that can contain references to other entity types (with or without aliases). */
  readonly value: string;
}
export interface GoogleDialogflowEntityTypeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleDialogflowEntityType extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleDialogflowEntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_entity_type',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._enableFuzzyExtraction = config.enableFuzzyExtraction;
    this._kind = config.kind;
    this._project = config.project;
    this._entities = config.entities;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // enable_fuzzy_extraction - computed: false, optional: true, required: false
  private _enableFuzzyExtraction?: boolean;
  public get enableFuzzyExtraction() {
    return this._enableFuzzyExtraction;
  }
  public set enableFuzzyExtraction(value: boolean | undefined) {
    this._enableFuzzyExtraction = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this._kind;
  }
  public set kind(value: string) {
    this._kind = value;
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

  // entities - computed: false, optional: true, required: false
  private _entities?: GoogleDialogflowEntityTypeEntities[];
  public get entities() {
    return this._entities;
  }
  public set entities(value: GoogleDialogflowEntityTypeEntities[] | undefined) {
    this._entities = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleDialogflowEntityTypeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleDialogflowEntityTypeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      enable_fuzzy_extraction: this._enableFuzzyExtraction,
      kind: this._kind,
      project: this._project,
      entities: this._entities,
      timeouts: this._timeouts,
    };
  }
}
