

import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import CardScreen from '../../components/common/CardScreen'
import { readTask } from '../../utils/APIs'

const AllSections = () => {

    const [state, setState] = useState<any>([])

    useEffect(() => {
        readTask().then((res: any) => {
            return setState(res)
        })
    }, [])

  return (
    <Container>
         <CardScreen
                    title="Todo Task"
                    data={state}
                    icon
                />
    </Container>
  )
}

export default AllSections


const Container=styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 98%;
`


