import { Injectable } from '@nestjs/common';

export type weapon = 'katana' | 'naginata' | 'kusarigama' | 'bo'

export interface Ninja extends NinjaDto {
    id: number
}

export interface NinjaDto {
    weapon: weapon,
    name: string
}



@Injectable()
export class NinjasService {
    private ninjas: Ninja[] = [
        { id: 0, weapon: 'katana', name: 'tengu' },
        { id: 1, weapon: 'naginata', name: 'yamabusi' },
        { id: 2, weapon: 'kusarigama', name: 'sinobi' }]

    getNinjas(weapon?: weapon) {
        if (weapon)
            return this.ninjas.filter((n) => n.weapon == weapon)
        else
            return this.ninjas

    }

    get(id: number) {
        const ninja = this.ninjas.find((n) => n.id == id)
        if (ninja) {
            return ninja
        }
        else {
            throw new Error(`not found ninja with id ${id}`)
        }
    }

    create(n: NinjaDto) {
        const ninja: Ninja = { id: this.ninjas.length, ...n }
        this.ninjas.push(ninja)
        return ninja
    }

    update(id: number, update: NinjaDto) {
        this.ninjas = this.ninjas.map((n) => {
            if (n.id === id) {
                return { ...n, update }
            }
            return n
        })

        return this.get(id)
    }

    remove(id: number) {
        this.ninjas = this.ninjas.filter((n) => n.id !== id)
        return id
    }
}
