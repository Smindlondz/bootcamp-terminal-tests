import assert from "assert";
import greet from "../bootcamp/greet.js";


describe('greet', () => {
    it("should return 'Hello, Mandla' when Mandla is passed as parameter", () => {
        assert(greet("Mandla"));
    })
})