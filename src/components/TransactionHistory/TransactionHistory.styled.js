import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  tbody tr:nth-child(even) {
    background-color: #d2e7ee;
  }
`;

export const Th = styled.th`
  font-size: 16px;
  background-color: #96dcdf;
  text-transform: uppercase;
  padding: 10px;
`;
export const Tr = styled.tr`
  background-color: #ffffff;
`;
export const Td = styled.td`
  text-align: center;
  font-size: 14px;
  padding: 5px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
