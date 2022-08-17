import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  confirmButton: string = 'Yes';
  constructor(
    @Inject(MAT_DIALOG_DATA) public deleteData: any,
    private api: ApiService,
    private confirmRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit(): void {}
  deleteProduct(id: number) {
    this.api.deleteProduct(id).subscribe({
      next: (res) => {
        alert('Product DELETED successful!!!');
        this.confirmRef.close('yes');
      },
      error: () => {
        alert('Error deleting...');
      },
    });
  }
}
