import * as React from 'react';
import { PopoverProps } from '../Popover';
import { MenuListProps } from '../MenuList';
import { PaperProps } from '../Paper';
import { StandardProps } from '..';
import { TransitionHandlerProps, TransitionProps } from '../transitions/transition';

export interface MenuProps
  extends StandardProps<PopoverProps & Partial<TransitionHandlerProps>, MenuClassKey> {
  autoFocus?: boolean;
  disableAutoFocusItem?: boolean;
  MenuListProps?: Partial<MenuListProps>;
  PaperProps?: Partial<PaperProps>;
  PopoverClasses?: PopoverProps['classes'];
  transitionDuration?: TransitionProps['timeout'] | 'auto';
  variant?: 'menu' | 'selectedMenu';
}

export type MenuClassKey = 'paper' | 'list';

/**
 *
 * Demos:
 *
 * - [App Bar](https://material-ui.com/components/app-bar/)
 * - [Menus](https://material-ui.com/components/menus/)
 *
 * API:
 *
 * - [Menu API](https://material-ui.com/api/menu/)
 * - inherits [Popover API](https://material-ui.com/api/popover/)
 */
declare const Menu: React.ComponentType<MenuProps>;

export default Menu;
