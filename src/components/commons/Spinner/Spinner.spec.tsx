import React from "react"
import { shallow } from "enzyme"

import { Spinner } from "./Spinner"

describe("Spinner", () => {
  const render = (props: Partial<React.ComponentProps<typeof Spinner>> = {}) => shallow(<Spinner {...props} />)

  it("should render", () => {
    expect(render()).toMatchSnapshot()
  })
})
