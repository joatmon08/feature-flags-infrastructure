// https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudbuildTriggerConfig extends TerraformMetaArguments {
  /** Human-readable description of the trigger. */
  readonly description?: string;
  /** Whether the trigger is disabled or not. If true, the trigger will never result in a build. */
  readonly disabled?: boolean;
  /** Path, from the source root, to a file whose contents is used for the template. Either a filename or build template must be provided. */
  readonly filename?: string;
  /** ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for '**'.

If ignoredFiles and changed files are both empty, then they are not
used to determine whether or not to trigger a build.

If ignoredFiles is not empty, then we ignore any files that match any
of the ignored_file globs. If the change has no files that are outside
of the ignoredFiles globs, then we do not trigger a build. */
  readonly ignoredFiles?: string[];
  /** ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
extended with support for '**'.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is empty, then as far as this filter is concerned, we
should trigger the build.

If any of the files altered in the commit pass the ignoredFiles filter
and includedFiles is not empty, then we make sure that at least one of
those files matches a includedFiles glob. If not, then we do not trigger
a build. */
  readonly includedFiles?: string[];
  /** Name of the trigger. Must be unique within the project. */
  readonly name?: string;
  readonly project?: string;
  /** Substitutions data for Build resource. */
  readonly substitutions?: { [key: string]: string };
  /** build block */
  readonly buildAttribute?: CloudbuildTriggerBuild[];
  /** timeouts block */
  readonly timeouts?: CloudbuildTriggerTimeouts;
  /** trigger_template block */
  readonly triggerTemplate?: CloudbuildTriggerTriggerTemplate[];
}
export interface CloudbuildTriggerBuildStepVolumes {
  /** Name of the volume to mount.

Volume names must be unique per build step and must be valid names for
Docker volumes. Each named volume must be used by at least two build steps. */
  readonly name: string;
  /** Path at which to mount the volume.

Paths must be absolute and cannot conflict with other volume paths on
the same build step or with certain reserved volume paths. */
  readonly path: string;
}
export interface CloudbuildTriggerBuildStep {
  /** A list of arguments that will be presented to the step when it is started.

If the image used to run the step's container has an entrypoint, the args
are used as arguments to that entrypoint. If the image does not define an
entrypoint, the first element in args is used as the entrypoint, and the
remainder will be used as arguments. */
  readonly args?: string[];
  /** Working directory to use when running this step's container.

If this value is a relative path, it is relative to the build's working
directory. If this value is absolute, it may be outside the build's working
directory, in which case the contents of the path may not be persisted
across build step executions, unless a 'volume' for that path is specified.

If the build specifies a 'RepoSource' with 'dir' and a step with a
'dir',
which specifies an absolute path, the 'RepoSource' 'dir' is ignored
for the step's execution. */
  readonly dir?: string;
  /** Entrypoint to be used instead of the build step image's
default entrypoint.
If unset, the image's default entrypoint is used */
  readonly entrypoint?: string;
  /** A list of environment variable definitions to be used when
running a step.

The elements are of the form "KEY=VALUE" for the environment variable
"KEY" being given the value "VALUE". */
  readonly env?: string[];
  /** Unique identifier for this build step, used in 'wait_for' to
reference this build step as a dependency. */
  readonly id?: string;
  /** The name of the container image that will run this particular build step.

If the image is available in the host's Docker daemon's cache, it will be
run directly. If not, the host will attempt to pull the image first, using
the builder service account's credentials if necessary.

The Docker daemon's cache will already have the latest versions of all of
the officially supported build steps (https://github.com/GoogleCloudPlatform/cloud-builders).
The Docker daemon will also have cached many of the layers for some popular
images, like "ubuntu", "debian", but they will be refreshed at the time
you attempt to use them.

If you built an image in a previous build step, it will be stored in the
host's Docker daemon's cache and is available to use as the name for a
later build step. */
  readonly name: string;
  /** A list of environment variables which are encrypted using
a Cloud Key
Management Service crypto key. These values must be specified in
the build's 'Secret'. */
  readonly secretEnv?: string[];
  /** Time limit for executing this build step. If not defined,
the step has no
time limit and will be allowed to continue to run until either it
completes or the build itself times out. */
  readonly timeout?: string;
  /** Output only. Stores timing information for executing this
build step. */
  readonly timing?: string;
  /** The ID(s) of the step(s) that this build step depends on.

This build step will not start until all the build steps in 'wait_for'
have completed successfully. If 'wait_for' is empty, this build step
will start when all previous build steps in the 'Build.Steps' list
have completed successfully. */
  readonly waitFor?: string[];
  /** volumes block */
  readonly volumes?: CloudbuildTriggerBuildStepVolumes[];
}
export interface CloudbuildTriggerBuild {
  /** A list of images to be pushed upon the successful completion of all build steps.
The images are pushed using the builder service account's credentials.
The digests of the pushed images will be stored in the Build resource's results field.
If any of the images fail to be pushed, the build status is marked FAILURE. */
  readonly images?: string[];
  /** Tags for annotation of a Build. These are not docker tags. */
  readonly tags?: string[];
  /** Amount of time that this build should be allowed to run, to second granularity.
If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
The expected format is the number of seconds followed by s.
Default time is ten minutes (600s). */
  readonly timeout?: string;
  /** step block */
  readonly step: CloudbuildTriggerBuildStep[];
}
export interface CloudbuildTriggerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface CloudbuildTriggerTriggerTemplate {
  /** Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.
This field is a regular expression. */
  readonly branchName?: string;
  /** Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided. */
  readonly commitSha?: string;
  /** Directory, relative to the source root, in which to run the build.

This must be a relative path. If a step's dir is specified and
is an absolute path, this value is ignored for that step's
execution. */
  readonly dir?: string;
  /** Only trigger a build if the revision regex does NOT match the revision regex. */
  readonly invertRegex?: boolean;
  /** ID of the project that owns the Cloud Source Repository. If
omitted, the project ID requesting the build is assumed. */
  readonly projectId?: string;
  /** Name of the Cloud Source Repository. If omitted, the name "default" is assumed. */
  readonly repoName?: string;
  /** Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.
This field is a regular expression. */
  readonly tagName?: string;
}

