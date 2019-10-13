import React from "react"
import { shallow } from "enzyme"

import bundleItems from "mocks/bundle-items.json"

import { Articles } from "./Articles"

describe("Articles", () => {
  const render = (props: Partial<React.ComponentProps<typeof Articles>> = {}) =>
    shallow(<Articles data={bundleItems} fetching={false} {...props} />)

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
  it("should render Spinner while fetching is true", () => {
    expect(render({ fetching: true })).toMatchSnapshot()
  })
})
