import React, {useState} from 'react'
import { StyledDropdown, Title, StyledIcon, Menu, InnerMenu, MainMenu, SubMenu, DropDownButton, MenuButton, StyledChevron } from './style';
import chevron from '../../assets/icons/chevronDown.svg';

interface BaseDropdownProps {
  toggleDropdown: () => void;
  icon?: string;
  isOpen: boolean;
  mainMenu?:string[];
  subMenu?: string[];
};

export const BaseDropdown = (props : BaseDropdownProps) => {
  const {toggleDropdown, icon, isOpen, mainMenu, subMenu} = props;
  const [open, setOpen] = useState<boolean>(false);

  console.log(isOpen);

  return (
    <StyledDropdown>
      <DropDownButton  onClick={toggleDropdown} isOpen={isOpen} >
        <>
        <StyledIcon src={icon}/>
        <Title>David Jonsson</Title>
        <StyledChevron src={chevron} />
        </>
        </DropDownButton>
        <Menu isOpen={isOpen}>
          <InnerMenu open={open}>
            <MainMenu>
              { mainMenu.map((label, index) =>( 
                <MenuButton key={index} onClick={() => setOpen(!open)}>
                  <>
                    <StyledIcon src={icon}/>
                    <Title>{label}</Title>
                    <StyledChevron src={chevron} direction='right'/>
                   </>
                 </MenuButton>
              ))}
            </MainMenu>
            
            <SubMenu isSubMenuOpen={open}>
              {subMenu?.map((subLabel, index) => (
                 <MenuButton onClick={() => setOpen(!open)}>
                 <>
                 <StyledIcon src={icon}/>
                 <Title>{subLabel}</Title>
                 <StyledChevron src={chevron} direction='left'/>
                  </>
                 </MenuButton>
              ))}
            </SubMenu>
            
          </InnerMenu>
        </Menu>
    </StyledDropdown>
  )
}
