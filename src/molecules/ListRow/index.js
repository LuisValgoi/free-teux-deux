import React from "react";
import { StyledListItem, StyledOrderedList } from "./style";

const ITEMS_TO_FILL_PRIMARY_SECTION = [
  { key: 1, value: 1 },
  { key: 2, value: 2 },
  { key: 3, value: 3 },
  { key: 4, value: 4 },
  { key: 5, value: 5 },
  { key: 6, value: 6 },
  { key: 7, value: 7 },
  { key: 8, value: 8 },
  { key: 9, value: 9 },
  { key: 10, value: 10 },
  { key: 11, value: 11 },
  { key: 12, value: 12 },
  { key: 13, value: 13 },
  { key: 14, value: 14 },
  { key: 15, value: 15 },
  { key: 16, value: 16 },
];

export default function ListRow() {
  return (
    <StyledOrderedList>
      {ITEMS_TO_FILL_PRIMARY_SECTION.map((item) => {
        return <StyledListItem key={item} />;
      })}
    </StyledOrderedList>
  );
}
