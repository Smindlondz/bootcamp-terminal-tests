import assert from "assert";
import countAllPaarl from "../bootcamp/countAllPaarl.js";

describe('countAllPaarl', () =>{
    it("should return a number of registration numbers from 'paarl'", () => {
        assert(countAllPaarl("CJ 124,CY 567,CL 345, CF 456, CL 341","CF"));
    })
})



