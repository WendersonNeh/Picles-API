import { shelter } from "../schemas/shelter.schemas";

export default interface IShelterRepository{
    get(): Promise<shelter>;
}