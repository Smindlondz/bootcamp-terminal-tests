import assert from "assert";
import yearsAgo from "../bootcamp/yearsAgo.js";

describe('yearsAgo', () =>{
    it("should count and return  number of years ago from the current year", () => {
        assert(yearsAgo(1993));
    })
})