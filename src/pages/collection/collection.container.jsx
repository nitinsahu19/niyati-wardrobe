import { connect } from "react-redux";
import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);

export default CollectionPageContainer;
