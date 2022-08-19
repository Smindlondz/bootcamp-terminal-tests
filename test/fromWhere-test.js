import assert from "assert";
import fromWhere from "../bootcamp/fromWhere.js";

describe('fromWhere', () =>{
    it("should return a name of a towt when Reg key is passed in as a parameter", () => {
        assert(fromWhere('CA'));
    })
})
