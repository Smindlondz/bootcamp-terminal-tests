export default function findItemsOver20(itemList) {
  var results = [];
  for (var i = 0; i < itemList.length; i++) {
    var listItem = itemList[i];
    if (listItem.qty > 20) {
      results.push(listItem)
    }
  }
  return results;
}