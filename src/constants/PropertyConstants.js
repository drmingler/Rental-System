import {
    AirConditionDark,
    AirConditionLight,
    AirConditionPurple,
    AirConditionWhite,
    BalconyDark,
    BalconyLight,
    BalconyPurple,
    BalconyWhite,
    DeckDark,
    DeckLight,
    DeckPurple,
    DeckWhite,
    DishwasherDark,
    DishwasherLight,
    DishwasherPurple,
    DishwasherWhite,
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
    WheelchairWhite,
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
]

export {propertyAmenities};

let amenities = [
    "pool",
    "garden",
    "elevator",
    "doorman",
    "deck",
    "washer",
    "gym",
    "parking",
    "firePlace",
    "airCondition",
    "dishWasher",
    "itemStorage",
    "wheelchair",
    "balcony",
    "hardFloor",
    "furnished",
    "view",
    "highRise",
    "studentFriendly",
    "utilities"
];

const Capitalise = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const result = amenities.map(amenity => {
    return {
        key: amenity,
        value: true,
        text: Capitalise(amenity),
        iconWhite: Capitalise(amenity) + "White",
        iconPurple: Capitalise(amenity) + "Purple",
        iconLight: Capitalise(amenity) + "Light",
        iconGrey: Capitalise(amenity) + "Dark"
    };
});

console.log(result);
