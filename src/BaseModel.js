class BaseModel {
  createField(defaultValue, group, label, type) {
    return {
      defaultValue: defaultValue,
      label: label,
      group: group,
      type: type.label(label),
      value: defaultValue
    }
  }

  setValue(field, value) {
    if (value !== null) field.value = value
    return field.value
  }

  getObject(data) {
    const dataObject = {}
    for (const key in this) {
      dataObject[key] = this.setValue(this[key], data[key])
    }
    return dataObject
  }

  getSchema() {
    const schema = {}
    for (const key in this) {
      schema[key] = this[key].type
    }
    return schema
  }

  getDefaultData() {
    const dataObject = {}
    for (const key in this) {
      dataObject[key] = this[key].defaultValue
    }
    return dataObject
  }
}

export default BaseModel
