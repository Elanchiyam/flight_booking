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
            class:'Economy',
            adult: 1,
            child:1,
            isSelected: false
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
    

    handleBookTicket = (index,flights,count)=>{
        console.log(index);
        console.log(flights);
        console.log(count * flights.fare);
        console.log("Before sending :" + this.state.isSelected);
        console.log("Flight id:" + flights.id);
       // console.log("After changing before :" + this.state.isSelected);
        this.props.history.push({
            pathname:"/bookedFlight",
            state : { airline : flights.airline,
                      aircraft : flights.aircraft,
                      from: flights.from,
                      to: flights.to,
                      date:flights.date,
                      count:count,
                      fare : flights.fare,
                      totalfare: count * flights.fare,
                      selected : !this.state.isSelected,
                      id:flights.id
                    },
            
        });
        
    }

    handleSubmit = (event)=>{
        console.log("Form Submitted");
        event.preventDefault();
        // alert(`${this.state.from} ${this.state.to} ${this.state.depart} ${this.state.class} ${this.state.adult} ${this.state.child}`)
        const count = this.state.adult + this.state.child;
        console.log(count);
        if(count >6){
            return(
                alert("Count exceeds 6 members")
                
            )
        }
    
            Axios.get('http://localhost:8092/flights/searchFlight',{
                params:{
                   from: this.state.from,
                   to: this.state.to,
                   date:this.state.depart,
                   class:this.state.class,
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
                        <h1>airline:  {flights.airline}   aircraft : {flights.aircraft}</h1>
                        <h2>from : {flights.from} </h2>
                        <h2>to : {flights.to} </h2>
                        <h3>Fare : {flights.fare}</h3>
                        <button  onClick = {()=>this.handleBookTicket(index , flights , count)}>Book Ticket</button>
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
        return(
            <div >
                <div  className = {SearchTicketStyle.background}>
                    <div className={SearchTicketStyle.Query_container}>
                        <form onSubmit={this.handleSubmit} >
                            <div className= {SearchTicketStyle.from}>
                                <h3>From</h3>
                                <input type = "text" name = "from" onChange = {this.changeHandler}/>
                            </div>
                            <div className={SearchTicketStyle.to}>
                                <h3>To</h3>
                                <input type = "text" name = "to" onChange = {this.changeHandler}/>
                            </div>
                            <div className={SearchTicketStyle.depart}>
                                <h3>Depart</h3>
                                <input type = "date" name = "depart" onChange = {this.changeHandler}/>
                                {/* <input class="date" id="datepicker2" name="Text" type="text" value="mm/dd/yyyy" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required=""></input> */}
                            </div>
                            <div className={SearchTicketStyle.depart}>
                                <h3>Class</h3>
                                <select value = {this.state.class} name = "class" onChange = {this.changeHandler}>
                                    <option value ="Economy" >Economy</option>
                                    <option value ="Premium Economy">Premium Economy</option>
                                    <option value = "Business">Business</option>
                                    <option value ="First class">First class</option>
                                </select>
                            </div>
                            <div className={SearchTicketStyle.adult}>
                                <h3>Adult:(12+ yrs)</h3>
                                <button className={SearchTicketStyle.decre} type = "button"onClick = {this.AdultCountDecrement}>-</button>
                                <input  className={SearchTicketStyle.memb} type= "text" value = {this.state.adult} name = "adult"  />
                                <button  className={SearchTicketStyle.incre} type = "button" onClick = {this.AdultCountIncrement}>+</button>
                            </div>
                            
                            <div className="adult">
                                <h3>Child:(2-11 yrs)</h3>
                                <button  className={SearchTicketStyle.decre} type = "button" onClick = {this.ChildCountDecrement}>-</button>
                                <input  className={SearchTicketStyle.memb}  type= "text" value = {this.state.child} name = "child" />
                                <button  className={SearchTicketStyle.incre} type = "button" onClick = {this.ChildCountIncrement}>+</button>
                            </div>
                            <div className="search">
                                <button type="submit">Search Flights</button>
                            </div>
                        </form>
                    </div>
                </div>
                
              <div> 
                  <h1>Flight will come here</h1> 
                    {this.state.flight}
               </div> 
            </div>
        );
    }
}
export default SearchFlight;