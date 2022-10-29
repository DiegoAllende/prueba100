import * as CryptoJS from 'crypto-js';
import * as Forge from 'node-forge';
import { environment } from 'src/environments/environment';
declare var JSEncrypt: any;

export function Encriptar(value: any, keys: any): string {
  const encrypted = CryptoJS.AES.encrypt(value, keys);
  return encrypted.toString();
}

export function Desencriptar(value: any, keys: any): string {
  const dsencrypted = CryptoJS.AES.decrypt(value, keys)
  return dsencrypted.toString(CryptoJS.enc.Utf8);
}

export function encryptWithPublicKey(valueToEncrypt: string): string {
  const rsaPK = Forge.pki.publicKeyFromPem(environment.keyPublic);
  const encryptedText = rsaPK.encrypt(valueToEncrypt, 'RSA-OAEP', {
    md: Forge.md.sha256.create(),
  });

  return encodeURIComponent(Forge.util.encode64(encryptedText));
  // return encodeURIComponent(window.btoa(encryptedText));
}

export function _encryptWithPublicKey(valueToEncrypt: string): string {  
  let encryptedText = "";
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(environment.keyPublic);
  encryptedText = jsEncrypt.encrypt(valueToEncrypt, true);
  return encodeURIComponent(encryptedText);
}

