import {
  AirConditionDark,
  AirConditionLight,
  AirConditionPurple,
  AirConditionWhite,
  BalconyDark,
  BalconyLight,
  BalconyPurple,
  BalconyWhite,
  CatIconLight,
  CatIconPurple,
  DeckDark,
  DeckLight,
  DeckPurple,
  DeckWhite,
  DishwasherDark,
  DishwasherLight,
  DishwasherPurple,
  DishwasherWhite,
  DogIconLight,
  DogIconPurple,
  DoormanDark,
  DoormanLight,
  DoormanPurple,
  DoormanWhite,
  ElevatorDark,
  ElevatorLight,
  ElevatorPurple,
  ElevatorWhite,
  FireplaceDark,
  FireplaceLight,
  FireplacePurple,
  FireplaceWhite,
  FurnishedDark,
  FurnishedLight,
  FurnishedPurple,
  FurnishedWhite,
  GardenDark,
  GardenLight,
  GardenPurple,
  GardenWhite,
  GymDark,
  GymLight,
  GymPurple,
  GymWhite,
  HardFloorDark,
  HardFloorLight,
  HardFloorPurple,
  HardFloorWhite,
  HighRiseDark,
  HighRiseLight,
  HighRisePurple,
  HighRiseWhite,
  ParkingDark,
  ParkingLight,
  ParkingPurple,
  ParkingWhite,
  PoolDark,
  PoolLight,
  PoolPurple,
  PoolWhite,
  StorageDark,
  StorageLight,
  StoragePurple,
  StorageWhite,
  StudentFriendlyDark,
  StudentFriendlyLight,
  StudentFriendlyPurple,
  StudentFriendlyWhite,
  UtilitiesDark,
  UtilitiesLight,
  UtilitiesPurple,
  UtilitiesWhite,
  ViewDark,
  ViewLight,
  ViewPurple,
  ViewWhite,
  WasherDark,
  WasherLight,
  WasherPurple,
  WasherWhite,
  WheelchairDark,
  WheelchairLight,
  WheelchairPurple,
  WheelchairWhite
} from "../assets/img/amenities/index";

const propertyAmenities = [
  {
    key: "pool",
    value: true,
    text: "Pool",
    iconWhite: PoolWhite,
    iconPurple: PoolPurple,
    iconLight: PoolLight,
    iconGrey: PoolDark
  },
  {
    key: "garden",
    value: true,
    text: "Garden",
    iconWhite: GardenWhite,
    iconPurple: GardenPurple,
    iconLight: GardenLight,
    iconGrey: GardenDark
  },
  {
    key: "elevator",
    value: true,
    text: "Elevator",
    iconWhite: ElevatorWhite,
    iconPurple: ElevatorPurple,
    iconLight: ElevatorLight,
    iconGrey: ElevatorDark
  },
  {
    key: "doorman",
    value: true,
    text: "Doorman",
    iconWhite: DoormanWhite,
    iconPurple: DoormanPurple,
    iconLight: DoormanLight,
    iconGrey: DoormanDark
  },
  {
    key: "deck",
    value: true,
    text: "Deck",
    iconWhite: DeckWhite,
    iconPurple: DeckPurple,
    iconLight: DeckLight,
    iconGrey: DeckDark
  },
  {
    key: "washer",
    value: true,
    text: "Washer/Dryer In Unit",
    iconWhite: WasherWhite,
    iconPurple: WasherPurple,
    iconLight: WasherLight,
    iconGrey: WasherDark
  },
  {
    key: "gym",
    value: true,
    text: "Gym",
    iconWhite: GymWhite,
    iconPurple: GymPurple,
    iconLight: GymLight,
    iconGrey: GymDark
  },
  {
    key: "parking",
    value: true,
    text: "Parking Spot",
    iconWhite: ParkingWhite,
    iconPurple: ParkingPurple,
    iconLight: ParkingLight,
    iconGrey: ParkingDark
  },
  {
    key: "firePlace",
    value: true,
    text: "Fire Place",
    iconWhite: FireplaceWhite,
    iconPurple: FireplacePurple,
    iconLight: FireplaceLight,
    iconGrey: FireplaceDark
  },
  {
    key: "airCondition",
    value: true,
    text: "Air Conditioning",
    iconWhite: AirConditionWhite,
    iconPurple: AirConditionPurple,
    iconLight: AirConditionLight,
    iconGrey: AirConditionDark
  },
  {
    key: "dishWasher",
    value: true,
    text: "DishWasher",
    iconWhite: DishwasherWhite,
    iconPurple: DishwasherPurple,
    iconLight: DishwasherLight,
    iconGrey: DishwasherDark
  },
  {
    key: "itemStorage",
    value: true,
    text: "ItemStorage",
    iconWhite: StorageWhite,
    iconPurple: StoragePurple,
    iconLight: StorageLight,
    iconGrey: StorageDark
  },
  {
    key: "wheelchair",
    value: true,
    text: "Wheelchair Accessible",
    iconWhite: WheelchairWhite,
    iconPurple: WheelchairPurple,
    iconLight: WheelchairLight,
    iconGrey: WheelchairDark
  },
  {
    key: "balcony",
    value: true,
    text: "Balcony",
    iconWhite: BalconyWhite,
    iconPurple: BalconyPurple,
    iconLight: BalconyLight,
    iconGrey: BalconyDark
  },
  {
    key: "hardFloor",
    value: true,
    text: "Hardwood Floors",
    iconWhite: HardFloorWhite,
    iconPurple: HardFloorPurple,
    iconLight: HardFloorLight,
    iconGrey: HardFloorDark
  },
  {
    key: "furnished",
    value: true,
    text: "Furnished",
    iconWhite: FurnishedWhite,
    iconPurple: FurnishedPurple,
    iconLight: FurnishedLight,
    iconGrey: FurnishedDark
  },
  {
    key: "view",
    value: true,
    text: "View",
    iconWhite: ViewWhite,
    iconPurple: ViewPurple,
    iconLight: ViewLight,
    iconGrey: ViewDark
  },
  {
    key: "highRise",
    value: true,
    text: "HighRise",
    iconWhite: HighRiseWhite,
    iconPurple: HighRisePurple,
    iconLight: HighRiseLight,
    iconGrey: HighRiseDark
  },
  {
    key: "studentFriendly",
    value: true,
    text: "Student Friendly",
    iconWhite: StudentFriendlyWhite,
    iconPurple: StudentFriendlyPurple,
    iconLight: StudentFriendlyLight,
    iconGrey: StudentFriendlyDark
  },
  {
    key: "utilities",
    value: true,
    text: "Utilities Included",
    iconWhite: UtilitiesWhite,
    iconPurple: UtilitiesPurple,
    iconLight: UtilitiesLight,
    iconGrey: UtilitiesDark
  }
];

