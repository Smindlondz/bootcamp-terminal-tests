import assert from "assert";
import isFromBellville from "../bootcamp/isFromBellville.js";

describe('isFromBellville', () =>{
    it("should return true when registration number is from Bellvile otherwise false", () => {
        assert(isFromBellville('CY 123'));
    })
})
