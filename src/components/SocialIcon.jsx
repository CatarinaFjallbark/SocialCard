import React from 'react';
import styled from 'styled-components';
import share from '../resourses/share.png';
import mail from '../resourses/mail.png';
import thumb from '../resourses/thumb.png';
import comment from '../resourses/comment.png';

const IconStyleRow = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    padding: 10px;
`;
const IconStyle = styled.span`
    font-size: 1.1em;
    padding-left: 5px;
    padding-right: 25px;
`;

const SocialIcon = ({
  comments, incrementSHARES, shares, increment, thumbs, incrementCOMMENTS,
}) => (
  <IconStyleRow>
    <div />
    <div>
      <img className="imageButtonStyle" src={comment} alt="comment" onClick={incrementCOMMENTS} />
      <IconStyle>{comments}</IconStyle>
      <img className="imageButtonStyle" src={share} alt="share" onClick={incrementSHARES} />
      <IconStyle>{shares}</IconStyle>
      <img className="imageButtonStyle" src={thumb} alt="thumb" onClick={increment} />
      <IconStyle>{thumbs}</IconStyle>
      <img className="imageButtonStyle" src={mail} alt="mail" />
    </div>
  </IconStyleRow>
);

export default SocialIcon;
