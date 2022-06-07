const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["NASA", "SpaceX"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true,
      customers: ["NASA", "SpaceX"],
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
