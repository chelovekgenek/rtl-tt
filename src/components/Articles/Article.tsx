import React, { useMemo, useCallback } from "react"
import { IStateProps } from "./Articles.container"

import * as Styles from "./Article.styled"
import { getCropBy, truncateText } from "helpers"

interface IProps {
  data: IStateProps["data"][number]
}

export const Article: React.FC<IProps> = ({ data }) => {
  const image = useMemo(() => getCropBy(data.afbeelding.crops, "type", "square_small"), [data.afbeelding.crops])
  const description = useMemo(() => truncateText(data.lead, 240), [data.lead])
  const handleRedirect = useCallback(() => window.location.assign(data.urlAlias), [data.urlAlias])
  return (
    <Styles.Container onClick={handleRedirect}>
      {Boolean(image) && (
        <Styles.Section>
          <Styles.ImageWrapper>
            <Styles.Image src={image!.path} alt={data.id} />
          </Styles.ImageWrapper>
        </Styles.Section>
      )}
      <Styles.Section>
        <Styles.Label>{data.labelValue}</Styles.Label>
        <Styles.Title>{data.titel}</Styles.Title>
        <p>{description}</p>
      </Styles.Section>
    </Styles.Container>
  )
}
