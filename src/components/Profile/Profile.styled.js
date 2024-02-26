import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  width: 300px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;
export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const Name = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #9d9d9d;
`;
export const Location = styled.p`
  margin: 0;
  font-size: 18px;
  color: #9d9d9d;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #616161;
  border: 1px solid #a9a9a9;
  background-color: rgb(209 215 221);
  padding: 15px;
  width: 100%;
  gap: 10px;
`;
export const ItemLabel = styled.span`
  font-size: 12px;
`;
export const ItemQuantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #393838;
`;
