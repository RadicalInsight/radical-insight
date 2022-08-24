import {
  IsEnum,
  IsISO8601,
  IsInt,
  IsMongoId,
  IsOptional,
  Max,
  MaxLength,
  Min,
} from "class-validator";

export enum EventTrackMethod {
  "WEB",
  "EMAIL",
  "SMS",
  "OTHER",
}
export enum EventType {
  "MOOD",
  "ENERGY",
  "OTHER",
}

export class BaseEvent {
  @IsMongoId()
  user: string;

  @IsISO8601()
  timestamp: string;

  @IsInt()
  @Min(1)
  @Max(10)
  value: number;

  @IsEnum(EventType)
  type: EventType;

  @IsEnum(EventTrackMethod)
  trackMethod: EventTrackMethod;

  @IsOptional()
  @MaxLength(250)
  note: string;

  @IsISO8601()
  createdOn: string;

  @IsISO8601()
  lastModifiedOn: string;
}
