import React from "react";
import search from '../../../assets/icons/search.svg' 
import video from '../../../assets/icons/video.svg'
import Button from '../button/Button';
import Input from '../input/Input';
import "./Dropdown.css";

const Dropdown = (props) => {
  const { children, ...rest } = props;
  return (
    <div className='dropdown'>
      <Input type='text' placeholder='Try anything...' variant='medium' src={search} srcAlt='Magnifier' className='input' />
      <div className='menu'>
        <div className='menu-content'>
          <Button>
            <img src={video} alt={`${video}`}/>
            <span>
              Video
            </span>
            <span>1920 / 1080 px</span>
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Dropdown;