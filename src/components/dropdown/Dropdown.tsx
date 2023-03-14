import React from 'react';
import video from '../../assets/icons/video.svg';
import search from '../../assets/icons/search.svg';
import { Button } from '../button/BaseButton';
import { Input } from '../input/Input';
import './Dropdown.css';

interface DropDownProps {
  icon?: string;
  placeholder?: string;
}

export const Dropdown = (props: DropDownProps) => {
  const { icon, placeholder } = props;
  return (
    <div className='dropdown'>
      <Input
        type='text'
        placeholder={placeholder ? { placeholder } : 'Try anything...'}
        variant='small'
        src={icon ? { icon } : `${search}`}
        iconAlt='Magnifier'
        className='dropdown-input'
      />
      <div className='menu'>
        <div className='menu-content'>
          <Button onClick={() => console.log('Send me to this link')}>
            <img src={`${video}`} alt='Video' />
            <span>Video</span>
            <span>1920 / 1080 px</span>
          </Button>
          <Button onClick={() => console.log('Send me to this link')}>
            <img src={`${video}`} alt='Video' />
            <span>Video</span>
            <span>1920 / 1080 px</span>
          </Button>
          <Button onClick={() => console.log('Send me to this link')}>
            <img src={`${video}`} alt='Video' />
            <span>Video</span>
            <span>1920 / 1080 px</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
