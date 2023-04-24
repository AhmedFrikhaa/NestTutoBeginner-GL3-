import { IsOptional } from "class-validator";

export class PaginatedDto {

  @IsOptional()
  limit: number;

  @IsOptional()
  offset: number;

}
