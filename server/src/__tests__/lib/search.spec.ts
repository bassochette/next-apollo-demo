import { contactsData } from "../contacts.data";
import { search } from "../../lib/search";

describe("lib/search", () => {
  it("match snapshot", () => {
    const result = search(contactsData, "ma");
    expect(JSON.stringify(result)).toMatchSnapshot();
  });
});
