import { Component, OnInit } from '@angular/core';
import { Film } from './shared/interfaces/film';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "datatable-actions";

  films: Film[] = [
    {
      title: {
        title: "Como entrenar a tu dragón 2",
        originalTitle: "How To Train Your Dragon 2",
      },
      year: 2014,
      country: "USA",
      budget: 145000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Jay Baruchel", "Cate Blanchett", "Gerard Butler"],
      duration: 102,
    },
    {
      title: {
        title: "Como entrenar a tu dragón",
        originalTitle: "How To Train Your Dragon",
      },
      year: 2010,
      country: "USA",
      budget: 165000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Jay Baruchel", "Gerard Butler", "Christopher Mintz-Plasse"],
      duration: 98,
    },
    {
      title: {
        title: "Kung Fu Panda",
        originalTitle: "Kung Fu Panda",
      },
      year: 2008,
      country: "USA",
      budget: 130000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Jack Black", "Ian McShane", "Angelina Jolie"],
      duration: 92,
    },
    {
      title: {
        title: "Las aventuras de Peabody y el Sr. Sherman",
        originalTitle: "Mr. Peabody and Sherman",
      },
      year: 2014,
      country: "USA",
      budget: 145000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Ty Burrell", "Max Charles", "Stephen Colbert"],
      duration: 93,
    },
    {
      title: {
        title: "Megamente",
        originalTitle: "Megamind",
      },
      year: 2010,
      country: "USA",
      budget: 130000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Will Ferrell", "Jonah Hill", "Brad Pitt"],
      duration: 95,
    },
    {
      title: {
        title: "Kung Fu Panda 2",
        originalTitle: "Kung Fu Panda 2",
      },
      year: 2011,
      country: "USA",
      budget: 150000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Jack Black", "Angelina Jolie", "Jackie Chan"],
      duration: 90,
    },
    {
      title: {
        title: "Madagascar 3: Los fugitivos",
        originalTitle: "Madagascar 3: Europe's Most Wanted",
      },
      year: 2012,
      country: "USA",
      budget: 145000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Ben Stiller", "Jada Pinkett Smith", "Chris Rock"],
      duration: 93,
    },
    {
      title: {
        title: "El origen de los guardianes",
        originalTitle: "Rise of the Guardians",
      },
      year: 2012,
      country: "USA",
      budget: 145000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Hugh Jackman", "Alec Baldwin", "Isla Fisher"],
      duration: 97,
    },
    {
      title: {
        title: "Los pinguinos de Madagascar",
        originalTitle: "Penguins of Madagascar",
      },
      year: 2014,
      country: "USA",
      budget: 132000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Tom McGrath", "Chris Miller", "Christopher Knights"],
      duration: 91,
    },
    {
      title: {
        title: "HOME: No hay lugar como el hogar",
        originalTitle: "Home",
      },
      year: 2015,
      country: "USA",
      budget: 135000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Jim Parsons", "Rihanna", "Steve Martin"],
      duration: 93,
    },
    {
      title: {
        title: "Kung Fu Panda 3",
        originalTitle: "Kung Fu Panda 3",
      },
      year: 2016,
      country: "USA",
      budget: 145000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Jack Black", "Bryan Cranston", "Dustin Hoffman"],
      duration: 95,
    },
    {
      title: {
        title: "Como entrenar a tu dragón 3",
        originalTitle: "How To Train Your Dragon: The Hidden World",
      },
      year: 2019,
      country: "USA",
      budget: 129000000,
      studio: {
        name: "DreamWorks Animation",
        yearFounded: 1994,
      },
      cast: ["Jay Baruchel", "America Ferrera", "F. Murray Abraham"],
      duration: 104,
    },
  ];

  columns: any = [{ name: "Title" }, { name: "Country" }, { name: "Duration" }];

  ngOnInit() {}

  doSomething(): void {
    console.log("doSomething()");
  }
}
