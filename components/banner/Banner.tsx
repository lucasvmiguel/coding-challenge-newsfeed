import styled from 'styled-components'

type Props = {
  color: string
  bgColor: string
}

const Banner = styled.div<Props>`
  padding: 20px;
  text-align: center;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: 14px;
`

export default Banner
