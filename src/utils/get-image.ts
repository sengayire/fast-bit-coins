import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

type getImageProps = {
  imagePath: string
}

const getImage = async ({ imagePath }: getImageProps) => {
  const image = resolveAssetSource(imagePath)
  return image
}

export default getImage
