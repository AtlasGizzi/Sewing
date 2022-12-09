export class Fabric {
    id: number
    color: string
    material: string
    yardsFab: number
    location: string

    constructor (id: number, color: string, material: string, yardsFab: number, location: string)
    {
        this.id = id
        this.color = color
        this.material = material
        this.yardsFab = yardsFab
        this.location = location
    }
}