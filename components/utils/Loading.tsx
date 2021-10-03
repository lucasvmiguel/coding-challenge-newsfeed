import styled from 'styled-components'
import ReactLoading from 'react-loading'

export default function Loading() {
  return (
    <Box>
      <ReactLoading type='spin' color='#000' width={25} />
    </Box>
  )
}

const Box = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`
