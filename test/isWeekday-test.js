import assert from "assert";
import isWeekday from "../bootcamp/isWeekday.js";

describe('isWeekday', () =>{
    it("should return true if day is weekday otherwise return false", () => {
        assert(isWeekday('Monday'));
    })
})
