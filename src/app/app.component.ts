import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InventoryManagementApp';
  
  images1 =[
  {
    imgSrc: 'assets/images/AO_Smith_Water_Heater.png',
    imgAlt: 'Water Heater',
  },

  {
    imgSrc:  'assets/images/bathroom_sink.png',
    imgAlt: 'Bathroom Sink',
  },

  {
    imgSrc:  'assets/images/kitchen_faucets.png',
    imgAlt: 'Kitchen Faucets',
  }
    
  ];

  

    images2 =[
      {
        imgSrc: 'assets/images/electrical_outlet.png',
        imgAlt: 'Outlet',
      },
    
      {
        imgSrc:  'assets/images/plug.png',
        imgAlt: 'Plug',
      },
    
      {
        imgSrc:  'assets/images/exhaust_fan.png',
        imgAlt: 'Fan',
      }
        
      ];
    
      images3 =[
        {
          imgSrc: 'assets/images/pvc_pipe.png',
          imgAlt: 'Pvc Pipe',
        },
      
        {
          imgSrc:  'assets/images/copper_tees.png',
          imgAlt: 'Copper Tees',
        },
      
        {
          imgSrc:  'assets/images/gate_valve.png',
          imgAlt: 'Gate Valve',
        }
          
        ];

}
