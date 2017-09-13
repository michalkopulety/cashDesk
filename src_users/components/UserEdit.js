import React, { Component } from 'react';

class UserEdit extends Component {
    render(){
        // // Car array
        // const cars = this.props.route.data;
        // // Car Id from param
        // const id = this.props.params.id;
        // // Filter car with ID
        // const car = cars.filter(car => {
        //     if(car.id == id) {
        //         return car;
        //     }
        // });

        const route = this.props.params.id

        return (
          <div>
            {route}
            </div>

        );
    }
}

export default UserEdit