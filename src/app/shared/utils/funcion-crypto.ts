import * as CryptoJS from 'crypto-js';
import * as Forge from 'node-forge';
declare var JSEncrypt: any;

export function Encriptar(value: any, keys: any): string {
  const encrypted = CryptoJS.AES.encrypt(value, keys);
  return encrypted.toString();
}

export function Desencriptar(value: any, keys: any): string {
  const dsencrypted = CryptoJS.AES.decrypt(value, keys)
  return dsencrypted.toString(CryptoJS.enc.Utf8);
}

export function encryptWithPublicKey(valueToEncrypt: string, keyPublic: string): string {
  const rsaPK = Forge.pki.publicKeyFromPem(keyPublic);
  return window.btoa(rsaPK.encrypt(valueToEncrypt));
}

export function encryptWithPublicKey3(valueToEncrypt: string, keyPublic: string): string {
  let encryptedText = "";
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(keyPublic);
  encryptedText = jsEncrypt.encrypt(valueToEncrypt);
  return encryptedText;
}

