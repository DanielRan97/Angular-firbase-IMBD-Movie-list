import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NbThemeModule,NbLayoutModule, NbSidebarModule, NbButtonModule, 
  NbMenuModule, NbCardModule, NbInputModule, NbSelectModule, NbAlertModule, NbDialogModule} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

const nebular =[
  NbThemeModule.forRoot({ name: 'default' }),
  NbLayoutModule,
  NbEvaIconsModule,
  NbSidebarModule.forRoot(),
  NbButtonModule,
  NbMenuModule.forRoot(),
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbAlertModule,
  NbCardModule

  
]

@NgModule({
  declarations: [],
  imports: [CommonModule,nebular],
  exports:[nebular]
})
export class NebularModule { }