import {
  Title,
  Section,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { getTextColor, setBgColor } from '../helper.js';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          const statBgColor = setBgColor();
          return (
            <ListItem
              key={id}
              style={{
                backgroundColor: `#${statBgColor}`,
              }}
            >
              <Label style={{ color: `${getTextColor(statBgColor)}` }}>
                {label}
              </Label>
              <Percentage style={{ color: `${getTextColor(statBgColor)}` }}>
                {percentage}
              </Percentage>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};
