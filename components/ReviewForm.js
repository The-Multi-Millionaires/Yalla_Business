import React from 'react'
// let userid=window.localStorage.getItem('name')
// console.log(userid)

// function componentDidMount() {
//     const data = localStorage.getItem('name')
//     console.log("#$%^&*^#@#%$^",data);
//     if(data) {
//       //here you can set your state if it is necessary
//     }
//   }
export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            User_id: '', 
            Store_id: '', 
            Store_location: '', 
            Store_pic: '', 
            Comment:'', 
            Review_rate: 1,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const first_name = localStorage.getItem('firstName')
        const user_id = localStorage.getItem('user_id')
this.state.User_id=user_id;
        
// this.state.



    // let userid=window.localStorage.getItem('name')
        // console.log(data,"Is the best ever ");
        if(first_name) {
          //here you can set your state if it is necessary
        }
      }



    


    handleSubmit(event) {

        event.preventDefault();

        let userid = event.target.User_id.value;
        let storeid = event.target.Store_id.value;
        let location = event.target.Store_location.value;
        let pic = event.target.Store_pic.value;
        let comment = event.target.Comment.value;
        let rate = event.target.Review_rate.value;
        // console.log(this.state.User_id)
        this.setState((state, props) => ({
            User_id: 'dana', 
            Store_id: 'Mac', 
            Store_location: location, 
            Store_pic: pic, 
            Comment: comment, 
            Review_rate: rate,
        }), ()=>{
            // console.log(this.state);
             this.props.onReviewCreate(this.state);

    });
}

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='formReview'> 
                <input type="text" name='Userid' placeholder='User id' id='User_id'/>
                <input type="text" name='Storeid' placeholder='store id' id='Store_id'/>
                <input type="text" name='search' placeholder='location' id='Store_location'/>
                <input type="text" name='search' placeholder='pic' id='Store_pic'/>
                <input type="text" name='search' placeholder='comment' id='Comment'/>
                <input type="text" name='search' placeholder='rate' id='Review_rate'/>
                <button>ok</button>
            </form>
        )
    }
}