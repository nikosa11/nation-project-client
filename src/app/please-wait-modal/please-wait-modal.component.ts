import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-please-wait-modal',
  templateUrl: './please-wait-modal.component.html',
  styleUrl: './please-wait-modal.component.css'
})
export class PleaseWaitModalComponent {

  constructor(
    public dialogRef: MatDialogRef<PleaseWaitModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    
  }
}
