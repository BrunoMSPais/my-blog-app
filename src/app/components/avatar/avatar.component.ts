import { Component, Input, signal } from '@angular/core';
import { User } from '../../../types/user';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() user = signal<User | undefined>(undefined);
}
