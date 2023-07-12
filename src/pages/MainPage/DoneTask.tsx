import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import CardScreen from '../../components/common/CardScreen'
import { readFinishTask } from '../../utils/APIs'

const DoneTask = () => {

     const [stateII, setStateII] = useState<any>([])

    useEffect(() => {
        
        readFinishTask().then((res: any) => {
            return setStateII(res)
        })
    }, [])


    return (
        <Container>
             <CardScreen
                    title="In Done"
                    data={stateII}
                />
        </Container>
    )
}

export default DoneTask

const Container=styled.div`
/* background-color: red; */
display:flex;
justify-content: flex-end;
align-items: center;
width: 98%;
`