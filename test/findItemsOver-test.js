
var itemList = [ {name : 'apples', qty : 10},{name : 'pears', qty : 37}, {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

import assert from "assert";
import findItemsOver from "../bootcamp/findItemsOver.js";

describe('findItemsOver', () =>{
    it("should return an array of items with qty over a specific threshold", () => {
        assert(findItemsOver(itemList,20));
    })
})
