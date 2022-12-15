export class Fabric {
    id: number
    image: File
    material: string
    yardsFab: number
    location: string

    constructor (id: number, image: File, material: string, yardsFab: number, location: string)
    {
        this.id = id
        this.image = image
        this.material = material
        this.yardsFab = yardsFab
        this.location = location
    }
}