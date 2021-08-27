class Ui{
    constructor(){
        this.location=document.getElementById('w-location');
        this.description=document.getElementById('w-desc');
        this.string=document.getElementById('w-string');
        this.icon=document.getElementById('w-icon');
        // neeche ke contents
        this.humidity=document.getElementById('w-humidity');
        this.dewpoint=document.getElementById('w-dewpoint');
        this.feellike=document.getElementById('w-feels-like');
        this.wind=document.getElementById('w-wind');
        this.city=document.getElementById('city');
       

    }
    showdetails(result){
        this.location.textContent= result.name;
        this.description.textContent=result.weather.description;
        this.string.textContent=result.main.temp;
        this.icon.setAttribute('src',`${result.weather.icon}`);
        this.humidity.textContent=`humidity:${result.main.humidity}`;
        this.dewpoint.textContent=`pressure: ${result.main.pressure}`;
        this.feellike.textContent=`feels-like:${result.main.feels_like}`;
        this.wind.textContent=`wind Speed:${result.wind.speed}`
    }
    getCity(){
        
return this.city.value;
    }

}