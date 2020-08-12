// https://www.terraform.io/docs/providers/google-beta/r/google_compute_managed_ssl_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeManagedSslCertificateConfig extends TerraformMetaArguments {
  /** The unique identifier for the resource. */
  readonly certificateId?: number;
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


These are in the same namespace as the managed SSL certificates. */
  readonly name?: string;
  readonly project?: string;
  /** Enum field whose value is always 'MANAGED' - used to signal to the API
which type this is. Default value: "MANAGED" Possible values: ["MANAGED"] */
  readonly type?: string;
  /** managed block */
  readonly managed?: GoogleComputeManagedSslCertificateManaged[];
  /** timeouts block */
  readonly timeouts?: GoogleComputeManagedSslCertificateTimeouts;
}
export interface GoogleComputeManagedSslCertificateManaged {
  /** Domains for which a managed SSL certificate will be valid.  Currently,
there can be up to 100 domains in this list. */
  readonly domains: string[];
}
export interface GoogleComputeManagedSslCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GoogleComputeManagedSslCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeManagedSslCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_managed_ssl_certificate',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateId = config.certificateId;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
    this._managed = config.managed;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: number;
  public get certificateId() {
    return this._certificateId ?? this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number | undefined) {
    this._certificateId = value;
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // expire_time - computed: true, optional: false, required: true
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // subject_alternative_names - computed: true, optional: false, required: true
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: GoogleComputeManagedSslCertificateManaged[];
  public get managed() {
    return this._managed;
  }
  public set managed(value: GoogleComputeManagedSslCertificateManaged[] | undefined) {
    this._managed = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeManagedSslCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeManagedSslCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: this._certificateId,
      description: this._description,
      name: this._name,
      project: this._project,
      type: this._type,
      managed: this._managed,
      timeouts: this._timeouts,
    };
  }
}
