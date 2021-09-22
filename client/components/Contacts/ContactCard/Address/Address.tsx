import { FunctionComponent } from "react";

export interface AddressProps {
  address: string;
}

export const Address: FunctionComponent<AddressProps> = ({ address }) => {
  const splittedOnNewLine = address.split("\n");
  return (
    <div>
      {splittedOnNewLine.map((l) => (
        <div>{l}</div>
      ))}
    </div>
  );
};
