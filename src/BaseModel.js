import BaseModelField from './BaseModelField';
class BaseModel {
  createField(field, name, label, type, defaultValue) {
    const fieldName = this._generateFieldName(name);
    field[fieldName] = new BaseModelField(
      label,
      defaultValue,
      type,
      defaultValue
    );
    Object.defineProperty(field, name, {
      get() {
        return field[fieldName].value;
      },
      set(data) {
        field[fieldName].value = data;
      }
    });
  }

  _generateFieldName(name) {
    return `_${name}`;
  }

  _restoreFieldName(name) {
    return name.substring(1);
  }

  getFieldsType() {
    const fieldsType = {};
    for (const key in this) {
      fieldsType[key] = this[key].type;
    }
    return fieldsType;
  }

  mapToObject(data) {
    for (const key in this) {
      this[key].value = data[this._restoreFieldName(key)];
    }
  }
}

export default BaseModel;
