import { IBundleCrop } from "store/entities/bundle/types"

export const getCropBy = (crops: IBundleCrop[], key: keyof IBundleCrop, value: IBundleCrop[keyof IBundleCrop]) =>
  crops.find(item => item[key] === value)

export const truncateText = (text: string, max: number = 120) =>
  text.length <= max ? text : `${text.substring(0, max).trimEnd()}...`
