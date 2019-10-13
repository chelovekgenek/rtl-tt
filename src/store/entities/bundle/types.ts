export interface IBundleInfo {
  titel: string
}

export interface IBundleItem {
  titel: string
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
