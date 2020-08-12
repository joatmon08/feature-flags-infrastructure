// https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleOsConfigGuestPoliciesConfig extends TerraformMetaArguments {
  /** Description of the guest policy. Length of the description is limited to 1024 characters. */
  readonly description?: string;
  /** The etag for this guest policy. If this is provided on update, it must match the server's etag. */
  readonly etag?: string;
  /** The logical name of the guest policy in the project with the following restrictions:
* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project. */
  readonly guestPolicyId: string;
  readonly project?: string;
  /** assignment block */
  readonly assignment: GoogleOsConfigGuestPoliciesAssignment[];
  /** package_repositories block */
  readonly packageRepositories?: GoogleOsConfigGuestPoliciesPackageRepositories[];
  /** packages block */
  readonly packages?: GoogleOsConfigGuestPoliciesPackages[];
  /** recipes block */
  readonly recipes?: GoogleOsConfigGuestPoliciesRecipes[];
  /** timeouts block */
  readonly timeouts?: GoogleOsConfigGuestPoliciesTimeouts;
}
export interface GoogleOsConfigGuestPoliciesAssignmentGroupLabels {
  /** Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. */
  readonly labels: { [key: string]: string };
}
export interface GoogleOsConfigGuestPoliciesAssignmentOsTypes {
  /** Targets VM instances with OS Inventory enabled and having the following OS architecture. */
  readonly osArchitecture?: string;
  /** Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows". */
  readonly osShortName?: string;
  /** Targets VM instances with OS Inventory enabled and having the following following OS version. */
  readonly osVersion?: string;
}
export interface GoogleOsConfigGuestPoliciesAssignment {
  /** Targets VM instances whose name starts with one of these prefixes.
Like labels, this is another way to group VM instances when targeting configs,
for example prefix="prod-".
Only supported for project-level policies. */
  readonly instanceNamePrefixes?: string[];
  /** Targets any of the instances specified. Instances are specified by their URI in the form
zones/[ZONE]/instances/[INSTANCE_NAME].
Instance targeting is uncommon and is supported to facilitate the management of changes
by the instance or to target specific VM instances for development and testing.
Only supported for project-level policies and must reference instances within this project. */
  readonly instances?: string[];
  /** Targets instances in any of these zones. Leave empty to target instances in any zone.
Zonal targeting is uncommon and is supported to facilitate the management of changes by zone. */
  readonly zones?: string[];
  /** group_labels block */
  readonly groupLabels?: GoogleOsConfigGuestPoliciesAssignmentGroupLabels[];
  /** os_types block */
  readonly osTypes?: GoogleOsConfigGuestPoliciesAssignmentOsTypes[];
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesApt {
  /** Type of archive files in this repository. The default behavior is DEB. Default value: "DEB" Possible values: ["DEB", "DEB_SRC"] */
  readonly archiveType?: string;
  /** List of components for this repository. Must contain at least one item. */
  readonly components: string[];
  /** Distribution of this repository. */
  readonly distribution: string;
  /** URI of the key file for this repository. The agent maintains a keyring at
/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg containing all the keys in any applied guest policy. */
  readonly gpgKey?: string;
  /** URI for this repository. */
  readonly uri: string;
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesGoo {
  /** The name of the repository. */
  readonly name: string;
  /** The url of the repository. */
  readonly url: string;
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesYum {
  /** The location of the repository directory. */
  readonly baseUrl: string;
  /** The display name of the repository. */
  readonly displayName?: string;
  /** URIs of GPG keys. */
  readonly gpgKeys?: string[];
  /** A one word, unique name for this repository. This is the repo id in the Yum config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
  readonly id: string;
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesZypper {
  /** The location of the repository directory. */
  readonly baseUrl: string;
  /** The display name of the repository. */
  readonly displayName?: string;
  /** URIs of GPG keys. */
  readonly gpgKeys?: string[];
  /** A one word, unique name for this repository. This is the repo id in the zypper config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
  readonly id: string;
}
export interface GoogleOsConfigGuestPoliciesPackageRepositories {
  /** apt block */
  readonly apt?: GoogleOsConfigGuestPoliciesPackageRepositoriesApt[];
  /** goo block */
  readonly goo?: GoogleOsConfigGuestPoliciesPackageRepositoriesGoo[];
  /** yum block */
  readonly yum?: GoogleOsConfigGuestPoliciesPackageRepositoriesYum[];
  /** zypper block */
  readonly zypper?: GoogleOsConfigGuestPoliciesPackageRepositoriesZypper[];
}
export interface GoogleOsConfigGuestPoliciesPackages {
  /** The desiredState the agent should maintain for this package. The default is to ensure the package is installed. Possible values: ["INSTALLED", "UPDATED", "REMOVED"] */
  readonly desiredState?: string;
  /** Type of package manager that can be used to install this package. If a system does not have the package manager,
the package is not installed or removed no error message is returned. By default, or if you specify ANY,
the agent attempts to install and remove this package using the default package manager.
This is useful when creating a policy that applies to different types of systems.
The default behavior is ANY. Default value: "ANY" Possible values: ["ANY", "APT", "YUM", "ZYPPER", "GOO"] */
  readonly manager?: string;
  /** The name of the package. A package is uniquely identified for conflict validation
by checking the package name and the manager(s) that the package targets. */
  readonly name: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifactsGcs {
  /** Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be my-bucket. */
  readonly bucket?: string;
  /** Must be provided if allowInsecure is false. Generation number of the Google Cloud Storage object.
https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567. */
  readonly generation?: number;
  /** Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be foo/bar. */
  readonly object?: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifactsRemote {
  /** Must be provided if allowInsecure is false. SHA256 checksum in hex format, to compare to the checksum of the artifact.
If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any
of the steps. */
  readonly checkSum?: string;
  /** URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}. */
  readonly uri?: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifacts {
  /** Defaults to false. When false, recipes are subject to validations based on the artifact type:
Remote: A checksum must be specified, and only protocols with transport-layer security are permitted.
GCS: An object generation number must be specified. */
  readonly allowInsecure?: boolean;
  /** Id of the artifact, which the installation and update steps of this recipe can reference.
Artifacts in a recipe cannot have the same id. */
  readonly id: string;
  /** gcs block */
  readonly gcs?: GoogleOsConfigGuestPoliciesRecipesArtifactsGcs[];
  /** remote block */
  readonly remote?: GoogleOsConfigGuestPoliciesRecipesArtifactsRemote[];
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
  /** Directory to extract archive to. Defaults to / on Linux or C:\ on Windows. */
  readonly destination?: string;
  /** The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"] */
  readonly type: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
  /** The absolute path on the instance to put the file. */
  readonly destination: string;
  /** Whether to allow this step to overwrite existing files.If this is false and the file already exists the file
is not overwritten and the step is considered a success. Defaults to false. */
  readonly overwrite?: boolean;
  /** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users
for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit
number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
bit corresponds to the execute permission. Default behavior is 755.

Below are some examples of permissions and their associated values:
read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
  readonly permissions?: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec {
  /** A list of possible return values that the program can return to indicate a success. Defaults to [0]. */
  readonly allowedExitCodes?: string;
  /** Arguments to be passed to the provided executable. */
  readonly args?: string[];
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId?: string;
  /** The absolute path of the file on the local filesystem. */
  readonly localPath?: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation {
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  readonly allowedExitCodes?: number[];
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
  /** The flags to use when installing the MSI. Defaults to the install flag. */
  readonly flags?: string[];
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun {
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  readonly allowedExitCodes?: number[];
  /** The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"] */
  readonly interpreter?: string;
  /** The shell script to be executed. */
  readonly script: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallSteps {
  /** archive_extraction block */
  readonly archiveExtraction?: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction[];
  /** dpkg_installation block */
  readonly dpkgInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation[];
  /** file_copy block */
  readonly fileCopy?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy[];
  /** file_exec block */
  readonly fileExec?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec[];
  /** msi_installation block */
  readonly msiInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation[];
  /** rpm_installation block */
  readonly rpmInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation[];
  /** script_run block */
  readonly scriptRun?: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun[];
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
  /** Directory to extract archive to. Defaults to / on Linux or C:\ on Windows. */
  readonly destination?: string;
  /** The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"] */
  readonly type: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
  /** The absolute path on the instance to put the file. */
  readonly destination: string;
  /** Whether to allow this step to overwrite existing files.If this is false and the file already exists the file
is not overwritten and the step is considered a success. Defaults to false. */
  readonly overwrite?: boolean;
  /** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users
for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit
number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
bit corresponds to the execute permission. Default behavior is 755.

Below are some examples of permissions and their associated values:
read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
  readonly permissions?: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec {
  /** A list of possible return values that the program can return to indicate a success. Defaults to [0]. */
  readonly allowedExitCodes?: number[];
  /** Arguments to be passed to the provided executable. */
  readonly args?: string[];
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId?: string;
  /** The absolute path of the file on the local filesystem. */
  readonly localPath?: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation {
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  readonly allowedExitCodes?: number[];
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
  /** The flags to use when installing the MSI. Defaults to the install flag. */
  readonly flags?: string[];
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation {
  /** The id of the relevant artifact in the recipe. */
  readonly artifactId: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun {
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  readonly allowedExitCodes?: number[];
  /** The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"] */
  readonly interpreter?: string;
  /** The shell script to be executed. */
  readonly script: string;
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateSteps {
  /** archive_extraction block */
  readonly archiveExtraction?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction[];
  /** dpkg_installation block */
  readonly dpkgInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation[];
  /** file_copy block */
  readonly fileCopy?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy[];
  /** file_exec block */
  readonly fileExec?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec[];
  /** msi_installation block */
  readonly msiInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation[];
  /** rpm_installation block */
  readonly rpmInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation[];
  /** script_run block */
  readonly scriptRun?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun[];
}
export interface GoogleOsConfigGuestPoliciesRecipes {
  /** Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions.
INSTALLED_KEEP_UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version,
if a higher version of the recipe is assigned to this instance.
REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. Default value: "INSTALLED" Possible values: ["INSTALLED", "UPDATED", "REMOVED"] */
  readonly desiredState?: string;
  /** Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.
Names are also used to identify resources which helps to determine whether guest policies have conflicts.
This means that requests to create multiple recipes with the same name and version are rejected since they
could potentially have conflicting assignments. */
  readonly name: string;
  /** The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). */
  readonly version?: string;
  /** artifacts block */
  readonly artifacts?: GoogleOsConfigGuestPoliciesRecipesArtifacts[];
  /** install_steps block */
  readonly installSteps?: GoogleOsConfigGuestPoliciesRecipesInstallSteps[];
  /** update_steps block */
  readonly updateSteps?: GoogleOsConfigGuestPoliciesRecipesUpdateSteps[];
}
export interface GoogleOsConfigGuestPoliciesTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleOsConfigGuestPolicies extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleOsConfigGuestPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_guest_policies',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._etag = config.etag;
    this._guestPolicyId = config.guestPolicyId;
    this._project = config.project;
    this._assignment = config.assignment;
    this._packageRepositories = config.packageRepositories;
    this._packages = config.packages;
    this._recipes = config.recipes;
    this._timeouts = config.timeouts;
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

  // etag - computed: true, optional: true, required: false
  private _etag?: string;
  public get etag() {
    return this._etag ?? this.getStringAttribute('etag');
  }
  public set etag(value: string | undefined) {
    this._etag = value;
  }

  // guest_policy_id - computed: false, optional: false, required: true
  private _guestPolicyId: string;
  public get guestPolicyId() {
    return this._guestPolicyId;
  }
  public set guestPolicyId(value: string) {
    this._guestPolicyId = value;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // assignment - computed: false, optional: false, required: true
  private _assignment: GoogleOsConfigGuestPoliciesAssignment[];
  public get assignment() {
    return this._assignment;
  }
  public set assignment(value: GoogleOsConfigGuestPoliciesAssignment[]) {
    this._assignment = value;
  }

  // package_repositories - computed: false, optional: true, required: false
  private _packageRepositories?: GoogleOsConfigGuestPoliciesPackageRepositories[];
  public get packageRepositories() {
    return this._packageRepositories;
  }
  public set packageRepositories(value: GoogleOsConfigGuestPoliciesPackageRepositories[] | undefined) {
    this._packageRepositories = value;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: GoogleOsConfigGuestPoliciesPackages[];
  public get packages() {
    return this._packages;
  }
  public set packages(value: GoogleOsConfigGuestPoliciesPackages[] | undefined) {
    this._packages = value;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes?: GoogleOsConfigGuestPoliciesRecipes[];
  public get recipes() {
    return this._recipes;
  }
  public set recipes(value: GoogleOsConfigGuestPoliciesRecipes[] | undefined) {
    this._recipes = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleOsConfigGuestPoliciesTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleOsConfigGuestPoliciesTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      etag: this._etag,
      guest_policy_id: this._guestPolicyId,
      project: this._project,
      assignment: this._assignment,
      package_repositories: this._packageRepositories,
      packages: this._packages,
      recipes: this._recipes,
      timeouts: this._timeouts,
    };
  }
}
