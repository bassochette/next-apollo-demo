import { FunctionComponent } from "react";

export interface AddressProps {
  address: string;
}

export const Address: FunctionComponent<AddressProps> = ({ address }) => {
  const splittedOnNewLine = address.split("\n");
  console.log(address, splittedOnNewLine);
  return (
    <div>
      {splittedOnNewLine.map((l) => (
        <div>{l}</div>
      ))}
    </div>
  );
};
