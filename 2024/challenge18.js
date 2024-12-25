/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    const contacts = []
    agenda.split('\n').forEach(contact => {
      const name = contact.split('<')[1].trim().split('>')[0]
      const $phone = '+' + contact.split('+')[1].slice(0, 14).trim()
      const address = contact.replace(`<${name}>`,'').replace($phone,'').trim()
      if($phone.includes(phone)){
        contacts.push({ name, address })
      }
    })
    if(contacts.length !== 1) {	
      return null
    }
    return contacts[0]
}
    