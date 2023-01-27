import { TodoItems } from "../models/todoInterface"
import { DataResult } from "../models/dataInterface"


export function todoListItem() {

    // for (let i = 0; i < 50000; i++) {

    // }

    const data : TodoItems[] = [
        {
            id : 1,
            label : 'makan'
        }, {
            id : 2,
            label : 'tidur'
        }, {
            id : 3,
            label : 'main'
        }, {
            id : 4,
            label : 'belajar'
        }
    ]

    const response : DataResult = {
        status : 200,
        msg: 'success',
        data: data
    }
    return response;
}