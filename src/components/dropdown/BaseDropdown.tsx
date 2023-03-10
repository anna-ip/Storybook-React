import React, {useState} from 'react'
import { StyledDropdown, Title, Icon, Menu, InnerMenu, MainMenu, SubMenu, DropDownButton, MenuButton, Chevron } from './style';
import chevron from '../../assets/icons/chevronDown.svg';

interface BaseDropdownProps {
  toggleDropdown: () => void;
  icon?: string;
  isOpen: boolean;
};

export const BaseDropdown = (props : BaseDropdownProps) => {
  const {toggleDropdown, icon, isOpen} = props;
  const [open, setOpen] = useState<boolean>(false);

  console.log(isOpen);

  return (
    <StyledDropdown>
      <DropDownButton  onClick={toggleDropdown} isOpen={isOpen} >
        <>
        <Icon src={icon}/>
        <Title>David Jonsson</Title>
        <Chevron src={chevron} />
        </>
        </DropDownButton>
        <Menu isOpen={isOpen}>
          <InnerMenu open={open}>
            <MainMenu>
              {/* Map menu buttons */}
              <MenuButton onClick={() => setOpen(!open)}>
              <>
              <Icon src={icon}/>
              <Title>Alan</Title>
              <Chevron src={chevron} direction='right'/>
              </>
              </MenuButton>
            </MainMenu>
            <SubMenu isSubMenuOpen={open}>
            <MenuButton onClick={() => setOpen(!open)}>
              <>
              <Icon src={icon}/>
              <Title>Jane</Title>
              <Chevron src={chevron} direction='left'/>
               </>
              </MenuButton>
            </SubMenu>

          </InnerMenu>
        </Menu>
    </StyledDropdown>
  )
}
