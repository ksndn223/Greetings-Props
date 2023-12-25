const MyCard = () => {
    return ( 
        <div className="col-sm-5" >
            <div className="card text-green bg-primary" >
                <div className="card-body">
                    <h4 className="card-title">The Card of Cards</h4>
                    <p className="card-text">Joker</p>
                </div>
            </div>
           
         <div className="col-sm-12" >
         <div className="card text-green bg-primary" >
             <div className="card-body">
                 <h4 className="card-title"> Next Card of Cards</h4>
                 <p className="card-text">King</p>
             </div>
         </div>
         </div>
     </div>
     );
}

export default MyCard;
