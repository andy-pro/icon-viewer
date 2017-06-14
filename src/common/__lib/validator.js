const isDecimal = value => /^-?\d*\.?\d+$/.test(value)

export default {

  required: value => Boolean(value),

  isDecimal,

  coordinates: value => {
    value = value.split(',')
    return (value.length === 2) && isDecimal(value[0].trim()) && isDecimal(value[1].trim())
  }

}
