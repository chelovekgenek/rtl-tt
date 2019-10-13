import React from "react"
import { shallow } from "enzyme"

import { App } from "./App"

describe("App", () => {
  const render = (props: Partial<React.ComponentProps<typeof App>> = {}) => shallow(<App {...props} />)

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
})
