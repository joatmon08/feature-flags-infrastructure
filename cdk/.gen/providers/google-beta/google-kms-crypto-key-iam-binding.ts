// https://www.terraform.io/docs/providers/google-beta/r/google_kms_crypto_key_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleKmsCryptoKeyIamBindingConfig extends TerraformMetaArguments {
  readonly cryptoKeyId: string;
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: GoogleKmsCryptoKeyIamBindingCondition[];
}
export interface GoogleKmsCryptoKeyIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class GoogleKmsCryptoKeyIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleKmsCryptoKeyIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cryptoKeyId = config.cryptoKeyId;
    this._members = config.members;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crypto_key_id - computed: false, optional: false, required: true
  private _cryptoKeyId: string;
  public get cryptoKeyId() {
    return this._cryptoKeyId;
  }
  public set cryptoKeyId(value: string) {
    this._cryptoKeyId = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[]) {
    this._members = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: GoogleKmsCryptoKeyIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: GoogleKmsCryptoKeyIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key_id: this._cryptoKeyId,
      members: this._members,
      role: this._role,
      condition: this._condition,
    };
  }
}
