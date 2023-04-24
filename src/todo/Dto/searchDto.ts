import { IsIn, IsOptional } from "class-validator";
import { errorMessageStatus, TodoStatusEnum } from "../../common/Constants&errorMessages";
import { PaginatedDto } from "./paginationDTO";

export class SearchDto extends PaginatedDto{
  @IsOptional()
  critere : string

  @IsOptional()
  @IsIn([TodoStatusEnum.waiting,TodoStatusEnum.actif,TodoStatusEnum.done],{
    message : errorMessageStatus
  })
  statut : string
}