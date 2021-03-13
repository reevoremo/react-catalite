class BaseModelField {
  constructor(label, value, type, defaultValue) {
    this._value = value
    this._label = label
    this._type = type
    this._defaultValue = defaultValue
  }

  get value() {
    return this._value
  }

  set value(data) {
     this._value = data
  }

  get label() {
    return this._label
  }
}

export default BaseModelField
