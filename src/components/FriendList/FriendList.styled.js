import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 250px;
  border-radius: 4px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  display: block;
`;
export const Name = styled.p`
  font-size: 20px;
`;
