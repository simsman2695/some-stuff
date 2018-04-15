import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    return {
        statistics: state.statistics
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const About = (props) => {

    return (
        <div>
            <p>
                Hi Chris
            </p>
        </div>
    );
};

About.propTypes = {
    classes: PropTypes.object,
    statistics: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
