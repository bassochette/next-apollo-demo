import casual from "casual";
import { Contact } from "./contact.interface";

casual.define("contact", (): Contact => {
  return {
    name: casual.full_name,
    phone: casual.phone,
    email: casual.email,
    address: `${casual.address}
${casual.zip(3)} ${casual.city}
${casual.country}`,
  };
});

const data: Contact[] = [];
for (let i = 0; i < 2000; i++) {
  data.push(casual["contact"]);
}

export const contacts = data;
