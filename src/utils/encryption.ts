import * as Crypto from 'expo-crypto'

export const encrypt = (text: string) => {
  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA1, `${text}`).then((text) => text)
}
