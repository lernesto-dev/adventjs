function organizeShoes(shoes) {
    const shoesAvailable = []
    const shoesInStock = {}
    const types = {
      R: 'I',
      I: 'R'
    }
    let idO = ''
    let id = ''
    shoes.forEach(shoe => {
      idO = `${shoe.size}${types[shoe.type]}`
      
      if(shoesInStock[idO] > 0) {
        shoesAvailable.push(shoe.size)
        shoesInStock[idO]--
      }else {
        id = `${shoe.size}${shoe.type}`
        shoesInStock[id] = (shoesInStock[id] || 0) + 1
      }
    })
    return shoesAvailable
}