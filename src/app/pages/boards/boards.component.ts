import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  icons = icons;
  items = items;
}

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

const icons = {
  faTrello,
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
};

const items = [
  {
    title: 'Personal Boards',
    icon: faTrello,
    items: [
      {
        title: 'Welcome Board',
        icon: faBox,
      },
      {
        title: 'Welcome Board',
        icon: faBox,
      },
    ],
  },
  {
    title: 'Team Boards',
    icon: faWaveSquare,
    items: [
      {
        title: 'Welcome Board',
        icon: faBox,
      },
    ],
  },
  {
    title: 'Team Boards',
    icon: faWaveSquare,
    items: [
      {
        title: 'Welcome Board',
        icon: faBox,
      },
      {
        title: 'Welcome Board',
        icon: faBox,
      },
      {
        title: 'Welcome Board',
        icon: faBox,
      },
    ],
  },
];
