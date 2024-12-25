function organizeInventory(inventory) {
    const inventoryMap = {}
    let lastValue = 0
    for (let { category, name, quantity } of inventory) {
        inventoryMap[category] = inventoryMap[category] || {}
        lastValue = (inventoryMap[category][name] || 0)
        inventoryMap[category][name] = quantity + lastValue
    }
    return inventoryMap
}