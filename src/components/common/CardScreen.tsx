import { contextState } from '../../global/GlobalState';
import React, { useContext } from 'react'
import styled from 'styled-components'
import { createDoneTask, createFinishTask, deleteDoneTask, deleteTask, updateTask } from '../../utils/APIs';
import { AiFillFolderAdd } from "react-icons/ai"
import Swal from 'sweetalert2';
interface iData {
    title?: string;
    icon?: boolean;
    input?: boolean;
    data?: []
}

const CardScreen: React.FC<iData> = ({ title, data, icon, input }) => {
    const { globalState, setGlobalState } = useContext(contextState)

    const onToggle = () => {
        setGlobalState!(!globalState)
    }


    return (
        <Container>
             <Title>
            <span>{title}</span>
            {
                icon ? <Icon
                    onClick={onToggle}
                /> : null
            }
        </Title>
            <Main>
                {
                    data?.map((props: any) => (
                        <Card key={props._id}
                            bg={
                                props.priority === "Urgent" ? "red" :
                                    props.priority === "High" ? "pink" :
                                        props.priority === "Low" ? "lightblue" : "yellow"
                            }
                        >
                            <Task bg={props.completed ? "w" : ""}
                            >{props?.task}</Task>

                            <Move
                                onClick={() => {
                                    // updateTask(props.id)

                                    Swal.fire({
                                        title: 'Are you sure?',
                                        text: "You won't be able to revert this!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: "No, your won't be Move it to Progress!"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire(
                                                'Stop!',
                                                "Your Task has been moved to progress.",
                                                'success'
                                            ).then(() => {
                                                createDoneTask(props)
                                                deleteTask(props._id)
                                                // deleteDoneTask(props._id)

                                                window.location.reload()
                                            })
                                        }
                                    })

                                }}
                            >Move to Progress</Move>
                            <Move1
                                onClick={() => {
                                    // updateTask(props.id)

                                    Swal.fire({
                                        title: 'Are you sure?',
                                        text: "You won't be able to revert this!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: "No, your won't be Move it to Progress!"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire(
                                                'Stop!',
                                                "Your Task has been moved to progress.",
                                                'success'
                                            ).then(() => {
                                                createFinishTask(props)
                                                deleteDoneTask(props._id)

                                                window.location.reload()
                                            })
                                        }
                                    })

                                }}
                            >Move to Done</Move1>
                            <Move2
                                onClick={() => {
                                    // updateTask(props.id)

                                    Swal.fire({
                                        title: 'Are you sure?',
                                        text: "You won't be able to revert this!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: "No, your won't be Move it to Progress!"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire(
                                                'Stop!',
                                                "Your Task has been moved to progress.",
                                                'success'
                                            ).then(() => {
                                                createFinishTask(props)
                                                deleteDoneTask(props._id)

                                                window.location.reload()
                                            })
                                        }
                                    })

                                }}
                            >Move to Progress</Move2>
                        </Card>
                    ))
                }
            </Main>
        </Container>
    )
}

export default CardScreen



const Container = styled.div`
position: relative;


`

const Icon = styled(AiFillFolderAdd)`
margin-right: 10px
`

const Move2 = styled.div`
color: white;
background-color: black;
font-size: 12px;
font-weight: bold;
border-radius: 3px;
padding: 10px 15px;
margin-top: 15px;
width: 100px;
display:flex;
justify-content: flex;
align-items: center;
cursor: pointer
`
const Move1 = styled.div`
color: white;
background-color: black;
font-size: 12px;
font-weight: bold;
border-radius: 3px;
padding: 10px 15px;
margin-top: 15px;
width: 100px;
display:flex;
justify-content: flex;
align-items: center;
cursor: pointer
`
const Move = styled.div`
color: white;
background-color: black;
font-size: 12px;
font-weight: bold;
border-radius: 3px;
padding: 10px 15px;
margin-top: 15px;
width: 100px;
display:flex;
justify-content: flex;
align-items: center;
cursor: pointer
`

const Task = styled.div<{ bg?: string }>`
text-decoration: ${({ bg }) => bg ? "line-through" : "none"};
`

const Card = styled.div<{ bg?: string }>`
margin: 3px 0;
background-color: ${({ bg }) => bg};
padding: 10px;
width: 250px;
`

const Title = styled.div`
background-color: lightgrey;
text-align: center;
padding: 10px 0;
text-transform: uppercase;
font-weight: bold;

display:flex;
align-items: center;
justify-content: space-between;

span{
    margin-left: 10px;
}
`

const Main = styled.div`
border: 1px solid silver;
border-radius:3PX; 
display:flex;
flex-wrap: wrap;
gap:20px;
width:100%;
`