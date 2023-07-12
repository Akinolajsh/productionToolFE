import React, { useEffect, useState } from 'react'
import CardScreen from '../../components/common/CardScreen'
import { readDoneTask } from '../../utils/APIs'
import { styled } from 'styled-components'

const ViewProgress = () => {  
    const [stateI, setStateI] = useState<any>([])

    useEffect(() => {
        readDoneTask().then((res: any) => {
            return setStateI(res)
        })
    }, [])




    return (
        <Wrap>
                <CardScreen
                    title="In Progress"
                    data={stateI}
                />
        </Wrap>
    )
}

export default ViewProgress


const Wrap=styled.div`
    width:calc(100% - 260px);
    /* width:100%; */
`