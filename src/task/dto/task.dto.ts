import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class TaskDTO{
    @IsString()
    @IsNotEmpty()
    readonly description:string;
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone:boolean;
}