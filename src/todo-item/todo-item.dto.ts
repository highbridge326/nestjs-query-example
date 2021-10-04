import {
  FilterableField,
  IDField,
  UnPagedRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
import { SubTaskDTO } from '../sub-task/sub-task.dto';

@ObjectType('TodoItem')
@UnPagedRelation('subTasks', () => SubTaskDTO, { disableRemove: true })
export class TodoItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  title!: string;

  @FilterableField()
  completed!: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}
