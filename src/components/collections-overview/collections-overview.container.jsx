import { connect } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./collections-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverview)
);

export default CollectionsOverviewContainer
