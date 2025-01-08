import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}


  create(createTaskDto: CreateTaskDto):Promise<TaskEntity> {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  findAll():Promise<TaskEntity[]> {
    const tasksList = this.taskRepository.find();
    return tasksList;
  }

  findOne(id: number):Promise<TaskEntity> {
    const task = this.taskRepository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {

    this.taskRepository.update(id, updateTaskDto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<any> {
    await this.findOne(id);

    const task = this.taskRepository.delete(id);

    return task;

  }
}
