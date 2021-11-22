import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.page.html',
  styleUrls: ['./new-bet.page.scss'],
})
export class NewBetPage implements OnInit {
  myForm: FormGroup;
  loading = false;
  success = false;
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      description: '',
      createdBy: '',
      createdAt: '',
      optionOneName: '',
      optionTwoName: '',
      settled: false,
      state: {
        numberOfParticipants: 0,
        optionOne: {
          optionOneSupportersAmount: 0,
          optionOneSupporters: [],
        },
        optionTwo: {
          optionTwoSupportersAmount: 0,
          optionTwoSupporters: [],
        },
      },
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

  async submitHandler() {
    this.loading = true;

    this.myForm.patchValue({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('bets').add(formValue);
      this.success = true;
    } catch (err) {
      console.log(err);
    }

    this.loading = false;
  }
}
