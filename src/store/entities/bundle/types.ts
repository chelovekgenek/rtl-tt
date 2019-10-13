export interface IBundleInfo {
  title: string
  description: string
  label: string
  image: {
    imageUrl: string
  }
}

export interface IBundleCrop {
  type: string
  height: number
  width: number
  ratio: string
  path: string
}
export interface IBundleItem {
  id: string
  titel: string
  urlAlias: string
  labelValue: string
  lead: string
  afbeelding: {
    crops: IBundleCrop[]
  }
}

export interface IBundlePagination {
  limit: number
  page: number
  total: number
}

export enum BundleInfoTypes {
  REQUEST = "BUNDLE__INFO__REQUEST",
  SUCCESS = "BUNDLE__INFO__SUCCESS",
  FAILURE = "BUNDLE__INFO__FAILURE",
}

export enum BundleItemsTypes {
  REQUEST = "BUNDLE__ITEMS__REQUEST",
  SUCCESS = "BUNDLE__ITEMS__SUCCESS",
  FAILURE = "BUNDLE__ITEMS__FAILURE",
}

export enum BundleItemsPaginationTypes {
  SET_PAGE = "BUNDLE__ITEMS__PAGINATION__SET_PAGE",
  SET_TOTAL = "BUNDLE__ITEMS__PAGINATION__SET_TOTAL",
}
