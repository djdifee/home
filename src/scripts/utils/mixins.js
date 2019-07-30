import styled, { css } from 'styled-components';
import { shadowColor } from '@utils/colors';

export const shadowDown = long => css`
	${long && `box-shadow: 0 6px 10px 0 ${shadowColor};`}
	${!long && `box-shadow: 0 3px 10px 0 ${shadowColor};`}
`;
export const shadowUp = long => css`
	${long && `box-shadow: 0 -6px 10px 0 ${shadowColor};`}
	${!long && `box-shadow: 0 -3px 10px 0 ${shadowColor};`}
`;
