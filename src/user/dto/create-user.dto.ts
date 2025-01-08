import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: 'user@example.com',
    })
    email: string;

    @ApiProperty({
        default: 'User password',
    })
    password: string;
}
