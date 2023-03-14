import styled from 'styled-components/macro';
import { BaseButton } from '../button';

interface DropDownButtonProps {
  isOpen: boolean;
}

export const DropDownButton = styled<DropDownButtonProps>(BaseButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  width: 230px;
  height: 64px;
  border-radius: 6px;
  color: #f9f9f9;
  background-color: ${(p) => p.isOpen ?  '#0a82d5': '#252525'};
  border: 0;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  z-index: 2;
  transition: 0.3s;

  :hover {
    background-color: #3a3a3a;
  }
`
export const StyledDropdown = styled.div`
  position: relative;
`

export const Title = styled.p`
`;

interface IconProps {
  marginLeft?: string | number;
}

export const StyledIcon = styled.img<IconProps>`
  margin-left: ${(p) => p.marginLeft ? `${p.marginLeft}` : 0};
`;

type ChevronDirectionType = 'up' | 'down' |'right' | 'left';

interface ChevronProps {
  direction: ChevronDirectionType;
}

export const StyledChevron = styled(StyledIcon)<ChevronProps>`
  width: 16px; 
  height: 16px;
  margin-left: auto;
   ${(p) =>
   (p.direction === 'up' &&
   'rotate: 90deg') || 
   (p.direction === 'right' &&  
   'rotate: -90deg') ||
   (p.direction === 'left' &&  
   `rotate: 90deg`) ||
   (p.direction === 'down' &&  
   `rotate: 0`)
};
`;

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.div<MenuProps>`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 72px;
  left: 0;
  width: 100%;
  height: 230px;
  opacity: ${(p) => p.isOpen ? 1 : 0};
  visibility:${(p) => p.isOpen ? 'visible' : 'hidden'}; 
  border-radius: 6px;
  border-top: 0;
  background-color: #3e3e3e;
  translate: ${(p) => p.isOpen ? 0 : `${0 - 20}px`};
  transition: 0.4s;
`;

interface InnerMenuProps {
  open: boolean;
};

export const InnerMenu = styled.div<InnerMenuProps>`
  position: absolute;
  width: 460px;
  display: flex;
  transition: 0.3s;
  translate: ${(p) => p.open ? '-50%' : ''};
`;

export const MainMenu = styled.div`
  width: 230px;
`;

export const MenuButton = styled(BaseButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: 0;
  width: 100%;
  height: 56px;
  border-radius: 0;

  :hover {
    background-color: #383838;
  }
`

interface SubMenuProps {
  isSubMenuOpen: boolean;
}

export const SubMenu = styled.div<SubMenuProps>`
  display: ${(p) => p.isSubMenuOpen ? 'block' : 'none'};
  width: 230px;
`;