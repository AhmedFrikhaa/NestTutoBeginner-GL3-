import { Optional } from '@nestjs/common';

export class UpdateDto {
  @Optional()
  name: string;
  @Optional()
  description: string;
  @Optional()
  status: string;
}
