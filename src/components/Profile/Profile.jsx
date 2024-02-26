import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  ListItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

const options = {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>&#x40;{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <ListItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>
            {stats.followers.toLocaleString('en-US', options)}
          </ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>
            {stats.views.toLocaleString('en-US', options)}
          </ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>
            {stats.likes.toLocaleString('en-US', options)}
          </ItemQuantity>
        </ListItem>
      </List>
    </Container>
  );
};
