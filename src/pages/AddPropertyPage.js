import React, {Fragment, useEffect, useState} from "react";
import {Layout} from "../components/LayoutComponents/index";
import {handleCreateProperty, HandleUploadObject} from "../store/propertySlice";
import {
  AddPropertyHeader,
  AvailabilityDateSection,
  HouseDescriptionSection,
  ListingAmenitySection,
  ListingButtonSection,
  PropertyDocumentsSection
} from "../components/AddPropertyPageComponents/index";
import {houseUploadInitialValues, houseUploadValidator} from "../validators/formValidators";
import {useDispatch, useSelector} from "react-redux";
import {BackDropLoading} from "../components/CommonComponents/index";
import {useAddPropertyForm} from "../hooks/useAddPropertyForm";
import {useHistory} from "react-router-dom";

const AddPropertyPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.property.isLoading);
  const { id, landlord } = useSelector(state => state.property.currentProperty);
  const [files, setFiles] = useState([]);

  const uploadProperty = (property, lat, lng) => {
    const { address, latitude, longitude, files, image, ...payload } = property;
    setFiles([files, image]);
    payload.propertyAddress = {
      address,
      latitude: lat,
      longitude: lng
    };
    dispatch(handleCreateProperty(payload));
  };

  useEffect(() => {
    if (id) {
      let imageData = new FormData();
      files[1].forEach((image, idx) => imageData.append(`image`, image));
      imageData.append("propertyId", id);
      imageData.append("modelName", "PropertyImage");
      dispatch(HandleUploadObject(imageData));

      let fileData = new FormData();
      files[0].forEach((file, idx) => fileData.append(`image`, file));
      fileData.append("propertyId", id);
      fileData.append("modelName", "OwnershipDocument");
      dispatch(HandleUploadObject(fileData));
      if (landlord && Boolean(isLoading)) {
        return history.push(`/my-listings/${landlord}`);
      }
    }
  }, [id, files, dispatch, landlord, history, isLoading]);

  const formHandlers = useAddPropertyForm(
    uploadProperty,
    houseUploadInitialValues,
    houseUploadValidator
  );

  return (
    <Fragment>
      <BackDropLoading state={isLoading} />
      <Layout fixed={true}>
        <form
          onSubmit={formHandlers.handleSubmit}
          encType="multipart/form-data"
        >
          <AddPropertyHeader formHandlers={formHandlers} />
          <HouseDescriptionSection formHandlers={formHandlers} />
          <ListingAmenitySection formHandlers={formHandlers} />
          <PropertyDocumentsSection formHandlers={formHandlers} />
          <AvailabilityDateSection formHandlers={formHandlers} />
          <ListingButtonSection />
        </form>
      </Layout>
    </Fragment>
  );
};
export default AddPropertyPage;
