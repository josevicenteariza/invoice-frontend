import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user_service/user-service';
import { User } from '../../model/interface_user';

@Component({
  selector: 'app-logger',
  imports: [FormsModule],
  templateUrl: './logger.html',
  styleUrl: './logger.css',
  standalone: true
})

export class Logger {
  mail = model<String>()
  passwd = model<String>()
  userService = inject(UserService)

  login() {
    let user = this.userService.validate(this.mail() as string, this.passwd() as string) as User
    console.debug(user)
    if(Object.keys(user).length==0){
      console.log("usuari no vàlid")
    }else{
      console.log("Usuari valid")
    }

    /*user={id:3, mail:'user3@gmail.com', passwd:'user3', name:'user3', surname:'surname3'}
    this.userService.addUser(user)
    console.log(this.userService.users)
    */
  }

}
