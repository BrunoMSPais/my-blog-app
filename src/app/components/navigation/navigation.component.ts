import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { User } from '../../../types/user';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [AvatarComponent, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  user: WritableSignal<User | undefined> = signal<User | undefined>(undefined);

  public url: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }
}
