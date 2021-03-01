class BaseModel {
  createField(defaultValue, group, label, type) {
    return {
      defaultValue: defaultValue,
      label: label,
      group: group,
      type: type.label(label),
      value: defaultValue,
    };
  }

  setValue(field, value) {
    if (value !== null) field.value = value;
    return field.value;
  }

  getObject(data) {
    const data_object = {};
    for (let key in this) {
      data_object[key] = this.setValue(this[key], data[key]);
    }
    return data_object;
  }

  getSchema() {
    const schema = {};
    for (let key in this) {
      schema[key] = this[key].type;
    }
    return schema;
  }

  getDefaultData() {
    const data_object = {};
    for (let key in this) {
      data_object[key] = this[key].defaultValue;
    }
    return data_object;
  }
}

export default BaseModel;
