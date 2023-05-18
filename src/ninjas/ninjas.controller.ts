import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NinjaDto, NinjasService, weapon } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly service: NinjasService) { }

    @Get()
    getNinjas(@Query('weapon') weapon: weapon) {
        return this.service.getNinjas(weapon)
    }

    @Get(':id')
    getNinja(@Param('id') id: string) {
        return this.service.get(+id)
    }

    @Post()
    create(@Body() dto: NinjaDto) {
        return this.service.create(dto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: NinjaDto) {
        return this.service.update(+id, dto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.remove(+id)
    }
}
