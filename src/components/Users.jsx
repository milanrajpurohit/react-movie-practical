/*********************************
 USER MODULES INITIALISATION
 **********************************/
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import API from '../api';

// Access store states via props
const mapStateToProps = function(state){
    return {
        token: state.token,
    }
}

// Users Component
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    // Lifecycle method called before rendering an component
    async componentDidMount() {
        try {
            // API call to get the dashboard counts
            API.defaults.headers.common['Authorization'] = this.props.token;

        } catch (error) {
            // To catch an error
        }
    }

    // Rendering component
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={4}>
                        <Navigation/>
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default connect(mapStateToProps, {})(Users);