
import React, { useEffect, useState } from 'react'
import CardScreen from '../../components/common/CardScreen'
import { readDoneTask, readFinishTask, readTask } from '../../utils/APIs'
import { styled } from 'styled-components'

const AllSections = () => {  const [state, setState] = useState<any>([])
    const [stateI, setStateI] = useState<any>([])
    const [stateII, setStateII] = useState<any>([])

    useEffect(() => {
        readTask().then((res: any) => {
            return setState(res)
        })
        readDoneTask().then((res: any) => {
            return setStateI(res)
        })
        readFinishTask().then((res: any) => {
            return setStateII(res)
        })
    }, [])




    return (
        <Wrap>
                    <CardScreen
                    title="Todo Task"
                    data={state}
                    icon
                />
                <CardScreen
                    title="In Progress"
                    data={stateI}
                />
                <CardScreen
                    title="In Done"
                    data={stateII}
                />
        </Wrap>
    )
}

export default AllSections


const Wrap=styled.div`
    width:calc(100% - 260px);
    /* width:100%; */
`