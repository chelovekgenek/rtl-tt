import React from "react"

import { Spinner } from "components/commons"

import { Article } from "./Article"
import { IStateProps } from "./Articles.container"
import * as Styles from "./Articles.styled"

// as optimization improvement when we're working with big amount of data, to not write it to DOM directly virtualization can be added
// my example: https://github.com/chelovekgenek/react-image-grid-scroller/blob/master/src/components/Gallery/GalleryContent.tsx

interface IProps extends IStateProps {}

export const Articles: React.FC<IProps> = ({ fetching, data }) => {
  if (fetching) {
    return <Spinner />
  }

  return (
    <Styles.Container>
      {data.map(item => (
        <Article data={item} key={item.id} />
      ))}
    </Styles.Container>
  )
}
