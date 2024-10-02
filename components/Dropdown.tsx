import { StyleSheet, Text, View } from 'react-native';
import * as DropdownMenu from 'zeego/dropdown-menu';

type DropdownProps = {
  // trigger: React.ReactElement;
  trigger: any;
};

const listData = [
  {
    title: 'Statement',
    key: 'statement',
    icon: 'list.bullet.rectangle.fill',
  },
  {
    title: 'Converter',
    key: 'converter',
    icon: 'coloncurrencysign.arrow.circlepath',
  },
  {
    title: 'Background',
    key: 'background',
    icon: 'photo.fill',
  },
  {
    title: 'Add new account',
    key: 'account',
    icon: 'plus.rectangle.on.folder.fill',
  },
];

const Dropdown = ({ trigger }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Content
        side='bottom'
        align='center'
        sideOffset={0}
        avoidCollisions={true}
        collisionPadding={0}
        alignOffset={0}
        loop={false}
      >
        <DropdownMenu.Item key='statement'>
          <DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: 'list.bullet.reactangle.fill',
              pointSize: 24,
            }}
          ></DropdownMenu.ItemIcon>
        </DropdownMenu.Item>
        {/* {listData.map((item) => (
          <DropdownMenu.Item key={item.key}>
            <DropdownMenu.ItemTitle>{item.title}</DropdownMenu.ItemTitle>
            <DropdownMenu.ItemIcon
              ios={{
                name: item.icon,
                pointSize: 24,
              }}
            ></DropdownMenu.ItemIcon>
          </DropdownMenu.Item>
        ))} */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
