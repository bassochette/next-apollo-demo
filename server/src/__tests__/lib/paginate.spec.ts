import { contactsData } from "../contacts.data";
import { paginate } from "../../lib/paginate";

describe("lib/paginate", () => {
  it("should returned the selected page", () => {
    const page0 = paginate(contactsData, 0, 20);
    expect(page0.contacts[0]).toEqual(contactsData[0]);
    expect(page0.contacts[19]).toEqual(contactsData[19]);

    const page10 = paginate(contactsData, 10, 20);
    expect(page10.contacts[0]).toEqual(contactsData[20 * 10 - 1]);
    expect(page10.contacts[19]).toEqual(contactsData[20 * 10 - 1 + 20]);
  });
  it("default page size is 20", () => {
    const page = paginate(contactsData, 0);
    expect(page.contacts.length).toEqual(20);
  });
});
