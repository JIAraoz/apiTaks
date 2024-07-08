import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
    @Get()
    method(@Body() body:any){
        return {body}
    }
    @Post(':id/:name')
    method2(@Param() params:any){
        return {params}
    }
    @Post('post')
    method3(@Query() querys:any){
        return {querys}
    }
}
