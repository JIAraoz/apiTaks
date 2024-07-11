import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
   /*  @Get()
    method(@Body() body:any){
        return {body}
    } */
    constructor(private readonly taskService:TaskService){}
    @Post()
    create(@Body() taskDTO:TaskDTO){
        return this.taskService.create(taskDTO)
    }
}
