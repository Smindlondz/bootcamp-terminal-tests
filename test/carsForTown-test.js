
import assert from "assert";
import carsForTown from "../bootcamp/carsForTown.js";

describe('carsForTown', () =>{
    it("should return an object containing cars from 'paarl'", () => {
        assert(carsForTown('Paarl'));
    })
})

