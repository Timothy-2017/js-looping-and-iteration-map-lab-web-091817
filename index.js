// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {return name.toLowerCase()});
}

function nameToAttributes(drivers) {
  const nameAttributesArr = []
  drivers.map(function (name) {
      nameArr = name.split(" ");
      nameObj = {};
      nameObj["firstName"] = nameArr[0];
      nameObj["lastName"] = nameArr[1];
      nameAttributesArr.push(nameObj);
    }
  );
  return nameAttributesArr;
}

function attributesToPhrase(drivers) {
  const phraseArr = [];
  drivers.map(function(driver) {
      phraseArr.push(`${driver['name']} is from ${driver['hometown']}`);
    }
  );
  return phraseArr;
}
