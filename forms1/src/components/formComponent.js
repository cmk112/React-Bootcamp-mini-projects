import React from 'react'

function FormComponent(props){
    return (
        <form>
            <input 
                type="text" 
                value={props.data.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={props.handleChange} 
            />

            <input
                type="text"
                value={props.data.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={props.handleChange} 
            />

            <h1>{props.data.firstName} {props.data.lastName} </h1>
            


            <label>
                <input 
                    type="checkbox" 
                    name="isFriendly"
                    checked={props.data.isFriendly}
                    onChange={props.handleChange}
                /> Is Friendly?
            </label>


            <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="male"
                    checked={props.data.gender === "male"}
                    onChange={props.handleChange}
                /> Male
            </label>

            <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="female"
                    checked={props.data.gender === "female"}
                    onChange={props.handleChange}
                /> female
            </label>


            <h2>
                You are {props.data.gender}.
            </h2>
            
            <label> Favorite Color:
                <select 
                    value={props.data.favColor}
                    onChange={props.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                </select>
            </label>
        </form>
      );
}

export default FormComponent