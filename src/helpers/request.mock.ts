import { AxiosInstance } from "axios"
import MockAdapter from "axios-mock-adapter"

import bundleInfo from "mocks/bundle-info.json"
import bundleItems from "mocks/bundle-items.json"

export const setupMocks = (request: AxiosInstance) => {
  const mock = new MockAdapter(request)

  mock.onGet("/info").reply(200, bundleInfo)
  mock.onGet("/items").reply(200, bundleItems)
}
