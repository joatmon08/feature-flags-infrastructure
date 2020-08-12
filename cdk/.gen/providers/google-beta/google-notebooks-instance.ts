// https://www.terraform.io/docs/providers/google-beta/r/google_notebooks_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleNotebooksInstanceConfig extends TerraformMetaArguments {
  /** The size of the boot disk in GB attached to this instance, 
up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. 
If not specified, this defaults to 100. */
  readonly bootDiskSizeGb?: number;
  /** Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD"] */
  readonly bootDiskType?: string;
  /** Instance creation time */
  readonly createTime?: string;
  /** Specify a custom Cloud Storage path where the GPU driver is stored. 
If not specified, we'll automatically choose from official GPU drivers. */
  readonly customGpuDriverPath?: string;
  /** The size of the data disk in GB attached to this instance, 
up to a maximum of 64000 GB (64 TB). 
You can choose the size of the data disk based on how big your notebooks and data are. 
If not specified, this defaults to 100. */
  readonly dataDiskSizeGb?: number;
  /** Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD"] */
  readonly dataDiskType?: string;
  /** Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"] */
  readonly diskEncryption?: string;
  /** Indicates that this is a boot disk. The virtual machine will
use the first partition of the disk for its root filesystem. */
  readonly installGpuDriver?: boolean;
  /** The owner of this instance after creation. 
Format: alias@example.com.
Currently supports one owner only. 
If not specified, all of the service account users of 
your VM instance's service account can use the instance. */
  readonly instanceOwners?: string;
  /** The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. 
Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id} */
  readonly kmsKey?: string;
  /** Labels to apply to this instance. These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly labels?: { [key: string]: string };
  /** A reference to the zone where the machine resides. */
  readonly location: string;
  /** A reference to a machine type which defines VM kind. */
  readonly machineType: string;
  /** Custom metadata to apply to this instance.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly metadata?: { [key: string]: string };
  /** The name specified for the Notebook instance. */
  readonly name: string;
  /** The name of the VPC that this instance is in. 
Format: projects/{project_id}/global/networks/{network_id} */
  readonly network?: string;
  /** the notebook instance will not register with the proxy.. */
  readonly noProxyAccess?: boolean;
  /** no public IP will be assigned to this instance. */
  readonly noPublicIp?: boolean;
  /** If true, the data disk will not be auto deleted when deleting the instance. */
  readonly noRemoveDataDisk?: boolean;
  /** Path to a Bash script that automatically runs after a 
notebook instance fully boots up. The path must be a URL 
or Cloud Storage path (gs://path-to-file/file-name). */
  readonly postStartupScript?: string;
  readonly project?: string;
  /** The service account on this instance, giving access to other 
Google Cloud services. You can use any service account within 
the same project, but you must have the service account user 
permission to use the instance. If not specified, 
the Compute Engine default service account is used. */
  readonly serviceAccount?: string;
  /** The name of the subnet that this instance is in. 
Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id} */
  readonly subnet?: string;
  /** Instance update time. */
  readonly updateTime?: string;
  /** accelerator_config block */
  readonly acceleratorConfig?: GoogleNotebooksInstanceAcceleratorConfig[];
  /** container_image block */
  readonly containerImage?: GoogleNotebooksInstanceContainerImage[];
  /** timeouts block */
  readonly timeouts?: GoogleNotebooksInstanceTimeouts;
  /** vm_image block */
  readonly vmImage?: GoogleNotebooksInstanceVmImage[];
}
export interface GoogleNotebooksInstanceAcceleratorConfig {
  /** Count of cores of this accelerator. */
  readonly coreCount: number;
  /** Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "TPU_V2", "TPU_V3"] */
  readonly type: string;
}
export interface GoogleNotebooksInstanceContainerImage {
  /** The path to the container image repository. 
For example: gcr.io/{project_id}/{imageName} */
  readonly repository: string;
  /** The tag of the container image. If not specified, this defaults to the latest tag. */
  readonly tag?: string;
}
export interface GoogleNotebooksInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface GoogleNotebooksInstanceVmImage {
  /** Use this VM image family to find the image; the newest image in this family will be used. */
  readonly imageFamily?: string;
  /** Use VM image name to find the image. */
  readonly imageName?: string;
  /** The name of the Google Cloud project that this VM image belongs to. 
Format: projects/{project_id} */
  readonly project: string;
}

