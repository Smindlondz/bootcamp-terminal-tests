import assert from "assert";
import transportFee from "../bootcamp/transportFee.js";

describe('transportFee', () =>{
    it("should return the amount of transport fee for a given shift", () => {
        assert(transportFee('nightshift'));
    })
})

