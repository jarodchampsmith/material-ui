import * as React from 'react';
import { StyledComponent, PropTypes } from '..';
import { Style, TextStyle } from '../styles/createTypography';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  align?: PropTypes.Alignment;
  component?: React.ReactType;
  color?: PropTypes.Color | 'secondary' | 'error';
  gutterBottom?: boolean;
  headlineMapping?: { [type in TextStyle]: string };
  noWrap?: boolean;
  paragraph?: boolean;
  type?: Style | 'caption' | 'button';
}

declare const Typography: StyledComponent<TypographyProps>;

export default Typography;