import React from "react"
import { IStateProps } from "./Header.container"
import { Spinner } from "components/commons"

import * as Styles from "./Header.styled"

interface IProps extends IStateProps {}

export const Header: React.FC<IProps> = ({ fetching, data }) => {
  if (fetching) {
    return <Spinner />
  }
  if (!data) {
    return null
  }
  return (
    <Styles.Container>
      <Styles.Image src={data.image.imageUrl} alt="image" />
      <Styles.Label>{data.label}</Styles.Label>
      <Styles.Title>{data.title}</Styles.Title>
      <p>{data.description}</p>
    </Styles.Container>
  )
}
