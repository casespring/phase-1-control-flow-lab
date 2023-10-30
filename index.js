function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!';
  }
  else if (ride >= 400 && ride <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityChecked = city === "NYC" ? ('Ok, sounds good.') : ("No go.");
  return cityChecked
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous' :
      return "Thank you so much.";
      break;
    case 'not as generous' :;
      return 'Thank you.'
      break;
    default:
      return 'Bye.';
  }
}
