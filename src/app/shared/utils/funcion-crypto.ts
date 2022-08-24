import * as CryptoJS from 'crypto-js';

export function Encriptar(value: any, keys: any): string {
  const encrypted = CryptoJS.AES.encrypt(value, keys);
  return encrypted.toString();
}

export function Desencriptar(value: any, keys: any): string {
  const dsencrypted = CryptoJS.AES.decrypt(value, keys)
  return dsencrypted.toString(CryptoJS.enc.Utf8);
}
