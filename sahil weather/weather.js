class Weather{
    constructor(){
        
        this.key='cf923f90b2ded134691e2d3a9f9b42ee';
    }
    async gettemp(city){
        const tempresponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`);
        const result = await tempresponse.json();
        return result;
    }
}