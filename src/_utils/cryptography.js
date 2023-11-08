import { secretKey, iv } from '../config/config.js'
export async function encryption(message) {
    try{
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const keyBuffer = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secretKey),
      'AES-CBC',
      false,
      ['encrypt']
    );
    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: 'AES-CBC', iv: iv },
      keyBuffer,
      data
    );
    const encryptedArray = Array.from(new Uint8Array(encryptedBuffer));
    return btoa(String.fromCharCode(...encryptedArray));
    }catch(err){
        return message
    }
  }
  
  // Decrypt an encrypted message
export  async function decription(encryptedMessage) {
    try{
    const keyBuffer = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secretKey),
      'AES-CBC',
      false,
      ['decrypt']
    );
    const encryptedBytes = new Uint8Array(
      atob(encryptedMessage)
        .split('')
        .map((char) => char.charCodeAt(0))
    );
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-CBC', iv: iv },
      keyBuffer,
      encryptedBytes
    );
    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
    }
    catch(err){
        return encryptedMessage;
    }
  }
  
  // Example usage

  
//   const message = 'Hello, world!';
//   encryptMessage(message)
//     .then((encrypted) => {
//       console.log('Encrypted:', encrypted);
//       return decryptMessage(encrypted);
//     })
//     .then((decrypted) => {
//       console.log('Decrypted:', decrypted);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
  