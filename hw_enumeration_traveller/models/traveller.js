const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map( journey => journey.startLocation );
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map( journey => journey.endLocation );
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map( journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter( journey => journey.transport === transport );
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance );
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const operator = (total, journey) => total + journey.distance;
  return this.journeys.reduce(operator , 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // const result = new Set([this.journeys.map(item => item.transport)]);

  // Ask why Set wasn't getting the unique elements only, does it work only with numbers?

  const newArray = []
  const array = this.getModesOfTransport()

  array.forEach((item) => {
    if (!newArray.includes(item)) {
      newArray.push(item)
    }
  });

  return newArray

};


module.exports = Traveller;
