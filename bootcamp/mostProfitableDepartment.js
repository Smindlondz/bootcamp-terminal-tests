export default function mostProfitableDepartment(salesData) {
    const profitDepMap = {};
    for (let i = 0; i < salesData.length; i++) {
        var listItem = salesData[i];
        profitDepMap[listItem.department] = 0
    }
    for (let i = 0; i < salesData.length; i++) {
        var listItem = salesData[i];
        var currentDepTotal = profitDepMap[listItem.department]
        currentDepTotal += listItem.sales
        profitDepMap[listItem.department] = currentDepTotal
    }
    var currentMaxsales = 0; var currentDepartment = '';
    for (const dep in profitDepMap) {
        const currentDepSales = profitDepMap[dep]

        if (currentDepSales > currentMaxsales) {
            currentMaxsales = currentDepSales
            currentDepartment = dep
        }
    }
    return currentDepartment
}