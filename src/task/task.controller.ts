import { Body, Controller, Get, Param, Post, Query, Req , Put} from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';
import { ITask } from './task.interface';

@Controller('api/v1/task')
export class TaskController {
    constructor(private readonly taskService:TaskService){}
    
    @Get()
    getAll(){
        return this.taskService.getAll()
    }
    @Get(":id")
    getById(@Param('id') id:string){

        return this.taskService.getById(id)
    }
   
    @Post()
    create(@Body() taskDTO:TaskDTO){
        return this.taskService.create(taskDTO)
    }
    @Put(":id")
    update(@Param("id") id:string,@Body() TaskDTO:TaskDTO):ITask{
        return this.taskService.update(id , TaskDTO)
    }
  
}
