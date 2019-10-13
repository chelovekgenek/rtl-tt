import styled from "styled-components"

export const Container = styled.header`
  text-align: center;
  margin-bottom: 6rem;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`
const marginMixin = `
  margin: 0 0 1rem;
`

export const Label = styled.h2`
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  ${marginMixin}
`
export const Title = styled.h1`
  margin: 0 0 1rem;
`
