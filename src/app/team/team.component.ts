import { Component, OnInit } from '@angular/core';
import { Mate } from '../services/models';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  showp = false;
  team:Mate[] = [
    {
      Id:1,
      Name:"Иван Номоконов",
      Position:"Генеральный директор",
      Description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum impedit enim repudiandae modi nesciunt, delectus corporis. Cum tenetur qui eum quasi obcaecati voluptatum, assumenda, facilis eveniet eligendi explicabo officiis perferendis incidunt reiciendis repellendus? At laboriosam mollitia magni. Facere voluptates ea eligendi ratione rerum esse enim saepe dolor, obcaecati accusamus temporibus consequuntur a iste reprehenderit vero, architecto earum. Molestiae deserunt mollitia rem dolorum fuga minima, dicta nobis quibusdam odit cumque vitae illum quam suscipit voluptate! Sed cumque officia ut perferendis fuga laborum, totam quibusdam explicabo praesentium, quas perspiciatis inventore esse adipisci odio natus. Optio mollitia ea inventore voluptates nihil. Ut, aut. Tempore molestias iusto aspernatur aperiam tenetur dolorum inventore voluptates, nostrum, atque incidunt cumque cum nesciunt consequuntur voluptatibus quod? Eveniet atque itaque eum necessitatibus, nesciunt voluptatibus voluptas at in. Alias repellat deserunt eos, enim rerum, facilis omnis, tempora ratione sit modi nobis neque dolores. Tempora optio delectus nihil. Atque nostrum odit nihil voluptatum voluptatem corrupti optio aut nobis earum perspiciatis consectetur dicta ullam saepe inventore nulla laboriosam illum cumque, eaque natus, fugiat asperiores in qui nisi. Eaque rem nobis, autem quasi veniam repellendus saepe? Nobis, dolor incidunt impedit qui magnam sunt cupiditate consequuntur illo iure eligendi eum adipisci obcaecati sequi nulla.",
      VK:"https://vk.com/vanikakoma",
      Instagram:"https://www.instagram.com/vanika_koma/" 
    },
    {
      Id:2,
      Name:"Андрей Ледащев",
      Position:"Backend разработчик",
      Description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum impedit enim repudiandae modi nesciunt, delectus corporis. Cum tenetur qui eum quasi obcaecati voluptatum, assumenda, facilis eveniet eligendi explicabo officiis perferendis incidunt reiciendis repellendus? At laboriosam mollitia magni. Facere voluptates ea eligendi ratione rerum esse enim saepe dolor, obcaecati accusamus temporibus consequuntur a iste reprehenderit vero, architecto earum. Molestiae deserunt mollitia rem dolorum fuga minima, dicta nobis quibusdam odit cumque vitae illum quam suscipit voluptate! Sed cumque officia ut perferendis fuga laborum, totam quibusdam explicabo praesentium, quas perspiciatis inventore esse adipisci odio natus. Optio mollitia ea inventore voluptates nihil. Ut, aut. Tempore molestias iusto aspernatur aperiam tenetur dolorum inventore voluptates, nostrum, atque incidunt cumque cum nesciunt consequuntur voluptatibus quod? Eveniet atque itaque eum necessitatibus, nesciunt voluptatibus voluptas at in. Alias repellat deserunt eos, enim rerum, facilis omnis, tempora ratione sit modi nobis neque dolores. Tempora optio delectus nihil. Atque nostrum odit nihil voluptatum voluptatem corrupti optio aut nobis earum perspiciatis consectetur dicta ullam saepe inventore nulla laboriosam illum cumque, eaque natus, fugiat asperiores in qui nisi. Eaque rem nobis, autem quasi veniam repellendus saepe? Nobis, dolor incidunt impedit qui magnam sunt cupiditate consequuntur illo iure eligendi eum adipisci obcaecati sequi nulla.",
      VK:"https://vk.com/vanikakoma",
      Instagram:"https://www.instagram.com/vanika_koma/" 
    },
    {
      Id:3,
      Name:"Иван Волик",
      Position:"Frontend разрабочик",
      Description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum impedit enim repudiandae modi nesciunt, delectus corporis. Cum tenetur qui eum quasi obcaecati voluptatum, assumenda, facilis eveniet eligendi explicabo officiis perferendis incidunt reiciendis repellendus? At laboriosam mollitia magni. Facere voluptates ea eligendi ratione rerum esse enim saepe dolor, obcaecati accusamus temporibus consequuntur a iste reprehenderit vero, architecto earum. Molestiae deserunt mollitia rem dolorum fuga minima, dicta nobis quibusdam odit cumque vitae illum quam suscipit voluptate! Sed cumque officia ut perferendis fuga laborum, totam quibusdam explicabo praesentium, quas perspiciatis inventore esse adipisci odio natus. Optio mollitia ea inventore voluptates nihil. Ut, aut. Tempore molestias iusto aspernatur aperiam tenetur dolorum inventore voluptates, nostrum, atque incidunt cumque cum nesciunt consequuntur voluptatibus quod? Eveniet atque itaque eum necessitatibus, nesciunt voluptatibus voluptas at in. Alias repellat deserunt eos, enim rerum, facilis omnis, tempora ratione sit modi nobis neque dolores. Tempora optio delectus nihil. Atque nostrum odit nihil voluptatum voluptatem corrupti optio aut nobis earum perspiciatis consectetur dicta ullam saepe inventore nulla laboriosam illum cumque, eaque natus, fugiat asperiores in qui nisi. Eaque rem nobis, autem quasi veniam repellendus saepe? Nobis, dolor incidunt impedit qui magnam sunt cupiditate consequuntur illo iure eligendi eum adipisci obcaecati sequi nulla.",
      VK:"https://vk.com/vanikakoma",
      Instagram:"https://www.instagram.com/vanika_koma/" 
    },
    {
      Id:4,
      Name:"Мария Воробьева",
      Position:"Дизайнер",
      Description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum impedit enim repudiandae modi nesciunt, delectus corporis. Cum tenetur qui eum quasi obcaecati voluptatum, assumenda, facilis eveniet eligendi explicabo officiis perferendis incidunt reiciendis repellendus? At laboriosam mollitia magni. Facere voluptates ea eligendi ratione rerum esse enim saepe dolor, obcaecati accusamus temporibus consequuntur a iste reprehenderit vero, architecto earum. Molestiae deserunt mollitia rem dolorum fuga minima, dicta nobis quibusdam odit cumque vitae illum quam suscipit voluptate! Sed cumque officia ut perferendis fuga laborum, totam quibusdam explicabo praesentium, quas perspiciatis inventore esse adipisci odio natus. Optio mollitia ea inventore voluptates nihil. Ut, aut. Tempore molestias iusto aspernatur aperiam tenetur dolorum inventore voluptates, nostrum, atque incidunt cumque cum nesciunt consequuntur voluptatibus quod? Eveniet atque itaque eum necessitatibus, nesciunt voluptatibus voluptas at in. Alias repellat deserunt eos, enim rerum, facilis omnis, tempora ratione sit modi nobis neque dolores. Tempora optio delectus nihil. Atque nostrum odit nihil voluptatum voluptatem corrupti optio aut nobis earum perspiciatis consectetur dicta ullam saepe inventore nulla laboriosam illum cumque, eaque natus, fugiat asperiores in qui nisi. Eaque rem nobis, autem quasi veniam repellendus saepe? Nobis, dolor incidunt impedit qui magnam sunt cupiditate consequuntur illo iure eligendi eum adipisci obcaecati sequi nulla.",
      VK:"https://vk.com/vanikakoma",
      Instagram:"https://www.instagram.com/vanika_koma/" 
    }
  ];
  constructor( private ms:ModalService) { }

  ngOnInit() {
    setTimeout(() => {
      this.showp = true;
    },1)
  }

  show(m:Mate){
    this.ms.open('mate', m);
  }

}
