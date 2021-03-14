import { BaseModel } from '.';

class TestModel extends BaseModel {
  constructor(data) {
    super();
    this.createField(this, 'name', 'Name', null, null);
    if (data) {
      this.mapToObject(data);
    }
  }
}

describe('Base Model Test', () => {
  it('setting field', () => {
    const testModel = new TestModel();
    testModel.name = 'testName';
    expect(testModel.name).toBe('testName');
  });
  it('create object from data', () => {
    const data = { name: 'Test name' };
    const testModel = new TestModel(data);
    expect(testModel.name).toBe(data.name);
  });
});
