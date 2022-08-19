var itemList = [ {name : 'apples', qty : 10},{name : 'pears', qty : 37}, {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
import assert from "assert";
import findItemsOver20 from "../bootcamp/findItemsOver20.js";

describe('findItemsOver20', () =>{
    it("should return an array of items with qty over 20", () => {
        assert(findItemsOver20(itemList,20));
    })
})
