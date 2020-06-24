import React ,{Component}from 'react';
import  SearchTicketStyle from '../styles/SearchPageStyle.module.css'
import Axios from 'axios';



class SearchFlight extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleBookTicket = this.handleBookTicket.bind(this);
        this.state = {
            from:'',
            to:'',
            depart:'',
            classType:'Economy',
            adult: 1,
            child:1,
            isSelected: false,
            
            //  username : this.props.username
        }
    }
    changeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    AdultCountDecrement= (event) =>{
        this.setState({
            adult : this.state.adult - 1
        });
        console.log(this.state.adult);
    }


    AdultCountIncrement= (event) =>{
        this.setState({
            adult : this.state.adult + 1
        });
        
    }

    ChildCountDecrement= (event) =>{
        this.setState({
            child : this.state.child - 1
        });
        console.log(this.state.adult);
    }

    ChildCountIncrement= (event) =>{
        this.setState({
            child : this.state.child + 1
        });
        
    }
    

    handleBookTicket = (index,flights,ticketCount,props)=>{
        console.log(index);
        console.log(flights);
        console.log(ticketCount * flights.fare);
        console.log("In Book Flight--->"+this.state.username);
        console.log("Before sending :" + this.state.isSelected);
        console.log("Object=====>",flights);
        console.log("Flight id:" + flights.aircraftCode);
        // const user = this.state.username;
       console.log("After changing before :" +! this.state.isSelected);
       const {username} = this.props
       console.log("In handle book ==>>>"+username);
       console.log("In handle book ==>>> aircraftCode"+flights.aircraftCode);
       console.log("In handle book ==>>> ticketCount"+ticketCount);
       console.log("In handle book ==>>>total fare"+ticketCount * flights.fare);
       console.log("In handle book ==>>>selected"+!this.state.selected);
       this.setState({
           isSelected:!this.state.isSelected
       })
       console.log("In handle book ==>>>selected"+!this.state.selected);
        this.props.history.push({
            pathname:"/bookedFlight",
            state : { 
                        //airline : flights.airline,
                      aircraft : flights.aircraftCode,
                      //from: flights.from,
                    //   to: flights.to,
                    //   date:flights.date,
                      ticketCount:ticketCount,
                    //   fare : flights.fare,
                      totalfare: ticketCount * flights.fare,
                      selected : !this.state.isSelected,
                    //   id:flights.aircraftCode,
                       username:username
                    },
            
        });
        
        
    }

    handleSubmit = (event)=>{
        console.log("Form Submitted");
        event.preventDefault();
        // alert(`${this.state.from} ${this.state.to} ${this.state.depart} ${this.state.classType} ${this.state.adult} ${this.state.child}`)
        const ticketCount = this.state.adult + this.state.child;
        console.log(ticketCount);
        if(ticketCount >6){
            return(
                alert(this.state.username + "ticketCount exceeds 6 members")
                
            )
        }
    
            Axios.get('http://localhost:8092/searchFlightInDB',{
                params:{
                   from: this.state.from,
                   to: this.state.to,
                   date:this.state.depart,
                   classType:this.state.classType,
                   adult:this.state.adult,
                   child:this.state.child,
                   
                },
                headers: {
                    'Access-Control-Allow-Origin': true,
                    "Content-Type": "application/json"
                    
                }
            }).then(res => {
                console.log(res.data); 
                const flights = res.data;
                
                const flight = flights.map((flights,index) =>(
                    <div  key = {index} className = {SearchTicketStyle.flightBack}>
                        <div>
                            <h4>airline:  {flights.airline}   aircraft : {flights.aircraftCode}</h4>
                            <h4>from : {flights.from} </h4>
                            <h4>to : {flights.to} </h4>
                            <h4>Fare : {flights.fare}</h4>
                        </div>
                        {/* <button  onClick = {()=>this.handleBookTicket(index , flights , ticketCount ,this.props)}>Book Ticket</button> */}
                        <button  onClick = {()=>this.props._onButtonClick(!this.state.isSelected,flights,ticketCount,ticketCount * flights.fare)}>Book Ticket</button>
                    </div>
                ))
                this.setState({
                    flight
                })
                
                
            }).catch(function (error){
                console.log(error);
            });
            
            // event.preventDefault();
    }
    
    render(){
        
        const {username} = this.props
        console.log("-->Inside Search Flight"+username);
        return(
               <div >         
                <div  className = {SearchTicketStyle.background}>
                    <div className={SearchTicketStyle.QueryContainer}>
                        <form onSubmit={this.handleSubmit} className={SearchTicketStyle.formContainer} >
                            <div className= {SearchTicketStyle.from}>
                                <h3>From</h3>
                                <input className={SearchTicketStyle.inputCss} placeholder = "Chennai"type = "text" name = "from" onChange = {this.changeHandler}/>
                            </div>
                            <div className={SearchTicketStyle.to}>
                                <h3>To</h3>
                                <input type = "text" name = "to" placeholder = "Bangalore" onChange = {this.changeHandler}/>
                            </div>
                            <div className = {SearchTicketStyle.foot}>
                                <div>
                                    <div className={SearchTicketStyle.depart}>
                                        <h3>Depart</h3>
                                        <input type = "date" name = "depart" onChange = {this.changeHandler}/>
                                        {/* <input class="date" id="datepicker2" name="Text" type="text" value="mm/dd/yyyy" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required=""></input> */}
                                    </div>
                                    <div className={SearchTicketStyle.classTypeCss}>
                                        <h3>Class</h3>
                                        <select value = {this.state.classType} name = "class" onChange = {this.changeHandler}>
                                            <option value ="Economy" >Economy</option>
                                            <option value ="Premium Economy">Premium Economy</option>
                                            <option value = "Business">Business</option>
                                            <option value ="First class">First class</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className={SearchTicketStyle.adult}>
                                        <h3>Adult(12+)</h3>
                                        <button className={SearchTicketStyle.decre} type = "button"onClick = {this.AdultCountDecrement}>-</button>
                                        <input  className={SearchTicketStyle.memb} type= "text" value = {this.state.adult} name = "adult"  />
                                        <button  className={SearchTicketStyle.incre} type = "button" onClick = {this.AdultCountIncrement}>+</button>
                                    </div>
                                    
                                    <div className={SearchTicketStyle.child}>
                                        <h3>Child(2-11 )</h3>
                                        <button  className={SearchTicketStyle.decre} type = "button" onClick = {this.ChildCountDecrement}>-</button>
                                        <input  className={SearchTicketStyle.memb}  type= "text" value = {this.state.child} name = "child" />
                                        <button  className={SearchTicketStyle.incre} type = "button" onClick = {this.ChildCountIncrement}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="search">
                                <button type="submit">Search Flights</button>
                            </div>
                        </form>
                    </div>
                </div>
                
              <div> 
                  {/* <h1>Flight will come here</h1>  */}
                    {this.state.flight}
               </div> 
            </div>
        );
    }
}
export default SearchFlight;