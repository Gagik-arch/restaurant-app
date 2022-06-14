export {}
export const generateAddress = (address) => {
    address = address.split('|')
    return `
<h3>${address[1]}</h3>
<b>${address[0]}</b>
`
}
