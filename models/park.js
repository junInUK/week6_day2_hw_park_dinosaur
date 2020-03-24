const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}
  

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function(name){
    const indexOfDinosaur = this.dinosaurs.indexOf(name);
    this.dinosaurs.splice(indexOfDinosaur,1);
}

Park.prototype.findMostPopularDinosaur = function(){
    let mostPopularDinosaur = this.dinosaurs[0];
    for(let dinosaur of this.dinosaurs){
        if(dinosaur.guestsAttractedPerDay>mostPopularDinosaur.guestsAttractedPerDay){
            mostPopularDinosaur = dinosaur;
            break;
        }
    }
    return mostPopularDinosaur;
}

Park.prototype.findDinosaursBySpecies = function(species){
    let findDinosaurs = [];
    for(let dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            findDinosaurs.push(dinosaur);
        }
    }
    return findDinosaurs;
}

Park.prototype.totalVisitors = function(){
    let totalVistors = 0;
    for(let dinosaur of this.dinosaurs){
        totalVistors += dinosaur.guestsAttractedPerDay;
    }
    return totalVistors;
}

Park.prototype.isLeapYear = function(year){
    if((year%4==0 && year%100!=0)||(year%400==0)){
        return true;
    }
    return false;
}

Park.prototype.totalVisitorsByYear = function(year){
    if(this.isLeapYear(year)){
        return this.totalVisitors()*366;
    }else{
        return this.totalVisitors()*365;
    }
}

Park.prototype.totalRevenueByYear = function(year){
    return this.totalVisitorsByYear(year)*this.ticketPrice;
}

module.exports = Park;