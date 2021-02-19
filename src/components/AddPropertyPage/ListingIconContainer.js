import React from "react";

const ListingIconContainer = ({icon, text}) => {
  return (
      <div className="listing-icon">
        <div className="svg-icon">
            {icon}
        </div>
        <span>{text}</span>
      </div>
  );
};
export default ListingIconContainer;

// import React, { Fragment, useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import NavBar from "../components/NavBar";
// import MobileNavbar from "../components/MobileNavBar";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import Berlin from "../assets/img/Berlin.webp";
// import { ReactComponent as SqrtIcon } from "../assets/img/sqft-icon.svg";
// import { ReactComponent as BedIcon } from "../assets/img/beds-icon.svg";
// import { ReactComponent as BathIcon } from "../assets/img/bath-icon.svg";
// import { ReactComponent as Expand } from "../assets/img/expand.svg";
// import { ReactComponent as Filter } from "../assets/img/filter-btn.svg";
// import { ReactComponent as HideIcon } from "../assets/img/hide-icon.svg";
// import { ReactComponent as MapView } from "../assets/img/map-view.svg";
// import { ReactComponent as ClearAll } from "../assets/img/clear-all.svg";
// import { ListingIconContainer } from "../components/AddPropertyPage";
// import Paper from "@material-ui/core/Paper";
// import useDropDown from "../hooks/useDropDown";
// import Slider from "@material-ui/core/Slider";
//
// const CustomTransition = ({ state, initialClass, finalClass, children }) => {
//     if (state) {
//         return <div className={`${initialClass} ${finalClass}`}>{children}</div>;
//     }
//     return <div className={`${initialClass}`}>{children}</div>;
// };
// const HouseCards = ({ image }) => {
//     return (
//         <Col lg={12} xl={6}>
//             <Card className="house-cards">
//                 <div className="house-price">
//                     <span className="price-text">$2,300</span>
//                 </div>
//                 <CardActionArea>
//                     <CardMedia
//                         component="img"
//                         alt="Contemplative Reptile"
//                         height="200"
//                         image={image}
//                         title="Contemplative Reptile"
//                     />
//                     <CardContent>
//                         <Typography className="house-card-header">Common Baker</Typography>
//                         <Typography className="house-card-text">
//                             Lizards are a widespread group of squamate
//                         </Typography>
//                         <div className="house-card-footer">
//                             <div className="house-card-icon-container">
//                                 <ListingIconContainer icon={<BedIcon />} text={"5 Bed"} />
//                             </div>
//                             <div className="house-card-icon-container">
//                                 <ListingIconContainer icon={<BathIcon />} text={"5 Bath"} />
//                             </div>
//                             <div className="house-card-icon-container">
//                                 <ListingIconContainer icon={<SqrtIcon />} text={"1000 Sq Ft"} />
//                             </div>
//                         </div>
//                     </CardContent>
//                 </CardActionArea>
//             </Card>
//         </Col>
//     );
// };
//
// const PanelSlider = ({ filtersOptions }) => {
//     const [value, setValue] = React.useState([1, 100]);
//     const [housePrice, setHousePrice] = React.useState(null);
//
//     useEffect(() => {
//         if (Object.keys(filtersOptions).length === 0) {
//             setValue([1, 100]);
//         }
//     }, [filtersOptions]);
//
//     const handleChange = (event, newValue) => {
//         // Convert scale value to house prices
//         let minPrice = (newValue[0] * 3000) / 100;
//         let maxPrice = (newValue[1] * 3000) / 100;
//
//         setHousePrice({ minPrice: minPrice, maxPrice: maxPrice });
//         setValue(newValue);
//     };
//
//     let min = value[0];
//     let max = value[1];
//
//     return (
//         <Fragment>
//             <Row className="panel-container">
//                 <Col md={12}>
//                     <Row className="justify-content-center">
//                         <div className="panel-price">
//                             {(min <= 1 && max >= 100) || max <= 1 ? (
//                                 <span>Any Price</span>
//                             ) : (
//                                 <span>
//                   <span>
//                     {min <= 1 && max <= 100
//                         ? "Up"
//                         : `$${housePrice["minPrice"].toLocaleString("en")}`}
//                   </span>
//                                     &nbsp;
//                                     <span>to</span>
//                                     &nbsp;
//                                     <span>
//                     {`$${housePrice["maxPrice"].toLocaleString("en")}`}
//                                         {max >= 100 && <span className="plus">+</span>}
//                                         /month
//                   </span>
//                 </span>
//                             )}
//                         </div>
//                     </Row>
//                 </Col>
//             </Row>
//             <Row className="justify-content-center">
//                 <Col lg={11} xs={11}>
//                     <div className="panel-slider">
//                         <Slider
//                             value={value}
//                             onChange={handleChange}
//                             aria-labelledby="range-slider"
//                         />
//                     </div>
//                 </Col>
//             </Row>
//         </Fragment>
//     );
// };
//
// const PanelOptions = ({
//                           text,
//                           sizeSmall,
//                           sizeBig,
//                           filtersOptions,
//                           setFilterOption
//                       }) => {
//     let filterOption = filtersOptions[text];
//
//     function handleClick() {
//         if (filterOption) {
//             const { [filterOption]: _, ...newFilterOptions } = filtersOptions;
//             setFilterOption(newFilterOptions);
//         } else {
//             setFilterOption({ ...filtersOptions, [text]: text });
//         }
//     }
//
//     return (
//         <Col xs={sizeSmall} lg={sizeBig} className="panel-options-container">
//             <div
//                 className={`panel-options  ${filterOption && "active"}`}
//                 onClick={handleClick}
//             >
//                 <span>{text}</span>
//             </div>
//         </Col>
//     );
// };
//
// const PanelIcon = ({ text, children, filtersOptions, setFilterOption }) => {
//     let filterOption = filtersOptions[text];
//
//     function handleClick() {
//         if (filterOption) {
//             const { [filterOption]: _, ...newFilterOptions } = filtersOptions;
//             setFilterOption(newFilterOptions);
//         } else {
//             setFilterOption({ ...filtersOptions, [text]: text });
//         }
//     }
//
//     return (
//         <Col xs={6} className="panel-icon-container" onClick={handleClick}>
//             <div className={`panel-icon ${filterOption && "active"}`}>{children}</div>
//             <span className="panel-icon-text">{text}</span>
//         </Col>
//     );
// };
//
// const DropDownOption = {
//     bestMatch: "Best Match",
//     Newest: "Newest",
//     lowToHigh: "By Price: Low to High",
//     HighToLow: "By Price: High to Low"
// };
//
// const HousesForRentPage = () => {
//     const { showActive, setActive, innerRef } = useDropDown();
//
//     const [panel, setPanel] = useState(false);
//     const [smallDevice, setCurrentDevice] = useState(false);
//
//     // Keep track of selected filters
//     const [filtersOptions, setFilterOption] = useState({});
//
//     const [showActiveFilter, setActiveFilter] = useState(
//         DropDownOption["bestMatch"]
//     );
//     const showDropDown = () => {
//         setActive(!showActive);
//     };
//
//     const togglePanel = (panelState, isSmallDevice) => {
//         setPanel(panelState);
//
//         // Set to true if the dropdown menu is clicked  on a small device
//         setCurrentDevice(!!isSmallDevice);
//     };
//
//     const handleSelect = key => {
//         setActiveFilter(DropDownOption[key]);
//     };
//
//     const clearFilter = () => {
//         setFilterOption({});
//     };
//
//     return (
//         <Fragment>
//             <MobileNavbar />
//             <NavBar fixed={true} />
//             <section className="houses-for-rent-container">
//                 <Container fluid>
//                     <Row>
//                         <Col md={6} lg={5} className="scroll-area-container">
//                             <div className="house-search-panel">
//                                 <div className="house-location-container">
//                                     <Filter
//                                         className="panel-menu-icon"
//                                         onClick={() => togglePanel(!panel)}
//                                     />
//                                     <div className="house-location-text">
//                                         <b>20,800 </b>
//                                         <span>New York, NY, USA apartments for rent</span>
//                                     </div>
//                                 </div>
//
//                                 {panel && !smallDevice && (
//                                     <div
//                                         className="hide-dropdown-container"
//                                         onClick={() => togglePanel(!panel)}
//                                         ref={innerRef}
//                                     >
//                                         <HideIcon className="panel-menu-icon" />
//                                         <span className="hide-dropdown-text">Hide Filters</span>
//                                     </div>
//                                 )}
//
//                                 {(!panel || smallDevice) && (
//                                     <div
//                                         className="filter-dropdown"
//                                         onClick={showDropDown}
//                                         ref={innerRef}
//                                     >
//                     <span className="filter-dropdown-text">
//                       {showActiveFilter}
//                     </span>
//                                         <Expand className="filter-dropdown-icon" />
//                                         <Paper className="dropdown-option-container" elevation={2}>
//                                             {showActive && (
//                                                 <ul>
//                                                     <li
//                                                         className="dropdown-option"
//                                                         key="bestMatch"
//                                                         onClick={() => handleSelect("bestMatch")}
//                                                     >
//                                                         <span>Best Match</span>
//                                                     </li>
//                                                     <li
//                                                         className="dropdown-option"
//                                                         key="Newest"
//                                                         onClick={() => handleSelect("Newest")}
//                                                     >
//                                                         <span>Newest</span>
//                                                     </li>
//                                                     <li
//                                                         className="dropdown-option"
//                                                         key="lowToHigh"
//                                                         onClick={() => handleSelect("lowToHigh")}
//                                                     >
//                                                         <span>By Price: Low to High</span>
//                                                     </li>
//                                                     <li
//                                                         className="dropdown-option"
//                                                         key="HighToLow"
//                                                         onClick={() => handleSelect("HighToLow")}
//                                                     >
//                                                         <span>By Price: High to Low</span>
//                                                     </li>
//                                                 </ul>
//                                             )}
//                                         </Paper>
//                                     </div>
//                                 )}
//                             </div>
//
//                             <div className="house-search-panel-small-device">
//                                 {panel && (
//                                     <div
//                                         className="hide-dropdown-container"
//                                         onClick={clearFilter}
//                                     >
//                                         <ClearAll className="panel-menu-icon" />
//                                         <span className="hide-dropdown-text">Clear</span>
//                                     </div>
//                                 )}
//
//                                 {!panel && (
//                                     <div className="small-device-menu-container">
//                                         <MapView className="panel-menu-icon" />
//                                         <div className="small-device-menu-text">
//                                             <span>Map View</span>
//                                         </div>
//                                     </div>
//                                 )}
//                                 {panel && (
//                                     <div
//                                         className="hide-dropdown-container"
//                                         onClick={() => togglePanel(!panel)}
//                                     >
//                                         <HideIcon className="panel-menu-icon" />
//                                         <span className="hide-dropdown-text">Hide Filters</span>
//                                     </div>
//                                 )}
//                                 {!panel && (
//                                     <div
//                                         className="small-device-menu-container"
//                                         onClick={() => togglePanel(!panel, true)}
//                                     >
//                                         <Filter className="panel-menu-icon" />
//                                         <div className="small-device-menu-text">
//                                             <span>Filters</span>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//
//                             <CustomTransition
//                                 state={panel}
//                                 initialClass={"search-control-panel"}
//                                 finalClass={"search-control-enter"}
//                             >
//                                 <Container fluid={"md"}>
//                                     <PanelSlider
//                                         filtersOptions={filtersOptions}
//                                     />
//                                     <Row className="panel-container">
//                                         <Col md={12} xl={3} className="panel-heading">
//                                             <h4>Type</h4>
//                                         </Col>
//                                         <Col md={12} xl={8}>
//                                             <Row>
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Apartment"}
//                                                     sizeBig={4}
//                                                     sizeSmall={6}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"House"}
//                                                     sizeBig={4}
//                                                     sizeSmall={6}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Condo"}
//                                                     sizeBig={4}
//                                                     sizeSmall={6}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Townhouse"}
//                                                     sizeBig={4}
//                                                     sizeSmall={6}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Duplex"}
//                                                     sizeBig={4}
//                                                     sizeSmall={6}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Loft"}
//                                                     sizeBig={4}
//                                                     sizeSmall={6}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Room"}
//                                                     sizeBig={4}
//                                                     sizeSmall={6}
//                                                 />
//                                             </Row>
//                                         </Col>
//                                     </Row>
//                                     <Row className="panel-container">
//                                         <Col md={12} xl={3} className="panel-heading">
//                                             <h4>Bedrooms</h4>
//                                         </Col>
//                                         <Col md={12} xl={8}>
//                                             <Row>
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Studio"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"1 bed"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"2 bed"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"3 bed"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"4+ bed"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                             </Row>
//                                         </Col>
//                                     </Row>
//                                     <Row className="panel-container">
//                                         <Col md={12} xl={3} className="panel-heading">
//                                             <h4>Bathrooms</h4>
//                                         </Col>
//                                         <Col md={12} xl={8}>
//                                             <Row>
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"1"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"2"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"3"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"4"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"5+"}
//                                                     sizeBig={3}
//                                                     sizeSmall={4}
//                                                 />
//                                             </Row>
//                                         </Col>
//                                     </Row>
//                                     <Row className="panel-container">
//                                         <Col md={12} xl={3} className="panel-heading">
//                                             <h4>Pet Policy</h4>
//                                         </Col>
//                                         <Col md={12} xl={8}>
//                                             <Row>
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Dogs Allowed"}
//                                                     sizeBig={5}
//                                                     sizeSmall={6}
//                                                 />
//                                                 <PanelOptions
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Cats Allowed"}
//                                                     sizeBig={5}
//                                                     sizeSmall={6}
//                                                 />
//                                             </Row>
//                                         </Col>
//                                     </Row>
//                                     <Row className="panel-container">
//                                         <Col md={12} xl={3} className="panel-heading">
//                                             <h4>Amenities</h4>
//                                         </Col>
//                                         <Col md={12} xl={8}>
//                                             <Row>
//                                                 <PanelIcon
//                                                     text={"Pool"}
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Garden"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Elevator"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Doorman"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Deck"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Washer/Dryer In Unit"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Gym"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Parking Spot"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Fireplace"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Air Conditioning"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Dishwasher"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Storage"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Wheelchair Accessible"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Hardwood Floors"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Balcony"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Furnished"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"View"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"High Rise"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Student Friendly"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                                 <PanelIcon
//                                                     filtersOptions={filtersOptions}
//                                                     setFilterOption={setFilterOption}
//                                                     text={"Utilities Included"}
//                                                 >
//                                                     <BedIcon className="svg-icon" />
//                                                 </PanelIcon>
//                                             </Row>
//                                         </Col>
//                                     </Row>
//                                     <Row className="panel-container panel-button">
//                                         <Col md={12} xl={12}>
//                                             <Row className="justify-content-center">
//                                                 <button className="clear-btn" onClick={clearFilter}>
//                                                     Clear All
//                                                 </button>
//                                             </Row>
//                                         </Col>
//                                     </Row>
//                                 </Container>
//                             </CustomTransition>
//                             <CustomTransition
//                                 state={panel}
//                                 initialClass={"find-property-btn"}
//                                 finalClass={"find-property-btn-enter"}
//                             >
//                                 <button>Find Properties</button>
//                             </CustomTransition>
//                             <Row className="house-scroll-area">
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                                 <HouseCards image={Berlin} />
//                             </Row>
//                         </Col>
//                         <Col md={6} lg={7} className="rental-map" />
//                     </Row>
//                 </Container>
//             </section>
//         </Fragment>
//     );
// };
// export default HousesForRentPage;
