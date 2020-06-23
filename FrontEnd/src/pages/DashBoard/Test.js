Axios.post('http://localhost:8092/flightAdmin',{
            
                airline:"Delta",
                aircraft:"A3125",
                from:"Tokyo",
                to:"Amsterdam",
                date:"2020-06-25",
                fare:400,
                totalSeats:100,
                reservedSeats:25,
                availableSeats:75

            
            
            }).then(res => {
                    console.log(res.data);
                    
                })
        .catch(error =>{
            console.log(error)
            alert("Something wrong in post");
        
        })