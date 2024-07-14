import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
    constructor(private readonly taskService:TaskService){}
    @Get("/getById/:id")
    getById(@Param() params:any){

        return this.taskService.getById(params.id)
    }
    @Get()
    getAll(){
        return this.taskService.getAll()
    }
    @Post()
    create(@Body() taskDTO:TaskDTO){
        return this.taskService.create(taskDTO)
    }
   
}
