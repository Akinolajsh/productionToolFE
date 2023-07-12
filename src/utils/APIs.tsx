import axios from "axios";


const realURL: string = "http://localhost:2233/api/v1/task/"

const doneURL: string = "http://localhost:2233/api/v1/done/"

const finishURL: string = "http://localhost:2233/api/v3/finished"

export const createTask = async (data: any) => {
    try {
        await axios.post(realURL, data).then(res => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const readTask = async () => {
    try {
        return await axios.get(realURL).then((res: any) => {
            console.log(res.data)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = async (id: string) => {
    try {
        return await axios.patch(`${realURL}/${id}`, { completed: true }).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (id: string) => {
    try {
        return await axios.delete(`${realURL}/${id}`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

// DONE PART


export const createDoneTask = async (data: any) => {
    try {
        await axios.post(doneURL, data).then(res => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const readDoneTask = async () => {
    try {
        return await axios.get(doneURL).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteDoneTask = async (id: string) => {
    try {
        return await axios.delete(`${doneURL}/${id}`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


// Finished Part

export const readFinishTask = async () => {
    try {
        return await axios.get(finishURL).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createFinishTask = async (data: any) => {
    try {
        await axios.post(`${finishURL}/crt`, data).then(res => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteFinshTask = async (id: string) => {
    try {
        return await axios.delete(`${finishURL}/${id}`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}