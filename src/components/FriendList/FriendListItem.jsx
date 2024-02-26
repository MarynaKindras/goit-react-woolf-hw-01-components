import { ListItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ isOnline: isonline, avatar, name }) => {
  return (
    <ListItem>
      <Status status={isonline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};