// Resource

export class GoogleNotebooksInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleNotebooksInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_instance',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bootDiskSizeGb = config.bootDiskSizeGb;
    this._bootDiskType = config.bootDiskType;
    this._createTime = config.createTime;
    this._customGpuDriverPath = config.customGpuDriverPath;
    this._dataDiskSizeGb = config.dataDiskSizeGb;
    this._dataDiskType = config.dataDiskType;
    this._diskEncryption = config.diskEncryption;
    this._installGpuDriver = config.installGpuDriver;
    this._instanceOwners = config.instanceOwners;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._machineType = config.machineType;
    this._metadata = config.metadata;
    this._name = config.name;
    this._network = config.network;
    this._noProxyAccess = config.noProxyAccess;
    this._noPublicIp = config.noPublicIp;
    this._noRemoveDataDisk = config.noRemoveDataDisk;
    this._postStartupScript = config.postStartupScript;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._subnet = config.subnet;
    this._updateTime = config.updateTime;
    this._acceleratorConfig = config.acceleratorConfig;
    this._containerImage = config.containerImage;
    this._timeouts = config.timeouts;
    this._vmImage = config.vmImage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number;
  public get bootDiskSizeGb() {
    return this._bootDiskSizeGb;
  }
  public set bootDiskSizeGb(value: number | undefined) {
    this._bootDiskSizeGb = value;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string;
  public get bootDiskType() {
    return this._bootDiskType;
  }
  public set bootDiskType(value: string | undefined) {
    this._bootDiskType = value;
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string;
  public get createTime() {
    return this._createTime ?? this.getStringAttribute('create_time');
  }
  public set createTime(value: string | undefined) {
    this._createTime = value;
  }

  // custom_gpu_driver_path - computed: false, optional: true, required: false
  private _customGpuDriverPath?: string;
  public get customGpuDriverPath() {
    return this._customGpuDriverPath;
  }
  public set customGpuDriverPath(value: string | undefined) {
    this._customGpuDriverPath = value;
  }

  // data_disk_size_gb - computed: false, optional: true, required: false
  private _dataDiskSizeGb?: number;
  public get dataDiskSizeGb() {
    return this._dataDiskSizeGb;
  }
  public set dataDiskSizeGb(value: number | undefined) {
    this._dataDiskSizeGb = value;
  }

  // data_disk_type - computed: false, optional: true, required: false
  private _dataDiskType?: string;
  public get dataDiskType() {
    return this._dataDiskType;
  }
  public set dataDiskType(value: string | undefined) {
    this._dataDiskType = value;
  }

  // disk_encryption - computed: false, optional: true, required: false
  private _diskEncryption?: string;
  public get diskEncryption() {
    return this._diskEncryption;
  }
  public set diskEncryption(value: string | undefined) {
    this._diskEncryption = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // install_gpu_driver - computed: false, optional: true, required: false
  private _installGpuDriver?: boolean;
  public get installGpuDriver() {
    return this._installGpuDriver;
  }
  public set installGpuDriver(value: boolean | undefined) {
    this._installGpuDriver = value;
  }

  // instance_owners - computed: false, optional: true, required: false
  private _instanceOwners?: string;
  public get instanceOwners() {
    return this._instanceOwners;
  }
  public set instanceOwners(value: string | undefined) {
    this._instanceOwners = value;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this._kmsKey;
  }
  public set kmsKey(value: string | undefined) {
    this._kmsKey = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType: string;
  public get machineType() {
    return this._machineType;
  }
  public set machineType(value: string) {
    this._machineType = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string;
  public get network() {
    return this._network ?? this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }

  // no_proxy_access - computed: false, optional: true, required: false
  private _noProxyAccess?: boolean;
  public get noProxyAccess() {
    return this._noProxyAccess;
  }
  public set noProxyAccess(value: boolean | undefined) {
    this._noProxyAccess = value;
  }

  // no_public_ip - computed: false, optional: true, required: false
  private _noPublicIp?: boolean;
  public get noPublicIp() {
    return this._noPublicIp;
  }
  public set noPublicIp(value: boolean | undefined) {
    this._noPublicIp = value;
  }

  // no_remove_data_disk - computed: false, optional: true, required: false
  private _noRemoveDataDisk?: boolean;
  public get noRemoveDataDisk() {
    return this._noRemoveDataDisk;
  }
  public set noRemoveDataDisk(value: boolean | undefined) {
    this._noRemoveDataDisk = value;
  }

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string;
  public get postStartupScript() {
    return this._postStartupScript;
  }
  public set postStartupScript(value: string | undefined) {
    this._postStartupScript = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // proxy_uri - computed: true, optional: false, required: true
  public get proxyUri() {
    return this.getStringAttribute('proxy_uri');
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string;
  public get serviceAccount() {
    return this._serviceAccount ?? this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string | undefined) {
    this._serviceAccount = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string;
  public get subnet() {
    return this._subnet ?? this.getStringAttribute('subnet');
  }
  public set subnet(value: string | undefined) {
    this._subnet = value;
  }

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: string;
  public get updateTime() {
    return this._updateTime ?? this.getStringAttribute('update_time');
  }
  public set updateTime(value: string | undefined) {
    this._updateTime = value;
  }

  // accelerator_config - computed: false, optional: true, required: false
  private _acceleratorConfig?: GoogleNotebooksInstanceAcceleratorConfig[];
  public get acceleratorConfig() {
    return this._acceleratorConfig;
  }
  public set acceleratorConfig(value: GoogleNotebooksInstanceAcceleratorConfig[] | undefined) {
    this._acceleratorConfig = value;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: GoogleNotebooksInstanceContainerImage[];
  public get containerImage() {
    return this._containerImage;
  }
  public set containerImage(value: GoogleNotebooksInstanceContainerImage[] | undefined) {
    this._containerImage = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleNotebooksInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleNotebooksInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // vm_image - computed: false, optional: true, required: false
  private _vmImage?: GoogleNotebooksInstanceVmImage[];
  public get vmImage() {
    return this._vmImage;
  }
  public set vmImage(value: GoogleNotebooksInstanceVmImage[] | undefined) {
    this._vmImage = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_disk_size_gb: this._bootDiskSizeGb,
      boot_disk_type: this._bootDiskType,
      create_time: this._createTime,
      custom_gpu_driver_path: this._customGpuDriverPath,
      data_disk_size_gb: this._dataDiskSizeGb,
      data_disk_type: this._dataDiskType,
      disk_encryption: this._diskEncryption,
      install_gpu_driver: this._installGpuDriver,
      instance_owners: this._instanceOwners,
      kms_key: this._kmsKey,
      labels: this._labels,
      location: this._location,
      machine_type: this._machineType,
      metadata: this._metadata,
      name: this._name,
      network: this._network,
      no_proxy_access: this._noProxyAccess,
      no_public_ip: this._noPublicIp,
      no_remove_data_disk: this._noRemoveDataDisk,
      post_startup_script: this._postStartupScript,
      project: this._project,
      service_account: this._serviceAccount,
      subnet: this._subnet,
      update_time: this._updateTime,
      accelerator_config: this._acceleratorConfig,
      container_image: this._containerImage,
      timeouts: this._timeouts,
      vm_image: this._vmImage,
    };
  }
}
