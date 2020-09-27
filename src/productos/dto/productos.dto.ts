import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
  IsIn,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  NameProduct: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Bebidas', 'Limpieza','Botanas','Cremeria'])
  Category: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(450)
  Description: string;

  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  ProductQuantity: number;

  @IsBoolean()
  @IsNotEmpty()
  Status: boolean;
}
