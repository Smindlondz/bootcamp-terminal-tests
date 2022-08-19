import assert from "assert";
import countAllFromTown from "../bootcamp/countAllFromTown.js";

describe('countAllFromTown', () =>{
    it("should return a number of registration numbers from 'town'", () => {
        assert(countAllFromTown("CJ 124,CY 567,CL 345, CF 456, CL 341","CF"));
    })
})