const houseType = [
  {
    key: "houseType1",
    value: "apartment",
    text: "Apartment"
  },
  {
    key: "houseType2",
    value: "house",
    text: "House"
  },
  {
    key: "houseType3",
    value: "condo",
    text: "Condo"
  },
  {
    key: "houseType4",
    value: "townhouse",
    text: "Townhouse"
  },
  {
    key: "houseType5",
    value: "duplex",
    text: "Duplex"
  },
  {
    key: "houseType6",
    value: "loft",
    text: "Loft"
  },
  {
    key: "houseType7",
    value: "room",
    text: "Room"
  }
];

const bedroomsNumber = [
  {
    key: "bedroomsNumber0",
    value: "studio",
    text: "Studio"
  },
  {
    key: "bedroomsNumber1",
    value: 1,
    text: "1 bed"
  },
  {
    key: "bedroomsNumber2",
    value: 2,
    text: "2 bed"
  },
  {
    key: "bedroomsNumber3",
    value: 3,
    text: "3 bed"
  },
  {
    key: "bedroomsNumber4",
    value: 4,
    text: "4+ bed"
  }
];

const bathRoomNumber = [
  {
    key: "bathRoomNumber1",
    value: 1,
    text: "1"
  },
  {
    key: "bathRoomNumber2",
    value: 2,
    text: "2"
  },
  {
    key: "bathRoomNumber3",
    value: 3,
    text: "3"
  },
  {
    key: "bathRoomNumber4",
    value: 4,
    text: "4"
  },
  {
    key: "bathRoomNumber5",
    value: 5,
    text: "5+"
  }
];

const houseRulesConfig = [
  {
    key: "musicalInstruments",
    value: true,
    text: "Musical Instruments",
    iconPurple: CatIconPurple,
    iconLight: CatIconLight
  },
  {
    key: "pet",
    value: true,
    text: "Pets Allowed",
    iconPurple: DogIconPurple,
    iconLight: DogIconLight
  },
  {
    key: "smoking",
    value: true,
    text: "Smoking Allowed",
    iconPurple: DogIconPurple,
    iconLight: DogIconLight
  }
];

let propertyStatus = {
  Verified: [
    "Verified",
    "This property has been reviewed and verified and is now visible for every other user."
  ],
  Pending: [
    "Pending",
    "This property is still being reviewed. We will notify you when the status changes"
  ],
  Rejected: [
    "Rejected",
    "This property has been rejected because we could not verify the uploaded document"
  ],
  Expired: [
    "Expired",
    "This Property has expired. Please subscribe to make it visible to other users again"
  ]
};

const propertyTypes = [
  {
    value: "Apartment",
    label: "Apartment"
  },
  {
    value: "House",
    label: "House"
  },
  {
    value: "Condo",
    label: "Condo"
  },
  {
    value: "Duplex",
    label: "Duplex"
  }
];
const bedroomNumber = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 4,
    label: "4+"
  }
];
const bathroomNumber = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 4,
    label: "4+"
  }
];

export {
  propertyTypes,
  bedroomNumber,
  bathroomNumber,
  propertyAmenities,
  houseType,
  bedroomsNumber,
  bathRoomNumber,
  houseRulesConfig,
  propertyStatus
};

// let amenities = [
//   "pool",
//   "garden",
//   "elevator",
//   "doorman",
//   "deck",
//   "washer",
//   "gym",
//   "parking",
//   "firePlace",
//   "airCondition",
//   "dishWasher",
//   "itemStorage",
//   "wheelchair",
//   "balcony",
//   "hardFloor",
//   "furnished",
//   "view",
//   "highRise",
//   "studentFriendly",
//   "utilities"
// ];
//
// const Capitalise = text => {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// };

// const result = amenities.map(amenity => {
//   return {
//     key: amenity,
//     value: true,
//     text: Capitalise(amenity),
//     iconWhite: Capitalise(amenity) + "White",
//     iconPurple: Capitalise(amenity) + "Purple",
//     iconLight: Capitalise(amenity) + "Light",
//     iconGrey: Capitalise(amenity) + "Dark"
//   };
// });
