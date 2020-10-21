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
            review_user_profile:"Unknown"

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const first_name = localStorage.getItem('firstName')
        const user_id = localStorage.getItem('user_id')
        const store_num=localStorage.getItem('store_id')

this.setState({
    User_id:user_id,
    Store_id:store_num,
    review_user_profile:first_name,
})
        
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
            // review_user_profile:
        }), ()=>{
            // console.log(this.state);
             this.props.onReviewCreate(this.state);

    });
}

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='formReview'> 
                <input className='user_id_res' type="text" name='Userid' placeholder='User id' id='User_id'/>
                <input className='store_id_res' type="text" name='Storeid' placeholder='store id' id='Store_id'/>
                <input className='store_location_id_res' type="text" name='search' placeholder='location' value='Amman,Jordan' id='Store_location'/>
                <input className='store_image_id_res' type="text" name='search' placeholder='pic' id='Store_pic' value='No Image'/>
                <input type="text" name='search' placeholder='ADD Your Comment' id='Comment'/>
                <input className='rate_id_res' type="text" name='search' placeholder='rate' id='Review_rate'/>
                <button>Post Review</button>
            </form>
        )
    }
}