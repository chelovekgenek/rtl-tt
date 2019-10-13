import styled from "styled-components"

export const Container = styled.li`
  display: flex;
  margin-bottom: 2.2rem;
  cursor: pointer;
`

const marginMixin = `
  margin: 0 0 0.6rem;
`

export const Label = styled.h3`
  ${marginMixin}
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
`

export const Title = styled.h2`
  ${marginMixin}
`

export const Image = styled.img`
  width: 16rem;
  height: auto;
  transition: transform 0.8s ease;
  &:hover {
    transform: scale(1.2);
  }
`
export const ImageWrapper = styled.div`
  overflow: hidden;
`

export const Section = styled.div`
  &:nth-child(1) {
    margin-right: 1rem;
  }
`
