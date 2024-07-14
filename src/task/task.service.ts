import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import {v4 as uuidv4} from 'uuid'
@Injectable()
export class TaskService {
    tasks:ITask[] = []
    create(taskDTO:TaskDTO):ITask{
        
        const task={
            id:uuidv4(),
            ...taskDTO
        }
        this.tasks.push(task)
    return  task
    }
    getAll():ITask[]{
        return this.tasks
    }

    getById(id:string):ITask{
        const task=this.tasks.find(e=>e.id===id)
        return task
    }
} 