// Resource

export class CloudbuildTrigger extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudbuildTriggerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_cloudbuild_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._disabled = config.disabled;
    this._filename = config.filename;
    this._ignoredFiles = config.ignoredFiles;
    this._includedFiles = config.includedFiles;
    this._name = config.name;
    this._project = config.project;
    this._substitutions = config.substitutions;
    this._build = config.buildAttribute;
    this._timeouts = config.timeouts;
    this._triggerTemplate = config.triggerTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this._disabled;
  }
  public set disabled(value: boolean | undefined) {
    this._disabled = value;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string;
  public get filename() {
    return this._filename;
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ignored_files - computed: false, optional: true, required: false
  private _ignoredFiles?: string[];
  public get ignoredFiles() {
    return this._ignoredFiles;
  }
  public set ignoredFiles(value: string[] | undefined) {
    this._ignoredFiles = value;
  }

  // included_files - computed: false, optional: true, required: false
  private _includedFiles?: string[];
  public get includedFiles() {
    return this._includedFiles;
  }
  public set includedFiles(value: string[] | undefined) {
    this._includedFiles = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
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

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string };
  public get substitutions() {
    return this._substitutions;
  }
  public set substitutions(value: { [key: string]: string } | undefined) {
    this._substitutions = value;
  }

  // trigger_id - computed: true, optional: false, required: true
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // build - computed: false, optional: true, required: false
  private _build?: CloudbuildTriggerBuild[];
  public get buildAttribute() {
    return this._build;
  }
  public set buildAttribute(value: CloudbuildTriggerBuild[] | undefined) {
    this._build = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudbuildTriggerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudbuildTriggerTimeouts | undefined) {
    this._timeouts = value;
  }

  // trigger_template - computed: false, optional: true, required: false
  private _triggerTemplate?: CloudbuildTriggerTriggerTemplate[];
  public get triggerTemplate() {
    return this._triggerTemplate;
  }
  public set triggerTemplate(value: CloudbuildTriggerTriggerTemplate[] | undefined) {
    this._triggerTemplate = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      disabled: this._disabled,
      filename: this._filename,
      ignored_files: this._ignoredFiles,
      included_files: this._includedFiles,
      name: this._name,
      project: this._project,
      substitutions: this._substitutions,
      build: this._build,
      timeouts: this._timeouts,
      trigger_template: this._triggerTemplate,
    };
  }
}
