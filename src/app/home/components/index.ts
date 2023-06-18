
import { MenuComponent } from "./menu/menu.component";
import { ShellComponent } from "./shell/shell.component";
import { WelcomeComponent } from "./welcome/welcome.component";



export const components = [
  ShellComponent,
  WelcomeComponent,
  MenuComponent
];

export * from './welcome/welcome.component';
export * from './shell/shell.component';
export * from './menu/menu.component';