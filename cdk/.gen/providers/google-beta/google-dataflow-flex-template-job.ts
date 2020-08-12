// https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleDataflowFlexTemplateJobConfig extends TerraformMetaArguments {
  readonly containerSpecGcsPath: string;
  readonly labels?: { [key: string]: string };
  readonly name: string;
  readonly onDelete?: string;
  readonly parameters?: { [key: string]: string };
  readonly project?: string;
}

// Resource

export class GoogleDataflowFlexTemplateJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleDataflowFlexTemplateJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataflow_flex_template_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerSpecGcsPath = config.containerSpecGcsPath;
    this._labels = config.labels;
    this._name = config.name;
    this._onDelete = config.onDelete;
    this._parameters = config.parameters;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_spec_gcs_path - computed: false, optional: false, required: true
  private _containerSpecGcsPath: string;
  public get containerSpecGcsPath() {
    return this._containerSpecGcsPath;
  }
  public set containerSpecGcsPath(value: string) {
    this._containerSpecGcsPath = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // job_id - computed: true, optional: false, required: true
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string;
  public get onDelete() {
    return this._onDelete;
  }
  public set onDelete(value: string | undefined) {
    this._onDelete = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      container_spec_gcs_path: this._containerSpecGcsPath,
      labels: this._labels,
      name: this._name,
      on_delete: this._onDelete,
      parameters: this._parameters,
      project: this._project,
    };
  }
}
