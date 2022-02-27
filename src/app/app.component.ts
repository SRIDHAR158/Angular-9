import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap-Demo';

  showMsg = false;

  switchValue = "three";

  users = [{id: 1, name: "john"},
          {id: 2, name: "jackson"},
          {id: 3, name: "Harry"},
          {id: 4, name: "Murthy"},
          {id: 5, name: "Mary"},
          {id: 6, name: "Manu"}
        ];

        colorVal = "blue";
        bgcolorVal = "red";

        clsName = 'one';
        clsName2 = 'two';

        subTitle = "Its fun to learn the interpolation";

        epNum = 17;

        user = {
          userId: 201,
          userName: 'Sridhar',
          status: "Active"
        };

        colorVal1 = "red";
        clsName3 = "c1";

        placeholderVal = "Enter Value";

        hrefVal = "http://google.com";

        updatedLink = "http://oracle.com";

        showalert(id){
          alert("Hello from sridhar" + id);
        }

        consolelog(){
              console.log("From the input focus event");
        }

        firstname = " ";

        readfirstname(){
          console.log(this.firstname);
        }

        user1 = {
            userId: 20,
            firstName: 'Sridhar',
            lastName: 'Tutorials',
            DOB: '05/01/1997',
            salary: 12000.51
        }

        user2 = 
        [{
          firstName: 'sridhar rao',
          city: 'New York',
          cityCode: 'NY',
        },

        {
          firstName: 'Leo rao',
          city: 'Baltimore',
          cityCode: 'BL',
        },
        
        {
          firstName: 'Mary rao',
          city: 'California',
          cityCode: 'CL',
        }
      ];
}
