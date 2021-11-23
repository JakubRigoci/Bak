export const format = (date) => {
    const data = date.split('-')
    var dd = data[2]
    var mm = data[1]
    var yyyy = data[0]

    return `${dd}-${mm}-${yyyy}`
}