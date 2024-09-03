import { Helmet } from 'react-helmet';
import PropTypes from "prop-types"; // up to the file
function PageTitle({ title }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
}

export default PageTitle;


PageTitle.propTypes = {
  // this code will be down to the file
  title: PropTypes.string
};