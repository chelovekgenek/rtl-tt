import React from "react"
import { shallow } from "enzyme"

import bundleItems from "mocks/bundle-items.json"

import { Article } from "./Article"
import { Container } from "./Article.styled"

describe("Article", () => {
  const render = (props: Partial<React.ComponentProps<typeof Article>> = {}) =>
    shallow(<Article data={bundleItems[0]} {...props} />)

  const { location } = window
  beforeAll(() => {
    delete window.location
    window.location = { assign: jest.fn() }
  })

  afterAll(() => {
    window.location = location
  })

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
  it("should redirect when Container is clicked", () => {
    const fn = jest.spyOn(window.location, "assign")
    render()
      .find(Container)
      .simulate("click")
    expect(fn).toHaveBeenCalledWith(bundleItems[0].urlAlias)
  })
})
