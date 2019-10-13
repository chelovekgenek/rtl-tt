import React from "react"
import { shallow } from "enzyme"

import bundleInfo from "mocks/bundle-info.json"

import { Header } from "./Header"

describe("Header", () => {
  const render = (props: Partial<React.ComponentProps<typeof Header>> = {}) =>
    shallow(<Header data={bundleInfo} fetching={false} {...props} />)

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
  it("should render Spinner while fetching is true", () => {
    expect(render({ fetching: true })).toMatchSnapshot()
  })
  it("shouldn't render anything while data is not provided", () => {
    expect(render({ fetching: false, data: undefined })).toMatchSnapshot()
  })
})
