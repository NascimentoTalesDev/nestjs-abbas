import { validate as uuidValidate } from "uuid"
import { Entity } from "../../entity";

type stubProps = {
  prop1: string,
  prop2: number,
}

class StubEntity extends Entity<stubProps>{}

describe("Entity unit tests",  () => {
  const props = { prop1: 'value1', prop2: 15 }
  const id = "f50cc847-eb09-416e-b7ea-2557e64ec81e"

  it('Should set props and id', () => {
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  });

  it('Should accept a valid id', () => {
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toEqual(id)
  });

  it('Should convert a entity to JavaScript Object', () => {
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    })
  });


})
