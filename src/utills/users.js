export function setParkName() {
  let idtoPass = null;
  let dataOfParking = localStorage.getItem("dataOfParking");
  let parkingArray = JSON.parse(dataOfParking).filter(
    (element) => !element.taken
  );
  if (parkingArray.length > 0) {
    return parkingArray[0].name;
  } else {
    return null;
  }
}
export function setParkId() {
  let idtoPass = null;
  let dataOfParking = localStorage.getItem("dataOfParking");
  let parkingArray = JSON.parse(dataOfParking).filter(
    (element) => !element.taken
  );
  if (parkingArray.length > 0) {
    return parkingArray[0].id;
  } else {
    return null;
  }
}
