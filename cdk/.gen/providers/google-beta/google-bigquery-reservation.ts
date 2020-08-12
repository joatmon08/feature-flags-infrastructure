// https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_reservation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleBigqueryReservationConfig extends TerraformMetaArguments {
  /** If false, any query using this reservation will use idle slots from other reservations within
the same admin project. If true, a query using this reservation will execute with the slot
capacity specified above at most. */
  readonly ignoreIdleSlots?: boolean;
  /** The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US. */
  readonly location?: string;
  /** The name of the reservation. This field must only contain alphanumeric characters or dash. */
  readonly name: string;
  readonly project?: string;
  /** Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false. */
  readonly slotCapacity: number;
  /** timeouts block */
  readonly timeouts?: GoogleBigqueryReservationTimeouts;
}
export interface GoogleBigqueryReservationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleBigqueryReservation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleBigqueryReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_reservation',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ignoreIdleSlots = config.ignoreIdleSlots;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._slotCapacity = config.slotCapacity;
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

  // ignore_idle_slots - computed: false, optional: true, required: false
  private _ignoreIdleSlots?: boolean;
  public get ignoreIdleSlots() {
    return this._ignoreIdleSlots;
  }
  public set ignoreIdleSlots(value: boolean | undefined) {
    this._ignoreIdleSlots = value;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
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

  // slot_capacity - computed: false, optional: false, required: true
  private _slotCapacity: number;
  public get slotCapacity() {
    return this._slotCapacity;
  }
  public set slotCapacity(value: number) {
    this._slotCapacity = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleBigqueryReservationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleBigqueryReservationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_idle_slots: this._ignoreIdleSlots,
      location: this._location,
      name: this._name,
      project: this._project,
      slot_capacity: this._slotCapacity,
      timeouts: this._timeouts,
    };
  }
}
