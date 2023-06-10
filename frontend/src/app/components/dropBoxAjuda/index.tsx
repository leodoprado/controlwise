import React, { useState } from 'react';
import {StyledContent, StyledDropbox, StyledTitle} from './style'

interface DropboxProps {
    title: string;
    content: string;
  }

  const Dropbox: React.FC<DropboxProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <StyledDropbox>
        <StyledTitle onClick={() => setIsOpen(!isOpen)}>{title}</StyledTitle>
        {isOpen && <StyledContent>{content}</StyledContent>}
      </StyledDropbox>
    );
  };

export default Dropbox