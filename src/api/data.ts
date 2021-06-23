export const data: DataType = {
  actif: {
    name: "Milenium Avenu",
    Address: {
      street: "44 rue raoul dufy",
      zipCode: "34000",
      city: "Montpellier",
      country: "France",
    },
  },
  users: [
    {
      gender: "female",
      name: {
        title: "ms",
        first: "billie",
        last: "wallace",
      },
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "billie.wallace@example.com",
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "brad.gibson@example.com",
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "florian",
        last: "chauviere",
      },
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "florian.chauviere@example.com",
    },
  ],
};

export interface DataType {
  actif: BuildingType;
  users: UserType[];
}

export interface UserType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
}

export interface BuildingType {
  name: string;
  Address: {
    street: string;
    zipCode: string;
    city: string;
    country: string;
  };
}
